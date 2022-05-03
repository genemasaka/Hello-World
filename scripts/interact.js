const {ethers} = require("hardhat");

const API_KEY = process.env.API_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const contract = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json');

const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("the message is "+ message);

    const tx = await helloWorldContract.update("Goodbye");
    await tx.wait();

    const newmsg = await helloWorldContract.message();
    console.log("the new message is " + newmsg);

}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
})