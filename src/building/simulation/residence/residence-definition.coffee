_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.residence.ResidenceDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {string} residentType - identifier of resource type for which residence provides housing
# @property {number} capacity - capacity of resource for which building provides housing
# @property {number} efficiency - base efficiency of building
# @property {number} crimeResistence - base crime resistence of building
# @property {number} pollutionResistence - base pollution resistence of building
###

###*
# Class representing residence building simulation definition
# @memberof STARPEACE.building.simulation.residence
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {string} residentType - identifier of resource type for which residence provides housing
# @property {number} capacity - capacity of resource for which building provides housing
# @property {number} efficiency - base efficiency of building
# @property {number} crimeResistence - base crime resistence of building
# @property {number} pollutionResistence - base pollution resistence of building
###
exports = module.exports = class ResidenceDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'RESIDENCE'

  ###*
  # Create a ResidenceDefinition object
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
    return false unless _.isString(@residentType) && @residentType.length > 0
    return false unless _.isNumber(@capacity) && @capacity > 0
    return false unless _.isNumber(@efficiency) && @efficiency > 0 && @efficiency <= 4.0
    return false unless _.isNumber(@crimeResistence) && @crimeResistence >= 0 && @crimeResistence <= 4.0
    return false unless _.isNumber(@pollutionResistence) && @pollutionResistence >= 0 && @pollutionResistence <= 4.0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.residence.ResidenceDefinition~JSON} JSON representation of ResidenceDefinition
  ###
  toJson: () ->
    _.assign(super.toJson(), {
      residentType: @residentType
      capacity: @capacity
      efficiency: @efficiency
      crimeResistence: @crimeResistence
      pollutionResistence: @pollutionResistence
    })

  ###*
  # Parse raw JSON into a ResidenceDefinition object
  # @param {STARPEACE.building.simulation.residence.ResidenceDefinition~JSON} json - raw JSON object to parse into ResidenceDefinition
  # @return {STARPEACE.building.simulation.residence.ResidenceDefinition} ResidenceDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new ResidenceDefinition(json)
    definition.residentType = json.residentType
    definition.capacity = json.capacity
    definition.efficiency = json.efficiency
    definition.crimeResistence = json.crimeResistence || 0
    definition.pollutionResistence = json.pollutionResistence || 0
    definition
