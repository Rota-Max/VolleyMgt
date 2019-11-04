import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  HOME_GET_ANNATE_BEGIN,
  HOME_GET_ANNATE_SUCCESS,
  HOME_GET_ANNATE_FAILURE,
  HOME_GET_ANNATE_DISMISS_ERROR,
} from '../../../../src/features/home/redux/constants';

import {
  getAnnate,
  dismissGetAnnateError,
  reducer,
} from '../../../../src/features/home/redux/getAnnate';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/getAnnate', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getAnnate succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getAnnate())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_ANNATE_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_ANNATE_SUCCESS);
      });
  });

  it('dispatches failure action when getAnnate fails', () => {
    const store = mockStore({});

    return store.dispatch(getAnnate({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_ANNATE_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_ANNATE_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissGetAnnateError', () => {
    const expectedAction = {
      type: HOME_GET_ANNATE_DISMISS_ERROR,
    };
    expect(dismissGetAnnateError()).toEqual(expectedAction);
  });

  it('handles action type HOME_GET_ANNATE_BEGIN correctly', () => {
    const prevState = { getAnnatePending: false };
    const state = reducer(
      prevState,
      { type: HOME_GET_ANNATE_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getAnnatePending).toBe(true);
  });

  it('handles action type HOME_GET_ANNATE_SUCCESS correctly', () => {
    const prevState = { getAnnatePending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_ANNATE_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getAnnatePending).toBe(false);
  });

  it('handles action type HOME_GET_ANNATE_FAILURE correctly', () => {
    const prevState = { getAnnatePending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_ANNATE_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getAnnatePending).toBe(false);
    expect(state.getAnnateError).toEqual(expect.anything());
  });

  it('handles action type HOME_GET_ANNATE_DISMISS_ERROR correctly', () => {
    const prevState = { getAnnateError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_GET_ANNATE_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getAnnateError).toBe(null);
  });
});

