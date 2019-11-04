import initialState from './initialState';
import { reducer as getSoggettiReducer } from './getSoggetti';
import { reducer as getAnnateReducer } from './getAnnate';

const reducers = [
  getSoggettiReducer,
  getAnnateReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
