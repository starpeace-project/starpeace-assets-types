import { assert, test } from 'vitest';

import { InventionDefinition } from '../../src/index.js';

test('InventionDefinition #fromJson should be able to create from json', async () => {
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
    properties: {
      quality: 10
    }
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
