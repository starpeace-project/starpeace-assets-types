_ = require('lodash')

ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.factory.FactoryStage~JSON
# @property {number} index - number index of stage, starting at one and increasing
# @property {number} duration - length of stage duration in calendar hours
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} operations - array of resource quantities required for building operations
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} inputs - array of input resource quantities
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} outputs - array of output resource quantities
###

###*
# Class representing factory building simulation stage metadata
# @memberof STARPEACE.building.simulation.factory
#
# @property {number} index - number index of stage, starting at one and increasing
# @property {number} duration - length of stage duration in calendar hours
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
# @property {STARPEACE.industry.ResourceQuantity[]} operations - array of resource quantities required for building operations
# @property {STARPEACE.industry.ResourceQuantity[]} inputs - array of input resource quantities
# @property {STARPEACE.industry.ResourceQuantity[]} outputs - array of output resource quantities
###
class FactoryStage

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.factory.FactoryStage~JSON} JSON representation of FactoryStage
  ###
  toJSON: () ->
    {
      index: @index
      duration: @duration
      stage_inputs: @stage_inputs
      labor: _.map(@labor, (l) -> l.toJSON())
      operations: _.map(@operations, (o) -> o.toJSON())
      inputs: _.map(@inputs, (i) -> i.toJSON())
      outputs: _.map(@outputs, (o) -> o.toJSON())
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isNumber(@index) && @index > 0
    return false unless _.isNumber(@duration) && @duration > 0

    # FIXME: TODO: validate stage_inputs

    return false unless Array.isArray(@labor) && @labor?.length > 0 && _.every(@labor, (l) -> l.is_valid())
    return false unless Array.isArray(@operations) && (!@operations.length || _.every(@operations, (o) -> o.is_valid()))
    return false unless Array.isArray(@inputs) && (!@inputs.length || _.every(@inputs, (i) -> i.is_valid()))
    return false unless Array.isArray(@outputs) && (!@outputs.length || _.every(@outputs, (o) -> o.is_valid()))
    true

  ###*
  # Parse raw JSON into a FactoryStage object
  # @param {STARPEACE.building.simulation.factory.FactoryStage~JSON} json - raw JSON object to parse into FactoryStage
  # @return {STARPEACE.building.simulation.factory.FactoryStage} FactoryStage representation of parsed JSON
  ###
  @from_json: (json) ->
    stage = new FactoryStage()
    stage.index = json.index
    stage.duration = json.duration
    stage.stage_inputs = json.stage_inputs
    stage.labor = _.map(json.labor, ResourceQuantity.from_json)
    stage.operations = _.map(json.operations, ResourceQuantity.from_json)
    stage.inputs = _.map(json.inputs, ResourceQuantity.from_json)
    stage.outputs = _.map(json.outputs, ResourceQuantity.from_json)
    stage

exports = module.exports = FactoryStage
