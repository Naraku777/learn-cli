#! /usr/bin/env node

// 👆 is [Shebang](http://smilejay.com/2012/03/linux_shebang/)

const program = require('commander')
const path = require('path')
const fs = require('fs')
const glob = require('glob')

const download = require('../lib/download')

program
  .usage('<project-name>')
  .parse(process.argv)

// Get project name
let projectName = program.args[0]

// Project name is required
if (!projectName) {
  // As same as run --help
  program.help()
  return
}

// Traverse current directory
const list = glob.sync('*')
let rootName = path.basename(process.cwd())
// If not empty directory
if (list.length) {
  if (list.filter((name) => {
    const fileName = path.resolve(process.cwd(), path.join('.', name))
    const isDir = fs.statSync(fileName).isDirectory()
    return name.indexOf(projectName) !== -1 && isDir
  }).length !== 0) {
    console.log(`Project ${projectName} is existed...`)
    return
  }
  rootName = projectName
} else if (rootName === projectName) {
  rootName = '.'
} else {
  rootName = projectName
}

go()

function go () {
  download(rootName)
    .then((target) => console.log(target))
    .catch((err) => console.log(err))
}