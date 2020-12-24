_ = require('lodash')

###*
# @typedef {object} STARPEACE.effect.EffectDefinition~JSON
# @property {string} id - identifier of effect
# @property {string} image - image path of asset
# @property {number} width - width of effect asset
# @property {number} height - height of effect asset
# @property {number} sourceX - x coordinate of origin within asset
# @property {number} sourceY - y coordinate of origin within asset
###

###*
# Class representing building effect definition
# @memberof STARPEACE.effect
#
# @property {string} id - identifier of effect
# @property {string} image - image path of asset
# @property {number} width - width of effect asset
# @property {number} height - height of effect asset
# @property {number} sourceX - x coordinate of origin within asset
# @property {number} sourceY - y coordinate of origin within asset
###
exports = module.exports = class EffectDefinition

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isString(@image) && @image.length > 0
    return false unless _.isNumber(@width) && @width > 0
    return false unless _.isNumber(@height) && @height > 0
    return false unless _.isNumber(@sourceX)
    return false unless _.isNumber(@sourceY)
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.effect.EffectDefinition~JSON} JSON representation of EffectDefinition
  ###
  toJson: () ->
    {
      id: @id
      image: @image
      width: @width
      height: @height
      sourceX: @sourceX
      sourceY: @sourceY
    }

  ###*
  # Parse raw JSON into a EffectDefinition object
  # @params {STARPEACE.effect.EffectDefinition~JSON} json - raw JSON object to parse into EffectDefinition
  # @return {STARPEACE.effect.EffectDefinition} EffectDefinition representation of parsed JSON
  ###
  @fromJson = (json) ->
    effect = new EffectDefinition()
    effect.id = json.id
    effect.image = json.image
    effect.width = json.width
    effect.height = json.height
    effect.sourceX = json.sourceX
    effect.sourceY = json.sourceY
    effect
