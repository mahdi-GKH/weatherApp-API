
const APIkey = 'a1f3dcf1f4b106a05739365ac2f33777';


function set_infos(city){
  const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;

  $(function(){
    $.ajax(
        {
            url : urlAPI,
            success : function(r){
                $('#city').text(r.name);
                $('#country').text(r.sys.country);
                $('#temp').html(`${Math.floor(r.main.temp)}&deg;`);
                $('#wind').text(r.wind.speed);
                $('#HUM').text(r.main.humidity);
                $('#weather').text(r.weather[0].main);
            },
            error: function (request) {
              alert(request.responseJSON.message);
              
              
          }
        }
    ) 
    $('#cityINP').val("");  
})

}

$(function(){
  $('#serchBTN').click(()=>{
    set_infos($('#cityINP').val());
  })
})