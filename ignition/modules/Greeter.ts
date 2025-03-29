import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('Greeter', (m) => {
  const greeter = m.contract('Greeter', []);
  return { greeter };
});
