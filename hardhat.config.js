require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
const {API_URL_KEY, PRIVATE_KEY} = process.env;
module.exports = {
    solidity: "0.7.3",
    defaultNetwork: 'rikeby',
    networks : {
        hardhat: {},
        rinkeby: {
            url: API_URL_KEY,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    }
   };