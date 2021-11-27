const cart = document.querySelector(".weather-app__cart");
const form = document.querySelector(".weather-app__form");

async function app(city) {
  const respone = await fetch(
    `https://developers.parsijoo.ir/web-service/v1/weather/?type=search&city=${city}`,
    {
      headers: {
        "api-key": "3665f90e08424db2adbe8119287901ef",
      },
    },
  );
  const data = await respone.json();
  const cityName = data.result.hava.city;
  const cityTemp = data.result.hava.summary.temp;
  const cityCondition = data.result.hava.dayList[0].condition;
  const tempSymbol = data.result.hava.dayList[0].symbol;
  let tempSymbolColor;
  switch (cityCondition) {
    case "آرام":
      tempSymbolColor = "t1";
      break;
    case "نسیم":
      tempSymbolColor = "t2";
      break;
    case "باد ملایم":
      tempSymbolColor = "t3";
      break;
    case "باد شدید":
      tempSymbolColor = "t4";
      break;
    case "طوفانی":
      tempSymbolColor = "t5";
      break;

    default:
      tempSymbolColor = "t1";
      break;
  }

  cart.innerHTML = `
    <div class="weather-app__icon ${tempSymbolColor}">
    <div><i class="wi ${tempSymbol}"></i></div>
    <p>${cityCondition}</p>
  </div>
  <div class="weather-app__desc">
    <h2 class="weather-app__city-name">${cityName}</h2>
    <p class="weather-app__city-temp">&#8451; ${cityTemp}</p>
  </div>
  `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  app(e.target.city.value);
});
