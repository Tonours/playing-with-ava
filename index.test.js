import test from 'ava';
import _ from 'lodash';
import {displayPlayersName, getPlayersAverageAge, players} from './index';

test.beforeEach(t => {
  t.context.players = players;
});

test('Context Data should not be empty', t => {
  t.not(t.context.players.length, 0);
});

test('Context Data should be equal to mock data', t => {
  t.deepEqual(t.context.players, [
    {name: 'joe', age: 19},
    {name: 'bob', age: 20},
    {name: 'tom', age: 21},
    {name: 'sam', age: 22},
    {name: 'tim', age: 23}
  ]);
});

test('displayPlayersName should return an array', t => {
  t.is(_.isArray(displayPlayersName(t.context.players)), true);
});

test('displayPlayersName result should be equal to this mock data', t => {
  t.deepEqual(displayPlayersName(t.context.players), [
    'joe',
    'bob',
    'tom',
    'sam',
    'tim'
  ]);
});

test('getPlayersAverageAge result should be a finite primitive value', t => {
  t.is(_.isFinite(getPlayersAverageAge(t.context.players)), true);
});

test('getPlayersAverageAge result should be equal to 21', t => {
  t.is(getPlayersAverageAge(t.context.players), 21);
});
