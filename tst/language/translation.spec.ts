import { assert, test } from 'vitest';

import { Translation } from '../../src/index.js';

test('Translation #fromJson should be able to create from json', async () => {
  const JSON = {
    DE: 'de german',
    EN: 'en english',
    ES: 'es spanish',
    FR: 'fr french',
    IT: 'it italian',
    PT: 'pt portuguese'
  };

  const translation = Translation.fromJson(JSON);
  assert.isOk(translation);
  assert.strictEqual(translation.german, JSON.DE);
  assert.strictEqual(translation.english, JSON.EN);
  assert.strictEqual(translation.spanish, JSON.ES);
  assert.strictEqual(translation.french, JSON.FR);
  assert.strictEqual(translation.italian, JSON.IT);
  assert.strictEqual(translation.portuguese, JSON.PT);
  assert.isOk(translation.isValid());
  assert.deepStrictEqual(translation.toJson(), JSON);
});
