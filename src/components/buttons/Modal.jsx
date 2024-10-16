import { styled, keyframes } from "styled-components";

const customAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
`;

const TraitBox = styled.div`
  height: 40px;
  padding: 0.5rem;
  background: repeating-radial-gradient(
    ellipse farthest-corner at center center,
    #e6e6e6 0%,
    #694e43 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    animation: ${customAnimation} 1s ease-in-out;
  }
`;

export const Modal = ({ list, buttonText }) => {
  return (
    <>
      <button
        className="btn scale-125 mt-2 ml-20 bg-lightBlue border-grey border-2 border-solid text-white font-bold hover:bg-grey hover:text-blue transition-all duration-300 ease-in-out rounded-none"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        {buttonText}
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[url('/src/img/ui/modal/modal6.webp')] bg-cover bg-transparent h-[36.5rem] !rounded-none">
          <div
            className="absolute bg-[('/src/img/buttons/closeModal.webp')] bg-cover right-4 top-3 h-8 w-8 cursor-pointer"
            onClick={() => document.getElementById("my_modal_5").close()}
          ></div>
          <div className="overflow-y-scroll h-[28.8rem] mt-7">
            {list.map((item, i) => {
              return (
                <div
                  key={i}
                  className="bg-blue border-2 border-solid border-grey m-2"
                >
                  <TraitBox>
                    {i}: {item}
                  </TraitBox>
                </div>
              );
            })}
          </div>
        </div>
      </dialog>
    </>
  );
};
