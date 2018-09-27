"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
    "Помощь": {
        "Title": "Помощь",
        "Subtitle": "Some useful Links",
        "Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
    }
};

// Define the notifications used in the game
let notifications = {
    "Welcome": {
        title: "Добро пожаловать в SmartMed Game",
        body: "Игра началась, постарайтесь никого не убить ;)",
        icon: ""
    }
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {
    "Vse": "Vse.mp4"
};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
    "cabinet": "kabinet_with_haus.jpg",
    "priemnaya": "priemnaya.jpg",
    "geraltwin": "palata.jpg",
    "geraltOsmotr": "palata.jpg",
    "geraltAnalys": "geralt-analys-back.jpg"
};

// Define the Characters
const characters = {
    "h": {
        "Name": "Доктор Хауз",
        "Color": "#5bcaff",
        "Face": "haus-face.png",
    },
    "n": {
        "Name": "Медсестра",
        "Color": "#00bfff",
        "Face": "nurse-face.png",
        "Images": {
            "Normal": "nurse/normal.png"
        },
    },
    "g": {
        "Name": "Геральт",
        "Color": "#00bfff",
        "Face": "geralt/geralt-face.png",
        // "Images": {
        //     "Win": "geralt/geralt-win.png",
        //     "Ill": "geralt/geralt-ill.png"
        // }
    },
    "l": {
        "Name": "Лара Крофт",
        "Color": "#00bfff",
        "Face": "lara-face.png",
        "Images": {
            "ill": "croft/lara-ill.png"
        }
        // "Images": {
        //     "Win": "geralt/geralt-win.png",
        //     "Ill": "geralt/geralt-ill.png"
        // }
    }
};

