/*
 * Form widget constructor with n0w.gui
 *
 * page.js
 * 
 * by n0wonmai
 *
*/

const PAGE__DARK__COLOR = `background-color: #000; color: #fff; transition: 0.5s ease; -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease;`; //  Stylize <body> node with dark theme
const PAGE__LIGHT__COLOR = `background-color: #fff; color: #000; transition: 0.5s ease; -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease;`; //  Stylize <body> node with light theme
const NAV__DARK__COLOR = `background: #356aa0; background: -moz-linear-gradient(top,  #356aa0 0%, #356aa0 100%); background: -webkit-linear-gradient(top,  #356aa0 0%,#356aa0 100%); background: linear-gradient(to bottom,  #356aa0 0%,#356aa0 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#356aa0\', endColorstr=\'#356aa0\',GradientType=0 ); color: #fff; transition: 0.5s ease; -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease;`;   //  Stylize <header> & <footer> nodes with dark theme
const NAV__LIGHT__COLOR = `background: #4f85bb; background: -moz-linear-gradient(top,  #4f85bb 0%, #4f85bb 100%); background: -webkit-linear-gradient(top,  #4f85bb 0%,#4f85bb 100%); background: linear-gradient(to bottom,  #4f85bb 0%,#4f85bb 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#4f85bb\', endColorstr=\'#4f85bb\',GradientType=0 ); color: #000; transition: 0.5s ease; -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease;`;   //  Stylize <header> & <footer> nodes with light theme

const DARK = document.querySelector('#dark_theme');
const LIGHT = document.querySelector('#light_theme');

DARK.style.display = 'none';

/* 
 * class Page
 *
 * @params: elementBody, elementHeader, elementFooter
 * @methods: SwitchToDark, SwitchToLight
 *
*/
class Page
{
    constructor(
        elementBody,
        elementHeader,
        elementFooter
    )
    {
        this.$body = document.querySelector(elementBody);
        this.$header = document.querySelector(elementHeader);
        this.$footer = document.querySelector(elementFooter);
    }

    SwitchToDark()
    {
        console.log('Switched to dark theme');
        this.$body.style.cssText = PAGE__DARK__COLOR;
        this.$header.style.cssText = NAV__DARK__COLOR;
        this.$footer.style.cssText = NAV__DARK__COLOR;
    }

    SwitchToLight()
    {
        console.log('Switched to light theme');
        this.$body.style.cssText = PAGE__LIGHT__COLOR;
        this.$header.style.cssText = NAV__LIGHT__COLOR;
        this.$footer.style.cssText = NAV__LIGHT__COLOR;
    }
}

export let page = new Page(
    'body', //  Select <body> node
    'header', //  Select <header> node
    'footer' //  Select <footer> node
);

DARK.addEventListener('click', function() {DARK.style.display = 'none'; LIGHT.style.display = 'inline-block'; page.SwitchToDark()}, false);
LIGHT.addEventListener('click', function() {LIGHT.style.display = 'none'; DARK.style.display = 'inline-block'; page.SwitchToLight()}, false);

/* 
* class Device
*
* @params: deviceWidth, deviceHeight, userAgent
* @methods: GetDevice
*
*/
class Device
{
    constructor(wDevice, hDevice, userAgent)
    {
        this._deviceWidth = wDevice;
        this._deviceHeight = hDevice;
        this._userAgent = userAgent;
    }

    GetDevice()
    {
        switch(true)
        {
            case this._deviceWidth == 640 && this._deviceHeight == 480: 
                console.log('Your screen format is: VGA.\n' + 'Screen size: ' + this._deviceWidth + 'x' + this._deviceHeight + 'px');
                break;

            case this._deviceWidth == 1280 && this._deviceHeight == 720: 
                console.log('Your screen format is: HD.\n' + 'Screen size: ' + this._deviceWidth + 'x' + this._deviceHeight + 'px');
                break;

            case this._deviceWidth == 1280 && this._deviceHeight == 1024: 
                console.log('Your screen format is: SXGA.\n' + 'Screen size: ' + this._deviceWidth + 'x' + this._deviceHeight + 'px');
                break;
            
            case this._deviceWidth == 1600 && this._deviceHeight == 900: 
                console.log('Your screen format is: WXGA++.\n' + 'Screen size: ' + this._deviceWidth + 'x' + this._deviceHeight + 'px');
                break;

            case this._deviceWidth == 1600 && this._deviceHeight == 1200: 
                console.log('Your screen format is: UXGA.\n' + 'Screen size: ' + this._deviceWidth + 'x' + this._deviceHeight + 'px');
                break;

            case this._deviceWidth == 1920 && this._deviceHeight == 1080: 
                console.log('Your screen format is: Full HD.\n' + 'Screen size: ' + this._deviceWidth + 'x' + this._deviceHeight + 'px');
                break;

            case this._deviceWidth == 2560 && this._deviceHeight == 1440: 
                console.log('Your screen format is: Quad HD.\n' + 'Screen size: ' + this._deviceWidth + 'x' + this._deviceHeight + 'px');
                break;
            
            case this._deviceWidth == 3200 && this._deviceHeight == 1800: 
                console.log('Your screen format is: WQXGA.\n' + 'Screen size: ' + this._deviceWidth + 'x' + this._deviceHeight + 'px');
                break;
            
            case this._deviceWidth == 3840 && this._deviceHeight == 2160: 
                console.log('Your screen format is: Ultra HD.\n' + 'Screen size: ' + this._deviceWidth + 'x' + this._deviceHeight + 'px');
                break;
            
            case this._deviceWidth == 5120 && this._deviceHeight == 1440: 
                console.log('Your screen format is: DQHD.\n' + 'Screen size: ' + this._deviceWidth + 'x' + this._deviceHeight + 'px');
                break;

            default: console.log('Cannot recognize your screen format');
        }
        return 0;
    }
}

export let device = new Device(window.screen.width, window.screen.height, navigator.userAgent);
device.GetDevice();