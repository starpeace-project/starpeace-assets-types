import { assert } from "chai";

import { ImageEffect } from '../../src/index.js';

describe('ImageEffect', () => {
  describe('#fromJson', () => {
    it('should be able to create from json', async () => {
      const JSON = {
        x: 0.78125,
        y: 0.21739,
        type:"smoke.dark"
      };

      const effect = ImageEffect.fromJson(JSON);
      assert.isOk(effect);
      assert.strictEqual(effect.type, JSON.type);
      assert.strictEqual(effect.x, JSON.x);
      assert.strictEqual(effect.y, JSON.y);
      assert.isOk(effect.isValid());
      assert.deepStrictEqual(effect.toJson(), JSON);
    });
  });
});
