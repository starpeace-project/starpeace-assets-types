import { assert, test } from 'vitest';

import { ResourceVelocityWeighted } from '../../src/index.js';

test('ResourceVelocityWeighted', () => {
  test('#fromJson', () => {
    test('should be able to create from json', async () => {
      const JSON = {
        resourceId: 'id',
        maxVelocity: 1234,
        weightEfficiency: 1.234,
        weightQuality: 0.1234
      };

      const quantity = ResourceVelocityWeighted.fromJson(JSON);
      assert.isOk(quantity);
      assert.strictEqual(quantity.resourceId, JSON.resourceId);
      assert.isUndefined(quantity.minVelocity);
      assert.strictEqual(quantity.maxVelocity, JSON.maxVelocity);
      assert.strictEqual(quantity.weightEfficiency, JSON.weightEfficiency);
      assert.strictEqual(quantity.weightQuality, JSON.weightQuality);
      assert.isOk(quantity.isValid());
      assert.deepStrictEqual(quantity.toJson(), JSON);
    });

    test('should be able to create from json with minimum', async () => {
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
  });
});
