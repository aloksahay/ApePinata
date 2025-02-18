import { useWallet } from '../context/WalletContext'
import { ApeBomb } from '../components/ApeBomb'
import { ApePinata } from '../components/ApePinata'

export default function Home() {
  const { address, balance, connectWallet } = useWallet()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-4 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#0054fa] to-[#00a3ff] bg-clip-text text-transparent">
              Ape Things
            </h1>
            <a 
              href="https://x.com/0xQuit/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-[#0054fa] transition-colors flex items-center gap-1"
            >
              FE to ApeBomb and ApePinata by @0xQuit
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            {!address ? (
              <button
                onClick={connectWallet}
                className="bg-gradient-to-r from-[#0054fa] to-[#00a3ff] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-colors"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="flex flex-col items-end">
                <p className="text-gray-300 text-sm">
                  {address.slice(0, 6)}...{address.slice(-4)}
                </p>
                <p className="text-gray-400 text-sm">
                  {balance} $APE
                </p>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-20 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ApeBomb />
            <ApePinata />
          </div>
        </div>
      </main>
    </div>
  )
} 