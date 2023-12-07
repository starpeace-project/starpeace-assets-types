import { assert, test } from 'vitest';

import { SignDefinition } from '../../src/index.js';

test('SignDefinition #fromJson should be able to create from json', async () => {
  const JSON = {
    id: 'id',
    image: 'image.gif',
    width: 16,
    height: 16,
    sourceX: 4,
    sourceY: 4
  };

  const sign = SignDefinition.fromJson(JSON);
  assert.isOk(sign);
  assert.strictEqual(sign.id, JSON.id);
  assert.strictEqual(sign.image, JSON.image);
  assert.strictEqual(sign.width, JSON.width);
  assert.strictEqual(sign.height, JSON.height);
  assert.strictEqual(sign.sourceX, JSON.sourceX);
  assert.strictEqual(sign.sourceY, JSON.sourceY);
  assert.isOk(sign.isValid());
  assert.deepStrictEqual(sign.toJson(), JSON);
});
