import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  HOME_GET_SOGGETTI_BEGIN,
  HOME_GET_SOGGETTI_SUCCESS,
  HOME_GET_SOGGETTI_FAILURE,
  HOME_GET_SOGGETTI_DISMISS_ERROR,
} from '../../../../src/features/home/redux/constants';

import {
  getSoggetti,
  dismissGetSoggettiError,
  reducer,
} from '../../../../src/features/home/redux/getSoggetti';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/getSoggetti', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getSoggetti succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getSoggetti())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_SOGGETTI_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_SOGGETTI_SUCCESS);
      });
  });

  it('dispatches failure action when getSoggetti fails', () => {
    const store = mockStore({});

    return store.dispatch(getSoggetti({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_SOGGETTI_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_SOGGETTI_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissGetSoggettiError', () => {
    const expectedAction = {
      type: HOME_GET_SOGGETTI_DISMISS_ERROR,
    };
    expect(dismissGetSoggettiError()).toEqual(expectedAction);
  });

  it('handles action type HOME_GET_SOGGETTI_BEGIN correctly', () => {
    const prevState = { getSoggettiPending: false };
    const state = reducer(
      prevState,
      { type: HOME_GET_SOGGETTI_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getSoggettiPending).toBe(true);
  });

  it('handles action type HOME_GET_SOGGETTI_SUCCESS correctly', () => {
    const prevState = { getSoggettiPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_SOGGETTI_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getSoggettiPending).toBe(false);
  });

  it('handles action type HOME_GET_SOGGETTI_FAILURE correctly', () => {
    const prevState = { getSoggettiPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_SOGGETTI_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getSoggettiPending).toBe(false);
    expect(state.getSoggettiError).toEqual(expect.anything());
  });

  it('handles action type HOME_GET_SOGGETTI_DISMISS_ERROR correctly', () => {
    const prevState = { getSoggettiError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_GET_SOGGETTI_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getSoggettiError).toBe(null);
  });
});

