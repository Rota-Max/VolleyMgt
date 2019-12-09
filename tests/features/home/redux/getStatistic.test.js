import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  HOME_GET_STATISTIC_BEGIN,
  HOME_GET_STATISTIC_SUCCESS,
  HOME_GET_STATISTIC_FAILURE,
  HOME_GET_STATISTIC_DISMISS_ERROR,
} from '../../../../src/features/home/redux/constants';

import {
  getStatistic,
  dismissGetStatisticError,
  reducer,
} from '../../../../src/features/home/redux/getStatistic';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/getStatistic', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getStatistic succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getStatistic())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_STATISTIC_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_STATISTIC_SUCCESS);
      });
  });

  it('dispatches failure action when getStatistic fails', () => {
    const store = mockStore({});

    return store.dispatch(getStatistic({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_STATISTIC_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_STATISTIC_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissGetStatisticError', () => {
    const expectedAction = {
      type: HOME_GET_STATISTIC_DISMISS_ERROR,
    };
    expect(dismissGetStatisticError()).toEqual(expectedAction);
  });

  it('handles action type HOME_GET_STATISTIC_BEGIN correctly', () => {
    const prevState = { getStatisticPending: false };
    const state = reducer(
      prevState,
      { type: HOME_GET_STATISTIC_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getStatisticPending).toBe(true);
  });

  it('handles action type HOME_GET_STATISTIC_SUCCESS correctly', () => {
    const prevState = { getStatisticPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_STATISTIC_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getStatisticPending).toBe(false);
  });

  it('handles action type HOME_GET_STATISTIC_FAILURE correctly', () => {
    const prevState = { getStatisticPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_STATISTIC_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getStatisticPending).toBe(false);
    expect(state.getStatisticError).toEqual(expect.anything());
  });

  it('handles action type HOME_GET_STATISTIC_DISMISS_ERROR correctly', () => {
    const prevState = { getStatisticError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_GET_STATISTIC_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getStatisticError).toBe(null);
  });
});

