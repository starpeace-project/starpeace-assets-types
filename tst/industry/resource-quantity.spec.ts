import { assert } from "chai";

import { ResourceQuantity } from '../../src';

describe('ResourceQuantity', () => {
  describe('#fromJson', () => {
    it('should be able to create from json', async () => {
      const JSON = {
        resourceId: 'id',
        maxVelocity: 1234,
        weightEfficiency: 1.234,
        weightQuality: 0.1234
      };

      const quantity = ResourceQuantity.fromJson(JSON);
      assert.isOk(quantity);
      assert.strictEqual(quantity.resourceId, JSON.resourceId);
      assert.strictEqual(quantity.maxVelocity, JSON.maxVelocity);
      assert.strictEqual(quantity.weightEfficiency, JSON.weightEfficiency);
      assert.strictEqual(quantity.weightQuality, JSON.weightQuality);
      assert.isOk(quantity.isValid());
      assert.deepStrictEqual(quantity.toJson(), JSON);
    });
  });
});
