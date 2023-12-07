import { assert, test } from 'vitest';

import { ResourceVelocityWeighted } from '../../src/index.js';


const JSON_NO_MIN = {
  resourceId: 'id',
  maxVelocity: 1234,
  weightEfficiency: 1.234,
  weightQuality: 0.1234
};
const JSON_UNDEFINED_MIN = {
  resourceId: 'id',
  maxVelocity: 1234,
  minVelocity: undefined,
  weightEfficiency: 1.234,
  weightQuality: 0.1234
};

test('ResourceVelocityWeighted #fromJson should be able to create from json', async () => {
  const quantity = ResourceVelocityWeighted.fromJson(JSON_NO_MIN);
  assert.isOk(quantity);
  assert.strictEqual(quantity.resourceId, JSON_NO_MIN.resourceId);
  assert.isUndefined(quantity.minVelocity);
  assert.strictEqual(quantity.maxVelocity, JSON_NO_MIN.maxVelocity);
  assert.strictEqual(quantity.weightEfficiency, JSON_NO_MIN.weightEfficiency);
  assert.strictEqual(quantity.weightQuality, JSON_NO_MIN.weightQuality);
  assert.isOk(quantity.isValid());
  assert.deepStrictEqual(quantity.toJson(), JSON_UNDEFINED_MIN);
});

test('ResourceVelocityWeighted #fromJson should be able to create from json with undefined min', async () => {
  const quantity = ResourceVelocityWeighted.fromJson(JSON_UNDEFINED_MIN);
  assert.isOk(quantity);
  assert.strictEqual(quantity.resourceId, JSON_UNDEFINED_MIN.resourceId);
  assert.isUndefined(quantity.minVelocity);
  assert.strictEqual(quantity.maxVelocity, JSON_UNDEFINED_MIN.maxVelocity);
  assert.strictEqual(quantity.weightEfficiency, JSON_UNDEFINED_MIN.weightEfficiency);
  assert.strictEqual(quantity.weightQuality, JSON_UNDEFINED_MIN.weightQuality);
  assert.isOk(quantity.isValid());
  assert.deepStrictEqual(quantity.toJson(), JSON_UNDEFINED_MIN);
});

test('ResourceVelocityWeighted #fromJson should be able to create from json with minimum', async () => {
  const JSON = {
    resourceId: 'id',
    minVelocity: 1,
    maxVelocity: 1234,
    weightEfficiency: 1.234,
    weightQuality: 0.1234
  };

  const quantity = ResourceVelocityWeighted.fromJson(JSON);
  assert.isOk(quantity);
  assert.strictEqual(quantity.resourceId, JSON.resourceId);
  assert.strictEqual(quantity.minVelocity, JSON.minVelocity);
  assert.strictEqual(quantity.maxVelocity, JSON.maxVelocity);
  assert.strictEqual(quantity.weightEfficiency, JSON.weightEfficiency);
  assert.strictEqual(quantity.weightQuality, JSON.weightQuality);
  assert.isOk(quantity.isValid());
  assert.deepStrictEqual(quantity.toJson(), JSON);
});
