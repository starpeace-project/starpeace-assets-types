import { assert } from "chai";

import { BuildingDefinition } from '../../src/index.js';

describe('BuildingDefinition', () => {
  describe('#fromJson', () => {
    it('should be able to create from json', async () => {
      const JSON = {
        id: "generic.capitol",
        imageId: "generic.capitol",
        signId: "coal",
        constructionImageId: "generic.construction.7",
        name: {
          "DE": "Kapitol",
          "EN": "Capitol",
          "ES": "Capitolio",
          "FR": "Capitole",
          "IT": "Campidoglio",
          "PT": "Capitólio"
        },
        sealId: "GEN",
        zoneId: "CIVICS",
        industryCategoryId: "CIVIC",
        industryTypeId: "GOVERNMENT",
        foundation: true,
        restricted: true,
        requiredInventionIds: ['invention1', 'invention2'],
        allowedInventionIds: ['invention3', 'invention4']
      };

      const building = BuildingDefinition.fromJson(JSON);
      assert.isOk(building);
      assert.strictEqual(building.id, JSON.id);
      assert.strictEqual(building.imageId, JSON.imageId);
      assert.strictEqual(building.signId, JSON.signId);
      assert.strictEqual(building.constructionImageId, JSON.constructionImageId);
      assert.deepStrictEqual(building.name.toJson(), JSON.name);
      assert.strictEqual(building.sealId, JSON.sealId);
      assert.strictEqual(building.zoneId, JSON.zoneId);
      assert.strictEqual(building.industryCategoryId, JSON.industryCategoryId);
      assert.strictEqual(building.industryTypeId, JSON.industryTypeId);
      assert.isOk(building.foundation);
      assert.isOk(building.restricted);
      assert.deepStrictEqual(building.requiredInventionIds, JSON.requiredInventionIds);
      assert.deepStrictEqual(building.allowedInventionIds, JSON.allowedInventionIds);
      assert.isOk(building.isValid());
      assert.deepStrictEqual(building.toJson(), JSON);
    });
  });
});
