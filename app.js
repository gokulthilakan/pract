



const express = require("express");
const app = express();


var axios = require("axios")

app.get('/data',async function (req,res){
const data =  await axios.get("https://workshop-backend-t22.herokuapp.com/")
console.log(data.data)
res.json(data.data)
}
)


const songs = [
  {
    id: 1,
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
  },
  {
    id: 2,
    title: "First Times",
    artist: "Ed Sheeran",
  },
  {
    id: 3,
    title: "Into The Unknown",
    artist: "Unknown",
  },
  {
    id: 4,
    title: "Perfect",
    artist: "Ed Sheeran",
  },
  {
    id: 5,
    title: "Pay Phone",
    artist: "Maroon 5",
  },
];

app.use(express.json())
app.use((req, res, next) => {
  req.songs = songs;
  next();
});

app.get("/", (req, res) => {
  res.json(songs);
});

app.get("/artist", (req, res) => {
  const artist = songs.map((s) => s.artist);
  const uniqueArtists = new Set(artist);
  const uArray = Array.from(uniqueArtists);
  res.json(uArray);
});

app.listen(3002, () => {
  console.log("hello");
});

const { getTitles } = require("./controlers/titles.js");
app.get("/titles", getTitles);

const { getartist } = require("./controlers/artist.js");
app.get("/artist", getartist);

app.get("/songs", (req, res) => {
  console.log(req.query);

  const arr = songs.filter((song) => {
    return song.artist == "Ed Sheeran";
  });
  console.log(arr);

  res.json(arr);
});

app.get("/songs/:id", (req, res) => {
  console.log(req.params);
  const ar2 = songs.filter((s) => {
    return s.id == req.params.id;
  });
  res.json(ar2);
});

app.post("/", (req, res) => {
    songs.push(req.body);
  res.sendStatus(200);
});

app.delete('/songs/:id',(req,res) =>
  {const ae= songs.findIndex((s) => s.id == req.params.id)
    songs.splice(ae,1)
    res.sendStatus(200)


})

