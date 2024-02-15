/*
STRING - tekstas, simboliu grandinele

Iniciavimo simboliai/budai: vienguba ('), dviguba (") ir ` (backtick) kabutes
*/

const text1 = 'Pirmas tekstas.';
console.log(text1);

const text2 = "O cia jau antras tekstas.";
console.log(text2);

// Cia yra tekstas be kabuciu.
const text3 = 'Cia yra tekstas be kabuciu.';
console.log(text3);
const text31 = "Cia yra tekstas be kabuciu.";
console.log(text31);

// Vienguba (') kabute.

const kabute = "Vienguba (') kabute.";
console.log(kabute);

// Dviguba (")kabute.
const kabute1 = 'Dviguba (") kabute';
console.log(kabute1);


const vardas = 'Chuck';
const pavarde = "Norris";

const fullName = vardas + ' ' + pavarde;
console.log(fullName);

// Dviguba (") ir vienguba (') kabutes.
const kabuteMix = 'Dviguba (") ir ' + "vienguba (') kabutes.";
console.log(kabuteMix);

const kabuteMix2 = 'Dviguba (") ir vienguba (\') kabutes.';
console.log(kabuteMix2);

const kabuteMix23 = "Dviguba (\") ir vienguba (\') kabutes.";
console.log(kabuteMix23);

console.clear();

const gele = 'tulpe';
const spalva = "geltona";


const backtick = `Backtick sakinys.`;
console.log(backtick);

const backtick1 = `Dviguba (\") ir vienguba (\') kabutes.`;
console.log(backtick1);

const backtick2 = `Dviguba (\"), vienguba (\') ir (\`) backtick kabutes.`;
console.log(backtick2);

// As turiu tulpe kuri yra geltona.

const backtickGelytes = `As turiu ${gele} kuri yra ${spalva}.`;
console.log(backtickGelytes);

const backtickGelytes11 = `As turiu tulpe kuri yra geltona.`;
console.log(backtickGelytes11);

const sakinys = 'As turiu ' + gele + ' kuri yra ' + spalva + '.';
console.log(sakinys);

const n1 = 7;
const n2 = 5;

// 7 + 5 = 12;
const pliusas = `${n1} + ${n2} = ${n1 + n2};`;
console.log(pliusas);

// Dtai sarasas:
// - pirmas
// - antras
// - trecias

// \r - return
// \n - new line
// \t - tab

const eilutes = 'Stai sarasas:\r\n\
- pirmas\r\n\
- antras\r\n\
- trecias';
console.log(eilutes);

const eilutes1 = 'Stai sarasas:\r\n- pirmas\r\n- antras\r\n- trecias';
console.log(eilutes1);

/*
<headre>
    <img src="#" alt="">
    <nav>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    <nav> 
</header>     
*/

const HTML = `<header>
    <img src="#" alt="">
    <nav>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    <nav>
</header>`;

console.log(HTML);

const HTML2 = `<header>\r\n\
\t<img src="#" alt="">\r\n\
\t<nav>\r\n\t\
\t<a href="#">Link</a>\r\n\t\
\t<a href="#">Link</a>\r\n\t\
\t<a href="#">Link</a>\r\n\
\t<nav>\r\n\
</header>`;
// sita teksta tik backtikuose galima palikt, bus ok.
console.log(HTML2);


console.clear();

const ilgis = `Kiek cia simboliu?` - length;
console.log(ilgis);

