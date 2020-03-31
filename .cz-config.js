'use strict'

module.exports = {
  types: [
    {
      value: 'feat',
      name: '🚀  feat: A new feature',
    },
    {
      value: 'fix',
      name: '🔧  fix: A bug fix',
    },
    {
      value: 'refactor',
      name: '🔨  refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'docs',
      name: '📚  docs: Documentation only changes',
    },
    {
      value: 'test',
      name: '🔍  test: Add missing tests or correcting existing tests',
    },
    {
      value: 'chore',
      name: '🚬  chore: Changes that don\'t modify src or test files. Such as updating build tasks, package manager',
    },
    {
      value: 'style',
      name: '💅  style: Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'revert',
      name: '⏱  revert: Revert to a commit',
    },
  ],

  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    // scope: '请输入文件修改范围(可选):',
    // used if allowCustomScopes is true
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
  },
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
  // limit subject length, commitlint默认是72
  subjectLimit: 72,
}
