/*
 * Form widget constructor with n0w.gui
 *
 * toolbox.js
 * 
 * by n0wonmai
 *
*/
import {
    NowGuiPattern,
    Form,
    form1,
    button1,
    checkbox1,
    radio1,
    radio2,
    text1,
    link1,
    textfield1,
    textarea1,
    combobox1
}   

from './form.js';

const TOOLBOX = document.querySelector('.toolbox');
const TOOLBOX__OPEN__BUTTON = document.querySelector('#toolbox_open');
const TOOLBOX__CLOSE__BUTTON = document.querySelector('.toolbox__header__closebtn');

TOOLBOX__OPEN__BUTTON.addEventListener('click', ToolboxOpen);
TOOLBOX__CLOSE__BUTTON.addEventListener('click', ToolboxClose);

function ToolboxClose()
{
    TOOLBOX.style.display = 'none';
}

function ToolboxOpen()
{
    TOOLBOX.style.display = 'block';
}

var cap = true;

(function ToolboxSetName()
{
    if (!cap) return false;
    var _ = document.querySelector('.toolbox__tool__name');
    
    document.querySelector(".form__title__name").textContent = _.value;
    setTimeout(ToolboxSetName, 1);
})();

var addBtnEl = document.querySelector('#toolbox__tool__controls__add__button');
var addChckEl = document.querySelector('#toolbox__tool__controls__add__checkbox');
var addRadEl = document.querySelector('#toolbox__tool__controls__add__radio');
var addTxtEl = document.querySelector('#toolbox__tool__controls__add__text');
var addLnkEl = document.querySelector('#toolbox__tool__controls__add__link');
var addTxtfldEl = document.querySelector('#toolbox__tool__controls__add__textfield');
var addTxtaEl = document.querySelector('#toolbox__tool__controls__add__textarea');
var addCmbbxEl = document.querySelector('#toolbox__tool__controls__add__combo');

var themeDefault = document.querySelector('#toolbox__tool__theme__default');
var theme1 = document.querySelector('#toolbox__tool__theme__1');
var theme2 = document.querySelector('#toolbox__tool__theme__2');
var theme3 = document.querySelector('#toolbox__tool__theme__3');

var toggle = document.querySelector('#toolbox__tool__toggle');

themeDefault.addEventListener('click', function() {form1.Toggle__Default__Theme()});
theme1.addEventListener('click', function() {form1.Toggle__1__Theme()});
theme2.addEventListener('click', function() {form1.Toggle__2__Theme()});
theme3.addEventListener('click', function() {form1.Toggle__3__Theme()});
toggle.addEventListener('click', function() {form1.Toggle()});

addBtnEl.addEventListener('click', function() {button1.Draw()});
addChckEl.addEventListener('click', function() {checkbox1.Draw()});
addRadEl.addEventListener('click', function() {radio1.Draw();radio2.Draw();});
addTxtEl.addEventListener('click', function() {text1.Draw()});
addLnkEl.addEventListener('click', function() {link1.Draw()});
addTxtfldEl.addEventListener('click', function() {textfield1.Draw()});
addTxtaEl.addEventListener('click', function() {textarea1.Draw()});
addCmbbxEl.addEventListener('click', function() {combobox1.Draw()});


