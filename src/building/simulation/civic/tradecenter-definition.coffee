_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.civic.TradecenterDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
###

###*
# Class representing tradecenter building simulation definition
# @memberof STARPEACE.building.simulation.civic
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
###
class TradecenterDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'TRADECENTER'

  ###*
  # Create a TradecenterDefinition object
  # @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
  ###
  constructor: (json) ->
    super(json)

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.civic.TradecenterDefinition~JSON} JSON representation of TradecenterDefinition
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
  # Parse raw JSON into a TradecenterDefinition object
  # @param {STARPEACE.building.simulation.civic.TradecenterDefinition~JSON} json - raw JSON object to parse into TradecenterDefinition
  # @return {STARPEACE.building.simulation.civic.TradecenterDefinition} TradecenterDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new TradecenterDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition

exports = module.exports = TradecenterDefinition
