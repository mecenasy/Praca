import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";

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
               },
            },
         },
      ],
   },
   resolve: {
      extensions: [".tsx", ".ts",".js"],
      alias: {
         '~': path.resolve(__dirname, '../src'),
      },
   },
   plugins: [
      // new ForkTsCheckerWebpackPlugin(),
      new ESLintWebpackPlugin({
         extensions: ["ts", "tsx", "js"],
      }),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "../src/index.html"),
         inject: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
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
