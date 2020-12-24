_ = require('lodash')

###*
# @typedef {object} STARPEACE.overlay.OverlayDefinition~JSON
# @property {string} id - identifier of asset
# @property {string} image - image path of asset
# @property {string} tileWidth - width of asset in tiles
# @property {string} tileHeight - height of asset in tiles
###

###*
# Class representing overlay metadata
# @memberof STARPEACE.overlay
#
# @property {string} id - Unique identifier of overlay asset
# @property {string} image - image path of asset
# @property {string} tileWidth - width of asset in tiles
# @property {string} tileHeight - height of asset in tiles
###
exports = module.exports = class OverlayDefinition

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isString(@image) && @image.length > 0
    return false unless _.isNumber(@tileWidth) && @tileWidth > 0
    return false unless _.isNumber(@tileHeight) && @tileHeight > 0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.overlay.OverlayDefinition~JSON} JSON representation of OverlayDefinition
  ###
  toJson: () ->
    {
      id: @id
      image: @image
      tileWidth: @tileWidth
      tileHeight: @tileHeight
    }

  ###*
  # Parse raw JSON into a OverlayDefinition object
  # @params {STARPEACE.overlay.OverlayDefinition~JSON} json - raw JSON object to parse into OverlayDefinition
  # @return {STARPEACE.overlay.OverlayDefinition} OverlayDefinition representation of parsed JSON
  ###
  @fromJson = (json) ->
    overlay = new OverlayDefinition()
    overlay.id = json.id
    overlay.image = json.image
    overlay.tileWidth = json.tileWidth
    overlay.tileHeight = json.tileHeight
    overlay
