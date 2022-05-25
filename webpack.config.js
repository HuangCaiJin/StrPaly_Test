var webpack=require('webpack');
 
module.exports = {
    mode:'development',
    entry: {
		index:"./src/index.js"
	},
    output: {
        path: __dirname,
        filename: "./dist/[name].js"
    },
    module: {
        
    },
    plugins:[
        
    ]
};