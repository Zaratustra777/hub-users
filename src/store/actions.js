import * as types from "./actionTypes";

export function fetchBasicSuccess(payload) {
  return { type: types.FETCH_BASIC_SUCCESS, payload };
}

export function fetchStarsSuccess(payload) {
  return { type: types.FETCH_STARS_SUCCESS, payload };
}

export function fetch() {
  return { type: types.FETCH};
}
