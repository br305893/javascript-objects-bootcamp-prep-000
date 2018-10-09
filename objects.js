var playlist = {
  'Grateful Dead': "Morning Dew",
  'Phish': "Harry Hood",
  'The Allman Brothers Band': 'Whipping Post'
}

function updatePlaylist(playlist, artistName, songTitle){
 playlist[artistName] = songTitle
return playlist}

function removePlaylist(playlist, artistName){
  delete playlist[artistName]
return playlist}
