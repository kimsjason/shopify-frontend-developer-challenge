import styled from "styled-components";
import Completion from "./Completion";

const StyledCompletions = styled.div`
  padding: 64px 5%;

  @media only screen and (min-width: 769px) {
    padding: 64px 15%;
  }
`;

const Completions = ({ completions }) => {
  // sorts completions array from newest to oldest responses
  const sortedCompletions = completions.slice(0).reverse();

  return (
    <StyledCompletions className="completions">
      {sortedCompletions.map((completion) => {
        return <Completion completion={completion} />;
      })}
    </StyledCompletions>
  );
};

export default Completions;
