_ = require('lodash')

###*
# @typedef {object} STARPEACE.plane.PlaneDefinition~JSON
# @property {string} id - identifier of asset
# @property {string} image - image path of asset
# @property {number} width - width of plane asset
# @property {number} height - height of plane asset
###

###*
# Class representing plane metadata
# @memberof STARPEACE.plane
#
# @property {string} id - Unique identifier of plane asset
# @property {string} image - image path of asset
# @property {number} width - width of plane asset
# @property {number} height - height of plane asset
###
exports = module.exports = class PlaneDefinition

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isString(@image) && @image.length > 0
    return false unless _.isNumber(@width) && @width > 0
    return false unless _.isNumber(@height) && @height > 0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.plane.PlaneDefinition~JSON} JSON representation of PlaneDefinition
  ###
  toJson: () ->
    {
      id: @id
      image: @image
      width: @width
      height: @height
    }

  ###*
  # Parse raw JSON into a PlaneDefinition object
  # @params {STARPEACE.plane.PlaneDefinition~JSON} json - raw JSON object to parse into PlaneDefinition
  # @return {STARPEACE.plane.PlaneDefinition} PlaneDefinition representation of parsed JSON
  ###
  @fromJson = (json) ->
    plane = new PlaneDefinition()
    plane.id = json.id
    plane.image = json.image
    plane.width = json.width
    plane.height = json.height
    plane
