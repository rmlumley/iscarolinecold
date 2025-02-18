import Alpine from 'alpinejs'


window.addEventListener("load", () => {
	const today = new Date();
	const returnDate = new Date('2025-02-06');
	if (today < returnDate) {
		let city = "atlanta,ga,us";
		weatherCheck(city);
	} else {
		let city = "madison,wi,us";
		weatherCheck(city);
	}
	
});

function weatherCheck(city) {
	const api = "e29bb800c350e91c0036cabe600e9786";
	const base =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`;
	
	console.log(base);
	
	const temperature = document.querySelector("#temperature");
	const update = document.querySelector("#update");
	
	const bg = document.querySelector("#bg");
	const cold = "/img/cold.jpg";
	const cool = "/img/cool.jpg";
	const hot = "/img/hot.jpg";
	const cloud = "/img/clouds.jpg";
	const mayer = "/img/mayer.jpg";
	
	fetch(base)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather, clouds } = data;
	
	const currentTemp = Math.round(main.temp);
	const cloudCover = clouds.all;
	console.log(currentTemp);
	
	  if ((currentTemp) > 72) {
		update.innerHTML = "<strong>No. It's hot!</strong> Let her roast.";
		bg.src=hot;
		if ((cloudCover > 50 )) {
			update.innerHTML = "<strong>No. It's hot!</strong> Let her roast. <em>But, perhaps it could be less cloudy.</em>";
			bg.src=cloud;
		}
	 } else if ((currentTemp) < 0) {
		update.innerHTML = "<strong>Yes. It's so cold she is going to die!</strong> She wouldn't even look if John Mayer was naked."
		bg.src=mayer;
	 } else {
		update.innerHTML = "<strong>Yes. It's cold!</strong> Get her a blanket.";
		bg.src=cool;
		if ((currentTemp < 32)) {
			update.innerHTML = "<strong>Yes. It's really cold!</strong> Get her a <em>heated</em> blanket.";
			bg.src=cold;
		}
	 };
	 
	 temperature.textContent = currentTemp;
    })
}

window.Alpine = Alpine

Alpine.start()
