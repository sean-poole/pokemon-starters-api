const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const pokemon = {
    "bulbasaur": {
        "name": "Bulbasaur",
        "jp-name": "フシギダネ",
        "type": ["grass", "poison"],
        "generation": 1,
        "ability": ["Overgrow", "Chlorophyll"],
        "number": "001",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"
    },
    "charmander": {
        "name": "Charmander",
        "jp-name": "ヒトカゲ",
        "type": ["fire"],
        "generation": 1,
        "ability": ["Blaze", "Solar Power"],
        "number": "004",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"
    },
    "squirtle": {
        "name": "Squirtle",
        "jp-name": "ゼニガメ",
        "type": ["water"],
        "generation": 1,
        "ability": ["Torrent", "Rain Dish"],
        "number": "007",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png"
    },
    "chikorita": {
        "name": "Chikorita",
        "jp-name": "チコリータ",
        "type": ["grass"],
        "generation": 2,
        "ability": ["Overgrow", "Leaf Guard"],
        "number": "152",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/b/bf/152Chikorita.png/250px-152Chikorita.png"
    },
    "cyndaquil": {
        "name": "Cyndaquil",
        "jp-name": "ヒノアラシ",
        "type": ["fire"],
        "generation": 2,
        "ability": ["Blaze", "Flash Fire"],
        "number": "155",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/9/9b/155Cyndaquil.png/250px-155Cyndaquil.png"
    },
    "totodile": {
        "name": "Totodile",
        "jp-name": "ワニノコ",
        "type": ["water"],
        "generation": 2,
        "ability": ["Torrent", "Sheer Force"],
        "number": "158",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/d/df/158Totodile.png/250px-158Totodile.png"
    },
    "treecko": {
        "name": "Treecko",
        "jp-name": "キモリ",
        "type": ["grass"],
        "generation": 3,
        "ability": ["Overgrow", "Unburden"],
        "number": "252",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/2/2c/252Treecko.png/250px-252Treecko.png"
    },
    "torchic": {
        "name": "Torchic",
        "jp-name": "アチャモ",
        "type": ["fire"],
        "generation": 3,
        "ability": ["Blaze", "Speed Boost"],
        "number": "255",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/9/91/255Torchic.png/250px-255Torchic.png"
    },
    "mudkip": {
        "name": "Mudkip",
        "jp-name": "ミズゴロウ",
        "type": ["water"],
        "generation": 3,
        "ability": ["Torrent", "Damp"],
        "number": "258",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/6/60/258Mudkip.png/250px-258Mudkip.png"
    },
    "turtwig": {
        "name": "Turtwig",
        "jp-name": "ナエトル",
        "type": ["grass"],
        "generation": 4,
        "ability": ["Overgrow", "Shell Armor"],
        "number": "387",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/5/5c/387Turtwig.png/250px-387Turtwig.png"
    },
    "chimchar": {
        "name": "Chimchar",
        "jp-name": "ヒコザル",
        "type": ["fire"],
        "generation": 4,
        "ability": ["Blaze", "Iron Fist"],
        "number": "390",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/7/76/390Chimchar.png/250px-390Chimchar.png"
    },
    "piplup": {
        "name": "Piplup",
        "jp-name": "ポッチャマ",
        "type": ["water"],
        "generation": 4,
        "ability": ["Torrent", "Defiant"],
        "number": "393",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/b/b1/393Piplup.png/250px-393Piplup.png"
    },
    "snivy": {
        "name": "Snivy",
        "jp-name": "ツタージャ",
        "type": ["grass"],
        "generation": 5,
        "ability": ["Overgrow", "Contrary"],
        "number": "495",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/7/75/495Snivy.png/250px-495Snivy.png"
    },
    "tepig": {
        "name": "Tepig",
        "jp-name": "ポカブ",
        "type": ["fire"],
        "generation": 5,
        "ability": ["Blaze", "Thick Fat"],
        "number": "498",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/5/5b/498Tepig.png/250px-498Tepig.png"
    },
    "oshawott": {
        "name": "Oshawott",
        "jp-name": "ミジュマル",
        "type": ["water"],
        "generation": 5,
        "ability": ["Torrent", "Shell Armor"],
        "number": "501",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/3/3b/501Oshawott.png/250px-501Oshawott.png"
    },
    "chespin": {
        "name": "Chespin",
        "jp-name": "ハリマロン",
        "type": ["grass"],
        "generation": 6,
        "ability": ["Overgrow", "Bulletproof"],
        "number": "650",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/c/ca/650Chespin.png/250px-650Chespin.png"
    },
    "fennekin": {
        "name": "Fennekin",
        "jp-name": "フォッコ",
        "type": ["fire"],
        "generation": 6,
        "ability": ["Blaze", "Magician"],
        "number": "653",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/3/3d/653Fennekin.png/250px-653Fennekin.png"
    },
    "froakie": {
        "name": "Froakie",
        "jp-name": "ケロマツ",
        "type": ["water"],
        "generation": 6,
        "ability": ["Torrent", "Protean"],
        "number": "656",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/1/18/656Froakie.png/250px-656Froakie.png"
    },
    "rowlet": {
        "name": "Rowlet",
        "jp-name": "モクロー",
        "type": ["grass", "flying"],
        "generation": 7,
        "ability": ["Overgrow", "Long Reach"],
        "number": "722",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/7/74/722Rowlet.png/250px-722Rowlet.png"
    },
    "litten": {
        "name": "Litten",
        "jp-name": "ニャビー",
        "type": ["fire"],
        "generation": 7,
        "ability": ["Blaze", "Intimidate"],
        "number": "725",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/0/0e/725Litten.png/250px-725Litten.png"
    },
    "popplio": {
        "name": "Popplio",
        "jp-name": "アシマリ",
        "type": ["water"],
        "generation": 7,
        "ability": ["Torrent", "Liquid Voice"],
        "number": "728",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/d/d8/728Popplio.png/250px-728Popplio.png"
    },
    "grookey": {
        "name": "Grookey",
        "jp-name": "サルノリ",
        "type": ["grass"],
        "generation": 8,
        "ability": ["Overgrow", "Grassy Surge"],
        "number": "810",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/9/93/810Grookey.png/250px-810Grookey.png"
    },
    "scorbunny": {
        "name": "Scorbunny",
        "jp-name": "ヒバニー",
        "type": ["fire"],
        "generation": 8,
        "ability": ["Blaze", "Libero"],
        "number": "813",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/0/06/813Scorbunny.png/250px-813Scorbunny.png"
    },
    "sobble": {
        "name": "Sobble",
        "jp-name": "メッソン",
        "type": ["water"],
        "generation": 8,
        "ability": ["Torrent", "Sniper"],
        "number": "816",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/9/9b/816Sobble.png/250px-816Sobble.png"
    },
    "sprigatito": {
        "name": "Sprigatito",
        "jp-name": "ニャオハ",
        "type": ["grass"],
        "generation": 9,
        "ability": ["Overgrow", "Protean"],
        "number": "906",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/e/eb/Sprigatito.png/250px-Sprigatito.png"
    },
    "fuecoco": {
        "name": "Fuecoco",
        "jp-name": "ホゲータ",
        "type": ["fire"],
        "generation": 9,
        "ability": ["Blaze", "Unaware"],
        "number": "909",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/c/cb/Fuecoco.png/250px-Fuecoco.png"
    },
    "quaxly": {
        "name": "Quaxly",
        "jp-name": "クワッス",
        "type": ["water"],
        "generation": 9,
        "ability": ["Torrent", "Moxie"],
        "number": "912",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/4/49/Quaxly.png/250px-Quaxly.png"
    },
    "unavailable": {
        "name": null,
        "jp-name": null,
        "type": [null],
        "generation": null,
        "ability": [null],
        "number": null,
        "image": null
    }
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get("/api/all", (request, response) => {
    response.json(pokemon);
});

app.get("/api/:name", (request, response) => {
    const pokemonName = request.params.name.toLowerCase();
    if (pokemon[pokemonName]) {
        response.json(pokemon[pokemonName]);
    } else {
        response.json(pokemon["unavailable"]);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
