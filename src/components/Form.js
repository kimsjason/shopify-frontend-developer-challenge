import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.div``;

const Form = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState();

  let prompts = [
    `Generate a tagline for a ${query} business`,
    `Generate a mission statement for a ${query} business`,
  ];

  return (
    <StyledForm className="tagline-mission-statement-form">
      <h1 className="section-header">
        Describe your business in one word and let us do the rest.
      </h1>
      <form>
        <input
          type="text"
          name="query"
          placeholder="Enter query"
          className="query-input"
          onChange={(e) => e.target.value}
        />
        <button type="submit" className="submit-button">
          Generate Content
        </button>
      </form>
    </StyledForm>
  );
};

export default Form;
