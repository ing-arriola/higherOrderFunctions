const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

//console.table(autos)

// forEach
//Use this method when you need to go through all the elements of an array
let results=[]
autos.forEach(element => {
	if (element.color==='Rojo'){results.push(element)}
	});
console.log(results)
// map
//This method create a new array from another, but if you try to use like a filter...
//may be it could give you some erros, if you want to use this method it would better to mix it with React
let resultsMap=autos.map(element => element)//Here there is no any return because an arrow function has implicit the RETURN
console.log(resultsMap)
// filter
//This function is really beatiful when you need to filter elements from an array, additionally
//filter creates a new array with the elements that meets the conditions given
let resultsFilter=autos.filter(car=> car.marca==='BMW')
let resultsFilterColor=autos.filter(car => car.color === 'Rojo')
console.log(resultsFilter)
console.log(resultsFilterColor)
// find
//This method is similar to filter ...BUT!!! is not the same, because when you use filter, you get
//All the elements in an array that meets a conditions... by the other hand find only returns the
//first element in an array that meets the specified conditions
let resultsFind=autos.find(car=> car.color === 'Rojo')
console.log(resultsFind)
// reduce
//This method can access to all the elements of an array and reduces all of them in only one element
//For example it could be a sum of all the elements
let resultsReduce=autos.reduce((total,auto)=>total+auto.precio,0
)
console.log(`Total al sumar todos los vehiculos: ${resultsReduce}`)
// some
//This method is pretty similar to find and to filter BUT!!! .... this method only return TRUE
//or FALSE... let's say that we want to know if there is a car of color RED... then use some and
//The answer could be TRUE or FALSE... but this method not say more.... so it could be useful but depends on the situation
let resultsSome=autos.some(car=> car.color==='Rojo')
console.log(`Is there at least one red car?: ${resultsSome}`)  