import { assert, test } from 'vitest';

import { ResourceUnit } from '../../src/index.js';

test('ResourceUnit #fromJson should be able to create from json', async () => {
  const JSON = {
    id: 'id',
    labelPlural: {
      DE: 'de label_plural',
      EN: 'en label_plural',
      ES: 'es label_plural',
      FR: 'fr label_plural',
      IT: 'it label_plural',
      PT: 'pt label_plural'
    }
  };

  const unit = ResourceUnit.fromJson(JSON);
  assert.isOk(unit);
  assert.strictEqual(unit.id, JSON.id);
  assert.deepStrictEqual(unit.labelPlural.toJson(), JSON.labelPlural);
  assert.isOk(unit.isValid());
  assert.deepStrictEqual(unit.toJson(), JSON);
});
