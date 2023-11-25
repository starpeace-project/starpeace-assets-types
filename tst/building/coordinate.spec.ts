import { assert, test } from 'vitest';

import { Coordinate } from '../../src/index.js';

test('Coordinate', () => {
  test('#fromJson', () => {
    test('should be able to create from json', async () => {
      const JSON = {
        x: 73,
        y: 52
      };

      const coordinate = Coordinate.fromJson(JSON);
      assert.isOk(coordinate);
      assert.strictEqual(coordinate.x, JSON.x);
      assert.strictEqual(coordinate.y, JSON.y);
      assert.isOk(coordinate.isValid());
      assert.deepStrictEqual(coordinate.toJson(), JSON);
    });
  });
});
