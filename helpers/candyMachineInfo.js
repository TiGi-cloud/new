export const candyMachineAddress = "0x28759d3bc41cb4242b57b62d90a06054035dc6f3cdd7aa2f8817b42a805b203d";
export const collectionName = "Roboosts"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs//QmamEaCJiUDy7LpWgsasfcTYNZr27L8fH7ERtWVbumm4iG";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
