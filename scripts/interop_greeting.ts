import 'dotenv/config';
import { createPublicClient, createWalletClient, http } from 'viem';
import GreeterAbi from './abi/greeter.abi';
import GreetingSenderAbi from './abi/greeting-sender.abi';
import { delay } from './utils/time.util';
import { A, B } from './constants/chains';
import { account_0 } from './constants/accounts';

async function main() {
  const clientA = createWalletClient({ ...A, account: account_0 });
  const clientB = createPublicClient(B);

  const hash = await clientA.writeContract({
    abi: GreetingSenderAbi,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    functionName: 'setGreeting',
    args: ['Hello from A'],
  });
  console.log('Hash:', hash);

  await delay(2000);
  const result = await clientB.readContract({
    abi: GreeterAbi,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    functionName: 'greet',
  });
  console.log('Result:', result);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
