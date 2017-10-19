const commonPreset = {
  presets: [
    require.resolve('babel-preset-react')
  ],
  plugins: [
    require.resolve('babel-plugin-add-module-exports'),

    // stage 3
    require.resolve('babel-plugin-transform-async-generator-functions'),
    require.resolve('babel-plugin-transform-object-rest-spread'),

    // stage 2
    require.resolve('babel-plugin-transform-class-properties')
  ]
}

const babelWebpackPreset = {
  presets: [
    [require.resolve('babel-preset-env'), {
      targets: {
        browsers: [
          'last 2 versions',
          '> 5%',
          'Safari 7' // for PhantomJS support
        ]
      },
      useBuiltIns: true,
    }],
    commonPreset
  ]
}

module.exports = babelWebpackPreset