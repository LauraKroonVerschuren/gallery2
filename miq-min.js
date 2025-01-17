/*
 miq 1.11.0
 @copyright 2016 Edwin Martin
 @see {@link http://www.bitstorm.org/javascript/miq/}
 @license MIT
*/
(function() {
    var d = function(a, b) { b = b && b.first || b || document; if ("function" == typeof a) "loading" == b.readyState ? b.addEventListener("DOMContentLoaded", a) : a();
        else { var c = Object.create(d.fn),
                e; if ("object" == typeof a)
                if ("length" in a)
                    for (c.length = a.length, e = 0; e < a.length; e++) c[e] = a[e];
                else c[0] = a, c.length = 1;
            else if (a)
                if (e = a.match(/<(.+)>/)) c[0] = b.createElement(e[1]), c.length = 1;
                else { var f = b.querySelectorAll(a);
                    c.length = f.length; for (e = 0; e < f.length; e++) c[e] = f[e] }
            else c[0] = b.createDocumentFragment(), c.length = 1; return c } };
    d.fn = Object.create(Array.prototype, {
        first: { get: function() { return this[0] } },
        eq: { value: function(a) { return d(this[a || 0]) } },
        on: { value: function(a, b) { for (var c = 0; c < this.length; c++) this[c].addEventListener(a, b); return this } },
        off: { value: function(a, b) { for (var c = 0; c < this.length; c++) this[c].removeEventListener(a, b); return this } },
        addClass: { value: function(a) { for (var b = 0; b < this.length; b++) d.fn.hasClass.call({ first: this[b] }, a) || (this[b].className += " " + a); return this } },
        removeClass: {
            value: function(a) {
                for (var b = 0; b <
                    this.length; b++) this[b].className = this[b].className.replace(a, "");
                return this
            }
        },
        hasClass: { value: function(a) { return "" != this.first.className && (new RegExp("\\b" + a + "\\b")).test(this.first.className) } },
        prop: { value: function(a, b) { if ("undefined" == typeof b) return this.first[a]; for (var c = 0; c < this.length; c++) this[c][a] = b; return this } },
        attr: { value: function(a, b) { if ("undefined" == typeof b) return this.first.getAttribute(a); for (var c = 0; c < this.length; c++) this[c].setAttribute(a, b); return this } },
        removeAttr: {
            value: function(a) {
                for (var b =
                        0; b < this.length; b++) this[b].removeAttribute(a);
                return this
            }
        },
        val: { value: function(a) { var b = this.first,
                    c = "value"; switch (b.tagName) {
                    case "SELECT":
                        c = "selectedIndex"; break;
                    case "OPTION":
                        c = "selected"; break;
                    case "INPUT":
                        if ("checkbox" == b.type || "radio" == b.type) c = "checked" } return this.prop(c, a) } },
        append: { value: function(a) { a = d(a); for (var b = a.length, c = 0; c < b; c++) this.first.appendChild(a[c].first || a[c]); return this } },
        before: {
            value: function(a) {
                this.first.parentElement.insertBefore(d().append(a).first, this.first);
                return this
            }
        },
        parent: { value: function() { return d(this.first.parentNode) } },
        clone: { value: function() { return d(this.first.cloneNode(!0)) } },
        remove: { value: function() { for (var a = 0; a < this.length; a++) this[a].parentNode.removeChild(this[a]); return this } },
        find: { value: function(a) { return d(a, this.first) } },
        closest: { value: function(a) { var b = this.first;
                do
                    if (b[d.matches](a)) return d(b); while (b = b.parentElement);
                return null } },
        is: { value: function(a) { return d(this.filter(function(b) { return b[d.matches](a) })) } },
        css: {
            value: function(a,
                b) { if ("undefined" == typeof b) return this.first.style[a]; for (var c = 0; c < this.length; c++) this[c].style[a] = b; return this }
        },
        html: { value: function(a) { return this.prop("innerHTML", a) } },
        text: { value: function(a) { return this.prop("textContent", a) } }
    });
    d.miq = "1.10.0";
    d.ajaxCallback = function(a, b, c, d) {
        var f = new XMLHttpRequest;
        f.onreadystatechange = function() {
            var a;
            if (4 == f.readyState)
                if (200 == f.status) { switch (d.dataType) {
                        case "xml":
                            a = f.responseXML; break;
                        case "json":
                            a = JSON.parse(f.responseText); break;
                        default:
                            a = f.responseText }
                    b(a) } else c &&
                    c("Ajax error: " + f.status)
        };
        f.open(d.method || "GET", a, !0);
        if (d.headers)
            for (var g in d.headers) f.setRequestHeader(g, d.headers[g]);
        f.send(d.data || "")
    };
    d.ajax = function(a, b) { return new Promise(function(c, e) { d.ajaxCallback(a, c, e, b) }) };
    d.matches = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector"].filter(function(a) { return a in document.documentElement })[0];
    "function" === typeof define && define.amd ? define(function() { return d }) : "object" === typeof module && module.exports ? module.exports =
        d : "undefined" == typeof $ && ($ = d)
})();