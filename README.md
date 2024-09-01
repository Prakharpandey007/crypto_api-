# Crypto Transactions API
This project is a Node.js-based API that allows users to fetch their cryptocurrency transactions and monitor the price of Ethereum. The API integrates with the Etherscan API to fetch transaction details and stores the data in a MongoDB database. Additionally, it includes a system to periodically fetch and store the price of Ethereum. Users can retrieve their total expenses and the current price of ether through a simple GET request.

## Project Structure 
``` 
crypto-transactions-api/
│
├── src/
│   ├── controllers/
│   │   ├── transactionController.js  # Handles logic related to transactions
│   │   └── priceController.js        # Handles logic related to Ethereum price
│   │
│   ├── models/
│   │   ├── transactionModel.js       # Mongoose schema and model for transactions
│   │   └── priceModel.js             # Mongoose schema and model for Ethereum price
│   │
│   ├── routes/
│   │   ├── transactionRoutes.js      # API routes for transaction-related endpoints
│   │   └── priceRoutes.js            # API routes for price-related endpoints
│   │
│   ├── services/
│   │   ├── etherscanService.js       # Service to interact with the Etherscan API
│   │   └── priceService.js           # Service to fetch and store Ethereum price
│   │
│   ├── config/
│   │   ├── db.js                     # MongoDB connection setup
│   │   └── config.js                 # Configuration file for environment variables
|   | 
│   ├── server.js                     # Server startup
│   └── utils/
│       └── fetchPrice.js                #fetch crypto price in every 10 minutes 
│
├── .env                              # Environment variables
├── package.json                      # Node.js dependencies and scripts
└── README.md                         # Project documentation


```

## Table of Contents 
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Enviroment variable](#enviroment-variable)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Cron Job](#cron-job)
- [Contributing](#contributing)
- [License](#license)

## Features
- Fetch Crypto Transactions: Retrieves the list of 'Normal' transactions for a user's Ethereum address.
- Store Transactions: Saves the fetched transactions in a MongoDB database.
- Ethereum Price Monitoring: Fetches the current price of Ethereum every 10 minutes and stores it in the database.
- Expense Calculation: Provides an API to calculate the total expenses for a user and returns the current price of Ethereum.
  
## Technologies Used
  - Backend: Node.js, Express.js
  - Database: MongoDb 
  - Environment Management: dotenv
    
## Installation 
  ### Clone the Repository 
  ```
  git clone https://github.com/your-username/crypto-transactions-api.git
  cd crypto-transactions-api
  ```
 ### Install Dependencies 
 ``` 
npm install
npm i express nodemon mongodb mongoose dotenv node-cron 
 ```
## Enviroment Variable 
```
PORT=8000
MONGODB_URI=your mongodb url 
ETHERSCAN_API_KEY=your_etherscan_apikey 

```
## Running the Application 
```npm start ```
## API Endpoints
### Fetch Transactions
- Endpoint: ```/api/transactions/:address```
- Method: GET
- Description: Fetches and stores the 'Normal' transactions for the provided Ethereum address.
### Get Total Expenses
- Endpoint: ```/api/expenses/:address```
- Method: GET
- Description: Retrieves the total expenses for the provided Ethereum address along with the current price of ether.
### Get Ethereum Price
- Endpoint: ```/api/price```
- Method: GET
- Description: Fetches the latest stored Ethereum price.
### Cron Job
The application includes a cron job that runs every 10 minutes to fetch and store the current price of Ethereum.

## Contributing 
Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
