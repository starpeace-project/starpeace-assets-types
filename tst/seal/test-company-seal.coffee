assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.seal.CompanySeal', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.seal)
      assert.ok(STARPEACE.seal.CompanySeal)
    )
  )
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        name_short: 'name'
        name_long: 'long name'
        buildings: ['bid1', 'bid2']
      }

      seal = STARPEACE.seal.CompanySeal.from_json(JSON)
      assert.ok(seal)
      assert.strictEqual(seal.id, 'id')
      assert.strictEqual(seal.name_short, 'name')
      assert.strictEqual(seal.name_long, 'long name')
      assert.deepStrictEqual(seal.building_ids, ['bid1', 'bid2'])
      assert.ok(seal.is_valid())
      assert.deepStrictEqual(seal.toJSON(), JSON)
    )
  )
)
