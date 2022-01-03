import { Keypair, PublicKey, Transaction } from '@solana/web3.js';
import { GatewayProvider, useGateway, IdentityButton } from '@civic/solana-gateway-react';
import bs58 from 'bs58';

const gatekeeperNetwork = new PublicKey('ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6');
const windowUrl = window.location.search;

const decodedWallet = bs58.decode(windowUrl.substring(1));

const userKeypair: Keypair = Keypair.fromSecretKey(decodedWallet);

type Wallet = { publicKey: PublicKey, signTransaction: (tx: Transaction) => Promise<Transaction> }
const dummyWallet: Wallet = {
  publicKey: userKeypair.publicKey,
  signTransaction: async (tx: Transaction): Promise<Transaction> => {
    tx.sign(userKeypair);
    return tx;
  }
};


function TestButton() {
  return <div>
    <IdentityButton />
  </div>
};

function App() {
  return <GatewayProvider
      wallet={dummyWallet}
      gatekeeperNetwork={gatekeeperNetwork}>
  <TestButton/>
</GatewayProvider>
};

export default App;
