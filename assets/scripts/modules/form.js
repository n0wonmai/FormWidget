/*
 * Form widget constructor with n0w.gui
 *
 * form.js
 * 
 * by n0wonmai
 *
*/

//  Main form nodes
const WINDOW = document.querySelector('.form');

const FORM = document.querySelector('.form__body');
const FORM__CAPTION = document.querySelector('.form__title');
const FORM__BUTTON = document.querySelector('.form__title__closebtn');

FORM__BUTTON.addEventListener('click', FormClose, false);

export function FormClose()
{
    WINDOW.style.display = 'none';
}

const FORM__STATE = [
    'none',
    'block'
];

const FORM__THEME = [
    'form__body',
    'form__body__custom__theme__1',
    'form__body__custom__theme__2',
    'form__body__custom__theme__3'
];

const CONTROL__THEME = [
    'form__button',

    'form__checkbox',
    'form__checkbox__input',
    'form__checkmark',

    'form__radiobutton',
    'form__radiobutton__input',
    'form__radiomark',

    'form__text',
    'form__link',

    'form__textfield',
    'form__textarea',

    'form__combobox'
];

/* 
 * class NowGuiPattern
 *
 * @params: window, caption, body
 *
*/
export class NowGuiPattern
{
    constructor(window, caption, body)
    {
        this.$window = document.querySelector(window);
        this.$caption = document.querySelector(caption);
        this.$body = document.querySelector(body)
    }
}

/* 
 * class Form
 *
 * @params: window, caption, body
 *
*/
export class Form extends NowGuiPattern
{
    constructor(param)
    {
        super(param.window, param.caption, param.body);

        this.$window.style.width = param.width + 'px';
        this.$window.style.height = param.height + 'px';
        this.$window.style.display = param.state;
        this.$body.className = param.theme;
    }

    Toggle__Default__Theme()
    {
        this.$body.className = FORM__THEME[0];
    }

    Toggle__1__Theme()
    {
        this.$body.className = FORM__THEME[1];
    }

    Toggle__2__Theme()
    {
        this.$body.className = FORM__THEME[2];
    }

    Toggle__3__Theme()
    {
        this.$body.className = FORM__THEME[3];
    }

    Toggle()
    {
        this.$window.style.display = 'block';
    }
}

//  Render form
export let form1 = new Form ({

    //  Select html nodes
    window:                     '.form',
    caption:                    '.form__title',
    body:                       '.form__body',

    //  Set form state: 0 - hidden, 1 - displayed
    state:                      FORM__STATE[1],

    //  Set form theme
    theme:                      FORM__THEME[0],

    //  Set form size
    width:                      400,
    height:                     400

});

/* 
 * class Control
 *
 * @params: node
 * @methods: Draw, Hide
 *
*/
class Control
{
    constructor(node)
    {
        this.$node = document.createElement(node);
    }

    Draw()
    {
        FORM.appendChild(this.$node);
    }

    Hide()
    {
        this.$node.style.display = 'none';
    }
}

/* 
 * class Button
 *
 * @params: node
 * 
*/
export class Button extends Control
{
    constructor(param)
    {
        super(param.node);

        this.$node.className = param.theme;
        this.$node.style.width = param.width + 'px';
        this.$node.style.height = param.height + 'px';
        this.$node.type = param.type;
        this.$node.value = param.text;
        this.$node.name = param.name;
    }
}

/* 
 * class Checkbox
 *
 * @params: node
 * @methods: Draw
 * 
*/
export class Checkbox extends Control
{
    constructor(param)
    {
        super(param.node);

        //  Label
        this.$label = document.createElement(param.label);
        this.$label.className = param.color1;
        this.$label.innerHTML = param.text;

        //  Input
        this.$node.className = param.theme;
        this.$node.type = param.type;
        this.$node.name = param.name;

        //  Span
        this.$span = document.createElement(param.span);
        this.$span.className = param.color2;
    }

    Draw()
    {
        //  Override
        this.$label.appendChild(this.$node);
        this.$label.appendChild(this.$span);

        FORM.appendChild(this.$label);
    }
}

/* 
 * class Radiobutton
 *
 * @params: node
 * @methods: Draw
 * 
*/
export class Radiobutton extends Control
{
    constructor(param)
    {
        super(param.node);

        //  Label
        this.$label = document.createElement(param.label);
        this.$label.className = param.color1;
        this.$label.innerHTML = param.text;
       
        //  Input
        this.$node.className = param.theme;
        this.$node.type = param.type;
        this.$node.name = param.name;

        //  Input second element
        /*  this.$node_el2 = document.createElement(param.second__node);
        this.$node_el2.className = param.second__node__theme;
        this.$node_el2.type = param.second__node__type;
        this.$node_el2.name = param.second__node__name; */

        //  Span
        this.$span = document.createElement(param.span);
        this.$span.className = param.color2;
    }

    Draw()
    {
        //  Override
        this.$label.appendChild(this.$node);
        this.$label.appendChild(this.$span);

        FORM.appendChild(this.$label);
    }
}

