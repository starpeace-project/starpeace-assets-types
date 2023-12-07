import { assert, test } from 'vitest';

import { RoadDefinition } from '../../src/index.js';

test('RoadDefinition #fromJson should be able to create from json', async () => {
  const JSON = {
    id: 'id',
    image: 'image.bmp'
  };

  const road = RoadDefinition.fromJson(JSON);
  assert.isOk(road);
  assert.strictEqual(road.id, JSON.id);
  assert.strictEqual(road.image, JSON.image);
  assert.isOk(road.isValid());
  assert.deepStrictEqual(road.toJson(), JSON);
});
