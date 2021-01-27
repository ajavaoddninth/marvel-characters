import Character from "../../models/character";

export const SINGLE_PAGE_RESPONSE = {
    "code": 200,
    "status": "Ok",
    "data": {
        "offset": 0,
        "limit": 20,
        "total": 1,
        "count": 1,
        "results": [
            {
                "id": 1011334,
                "name": "3-D Man",
                "description": "",
                "modified": "2014-04-29T14:18:17-0400"
            }
        ]
    }
};

export const EXPECTED_MODELS_FOR_SINGLE_PAGE_RESPONSE: Character[] = [
    {
        id: 1011334,
        name: "3-D Man",
        description: "",
    }
];

export const MULTIPLE_PAGE_RESPONSE_PAGE_1 = {
    "code": 200,
    "status": "Ok",
    "data": {
        "offset": 0,
        "limit": 20,
        "total": 50,
        "count": 20,
        "results": [
            {
                "id": 1011334,
                "name": "3-D Man",
                "description": "",
                "modified": "2014-04-29T14:18:17-0400"
            },
            {
                "id": 1017100,
                "name": "A-Bomb (HAS)",
                "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
                "modified": "2013-09-18T15:54:04-0400"
            },
            {
                "id": 1009144,
                "name": "A.I.M.",
                "description": "AIM is a terrorist organization bent on destroying the world.",
                "modified": "2013-10-17T14:41:30-0400"
            },
            {
                "id": 1010699,
                "name": "Aaron Stack",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1009146,
                "name": "Abomination (Emil Blonsky)",
                "description": "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
                "modified": "2012-03-20T12:32:12-0400"
            },
            {
                "id": 1016823,
                "name": "Abomination (Ultimate)",
                "description": "",
                "modified": "2012-07-10T19:11:52-0400"
            },
            {
                "id": 1009148,
                "name": "Absorbing Man",
                "description": "",
                "modified": "2013-10-24T14:32:08-0400"
            },
            {
                "id": 1009149,
                "name": "Abyss",
                "description": "",
                "modified": "2014-04-29T14:10:43-0400"
            },
            {
                "id": 1010903,
                "name": "Abyss (Age of Apocalypse)",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011266,
                "name": "Adam Destine",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1010354,
                "name": "Adam Warlock",
                "description": "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.",
                "modified": "2013-08-07T13:49:06-0400"
            },
            {
                "id": 1010846,
                "name": "Aegis (Trey Rollins)",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011297,
                "name": "Agent Brand",
                "description": "",
                "modified": "2013-10-24T13:09:30-0400"
            },
            {
                "id": 1011031,
                "name": "Agent X (Nijo)",
                "description": "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1009150,
                "name": "Agent Zero",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011198,
                "name": "Agents of Atlas",
                "description": "",
                "modified": "2016-02-03T10:25:22-0500"
            },
            {
                "id": 1011175,
                "name": "Aginar",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011136,
                "name": "Air-Walker (Gabriel Lan)",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011176,
                "name": "Ajak",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1010870,
                "name": "Ajaxis",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            }
        ]
    }
};

