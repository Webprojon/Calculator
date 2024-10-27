!(function () {
  var e = {
      848: function () {
        function e(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var t = document.querySelector('.calc__window-input'),
          n = document.querySelector('.calc__characters'),
          r = ['%', '/', '*', '-', '+'];
        n.addEventListener('click', function (n) {
          if ('BUTTON' === n.target.tagName) {
            var o = n.target.textContent;
            if ('AC' === o) t.value = '0';
            else if ('±' === o)
              t.value = t.value.startsWith('-')
                ? t.value.slice(1)
                : '-' + t.value;
            else if ('=' === o && '' !== t.value)
              t.value = (function (t) {
                var n = (t = (t = (t = t.replace(/×/g, '*')).replace(
                    /÷/g,
                    '/',
                  )).replace(/(\d+)%/g, '($1 * 0.01)')).match(
                    /(\d+|\+|-|\*|\/|\(|\))/g,
                  ),
                  r = [],
                  o = [],
                  a = { '+': 1, '-': 1, '*': 2, '/': 2 };
                function c(e) {
                  var t = r.pop(),
                    n = r.pop();
                  switch (e) {
                    case '+':
                      r.push(n + t);
                      break;
                    case '-':
                      r.push(n - t);
                      break;
                    case '*':
                      r.push(n * t);
                      break;
                    case '/':
                      r.push(n / t);
                  }
                }
                var l,
                  u = (function (t, n) {
                    var r =
                      ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                      t['@@iterator'];
                    if (!r) {
                      if (
                        Array.isArray(t) ||
                        (r = (function (t, n) {
                          if (t) {
                            if ('string' == typeof t) return e(t, n);
                            var r = {}.toString.call(t).slice(8, -1);
                            return (
                              'Object' === r &&
                                t.constructor &&
                                (r = t.constructor.name),
                              'Map' === r || 'Set' === r
                                ? Array.from(t)
                                : 'Arguments' === r ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      r,
                                    )
                                  ? e(t, n)
                                  : void 0
                            );
                          }
                        })(t)) ||
                        (n && t && 'number' == typeof t.length)
                      ) {
                        r && (t = r);
                        var o = 0,
                          a = function () {};
                        return {
                          s: a,
                          n: function () {
                            return o >= t.length
                              ? { done: !0 }
                              : { done: !1, value: t[o++] };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: a,
                        };
                      }
                      throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                      );
                    }
                    var c,
                      l = !0,
                      u = !1;
                    return {
                      s: function () {
                        r = r.call(t);
                      },
                      n: function () {
                        var e = r.next();
                        return (l = e.done), e;
                      },
                      e: function (e) {
                        (u = !0), (c = e);
                      },
                      f: function () {
                        try {
                          l || null == r.return || r.return();
                        } finally {
                          if (u) throw c;
                        }
                      },
                    };
                  })(n);
                try {
                  for (u.s(); !(l = u.n()).done; ) {
                    var i = l.value;
                    if (isNaN(i)) {
                      if (i in a) {
                        for (; o.length && a[o[o.length - 1]] >= a[i]; )
                          c(o.pop());
                        o.push(i);
                      }
                    } else r.push(Number(i));
                  }
                } catch (e) {
                  u.e(e);
                } finally {
                  u.f();
                }
                for (; o.length; ) c(o.pop());
                return r[0];
              })(t.value);
            else if (
              ('0' === t.value ? (t.value = o) : (t.value += o), r.includes(o))
            ) {
              var a = t.value[t.value.length - 2];
              r.includes(a) && (t.value = t.value.slice(0, -2) + o);
            }
          }
        });
      },
      571: function () {
        var e = document.querySelector('.calc__header-btn'),
          t = document.querySelector('.calc__window'),
          n = document.querySelector('.calc__window-input'),
          r = document.body;
        function o(o) {
          var a = o ? 'dark__theme' : 'light__theme',
            c = o ? 'Light Mode' : 'Dark Mode',
            l = o ? 'fa-sun' : 'fa-moon';
          (r.className = a),
            (e.innerHTML = '<i class="fa-solid '
              .concat(l, '"></i> ')
              .concat(c)),
            [t, n].forEach(function (e) {
              return e.classList.toggle('calc__window-theme', !o);
            }),
            document.querySelectorAll('.calc__operator').forEach(function (e) {
              return e.classList.toggle('calc__operator-theme', !o);
            }),
            document
              .querySelectorAll('.calc__top-symbol')
              .forEach(function (e) {
                return e.classList.toggle('calc__top-symbol-theme', !o);
              }),
            document.querySelectorAll('.calc__symbol').forEach(function (e) {
              return e.classList.toggle('calc__symbol-theme', !o);
            }),
            localStorage.setItem('theme', a);
        }
        document.addEventListener('DOMContentLoaded', function () {
          o('dark__theme' === localStorage.getItem('theme'));
        }),
          e.addEventListener('click', function () {
            o(!r.classList.contains('dark__theme'));
          });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      'use strict';
      n(848), n(571);
    })();
})();
