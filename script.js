const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
const jokeSetup = document.querySelector('.container .setup');
const jokeDelivery = document.querySelector('.container .delivery');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '473b58c205msh54a038bc00a97f3p117743jsn6a99df21acdc',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

button.addEventListener('click', getJoke);

async function getJoke() {
    const jokeData = await fetch('https://v2.jokeapi.dev/joke/Any', options, {
        headers: {
            'Accept' : 'application/json'
        }
    });

    const jokeObject = await jokeData.json();

    if (jokeObject.type == "single") {
        jokeSetup.innerHTML = "";
        jokeDelivery.innerHTML = jokeObject.joke;
    }

    else {
        jokeSetup.innerHTML = jokeObject.setup;
        jokeDelivery.innerHTML = jokeObject.delivery;
    }
}
