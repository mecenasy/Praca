import path from "path";
import webpack from "webpack";
import DotenvWebpack from 'dotenv-webpack';
import dotenv from 'dotenv';
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
// import ESLintPlugin from "eslint-webpack-plugin";
// import { CleanWebpackPlugin } from "clean-webpack-plugin";
import webpackNodeExternals from "webpack-node-externals";

dotenv.config();

const DEV = process.env.NODE_ENV !== 'production';

const config: webpack.Configuration = {
   mode: DEV ? 'development' : 'production',
   entry: { router: path.resolve(__dirname, "../server/server.tsx") },
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

   resolve: {
      extensions: [".tsx", ".ts", '.js'],
   },
   plugins: [
      new DotenvWebpack(),
      new webpack.DefinePlugin({
         VARIABLES: process.env.VARIABLES,
      }),
      //    new HtmlWebpackPlugin({
      //       template: path.resolve(__dirname, "../src/index.html"),
      //    }),
      //    new ForkTsCheckerWebpackPlugin(),
      //    new ESLintPlugin({
      //       extensions: ["ts", "tsx"],
      //    }),
      //    new CleanWebpackPlugin(),
   ],
};

export default config;
