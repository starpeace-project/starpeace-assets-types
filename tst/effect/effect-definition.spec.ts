import { assert, test } from 'vitest';

import { EffectDefinition } from '../../src/index.js';

test('EffectDefinition #fromJson should be able to create from json', async () => {
  const JSON = {
    id: 'id',
    image: 'image.gif',
    width: 16,
    height: 16,
    sourceX: 4,
    sourceY: 4
  };

  const effect = EffectDefinition.fromJson(JSON)
  assert.isOk(effect)
  assert.strictEqual(effect.id, JSON.id)
  assert.strictEqual(effect.image, JSON.image)
  assert.strictEqual(effect.width, JSON.width)
  assert.strictEqual(effect.height, JSON.height)
  assert.strictEqual(effect.sourceX, JSON.sourceX)
  assert.strictEqual(effect.sourceY, JSON.sourceY)
  assert.isOk(effect.isValid())
  assert.deepStrictEqual(effect.toJson(), JSON)
});
