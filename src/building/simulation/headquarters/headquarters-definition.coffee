_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.headquarters.HeadquartersDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
# @property {boolean} satellite - flag indicating whether building is satellite headquarters
# @property {string} satelliteCategory - satellite category if building is flagged as satellite
###

###*
# Class representing headquarters building simulation definition
# @memberof STARPEACE.building.simulation.headquarters
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
# @property {boolean} satellite - flag indicating whether building is satellite headquarters
# @property {string} satelliteCategory - satellite category if building is flagged as satellite
###
exports = module.exports = class HeadquartersDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'HEADQUARTERS'

  ###*
  # Create a HeadquartersDefinition object
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
    return false unless Array.isArray(@labor) && @labor?.length > 0 && _.every(@label, (l) -> l.isValid())
    return false unless !@satellite || _.isString(@satelliteCategory) && @satelliteCategory.length > 0
    return false unless @beauty > 0 # TODO: may want to revisit for crime hq's
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.headquarters.HeadquartersDefinition~JSON} JSON representation of HeadquartersDefinition
  ###
  toJson: () ->
    json = _.assign(super.toJson(), {
      labor: _.map(@labor, (l) -> l.toJson())
      satellite: @satellite
    })
    json.satelliteCategory = @satelliteCategory if @satellite
    json

  ###*
  # Parse raw JSON into a HeadquartersDefinition object
  # @param {STARPEACE.building.simulation.headquarters.HeadquartersDefinition~JSON} json - raw JSON object to parse into HeadquartersDefinition
  # @return {STARPEACE.building.simulation.headquarters.HeadquartersDefinition} HeadquartersDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new HeadquartersDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.fromJson)
    definition.satellite = json.satellite || false
    definition.satelliteCategory = json.satelliteCategory
    definition
