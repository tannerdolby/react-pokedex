export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export async function fetchPokemonById(id) {
    const res = await fetch(`${BASE_URL}${id}`);
    return await res.json();
}

export function getCustomPokemonSpriteUrl(sprites, imageType) {
    if (!sprites) {
        return '';
    }

    const otherSprites = sprites.other;
    const imageKey = imageType.split(" ")[0];

    // TODO: Add support for other available image directions (front, back)
    let spriteDirection = 'front_default';
    
    if (imageType.includes('shiny')) {
        spriteDirection = 'front_shiny';
    }

    if (imageKey === 'gameboy') {
        return sprites[spriteDirection];
    } else if (Object.hasOwn(otherSprites, imageKey)) {
        return otherSprites[imageKey][spriteDirection];
    }
}

export const POKEMON_TYPE_COLORS = {
    poison: {
        background: '#C38AFC',
        textColor: '#fff'
    },
    fire: {
        background: '#FF4214',
        textColor: '#fff'
    },
    electric: {
        background: '#F7F145',
        textColor: '#000'
    },
    grass: {
        background: '#95E37A',
        textColor: '#000'
    },
    bug: {
        background: '#06A620',
        textColor: '#fff',
    },
    water: {
        background: '#36A9EA',
        textColor: '#fff'
    },
    psychic: {
        background: '#5B2C6F',
        textColor: '#fff'
    },
    normal: {
        background: '#EDEDED',
        textColor: '#000'
    },
    fighting: {
        background: '#D6D2A4',
        textColor: '#000'
    },
    ground: {
        background: '#A08E35',
        textColor: '#fff'
    },
    rock: {
        background: '#817957',
        textColor: '#fff'
    },
    fairy: {
        background: '#F6A2FA',
        textColor: '#fff'
    },
    ice: {
        background: '#B5F2FC',
        textColor: '#000'
    },
    flying: {
        background: '#BBD5E3',
        textColor: '#000'
    },
    dragon: {
        background: '#1D3B51',
        textColor: '#fff'
    }
}

export const POKEMON_IDS = {
    "1": "bulbasaur",
    "2": "ivysaur",
    "3": "venusaur",
    "4": "charmander",
    "5": "charmeleon",
    "6": "charizard",
    "7": "squirtle",
    "8": "wartortle",
    "9": "blastoise",
    "10": "caterpie",
    "11": "metapod",
    "12": "butterfree",
    "13": "weedle",
    "14": "kakuna",
    "15": "beedrill",
    "16": "pidgey",
    "17": "pidgeotto",
    "18": "pidgeot",
    "19": "rattata",
    "20": "raticate",
    "21": "spearow",
    "22": "fearow",
    "23": "ekans",
    "24": "arbok",
    "25": "pikachu",
    "26": "raichu",
    "27": "sandshrew",
    "28": "sandslash",
    "29": "nidoran-f",
    "30": "nidorina",
    "31": "nidoqueen",
    "32": "nidoran-m",
    "33": "nidorino",
    "34": "nidoking",
    "35": "clefairy",
    "36": "clefable",
    "37": "vulpix",
    "38": "ninetales",
    "39": "jigglypuff",
    "40": "wigglytuff",
    "41": "zubat",
    "42": "golbat",
    "43": "oddish",
    "44": "gloom",
    "45": "vileplume",
    "46": "paras",
    "47": "parasect",
    "48": "venonat",
    "49": "venomoth",
    "50": "diglett",
    "51": "dugtrio",
    "52": "meowth",
    "53": "persian",
    "54": "psyduck",
    "55": "golduck",
    "56": "mankey",
    "57": "primeape",
    "58": "growlithe",
    "59": "arcanine",
    "60": "poliwag",
    "61": "poliwhirl",
    "62": "poliwrath",
    "63": "abra",
    "64": "kadabra",
    "65": "alakazam",
    "66": "machop",
    "67": "machoke",
    "68": "machamp",
    "69": "bellsprout",
    "70": "weepinbell",
    "71": "victreebel",
    "72": "tentacool",
    "73": "tentacruel",
    "74": "geodude",
    "75": "graveler",
    "76": "golem",
    "77": "ponyta",
    "78": "rapidash",
    "79": "slowpoke",
    "80": "slowbro",
    "81": "magnemite",
    "82": "magneton",
    "83": "farfetchd",
    "84": "doduo",
    "85": "dodrio",
    "86": "seel",
    "87": "dewgong",
    "88": "grimer",
    "89": "muk",
    "90": "shellder",
    "91": "cloyster",
    "92": "gastly",
    "93": "haunter",
    "94": "gengar",
    "95": "onix",
    "96": "drowzee",
    "97": "hypno",
    "98": "krabby",
    "99": "kingler",
    "100": "voltorb",
    "101": "electrode",
    "102": "exeggcute",
    "103": "exeggutor",
    "104": "cubone",
    "105": "marowak",
    "106": "hitmonlee",
    "107": "hitmonchan",
    "108": "lickitung",
    "109": "koffing",
    "110": "weezing",
    "111": "rhyhorn",
    "112": "rhydon",
    "113": "chansey",
    "114": "tangela",
    "115": "kangaskhan",
    "116": "horsea",
    "117": "seadra",
    "118": "goldeen",
    "119": "seaking",
    "120": "staryu",
    "121": "starmie",
    "122": "mr-mime",
    "123": "scyther",
    "124": "jynx",
    "125": "electabuzz",
    "126": "magmar",
    "127": "pinsir",
    "128": "tauros",
    "129": "magikarp",
    "130": "gyarados",
    "131": "lapras",
    "132": "ditto",
    "133": "eevee",
    "134": "vaporeon",
    "135": "jolteon",
    "136": "flareon",
    "137": "porygon",
    "138": "omanyte",
    "139": "omastar",
    "140": "kabuto",
    "141": "kabutops",
    "142": "aerodactyl",
    "143": "snorlax",
    "144": "articuno",
    "145": "zapdos",
    "146": "moltres",
    "147": "dratini",
    "148": "dragonair",
    "149": "dragonite",
    "150": "mewtwo",
    "151": "mew",
}