# React Task List

## Overview

This React web application retrieves and displays a list of Tasks that can be manipulated through a responsive user interface. It utilizes the [JavaScript template](https://github.com/remix-run/react-router-templates?tab=readme-ov-file#templates) from the [React Router framework](https://reactrouter.com/).

## Technologies

- [React](https://react.dev/)
- [React Router framework](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- [Axios](https://axios-http.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/)

## Requirements

- [Visual Studio Code](https://code.visualstudio.com/Download)
- [Node.js](https://nodejs.org/en/download)

## Installation

After cloning repository in VS Code, run following commands in terminal:

1. `npm install`
2. `npm run dev`
3. Open browser to `http://localhost:5173/`

## Usage

The **/Tasks** page automatically loads the Task List. You can interact with the list in the following ways:

- Create a new Task
- Search for a Task (filters list as you type)
- Apply filter to only show Pending Tasks
- Change the Description or Status of a Task
- Delete a Task
- Page through Task List

## Testing

The **/tests** folder contains tests for the **Home** and **Tasks** pages. To perform the tests, run command `npm test` in terminal.
