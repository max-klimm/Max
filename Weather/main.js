var listCity = [
    { id: 0, text: "Mariupol" },
    { id: 1, text: "London"},
    { id: 2, text: 'Kiev'},
    { id: 3, text: "Rome"},
    { id: 4, text: "Kabul"},
    { id: 5, text: "Washington"},
    { id: 6, text: "Vienna"},
    { id: 7, text: "Baku"},
    { id: 8, text: "Tbilisi"},
    { id: 9, text: "Tallinn"},
    { id: 10, text: "Cairo"},
    { id: 11, text: "Budapest"},
    { id: 12, text: "Tokyo"},
    { id: 13, text: "Oslo"},
    { id: 14, text: "Paris"},
    { id: 15, text: "Dubai"}
];
function sendRequest(){
    var city=$('#inputCity').select2('data')[0].text;
    document.getElementById("city_img").value="Weather in "+city;
    getByCityImg(city,"");
}
function getByCity (city,id){
    $.get( "http://api.openweathermap.org/data/2.5/weather",
        { q:city, appid:"33878868278863281b61ef6ef03195a6" },
        function( data) {
            fillHTML(data,id);

        });
}
function getByCityImg (city){
    $.get( "http://api.openweathermap.org/data/2.5/weather",
        { q:city, appid:"33878868278863281b61ef6ef03195a6" },
        function( data) {
            getImg (data);
            getByCity(city);
        });
}

getByCity("DUBAI","D_");
getByCity("KIEV","K_");
getByCity("LVIV","L_");