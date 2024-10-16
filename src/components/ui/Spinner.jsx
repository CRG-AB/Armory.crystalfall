import styled from "styled-components";

const SpinnerTool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;
export const Spinner = ({ className }) => {
  return (
    <SpinnerTool>
      <div className={`spinner ${className} `}></div>
    </SpinnerTool>
  );
};
