import typescript from 'rollup-plugin-typescript2';
import { watch } from 'rollup';

export default {
  input: './src/index.ts',
  output: {
    file: './build/bundle.js',
    format: 'cjs',
  },
  plugins: [
    typescript(),
  ],
  watch: {
    clearScreen: false,
    include: 'src/**',
    exclude: 'node_modules/**',
  },
};
