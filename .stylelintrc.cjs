module.exports = {
  // 扩展
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  // 插件"
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-less',
  // 规则
  rules: {}
}
