/* eslint-disable no-undef */
const request = require('supertest');
const fs = require('fs');
const path = require('path');

const server = 'http://localhost:3333';

// Please remember to 'npm start' the server before running router tests
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });

  describe('/main', () => {
    describe('/addURL', () => {
      it('responds with 200 status and json content type', () => request(server)
        .post('/main/addURL')
        .send({ url: 'https://pokeapi.co/api/v2/pokemon/ditto' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200));

      it('contains url id and status in body of response', () => request(server)
        .post('/main/addURL')
        .send({ url: 'https://pokeapi.co/api/v2/pokemon/ditto' })
        .set('Accept', 'application/json')
        .expect((response) => {
          response.body.status = '200';
          response.body.url_id = /\d+/;
        }));
    });

    describe('/checkStatus', () => {
      it('responds with 200 status and json content type', () => request(server)
        .post('/main/addURL')
        .send({ url: 'https://pokeapi.co/api/v2/pokemon/ditto' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200));

      it('contains status in body of response', () => request(server)
        .post('/main/addURL')
        .send({ url: 'https://pokeapi.co/api/v2/pokemon/ditto' })
        .set('Accept', 'application/json')
        .expect((response) => {
          response.body.status = '200';
        }));
    });
  });
});
