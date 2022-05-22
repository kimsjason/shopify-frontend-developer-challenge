import styled from "styled-components";

const StyledForm = styled.div``;

const Form = () => {
  return (
    <StyledForm className="tagline-mission-statement-form">
      <h1 className="section-header">
        Describe your business in one word and let us do the rest.
      </h1>
      <form>
        <input type="text" placeholder="Enter query" />
        <button type="submit" className="submit-button">
          Generate Content
        </button>
      </form>
    </StyledForm>
  );
};

export default Form;
