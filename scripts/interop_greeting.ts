import 'dotenv/config';
import { createPublicClient, createWalletClient, http, publicActions } from 'viem';
import GreeterAbi from './abi/greeter.abi';
import GreetingSenderAbi from './abi/greeting-sender.abi';
import { delay } from './utils/time.util';
import { A, B } from './constants/chains';
import { account_0 } from './constants/accounts';

async function main() {
  const clientA = createWalletClient({ ...A, account: account_0 }).extend(publicActions);
  const clientB = createPublicClient(B);

  const hash = await clientA.writeContract({
    abi: GreetingSenderAbi,
    address: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    functionName: 'setGreeting',
    args: ['Hello from A'],
    gasPrice: await clientA.getGasPrice(),
    gas: 100000n,
  });
  console.log('Hash:', hash);
  await delay(4000);
  const result = await clientB.readContract({
    abi: GreeterAbi,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    functionName: 'greet',
    args: [],
  });
  console.log('Result:', result);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
