const url = 'https://themealdb.p.rapidapi.com/search.php?s=Arrabiata';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '010ed8e5f3msh8892796266f39c0p1e8a51jsn35063e52a2ab',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}