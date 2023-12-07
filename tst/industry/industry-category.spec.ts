import { assert, test } from 'vitest';

import { IndustryCategory } from '../../src/index.js';

test('IndustryCategory #fromJson should be able to create from json', async () => {
  const JSON = {
    id: 'NONE',
    label: {
      DE: 'Keine',
      EN: 'None',
      ES: 'Ninguna',
      FR: 'Aucun',
      IT: 'Nessuna',
      PT: 'Nenhum'
    }
  };

  const category = IndustryCategory.fromJson(JSON);
  assert.isOk(category);
  assert.strictEqual(category.id, JSON.id);
  assert.deepStrictEqual(category.label.toJson(), JSON.label);
  assert.isOk(category.isValid());
  assert.deepStrictEqual(category.toJson(), JSON);
});
