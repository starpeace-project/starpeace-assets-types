import { assert, test } from 'vitest';

import { ResourceType } from '../../src/index.js';

test('ResourceType', () => {
  test('#fromJson', () => {
    test('should be able to create from json', async () => {
      const JSON = {
        id: 'id',
        labelPlural: {
          DE: 'de label_plural',
          EN: 'en label_plural',
          ES: 'es label_plural',
          FR: 'fr label_plural',
          IT: 'it label_plural',
          PT: 'pt label_plural'
        },
        unitId: 'unit-id',
        price: 12.34
      };

      const type = ResourceType.fromJson(JSON);
      assert.isOk(type);
      assert.strictEqual(type.id, JSON.id);
      assert.deepStrictEqual(type.labelPlural.toJson(), JSON.labelPlural);
      assert.strictEqual(type.unitId, JSON.unitId);
      assert.strictEqual(type.price, JSON.price);
      assert.isOk(type.isValid());
      assert.deepStrictEqual(type.toJson(), JSON);
    });
  });
});
