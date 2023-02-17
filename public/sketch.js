let pokemonID;

async function getData(pokemonID) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
  data = await res.json();
  console.log(data);
  renderPokemon();
}

document.getElementById("Bulbasaur").addEventListener("click", function () {
  pokemonID = 1;
  getData(pokemonID);
});

document.getElementById("Charmander").addEventListener("click", function () {
  pokemonID = 4;
  getData(pokemonID);
});

document.getElementById("Squirtle").addEventListener("click", function () {
  pokemonID = 7;
  getData(pokemonID);
});

function renderPokemon() {
  document.getElementById("Results").innerHTML = ``;
  const pokemonData = document.createElement("div");
  pokemonData.innerHTML = `

  <div class="container">
    <div class="pokemon_name">
      <p>${data.name}</p>
    </div>
  <div class="images">
    <img  src="${data.sprites.front_default}">
    <img src="${data.sprites.back_default}">
  </div>
  <div class="subcontainer"> 
    <div id="PokemonData">
      <div class="titles" >
        <p > Type: </p>
      </div>
      <div class="subtitles" >
        <p id="Type">${data.types[0].type.name}</p>
        </div>
    </div>
    <div id="BasicInfo">
      <div class="titles">
        <p> Height:</p>
      </div>
      <div class="subtitles">
        <p>${data.height} cm</p>
      </div>
    </div>
    <div id="BasicInfo">
      <div class="titles">
        <p> Weight:</p>
      </div>
      <div class="subtitles">
        <p>${data.weight}</p>
      </div>
    </div>
  </div>
                        `;
  document.getElementById("Results").appendChild(pokemonData);
}
