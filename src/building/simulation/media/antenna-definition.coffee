_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.media.AntennaDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
# @property {number} range - tile range building can reach
###

###*
# Class representing antenna building simulation definition
# @memberof STARPEACE.building.simulation.media
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
# @property {number} range - tile range building can reach
###
class AntennaDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'ANTENNA'

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.media.AntennaDefinition~JSON} JSON representation of AntennaDefinition
  ###
  toJSON: () ->
    _.assign(super.toJSON(), {
      labor: _.map(@labor, (l) -> l.toJSON())
      range: @range
    })

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && @labor?.length > 0 && _.every(@labor, (l) -> l.is_valid())
    return false unless _.isNumber(@range) && @range > 0

    true

  ###*
  # Parse raw JSON into a AntennaDefinition object
  # @param {STARPEACE.building.simulation.media.AntennaDefinition~JSON} json - raw JSON object to parse into AntennaDefinition
  # @return {STARPEACE.building.simulation.media.AntennaDefinition} AntennaDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new AntennaDefinition()
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition.range = json.range
    definition

exports = module.exports = AntennaDefinition
