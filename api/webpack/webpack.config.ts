import path from "path";
import { DefinePlugin } from "webpack";
import DotenvWebpack from 'dotenv-webpack';
import dotenv from 'dotenv';
import webpackNodeExternals from "webpack-node-externals";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

dotenv.config();

const DEV = process.env.NODE_ENV !== 'production';

const config = {
   mode: DEV ? 'development' : 'production',
   entry: { router: path.resolve(__dirname, "../src/server.ts") },
   output: {
      path: path.resolve(__dirname, "../build"),
      filename: "server-bundle.js",
      publicPath: "build/",
   },
   target: 'async-node',
   externals: [
      webpackNodeExternals({
         modulesDir: path.resolve(__dirname, '../node_modules'),
      })
   ],
   plugins: [
      new CleanWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ESLintPlugin({
         extensions: ["ts"],
      }),
      new DotenvWebpack(),
      new DefinePlugin({
         DEV: JSON.stringify(process.env.NODE_ENV !== 'production'),
         PORT: JSON.stringify(process.env.PORT),
      }),
   ],
};

export default config;
