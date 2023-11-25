import { assert, test } from 'vitest';

import { ResourceVelocity } from '../../src/index.js';

test('ResourceVelocity', () => {
  test('#fromJson', () => {
    test('should be able to create from json', async () => {
      const JSON = {
        resourceId: 'id',
        maxVelocity: 1234,
      };

      const quantity = ResourceVelocity.fromJson(JSON);
      assert.isOk(quantity);
      assert.strictEqual(quantity.resourceId, JSON.resourceId);
      assert.isUndefined(quantity.minVelocity);
      assert.strictEqual(quantity.maxVelocity, JSON.maxVelocity);
      assert.isOk(quantity.isValid());
      assert.deepStrictEqual(quantity.toJson(), JSON);
    });

    test('should be able to create from json with minimum', async () => {
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
  });
});
