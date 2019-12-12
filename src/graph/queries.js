import { gql } from "apollo-boost";

export const GET_BASIC_USERS = (first = 10, sity = "Odessa") => {
  return gql`
    {
      search(first: ${first}, type: USER, query: "type:user location:${sity}") {
        nodes {
          ... on User {
            name
            login
            avatarUrl(size: 64)
            bio
            email
            location
            url
          }
        }
      }
    }
  `;
};

export const GET_USER_REPOSITORY_STARS = (login, after='') => {
  const afterParam =  after ? `after:"${after}"`: ''; 
  return gql`
    {
      user(login: "${login}") {
        repositories(first: 100, ${afterParam}) {
            pageInfo {
                endCursor
                hasNextPage
            }
            nodes {
                stargazers {
                    totalCount
                }
          }
        }
      }
    }
  `;
};
