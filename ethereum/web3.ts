import Web3 from 'web3'

let web3: Web3

declare global {
  interface Window {
    ethereum?: any
  }
}

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: 'eth_requestAccounts' })
  web3 = new Web3(window.ethereum)
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://sepolia.infura.io/v3/4c370dff991246418bb4ca4a7b7e1793'
  )
  web3 = new Web3(provider)
}

export default web3
