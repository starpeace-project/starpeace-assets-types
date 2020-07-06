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
# @property {number} mini_map_color - number value of zone color on mini-map
# @property {string[]} included_city_zone_ids - Array of city zone IDs children zones
###
class CityZone

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.industry.CityZone~JSON} JSON representation of CityZone
  ###
  toJSON: () ->
    {
      id: @id
      label: @label.toJSON()
      value: @value
      color: @color
      miniMapColor: @mini_map_color
      includedCityZoneIds: @included_city_zone_ids
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isNumber(@value) && @value >= 0
    return false unless _.isNumber(@color) && @color >= 0
    true

  ###*
  # Parse raw JSON into a CityZone object
  # @params {STARPEACE.industry.CityZone~JSON} json - raw JSON object to parse into CityZone
  # @return {STARPEACE.industry.CityZone} CityZone representation of parsed JSON
  ###
  @from_json = (json) ->
    zone = new CityZone()
    zone.id = json.id
    zone.label = Translation.from_json(json.label)
    zone.value = json.value
    zone.color = json.color
    zone.mini_map_color = json.miniMapColor
    zone.included_city_zone_ids = json.includedCityZoneIds || []
    zone

exports = module.exports = CityZone
