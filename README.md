# User Directory App

## Overview

This project is a simple **User Directory Application** built with React. It fetches user information from a public API and displays it in a clean, searchable interface. The project demonstrates how to work with APIs, manage state, and render dynamic data in React.

## Features

* Fetches user data from an API using the Fetch API
* Displays user information in individual cards
* Search users by name or username
* Shows a loading message while data is being fetched
* Displays an error message if the API request fails
* Shows the total number of users displayed
* Uses reusable React components

## Technologies Used

* React
* JavaScript (ES6+)
* Vite
* CSS
* Fetch API

## Concepts Practiced

* useState
* useEffect
* Props
* Fetch API
* Async/Await
* map()
* filter()
* Conditional Rendering
* Component Reusability

## Project Structure

```text
src/
│── components/
│   ├── UserDirectory.jsx
│   └── UserProfile.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## API Used

https://jsonplaceholder.typicode.com/users

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Open the project folder

```bash
cd user-directory-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the local development URL displayed in the terminal.

## What I Learned

* Fetching data from an API using `fetch()` and `async/await`
* Using `useEffect` to perform side effects when a component loads
* Managing application state with `useState`
* Passing data between components using props
* Rendering lists dynamically with `map()`
* Filtering data using `filter()`
* Implementing loading and error states with conditional rendering
* Building reusable React components for a cleaner project structure

## Future Improvements

* Add user profile details page
* Sort users by name
* Add dark mode
* Improve UI with animations and responsive design
* Add pagination for larger datasets


