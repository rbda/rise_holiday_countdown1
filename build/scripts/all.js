!function () {
  function t(e, n, o) {
    function i(s, a) {
      if (!n[s]) {
        if (!e[s]) {
          var u = "function" == typeof require && require;
          if (!a && u)
            return u(s, !0);
          if (r)
            return r(s, !0);
          var d = new Error("Cannot find module '" + s + "'");
          throw d.code = "MODULE_NOT_FOUND",
              d
        }
        var l = n[s] = {
          exports: {}
        };
        e[s][0].call(l.exports, function (t) {
          return i(e[s][1][t] || t)
        }, l, l.exports, t, e, n, o)
      }
      return n[s].exports
    }

    for (var r = "function" == typeof require && require, s = 0; s < o.length; s++)
      i(o[s]);
    return i
  }

  return t
}()({
  1: [function (t, e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    n.daysRemaining = function () {
      var t = moment("2019-12-20")
          , e = moment();
      return t.diff(e, "days")
    }
  }
    , {}],
  2: [function (t, e, n) {
    "use strict";
    var o = t("./countdown")
        , i = new TimelineMax({
      repeat: -1,
      yoyo: !0,
      repeatDelay: 60
    })
        , r = new TimelineMax({
      repeat: -1,
      yoyo: !0,
      repeatDelay: 60,
      delay: 10
    })
        , s = document.getElementById("lights")
        , a = void 0
        , u = void 0;
    $(function () {
      var t = $(".windows li")
          , e = $("main")
          , n = function (t) {
        $(".daytime").removeClass("daytime"),
            $(".sunset").removeClass("sunset"),
            $(".nighttime").removeClass("nighttime"),
            e.addClass("daytime"),
            "daytime" === t ? e.addClass("daytime") : "sunset" === t ? e.addClass("sunset") : e.addClass("nighttime")
      }
          , d = function (e) {
        $(".lights-off").removeClass("lights-off"),
            $(".lights-on").removeClass("lights-on"),
            "nighttime" === e ? t.addClass("lights-on") : t.addClass("lights-off")
      }
          , l = function (t) {
        t ? (s.style.opacity = "1",
            i.to(".northern-lights--red", 10, {
              x: "+250px"
            }).to(".northern-lights--red", 10, {
              x: "-250px"
            }).to(".northern-lights--red", 10, {
              x: "0"
            }),
            r.to(".northern-lights--blue", 10, {
              x: "+250px"
            }).to(".northern-lights--blue", 10, {
              x: "-250px"
            }).to(".northern-lights--blue", 10, {
              x: "0"
            })) : (s.style.opacity = "0",
            r.clear(),
            i.clear())
      }
          , m = function (t) {
        t >= 16 || t <= 8 ? (n("nighttime"),
            d("nighttime"),
            l(!0)) : t >= 12 && t <= 16 ? (n("sunset"),
            d("sunset"),
            l(!0)) : (n("daytime"),
            d("daytime"),
            l(!1))
      }
          , c = function () {
        a = new Date,
            u = a.getHours(),
            m(u)
      };
      c(),
          setTimeout(c, 18e5);
      var f = document.querySelector(".countdown__days")
          , y = document.querySelector(".countdown__message")
          , g = function () {
        var t = (0,
            o.daysRemaining)();
        1 === t ? (y.textContent = "day to go!",
            f.textContent = t) : t < 1 ? (f.textContent = "",
            y.textContent = "") : (y.textContent = "days to go!",
            f.textContent = t)
      };
      setTimeout(g, 36e5),
          g()
    })
  }
    , {
      "./countdown": 1
    }]
}, {}, [2]);