import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { createStyleImportPlugin } from 'vite-plugin-style-import';

import viteImagemin from 'vite-plugin-imagemin';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer'
// import progress from 'vite-plugin-progress';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: [
        'vue',
        'pinia',
        'vue-router',
        {
          'vant': ['Toast']
        },
      ],
      eslintrc: {
        enabled: true,
      }
    }),
    Components({
      dts: 'src/types/components.d.ts',
      resolvers: [VantResolver()],
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'vant',
          esModule: false,
          resolveStyle: (name) => `vant/es/${name}/style/index`
        }
      ]
    }),
    viteImagemin({
      verbose: false,
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    viteCompression({
      verbose: false,
      disable: false, //是否禁用
      deleteOriginFile: false, //删除源文件
      threshold: 10240, //压缩前最小文件大小
      algorithm: 'gzip', //压缩算法
      ext: '.gz', //文件类型
    }),
    visualizer({
      template: 'treemap',
      filename: './node_modules/.cache/visualizer/stats.html',
      open: false,
      gzipSize: true
    }),
    // progress(),
  ],

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 用于全局导入，以避免需要单独导入每个样式文件。
          // reference:  避免重复引用
          hack: `true; @import (reference) "${path.resolve("src/assets/less/variables.less")}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  esbuild: {
    pure: ['console.log', 'debugger']
  },

  build: {
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          if(assetInfo.name) {
            var info = assetInfo.name.split('.')
            var extType = info[info.length - 1]
            if (
              /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
            ) {
              extType = 'media'
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = 'img'
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'fonts'
            }
            return `static/${extType}/[name]-[hash][extname]`
          }
          return `static/[name]-[hash][extname]`
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js'
      }
    }
  },

  server: {
    port: 8888,
    open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    hmr: {
      overlay: false // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    host: '0.0.0.0' // IP配置，支持从IP启动
  },
})
