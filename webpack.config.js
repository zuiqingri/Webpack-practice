const path = require("path");

module.exports={
    entry:"./src/app.js",

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode:'development',
    devServer:{
        hot:true,
        //inline:true,
        //host:'0,0,0,0',
        port:4000,
        static:path.resolve(__dirname)
        //__dirname + '/dist',
        
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            //{test:/\.css$/,loader:"style-loader|css-loader"},
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/,
                options:{
                    presets:['@babel/preset-env']
                }
            }
        ]
    }
}