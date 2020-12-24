_ = require('lodash')
assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.overlay.OverlayDefinition', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.overlay)
      assert.ok(STARPEACE.overlay.OverlayDefinition)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        image: 'image.png'
        tileWidth: 16
        tileHeight: 16
      }

      overlay = STARPEACE.overlay.OverlayDefinition.fromJson(JSON)
      assert.ok(overlay)
      assert.strictEqual(overlay.id, JSON.id)
      assert.strictEqual(overlay.image, JSON.image)
      assert.strictEqual(overlay.tileWidth, JSON.tileWidth)
      assert.strictEqual(overlay.tileHeight, JSON.tileHeight)
      assert.ok(overlay.isValid())
      assert.deepStrictEqual(overlay.toJson(), JSON)
    )
  )
)
