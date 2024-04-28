import { assert, test } from 'vitest';

import { RoadDefinition } from '../../src/index.js';

test('RoadDefinition #fromJson should be able to create from json', async () => {
  const JSON = {
    id: 'id',
    type: 'ROAD',
    tileWidth: 1,
    tileHeight: 1,
    name: {
      'DE': 'n1',
      'EN': 'n2',
      'ES': 'n3',
      'FR': 'n4',
      'IT': 'n5',
      'PT': 'n6'
    },
    imageCatalog: {
      bridge: {
        'a': '1'
      },
      light: {
        'b': '2'
      },
      urban: {
        'c': '3'
      },
      rural: {
        'd': '4'
      },
      transition: {
        'e': '5'
      },
      any: {
        'f': '6'
      }
    }
  };

  const road = RoadDefinition.fromJson(JSON);
  assert.isOk(road);
  assert.strictEqual(road.id, JSON.id);
  assert.strictEqual(road.type, JSON.type);
  assert.strictEqual(road.tileWidth, JSON.tileWidth);
  assert.strictEqual(road.tileHeight, JSON.tileHeight);
  assert.deepStrictEqual(road.name.toJson(), JSON.name);
  assert.deepStrictEqual(road.imageCatalog.toJson(), JSON.imageCatalog);
  assert.isOk(road.isValid());
  assert.deepStrictEqual(road.toJson(), JSON);
});

test('RoadDefinition #fromJson should be able to create from json without catalog', async () => {
  const JSON = {
    id: 'id',
    type: 'RAIL',
    tileWidth: 2,
    tileHeight: 2,
    name: {
      'DE': 'n1',
      'EN': 'n2',
      'ES': 'n3',
      'FR': 'n4',
      'IT': 'n5',
      'PT': 'n6'
    },
    imageCatalog: {}
  };

  const road = RoadDefinition.fromJson(JSON);
  assert.isOk(road);
  assert.strictEqual(road.id, JSON.id);
  assert.strictEqual(road.type, JSON.type);
  assert.strictEqual(road.tileWidth, JSON.tileWidth);
  assert.strictEqual(road.tileHeight, JSON.tileHeight);
  assert.deepStrictEqual(road.name.toJson(), JSON.name);
  assert.deepStrictEqual(road.imageCatalog.toJson(), JSON.imageCatalog);
  assert.isOk(road.isValid());
  assert.deepStrictEqual(road.toJson(), JSON);
});
