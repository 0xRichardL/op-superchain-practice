import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox-viem';
import '@nomicfoundation/hardhat-ignition-viem';
import 'dotenv/config';

const accounts = [process.env.PRIV_KEY!];

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  ignition: {
    requiredConfirmations: 1,
  },
  networks: {
    L1: {
      url: process.env.RPC_L1!,
      accounts,
    },
    A: {
      url: process.env.RPC_A!,
      accounts,
    },
    B: {
      url: process.env.RPC_B!,
      accounts,
    },
  },
};

export default config;
