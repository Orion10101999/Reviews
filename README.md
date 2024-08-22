
# Deployed Website Link 

```bash

https://reviews-sentiment-analysis.vercel.app/
```



# Review Sentiment Analysis App

This project is a Review Sentiment Analysis App built using React.js. The app displays reviews fetched from a JSON file and allows users to toggle the visibility of translated content for each review.

## Features

- **Review Listing:** Displays a list of reviews, including the reviewer's name, rating, date, topic, and source.
- **Source Icon:** Each review shows an icon representing the source of the review.
- **Review Details:** Shows detailed information about the review, such as the topic and rating.
- **Toggle Translated Content:** Users can toggle the visibility of the translated content for each review individually.

## Tech Stack

- **React.js:** The core framework used for building the user interface.
- **Tailwind CSS:** A utility-first CSS framework used for styling the components.
- **JSON:** The reviews data is fetched from a local JSON file.

## File Structure

```bash


Here’s a basic README.md file that you can include in your project:

markdown
Copy code
# Review Sentiment Analysis App

This project is a Review Sentiment Analysis App built using React.js. The app displays reviews fetched from a JSON file and allows users to toggle the visibility of translated content for each review.

## Features

- **Review Listing:** Displays a list of reviews, including the reviewer's name, rating, date, topic, and source.
- **Source Icon:** Each review shows an icon representing the source of the review.
- **Review Details:** Shows detailed information about the review, such as the topic and rating.
- **Toggle Translated Content:** Users can toggle the visibility of the translated content for each review individually.

## Tech Stack

- **React.js:** The core framework used for building the user interface.
- **Tailwind CSS:** A utility-first CSS framework used for styling the components.
- **JSON:** The reviews data is fetched from a local JSON file.

## File Structure

project-root/
│
├── src/
│ ├── components/
│ │ ├── ReviewList.jsx # Main component that renders the list of reviews
│ │ ├── RawContent.jsx # Component that renders the raw review content
│ │ └── Content.jsx # Component that renders the translated review content
│ ├── data/
│ │ └── reviews_data.json # JSON file containing the reviews data
│ ├── App.jsx # Main App component
│ ├── main.jsx # Entry point for the React application
│ └── ... # Other configuration and utility files
│
├── public/
│ └── ... # Static assets like images and index.html
│
└── README.md # Project documentation

```



## Getting Started

### Prerequisites

Ensure you have Node.js and npm (or Yarn) installed on your machine.

### Installation

1. Clone the repository:

* git clone 
    ```bash
    https://github.com/Orion10101999/Reviews

    
    ```

2. Navigate to the project directory:

    ```bash
    cd Reviews
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev

