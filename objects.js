var playlist = {Mew : "Comforting Sounds"};
funtion updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName},songTitle});
}