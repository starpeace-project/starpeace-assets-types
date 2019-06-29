_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.office.OfficeDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
# @property {number} capacity - capacity of resource for which building provides offices
# @property {number} efficiency - base efficiency of building
###

###*
# Class representing office building simulation definition
# @memberof STARPEACE.building.simulation.office
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
# @property {number} capacity - capacity of resource for which building provides offices
# @property {number} efficiency - base efficiency of building
###
class OfficeDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'OFFICE'

  ###*
  # Create a OfficeDefinition object
  # @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
  ###
  constructor: (json) ->
    super(json)

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.office.OfficeDefinition~JSON} JSON representation of OfficeDefinition
  ###
  toJSON: () ->
    _.assign(super.toJSON(), {
      labor: _.map(@labor, (l) -> l.toJSON())
      efficiency: @efficiency
      capacity: @capacity
    })

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && @labor?.length > 0 && _.every(@label, (l) -> l.is_valid())
    return false unless _.isNumber(@efficiency) && @efficiency > 0 && @efficiency <= 1.0
    return false unless _.isNumber(@capacity) && @capacity > 0

    true

  ###*
  # Parse raw JSON into a OfficeDefinition object
  # @param {STARPEACE.building.simulation.office.OfficeDefinition~JSON} json - raw JSON object to parse into OfficeDefinition
  # @return {STARPEACE.building.simulation.office.OfficeDefinition} OfficeDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new OfficeDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition.efficiency = json.efficiency
    definition.capacity = json.capacity
    definition

exports = module.exports = OfficeDefinition
