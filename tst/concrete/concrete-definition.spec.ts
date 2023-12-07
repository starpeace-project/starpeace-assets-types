import { assert, test } from 'vitest';

import { ConcreteDefinition } from '../../src/index.js';

test('ConcreteDefinition #fromJson should be able to create from json', async () => {
  const JSON = {
    id: 'id',
    image: 'image.gif'
  };

  const concrete = ConcreteDefinition.fromJson(JSON);

  assert.isOk(concrete);
  assert.strictEqual(concrete.id, JSON.id);
  assert.strictEqual(concrete.image, JSON.image);
  assert.isOk(concrete.isValid());
  assert.deepEqual(concrete.toJson(), JSON);
});
