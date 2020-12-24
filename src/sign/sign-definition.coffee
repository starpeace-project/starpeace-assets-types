_ = require('lodash')

###*
# @typedef {object} STARPEACE.sign.SignDefinition~JSON
# @property {string} id - identifier of sign
# @property {string} image - image path of asset
# @property {number} width - width of sign asset
# @property {number} height - height of sign asset
###

###*
# Class representing building sign definition
# @memberof STARPEACE.sign
#
# @property {string} id - identifier of sign
# @property {string} image - image path of asset
# @property {number} width - width of sign asset
# @property {number} height - height of sign asset
###
exports = module.exports = class SignDefinition

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
  # @return {STARPEACE.sign.SignDefinition~JSON} JSON representation of SignDefinition
  ###
  toJson: () ->
    {
      id: @id
      image: @image
      width: @width
      height: @height
    }

  ###*
  # Parse raw JSON into a SignDefinition object
  # @params {STARPEACE.sign.SignDefinition~JSON} json - raw JSON object to parse into SignDefinition
  # @return {STARPEACE.sign.SignDefinition} SignDefinition representation of parsed JSON
  ###
  @fromJson = (json) ->
    sign = new SignDefinition()
    sign.id = json.id
    sign.image = json.image
    sign.width = json.width
    sign.height = json.height
    sign