let script = {
    // The game starts here.
    "Start": [
        "notify Welcome",
        // {
        //     "Input": {
        //         "Text": "What is your name?",
        //         "Validation": function(input) {
        //             return input.trim().length > 0;
        //         },
        //         "Save": function(input) {
        //             storage.player.Name = input;
        //             return true;
        //         },
        //         "Warning": "You must enter a name!"
        //     }
        // },

        "scene cabinet with rubberBand",
        "Вы проснулись в своем кресле от громких криков в коридоре. <br /> <span class='scream-text'>- Доктор Хаус! Доктор Хаус! </span>",
        "Недовольно потянувшись, вы встаете и идете к двери своего кабинета " +
        "Открыв ее, вы сталкиваетесь с молоденькой медсестрой из приемного отделения.",
        "n - Как хорошо, что я вас нашла! У нас небывалый случай. В приемной сидят три человека, они утверждают, что у них болит нога! У всех троих одновременно. ", "n - Но они не знакомы друг с другом и поступили к нам из разных частей города.",
        "h - О БОЖЕЕЕ! Это действительно небывалый случай. Приступ вселенской глупости в маленькой юной голове. Что такого в этих случаях?",
        "n - Но ведь они приехали к нам одновременно, и все говорят о боли в руке.",
        "h - Люди лгут. Возможно, у них вообще болит нога, голова или Ж…",
        "n - Но вы должны взглянуть…Это … необычные пациенты!",
        "h -Необычные? Ну хорошо. Я, пожалуй, посмотрю, что там происходит.",
        // {
        //     "Choice": {
        //         "Dialog": "h Have you already read some documentation?",
        //         "Yes": {
        //             "Text": "Yes",
        //             "Do": "jump Yes"
        //         },
        //         "No": {
        //             "Text": "No",
        //             "Do": "jump No"
        //         }
        //     }
        // }
        "scene priemnaya with rubberBand",
        "В коридоре на кушетке понуро сидят три персонажа: <span class='geralt-text'>Геральт</span>, <span class='lara-text'>Лара Крофт</span> и <span class='norris-text'>Чак Норрис</span>.",
        {
            "Choice": {
                "Dialog": "Кого из них выберете на прием?",
                "GeraltChoice": {
                    "Text": "Геральт",
                    "Do": "jump GeraltChoice",
                    "Condition": function() {
                        return storage.player.geralt == "ill"; // The "Player" option will only be shown if this returns true.
                    }
                },
                "LaraChoice": {
                    "Text": "Лара Крофт",
                    "Do": "jump LaraChoice",
                    "Condition": function() {
                        return storage.player.lara == "ill"; // The "Player" option will only be shown if this
                    }
                },
                "NorrisChoice": {
                    "Text": "Чак Норрис",
                    "Do": "jump NorrisChoice",
                    "Condition": function() {
                        return storage.player.norris == "ill"; // The "Player" option will only be shown if this
                    }
                }
            }
        }
    ],
    "Priemnaya": [
        "scene priemnaya with rubberBand",
        "В приемной: ",
        {
            "Choice": {
                "Dialog": "Кого из них выберете на прием?",
                "GeraltChoice": {
                    "Text": "Геральт",
                    "Do": "jump GeraltChoice",
                    "Condition": function() {
                        return storage.player.geralt == "ill"; // The "Player" option will only be shown if this returns true.
                    }
                },
                "LaraChoice": {
                    "Text": "Лара Крофт",
                    "Do": "jump LaraChoice",
                    "Condition": function() {
                        return storage.player.lara == "ill"; // The "Player" option will only be shown if this
                    }
                },
                "NorrisChoice": {
                    "Text": "Чак Норрис",
                    "Do": "jump NorrisChoice",
                    "Condition": function() {
                        return storage.player.norris == "ill"; // The "Player" option will only be shown if this
                    }
                }
            }
        }
    ],
    "GeraltChoice": [
        "Хаус подходит к Геральту",
        "h - Выглядите вы неплохо для своей профессии. Что беспокоит?",
        "show characters/geralt/geralt-ill.png center with fadeIn",
        "g - Можно подумать, вы выглядите отлично для своей профессии.",
        "g - На самом деле меня вела дорога приключений, пока меня не прострелило… Рука болит, если короче.",
        "h - Рука болит? Невероятно. Покажите.",
        {
            "Choice": {
                "Dialog": "Ваши действия",
                "lookAtHand": {
                    "Text": "Осмотреть больное место",
                    "Do": "jump GeraltOsmotr"
                },
                "GetAnalys": {
                    "Text": "Взять анализ крови",
                    "Do": "jump GeraltAnalys"
                },
            },
        }
    ],
    "GeraltOsmotr": [
        "scene geraltOsmotr with fadeIn",
        "Вы осмотрели поврежденную руку.",
        "На ней следы укусов утопца. Откуда бы вам знать про утопца?",
        "Вы же Хаус, вы знаете все виды укусов, и многие даже ощутили на себе.",
        "h - И из-за этого ты пришел в больницу? Чертов бездельник. Ты же ведьмак. До свадьбы заживет. Свободен",
        "scene geraltwin with bounce",
        "show characters/geralt/geralt-win.png center center with bounce",
        function() {
            storage.player.geralt = "healthy";
        },
        "play video Vse",
        {
            "Choice": {
                "Dialog": "Похоже здесь у нас все, вернемся в приемную",
                "Yes": {
                    "Text": "Вернуться в приемную",
                    "Do": "jump Priemnaya"
                }
            }
        }
    ],
    "GeraltAnalys": [
        "scene geraltAnalys with fadeIn",
        "К сожалению пациент скончался при сборе анализов",
        "show characters/geralt/geralt-die.png center center with shake",
        "play video Vse",
        function() {
            storage.player.geralt = "died";
        },
        {
            "Choice": {
                "Dialog": "Похоже здесь у нас все, вернемся в приемную",
                "Yes": {
                    "Text": "Вернуться в приемную",
                    "Do": "jump Priemnaya"
                }
            }
        },

    ],

    // Geralt ends


    "LaraChoice": [
        "Хаус подходит к Ларе Крофт.",
        "h - Добрый день. Что привело мисс треугольный бюст в наше заведение?",
        "show l ill center with fadeIn",
        "l - Я прошла через сотни опасностей, преодолела тысячи километров – и все было хорошо.",
        "l - А сегодня я проснулась от боли в руке…Не знаю, что могло случиться.",
        "h -Очень печальная история.",
        "jump Priemnaya",
        {
            "Choice": {
                "Dialog": "Ваши действия",
                "lookAtHand": {
                    "Text": "Осмотреть больное место",
                    "Do": "jump LaraOsmotr"
                },
                "GetAnalys": {
                    "Text": "Взять анализ крови",
                    "Do": "jump LaraAnalys"
                },
            },
        }

    ],
    "LaraOsmotr": [

    ],
    "LaraAnalys": [

    ],
    "NorrisChoice": [
        "Хаус подходит к Ларе Крофт.",
        "h - Добрый день. Что привело мисс треугольный бюст в наше заведение?",
        "l - Я прошла через сотни опасностей, преодолела тысячи километров – и все было хорошо.",
        "l - А сегодня я проснулась от боли в руке…Не знаю, что могло случиться.",
        "h -Очень печальная история.",
        "jump Priemnaya",
        {
            "Choice": {
                "Dialog": "Ваши действия",
                "lookAtHand": {
                    "Text": "Осмотреть больное место",
                    "Do": "jump LaraOsmotr"
                },
                "GetAnalys": {
                    "Text": "Взять анализ крови",
                    "Do": "jump LaraAnalys"
                },
            },
        }

    ],


};