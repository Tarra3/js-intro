/*
Gauta teksta parasyti atbulai.
*/

function reverse(text) {

    let result = '';

    for (let i = text.length - 1; i >= 0; i--) {
        console.log(i, text[i]);
        result += text[i];
    }

    return result;
}

console.log(reverse('abc'), '->', 'cba');


//console.log(reverse('labas'), '->', 'sabal');
//console.log(reverse('kedes'), '->', 'sedek');
//console.log(reverse('alus'), '->', 'sula');

