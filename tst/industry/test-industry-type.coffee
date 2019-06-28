assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.industry.IndustryType', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.industry)
      assert.ok(STARPEACE.industry.IndustryType)
    )
  )
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'APPLIANCE',
        label: {
          DE: "Haushaltsgeräte",
          EN: "Appliances",
          ES: "Accesorios",
          FR: "Appareils Électroménagers",
          IT: "Appliances",
          PT: "Eletrodomésticos"
        }
      }

      type = STARPEACE.industry.IndustryType.from_json(JSON)
      assert.ok(type)
      assert.strictEqual(type.id, JSON.id)
      assert.strictEqual(type.label.german, JSON.label.DE)
      assert.strictEqual(type.label.english, JSON.label.EN)
      assert.strictEqual(type.label.spanish, JSON.label.ES)
      assert.strictEqual(type.label.french, JSON.label.FR)
      assert.strictEqual(type.label.italian, JSON.label.IT)
      assert.strictEqual(type.label.portuguese, JSON.label.PT)
      assert.ok(type.is_valid())
      assert.deepStrictEqual(type.toJSON(), JSON)
    )
  )
)
