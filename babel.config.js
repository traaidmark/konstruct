module.exports = {
  comments: false,
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        "namespace": "traaidmark-konstruct",
        "minify": true,
        "transpileTemplateLiterals": true
      }
    ]
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
