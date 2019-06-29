_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.park.ParkDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
# @property {number} sport - amount of sport provided by building per hour
###

###*
# Class representing park building simulation definition
# @memberof STARPEACE.building.simulation.park
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
# @property {number} sport - amount of sport provided by building per hour
###
class ParkDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'PARK'

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.park.ParkDefinition~JSON} JSON representation of ParkDefinition
  ###
  toJSON: () ->
    _.assign(super.toJSON(), {
      labor: _.map(@labor, (l) -> l.toJSON())
      sport: @sport
    })

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && (!@labor.length || _.every(@labor, (l) -> l.is_valid()))

    return false unless _.isNumber(@sport)

    return false unless (@beauty > 0 || @sport > 0)

    true

  ###*
  # Parse raw JSON into a ParkDefinition object
  # @param {STARPEACE.building.simulation.park.ParkDefinition~JSON} json - raw JSON object to parse into ParkDefinition
  # @return {STARPEACE.building.simulation.park.ParkDefinition} ParkDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new ParkDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition.sport = json.sport || 0
    definition

exports = module.exports = ParkDefinition
