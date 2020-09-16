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
          username: 'Joon', url: 'www.facebook.com', status: 400, url_id: 90,
        },
      ],
      newEndpoint: '',
      status: '',
      currentUser: '',
    };
  });

  describe('default state', () => {
    it('should return original state when given an undefined input', () => {
      expect(reducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'not an action type' };
      expect(reducer(state, action)).toBe(state);
    });
  });

  xdescribe('ADD_URL', () => {
    const action = {
      type: 'ADD_URL',
      payload: {
        username: 'bob', url: 'https://pokeapi.co/api/v2/pokemon/ditto', status: 418, url_id: 69,
      },
    };

    it('adds a URL', () => {
      const { urlList } = reducer(state, action);
      expect(urlList[3]).toEqual({
        username: 'bob', url: 'https://pokeapi.co/api/v2/pokemon/ditto', status: 418, url_id: 69,
      });
    });

    it('updates status', () => {
      const { status } = reducer(state, action);
      expect(status).toEqual(418);
    });
  });
});
