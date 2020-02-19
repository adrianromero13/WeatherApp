$('#searchCity').on('click',function(event){
  event.preventDefault()
  let searchText = $('#locationText').val()
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=a126d7e96a0d4ee2f269cafd5b34ca51&units=imperial`
  
  $.ajax({
      type:'GET',
      url:url
  })
  .then(function(data){
      console.log(data);
    // // grab id currentCity
    // // append data
    $('#currentCity').text(data.name);
    console.log(data.name);
    // grab id cityTemp
    $('#cityTemp').text(Math.floor(data.main.temp) + "°F");
    // append data
    $('#cityHumidity').text((data.main.humidity) + "%");
    $('#cityWind').text((data.wind.speed) + " MPH");
    $('#weatherImage').attr('src', data.weather[0].icon);
    console.log(data.weather.icon);
  


      // $('#currentCity').text(`
      // <h3>${Date()}</h3>
      // <h2>${data.name}</h2>
      // <p>${Math.floor(data.main.temp)}, ${Math.floor(data.main.temp_min)}, ${Math.floor(data.main.temp_max)}</p>
      // <p>${data.main.humidity} HUMIDITY</p>
      // <p>${data.wind.speed} WIND SPEED</p>
  
      // `)
    // local storage
    let local = localStorage.getItem('city')
    
    // inside a function localStorage.setItem('city', value)
    // append local the variable
  });


  // let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&APPID=a126d7e96a0d4ee2f269cafd5b34ca51&units=imperial`
  // $.ajax({
  //     type:'GET',
  //     url:queryUrl
  // })
  // .then(function(data){
  //     console.log(data)
  //     for (let i = 0; i < data.list.length; i=i+8){
  //         $('#forecast').append(
  //             `<div class = 'cards'>
  //             <h3>${data.list[i].dt_txt.split(' ')[0]}</h3>
  //             <p>${Math.floor(data.list[i].main.temp)}°F</p>
  //             <img src='http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png'/>
  //             <p>${data.list[i].main.humidity}%</p>
              
  
  //             </div>
  //             `
  //         )
  //     }
  // })
  })