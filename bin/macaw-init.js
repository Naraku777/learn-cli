//

const program = require('commander')

program
  .usage('<project-name>')
  .parse(process.argv)

// Get project name
let projectName = program.args[0]

// Project name is required
if (!projectName) {
  program.help()
  return
}

go()

function go () {
  // placeholder, handle child command
}