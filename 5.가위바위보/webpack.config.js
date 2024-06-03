const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

//webpack- 많은 script를 하나로 관리
module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        //확장자 처리
        extensions: ['.js','.vue']
    },
    //entry, module, plugin, output - 웹팩의 주요설정
    entry: {
        //대표가 될 script파일
        app: path.join(__dirname, 'main.js') //'./main.js' 와 같다
    },
    module: {
        rules: [{
            test: /\.vue$/,
            //use와 loader는 동일합니다
            use: 'vue-loader'
        },{
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader',
            ]
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        //대표 script파일 -> output 최종 결과물
        filename: '[name].js', //'app.js'
        path: path.join(__dirname, 'dist'), //path: './dist' 와 같다,
        publicPath: '/dist', //webpack-dev-server 사용 시 같이 적어줘야함
    }
};
