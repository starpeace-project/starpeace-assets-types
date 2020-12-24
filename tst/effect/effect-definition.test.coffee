_ = require('lodash')
assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.effect.EffectDefinition', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.effect)
      assert.ok(STARPEACE.effect.EffectDefinition)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        image: 'image.gif'
        width: 16
        height: 16
        sourceX: 4
        sourceY: 4
      }

      effect = STARPEACE.effect.EffectDefinition.fromJson(JSON)
      assert.ok(effect)
      assert.strictEqual(effect.id, JSON.id)
      assert.strictEqual(effect.image, JSON.image)
      assert.strictEqual(effect.width, JSON.width)
      assert.strictEqual(effect.height, JSON.height)
      assert.strictEqual(effect.sourceX, JSON.sourceX)
      assert.strictEqual(effect.sourceY, JSON.sourceY)
      assert.ok(effect.isValid())
      assert.deepStrictEqual(effect.toJson(), JSON)
    )
  )
)
