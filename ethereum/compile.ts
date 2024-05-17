const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const contractPath = path.resolve(__dirname, 'contracts', 'Pokedex.sol')
const source = fs.readFileSync(contractPath, 'utf-8')
const output = JSON.parse(
  solc.compile(
    JSON.stringify({
      language: 'Solidity',
      sources: {
        'Pokedex.sol': {
          content: source,
        },
      },
      settings: {
        outputSelection: {
          '*': {
            '*': ['*'],
          },
        },
      },
    })
  )
).contracts['Pokedex.sol']

// for each contract (the factory and the Pokedex contract)
for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(buildPath, `${contract.replace(':', '')}.json`),
    output[contract]
  )
}
