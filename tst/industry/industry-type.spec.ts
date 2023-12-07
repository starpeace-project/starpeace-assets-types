import { assert, test } from 'vitest';

import { IndustryType } from '../../src/index.js';

test('IndustryType #fromJson should be able to create from json', async () => {
  const JSON = {
    id: 'APPLIANCE',
    label: {
      DE: "Haushaltsgeräte",
      EN: "Appliances",
      ES: "Accesorios",
      FR: "Appareils Électroménagers",
      IT: "Appliances",
      PT: "Eletrodomésticos"
    }
  };

  const type = IndustryType.fromJson(JSON);
  assert.isOk(type);
  assert.strictEqual(type.id, JSON.id);
  assert.deepStrictEqual(type.label.toJson(), JSON.label);
  assert.isOk(type.isValid());
  assert.deepStrictEqual(type.toJson(), JSON);
});
