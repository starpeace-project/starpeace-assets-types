_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.bank.BankDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
###

###*
# Class representing bank building simulation definition
# @memberof STARPEACE.building.simulation.bank
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
###
class BankDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'BANK'

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.bank.BankDefinition~JSON} JSON representation of BankDefinition
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
    return false unless Array.isArray(@labor) && @labor?.length > 0 && _.every(@labor, (item) -> item.is_valid())

    true

  ###*
  # Parse raw JSON into a BankDefinition object
  # @param {STARPEACE.building.simulation.bank.BankDefinition~JSON} json - raw JSON object to parse into BankDefinition
  # @return {STARPEACE.building.simulation.bank.BankDefinition} BankDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new BankDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition

exports = module.exports = BankDefinition
