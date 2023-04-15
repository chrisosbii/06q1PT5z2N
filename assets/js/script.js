/////////////////////////
/* Universal Veriables */
/////////////////////////
var input = $("#citySearch");
var current = $("#currentWeatherCard");
var forcast = $("#forcastWeatherCards");

/**
 * impliments the search request
 * does a few things:
 * 1. validates city input
 * 2. turns city input into lat and long cords
 * 3. makes a weather requst to the weather api
 */
function search(){
    //console.log(input.val());
    //validate city input

    // turns city input into lat and log cords

    // makes a weather request to the weather api endpoint

}

function updateWeather(weather){

}

/**
 * Gets the current weather for inputed coordinates
 * @param {int} lat 
 * @param {int} long 
 */
async function currentWeather(lat, long){

}

/**
 * Gets the current weather forcast for coordinates
 * @param {*} lat 
 * @param {*} long 
 * @returns array of forcasted weather
 */
async function weatherForcast(lat, long){
    return [];
}