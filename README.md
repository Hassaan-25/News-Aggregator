# News Aggregator Application

**Demo URL:** [https://news-app-aggregator.netlify.app/](https://news-app-aggregator.netlify.app/)  
_Note: Some APIs do not work in the browser due to restrictions on the Developer's Plan. They only accept requests from `localhost`._

This repository contains a News Aggregator application built with React. The application fetches and displays news articles from multiple sources, with a focus on responsiveness and modern UI components. The app is containerized using Docker and served using Nginx.

## Features

- **Responsive UI**: Built using Chakra UI for a consistent and responsive design.
- **Date Picker**: Integrated with `react-dates` for selecting date ranges.
- **API Integration**: Fetches articles from multiple news sources using Axios.
- **Dockerized**: The app is containerized and can be easily deployed using Docker.
- **Production-ready**: The React app is served using Nginx for optimal performance.

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x recommended)
- [Docker](https://www.docker.com/)

### Installation

1. **Clone the Repository**:

   git clone https://github.com/Hassaan-25/News-Aggregator.git

   cd News-Aggregator

2. **Install Dependencies**:

   Use the following command to install the dependencies with the `--legacy-peer-deps` flag:

   npm install --legacy-peer-deps

3. **Run the Development Server**:

   Start the development server using:

   npm start

   The app should now be running on [http://localhost:3000](http://localhost:3000).

## Building and Running with Docker

This application is configured to be built and served using Docker and Nginx.

1. **Build the Docker Image**:

   Run the following command to build the Docker image:

   docker compose up -d

2. **Access the Application**:

   After building the image, you can run the container and access the app by navigating to \`http://localhost\` in your browser.

## Dockerfile Explanation

The Dockerfile in this repository is a multi-stage build Dockerfile, consisting of two stages:

### Stage 1: Build the React App

- **Base Image**: Uses \`node:20\` as the base image.
- **Working Directory**: The working directory is set to \`/app\`.
- **Dependencies**: Installs project dependencies using \`npm install --legacy-peer-deps\`.
- **Build**: Runs the React build process using \`npm run build\`.

### Stage 2: Serve the React App Using Nginx

- **Base Image**: Uses \`nginx:alpine\` as the base image for serving the app.
- **Copy Build Output**: Copies the build output from the previous stage to the Nginx HTML directory.
- **Expose Port**: Exposes port 80 for HTTP traffic.
- **Command**: Starts the Nginx server to serve the application.

## Environment Variables

You can define environment variables required by the application using a \`.env\` file.  
An \`.env.example\` file is provided as a template.

## Acknowledgements

- [Chakra UI](https://chakra-ui.com/)
- [React](https://reactjs.org/)
- [Nginx](https://www.nginx.com/)
- [Docker](https://www.docker.com/)
