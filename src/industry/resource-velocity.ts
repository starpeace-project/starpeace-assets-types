import _ from 'lodash';

/**
 * @property {string} resourceId - identifier of resource
 * @property {number | undefined} minVelocity - minimum quantity of resource per hour
 * @property {number} maxVelocity - maximum quantity of resource per hour
 */
export interface ResourceVelocityJson {
  resourceId: string;
  minVelocity?: number | undefined;
  maxVelocity: number;
}

/**
 * Class representing a resource quantity and metadata
 * @memberof STARPEACE.industry
 *
 * @property {string} resourceId - identifier of resource
 * @property {number | undefined} minVelocity - minimum quantity of resource per hour
 * @property {number} maxVelocity - maximum quantity of resource per hour
 */
export class ResourceVelocity {
  resourceId: string;
  minVelocity: number | undefined;
  maxVelocity: number;

  constructor (resourceId: string, minVelocity: number | undefined, maxVelocity: number) {
    this.resourceId = resourceId;
    this.minVelocity = minVelocity;
    this.maxVelocity = maxVelocity;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.resourceId) || !this.resourceId.length) return false;
    if (this.minVelocity !== undefined && (this.minVelocity < 0 || this.minVelocity > this.maxVelocity)) return false;
    if (!_.isNumber(this.maxVelocity) || this.maxVelocity <= 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.industry.ResourceVelocityJson} JSON representation of ResourceVelocity
   */
  toJson (): ResourceVelocityJson {
    return {
      resourceId: this.resourceId,
      minVelocity: this.minVelocity,
      maxVelocity: this.maxVelocity
    };
  }

  /**
   * Parse raw JSON into a ResourceVelocity object
   * @params {STARPEACE.industry.ResourceVelocityJson} json - raw JSON object to parse into ResourceVelocity
   * @return {STARPEACE.industry.ResourceVelocity} ResourceVelocity representation of parsed JSON
   */
  static fromJson (json: ResourceVelocityJson): ResourceVelocity {
    return new ResourceVelocity(json.resourceId, json.minVelocity, json.maxVelocity);
  }
}
