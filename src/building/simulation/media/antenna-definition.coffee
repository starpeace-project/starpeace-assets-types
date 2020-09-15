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
exports = module.exports = class AntennaDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'ANTENNA'

  ###*
  # Create a AntennaDefinition object
  # @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
  ###
  constructor: (json) ->
    super(json)

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.media.AntennaDefinition~JSON} JSON representation of AntennaDefinition
  ###
  toJson: () ->
    _.assign(super.toJson(), {
      labor: _.map(@labor, (l) -> l.toJson())
      range: @range
    })

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless super.isValid()
    return false unless Array.isArray(@labor) && @labor?.length > 0 && _.every(@labor, (l) -> l.isValid())
    return false unless _.isNumber(@range) && @range > 0
    true

  ###*
  # Parse raw JSON into a AntennaDefinition object
  # @param {STARPEACE.building.simulation.media.AntennaDefinition~JSON} json - raw JSON object to parse into AntennaDefinition
  # @return {STARPEACE.building.simulation.media.AntennaDefinition} AntennaDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new AntennaDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.fromJson)
    definition.range = json.range
    definition
