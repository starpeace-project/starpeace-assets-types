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
  describe('#fromJson', ->
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

      type = STARPEACE.industry.IndustryType.fromJson(JSON)
      assert.ok(type)
      assert.strictEqual(type.id, JSON.id)
      assert.deepStrictEqual(type.label.toJson(), JSON.label)
      assert.ok(type.isValid())
      assert.deepStrictEqual(type.toJson(), JSON)
    )
  )
)
