/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28 */

//1. filter() temperatures above 35
    const temperatures = [32, 35, 28, 40, 38, 30, 42]
    const highTemperature=temperatures.filter(temp=>temp>35)
    console.log(highTemperature)

//2. map() to convert all temperatures from Celsius → Fahrenheit
    const tempInFahren=temperatures.map(temp=>(temp*1.8)+32)
    console.log(tempInFahren)

//3. reduce() to calculate average temperature
    const avgTemp=temperatures.reduce((accumulator,temp)=>(accumulator+temp))
    console.log(avgTemp/temperatures.length)

//4.find() first temperature above 40
   const findMax=temperatures.find(temp=>temp>40)
   console.log(findMax)

//5. findIndex() of temperature 28
   const findIndexOf=temperatures.findIndex(temp=>temp===28)
   console.log(findIndexOf)