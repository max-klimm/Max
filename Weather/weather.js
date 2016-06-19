var windType={
    noWind:0,
    wind:1,
    storm:2
};
var direction={
    north:0,
    west:1,
    south:2,
    east:3
};
var humidity= {
    dry:0,
    norm:1,
    wet:2
};
var pressure={
    low:0,
    medium:1,
    high:2
};
var clouds= {
    noClouds: 0,
    low: 1,
    medium: 2,
    high: 3
};
var temp={
    cold:0,
    less:1,
    more:2,
    hot:3
};

function Weather(data){
    //this.temp_max=Math.round(data.main.temp.max-273.15);
    this.temperature=Math.round(data.main.temp-273.15);
    this.windSpeed=data.wind.speed;
    this.windDirection=data.wind.deg;
    this.humidity=data.main.humidity;
    this.pressure=data.main.pressure;
    this.clouds=data.clouds.all;
    this.description=data.weather[0].description;
    this.getWindSpeed=function(){
        if (this.windSpeed<=5){
            return windType.noWind;
        }
        if (this.windSpeed>5&&this.windSpeed<15){
            return windType.wind;
        }
        if (this.windSpeed>=15){
            return windType.storm;
        }
    };
    this.getWindDirection=function(){
        if (this.windDirection<=45||this.windDirection>=315){
            return direction.north;
        }
        if (this.windDirection>45&&this.windDirection<135){
            return direction.west;
        }
        if (this.windDirection>=135&&this.windDirection<=225){
            return direction.south;
        }
        if (this.windDirection>225&&this.windDirection<315){
            return direction.east;
        }
    };
    this.getHumidity=function(){
        if (this.humidity<40){
            return humidity.dry;
        }
        if (this.humidity>=40&&this.humidity<=80){
            return humidity.norm;
        }
        if (this.humidity>80){
            return humidity.wet;
        }
    };
    this.getPressure=function(){
        if (this.pressure<950){
            return pressure.low;
        }
        if (this.pressure>=950&&this.pressure<=1050){
            return pressure.medium;
        }
        if (this.pressure>1050){
            return pressure.high;
        }
    };
    this.getClouds=function(){
        if (this.clouds<25){
            return clouds.noClouds;
        }
        if (this.clouds>=25&&this.clouds<=50){
            return clouds.low;
        }
        if (this.clouds>50&&this.clouds<75){
            return clouds.medium;
        }
        if (this.clouds>=75){
            return clouds.high;
        }
    };
    this.getTemp=function(){
        if (this.temperature<=-20){
            return temp.cold;
        }
        if (this.temperature>-20&&this.temperature<0){
            return temp.less;
        }
        if (this.temperature>=0&&this.temperature<25){
            return temp.more;
        }
        if (this.temperature>=25){
            return temp.hot;
        }
    }
}




