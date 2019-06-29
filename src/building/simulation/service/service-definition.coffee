_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.service.FactoryStage~JSON
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
class ServiceDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'SERVICE'

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.service.ServiceDefinition~JSON} JSON representation of ServiceDefinition
  ###
  toJSON: () ->
    _.assign(super.toJSON(), {
      labor: _.map(@labor, (l) -> l.toJSON())
      service: _.map(@service, (s) -> s.toJSON())
    })

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && @labor?.length > 0
    return false if _.find(@labor, (item) -> !item.is_valid())?

    return false unless Array.isArray(@service) && @service?.length > 0
    return false if _.find(@service, (item) -> !item.is_valid())?

    true

  ###*
  # Parse raw JSON into a ServiceDefinition object
  # @param {STARPEACE.building.simulation.service.ServiceDefinition~JSON} json - raw JSON object to parse into ServiceDefinition
  # @return {STARPEACE.building.simulation.service.ServiceDefinition} ServiceDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new ServiceDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition.service = _.map(json.service, ResourceQuantity.from_json)
    definition

exports = module.exports = ServiceDefinition
