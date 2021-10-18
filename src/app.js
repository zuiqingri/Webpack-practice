import './css/style.css';
const animals=require('./animal.js');
const $=require('jquery')


$.each(animals,function(key,value){
    $('body').append(`<h1>animal=${value.name}</h1>`)
})

console.log(animals);