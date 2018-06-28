import schema from '../schemas';
import { fromJS } from 'immutable';


const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: ''
})

function data (state=initialState, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      // let results = []
      // if (action.payload.query) {
      //   const list = state.data.categories[2].playlist;
      //   results = list.filter((item) => {
      //     return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
      //   })
      // }
      // return {
      //   ...state,
      //   search: results
      // }
      return state.set('search', action.payload.query)
    }
    default:
      return state
  }
}

export default data;
