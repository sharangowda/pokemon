async function fetchPokemon() {
    try {

        const pokemon = document.getElementById('pokemon').value.toLowerCase();

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (!res.ok) {
            throw new Error("Pokemon does not exist.")
        }

        const data = await res.json();

        const pokemonImage = data.sprites.front_default;

        const image = document.getElementById('pokemon-img');

        image.src = pokemonImage;

        image.style.display = block;

    }

    catch (error) {
        console.log(error)
    }
}