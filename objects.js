playlist = {
  TaylorSwift: '22'
}
function updatePlaylist(playlist, artist, song){
  return Object.assign({}, playlist, {[artist]: song})
}

function removeFromPlaylist(playlist, artist){
  return delete playlist.artist
}
