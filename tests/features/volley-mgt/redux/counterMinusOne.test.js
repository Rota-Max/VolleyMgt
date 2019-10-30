import {
  VOLLEY_MGT_COUNTER_MINUS_ONE,
} from '../../../../src/features/volley-mgt/redux/constants';

import {
  counterMinusOne,
  reducer,
} from '../../../../src/features/volley-mgt/redux/counterMinusOne';

describe('volley-mgt/redux/counterMinusOne', () => {
  it('returns correct action by counterMinusOne', () => {
    expect(counterMinusOne()).toHaveProperty('type', VOLLEY_MGT_COUNTER_MINUS_ONE);
  });

  it('handles action type VOLLEY_MGT_COUNTER_MINUS_ONE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: VOLLEY_MGT_COUNTER_MINUS_ONE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
