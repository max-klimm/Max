
function fillHTML (data,id){
    var weather=new Weather(data);

    dataWindSpeed(weather,id);
    dataWindDirection(weather,id);
    dataTemp (weather,id);
    dataPressure (weather,id);
    dataHumidity (weather,id);
    dataClouds (weather,id);
    dataDescription(weather,id)
}
function dataDescription(weather,id){
    $("#"+id+"description").text(weather.description);

}
function dataWindSpeed (weather,id){
    $("#"+id+"wind_speed").text(weather.windSpeed+" km/h");
   // var speedWind=document.getElementById(id+"wind_speed_img");

   // switch (weather.getWindSpeed()){
       // case windType.noWind: speedWind.setAttribute("src","images/no_beter.jpg"); break;
       // case windType.wind: speedWind.setAttribute("src","images/beter.jpg");break;
       // case windType.storm: speedWind.setAttribute("src","images/storm2.jpg");break;
    //}
}
function dataWindDirection(weather,id) {
   // var directionWind = document.getElementById(id+"wind_direction");
    switch (weather.getWindDirection()) {
        case direction.north:
            //directionWind.setAttribute("src", "images/sever.jpg");
            $("#"+id+"wind_direction").text("North");
            break;
        case direction.west:
           // directionWind.setAttribute("src", "images/vostok.jpg");
            $("#"+id+"wind_direction").text("West");
            break;
        case direction.south:
            //directionWind.setAttribute("src", "images/ug.jpg");
            $("#"+id+"wind_direction").text("South");
            break;
        case direction.east:
           // directionWind.setAttribute("src", "images/zapad.jpg");
            $("#"+id+"wind_direction").text("East");
            break;
    }
}
function dataHumidity (weather,id){
    $("#"+id+"humidity").text(weather.humidity+" %");
   //var humidityData=document.getElementById(id+"humidity_img");
  // switch (weather.getHumidity()){
      // case humidity.dry:humidityData.setAttribute("src","images/lowD.jpg");break;
      // case humidity.norm:humidityData.setAttribute("src","images/normD.jpg");break;
      // case humidity.wet:humidityData.setAttribute("src","images/highD.jpg");break;
   // }
}
function dataPressure (weather,id){
    $("#"+id+"pressure").text(weather.pressure+" mm/rs");
   // var pressureData=document.getElementById(id+"pressure_img");
   // switch (weather.getPressure()){
        //case pressure.low:pressureData.setAttribute("src","images/lowD.jpg");break;
        //case pressure.medium:pressureData.setAttribute("src","images/normD.jpg");break;
       // case pressure.high:pressureData.setAttribute("src","images/highD.jpg");break;
   // }
}
function dataTemp (weather,id){
    $("#"+id+"temp").text(weather.temperature+" C");
}
function dataClouds (weather,id){
    $("#"+id+"clouds").text(weather.clouds);
    var cloudsData=document.getElementById(id+"clouds_img");
        switch(weather.getClouds()){
            case clouds.noClouds:cloudsData.setAttribute("src","images/solnce.jpg");break;
            case clouds.low:cloudsData.setAttribute("src","images/solnce1.jpg");break;
            case clouds.medium:cloudsData.setAttribute("src","images/solnce2.jpg");break;
            case clouds.high:cloudsData.setAttribute("src","images/solnce3.jpg");break;
        }
}


