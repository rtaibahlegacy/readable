import {GET_CATEGORIES} from '../actions';
import * as ReadableAPI from '../utils/api';

const intialCategoriesState = [];

function Categories(state = intialCategoriesState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...state, ...action.data];
    default:
      return state;
  }
}

export default Categories;
