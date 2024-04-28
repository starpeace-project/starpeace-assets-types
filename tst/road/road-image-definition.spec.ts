import { assert, test } from 'vitest';

import { RoadImageDefinition } from '../../src/index.js';

test('RoadImageDefinition #fromJson should be able to create from json', async () => {
  const JSON = {
    id: 'id',
    imagePath: 'image.bmp'
  };

  const road = RoadImageDefinition.fromJson(JSON);
  assert.isOk(road);
  assert.strictEqual(road.id, JSON.id);
  assert.strictEqual(road.imagePath, JSON.imagePath);
  assert.isOk(road.isValid());
  assert.deepStrictEqual(road.toJson(), JSON);
});
