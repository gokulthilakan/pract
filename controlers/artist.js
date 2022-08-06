function getartist(req,res){
    const artist = req.songs.map((s) => s.artist);
    const uniqueArtists = new Set(artist);
    const uArray = Array.from(uniqueArtists);
    res.json(uArray);
}

    module.exports = {getartist}