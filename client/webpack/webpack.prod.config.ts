import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { ReactLoadablePlugin } from '@react-loadable/revised/webpack';
import DotenvWebpack from 'dotenv-webpack';
import { commonConfig } from './common';

const config = {
   ...commonConfig,
   entry: path.resolve(__dirname, "../src/index.tsx"),
   output: {
      path: path.resolve(__dirname, "../build/public"),
      filename: "[chunkhash:7].js",
      publicPath: 'build/',
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
