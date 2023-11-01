import { assert } from "chai";

import { Coordinate } from '../../src/index.js';

describe('Coordinate', () => {
  describe('#fromJson', () => {
    it('should be able to create from json', async () => {
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
