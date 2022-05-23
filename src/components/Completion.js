import styled from "styled-components";

const StyledCompletion = styled.div`
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;

  .query,
  .tagline,
  .mission-statement {
    font-weight: bold;
    padding: 5px 0;
  }

  .content {
    font-weight: normal;
  }

  @media only screen and (min-width: 769px) {
    .query,
    .tagline,
    .mission-statement {
      display: grid;
      grid-template-columns: 250px auto;
    }
  }
`;

const Completion = ({ completion }) => {
  return (
    <StyledCompletion className="completion">
      <div className="query">
        Query
        <p className="content">{completion.query}</p>
      </div>
      <div className="tagline">
        Tagline
        <p className="content">{completion.tagline}</p>
      </div>
      <div className="mission-statement">
        Mission Statement
        <p className="content">{completion.mission_statement}</p>
      </div>
    </StyledCompletion>
  );
};

export default Completion;
