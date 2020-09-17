/* eslint-disable no-undef */
import reducer from '../client/reducers/outputReducer';

describe('Output Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      urlList: [
        {
          username: 'Lucy', url: 'www.yahoo.com', status: 400, url_id: 80,
        },
        {
          username: 'Chris', url: 'www.coinbase.com', status: 400, url_id: 81,
        },
        {
          username: 'Joon', url: 'https://pokeapi.co/api/v2/pokemon/ditto', status: 400, url_id: 90,
        },
      ],
      newEndpoint: '',
      status: '',
      currentUser: '',
    };
  });

  describe('default state', () => {
    it('should return original state when given an undefined input', () => {
      expect(reducer(state, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'not an action type' };
      expect(reducer(state, action)).toBe(state);
    });
  });

  describe('FINISHED_URL_ADD', () => {
    const action = {
      type: 'FINISHED_URL_ADD',
      payload: {
        username: 'Bob',
        url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        url_id: '69',
        status: '418',
      },
    };

    it('adds URL object to state.urlList', () => {
      const { urlList } = reducer(state, action);

      expect(urlList[3]).toEqual({
        username: 'Bob',
        url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        url_id: '69',
        status: '418',
      });
    });

    it('updates status', () => {
      const { status } = reducer(state, action);
      expect(status).toEqual('418');
    });
  });

  describe('CHECK STATUS', () => {
    const action = {
      type: 'CHECK_NOW',
      payload: {
        username: 'Joon',
        url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        status: 418,
        url_id: 90,
      },
    };

    it('updates status in state.urlList', () => {
      const { urlList } = reducer(state, action);
      expect(urlList[2]).toEqual({
        username: 'Joon',
        url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        status: 418,
        url_id: 90,
      });
    });
  });
});
