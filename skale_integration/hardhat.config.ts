import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import * as dotenv from "dotenv";

require("dotenv").config();

const { SKALE_ENDPOINT, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100000,
      },
      evmVersion: "london",
    },
  },
  networks: {
    skale: {
      url: SKALE_ENDPOINT,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
