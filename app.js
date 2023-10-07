// Sample data for registered songs (you can replace this with data from your backend)
const sampleSongs = [
  {
    title: "Chaleya",
    artist: "Arijit Singh",
    price: "0.05 ETH",
  },
  {
    title: "August",
    artist: "Taylor Swift",
    price: "0.03 ETH",
  },
  {
    title: "Song Title 3",
    artist: "Artist Name 3",
    price: "0.04 ETH",
  },
];

// Function to register a song
function registerSong(event) {
  event.preventDefault();

  // Get form input values
  const artist = document.getElementById("artist").value;
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;

  // Create a new song object
  const newSong = {
    title: title,
    artist: artist,
    price: price + " ETH",
  };

  // Add the new song to the list
  sampleSongs.push(newSong);

  // Clear the form fields
  document.getElementById("artist").value = "";
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";

  // Update the song list
  displaySongList();
}

// Function to display the song list
function displaySongList() {
  const songList = document.getElementById("song-list");

  // Clear the existing song list
  songList.innerHTML = "";

  // Loop through the sampleSongs array and create list items for each song
  sampleSongs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");

    const title = document.createElement("h3");
    title.classList.add("list-title");
    title.textContent = song.title;

    const artist = document.createElement("p");
    artist.classList.add("list-info");
    artist.textContent = "Artist: " + song.artist;

    const price = document.createElement("p");
    price.classList.add("list-info");
    price.textContent = "Price: " + song.price;

    const playButton = document.createElement("button");
    playButton.classList.add("list-button");
    playButton.textContent = "Play";
    playButton.addEventListener("click", () => playSong(playButton));

    // Add the song details and play button to the list item
    listItem.appendChild(title);
    listItem.appendChild(artist);
    listItem.appendChild(price);
    listItem.appendChild(playButton);

    // Append the list item to the song list
    songList.appendChild(listItem);
  });
}

function playSong(button) {
  alert("Playing the song");
}

// Event listener for the song registration form submission
const registrationForm = document.getElementById("song-registration-form");
registrationForm.addEventListener("submit", registerSong);

// Initial display of the song list
displaySongList();
