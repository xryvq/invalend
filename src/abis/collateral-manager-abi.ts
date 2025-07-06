export const COLLATERAL_MANAGER_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_usdcToken", type: "address" },
      { internalType: "address", name: "_loanManager", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
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
        name: "marginAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loanAmount",
        type: "uint256",
      },
    ],
    name: "LoanRecordCreated",
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
    ],
    name: "LoanRepaid",
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
    ],
    name: "PositionLiquidated",
    type: "event",
  },
  {
    inputs: [],
    name: "BASIS_POINTS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LOAN_DURATION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_MARGIN_CONTRIBUTION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "clearLiquidatedPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "borrower", type: "address" },
      { internalType: "uint256", name: "marginAmount", type: "uint256" },
      { internalType: "uint256", name: "loanAmount", type: "uint256" },
    ],
    name: "createLoanRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "getLoanRecord",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "marginAmount", type: "uint256" },
          { internalType: "uint256", name: "loanAmount", type: "uint256" },
          { internalType: "uint32", name: "startTime", type: "uint32" },
          { internalType: "bool", name: "isActive", type: "bool" },
        ],
        internalType: "struct CollateralManager.LoanRecord",
        name: "record",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "isLiquidatable",
    outputs: [{ internalType: "bool", name: "liquidatable", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "isLoanDue",
    outputs: [{ internalType: "bool", name: "isDue", type: "bool" }],
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
    name: "loanRecords",
    outputs: [
      { internalType: "uint256", name: "marginAmount", type: "uint256" },
      { internalType: "uint256", name: "loanAmount", type: "uint256" },
      { internalType: "uint32", name: "startTime", type: "uint32" },
      { internalType: "bool", name: "isActive", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "borrower", type: "address" }],
    name: "repayLoan",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      { internalType: "uint256", name: "marginAmount", type: "uint256" },
      { internalType: "uint256", name: "loanAmount", type: "uint256" },
    ],
    name: "validateMargin",
    outputs: [{ internalType: "bool", name: "isValid", type: "bool" }],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export const COLLATERAL_MANAGER_ADDRESS =
  "0x26D7c702feca6712A5ada05379eEd466687Fe2Dc";
