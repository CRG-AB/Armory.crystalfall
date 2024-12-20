import { styled } from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

import { NFTGrid } from "../components/NFTGrid";
import { SortingSidebar } from "../components/MenuComponents/SortingSidebar.jsx";

import city from "../img/images/city-back-drop.webp";
import softLight from "../img/images/soft-light-fog.webp";

import { useNFTContext } from "../context/NFTContext";

const StyledProfilePage = styled.div`
  background-image: url(${city});
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
  width: 100%;
  background-image: url(${softLight});
  background-size: cover;
  background-color: #1b1a20;
  min-height: 80vh;
  position: relative;
  height: 100%;

  @media screen and (max-width: 870px) {
    padding: 0px;
  }
`;

export const BrowsePage = () => {
  const { filteredNFTs, setFilteredNFTs, allNFTs, isLoading } =
    useNFTContext();
  // Filtered data array

  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  // Pagination state
  const nftsPerPage = 30;
  const [count, setCount] = useState(0);
  const totalPages = Math.ceil((filteredNFTs?.length || 0) / nftsPerPage);

  return (
    <StyledProfilePage>
      <ContentWrapper>
        <hr />
        <Background>
          <div className="flex h-full">
            <SortingSidebar
              isSidebarOpen={isSidebarOpen}
              nfts={allNFTs}
              setFilteredNFTs={setFilteredNFTs}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            <motion.div
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="flex !items-start justify-center"
              style={{
                animation: "fadeIn 0.5s",
                width: isSidebarOpen ? "calc(100% - 300px)" : "100%",
              }}
            >
              <NFTGrid
                nfts={filteredNFTs}
                isLoading={isLoading}
                animated={true}
                count={count}
                setCount={setCount}
                totalPages={totalPages}
                nftsPerPage={nftsPerPage}
              />
            </motion.div>
          </div>
        </Background>
        <hr />
      </ContentWrapper>
    </StyledProfilePage>
  );
};
