export interface GameState {
  energy: number;
  totalEnergyProduced: number;
  clickPower: number;
  generatorCount: number;
  generatorPower: number;
  upgradeLevels: Record<string, number>;
}

export function createInitialGameState(): GameState {
  return {
    energy: 0,
    totalEnergyProduced: 0,
    clickPower: 1,
    generatorCount: 0,
    generatorPower: 1,
    upgradeLevels: {},
  };
}