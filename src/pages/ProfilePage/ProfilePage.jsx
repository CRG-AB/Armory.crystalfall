import { styled } from "styled-components";
import { useOwnedNFTs, useContract, useTotalCount } from "@thirdweb-dev/react";
import { ITEMS_CONTRACT } from "../../CONST.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { DisplayToken } from "../../components/ui/DisplayToken.jsx";
import { Spinner } from "../../components/ui/Spinner.jsx";
import { SortingSidebar } from "../../components/MenuComponents/SortingSidebar.jsx";
import { ConnectedWallet } from "../../components/ui/ConnectedWallet.jsx";
import { ArrowButton } from "../../components/buttons/ArrowButton.jsx";
import { thirdWebIPFSLink } from "../../services/IPFSLink";

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

const ContentWrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 2000px;
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

const StyledTokenList = styled.ul`
  display: grid;
  justify-content: center;
  align-content: start;
  gap: 10px;
  padding: 50px 30px 90px 30px;
  width: 100%;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));

  @media screen and (max-width: 870px) {
    padding-bottom: 100px;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 150px), 1fr));
  }
`;

export const ProfilePage = () => {
  // ADDRESS LOGIC
  const [address, setAddress] = useState(
    useParams().address ||
      (localStorage.getItem("walletAddress") &&
        localStorage.getItem("walletAddress").replace(/"/g, ""))
  );

  const loginWithEpic = async () => {
    const url = `https://www.epicgames.com/id/authorize?client_id=${process.env.REACT_APP_EPIC_CLIENT_ID}&response_type=code&scope=basic_profile&redirect_uri=${process.env.REACT_APP_EPIC_REDIRECT}`;
    window.open(url, "_self");
  };

  // SIDEBAR LOGIC
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [filteredNFTs, setFilteredNFTs] = useState([]);

  // THIRDWEB
  const { contract: contractItems } = useContract(ITEMS_CONTRACT);

  const { data: nfts, isLoading } = useOwnedNFTs(contractItems, address);

  const nftsPerPage = 20;
  const [count, setCount] = useState(0);
  const { data: totalCount } = useTotalCount(contractItems);
  const hasPreviousPage = count > 0;
  const hasNextPage = (count + 1) * nftsPerPage < totalCount;
  const totalPages = Math.ceil(filteredNFTs.length / nftsPerPage);
  const [allNFTs, setAllNFTs] = useState([]);
  const [i, setI] = useState(0);
  const [displayedNfts, setDisplayedNfts] = useState([]);

  useEffect(() => {
    setDisplayedNfts(
      filteredNFTs.slice(count * nftsPerPage, (count + 1) * nftsPerPage)
    );
  }, [count, filteredNFTs, nfts]);

  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, []);

  if (address || address == "") {
    return (
      <StyledProfilePage>
        <ContentWrapper>
          <hr />
          <Background>
            <div className="flex h-full">
              <SortingSidebar
                isSidebarOpen={isSidebarOpen}
                nfts={nfts}
                setFilteredNFTs={setFilteredNFTs}
                setIsSidebarOpen={setIsSidebarOpen}
              />
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
                {isLoading && address != "undefined" && address != "" ? (
                  <div className="flex justify-center mt-8">
                    <Spinner className="mt-12m" />
                  </div>
                ) : !nfts && address != "undefined" && address != "" ? (
                  <div className="flex justify-center font-bold mt-10 w-full">
                    There are no NFTs associated with your account.
                  </div>
                ) : filteredNFTs.length == 0 &&
                  address != "undefined" &&
                  address != "" ? (
                  <div className="flex justify-center font-bold mt-10 w-full">
                    No NFTs were found matching your current filters.
                  </div>
                ) : (
                  <StyledTokenList>
                    {displayedNfts.map((token, i) => {
                      return (
                        <DisplayToken
                          name={token.metadata.name}
                          key={i}
                          linkTo={`token/${token.metadata.id}`}
                          img={token.metadata.image}
                          tokenID={token.metadata.id}
                        />
                      );
                    })}
                  </StyledTokenList>
                )}
                {filteredNFTs.length > 20 ? (
                  <div className="flex justify-center items-center gap-4 absolute bottom-4 left-[calc(50%-90px)]">
                    <ArrowButton
                      direction={"left"}
                      onClick={() => {
                        setCount(count - 1);
                        window.scrollTo({ top: 100, behavior: "smooth" });
                      }}
                      disabled={!hasPreviousPage}
                    />
                    Page {count + 1} of {totalPages}
                    <ArrowButton
                      direction={"right"}
                      onClick={() => {
                        setCount(count + 1);
                        window.scrollTo({ top: 100, behavior: "smooth" });
                      }}
                      disabled={!hasNextPage}
                    />
                  </div>
                ) : null}
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
      <ContentWrapper>
        <hr />
        <Background>
          <div className="h-[80vh] flex flex-col items-center justify-center m:scale-75">
            <div
              className="flex flex-col items-center px-20 py-32 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${bigTextBox})` }}
            >
              <div className="w-72 flex items-center justify-center relative -mt-4">
                <img
                  src={CrystalFall}
                  className=" w-60 object-contain z-10 mb-2"
                />
              </div>
              <h1 className="text-xl mb-6">Sign in with Epic Games</h1>
              <div
                className="h-32 w-80 flex items-center justify-center stylized-crg-button scale-125"
                onClick={loginWithEpic}
              >
                <img src={epicLogoWhite} className="h-8" />
              </div>
            </div>
          </div>
        </Background>
        <hr />
      </ContentWrapper>
    </StyledProfilePage>
  );
};
