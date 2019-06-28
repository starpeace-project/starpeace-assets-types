_ = require('lodash')

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
  # @return {CityZone~JSON} JSON representation of CityZone
  ###
  toJSON: () ->
    {
      id: @id
      value: @value
      color: @color
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isNumber(@value) && @value >= 0
    return false unless _.isString(@color) && @color.length > 0
    true

  ###*
  # Parse raw JSON into a CityZone object
  # @params {CityZone~JSON} json - raw JSON object to parse into CityZone
  # @return {CityZone} CityZone representation of parsed JSON
  ###
  @from_json = (json) ->
    zone = new CityZone()
    zone.id = json.id
    zone.value = json.value
    zone.color = json.color
    zone

exports = module.exports = CityZone
