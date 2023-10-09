// Object
const people={
    'id'        : 1001,
    'name'      : 'sok',
    'gender'    : 'male',
    'age'       : 20,
    'address'   : 'Phnom Penh',
    'background': {
        'job' : 'Software developer at Banking',
        'GU'  : 'P.HD',
        'EP'  : 5
    }
};
// get only value
const getValue = Object.values(people);
getValue.pop();
const getBackground = Object.values(people.background);
var item='';
for(let i in getValue){
    if(i==getValue.length-1){
        item=getBackground;
    }
    console.log(getValue[i]);
    console.log(...item);
}