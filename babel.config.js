module.exports = {
  presets: [
    'module:@react-native/babel-preset',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@shared': './src/shared',
          '@assets': './src/assets',
          '@module': './src/module',
          '@hymms': './src/module/hymms',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
