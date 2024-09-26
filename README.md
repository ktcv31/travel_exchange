## Travel Exchange
### This is an app that manages travel history for travelers around the world


A full-stack web application that allows users to share their travel experiences, explore new destinations, view weather information, and add new experiences to their profile.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Register and login to access full features of the platform.
- **Profile Management**: Each user has their profile page displaying their travel experiences.
- **Add New Experience**: Users can share their travel experiences along with images.
- **Weather Information**: Users can search for any city or country and get the latest weather info.
- **Google Maps Integration**: Interactive map to locate and explore destinations, including adding markers.

## Technologies Used

### Frontend
- **React.js**: For building the user interface.
- **Redux**: For state management.
- **Material-UI**: For elegant UI components.
- **Axios**: For HTTP requests.
- **React-Router**: For navigation.

### Backend
- **Node.js**: For the server-side runtime.
- **Express.js**: For creating RESTful APIs.
- **MongoDB & Mongoose**: For the database and ORM.
- **Multer**: For handling file uploads.
- **Axios**: For fetching weather data from external APIs.

### APIs
- **Google Maps API**: For map integration.
- **OpenWeather API**: For fetching weather data.

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/ktcv31/travel_exchange.git
    cd travel_exchange
    ```

2. **Set up Environment Variables**

    Create a `.env` file in the root directory of both frontend and backend and add the following variables:
    
    **Frontend (.env)**
    ```
    REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
    ```

    **Backend (.env)**
    ```
    MONGO_URI=your_mongo_db_connection_string
    WEATHER_API_KEY=your_open_weather_api_key
    PORT=5001
    ```

3. **Install Dependencies**
    - Navigate to the `frontend` and `backend` folders separately and run the following:
    ```bash
    # For frontend
    cd frontend
    npm install
    
    # For backend
    cd ../backend
    npm install
    ```

4. **Run the Application**
    - In the `backend` folder, start the server:
    ```bash
    npm run dev
    ```
    - In the `frontend` folder, start the React app:
    ```bash
    npm start
    ```

5. **Visit the App**
    Open your browser and go to `http://localhost:3000`.

## Usage

1. **Register and Login**
    - Register a new user and login to access the app's main features.

2. **Add a New Experience**
    - Click on "Add Experience" to fill out the form for adding a new travel experience.
    - Optionally, upload an image related to the experience.

3. **Explore the Map and Weather**
    - Use the "Explore" tab to search for any city or country.
    - See the location marked on the Google Map and view the weather information.

4. **View Profile**
    - Visit the profile page to see your experiences and the uploaded images.


