var playlist = {Mew : "Comforting Sounds"};
funtion updatePlaylist(obj , name, title){
  return Object.assign({}, obj, {[name] : title});
}
