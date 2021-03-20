import path from "path";
import { DefinePlugin } from "webpack";
import DotenvWebpack from 'dotenv-webpack';
import dotenv from 'dotenv';
import webpackNodeExternals from "webpack-node-externals";
import { commonConfig } from './common';

dotenv.config();

const DEV = process.env.NODE_ENV !== 'production';

const config = {
   ...commonConfig,
   entry: { router: path.resolve(__dirname, "../server/server.ts") },
   output: {
      path: path.resolve(__dirname, "../build"),
      filename: "bundle.js",
      publicPath: path.resolve(__dirname, "../build"),
   },
   target: 'async-node',

   module: {
      rules: [
         {
            test: /\.(ts|js)x?$/i,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: [
                     "@babel/preset-react",
                     "@babel/preset-typescript",
                     [
                        '@babel/env',
                        {
                           targets: {
                              browsers: ['last 2 versions'],
                           }
                        }
                     ],
                  ],
                  plugins: [
                     ['babel-plugin-styled-components', {
                        ssr: true,
                        minify: !DEV,
                        displayName: DEV,
                        fileName: DEV,
                     }],
                     "@react-loadable/revised/babel",
                  ],
               },
            },
         },
         {
            test: /\.(jpe?g|png|svg)$/,
            loader: 'url-loader',
            options: {
               limit: 1000,
               name: '[hash:16].[ext]',
               fallback: 'file-loader',

            },
         },
         {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
            exclude: [/node_modules/],
         }
      ],
   },
   externals: [
      webpackNodeExternals({
         modulesDir: path.resolve(__dirname, '../node_modules'),
      })
   ],
   plugins: [
      new DotenvWebpack(),
      new DefinePlugin({
         VARIABLES: JSON.stringify(process.env.VARIABLES),
         SERVER_BUILD: JSON.stringify(true),
      }),
   ],
};

export default config;
