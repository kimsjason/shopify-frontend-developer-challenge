import styled from "styled-components";

const StyledCompletion = styled.div``;

const Completion = ({ completion }) => {
  return (
    <StyledCompletion className="completion">
      <p className="query">{completion.query}</p>
      <p className="tagline">{completion.tagline}</p>
      <p className="mission-statement">{completion.mission_statement}</p>
    </StyledCompletion>
  );
};

export default Completion;
