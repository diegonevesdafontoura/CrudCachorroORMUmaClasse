const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
//yarn add metro-minify-terser
//https://stackoverflow.com/questions/68059088/typeorm-sqlite-works-only-in-development-react-native-expo

config.resolver.assetExts.push('db');
config.transformer.minifierPath = 'metro-minify-terser';
config.transformer.minifierConfig = {
    ecma: 8,
    keep_classnames: true,
    keep_fnames: true,
    module: true,
    mangle: {
        module: true,
        keep_classnames: true,
        keep_fnames: true,
    },
};

module.exports = config;


