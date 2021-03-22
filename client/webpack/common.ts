import dotenv from 'dotenv';
dotenv.config();

const DEV = process.env.NODE_ENV !== 'production';

export const commonConfig = {
   mode: DEV ? 'development' : 'production',
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
                     "transform-class-properties",
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
   devtool: DEV ? 'inline-source-map' : false,
};
