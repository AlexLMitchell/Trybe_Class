const INCREMENT = 'INCREMENT'; // define a constant for increment action types
const DECREMENT = 'DECREMENT'; // define a constant for decrement action types

// define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.value;
    case DECREMENT:
      return state - action.value;
    default:
      return state;
  }
};

// define an action creator for incrementing
const incAction = () => ({
  type: INCREMENT,
  value: 1,
});

// define an action creator for decrementing
const decAction = () => ({
  type: DECREMENT,
  value: 1,
});

// define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer);
