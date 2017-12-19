#! /usr/bin/env node

const program = require('commander')

program
  .version('1.0.0')
  .usage('<cammand> [项目名称]')
  .command('hello', 'say hello')
  .command('init', 'create new project')
  .parse(process.argv)