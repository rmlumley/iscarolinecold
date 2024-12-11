import Alpine from 'alpinejs'

window.addEventListener("load", () => {
	
	const api = "e29bb800c350e91c0036cabe600e9786";
	
	// const city = "madison,wi,us";
	const city = "cancun,mx";
	
	
	const base =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`;
	
	console.log(base);
	
	const temperature = document.querySelector("#temperature");
	const update = document.querySelector("#update");
	
	
	const bg = document.querySelector("#bg");
	const cold = "/img/cold.jpg";
	const hot = "/img/hot.jpg";
	
	fetch(base)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
	
	const currentTemp = Math.round(main.temp);
	console.log(currentTemp);
	
	  if ((currentTemp) > 72) {
		update.innerHTML = "<strong>No. It's hot!</strong> Let her roast.";
		bg.src=hot;
		
	 } else {
		update.innerHTML = "<strong>Yes. It's cold!</strong> Get her a blanket.";
		bg.src=cold;
	 };
	 
	 temperature.textContent = currentTemp;
    })
	
	
});

window.Alpine = Alpine

Alpine.start()
