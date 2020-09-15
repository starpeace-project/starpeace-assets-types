_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.industry.CityZone~JSON
# @property {string} id - unique identifier of zone
# @property {number} value - unique numeric value of zone
# @property {number} color - hexidecimal number value of zone color
# @property {number} miniMapColor - number value of zone color on mini-map
# @property {string[]} includedCityZoneIds - Array of city zone IDs children zones
###

###*
# Class representing a city zone
# @memberof STARPEACE.industry
#
# @property {string} id - unique identifier of zone
# @property {number} value - unique numeric value of zone
# @property {number} color - number value of zone color
# @property {number} miniMapColor - number value of zone color on mini-map
# @property {string[]} includedCityZoneIds - Array of city zone IDs children zones
###
exports = module.exports = class CityZone

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isNumber(@value) && @value >= 0
    return false unless _.isNumber(@color) && @color >= 0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.industry.CityZone~JSON} JSON representation of CityZone
  ###
  toJson: () ->
    {
      id: @id
      label: @label?.toJson()
      value: @value
      color: @color
      miniMapColor: @miniMapColor
      includedCityZoneIds: @includedCityZoneIds
    }

  ###*
  # Parse raw JSON into a CityZone object
  # @params {STARPEACE.industry.CityZone~JSON} json - raw JSON object to parse into CityZone
  # @return {STARPEACE.industry.CityZone} CityZone representation of parsed JSON
  ###
  @fromJson = (json) ->
    zone = new CityZone()
    zone.id = json.id
    zone.label = Translation.fromJson(json.label)
    zone.value = json.value
    zone.color = json.color
    zone.miniMapColor = json.miniMapColor
    zone.includedCityZoneIds = json.includedCityZoneIds || []
    zone
