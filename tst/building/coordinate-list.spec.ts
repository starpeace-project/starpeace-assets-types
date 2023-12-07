import { assert, test } from 'vitest';

import { CoordinateList } from '../../src/index.js';

test('CoordinateList #fromJson should be able to create from json', async () => {
  const JSON = [
    {
      x: 73,
      y: 52
    },
    {
      x: 101,
      y: 32
    }
  ];

  const coordinates = CoordinateList.fromJson(JSON);
  assert.isOk(coordinates);
  assert.strictEqual(coordinates.coordinates.length, 2);
  assert.strictEqual(coordinates.coordinates[0].x, JSON[0].x);
  assert.strictEqual(coordinates.coordinates[0].y, JSON[0].y);
  assert.strictEqual(coordinates.coordinates[1].x, JSON[1].x);
  assert.strictEqual(coordinates.coordinates[1].y, JSON[1].y);
  assert.isOk(coordinates.isValid());
  assert.deepStrictEqual(coordinates.toJson(), JSON);
});
