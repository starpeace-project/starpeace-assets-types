_ = require('lodash')

exports = module.exports = class BuildingDefinition
  constructor: (@id) ->
    @seal_ids = []

  name_key: () -> "building.#{@id}.name"

  is_valid: () ->
    return false unless @id?.length > 0

    return false unless @image_id?.length > 0
    return false unless @construction_image_id?.length > 0

    return false unless @zone?.length > 0
    return false unless @seal_id?.length > 0
    return false unless @category?.length > 0
    return false unless @industry_type?.length > 0

    true


  toJSON: () ->
    json = {
      id: @id
      name_key: @name_key()
      image_id: @image_id
      construction_image_id: @construction_image_id
    }
    json.category = @category if @category?.length
    json.seal_id = @seal_id if @seal_id?.length
    json.industry_type = @industry_type if @industry_type?.length
    json.zone = @zone if @zone?.length
    json.restricted = true if @restricted
    json.required_invention_ids = @required_invention_ids if @required_invention_ids?.length
    json

  @from_json: (json) ->
    definition = new BuildingDefinition(json.id)
    definition.image_id = json.image_id
    definition.construction_image_id = json.construction_image_id
    definition.name = json.name
    definition.zone = json.zone
    definition.category = json.category
    definition.industry_type = json.industry_type
    definition.seal_id = json.seal_id
    definition.restricted = json.restricted || false
    definition.required_invention_ids = json.required_inventions
    definition
