
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
function getImg (data){
    var weather=new Weather(data);
    dataWindSpeedImg(weather);
    dataWindDirectionImg(weather);
    dataTempImg (weather);
    dataCloudsImg (weather)
}
function dataDescription(weather,id){
    $("#"+id+"description").text(weather.description);
}
function dataWindSpeed (weather,id){
    $("#"+id+"wind_speed").text(weather.windSpeed+" km/h");
}
function dataWindDirection(weather,id) {

    switch (weather.getWindDirection()) {
        case direction.north:
            $("#"+id+"wind_direction").text("North");
            break;
        case direction.west:
            $("#"+id+"wind_direction").text("West");
            break;
        case direction.south:
            $("#"+id+"wind_direction").text("South");
            break;
        case direction.east:
            $("#"+id+"wind_direction").text("East");
            break;
    }
}
function dataHumidity (weather,id){
    $("#"+id+"humidity").text(weather.humidity+" %");

}
function dataPressure (weather,id){
    $("#"+id+"pressure").text(weather.pressure+" mm/rs");

}
function dataTemp (weather,id){
    $("#"+id+"temp").text(weather.temperature+" C");
}
function dataClouds (weather,id){
    $("#"+id+"clouds").text(weather.clouds+" %");
}

function dataWindSpeedImg (weather){
    var speedWind;

    switch (weather.getWindSpeed()){
        case windType.noWind:
            speedWind=document.getElementById("wind_speed_img1");
            speedWind.setAttribute("class","selected_img");break;
        case windType.wind:
            speedWind=document.getElementById("wind_speed_img2");
            speedWind.setAttribute("class","selected_img");break;
        case windType.storm:
            speedWind=document.getElementById("wind_speed_img3");
            speedWind.setAttribute("class","selected_img");break;
    }
}
function dataTempImg (weather){
    var tempData;

    switch (weather.getTemp()){
        case temp.cold:
            tempData=document.getElementById("temp_img1");
            tempData.setAttribute("class","selected_img");break;
        case temp.less:
            tempData=document.getElementById("temp_img1");
            tempData.setAttribute("class","selected_img");break;
        case temp.more:
            tempData=document.getElementById("temp_img2");
            tempData.setAttribute("class","selected_img");break;
        case temp.hot:
            tempData=document.getElementById("temp_img3");
            tempData.setAttribute("class","selected_img");break;
    }
}
function dataWindDirectionImg(weather){
    var directionWind;

    switch (weather.getWindDirection()) {
        case direction.north:
            directionWind = document.getElementById("wind_direction_img1");
            directionWind.setAttribute("class","selected_img");break;

        case direction.west:
            directionWind = document.getElementById("wind_direction_img2");
            directionWind.setAttribute("class","selected_img");break;
        case direction.south:
            directionWind = document.getElementById("wind_direction_img3");
            directionWind.setAttribute("class","selected_img");break;
        case direction.east:
            directionWind = document.getElementById("wind_direction_img4");
            directionWind.setAttribute("class","selected_img");break;
    }
}
function dataCloudsImg (weather){
    var cloudsData;

    switch(weather.getClouds()){
        case clouds.noClouds:
            cloudsData=document.getElementById("clouds_img1");
            cloudsData.setAttribute("class","selected_img");break;
        case clouds.low:
            cloudsData=document.getElementById("clouds_img2");
            cloudsData.setAttribute("class","selected_img");break;
        case clouds.medium:
            cloudsData=document.getElementById("clouds_img3");
            cloudsData.setAttribute("class","selected_img");break;
        case clouds.high:
            cloudsData=document.getElementById("clouds_img4");
            cloudsData.setAttribute("class","selected_img");break;
    }
}