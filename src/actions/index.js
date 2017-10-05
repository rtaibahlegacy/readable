import axios from 'axios';

const url = 'http://localhost:5001';
const token = 'code';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS = 'GET_POSTS';
export const FILTER_BY = 'FILTER_BY';
export const SUBMIT_VOTE = 'SUBMIT_VOTE';

const headers = {
  Authorization: token,
};

// Posts page actions
export function getCategories() {
  const request = axios({
    method: 'get',
    url: `${url}/categories`,
    headers,
  });
  return {type: GET_CATEGORIES, payload: request};
}

export function getPosts() {
  const request = axios({
    method: 'get',
    url: `${url}/posts`,
    headers,
  });
  return {type: GET_POSTS, payload: request};
}

export function filterBy(filter) {
  return {
    type: FILTER_BY,
    payload: filter.option,
  };
}

export function submitVote(vote) {
  const request = axios({
    method: 'post',
    url: `${url}/posts/${vote.postId}`,
    headers,
    data: {
      option: vote.option,
    },
  });
  return {
    type: SUBMIT_VOTE,
    payload: {
      id: vote.postId,
      option: vote.option,
    },
  };
}
