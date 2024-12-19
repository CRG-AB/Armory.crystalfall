# Documentation for the Armory Webpage

## Overview

The Armory webpage is a front-end application for interacting with in-game item & skill token smart contracts. The application is built using React and leverages various libraries and tools for styling, blockchain interaction, and animations.

## Project Structure

### Main Entry Point

The main entry point of the application is `index.js`. This file sets up the React application, including routing for different pages such as the landing page, profile page, and claim page.

### Key Components

- **LandingPage**: The initial page users see when they visit the site. It includes styled components and animations.

  - File: `src/pages/LandingPage.jsx`

- **AboutPage**: Provides information about the project and its background story.

  - File: `src/pages/AboutPage/AboutPage.jsx`
  - **SearchPage**: A sub-component within the AboutPage that allows users to explore more about the project.
    - File: `src/pages/AboutPage/SearchPage.jsx`

- **ProfilePage**: A page that allows users to view their profile and manage their tokens.

  - File: `src/pages/ProfilePage/ProfilePage.jsx`

- **ItemCard**: A reusable component for displaying individual item cards with detailed information and metadata.
  - File: `src/components/ItemCard.jsx`

### Styles

The application uses a combination of Tailwind CSS, custom CSS files, and styled-components for styling. Key style files include:

- `src/styles/Home.css`: Contains styles for the home page layout and text.
- `src/styles/header.css`: Defines styles for the header and navigation elements.
- `src/output.css`: The compiled CSS output from Tailwind CSS and other styles.

Styled-components are also used extensively within individual component files to define scoped styles.

### Configuration Files

- **package.json**: Lists all dependencies and scripts for building and running the application.

  - Key Dependencies: `react`, `react-dom`, `styled-components`, `framer-motion`, `@thirdweb-dev/react`, `@thirdweb-dev/sdk`, `ethers`
  - Key Scripts: `start`, `build`, `deploy`

- **manifest.json**: Provides metadata for the web application, such as icons and theme colors.

### HTML and Assets

- **public/index.html**: The main HTML file that serves as the template for the React application.
- **public/manifest.json**: Provides metadata used when the app is installed on mobile/desktop.
- Image assets are stored under `src/img/` in their respective subdirectories.

## Key Features

- **Responsive Design**: Utilizes media queries, responsive units, and conditional rendering to ensure the application is accessible on various devices.
- **Animations**: Uses `framer-motion` for smooth animations and transitions throughout the app.
- **Blockchain Interaction**: Integrates with the Sepolia blockchain using the ThirdwebProvider from the `@thirdweb-dev/react` package for smart contract interactions with in-game item tokens.
- **Item Details**: Displays detailed information about in-game items, including stats, mods, requirements, and on-chain metadata using the `ItemCard` component.

## Running the Project

### Prerequisites

- Node.js and npm or Yarn should be installed on your machine.

### Installation

To install the necessary dependencies, run:

```
yarn
```

or

```
npm install
```

### Development

To start the development server, use:

```
yarn start
```

or

```
npm start
```

### Deployment

To deploy the application, run:

```
yarn deploy
```

or

```
npm run deploy
```

### Github Pages Deployment

To deploy the application to Github Pages, run:

```
yarn gh-pages
```

or

```
npm run gh-pages
```
