import { CHANGE_WORD_CARDS } from './actions';
import { wordCards } from '../../constant';

const initialState = {
  cards: wordCards[1],
}

export const playZonePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WORD_CARDS:
      return {
        ...state,
        cards: action.payload,
      }
  }
  return state;
}
