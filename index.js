const prompts = require('prompts');

function init() {
    const data = await prompts({
        type: 'number',
        name: 'value',
        message: 'How old are you?',
        validate: value => value < 18 ? `Nightclub is 18+ only` : true
    });
    
    console.log(data); // => { value: 24 }
}

init()