import { useWallet } from '../context/WalletContext'
import { useState } from 'react'

export function ApeBomb() {
  const { address, balanceNumber, sendApeBomb, apeBombPot } = useWallet()
  const [amount, setAmount] = useState<number>(1)

  const maxAmount = Math.min(
    Math.floor(balanceNumber || 0), 
    1000 // Max 1000 APE per transaction
  )

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value))
  }

  return (
    <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-[#0054fa]/20">
      <h2 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-[#0054fa] to-[#00a3ff] bg-clip-text text-transparent">
        ApeBomb
      </h2>
      
      <div className="text-center mb-6">
        <div>
          <span className="text-gray-400 text-sm">Pot Size: </span>
          <span className="text-[#0054fa] font-bold">{apeBombPot} $APE</span>
        </div>
      </div>
      
      {!address ? (
        <div className="text-center text-gray-400">
          Please connect your wallet to continue
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <div className="bg-gray-800 p-6 rounded-lg w-full text-center border border-[#0054fa]/20">
            <p className="text-sm text-gray-400 mb-2">Amount to Send</p>
            <p className="text-3xl font-bold text-[#0054fa]">{amount} $APE</p>
            
            <div className="mt-4 px-2">
              <input
                type="range"
                min="1"
                max={maxAmount}
                value={amount}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#0054fa]"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>1 $APE</span>
                <span>{maxAmount} $APE</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => sendApeBomb(amount)}
            className="bg-gradient-to-r from-[#0054fa] to-[#00a3ff] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity w-full max-w-sm font-bold text-lg shadow-lg shadow-[#0054fa]/20"
          >
            SEND {amount} $APE
          </button>
        </div>
      )}
    </div>
  )
} 