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
exports = module.exports = class CoordinateList
  constructor: () ->
    @coordinates = []

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless !@coordinates.length || _.every(@coordinates, (c) -> c.isValid())
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.CoordinateList~JSON} JSON representation of CoordinateList
  ###
  toJson: () -> _.map(@coordinates, (c) -> c.toJson())

  ###*
  # Parse raw JSON into a CoordinateList object
  # @param {STARPEACE.building.CoordinateList~JSON} json - raw JSON object to parse into CoordinateList
  # @return {STARPEACE.building.CoordinateList} CoordinateList representation of parsed JSON
  ###
  @fromJson: (json) ->
    list = new CoordinateList()
    list.coordinates = _.map(json, Coordinate.fromJson)
    list
