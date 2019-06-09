var playlist = {Mew : "Comforting Sounds"};

function updatePlaylist(obj , name, title){
  return Object.assign({}, obj, {[name] : title});
}
