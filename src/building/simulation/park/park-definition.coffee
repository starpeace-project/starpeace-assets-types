_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

exports = module.exports = class ParkDefinition extends SimulationDefinition

  toJSON: () ->
    _.assign(super.toJSON(), {
      labor: @labor
      sport: @sport
    })

  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && @labor?.length > 0
    return false if _.find(@labor, (item) -> !item.is_valid())?

    return false unless _.isNumber(@sport)

    return false unless (@beauty > 0 || @sport > 0)

    true


  @from_json: (json) ->
    definition = new ParkDefinition()
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition.sport = json.sport || 0
    definition
