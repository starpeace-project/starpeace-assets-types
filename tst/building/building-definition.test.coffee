assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.building.BuildingDefinition', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.building)
      assert.ok(STARPEACE.building.BuildingDefinition)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: "generic.capitol"
        imageId: "generic.capitol"
        signId: "coal"
        constructionImageId: "generic.construction.7"
        name: {
          "DE": "Kapitol",
          "EN": "Capitol",
          "ES": "Capitolio",
          "FR": "Capitole",
          "IT": "Campidoglio",
          "PT": "Capitólio"
        }
        sealId: "GEN"
        zoneId: "CIVICS"
        industryCategoryId: "CIVIC"
        industryTypeId: "GOVERNMENT"
        foundation: true
        restricted: true
        requiredInventionIds: ['invention1', 'invention2']
        allowedInventionIds: ['invention3', 'invention4']
      }

      building = STARPEACE.building.BuildingDefinition.fromJson(JSON)
      assert.ok(building)
      assert.strictEqual(building.id, JSON.id)
      assert.strictEqual(building.imageId, JSON.imageId)
      assert.strictEqual(building.signId, JSON.signId)
      assert.strictEqual(building.constructionImageId, JSON.constructionImageId)
      assert.deepStrictEqual(building.name.toJson(), JSON.name)
      assert.strictEqual(building.sealId, JSON.sealId)
      assert.strictEqual(building.zoneId, JSON.zoneId)
      assert.strictEqual(building.industryCategoryId, JSON.industryCategoryId)
      assert.strictEqual(building.industryTypeId, JSON.industryTypeId)
      assert.ok(building.foundation)
      assert.ok(building.restricted)
      assert.deepStrictEqual(building.requiredInventionIds, JSON.requiredInventionIds)
      assert.deepStrictEqual(building.allowedInventionIds, JSON.allowedInventionIds)
      assert.ok(building.isValid())
      assert.deepStrictEqual(building.toJson(), JSON)
    )
  )
)
