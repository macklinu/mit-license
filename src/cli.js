#!/usr/bin/env node

/* @flow */
/* eslint-disable no-console */

import fs from 'fs'
import path from 'path'
import meow from 'meow'
import chalk from 'chalk'
import mitLicense from '.'

const cli = meow(
  `
Usage:
  $ mit-license --name 'My Name'

  Outputs a LICENSE file with the supplied name and current year

Options:
  --name, -n The name to include in the LICENSE file
  --output, -o The name of the LICENSE file (default: LICENSE)
`,
  {
    flags: {
      name: {
        type: 'string',
        alias: 'n',
        default: '',
      },
      output: {
        type: 'string',
        alias: 'o',
        default: 'LICENSE',
      },
    },
  }
)

const { name, output } = cli.flags

fs.writeFile(
  path.join(process.cwd(), output),
  mitLicense({ name }),
  'utf8',
  err => {
    if (err) {
      console.error(err)
      process.exit(1)
    } else {
      console.log(chalk.green(`Wrote license file to ${output}`))
      process.exit(0)
    }
  }
)
