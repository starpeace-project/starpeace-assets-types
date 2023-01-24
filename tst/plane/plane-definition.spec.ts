import { assert } from "chai";

import { PlaneDefinition } from '../../src';

describe('PlaneDefinition', () => {
  describe('#fromJson', () => {
    it('should be able to create from json', async () => {
      const JSON = {
        id: 'id',
        image: 'image.png',
        width: 16,
        height: 16
      };

      const plane = PlaneDefinition.fromJson(JSON);
      assert.isOk(plane);
      assert.strictEqual(plane.id, JSON.id);
      assert.strictEqual(plane.image, JSON.image);
      assert.strictEqual(plane.width, JSON.width);
      assert.strictEqual(plane.height, JSON.height);
      assert.isOk(plane.isValid());
      assert.deepStrictEqual(plane.toJson(), JSON);
    });
  });
});
