import * as types from "./actionTypes";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";

import { client } from "../index";
import { GET_BASIC_USERS, GET_USER_REPOSITORY_STARS } from "../graph/queries";

const initialState = {
  users: []
};

export default function(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_BASIC_SUCCESS:
      return { ...state, ...payload };
    case types.FETCH_STARS_SUCCESS:
      const { login, stars } = payload;

      return {
        ...state,
        users: state.users.map(user => {
          if (user.login !== login) {
            return user;
          }
          return {
            ...user,
            stars
          };
        })
      };
    default:
      return state;
  }
}

function* getRepositoriesStars(login) {
  let hasNext = true;
  let from = null;
  let stars = 0;

  while (hasNext) {
    const {
      pageInfo: { endCursor, hasNextPage },
      nodes
    } = yield client
      .query({ query: GET_USER_REPOSITORY_STARS(login, from) })
      .then(result => result.data.user.repositories);

    stars += nodes.reduce((prev, curr) => prev + curr.stargazers.totalCount, 0);
    hasNext = hasNextPage;
    from = endCursor;
  }
  return stars;
}

function* fetch() {
  try {
    const users = yield client
      .query({
        query: GET_BASIC_USERS()
      })
      .then(result => result.data.search.nodes);
    yield put(actions.fetchBasicSuccess({ users }));

    for (let user of users) {
      const { login } = user;
      const stars = yield getRepositoriesStars(login);
      yield put(actions.fetchStarsSuccess({ login, stars }));
    }
  } catch (e) {
    alert(e);
  }
}

export function* sagas() {
  yield takeEvery(types.FETCH, fetch);
}
