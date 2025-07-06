export const LOAN_MANAGER_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_lendingPool", type: "address" },
      { internalType: "address", name: "_collateralManager", type: "address" },
      { internalType: "address", name: "_walletFactory", type: "address" },
      { internalType: "address", name: "_usdcToken", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loanAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolFunding",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "restrictedWallet",
        type: "address",
      },
    ],
    name: "LoanCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "recoveredAmount",
        type: "uint256",
      },
    ],
    name: "LoanLiquidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "returnedAmount",
        type: "uint256",
      },
    ],
    name: "LoanRepaid",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "borrowerLoans",
    outputs: [
      { internalType: "uint256", name: "loanAmount", type: "uint256" },
      { internalType: "uint256", name: "collateralAmount", type: "uint256" },
      { internalType: "uint256", name: "poolFunding", type: "uint256" },
      { internalType: "uint32", name: "startTime", type: "uint32" },
      { internalType: "address", name: "restrictedWallet", type: "address" },
      { internalType: "bool", name: "isActive", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "borrower", type: "address" },
      { internalType: "uint256", name: "loanAmount", type: "uint256" },
    ],
    name: "canCreateLoan",
    outputs: [{ internalType: "bool", name: "canCreate", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "collateralManager",
    outputs: [
      { internalType: "contract CollateralManager", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "loanAmount", type: "uint256" }],
    name: "createLoan",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "getLoanInfo",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "loanAmount", type: "uint256" },
          {
            internalType: "uint256",
            name: "collateralAmount",
            type: "uint256",
          },
          { internalType: "uint256", name: "poolFunding", type: "uint256" },
          { internalType: "uint32", name: "startTime", type: "uint32" },
          {
            internalType: "address",
            name: "restrictedWallet",
            type: "address",
          },
          { internalType: "bool", name: "isActive", type: "bool" },
        ],
        internalType: "struct LoanManager.LoanInfo",
        name: "loan",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLoanStats",
    outputs: [
      { internalType: "uint256", name: "totalLoansCreated", type: "uint256" },
      { internalType: "uint256", name: "totalLoansRepaid", type: "uint256" },
      { internalType: "uint256", name: "activeLoans", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "loanAmount", type: "uint256" }],
    name: "getPoolFunding",
    outputs: [{ internalType: "uint256", name: "funding", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "loanAmount", type: "uint256" }],
    name: "getRequiredCollateral",
    outputs: [{ internalType: "uint256", name: "collateral", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "hasActiveLoan",
    outputs: [{ internalType: "bool", name: "hasActive", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lendingPool",
    outputs: [
      { internalType: "contract LendingPool", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "liquidateLoan",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "repayLoan",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalLoans",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalRepaid",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdcToken",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "walletFactory",
    outputs: [
      {
        internalType: "contract RestrictedWalletFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const LOAN_MANAGER_ADDRESS =
  "0xc8F1EdF94Fd9D6f51815c8FacAcB59a584E201ac";
