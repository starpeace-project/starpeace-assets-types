assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.language.Translation', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.language)
      assert.ok(STARPEACE.language.Translation)
    )
  )
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        DE: 'de german'
        EN: 'en english'
        ES: 'es spanish'
        FR: 'fr french'
        IT: 'it italian'
        PT: 'pt portuguese'
      }

      translation = STARPEACE.language.Translation.from_json(JSON)
      assert.ok(translation)
      assert.strictEqual(translation.german, JSON.DE)
      assert.strictEqual(translation.english, JSON.EN)
      assert.strictEqual(translation.spanish, JSON.ES)
      assert.strictEqual(translation.french, JSON.FR)
      assert.strictEqual(translation.italian, JSON.IT)
      assert.strictEqual(translation.portuguese, JSON.PT)
      assert.ok(translation.is_valid())
      assert.deepStrictEqual(translation.toJSON(), JSON)
    )
  )
)
