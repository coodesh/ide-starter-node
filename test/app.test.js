import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from '../src/app.js';

test('cumprimenta pelo nome', () => {
  assert.equal(greet('Ana'), 'Olá, Ana!');
});
