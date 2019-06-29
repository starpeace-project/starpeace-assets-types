_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.headquarters.FactoryStage~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
# @property {boolean} satellite - flag indicating whether building is satellite headquarters
# @property {string} satellite_category - satellite category if building is flagged as satellite
###

###*
# Class representing headquarters building simulation definition
# @memberof STARPEACE.building.simulation.headquarters
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
# @property {boolean} satellite - flag indicating whether building is satellite headquarters
# @property {string} satellite_category - satellite category if building is flagged as satellite
###
class HeadquartersDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'HEADQUARTERS'

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.headquarters.HeadquartersDefinition~JSON} JSON representation of HeadquartersDefinition
  ###
  toJSON: () ->
    json = _.assign(super.toJSON(), {
      labor: _.map(@labor, (l) -> l.toJSON())
      satellite: @satellite
    })
    json.satellite_category = @satellite_category if @satellite
    json

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && @labor?.length > 0 && _.every(@label, (l) -> l.is_valid())
    return false unless !@satellite || _.isString(@satellite_category) && @satellite_category.length > 0

    return false unless @beauty > 0 # TODO: may want to revisit for crime hq's

    true

  ###*
  # Parse raw JSON into a HeadquartersDefinition object
  # @param {STARPEACE.building.simulation.headquarters.HeadquartersDefinition~JSON} json - raw JSON object to parse into HeadquartersDefinition
  # @return {STARPEACE.building.simulation.headquarters.HeadquartersDefinition} HeadquartersDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new HeadquartersDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition.satellite = json.satellite || false
    definition.satellite_category = json.satellite_category
    definition

exports = module.exports = HeadquartersDefinition
