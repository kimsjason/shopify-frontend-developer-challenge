# Shopify Front End Developer Intern Challenge Fall 2022

This project has been completed for Shopify's front end internship challenge. My goal was understand how the OpenAI API could be leveraged to drive additional value for Shopify's end users. I ultimately created a single purpose application that generated taglines and mission statements based on a user's input query / description of their business.

- [Challenge Prompt](https://docs.google.com/document/d/1O7mCynsz_cBXkEaCFGSZAuvAOY84QVq35l20xJwjOYg/edit)
- [App Demo](https://shopify-gpt-3-challenge.herokuapp.com/)

## Features

The user is able to:

- Enter a query (business description) that calls the Open API and returns their original print, a tagline, and a mission statement upon submitting the form
- View all searched results, sorted from newest to oldest
- Save their prompts and responses with local storage

## DESIGN

- I created some basic designs with Figma to mock up mobile and desktop views of the app
- [Figma File](https://www.figma.com/file/krkvYILQssebm56Fwre4mk/Shopify-Front-End-Developer-Intern-Challenge-2022?node-id=0%3A1)

## BUILD

- ReactJS
- Styled Components
- Local Storage
- [OpenAI API](https://openai.com/)
- Heroku

## FUTURE CONSIDERATIONS

- Migrate API calls to backend server to protect API key
- Build out a tool that generates comprehensive user-facing business text (e.g., About Us page, product details, etc.)
