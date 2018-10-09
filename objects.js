const playlist = {
  'Grateful Dead': "Morning Dew",
  'Phish': "Harry Hood",
  'The Allman Brothers Band': 'Whipping Post'
}

function updatePlaylist(playlist, artistName, songTitle){
 Object.assign({}, playlist,{['Widespread Panic']: "Chilly Water"})
 return playlist}
