import { assert, test } from 'vitest';

import { ImageEffect } from '../../src/index.js';

test('ImageEffect', () => {
  test('#fromJson', () => {
    test('should be able to create from json', async () => {
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
