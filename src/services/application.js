/**
 *
 * @param {string} appWhatToDo
 * @return {boolean}
 */
export const isItHardWork = function (appWhatToDo) {
    const words = [
        'керамогранит', 'керамогранита', 'керамогранитный', 'керамагранит',
        'керамагранита', 'керамагранитный',
        'песок', 'песка', 'песком', 'писок', 'писка', 'писком',
        'цемент', 'цемента', 'цементом', 'цементам', 'цимент', 'цимента', 'циментом', 'циментам',
        'пианино', 'пианину', 'пианинно', 'пионинка', 'пионинку', 'пианина', 'пианинна', 'пианинку',
        'сейф', 'сейфа', 'сейфом',
        'окно', 'окна', 'окон', 'окнами',
        'стекло', 'стекла', 'стеклами', 'стекол',
        'рыба', 'рыбы', 'рыбу', 'рыбой',
        'мука', 'муки', 'мукой',
        'тюк', 'тюки', 'тюками', 'тюков', 'тюком'
    ];

    // БЕЗ не, ничего, нечего
    const wordsWithNo = [
        'сложная', 'сложного',
        'тяжелый', 'тяжелая', 'тяжолый', 'тяжолая', 'тяжело', 'тяжко', 'тяжкий',
        'тяжелого', 'тяжелога', 'тяжелова', 'тяжелово',
        'трудный', 'трудно', 'трудная', 'трудного', 'трудново', 'труднова',
    ];

    const whatToDo = appWhatToDo
        .toLowerCase()
        .trim()
        .replace(/\s\s+/g, ' ');

    for(let i = 0; i < words.length; i++) {
        if (whatToDo.indexOf(words[i]) !== -1) {
            return true;
        }
    }

    for(let i = 0; i < wordsWithNo.length; i++) {
        const wordIndex = whatToDo.indexOf(wordsWithNo[i]);
        if (wordIndex !== -1) {
            const noWordIndex = whatToDo.indexOf('не');
            let index = 0, word = '';
            if (noWordIndex === -1) {
                const nothingWordIndex = whatToDo.indexOf('ничего');
                if (nothingWordIndex === -1) {
                    const nothingWordIndex2 = whatToDo.indexOf('нечего');
                    if (nothingWordIndex2 === -1) {
                        return true;
                    } else {
                        index = nothingWordIndex2;
                        word = 'нечего';
                    }
                } else {
                    index = nothingWordIndex;
                    word = 'ничего';
                }
            } else {
                index = noWordIndex;
                word = 'не';
            }

            const between = wordIndex - index - word.length;
            if (between < 0 || between > 1) {
                return true;
            }
        }
    }

    return false;
};

/**
 * Copy values from appB to appA without values with keys from array 'without'
 * @param {Application} appA
 * @param {Application} appB
 * @param {String[]} without
 */
export const copy = function (appA, appB, without = []) {
    for (const [key, value] of Object.entries(appB)) {
        if (!without.includes(key)) {
            appA[key] = value;
        }
    }
}

/**
 * @param {Application} app
 * @param {String[]} without
 */
export const create = function (app, without = []) {
    let newApp = {};
    copy(newApp, app, without);
    return newApp;
}