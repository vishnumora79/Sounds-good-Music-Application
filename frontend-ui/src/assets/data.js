// FileName: data.js 

import { v4 as uuidv4 } from "uuid"; 
function song_audio() { 
return [ 
	{ 
	name: "KGF Theme", 
	cover: "https://static.tnn.in/photo/106163117/106163117.jpg", 
	artist: "Ravi Basrur", 
	audio: "./KGF.mp3", 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: true, 
	}, 
	{ 
	name: "ROLEX Entry", 
	cover: "https://images.hindustantimes.com/img/2022/10/10/550x309/Suriya_1658583857413_1665390371955_1665390371955.jpg", 
	artist: "Anirudh", 
	audio: "./ROLEX.mp3", 
	color: ["#EF8EA9", "#ab417f"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Deva Entry", 
	cover: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg", 
	artist: "Ravi Basrur", 
	audio: "./SALAAR.mp3", 
	color: ["#CD607D", "#c94043"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Devara", 
	cover: "https://static.toiimg.com/thumb/msid-100360862,width-400,resizemode-4/100360862.jpg", 
	artist: "Anirudh", 
	audio: "./NTR30.mp3", 
	color: ["#EF8EA9", "#ab417f"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Pushpa Raj", 
	cover: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg", 
	artist: "DSP", 
	audio: "./PUSHPA.mp3", 
	color: ["#CD607D", "#c94043"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Master", 
	cover: "https://play-lh.googleusercontent.com/7svbeOEKUWCfUUQWOt_9EfXahxbaWS8mSZYSlxW12FbzSV0OS0G8B7zdhg9Ro9MOCiyU1BYwaRaOlkCESss", 
	artist: "Anirudh", 
	audio: "./vijay.mp3", 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	}, 
]; 
} 

export default song_audio; 
