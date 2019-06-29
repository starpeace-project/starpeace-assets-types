_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.civic.TownhallDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
###

###*
# Class representing townhall building simulation definition
# @memberof STARPEACE.building.simulation.civic
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
###
class TownhallDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'TOWNHALL'

  ###*
  # Create a TownhallDefinition object
  # @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
  ###
  constructor: (json) ->
    super(json)

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.civic.TownhallDefinition~JSON} JSON representation of PortalDefinition
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
    return false unless Array.isArray(@labor) && @labor?.length > 0
    return false if _.find(@labor, (item) -> !item.is_valid())?

    return false unless @beauty > 0 # TODO: may want to revisit for crime hq's

    true

  ###*
  # Parse raw JSON into a TownhallDefinition object
  # @param {STARPEACE.building.simulation.civic.TownhallDefinition~JSON} json - raw JSON object to parse into TownhallDefinition
  # @return {STARPEACE.building.simulation.civic.TownhallDefinition} TownhallDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new TownhallDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition

exports = module.exports = TownhallDefinition
