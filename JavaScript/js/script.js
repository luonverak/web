
// global variable
var id       = document.getElementById('id');
var _name    = document.getElementById('name');
var gender   = document.getElementById('gender');
var salary   = document.getElementById('salary');
var position = document.getElementById('position');

getIncome=(position)=>{
    let _salary = Number(salary.value);
    let total =(position=='Manager') ? _salary + (_salary*0.20) :(position=='Accounting') ? _salary + (_salary*0.15) :
    (position=='IT') ? _salary + (_salary*0.25) : _salary + (_salary*0.10);
    return total;
}
getData=()=>{
    document.write('<h1>'+id.value+'</h1>');
    document.write('<h1>'+_name.value+'</h1>');
    document.write('<h1>'+gender.value+'</h1>');
    document.write('<h1>'+salary.value+'</h1>');
    document.write('<h1>'+position.value+'</h1>');
    document.write('<h1>'+getIncome(position.value)+'</h1>');
}
submit=()=>{
    getData();
}