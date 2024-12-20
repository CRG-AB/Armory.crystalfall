import { styled } from "styled-components";
import { useOwnedNFTs, useContract} from "@thirdweb-dev/react";
import { ITEMS_CONTRACT } from "../../CONST.js";
import { useState } from "react";
import { useParams } from "react-router";
import { NFTGrid } from "../../components/NFTGrid";
import { ConnectedWallet } from "../../components/ui/ConnectedWallet.jsx";
import softLight from "../../img/images/soft-light-fog.webp";
import vault from "../../img/images/vault.webp";
import epicLogoWhite from "../../img/buttons/epicLogoWhite.webp";
import bigTextBox from "../../img/ui/big-text-box.webp";
import CrystalFall from "../../img/crg/CrystalFall.svg";

const StyledProfilePage = styled.div`
  background-image: url(${vault});
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  animation: fadeIn 0.5s;
`;

const Background = styled.div`
  background-image: url(${softLight});
  background-size: cover;
  position: relative;
  max-width: 100%;
  background-color: #1b1a20;
  min-height: 80vh;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 870px) {
    padding: 0px;
  }
`;

export const ProfilePage = () => {
  // ADDRESS LOGIC
  const [address] = useState(
    useParams().address ||
      (localStorage.getItem("walletAddress") &&
        localStorage.getItem("walletAddress").replace(/"/g, ""))
  );

  const loginWithEpic = async () => {
    const url = `https://www.epicgames.com/id/authorize?client_id=${process.env.REACT_APP_EPIC_CLIENT_ID}&response_type=code&scope=basic_profile&redirect_uri=${process.env.REACT_APP_EPIC_REDIRECT}`;
    window.open(url, "_self");
  };

  // SIDEBAR LOGIC
  const [isSidebarOpen] = useState(window.innerWidth > 768);
  const [filteredNFTs] = useState([]);

  // THIRDWEB
  const { contract: contractItems } = useContract(ITEMS_CONTRACT);
  const { data: isLoading } = useOwnedNFTs(contractItems, address);

  const nftsPerPage = 20;
  const [count, setCount] = useState(0);
  const totalPages = Math.ceil((filteredNFTs?.length || 0) / nftsPerPage);

  if (address || address === "") {
    return (
      <StyledProfilePage>
        <ContentWrapper>
          <hr />
          <Background>
            <div className="flex h-full">
              <div
                className="flex items-center flex-col justify-start"
                style={{
                  transition: "all 0.5s",
                  animation: "fadeIn 0.5s",
                  width: isSidebarOpen ? "calc(100% - 300px)" : "100%",
                }}
              >
                <div className="flex justify-center mt-8">
                  <ConnectedWallet wallet={address} className="m:scale-50" />
                </div>
                <NFTGrid
                  nfts={filteredNFTs}
                  isLoading={isLoading}
                  animated={true}
                  count={count}
                  setCount={setCount}
                  totalPages={totalPages}
                  nftsPerPage={nftsPerPage}
                />
              </div>
            </div>
          </Background>
          <hr />
        </ContentWrapper>
      </StyledProfilePage>
    );
  }

  return (
    <StyledProfilePage>
        <hr />
          <div className="h-[80vh] flex flex-col items-center justify-center m:scale-75">
            <div
              className="flex flex-col items-center px-20 py-32 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${bigTextBox})` }}
            >
              <div className="flex items-center justify-center">
                <img
                  src={CrystalFall}
                  className="w-60 object-contain z-10"
                  alt="CrystalFall Logo"
                />
              </div>
              <h1 className="text-xl mb-6">Sign in with Epic Games</h1>
              <div
                className="h-32 w-80 flex items-center justify-center stylized-crg-button scale-125"
                onClick={loginWithEpic}
              >
                <img src={epicLogoWhite} className="h-8" alt="Epic Games Logo" />
              </div>
            </div>
          </div>
        <hr />
    </StyledProfilePage>
  );
};
