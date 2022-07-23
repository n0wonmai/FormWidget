
<h2>Setting up the widget</h2>

<h3>Required files:</h3><br />
•       <font color = "#51a5e6">form.css</font><br />
•       <font color = "#51a5e6">themes.css</font><br />
•       <font color = "#c4b800">app.js</font><br />
•       <font color = "#c4b800">form.js</font><br />
•       <font color = "#c4b800">page.js</font><br /><br />


1.  Import styles:<br /><br />
```<link rel = "stylesheet" href = "./assets/styles/styles.css">```
    
2.  Import script modules:<br /><br />
```<script type = "module" src = "./assets/scripts/app.js"></script>```

3.  Paste HTML code to the page:<br />
```
     <form class = "form">
       <div class = "form__title">
         <label class = "form__title__name" style="float:left;">Title</label>
         <label class = "form__title__closebtn" style="float:right;">&times;</label>
       </div>
         <div class = "form__body" id = "form__body"></div>
      </form>
```
That's it, form is integrated now. <br>

<h3>Adding controls:</h3>
Create controls in script files and customize them right away, fill the properties:
<h4>Button:</h4><br />

```
var button1 = new Button ({
    
    node:                       'input',    
    type:                       'button',   
    text:                       'Sample button',   
    name:                       'btn1',

    width:                      100,
    height:                     25,

    theme:                      CONTROL__THEME[0]

});
```

<h4>Checkbox:</h4><br />

```
var checkbox1 = new Checkbox ({

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
```

<h4>Radiobutton:</h4><br />

```
var radio1 (&& radio 2) = new Radiobutton ({

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
```

<h4>Text:</h4><br />

```
var text1 = new Text ({

    node:                       'label',
    text:                       'Sample text',

    theme:                      CONTROL__THEME[7]

});
```

<h4>Link:</h4><br />

```
var link1 = new Link ({

    node:                       'a',
    link:                       'http://example.com',
    text:                       'Sample link',
    target:                     '_blank',

    theme:                      CONTROL__THEME[8]

});
```

<h4>Text field:</h4><br />

```
var textfield1 = new Textfield ({

    node:                       'input',
    type:                       'text',
    name:                       'textf1',
    text:                       'Sample text field',

    theme:                      CONTROL__THEME[9]

});
```

<h4>Text area:</h4><br />

```
var textarea1 = new Textarea ({

    node:                       'textarea',
    name:                       'text1',
    text:                       'Sample textarea content ...',

    theme:                      CONTROL__THEME[10]

});
```

<h4>Combobox:</h4><br />

```
var combobox1 = new Combobox ({

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
```

After initialization control you need to draw it:<br>

```
button.Draw();<br>
checkbox.Draw();<br>
etc....
```
<br>


<h3>Adding custom form themes:</h3>
Write new styles in <b>theme.css</b>:<br><br>

```
.form__body__custom__theme__10
{
    < properties >
}
```

Then include new theme in <b>form.js</b>:<br>
```
const FORM__THEME = [
    'form__body',
    'form__body__custom__theme__1',
    'form__body__custom__theme__2',
    'form__body__custom__theme__10'
];
```

Apply new theme at form initialization:<br>

```
var form1 = new Form ({

    //  Select html nodes
    window:                     '.form',
    caption:                    '.form__title',
    body:                       '.form__body',

    //  Set form state: 0 - hidden, 1 - displayed
    state:                      FORM__STATE[3],

    //  Set form theme
    theme:                      FORM__THEME[0],

    //  Set form size
    width:                      400,
    height:                     400

});
```
