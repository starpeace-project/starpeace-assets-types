_ = require('lodash')
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
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        nameShort: 'name'
        nameLong: 'long name'
        descriptions: [
          {
            DE: 'de description 1'
            EN: 'en description 1'
            ES: 'es description 1'
            FR: 'fr description 1'
            IT: 'it description 1'
            PT: 'pt description 1'
          },
          {
            DE: 'de description 2'
            EN: 'en description 2'
            ES: 'es description 2'
            FR: 'fr description 2'
            IT: 'it description 2'
            PT: 'pt description 2'
          }
        ]
        pros: {
          DE: 'de pros'
          EN: 'en pros'
          ES: 'es pros'
          FR: 'fr pros'
          IT: 'it pros'
          PT: 'pt pros'
        }
        cons: {
          DE: 'de cons'
          EN: 'en cons'
          ES: 'es cons'
          FR: 'fr cons'
          IT: 'it cons'
          PT: 'pt cons'
        }
        strengths: {
          DE: 'de strengths'
          EN: 'en strengths'
          ES: 'es strengths'
          FR: 'fr strengths'
          IT: 'it strengths'
          PT: 'pt strengths'
        }
        weaknesses: {
          DE: 'de weaknesses'
          EN: 'en weaknesses'
          ES: 'es weaknesses'
          FR: 'fr weaknesses'
          IT: 'it weaknesses'
          PT: 'pt weaknesses'
        }
        buildingIds: ['bid1', 'bid2']
      }

      seal = STARPEACE.seal.CompanySeal.fromJson(JSON)
      assert.ok(seal)
      assert.strictEqual(seal.id, JSON.id)
      assert.strictEqual(seal.nameShort, JSON.nameShort)
      assert.strictEqual(seal.nameLong, JSON.nameLong)
      assert.deepStrictEqual(_.map(seal.descriptions, (d) -> d.toJson()), JSON.descriptions)
      assert.deepStrictEqual(seal.pros.toJson(), JSON.pros)
      assert.deepStrictEqual(seal.cons.toJson(), JSON.cons)
      assert.deepStrictEqual(seal.strengths.toJson(), JSON.strengths)
      assert.deepStrictEqual(seal.weaknesses.toJson(), JSON.weaknesses)
      assert.deepStrictEqual(seal.buildingIds, ['bid1', 'bid2'])
      assert.ok(seal.isValid())
      assert.deepStrictEqual(seal.toJson(), JSON)
    )
  )
)
