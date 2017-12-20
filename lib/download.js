//

const path = require('path')
const download = require('download-git-repo')

/**
 * Download to where
 * 
 * @param {string} target 
 * @returns {Promise}
 */
module.exports = function (target) {
  target = path.join(target || '.', '.download-temp')

  return new Promise((resolve, reject) => {
    download(
      // If is git url, remenber contain #branch
      'https://github.com:simulatedgreg/electron-vue#master',
      target,
      { clone: true },
      (err) => {
        if (err) reject(err)
        // Downlad to the temp directory, and return it
        else resolve(target)
      }
    )
  })
}