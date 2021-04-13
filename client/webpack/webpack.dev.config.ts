import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import { ReactLoadablePlugin } from '@react-loadable/revised/webpack';
import DotenvWebpack from 'dotenv-webpack';
import { DefinePlugin } from "webpack";
import dotenv from 'dotenv';
import { commonConfig } from './common';

dotenv.config();

const config = {
   ...commonConfig,
   mode: "development",
   output: {
      publicPath: "/",
   },
   entry: path.resolve(__dirname, '../src/index'),
   plugins: [
      new DotenvWebpack(),
      new ForkTsCheckerWebpackPlugin(),
      new ESLintWebpackPlugin({
         extensions: ["ts", "tsx", "js"],
      }),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "../src/index.html"),
         inject: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new ReactLoadablePlugin({
         filename: path.resolve(__dirname, './build/react-loadable.json'),
      }),
      new DefinePlugin({
         DEV: JSON.stringify(process.env.NODE_ENV !== 'production'),
         VARIABLES: JSON.stringify(process.env.VARIABLES),
         SERVER_BUILD: JSON.stringify(false),
      }),
   ],
};

export default config;
