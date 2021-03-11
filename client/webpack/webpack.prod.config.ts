import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { ReactLoadablePlugin } from '@react-loadable/revised/webpack';
import DotenvWebpack from 'dotenv-webpack';
import dotenv from 'dotenv';

dotenv.config();

const DEV = process.env.NODE_ENV !== 'production';

const config = {
   mode: DEV ? 'development' : 'production',
   entry: path.resolve(__dirname, "../src/index.tsx"),
   output: {
      path: path.resolve(__dirname, "../build/public"),
      filename: "[chunkhash:7].js",
      publicPath: 'build/',
   },
   module: {
      rules: [
         {
            test: /\.(ts|js)x?$/i,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: [
                     '@babel/preset-env',
                     "@babel/preset-react",
                     "@babel/preset-typescript",
                  ],
                  plugins: [
                     "@react-loadable/revised/babel",
                     ['babel-plugin-styled-components', {
                        ssr: true,
                        minify: !DEV,
                        displayName: DEV,
                        fileName: DEV,
                     }],
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
         DEV ? {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
            exclude: [/node_modules/],
         } : {}
      ],
   },
   resolve: {
      extensions: [".tsx", ".ts", '.js'],
   },
   plugins: [
      new DotenvWebpack(),
      new ReactLoadablePlugin({
         filename: '../react-loadable.json',
      }),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "../src/index.html"),
      }),
      new ForkTsCheckerWebpackPlugin(),
      new ESLintPlugin({
         extensions: ["ts", "tsx"],
      }),
      new CleanWebpackPlugin(),
   ],
};

export default config;
