import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "styled-components";
import { DisplayToken } from "./ui/DisplayToken";
import { thirdWebIPFSLink } from "../services/IPFSLink";
import { Spinner } from "./ui/Spinner";
import { ArrowButton } from "./buttons/ArrowButton";
import { ItemCard } from "./ItemCard";

const StyledTokenList = styled(motion.ul)`
  display: grid;
  justify-content: center;
  align-content: start;
  gap: 5px;
  padding: 50px 30px 90px 30px;
  width: 100%;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));
  grid-auto-rows: 251px;
  align-content: start;

  @media screen and (max-width: 870px) {
    padding-bottom: 100px;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 150px), 150px));
    grid-auto-rows: 189px;
  }
`;

const HoverPreview = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  transform: scale(0.6);
  transform-origin: top left;
  pointer-events: none;
`;

export const NFTGrid = ({
  nfts = [],
  isLoading,
  animated = false,
  count,
  setCount,
  totalPages,
  nftsPerPage,
}) => {
  const [hoveredToken, setHoveredToken] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverTimer, setHoverTimer] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    return () => {
      if (hoverTimer) clearTimeout(hoverTimer);
    };
  }, [hoverTimer]);

  const handleMouseEnter = (e, token) => {
    setHoveredToken(token);
    setMousePos({ x: e.clientX, y: e.clientY });
    const timer = setTimeout(() => {
      setShowPreview(true);
    }, 600);
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    if (hoverTimer) clearTimeout(hoverTimer);
    setHoverTimer(null);
    setHoveredToken(null);
    setShowPreview(false);
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const hasPreviousPage = count > 0;
  const hasNextPage = (count + 1) * nftsPerPage < nfts.length;

  // Get current page's NFTs
  const displayedNfts = nfts.slice(
    count * nftsPerPage,
    (count + 1) * nftsPerPage
  );

  if (isLoading) {
    return (
      <div className="pt-12">
        <Spinner />
      </div>
    );
  }

  if (!nfts || nfts.length === 0) {
    return (
      <div className="font-bold mt-36">
        No NFTs were found matching your current filters.
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        <StyledTokenList
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 16,
          }}
        >
          {displayedNfts.map((token, i) => {
            if (!token?.metadata) return null;
            const imageUrl = token.metadata.image || "";
            return (
              <motion.li
                layoutId={`item-${token.metadata.id}`}
                key={token.metadata.id}
                transition={{
                  duration: 0.5,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
              >
                <DisplayToken
                  name={token.metadata.name}
                  linkTo={`token/${token.metadata.id}`}
                  img={imageUrl ? thirdWebIPFSLink(imageUrl) : ""}
                  tokenID={token.metadata.id}
                  onMouseEnter={(e) => handleMouseEnter(e, token)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </motion.li>
            );
          })}
        </StyledTokenList>
      </AnimatePresence>

      <AnimatePresence>
        {hoveredToken && showPreview && (
          <HoverPreview
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 0.6 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            style={{
              left: mousePos.x + 5,
              top: mousePos.y + 8,
            }}
          >
            <ItemCard token={hoveredToken} />
          </HoverPreview>
        )}
      </AnimatePresence>

      {nfts.length > nftsPerPage && (
        <div className="flex justify-center items-center gap-4 absolute bottom-4 left-[calc(50%-90px)]">
          <ArrowButton
            direction="left"
            onClick={() => {
              setCount(count - 1);
              window.scrollTo({ top: 100, behavior: "smooth" });
            }}
            disabled={!hasPreviousPage}
          />
          Page {count + 1} of {totalPages}
          <ArrowButton
            direction="right"
            onClick={() => {
              setCount(count + 1);
              window.scrollTo({ top: 100, behavior: "smooth" });
            }}
            disabled={!hasNextPage}
          />
        </div>
      )}
    </>
  );
};