export const MULTIPLE_PAGE_RESPONSE_PAGE_2 = {
    "code": 200,
    "status": "Ok",
    "data": {
        "offset": 20,
        "limit": 20,
        "total": 50,
        "count": 20,
        "results": [
            {
                "id": 1011194,
                "name": "Akemi",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011170,
                "name": "Alain",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1009240,
                "name": "Albert Cleary",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011120,
                "name": "Albion",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1010836,
                "name": "Alex Power",
                "description": "",
                "modified": "2011-10-27T09:57:58-0400"
            },
            {
                "id": 1010755,
                "name": "Alex Wilder",
                "description": "Despite being the only one of the Runaways without any superhuman abilities or tech, Alex Wilder became the de facto leader of the group due to his natural leadership skills and intellect, as well as prodigy-level logic and strategy.",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011214,
                "name": "Alexa Mendez",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1009497,
                "name": "Alexander Pierce",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1014990,
                "name": "Alice",
                "description": "",
                "modified": "2010-11-18T16:01:44-0500"
            },
            {
                "id": 1009435,
                "name": "Alicia Masters",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1010370,
                "name": "Alpha Flight",
                "description": "",
                "modified": "2013-10-24T13:09:22-0400"
            },
            {
                "id": 1011324,
                "name": "Alpha Flight (Ultimate)",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011164,
                "name": "Alvin Maker",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011227,
                "name": "Amadeus Cho",
                "description": "",
                "modified": "2013-08-07T13:50:56-0400"
            },
            {
                "id": 1009567,
                "name": "Amanda Sefton",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011382,
                "name": "Amazoness",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1011361,
                "name": "American Eagle (Jason Strongbow)",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1009151,
                "name": "Amiko",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1010672,
                "name": "Amora",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1010673,
                "name": "Amphibian (Earth-712)",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            }
        ]
    }
};

export const MULTIPLE_PAGE_RESPONSE_PAGE_3 = {
    "code": 200,
    "status": "Ok",
    "data": {
        "offset": 40,
        "limit": 20,
        "total": 50,
        "count": 10,
        "results": [
            {
                "id": 1010905,
                "name": "Amun",
                "description": "Amun is a ruthless teenage assassin, employed by the Sisterhood of the Wasp to serve under the mage Vincent after Araña interrupted the ritual to initiate the Wasp's new chosen one.",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1009152,
                "name": "Ancient One",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1016824,
                "name": "Ancient One (Ultimate)",
                "description": "",
                "modified": "2012-07-10T19:15:49-0400"
            },
            {
                "id": 1011396,
                "name": "Angel (Thomas Halloway)",
                "description": "",
                "modified": "2014-03-05T13:14:48-0500"
            },
            {
                "id": 1011338,
                "name": "Angel (Ultimate)",
                "description": "",
                "modified": "2014-03-05T13:15:49-0500"
            },
            {
                "id": 1009153,
                "name": "Angel (Warren Worthington III)",
                "description": "",
                "modified": "2012-05-30T14:06:57-0400"
            },
            {
                "id": 1017574,
                "name": "Angela (Aldrif Odinsdottir)",
                "description": "",
                "modified": "2014-11-17T17:45:37-0500"
            },
            {
                "id": 1010674,
                "name": "Anita Blake",
                "description": "",
                "modified": "2004-04-14T00:00:00-0400"
            },
            {
                "id": 1009346,
                "name": "Anne Marie Hoag",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500"
            },
            {
                "id": 1009154,
                "name": "Annihilus",
                "description": "",
                "modified": "2013-11-20T17:06:36-0500"
            }
        ]
    }
};

