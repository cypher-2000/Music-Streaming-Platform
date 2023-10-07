// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MusicStreamingPlatform {
    struct Song {
        string title;
        string artist;
        uint256 price; // Price in Wei (the smallest unit of Ether)
    }

    mapping(uint256 => Song) public songs;
    uint256 public songCount;

    address public owner;

    event SongRegistered(uint256 indexed id, string title, string artist, uint256 price);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerSong(string memory _title, string memory _artist, uint256 _price) public onlyOwner {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_artist).length > 0, "Artist cannot be empty");
        require(_price > 0, "Price must be greater than zero");

        songCount++;
        songs[songCount] = Song(_title, _artist, _price);

        emit SongRegistered(songCount, _title, _artist, _price);
    }

    function getSong(uint256 _id) public view returns (string memory title, string memory artist, uint256 price) {
        require(_id > 0 && _id <= songCount, "Invalid song ID");
        Song memory song = songs[_id];
        return (song.title, song.artist, song.price);
    }
}
