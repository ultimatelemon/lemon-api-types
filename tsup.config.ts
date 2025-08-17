import { esbuildPluginVersionInjector } from 'esbuild-plugin-version-injector';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    auth: 'src/auth/index.ts',
    core: 'src/core/index.ts',
    routes: 'src/routes/index.ts'
  },
  external: [],
  noExternal: [],
  platform: 'node',
  format: ['cjs', 'esm'],
  target: 'es2022',
  skipNodeModulesBundle: true,
  clean: true,
  shims: true,
  cjsInterop: true,
  minify: false,
  terserOptions: {
    mangle: false,
    keep_classnames: true,
    keep_fnames: true
  },
  splitting: false,
  keepNames: true,
  dts: true,
  sourcemap: true,
  esbuildPlugins: [esbuildPluginVersionInjector()],
  treeshake: false,
  outDir: 'build'
});
