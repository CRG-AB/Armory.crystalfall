import { NFTCollectionInitializer, ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ITEMS_CONTRACT } from "../CONST";

const sdk = new ThirdwebSDK(13337, {
  clientId: `${process.env.REACT_APP_TEMPLATE_CLIENT_ID}`,
});

export async function fetchTokenIds() {
  const url = `https://api.testnet.onbeam.com/v2/ASSETS/${ITEMS_CONTRACT}`;
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_BEAM_READ_ONLY_API_KEY}`,
    },
    body: JSON.stringify({
      continuation: null,
      chainId: 1337,
      minRarityRank: null,
      maxRarityRank: null,
      minFloorAskPrice: null,
      maxFloorAskPrice: null,
      includeAttributes: false,
      attributes: null,
      sortDirection: "asc",
      sortBy: "floorAskPrice",
      limit: 100,
    }),
  };

  const response = await fetch(url, options);

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
