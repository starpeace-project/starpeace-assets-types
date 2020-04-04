_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.industry.CityZone~JSON
# @property {string} id - unique identifier of zone
# @property {number} value - unique numeric value of zone
# @property {string} color - hexidecimal number value of zone color
###

###*
# Class representing a city zone
# @memberof STARPEACE.industry
#
# @property {string} id - unique identifier of zone
# @property {number} value - unique numeric value of zone
# @property {string} color - hexidecimal number value of zone color
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
      mini_map_color: @mini_map_color
      included_city_zone_ids: @included_city_zone_ids
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
    zone.mini_map_color = json.mini_map_color
    zone.included_city_zone_ids = json.included_city_zone_ids || []
    zone

exports = module.exports = CityZone
