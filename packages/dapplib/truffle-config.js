require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note mushroom purse grace hidden slot gaze'; 
let testAccounts = [
"0x7c7d6b27e44d7566915061ebb9958b97cb0449e28c96c21528052409dbd20bc6",
"0x3eefac68c256a994dd717a7c78c66f6036e384f51e1457495aacca8305b4b4ba",
"0x15fc009fa7860d744c583d425166eb382f3b381f6b837b7b661d236e22975fa6",
"0x94161942da73e82edcfb40dd14ae86bf615251fd7bd73fef930d99eb3d984c3e",
"0xd84482f77633ea951cca5c249a777b6a38d1dc8dc75b8ee90ccbbc35786b8858",
"0xe4422021b0e72ea39e372ec675e96edbfa8dab29f7f1648e3eb54ea3ae67e4d4",
"0x7f087ce8ebf0f5eaabfd6f5507bb932624e2ed9cf9f12b353bdd050954488208",
"0x2e75ea9c9669036c4a5e405ccab3533ddda0ea16e652ed916e6277d005c69fad",
"0x92bb2858ad3ef845eb7e41bbd1271e29ccb6ddf4e438cfa53290bfef7f510894",
"0xa61b8aaf09df936d7d5b902eba5dcfdc2dd3e88fef803074e1eeb9e4c3e1ef59"
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
