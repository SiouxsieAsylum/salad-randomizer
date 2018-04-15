const randomService = {}


// First: get random number
// Second: get 10 random numbers in succession 
// Third: get 10 random numbers where the range is 1 to the length of the database
// Forth: decide how I want to divide up the food. Do I want to just have types for now? 
// Later on, maybe clashing flavors? Maybe multiple of different types of food


randomService.randomNum = () => {
	let rand = Math.floor(Math.random() * 10)
	return rand; 
} 

module.exports = randomService