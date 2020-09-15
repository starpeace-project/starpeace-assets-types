assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.industry.CityZone', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.industry)
      assert.ok(STARPEACE.industry.CityZone)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: "COMMERCIAL"
        label: {
          "DE": "Kommerziell",
          "EN": "Commercial",
          "ES": "Comercial",
          "FR": "Commercial",
          "IT": "Commerciale",
          "PT": "Comercial"
        }
        value: 7
        color: 4814040
        miniMapColor: 4814040
        includedCityZoneIds: ["SERVICE"]
      }

      zone = STARPEACE.industry.CityZone.fromJson(JSON)
      assert.ok(zone)
      assert.strictEqual(zone.id, JSON.id)
      assert.strictEqual(zone.value, JSON.value)
      assert.strictEqual(zone.color, JSON.color)
      assert.strictEqual(zone.miniMapColor, JSON.miniMapColor)
      assert.strictEqual(zone.includedCityZoneIds, JSON.includedCityZoneIds)
      assert.ok(zone.isValid())
      assert.deepStrictEqual(zone.toJson(), JSON)
    )
  )
)
