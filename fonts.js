/* Detect IE */
var tmp = document.documentMode, e, isIE;
// Try to force this property to be a string.
try{
    document.documentMode = "";
} catch(e){ };
// If document.documentMode is a number, then it is a read-only property, and
// so we have IE 8+.
// Otherwise, if conditional compilation works, then we have IE < 11.
// Otherwise, we have a non-IE browser.
isIE = typeof document.documentMode == "number" ? !0 : eval("/*@cc_on!@*/!1");
// Switch back the value to be unobtrusive for non-IE browsers.
try{
    document.documentMode = tmp;
} catch(e){ };

function addCSSRule(sheet, selector, rules, index) {
    if(sheet.insertRule)
        sheet.insertRule(selector + "{" + rules + "}", index);
    else
        sheet.addRule(selector, rules, index);
}


/* For IE, use Segoe UI; for others, use Open Sans. */
if (!isIE) {
    WebFontConfig = {
        google: {
            families: [ 'Open+Sans:400,400italic,700:latin' ]
        }
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
}
