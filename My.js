//Console调试、记录功能（保证在所有浏览器中都可以使用：console.log等函数）
(function () {
    var noop = function noop() { };
    if (!window.console) {
        window.console = {};
        var console = window.console;
        if (!console.memory) {
            console.memory = {};
        }
        var funcs = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        for (var i = 0, j = funcs.length; i < j; i++) {
            var func = funcs[i];
            if (!console[func]) {
                console[func] = noop;
            }
        }
    }
})();
//JSON编码、解码功能（代码来源于开源库：json2.js 2015-05-03，保证在所有浏览器中都可以使用：JSON.parse和JSON.stringify）
"object" !== typeof JSON && (JSON = {});
(function () {
    function m(a) { return 10 > a ? "0" + a : a } function r() { return this.valueOf() } function t(a) { u.lastIndex = 0; return u.test(a) ? '"' + a.replace(u, function (a) { var c = w[a]; return "string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + a + '"' } function p(a, l) {
        var c, d, h, q, g = e, f, b = l[a]; b && "object" === typeof b && "function" === typeof b.toJSON && (b = b.toJSON(a)); "function" === typeof k && (b = k.call(l, a, b)); switch (typeof b) {
            case "string": return t(b); case "number": return isFinite(b) ? String(b) :
"null"; case "boolean": case "null": return String(b); case "object": if (!b) return "null"; e += n; f = []; if ("[object Array]" === Object.prototype.toString.apply(b)) { q = b.length; for (c = 0; c < q; c += 1) f[c] = p(c, b) || "null"; h = 0 === f.length ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + g + "]" : "[" + f.join(",") + "]"; e = g; return h } if (k && "object" === typeof k) for (q = k.length, c = 0; c < q; c += 1) "string" === typeof k[c] && (d = k[c], (h = p(d, b)) && f.push(t(d) + (e ? ": " : ":") + h)); else for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (h = p(d, b)) && f.push(t(d) + (e ?
": " : ":") + h); h = 0 === f.length ? "{}" : e ? "{\n" + e + f.join(",\n" + e) + "\n" + g + "}" : "{" + f.join(",") + "}"; e = g; return h
        } 
    } var x = /^[\],:{}\s]*$/, y = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, z = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, A = /(?:^|:|,)(?:\s*\[)+/g, u = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, v = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + m(this.getUTCMonth() + 1) + "-" + m(this.getUTCDate()) + "T" + m(this.getUTCHours()) + ":" + m(this.getUTCMinutes()) + ":" + m(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = r, Number.prototype.toJSON = r, String.prototype.toJSON = r); var e, n, w, k; "function" !== typeof JSON.stringify && (w = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify =
function (a, l, c) { var d; n = e = ""; if ("number" === typeof c) for (d = 0; d < c; d += 1) n += " "; else "string" === typeof c && (n = c); if ((k = l) && "function" !== typeof l && ("object" !== typeof l || "number" !== typeof l.length)) throw Error("JSON.stringify"); return p("", { "": a }) }); "function" !== typeof JSON.parse && (JSON.parse = function (a, e) {
    function c(a, d) { var g, f, b = a[d]; if (b && "object" === typeof b) for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (f = c(b, g), void 0 !== f ? b[g] = f : delete b[g]); return e.call(a, d, b) } var d; a = String(a); v.lastIndex =
0; v.test(a) && (a = a.replace(v, function (a) { return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) })); if (x.test(a.replace(y, "@").replace(z, "]").replace(A, ""))) return d = eval("(" + a + ")"), "function" === typeof e ? c({ "": d }, "") : d; throw new SyntaxError("JSON.parse");
})
})();
//HTML编码、解码功能（将JS变量输出到html之前，需要使用html_encode进行转码，防止XSS攻击）
function html_encode(html) {
    return html.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function html_decode(text) {
    return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&#39;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
//JSON编码、解码功能
function json_encode(json) {
    return JSON.stringify(json);
}
function json_decode(text) {
    return JSON.parse(text);
}
//URL编码、解码功能
function url_encode(text) {
    return encodeURIComponent(text);
}
function url_decode(text) {
    return decodeURIComponent(text);
}
//Base64编码、解码功能（使用等号=，将字符串长度补足为4的倍数）
(function () {
    var map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    base64_decode = function (s) {
        s += '';
        var len = s.length;
        if ((len === 0) || (len % 4 !== 0)) {
            return s;
        }
        var pads = 0;
        if (s.charAt(len - 1) === map[64]) {
            pads++;
            if (s.charAt(len - 2) === map[64]) {
                pads++;
            }
            len -= 4;
        }
        var i, b, x = [];
        for (i = 0; i < len; i += 4) {
            b = (map.indexOf(s.charAt(i)) << 18) | (map.indexOf(s.charAt(i + 1)) << 12) | (map.indexOf(s.charAt(i + 2)) << 6) | map.indexOf(s.charAt(i + 3));
            x.push(String.fromCharCode(b >> 16, (b >> 8) & 0xff, b & 0xff));
        }
        switch (pads) {
            case 1:
                b = (map.indexOf(s.charAt(i)) << 18) | (map.indexOf(s.charAt(i + 1)) << 12) | (map.indexOf(s.charAt(i + 2)) << 6) | map.indexOf(s.charAt(i + 3));
                x.push(String.fromCharCode(b >> 16, (b >> 8) & 0xff));
                break;
            case 2:
                b = (map.indexOf(s.charAt(i)) << 18) | (map.indexOf(s.charAt(i + 1)) << 12) | (map.indexOf(s.charAt(i + 2)) << 6) | map.indexOf(s.charAt(i + 3));
                x.push(String.fromCharCode(b >> 16));
                break;
        }
        return unescape(x.join(''));
    };
    base64_encode = function (s) {
        if (!s) {
            return;
        }
        s += '';
        if (s.length === 0) {
            return s;
        }
        s = escape(s);
        var i, b, x = [], padchar = map[64];
        var len = s.length - s.length % 3;
        for (i = 0; i < len; i += 3) {
            b = (s.charCodeAt(i) << 16) | (s.charCodeAt(i + 1) << 8) | s.charCodeAt(i + 2);
            x.push(map.charAt(b >> 18));
            x.push(map.charAt((b >> 12) & 0x3f));
            x.push(map.charAt((b >> 6) & 0x3f));
            x.push(map.charAt(b & 0x3f));
        }
        switch (s.length - len) {
            case 1:
                b = s.charCodeAt(i) << 16;
                x.push(map.charAt(b >> 18) + map.charAt((b >> 12) & 0x3f) + padchar + padchar);
                break;
            case 2:
                b = (s.charCodeAt(i) << 16) | (s.charCodeAt(i + 1) << 8);
                x.push(map.charAt(b >> 18) + map.charAt((b >> 12) & 0x3f) + map.charAt((b >> 6) & 0x3f) + padchar);
                break;
        }
        return x.join('');
    };
})();
