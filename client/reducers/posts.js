/*
 * a reducer takes in two things - 
 * an action
 * and the current state
 * it returns a new state.  
 * it does NOT modify current state.
 */

/*
 * define initial posts state
 */
const posts = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES': {
      const { index } = action;
      
      return [
        ...state.slice(0, index),
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index + 1)
      ];
    }
    default: return state;
  }
};

export default posts;
