import { assert } from "chai";

import { InventionDefinition } from '../../src/index.js';

describe('InventionDefinition', () => {
  describe('#fromJson', () => {
    it('should be able to create from json', async () => {
      const JSON = {
        id: 'id',
        industryCategoryId: 'category',
        industryTypeId: 'industry',
        name: {
          DE: 'de name',
          EN: 'en name',
          ES: 'es name',
          FR: 'fr name',
          IT: 'it name',
          PT: 'pt name'
        },
        description: {
          DE: 'de description',
          EN: 'en description',
          ES: 'es description',
          FR: 'fr description',
          IT: 'it description',
          PT: 'pt description'
        },
        dependsOnIds: ['id1', 'id2'],
        properties: { }
      };

      const invention = InventionDefinition.fromJson(JSON);
      assert.isOk(invention);
      assert.strictEqual(invention.id, JSON.id);
      assert.strictEqual(invention.industryCategoryId, JSON.industryCategoryId);
      assert.strictEqual(invention.industryTypeId, JSON.industryTypeId);
      assert.deepStrictEqual(invention.name.toJson(), JSON.name);
      assert.deepStrictEqual(invention.dependsOnIds, ['id1', 'id2']);
      assert.isOk(invention.isValid());
      assert.deepStrictEqual(invention.toJson(), JSON);
    });
  });
});
