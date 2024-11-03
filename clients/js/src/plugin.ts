import { UmiPlugin } from '@metaplex-foundation/umi';
import { createBghPokeProgram } from './generated';

export const bghPoke = (): UmiPlugin => ({
  install(umi) {
    umi.programs.add(createBghPokeProgram(), false);
  },
});
