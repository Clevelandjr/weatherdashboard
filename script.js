function getCityWeather() {
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=4d4f75f977fc59faeb9817db4af048db"
//    Weather data//////////////////////////////////////////////////////////////////
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var temperature = [];
        var humidity = [];
        var windSpeed = [];
        
        for (i = 0; i < 10; i++) {
            temperature.push(((response.list[i].main.temp - 273.15) * (9 / 5) + 32).toFixed(0))
            humidity.push(response.list[i].main.humidity);
            windSpeed.push(response.list[i].wind.speed);
        }
        
        console.log("wind " + windSpeed);
        console.log("humidity " + humidity);
        console.log("temperature " + temperature);
        console.log("icon " + icon);

        $("#city-div").empty();
      $("#city-div").append(temperature, humidity, windSpeed);
    });
}

// Event handler for user clicking the select-city button
$("#select-city").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputCity = $("#city-input").val().trim();

    // Running the searchBandsInTown function(passing in the artist as an argument)
    getCityWeather(inputCity);
  });


        