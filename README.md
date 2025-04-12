# Weather Dashboard Application

A modern weather dashboard built with React, Node.js, Express.js and MongoDb that features real-time weather data, dark/light mode, and search history.

## Features

- Real-time weather data from OpenWeather API  
- Dark/Light mode toggle  
- Search history with localStorage persistence  
- Responsive design  
- Weather condition icons  
- Temperature in Celsius  
- Wind speed and humidity information  

## Tech Stack

### Frontend

- React 18  
- CSS3 with custom styling  
- Local storage for search history  

### Backend

- Node.js  
- Express  
- OpenWeather API integration  
- CORS enabled  
- Environment variables support  

## Getting Started

### Prerequisites

- Node.js (v12 or higher)  
- npm or yarn  
- OpenWeather API key  

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/milindrai/Afford-Medical-Task.git
    ```

2. Install server dependencies:

    ```bash
    cd server
    npm install
    ```

3. Install client dependencies:

    ```bash
    cd client
    npm install
    ```

4. Create a `.env` file in the `server` directory:

    ```ini
    OPENWEATHER_API_KEY=your_api_key_here
    PORT=5003
    ```

### Running the Application

Start the server:

```bash
cd server
node server.js
```

### Start the Client

```bash
cd client
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

### Server

- `OPENWEATHER_API_KEY`: Your OpenWeather API key  
- `PORT`: Server port (default: 5003)
