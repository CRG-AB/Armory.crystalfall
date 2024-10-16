import { NFTCollectionInitializer, ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ITEMS_CONTRACT } from "../CONST";

const sdk = new ThirdwebSDK(13337, {
  clientId: `${process.env.REACT_APP_TEMPLATE_CLIENT_ID}`,
});

export async function fetchTokenIds() {
  const url = `https://13337.api.sphere.market/tokens/ids/v1?collection=${ITEMS_CONTRACT}&limit=10000`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.tokens;
}

export async function fetchNFTs(tokenIds) {
  const contract = await sdk.getContract(ITEMS_CONTRACT);
  const promises = tokenIds.map((tokenId) => {
    return contract.erc721.get(tokenId);
  });
  const nfts = await Promise.all(promises);
  return nfts;
}

export async function totalCount() {
  const contract = await sdk.getContract(ITEMS_CONTRACT);
  const count = await contract.erc721.totalCount();
  return count;
}

export async function fetchNFT(tokenId) {
  const contract = await sdk.getContract(ITEMS_CONTRACT);
  const nft = await contract.erc721.get(tokenId);
  return nft;
}
