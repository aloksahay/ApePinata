import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { createPublicClient, createWalletClient, custom, http, Chain, formatUnits, parseAbi } from 'viem'

// Define ApeChain
const apeChain = {
  id: 33139,
  name: 'ApeChain',
  nativeCurrency: {
    decimals: 18,
    name: 'APE',
    symbol: 'APE',
  },
  rpcUrls: {
    default: { http: ['https://rpc.apechain.com'] },
    public: { http: ['https://rpc.apechain.com'] },
  },
  blockExplorers: {
    default: { name: 'ApeScan', url: 'https://apescan.io' },
  },
} as const satisfies Chain

const CONTRACT_ADDRESS = '0xF32c31415CCE1759f363aC1371b068AC691B2A39'
const ABI = [
  {
    "inputs": [],
    "name": "currentTarget",
    "outputs": [{"type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
] as const

// Add new contract address
const APEBOMB_ADDRESS = '0xC1932844eDcc3193ae2622089c4B57ae5F023D7f'
const APEPINATA_ADDRESS = '0xF32c31415CCE1759f363aC1371b068AC691B2A39'

interface WalletContextType {
  address: string | undefined
  balance: string | undefined
  balanceNumber: number
  target: number
  connectWallet: () => Promise<void>
  sendEth: (amount: number) => Promise<void>
  txHash: string | undefined
  sendApeBomb: (amount: number) => Promise<void>
  sendApePinata: (amount: number) => Promise<void>
  apeBombPot: string
}

const WalletContext = createContext<WalletContextType>({} as WalletContextType)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string>()
  const [balance, setBalance] = useState<string>()
  const [balanceNumber, setBalanceNumber] = useState<number>(0)
  const [target, setTarget] = useState<number>(0)
  const [txHash, setTxHash] = useState<string>()
  const [apeBombPot, setApeBombPot] = useState<string>('0')

  const publicClient = createPublicClient({
    chain: apeChain,
    transport: http()
  })

  const fetchTarget = async () => {
    try {
      console.log('Fetching target from contract:', CONTRACT_ADDRESS)
      const currentTarget = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: 'currentTarget',
      })
      
      console.log('Target value:', currentTarget)
      setTarget(Number(currentTarget))
    } catch (error) {
      console.error('Detailed error fetching target:', error)
      setTarget(100) // Fallback to 100 if fetch fails
    }
  }

  // Add a recheck of target every 30 seconds
  useEffect(() => {
    fetchTarget()
    const interval = setInterval(fetchTarget, 30000)
    return () => clearInterval(interval)
  }, [])

  const updateBalance = async (address: string) => {
    const balance = await publicClient.getBalance({ 
      address: address as `0x${string}` 
    })
    const balanceInApe = Number(balance) / 1e18
    setBalanceNumber(balanceInApe)
    setBalance(balanceInApe.toFixed(1))
  }

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask!')
      return
    }

    const walletClient = createWalletClient({
      chain: apeChain,
      transport: custom(window.ethereum)
    })

    try {
      // Request chain switch
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: `0x${apeChain.id.toString(16)}`,
          chainName: apeChain.name,
          nativeCurrency: apeChain.nativeCurrency,
          rpcUrls: [apeChain.rpcUrls.default.http[0]],
          blockExplorerUrls: [apeChain.blockExplorers.default.url]
        }]
      })

      const [address] = await walletClient.requestAddresses()
      setAddress(address)
      await updateBalance(address)
    } catch (error) {
      console.error('Failed to connect:', error)
      alert('Failed to connect to ApeChain. Please try again.')
    }
  }

  const sendEth = async (amount: number) => {
    if (!address) {
      alert('Please connect your wallet first!')
      return
    }

    const walletClient = createWalletClient({
      chain: apeChain,
      transport: custom(window.ethereum)
    })

    try {
      const hash = await walletClient.sendTransaction({
        account: address as `0x${string}`,
        to: '0x0000000000000000000000000000000000000000' as `0x${string}`,
        value: BigInt(amount * 10**18) // Convert APE amount to wei
      })
      
      setTxHash(hash)
      console.log('Transaction hash:', hash)
      
      // Show transaction link
      const txUrl = `${apeChain.blockExplorers.default.url}/tx/${hash}`
      alert(`Transaction sent! View on ApeScan: ${txUrl}`)
      
      // Update balance after transaction
      await updateBalance(address)
    } catch (error) {
      console.error('Error sending transaction:', error)
      alert('Error sending transaction')
    }
  }

  const sendApeBomb = async (amount: number) => {
    if (!address) {
      alert('Please connect your wallet first!')
      return
    }

    const walletClient = createWalletClient({
      chain: apeChain,
      transport: custom(window.ethereum)
    })

    try {
      const hash = await walletClient.sendTransaction({
        account: address as `0x${string}`,
        to: APEBOMB_ADDRESS as `0x${string}`,
        value: BigInt(amount * 10**18)
      })
      
      setTxHash(hash)
      const txUrl = `${apeChain.blockExplorers.default.url}/tx/${hash}`
      alert(`Transaction sent! View on ApeScan: ${txUrl}`)
      
      // Wait for transaction to be mined
      await publicClient.waitForTransactionReceipt({ hash })
      
      // Refresh all data
      await updateBalance(address)
      await fetchApeBombPot()
    } catch (error) {
      console.error('Error sending transaction:', error)
      alert('Error sending transaction')
    }
  }

  const sendApePinata = async (amount: number) => {
    if (!address) {
      alert('Please connect your wallet first!')
      return
    }

    const walletClient = createWalletClient({
      chain: apeChain,
      transport: custom(window.ethereum)
    })

    try {
      const hash = await walletClient.sendTransaction({
        account: address as `0x${string}`,
        to: APEPINATA_ADDRESS as `0x${string}`,
        value: BigInt(amount * 10**18)
      })
      
      setTxHash(hash)
      const txUrl = `${apeChain.blockExplorers.default.url}/tx/${hash}`
      alert(`Transaction sent! View on ApeScan: ${txUrl}`)
      
      // Wait for transaction to be mined
      await publicClient.waitForTransactionReceipt({ hash })
      
      // Refresh all data
      await updateBalance(address)
      await fetchApeBombPot()
    } catch (error) {
      console.error('Error sending transaction:', error)
      alert('Error sending transaction')
    }
  }

  const fetchApeBombPot = async () => {
    try {
      const balance = await publicClient.getBalance({
        address: APEBOMB_ADDRESS as `0x${string}`
      })
      setApeBombPot(((Number(balance) / 1e18).toFixed(1)))
    } catch (error) {
      console.error('Error fetching ApeBomb pot:', error)
    }
  }

  // Fetch pot size every 30 seconds
  useEffect(() => {
    fetchApeBombPot()
    const interval = setInterval(fetchApeBombPot, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <WalletContext.Provider value={{ 
      address, 
      balance, 
      balanceNumber,
      target,
      connectWallet, 
      sendEth, 
      txHash,
      sendApeBomb,
      sendApePinata,
      apeBombPot,
    }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => useContext(WalletContext) 