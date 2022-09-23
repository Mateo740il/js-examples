const temperatures = [
  {
    min: 17,
    max: 30,
  },
  {
    min: 17,
    max: 32,
  },
  {
    min: 19,
    max: 35,
  },
  {
    min: 19,
    max: 37,
  },
  {
    min: 18,
    max: 36,
  },
  {
    min: 17,
    max: 31,
  },
  {
    min: 16,
    max: 29,
  },
];

let maxTemp=0
let minTemp=100

temperatures.forEach((elemnt)=>{
    if(Number(elemnt.max)>maxTemp){
        maxTemp=elemnt.max
    }
})

temperatures.forEach((elemnt)=>{
    if(Number(elemnt.min)<minTemp){
        minTemp=elemnt.min
    }
}) 
function setTemperatureData() {
  const elements = document.querySelectorAll(".js-day");
  elements.forEach((el,i)=>{
      el.dataset.max=temperatures[i].max
      el.dataset.min=temperatures[i].min
  })
  console.log(elements)
}

function highlightWarmestAndCoolestDay() {
  const warmestDay = document.querySelector(`[data-max="${maxTemp}"]`);
  const coolestDay = document.querySelector(`[data-min="${minTemp}"]`);

  warmestDay.style.color = "red";
  coolestDay.style.color = "blue";
}

setTemperatureData();
highlightWarmestAndCoolestDay();









