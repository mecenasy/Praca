import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import { ReactLoadablePlugin } from '@react-loadable/revised/webpack';

const config = {
   mode: "development",
   output: {
      publicPath: "/",
   },
   entry: path.resolve(__dirname, '../src/index'),
   module: {
      rules: [
         {
            test: /\.(ts|js)x?$/i,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: [
                     "@babel/preset-env",
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
      extensions: [".tsx", ".ts", ".js"],
      alias: {
         '~': path.resolve(__dirname, '../src'),
      },
   },
   plugins: [
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
   ],
   devtool: "inline-source-map",
   devServer: {
      contentBase: path.join(__dirname, "build"),
      historyApiFallback: true,
      port: 4000,
      open: true,
      hot: true
   },
};

export default config;
