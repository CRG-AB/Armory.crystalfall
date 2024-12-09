import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { fetchTokenIds, fetchNFTs } from "../services/fetchTokenIds.js";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { NFTGrid } from "../components/NFTGrid";
import { SortingSidebar } from "../components/MenuComponents/SortingSidebar.jsx";

import city from "../img/images/city-back-drop.webp";
import softLight from "../img/images/soft-light-fog.webp";

import buttonnew from "../img/ui/buttonnew.svg";
import buttonnewhighlight from "../img/ui/buttonnewhighlight.svg";

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
  // Filtered data array
  const [filteredNFTs, setFilteredNFTs] = useState([]);

  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  // Pagination state
  const nftsPerPage = 30;
  const [count, setCount] = useState(0);
  const totalPages = Math.ceil((filteredNFTs?.length || 0) / nftsPerPage);
  const [allNFTs, setAllNFTs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [Skills, setSkills] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Check if we have a filter state from navigation
    const filterFromNav = location.state?.activeFilter;
    if (filterFromNav) {
      setSkills(filterFromNav === "Skills");
    }
  }, [location]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const tokenIds = await fetchTokenIds();
        const nfts = await fetchNFTs(tokenIds);
        setAllNFTs(nfts || []);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setAllNFTs([]);
        setFilteredNFTs([]);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Only filter if we have loaded NFTs and are not in loading state
    if (!isLoading && allNFTs.length > 0) {
      if (Skills) {
        setFilteredNFTs(
          allNFTs.filter((nft) => {
            if (!nft?.metadata?.properties) {
              return false;
            }
            // If it has skillTags property, it's a skill
            return !!nft.metadata.properties.skillTags;
          })
        );
      } else {
        // Show only items (non-skills)
        setFilteredNFTs(
          allNFTs.filter((nft) => {
            if (!nft?.metadata?.properties) {
              return false;
            }
            // Show items that don't have skillTags
            return !nft.metadata.properties.skillTags;
          })
        );
      }
    }
  }, [Skills, allNFTs, isLoading]);

  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [count]);

  return (
    <StyledProfilePage>
      <ContentWrapper>
        {/* Choose between skills or items */}
        <div className="flex -mb-3">
          <button
            style={{
              backgroundImage: Skills
                ? `url(${buttonnew})`
                : `url(${buttonnewhighlight})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "150px",
              height: "50px",
              marginLeft: "8px",
            }}
            onClick={() => setSkills(false)}
          >
            Items
          </button>
          <button
            style={{
              backgroundImage: !Skills
                ? `url(${buttonnew})`
                : `url(${buttonnewhighlight})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "150px",
              height: "50px",
              marginLeft: "-8px",
            }}
            onClick={() => setSkills(true)}
          >
            Skills
          </button>
        </div>
        <hr />
        <Background>
          <div className="flex h-full">
            {!Skills && (
              <SortingSidebar
                isSidebarOpen={isSidebarOpen}
                nfts={allNFTs}
                setFilteredNFTs={setFilteredNFTs}
                setIsSidebarOpen={setIsSidebarOpen}
              />
            )}
            <motion.div
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="flex !items-start justify-center"
              style={{
                animation: "fadeIn 0.5s",
                width: isSidebarOpen && !Skills ? "calc(100% - 300px)" : "100%",
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
