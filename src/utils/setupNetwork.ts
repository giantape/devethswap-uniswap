export const setupNetwork = async () => {
  const provider = (window as Window).ethereum
  if (provider && provider.request) {
    const chainId = 787
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: chainId,
            chainName: 'devEth',
            nativeCurrency: {
              name: 'dth',
              symbol: 'dth',
              decimals: 18
            },
            rpcUrls: [process.env.REACT_APP_NETWORK_URL],
            blockExplorerUrls: ['https://explore.deveth.org/']
          }
        ]
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error("Can't setup the deveth network on metamask because window.ethereum is undefined")
    return false
  }
}
