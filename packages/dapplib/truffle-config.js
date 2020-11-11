require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area smooth charge return pizza smile coral light army genius'; 
let testAccounts = [
"0x11428b956bfbbb4e83c8f92a804cb3a14a7339f69cff1d6205a3b37c30d5450b",
"0x15f8a58455d1692b679c800da13e8f7082f8f578a10730640beefe4894770ea6",
"0xa0b64e20905284b1510d7c8f97bafc4838e36840d6e043200f882dd3af94aa1e",
"0x9f0607833d81562225cdee8caa609e45309914b5828a7315815c7c956e0ffa06",
"0x25535d5d17a00441c7d2c0213ff18aa6d6bd99496d40d7cd893349ecc07fea79",
"0x9e6de84ad43d84367e0d2808cd566a4cb89320cf6ccbe402e53eed6dac0bbe25",
"0x6b3ea010fad0042d65ede60d7e71cfd3ce82f310d6773a41aafc82b8ffba1a5b",
"0xa9b2333891a0eb44956594d41ad08626011422841f996970fe0752ad7c6a8ab6",
"0x66b48324d24c00b1bcb1e3c62830dcc5ed4991ba937970f13f966c942545b4b8",
"0x27c5fa16c844c00380086e2fd937db53547bdd1db0797e898fba278b2fcc8cad"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
