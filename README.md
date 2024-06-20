# haven#hex - Supply Chain Management with Crowdfunding

Welcome to haven#hex, a blockchain-based supply chain management system with an integrated crowdfunding feature. Designed to support NGOs and other organizations in their efforts to assist the needy, this project was developed for the DEFY24 competition.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [MetaMask Wallet Integration](#metamask-wallet-integration)
- [License](#license)
- [Author](#author)
- [Contact](#contact)

---

## Project Overview

haven#hex is a comprehensive supply chain management system that leverages blockchain technology to ensure transparency, security, and efficiency in tracking goods and funds. The system also incorporates a crowdfunding module that allows users to raise funds for various causes, providing a robust platform to support NGOs and similar organizations in their humanitarian efforts.

---

## Features

1. **Blockchain-Based Supply Chain**:
   - Immutable record of transactions.
   - Enhanced transparency and traceability.
   - Real-time tracking of goods from origin to destination.

2. **Crowdfunding Integration**:
   - Create and manage fundraising campaigns.
   - Transparent tracking of donations.
   - Secure, blockchain-based transaction records.

3. **User Authentication**:
   - Secure login via MetaMask wallet.
   - User roles for donors, NGOs, and supply chain participants.

4. **Easy-to-Use Interface**:
   - Intuitive design with Next.js and CSS.
   - Responsive layout for various devices.

5. **Secure Transactions**:
   - Smart contracts written in Solidity.
   - Ensures trust and security in fund transfers and product tracking.

---

## Technology Stack

- **Frontend**: Next.js, CSS
- **Backend**: Solidity (Smart Contracts)
- **Blockchain**: Ethereum
- **Wallet Integration**: MetaMask

---

## Installation and Setup

To set up and run haven#hex locally, follow these steps:

### Prerequisites

- Node.js
- MetaMask extension installed in your browser

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/msnabiel/Haven-Hex--Defy24.git
    cd Haven-Hex--Defy24
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Configure Environment Variables**:
    - Create a `.env.local` file in the root directory.
    - Add your Ethereum node URL and other necessary configuration details.

4. **Compile and Deploy Smart Contracts**:
    - Ensure you have truffle or hardhat installed and configured.
    - Compile contracts:
      ```bash
      truffle compile
      ```
    - Deploy contracts to the desired Ethereum network:
      ```bash
      truffle migrate --network <network_name>
      ```

5. **Run the Application**:
    ```bash
    npm run dev
    ```

    The application should now be running on `http://localhost:3000`.

---

## Usage

1. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.
   - Connect your MetaMask wallet.

2. **Sign Up/Login**:
   - Use your MetaMask wallet to sign up or log in.

3. **Create and Manage Supply Chains**:
   - Navigate to the supply chain section to create, view, and manage your supply chains.

4. **Create and Manage Crowdfunding Campaigns**:
   - Go to the crowdfunding section to create and track campaigns.

5. **Donate and Track Contributions**:
   - Browse through the campaigns, contribute securely, and track your donations.

---

## MetaMask Wallet Integration

haven#hex integrates with MetaMask for secure, decentralized authentication and transactions. Ensure that you have the MetaMask extension installed and set up:

1. **Install MetaMask**: Visit [MetaMask](https://metamask.io/) and follow the instructions to install the extension in your browser.

2. **Set Up Wallet**: Create a new wallet or import an existing one.

3. **Connect to haven#hex**: When prompted, connect your MetaMask wallet to the haven#hex application.

---

## License

haven#hex is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Author

**Syed Nabiel Hasaan M**

---


Thank you for using haven#hex. We hope this platform helps you make a positive impact on the world.

---
