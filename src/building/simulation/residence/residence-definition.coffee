_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.residence.ResidenceDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {string} resident_type - identifier of resource type for which residence provides housing
# @property {number} capacity - capacity of resource for which building provides housing
# @property {number} efficiency - base efficiency of building
# @property {number} crime_resistence - base crime resistence of building
# @property {number} pollution_resistence - base pollution resistence of building
###

###*
# Class representing residence building simulation definition
# @memberof STARPEACE.building.simulation.residence
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {string} resident_type - identifier of resource type for which residence provides housing
# @property {number} capacity - capacity of resource for which building provides housing
# @property {number} efficiency - base efficiency of building
# @property {number} crime_resistence - base crime resistence of building
# @property {number} pollution_resistence - base pollution resistence of building
###
class ResidenceDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'RESIDENCE'

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.residence.ResidenceDefinition~JSON} JSON representation of ResidenceDefinition
  ###
  toJSON: () ->
    _.assign(super.toJSON(), {
      resident_type: @resident_type
      capacity: @capacity
      efficiency: @efficiency
      crime_resistence: @crime_resistence
      pollution_resistence: @pollution_resistence
    })

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless super.is_valid()

    return false unless _.isString(@resident_type) && @resident_type.length > 0
    return false unless _.isNumber(@capacity) && @capacity > 0
    return false unless _.isNumber(@efficiency) && @efficiency > 0 && @efficiency <= 4.0
    return false unless _.isNumber(@crime_resistence) && @crime_resistence >= 0 && @crime_resistence <= 4.0
    return false unless _.isNumber(@pollution_resistence) && @pollution_resistence >= 0 && @pollution_resistence <= 4.0

    true

  ###*
  # Parse raw JSON into a ResidenceDefinition object
  # @param {STARPEACE.building.simulation.residence.ResidenceDefinition~JSON} json - raw JSON object to parse into ResidenceDefinition
  # @return {STARPEACE.building.simulation.residence.ResidenceDefinition} ResidenceDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new ResidenceDefinition(json)
    definition.resident_type = json.resident_type
    definition.capacity = json.capacity
    definition.efficiency = json.efficiency
    definition.crime_resistence = json.crime_resistence || 0
    definition.pollution_resistence = json.pollution_resistence || 0
    definition

exports = module.exports = ResidenceDefinition
