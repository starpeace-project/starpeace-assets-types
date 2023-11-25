import { assert, test } from 'vitest';

import { OverlayDefinition } from '../../src/index.js';

test('OverlayDefinition', () => {
  test('#fromJson', () => {
    test('should be able to create from json', async () => {
      const JSON = {
        id: 'id',
        image: 'image.png',
        tileWidth: 16,
        tileHeight: 16
      };

      const overlay = OverlayDefinition.fromJson(JSON);
      assert.isOk(overlay);
      assert.strictEqual(overlay.id, JSON.id);
      assert.strictEqual(overlay.image, JSON.image);
      assert.strictEqual(overlay.tileWidth, JSON.tileWidth);
      assert.strictEqual(overlay.tileHeight, JSON.tileHeight);
      assert.isOk(overlay.isValid());
      assert.deepStrictEqual(overlay.toJson(), JSON);
    });
  });
});
