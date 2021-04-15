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
                     "@babel/preset-typescript",
                  ],
                  plugins: [
                     "transform-class-properties",
                  ],
               },
            },
         },
      ],
   },
   resolve: {
      extensions: [".ts", '.js'],
   },
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
         MONGO_DB_SERVER: JSON.stringify(process.env.MONGO_DB_SERVER),
         MONGO_DB_USER: JSON.stringify(process.env.MONGO_DB_USER),
         MONGO_DB_PASSWORD: JSON.stringify(process.env.MONGO_DB_PASSWORD),
         MONGO_DB_DATA: JSON.stringify(process.env.MONGO_DB_DATA),
         CORS_ORIGIN_PATH: JSON.stringify(process.env.CORS_ORIGIN_PATH),
         ASSETS_FOLDER: JSON.stringify(process.env.ASSETS_FOLDER),
         BASE_HOST_URL: JSON.stringify(process.env.BASE_HOST_URL),
         BASE_HOST_PROTOCOL: JSON.stringify(process.env.BASE_HOST_PROTOCOL),
      }),
   ],
};

export default config;
