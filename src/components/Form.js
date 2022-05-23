import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.div`
  padding: 0 5%;

  .section-header {
    padding: 64px 0;
    font-size: 2.8rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  form > * {
    height: 51px;
    border-radius: 4px;
    border: none;
    box-shadow: rgb(107, 113, 119) 0px 0px 0px 1px;
    font-size: 1.6rem;
  }

  input {
    padding: 16px;
  }

  @media only screen and (min-width: 769px) {
    .section-header {
      padding-bottom: 48px;
    }

    form {
      flex-direction: row;
      justify-content: center;
    }

    input {
      width: 250px;
    }

    .submit-button {
      width: 180px;
    }
  }
`;

const Form = ({ setCompletions }) => {
  const [query, setQuery] = useState("");

  let prompts = [
    `Generate a tagline for a ${query} business`,
    `Generate a mission statement for a ${query} business`,
  ];

  const fetchAPI = async (prompt) => {
    const query = {
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1.0,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    const response = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(query),
      }
    );

    const data = await response.json();

    return data.choices[0].text;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const completion = {
      query: query,
      tagline: await fetchAPI(prompts[0]),
      mission_statement: await fetchAPI(prompts[1]),
      timestamp: new Date(Date.now()),
    };

    setQuery("");
    setCompletions((prevState) => {
      return [...prevState, completion];
    });
  };

  return (
    <StyledForm className="tagline-mission-statement-form">
      <h1 className="section-header">
        Describe your business in one word and let us do the rest.
      </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Enter query"
          className="query-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Generate Content
        </button>
      </form>
    </StyledForm>
  );
};

export default Form;
