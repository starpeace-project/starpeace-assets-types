import _ from 'lodash';

/**
 * @property {string} resourceId - identifier of resource
 * @property {number | undefined} minVelocity - minimum quantity of resource per hour
 * @property {number} maxVelocity - maximum quantity of resource per hour
 * @property {number} weightEfficiency - importance weight of efficiency on this quantity
 * @property {number} weightQuality - importance weight of quality on this quantity
 */
export interface ResourceVelocityWeightedJson {
  resourceId: string;
  minVelocity?: number | undefined;
  maxVelocity: number;
  weightEfficiency: number;
  weightQuality: number;
}

/**
 * Class representing a resource quantity and metadata
 * @memberof STARPEACE.industry
 *
 * @property {string} resourceId - identifier of resource
 * @property {number | undefined} minVelocity - minimum quantity of resource per hour
 * @property {number} maxVelocity - maximum quantity of resource per hour
 * @property {number} weightEfficiency - importance weight of efficiency on this quantity
 * @property {number} weightQuality - importance weight of qualityy on this quantity
 */
export class ResourceVelocityWeighted {
  resourceId: string;
  minVelocity: number | undefined;
  maxVelocity: number;
  weightEfficiency: number;
  weightQuality: number;

  constructor (resourceId: string, minVelocity: number | undefined, maxVelocity: number, weightEfficiency: number, weightQuality: number) {
    this.resourceId = resourceId;
    this.minVelocity = minVelocity;
    this.maxVelocity = maxVelocity;
    this.weightEfficiency = weightEfficiency;
    this.weightQuality = weightQuality;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.resourceId) || !this.resourceId.length) return false;
    if (this.minVelocity !== undefined && (this.minVelocity < 0 || this.minVelocity > this.maxVelocity)) return false;
    if (!_.isNumber(this.maxVelocity) || this.maxVelocity <= 0) return false;
    if (!_.isNumber(this.weightEfficiency) || this.weightEfficiency < 0) return false;
    if (!_.isNumber(this.weightQuality) || this.weightQuality < 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.industry.ResourceVelocityWeightedJson} JSON representation of ResourceVelocityWeighted
   */
  toJson (): ResourceVelocityWeightedJson {
    return {
      resourceId: this.resourceId,
      minVelocity: this.minVelocity,
      maxVelocity: this.maxVelocity,
      weightEfficiency: this.weightEfficiency,
      weightQuality: this.weightQuality
    };
  }

  /**
   * Parse raw JSON into a ResourceVelocityWeighted object
   * @params {STARPEACE.industry.ResourceVelocityJson} json - raw JSON object to parse into ResourceVelocityWeighted
   * @return {STARPEACE.industry.ResourceVelocity} ResourceVelocityWeighted representation of parsed JSON
   */
  static fromJson (json: ResourceVelocityWeightedJson): ResourceVelocityWeighted {
    return new ResourceVelocityWeighted(json.resourceId, json.minVelocity, json.maxVelocity, json.weightEfficiency ?? 0, json.weightQuality ?? 0);
  }
}
