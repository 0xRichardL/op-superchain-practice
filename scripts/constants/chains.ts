import { http } from 'viem';

const nativeCurrency = {
  decimals: 18,
  name: 'Ether',
  symbol: 'ETH',
};

export const A = {
  chain: {
    id: 901,
    name: 'chain-A',
    nativeCurrency,
    rpcUrls: { default: { http: [process.env.RPC_A!] } },
  },
  transport: http(process.env.RPC_A!),
};

export const B = {
  chain: {
    id: 902,
    name: 'chain-B',
    nativeCurrency,
    rpcUrls: { default: { http: [process.env.RPC_B!] } },
  },
  transport: http(process.env.RPC_B!),
};
