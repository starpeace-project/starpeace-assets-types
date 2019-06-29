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
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        id: "generic.capitol"
        image_id: "generic.capitol"
        construction_image_id: "generic.construction.7"
        name: {
          "DE": "Kapitol",
          "EN": "Capitol",
          "ES": "Capitolio",
          "FR": "Capitole",
          "IT": "Campidoglio",
          "PT": "Capitólio"
        }
        seal_id: "GEN"
        zone: "CIVICS"
        category: "CIVIC"
        industry_type: "GOVERNMENT"
        restricted: true
        required_inventions: ['invention1', 'invention2']
      }

      building = STARPEACE.building.BuildingDefinition.from_json(JSON)
      assert.ok(building)
      assert.strictEqual(building.id, JSON.id)
      assert.strictEqual(building.image_id, JSON.image_id)
      assert.strictEqual(building.construction_image_id, JSON.construction_image_id)
      assert.deepStrictEqual(building.name.toJSON(), JSON.name)
      assert.strictEqual(building.seal_id, JSON.seal_id)
      assert.strictEqual(building.zone_id, JSON.zone)
      assert.strictEqual(building.category_id, JSON.category)
      assert.strictEqual(building.industry_type_id, JSON.industry_type)
      assert.ok(building.restricted)
      assert.deepStrictEqual(building.required_invention_ids, JSON.required_inventions)
      assert.ok(building.is_valid())
      assert.deepStrictEqual(building.toJSON(), JSON)
    )
  )
)
