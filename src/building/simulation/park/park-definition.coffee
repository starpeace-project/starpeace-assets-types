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
exports = module.exports = class ParkDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'PARK'

  ###*
  # Create a ParkDefinition object
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
    return false unless Array.isArray(@labor) && (!@labor.length || _.every(@labor, (l) -> l.isValid()))
    return false unless _.isNumber(@sport)
    return false unless (@beauty > 0 || @sport > 0)
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.park.ParkDefinition~JSON} JSON representation of ParkDefinition
  ###
  toJson: () ->
    _.assign(super.toJson(), {
      labor: _.map(@labor, (l) -> l.toJson())
      sport: @sport
    })

  ###*
  # Parse raw JSON into a ParkDefinition object
  # @param {STARPEACE.building.simulation.park.ParkDefinition~JSON} json - raw JSON object to parse into ParkDefinition
  # @return {STARPEACE.building.simulation.park.ParkDefinition} ParkDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new ParkDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.fromJson)
    definition.sport = json.sport || 0
    definition
