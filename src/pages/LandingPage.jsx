import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ITEMS_CONTRACT, ABI_ITEMS } from "../CONST";
import { Web3 } from "web3";
import { Search } from "lucide-react";

import CrystalFall from "../img/crg/CrystalFall.svg";

import { codeResponse } from "../services/codeResponse";

const StyledButton = styled.button`
  position: relative;
  &:hover {
    transform: scale(0.82) !important;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 100px;
  padding: 10px 30px;
  border-radius: 10px;
  filter: drop-shadow(0 0 20px #001f22);
  @media screen and (max-width: 600px) {
    transform: scale(0.5);
  }
`;

export const LandingPage = () => {
  const web3 = new Web3("https://13337.rpc.thirdweb.com");
  const contract = new web3.eth.Contract(ABI_ITEMS, ITEMS_CONTRACT);

  const pathName = new URLSearchParams(window.location.search).get("code");
  if (pathName != null) codeResponse();

  /// FUCNTION FOR SEARCHING BY ADDRESS OR TOKEN ID
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const newError = (errorMessage, duration) => {
    setError(errorMessage);
    setTimeout(() => {
      setError("");
    }, duration);
  };
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0%", "50%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const handleChange = (event) => {
    setInput(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isNumber = /^[0-9]+$/.test(input);
    if (input >= 0 && isNumber) {
      contract.methods
        .ownerOf(input)
        .call()
        .then(() => {
          navigate(`/token/${input}`);
        })
        .catch((error) => {
          newError("Token not found", 8000);
        });
    } else if (input === "") {
      newError("Enter Value", 8000);
    } else {
      const isValid = /^0x[0-9a-fA-F]{40}$/.test(input);
      if (isValid) {
        navigate(`/profile/${input}`);
      } else {
        newError(
          "Invalid address. It should start with 0x and followed by 40 hexadecimal characters.",
          8000
        );
      }
    }
  };

  return (
    <>
      <div className="relative flex justify-center items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-[url('/src/img/images/armory_v1.webp')]"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ scale }}
        />
        <div className="relative flex flex-col justify-center items-center h-full scale-110">
          <motion.div
            className="flex flex-col items-center justify-center"
            transition={{ duration: 1.5, style: "easeInOut" }}
            exit={{ opacity: 0 }}
          >
            <StyledDiv>
              <img
                className="h-60 max-w-none drop-shadow-[0_0_50px_rgba(0,0,0,1)] m:h-40"
                src={CrystalFall}
                alt="Logo"
              />
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <div className="bg-[url('/src/img/ui/headline.webp')] h-[98px] bg-cover w-[600px] flex justify-center relative">
                  <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    className="border-2 border-none bg-transparent text-center text-white text-xl focus:border-none outline-none w-full"
                    placeholder="Search by wallet address or token id"
                  />
                  {error ? (
                    <p className="text-red-500 text-sm absolute top-[52px] pt-1 animate-pulse">
                      {error}
                    </p>
                  ) : null}
                </div>
                <StyledButton className="stylized-crg-button text-lg scale-[0.8]">
                  <Search strokeWidth={3} />
                </StyledButton>
              </form>
            </StyledDiv>
          </motion.div>
        </div>
      </div>
    </>
  );
};
