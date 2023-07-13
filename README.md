# webpack-demo

This is a simple demo project showcasing the usage of webpack for bundling JavaScript and CSS files.

# Table of Contents

- [webpack-demo](#webpack-demo)
- [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Prerequisites

Before running the project, ensure that you have the following software installed on your machine:

- Node.js (version 12 or above)
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:

```shell
git clone https://github.com/mogrady-professional/webpack-demo.git

```

2. Install the project dependencies:

```shell
npm install
```

# Usage

To build and run the project, use the following commands:

- For development mode:

```shell
npm run dev
```

This command starts the webpack development server and launches the application on http://localhost:9000. The server automatically rebuilds the project when changes are made.

- For production mode:

```shell
npm run build
```

This command generates a production-ready build of the project in the dist directory. The bundled JavaScript and CSS files are optimized and minified for better performance.

# Project Structure

The project structure is organized as follows:

```md
.
├── src/
| ├── app.js # The entry point of the application
| ├── index.html # The main HTML file
| └── styles/ # Directory for CSS files
└── dist/ # The output directory where the bundled files are generated
```
