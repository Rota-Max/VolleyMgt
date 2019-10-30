import {
  VOLLEY_MGT_COUNTER_PLUS_ONE,
} from '../../../../src/features/volley-mgt/redux/constants';

import {
  counterPlusOne,
  reducer,
} from '../../../../src/features/volley-mgt/redux/counterPlusOne';

describe('volley-mgt/redux/counterPlusOne', () => {
  it('returns correct action by counterPlusOne', () => {
    expect(counterPlusOne()).toHaveProperty('type', VOLLEY_MGT_COUNTER_PLUS_ONE);
  });

  it('handles action type VOLLEY_MGT_COUNTER_PLUS_ONE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: VOLLEY_MGT_COUNTER_PLUS_ONE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
