const API_key = 'd4b2b2120ef46534a54d9b435d8658ab'

fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=d4b2b2120ef46534a54d9b435d8658ab")
.then((data) => data.json())
.then((jsonData) => {
    // console.log(jsonData.name)
    // console.log(jsonData.main.temp)
    // console.log(jsonData.main.feels_like)
    // console.log(jsonData.weather[0].description)
   

    fetch(`http://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`)
    .then((res) => res.blob())
    .then(result => {

        document.getElementById("text_loc").innerHTML = jsonData.name
        document.getElementById("text_loc_contry").innerHTML = jsonData.sys.country
        document.getElementById("text_temp").innerHTML = Math.round(jsonData.main.temp)
        document.getElementById("text_feels_like").innerHTML = (jsonData.main.feels_like)
   
        const imageObjectURL = URL.createObjectURL(result);
        document.getElementById("icon").src=imageObjectURL
        
    })
    











    document.getElementById("text_desc").innerHTML = jsonData.weather[0].description


})