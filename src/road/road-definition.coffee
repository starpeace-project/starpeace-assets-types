_ = require('lodash')

###*
# @typedef {object} STARPEACE.road.RoadDefinition~JSON
# @property {string} id - identifier of asset
# @property {string} image - image path of asset
###

###*
# Class representing road metadata
# @memberof STARPEACE.road
#
# @property {string} id - Unique identifier of road asset
# @property {string} image - image path of asset
###
exports = module.exports = class RoadDefinition

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isString(@image) && @image.length > 0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.road.RoadDefinition~JSON} JSON representation of RoadDefinition
  ###
  toJson: () ->
    {
      id: @id
      image: @image
    }

  ###*
  # Parse raw JSON into a RoadDefinition object
  # @params {STARPEACE.road.RoadDefinition~JSON} json - raw JSON object to parse into RoadDefinition
  # @return {STARPEACE.road.RoadDefinition} RoadDefinition representation of parsed JSON
  ###
  @fromJson = (json) ->
    road = new RoadDefinition()
    road.id = json.id
    road.image = json.image
    road
