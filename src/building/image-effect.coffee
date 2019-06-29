_ = require('lodash')

###*
# @typedef {object} STARPEACE.building.ImageEffect~JSON
# @property {string} type - type identifier of effect
# @property {number} x - horizontal percent offset of effect image relative building image
# @property {string} y - vertical percent offset of effect image relative building image
###

###*
# Class representing an image effect applied to a building
# @memberof STARPEACE.building
#
# @property {string} type - type identifier of effect
# @property {number} x - horizontal percent offset of effect image relative building image
# @property {string} y - vertical percent offset of effect image relative building image
###
class ImageEffect

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless @type?.length > 0
    return false unless @x >= 0 && @x <= 1.0
    return false unless @y >= 0 && @y <= 1.0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.ImageEffect~JSON} JSON representation of ImageEffect
  ###
  toJSON: () ->
    {
      type: @type
      x: @x
      y: @y
    }

  ###*
  # Parse raw JSON into a ImageEffect object
  # @param {STARPEACE.building.ImageEffect~JSON} json - raw JSON object to parse into ImageEffect
  # @return {STARPEACE.building.ImageEffect} ImageEffect representation of parsed JSON
  ###
  @from_json: (json) ->
    effect = new ImageEffect()
    effect.type = json.type
    effect.x = json.x
    effect.y = json.y
    effect

exports = module.exports = ImageEffect
