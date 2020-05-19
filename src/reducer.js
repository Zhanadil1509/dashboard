import {v1 as uuidv1} from 'uuid'

export const testReducer = (state, action) => {
  switch (action.type) {
    case 'test_update':
      return [
        ...state,
        {
          heading: action.card.heading,
          description: action.card.description,
          id: uuidv1()
        }
      ]
    default:
      return state
  }
}