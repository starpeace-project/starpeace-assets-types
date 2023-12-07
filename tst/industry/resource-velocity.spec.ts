import { assert, test } from 'vitest';

import { ResourceVelocity } from '../../src/index.js';

const JSON_NO_MIN = {
  resourceId: 'id',
  maxVelocity: 1234,
};
const JSON_UNDEFINED_MIN = {
  resourceId: 'id',
  maxVelocity: 1234,
  minVelocity: undefined
};

test('ResourceVelocity #fromJson should be able to create from json', async () => {
  const quantity = ResourceVelocity.fromJson(JSON_NO_MIN);
  assert.isOk(quantity);
  assert.strictEqual(quantity.resourceId, JSON_NO_MIN.resourceId);
  assert.isUndefined(quantity.minVelocity);
  assert.strictEqual(quantity.maxVelocity, JSON_NO_MIN.maxVelocity);
  assert.isOk(quantity.isValid());
  assert.deepStrictEqual(quantity.toJson(), JSON_UNDEFINED_MIN);
});

test('ResourceVelocity #fromJson should be able to create from json with undefined minimum', async () => {
  const quantity = ResourceVelocity.fromJson(JSON_UNDEFINED_MIN);
  assert.isOk(quantity);
  assert.strictEqual(quantity.resourceId, JSON_UNDEFINED_MIN.resourceId);
  assert.isUndefined(quantity.minVelocity);
  assert.strictEqual(quantity.maxVelocity, JSON_UNDEFINED_MIN.maxVelocity);
  assert.isOk(quantity.isValid());
  assert.deepStrictEqual(quantity.toJson(), JSON_UNDEFINED_MIN);
});

test('ResourceVelocity #fromJson should be able to create from json with minimum', async () => {
  const JSON = {
    resourceId: 'id',
    minVelocity: 1,
    maxVelocity: 1234
  };

  const quantity = ResourceVelocity.fromJson(JSON);
  assert.isOk(quantity);
  assert.strictEqual(quantity.resourceId, JSON.resourceId);
  assert.strictEqual(quantity.minVelocity, JSON.minVelocity);
  assert.strictEqual(quantity.maxVelocity, JSON.maxVelocity);
  assert.isOk(quantity.isValid());
  assert.deepStrictEqual(quantity.toJson(), JSON);
});
