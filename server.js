const express = require("express");
const app = express();
const PORT = 8000;

const pokemon = {
    "bulbasaur": {
        "name": "Bulbasaur",
        "jp-name": "フシギダネ",
        "type": ["Grass", "Poison"],
        "generation": "Gen 1",
        "ability": ["Overgrow", "Chlorophyll"],
        "number": "001"
    },
    "charmander": {
        "name": "Charmander",
        "jp-name": "ヒトカゲ",
        "type": ["Fire"],
        "generation": "Gen 1",
        "ability": ["Blaze", "Solar Power"],
        "number": "004"
    },
    "squirtle": {
        "name": "Squirtle",
        "jp-name": "ゼニガメ",
        "type": ["Water"],
        "generation": "Gen 1",
        "ability": ["Torrent", "Rain Dish"],
        "number": "007"
    },
    "chikorita": {
        "name": "Chikorita",
        "jp-name": "チコリータ",
        "type": ["Grass"],
        "generation": "Gen 2",
        "ability": ["Overgrow", "Leaf Guard"],
        "number": "152"
    },
    "cyndaquil": {
        "name": "Cyndaquil",
        "jp-name": "ヒノアラシ",
        "type": ["Fire"],
        "generation": "Gen 2",
        "ability": ["Blaze", "Flash Fire"],
        "number": "155"
    },
    "totodile": {
        "name": "Totodile",
        "jp-name": "ワニノコ",
        "type": ["Water"],
        "generation": "Gen 2",
        "ability": ["Torrent", "Sheer Force"],
        "number": "158"
    },
    "treecko": {
        "name": "Treecko",
        "jp-name": "キモリ",
        "type": ["Grass"],
        "generation": "Gen 3",
        "ability": ["Overgrow", "Unburden"],
        "number": "252"
    },
    "torchic": {
        "name": "Torchic",
        "jp-name": "アチャモ",
        "type": ["Fire"],
        "generation": "Gen 3",
        "ability": ["Blaze", "Speed Boost"],
        "number": "255"
    },
    "mudkip": {
        "name": "Mudkip",
        "jp-name": "ミズゴロウ",
        "type": ["Water"],
        "generation": "Gen 3",
        "ability": ["Torrent", "Damp"],
        "number": "258"
    },
    "turtwig": {
        "name": "Turtwig",
        "jp-name": "ナエトル",
        "type": ["Grass"],
        "generation": "Gen 4",
        "ability": ["Overgrow", "Shell Armor"],
        "number": "387"
    },
    "chimchar": {
        "name": "Chimchar",
        "jp-name": "ヒコザル",
        "type": ["Fire"],
        "generation": "Gen 4",
        "ability": ["Blaze", "Iron Fist"],
        "number": "390"
    },
    "piplup": {
        "name": "Piplup",
        "jp-name": "ポッチャマ",
        "type": ["Water"],
        "generation": "Gen 4",
        "ability": ["Torrent", "Defiant"],
        "number": "393"
    },
    "snivy": {
        "name": "Snivy",
        "jp-name": "ツタージャ",
        "type": ["Grass"],
        "generation": "Gen 5",
        "ability": ["Overgrow", "Contrary"],
        "number": "495"
    },
    "tepig": {
        "name": "Tepig",
        "jp-name": "ポカブ",
        "type": ["Fire"],
        "generation": "Gen 5",
        "ability": ["Blaze", "Thick Fat"],
        "number": "498"
    },
    "oshawott": {
        "name": "Oshawott",
        "jp-name": "ミジュマル",
        "type": ["Water"],
        "generation": "Gen 5",
        "ability": ["Torrent", "Shell Armor"],
        "number": "501"
    },
    "chespin": {
        "name": "Chespin",
        "jp-name": "ハリマロン",
        "type": ["Grass"],
        "generation": "Gen 6",
        "ability": ["Overgrow", "Bulletproof"],
        "number": "650"
    },
    "fennekin": {
        "name": "Fennekin",
        "jp-name": "フォッコ",
        "type": ["Fire"],
        "generation": "Gen 6",
        "ability": ["Blaze", "Magician"],
        "number": "653"
    },
    "froakie": {
        "name": "Froakie",
        "jp-name": "ケロマツ",
        "type": ["Water"],
        "generation": "Gen 6",
        "ability": ["Torrent", "Protean"],
        "number": "656"
    },
    "rowlet": {
        "name": "Rowlet",
        "jp-name": "モクロー",
        "type": ["Grass", "Flying"],
        "generation": "Gen 7",
        "ability": ["Overgrow", "Long Reach"],
        "number": "722"
    },
    "litten": {
        "name": "Litten",
        "jp-name": "ニャビー",
        "type": ["Fire"],
        "generation": "Gen 7",
        "ability": ["Blaze", "Intimidate"],
        "number": "725"
    },
    "popplio": {
        "name": "Popplio",
        "jp-name": "アシマリ",
        "type": ["Water"],
        "generation": "Gen 7",
        "ability": ["Torrent", "Liquid Voice"],
        "number": "728"
    },
    "grookey": {
        "name": "Grookey",
        "jp-name": "サルノリ",
        "type": ["Grass"],
        "generation": "Gen 8",
        "ability": ["Overgrow", "Grassy Surge"],
        "number": "810"
    },
    "scorbunny": {
        "name": "Scorbunny",
        "jp-name": "ヒバニー",
        "type": ["Fire"],
        "generation": "Gen 8",
        "ability": ["Blaze", "Libero"],
        "number": "813"
    },
    "sobble": {
        "name": "Sobble",
        "jp-name": "メッソン",
        "type": ["Water"],
        "generation": "Gen 8",
        "ability": ["Torrent", "Sniper"],
        "number": "816"
    },
    "sprigatito": {
        "name": "Sprigatito",
        "jp-name": "ニャオハ",
        "type": ["Grass"],
        "generation": "Gen 9",
        "ability": ["Overgrow", "Protean"],
        "number": "???"
    },
    "fuecoco": {
        "name": "Fuecoco",
        "jp-name": "ホゲータ",
        "type": ["Fire"],
        "generation": "Gen 9",
        "ability": ["Blaze", "Unaware"],
        "number": "???"
    },
    "quaxly": {
        "name": "Quaxly",
        "jp-name": "クワッス",
        "type": ["Water"],
        "generation": "Gen 9",
        "ability": ["Torrent", "Moxie"],
        "number": "???"
    },
    "unavailable": {
        "name": null,
        "jp-name": null,
        "type": null,
        "generation": null,
        "ability": null,
        "number": null
    }
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
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
