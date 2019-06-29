_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.civic.MausoleumDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
###

###*
# Class representing mausoleum building simulation definition
# @memberof STARPEACE.building.simulation.civic
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
###
class MausoleumDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'MAUSOLEUM'

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.civic.MausoleumDefinition~JSON} JSON representation of MausoleumDefinition
  ###
  toJSON: () ->
    _.assign(super.toJSON(), {
      labor: _.map(@labor, (l) -> l.toJSON())
    })

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && @labor?.length > 0
    return false if _.find(@labor, (item) -> !item.is_valid())?

    true

  ###*
  # Parse raw JSON into a MausoleumDefinition object
  # @param {STARPEACE.building.simulation.civic.MausoleumDefinition~JSON} json - raw JSON object to parse into MausoleumDefinition
  # @return {STARPEACE.building.simulation.civic.MausoleumDefinition} MausoleumDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new MausoleumDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition

exports = module.exports = MausoleumDefinition
