import { UserConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }): UserConfig => {
  const root = process.cwd()
  const envPrefix: string[] = ['APP_']
  const env = loadEnv(mode, root, envPrefix)
  process.env = { ...process.env, ...env }
  const userConfig: UserConfig = {
    plugins: [react()],
    resolve: {
      alias: {
        '@assets': resolve(root, './src/assets'),
        '@components': resolve(root, './src/components'),
        '@configs': resolve(root, './src/configs'),
        '@hooks': resolve(root, './src/hooks'),
        '@layouts': resolve(root, './src/layouts'),
        '@pages': resolve(root, './src/pages'),
        '@routes': resolve(root, './src/routes'),
      },
    },
    server: {
      port: 8080,
    },
    build: {
      outDir: resolve(root, './build'),
    },
  }
  return userConfig
}
