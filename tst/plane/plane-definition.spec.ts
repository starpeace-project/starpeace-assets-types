import { assert, test } from 'vitest';

import { PlaneDefinition } from '../../src/index.js';

test('PlaneDefinition', () => {
  test('#fromJson', () => {
    test('should be able to create from json', async () => {
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
