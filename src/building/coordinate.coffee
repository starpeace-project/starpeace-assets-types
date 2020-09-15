_ = require('lodash')

###*
# @typedef {object} STARPEACE.building.Coordinate~JSON
# @property {number} x - coordinate value along x axis
# @property {number} y - coordinate value along y axis
###

###*
# Class representing an x and y coordinate
# @memberof STARPEACE.building
#
# @property {number} x - coordinate value along x axis
# @property {number} y - coordinate value along y axis
###
exports = module.exports = class Coordinate
  ###*
  # Create a Coordinate object
  # @param {number} x - coordinate value along x axis
  # @param {number} y - coordinate value along y axis
  ###
  constructor: (@x, @y) ->

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isNumber(@x)
    return false unless _.isNumber(@y)
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.Coordinate~JSON} JSON representation of Coordinate
  ###
  toJson: () ->
    {
      x: @x
      y: @y
    }

  ###*
  # Parse raw JSON into a Coordinate object
  # @param {STARPEACE.building.Coordinate~JSON} json - raw JSON object to parse into Coordinate
  # @return {STARPEACE.building.Coordinate} Coordinate representation of parsed JSON
  ###
  @fromJson: (json) -> new Coordinate(json.x, json.y)
