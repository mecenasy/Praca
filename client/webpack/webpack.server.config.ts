import path from "path";
import webpack from "webpack";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
// import ESLintPlugin from "eslint-webpack-plugin";
// import { CleanWebpackPlugin } from "clean-webpack-plugin";
import webpackNodeExternals from "webpack-node-externals";

const config: webpack.Configuration = {
   mode: 'development',
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
               },
            },
         },
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
   // plugins: [
   //    new HtmlWebpackPlugin({
   //       template: path.resolve(__dirname, "../src/index.html"),
   //    }),
   //    new ForkTsCheckerWebpackPlugin(),
   //    new ESLintPlugin({
   //       extensions: ["ts", "tsx"],
   //    }),
   //    new CleanWebpackPlugin(),
   // ],
};

export default config;
