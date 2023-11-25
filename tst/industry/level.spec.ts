import { assert, test } from 'vitest';

import { Level } from '../../src/index.js';

test('Level', () => {
  test('#fromJson', () => {
    test('should be able to create from json', async () => {
      const JSON = {
        id: 'ENTREPRENEUR',
        label: {
          DE: "Unternehmer",
          EN: "Entrepreneur",
          ES: "Empresario",
          FR: "Entrepreneur",
          IT: "Imprenditore",
          PT: "Empreendedor"
        },
        description: {
          DE: "Entwicklung einer Strategie.",
          EN: "Developing a strategy.",
          ES: "Desarrollar una estrategia.",
          FR: "Développer une stratégie.",
          IT: "Sviluppare una strategia.",
          PT: "Desenvolvendo uma estratégia."
        },
        level: 2,
        facilityLimit: 150,
        supplierPriority: true,
        supplierIfel: true,
        rewardPrestige: 50,
        refundResearch: 0.33,
        refundDemolition: 0.66,
        requiredFee: 100000000,
        requiredHourlyProfit: 1000,
        requiredPrestige: 0
      };

      const level = Level.fromJson(JSON);
      assert.isOk(level);
      assert.strictEqual(level.id, JSON.id);
      assert.deepStrictEqual(level.label.toJson(), JSON.label);
      assert.deepStrictEqual(level.description.toJson(), JSON.description);
      assert.strictEqual(level.level, JSON.level);
      assert.strictEqual(level.facilityLimit, JSON.facilityLimit);
      assert.strictEqual(level.supplierPriority, JSON.supplierPriority);
      assert.strictEqual(level.supplierIfel, JSON.supplierIfel);
      assert.strictEqual(level.rewardPrestige, JSON.rewardPrestige);
      assert.strictEqual(level.refundResearch, JSON.refundResearch);
      assert.strictEqual(level.refundDemolition, JSON.refundDemolition);
      assert.strictEqual(level.requiredFee, JSON.requiredFee);
      assert.strictEqual(level.requiredHourlyProfit, JSON.requiredHourlyProfit);
      assert.strictEqual(level.requiredPrestige, JSON.requiredPrestige);
      assert.isOk(level.isValid());
      assert.deepStrictEqual(level.toJson(), JSON);
    });
  });
});
