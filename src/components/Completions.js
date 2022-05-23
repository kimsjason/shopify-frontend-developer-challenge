import styled from "styled-components";
import Completion from "./Completion";

const StyledCompletions = styled.div`
  padding: 64px 5%;
`;

const Completions = ({ completions }) => {
  return (
    <StyledCompletions className="completions">
      {completions.map((completion) => {
        return <Completion completion={completion} />;
      })}
    </StyledCompletions>
  );
};

export default Completions;
