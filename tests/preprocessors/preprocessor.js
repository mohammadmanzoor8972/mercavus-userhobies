'use strict'

const tsc = require('typescript')
const {normalize} = require('path')
const {cwd} = require('process')
const {compilerOptions} = require(normalize(`${cwd()}/tsconfig`))

compilerOptions.sourceMap = false
compilerOptions.inlineSourceMap = true

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(
        src,
        compilerOptions,
        path,
        []
      )
    }
    if (path.match(/\.[css|less|scss]/)) {
      return ''
    }
    return src
  }
}
