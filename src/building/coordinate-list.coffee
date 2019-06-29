_ = require('lodash')

Coordinate = require('./coordinate')

###*
# @typedef {object} STARPEACE.building.CoordinateList~JSON
# @property {STARPEACE.building.Coordinate~JSON[]} coordinates - array of coordinate JSON objects
###

###*
# Class representing an array of coordinates
# @memberof STARPEACE.building
#
# @property {STARPEACE.building.Coordinate[]} coordinates - array of coordinate values
###
class CoordinateList
  constructor: () ->
    @coordinates = []

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless !@coordinates.length || _.every(@coordinates)
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.CoordinateList~JSON} JSON representation of CoordinateList
  ###
  toJSON: () -> _.map(@coordinates, (c) -> c.toJSON())

  ###*
  # Parse raw JSON into a CoordinateList object
  # @param {STARPEACE.building.CoordinateList~JSON} json - raw JSON object to parse into CoordinateList
  # @return {STARPEACE.building.CoordinateList} CoordinateList representation of parsed JSON
  ###
  @from_json: (json) ->
    list = new CoordinateList()
    list.coordinates = _.map(json, Coordinate.from_json)
    list

exports = module.exports = CoordinateList
