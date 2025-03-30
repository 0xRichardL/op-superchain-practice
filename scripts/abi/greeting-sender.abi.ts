export default [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_greeterAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_greeterChainId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'messenger',
    outputs: [
      {
        internalType: 'contract IL2ToL2CrossDomainMessenger',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'greeting',
        type: 'string',
      },
    ],
    name: 'setGreeting',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