export const EXPECTED_MODELS_FOR_MULTIPLE_PAGE_RESPONSE: Character[] = [
    {
        id: 1011334,
        name: "3-D Man",
        description: ""
    },
    {
        id: 1017100,
        name: "A-Bomb (HAS)",
        description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! "
    },
    {
        id: 1009144,
        name: "A.I.M.",
        description: "AIM is a terrorist organization bent on destroying the world."
    },
    {
        id: 1010699,
        name: "Aaron Stack",
        description: ""
    },
    {
        id: 1009146,
        name: "Abomination (Emil Blonsky)",
        description: "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk."
    },
    {
        id: 1016823,
        name: "Abomination (Ultimate)",
        description: ""
    },
    {
        id: 1009148,
        name: "Absorbing Man",
        description: ""
    },
    {
        id: 1009149,
        name: "Abyss",
        description: ""
    },
    {
        id: 1010903,
        name: "Abyss (Age of Apocalypse)",
        description: ""
    },
    {
        id: 1011266,
        name: "Adam Destine",
        description: ""
    },
    {
        id: 1010354,
        name: "Adam Warlock",
        description: "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive."
    },
    {
        id: 1010846,
        name: "Aegis (Trey Rollins)",
        description: ""
    },
    {
        id: 1011297,
        name: "Agent Brand",
        description: ""
    },
    {
        id: 1011031,
        name: "Agent X (Nijo)",
        description: "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother."
    },
    {
        id: 1009150,
        name: "Agent Zero",
        description: ""
    },
    {
        id: 1011198,
        name: "Agents of Atlas",
        description: ""
    },
    {
        id: 1011175,
        name: "Aginar",
        description: ""
    },
    {
        id: 1011136,
        name: "Air-Walker (Gabriel Lan)",
        description: ""
    },
    {
        id: 1011176,
        name: "Ajak",
        description: ""
    },
    {
        id: 1010870,
        name: "Ajaxis",
        description: ""
    },
    {
        id: 1011194,
        name: "Akemi",
        description: ""
    },
    {
        id: 1011170,
        name: "Alain",
        description: ""
    },
    {
        id: 1009240,
        name: "Albert Cleary",
        description: ""
    },
    {
        id: 1011120,
        name: "Albion",
        description: ""
    },
    {
        id: 1010836,
        name: "Alex Power",
        description: ""
    },
    {
        id: 1010755,
        name: "Alex Wilder",
        description: "Despite being the only one of the Runaways without any superhuman abilities or tech, Alex Wilder became the de facto leader of the group due to his natural leadership skills and intellect, as well as prodigy-level logic and strategy."
    },
    {
        id: 1011214,
        name: "Alexa Mendez",
        description: ""
    },
    {
        id: 1009497,
        name: "Alexander Pierce",
        description: ""
    },
    {
        id: 1014990,
        name: "Alice",
        description: ""
    },
    {
        id: 1009435,
        name: "Alicia Masters",
        description: ""
    },
    {
        id: 1010370,
        name: "Alpha Flight",
        description: ""
    },
    {
        id: 1011324,
        name: "Alpha Flight (Ultimate)",
        description: ""
    },
    {
        id: 1011164,
        name: "Alvin Maker",
        description: ""
    },
    {
        id: 1011227,
        name: "Amadeus Cho",
        description: ""
    },
    {
        id: 1009567,
        name: "Amanda Sefton",
        description: ""
    },
    {
        id: 1011382,
        name: "Amazoness",
        description: ""
    },
    {
        id: 1011361,
        name: "American Eagle (Jason Strongbow)",
        description: ""
    },
    {
        id: 1009151,
        name: "Amiko",
        description: ""
    },
    {
        id: 1010672,
        name: "Amora",
        description: ""
    },
    {
        id: 1010673,
        name: "Amphibian (Earth-712)",
        description: ""
    },
    {
        id: 1010905,
        name: "Amun",
        description: "Amun is a ruthless teenage assassin, employed by the Sisterhood of the Wasp to serve under the mage Vincent after Araña interrupted the ritual to initiate the Wasp's new chosen one."
    },
    {
        id: 1009152,
        name: "Ancient One",
        description: ""
    },
    {
        id: 1016824,
        name: "Ancient One (Ultimate)",
        description: ""
    },
    {
        id: 1011396,
        name: "Angel (Thomas Halloway)",
        description: ""
    },
    {
        id: 1011338,
        name: "Angel (Ultimate)",
        description: ""
    },
    {
        id: 1009153,
        name: "Angel (Warren Worthington III)",
        description: ""
    },
    {
        id: 1017574,
        name: "Angela (Aldrif Odinsdottir)",
        description: ""
    },
    {
        id: 1010674,
        name: "Anita Blake",
        description: ""
    },
    {
        id: 1009346,
        name: "Anne Marie Hoag",
        description: ""
    },
    {
        id: 1009154,
        name: "Annihilus",
        description: ""
    }
];