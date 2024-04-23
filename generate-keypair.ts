import { Keypair } from "@solana/web3.js";
const keypair = Keypair.generate();
console.log(`✅ Generated keypair! ` + keypair);

console.log(`The public key 1 is: `, keypair.publicKey.toBase58());
console.log(`The secret key 1 is: `, keypair.secretKey);
console.log(`✅ Finished!`);

//Loading an existing keypair from an .env file
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair2 = getKeypairFromEnvironment("SECRET_KEY");

console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file!`
);
console.log(`The public key 2 is: `, keypair2.publicKey.toBase58());
console.log(`The secret key 2 is: `, keypair2.secretKey);