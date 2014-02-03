$('html').removeClass('no_js');
$('html').addClass('js');

$.extend($.easing, {
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
});

var AppSettings = {
    DEBUGMODE: true, //change to turn on/off console.log statements
};

var Debug = {
    log: function (string, variable) {
        if (AppSettings.DEBUGMODE) {
            try { console.log(string, variable); }
            catch (e) { }
        }
    },
    warn: function (string, variable) {
        if (AppSettings.DEBUGMODE) {
            try { console.warn(string, variable); }
            catch (e) { }
        }
    },
};



var Main = {
    run: function () {

    }
};

$(document).ready(Main.run());