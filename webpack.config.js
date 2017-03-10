/**
 * Created by xiaoqi on 2017/3/10.
 */
/*import webpack from 'webpack'
import path from 'path';*/
var webpack =require('webpack');
var path =require('path');

module.exports= function (env) {
    return {
        devtool: 'cheap-scource-map',
        entry: {
            main: path.resolve(__dirname, './app/main.js')
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        module:{
            loaders:[
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loaders: [ 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'],
                    include: path.join(__dirname, 'app')
                },
                {
                    test: /\.css$/,
                    loader: "style-loader?sourceMap!css-loader",
                    include: path.join(__dirname, 'app')
                },
            ]
        }
    };
};