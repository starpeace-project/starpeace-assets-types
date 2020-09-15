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
exports = module.exports = class BankDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'BANK'

  ###*
  # Create a BankDefinition object
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
  # @return {STARPEACE.building.simulation.bank.BankDefinition~JSON} JSON representation of BankDefinition
  ###
  toJson: () ->
    _.assign(super.toJson(), {
      labor: _.map(@labor, (l) -> l.toJSON())
    })

  ###*
  # Parse raw JSON into a BankDefinition object
  # @param {STARPEACE.building.simulation.bank.BankDefinition~JSON} json - raw JSON object to parse into BankDefinition
  # @return {STARPEACE.building.simulation.bank.BankDefinition} BankDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new BankDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.fromJson)
    definition
