it("retrieves an openai response when the fetch api is called", async () => {
  const query = {
    prompt: "Write a tagline for a business",
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

  expect(data.choices[0].text !== undefined).toBe(true);
});
