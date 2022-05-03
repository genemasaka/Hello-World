const {ethers} = require("hardhat");

async function main() {
    const HelloWorld = await ethers.getContractFactory('HelloWorld');

    const hw = await HelloWorld.deploy("Hello World! I'm learning solidity and will get a job as a web3 dev in 2022")

    console.log('Your contract was deployed to:', hw.address);
}

main().then(()=> process.exit(0))
.catch(error=>{
    console.error(error);
    process.exit(1);
})