"use client";

import { useAccount } from 'wagmi';
import { ConnectWallet } from '@/components/common/ConnectWallet';
import Link from 'next/link';

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-teal-400">
                Invalend
              </h1>
              <span className="ml-2 text-sm text-gray-400 bg-dark-gray px-2 py-1 rounded">
                PoC
              </span>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white">
              Invalend Protocol
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage DeFi protocol based on EigenLayer with 20/80 prefunding model
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <span className="bg-dark-gray px-2 py-1 rounded">PoC Version</span>
              <span>•</span>
              <span>Arbitrum Sepolia</span>
            </div>
          </div>

          {/* CTA Section */}
          {isConnected ? (
            <div className="space-y-4">
              <Link
                href="/app"
                className="inline-flex items-center px-8 py-4 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-500 transition-colors"
              >
                Launch App
              </Link>
              <p className="text-sm text-gray-400">
                Your wallet is connected. Click to access the protocol.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-dark-gray rounded-lg p-6 max-w-md mx-auto">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Connect Wallet to Get Started
                </h2>
                <p className="text-gray-300 text-sm">
                  Connect your wallet to access deposit, withdraw, and loan creation features
                </p>
              </div>
            </div>
          )}

          {/* Protocol Info */}
          <div className="bg-dark-gray rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-6">
              About Invalend
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-teal-400">How It Works</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>20% user margin contribution</strong> (USDC)</li>
                  <li>• <strong>80% protocol pool funding</strong></li>
                  <li>• <strong>5x leverage ratio</strong> for capital-efficient trading</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-teal-400">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Non-custodial restricted wallet</strong> for Uniswap V3</li>
                  <li>• <strong>Auto-liquidation</strong> after 30 days</li>
                  <li>• <strong>Fixed 6% APY</strong> for pool investors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
