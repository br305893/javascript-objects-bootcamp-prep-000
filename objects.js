var playlist = {
  'Grateful Dead': "Morning Dew",
  'Phish': "Harry Hood",
  'The Allman Brothers Band': 'Whipping Post'
}

function updatePlaylist(playlist, artistName, songTitle){
 return Object.assign({}, playlist,{['Widespread Panic']: "Chilly Water"})
 }

