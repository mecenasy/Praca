import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { ReactLoadablePlugin } from '@react-loadable/revised/webpack';

const config = {
   mode: "production",
   entry: path.resolve(__dirname, "../src/index.tsx"),
   output: {
      path: path.resolve(__dirname, "../build/public"),
      filename: "chunk-[name]-[chunkhash:7].js",
      publicPath: 'build/public/',
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
                  ],
               },
            },
         },
      ],
   },
   resolve: {
      extensions: [".tsx", ".ts",'.js'],
   },
   plugins: [
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
