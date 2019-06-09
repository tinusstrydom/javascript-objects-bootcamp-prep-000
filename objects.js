var playlist = {Mew : "Comforting Sounds"};

function updatePlaylist(obj, name, title){
  obj[name] = title;
  return obj;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}
