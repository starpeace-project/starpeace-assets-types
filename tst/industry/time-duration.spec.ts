import { assert, test } from 'vitest';

import { TimeDuration, TimeDurationJson } from '../../src/index.js';

test('TimeDuration #fromJson should be able to create from json', async () => {
  const JSON: TimeDurationJson = {
    unit: 'DAY',
    value: 1234,
  };

  const quantity = TimeDuration.fromJson(JSON);
  assert.isOk(quantity);
  assert.strictEqual(quantity.unit, JSON.unit);
  assert.strictEqual(quantity.value, JSON.value);
  assert.isOk(quantity.isValid());
  assert.deepStrictEqual(quantity.toJson(), JSON);
});
