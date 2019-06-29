_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.media.MediaStationDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
###

###*
# Class representing media station building simulation definition
# @memberof STARPEACE.building.simulation.media
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
###
class MediaStationDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'MEDIA_STATION'

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.media.MediaStationDefinition~JSON} JSON representation of MediaStationDefinition
  ###
  toJSON: () ->
    _.assign(super.toJSON(), {
      labor: _.map(@labor, (l) -> l.toJSON())
    })

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && @labor?.length > 0 && _.every(@labor, (l) -> l.is_valid())

    true

  ###*
  # Parse raw JSON into a MediaStationDefinition object
  # @param {STARPEACE.building.simulation.media.MediaStationDefinition~JSON} json - raw JSON object to parse into MediaStationDefinition
  # @return {STARPEACE.building.simulation.media.MediaStationDefinition} MediaStationDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new MediaStationDefinition()
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition

exports = module.exports = MediaStationDefinition
