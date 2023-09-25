const APIkey = 'a1f3dcf1f4b106a05739365ac2f33777';
const city = 'paris';
const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;
var info = [
    
        {
          "country": "IR"
        },
        {
          "temp": 24.91
        },
        {
          "wind": 3.09
        },
        {
          "humidity": 9
        },
        {
          "name_city": "Tehran"
        },
        {
          "weather": "Clear"
        }
      
]
$(function(){
    console.log('ok');
    
    
    // $.ajax(
    //     {
    //         url : urlAPI,
    //         success : function(r){
                
    //             info[0].country = r.sys.country;
    //             info[1].temp = r.main.temp;
    //             info[2].wind = r.wind.speed;
    //             info[3].humidity = r.main.humidity;
    //             info[4].name_city = r.name;
    //             info[5].weather = r.weather[0].main;
    //         }
    //     }
    // )
    console.log(info);
})


// {
//     "coord": {
//       "lon": 51.4215,
//       "lat": 35.6944
//     },
//     "weather": [
//       {
//         "id": 800,
//         "main": "Clear",
//         "description": "clear sky",
//         "icon": "01d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 24.91,
//       "feels_like": 23.69,
//       "temp_min": 24.79,
//       "temp_max": 24.99,
//       "pressure": 1020,
//       "humidity": 9
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 3.09,
//       "deg": 210
//     },
//     "clouds": {
//       "all": 0
//     },
//     "dt": 1695626701,
//     "sys": {
//       "type": 2,
//       "id": 47737,
//       "country": "IR",
//       "sunrise": 1695608642,
//       "sunset": 1695652100
//     },
//     "timezone": 12600,
//     "id": 112931,
//     "name": "Tehran",
//     "cod": 200
//   }