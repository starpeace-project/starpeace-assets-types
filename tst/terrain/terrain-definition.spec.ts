import { assert, test } from 'vitest';

import { TerrainDefinition } from '../../src/index.js';

test('TerrainDefinition #fromJson should be able to create from json', async () => {
  const JSON = {
    id: 0,
    color: 8290882,
    zone: "grass",
    textures: {
      "0deg": {
        type: "center",
        key: "ground.000.grass.center.0.bmp"
      },
      "90deg": {
        type: "center",
        key: "ground.000.grass.center.0.bmp"
      },
      "180deg": {
        type: "center",
        key: "ground.000.grass.center.0.bmp"
      },
      "270deg": {
        type: "center",
        key: "ground.000.grass.center.0.bmp"
      }
    }
  };

  const terrain = TerrainDefinition.fromJson(JSON);

  assert.isOk(terrain);
  assert.strictEqual(terrain.id, JSON.id);
  assert.strictEqual(terrain.color, JSON.color);
  assert.strictEqual(terrain.zone, JSON.zone);
  assert.isOk(terrain.textures);
  assert.isOk(terrain.textures["0deg"]);
  assert.strictEqual(terrain.textures["0deg"].type, JSON.textures["0deg"].type);
  assert.strictEqual(terrain.textures["0deg"].key, JSON.textures["0deg"].key);
  assert.isOk(terrain.textures["90deg"]);
  assert.strictEqual(terrain.textures["90deg"].type, JSON.textures["90deg"].type);
  assert.strictEqual(terrain.textures["90deg"].key, JSON.textures["90deg"].key);
  assert.isOk(terrain.textures["180deg"]);
  assert.strictEqual(terrain.textures["180deg"].type, JSON.textures["180deg"].type);
  assert.strictEqual(terrain.textures["180deg"].key, JSON.textures["180deg"].key);
  assert.isOk(terrain.textures["270deg"]);
  assert.strictEqual(terrain.textures["270deg"].type, JSON.textures["270deg"].type);
  assert.strictEqual(terrain.textures["270deg"].key, JSON.textures["270deg"].key);
  assert.isOk(terrain.isValid());
  assert.deepEqual(terrain.toJson(), JSON);
});
