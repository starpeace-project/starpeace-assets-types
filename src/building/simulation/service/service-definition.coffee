_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

exports = module.exports = class ServiceDefinition extends SimulationDefinition

  toJSON: () ->
    _.assign(super.toJSON(), {
      labor: @labor
      service: @service
    })

  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && @labor?.length > 0
    return false if _.find(@labor, (item) -> !item.is_valid())?

    return false unless Array.isArray(@service) && @service?.length > 0
    return false if _.find(@service, (item) -> !item.is_valid())?

    true


  @from_json: (json) ->
    definition = new ServiceDefinition()
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition.service = _.map(json.service, ResourceQuantity.from_json)
    definition