/* 
 * class Text
 *
 * @params: node
 * 
*/
export class Text extends Control
{
    constructor(param)
    {
        super(param.node);

        this.$node.innerHTML = param.text;
        this.$node.className = param.theme;
    }
}

/* 
 * class Link
 *
 * @params: node
 * 
*/
export class Link extends Control
{
    constructor(param)
    {
        super(param.node);

        this.$node.innerHTML = param.text;
        this.$node.className = param.theme;
        this.$node.href = param.link;
        this.$node.target = param.target;
    }
}

/* 
 * class Textfield
 *
 * @params: node
 * 
*/
export class Textfield extends Control
{
    constructor(param)
    {
        super(param.node);

        this.$node.className = param.theme;
        this.$node.name = param.name;
        this.$node.value = param.text;
    }
}

/* 
 * class Textarea
 *
 * @params: node
 * 
*/
export class Textarea extends Control
{
    constructor(param)
    {
        super(param.node);

        this.$node.className = param.theme;
        this.$node.name = param.name;
        this.$node.value = param.text;
    }
}

/* 
 * class Combobox
 *
 * @params: node
 * 
*/
export class Combobox extends Control
{
    constructor(param)
    {
        super(param.node);

        this.$node.className = param.theme;
        this.$node.name = param.name;
        this.$node.value = param.text;

        this.$option_1 = document.createElement(param.option__1__type);
        this.$option_1.value = param.option__1__value;
        this.$option_1.innerHTML = param.option__1__text;

        this.$option_2 = document.createElement(param.option__2__type);
        this.$option_2.value = param.option__2__value;
        this.$option_2.innerHTML = param.option__2__text;

        this.$option_3 = document.createElement(param.option__3__type);
        this.$option_3.value = param.option__3__value;
        this.$option_3.innerHTML = param.option__3__text;

        this.$node.appendChild(this.$option_1);
        this.$node.appendChild(this.$option_2);
        this.$node.appendChild(this.$option_3);
    }
}

export let combobox1 = new Combobox ({

    node:                       'select',
    name:                       'combo1',
    text:                       'Sample combobox',

    theme:                      CONTROL__THEME[11],

    option__1__type:            'option',
    option__1__value:           '1',
    option__1__text:            'element1',

    option__2__type:            'option',
    option__2__value:           '2',
    option__2__text:            'element2',

    option__3__type:            'option',
    option__3__value:           '3',
    option__3__text:            'element3'

});

export let textarea1 = new Textarea ({

    node:                       'textarea',
    name:                       'text1',
    text:                       'Sample textarea content ...',

    theme:                      CONTROL__THEME[10]

});

export let textfield1 = new Textfield ({

    node:                       'input',
    type:                       'text',
    name:                       'textf1',
    text:                       'Sample text field',

    theme:                      CONTROL__THEME[9]

});

export let link1 = new Link ({

    node:                       'a',
    link:                       'http://example.com',
    text:                       'Sample link',
    target:                     '_blank',

    theme:                      CONTROL__THEME[8]

});

export let text1 = new Text ({

    node:                       'label',
    text:                       'Sample text',

    theme:                      CONTROL__THEME[7]

});

export let radio1 = new Radiobutton ({

    //  Radiobutton input
    node:                       'input',
    type:                       'radio',
    name:                       'rad1',
    theme:                      CONTROL__THEME[5],


    //  Radiobutton label
    label:                      'label',
    color1:                     CONTROL__THEME[4],
    text:                       'Sample radiobutton',

    //  Radiobutton span
    span:                       'span',
    color2:                     CONTROL__THEME[6]

});

export let radio2 = new Radiobutton ({

    //  Radiobutton input
    node:                       'input',
    type:                       'radio',
    name:                       'rad1',
    theme:                      CONTROL__THEME[5],


    //  Radiobutton label
    label:                      'label',
    color1:                     CONTROL__THEME[4],
    text:                       'Sample radiobutton',

    //  Radiobutton span
    span:                       'span',
    color2:                     CONTROL__THEME[6]

});

export let checkbox1 = new Checkbox ({

    //  Checkbox input
    node:                       'input',
    type:                       'checkbox',
    name:                       'chck1',
    theme:                      CONTROL__THEME[2],


    //  Checkbox label
    label:                      'label',
    color1:                     CONTROL__THEME[1],
    text:                       'Sample checkbox',

    //  Checkbox span
    span:                       'span',
    color2:                     CONTROL__THEME[3]

});

export let button1 = new Button ({
    
    node:                       'input',
    type:                       'button',
    text:                       'Sample button',
    name:                       'btn1',

    width:                      100,
    height:                     25,

    theme:                      CONTROL__THEME[0]

});

FormMove(WINDOW);

function FormMove(elmnt) 
{
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (FORM__CAPTION) 
  {
    FORM__CAPTION.onmousedown = dragMouseDown;
  } 

  else 
  {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) 
  {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) 
  {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() 
  {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}