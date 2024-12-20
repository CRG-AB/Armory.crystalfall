import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ITEMS_CONTRACT } from "../CONST";

const sdk = new ThirdwebSDK(13337, {
  clientId: `${process.env.REACT_APP_TEMPLATE_CLIENT_ID}`,
});

export async function fetchTokenIds() {
  const tokenCount = await totalCount();
  const url = `https://api.testnet.onbeam.com/v2/assets/${ITEMS_CONTRACT}`;
  const tokenIds = [];

  try {
    let continuation = null;
    do {
      let limit = 100;
      if (tokenIds.length + limit > tokenCount) {
        limit = tokenCount - tokenIds.length;
      }
      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "x-api-key": process.env.REACT_APP_BEAM_READ_ONLY_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          continuation: continuation,
          chainId: 13337,
          minRarityRank: null,
          maxRarityRank: null,
          minFloorAskPrice: null,
          maxFloorAskPrice: null,
          includeAttributes: false,
          attributes: null,
          sortDirection: "desc",
          sortBy: "mintedAt",
          limit: limit,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      const data = responseData.data;
      tokenIds.push(...data.map((token) => token.assetId));

      // Update continuation token for next request
      continuation = responseData.continuation;

      // Break if no more data to fetch
      if (!continuation) break;
    } while (tokenIds.length < tokenCount);

    return tokenIds;
  } catch (error) {
    console.error("Error fetching token IDs:", error);
    throw error;
  }
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
  const decodedCount = count.toNumber();
  return decodedCount;
}

export async function fetchNFT(tokenId) {
  const contract = await sdk.getContract(ITEMS_CONTRACT);
  const nft = await contract.erc721.get(tokenId);
  return nft;
}
