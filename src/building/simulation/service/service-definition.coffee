_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.service.ServiceDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} service - array of output service resource quantities provided by building
###

###*
# Class representing service building simulation definition
# @memberof STARPEACE.building.simulation.service
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
# @property {STARPEACE.industry.ResourceQuantity[]} service - array of output service resource quantities provided by building
###
exports = module.exports = class ServiceDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'SERVICE'

  ###*
  # Create a ServiceDefinition object
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
    return false unless Array.isArray(@labor) && @labor?.length > 0
    return false if _.find(@labor, (item) -> !item.isValid())?
    return false unless Array.isArray(@service) && @service?.length > 0
    return false if _.find(@service, (item) -> !item.isValid())?
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.service.ServiceDefinition~JSON} JSON representation of ServiceDefinition
  ###
  toJson: () ->
    _.assign(super.toJson(), {
      labor: _.map(@labor, (l) -> l.toJson())
      service: _.map(@service, (s) -> s.toJson())
    })

  ###*
  # Parse raw JSON into a ServiceDefinition object
  # @param {STARPEACE.building.simulation.service.ServiceDefinition~JSON} json - raw JSON object to parse into ServiceDefinition
  # @return {STARPEACE.building.simulation.service.ServiceDefinition} ServiceDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new ServiceDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.fromJson)
    definition.service = _.map(json.service, ResourceQuantity.fromJson)
    definition
