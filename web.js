const Web3 = require("web3"); // Import Web3.js library
const web3 = new Web3("YOUR_ETHEREUM_NODE_URL"); // Replace with your Ethereum node URL

const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your smart contract address
const abi = [
  // Replace with your smart contract ABI
  {
    constant: false,
    inputs: [
      {
        name: "_title",
        type: "string",
      },
      {
        name: "_artist",
        type: "string",
      },
      {
        name: "_price",
        type: "uint256",
      },
    ],
    name: "registerSong",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getSong",
    outputs: [
      {
        name: "title",
        type: "string",
      },
      {
        name: "artist",
        type: "string",
      },
      {
        name: "price",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const contract = new web3.eth.Contract(abi, contractAddress);

// Example function to register a song
async function registerSong(title, artist, price) {
  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods
      .registerSong(title, artist, price)
      .send({ from: accounts[0] });
    console.log("Song registered successfully.");
  } catch (error) {
    console.error("Error registering the song:", error);
  }
}

// Example function to get song details by ID
async function getSongDetails(id) {
  try {
    const song = await contract.methods.getSong(id).call();
    console.log("Song Details:");
    console.log("Title:", song.title);
    console.log("Artist:", song.artist);
    console.log("Price:", song.price);
  } catch (error) {
    console.error("Error fetching song details:", error);
  }
}

// Example usage
registerSong("Song Title", "Artist Name", 1000000000000000000); // 1 ETH in Wei
getSongDetails(1); // Replace with the ID of the song you want to fetch
