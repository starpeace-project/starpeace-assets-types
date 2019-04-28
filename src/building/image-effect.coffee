_ = require('lodash')

exports = module.exports = class ImageEffect
  constructor: () ->

  is_valid: () ->
    return false unless @type?.length > 0
    return false unless @x >= 0 && @x <= 1.0
    return false unless @y >= 0 && @y <= 1.0
    true

  toJSON: () ->
    {
      type: @type
      x: @x
      y: @y
    }

  @from_json: (json) ->
    effect = new ImageEffect()
    effect.type = json.type
    effect.x = json.x
    effect.y = json.y
    effect
