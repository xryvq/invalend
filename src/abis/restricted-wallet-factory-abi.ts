export const RESTRICTED_WALLET_FACTORY_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_loanManager", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "WalletCreated",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "createWallet",
    outputs: [{ internalType: "address", name: "wallet", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllWallets",
    outputs: [
      { internalType: "address[]", name: "allWallets", type: "address[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "getOrCreateWallet",
    outputs: [{ internalType: "address", name: "wallet", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "getWallet",
    outputs: [{ internalType: "address", name: "wallet", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWalletCount",
    outputs: [{ internalType: "uint256", name: "count", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "getWalletInfo",
    outputs: [
      { internalType: "address", name: "wallet", type: "address" },
      { internalType: "bool", name: "exists", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "hasWallet",
    outputs: [{ internalType: "bool", name: "exists", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "loanManager",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userWallet",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "wallets",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const RESTRICTED_WALLET_FACTORY_ADDRESS =
  "0xd98b3560a49AABEC10A12D367cE9FfDc5993bD5a";
