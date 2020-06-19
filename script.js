// keep javascript from running until html is rendered
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&appid=a126d7e96a0d4ee2f269cafd5b34ca51';

// html elements
let searchCity = $('#searchCity'); // button
let locationText = $('#locationText'); // input
let prevCities = $('#prevCities'); // old searches (saved in empty div)

let currentCiity = $('#currentCity'); // city name (p tag)

// wet code (all p tags)
// make drier
let theDate = $('#theDate'); // date to be displayed 
let cityTemp = $('#cityTemp'); // temp in F
let cityHumidity = $('#cityHumidity'); // humidity in %
let cityWind = $('#cityWind'); // wind in mph
let cityIndex = $('#cityIndex'); // uv index



$(document).ready(function () {

  // pick up what user wrote
  searchCity.on('click', function () {
    let city = locationText.val();
    // call function to make search
    searchWeatherByCity(city);
  })

  // set up if old location is clicked

  // set up searchWeather function
  function searchWeatherByCity(city) {
    $ajax({
      type: 'GET',
      url: baseURL + city + apiKey,
      dataType: 'json',
      success: function (data) {
        if (history.indexOf(city) === -1) {
          history.pushState(city);
          window.localStorage.setItem('history', JSON.stringify(history));

          // add function to deal with the history
        }
        
      }
    })
  }

});









// let cities = [];
// let listDiv = $('#prevCities');
// // let lat = '';
// // let lon = '';
// // function to set up ajax calls to API on click of search button
// $('#searchCity').on('click',function(event){
//   event.preventDefault()
//   let searchText = $('#locationText').val()
//   url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=a126d7e96a0d4ee2f269cafd5b34ca51&units=imperial`

//   // ajax call for the UVIndex element
//   $.ajax({
//       type:'GET',
//       url:url
//   })
//   .then(function(data){
//       console.log('locationdata', data);
//     $('#currentCity').text(data.name);
//     console.log(data.name);
//     // grab id cityTemp
//     $('#cityTemp').text("Temperature: " + (Math.floor(data.main.temp)) + "°F");
//     // append data
//     $('#cityHumidity').text("Humidity: " + (data.main.humidity) + "%");
//     $('#cityWind').text("Wind Speed: " + (data.wind.speed) + " MPH");
//     $('#weatherImage').attr('src', data.weather[0].icon);
//     data.coord.lat = lat;
//     data.coord.lon = lon;
//     getuvindex(data);


//     function getuvindex() {
//         console.log('getUvIndex data', data);
//         let lat = data.coord.lat;
//         let lon = data.coord.lon;
//         queryURL = baseURL + "uvi?" + apiKey + "&lat=" + lat + "&lon=" + lon;

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//         .then(function (response) {

//             let pUVI = $("<p>").html("<b>UV Index : <b>");
//             let spanUVI = $("<span>").html("<b>" + response.value + "</b>");
//             spanUVI.attr("class", "uvindex");
//             pUVI.append(spanUVI);
//             $(".currentcity").append(pUVI);
//         });

//         saveData(data);
//     }return getuvindex;

//   });


//   function saveData(data) {
//     console.log(url);
//     let inputSearchCity = data.name
//     if (inputSearchCity === "") {
//         return;
//     }
//     // seperates the cities based on the "space"
//     inputSearchCity = inputSearchCity.split(" ");
//     searchCity = "";

//     //Capitalizing the first letters of cities' each word
//     inputSearchCity.forEach(element => {
//         searchCity += " " + element.charAt(0).toUpperCase() + element.slice(1);
//     });

//     //prevents to add an already existing citi to the list as well as to localstorage


//     if (cities.includes(searchCity)) {
//         $("#locationText").val("");
//         return;
//     }
//     cities.push(searchCity);
//     localStorage.setItem("cities", JSON.stringify(cities));

//     //displaying the searched citi names on the left pane
//     listTag = $("<button>").html("<b>" + searchCity + "</b>");
//     listTag.attr("data-city", searchCity);
//     listTag.addClass("list-group-item list-group-item-action list-group-item-primary citybutton");
//     listDiv.append(listTag);
//     $("#locationText").val("");
//     rendercity(searchCity);
//     // console.log(searchCity);

// };


//   let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&APPID=a126d7e96a0d4ee2f269cafd5b34ca51&units=imperial`
//   $.ajax({
//       type:'GET',
//       url:queryUrl
//   })
//   .then(function(data){
//       for (let i = 0; i < data.list.length; i=i+8){
//           $('#forecast').append(
//               `<div class = 'cards'>
//               <h3>${data.list[i].dt_txt.split(' ')[0]}</h3>
//               <p>${Math.floor(data.list[i].main.temp)}°F</p>
//               <img src='http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png'/>
//               <p>${data.list[i].main.humidity}%</p>
//               </div>
//               `
//           )
//       }
//   })
//   })