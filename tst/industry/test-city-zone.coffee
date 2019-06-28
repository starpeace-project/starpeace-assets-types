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
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'COMMERCIAL'
        value: 7
        color: '0x4974D8'
      }

      zone = STARPEACE.industry.CityZone.from_json(JSON)
      assert.ok(zone)
      assert.strictEqual(zone.id, JSON.id)
      assert.strictEqual(zone.value, JSON.value)
      assert.strictEqual(zone.color, JSON.color)
      assert.ok(zone.is_valid())
      assert.deepStrictEqual(zone.toJSON(), JSON)
    )
  )
)
