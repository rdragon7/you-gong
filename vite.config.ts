import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(),
    visualizer({
      open: true, // 注意这里要设置为true，否则无效
      gzipSize: true
    })
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    modules: {
      // 支持样式文件中短横线形式
      localsConvention: 'camelCase'
    }
  }
})
