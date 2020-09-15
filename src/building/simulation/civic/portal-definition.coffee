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
exports = module.exports = class PortalDefinition extends SimulationDefinition
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
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless super.isValid()
    return false unless Array.isArray(@labor) && @labor?.length > 0 && _.every(@labor, (l) -> l.isValid())
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.civic.PortalDefinition~JSON} JSON representation of PortalDefinition
  ###
  toJson: () ->
    _.assign(super.toJson(), {
      labor: _.map(@labor, (l) -> l.toJson())
    })

  ###*
  # Parse raw JSON into a PortalDefinition object
  # @param {STARPEACE.building.simulation.civic.PortalDefinition~JSON} json - raw JSON object to parse into PortalDefinition
  # @return {STARPEACE.building.simulation.civic.PortalDefinition} PortalDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new PortalDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.fromJson)
    definition
