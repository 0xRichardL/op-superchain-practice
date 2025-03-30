import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('GreetingSender', (m) => {
  const greetingSender = m.contract('GreetingSender', ['0x5FbDB2315678afecb367f032d93F642f64180aa3', 902]);
  return { greetingSender };
});
