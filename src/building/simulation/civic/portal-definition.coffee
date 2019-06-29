_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.civic.PortalDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
###

###*
# Class representing portal building simulation definition
# @memberof STARPEACE.building.simulation.civic
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
###
class PortalDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'PORTAL'

  ###*
  # Create a PortalDefinition object
  # @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
  ###
  constructor: (json) ->
    super(json)

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.civic.PortalDefinition~JSON} JSON representation of PortalDefinition
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

    true

  ###*
  # Parse raw JSON into a PortalDefinition object
  # @param {STARPEACE.building.simulation.civic.PortalDefinition~JSON} json - raw JSON object to parse into PortalDefinition
  # @return {STARPEACE.building.simulation.civic.PortalDefinition} PortalDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new PortalDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition

exports = module.exports = PortalDefinition
