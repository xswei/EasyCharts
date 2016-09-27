// https://d3js.org Version 4.0.0-alpha.50. Copyright 2016 Mike Bostock.
! function(t, n) {
	"object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(t.d3 = t.d3 || {})
}(this, function(t) {
	"use strict";

	function n(t, n) {
		return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
	}

	function e(t) {
		return 1 === t.length && (t = r(t)), {
			left: function(n, e, r, i) {
				for (null == r && (r = 0), null == i && (i = n.length); i > r;) {
					var o = r + i >>> 1;
					t(n[o], e) < 0 ? r = o + 1 : i = o
				}
				return r
			},
			right: function(n, e, r, i) {
				for (null == r && (r = 0), null == i && (i = n.length); i > r;) {
					var o = r + i >>> 1;
					t(n[o], e) > 0 ? i = o : r = o + 1
				}
				return r
			}
		}
	}

	function r(t) {
		return function(e, r) {
			return n(t(e), r)
		}
	}

	function i(t, n) {
		return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
	}

	function o(t) {
		return null === t ? NaN : +t
	}

	function u(t, n) {
		var e, r, i = t.length,
			u = 0,
			a = 0,
			c = -1,
			s = 0;
		if (null == n)
			for (; ++c < i;) isNaN(e = o(t[c])) || (r = e - u, u += r / ++s, a += r * (e - u));
		else
			for (; ++c < i;) isNaN(e = o(n(t[c], c, t))) || (r = e - u, u += r / ++s, a += r * (e - u));
		return s > 1 ? a / (s - 1) : void 0
	}

	function a(t, n) {
		var e = u(t, n);
		return e ? Math.sqrt(e) : e
	}

	function c(t, n) {
		var e, r, i, o = -1,
			u = t.length;
		if (null == n) {
			for (; ++o < u;)
				if (null != (r = t[o]) && r >= r) {
					e = i = r;
					break
				}
			for (; ++o < u;) null != (r = t[o]) && (e > r && (e = r), r > i && (i = r))
		} else {
			for (; ++o < u;)
				if (null != (r = n(t[o], o, t)) && r >= r) {
					e = i = r;
					break
				}
			for (; ++o < u;) null != (r = n(t[o], o, t)) && (e > r && (e = r), r > i && (i = r))
		}
		return [e, i]
	}

	function s(t) {
		return function() {
			return t
		}
	}

	function f(t) {
		return t
	}

	function l(t, n, e) {
		t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : 3 > i ? 1 : +e;
		for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
		return o
	}

	function h(t, n, e) {
		var r = p(t, n, e);
		return l(Math.ceil(t / r) * r, Math.floor(n / r) * r + r / 2, r)
	}

	function p(t, n, e) {
		var r = Math.abs(n - t) / Math.max(0, e),
			i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
			o = r / i;
		return o >= yd ? i *= 10 : o >= gd ? i *= 5 : o >= md && (i *= 2), t > n ? -i : i
	}

	function d(t) {
		return Math.ceil(Math.log(t.length) / Math.LN2) + 1
	}

	function v() {
		function t(t) {
			var i, o, u = t.length,
				a = new Array(u);
			for (i = 0; u > i; ++i) a[i] = n(t[i], i, t);
			var c = e(a),
				s = c[0],
				f = c[1],
				l = r(a, s, f);
			Array.isArray(l) || (l = h(s, f, l));
			for (var p = l.length; l[0] <= s;) l.shift(), --p;
			for (; l[p - 1] >= f;) l.pop(), --p;
			var d, v = new Array(p + 1);
			for (i = 0; p >= i; ++i) d = v[i] = [], d.x0 = i > 0 ? l[i - 1] : s, d.x1 = p > i ? l[i] : f;
			for (i = 0; u > i; ++i) o = a[i], o >= s && f >= o && v[hd(l, o, 0, p)].push(t[i]);
			return v
		}
		var n = f,
			e = c,
			r = d;
		return t.value = function(e) {
			return arguments.length ? (n = "function" == typeof e ? e : s(e), t) : n
		}, t.domain = function(n) {
			return arguments.length ? (e = "function" == typeof n ? n : s([n[0], n[1]]), t) : e
		}, t.thresholds = function(n) {
			return arguments.length ? (r = "function" == typeof n ? n : s(Array.isArray(n) ? vd.call(n) : n), t) : r
		}, t
	}

	function _(t, n, e) {
		if (null == e && (e = o), r = t.length) {
			if ((n = +n) <= 0 || 2 > r) return +e(t[0], 0, t);
			if (n >= 1) return +e(t[r - 1], r - 1, t);
			var r, i = (r - 1) * n,
				u = Math.floor(i),
				a = +e(t[u], u, t),
				c = +e(t[u + 1], u + 1, t);
			return a + (c - a) * (i - u)
		}
	}

	function y(t, e, r) {
		return t = _d.call(t, o).sort(n), Math.ceil((r - e) / (2 * (_(t, .75) - _(t, .25)) * Math.pow(t.length, -1 / 3)))
	}

	function g(t, n, e) {
		return Math.ceil((e - n) / (3.5 * a(t) * Math.pow(t.length, -1 / 3)))
	}

	function m(t, n) {
		var e, r, i = -1,
			o = t.length;
		if (null == n) {
			for (; ++i < o;)
				if (null != (r = t[i]) && r >= r) {
					e = r;
					break
				}
			for (; ++i < o;) null != (r = t[i]) && r > e && (e = r)
		} else {
			for (; ++i < o;)
				if (null != (r = n(t[i], i, t)) && r >= r) {
					e = r;
					break
				}
			for (; ++i < o;) null != (r = n(t[i], i, t)) && r > e && (e = r)
		}
		return e
	}

	function x(t, n) {
		var e, r = 0,
			i = t.length,
			u = -1,
			a = i;
		if (null == n)
			for (; ++u < i;) isNaN(e = o(t[u])) ? --a : r += e;
		else
			for (; ++u < i;) isNaN(e = o(n(t[u], u, t))) ? --a : r += e;
		return a ? r / a : void 0
	}

	function b(t, e) {
		var r, i = [],
			u = t.length,
			a = -1;
		if (null == e)
			for (; ++a < u;) isNaN(r = o(t[a])) || i.push(r);
		else
			for (; ++a < u;) isNaN(r = o(e(t[a], a, t))) || i.push(r);
		return _(i.sort(n), .5)
	}

	function w(t) {
		for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) u += t[o].length;
		for (e = new Array(u); --i >= 0;)
			for (r = t[i], n = r.length; --n >= 0;) e[--u] = r[n];
		return e
	}

	function M(t, n) {
		var e, r, i = -1,
			o = t.length;
		if (null == n) {
			for (; ++i < o;)
				if (null != (r = t[i]) && r >= r) {
					e = r;
					break
				}
			for (; ++i < o;) null != (r = t[i]) && e > r && (e = r)
		} else {
			for (; ++i < o;)
				if (null != (r = n(t[i], i, t)) && r >= r) {
					e = r;
					break
				}
			for (; ++i < o;) null != (r = n(t[i], i, t)) && e > r && (e = r)
		}
		return e
	}

	function T(t) {
		for (var n = 0, e = t.length - 1, r = t[0], i = new Array(0 > e ? 0 : e); e > n;) i[n] = [r, r = t[++n]];
		return i
	}

	function k(t, n) {
		for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
		return r
	}

	function N(t, e) {
		if (r = t.length) {
			var r, i, o = 0,
				u = 0,
				a = t[u];
			for (e || (e = n); ++o < r;)(e(i = t[o], a) < 0 || 0 !== e(a, a)) && (a = i, u = o);
			return 0 === e(a, a) ? u : void 0
		}
	}

	function S(t, n, e) {
		for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
		return t
	}

	function A(t, n) {
		var e, r = 0,
			i = t.length,
			o = -1;
		if (null == n)
			for (; ++o < i;)(e = +t[o]) && (r += e);
		else
			for (; ++o < i;)(e = +n(t[o], o, t)) && (r += e);
		return r
	}

	function E(t) {
		if (!(i = t.length)) return [];
		for (var n = -1, e = M(t, C), r = new Array(e); ++n < e;)
			for (var i, o = -1, u = r[n] = new Array(i); ++o < i;) u[o] = t[o][n];
		return r
	}

	function C(t) {
		return t.length
	}

	function z() {
		return E(arguments)
	}

	function P() {}

	function L(t, n) {
		var e = new P;
		if (t instanceof P) t.each(function(t, n) {
			e.set(n, t)
		});
		else if (Array.isArray(t)) {
			var r, i = -1,
				o = t.length;
			if (null == n)
				for (; ++i < o;) e.set(i, t[i]);
			else
				for (; ++i < o;) e.set(n(r = t[i], i, t), r)
		} else if (t)
			for (var u in t) e.set(u, t[u]);
		return e
	}

	function q() {
		function t(n, i, u, a) {
			if (i >= o.length) return null != r ? r(n) : null != e ? n.sort(e) : n;
			for (var c, s, f, l = -1, h = n.length, p = o[i++], d = L(), v = u(); ++l < h;)(f = d.get(c = p(s = n[l]) + "")) ? f.push(s) : d.set(c, [s]);
			return d.each(function(n, e) {
				a(v, e, t(n, i, u, a))
			}), v
		}

		function n(t, e) {
			if (++e > o.length) return t;
			var i, a = u[e - 1];
			return null != r && e >= o.length ? i = t.entries() : (i = [], t.each(function(t, r) {
				i.push({
					key: r,
					values: n(t, e)
				})
			})), null != a ? i.sort(function(t, n) {
				return a(t.key, n.key)
			}) : i
		}
		var e, r, i, o = [],
			u = [];
		return i = {
			object: function(n) {
				return t(n, 0, U, R)
			},
			map: function(n) {
				return t(n, 0, D, O)
			},
			entries: function(e) {
				return n(t(e, 0, D, O), 0)
			},
			key: function(t) {
				return o.push(t), i
			},
			sortKeys: function(t) {
				return u[o.length - 1] = t, i
			},
			sortValues: function(t) {
				return e = t, i
			},
			rollup: function(t) {
				return r = t, i
			}
		}
	}

	function U() {
		return {}
	}

	function R(t, n, e) {
		t[n] = e
	}

	function D() {
		return L()
	}

	function O(t, n, e) {
		t.set(n, e)
	}

	function F() {}

	function I(t, n) {
		var e = new F;
		if (t instanceof F) t.each(function(t) {
			e.add(t)
		});
		else if (t) {
			var r = -1,
				i = t.length;
			if (null == n)
				for (; ++r < i;) e.add(t[r]);
			else
				for (; ++r < i;) e.add(n(t[r], r, t))
		}
		return e
	}

	function Y(t) {
		var n = [];
		for (var e in t) n.push(e);
		return n
	}

	function B(t) {
		var n = [];
		for (var e in t) n.push(t[e]);
		return n
	}

	function j(t) {
		var n = [];
		for (var e in t) n.push({
			key: e,
			value: t[e]
		});
		return n
	}

	function H(t, n) {
		return t = null == t ? 0 : +t, n = null == n ? 1 : +n, 1 === arguments.length ? (n = t, t = 0) : n -= t,
			function() {
				return Math.random() * n + t
			}
	}

	function X(t, n) {
		var e, r;
		return t = null == t ? 0 : +t, n = null == n ? 1 : +n,
			function() {
				var i;
				if (null != e) i = e, e = null;
				else
					do e = 2 * Math.random() - 1, i = 2 * Math.random() - 1, r = e * e + i * i; while (!r || r > 1);
				return t + n * i * Math.sqrt(-2 * Math.log(r) / r)
			}
	}

	function V() {
		var t = X.apply(this, arguments);
		return function() {
			return Math.exp(t())
		}
	}

	function W(t) {
		return function() {
			for (var n = 0, e = 0; t > e; ++e) n += Math.random();
			return n
		}
	}

	function $(t) {
		var n = W(t);
		return function() {
			return n() / t
		}
	}

	function Z(t) {
		return function() {
			return -Math.log(1 - Math.random()) / t
		}
	}

	function G(t) {
		return +t
	}

	function J(t) {
		return t * t
	}

	function Q(t) {
		return t * (2 - t)
	}

	function K(t) {
		return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
	}

	function tt(t) {
		return t * t * t
	}

	function nt(t) {
		return --t * t * t + 1
	}

	function et(t) {
		return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
	}

	function rt(t) {
		return 1 - Math.cos(t * Sd)
	}

	function it(t) {
		return Math.sin(t * Sd)
	}

	function ot(t) {
		return (1 - Math.cos(Nd * t)) / 2
	}

	function ut(t) {
		return Math.pow(2, 10 * t - 10)
	}

	function at(t) {
		return 1 - Math.pow(2, -10 * t)
	}

	function ct(t) {
		return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
	}

	function st(t) {
		return 1 - Math.sqrt(1 - t * t)
	}

	function ft(t) {
		return Math.sqrt(1 - --t * t)
	}

	function lt(t) {
		return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
	}

	function ht(t) {
		return 1 - pt(1 - t)
	}

	function pt(t) {
		return (t = +t) < Ad ? Dd * t * t : Cd > t ? Dd * (t -= Ed) * t + zd : Ld > t ? Dd * (t -= Pd) * t + qd : Dd * (t -= Ud) * t + Rd
	}

	function dt(t) {
		return ((t *= 2) <= 1 ? 1 - pt(1 - t) : pt(t - 1) + 1) / 2
	}

	function vt(t) {
		for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
		return o / 2
	}

	function _t(t) {
		for (var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0; ++r < i;) n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
		return c *= 3, [o / c, u / c]
	}

	function yt(t, n, e) {
		return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
	}

	function gt(t, n) {
		return t[0] - n[0] || t[1] - n[1]
	}

	function mt(t) {
		for (var n = t.length, e = [0, 1], r = 2, i = 2; n > i; ++i) {
			for (; r > 1 && yt(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
			e[r++] = i
		}
		return e.slice(0, r)
	}

	function xt(t) {
		if ((e = t.length) < 3) return null;
		var n, e, r = new Array(e),
			i = new Array(e);
		for (n = 0; e > n; ++n) r[n] = [+t[n][0], +t[n][1], n];
		for (r.sort(gt), n = 0; e > n; ++n) i[n] = [r[n][0], -r[n][1]];
		var o = mt(r),
			u = mt(i),
			a = u[0] === o[0],
			c = u[u.length - 1] === o[o.length - 1],
			s = [];
		for (n = o.length - 1; n >= 0; --n) s.push(t[r[o[n]][2]]);
		for (n = +a; n < u.length - c; ++n) s.push(t[r[u[n]][2]]);
		return s
	}

	function bt(t, n) {
		for (var e, r, i = t.length, o = t[i - 1], u = n[0], a = n[1], c = o[0], s = o[1], f = !1, l = 0; i > l; ++l) o = t[l], e = o[0], r = o[1], r > a != s > a && (c - e) * (a - r) / (s - r) + e > u && (f = !f), c = e, s = r;
		return f
	}

	function wt(t) {
		for (var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0; ++r < i;) n = u, e = a, o = t[r], u = o[0], a = o[1], n -= u, e -= a, c += Math.sqrt(n * n + e * e);
		return c
	}

	function Mt() {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = []
	}

	function Tt() {
		return new Mt
	}

	function kt(t) {
		var n = +this._x.call(null, t),
			e = +this._y.call(null, t);
		return Nt(this.cover(n, e), n, e, t)
	}

	function Nt(t, n, e, r) {
		if (isNaN(n) || isNaN(e)) return t;
		var i, o, u, a, c, s, f, l, h, p = t._root,
			d = {
				data: r
			},
			v = t._x0,
			_ = t._y0,
			y = t._x1,
			g = t._y1;
		if (!p) return t._root = d, t;
		for (; p.length;)
			if ((s = n >= (o = (v + y) / 2)) ? v = o : y = o, (f = e >= (u = (_ + g) / 2)) ? _ = u : g = u, i = p, !(p = p[l = f << 1 | s])) return i[l] = d, t;
		if (a = +t._x.call(null, p.data), c = +t._y.call(null, p.data), n === a && e === c) return d.next = p, i ? i[l] = d : t._root = d, t;
		do i = i ? i[l] = new Array(4) : t._root = new Array(4), (s = n >= (o = (v + y) / 2)) ? v = o : y = o, (f = e >= (u = (_ + g) / 2)) ? _ = u : g = u; while ((l = f << 1 | s) === (h = (c >= u) << 1 | a >= o));
		return i[h] = p, i[l] = d, t
	}

	function St(t) {
		var n, e, r, i, o = t.length,
			u = new Array(o),
			a = new Array(o),
			c = 1 / 0,
			s = 1 / 0,
			f = -(1 / 0),
			l = -(1 / 0);
		for (e = 0; o > e; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (u[e] = r, a[e] = i, c > r && (c = r), r > f && (f = r), s > i && (s = i), i > l && (l = i));
		for (c > f && (c = this._x0, f = this._x1), s > l && (s = this._y0, l = this._y1), this.cover(c, s).cover(f, l), e = 0; o > e; ++e) Nt(this, u[e], a[e], t[e]);
		return this
	}

	function At(t, n) {
		if (isNaN(t = +t) || isNaN(n = +n)) return this;
		var e = this._x0,
			r = this._y0,
			i = this._x1,
			o = this._y1;
		if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
		else {
			if (!(e > t || t > i || r > n || n > o)) return this;
			var u, a, c = i - e,
				s = this._root;
			switch (a = ((r + o) / 2 > n) << 1 | (e + i) / 2 > t) {
				case 0:
					do u = new Array(4), u[a] = s, s = u; while (c *= 2, i = e + c, o = r + c, t > i || n > o);
					break;
				case 1:
					do u = new Array(4), u[a] = s, s = u; while (c *= 2, e = i - c, o = r + c, e > t || n > o);
					break;
				case 2:
					do u = new Array(4), u[a] = s, s = u; while (c *= 2, i = e + c, r = o - c, t > i || r > n);
					break;
				case 3:
					do u = new Array(4), u[a] = s, s = u; while (c *= 2, e = i - c, r = o - c, e > t || r > n)
			}
			this._root && this._root.length && (this._root = s)
		}
		return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
	}

	function Et() {
		var t = [];
		return this.visit(function(n) {
			if (!n.length)
				do t.push(n.data); while (n = n.next)
		}), t
	}

	function Ct(t) {
		return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
			[this._x0, this._y0],
			[this._x1, this._y1]
		]
	}

	function zt(t, n, e, r, i) {
		this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
	}

	function Pt(t, n, e) {
		var r, i, o, u, a, c, s, f = this._x0,
			l = this._y0,
			h = this._x1,
			p = this._y1,
			d = [],
			v = this._root;
		for (v && d.push(new zt(v, f, l, h, p)), null == e ? e = 1 / 0 : (f = t - e, l = n - e, h = t + e, p = n + e, e *= e); c = d.pop();)
			if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > p || (u = c.x1) < f || (a = c.y1) < l))
				if (v.length) {
					var _ = (i + u) / 2,
						y = (o + a) / 2;
					d.push(new zt(v[3], _, y, u, a), new zt(v[2], i, y, _, a), new zt(v[1], _, o, u, y), new zt(v[0], i, o, _, y)), (s = (n >= y) << 1 | t >= _) && (c = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - s], d[d.length - 1 - s] = c)
				} else {
					var g = t - +this._x.call(null, v.data),
						m = n - +this._y.call(null, v.data),
						x = g * g + m * m;
					if (e > x) {
						var b = Math.sqrt(e = x);
						f = t - b, l = n - b, h = t + b, p = n + b, r = v.data
					}
				}
		return r
	}

	function Lt(t) {
		if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t))) return this;
		var n, e, r, i, o, u, a, c, s, f, l, h, p = this._root,
			d = this._x0,
			v = this._y0,
			_ = this._x1,
			y = this._y1;
		if (!p) return this;
		if (p.length)
			for (;;) {
				if ((s = o >= (a = (d + _) / 2)) ? d = a : _ = a, (f = u >= (c = (v + y) / 2)) ? v = c : y = c, n = p, !(p = p[l = f << 1 | s])) return this;
				if (!p.length) break;
				(n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
			}
		for (; p.data !== t;)
			if (r = p, !(p = p.next)) return this;
		return (i = p.next) && delete p.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (p = n[0] || n[1] || n[2] || n[3]) && p === (n[3] || n[2] || n[1] || n[0]) && !p.length && (e ? e[h] = p : this._root = p), this) : (this._root = i, this)
	}

	function qt(t) {
		for (var n = 0, e = t.length; e > n; ++n) this.remove(t[n]);
		return this
	}

	function Ut() {
		return this._root
	}

	function Rt() {
		var t = 0;
		return this.visit(function(n) {
			if (!n.length)
				do ++t; while (n = n.next)
		}), t
	}

	function Dt(t) {
		var n, e, r, i, o, u, a = [],
			c = this._root;
		for (c && a.push(new zt(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)
			if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && c.length) {
				var s = (r + o) / 2,
					f = (i + u) / 2;
				(e = c[3]) && a.push(new zt(e, s, f, o, u)), (e = c[2]) && a.push(new zt(e, r, f, s, u)), (e = c[1]) && a.push(new zt(e, s, i, o, f)), (e = c[0]) && a.push(new zt(e, r, i, s, f))
			}
		return this
	}

	function Ot(t) {
		var n, e = [],
			r = [];
		for (this._root && e.push(new zt(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
			var i = n.node;
			if (i.length) {
				var o, u = n.x0,
					a = n.y0,
					c = n.x1,
					s = n.y1,
					f = (u + c) / 2,
					l = (a + s) / 2;
				(o = i[0]) && e.push(new zt(o, u, a, f, l)), (o = i[1]) && e.push(new zt(o, f, a, c, l)), (o = i[2]) && e.push(new zt(o, u, l, f, s)), (o = i[3]) && e.push(new zt(o, f, l, c, s))
			}
			r.push(n)
		}
		for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
		return this
	}

	function Ft(t) {
		return t[0]
	}

	function It(t) {
		return arguments.length ? (this._x = t, this) : this._x
	}

	function Yt(t) {
		return t[1]
	}

	function Bt(t) {
		return arguments.length ? (this._y = t, this) : this._y
	}

	function jt(t, n, e) {
		var r = new Ht(null == n ? Ft : n, null == e ? Yt : e, NaN, NaN, NaN, NaN);
		return null == t ? r : r.addAll(t)
	}

	function Ht(t, n, e, r, i, o) {
		this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0
	}

	function Xt(t) {
		for (var n = {
				data: t.data
			}, e = n; t = t.next;) e = e.next = {
			data: t.data
		};
		return n
	}

	function Vt(t) {
		if (!(t >= 1)) throw new Error;
		this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
	}

	function Wt(t) {
		if (!t._start) try {
			$t(t)
		} catch (n) {
			t._tasks[t._ended + t._active - 1] && Gt(t, n)
		}
	}

	function $t(t) {
		for (; t._start = t._waiting && t._active < t._size;) {
			var n = t._ended + t._active,
				e = t._tasks[n],
				r = e.length - 1,
				i = e[r];
			e[r] = Zt(t, n), --t._waiting, ++t._active, e = i.apply(null, e), t._tasks[n] && (t._tasks[n] = e || tv)
		}
	}

	function Zt(t, n) {
		return function(e, r) {
			t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? Gt(t, e) : (t._data[n] = r, t._waiting ? Wt(t) : Jt(t))))
		}
	}

	function Gt(t, n) {
		var e, r = t._tasks.length;
		for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;)
			if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort)) try {
				e.abort()
			} catch (n) {}
			t._active = NaN, Jt(t)
	}

	function Jt(t) {
		!t._active && t._call && t._call(t._error, t._data)
	}

	function Qt(t) {
		return new Vt(arguments.length ? +t : 1 / 0)
	}

	function Kt(t) {
		return function() {
			return t
		}
	}

	function tn(t) {
		return t.innerRadius
	}

	function nn(t) {
		return t.outerRadius
	}

	function en(t) {
		return t.startAngle
	}

	function rn(t) {
		return t.endAngle
	}

	function on(t) {
		return t && t.padAngle
	}

	function un(t) {
		return t >= 1 ? rv : -1 >= t ? -rv : Math.asin(t)
	}

	function an(t, n, e, r, i, o, u, a) {
		var c = e - t,
			s = r - n,
			f = u - i,
			l = a - o,
			h = (f * (n - o) - l * (t - i)) / (l * c - f * s);
		return [t + h * c, n + h * s]
	}

	function cn(t, n, e, r, i, o, u) {
		var a = t - e,
			c = n - r,
			s = (u ? o : -o) / Math.sqrt(a * a + c * c),
			f = s * c,
			l = -s * a,
			h = t + f,
			p = n + l,
			d = e + f,
			v = r + l,
			_ = (h + d) / 2,
			y = (p + v) / 2,
			g = d - h,
			m = v - p,
			x = g * g + m * m,
			b = i - o,
			w = h * v - d * p,
			M = (0 > m ? -1 : 1) * Math.sqrt(Math.max(0, b * b * x - w * w)),
			T = (w * m - g * M) / x,
			k = (-w * g - m * M) / x,
			N = (w * m + g * M) / x,
			S = (-w * g + m * M) / x,
			A = T - _,
			E = k - y,
			C = N - _,
			z = S - y;
		return A * A + E * E > C * C + z * z && (T = N, k = S), {
			cx: T,
			cy: k,
			x01: -f,
			y01: -l,
			x11: T * (i / b - 1),
			y11: k * (i / b - 1)
		}
	}

	function sn() {
		function t() {
			var t, s, f = +n.apply(this, arguments),
				l = +e.apply(this, arguments),
				h = o.apply(this, arguments) - rv,
				p = u.apply(this, arguments) - rv,
				d = Math.abs(p - h),
				v = p > h;
			if (c || (c = t = Tt()), f > l && (s = l, l = f, f = s), l > nv)
				if (d > iv - nv) c.moveTo(l * Math.cos(h), l * Math.sin(h)), c.arc(0, 0, l, h, p, !v), f > nv && (c.moveTo(f * Math.cos(p), f * Math.sin(p)), c.arc(0, 0, f, p, h, v));
				else {
					var _, y, g = h,
						m = p,
						x = h,
						b = p,
						w = d,
						M = d,
						T = a.apply(this, arguments) / 2,
						k = T > nv && (i ? +i.apply(this, arguments) : Math.sqrt(f * f + l * l)),
						N = Math.min(Math.abs(l - f) / 2, +r.apply(this, arguments)),
						S = N,
						A = N;
					if (k > nv) {
						var E = un(k / f * Math.sin(T)),
							C = un(k / l * Math.sin(T));
						(w -= 2 * E) > nv ? (E *= v ? 1 : -1, x += E, b -= E) : (w = 0, x = b = (h + p) / 2), (M -= 2 * C) > nv ? (C *= v ? 1 : -1, g += C, m -= C) : (M = 0, g = m = (h + p) / 2)
					}
					var z = l * Math.cos(g),
						P = l * Math.sin(g),
						L = f * Math.cos(b),
						q = f * Math.sin(b);
					if (N > nv) {
						var U = l * Math.cos(m),
							R = l * Math.sin(m),
							D = f * Math.cos(x),
							O = f * Math.sin(x);
						if (ev > d) {
							var F = w > nv ? an(z, P, D, O, U, R, L, q) : [L, q],
								I = z - F[0],
								Y = P - F[1],
								B = U - F[0],
								j = R - F[1],
								H = 1 / Math.sin(Math.acos((I * B + Y * j) / (Math.sqrt(I * I + Y * Y) * Math.sqrt(B * B + j * j))) / 2),
								X = Math.sqrt(F[0] * F[0] + F[1] * F[1]);
							S = Math.min(N, (f - X) / (H - 1)), A = Math.min(N, (l - X) / (H + 1))
						}
					}
					M > nv ? A > nv ? (_ = cn(D, O, z, P, l, A, v), y = cn(U, R, L, q, l, A, v), c.moveTo(_.cx + _.x01, _.cy + _.y01), N > A ? c.arc(_.cx, _.cy, A, Math.atan2(_.y01, _.x01), Math.atan2(y.y01, y.x01), !v) : (c.arc(_.cx, _.cy, A, Math.atan2(_.y01, _.x01), Math.atan2(_.y11, _.x11), !v), c.arc(0, 0, l, Math.atan2(_.cy + _.y11, _.cx + _.x11), Math.atan2(y.cy + y.y11, y.cx + y.x11), !v), c.arc(y.cx, y.cy, A, Math.atan2(y.y11, y.x11), Math.atan2(y.y01, y.x01), !v))) : (c.moveTo(z, P), c.arc(0, 0, l, g, m, !v)) : c.moveTo(z, P), f > nv && w > nv ? S > nv ? (_ = cn(L, q, U, R, f, -S, v), y = cn(z, P, D, O, f, -S, v), c.lineTo(_.cx + _.x01, _.cy + _.y01), N > S ? c.arc(_.cx, _.cy, S, Math.atan2(_.y01, _.x01), Math.atan2(y.y01, y.x01), !v) : (c.arc(_.cx, _.cy, S, Math.atan2(_.y01, _.x01), Math.atan2(_.y11, _.x11), !v), c.arc(0, 0, f, Math.atan2(_.cy + _.y11, _.cx + _.x11), Math.atan2(y.cy + y.y11, y.cx + y.x11), v), c.arc(y.cx, y.cy, S, Math.atan2(y.y11, y.x11), Math.atan2(y.y01, y.x01), !v))) : c.arc(0, 0, f, b, x, v) : c.lineTo(L, q)
				}
			else c.moveTo(0, 0);
			return c.closePath(), t ? (c = null, t + "" || null) : void 0
		}
		var n = tn,
			e = nn,
			r = Kt(0),
			i = null,
			o = en,
			u = rn,
			a = on,
			c = null;
		return t.centroid = function() {
			var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
				r = (+o.apply(this, arguments) + +u.apply(this, arguments)) / 2 - ev / 2;
			return [Math.cos(r) * t, Math.sin(r) * t]
		}, t.innerRadius = function(e) {
			return arguments.length ? (n = "function" == typeof e ? e : Kt(+e), t) : n
		}, t.outerRadius = function(n) {
			return arguments.length ? (e = "function" == typeof n ? n : Kt(+n), t) : e
		}, t.cornerRadius = function(n) {
			return arguments.length ? (r = "function" == typeof n ? n : Kt(+n), t) : r
		}, t.padRadius = function(n) {
			return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : Kt(+n), t) : i
		}, t.startAngle = function(n) {
			return arguments.length ? (o = "function" == typeof n ? n : Kt(+n), t) : o
		}, t.endAngle = function(n) {
			return arguments.length ? (u = "function" == typeof n ? n : Kt(+n), t) : u
		}, t.padAngle = function(n) {
			return arguments.length ? (a = "function" == typeof n ? n : Kt(+n), t) : a
		}, t.context = function(n) {
			return arguments.length ? (c = null == n ? null : n, t) : c
		}, t
	}

	function fn(t) {
		this._context = t
	}

	function ln(t) {
		return new fn(t)
	}

	function hn(t) {
		return t[0]
	}

	function pn(t) {
		return t[1]
	}

	function dn() {
		function t(t) {
			var a, c, s, f = t.length,
				l = !1;
			for (null == i && (u = o(s = Tt())), a = 0; f >= a; ++a) !(f > a && r(c = t[a], a, t)) === l && ((l = !l) ? u.lineStart() : u.lineEnd()), l && u.point(+n(c, a, t), +e(c, a, t));
			return s ? (u = null, s + "" || null) : void 0
		}
		var n = hn,
			e = pn,
			r = Kt(!0),
			i = null,
			o = ln,
			u = null;
		return t.x = function(e) {
			return arguments.length ? (n = "function" == typeof e ? e : Kt(+e), t) : n
		}, t.y = function(n) {
			return arguments.length ? (e = "function" == typeof n ? n : Kt(+n), t) : e
		}, t.defined = function(n) {
			return arguments.length ? (r = "function" == typeof n ? n : Kt(!!n), t) : r
		}, t.curve = function(n) {
			return arguments.length ? (o = n, null != i && (u = o(i)), t) : o
		}, t.context = function(n) {
			return arguments.length ? (null == n ? i = u = null : u = o(i = n), t) : i
		}, t
	}

	function vn() {
		function t(t) {
			var n, f, l, h, p, d = t.length,
				v = !1,
				_ = new Array(d),
				y = new Array(d);
			for (null == a && (s = c(p = Tt())), n = 0; d >= n; ++n) {
				if (!(d > n && u(h = t[n], n, t)) === v)
					if (v = !v) f = n, s.areaStart(), s.lineStart();
					else {
						for (s.lineEnd(), s.lineStart(), l = n - 1; l >= f; --l) s.point(_[l], y[l]);
						s.lineEnd(), s.areaEnd()
					}
				v && (_[n] = +e(h, n, t), y[n] = +i(h, n, t), s.point(r ? +r(h, n, t) : _[n], o ? +o(h, n, t) : y[n]))
			}
			return p ? (s = null, p + "" || null) : void 0
		}

		function n() {
			return dn().defined(u).curve(c).context(a)
		}
		var e = hn,
			r = null,
			i = Kt(0),
			o = pn,
			u = Kt(!0),
			a = null,
			c = ln,
			s = null;
		return t.x = function(n) {
			return arguments.length ? (e = "function" == typeof n ? n : Kt(+n), r = null, t) : e
		}, t.x0 = function(n) {
			return arguments.length ? (e = "function" == typeof n ? n : Kt(+n), t) : e
		}, t.x1 = function(n) {
			return arguments.length ? (r = null == n ? null : "function" == typeof n ? n : Kt(+n), t) : r
		}, t.y = function(n) {
			return arguments.length ? (i = "function" == typeof n ? n : Kt(+n), o = null, t) : i
		}, t.y0 = function(n) {
			return arguments.length ? (i = "function" == typeof n ? n : Kt(+n), t) : i
		}, t.y1 = function(n) {
			return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : Kt(+n), t) : o
		}, t.lineX0 = t.lineY0 = function() {
			return n().x(e).y(i)
		}, t.lineY1 = function() {
			return n().x(e).y(o)
		}, t.lineX1 = function() {
			return n().x(r).y(i)
		}, t.defined = function(n) {
			return arguments.length ? (u = "function" == typeof n ? n : Kt(!!n), t) : u
		}, t.curve = function(n) {
			return arguments.length ? (c = n, null != a && (s = c(a)), t) : c
		}, t.context = function(n) {
			return arguments.length ? (null == n ? a = s = null : s = c(a = n), t) : a
		}, t
	}

	function _n(t, n) {
		return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
	}

	function yn(t) {
		return t
	}

	function gn() {
		function t(t) {
			var a, c, s, f, l, h = t.length,
				p = 0,
				d = new Array(h),
				v = new Array(h),
				_ = +i.apply(this, arguments),
				y = Math.min(iv, Math.max(-iv, o.apply(this, arguments) - _)),
				g = Math.min(Math.abs(y) / h, u.apply(this, arguments)),
				m = g * (0 > y ? -1 : 1);
			for (a = 0; h > a; ++a)(l = v[d[a] = a] = +n(t[a], a, t)) > 0 && (p += l);
			for (null != e ? d.sort(function(t, n) {
					return e(v[t], v[n])
				}) : null != r && d.sort(function(n, e) {
					return r(t[n], t[e])
				}), a = 0, s = p ? (y - h * m) / p : 0; h > a; ++a, _ = f) c = d[a], l = v[c], f = _ + (l > 0 ? l * s : 0) + m, v[c] = {
				data: t[c],
				index: a,
				value: l,
				startAngle: _,
				endAngle: f,
				padAngle: g
			};
			return v
		}
		var n = yn,
			e = _n,
			r = null,
			i = Kt(0),
			o = Kt(iv),
			u = Kt(0);
		return t.value = function(e) {
			return arguments.length ? (n = "function" == typeof e ? e : Kt(+e), t) : n
		}, t.sortValues = function(n) {
			return arguments.length ? (e = n, r = null, t) : e
		}, t.sort = function(n) {
			return arguments.length ? (r = n, e = null, t) : r
		}, t.startAngle = function(n) {
			return arguments.length ? (i = "function" == typeof n ? n : Kt(+n), t) : i
		}, t.endAngle = function(n) {
			return arguments.length ? (o = "function" == typeof n ? n : Kt(+n), t) : o
		}, t.padAngle = function(n) {
			return arguments.length ? (u = "function" == typeof n ? n : Kt(+n), t) : u
		}, t
	}

	function mn(t) {
		this._curve = t
	}

	function xn(t) {
		function n(n) {
			return new mn(t(n))
		}
		return n._curve = t, n
	}

	function bn(t) {
		var n = t.curve;
		return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) {
			return arguments.length ? n(xn(t)) : n()._curve
		}, t
	}

	function wn() {
		return bn(dn().curve(ov))
	}

	function Mn() {
		var t = vn().curve(ov),
			n = t.curve,
			e = t.lineX0,
			r = t.lineX1,
			i = t.lineY0,
			o = t.lineY1;
		return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
			return bn(e())
		}, delete t.lineX0, t.lineEndAngle = function() {
			return bn(r())
		}, delete t.lineX1, t.lineInnerRadius = function() {
			return bn(i())
		}, delete t.lineY0, t.lineOuterRadius = function() {
			return bn(o())
		}, delete t.lineY1, t.curve = function(t) {
			return arguments.length ? n(xn(t)) : n()._curve
		}, t
	}

	function Tn() {
		function t() {
			var t;
			return r || (r = t = Tt()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t ? (r = null, t + "" || null) : void 0
		}
		var n = Kt(uv),
			e = Kt(64),
			r = null;
		return t.type = function(e) {
			return arguments.length ? (n = "function" == typeof e ? e : Kt(e), t) : n
		}, t.size = function(n) {
			return arguments.length ? (e = "function" == typeof n ? n : Kt(+n), t) : e
		}, t.context = function(n) {
			return arguments.length ? (r = null == n ? null : n, t) : r
		}, t
	}

	function kn() {}

	function Nn(t, n, e) {
		t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
	}

	function Sn(t) {
		this._context = t
	}

	function An(t) {
		return new Sn(t)
	}

	function En(t) {
		this._context = t
	}

	function Cn(t) {
		return new En(t)
	}

	function zn(t) {
		this._context = t
	}

	function Pn(t) {
		return new zn(t)
	}

	function Ln(t, n) {
		this._basis = new Sn(t), this._beta = n
	}

	function qn(t, n, e) {
		t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
	}

	function Un(t, n) {
		this._context = t, this._k = (1 - n) / 6
	}

	function Rn(t, n) {
		this._context = t, this._k = (1 - n) / 6
	}

	function Dn(t, n) {
		this._context = t, this._k = (1 - n) / 6
	}

	function On(t, n, e) {
		var r = t._x1,
			i = t._y1,
			o = t._x2,
			u = t._y2;
		if (t._l01_a > nv) {
			var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
				c = 3 * t._l01_a * (t._l01_a + t._l12_a);
			r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
		}
		if (t._l23_a > nv) {
			var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
				f = 3 * t._l23_a * (t._l23_a + t._l12_a);
			o = (o * s + t._x1 * t._l23_2a - n * t._l12_2a) / f, u = (u * s + t._y1 * t._l23_2a - e * t._l12_2a) / f
		}
		t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
	}

	function Fn(t, n) {
		this._context = t, this._alpha = n
	}

	function In(t, n) {
		this._context = t, this._alpha = n
	}

	function Yn(t, n) {
		this._context = t, this._alpha = n
	}

	function Bn(t) {
		this._context = t
	}

	function jn(t) {
		return new Bn(t)
	}

	function Hn(t) {
		return 0 > t ? -1 : 1
	}

	function Xn(t, n, e) {
		var r = t._x1 - t._x0,
			i = n - t._x1,
			o = (t._y1 - t._y0) / (r || 0 > i && -0),
			u = (e - t._y1) / (i || 0 > r && -0),
			a = (o * i + u * r) / (r + i);
		return (Hn(o) + Hn(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0
	}

	function Vn(t, n) {
		var e = t._x1 - t._x0;
		return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
	}

	function Wn(t, n, e) {
		var r = t._x0,
			i = t._y0,
			o = t._x1,
			u = t._y1,
			a = (o - r) / 3;
		t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
	}

	function $n(t) {
		this._context = t
	}

	function Zn(t) {
		this._context = new Gn(t)
	}

	function Gn(t) {
		this._context = t
	}

	function Jn(t) {
		return new $n(t)
	}

	function Qn(t) {
		return new Zn(t)
	}

	function Kn(t) {
		this._context = t
	}

	function te(t) {
		var n, e, r = t.length - 1,
			i = new Array(r),
			o = new Array(r),
			u = new Array(r);
		for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; r - 1 > n; ++n) i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
		for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; r > n; ++n) e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
		for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (u[n] - i[n + 1]) / o[n];
		for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; r - 1 > n; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
		return [i, o]
	}

	function ne(t) {
		return new Kn(t)
	}

	function ee(t, n) {
		this._context = t, this._t = n
	}

	function re(t) {
		return new ee(t, .5)
	}

	function ie(t) {
		return new ee(t, 0)
	}

	function oe(t) {
		return new ee(t, 1)
	}

	function ue(t, n) {
		if ((r = t.length) > 1)
			for (var e, r, i = 1, o = t[n[0]], u = o.length; r > i; ++i) {
				e = o, o = t[n[i]];
				for (var a = 0; u > a; ++a) o[a][1] += o[a][0] = isNaN(e[a][1]) ? e[a][0] : e[a][1]
			}
	}

	function ae(t) {
		for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
		return e
	}

	function ce(t, n) {
		return t[n]
	}

	function se() {
		function t(t) {
			var o, u, a = n.apply(this, arguments),
				c = t.length,
				s = a.length,
				f = new Array(s);
			for (o = 0; s > o; ++o) {
				for (var l, h = a[o], p = f[o] = new Array(c), d = 0; c > d; ++d) p[d] = l = [0, +i(t[d], h, d, t)], l.data = t[d];
				p.key = h
			}
			for (o = 0, u = e(f); s > o; ++o) f[u[o]].index = o;
			return r(f, u), f
		}
		var n = Kt([]),
			e = ae,
			r = ue,
			i = ce;
		return t.keys = function(e) {
			return arguments.length ? (n = "function" == typeof e ? e : Kt(Pv.call(e)), t) : n
		}, t.value = function(n) {
			return arguments.length ? (i = "function" == typeof n ? n : Kt(+n), t) : i
		}, t.order = function(n) {
			return arguments.length ? (e = null == n ? ae : "function" == typeof n ? n : Kt(Pv.call(n)), t) : e
		}, t.offset = function(n) {
			return arguments.length ? (r = null == n ? ue : n, t) : r
		}, t
	}

	function fe(t, n) {
		if ((r = t.length) > 0) {
			for (var e, r, i, o = 0, u = t[0].length; u > o; ++o) {
				for (i = e = 0; r > e; ++e) i += t[e][o][1] || 0;
				if (i)
					for (e = 0; r > e; ++e) t[e][o][1] /= i
			}
			ue(t, n)
		}
	}

	function le(t, n) {
		if ((e = t.length) > 0) {
			for (var e, r = 0, i = t[n[0]], o = i.length; o > r; ++r) {
				for (var u = 0, a = 0; e > u; ++u) a += t[u][r][1] || 0;
				i[r][1] += i[r][0] = -a / 2
			}
			ue(t, n)
		}
	}

	function he(t, n) {
		if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
			for (var e, r, i, o = 0, u = 1; r > u; ++u) {
				for (var a = 0, c = 0, s = 0; i > a; ++a) {
					for (var f = t[n[a]], l = f[u][1] || 0, h = f[u - 1][1] || 0, p = (l - h) / 2, d = 0; a > d; ++d) {
						var v = t[n[d]],
							_ = v[u][1] || 0,
							y = v[u - 1][1] || 0;
						p += _ - y
					}
					c += l, s += p * l
				}
				e[u - 1][1] += e[u - 1][0] = o, c && (o -= s / c)
			}
			e[u - 1][1] += e[u - 1][0] = o, ue(t, n)
		}
	}

	function pe(t) {
		var n = t.map(de);
		return ae(t).sort(function(t, e) {
			return n[t] - n[e]
		})
	}

	function de(t) {
		for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
		return e
	}

	function ve(t) {
		return pe(t).reverse()
	}

	function _e(t) {
		var n, e, r = t.length,
			i = t.map(de),
			o = ae(t).sort(function(t, n) {
				return i[n] - i[t]
			}),
			u = 0,
			a = 0,
			c = [],
			s = [];
		for (n = 0; r > n; ++n) e = o[n], a > u ? (u += i[e], c.push(e)) : (a += i[e], s.push(e));
		return s.reverse().concat(c)
	}

	function ye(t) {
		return ae(t).reverse()
	}

	function ge(t, n, e) {
		t.prototype = n.prototype = e, e.constructor = t
	}

	function me(t, n) {
		var e = Object.create(t.prototype);
		for (var r in n) e[r] = n[r];
		return e
	}

	function xe() {}

	function be(t) {
		var n;
		return t = (t + "").trim().toLowerCase(), (n = Uv.exec(t)) ? (n = parseInt(n[1], 16), new Ne(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Rv.exec(t)) ? we(parseInt(n[1], 16)) : (n = Dv.exec(t)) ? new Ne(n[1], n[2], n[3], 1) : (n = Ov.exec(t)) ? new Ne(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Fv.exec(t)) ? Me(n[1], n[2], n[3], n[4]) : (n = Iv.exec(t)) ? Me(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Yv.exec(t)) ? Se(n[1], n[2] / 100, n[3] / 100, 1) : (n = Bv.exec(t)) ? Se(n[1], n[2] / 100, n[3] / 100, n[4]) : jv.hasOwnProperty(t) ? we(jv[t]) : "transparent" === t ? new Ne(NaN, NaN, NaN, 0) : null
	}

	function we(t) {
		return new Ne(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
	}

	function Me(t, n, e, r) {
		return 0 >= r && (t = n = e = NaN), new Ne(t, n, e, r)
	}

	function Te(t) {
		return t instanceof xe || (t = be(t)), t ? (t = t.rgb(), new Ne(t.r, t.g, t.b, t.opacity)) : new Ne
	}

	function ke(t, n, e, r) {
		return 1 === arguments.length ? Te(t) : new Ne(t, n, e, null == r ? 1 : r)
	}

	function Ne(t, n, e, r) {
		this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
	}

	function Se(t, n, e, r) {
		return 0 >= r ? t = n = e = NaN : 0 >= e || e >= 1 ? t = n = NaN : 0 >= n && (t = NaN), new Ce(t, n, e, r)
	}

	function Ae(t) {
		if (t instanceof Ce) return new Ce(t.h, t.s, t.l, t.opacity);
		if (t instanceof xe || (t = be(t)), !t) return new Ce;
		if (t instanceof Ce) return t;
		t = t.rgb();
		var n = t.r / 255,
			e = t.g / 255,
			r = t.b / 255,
			i = Math.min(n, e, r),
			o = Math.max(n, e, r),
			u = NaN,
			a = o - i,
			c = (o + i) / 2;
		return a ? (u = n === o ? (e - r) / a + 6 * (r > e) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= .5 > c ? o + i : 2 - o - i, u *= 60) : a = c > 0 && 1 > c ? 0 : u, new Ce(u, a, c, t.opacity)
	}

	function Ee(t, n, e, r) {
		return 1 === arguments.length ? Ae(t) : new Ce(t, n, e, null == r ? 1 : r)
	}

	function Ce(t, n, e, r) {
		this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
	}

	function ze(t, n, e) {
		return 255 * (60 > t ? n + (e - n) * t / 60 : 180 > t ? e : 240 > t ? n + (e - n) * (240 - t) / 60 : n)
	}

	function Pe(t) {
		if (t instanceof qe) return new qe(t.l, t.a, t.b, t.opacity);
		if (t instanceof Ye) {
			var n = t.h * Hv;
			return new qe(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
		}
		t instanceof Ne || (t = Te(t));
		var e = Oe(t.r),
			r = Oe(t.g),
			i = Oe(t.b),
			o = Ue((.4124564 * e + .3575761 * r + .1804375 * i) / Wv),
			u = Ue((.2126729 * e + .7151522 * r + .072175 * i) / $v),
			a = Ue((.0193339 * e + .119192 * r + .9503041 * i) / Zv);
		return new qe(116 * u - 16, 500 * (o - u), 200 * (u - a), t.opacity)
	}

	function Le(t, n, e, r) {
		return 1 === arguments.length ? Pe(t) : new qe(t, n, e, null == r ? 1 : r)
	}

	function qe(t, n, e, r) {
		this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
	}

	function Ue(t) {
		return t > Kv ? Math.pow(t, 1 / 3) : t / Qv + Gv
	}

	function Re(t) {
		return t > Jv ? t * t * t : Qv * (t - Gv)
	}

	function De(t) {
		return 255 * (.0031308 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
	}

	function Oe(t) {
		return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
	}

	function Fe(t) {
		if (t instanceof Ye) return new Ye(t.h, t.c, t.l, t.opacity);
		t instanceof qe || (t = Pe(t));
		var n = Math.atan2(t.b, t.a) * Xv;
		return new Ye(0 > n ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
	}

	function Ie(t, n, e, r) {
		return 1 === arguments.length ? Fe(t) : new Ye(t, n, e, null == r ? 1 : r)
	}

	function Ye(t, n, e, r) {
		this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
	}

	function Be(t) {
		if (t instanceof He) return new He(t.h, t.s, t.l, t.opacity);
		t instanceof Ne || (t = Te(t));
		var n = t.r / 255,
			e = t.g / 255,
			r = t.b / 255,
			i = (a_ * r + o_ * n - u_ * e) / (a_ + o_ - u_),
			o = r - i,
			u = (i_ * (e - i) - e_ * o) / r_,
			a = Math.sqrt(u * u + o * o) / (i_ * i * (1 - i)),
			c = a ? Math.atan2(u, o) * Xv - 120 : NaN;
		return new He(0 > c ? c + 360 : c, a, i, t.opacity)
	}

	function je(t, n, e, r) {
		return 1 === arguments.length ? Be(t) : new He(t, n, e, null == r ? 1 : r)
	}

	function He(t, n, e, r) {
		this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
	}

	function Xe(t, n, e, r, i) {
		var o = t * t,
			u = o * t;
		return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
	}

	function Ve(t) {
		var n = t.length - 1;
		return function(e) {
			var r = 0 >= e ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
				i = t[r],
				o = t[r + 1],
				u = r > 0 ? t[r - 1] : 2 * i - o,
				a = n - 1 > r ? t[r + 2] : 2 * o - i;
			return Xe((e - r / n) * n, u, i, o, a)
		}
	}

	function We(t) {
		var n = t.length;
		return function(e) {
			var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
				i = t[(r + n - 1) % n],
				o = t[r % n],
				u = t[(r + 1) % n],
				a = t[(r + 2) % n];
			return Xe((e - r / n) * n, i, o, u, a)
		}
	}

	function $e(t) {
		return function() {
			return t
		}
	}

	function Ze(t, n) {
		return function(e) {
			return t + e * n
		}
	}

	function Ge(t, n, e) {
		return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
			function(r) {
				return Math.pow(t + r * n, e)
			}
	}

	function Je(t, n) {
		var e = n - t;
		return e ? Ze(t, e > 180 || -180 > e ? e - 360 * Math.round(e / 360) : e) : $e(isNaN(t) ? n : t)
	}

	function Qe(t) {
		return 1 === (t = +t) ? Ke : function(n, e) {
			return e - n ? Ge(n, e, t) : $e(isNaN(n) ? e : n)
		}
	}

	function Ke(t, n) {
		var e = n - t;
		return e ? Ze(t, e) : $e(isNaN(t) ? n : t)
	}

	function tr(t) {
		return function(n) {
			var e, r, i = n.length,
				o = new Array(i),
				u = new Array(i),
				a = new Array(i);
			for (e = 0; i > e; ++e) r = ke(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
			return o = t(o), u = t(u), a = t(a), r.opacity = 1,
				function(t) {
					return r.r = o(t), r.g = u(t), r.b = a(t), r + ""
				}
		}
	}

	function nr(t, n) {
		var e, r = n ? n.length : 0,
			i = t ? Math.min(r, t.length) : 0,
			o = new Array(r),
			u = new Array(r);
		for (e = 0; i > e; ++e) o[e] = ar(t[e], n[e]);
		for (; r > e; ++e) u[e] = n[e];
		return function(t) {
			for (e = 0; i > e; ++e) u[e] = o[e](t);
			return u
		}
	}

	function er(t, n) {
		return t = +t, n -= t,
			function(e) {
				return t + n * e
			}
	}

	function rr(t, n) {
		var e, r = {},
			i = {};
		null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {});
		for (e in n) e in t ? r[e] = ar(t[e], n[e]) : i[e] = n[e];
		return function(t) {
			for (e in r) i[e] = r[e](t);
			return i
		}
	}

	function ir(t) {
		return function() {
			return t
		}
	}

	function or(t) {
		return function(n) {
			return t(n) + ""
		}
	}

	function ur(t, n) {
		var e, r, i, o = v_.lastIndex = __.lastIndex = 0,
			u = -1,
			a = [],
			c = [];
		for (t += "", n += "";
			(e = v_.exec(t)) && (r = __.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({
			i: u,
			x: er(e, r)
		})), o = __.lastIndex;
		return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? or(c[0].x) : ir(n) : (n = c.length, function(t) {
			for (var e, r = 0; n > r; ++r) a[(e = c[r]).i] = e.x(t);
			return a.join("")
		})
	}

	function ar(t, n) {
		var e, r = typeof n;
		return null == n || "boolean" === r ? $e(n) : ("number" === r ? er : "string" === r ? (e = be(n)) ? (n = e, h_) : ur : n instanceof be ? h_ : Array.isArray(n) ? nr : rr)(t, n)
	}

	function cr(t, n) {
		return t = +t, n -= t,
			function(e) {
				return Math.round(t + n * e)
			}
	}

	function sr(t, n, e, r, i, o) {
		var u, a, c;
		return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), n * e > t * r && (t = -t, n = -n, c = -c, u = -u), {
			translateX: i,
			translateY: o,
			rotate: Math.atan2(n, t) * y_,
			skewX: Math.atan(c) * y_,
			scaleX: u,
			scaleY: a
		}
	}

	function fr(t) {
		if ("none" === t) return g_;
		c_ || (c_ = document.createElement("DIV"), s_ = document.documentElement, f_ = document.defaultView), c_.style.transform = t, t = f_.getComputedStyle(s_.appendChild(c_), null).getPropertyValue("transform"), s_.removeChild(c_);
		var n = t.slice(7, -1).split(",");
		return sr(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5])
	}

	function lr(t) {
		l_ || (l_ = document.createElementNS("http://www.w3.org/2000/svg", "g")), l_.setAttribute("transform", null == t ? "" : t);
		var n = l_.transform.baseVal.consolidate().matrix;
		return sr(n.a, n.b, n.c, n.d, n.e, n.f)
	}

	function hr(t, n, e, r) {
		function i(t) {
			return t.length ? t.pop() + " " : ""
		}

		function o(t, r, i, o, u, a) {
			if (t !== i || r !== o) {
				var c = u.push("translate(", null, n, null, e);
				a.push({
					i: c - 4,
					x: er(t, i)
				}, {
					i: c - 2,
					x: er(r, o)
				})
			} else(i || o) && u.push("translate(" + i + n + o + e)
		}

		function u(t, n, e, o) {
			t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
				i: e.push(i(e) + "rotate(", null, r) - 2,
				x: er(t, n)
			})) : n && e.push(i(e) + "rotate(" + n + r)
		}

		function a(t, n, e, o) {
			t !== n ? o.push({
				i: e.push(i(e) + "skewX(", null, r) - 2,
				x: er(t, n)
			}) : n && e.push(i(e) + "skewX(" + n + r)
		}

		function c(t, n, e, r, o, u) {
			if (t !== e || n !== r) {
				var a = o.push(i(o) + "scale(", null, ",", null, ")");
				u.push({
					i: a - 4,
					x: er(t, e)
				}, {
					i: a - 2,
					x: er(n, r)
				})
			} else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
		}
		return function(n, e) {
			var r = [],
				i = [];
			return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null,
				function(t) {
					for (var n, e = -1, o = i.length; ++e < o;) r[(n = i[e]).i] = n.x(t);
					return r.join("")
				}
		}
	}

	function pr(t) {
		return ((t = Math.exp(t)) + 1 / t) / 2
	}

	function dr(t) {
		return ((t = Math.exp(t)) - 1 / t) / 2
	}

	function vr(t) {
		return ((t = Math.exp(2 * t)) - 1) / (t + 1)
	}

	function _r(t, n) {
		var e, r, i = t[0],
			o = t[1],
			u = t[2],
			a = n[0],
			c = n[1],
			s = n[2],
			f = a - i,
			l = c - o,
			h = f * f + l * l;
		if (T_ > h) r = Math.log(s / u) / b_, e = function(t) {
			return [i + t * f, o + t * l, u * Math.exp(b_ * t * r)]
		};
		else {
			var p = Math.sqrt(h),
				d = (s * s - u * u + M_ * h) / (2 * u * w_ * p),
				v = (s * s - u * u - M_ * h) / (2 * s * w_ * p),
				_ = Math.log(Math.sqrt(d * d + 1) - d),
				y = Math.log(Math.sqrt(v * v + 1) - v);
			r = (y - _) / b_, e = function(t) {
				var n = t * r,
					e = pr(_),
					a = u / (w_ * p) * (e * vr(b_ * n + _) - dr(_));
				return [i + a * f, o + a * l, u * e / pr(b_ * n + _)]
			}
		}
		return e.duration = 1e3 * r, e
	}

	function yr(t) {
		return function(n, e) {
			var r = t((n = Ee(n)).h, (e = Ee(e)).h),
				i = Ke(n.s, e.s),
				o = Ke(n.l, e.l),
				u = Ke(n.opacity, e.opacity);
			return function(t) {
				return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = u(t), n + ""
			}
		}
	}

	function gr(t, n) {
		var e = Ke((t = Le(t)).l, (n = Le(n)).l),
			r = Ke(t.a, n.a),
			i = Ke(t.b, n.b),
			o = Ke(t.opacity, n.opacity);
		return function(n) {
			return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
		}
	}

	function mr(t) {
		return function(n, e) {
			var r = t((n = Ie(n)).h, (e = Ie(e)).h),
				i = Ke(n.c, e.c),
				o = Ke(n.l, e.l),
				u = Ke(n.opacity, e.opacity);
			return function(t) {
				return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = u(t), n + ""
			}
		}
	}

	function xr(t) {
		return function n(e) {
			function r(n, r) {
				var i = t((n = je(n)).h, (r = je(r)).h),
					o = Ke(n.s, r.s),
					u = Ke(n.l, r.l),
					a = Ke(n.opacity, r.opacity);
				return function(t) {
					return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + ""
				}
			}
			return e = +e, r.gamma = n, r
		}(1)
	}

	function br(t, n) {
		for (var e = new Array(n), r = 0; n > r; ++r) e[r] = t(r / (n - 1));
		return e
	}

	function wr() {
		for (var t, n = 0, e = arguments.length, r = {}; e > n; ++n) {
			if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
			r[t] = []
		}
		return new Mr(r)
	}

	function Mr(t) {
		this._ = t
	}

	function Tr(t, n) {
		return t.trim().split(/^|\s+/).map(function(t) {
			var e = "",
				r = t.indexOf(".");
			if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			return {
				type: t,
				name: e
			}
		})
	}

	function kr(t, n) {
		for (var e, r = 0, i = t.length; i > r; ++r)
			if ((e = t[r]).name === n) return e.value
	}

	function Nr(t, n, e) {
		for (var r = 0, i = t.length; i > r; ++r)
			if (t[r].name === n) {
				t[r] = z_, t = t.slice(0, r).concat(t.slice(r + 1));
				break
			}
		return null != e && t.push({
			name: n,
			value: e
		}), t
	}

	function Sr(t) {
		return new Function("d", "return {" + t.map(function(t, n) {
			return JSON.stringify(t) + ": d[" + n + "]"
		}).join(",") + "}")
	}

	function Ar(t, n) {
		var e = Sr(t);
		return function(r, i) {
			return n(e(r), i, t)
		}
	}

	function Er(t) {
		var n = Object.create(null),
			e = [];
		return t.forEach(function(t) {
			for (var r in t) r in n || e.push(n[r] = r)
		}), e
	}

	function Cr(t) {
		function n(t, n) {
			var r, i, o = e(t, function(t, e) {
				return r ? r(t, e - 1) : (i = t, void(r = n ? Ar(t, n) : Sr(t)))
			});
			return o.columns = i, o
		}

		function e(t, n) {
			function e() {
				if (f >= s) return u;
				if (i) return i = !1, o;
				var n, e = f;
				if (34 === t.charCodeAt(e)) {
					for (var r = e; r++ < s;)
						if (34 === t.charCodeAt(r)) {
							if (34 !== t.charCodeAt(r + 1)) break;
							++r
						}
					return f = r + 2, n = t.charCodeAt(r + 1), 13 === n ? (i = !0, 10 === t.charCodeAt(r + 2) && ++f) : 10 === n && (i = !0), t.slice(e + 1, r).replace(/""/g, '"')
				}
				for (; s > f;) {
					var a = 1;
					if (n = t.charCodeAt(f++), 10 === n) i = !0;
					else if (13 === n) i = !0, 10 === t.charCodeAt(f) && (++f, ++a);
					else if (n !== c) continue;
					return t.slice(e, f - a)
				}
				return t.slice(e)
			}
			for (var r, i, o = {}, u = {}, a = [], s = t.length, f = 0, l = 0;
				(r = e()) !== u;) {
				for (var h = []; r !== o && r !== u;) h.push(r), r = e();
				n && null == (h = n(h, l++)) || a.push(h)
			}
			return a
		}

		function r(n, e) {
			return null == e && (e = Er(n)), [e.map(u).join(t)].concat(n.map(function(n) {
				return e.map(function(t) {
					return u(n[t])
				}).join(t)
			})).join("\n")
		}

		function i(t) {
			return t.map(o).join("\n")
		}

		function o(n) {
			return n.map(u).join(t)
		}

		function u(t) {
			return null == t ? "" : a.test(t += "") ? '"' + t.replace(/\"/g, '""') + '"' : t
		}
		var a = new RegExp('["' + t + "\n]"),
			c = t.charCodeAt(0);
		return {
			parse: n,
			parseRows: e,
			format: r,
			formatRows: i
		}
	}

	function zr(t, n) {
		function e(t) {
			var n, e = s.status;
			if (!e && Lr(s) || e >= 200 && 300 > e || 304 === e) {
				if (o) try {
					n = o.call(r, s)
				} catch (i) {
					return void a.call("error", r, i)
				} else n = s;
				a.call("load", r, n)
			} else a.call("error", r, t)
		}
		var r, i, o, u, a = wr("beforesend", "progress", "load", "error"),
			c = L(),
			s = new XMLHttpRequest,
			f = null,
			l = null,
			h = 0;
		return "undefined" == typeof XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest), "onload" in s ? s.onload = s.onerror = s.ontimeout = e : s.onreadystatechange = function(t) {
			s.readyState > 3 && e(t)
		}, s.onprogress = function(t) {
			a.call("progress", r, t)
		}, r = {
			header: function(t, n) {
				return t = (t + "").toLowerCase(), arguments.length < 2 ? c.get(t) : (null == n ? c.remove(t) : c.set(t, n + ""), r)
			},
			mimeType: function(t) {
				return arguments.length ? (i = null == t ? null : t + "", r) : i
			},
			responseType: function(t) {
				return arguments.length ? (u = t, r) : u
			},
			timeout: function(t) {
				return arguments.length ? (h = +t, r) : h
			},
			user: function(t) {
				return arguments.length < 1 ? f : (f = null == t ? null : t + "", r)
			},
			password: function(t) {
				return arguments.length < 1 ? l : (l = null == t ? null : t + "", r)
			},
			response: function(t) {
				return o = t, r
			},
			get: function(t, n) {
				return r.send("GET", t, n)
			},
			post: function(t, n) {
				return r.send("POST", t, n)
			},
			send: function(n, e, o) {
				return o || "function" != typeof e || (o = e, e = null), o && 1 === o.length && (o = Pr(o)), s.open(n, t, !0, f, l), null == i || c.has("accept") || c.set("accept", i + ",*/*"), s.setRequestHeader && c.each(function(t, n) {
					s.setRequestHeader(n, t)
				}), null != i && s.overrideMimeType && s.overrideMimeType(i), null != u && (s.responseType = u), h > 0 && (s.timeout = h), o && r.on("error", o).on("load", function(t) {
					o(null, t)
				}), a.call("beforesend", r, s), s.send(null == e ? null : e), r
			},
			abort: function() {
				return s.abort(), r
			},
			on: function() {
				var t = a.on.apply(a, arguments);
				return t === a ? r : t
			}
		}, n ? r.get(n) : r
	}

	function Pr(t) {
		return function(n, e) {
			t(null == n ? e : null)
		}
	}

	function Lr(t) {
		var n = t.responseType;
		return n && "text" !== n ? t.response : t.responseText
	}

	function qr(t, n) {
		return function(e, r) {
			var i = zr(e).mimeType(t).response(n);
			return r ? i.get(r) : i
		}
	}

	function Ur(t, n) {
		return function(e, r, i) {
			arguments.length < 3 && (i = r, r = null);
			var o = zr(e).mimeType(t);
			return o.row = function(t) {
				return arguments.length ? o.response(Rr(n, r = t)) : r
			}, o.row(r), i ? o.get(i) : o
		}
	}

	function Rr(t, n) {
		return function(e) {
			return t(e.responseText, n)
		}
	}

	function Dr() {
		return ny || (iy(Or), ny = ry.now() + ey)
	}

	function Or() {
		ny = 0
	}

	function Fr() {
		this._call = this._time = this._next = null
	}

	function Ir(t, n, e) {
		var r = new Fr;
		return r.restart(t, n, e), r
	}

	function Yr() {
		Dr(), ++G_;
		for (var t, n = P_; n;)(t = ny - n._time) >= 0 && n._call.call(null, t), n = n._next;
		--G_
	}

	function Br(t) {
		ny = (ty = t || ry.now()) + ey, G_ = J_ = 0;
		try {
			Yr()
		} finally {
			G_ = 0, Hr(), ny = 0
		}
	}

	function jr() {
		var t = ry.now(),
			n = t - ty;
		n > K_ && (ey -= n, ty = t)
	}

	function Hr() {
		for (var t, n, e = P_, r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : P_ = n);
		L_ = t, Xr(r)
	}

	function Xr(t) {
		if (!G_) {
			J_ && (J_ = clearTimeout(J_));
			var n = t - ny;
			n > 24 ? (1 / 0 > t && (J_ = setTimeout(Br, n)), Q_ && (Q_ = clearInterval(Q_))) : (Q_ || (Q_ = setInterval(jr, K_)), G_ = 1, iy(Br))
		}
	}

	function Vr(t, n, e) {
		var r = new Fr;
		return n = null == n ? 0 : +n, r.restart(function(e) {
			r.stop(), t(e + n)
		}, n, e), r
	}

	function Wr(t, n, e) {
		var r = new Fr,
			i = n;
		return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? Dr() : +e, r.restart(function o(u) {
			u += i, r.restart(o, i += n, e), t(u)
		}, n, e), r)
	}

	function $r(t, n, e, r) {
		function i(n) {
			return t(n = new Date(+n)), n
		}
		return i.floor = i, i.ceil = function(e) {
			return t(e = new Date(e - 1)), n(e, 1), t(e), e
		}, i.round = function(t) {
			var n = i(t),
				e = i.ceil(t);
			return e - t > t - n ? n : e
		}, i.offset = function(t, e) {
			return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
		}, i.range = function(e, r, o) {
			var u = [];
			if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(r > e && o > 0)) return u;
			do u.push(new Date(+e)); while (n(e, o), t(e), r > e);
			return u
		}, i.filter = function(e) {
			return $r(function(n) {
				for (; t(n), !e(n);) n.setTime(n - 1)
			}, function(t, r) {
				for (; --r >= 0;)
					for (; n(t, 1), !e(t););
			})
		}, e && (i.count = function(n, r) {
			return oy.setTime(+n), uy.setTime(+r), t(oy), t(uy), Math.floor(e(oy, uy))
		}, i.every = function(t) {
			return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(n) {
				return r(n) % t === 0
			} : function(n) {
				return i.count(0, n) % t === 0
			}) : i : null
		}), i
	}

	function Zr(t) {
		return $r(function(n) {
			n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
		}, function(t, n) {
			t.setDate(t.getDate() + 7 * n)
		}, function(t, n) {
			return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * fy) / py
		})
	}

	function Gr(t) {
		return $r(function(n) {
			n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
		}, function(t, n) {
			t.setUTCDate(t.getUTCDate() + 7 * n)
		}, function(t, n) {
			return (n - t) / py
		})
	}

	function Jr(t, n) {
		if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
		var e, r = t.slice(0, e);
		return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
	}

	function Qr(t) {
		return t = Jr(Math.abs(t)), t ? t[1] : NaN
	}

	function Kr(t, n) {
		return function(e, r) {
			for (var i = e.length, o = [], u = 0, a = t[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), o.push(e.substring(i -= a, i + a)), !((c += a + 1) > r));) a = t[u = (u + 1) % t.length];
			return o.reverse().join(n)
		}
	}

	function ti(t, n) {
		t = t.toPrecision(n);
		t: for (var e, r = t.length, i = 1, o = -1; r > i; ++i) switch (t[i]) {
			case ".":
				o = e = i;
				break;
			case "0":
				0 === o && (o = i), e = i;
				break;
			case "e":
				break t;
			default:
				o > 0 && (o = 0)
		}
		return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
	}

	function ni(t, n) {
		var e = Jr(t, n);
		if (!e) return t + "";
		var r = e[0],
			i = e[1],
			o = i - (sg = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
			u = r.length;
		return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Jr(t, Math.max(0, n + o - 1))[0]
	}

	function ei(t, n) {
		var e = Jr(t, n);
		if (!e) return t + "";
		var r = e[0],
			i = e[1];
		return 0 > i ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
	}

	function ri(t) {
		return new ii(t)
	}

	function ii(t) {
		if (!(n = hg.exec(t))) throw new Error("invalid format: " + t);
		var n, e = n[1] || " ",
			r = n[2] || ">",
			i = n[3] || "-",
			o = n[4] || "",
			u = !!n[5],
			a = n[6] && +n[6],
			c = !!n[7],
			s = n[8] && +n[8].slice(1),
			f = n[9] || "";
		"n" === f ? (c = !0, f = "g") : lg[f] || (f = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = u, this.width = a, this.comma = c, this.precision = s, this.type = f
	}

	function oi(t) {
		return t
	}

	function ui(t) {
		function n(t) {
			function n(t) {
				var n, i, c, g = d,
					m = v;
				if ("c" === p) m = _(t) + m, t = "";
				else {
					t = +t;
					var x = (0 > t || 0 > 1 / t) && (t *= -1, !0);
					if (t = _(t, h), x)
						for (n = -1, i = t.length, x = !1; ++n < i;)
							if (c = t.charCodeAt(n), c > 48 && 58 > c || "x" === p && c > 96 && 103 > c || "X" === p && c > 64 && 71 > c) {
								x = !0;
								break
							}
					if (g = (x ? "(" === a ? a : "-" : "-" === a || "(" === a ? "" : a) + g, m = m + ("s" === p ? pg[8 + sg / 3] : "") + (x && "(" === a ? ")" : ""), y)
						for (n = -1, i = t.length; ++n < i;)
							if (c = t.charCodeAt(n), 48 > c || c > 57) {
								m = (46 === c ? o + t.slice(n + 1) : t.slice(n)) + m, t = t.slice(0, n);
								break
							}
				}
				l && !s && (t = r(t, 1 / 0));
				var b = g.length + t.length + m.length,
					w = f > b ? new Array(f - b + 1).join(e) : "";
				switch (l && s && (t = r(w + t, w.length ? f - m.length : 1 / 0), w = ""), u) {
					case "<":
						return g + t + m + w;
					case "=":
						return g + w + t + m;
					case "^":
						return w.slice(0, b = w.length >> 1) + g + t + m + w.slice(b)
				}
				return w + g + t + m
			}
			t = ri(t);
			var e = t.fill,
				u = t.align,
				a = t.sign,
				c = t.symbol,
				s = t.zero,
				f = t.width,
				l = t.comma,
				h = t.precision,
				p = t.type,
				d = "$" === c ? i[0] : "#" === c && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
				v = "$" === c ? i[1] : /[%p]/.test(p) ? "%" : "",
				_ = lg[p],
				y = !p || /[defgprs%]/.test(p);
			return h = null == h ? p ? 6 : 12 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, h)) : Math.max(0, Math.min(20, h)), n.toString = function() {
				return t + ""
			}, n
		}

		function e(t, e) {
			var r = n((t = ri(t), t.type = "f", t)),
				i = 3 * Math.max(-8, Math.min(8, Math.floor(Qr(e) / 3))),
				o = Math.pow(10, -i),
				u = pg[8 + i / 3];
			return function(t) {
				return r(o * t) + u
			}
		}
		var r = t.grouping && t.thousands ? Kr(t.grouping, t.thousands) : oi,
			i = t.currency,
			o = t.decimal;
		return {
			format: n,
			formatPrefix: e
		}
	}

	function ai(t) {
		return Math.max(0, -Qr(Math.abs(t)))
	}

	function ci(t, n) {
		return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Qr(n) / 3))) - Qr(Math.abs(t)))
	}

	function si(t, n) {
		return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Qr(n) - Qr(t)) + 1
	}

	function fi(t) {
		if (0 <= t.y && t.y < 100) {
			var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
			return n.setFullYear(t.y), n
		}
		return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
	}

	function li(t) {
		if (0 <= t.y && t.y < 100) {
			var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
			return n.setUTCFullYear(t.y), n
		}
		return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
	}

	function hi(t) {
		return {
			y: t,
			m: 0,
			d: 1,
			H: 0,
			M: 0,
			S: 0,
			L: 0
		}
	}

	function pi(t) {
		function n(t, n) {
			return function(e) {
				var r, i, o, u = [],
					a = -1,
					c = 0,
					s = t.length;
				for (e instanceof Date || (e = new Date(+e)); ++a < s;) 37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = wg[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), c = a + 1);
				return u.push(t.slice(c, a)), u.join("")
			}
		}

		function e(t, n) {
			return function(e) {
				var i = hi(1900),
					o = r(i, t, e += "", 0);
				if (o != e.length) return null;
				if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
					"w" in i || (i.w = "W" in i ? 1 : 0);
					var u = "Z" in i ? li(hi(i.y)).getUTCDay() : n(hi(i.y)).getDay();
					i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (u + 5) % 7 : i.w + 7 * i.U - (u + 6) % 7
				}
				return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, li(i)) : n(i)
			}
		}

		function r(t, n, e, r) {
			for (var i, o, u = 0, a = n.length, c = e.length; a > u;) {
				if (r >= c) return -1;
				if (i = n.charCodeAt(u++), 37 === i) {
					if (i = n.charAt(u++), o = B[i in wg ? n.charAt(u++) : i], !o || (r = o(t, e, r)) < 0) return -1
				} else if (i != e.charCodeAt(r++)) return -1
			}
			return r
		}

		function i(t, n, e) {
			var r = C.exec(n.slice(e));
			return r ? (t.p = z[r[0].toLowerCase()], e + r[0].length) : -1
		}

		function o(t, n, e) {
			var r = q.exec(n.slice(e));
			return r ? (t.w = U[r[0].toLowerCase()], e + r[0].length) : -1
		}

		function u(t, n, e) {
			var r = P.exec(n.slice(e));
			return r ? (t.w = L[r[0].toLowerCase()], e + r[0].length) : -1
		}

		function a(t, n, e) {
			var r = O.exec(n.slice(e));
			return r ? (t.m = F[r[0].toLowerCase()], e + r[0].length) : -1
		}

		function c(t, n, e) {
			var r = R.exec(n.slice(e));
			return r ? (t.m = D[r[0].toLowerCase()], e + r[0].length) : -1
		}

		function s(t, n, e) {
			return r(t, w, n, e)
		}

		function f(t, n, e) {
			return r(t, M, n, e)
		}

		function l(t, n, e) {
			return r(t, T, n, e)
		}

		function h(t) {
			return S[t.getDay()]
		}

		function p(t) {
			return N[t.getDay()]
		}

		function d(t) {
			return E[t.getMonth()]
		}

		function v(t) {
			return A[t.getMonth()]
		}

		function _(t) {
			return k[+(t.getHours() >= 12)]
		}

		function y(t) {
			return S[t.getUTCDay()]
		}

		function g(t) {
			return N[t.getUTCDay()]
		}

		function m(t) {
			return E[t.getUTCMonth()]
		}

		function x(t) {
			return A[t.getUTCMonth()]
		}

		function b(t) {
			return k[+(t.getUTCHours() >= 12)]
		}
		var w = t.dateTime,
			M = t.date,
			T = t.time,
			k = t.periods,
			N = t.days,
			S = t.shortDays,
			A = t.months,
			E = t.shortMonths,
			C = _i(k),
			z = yi(k),
			P = _i(N),
			L = yi(N),
			q = _i(S),
			U = yi(S),
			R = _i(A),
			D = yi(A),
			O = _i(E),
			F = yi(E),
			I = {
				a: h,
				A: p,
				b: d,
				B: v,
				c: null,
				d: Pi,
				e: Pi,
				H: Li,
				I: qi,
				j: Ui,
				L: Ri,
				m: Di,
				M: Oi,
				p: _,
				S: Fi,
				U: Ii,
				w: Yi,
				W: Bi,
				x: null,
				X: null,
				y: ji,
				Y: Hi,
				Z: Xi,
				"%": uo
			},
			Y = {
				a: y,
				A: g,
				b: m,
				B: x,
				c: null,
				d: Vi,
				e: Vi,
				H: Wi,
				I: $i,
				j: Zi,
				L: Gi,
				m: Ji,
				M: Qi,
				p: b,
				S: Ki,
				U: to,
				w: no,
				W: eo,
				x: null,
				X: null,
				y: ro,
				Y: io,
				Z: oo,
				"%": uo
			},
			B = {
				a: o,
				A: u,
				b: a,
				B: c,
				c: s,
				d: ki,
				e: ki,
				H: Si,
				I: Si,
				j: Ni,
				L: Ci,
				m: Ti,
				M: Ai,
				p: i,
				S: Ei,
				U: mi,
				w: gi,
				W: xi,
				x: f,
				X: l,
				y: wi,
				Y: bi,
				Z: Mi,
				"%": zi
			};
		return I.x = n(M, I), I.X = n(T, I), I.c = n(w, I), Y.x = n(M, Y), Y.X = n(T, Y), Y.c = n(w, Y), {
			format: function(t) {
				var e = n(t += "", I);
				return e.toString = function() {
					return t
				}, e
			},
			parse: function(t) {
				var n = e(t += "", fi);
				return n.toString = function() {
					return t
				}, n
			},
			utcFormat: function(t) {
				var e = n(t += "", Y);
				return e.toString = function() {
					return t
				}, e
			},
			utcParse: function(t) {
				var n = e(t, li);
				return n.toString = function() {
					return t
				}, n
			}
		}
	}

	function di(t, n, e) {
		var r = 0 > t ? "-" : "",
			i = (r ? -t : t) + "",
			o = i.length;
		return r + (e > o ? new Array(e - o + 1).join(n) + i : i)
	}

	function vi(t) {
		return t.replace(kg, "\\$&")
	}

	function _i(t) {
		return new RegExp("^(?:" + t.map(vi).join("|") + ")", "i")
	}

	function yi(t) {
		for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
		return n
	}

	function gi(t, n, e) {
		var r = Mg.exec(n.slice(e, e + 1));
		return r ? (t.w = +r[0], e + r[0].length) : -1
	}

	function mi(t, n, e) {
		var r = Mg.exec(n.slice(e));
		return r ? (t.U = +r[0], e + r[0].length) : -1
	}

	function xi(t, n, e) {
		var r = Mg.exec(n.slice(e));
		return r ? (t.W = +r[0], e + r[0].length) : -1
	}

	function bi(t, n, e) {
		var r = Mg.exec(n.slice(e, e + 4));
		return r ? (t.y = +r[0], e + r[0].length) : -1
	}

	function wi(t, n, e) {
		var r = Mg.exec(n.slice(e, e + 2));
		return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
	}

	function Mi(t, n, e) {
		var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
		return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
	}

	function Ti(t, n, e) {
		var r = Mg.exec(n.slice(e, e + 2));
		return r ? (t.m = r[0] - 1, e + r[0].length) : -1
	}

	function ki(t, n, e) {
		var r = Mg.exec(n.slice(e, e + 2));
		return r ? (t.d = +r[0], e + r[0].length) : -1
	}

	function Ni(t, n, e) {
		var r = Mg.exec(n.slice(e, e + 3));
		return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
	}

	function Si(t, n, e) {
		var r = Mg.exec(n.slice(e, e + 2));
		return r ? (t.H = +r[0], e + r[0].length) : -1
	}

	function Ai(t, n, e) {
		var r = Mg.exec(n.slice(e, e + 2));
		return r ? (t.M = +r[0], e + r[0].length) : -1
	}

	function Ei(t, n, e) {
		var r = Mg.exec(n.slice(e, e + 2));
		return r ? (t.S = +r[0], e + r[0].length) : -1
	}

	function Ci(t, n, e) {
		var r = Mg.exec(n.slice(e, e + 3));
		return r ? (t.L = +r[0], e + r[0].length) : -1
	}

	function zi(t, n, e) {
		var r = Tg.exec(n.slice(e, e + 1));
		return r ? e + r[0].length : -1
	}

	function Pi(t, n) {
		return di(t.getDate(), n, 2)
	}

	function Li(t, n) {
		return di(t.getHours(), n, 2)
	}

	function qi(t, n) {
		return di(t.getHours() % 12 || 12, n, 2)
	}

	function Ui(t, n) {
		return di(1 + xy.count(Oy(t), t), n, 3)
	}

	function Ri(t, n) {
		return di(t.getMilliseconds(), n, 3)
	}

	function Di(t, n) {
		return di(t.getMonth() + 1, n, 2)
	}

	function Oi(t, n) {
		return di(t.getMinutes(), n, 2)
	}

	function Fi(t, n) {
		return di(t.getSeconds(), n, 2)
	}

	function Ii(t, n) {
		return di(wy.count(Oy(t), t), n, 2)
	}

	function Yi(t) {
		return t.getDay()
	}

	function Bi(t, n) {
		return di(My.count(Oy(t), t), n, 2)
	}

	function ji(t, n) {
		return di(t.getFullYear() % 100, n, 2)
	}

	function Hi(t, n) {
		return di(t.getFullYear() % 1e4, n, 4)
	}

	function Xi(t) {
		var n = t.getTimezoneOffset();
		return (n > 0 ? "-" : (n *= -1, "+")) + di(n / 60 | 0, "0", 2) + di(n % 60, "0", 2)
	}

	function Vi(t, n) {
		return di(t.getUTCDate(), n, 2)
	}

	function Wi(t, n) {
		return di(t.getUTCHours(), n, 2)
	}

	function $i(t, n) {
		return di(t.getUTCHours() % 12 || 12, n, 2)
	}

	function Zi(t, n) {
		return di(1 + Hy.count(cg(t), t), n, 3)
	}

	function Gi(t, n) {
		return di(t.getUTCMilliseconds(), n, 3)
	}

	function Ji(t, n) {
		return di(t.getUTCMonth() + 1, n, 2)
	}

	function Qi(t, n) {
		return di(t.getUTCMinutes(), n, 2)
	}

	function Ki(t, n) {
		return di(t.getUTCSeconds(), n, 2)
	}

	function to(t, n) {
		return di(Vy.count(cg(t), t), n, 2)
	}

	function no(t) {
		return t.getUTCDay()
	}

	function eo(t, n) {
		return di(Wy.count(cg(t), t), n, 2)
	}

	function ro(t, n) {
		return di(t.getUTCFullYear() % 100, n, 2)
	}

	function io(t, n) {
		return di(t.getUTCFullYear() % 1e4, n, 4)
	}

	function oo() {
		return "+0000"
	}

	function uo() {
		return "%"
	}

	function ao(t) {
		return t.toISOString()
	}

	function co(t) {
		var n = new Date(t);
		return isNaN(n) ? null : n
	}

	function so(t) {
		function n(n) {
			var o = n + "",
				u = e.get(o);
			if (!u) {
				if (i !== Pg) return i;
				e.set(o, u = r.push(n))
			}
			return t[(u - 1) % t.length]
		}
		var e = L(),
			r = [],
			i = Pg;
		return t = null == t ? [] : zg.call(t), n.domain = function(t) {
			if (!arguments.length) return r.slice();
			r = [], e = L();
			for (var i, o, u = -1, a = t.length; ++u < a;) e.has(o = (i = t[u]) + "") || e.set(o, r.push(i));
			return n
		}, n.range = function(e) {
			return arguments.length ? (t = zg.call(e), n) : t.slice()
		}, n.unknown = function(t) {
			return arguments.length ? (i = t, n) : i
		}, n.copy = function() {
			return so().domain(r).range(t).unknown(i)
		}, n
	}

	function fo() {
		function t() {
			var t = i().length,
				r = u[1] < u[0],
				h = u[r - 0],
				p = u[1 - r];
			n = (p - h) / Math.max(1, t - c + 2 * s), a && (n = Math.floor(n)), h += (p - h - n * (t - c)) * f, e = n * (1 - c), a && (h = Math.round(h), e = Math.round(e));
			var d = l(t).map(function(t) {
				return h + n * t
			});
			return o(r ? d.reverse() : d)
		}
		var n, e, r = so().unknown(void 0),
			i = r.domain,
			o = r.range,
			u = [0, 1],
			a = !1,
			c = 0,
			s = 0,
			f = .5;
		return delete r.unknown, r.domain = function(n) {
			return arguments.length ? (i(n), t()) : i()
		}, r.range = function(n) {
			return arguments.length ? (u = [+n[0], +n[1]], t()) : u.slice()
		}, r.rangeRound = function(n) {
			return u = [+n[0], +n[1]], a = !0, t()
		}, r.bandwidth = function() {
			return e
		}, r.step = function() {
			return n
		}, r.round = function(n) {
			return arguments.length ? (a = !!n, t()) : a
		}, r.padding = function(n) {
			return arguments.length ? (c = s = Math.max(0, Math.min(1, n)), t()) : c
		}, r.paddingInner = function(n) {
			return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c
		}, r.paddingOuter = function(n) {
			return arguments.length ? (s = Math.max(0, Math.min(1, n)), t()) : s
		}, r.align = function(n) {
			return arguments.length ? (f = Math.max(0, Math.min(1, n)), t()) : f
		}, r.copy = function() {
			return fo().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(f)
		}, t()
	}

	function lo(t) {
		var n = t.copy;
		return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
			return lo(n())
		}, t
	}

	function ho() {
		return lo(fo().paddingInner(1))
	}

	function po(t) {
		return function() {
			return t
		}
	}

	function vo(t) {
		return +t
	}

	function _o(t, n) {
		return (n -= t = +t) ? function(e) {
			return (e - t) / n
		} : po(n)
	}

	function yo(t) {
		return function(n, e) {
			var r = t(n = +n, e = +e);
			return function(t) {
				return n >= t ? 0 : t >= e ? 1 : r(t)
			}
		}
	}

	function go(t) {
		return function(n, e) {
			var r = t(n = +n, e = +e);
			return function(t) {
				return 0 >= t ? n : t >= 1 ? e : r(t)
			}
		}
	}

	function mo(t, n, e, r) {
		var i = t[0],
			o = t[1],
			u = n[0],
			a = n[1];
		return i > o ? (i = e(o, i), u = r(a, u)) : (i = e(i, o), u = r(u, a)),
			function(t) {
				return u(i(t))
			}
	}

	function xo(t, n, e, r) {
		var i = Math.min(t.length, n.length) - 1,
			o = new Array(i),
			u = new Array(i),
			a = -1;
		for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;) o[a] = e(t[a], t[a + 1]), u[a] = r(n[a], n[a + 1]);
		return function(n) {
			var e = hd(t, n, 1, i) - 1;
			return u[e](o[e](n))
		}
	}

	function bo(t, n) {
		return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
	}

	function wo(t, n) {
		function e() {
			return i = Math.min(a.length, c.length) > 2 ? xo : mo, o = u = null, r
		}

		function r(n) {
			return (o || (o = i(a, c, f ? yo(t) : t, s)))(+n)
		}
		var i, o, u, a = Lg,
			c = Lg,
			s = ar,
			f = !1;
		return r.invert = function(t) {
			return (u || (u = i(c, a, _o, f ? go(n) : n)))(+t)
		}, r.domain = function(t) {
			return arguments.length ? (a = Cg.call(t, vo), e()) : a.slice()
		}, r.range = function(t) {
			return arguments.length ? (c = zg.call(t), e()) : c.slice()
		}, r.rangeRound = function(t) {
			return c = zg.call(t), s = cr, e()
		}, r.clamp = function(t) {
			return arguments.length ? (f = !!t, e()) : f
		}, r.interpolate = function(t) {
			return arguments.length ? (s = t, e()) : s
		}, e()
	}

	function Mo(t, n, e) {
		var r, i = t[0],
			o = t[t.length - 1],
			u = p(i, o, null == n ? 10 : n);
		switch (e = ri(null == e ? ",f" : e), e.type) {
			case "s":
				var a = Math.max(Math.abs(i), Math.abs(o));
				return null != e.precision || isNaN(r = ci(u, a)) || (e.precision = r), _g(e, a);
			case "":
			case "e":
			case "g":
			case "p":
			case "r":
				null != e.precision || isNaN(r = si(u, Math.max(Math.abs(i), Math.abs(o)))) || (e.precision = r - ("e" === e.type));
				break;
			case "f":
			case "%":
				null != e.precision || isNaN(r = ai(u)) || (e.precision = r - 2 * ("%" === e.type))
		}
		return vg(e)
	}

	function To(t) {
		var n = t.domain;
		return t.ticks = function(t) {
			var e = n();
			return h(e[0], e[e.length - 1], null == t ? 10 : t)
		}, t.tickFormat = function(t, e) {
			return Mo(n(), t, e)
		}, t.nice = function(e) {
			var r = n(),
				i = r.length - 1,
				o = null == e ? 10 : e,
				u = r[0],
				a = r[i],
				c = p(u, a, o);
			return c && (c = p(Math.floor(u / c) * c, Math.ceil(a / c) * c, o), r[0] = Math.floor(u / c) * c, r[i] = Math.ceil(a / c) * c, n(r)), t
		}, t
	}

	function ko() {
		var t = wo(_o, er);
		return t.copy = function() {
			return bo(t, ko())
		}, To(t)
	}

	function No() {
		function t(t) {
			return +t
		}
		var n = [0, 1];
		return t.invert = t, t.domain = t.range = function(e) {
			return arguments.length ? (n = Cg.call(e, vo), t) : n.slice()
		}, t.copy = function() {
			return No().domain(n)
		}, To(t)
	}

	function So(t, n) {
		t = t.slice();
		var e, r = 0,
			i = t.length - 1,
			o = t[r],
			u = t[i];
		return o > u && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
	}

	function Ao(t, n) {
		return (n = Math.log(n / t)) ? function(e) {
			return Math.log(e / t) / n
		} : po(n)
	}

	function Eo(t, n) {
		return 0 > t ? function(e) {
			return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
		} : function(e) {
			return Math.pow(n, e) * Math.pow(t, 1 - e)
		}
	}

	function Co(t) {
		return isFinite(t) ? +("1e" + t) : 0 > t ? 0 : t
	}

	function zo(t) {
		return 10 === t ? Co : t === Math.E ? Math.exp : function(n) {
			return Math.pow(t, n)
		}
	}

	function Po(t) {
		return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) {
			return Math.log(n) / t
		})
	}

	function Lo(t) {
		return function(n) {
			return -t(-n)
		}
	}

	function qo() {
		function t() {
			return i = Po(r), o = zo(r), e()[0] < 0 && (i = Lo(i), o = Lo(o)), n
		}
		var n = wo(Ao, Eo).domain([1, 10]),
			e = n.domain,
			r = 10,
			i = Po(10),
			o = zo(10);
		return n.base = function(n) {
			return arguments.length ? (r = +n, t()) : r
		}, n.domain = function(n) {
			return arguments.length ? (e(n), t()) : e()
		}, n.ticks = function(t) {
			var n, u = e(),
				a = u[0],
				c = u[u.length - 1];
			(n = a > c) && (p = a, a = c, c = p);
			var s, f, l, p = i(a),
				d = i(c),
				v = null == t ? 10 : +t,
				_ = [];
			if (!(r % 1) && v > d - p) {
				if (p = Math.round(p) - 1, d = Math.round(d) + 1, a > 0) {
					for (; d > p; ++p)
						for (f = 1, s = o(p); r > f; ++f)
							if (l = s * f, !(a > l)) {
								if (l > c) break;
								_.push(l)
							}
				} else
					for (; d > p; ++p)
						for (f = r - 1, s = o(p); f >= 1; --f)
							if (l = s * f, !(a > l)) {
								if (l > c) break;
								_.push(l)
							}
				n && _.reverse()
			} else _ = h(p, d, Math.min(d - p, v)).map(o);
			return _
		}, n.tickFormat = function(t, e) {
			if (null == e && (e = 10 === r ? ".0e" : ","), "function" != typeof e && (e = vg(e)), t === 1 / 0) return e;
			null == t && (t = 10);
			var u = Math.max(1, r * t / n.ticks().length);
			return function(t) {
				var n = t / o(Math.round(i(t)));
				return r - .5 > n * r && (n *= r), u >= n ? e(t) : ""
			}
		}, n.nice = function() {
			return e(So(e(), {
				floor: function(t) {
					return o(Math.floor(i(t)))
				},
				ceil: function(t) {
					return o(Math.ceil(i(t)))
				}
			}))
		}, n.copy = function() {
			return bo(n, qo().base(r))
		}, n
	}

	function Uo(t, n) {
		return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
	}

	function Ro() {
		function t(t, n) {
			return (n = Uo(n, e) - (t = Uo(t, e))) ? function(r) {
				return (Uo(r, e) - t) / n
			} : po(n)
		}

		function n(t, n) {
			return n = Uo(n, e) - (t = Uo(t, e)),
				function(r) {
					return Uo(t + n * r, 1 / e)
				}
		}
		var e = 1,
			r = wo(t, n),
			i = r.domain;
		return r.exponent = function(t) {
			return arguments.length ? (e = +t, i(i())) : e
		}, r.copy = function() {
			return bo(r, Ro().exponent(e))
		}, To(r)
	}

	function Do() {
		return Ro().exponent(.5)
	}

	function Oo() {
		function t() {
			var t = 0,
				n = Math.max(1, i.length);
			for (o = new Array(n - 1); ++t < n;) o[t - 1] = _(r, t / n);
			return e
		}

		function e(t) {
			return isNaN(t = +t) ? void 0 : i[hd(o, t)]
		}
		var r = [],
			i = [],
			o = [];
		return e.invertExtent = function(t) {
			var n = i.indexOf(t);
			return 0 > n ? [NaN, NaN] : [n > 0 ? o[n - 1] : r[0], n < o.length ? o[n] : r[r.length - 1]]
		}, e.domain = function(e) {
			if (!arguments.length) return r.slice();
			r = [];
			for (var i, o = 0, u = e.length; u > o; ++o) i = e[o], null == i || isNaN(i = +i) || r.push(i);
			return r.sort(n), t()
		}, e.range = function(n) {
			return arguments.length ? (i = zg.call(n), t()) : i.slice()
		}, e.quantiles = function() {
			return o.slice()
		}, e.copy = function() {
			return Oo().domain(r).range(i)
		}, e
	}

	function Fo() {
		function t(t) {
			return t >= t ? u[hd(o, t, 0, i)] : void 0
		}

		function n() {
			var n = -1;
			for (o = new Array(i); ++n < i;) o[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
			return t
		}
		var e = 0,
			r = 1,
			i = 1,
			o = [.5],
			u = [0, 1];
		return t.domain = function(t) {
			return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r]
		}, t.range = function(t) {
			return arguments.length ? (i = (u = zg.call(t)).length - 1, n()) : u.slice()
		}, t.invertExtent = function(t) {
			var n = u.indexOf(t);
			return 0 > n ? [NaN, NaN] : 1 > n ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]]
		}, t.copy = function() {
			return Fo().domain([e, r]).range(u)
		}, To(t)
	}

	function Io() {
		function t(t) {
			return t >= t ? e[hd(n, t, 0, r)] : void 0
		}
		var n = [.5],
			e = [0, 1],
			r = 1;
		return t.domain = function(i) {
			return arguments.length ? (n = zg.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice()
		}, t.range = function(i) {
			return arguments.length ? (e = zg.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice()
		}, t.invertExtent = function(t) {
			var r = e.indexOf(t);
			return [n[r - 1], n[r]]
		}, t.copy = function() {
			return Io().domain(n).range(e)
		}, t
	}

	function Yo(t) {
		return new Date(t)
	}

	function Bo(t) {
		return t instanceof Date ? +t : +new Date(+t)
	}

	function jo(t, n, r, i, o, u, a, c, s) {
		function f(e) {
			return (a(e) < e ? _ : u(e) < e ? y : o(e) < e ? g : i(e) < e ? m : n(e) < e ? r(e) < e ? x : b : t(e) < e ? w : M)(e)
		}

		function l(n, r, i, o) {
			if (null == n && (n = 10), "number" == typeof n) {
				var u = Math.abs(i - r) / n,
					a = e(function(t) {
						return t[2]
					}).right(T, u);
				a === T.length ? (o = p(r / Ig, i / Ig, n), n = t) : a ? (a = T[u / T[a - 1][2] < T[a][2] / u ? a - 1 : a], o = a[1], n = a[0]) : (o = p(r, i, n), n = c)
			}
			return null == o ? n : n.every(o)
		}
		var h = wo(_o, er),
			d = h.invert,
			v = h.domain,
			_ = s(".%L"),
			y = s(":%S"),
			g = s("%I:%M"),
			m = s("%I %p"),
			x = s("%a %d"),
			b = s("%b %d"),
			w = s("%B"),
			M = s("%Y"),
			T = [
				[a, 1, qg],
				[a, 5, 5 * qg],
				[a, 15, 15 * qg],
				[a, 30, 30 * qg],
				[u, 1, Ug],
				[u, 5, 5 * Ug],
				[u, 15, 15 * Ug],
				[u, 30, 30 * Ug],
				[o, 1, Rg],
				[o, 3, 3 * Rg],
				[o, 6, 6 * Rg],
				[o, 12, 12 * Rg],
				[i, 1, Dg],
				[i, 2, 2 * Dg],
				[r, 1, Og],
				[n, 1, Fg],
				[n, 3, 3 * Fg],
				[t, 1, Ig]
			];
		return h.invert = function(t) {
			return new Date(d(t))
		}, h.domain = function(t) {
			return arguments.length ? v(Cg.call(t, Bo)) : v().map(Yo)
		}, h.ticks = function(t, n) {
			var e, r = v(),
				i = r[0],
				o = r[r.length - 1],
				u = i > o;
			return u && (e = i, i = o, o = e), e = l(t, i, o, n), e = e ? e.range(i, o + 1) : [], u ? e.reverse() : e
		}, h.tickFormat = function(t, n) {
			return null == n ? f : s(n)
		}, h.nice = function(t, n) {
			var e = v();
			return (t = l(t, e[0], e[e.length - 1], n)) ? v(So(e, t)) : h
		}, h.copy = function() {
			return bo(h, jo(t, n, r, i, o, u, a, c, s))
		}, h
	}

	function Ho() {
		return jo(Oy, Ry, wy, xy, gy, _y, dy, ay, gg).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
	}

	function Xo() {
		return jo(cg, ug, Vy, Hy, By, Iy, dy, ay, xg).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
	}

	function Vo(t) {
		return t.match(/.{6}/g).map(function(t) {
			return "#" + t
		})
	}

	function Wo(t) {
		(0 > t || t > 1) && (t -= Math.floor(t));
		var n = Math.abs(t - .5);
		return $g.h = 360 * t - 100, $g.s = 1.5 - 1.5 * n, $g.l = .8 - .9 * n, $g + ""
	}

	function $o(t) {
		var n = t.length;
		return function(e) {
			return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
		}
	}

	function Zo(t) {
		function n(n) {
			var o = (n - e) / (r - e);
			return t(i ? Math.max(0, Math.min(1, o)) : o)
		}
		var e = 0,
			r = 1,
			i = !1;
		return n.domain = function(t) {
			return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r]
		}, n.clamp = function(t) {
			return arguments.length ? (i = !!t, n) : i
		}, n.copy = function() {
			return Zo(t).domain([e, r]).clamp(i)
		}, To(n)
	}

	function Go(t) {
		var n = t += "",
			e = n.indexOf(":");
		return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), tm.hasOwnProperty(n) ? {
			space: tm[n],
			local: t
		} : t
	}

	function Jo(t) {
		return function() {
			var n = this.ownerDocument,
				e = this.namespaceURI;
			return e === Kg && n.documentElement.namespaceURI === Kg ? n.createElement(t) : n.createElementNS(e, t)
		}
	}

	function Qo(t) {
		return function() {
			return this.ownerDocument.createElementNS(t.space, t.local)
		}
	}

	function Ko(t) {
		var n = Go(t);
		return (n.local ? Qo : Jo)(n)
	}

	function tu() {
		return new nu
	}

	function nu() {
		this._ = "@" + (++nm).toString(36)
	}

	function eu(t, n, e) {
		return t = ru(t, n, e),
			function(n) {
				var e = n.relatedTarget;
				e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
			}
	}

	function ru(n, e, r) {
		return function(i) {
			var o = t.event;
			t.event = i;
			try {
				n.call(this, this.__data__, e, r)
			} finally {
				t.event = o
			}
		}
	}

	function iu(t) {
		return t.trim().split(/^|\s+/).map(function(t) {
			var n = "",
				e = t.indexOf(".");
			return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
				type: t,
				name: n
			}
		})
	}

	function ou(t) {
		return function() {
			var n = this.__on;
			if (n) {
				for (var e, r = 0, i = -1, o = n.length; o > r; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
				++i ? n.length = i : delete this.__on
			}
		}
	}

	function uu(t, n, e) {
		var r = um.hasOwnProperty(t.type) ? eu : ru;
		return function(i, o, u) {
			var a, c = this.__on,
				s = r(n, o, u);
			if (c)
				for (var f = 0, l = c.length; l > f; ++f)
					if ((a = c[f]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = s, a.capture = e),
						void(a.value = n);
			this.addEventListener(t.type, s, e), a = {
				type: t.type,
				name: t.name,
				value: n,
				listener: s,
				capture: e
			}, c ? c.push(a) : this.__on = [a]
		}
	}

	function au(t, n, e) {
		var r, i, o = iu(t + ""),
			u = o.length; {
			if (!(arguments.length < 2)) {
				for (a = n ? uu : ou, null == e && (e = !1), r = 0; u > r; ++r) this.each(a(o[r], n, e));
				return this
			}
			var a = this.node().__on;
			if (a)
				for (var c, s = 0, f = a.length; f > s; ++s)
					for (r = 0, c = a[s]; u > r; ++r)
						if ((i = o[r]).type === c.type && i.name === c.name) return c.value
		}
	}

	function cu(n, e, r, i) {
		var o = t.event;
		n.sourceEvent = t.event, t.event = n;
		try {
			return e.apply(r, i)
		} finally {
			t.event = o
		}
	}

	function su() {
		for (var n, e = t.event; n = e.sourceEvent;) e = n;
		return e
	}

	function fu(t, n) {
		var e = t.ownerSVGElement || t;
		if (e.createSVGPoint) {
			var r = e.createSVGPoint();
			return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
		}
		var i = t.getBoundingClientRect();
		return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
	}

	function lu(t) {
		var n = su();
		return n.changedTouches && (n = n.changedTouches[0]), fu(t, n)
	}

	function hu(t) {
		return function() {
			return this.querySelector(t)
		}
	}

	function pu(t) {
		"function" != typeof t && (t = hu(t));
		for (var n = this._groups, e = n.length, r = new Array(e), i = 0; e > i; ++i)
			for (var o, u, a = n[i], c = a.length, s = r[i] = new Array(c), f = 0; c > f; ++f)(o = a[f]) && (u = t.call(o, o.__data__, f, a)) && ("__data__" in o && (u.__data__ = o.__data__), s[f] = u);
		return new Aa(r, this._parents)
	}

	function du(t) {
		return function() {
			return this.querySelectorAll(t)
		}
	}

	function vu(t) {
		"function" != typeof t && (t = du(t));
		for (var n = this._groups, e = n.length, r = [], i = [], o = 0; e > o; ++o)
			for (var u, a = n[o], c = a.length, s = 0; c > s; ++s)(u = a[s]) && (r.push(t.call(u, u.__data__, s, a)), i.push(u));
		return new Aa(r, i)
	}

	function _u(t) {
		"function" != typeof t && (t = om(t));
		for (var n = this._groups, e = n.length, r = new Array(e), i = 0; e > i; ++i)
			for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; a > s; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
		return new Aa(r, this._parents)
	}

	function yu(t) {
		return function() {
			return t
		}
	}

	function gu(t, n, e, r, i, o) {
		for (var u, a = 0, c = n.length, s = o.length; s > a; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new bu(t, o[a]);
		for (; c > a; ++a)(u = n[a]) && (i[a] = u)
	}

	function mu(t, n, e, r, i, o, u) {
		var a, c, s, f = {},
			l = n.length,
			h = o.length,
			p = new Array(l);
		for (a = 0; l > a; ++a)(c = n[a]) && (p[a] = s = cm + u.call(c, c.__data__, a, n), s in f ? i[a] = c : f[s] = c);
		for (a = 0; h > a; ++a) s = cm + u.call(t, o[a], a, o), (c = f[s]) ? (r[a] = c, c.__data__ = o[a], f[s] = null) : e[a] = new bu(t, o[a]);
		for (a = 0; l > a; ++a)(c = n[a]) && f[p[a]] === c && (i[a] = c)
	}

	function xu(t, n) {
		if (!t) return p = new Array(this.size()), s = -1, this.each(function(t) {
			p[++s] = t
		}), p;
		var e = n ? mu : gu,
			r = this._parents,
			i = this._groups;
		"function" != typeof t && (t = yu(t));
		for (var o = i.length, u = new Array(o), a = new Array(o), c = new Array(o), s = 0; o > s; ++s) {
			var f = r[s],
				l = i[s],
				h = l.length,
				p = t.call(f, f && f.__data__, s, r),
				d = p.length,
				v = a[s] = new Array(d),
				_ = u[s] = new Array(d),
				y = c[s] = new Array(h);
			e(f, l, v, _, y, p, n);
			for (var g, m, x = 0, b = 0; d > x; ++x)
				if (g = v[x]) {
					for (x >= b && (b = x + 1); !(m = _[b]) && ++b < d;);
					g._next = m || null
				}
		}
		return u = new Aa(u, r), u._enter = a, u._exit = c, u
	}

	function bu(t, n) {
		this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
	}

	function wu(t) {
		return new Array(t.length)
	}

	function Mu() {
		return new Aa(this._enter || this._groups.map(wu), this._parents)
	}

	function Tu() {
		return new Aa(this._exit || this._groups.map(wu), this._parents)
	}

	function ku(t) {
		for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; o > a; ++a)
			for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; l > p; ++p)(c = s[p] || f[p]) && (h[p] = c);
		for (; r > a; ++a) u[a] = n[a];
		return new Aa(u, this._parents)
	}

	function Nu() {
		for (var t = this._groups, n = -1, e = t.length; ++n < e;)
			for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
		return this
	}

	function Su(t) {
		function n(n, e) {
			return n && e ? t(n.__data__, e.__data__) : !n - !e
		}
		t || (t = Au);
		for (var e = this._groups, r = e.length, i = new Array(r), o = 0; r > o; ++o) {
			for (var u, a = e[o], c = a.length, s = i[o] = new Array(c), f = 0; c > f; ++f)(u = a[f]) && (s[f] = u);
			s.sort(n)
		}
		return new Aa(i, this._parents).order()
	}

	function Au(t, n) {
		return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
	}

	function Eu() {
		var t = arguments[0];
		return arguments[0] = this, t.apply(null, arguments), this
	}

	function Cu() {
		var t = new Array(this.size()),
			n = -1;
		return this.each(function() {
			t[++n] = this
		}), t
	}

	function zu() {
		for (var t = this._groups, n = 0, e = t.length; e > n; ++n)
			for (var r = t[n], i = 0, o = r.length; o > i; ++i) {
				var u = r[i];
				if (u) return u
			}
		return null
	}

	function Pu() {
		var t = 0;
		return this.each(function() {
			++t
		}), t
	}

	function Lu() {
		return !this.node()
	}

	function qu(t) {
		for (var n = this._groups, e = 0, r = n.length; r > e; ++e)
			for (var i, o = n[e], u = 0, a = o.length; a > u; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
		return this
	}

	function Uu(t) {
		return function() {
			this.removeAttribute(t)
		}
	}

	function Ru(t) {
		return function() {
			this.removeAttributeNS(t.space, t.local)
		}
	}

	function Du(t, n) {
		return function() {
			this.setAttribute(t, n)
		}
	}

	function Ou(t, n) {
		return function() {
			this.setAttributeNS(t.space, t.local, n)
		}
	}

	function Fu(t, n) {
		return function() {
			var e = n.apply(this, arguments);
			null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
		}
	}

	function Iu(t, n) {
		return function() {
			var e = n.apply(this, arguments);
			null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
		}
	}

	function Yu(t, n) {
		var e = Go(t);
		if (arguments.length < 2) {
			var r = this.node();
			return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
		}
		return this.each((null == n ? e.local ? Ru : Uu : "function" == typeof n ? e.local ? Iu : Fu : e.local ? Ou : Du)(e, n))
	}

	function Bu(t) {
		return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
	}

	function ju(t) {
		return function() {
			this.style.removeProperty(t)
		}
	}

	function Hu(t, n, e) {
		return function() {
			this.style.setProperty(t, n, e)
		}
	}

	function Xu(t, n, e) {
		return function() {
			var r = n.apply(this, arguments);
			null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
		}
	}

	function Vu(t, n, e) {
		var r;
		return arguments.length > 1 ? this.each((null == n ? ju : "function" == typeof n ? Xu : Hu)(t, n, null == e ? "" : e)) : Bu(r = this.node()).getComputedStyle(r, null).getPropertyValue(t)
	}

	function Wu(t) {
		return function() {
			delete this[t]
		}
	}

	function $u(t, n) {
		return function() {
			this[t] = n
		}
	}

	function Zu(t, n) {
		return function() {
			var e = n.apply(this, arguments);
			null == e ? delete this[t] : this[t] = e
		}
	}

	function Gu(t, n) {
		return arguments.length > 1 ? this.each((null == n ? Wu : "function" == typeof n ? Zu : $u)(t, n)) : this.node()[t]
	}

	function Ju(t) {
		return t.trim().split(/^|\s+/)
	}

	function Qu(t) {
		return t.classList || new Ku(t)
	}

	function Ku(t) {
		this._node = t, this._names = Ju(t.getAttribute("class") || "")
	}

	function ta(t, n) {
		for (var e = Qu(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
	}

	function na(t, n) {
		for (var e = Qu(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
	}

	function ea(t) {
		return function() {
			ta(this, t)
		}
	}

	function ra(t) {
		return function() {
			na(this, t)
		}
	}

	function ia(t, n) {
		return function() {
			(n.apply(this, arguments) ? ta : na)(this, t)
		}
	}

	function oa(t, n) {
		var e = Ju(t + "");
		if (arguments.length < 2) {
			for (var r = Qu(this.node()), i = -1, o = e.length; ++i < o;)
				if (!r.contains(e[i])) return !1;
			return !0
		}
		return this.each(("function" == typeof n ? ia : n ? ea : ra)(e, n))
	}

	function ua() {
		this.textContent = ""
	}

	function aa(t) {
		return function() {
			this.textContent = t
		}
	}

	function ca(t) {
		return function() {
			var n = t.apply(this, arguments);
			this.textContent = null == n ? "" : n
		}
	}

	function sa(t) {
		return arguments.length ? this.each(null == t ? ua : ("function" == typeof t ? ca : aa)(t)) : this.node().textContent
	}

	function fa() {
		this.innerHTML = ""
	}

	function la(t) {
		return function() {
			this.innerHTML = t
		}
	}

	function ha(t) {
		return function() {
			var n = t.apply(this, arguments);
			this.innerHTML = null == n ? "" : n
		}
	}

	function pa(t) {
		return arguments.length ? this.each(null == t ? fa : ("function" == typeof t ? ha : la)(t)) : this.node().innerHTML
	}

	function da() {
		this.nextSibling && this.parentNode.appendChild(this)
	}

	function va() {
		return this.each(da)
	}

	function _a() {
		this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
	}

	function ya() {
		return this.each(_a)
	}

	function ga(t) {
		var n = "function" == typeof t ? t : Ko(t);
		return this.select(function() {
			return this.appendChild(n.apply(this, arguments))
		})
	}

	function ma() {
		return null
	}

	function xa(t, n) {
		var e = "function" == typeof t ? t : Ko(t),
			r = null == n ? ma : "function" == typeof n ? n : hu(n);
		return this.select(function() {
			return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
		})
	}

	function ba() {
		var t = this.parentNode;
		t && t.removeChild(this)
	}

	function wa() {
		return this.each(ba)
	}

	function Ma(t) {
		return arguments.length ? this.property("__data__", t) : this.node().__data__
	}

	function Ta(t, n, e) {
		var r = Bu(t),
			i = r.CustomEvent;
		i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
	}

	function ka(t, n) {
		return function() {
			return Ta(this, t, n)
		}
	}

	function Na(t, n) {
		return function() {
			return Ta(this, t, n.apply(this, arguments))
		}
	}

	function Sa(t, n) {
		return this.each(("function" == typeof n ? Na : ka)(t, n))
	}

	function Aa(t, n) {
		this._groups = t, this._parents = n
	}

	function Ea() {
		return new Aa([
			[document.documentElement]
		], sm)
	}

	function Ca(t) {
		return "string" == typeof t ? new Aa([
			[document.querySelector(t)]
		], [document.documentElement]) : new Aa([
			[t]
		], sm)
	}

	function za(t) {
		return "string" == typeof t ? new Aa([document.querySelectorAll(t)], [document.documentElement]) : new Aa([t], sm)
	}

	function Pa(t, n, e) {
		arguments.length < 3 && (e = n, n = su().changedTouches);
		for (var r, i = 0, o = n ? n.length : 0; o > i; ++i)
			if ((r = n[i]).identifier === e) return fu(t, r);
		return null
	}

	function La(t, n) {
		null == n && (n = su().touches);
		for (var e = 0, r = n ? n.length : 0, i = new Array(r); r > e; ++e) i[e] = fu(t, n[e]);
		return i
	}

	function qa(t, n, e, r, i, o) {
		var u = t.__transition;
		if (u) {
			if (e in u) return
		} else t.__transition = {};
		Oa(t, e, {
			name: n,
			index: r,
			group: i,
			on: fm,
			tween: lm,
			time: o.time,
			delay: o.delay,
			duration: o.duration,
			ease: o.ease,
			timer: null,
			state: hm
		})
	}

	function Ua(t, n) {
		var e = t.__transition;
		if (!e || !(e = e[n]) || e.state > hm) throw new Error("too late");
		return e
	}

	function Ra(t, n) {
		var e = t.__transition;
		if (!e || !(e = e[n]) || e.state > dm) throw new Error("too late");
		return e
	}

	function Da(t, n) {
		var e = t.__transition;
		if (!e || !(e = e[n])) throw new Error("too late");
		return e
	}

	function Oa(t, n, e) {
		function r(t) {
			e.state = pm, e.delay <= t ? i(t - e.delay) : e.timer.restart(i, e.delay, e.time)
		}

		function i(r) {
			var i, c, s, f;
			for (i in a) f = a[i], f.name === e.name && (f.state === vm ? (f.state = ym, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete a[i]) : n > +i && (f.state = ym, f.timer.stop(), delete a[i]));
			if (Vr(function() {
					e.state === vm && (e.timer.restart(o, e.delay, e.time), o(r))
				}), e.state = dm, e.on.call("start", t, t.__data__, e.index, e.group), e.state === dm) {
				for (e.state = vm, u = new Array(s = e.tween.length), i = 0, c = -1; s > i; ++i)(f = e.tween[i].value.call(t, t.__data__, e.index, e.group)) && (u[++c] = f);
				u.length = c + 1
			}
		}

		function o(r) {
			for (var i = r < e.duration ? e.ease.call(null, r / e.duration) : (e.state = _m, 1), o = -1, c = u.length; ++o < c;) u[o].call(null, i);
			if (e.state === _m) {
				e.state = ym, e.timer.stop(), e.on.call("end", t, t.__data__, e.index, e.group);
				for (o in a)
					if (+o !== n) return void delete a[n];
				delete t.__transition
			}
		}
		var u, a = t.__transition;
		a[n] = e, e.timer = Ir(r, 0, e.time)
	}

	function Fa(t, n) {
		var e, r, i, o = t.__transition,
			u = !0;
		if (o) {
			n = null == n ? null : n + "";
			for (i in o)(e = o[i]).name === n ? (r = e.state === vm, e.state = ym, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
			u && delete t.__transition
		}
	}

	function Ia(t) {
		return this.each(function() {
			Fa(this, t)
		})
	}

	function Ya(t, n) {
		var e, r;
		return function() {
			var i = Ra(this, t),
				o = i.tween;
			if (o !== e) {
				r = e = o;
				for (var u = 0, a = r.length; a > u; ++u)
					if (r[u].name === n) {
						r = r.slice(), r.splice(u, 1);
						break
					}
			}
			i.tween = r
		}
	}

	function Ba(t, n, e) {
		var r, i;
		if ("function" != typeof e) throw new Error;
		return function() {
			var o = Ra(this, t),
				u = o.tween;
			if (u !== r) {
				i = (r = u).slice();
				for (var a = {
						name: n,
						value: e
					}, c = 0, s = i.length; s > c; ++c)
					if (i[c].name === n) {
						i[c] = a;
						break
					}
				c === s && i.push(a)
			}
			o.tween = i
		}
	}

	function ja(t, n) {
		var e = this._id;
		if (t += "", arguments.length < 2) {
			for (var r, i = Da(this.node(), e).tween, o = 0, u = i.length; u > o; ++o)
				if ((r = i[o]).name === t) return r.value;
			return null
		}
		return this.each((null == n ? Ya : Ba)(e, t, n))
	}

	function Ha(t, n, e) {
		var r = t._id;
		return t.each(function() {
				var t = Ra(this, r);
				(t.value || (t.value = {}))[n] = e.apply(this, arguments)
			}),
			function(t) {
				return Da(t, r).value[n]
			}
	}

	function Xa(t, n) {
		var e;
		return ("number" == typeof n ? er : n instanceof be ? h_ : (e = be(n)) ? (n = e, h_) : ur)(t, n)
	}

	function Va(t) {
		return function() {
			this.removeAttribute(t)
		}
	}

	function Wa(t) {
		return function() {
			this.removeAttributeNS(t.space, t.local)
		}
	}

	function $a(t, n, e) {
		var r, i;
		return function() {
			var o = this.getAttribute(t);
			return o === e ? null : o === r ? i : i = n(r = o, e)
		}
	}

	function Za(t, n, e) {
		var r, i;
		return function() {
			var o = this.getAttributeNS(t.space, t.local);
			return o === e ? null : o === r ? i : i = n(r = o, e)
		}
	}

	function Ga(t, n, e) {
		var r, i, o;
		return function() {
			var u, a = e(this);
			return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a))
		}
	}

	function Ja(t, n, e) {
		var r, i, o;
		return function() {
			var u, a = e(this);
			return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a))
		}
	}

	function Qa(t, n) {
		var e = Go(t),
			r = "transform" === e ? x_ : Xa;
		return this.attrTween(t, "function" == typeof n ? (e.local ? Ja : Ga)(e, r, Ha(this, "attr." + t, n)) : null == n ? (e.local ? Wa : Va)(e) : (e.local ? Za : $a)(e, r, n))
	}

	function Ka(t, n) {
		function e() {
			var e = this,
				r = n.apply(e, arguments);
			return r && function(n) {
				e.setAttributeNS(t.space, t.local, r(n))
			}
		}
		return e._value = n, e
	}

	function tc(t, n) {
		function e() {
			var e = this,
				r = n.apply(e, arguments);
			return r && function(n) {
				e.setAttribute(t, r(n))
			}
		}
		return e._value = n, e
	}

	function nc(t, n) {
		var e = "attr." + t;
		if (arguments.length < 2) return (e = this.tween(e)) && e._value;
		if (null == n) return this.tween(e, null);
		if ("function" != typeof n) throw new Error;
		var r = Go(t);
		return this.tween(e, (r.local ? Ka : tc)(r, n))
	}

	function ec(t, n) {
		return function() {
			Ua(this, t).delay = +n.apply(this, arguments)
		}
	}

	function rc(t, n) {
		return n = +n,
			function() {
				Ua(this, t).delay = n
			}
	}

	function ic(t) {
		var n = this._id;
		return arguments.length ? this.each(("function" == typeof t ? ec : rc)(n, t)) : Da(this.node(), n).delay
	}

	function oc(t, n) {
		return function() {
			Ra(this, t).duration = +n.apply(this, arguments)
		}
	}

	function uc(t, n) {
		return n = +n,
			function() {
				Ra(this, t).duration = n
			}
	}

	function ac(t) {
		var n = this._id;
		return arguments.length ? this.each(("function" == typeof t ? oc : uc)(n, t)) : Da(this.node(), n).duration
	}

	function cc(t, n) {
		if ("function" != typeof n) throw new Error;
		return function() {
			Ra(this, t).ease = n
		}
	}

	function sc(t) {
		var n = this._id;
		return arguments.length ? this.each(cc(n, t)) : Da(this.node(), n).ease
	}

	function fc(t) {
		"function" != typeof t && (t = om(t));
		for (var n = this._groups, e = n.length, r = new Array(e), i = 0; e > i; ++i)
			for (var o, u = n[i], a = u.length, c = r[i] = new Array(a), s = 0; a > s; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && (c[s] = o);
		return new zc(r, this._parents, this._name, this._id)
	}

	function lc(t) {
		if (t._id !== this._id) throw new Error;
		for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; o > a; ++a)
			for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; l > p; ++p)(c = s[p] || f[p]) && (h[p] = c);
		for (; r > a; ++a) u[a] = n[a];
		return new zc(u, this._parents, this._name, this._id)
	}

	function hc(t) {
		return (t + "").trim().split(/^|\s+/).every(function(t) {
			var n = t.indexOf(".");
			return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
		})
	}

	function pc(t, n, e) {
		var r, i, o = hc(n) ? Ua : Ra;
		return function() {
			var u = o(this, t),
				a = u.on;
			a !== r && (i = (r = a).copy()).on(n, e), u.on = i
		}
	}

	function dc(t, n) {
		var e = this._id;
		return arguments.length < 2 ? Da(this.node(), e).on.on(t) : this.each(pc(e, t, n))
	}

	function vc(t) {
		return function() {
			var n = this.parentNode;
			for (var e in this.__transition)
				if (+e !== t) return;
			n && n.removeChild(this)
		}
	}

	function _c() {
		return this.on("end.remove", vc(this._id))
	}

	function yc(t) {
		var n = this._name,
			e = this._id;
		"function" != typeof t && (t = hu(t));
		for (var r = this._groups, i = r.length, o = new Array(i), u = 0; i > u; ++u)
			for (var a, c, s = r[u], f = s.length, l = o[u] = new Array(f), h = 0; f > h; ++h)(a = s[h]) && (c = t.call(a, a.__data__, h, s)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, qa(l[h], n, e, h, l, Da(a, e)));
		return new zc(o, this._parents, n, e)
	}

	function gc(t) {
		var n = this._name,
			e = this._id;
		"function" != typeof t && (t = du(t));
		for (var r = this._groups, i = r.length, o = [], u = [], a = 0; i > a; ++a)
			for (var c, s = r[a], f = s.length, l = 0; f > l; ++l)
				if (c = s[l]) {
					for (var h, p = t.call(c, c.__data__, l, s), d = Da(c, e), v = 0, _ = p.length; _ > v; ++v)(h = p[v]) && qa(h, n, e, v, p, d);
					o.push(p), u.push(c)
				}
		return new zc(o, u, n, e)
	}

	function mc() {
		return new gm(this._groups, this._parents)
	}

	function xc(t, n) {
		var e, r, i;
		return function() {
			var o = Bu(this).getComputedStyle(this, null),
				u = o.getPropertyValue(t),
				a = (this.style.removeProperty(t), o.getPropertyValue(t));
			return u === a ? null : u === e && a === r ? i : i = n(e = u, r = a)
		}
	}

	function bc(t) {
		return function() {
			this.style.removeProperty(t)
		}
	}

	function wc(t, n, e) {
		var r, i;
		return function() {
			var o = Bu(this).getComputedStyle(this, null).getPropertyValue(t);
			return o === e ? null : o === r ? i : i = n(r = o, e)
		}
	}

	function Mc(t, n, e) {
		var r, i, o;
		return function() {
			var u = Bu(this).getComputedStyle(this, null),
				a = u.getPropertyValue(t),
				c = e(this);
			return null == c && (this.style.removeProperty(t), c = u.getPropertyValue(t)), a === c ? null : a === r && c === i ? o : o = n(r = a, i = c)
		}
	}

	function Tc(t, n, e) {
		var r = "transform" == (t += "") ? m_ : Xa;
		return null == n ? this.styleTween(t, xc(t, r)).on("end.style." + t, bc(t)) : this.styleTween(t, "function" == typeof n ? Mc(t, r, Ha(this, "style." + t, n)) : wc(t, r, n), e)
	}

	function kc(t, n, e) {
		function r() {
			var r = this,
				i = n.apply(r, arguments);
			return i && function(n) {
				r.style.setProperty(t, i(n), e)
			}
		}
		return r._value = n, r
	}

	function Nc(t, n, e) {
		var r = "style." + (t += "");
		if (arguments.length < 2) return (r = this.tween(r)) && r._value;
		if (null == n) return this.tween(r, null);
		if ("function" != typeof n) throw new Error;
		return this.tween(r, kc(t, n, null == e ? "" : e))
	}

	function Sc(t) {
		return function() {
			this.textContent = t
		}
	}

	function Ac(t) {
		return function() {
			var n = t(this);
			this.textContent = null == n ? "" : n
		}
	}

	function Ec(t) {
		return this.tween("text", "function" == typeof t ? Ac(Ha(this, "text", t)) : Sc(null == t ? "" : t + ""))
	}

	function Cc() {
		for (var t = this._name, n = this._id, e = Lc(), r = this._groups, i = r.length, o = 0; i > o; ++o)
			for (var u, a = r[o], c = a.length, s = 0; c > s; ++s)
				if (u = a[s]) {
					var f = Da(u, n);
					qa(u, t, e, s, a, {
						time: f.time + f.delay + f.duration,
						delay: 0,
						duration: f.duration,
						ease: f.ease
					})
				}
		return new zc(r, this._parents, t, e)
	}

	function zc(t, n, e, r) {
		this._groups = t, this._parents = n, this._name = e, this._id = r
	}

	function Pc(t) {
		return Ea().transition(t)
	}

	function Lc() {
		return ++mm
	}

	function qc(t, n) {
		for (var e; !(e = t.__transition) || !(e = e[n]);)
			if (!(t = t.parentNode)) return bm.time = Dr(), bm;
		return e
	}

	function Uc(t) {
		var n, e;
		t instanceof zc ? (n = t._id, t = t._name) : (n = Lc(), (e = bm).time = Dr(), t = null == t ? null : t + "");
		for (var r = this._groups, i = r.length, o = 0; i > o; ++o)
			for (var u, a = r[o], c = a.length, s = 0; c > s; ++s)(u = a[s]) && qa(u, t, n, s, a, e || qc(u, n));
		return new zc(r, this._parents, t, n)
	}

	function Rc(t, n) {
		var e, r, i = t.__transition;
		if (i) {
			n = null == n ? null : n + "";
			for (r in i)
				if ((e = i[r]).state > pm && e.name === n) return new zc([
					[t]
				], wm, n, +r)
		}
		return null
	}

	function Dc(t) {
		return t
	}

	function Oc(t, n, e) {
		var r = t(e);
		return "translate(" + (isFinite(r) ? r : n(e)) + ",0)"
	}

	function Fc(t, n, e) {
		var r = t(e);
		return "translate(0," + (isFinite(r) ? r : n(e)) + ")"
	}

	function Ic(t) {
		var n = t.bandwidth() / 2;
		return function(e) {
			return t(e) + n
		}
	}

	function Yc() {
		return !this.__axis
	}

	function Bc(t, n) {
		function e(e) {
			var s, f = null == i ? n.ticks ? n.ticks.apply(n, r) : n.domain() : i,
				l = null == o ? n.tickFormat ? n.tickFormat.apply(n, r) : Dc : o,
				h = Math.max(u, 0) + c,
				p = t === Tm || t === Nm ? Oc : Fc,
				d = n.range(),
				v = d[0] + .5,
				_ = d[d.length - 1] + .5,
				y = (n.bandwidth ? Ic : Dc)(n.copy()),
				g = e.selection ? e.selection() : e,
				m = g.selectAll(".domain").data([null]),
				x = g.selectAll(".tick").data(f, n).order(),
				b = x.exit(),
				w = x.enter().append("g").attr("class", "tick"),
				M = x.select("line"),
				T = x.select("text"),
				k = t === Tm || t === Sm ? -1 : 1,
				N = t === Sm || t === km ? (s = "x", "y") : (s = "y", "x");
			m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), x = x.merge(w), M = M.merge(w.append("line").attr("stroke", "#000").attr(s + "2", k * u).attr(N + "1", .5).attr(N + "2", .5)), T = T.merge(w.append("text").attr("fill", "#000").attr(s, k * h).attr(N, .5).attr("dy", t === Tm ? "0em" : t === Nm ? ".71em" : ".32em")), e !== g && (m = m.transition(e), x = x.transition(e), M = M.transition(e), T = T.transition(e), b = b.transition(e).attr("opacity", Am).attr("transform", function(t) {
				return p(y, this.parentNode.__axis || y, t)
			}), w.attr("opacity", Am).attr("transform", function(t) {
				return p(this.parentNode.__axis || y, y, t)
			})), b.remove(), m.attr("d", t === Sm || t == km ? "M" + k * a + "," + v + "H0.5V" + _ + "H" + k * a : "M" + v + "," + k * a + "V0.5H" + _ + "V" + k * a), x.attr("opacity", 1).attr("transform", function(t) {
				return p(y, y, t)
			}), M.attr(s + "2", k * u), T.attr(s, k * h).text(l), g.filter(Yc).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === km ? "start" : t === Sm ? "end" : "middle"), g.each(function() {
				this.__axis = y
			})
		}
		var r = [],
			i = null,
			o = null,
			u = 6,
			a = 6,
			c = 3;
		return e.scale = function(t) {
			return arguments.length ? (n = t, e) : n
		}, e.ticks = function() {
			return r = Mm.call(arguments), e
		}, e.tickArguments = function(t) {
			return arguments.length ? (r = null == t ? [] : Mm.call(t), e) : r.slice()
		}, e.tickValues = function(t) {
			return arguments.length ? (i = null == t ? null : Mm.call(t), e) : i && i.slice()
		}, e.tickFormat = function(t) {
			return arguments.length ? (o = t, e) : o
		}, e.tickSize = function(t) {
			return arguments.length ? (u = a = +t, e) : u
		}, e.tickSizeInner = function(t) {
			return arguments.length ? (u = +t, e) : u
		}, e.tickSizeOuter = function(t) {
			return arguments.length ? (a = +t, e) : a
		}, e.tickPadding = function(t) {
			return arguments.length ? (c = +t, e) : c
		}, e
	}

	function jc(t) {
		return Bc(Tm, t)
	}

	function Hc(t) {
		return Bc(km, t)
	}

	function Xc(t) {
		return Bc(Nm, t)
	}

	function Vc(t) {
		return Bc(Sm, t)
	}

	function Wc(t, n) {
		return t.parent === n.parent ? 1 : 2
	}

	function $c(t) {
		return t.reduce(Zc, 0) / t.length
	}

	function Zc(t, n) {
		return t + n.x
	}

	function Gc(t) {
		return 1 + t.reduce(Jc, 0)
	}

	function Jc(t, n) {
		return Math.max(t, n.y)
	}

	function Qc(t) {
		for (var n; n = t.children;) t = n[0];
		return t
	}

	function Kc(t) {
		for (var n; n = t.children;) t = n[n.length - 1];
		return t
	}

	function ts() {
		function t(t) {
			var o, u = 0;
			t.eachAfter(function(t) {
				var e = t.children;
				e ? (t.x = $c(e), t.y = Gc(e)) : (t.x = o ? u += n(t, o) : 0, t.y = 0, o = t)
			});
			var a = Qc(t),
				c = Kc(t),
				s = a.x - n(a, c) / 2,
				f = c.x + n(c, a) / 2;
			return t.eachAfter(i ? function(n) {
				n.x = (n.x - t.x) * e, n.y = (t.y - n.y) * r
			} : function(n) {
				n.x = (n.x - s) / (f - s) * e, n.y = (1 - (t.y ? n.y / t.y : 1)) * r
			})
		}
		var n = Wc,
			e = 1,
			r = 1,
			i = !1;
		return t.separation = function(e) {
			return arguments.length ? (n = e, t) : n
		}, t.size = function(n) {
			return arguments.length ? (i = !1, e = +n[0], r = +n[1], t) : i ? null : [e, r]
		}, t.nodeSize = function(n) {
			return arguments.length ? (i = !0, e = +n[0], r = +n[1], t) : i ? [e, r] : null
		}, t
	}

	function ns(t) {
		var n, e, r, i, o = this,
			u = [o];
		do
			for (n = u.reverse(), u = []; o = n.pop();)
				if (t(o), e = o.children)
					for (r = 0, i = e.length; i > r; ++r) u.push(e[r]);
		while (u.length);
		return this
	}

	function es(t) {
		for (var n, e, r = this, i = [r]; r = i.pop();)
			if (t(r), n = r.children)
				for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
		return this
	}

	function rs(t) {
		for (var n, e, r, i = this, o = [i], u = []; i = o.pop();)
			if (u.push(i), n = i.children)
				for (e = 0, r = n.length; r > e; ++e) o.push(n[e]);
		for (; i = u.pop();) t(i);
		return this
	}

	function is(t) {
		return this.eachAfter(function(n) {
			for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
			n.value = e
		})
	}

	function os(t) {
		return this.eachBefore(function(n) {
			n.children && n.children.sort(t)
		})
	}

	function us(t) {
		for (var n = this, e = as(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
		for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
		return r
	}

	function as(t, n) {
		if (t === n) return t;
		var e = t.ancestors(),
			r = n.ancestors(),
			i = null;
		for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop();
		return i
	}

	function cs() {
		for (var t = this, n = [t]; t = t.parent;) n.push(t);
		return n
	}

	function ss() {
		var t = [];
		return this.each(function(n) {
			t.push(n)
		}), t
	}

	function fs() {
		var t = [];
		return this.eachBefore(function(n) {
			n.children || t.push(n)
		}), t
	}

	function ls() {
		var t = this,
			n = [];
		return t.each(function(e) {
			e !== t && n.push({
				source: e.parent,
				target: e
			})
		}), n
	}

	function hs(t, n) {
		var e, r, i, o, u, a = new ys(t),
			c = +t.value && (a.value = t.value),
			s = [a];
		for (null == n && (n = ds); e = s.pop();)
			if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))
				for (e.children = new Array(u), o = u - 1; o >= 0; --o) s.push(r = e.children[o] = new ys(i[o])), r.parent = e, r.depth = e.depth + 1;
		return a.eachBefore(_s)
	}

	function ps() {
		return hs(this).eachBefore(vs)
	}

	function ds(t) {
		return t.children
	}

	function vs(t) {
		t.data = t.data.data
	}

	function _s(t) {
		var n = 0;
		do t.height = n; while ((t = t.parent) && t.height < ++n)
	}

	function ys(t) {
		this.data = t, this.depth = this.height = 0, this.parent = null
	}

	function gs(t) {
		this._ = t, this.next = null
	}

	function ms(t) {
		for (var n, e = (t = t.slice()).length, r = null, i = r; e;) {
			var o = new gs(t[e - 1]);
			i = i ? i.next = o : r = o, t[n] = t[--e]
		}
		return {
			head: r,
			tail: i
		}
	}

	function xs(t) {
		return ws(ms(t), [])
	}

	function bs(t, n) {
		var e = n.x - t.x,
			r = n.y - t.y,
			i = t.r - n.r;
		return i * i + 1e-6 > e * e + r * r
	}

	function ws(t, n) {
		var e, r, i, o = null,
			u = t.head;
		switch (n.length) {
			case 1:
				e = Ms(n[0]);
				break;
			case 2:
				e = Ts(n[0], n[1]);
				break;
			case 3:
				e = ks(n[0], n[1], n[2])
		}
		for (; u;) i = u._, r = u.next, e && bs(e, i) ? o = u : (o ? (t.tail = o, o.next = null) : t.head = t.tail = null, n.push(i), e = ws(t, n), n.pop(), t.head ? (u.next = t.head, t.head = u) : (u.next = null, t.head = t.tail = u), o = t.tail, o.next = r), u = r;
		return t.tail = o, e
	}

	function Ms(t) {
		return {
			x: t.x,
			y: t.y,
			r: t.r
		}
	}

	function Ts(t, n) {
		var e = t.x,
			r = t.y,
			i = t.r,
			o = n.x,
			u = n.y,
			a = n.r,
			c = o - e,
			s = u - r,
			f = a - i,
			l = Math.sqrt(c * c + s * s);
		return {
			x: (e + o + c / l * f) / 2,
			y: (r + u + s / l * f) / 2,
			r: (l + i + a) / 2
		}
	}

	function ks(t, n, e) {
		var r = t.x,
			i = t.y,
			o = t.r,
			u = n.x,
			a = n.y,
			c = n.r,
			s = e.x,
			f = e.y,
			l = e.r,
			h = 2 * (r - u),
			p = 2 * (i - a),
			d = 2 * (c - o),
			v = r * r + i * i - o * o - u * u - a * a + c * c,
			_ = 2 * (r - s),
			y = 2 * (i - f),
			g = 2 * (l - o),
			m = r * r + i * i - o * o - s * s - f * f + l * l,
			x = _ * p - h * y,
			b = (p * m - y * v) / x - r,
			w = (y * d - p * g) / x,
			M = (_ * v - h * m) / x - i,
			T = (h * g - _ * d) / x,
			k = w * w + T * T - 1,
			N = 2 * (b * w + M * T + o),
			S = b * b + M * M - o * o,
			A = (-N - Math.sqrt(N * N - 4 * k * S)) / (2 * k);
		return {
			x: b + w * A + r,
			y: M + T * A + i,
			r: A
		}
	}

	function Ns(t, n, e) {
		var r = t.x,
			i = t.y,
			o = n.r + e.r,
			u = t.r + e.r,
			a = n.x - r,
			c = n.y - i,
			s = a * a + c * c;
		if (s) {
			var f = .5 + ((u *= u) - (o *= o)) / (2 * s),
				l = Math.sqrt(Math.max(0, 2 * o * (u + s) - (u -= s) * u - o * o)) / (2 * s);
			e.x = r + f * a + l * c, e.y = i + f * c - l * a
		} else e.x = r + u, e.y = i
	}

	function Ss(t, n) {
		var e = n.x - t.x,
			r = n.y - t.y,
			i = t.r + n.r;
		return i * i > e * e + r * r
	}

	function As(t, n, e) {
		var r = t.x - n,
			i = t.y - e;
		return r * r + i * i
	}

	function Es(t) {
		this._ = t, this.next = null, this.previous = null
	}

	function Cs(t) {
		if (!(i = t.length)) return 0;
		var n, e, r, i;
		if (n = t[0], n.x = 0, n.y = 0, !(i > 1)) return n.r;
		if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
		Ns(e, n, r = t[2]);
		var o, u, a, c, s, f, l, h = n.r * n.r,
			p = e.r * e.r,
			d = r.r * r.r,
			v = h + p + d,
			_ = h * n.x + p * e.x + d * r.x,
			y = h * n.y + p * e.y + d * r.y;
		n = new Es(n), e = new Es(e), r = new Es(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
		t: for (a = 3; i > a; ++a) {
			if (Ns(n._, e._, r = t[a]), r = new Es(r), (s = n.previous) === (c = e.next)) {
				if (Ss(c._, r._)) {
					n = e, e = c, --a;
					continue t
				}
			} else {
				f = c._.r, l = s._.r;
				do
					if (l >= f) {
						if (Ss(c._, r._)) {
							e = c, n.next = e, e.previous = n, --a;
							continue t
						}
						c = c.next, f += c._.r
					} else {
						if (Ss(s._, r._)) {
							n = s, n.next = e, e.previous = n, --a;
							continue t
						}
						s = s.previous, l += s._.r
					}
				while (c !== s.next)
			}
			for (r.previous = n, r.next = e, n.next = e.previous = e = r, v += d = r._.r * r._.r, _ += d * r._.x, y += d * r._.y, h = As(n._, o = _ / v, u = y / v);
				(r = r.next) !== e;)(d = As(r._, o, u)) < h && (n = r, h = d);
			e = n.next
		}
		for (n = [e._], r = e;
			(r = r.next) !== e;) n.push(r._);
		for (r = xs(n), a = 0; i > a; ++a) n = t[a], n.x -= r.x, n.y -= r.y;
		return r.r
	}

	function zs(t) {
		return Cs(t), t
	}

	function Ps(t) {
		return null == t ? null : Ls(t)
	}

	function Ls(t) {
		if ("function" != typeof t) throw new Error;
		return t
	}

	function qs() {
		return 0
	}

	function Us(t) {
		return function() {
			return t
		}
	}

	function Rs(t) {
		return Math.sqrt(t.value)
	}

	function Ds() {
		function t(t) {
			return t.x = e / 2, t.y = r / 2, n ? t.eachBefore(Os(n)).eachAfter(Fs(i, .5)).eachBefore(Is(1)) : t.eachBefore(Os(Rs)).eachAfter(Fs(qs, 1)).eachAfter(Fs(i, t.r / Math.min(e, r))).eachBefore(Is(Math.min(e, r) / (2 * t.r))), t
		}
		var n = null,
			e = 1,
			r = 1,
			i = qs;
		return t.radius = function(e) {
			return arguments.length ? (n = Ps(e), t) : n
		}, t.size = function(n) {
			return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
		}, t.padding = function(n) {
			return arguments.length ? (i = "function" == typeof n ? n : Us(+n), t) : i
		}, t
	}

	function Os(t) {
		return function(n) {
			n.children || (n.r = Math.max(0, +t(n) || 0))
		}
	}

	function Fs(t, n) {
		return function(e) {
			if (r = e.children) {
				var r, i, o, u = r.length,
					a = t(e) * n || 0;
				if (a)
					for (i = 0; u > i; ++i) r[i].r += a;
				if (o = Cs(r), a)
					for (i = 0; u > i; ++i) r[i].r -= a;
				e.r = o + a
			}
		}
	}

	function Is(t) {
		return function(n) {
			var e = n.parent;
			n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
		}
	}

	function Ys(t) {
		t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
	}

	function Bs(t, n, e, r, i) {
		for (var o, u = t.children, a = -1, c = u.length, s = t.value && (r - n) / t.value; ++a < c;) o = u[a], o.y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * s
	}

	function js() {
		function t(t) {
			var u = t.height + 1;
			return t.x0 = t.y0 = i, t.x1 = e, t.y1 = r / u, t.eachBefore(n(r, u)), o && t.eachBefore(Ys), t
		}

		function n(t, n) {
			return function(e) {
				e.children && Bs(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
				var r = e.x0,
					o = e.y0,
					u = e.x1 - i,
					a = e.y1 - i;
				r > u && (r = u = (r + u) / 2), o > a && (o = a = (o + a) / 2), e.x0 = r, e.y0 = o, e.x1 = u, e.y1 = a
			}
		}
		var e = 1,
			r = 1,
			i = 0,
			o = !1;
		return t.round = function(n) {
			return arguments.length ? (o = !!n, t) : o
		}, t.size = function(n) {
			return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
		}, t.padding = function(n) {
			return arguments.length ? (i = +n, t) : i
		}, t
	}

	function Hs(t) {
		return t.id
	}

	function Xs(t) {
		return t.parentId
	}

	function Vs() {
		function t(t) {
			var r, i, o, u, a, c, s, f = t.length,
				l = new Array(f),
				h = {};
			for (i = 0; f > i; ++i) r = t[i], a = l[i] = new ys(r), null != (c = n(r, i, t)) && (c += "") && (s = Em + (a.id = c), h[s] = s in h ? zm : a);
			for (i = 0; f > i; ++i)
				if (a = l[i], c = e(t[i], i, t), null != c && (c += "")) {
					if (u = h[Em + c], !u) throw new Error("missing: " + c);
					if (u === zm) throw new Error("ambiguous: " + c);
					u.children ? u.children.push(a) : u.children = [a], a.parent = u
				} else {
					if (o) throw new Error("multiple roots");
					o = a
				}
			if (!o) throw new Error("no root");
			if (o.parent = Cm, o.eachBefore(function(t) {
					t.depth = t.parent.depth + 1, --f
				}).eachBefore(_s), o.parent = null, f > 0) throw new Error("cycle");
			return o
		}
		var n = Hs,
			e = Xs;
		return t.id = function(e) {
			return arguments.length ? (n = Ls(e), t) : n
		}, t.parentId = function(n) {
			return arguments.length ? (e = Ls(n), t) : e
		}, t
	}

	function Ws(t, n) {
		return t.parent === n.parent ? 1 : 2
	}

	function $s(t) {
		var n = t.children;
		return n ? n[0] : t.t
	}

	function Zs(t) {
		var n = t.children;
		return n ? n[n.length - 1] : t.t
	}

	function Gs(t, n, e) {
		var r = e / (n.i - t.i);
		n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
	}

	function Js(t) {
		for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) n = i[o], n.z += e, n.m += e, e += n.s + (r += n.c)
	}

	function Qs(t, n, e) {
		return t.a.parent === n.parent ? t.a : e
	}

	function Ks(t, n) {
		this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
	}

	function tf(t) {
		for (var n, e, r, i, o, u = new Ks(t, 0), a = [u]; n = a.pop();)
			if (r = n._.children)
				for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) a.push(e = n.children[i] = new Ks(r[i], i)), e.parent = n;
		return (u.parent = new Ks(null, 0)).children = [u], u
	}

	function nf() {
		function t(t) {
			var r = tf(t);
			if (r.eachAfter(n), r.parent.m = -r.z, r.eachBefore(e), c) t.eachBefore(i);
			else {
				var s = t,
					f = t,
					l = t;
				t.eachBefore(function(t) {
					t.x < s.x && (s = t), t.x > f.x && (f = t), t.depth > l.depth && (l = t)
				});
				var h = s === f ? 1 : o(s, f) / 2,
					p = h - s.x,
					d = u / (f.x + h + p),
					v = a / (l.depth || 1);
				t.eachBefore(function(t) {
					t.x = (t.x + p) * d, t.y = t.depth * v
				})
			}
			return t
		}

		function n(t) {
			var n = t.children,
				e = t.parent.children,
				i = t.i ? e[t.i - 1] : null;
			if (n) {
				Js(t);
				var u = (n[0].z + n[n.length - 1].z) / 2;
				i ? (t.z = i.z + o(t._, i._), t.m = t.z - u) : t.z = u
			} else i && (t.z = i.z + o(t._, i._));
			t.parent.A = r(t, i, t.parent.A || e[0])
		}

		function e(t) {
			t._.x = t.z + t.parent.m, t.m += t.parent.m
		}

		function r(t, n, e) {
			if (n) {
				for (var r, i = t, u = t, a = n, c = i.parent.children[0], s = i.m, f = u.m, l = a.m, h = c.m; a = Zs(a), i = $s(i), a && i;) c = $s(c), u = Zs(u), u.a = t, r = a.z + l - i.z - s + o(a._, i._), r > 0 && (Gs(Qs(a, t, e), t, r), s += r, f += r), l += a.m, s += i.m, h += c.m, f += u.m;
				a && !Zs(u) && (u.t = a, u.m += l - f), i && !$s(c) && (c.t = i, c.m += s - h, e = t)
			}
			return e
		}

		function i(t) {
			t.x *= u, t.y = t.depth * a
		}
		var o = Ws,
			u = 1,
			a = 1,
			c = null;
		return t.separation = function(n) {
			return arguments.length ? (o = n, t) : o
		}, t.size = function(n) {
			return arguments.length ? (c = !1, u = +n[0], a = +n[1], t) : c ? null : [u, a]
		}, t.nodeSize = function(n) {
			return arguments.length ? (c = !0, u = +n[0], a = +n[1], t) : c ? [u, a] : null
		}, t
	}

	function ef(t, n, e, r, i) {
		for (var o, u = t.children, a = -1, c = u.length, s = t.value && (i - e) / t.value; ++a < c;) o = u[a], o.x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * s
	}

	function rf(t, n, e, r, i, o) {
		for (var u, a, c, s, f, l, h, p, d, v, _, y, g = [], m = n.children, x = 0, b = m.length, w = n.value; b > x;) {
			for (s = i - e, f = o - r, h = p = l = m[x].value, _ = Math.max(f / s, s / f) / (w * t), y = l * l * _, v = Math.max(p / y, y / h), c = x + 1; b > c; ++c) {
				if (l += a = m[c].value, h > a && (h = a), a > p && (p = a), y = l * l * _, d = Math.max(p / y, y / h), d > v) {
					l -= a;
					break
				}
				v = d
			}
			g.push(u = {
				value: l,
				dice: f > s,
				children: m.slice(x, c)
			}), u.dice ? Bs(u, e, r, i, w ? r += f * l / w : o) : ef(u, e, r, w ? e += s * l / w : i, o), w -= l, x = c
		}
		return g
	}

	function of() {
		function t(t) {
			return t.x0 = t.y0 = 0, t.x1 = i, t.y1 = o, t.eachBefore(n), u = [0], r && t.eachBefore(Ys), t
		}

		function n(t) {
			var n = u[t.depth],
				r = t.x0 + n,
				i = t.y0 + n,
				o = t.x1 - n,
				h = t.y1 - n;
			r > o && (r = o = (r + o) / 2), i > h && (i = h = (i + h) / 2), t.x0 = r, t.y0 = i, t.x1 = o, t.y1 = h, t.children && (n = u[t.depth + 1] = a(t) / 2, r += l(t) - n, i += c(t) - n, o -= s(t) - n, h -= f(t) - n, r > o && (r = o = (r + o) / 2), i > h && (i = h = (i + h) / 2), e(t, r, i, o, h))
		}
		var e = Lm,
			r = !1,
			i = 1,
			o = 1,
			u = [0],
			a = qs,
			c = qs,
			s = qs,
			f = qs,
			l = qs;
		return t.round = function(n) {
			return arguments.length ? (r = !!n, t) : r
		}, t.size = function(n) {
			return arguments.length ? (i = +n[0], o = +n[1], t) : [i, o]
		}, t.tile = function(n) {
			return arguments.length ? (e = Ls(n), t) : e
		}, t.padding = function(n) {
			return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner()
		}, t.paddingInner = function(n) {
			return arguments.length ? (a = "function" == typeof n ? n : Us(+n),
				t) : a
		}, t.paddingOuter = function(n) {
			return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop()
		}, t.paddingTop = function(n) {
			return arguments.length ? (c = "function" == typeof n ? n : Us(+n), t) : c
		}, t.paddingRight = function(n) {
			return arguments.length ? (s = "function" == typeof n ? n : Us(+n), t) : s
		}, t.paddingBottom = function(n) {
			return arguments.length ? (f = "function" == typeof n ? n : Us(+n), t) : f
		}, t.paddingLeft = function(n) {
			return arguments.length ? (l = "function" == typeof n ? n : Us(+n), t) : l
		}, t
	}

	function uf(t, n, e, r, i) {
		function o(t, n, e, r, i, u, a) {
			if (t >= n - 1) {
				var s = c[t];
				return s.x0 = r, s.y0 = i, s.x1 = u, s.y1 = a, void 0
			}
			for (var l = f[t], h = e / 2 + l, p = t + 1, d = n - 1; d > p;) {
				var v = p + d >>> 1;
				f[v] < h ? p = v + 1 : d = v
			}
			var _ = f[p] - l,
				y = e - _;
			if (a - i > u - r) {
				var g = (i * y + a * _) / e;
				o(t, p, _, r, i, u, g), o(p, n, y, r, g, u, a)
			} else {
				var m = (r * y + u * _) / e;
				o(t, p, _, r, i, m, a), o(p, n, y, m, i, u, a)
			}
		}
		var u, a, c = t.children,
			s = c.length,
			f = new Array(s + 1);
		for (f[0] = a = u = 0; s > u; ++u) f[u + 1] = a += c[u].value;
		o(0, s, t.value, n, e, r, i)
	}

	function af(t, n, e, r, i) {
		(1 & t.depth ? ef : Bs)(t, n, e, r, i)
	}

	function cf(t, n) {
		function e() {
			var e, i, o = r.length,
				u = 0,
				a = 0;
			for (e = 0; o > e; ++e) i = r[e], u += i.x, a += i.y;
			for (u = u / o - t, a = a / o - n, e = 0; o > e; ++e) i = r[e], i.x -= u, i.y -= a
		}
		var r;
		return null == t && (t = 0), null == n && (n = 0), e.initialize = function(t) {
			r = t
		}, e.x = function(n) {
			return arguments.length ? (t = +n, e) : t
		}, e.y = function(t) {
			return arguments.length ? (n = +t, e) : n
		}, e
	}

	function sf(t) {
		return function() {
			return t
		}
	}

	function ff() {
		return 1e-6 * (Math.random() - .5)
	}

	function lf(t) {
		return t.x + t.vx
	}

	function hf(t) {
		return t.y + t.vy
	}

	function pf(t) {
		function n() {
			function t(t, e, r, i, u) {
				var a = t.data,
					p = t.r,
					d = l + p; {
					if (!a) return e > s + d || s - d > i || r > f + d || f - d > u;
					if (a.index > n) {
						var v = s - a.x - a.vx,
							_ = f - a.y - a.vy,
							y = v * v + _ * _;
						d * d > y && (0 === v && (v = ff(), y += v * v), 0 === _ && (_ = ff(), y += _ * _), y = (d - (y = Math.sqrt(y))) / y * o, c.vx += (v *= y) * (d = (p *= p) / (h + p)), c.vy += (_ *= y) * d, a.vx -= v * (d = 1 - d), a.vy -= _ * d)
					}
				}
			}
			for (var n, a, c, s, f, l, h, p = r.length, d = 0; u > d; ++d)
				for (a = jt(r, lf, hf).visitAfter(e), n = 0; p > n; ++n) c = r[n], l = i[n], h = l * l, s = c.x + c.vx, f = c.y + c.vy, a.visit(t)
		}

		function e(t) {
			if (t.data) return t.r = i[t.data.index];
			for (var n = t.r = 0; 4 > n; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
		}
		var r, i, o = 1,
			u = 1;
		return "function" != typeof t && (t = sf(null == t ? 1 : +t)), n.initialize = function(n) {
			var e, o = (r = n).length;
			for (i = new Array(o), e = 0; o > e; ++e) i[e] = +t(r[e], e, r)
		}, n.iterations = function(t) {
			return arguments.length ? (u = +t, n) : u
		}, n.strength = function(t) {
			return arguments.length ? (o = +t, n) : o
		}, n.radius = function(e) {
			return arguments.length ? (t = "function" == typeof e ? e : sf(+e), n) : t
		}, n
	}

	function df(t, n) {
		return n
	}

	function vf(t) {
		function n(t) {
			return 1 / Math.min(s[t.source.index], s[t.target.index])
		}

		function e(n) {
			for (var e = 0, r = t.length; d > e; ++e)
				for (var i, o, c, s, l, h, p, v = 0; r > v; ++v) i = t[v], o = i.source, c = i.target, s = c.x + c.vx - o.x - o.vx || ff(), l = c.y + c.vy - o.y - o.vy || ff(), h = Math.sqrt(s * s + l * l), h = (h - a[v]) / h * n * u[v], s *= h, l *= h, c.vx -= s * (p = f[v]), c.vy -= l * p, o.vx += s * (p = 1 - p), o.vy += l * p
		}

		function r() {
			if (c) {
				var n, e, r = c.length,
					h = t.length,
					p = L(c, l);
				for (n = 0, s = new Array(r); r > n; ++n) s[n] = 0;
				for (n = 0; h > n; ++n) e = t[n], e.index = n, "object" != typeof e.source && (e.source = p.get(e.source)), "object" != typeof e.target && (e.target = p.get(e.target)), ++s[e.source.index], ++s[e.target.index];
				for (n = 0, f = new Array(h); h > n; ++n) e = t[n], f[n] = s[e.source.index] / (s[e.source.index] + s[e.target.index]);
				u = new Array(h), i(), a = new Array(h), o()
			}
		}

		function i() {
			if (c)
				for (var n = 0, e = t.length; e > n; ++n) u[n] = +h(t[n], n, t)
		}

		function o() {
			if (c)
				for (var n = 0, e = t.length; e > n; ++n) a[n] = +p(t[n], n, t)
		}
		var u, a, c, s, f, l = df,
			h = n,
			p = sf(30),
			d = 1;
		return null == t && (t = []), e.initialize = function(t) {
			c = t, r()
		}, e.links = function(n) {
			return arguments.length ? (t = n, r(), e) : t
		}, e.id = function(t) {
			return arguments.length ? (l = t, e) : l
		}, e.iterations = function(t) {
			return arguments.length ? (d = +t, e) : d
		}, e.strength = function(t) {
			return arguments.length ? (h = "function" == typeof t ? t : sf(+t), i(), e) : h
		}, e.distance = function(t) {
			return arguments.length ? (p = "function" == typeof t ? t : sf(+t), o(), e) : p
		}, e
	}

	function _f(t) {
		return t.x
	}

	function yf(t) {
		return t.y
	}

	function gf(t) {
		function n() {
			e(), d.call("tick", o), a > u && (p.stop(), d.call("end", o))
		}

		function e() {
			var n, e, r, i = t.length;
			for (u += (s - u) * c, l.each(function(t) {
					t(u)
				}), n = 0; i > n; ++n) e = t[n], e.x += e.vx *= f, e.y += e.vy *= f;
			for (n in h) r = h[n], e = t[n], e.x = r.x, e.y = r.y, e.vx = e.vy = 0
		}

		function r() {
			for (var n, e = 0, r = t.length; r > e; ++e) {
				if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
					var i = Um * Math.sqrt(e),
						o = e * Rm;
					n.x = i * Math.cos(o), n.y = i * Math.sin(o)
				}(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
			}
		}

		function i(n) {
			return n.initialize && n.initialize(t), n
		}
		var o, u = 1,
			a = .001,
			c = 1 - Math.pow(a, 1 / 300),
			s = 0,
			f = .6,
			l = L(),
			h = {},
			p = Ir(n),
			d = wr("tick", "end");
		return null == t && (t = []), r(), o = {
			tick: e,
			restart: function() {
				return p.restart(n), o
			},
			stop: function() {
				return p.stop(), o
			},
			nodes: function(n) {
				return arguments.length ? (t = n, r(), l.each(i), o) : t
			},
			alpha: function(t) {
				return arguments.length ? (u = +t, o) : u
			},
			alphaMin: function(t) {
				return arguments.length ? (a = +t, o) : a
			},
			alphaDecay: function(t) {
				return arguments.length ? (c = +t, o) : +c
			},
			alphaTarget: function(t) {
				return arguments.length ? (s = +t, o) : s
			},
			drag: function(t) {
				return arguments.length ? (f = 1 - t, o) : 1 - f
			},
			force: function(t, n) {
				return arguments.length > 1 ? (null == n ? l.remove(t) : l.set(t, i(n)), o) : l.get(t)
			},
			fix: function(t, n, e) {
				return h[t.index] = {
					x: null == n ? t.x : +n,
					y: null == e ? t.y : +e
				}, o
			},
			unfix: function(t) {
				return delete h[t.index], o
			},
			unfixAll: function() {
				return h = {}, o
			},
			find: function(n, e, r) {
				var i, o, u, a, c, s = 0,
					f = t.length;
				for (null == r ? r = 1 / 0 : r *= r, s = 0; f > s; ++s) a = t[s], i = n - a.x, o = e - a.y, u = i * i + o * o, r > u && (c = a, r = u);
				return c
			},
			on: function(t, n) {
				return arguments.length > 1 ? (d.on(t, n), o) : d.on(t)
			}
		}
	}

	function mf() {
		function t(t) {
			var n, a = i.length,
				c = jt(i, _f, yf).visitAfter(e);
			for (u = t, n = 0; a > n; ++n) o = i[n], c.visit(r)
		}

		function n() {
			if (i) {
				var t, n = i.length;
				for (a = new Array(n), t = 0; n > t; ++t) a[t] = +c(i[t], t, i)
			}
		}

		function e(t) {
			var n, e, r, i, o, u = 0;
			if (t.length) {
				for (r = i = o = 0; 4 > o; ++o)(n = t[o]) && (e = n.value) && (u += e, r += e * n.x, i += e * n.y);
				t.x = r / u, t.y = i / u
			} else {
				n = t, n.x = n.data.x, n.y = n.data.y;
				do u += a[n.data.index]; while (n = n.next)
			}
			t.value = u
		}

		function r(t, n, e, r) {
			if (!t.value) return !0;
			var i = t.x - o.x,
				c = t.y - o.y,
				h = r - n,
				p = i * i + c * c;
			if (p > h * h / l) return f > p && (0 === i && (i = ff(), p += i * i), 0 === c && (c = ff(), p += c * c), s > p && (p = Math.sqrt(s * p)), o.vx += i * t.value * u / p, o.vy += c * t.value * u / p), !0;
			if (!(t.length || p >= f)) {
				(t.data !== o || t.next) && (0 === i && (i = ff(), p += i * i), 0 === c && (c = ff(), p += c * c), s > p && (p = Math.sqrt(s * p)));
				do t.data !== o && (h = a[t.data.index] * u / p, o.vx += i * h, o.vy += c * h); while (t = t.next)
			}
		}
		var i, o, u, a, c = sf(-30),
			s = 1,
			f = 1 / 0,
			l = .81;
		return t.initialize = function(t) {
			i = t, n()
		}, t.strength = function(e) {
			return arguments.length ? (c = "function" == typeof e ? e : sf(+e), n(), t) : c
		}, t.distanceMin = function(n) {
			return arguments.length ? (s = n * n, t) : Math.sqrt(s)
		}, t.distanceMax = function(n) {
			return arguments.length ? (f = n * n, t) : Math.sqrt(f)
		}, t.theta = function(n) {
			return arguments.length ? (l = n * n, t) : Math.sqrt(l)
		}, t
	}

	function xf(t) {
		function n(t) {
			for (var n, e = 0, u = r.length; u > e; ++e) n = r[e], n.vx += (o[e] - n.x) * i[e] * t
		}

		function e() {
			if (r) {
				var n, e = r.length;
				for (i = new Array(e), o = new Array(e), n = 0; e > n; ++n) i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r)
			}
		}
		var r, i, o, u = sf(.1);
		return "function" != typeof t && (t = sf(null == t ? 0 : +t)), n.initialize = function(t) {
			r = t, e()
		}, n.strength = function(t) {
			return arguments.length ? (u = "function" == typeof t ? t : sf(+t), e(), n) : u
		}, n.x = function(r) {
			return arguments.length ? (t = "function" == typeof r ? r : sf(+r), e(), n) : t
		}, n
	}

	function bf(t) {
		function n(t) {
			for (var n, e = 0, u = r.length; u > e; ++e) n = r[e], n.vy += (o[e] - n.y) * i[e] * t
		}

		function e() {
			if (r) {
				var n, e = r.length;
				for (i = new Array(e), o = new Array(e), n = 0; e > n; ++n) i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r)
			}
		}
		var r, i, o, u = sf(.1);
		return "function" != typeof t && (t = sf(null == t ? 0 : +t)), n.initialize = function(t) {
			r = t, e()
		}, n.strength = function(t) {
			return arguments.length ? (u = "function" == typeof t ? t : sf(+t), e(), n) : u
		}, n.y = function(r) {
			return arguments.length ? (t = "function" == typeof r ? r : sf(+r), e(), n) : t
		}, n
	}

	function wf() {
		t.event.stopImmediatePropagation()
	}

	function Mf() {
		t.event.preventDefault(), t.event.stopImmediatePropagation()
	}

	function Tf(t) {
		var n = t.document.documentElement,
			e = Ca(t).on("dragstart.drag", Mf, !0);
		"onselectstart" in n ? e.on("selectstart.drag", Mf, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
	}

	function kf(t, n) {
		var e = t.document.documentElement,
			r = Ca(t).on("dragstart.drag", null);
		n && (r.on("click.drag", Mf, !0), setTimeout(function() {
			r.on("click.drag", null)
		}, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
	}

	function Nf(t) {
		return function() {
			return t
		}
	}

	function Sf(t, n, e, r, i, o, u, a, c, s) {
		this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = s
	}

	function Af() {
		return !t.event.button
	}

	function Ef() {
		return this.parentNode
	}

	function Cf(n) {
		return null == n ? {
			x: t.event.x,
			y: t.event.y
		} : n
	}

	function zf() {
		function n(t) {
			t.on("mousedown.drag", e).on("touchstart.drag", o).on("touchmove.drag", u).on("touchend.drag touchcancel.drag", a).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
		}

		function e() {
			if (!f && l.apply(this, arguments)) {
				var n = c("mouse", h.apply(this, arguments), lu, this, arguments);
				n && (Ca(t.event.view).on("mousemove.drag", r, !0).on("mouseup.drag", i, !0), Tf(t.event.view), wf(), s = !1, n("start"))
			}
		}

		function r() {
			Mf(), s = !0, d.mouse("drag")
		}

		function i() {
			Ca(t.event.view).on("mousemove.drag mouseup.drag", null), kf(t.event.view, s), Mf(), d.mouse("end")
		}

		function o() {
			if (l.apply(this, arguments)) {
				var n, e, r = t.event.changedTouches,
					i = h.apply(this, arguments),
					o = r.length;
				for (n = 0; o > n; ++n)(e = c(r[n].identifier, i, Pa, this, arguments)) && (wf(), e("start"))
			}
		}

		function u() {
			var n, e, r = t.event.changedTouches,
				i = r.length;
			for (n = 0; i > n; ++n)(e = d[r[n].identifier]) && (Mf(), e("drag"))
		}

		function a() {
			var n, e, r = t.event.changedTouches,
				i = r.length;
			for (f && clearTimeout(f), f = setTimeout(function() {
					f = null
				}, 500), n = 0; i > n; ++n)(e = d[r[n].identifier]) && (wf(), e("end"))
		}

		function c(e, r, i, o, u) {
			var a, c, s, f = i(r, e),
				l = v.copy();
			if (cu(new Sf(n, "beforestart", a, e, _, f[0], f[1], 0, 0, l), function() {
					return null == (t.event.subject = a = p.apply(o, u)) ? !1 : (c = a.x - f[0] || 0, s = a.y - f[1] || 0, !0)
				})) return function h(t) {
				var p, v = f;
				switch (t) {
					case "start":
						d[e] = h, p = _++;
						break;
					case "end":
						delete d[e], --_;
					case "drag":
						f = i(r, e), p = _
				}
				cu(new Sf(n, t, a, e, p, f[0] + c, f[1] + s, f[0] - v[0], f[1] - v[1], l), l.apply, l, [t, o, u])
			}
		}
		var s, f, l = Af,
			h = Ef,
			p = Cf,
			d = {},
			v = wr("start", "drag", "end"),
			_ = 0;
		return n.filter = function(t) {
			return arguments.length ? (l = "function" == typeof t ? t : Nf(!!t), n) : l
		}, n.container = function(t) {
			return arguments.length ? (h = "function" == typeof t ? t : Nf(t), n) : h
		}, n.subject = function(t) {
			return arguments.length ? (p = "function" == typeof t ? t : Nf(t), n) : p
		}, n.on = function() {
			var t = v.on.apply(v, arguments);
			return t === v ? n : t
		}, n
	}

	function Pf(t) {
		return function() {
			return t
		}
	}

	function Lf(t) {
		return t[0]
	}

	function qf(t) {
		return t[1]
	}

	function Uf() {
		this._ = null
	}

	function Rf(t) {
		t.U = t.C = t.L = t.R = t.P = t.N = null
	}

	function Df(t, n) {
		var e = n,
			r = n.R,
			i = e.U;
		i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
	}

	function Of(t, n) {
		var e = n,
			r = n.L,
			i = e.U;
		i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
	}

	function Ff(t) {
		for (; t.L;) t = t.L;
		return t
	}

	function If(t, n, e, r) {
		var i = [null, null],
			o = Ym.push(i) - 1;
		return i.left = t, i.right = n, e && Bf(i, t, n, e), r && Bf(i, n, t, r), Fm[t.index].halfedges.push(o), Fm[n.index].halfedges.push(o), i
	}

	function Yf(t, n, e) {
		var r = [n, e];
		return r.left = t, r
	}

	function Bf(t, n, e, r) {
		t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
	}

	function jf(t, n, e, r, i) {
		var o, u = t[0],
			a = t[1],
			c = u[0],
			s = u[1],
			f = a[0],
			l = a[1],
			h = 0,
			p = 1,
			d = f - c,
			v = l - s;
		if (o = n - c, d || !(o > 0)) {
			if (o /= d, 0 > d) {
				if (h > o) return;
				p > o && (p = o)
			} else if (d > 0) {
				if (o > p) return;
				o > h && (h = o)
			}
			if (o = r - c, d || !(0 > o)) {
				if (o /= d, 0 > d) {
					if (o > p) return;
					o > h && (h = o)
				} else if (d > 0) {
					if (h > o) return;
					p > o && (p = o)
				}
				if (o = e - s, v || !(o > 0)) {
					if (o /= v, 0 > v) {
						if (h > o) return;
						p > o && (p = o)
					} else if (v > 0) {
						if (o > p) return;
						o > h && (h = o)
					}
					if (o = i - s, v || !(0 > o)) {
						if (o /= v, 0 > v) {
							if (o > p) return;
							o > h && (h = o)
						} else if (v > 0) {
							if (h > o) return;
							p > o && (p = o)
						}
						return h > 0 || 1 > p ? (h > 0 && (t[0] = [c + h * d, s + h * v]), 1 > p && (t[1] = [c + p * d, s + p * v]), !0) : !0
					}
				}
			}
		}
	}

	function Hf(t, n, e, r, i) {
		var o = t[1];
		if (o) return !0;
		var u, a, c = t[0],
			s = t.left,
			f = t.right,
			l = s[0],
			h = s[1],
			p = f[0],
			d = f[1],
			v = (l + p) / 2,
			_ = (h + d) / 2;
		if (d === h) {
			if (n > v || v >= r) return;
			if (l > p) {
				if (c) {
					if (c[1] >= i) return
				} else c = [v, e];
				o = [v, i]
			} else {
				if (c) {
					if (c[1] < e) return
				} else c = [v, i];
				o = [v, e]
			}
		} else if (u = (l - p) / (d - h), a = _ - u * v, -1 > u || u > 1)
			if (l > p) {
				if (c) {
					if (c[1] >= i) return
				} else c = [(e - a) / u, e];
				o = [(i - a) / u, i]
			} else {
				if (c) {
					if (c[1] < e) return
				} else c = [(i - a) / u, i];
				o = [(e - a) / u, e]
			}
		else if (d > h) {
			if (c) {
				if (c[0] >= r) return
			} else c = [n, u * n + a];
			o = [r, u * r + a]
		} else {
			if (c) {
				if (c[0] < n) return
			} else c = [r, u * r + a];
			o = [n, u * n + a]
		}
		return t[0] = c, t[1] = o, !0
	}

	function Xf(t, n, e, r) {
		for (var i, o = Ym.length; o--;) Hf(i = Ym[o], t, n, e, r) && jf(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > Hm || Math.abs(i[0][1] - i[1][1]) > Hm) || delete Ym[o]
	}

	function Vf(t) {
		return Fm[t.index] = {
			site: t,
			halfedges: []
		}
	}

	function Wf(t, n) {
		var e = t.site,
			r = n.left,
			i = n.right;
		return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
	}

	function $f(t, n) {
		return n[+(n.left !== t.site)]
	}

	function Zf(t, n) {
		return n[+(n.left === t.site)]
	}

	function Gf() {
		for (var t, n, e, r, i = 0, o = Fm.length; o > i; ++i)
			if ((t = Fm[i]) && (r = (n = t.halfedges).length)) {
				var u = new Array(r),
					a = new Array(r);
				for (e = 0; r > e; ++e) u[e] = e, a[e] = Wf(t, Ym[n[e]]);
				for (u.sort(function(t, n) {
						return a[n] - a[t]
					}), e = 0; r > e; ++e) a[e] = n[u[e]];
				for (e = 0; r > e; ++e) n[e] = a[e]
			}
	}

	function Jf(t, n, e, r) {
		var i, o, u, a, c, s, f, l, h, p, d, v, _ = Fm.length,
			y = !0;
		for (i = 0; _ > i; ++i)
			if (o = Fm[i]) {
				for (u = o.site, c = o.halfedges, a = c.length; a--;) Ym[c[a]] || c.splice(a, 1);
				for (a = 0, s = c.length; s > a;) p = Zf(o, Ym[c[a]]), d = p[0], v = p[1], f = $f(o, Ym[c[++a % s]]), l = f[0], h = f[1], (Math.abs(d - l) > Hm || Math.abs(v - h) > Hm) && (c.splice(a, 0, Ym.push(Yf(u, p, Math.abs(d - t) < Hm && r - v > Hm ? [t, Math.abs(l - t) < Hm ? h : r] : Math.abs(v - r) < Hm && e - d > Hm ? [Math.abs(h - r) < Hm ? l : e, r] : Math.abs(d - e) < Hm && v - n > Hm ? [e, Math.abs(l - e) < Hm ? h : n] : Math.abs(v - n) < Hm && d - t > Hm ? [Math.abs(h - n) < Hm ? l : t, n] : null)) - 1), ++s);
				s && (y = !1)
			}
		if (y) {
			var g, m, x, b = 1 / 0;
			for (i = 0, y = null; _ > i; ++i)(o = Fm[i]) && (u = o.site, g = u[0] - t, m = u[1] - n, x = g * g + m * m, b > x && (b = x, y = o));
			if (y) {
				var w = [t, n],
					M = [t, r],
					T = [e, r],
					k = [e, n];
				y.halfedges.push(Ym.push(Yf(u = y.site, w, M)) - 1, Ym.push(Yf(u, M, T)) - 1, Ym.push(Yf(u, T, k)) - 1, Ym.push(Yf(u, k, w)) - 1)
			}
		}
		for (i = 0; _ > i; ++i)(o = Fm[i]) && (o.halfedges.length || delete Fm[i])
	}

	function Qf() {
		Rf(this), this.x = this.y = this.arc = this.site = this.cy = null
	}

	function Kf(t) {
		var n = t.P,
			e = t.N;
		if (n && e) {
			var r = n.site,
				i = t.site,
				o = e.site;
			if (r !== o) {
				var u = i[0],
					a = i[1],
					c = r[0] - u,
					s = r[1] - a,
					f = o[0] - u,
					l = o[1] - a,
					h = 2 * (c * l - s * f);
				if (!(h >= -Xm)) {
					var p = c * c + s * s,
						d = f * f + l * l,
						v = (l * p - s * d) / h,
						_ = (c * d - f * p) / h,
						y = Bm.pop() || new Qf;
					y.arc = t, y.site = i, y.x = v + u, y.y = (y.cy = _ + a) + Math.sqrt(v * v + _ * _), t.circle = y;
					for (var g = null, m = Im._; m;)
						if (y.y < m.y || y.y === m.y && y.x <= m.x) {
							if (!m.L) {
								g = m.P;
								break
							}
							m = m.L
						} else {
							if (!m.R) {
								g = m;
								break
							}
							m = m.R
						}
					Im.insert(g, y), g || (Dm = y)
				}
			}
		}
	}

	function tl(t) {
		var n = t.circle;
		n && (n.P || (Dm = n.N), Im.remove(n), Bm.push(n), Rf(n), t.circle = null)
	}

	function nl() {
		Rf(this), this.edge = this.site = this.circle = null
	}

	function el(t) {
		var n = jm.pop() || new nl;
		return n.site = t, n
	}

	function rl(t) {
		tl(t), Om.remove(t), jm.push(t), Rf(t)
	}

	function il(t) {
		var n = t.circle,
			e = n.x,
			r = n.cy,
			i = [e, r],
			o = t.P,
			u = t.N,
			a = [t];
		rl(t);
		for (var c = o; c.circle && Math.abs(e - c.circle.x) < Hm && Math.abs(r - c.circle.cy) < Hm;) o = c.P, a.unshift(c), rl(c), c = o;
		a.unshift(c), tl(c);
		for (var s = u; s.circle && Math.abs(e - s.circle.x) < Hm && Math.abs(r - s.circle.cy) < Hm;) u = s.N, a.push(s), rl(s), s = u;
		a.push(s), tl(s);
		var f, l = a.length;
		for (f = 1; l > f; ++f) s = a[f], c = a[f - 1], Bf(s.edge, c.site, s.site, i);
		c = a[0], s = a[l - 1], s.edge = If(c.site, s.site, null, i), Kf(c), Kf(s)
	}

	function ol(t) {
		for (var n, e, r, i, o = t[0], u = t[1], a = Om._; a;)
			if (r = ul(a, u) - o, r > Hm) a = a.L;
			else {
				if (i = o - al(a, u), !(i > Hm)) {
					r > -Hm ? (n = a.P, e = a) : i > -Hm ? (n = a, e = a.N) : n = e = a;
					break
				}
				if (!a.R) {
					n = a;
					break
				}
				a = a.R
			}
		Vf(t);
		var c = el(t);
		if (Om.insert(n, c), n || e) {
			if (n === e) return tl(n), e = el(n.site), Om.insert(c, e), c.edge = e.edge = If(n.site, c.site), Kf(n), void Kf(e);
			if (!e) return void(c.edge = If(n.site, c.site));
			tl(n), tl(e);
			var s = n.site,
				f = s[0],
				l = s[1],
				h = t[0] - f,
				p = t[1] - l,
				d = e.site,
				v = d[0] - f,
				_ = d[1] - l,
				y = 2 * (h * _ - p * v),
				g = h * h + p * p,
				m = v * v + _ * _,
				x = [(_ * g - p * m) / y + f, (h * m - v * g) / y + l];
			Bf(e.edge, s, d, x), c.edge = If(s, t, null, x), e.edge = If(t, d, null, x), Kf(n), Kf(e)
		}
	}

	function ul(t, n) {
		var e = t.site,
			r = e[0],
			i = e[1],
			o = i - n;
		if (!o) return r;
		var u = t.P;
		if (!u) return -(1 / 0);
		e = u.site;
		var a = e[0],
			c = e[1],
			s = c - n;
		if (!s) return a;
		var f = a - r,
			l = 1 / o - 1 / s,
			h = f / s;
		return l ? (-h + Math.sqrt(h * h - 2 * l * (f * f / (-2 * s) - c + s / 2 + i - o / 2))) / l + r : (r + a) / 2
	}

	function al(t, n) {
		var e = t.N;
		if (e) return ul(e, n);
		var r = t.site;
		return r[1] === n ? r[0] : 1 / 0
	}

	function cl(t, n, e) {
		return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
	}

	function sl(t, n) {
		return n[1] - t[1] || n[0] - t[0]
	}

	function fl(t, n) {
		var e, r, i, o = t.sort(sl).pop();
		for (Ym = [], Fm = new Array(t.length), Om = new Uf, Im = new Uf;;)
			if (i = Dm, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (ol(o), e = o[0], r = o[1]), o = t.pop();
			else {
				if (!i) break;
				il(i.arc)
			}
		if (Gf(), n) {
			var u = +n[0][0],
				a = +n[0][1],
				c = +n[1][0],
				s = +n[1][1];
			Xf(u, a, c, s), Jf(u, a, c, s)
		}
		this.edges = Ym, this.cells = Fm, Om = Im = Ym = Fm = null
	}

	function ll() {
		function t(t) {
			return new fl(t.map(function(r, i) {
				var o = [Math.round(n(r, i, t) / Hm) * Hm, Math.round(e(r, i, t) / Hm) * Hm];
				return o.index = i, o.data = r, o
			}), r)
		}
		var n = Lf,
			e = qf,
			r = null;
		return t.polygons = function(n) {
			return t(n).polygons()
		}, t.links = function(n) {
			return t(n).links()
		}, t.triangles = function(n) {
			return t(n).triangles()
		}, t.x = function(e) {
			return arguments.length ? (n = "function" == typeof e ? e : Pf(+e), t) : n
		}, t.y = function(n) {
			return arguments.length ? (e = "function" == typeof n ? n : Pf(+n), t) : e
		}, t.extent = function(n) {
			return arguments.length ? (r = null == n ? null : [
				[+n[0][0], +n[0][1]],
				[+n[1][0], +n[1][1]]
			], t) : r && [
				[r[0][0], r[0][1]],
				[r[1][0], r[1][1]]
			]
		}, t.size = function(n) {
			return arguments.length ? (r = null == n ? null : [
				[0, 0],
				[+n[0], +n[1]]
			], t) : r && [r[1][0], r[1][1]]
		}, t
	}

	function hl(t) {
		return function() {
			return t
		}
	}

	function pl(t, n, e) {
		this.target = t, this.type = n, this.transform = e
	}

	function dl(t, n, e) {
		this.k = t, this.x = n, this.y = e
	}

	function vl(t) {
		return t.__zoom || Vm
	}

	function _l() {
		t.event.stopImmediatePropagation()
	}

	function yl() {
		t.event.preventDefault(), t.event.stopImmediatePropagation()
	}

	function gl() {
		return !t.event.button
	}

	function ml() {
		var t = this.ownerSVGElement;
		return [
			[0, 0], t ? [t.width.baseVal.value, t.height.baseVal.value] : [this.clientWidth, this.clientHeight]
		]
	}

	function xl() {
		return this.__zoom || Vm
	}

	function bl() {
		function n(t) {
			t.on("wheel.zoom", s).on("mousedown.zoom", f).on("dblclick.zoom", l).on("touchstart.zoom", h).on("touchmove.zoom", p).on("touchend.zoom touchcancel.zoom", d).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").property("__zoom", xl)
		}

		function e(t, n) {
			return n = Math.max(M, Math.min(T, n)), n === t.k ? t : new dl(n, t.x, t.y)
		}

		function r(t, n, e) {
			var r = n[0] - e[0] * t.k,
				i = n[1] - e[1] * t.k;
			return r === t.x && i === t.y ? t : new dl(t.k, r, i)
		}

		function i(t, n) {
			var e = Math.min(0, t.invertX(n[0][0]) - k) || Math.max(0, t.invertX(n[1][0]) - N),
				r = Math.min(0, t.invertY(n[0][1]) - S) || Math.max(0, t.invertY(n[1][1]) - A);
			return e || r ? t.translate(e, r) : t
		}

		function o(t) {
			return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
		}

		function u(t, n, e) {
			t.on("start.zoom", function() {
				a(this, arguments).start()
			}).on("interrupt.zoom end.zoom", function() {
				a(this, arguments).end()
			}).tween("zoom", function() {
				var t = this,
					r = arguments,
					i = a(t, r),
					u = w.apply(t, r),
					c = e || o(u),
					s = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
					f = t.__zoom,
					l = "function" == typeof n ? n.apply(t, r) : n,
					h = _r(f.invert(c).concat(s / f.k), l.invert(c).concat(s / l.k));
				return function(t) {
					if (1 === t) t = l;
					else {
						var n = h(t),
							e = s / n[2];
						t = new dl(e, c[0] - n[0] * e, c[1] - n[1] * e)
					}
					i.zoom(null, t)
				}
			})
		}

		function a(t, n) {
			for (var e, r = 0, i = C.length; i > r; ++r)
				if ((e = C[r]).that === t) return e;
			return new c(t, n)
		}

		function c(t, n) {
			this.that = t, this.args = n, this.index = -1, this.active = 0
		}

		function s() {
			function n() {
				x = null, o.end()
			}
			if (b.apply(this, arguments)) {
				var o = a(this, arguments),
					u = this.__zoom,
					c = Math.max(M, Math.min(T, u.k * Math.pow(2, -t.event.deltaY * (t.event.deltaMode ? 120 : 1) / 500)));
				if (x) {
					var s = lu(this);
					_[0] === s[0] && _[1] === s[1] || (y = u.invert(_ = s)), clearTimeout(x)
				} else {
					if (u.k === c) return;
					o.extent = w.apply(this, arguments), y = u.invert(_ = lu(this)), Fa(this), o.start()
				}
				yl(), x = setTimeout(n, L), o.zoom("mouse", i(r(e(u, c), _, y), o.extent))
			}
		}

		function f() {
			function n() {
				yl(), v = !0, o.zoom("mouse", i(r(o.that.__zoom, _ = lu(o.that), y), o.extent))
			}

			function e() {
				u.on("mousemove.zoom mouseup.zoom", null), kf(t.event.view, v), yl(), o.end()
			}
			if (!m && b.apply(this, arguments)) {
				var o = a(this, arguments),
					u = Ca(t.event.view).on("mousemove.zoom", n, !0).on("mouseup.zoom", e, !0);
				Tf(t.event.view), _l(), v = !1, o.extent = w.apply(this, arguments), y = this.__zoom.invert(_ = lu(this)), Fa(this), o.start()
			}
		}

		function l() {
			if (b.apply(this, arguments)) {
				var o = this.__zoom,
					a = lu(this),
					c = o.invert(a),
					s = o.k * (t.event.shiftKey ? .5 : 2),
					f = i(r(e(o, s), a, c), w.apply(this, arguments));
				yl(), E > 0 ? Ca(this).transition().duration(E).call(u, f, a) : Ca(this).call(n.transform, f)
			}
		}

		function h() {
			if (b.apply(this, arguments)) {
				var n, e, r, i = a(this, arguments),
					o = t.event.changedTouches,
					u = o.length;
				for (_l(), n = 0; u > n; ++n) e = o[n], r = Pa(this, o, e.identifier), r = [r, this.__zoom.invert(r), e.identifier], i.touch0 ? i.touch1 || (i.touch1 = r) : i.touch0 = r;
				return g && (g = clearTimeout(g), !i.touch1) ? (i.end(), l.apply(this, arguments)) : void(t.event.touches.length === u && (g = setTimeout(function() {
					g = null
				}, P), Fa(this), i.extent = w.apply(this, arguments), i.start()))
			}
		}

		function p() {
			var n, o, u, c, s = a(this, arguments),
				f = t.event.changedTouches,
				l = f.length;
			for (yl(), g && (g = clearTimeout(g)), n = 0; l > n; ++n) o = f[n], u = Pa(this, f, o.identifier), s.touch0 && s.touch0[2] === o.identifier ? s.touch0[0] = u : s.touch1 && s.touch1[2] === o.identifier && (s.touch1[0] = u);
			if (o = s.that.__zoom, s.touch1) {
				var h = s.touch0[0],
					p = s.touch0[1],
					d = s.touch1[0],
					v = s.touch1[1],
					_ = (_ = d[0] - h[0]) * _ + (_ = d[1] - h[1]) * _,
					y = (y = v[0] - p[0]) * y + (y = v[1] - p[1]) * y;
				o = e(o, Math.sqrt(_ / y)), u = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2], c = [(p[0] + v[0]) / 2, (p[1] + v[1]) / 2]
			} else {
				if (!s.touch0) return;
				u = s.touch0[0], c = s.touch0[1]
			}
			s.zoom("touch", i(r(o, u, c), s.extent))
		}

		function d() {
			var n, e, r = a(this, arguments),
				i = t.event.changedTouches,
				o = i.length;
			for (_l(), m && clearTimeout(m), m = setTimeout(function() {
					m = null
				}, P), n = 0; o > n; ++n) e = i[n], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
			r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 || r.end()
		}
		var v, _, y, g, m, x, b = gl,
			w = ml,
			M = 0,
			T = 1 / 0,
			k = -T,
			N = T,
			S = k,
			A = N,
			E = 250,
			C = [],
			z = wr("start", "zoom", "end"),
			P = 500,
			L = 150;
		return n.transform = function(t, n) {
			var e = t.selection ? t.selection() : t;
			e.property("__zoom", xl), t !== e ? u(t, n) : e.interrupt().each(function() {
				a(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
			})
		}, n.scaleBy = function(t, e) {
			n.scaleTo(t, function() {
				var t = this.__zoom.k,
					n = "function" == typeof e ? e.apply(this, arguments) : e;
				return t * n
			})
		}, n.scaleTo = function(t, u) {
			n.transform(t, function() {
				var t = w.apply(this, arguments),
					n = this.__zoom,
					a = o(t),
					c = n.invert(a),
					s = "function" == typeof u ? u.apply(this, arguments) : u;
				return i(r(e(n, s), a, c), t)
			})
		}, n.translateBy = function(t, e, r) {
			n.transform(t, function() {
				return i(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), w.apply(this, arguments))
			})
		}, c.prototype = {
			start: function() {
				return 1 === ++this.active && (this.index = C.push(this) - 1, this.emit("start")), this
			},
			zoom: function(t, n) {
				return _ && "mouse" !== t && (y = n.invert(_)), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
			},
			end: function() {
				return 0 === --this.active && (C.splice(this.index, 1), _ = y = null, this.index = -1, this.emit("end")), this
			},
			emit: function(t) {
				cu(new pl(n, t, this.that.__zoom), z.apply, z, [t, this.that, this.args])
			}
		}, n.filter = function(t) {
			return arguments.length ? (b = "function" == typeof t ? t : hl(!!t), n) : b
		}, n.extent = function(t) {
			return arguments.length ? (w = "function" == typeof t ? t : hl([
				[+t[0][0], +t[0][1]],
				[+t[1][0], +t[1][1]]
			]), n) : w
		}, n.scaleExtent = function(t) {
			return arguments.length ? (M = +t[0], T = +t[1], n) : [M, T]
		}, n.translateExtent = function(t) {
			return arguments.length ? (k = +t[0][0], N = +t[1][0], S = +t[0][1], A = +t[1][1], n) : [
				[k, S],
				[N, A]
			]
		}, n.duration = function(t) {
			return arguments.length ? (E = +t, n) : E
		}, n.on = function() {
			var t = z.on.apply(z, arguments);
			return t === z ? n : t
		}, n
	}

	function wl(t) {
		return function() {
			return t
		}
	}

	function Ml(t, n, e) {
		this.target = t, this.type = n, this.selection = e
	}

	function Tl() {
		t.event.stopImmediatePropagation()
	}

	function kl() {
		t.event.preventDefault(), t.event.stopImmediatePropagation()
	}

	function Nl(t) {
		return {
			type: t
		}
	}

	function Sl() {
		return !t.event.button
	}

	function Al() {
		var t = this.ownerSVGElement;
		return [
			[0, 0],
			[t.width.baseVal.value, t.height.baseVal.value]
		]
	}

	function El(t) {
		for (; !t.__brush;)
			if (!(t = t.parentNode)) return;
		return t.__brush
	}

	function Cl(t) {
		return t[0][0] === t[1][0] || t[0][1] === t[1][1]
	}

	function zl(t) {
		var n = t.__brush;
		return n ? n.dim.output(n.selection) : null
	}

	function Pl() {
		return Ul(Jm)
	}

	function Ll() {
		return Ul(Qm)
	}

	function ql() {
		return Ul(Km)
	}

	function Ul(n) {
		function e(t) {
			var e = t.property("__brush", a).selectAll(".overlay").data([Nl("overlay")]);
			e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", tx.overlay).merge(e).each(function() {
				var t = El(this).extent;
				Ca(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
			}), t.selectAll(".selection").data([Nl("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", tx.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
			var i = t.selectAll(".handle").data(n.handles, function(t) {
				return t.type
			});
			i.exit().remove(), i.enter().append("rect").attr("class", function(t) {
				return "handle handle--" + t.type
			}).attr("cursor", function(t) {
				return tx[t.type]
			}), t.each(r).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", u)
		}

		function r() {
			var t = Ca(this),
				n = El(this).selection;
			n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function(t) {
				return "e" === t.type[t.type.length - 1] ? n[1][0] - h / 2 : n[0][0] - h / 2
			}).attr("y", function(t) {
				return "s" === t.type[0] ? n[1][1] - h / 2 : n[0][1] - h / 2
			}).attr("width", function(t) {
				return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + h : h
			}).attr("height", function(t) {
				return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + h : h
			})) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
		}

		function i(t, n) {
			return t.__brush.emitter || new o(t, n)
		}

		function o(t, n) {
			this.that = t, this.args = n, this.state = t.__brush, this.active = 0
		}

		function u() {
			function e() {
				var t = lu(T);
				!R || w || M || (Math.abs(t[0] - O[0]) > Math.abs(t[1] - O[1]) ? M = !0 : w = !0), O = t, b = !0, kl(), o()
			}

			function o() {
				var t;
				switch (m = O[0] - D[0], x = O[1] - D[1], N) {
					case $m:
					case Wm:
						S && (m = Math.max(P - l, Math.min(q - v, m)), h = l + m, _ = v + m), A && (x = Math.max(L - p, Math.min(U - y, x)), d = p + x, g = y + x);
						break;
					case Zm:
						0 > S ? (m = Math.max(P - l, Math.min(q - l, m)), h = l + m, _ = v) : S > 0 && (m = Math.max(P - v, Math.min(q - v, m)), h = l, _ = v + m), 0 > A ? (x = Math.max(L - p, Math.min(U - p, x)), d = p + x, g = y) : A > 0 && (x = Math.max(L - y, Math.min(U - y, x)), d = p, g = y + x);
						break;
					case Gm:
						S && (h = Math.max(P, Math.min(q, l - m * S)), _ = Math.max(P, Math.min(q, v + m * S))), A && (d = Math.max(L, Math.min(U, p - x * A)), g = Math.max(L, Math.min(U, y + x * A)))
				}
				h > _ && (S *= -1, t = l, l = v, v = t, t = h, h = _, _ = t, k in nx && Y.attr("cursor", tx[k = nx[k]])), d > g && (A *= -1, t = p, p = y, y = t, t = d, d = g, g = t, k in ex && Y.attr("cursor", tx[k = ex[k]])), z = E.selection, w && (h = z[0][0], _ = z[1][0]), M && (d = z[0][1], g = z[1][1]), z[0][0] === h && z[0][1] === d && z[1][0] === _ && z[1][1] === g || (E.selection = [
					[h, d],
					[_, g]
				], r.call(T), F.brush())
			}

			function u() {
				if (Tl(), t.event.touches) {
					if (t.event.touches.length) return;
					c && clearTimeout(c), c = setTimeout(function() {
						c = null
					}, 500), I.on("touchmove.brush touchend.brush touchcancel.brush", null)
				} else kf(t.event.view, b), B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
				I.attr("pointer-events", "all"), Y.attr("cursor", tx.overlay), Cl(z) && (E.selection = null, r.call(T)), F.end()
			}

			function a() {
				switch (t.event.keyCode) {
					case 16:
						R = S && A;
						break;
					case 18:
						N === Zm && (S && (v = _ - m * S, l = h + m * S), A && (y = g - x * A, p = d + x * A), N = Gm, o());
						break;
					case 32:
						N !== Zm && N !== Gm || (0 > S ? v = _ - m : S > 0 && (l = h - m), 0 > A ? y = g - x : A > 0 && (p = d - x), N = $m, Y.attr("cursor", tx.selection), o());
						break;
					default:
						return
				}
				kl()
			}

			function s() {
				switch (t.event.keyCode) {
					case 16:
						R && (w = M = R = !1, o());
						break;
					case 18:
						N === Gm && (0 > S ? v = _ : S > 0 && (l = h), 0 > A ? y = g : A > 0 && (p = d), N = Zm, o());
						break;
					case 32:
						N === $m && (t.event.altKey ? (S && (v = _ - m * S, l = h + m * S), A && (y = g - x * A, p = d + x * A), N = Gm) : (0 > S ? v = _ : S > 0 && (l = h), 0 > A ? y = g : A > 0 && (p = d), N = Zm), Y.attr("cursor", tx[k]), o());
						break;
					default:
						return
				}
				kl()
			}
			if (t.event.touches) {
				if (t.event.changedTouches.length < t.event.touches.length) return kl()
			} else if (c) return;
			if (f.apply(this, arguments)) {
				var l, h, p, d, v, _, y, g, m, x, b, w, M, T = this,
					k = t.event.target.__data__.type,
					N = "selection" === (t.event.metaKey ? k = "overlay" : k) ? Wm : t.event.altKey ? Gm : Zm,
					S = n === Qm ? null : rx[k],
					A = n === Jm ? null : ix[k],
					E = El(T),
					C = E.extent,
					z = E.selection,
					P = C[0][0],
					L = C[0][1],
					q = C[1][0],
					U = C[1][1],
					R = S && A && t.event.shiftKey,
					D = lu(T),
					O = D,
					F = i(T, arguments).beforestart();
				"overlay" === k ? E.selection = z = [
					[l = n === Qm ? P : D[0], p = n === Jm ? L : D[1]],
					[v = n === Qm ? q : l, y = n === Jm ? U : p]
				] : (l = z[0][0], p = z[0][1], v = z[1][0], y = z[1][1]), h = l, d = p, _ = v, g = y;
				var I = Ca(T).attr("pointer-events", "none"),
					Y = I.selectAll(".overlay").attr("cursor", tx[k]);
				if (t.event.touches) I.on("touchmove.brush", e, !0).on("touchend.brush touchcancel.brush", u, !0);
				else {
					var B = Ca(t.event.view).on("keydown.brush", a, !0).on("keyup.brush", s, !0).on("mousemove.brush", e, !0).on("mouseup.brush", u, !0);
					Tf(t.event.view)
				}
				Tl(), Fa(T), r.call(T), F.start()
			}
		}

		function a() {
			var t = this.__brush || {
				selection: null
			};
			return t.extent = s.apply(this, arguments), t.dim = n, t
		}
		var c, s = Al,
			f = Sl,
			l = wr(e, "start", "brush", "end"),
			h = 6;
		return e.move = function(t, e) {
			t.selection ? t.on("start.brush", function() {
				i(this, arguments).beforestart().start()
			}).on("interrupt.brush end.brush", function() {
				i(this, arguments).end()
			}).tween("brush", function() {
				function t(t) {
					u.selection = 1 === t && Cl(s) ? null : f(t), r.call(o), a.brush()
				}
				var o = this,
					u = o.__brush,
					a = i(o, arguments),
					c = u.selection,
					s = n.input("function" == typeof e ? e.apply(this, arguments) : e, u.extent),
					f = ar(c, s);
				return c && s ? t : t(1)
			}) : t.each(function() {
				var t = this,
					o = arguments,
					u = t.__brush,
					a = n.input("function" == typeof e ? e.apply(t, o) : e, u.extent),
					c = i(t, o).beforestart();
				Fa(t), u.selection = null == a || Cl(a) ? null : a, r.call(t), c.start().brush().end()
			})
		}, o.prototype = {
			beforestart: function() {
				return 1 === ++this.active && (this.state.emitter = this, this.starting = !0), this
			},
			start: function() {
				return this.starting && (this.starting = !1, this.emit("start")), this
			},
			brush: function() {
				return this.emit("brush"), this
			},
			end: function() {
				return 0 === --this.active && (delete this.state.emitter, this.emit("end")), this
			},
			emit: function(t) {
				cu(new Ml(e, t, n.output(this.state.selection)), l.apply, l, [t, this.that, this.args])
			}
		}, e.extent = function(t) {
			return arguments.length ? (s = "function" == typeof t ? t : wl([
				[+t[0][0], +t[0][1]],
				[+t[1][0], +t[1][1]]
			]), e) : s
		}, e.filter = function(t) {
			return arguments.length ? (f = "function" == typeof t ? t : wl(!!t), e) : f
		}, e.handleSize = function(t) {
			return arguments.length ? (h = +t, e) : h
		}, e.on = function() {
			var t = l.on.apply(l, arguments);
			return t === l ? e : t
		}, e
	}

	function Rl() {
		return new Dl
	}

	function Dl() {
		this.reset()
	}

	function Ol(t, n, e) {
		var r = t.s = n + e,
			i = r - n,
			o = r - i;
		t.t = n - o + (e - i)
	}

	function Fl(t) {
		return t > 1 ? 0 : -1 > t ? Bx : Math.acos(t)
	}

	function Il(t) {
		return t > 1 ? jx : -1 > t ? -jx : Math.asin(t)
	}

	function Yl(t) {
		return (t = eb(t / 2)) * t
	}

	function Bl() {}

	function jl(t, n) {
		t && ab.hasOwnProperty(t.type) && ab[t.type](t, n)
	}

	function Hl(t, n, e) {
		var r, i = -1,
			o = t.length - e;
		for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
		n.lineEnd()
	}

	function Xl(t, n) {
		var e = -1,
			r = t.length;
		for (n.polygonStart(); ++e < r;) Hl(t[e], n, 1);
		n.polygonEnd()
	}

	function Vl(t, n) {
		t && ub.hasOwnProperty(t.type) ? ub[t.type](t, n) : jl(t, n)
	}

	function Wl() {
		cb.point = Zl
	}

	function $l() {
		Gl(ax, cx)
	}

	function Zl(t, n) {
		cb.point = Gl, ax = t, cx = n, t *= Wx, n *= Wx, sx = t, fx = Jx(n = n / 2 + Hx), lx = eb(n)
	}

	function Gl(t, n) {
		t *= Wx, n *= Wx, n = n / 2 + Hx;
		var e = t - sx,
			r = e >= 0 ? 1 : -1,
			i = r * e,
			o = Jx(n),
			u = eb(n),
			a = lx * u,
			c = fx * o + a * Jx(i),
			s = a * r * eb(i);
		ox.add(Gx(s, c)), sx = t, fx = o, lx = u
	}

	function Jl(t) {
		return ux ? ux.reset() : (ux = Rl(), ox = Rl()), Vl(t, cb), 2 * ux
	}

	function Ql(t) {
		return [Gx(t[1], t[0]), Il(t[2])]
	}

	function Kl(t) {
		var n = t[0],
			e = t[1],
			r = Jx(e);
		return [r * Jx(n), r * eb(n), eb(e)]
	}

	function th(t, n) {
		return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
	}

	function nh(t, n) {
		return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
	}

	function eh(t, n) {
		t[0] += n[0], t[1] += n[1], t[2] += n[2]
	}

	function rh(t, n) {
		return [t[0] * n, t[1] * n, t[2] * n]
	}

	function ih(t) {
		var n = ib(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
		t[0] /= n, t[1] /= n, t[2] /= n
	}

	function oh(t, n) {
		bx.push(wx = [hx = t, dx = t]), px > n && (px = n), n > vx && (vx = n)
	}

	function uh(t, n) {
		var e = Kl([t * Wx, n * Wx]);
		if (mx) {
			var r = nh(mx, e),
				i = [r[1], -r[0], 0],
				o = nh(i, r);
			ih(o), o = Ql(o);
			var u, a = t - _x,
				c = a > 0 ? 1 : -1,
				s = o[0] * Vx * c,
				f = $x(a) > 180;
			f ^ (s > c * _x && c * t > s) ? (u = o[1] * Vx, u > vx && (vx = u)) : (s = (s + 360) % 360 - 180, f ^ (s > c * _x && c * t > s) ? (u = -o[1] * Vx, px > u && (px = u)) : (px > n && (px = n),
				n > vx && (vx = n))), f ? _x > t ? hh(hx, t) > hh(hx, dx) && (dx = t) : hh(t, dx) > hh(hx, dx) && (hx = t) : dx >= hx ? (hx > t && (hx = t), t > dx && (dx = t)) : t > _x ? hh(hx, t) > hh(hx, dx) && (dx = t) : hh(t, dx) > hh(hx, dx) && (hx = t)
		} else oh(t, n);
		mx = e, _x = t
	}

	function ah() {
		sb.point = uh
	}

	function ch() {
		wx[0] = hx, wx[1] = dx, sb.point = oh, mx = null
	}

	function sh(t, n) {
		if (mx) {
			var e = t - _x;
			xx.add($x(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
		} else yx = t, gx = n;
		cb.point(t, n), uh(t, n)
	}

	function fh() {
		cb.lineStart()
	}

	function lh() {
		sh(yx, gx), cb.lineEnd(), $x(xx) > Ix && (hx = -(dx = 180)), wx[0] = hx, wx[1] = dx, mx = null
	}

	function hh(t, n) {
		return (n -= t) < 0 ? n + 360 : n
	}

	function ph(t, n) {
		return t[0] - n[0]
	}

	function dh(t, n) {
		return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
	}

	function vh(t) {
		var n, e, r, i, o, u, a;
		if (xx ? xx.reset() : xx = Rl(), vx = dx = -(hx = px = 1 / 0), bx = [], Vl(t, sb), e = bx.length) {
			for (bx.sort(ph), n = 1, r = bx[0], o = [r]; e > n; ++n) i = bx[n], dh(r, i[0]) || dh(r, i[1]) ? (hh(r[0], i[1]) > hh(r[0], r[1]) && (r[1] = i[1]), hh(i[0], r[1]) > hh(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
			for (u = -(1 / 0), e = o.length - 1, n = 0, r = o[e]; e >= n; r = i, ++n) i = o[n], (a = hh(r[1], i[0])) > u && (u = a, hx = i[0], dx = r[1])
		}
		return bx = wx = null, hx === 1 / 0 || px === 1 / 0 ? [
			[NaN, NaN],
			[NaN, NaN]
		] : [
			[hx, px],
			[dx, vx]
		]
	}

	function _h(t, n) {
		t *= Wx, n *= Wx;
		var e = Jx(n);
		yh(e * Jx(t), e * eb(t), eb(n))
	}

	function yh(t, n, e) {
		++Mx, kx += (t - kx) / Mx, Nx += (n - Nx) / Mx, Sx += (e - Sx) / Mx
	}

	function gh() {
		fb.point = mh
	}

	function mh(t, n) {
		t *= Wx, n *= Wx;
		var e = Jx(n);
		Rx = e * Jx(t), Dx = e * eb(t), Ox = eb(n), fb.point = xh, yh(Rx, Dx, Ox)
	}

	function xh(t, n) {
		t *= Wx, n *= Wx;
		var e = Jx(n),
			r = e * Jx(t),
			i = e * eb(t),
			o = eb(n),
			u = Gx(ib((u = Dx * o - Ox * i) * u + (u = Ox * r - Rx * o) * u + (u = Rx * i - Dx * r) * u), Rx * r + Dx * i + Ox * o);
		Tx += u, Ax += u * (Rx + (Rx = r)), Ex += u * (Dx + (Dx = i)), Cx += u * (Ox + (Ox = o)), yh(Rx, Dx, Ox)
	}

	function bh() {
		fb.point = _h
	}

	function wh() {
		fb.point = Th
	}

	function Mh() {
		kh(qx, Ux), fb.point = _h
	}

	function Th(t, n) {
		qx = t, Ux = n, t *= Wx, n *= Wx, fb.point = kh;
		var e = Jx(n);
		Rx = e * Jx(t), Dx = e * eb(t), Ox = eb(n), yh(Rx, Dx, Ox)
	}

	function kh(t, n) {
		t *= Wx, n *= Wx;
		var e = Jx(n),
			r = e * Jx(t),
			i = e * eb(t),
			o = eb(n),
			u = Dx * o - Ox * i,
			a = Ox * r - Rx * o,
			c = Rx * i - Dx * r,
			s = ib(u * u + a * a + c * c),
			f = Rx * r + Dx * i + Ox * o,
			l = s && -Fl(f) / s,
			h = Gx(s, f);
		zx += l * u, Px += l * a, Lx += l * c, Tx += h, Ax += h * (Rx + (Rx = r)), Ex += h * (Dx + (Dx = i)), Cx += h * (Ox + (Ox = o)), yh(Rx, Dx, Ox)
	}

	function Nh(t) {
		Mx = Tx = kx = Nx = Sx = Ax = Ex = Cx = zx = Px = Lx = 0, Vl(t, fb);
		var n = zx,
			e = Px,
			r = Lx,
			i = n * n + e * e + r * r;
		return Yx > i && (n = Ax, e = Ex, r = Cx, Ix > Tx && (n = kx, e = Nx, r = Sx), i = n * n + e * e + r * r, Yx > i) ? [NaN, NaN] : [Gx(e, n) * Vx, Il(r / ib(i)) * Vx]
	}

	function Sh(t) {
		return function() {
			return t
		}
	}

	function Ah(t, n) {
		function e(e, r) {
			return e = t(e, r), n(e[0], e[1])
		}
		return t.invert && n.invert && (e.invert = function(e, r) {
			return e = n.invert(e, r), e && t.invert(e[0], e[1])
		}), e
	}

	function Eh(t, n) {
		return [t > Bx ? t - Xx : -Bx > t ? t + Xx : t, n]
	}

	function Ch(t, n, e) {
		return (t %= Xx) ? n || e ? Ah(Ph(t), Lh(n, e)) : Ph(t) : n || e ? Lh(n, e) : Eh
	}

	function zh(t) {
		return function(n, e) {
			return n += t, [n > Bx ? n - Xx : -Bx > n ? n + Xx : n, e]
		}
	}

	function Ph(t) {
		var n = zh(t);
		return n.invert = zh(-t), n
	}

	function Lh(t, n) {
		function e(t, n) {
			var e = Jx(n),
				a = Jx(t) * e,
				c = eb(t) * e,
				s = eb(n),
				f = s * r + a * i;
			return [Gx(c * o - f * u, a * r - s * i), Il(f * o + c * u)]
		}
		var r = Jx(t),
			i = eb(t),
			o = Jx(n),
			u = eb(n);
		return e.invert = function(t, n) {
			var e = Jx(n),
				a = Jx(t) * e,
				c = eb(t) * e,
				s = eb(n),
				f = s * o - c * u;
			return [Gx(c * o + s * u, a * r + f * i), Il(f * r - a * i)]
		}, e
	}

	function qh(t) {
		function n(n) {
			return n = t(n[0] * Wx, n[1] * Wx), n[0] *= Vx, n[1] *= Vx, n
		}
		return t = Ch(t[0] * Wx, t[1] * Wx, t.length > 2 ? t[2] * Wx : 0), n.invert = function(n) {
			return n = t.invert(n[0] * Wx, n[1] * Wx), n[0] *= Vx, n[1] *= Vx, n
		}, n
	}

	function Uh(t, n, e, r, i, o) {
		if (e) {
			var u = Jx(n),
				a = eb(n),
				c = r * e;
			null == i ? (i = n + r * Xx, o = n - c / 2) : (i = Rh(u, i), o = Rh(u, o), (r > 0 ? o > i : i > o) && (i += r * Xx));
			for (var s, f = i; r > 0 ? f > o : o > f; f -= c) s = Ql([u, -a * Jx(f), -a * eb(f)]), t.point(s[0], s[1])
		}
	}

	function Rh(t, n) {
		n = Kl(n), n[0] -= t, ih(n);
		var e = Fl(-n[1]);
		return ((-n[2] < 0 ? -e : e) + Xx - Ix) % Xx
	}

	function Dh() {
		function t(t, n) {
			e.push(t = r(t, n)), t[0] *= Vx, t[1] *= Vx
		}

		function n() {
			var t = i.apply(this, arguments),
				n = o.apply(this, arguments) * Wx,
				c = u.apply(this, arguments) * Wx;
			return e = [], r = Ch(-t[0] * Wx, -t[1] * Wx, 0).invert, Uh(a, n, c, 1), t = {
				type: "Polygon",
				coordinates: [e]
			}, e = r = null, t
		}
		var e, r, i = Sh([0, 0]),
			o = Sh(90),
			u = Sh(6),
			a = {
				point: t
			};
		return n.center = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : Sh([+t[0], +t[1]]), n) : i
		}, n.radius = function(t) {
			return arguments.length ? (o = "function" == typeof t ? t : Sh(+t), n) : o
		}, n.precision = function(t) {
			return arguments.length ? (u = "function" == typeof t ? t : Sh(+t), n) : u
		}, n
	}

	function Oh() {
		var t, n = [];
		return {
			point: function(n, e) {
				t.push([n, e])
			},
			lineStart: function() {
				n.push(t = [])
			},
			lineEnd: Bl,
			rejoin: function() {
				n.length > 1 && n.push(n.pop().concat(n.shift()))
			},
			result: function() {
				var e = n;
				return n = [], t = null, e
			}
		}
	}

	function Fh(t, n, e, r, i, o) {
		var u, a = t[0],
			c = t[1],
			s = n[0],
			f = n[1],
			l = 0,
			h = 1,
			p = s - a,
			d = f - c;
		if (u = e - a, p || !(u > 0)) {
			if (u /= p, 0 > p) {
				if (l > u) return;
				h > u && (h = u)
			} else if (p > 0) {
				if (u > h) return;
				u > l && (l = u)
			}
			if (u = i - a, p || !(0 > u)) {
				if (u /= p, 0 > p) {
					if (u > h) return;
					u > l && (l = u)
				} else if (p > 0) {
					if (l > u) return;
					h > u && (h = u)
				}
				if (u = r - c, d || !(u > 0)) {
					if (u /= d, 0 > d) {
						if (l > u) return;
						h > u && (h = u)
					} else if (d > 0) {
						if (u > h) return;
						u > l && (l = u)
					}
					if (u = o - c, d || !(0 > u)) {
						if (u /= d, 0 > d) {
							if (u > h) return;
							u > l && (l = u)
						} else if (d > 0) {
							if (l > u) return;
							h > u && (h = u)
						}
						return l > 0 && (t[0] = a + l * p, t[1] = c + l * d), 1 > h && (n[0] = a + h * p, n[1] = c + h * d), !0
					}
				}
			}
		}
	}

	function Ih(t, n) {
		return $x(t[0] - n[0]) < Ix && $x(t[1] - n[1]) < Ix
	}

	function Yh(t, n, e, r) {
		this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
	}

	function Bh(t, n, e, r, i) {
		var o, u, a = [],
			c = [];
		if (t.forEach(function(t) {
				if (!((n = t.length - 1) <= 0)) {
					var n, e, r = t[0],
						u = t[n];
					if (Ih(r, u)) {
						for (i.lineStart(), o = 0; n > o; ++o) i.point((r = t[o])[0], r[1]);
						return void i.lineEnd()
					}
					a.push(e = new Yh(r, t, null, !0)), c.push(e.o = new Yh(r, null, e, !1)), a.push(e = new Yh(u, t, null, !1)), c.push(e.o = new Yh(u, null, e, !0))
				}
			}), a.length) {
			for (c.sort(n), jh(a), jh(c), o = 0, u = c.length; u > o; ++o) c[o].e = e = !e;
			for (var s, f, l = a[0];;) {
				for (var h = l, p = !0; h.v;)
					if ((h = h.n) === l) return;
				s = h.z, i.lineStart();
				do {
					if (h.v = h.o.v = !0, h.e) {
						if (p)
							for (o = 0, u = s.length; u > o; ++o) i.point((f = s[o])[0], f[1]);
						else r(h.x, h.n.x, 1, i);
						h = h.n
					} else {
						if (p)
							for (s = h.p.z, o = s.length - 1; o >= 0; --o) i.point((f = s[o])[0], f[1]);
						else r(h.x, h.p.x, -1, i);
						h = h.p
					}
					h = h.o, s = h.z, p = !p
				} while (!h.v);
				i.lineEnd()
			}
		}
	}

	function jh(t) {
		if (n = t.length) {
			for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
			i.n = e = t[0], e.p = i
		}
	}

	function Hh(t, n, e, r) {
		function i(i, o) {
			return i >= t && e >= i && o >= n && r >= o
		}

		function o(i, o, a, s) {
			var f = 0,
				l = 0;
			if (null == i || (f = u(i, a)) !== (l = u(o, a)) || c(i, o) < 0 ^ a > 0) {
				do s.point(0 === f || 3 === f ? t : e, f > 1 ? r : n); while ((f = (f + a + 4) % 4) !== l)
			} else s.point(o[0], o[1])
		}

		function u(r, i) {
			return $x(r[0] - t) < Ix ? i > 0 ? 0 : 3 : $x(r[0] - e) < Ix ? i > 0 ? 2 : 1 : $x(r[1] - n) < Ix ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
		}

		function a(t, n) {
			return c(t.x, n.x)
		}

		function c(t, n) {
			var e = u(t, 1),
				r = u(n, 1);
			return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
		}
		return function(u) {
			function c(t, n) {
				i(t, n) && S.point(t, n)
			}

			function s() {
				for (var n = 0, e = 0, i = _.length; i > e; ++e)
					for (var o, u, a = _[e], c = 1, s = a.length, f = a[0], l = f[0], h = f[1]; s > c; ++c) o = l, u = h, f = a[c], l = f[0], h = f[1], r >= u ? h > r && (l - o) * (r - u) > (h - u) * (t - o) && ++n : r >= h && (h - u) * (t - o) > (l - o) * (r - u) && --n;
				return n
			}

			function f() {
				S = A, v = [], _ = [], N = !0
			}

			function l() {
				var t = s(),
					n = N && t,
					e = (v = w(v)).length;
				(n || e) && (u.polygonStart(), n && (u.lineStart(), o(null, null, 1, u), u.lineEnd()), e && Bh(v, a, t, o, u), u.polygonEnd()), S = u, v = _ = y = null
			}

			function h() {
				E.point = d, _ && _.push(y = []), k = !0, T = !1, b = M = NaN
			}

			function p() {
				v && (d(g, m), x && T && A.rejoin(), v.push(A.result())), E.point = c, T && S.lineEnd()
			}

			function d(o, u) {
				var a = i(o, u);
				if (_ && y.push([o, u]), k) g = o, m = u, x = a, k = !1, a && (S.lineStart(), S.point(o, u));
				else if (a && T) S.point(o, u);
				else {
					var c = [b = Math.max(Tb, Math.min(Mb, b)), M = Math.max(Tb, Math.min(Mb, M))],
						s = [o = Math.max(Tb, Math.min(Mb, o)), u = Math.max(Tb, Math.min(Mb, u))];
					Fh(c, s, t, n, e, r) ? (T || (S.lineStart(), S.point(c[0], c[1])), S.point(s[0], s[1]), a || S.lineEnd(), N = !1) : a && (S.lineStart(), S.point(o, u), N = !1)
				}
				b = o, M = u, T = a
			}
			var v, _, y, g, m, x, b, M, T, k, N, S = u,
				A = Oh(),
				E = {
					point: c,
					lineStart: h,
					lineEnd: p,
					polygonStart: f,
					polygonEnd: l
				};
			return E
		}
	}

	function Xh() {
		var t, n, e, r = 0,
			i = 0,
			o = 960,
			u = 500;
		return e = {
			stream: function(e) {
				return t && n === e ? t : t = Hh(r, i, o, u)(n = e)
			},
			extent: function(a) {
				return arguments.length ? (r = +a[0][0], i = +a[0][1], o = +a[1][0], u = +a[1][1], t = n = null, e) : [
					[r, i],
					[o, u]
				]
			}
		}
	}

	function Vh() {
		kb.point = $h, kb.lineEnd = Wh
	}

	function Wh() {
		kb.point = kb.lineEnd = Bl
	}

	function $h(t, n) {
		t *= Wx, n *= Wx, hb = t, pb = eb(n), db = Jx(n), kb.point = Zh
	}

	function Zh(t, n) {
		t *= Wx, n *= Wx;
		var e = eb(n),
			r = Jx(n),
			i = $x(t - hb),
			o = Jx(i),
			u = eb(i),
			a = r * u,
			c = db * e - pb * r * o,
			s = pb * e + db * r * o;
		lb.add(Gx(ib(a * a + c * c), s)), hb = t, pb = e, db = r
	}

	function Gh(t) {
		return lb ? lb.reset() : lb = Rl(), Vl(t, kb), +lb
	}

	function Jh(t, n) {
		return Nb[0] = t, Nb[1] = n, Gh(Sb)
	}

	function Qh(t, n, e) {
		var r = l(t, n - Ix, e).concat(n);
		return function(t) {
			return r.map(function(n) {
				return [t, n]
			})
		}
	}

	function Kh(t, n, e) {
		var r = l(t, n - Ix, e).concat(n);
		return function(t) {
			return r.map(function(n) {
				return [n, t]
			})
		}
	}

	function tp() {
		function t() {
			return {
				type: "MultiLineString",
				coordinates: n()
			}
		}

		function n() {
			return l(Qx(o / y) * y, i, y).map(p).concat(l(Qx(s / g) * g, c, g).map(d)).concat(l(Qx(r / v) * v, e, v).filter(function(t) {
				return $x(t % y) > Ix
			}).map(f)).concat(l(Qx(a / _) * _, u, _).filter(function(t) {
				return $x(t % g) > Ix
			}).map(h))
		}
		var e, r, i, o, u, a, c, s, f, h, p, d, v = 10,
			_ = v,
			y = 90,
			g = 360,
			m = 2.5;
		return t.lines = function() {
			return n().map(function(t) {
				return {
					type: "LineString",
					coordinates: t
				}
			})
		}, t.outline = function() {
			return {
				type: "Polygon",
				coordinates: [p(o).concat(d(c).slice(1), p(i).reverse().slice(1), d(s).reverse().slice(1))]
			}
		}, t.extent = function(n) {
			return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor()
		}, t.extentMajor = function(n) {
			return arguments.length ? (o = +n[0][0], i = +n[1][0], s = +n[0][1], c = +n[1][1], o > i && (n = o, o = i, i = n), s > c && (n = s, s = c, c = n), t.precision(m)) : [
				[o, s],
				[i, c]
			]
		}, t.extentMinor = function(n) {
			return arguments.length ? (r = +n[0][0], e = +n[1][0], a = +n[0][1], u = +n[1][1], r > e && (n = r, r = e, e = n), a > u && (n = a, a = u, u = n), t.precision(m)) : [
				[r, a],
				[e, u]
			]
		}, t.step = function(n) {
			return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor()
		}, t.stepMajor = function(n) {
			return arguments.length ? (y = +n[0], g = +n[1], t) : [y, g]
		}, t.stepMinor = function(n) {
			return arguments.length ? (v = +n[0], _ = +n[1], t) : [v, _]
		}, t.precision = function(n) {
			return arguments.length ? (m = +n, f = Qh(a, u, 90), h = Kh(r, e, m), p = Qh(s, c, 90), d = Kh(o, i, m), t) : m
		}, t.extentMajor([
			[-180, -90 + Ix],
			[180, 90 - Ix]
		]).extentMinor([
			[-180, -80 - Ix],
			[180, 80 + Ix]
		])
	}

	function np(t, n) {
		var e = t[0] * Wx,
			r = t[1] * Wx,
			i = n[0] * Wx,
			o = n[1] * Wx,
			u = Jx(r),
			a = eb(r),
			c = Jx(o),
			s = eb(o),
			f = u * Jx(e),
			l = u * eb(e),
			h = c * Jx(i),
			p = c * eb(i),
			d = 2 * Il(ib(Yl(o - r) + u * c * Yl(i - e))),
			v = eb(d),
			_ = d ? function(t) {
				var n = eb(t *= d) / v,
					e = eb(d - t) / v,
					r = e * f + n * h,
					i = e * l + n * p,
					o = e * a + n * s;
				return [Gx(i, r) * Vx, Gx(o, ib(r * r + i * i)) * Vx]
			} : function() {
				return [e * Vx, r * Vx]
			};
		return _.distance = d, _
	}

	function ep(t) {
		return t
	}

	function rp() {
		Cb.point = ip
	}

	function ip(t, n) {
		Cb.point = op, vb = yb = t, _b = gb = n
	}

	function op(t, n) {
		Eb.add(gb * t - yb * n), yb = t, gb = n
	}

	function up() {
		op(vb, _b)
	}

	function ap(t, n) {
		zb > t && (zb = t), t > Lb && (Lb = t), Pb > n && (Pb = n), n > qb && (qb = n)
	}

	function cp(t, n) {
		Rb += t, Db += n, ++Ob
	}

	function sp() {
		Xb.point = fp
	}

	function fp(t, n) {
		Xb.point = lp, cp(bb = t, wb = n)
	}

	function lp(t, n) {
		var e = t - bb,
			r = n - wb,
			i = ib(e * e + r * r);
		Fb += i * (bb + t) / 2, Ib += i * (wb + n) / 2, Yb += i, cp(bb = t, wb = n)
	}

	function hp() {
		Xb.point = cp
	}

	function pp() {
		Xb.point = vp
	}

	function dp() {
		_p(mb, xb)
	}

	function vp(t, n) {
		Xb.point = _p, cp(mb = bb = t, xb = wb = n)
	}

	function _p(t, n) {
		var e = t - bb,
			r = n - wb,
			i = ib(e * e + r * r);
		Fb += i * (bb + t) / 2, Ib += i * (wb + n) / 2, Yb += i, i = wb * t - bb * n, Bb += i * (bb + t), jb += i * (wb + n), Hb += 3 * i, cp(bb = t, wb = n)
	}

	function yp(t) {
		function n(n, e) {
			t.moveTo(n + u, e), t.arc(n, e, u, 0, Xx)
		}

		function e(n, e) {
			t.moveTo(n, e), a.point = r
		}

		function r(n, e) {
			t.lineTo(n, e)
		}

		function i() {
			a.point = n
		}

		function o() {
			t.closePath()
		}
		var u = 4.5,
			a = {
				point: n,
				lineStart: function() {
					a.point = e
				},
				lineEnd: i,
				polygonStart: function() {
					a.lineEnd = o
				},
				polygonEnd: function() {
					a.lineEnd = i, a.point = n
				},
				pointRadius: function(t) {
					return u = t, a
				},
				result: Bl
			};
		return a
	}

	function gp() {
		function t(t, n) {
			a.push("M", t, ",", n, u)
		}

		function n(t, n) {
			a.push("M", t, ",", n), c.point = e
		}

		function e(t, n) {
			a.push("L", t, ",", n)
		}

		function r() {
			c.point = n
		}

		function i() {
			c.point = t
		}

		function o() {
			a.push("Z")
		}
		var u = mp(4.5),
			a = [],
			c = {
				point: t,
				lineStart: r,
				lineEnd: i,
				polygonStart: function() {
					c.lineEnd = o
				},
				polygonEnd: function() {
					c.lineEnd = i, c.point = t
				},
				pointRadius: function(t) {
					return u = mp(t), c
				},
				result: function() {
					if (a.length) {
						var t = a.join("");
						return a = [], t
					}
				}
			};
		return c
	}

	function mp(t) {
		return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
	}

	function xp() {
		function t(t) {
			return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), Vl(t, r(i))), i.result()
		}
		var n, e, r, i, o = 4.5;
		return t.area = function(t) {
			return Vl(t, r(Cb)), Cb.result()
		}, t.bounds = function(t) {
			return Vl(t, r(Ub)), Ub.result()
		}, t.centroid = function(t) {
			return Vl(t, r(Xb)), Xb.result()
		}, t.projection = function(e) {
			return arguments.length ? (r = (n = e) ? e.stream : ep, t) : n
		}, t.context = function(n) {
			return arguments.length ? (i = null == (e = n) ? new gp : new yp(n), "function" != typeof o && i.pointRadius(o), t) : e
		}, t.pointRadius = function(n) {
			return arguments.length ? (o = "function" == typeof n ? n : (i.pointRadius(+n), +n), t) : o
		}, t.projection(null).context(null)
	}

	function bp(t, n) {
		for (var e = n[0], r = n[1], i = [eb(e), -Jx(e), 0], o = 0, u = 0, a = 0, c = t.length; c > a; ++a)
			if (f = (s = t[a]).length)
				for (var s, f, l = s[f - 1], h = l[0], p = l[1] / 2 + Hx, d = eb(p), v = Jx(p), _ = 0; f > _; ++_, h = g, d = x, v = b, l = y) {
					var y = s[_],
						g = y[0],
						m = y[1] / 2 + Hx,
						x = eb(m),
						b = Jx(m),
						w = g - h,
						M = w >= 0 ? 1 : -1,
						T = M * w,
						k = T > Bx,
						N = d * x;
					if (Vb.add(Gx(N * M * eb(T), v * b + N * Jx(T))), o += k ? w + M * Xx : w, k ^ h >= e ^ g >= e) {
						var S = nh(Kl(l), Kl(y));
						ih(S);
						var A = nh(i, S);
						ih(A);
						var E = (k ^ w >= 0 ? -1 : 1) * Il(A[2]);
						(r > E || r === E && (S[0] || S[1])) && (u += k ^ w >= 0 ? 1 : -1)
					}
				}
			var C = (-Ix > o || Ix > o && -Ix > Vb) ^ 1 & u;
		return Vb.reset(), C
	}

	function wp(t, n, e, r) {
		return function(i, o) {
			function u(n, e) {
				var r = i(n, e);
				t(n = r[0], e = r[1]) && o.point(n, e)
			}

			function a(t, n) {
				var e = i(t, n);
				_.point(e[0], e[1])
			}

			function c() {
				b.point = a, _.lineStart()
			}

			function s() {
				b.point = u, _.lineEnd()
			}

			function f(t, n) {
				v.push([t, n]);
				var e = i(t, n);
				m.point(e[0], e[1])
			}

			function l() {
				m.lineStart(), v = []
			}

			function h() {
				f(v[0][0], v[0][1]), m.lineEnd();
				var t, n, e, r, i = m.clean(),
					u = g.result(),
					a = u.length;
				if (v.pop(), p.push(v), v = null, a)
					if (1 & i) {
						if (e = u[0], (n = e.length - 1) > 0) {
							for (x || (o.polygonStart(), x = !0), o.lineStart(), t = 0; n > t; ++t) o.point((r = e[t])[0], r[1]);
							o.lineEnd()
						}
					} else a > 1 && 2 & i && u.push(u.pop().concat(u.shift())), d.push(u.filter(Mp))
			}
			var p, d, v, _ = n(o),
				y = i.invert(r[0], r[1]),
				g = Oh(),
				m = n(g),
				x = !1,
				b = {
					point: u,
					lineStart: c,
					lineEnd: s,
					polygonStart: function() {
						b.point = f, b.lineStart = l, b.lineEnd = h, d = [], p = []
					},
					polygonEnd: function() {
						b.point = u, b.lineStart = c, b.lineEnd = s, d = w(d);
						var t = bp(p, y);
						d.length ? (x || (o.polygonStart(), x = !0), Bh(d, Tp, t, e, o)) : t && (x || (o.polygonStart(), x = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), x && (o.polygonEnd(), x = !1), d = p = null
					},
					sphere: function() {
						o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd()
					}
				};
			return b
		}
	}

	function Mp(t) {
		return t.length > 1
	}

	function Tp(t, n) {
		return ((t = t.x)[0] < 0 ? t[1] - jx - Ix : jx - t[1]) - ((n = n.x)[0] < 0 ? n[1] - jx - Ix : jx - n[1])
	}

	function kp(t) {
		var n, e = NaN,
			r = NaN,
			i = NaN;
		return {
			lineStart: function() {
				t.lineStart(), n = 1
			},
			point: function(o, u) {
				var a = o > 0 ? Bx : -Bx,
					c = $x(o - e);
				$x(c - Bx) < Ix ? (t.point(e, r = (r + u) / 2 > 0 ? jx : -jx), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0) : i !== a && c >= Bx && ($x(e - i) < Ix && (e -= i * Ix), $x(o - a) < Ix && (o -= a * Ix), r = Np(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a
			},
			lineEnd: function() {
				t.lineEnd(), e = r = NaN
			},
			clean: function() {
				return 2 - n
			}
		}
	}

	function Np(t, n, e, r) {
		var i, o, u = eb(t - e);
		return $x(u) > Ix ? Zx((eb(n) * (o = Jx(r)) * eb(e) - eb(r) * (i = Jx(n)) * eb(t)) / (i * o * u)) : (n + r) / 2
	}

	function Sp(t, n, e, r) {
		var i;
		if (null == t) i = e * jx, r.point(-Bx, i), r.point(0, i), r.point(Bx, i), r.point(Bx, 0), r.point(Bx, -i), r.point(0, -i), r.point(-Bx, -i), r.point(-Bx, 0), r.point(-Bx, i);
		else if ($x(t[0] - n[0]) > Ix) {
			var o = t[0] < n[0] ? Bx : -Bx;
			i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
		} else r.point(n[0], n[1])
	}

	function Ap(t, n) {
		function e(e, r, i, o) {
			Uh(o, t, n, i, e, r)
		}

		function r(t, n) {
			return Jx(t) * Jx(n) > a
		}

		function i(t) {
			var n, e, i, a, f;
			return {
				lineStart: function() {
					a = i = !1, f = 1
				},
				point: function(l, h) {
					var p, d = [l, h],
						v = r(l, h),
						_ = c ? v ? 0 : u(l, h) : v ? u(l + (0 > l ? Bx : -Bx), h) : 0;
					if (!n && (a = i = v) && t.lineStart(), v !== i && (p = o(n, d), (Ih(n, p) || Ih(d, p)) && (d[0] += Ix, d[1] += Ix, v = r(d[0], d[1]))), v !== i) f = 0, v ? (t.lineStart(), p = o(d, n), t.point(p[0], p[1])) : (p = o(n, d), t.point(p[0], p[1]), t.lineEnd()), n = p;
					else if (s && n && c ^ v) {
						var y;
						_ & e || !(y = o(d, n, !0)) || (f = 0, c ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
					}!v || n && Ih(n, d) || t.point(d[0], d[1]), n = d, i = v, e = _
				},
				lineEnd: function() {
					i && t.lineEnd(), n = null
				},
				clean: function() {
					return f | (a && i) << 1
				}
			}
		}

		function o(t, n, e) {
			var r = Kl(t),
				i = Kl(n),
				o = [1, 0, 0],
				u = nh(r, i),
				c = th(u, u),
				s = u[0],
				f = c - s * s;
			if (!f) return !e && t;
			var l = a * c / f,
				h = -a * s / f,
				p = nh(o, u),
				d = rh(o, l),
				v = rh(u, h);
			eh(d, v);
			var _ = p,
				y = th(d, _),
				g = th(_, _),
				m = y * y - g * (th(d, d) - 1);
			if (!(0 > m)) {
				var x = ib(m),
					b = rh(_, (-y - x) / g);
				if (eh(b, d), b = Ql(b), !e) return b;
				var w, M = t[0],
					T = n[0],
					k = t[1],
					N = n[1];
				M > T && (w = M, M = T, T = w);
				var S = T - M,
					A = $x(S - Bx) < Ix,
					E = A || Ix > S;
				if (!A && k > N && (w = k, k = N, N = w), E ? A ? k + N > 0 ^ b[1] < ($x(b[0] - M) < Ix ? k : N) : k <= b[1] && b[1] <= N : S > Bx ^ (M <= b[0] && b[0] <= T)) {
					var C = rh(_, (-y + x) / g);
					return eh(C, d), [b, Ql(C)]
				}
			}
		}

		function u(n, e) {
			var r = c ? t : Bx - t,
				i = 0;
			return -r > n ? i |= 1 : n > r && (i |= 2), -r > e ? i |= 4 : e > r && (i |= 8), i
		}
		var a = Jx(t),
			c = a > 0,
			s = $x(a) > Ix;
		return wp(r, i, e, c ? [0, -t] : [-Bx, t - Bx])
	}

	function Ep(t) {
		function n() {}
		var e = n.prototype = Object.create(Cp.prototype);
		for (var r in t) e[r] = t[r];
		return function(t) {
			var e = new n;
			return e.stream = t, e
		}
	}

	function Cp() {}

	function zp(t, n) {
		return +n ? Lp(t, n) : Pp(t)
	}

	function Pp(t) {
		return Ep({
			point: function(n, e) {
				n = t(n, e), this.stream.point(n[0], n[1])
			}
		})
	}

	function Lp(t, n) {
		function e(r, i, o, u, a, c, s, f, l, h, p, d, v, _) {
			var y = s - r,
				g = f - i,
				m = y * y + g * g;
			if (m > 4 * n && v--) {
				var x = u + h,
					b = a + p,
					w = c + d,
					M = ib(x * x + b * b + w * w),
					T = Il(w /= M),
					k = $x($x(w) - 1) < Ix || $x(o - l) < Ix ? (o + l) / 2 : Gx(b, x),
					N = t(k, T),
					S = N[0],
					A = N[1],
					E = S - r,
					C = A - i,
					z = g * E - y * C;
				(z * z / m > n || $x((y * E + g * C) / m - .5) > .3 || Zb > u * h + a * p + c * d) && (e(r, i, o, u, a, c, S, A, k, x /= M, b /= M, w, v, _), _.point(S, A), e(S, A, k, x, b, w, s, f, l, h, p, d, v, _))
			}
		}
		return function(n) {
			function r(e, r) {
				e = t(e, r), n.point(e[0], e[1])
			}

			function i() {
				y = NaN, w.point = o, n.lineStart()
			}

			function o(r, i) {
				var o = Kl([r, i]),
					u = t(r, i);
				e(y, g, _, m, x, b, y = u[0], g = u[1], _ = r, m = o[0], x = o[1], b = o[2], $b, n), n.point(y, g)
			}

			function u() {
				w.point = r, n.lineEnd()
			}

			function a() {
				i(), w.point = c, w.lineEnd = s
			}

			function c(t, n) {
				o(f = t, n), l = y, h = g, p = m, d = x, v = b, w.point = o
			}

			function s() {
				e(y, g, _, m, x, b, l, h, f, p, d, v, $b, n), w.lineEnd = u, u()
			}
			var f, l, h, p, d, v, _, y, g, m, x, b, w = {
				point: r,
				lineStart: i,
				lineEnd: u,
				polygonStart: function() {
					n.polygonStart(), w.lineStart = a
				},
				polygonEnd: function() {
					n.polygonEnd(), w.lineStart = i
				}
			};
			return w
		}
	}

	function qp(t) {
		return Up(function() {
			return t
		})()
	}

	function Up(t) {
		function n(t) {
			return t = f(t[0] * Wx, t[1] * Wx), [t[0] * _ + a, c - t[1] * _]
		}

		function e(t) {
			return t = f.invert((t[0] - a) / _, (c - t[1]) / _), t && [t[0] * Vx, t[1] * Vx]
		}

		function r(t, n) {
			return t = u(t, n), [t[0] * _ + a, c - t[1] * _]
		}

		function i() {
			f = Ah(s = Ch(b, w, M), u);
			var t = u(m, x);
			return a = y - t[0] * _, c = g + t[1] * _, o()
		}

		function o() {
			return d = v = null, n
		}
		var u, a, c, s, f, l, h, p, d, v, _ = 150,
			y = 480,
			g = 250,
			m = 0,
			x = 0,
			b = 0,
			w = 0,
			M = 0,
			T = null,
			k = Wb,
			N = null,
			S = ep,
			A = .5,
			E = zp(r, A);
		return n.stream = function(t) {
				return d && v === t ? d : d = Gb(k(s, E(S(v = t))))
			}, n.clipAngle = function(t) {
				return arguments.length ? (k = +t ? Ap(T = t * Wx, 6 * Wx) : (T = null, Wb), o()) : T * Vx
			}, n.clipExtent = function(t) {
				return arguments.length ? (S = null == t ? (N = l = h = p = null, ep) : Hh(N = +t[0][0], l = +t[0][1], h = +t[1][0], p = +t[1][1]), o()) : null == N ? null : [
					[N, l],
					[h, p]
				]
			}, n.scale = function(t) {
				return arguments.length ? (_ = +t, i()) : _
			}, n.translate = function(t) {
				return arguments.length ? (y = +t[0], g = +t[1], i()) : [y, g]
			}, n.center = function(t) {
				return arguments.length ? (m = t[0] % 360 * Wx, x = t[1] % 360 * Wx, i()) : [m * Vx, x * Vx]
			}, n.rotate = function(t) {
				return arguments.length ? (b = t[0] % 360 * Wx, w = t[1] % 360 * Wx, M = t.length > 2 ? t[2] % 360 * Wx : 0, i()) : [b * Vx, w * Vx, M * Vx]
			}, n.precision = function(t) {
				return arguments.length ? (E = zp(r, A = t * t), o()) : ib(A)
			},
			function() {
				return u = t.apply(this, arguments), n.invert = u.invert && e, i()
			}
	}

	function Rp(t) {
		var n = 0,
			e = Bx / 3,
			r = Up(t),
			i = r(n, e);
		return i.parallels = function(t) {
			return arguments.length ? r(n = t[0] * Wx, e = t[1] * Wx) : [n * Vx, e * Vx]
		}, i
	}

	function Dp(t, n) {
		function e(t, n) {
			var e = ib(o - 2 * i * eb(n)) / i;
			return [e * eb(t *= i), u - e * Jx(t)]
		}
		var r = eb(t),
			i = (r + eb(n)) / 2,
			o = 1 + r * (2 * i - r),
			u = ib(o) / i;
		return e.invert = function(t, n) {
			var e = u - n;
			return [Gx(t, e) / i, Il((o - (t * t + e * e) * i * i) / (2 * i))]
		}, e
	}

	function Op() {
		return Rp(Dp).scale(151).translate([480, 347])
	}

	function Fp() {
		return Op().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
	}

	function Ip(t) {
		var n = t.length;
		return {
			point: function(e, r) {
				for (var i = -1; ++i < n;) t[i].point(e, r)
			},
			sphere: function() {
				for (var e = -1; ++e < n;) t[e].sphere()
			},
			lineStart: function() {
				for (var e = -1; ++e < n;) t[e].lineStart()
			},
			lineEnd: function() {
				for (var e = -1; ++e < n;) t[e].lineEnd()
			},
			polygonStart: function() {
				for (var e = -1; ++e < n;) t[e].polygonStart()
			},
			polygonEnd: function() {
				for (var e = -1; ++e < n;) t[e].polygonEnd()
			}
		}
	}

	function Yp() {
		function t(t) {
			var n = t[0],
				e = t[1];
			return u = null, r(n, e), u || (i(n, e), u) || (o(n, e), u)
		}
		var n, e, r, i, o, u, a = Fp(),
			c = Op().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
			s = Op().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
			f = {
				point: function(t, n) {
					u = [t, n]
				}
			};
		return t.invert = function(t) {
			var n = a.scale(),
				e = a.translate(),
				r = (t[0] - e[0]) / n,
				i = (t[1] - e[1]) / n;
			return (i >= .12 && .234 > i && r >= -.425 && -.214 > r ? c : i >= .166 && .234 > i && r >= -.214 && -.115 > r ? s : a).invert(t)
		}, t.stream = function(t) {
			return n && e === t ? n : n = Ip([a.stream(e = t), c.stream(t), s.stream(t)])
		}, t.precision = function(n) {
			return arguments.length ? (a.precision(n), c.precision(n), s.precision(n), t) : a.precision()
		}, t.scale = function(n) {
			return arguments.length ? (a.scale(n), c.scale(.35 * n), s.scale(n), t.translate(a.translate())) : a.scale()
		}, t.translate = function(n) {
			if (!arguments.length) return a.translate();
			var e = a.scale(),
				u = +n[0],
				l = +n[1];
			return r = a.translate(n).clipExtent([
				[u - .455 * e, l - .238 * e],
				[u + .455 * e, l + .238 * e]
			]).stream(f).point, i = c.translate([u - .307 * e, l + .201 * e]).clipExtent([
				[u - .425 * e + Ix, l + .12 * e + Ix],
				[u - .214 * e - Ix, l + .234 * e - Ix]
			]).stream(f).point, o = s.translate([u - .205 * e, l + .212 * e]).clipExtent([
				[u - .214 * e + Ix, l + .166 * e + Ix],
				[u - .115 * e - Ix, l + .234 * e - Ix]
			]).stream(f).point, t
		}, t.scale(1070)
	}

	function Bp(t) {
		return function(n, e) {
			var r = Jx(n),
				i = Jx(e),
				o = t(r * i);
			return [o * i * eb(n), o * eb(e)]
		}
	}

	function jp(t) {
		return function(n, e) {
			var r = ib(n * n + e * e),
				i = t(r),
				o = eb(i),
				u = Jx(i);
			return [Gx(n * o, r * u), Il(r && e * o / r)]
		}
	}

	function Hp() {
		return qp(Jb).scale(120).clipAngle(179.999)
	}

	function Xp() {
		return qp(Qb).scale(480 / Xx).clipAngle(179.999)
	}

	function Vp(t, n) {
		return [t, tb(ob((jx + n) / 2))]
	}

	function Wp() {
		return $p(Vp)
	}

	function $p(t) {
		var n, e = qp(t),
			r = e.scale,
			i = e.translate,
			o = e.clipExtent;
		return e.scale = function(t) {
			return arguments.length ? (r(t), n && e.clipExtent(null), e) : r()
		}, e.translate = function(t) {
			return arguments.length ? (i(t), n && e.clipExtent(null), e) : i()
		}, e.clipExtent = function(t) {
			if (!arguments.length) return n ? null : o();
			if (n = null == t) {
				var u = Bx * r(),
					a = i();
				t = [
					[a[0] - u, a[1] - u],
					[a[0] + u, a[1] + u]
				]
			}
			return o(t), e
		}, e.clipExtent(null).scale(961 / Xx)
	}

	function Zp(t) {
		return ob((jx + t) / 2)
	}

	function Gp(t, n) {
		function e(t, n) {
			o > 0 ? -jx + Ix > n && (n = -jx + Ix) : n > jx - Ix && (n = jx - Ix);
			var e = o / nb(Zp(n), i);
			return [e * eb(i * t), o - e * Jx(i * t)]
		}
		var r = Jx(t),
			i = t === n ? eb(t) : tb(r / Jx(n)) / tb(Zp(n) / Zp(t)),
			o = r * nb(Zp(t), i) / i;
		return i ? (e.invert = function(t, n) {
			var e = o - n,
				r = rb(i) * ib(t * t + e * e);
			return [Gx(t, e) / i, 2 * Zx(nb(o / r, 1 / i)) - jx]
		}, e) : Vp
	}

	function Jp() {
		return Rp(Gp)
	}

	function Qp(t, n) {
		return [t, n]
	}

	function Kp() {
		return qp(Qp)
	}

	function td(t, n) {
		function e(t, n) {
			var e = o - n,
				r = i * t;
			return [e * eb(r), o - e * Jx(r)]
		}
		var r = Jx(t),
			i = t === n ? eb(t) : (r - Jx(n)) / (n - t),
			o = r / i + t;
		return $x(i) < Ix ? Qp : (e.invert = function(t, n) {
			var e = o - n;
			return [Gx(t, e) / i, o - rb(i) * ib(t * t + e * e)]
		}, e)
	}

	function nd() {
		return Rp(td).scale(128).translate([480, 280])
	}

	function ed(t, n) {
		var e = Jx(n),
			r = Jx(t) * e;
		return [e * eb(t) / r, eb(n) / r]
	}

	function rd() {
		return qp(ed).scale(139).clipAngle(70)
	}

	function id(t, n) {
		return [Jx(n) * eb(t), eb(n)]
	}

	function od() {
		return qp(id).scale(240).clipAngle(90 + Ix)
	}

	function ud(t, n) {
		var e = Jx(n),
			r = 1 + Jx(t) * e;
		return [e * eb(t) / r, eb(n) / r]
	}

	function ad() {
		return qp(ud).scale(240).clipAngle(179.999)
	}

	function cd(t, n) {
		return [tb(ob((jx + n) / 2)), -t]
	}

	function sd() {
		var t = $p(cd),
			n = t.center,
			e = t.rotate;
		return t.center = function(t) {
			return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
		}, t.rotate = function(t) {
			return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
		}, e([0, 0, 90])
	}
	var fd = "4.0.0-alpha.50",
		ld = e(n),
		hd = ld.right,
		pd = ld.left,
		dd = Array.prototype,
		vd = dd.slice,
		_d = dd.map,
		yd = Math.sqrt(50),
		gd = Math.sqrt(10),
		md = Math.sqrt(2),
		xd = "$";
	P.prototype = L.prototype = {
		constructor: P,
		has: function(t) {
			return xd + t in this
		},
		get: function(t) {
			return this[xd + t]
		},
		set: function(t, n) {
			return this[xd + t] = n, this
		},
		remove: function(t) {
			var n = xd + t;
			return n in this && delete this[n]
		},
		clear: function() {
			for (var t in this) t[0] === xd && delete this[t]
		},
		keys: function() {
			var t = [];
			for (var n in this) n[0] === xd && t.push(n.slice(1));
			return t
		},
		values: function() {
			var t = [];
			for (var n in this) n[0] === xd && t.push(this[n]);
			return t
		},
		entries: function() {
			var t = [];
			for (var n in this) n[0] === xd && t.push({
				key: n.slice(1),
				value: this[n]
			});
			return t
		},
		size: function() {
			var t = 0;
			for (var n in this) n[0] === xd && ++t;
			return t
		},
		empty: function() {
			for (var t in this)
				if (t[0] === xd) return !1;
			return !0
		},
		each: function(t) {
			for (var n in this) n[0] === xd && t(this[n], n.slice(1), this)
		}
	};
	var bd = L.prototype;
	F.prototype = I.prototype = {
		constructor: F,
		has: bd.has,
		add: function(t) {
			return t += "", this[xd + t] = t, this
		},
		remove: bd.remove,
		clear: bd.clear,
		values: bd.keys,
		size: bd.size,
		empty: bd.empty,
		each: bd.each
	};
	var wd = 3,
		Md = function Kb(t) {
			function n(n) {
				return Math.pow(n, t)
			}
			return t = +t, n.exponent = Kb, n
		}(wd),
		Td = function tw(t) {
			function n(n) {
				return 1 - Math.pow(1 - n, t)
			}
			return t = +t, n.exponent = tw, n
		}(wd),
		kd = function nw(t) {
			function n(n) {
				return ((n *= 2) <= 1 ? Math.pow(n, t) : 2 - Math.pow(2 - n, t)) / 2
			}
			return t = +t, n.exponent = nw, n
		}(wd),
		Nd = Math.PI,
		Sd = Nd / 2,
		Ad = 4 / 11,
		Ed = 6 / 11,
		Cd = 8 / 11,
		zd = .75,
		Pd = 9 / 11,
		Ld = 10 / 11,
		qd = .9375,
		Ud = 21 / 22,
		Rd = 63 / 64,
		Dd = 1 / Ad / Ad,
		Od = 1.70158,
		Fd = function ew(t) {
			function n(n) {
				return n * n * ((t + 1) * n - t)
			}
			return t = +t, n.overshoot = ew, n
		}(Od),
		Id = function rw(t) {
			function n(n) {
				return --n * n * ((t + 1) * n + t) + 1
			}
			return t = +t, n.overshoot = rw, n
		}(Od),
		Yd = function iw(t) {
			function n(n) {
				return ((n *= 2) < 1 ? n * n * ((t + 1) * n - t) : (n -= 2) * n * ((t + 1) * n + t) + 2) / 2
			}
			return t = +t, n.overshoot = iw, n
		}(Od),
		Bd = 2 * Math.PI,
		jd = 1,
		Hd = .3,
		Xd = function ow(t, n) {
			function e(e) {
				return t * Math.pow(2, 10 * --e) * Math.sin((r - e) / n)
			}
			var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= Bd);
			return e.amplitude = function(t) {
				return ow(t, n * Bd)
			}, e.period = function(n) {
				return ow(t, n)
			}, e
		}(jd, Hd),
		Vd = function uw(t, n) {
			function e(e) {
				return 1 - t * Math.pow(2, -10 * (e = +e)) * Math.sin((e + r) / n)
			}
			var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= Bd);
			return e.amplitude = function(t) {
				return uw(t, n * Bd)
			}, e.period = function(n) {
				return uw(t, n)
			}, e
		}(jd, Hd),
		Wd = function aw(t, n) {
			function e(e) {
				return ((e = 2 * e - 1) < 0 ? t * Math.pow(2, 10 * e) * Math.sin((r - e) / n) : 2 - t * Math.pow(2, -10 * e) * Math.sin((r + e) / n)) / 2
			}
			var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= Bd);
			return e.amplitude = function(t) {
				return aw(t, n * Bd)
			}, e.period = function(n) {
				return aw(t, n)
			}, e
		}(jd, Hd),
		$d = Math.PI,
		Zd = 2 * $d,
		Gd = 1e-6,
		Jd = Zd - Gd;
	Mt.prototype = Tt.prototype = {
		constructor: Mt,
		moveTo: function(t, n) {
			this._.push("M", this._x0 = this._x1 = +t, ",", this._y0 = this._y1 = +n)
		},
		closePath: function() {
			null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._.push("Z"))
		},
		lineTo: function(t, n) {
			this._.push("L", this._x1 = +t, ",", this._y1 = +n)
		},
		quadraticCurveTo: function(t, n, e, r) {
			this._.push("Q", +t, ",", +n, ",", this._x1 = +e, ",", this._y1 = +r)
		},
		bezierCurveTo: function(t, n, e, r, i, o) {
			this._.push("C", +t, ",", +n, ",", +e, ",", +r, ",", this._x1 = +i, ",", this._y1 = +o)
		},
		arcTo: function(t, n, e, r, i) {
			t = +t, n = +n, e = +e, r = +r, i = +i;
			var o = this._x1,
				u = this._y1,
				a = e - t,
				c = r - n,
				s = o - t,
				f = u - n,
				l = s * s + f * f;
			if (0 > i) throw new Error("negative radius: " + i);
			if (null === this._x1) this._.push("M", this._x1 = t, ",", this._y1 = n);
			else if (l > Gd)
				if (Math.abs(f * a - c * s) > Gd && i) {
					var h = e - o,
						p = r - u,
						d = a * a + c * c,
						v = h * h + p * p,
						_ = Math.sqrt(d),
						y = Math.sqrt(l),
						g = i * Math.tan(($d - Math.acos((d + l - v) / (2 * _ * y))) / 2),
						m = g / y,
						x = g / _;
					Math.abs(m - 1) > Gd && this._.push("L", t + m * s, ",", n + m * f), this._.push("A", i, ",", i, ",0,0,", +(f * h > s * p), ",", this._x1 = t + x * a, ",", this._y1 = n + x * c)
				} else this._.push("L", this._x1 = t, ",", this._y1 = n);
			else;
		},
		arc: function(t, n, e, r, i, o) {
			t = +t, n = +n, e = +e;
			var u = e * Math.cos(r),
				a = e * Math.sin(r),
				c = t + u,
				s = n + a,
				f = 1 ^ o,
				l = o ? r - i : i - r;
			if (0 > e) throw new Error("negative radius: " + e);
			null === this._x1 ? this._.push("M", c, ",", s) : (Math.abs(this._x1 - c) > Gd || Math.abs(this._y1 - s) > Gd) && this._.push("L", c, ",", s), e && (l > Jd ? this._.push("A", e, ",", e, ",0,1,", f, ",", t - u, ",", n - a, "A", e, ",", e, ",0,1,", f, ",", this._x1 = c, ",", this._y1 = s) : (0 > l && (l = l % Zd + Zd), this._.push("A", e, ",", e, ",0,", +(l >= $d), ",", f, ",", this._x1 = t + e * Math.cos(i), ",", this._y1 = n + e * Math.sin(i))))
		},
		rect: function(t, n, e, r) {
			this._.push("M", this._x0 = this._x1 = +t, ",", this._y0 = this._y1 = +n, "h", +e, "v", +r, "h", -e, "Z")
		},
		toString: function() {
			return this._.join("")
		}
	};
	var Qd = jt.prototype = Ht.prototype;
	Qd.copy = function() {
		var t, n, e = new Ht(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
			r = this._root;
		if (!r) return e;
		if (!r.length) return e._root = Xt(r), e;
		for (t = [{
				source: r,
				target: e._root = new Array(4)
			}]; r = t.pop();)
			for (var i = 0; 4 > i; ++i)(n = r.source[i]) && (n.length ? t.push({
				source: n,
				target: r.target[i] = new Array(4)
			}) : r.target[i] = Xt(n));
		return e
	}, Qd.add = kt, Qd.addAll = St, Qd.cover = At, Qd.data = Et, Qd.extent = Ct, Qd.find = Pt, Qd.remove = Lt, Qd.removeAll = qt, Qd.root = Ut, Qd.size = Rt, Qd.visit = Dt, Qd.visitAfter = Ot, Qd.x = It, Qd.y = Bt;
	var Kd = [].slice,
		tv = {};
	Vt.prototype = Qt.prototype = {
		constructor: Vt,
		defer: function(t) {
			if ("function" != typeof t || this._call) throw new Error;
			if (null != this._error) return this;
			var n = Kd.call(arguments, 1);
			return n.push(t), ++this._waiting, this._tasks.push(n), Wt(this), this
		},
		abort: function() {
			return null == this._error && Gt(this, new Error("abort")), this
		},
		await: function(t) {
			if ("function" != typeof t || this._call) throw new Error;
			return this._call = function(n, e) {
				t.apply(null, [n].concat(e))
			}, Jt(this), this
		},
		awaitAll: function(t) {
			if ("function" != typeof t || this._call) throw new Error;
			return this._call = t, Jt(this), this
		}
	};
	var nv = 1e-12,
		ev = Math.PI,
		rv = ev / 2,
		iv = 2 * ev;
	fn.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2;
				default:
					this._context.lineTo(t, n)
			}
		}
	};
	var ov = xn(ln);
	mn.prototype = {
		areaStart: function() {
			this._curve.areaStart()
		},
		areaEnd: function() {
			this._curve.areaEnd()
		},
		lineStart: function() {
			this._curve.lineStart()
		},
		lineEnd: function() {
			this._curve.lineEnd()
		},
		point: function(t, n) {
			this._curve.point(n * Math.sin(t), n * -Math.cos(t))
		}
	};
	var uv = {
			draw: function(t, n) {
				var e = Math.sqrt(n / ev);
				t.moveTo(e, 0), t.arc(0, 0, e, 0, iv)
			}
		},
		av = {
			draw: function(t, n) {
				var e = Math.sqrt(n / 5) / 2;
				t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
			}
		},
		cv = Math.sqrt(1 / 3),
		sv = 2 * cv,
		fv = {
			draw: function(t, n) {
				var e = Math.sqrt(n / sv),
					r = e * cv;
				t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
			}
		},
		lv = .8908130915292852,
		hv = Math.sin(ev / 10) / Math.sin(7 * ev / 10),
		pv = Math.sin(iv / 10) * hv,
		dv = -Math.cos(iv / 10) * hv,
		vv = {
			draw: function(t, n) {
				var e = Math.sqrt(n * lv),
					r = pv * e,
					i = dv * e;
				t.moveTo(0, -e), t.lineTo(r, i);
				for (var o = 1; 5 > o; ++o) {
					var u = iv * o / 5,
						a = Math.cos(u),
						c = Math.sin(u);
					t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i)
				}
				t.closePath()
			}
		},
		_v = {
			draw: function(t, n) {
				var e = Math.sqrt(n),
					r = -e / 2;
				t.rect(r, r, e, e)
			}
		},
		yv = Math.sqrt(3),
		gv = {
			draw: function(t, n) {
				var e = -Math.sqrt(n / (3 * yv));
				t.moveTo(0, 2 * e), t.lineTo(-yv * e, -e), t.lineTo(yv * e, -e), t.closePath()
			}
		},
		mv = -.5,
		xv = Math.sqrt(3) / 2,
		bv = 1 / Math.sqrt(12),
		wv = 3 * (bv / 2 + 1),
		Mv = {
			draw: function(t, n) {
				var e = Math.sqrt(n / wv),
					r = e / 2,
					i = e * bv,
					o = r,
					u = e * bv + e,
					a = -o,
					c = u;
				t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, c), t.lineTo(mv * r - xv * i, xv * r + mv * i), t.lineTo(mv * o - xv * u, xv * o + mv * u), t.lineTo(mv * a - xv * c, xv * a + mv * c), t.lineTo(mv * r + xv * i, mv * i - xv * r), t.lineTo(mv * o + xv * u, mv * u - xv * o), t.lineTo(mv * a + xv * c, mv * c - xv * a), t.closePath()
			}
		},
		Tv = [uv, av, fv, _v, vv, gv, Mv];
	Sn.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 3:
					Nn(this, this._x1, this._y1);
				case 2:
					this._context.lineTo(this._x1, this._y1)
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
				default:
					Nn(this, t, n)
			}
			this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
		}
	}, En.prototype = {
		areaStart: kn,
		areaEnd: kn,
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 1:
					this._context.moveTo(this._x2, this._y2), this._context.closePath();
					break;
				case 2:
					this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
						this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
					break;
				case 3:
					this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
			}
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._x2 = t, this._y2 = n;
					break;
				case 1:
					this._point = 2, this._x3 = t, this._y3 = n;
					break;
				case 2:
					this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
					break;
				default:
					Nn(this, t, n)
			}
			this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
		}
	}, zn.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1;
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3;
					var e = (this._x0 + 4 * this._x1 + t) / 6,
						r = (this._y0 + 4 * this._y1 + n) / 6;
					this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
					break;
				case 3:
					this._point = 4;
				default:
					Nn(this, t, n)
			}
			this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
		}
	}, Ln.prototype = {
		lineStart: function() {
			this._x = [], this._y = [], this._basis.lineStart()
		},
		lineEnd: function() {
			var t = this._x,
				n = this._y,
				e = t.length - 1;
			if (e > 0)
				for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
			this._x = this._y = null, this._basis.lineEnd()
		},
		point: function(t, n) {
			this._x.push(+t), this._y.push(+n)
		}
	};
	var kv = function cw(t) {
		function n(n) {
			return 1 === t ? new Sn(n) : new Ln(n, t)
		}
		return n.beta = function(t) {
			return cw(+t)
		}, n
	}(.85);
	Un.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 2:
					this._context.lineTo(this._x2, this._y2);
					break;
				case 3:
					qn(this, this._x1, this._y1)
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2, this._x1 = t, this._y1 = n;
					break;
				case 2:
					this._point = 3;
				default:
					qn(this, t, n)
			}
			this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var Nv = function sw(t) {
		function n(n) {
			return new Un(n, t)
		}
		return n.tension = function(t) {
			return sw(+t)
		}, n
	}(0);
	Rn.prototype = {
		areaStart: kn,
		areaEnd: kn,
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 1:
					this._context.moveTo(this._x3, this._y3), this._context.closePath();
					break;
				case 2:
					this._context.lineTo(this._x3, this._y3), this._context.closePath();
					break;
				case 3:
					this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
			}
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._x3 = t, this._y3 = n;
					break;
				case 1:
					this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
					break;
				case 2:
					this._point = 3, this._x5 = t, this._y5 = n;
					break;
				default:
					qn(this, t, n)
			}
			this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var Sv = function fw(t) {
		function n(n) {
			return new Rn(n, t)
		}
		return n.tension = function(t) {
			return fw(+t)
		}, n
	}(0);
	Dn.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1;
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
					break;
				case 3:
					this._point = 4;
				default:
					qn(this, t, n)
			}
			this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var Av = function lw(t) {
		function n(n) {
			return new Dn(n, t)
		}
		return n.tension = function(t) {
			return lw(+t)
		}, n
	}(0);
	Fn.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 2:
					this._context.lineTo(this._x2, this._y2);
					break;
				case 3:
					this.point(this, this._x2, this._y2)
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			if (t = +t, n = +n, this._point) {
				var e = this._x2 - t,
					r = this._y2 - n;
				this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
			}
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3;
				default:
					On(this, t, n)
			}
			this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var Ev = function hw(t) {
		function n(n) {
			return t ? new Fn(n, t) : new Un(n, 0)
		}
		return n.alpha = function(t) {
			return hw(+t)
		}, n
	}(.5);
	In.prototype = {
		areaStart: kn,
		areaEnd: kn,
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 1:
					this._context.moveTo(this._x3, this._y3), this._context.closePath();
					break;
				case 2:
					this._context.lineTo(this._x3, this._y3), this._context.closePath();
					break;
				case 3:
					this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
			}
		},
		point: function(t, n) {
			if (t = +t, n = +n, this._point) {
				var e = this._x2 - t,
					r = this._y2 - n;
				this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
			}
			switch (this._point) {
				case 0:
					this._point = 1, this._x3 = t, this._y3 = n;
					break;
				case 1:
					this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
					break;
				case 2:
					this._point = 3, this._x5 = t, this._y5 = n;
					break;
				default:
					On(this, t, n)
			}
			this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var Cv = function pw(t) {
		function n(n) {
			return t ? new In(n, t) : new Rn(n, 0)
		}
		return n.alpha = function(t) {
			return pw(+t)
		}, n
	}(.5);
	Yn.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			if (t = +t, n = +n, this._point) {
				var e = this._x2 - t,
					r = this._y2 - n;
				this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
			}
			switch (this._point) {
				case 0:
					this._point = 1;
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
					break;
				case 3:
					this._point = 4;
				default:
					On(this, t, n)
			}
			this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var zv = function dw(t) {
		function n(n) {
			return t ? new Yn(n, t) : new Dn(n, 0)
		}
		return n.alpha = function(t) {
			return dw(+t)
		}, n
	}(.5);
	Bn.prototype = {
		areaStart: kn,
		areaEnd: kn,
		lineStart: function() {
			this._point = 0
		},
		lineEnd: function() {
			this._point && this._context.closePath()
		},
		point: function(t, n) {
			t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
		}
	}, $n.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 2:
					this._context.lineTo(this._x1, this._y1);
					break;
				case 3:
					Wn(this, this._t0, Vn(this, this._t0))
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			var e = NaN;
			if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
				switch (this._point) {
					case 0:
						this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3, Wn(this, Vn(this, e = Xn(this, t, n)), e);
						break;
					default:
						Wn(this, this._t0, e = Xn(this, t, n))
				}
				this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
			}
		}
	}, (Zn.prototype = Object.create($n.prototype)).point = function(t, n) {
		$n.prototype.point.call(this, n, t)
	}, Gn.prototype = {
		moveTo: function(t, n) {
			this._context.moveTo(n, t)
		},
		closePath: function() {
			this._context.closePath()
		},
		lineTo: function(t, n) {
			this._context.lineTo(n, t)
		},
		bezierCurveTo: function(t, n, e, r, i, o) {
			this._context.bezierCurveTo(n, t, r, e, o, i)
		}
	}, Kn.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x = [], this._y = []
		},
		lineEnd: function() {
			var t = this._x,
				n = this._y,
				e = t.length;
			if (e)
				if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
				else
					for (var r = te(t), i = te(n), o = 0, u = 1; e > u; ++o, ++u) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
				(this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
		},
		point: function(t, n) {
			this._x.push(+t), this._y.push(+n)
		}
	}, ee.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x = this._y = NaN, this._point = 0
		},
		lineEnd: function() {
			0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2;
				default:
					if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
					else {
						var e = this._x * (1 - this._t) + t * this._t;
						this._context.lineTo(e, this._y), this._context.lineTo(e, n)
					}
			}
			this._x = t, this._y = n
		}
	};
	var Pv = Array.prototype.slice,
		Lv = .7,
		qv = 1 / Lv,
		Uv = /^#([0-9a-f]{3})$/,
		Rv = /^#([0-9a-f]{6})$/,
		Dv = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,
		Ov = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,
		Fv = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,
		Iv = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,
		Yv = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,
		Bv = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,
		jv = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		};
	ge(xe, be, {
		displayable: function() {
			return this.rgb().displayable()
		},
		toString: function() {
			return this.rgb() + ""
		}
	}), ge(Ne, ke, me(xe, {
		brighter: function(t) {
			return t = null == t ? qv : Math.pow(qv, t), new Ne(this.r * t, this.g * t, this.b * t, this.opacity)
		},
		darker: function(t) {
			return t = null == t ? Lv : Math.pow(Lv, t), new Ne(this.r * t, this.g * t, this.b * t, this.opacity)
		},
		rgb: function() {
			return this
		},
		displayable: function() {
			return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
		},
		toString: function() {
			var t = this.opacity;
			return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
		}
	})), ge(Ce, Ee, me(xe, {
		brighter: function(t) {
			return t = null == t ? qv : Math.pow(qv, t), new Ce(this.h, this.s, this.l * t, this.opacity)
		},
		darker: function(t) {
			return t = null == t ? Lv : Math.pow(Lv, t), new Ce(this.h, this.s, this.l * t, this.opacity)
		},
		rgb: function() {
			var t = this.h % 360 + 360 * (this.h < 0),
				n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
				e = this.l,
				r = e + (.5 > e ? e : 1 - e) * n,
				i = 2 * e - r;
			return new Ne(ze(t >= 240 ? t - 240 : t + 120, i, r), ze(t, i, r), ze(120 > t ? t + 240 : t - 120, i, r), this.opacity)
		},
		displayable: function() {
			return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
		}
	}));
	var Hv = Math.PI / 180,
		Xv = 180 / Math.PI,
		Vv = 18,
		Wv = .95047,
		$v = 1,
		Zv = 1.08883,
		Gv = 4 / 29,
		Jv = 6 / 29,
		Qv = 3 * Jv * Jv,
		Kv = Jv * Jv * Jv;
	ge(qe, Le, me(xe, {
		brighter: function(t) {
			return new qe(this.l + Vv * (null == t ? 1 : t), this.a, this.b, this.opacity)
		},
		darker: function(t) {
			return new qe(this.l - Vv * (null == t ? 1 : t), this.a, this.b, this.opacity)
		},
		rgb: function() {
			var t = (this.l + 16) / 116,
				n = isNaN(this.a) ? t : t + this.a / 500,
				e = isNaN(this.b) ? t : t - this.b / 200;
			return t = $v * Re(t), n = Wv * Re(n), e = Zv * Re(e), new Ne(De(3.2404542 * n - 1.5371385 * t - .4985314 * e), De(-.969266 * n + 1.8760108 * t + .041556 * e), De(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
		}
	})), ge(Ye, Ie, me(xe, {
		brighter: function(t) {
			return new Ye(this.h, this.c, this.l + Vv * (null == t ? 1 : t), this.opacity)
		},
		darker: function(t) {
			return new Ye(this.h, this.c, this.l - Vv * (null == t ? 1 : t), this.opacity)
		},
		rgb: function() {
			return Pe(this).rgb()
		}
	}));
	var t_ = -.14861,
		n_ = 1.78277,
		e_ = -.29227,
		r_ = -.90649,
		i_ = 1.97294,
		o_ = i_ * r_,
		u_ = i_ * n_,
		a_ = n_ * e_ - r_ * t_;
	ge(He, je, me(xe, {
		brighter: function(t) {
			return t = null == t ? qv : Math.pow(qv, t), new He(this.h, this.s, this.l * t, this.opacity)
		},
		darker: function(t) {
			return t = null == t ? Lv : Math.pow(Lv, t), new He(this.h, this.s, this.l * t, this.opacity)
		},
		rgb: function() {
			var t = isNaN(this.h) ? 0 : (this.h + 120) * Hv,
				n = +this.l,
				e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
				r = Math.cos(t),
				i = Math.sin(t);
			return new Ne(255 * (n + e * (t_ * r + n_ * i)), 255 * (n + e * (e_ * r + r_ * i)), 255 * (n + e * (i_ * r)), this.opacity)
		}
	}));
	var c_, s_, f_, l_, h_ = function vw(t) {
			function n(t, n) {
				var r = e((t = ke(t)).r, (n = ke(n)).r),
					i = e(t.g, n.g),
					o = e(t.b, n.b),
					u = e(t.opacity, n.opacity);
				return function(n) {
					return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + ""
				}
			}
			var e = Qe(t);
			return n.gamma = vw, n
		}(1),
		p_ = tr(Ve),
		d_ = tr(We),
		v_ = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
		__ = new RegExp(v_.source, "g"),
		y_ = 180 / Math.PI,
		g_ = {
			translateX: 0,
			translateY: 0,
			rotate: 0,
			skewX: 0,
			scaleX: 1,
			scaleY: 1
		},
		m_ = hr(fr, "px, ", "px)", "deg)"),
		x_ = hr(lr, ", ", ")", ")"),
		b_ = Math.SQRT2,
		w_ = 2,
		M_ = 4,
		T_ = 1e-12,
		k_ = yr(Je),
		N_ = yr(Ke),
		S_ = mr(Je),
		A_ = mr(Ke),
		E_ = xr(Je),
		C_ = xr(Ke),
		z_ = {
			value: function() {}
		};
	Mr.prototype = wr.prototype = {
		constructor: Mr,
		on: function(t, n) {
			var e, r = this._,
				i = Tr(t + "", r),
				o = -1,
				u = i.length; {
				if (!(arguments.length < 2)) {
					if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
					for (; ++o < u;)
						if (e = (t = i[o]).type) r[e] = Nr(r[e], t.name, n);
						else if (null == n)
						for (e in r) r[e] = Nr(r[e], t.name, null);
					return this
				}
				for (; ++o < u;)
					if ((e = (t = i[o]).type) && (e = kr(r[e], t.name))) return e
			}
		},
		copy: function() {
			var t = {},
				n = this._;
			for (var e in n) t[e] = n[e].slice();
			return new Mr(t)
		},
		call: function(t, n) {
			if ((e = arguments.length - 2) > 0)
				for (var e, r, i = new Array(e), o = 0; e > o; ++o) i[o] = arguments[o + 2];
			if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			for (r = this._[t], o = 0, e = r.length; e > o; ++o) r[o].value.apply(n, i)
		},
		apply: function(t, n, e) {
			if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			for (var r = this._[t], i = 0, o = r.length; o > i; ++i) r[i].value.apply(n, e)
		}
	};
	var P_, L_, q_ = Cr(","),
		U_ = q_.parse,
		R_ = q_.parseRows,
		D_ = q_.format,
		O_ = q_.formatRows,
		F_ = Cr("	"),
		I_ = F_.parse,
		Y_ = F_.parseRows,
		B_ = F_.format,
		j_ = F_.formatRows,
		H_ = qr("text/html", function(t) {
			return document.createRange().createContextualFragment(t.responseText)
		}),
		X_ = qr("application/json", function(t) {
			return JSON.parse(t.responseText)
		}),
		V_ = qr("text/plain", function(t) {
			return t.responseText
		}),
		W_ = qr("application/xml", function(t) {
			var n = t.responseXML;
			if (!n) throw new Error("parse error");
			return n
		}),
		$_ = Ur("text/csv", U_),
		Z_ = Ur("text/tab-separated-values", I_),
		G_ = 0,
		J_ = 0,
		Q_ = 0,
		K_ = 1e3,
		ty = 0,
		ny = 0,
		ey = 0,
		ry = "object" == typeof performance ? performance : Date,
		iy = "function" == typeof requestAnimationFrame ? ry === Date ? function(t) {
			requestAnimationFrame(function() {
				t(ry.now())
			})
		} : requestAnimationFrame : function(t) {
			setTimeout(t, 17)
		};
	Fr.prototype = Ir.prototype = {
		constructor: Fr,
		restart: function(t, n, e) {
			if ("function" != typeof t) throw new TypeError("callback is not a function");
			e = (null == e ? Dr() : +e) + (null == n ? 0 : +n), this._next || L_ === this || (L_ ? L_._next = this : P_ = this, L_ = this), this._call = t, this._time = e, Xr()
		},
		stop: function() {
			this._call && (this._call = null, this._time = 1 / 0, Xr())
		}
	};
	var oy = new Date,
		uy = new Date,
		ay = $r(function() {}, function(t, n) {
			t.setTime(+t + n)
		}, function(t, n) {
			return n - t
		});
	ay.every = function(t) {
		return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? $r(function(n) {
			n.setTime(Math.floor(n / t) * t)
		}, function(n, e) {
			n.setTime(+n + e * t)
		}, function(n, e) {
			return (e - n) / t
		}) : ay : null
	};
	var cy = ay.range,
		sy = 1e3,
		fy = 6e4,
		ly = 36e5,
		hy = 864e5,
		py = 6048e5,
		dy = $r(function(t) {
			t.setTime(Math.floor(t / sy) * sy)
		}, function(t, n) {
			t.setTime(+t + n * sy)
		}, function(t, n) {
			return (n - t) / sy
		}, function(t) {
			return t.getUTCSeconds()
		}),
		vy = dy.range,
		_y = $r(function(t) {
			t.setTime(Math.floor(t / fy) * fy)
		}, function(t, n) {
			t.setTime(+t + n * fy)
		}, function(t, n) {
			return (n - t) / fy
		}, function(t) {
			return t.getMinutes()
		}),
		yy = _y.range,
		gy = $r(function(t) {
			var n = t.getTimezoneOffset() * fy % ly;
			0 > n && (n += ly), t.setTime(Math.floor((+t - n) / ly) * ly + n)
		}, function(t, n) {
			t.setTime(+t + n * ly)
		}, function(t, n) {
			return (n - t) / ly
		}, function(t) {
			return t.getHours()
		}),
		my = gy.range,
		xy = $r(function(t) {
			t.setHours(0, 0, 0, 0)
		}, function(t, n) {
			t.setDate(t.getDate() + n)
		}, function(t, n) {
			return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * fy) / hy
		}, function(t) {
			return t.getDate() - 1
		}),
		by = xy.range,
		wy = Zr(0),
		My = Zr(1),
		Ty = Zr(2),
		ky = Zr(3),
		Ny = Zr(4),
		Sy = Zr(5),
		Ay = Zr(6),
		Ey = wy.range,
		Cy = My.range,
		zy = Ty.range,
		Py = ky.range,
		Ly = Ny.range,
		qy = Sy.range,
		Uy = Ay.range,
		Ry = $r(function(t) {
			t.setDate(1), t.setHours(0, 0, 0, 0)
		}, function(t, n) {
			t.setMonth(t.getMonth() + n)
		}, function(t, n) {
			return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
		}, function(t) {
			return t.getMonth()
		}),
		Dy = Ry.range,
		Oy = $r(function(t) {
			t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
		}, function(t, n) {
			t.setFullYear(t.getFullYear() + n)
		}, function(t, n) {
			return n.getFullYear() - t.getFullYear()
		}, function(t) {
			return t.getFullYear()
		});
	Oy.every = function(t) {
		return isFinite(t = Math.floor(t)) && t > 0 ? $r(function(n) {
			n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
		}, function(n, e) {
			n.setFullYear(n.getFullYear() + e * t)
		}) : null
	};
	var Fy = Oy.range,
		Iy = $r(function(t) {
			t.setUTCSeconds(0, 0)
		}, function(t, n) {
			t.setTime(+t + n * fy)
		}, function(t, n) {
			return (n - t) / fy
		}, function(t) {
			return t.getUTCMinutes()
		}),
		Yy = Iy.range,
		By = $r(function(t) {
			t.setUTCMinutes(0, 0, 0)
		}, function(t, n) {
			t.setTime(+t + n * ly)
		}, function(t, n) {
			return (n - t) / ly
		}, function(t) {
			return t.getUTCHours()
		}),
		jy = By.range,
		Hy = $r(function(t) {
			t.setUTCHours(0, 0, 0, 0)
		}, function(t, n) {
			t.setUTCDate(t.getUTCDate() + n)
		}, function(t, n) {
			return (n - t) / hy
		}, function(t) {
			return t.getUTCDate() - 1
		}),
		Xy = Hy.range,
		Vy = Gr(0),
		Wy = Gr(1),
		$y = Gr(2),
		Zy = Gr(3),
		Gy = Gr(4),
		Jy = Gr(5),
		Qy = Gr(6),
		Ky = Vy.range,
		tg = Wy.range,
		ng = $y.range,
		eg = Zy.range,
		rg = Gy.range,
		ig = Jy.range,
		og = Qy.range,
		ug = $r(function(t) {
			t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
		}, function(t, n) {
			t.setUTCMonth(t.getUTCMonth() + n)
		}, function(t, n) {
			return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
		}, function(t) {
			return t.getUTCMonth()
		}),
		ag = ug.range,
		cg = $r(function(t) {
			t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
		}, function(t, n) {
			t.setUTCFullYear(t.getUTCFullYear() + n)
		}, function(t, n) {
			return n.getUTCFullYear() - t.getUTCFullYear()
		}, function(t) {
			return t.getUTCFullYear()
		});
	cg.every = function(t) {
		return isFinite(t = Math.floor(t)) && t > 0 ? $r(function(n) {
			n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
		}, function(n, e) {
			n.setUTCFullYear(n.getUTCFullYear() + e * t)
		}) : null
	};
	var sg, fg = cg.range,
		lg = {
			"": ti,
			"%": function(t, n) {
				return (100 * t).toFixed(n)
			},
			b: function(t) {
				return Math.round(t).toString(2)
			},
			c: function(t) {
				return t + ""
			},
			d: function(t) {
				return Math.round(t).toString(10)
			},
			e: function(t, n) {
				return t.toExponential(n)
			},
			f: function(t, n) {
				return t.toFixed(n)
			},
			g: function(t, n) {
				return t.toPrecision(n)
			},
			o: function(t) {
				return Math.round(t).toString(8)
			},
			p: function(t, n) {
				return ei(100 * t, n)
			},
			r: ei,
			s: ni,
			X: function(t) {
				return Math.round(t).toString(16).toUpperCase()
			},
			x: function(t) {
				return Math.round(t).toString(16)
			}
		},
		hg = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
	ii.prototype.toString = function() {
		return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
	};
	var pg = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
		dg = ui({
			decimal: ".",
			thousands: ",",
			grouping: [3],
			currency: ["$", ""]
		}),
		vg = dg.format,
		_g = dg.formatPrefix,
		yg = pi({
			dateTime: "%a %b %e %X %Y",
			date: "%m/%d/%Y",
			time: "%H:%M:%S",
			periods: ["AM", "PM"],
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		}),
		gg = yg.format,
		mg = yg.parse,
		xg = yg.utcFormat,
		bg = yg.utcParse,
		wg = {
			"-": "",
			_: " ",
			0: "0"
		},
		Mg = /^\s*\d+/,
		Tg = /^%/,
		kg = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
		Ng = "%Y-%m-%dT%H:%M:%S.%LZ",
		Sg = Date.prototype.toISOString ? ao : xg(Ng),
		Ag = +new Date("2000-01-01T00:00:00.000Z") ? co : bg(Ng),
		Eg = Array.prototype,
		Cg = Eg.map,
		zg = Eg.slice,
		Pg = {
			name: "implicit"
		},
		Lg = [0, 1],
		qg = 1e3,
		Ug = 60 * qg,
		Rg = 60 * Ug,
		Dg = 24 * Rg,
		Og = 7 * Dg,
		Fg = 30 * Dg,
		Ig = 365 * Dg,
		Yg = Vo("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
		Bg = Vo("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
		jg = Vo("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
		Hg = Vo("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
		Xg = C_(je(300, .5, 0), je(-240, .5, 1)),
		Vg = C_(je(-100, .75, .35), je(80, 1.5, .8)),
		Wg = C_(je(260, .75, .35), je(80, 1.5, .8)),
		$g = je(),
		Zg = $o(Vo("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
		Gg = $o(Vo("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
		Jg = $o(Vo("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
		Qg = $o(Vo("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
		Kg = "http://www.w3.org/1999/xhtml",
		tm = {
			svg: "http://www.w3.org/2000/svg",
			xhtml: Kg,
			xlink: "http://www.w3.org/1999/xlink",
			xml: "http://www.w3.org/XML/1998/namespace",
			xmlns: "http://www.w3.org/2000/xmlns/"
		},
		nm = 0;
	nu.prototype = tu.prototype = {
		constructor: nu,
		get: function(t) {
			for (var n = this._; !(n in t);)
				if (!(t = t.parentNode)) return;
			return t[n]
		},
		set: function(t, n) {
			return t[this._] = n
		},
		remove: function(t) {
			return this._ in t && delete t[this._]
		},
		toString: function() {
			return this._
		}
	};
	var em = function(t) {
		return function() {
			return this.matches(t)
		}
	};
	if ("undefined" != typeof document) {
		var rm = document.documentElement;
		if (!rm.matches) {
			var im = rm.webkitMatchesSelector || rm.msMatchesSelector || rm.mozMatchesSelector || rm.oMatchesSelector;
			em = function(t) {
				return function() {
					return im.call(this, t)
				}
			}
		}
	}
	var om = em,
		um = {};
	if (t.event = null, "undefined" != typeof document) {
		var am = document.documentElement;
		"onmouseenter" in am || (um = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		})
	}
	var cm = "$";
	bu.prototype = {
		constructor: bu,
		appendChild: function(t) {
			return this._parent.insertBefore(t, this._next)
		},
		insertBefore: function(t, n) {
			return this._parent.insertBefore(t, n)
		},
		querySelector: function(t) {
			return this._parent.querySelector(t)
		},
		querySelectorAll: function(t) {
			return this._parent.querySelectorAll(t);
		}
	}, Ku.prototype = {
		add: function(t) {
			var n = this._names.indexOf(t);
			0 > n && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
		},
		remove: function(t) {
			var n = this._names.indexOf(t);
			n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
		},
		contains: function(t) {
			return this._names.indexOf(t) >= 0
		}
	};
	var sm = [null];
	Aa.prototype = Ea.prototype = {
		constructor: Aa,
		select: pu,
		selectAll: vu,
		filter: _u,
		data: xu,
		enter: Mu,
		exit: Tu,
		merge: ku,
		order: Nu,
		sort: Su,
		call: Eu,
		nodes: Cu,
		node: zu,
		size: Pu,
		empty: Lu,
		each: qu,
		attr: Yu,
		style: Vu,
		property: Gu,
		classed: oa,
		text: sa,
		html: pa,
		raise: va,
		lower: ya,
		append: ga,
		insert: xa,
		remove: wa,
		datum: Ma,
		on: au,
		dispatch: Sa
	};
	var fm = wr("start", "end", "interrupt"),
		lm = [],
		hm = 0,
		pm = 1,
		dm = 2,
		vm = 3,
		_m = 4,
		ym = 5,
		gm = Ea.prototype.constructor,
		mm = 0,
		xm = Ea.prototype;
	zc.prototype = Pc.prototype = {
		constructor: zc,
		select: yc,
		selectAll: gc,
		filter: fc,
		merge: lc,
		selection: mc,
		transition: Cc,
		call: xm.call,
		nodes: xm.nodes,
		node: xm.node,
		size: xm.size,
		empty: xm.empty,
		each: xm.each,
		on: dc,
		attr: Qa,
		attrTween: nc,
		style: Tc,
		styleTween: Nc,
		text: Ec,
		remove: _c,
		tween: ja,
		delay: ic,
		duration: ac,
		ease: sc
	};
	var bm = {
		time: null,
		delay: 0,
		duration: 250,
		ease: et
	};
	Ea.prototype.interrupt = Ia, Ea.prototype.transition = Uc;
	var wm = [null],
		Mm = Array.prototype.slice,
		Tm = 1,
		km = 2,
		Nm = 3,
		Sm = 4,
		Am = 1e-6;
	ys.prototype = hs.prototype = {
		constructor: ys,
		each: ns,
		eachAfter: rs,
		eachBefore: es,
		sum: is,
		sort: os,
		path: us,
		ancestors: cs,
		descendants: ss,
		leaves: fs,
		links: ls,
		copy: ps
	};
	var Em = "$",
		Cm = {
			depth: -1
		},
		zm = {};
	Ks.prototype = Object.create(ys.prototype);
	var Pm = (1 + Math.sqrt(5)) / 2,
		Lm = function _w(t) {
			function n(n, e, r, i, o) {
				rf(t, n, e, r, i, o)
			}
			return n.ratio = function(t) {
				return _w((t = +t) > 1 ? t : 1)
			}, n
		}(Pm),
		qm = function yw(t) {
			function n(n, e, r, i, o) {
				if ((u = n._squarify) && u.ratio === t)
					for (var u, a, c, s, f, l = -1, h = u.length, p = n.value; ++l < h;) {
						for (a = u[l], c = a.children, s = a.value = 0, f = c.length; f > s; ++s) a.value += c[s].value;
						a.dice ? Bs(a, e, r, i, r += (o - r) * a.value / p) : ef(a, e, r, e += (i - e) * a.value / p, o), p -= a.value
					} else n._squarify = u = rf(t, n, e, r, i, o), u.ratio = t
			}
			return n.ratio = function(t) {
				return yw((t = +t) > 1 ? t : 1)
			}, n
		}(Pm),
		Um = 10,
		Rm = Math.PI * (3 - Math.sqrt(5));
	Sf.prototype.on = function() {
		var t = this._.on.apply(this._, arguments);
		return t === this._ ? this : t
	}, Uf.prototype = {
		constructor: Uf,
		insert: function(t, n) {
			var e, r, i;
			if (t) {
				if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
					for (t = t.R; t.L;) t = t.L;
					t.L = n
				} else t.R = n;
				e = t
			} else this._ ? (t = Ff(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
			for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Df(this, e), t = e, e = t.U), e.C = !1, r.C = !0, Of(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Of(this, e), t = e, e = t.U), e.C = !1, r.C = !0, Df(this, r))), e = t.U;
			this._.C = !1
		},
		remove: function(t) {
			t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
			var n, e, r, i = t.U,
				o = t.L,
				u = t.R;
			if (e = o ? u ? Ff(u) : o : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) {
				if (t && t.C) return void(t.C = !1);
				do {
					if (t === this._) break;
					if (t === i.L) {
						if (n = i.R, n.C && (n.C = !1, i.C = !0, Df(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
							n.R && n.R.C || (n.L.C = !1, n.C = !0, Of(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, Df(this, i), t = this._;
							break
						}
					} else if (n = i.L, n.C && (n.C = !1, i.C = !0, Of(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
						n.L && n.L.C || (n.R.C = !1, n.C = !0, Df(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Of(this, i), t = this._;
						break
					}
					n.C = !0, t = i, i = i.U
				} while (!t.C);
				t && (t.C = !1)
			}
		}
	};
	var Dm, Om, Fm, Im, Ym, Bm = [],
		jm = [],
		Hm = 1e-6,
		Xm = 1e-12;
	fl.prototype = {
		constructor: fl,
		polygons: function() {
			var t = this.edges;
			return this.cells.map(function(n) {
				var e = n.halfedges.map(function(e) {
					return $f(n, t[e])
				});
				return e.data = n.site.data, e
			})
		},
		triangles: function() {
			var t = [],
				n = this.edges;
			return this.cells.forEach(function(e, r) {
				for (var i, o = e.site, u = e.halfedges, a = -1, c = u.length, s = n[u[c - 1]], f = s.left === o ? s.right : s.left; ++a < c;) i = f, s = n[u[a]], f = s.left === o ? s.right : s.left, r < i.index && r < f.index && cl(o, i, f) < 0 && t.push([o.data, i.data, f.data])
			}), t
		},
		links: function() {
			return this.edges.filter(function(t) {
				return t.right
			}).map(function(t) {
				return {
					source: t.left.data,
					target: t.right.data
				}
			})
		}
	}, dl.prototype = {
		constructor: dl,
		scale: function(t) {
			return 1 === t ? this : new dl(this.k * t, this.x, this.y)
		},
		translate: function(t, n) {
			return 0 === t & 0 === n ? this : new dl(this.k, this.x + this.k * t, this.y + this.k * n)
		},
		apply: function(t) {
			return [t[0] * this.k + this.x, t[1] * this.k + this.y]
		},
		applyX: function(t) {
			return t * this.k + this.x
		},
		applyY: function(t) {
			return t * this.k + this.y
		},
		invert: function(t) {
			return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
		},
		invertX: function(t) {
			return (t - this.x) / this.k
		},
		invertY: function(t) {
			return (t - this.y) / this.k
		},
		rescaleX: function(t) {
			return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
		},
		rescaleY: function(t) {
			return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
		},
		toString: function() {
			return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
		}
	};
	var Vm = new dl(1, 0, 0);
	vl.prototype = dl.prototype;
	var Wm = {
			name: "drag"
		},
		$m = {
			name: "space"
		},
		Zm = {
			name: "handle"
		},
		Gm = {
			name: "center"
		},
		Jm = {
			name: "x",
			handles: ["e", "w"].map(Nl),
			input: function(t, n) {
				return t && [
					[t[0], n[0][1]],
					[t[1], n[1][1]]
				]
			},
			output: function(t) {
				return t && [t[0][0], t[1][0]]
			}
		},
		Qm = {
			name: "y",
			handles: ["n", "s"].map(Nl),
			input: function(t, n) {
				return t && [
					[n[0][0], t[0]],
					[n[1][0], t[1]]
				]
			},
			output: function(t) {
				return t && [t[0][1], t[1][1]]
			}
		},
		Km = {
			name: "xy",
			handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Nl),
			input: function(t) {
				return t
			},
			output: function(t) {
				return t
			}
		},
		tx = {
			overlay: "crosshair",
			selection: "move",
			n: "ns-resize",
			e: "ew-resize",
			s: "ns-resize",
			w: "ew-resize",
			nw: "nwse-resize",
			ne: "nesw-resize",
			se: "nwse-resize",
			sw: "nesw-resize"
		},
		nx = {
			e: "w",
			w: "e",
			nw: "ne",
			ne: "nw",
			se: "sw",
			sw: "se"
		},
		ex = {
			n: "s",
			s: "n",
			nw: "sw",
			ne: "se",
			se: "ne",
			sw: "nw"
		},
		rx = {
			overlay: 1,
			selection: 1,
			n: null,
			e: 1,
			s: null,
			w: -1,
			nw: -1,
			ne: 1,
			se: 1,
			sw: -1
		},
		ix = {
			overlay: 1,
			selection: 1,
			n: -1,
			e: null,
			s: 1,
			w: null,
			nw: -1,
			ne: -1,
			se: 1,
			sw: 1
		};
	Dl.prototype = {
		constructor: Dl,
		reset: function() {
			this.s = this.t = 0
		},
		add: function(t) {
			Ol(Fx, t, this.t), Ol(this, Fx.s, this.s), this.s ? this.t += Fx.t : this.s = Fx.t
		},
		valueOf: function() {
			return this.s
		}
	};
	var ox, ux, ax, cx, sx, fx, lx, hx, px, dx, vx, _x, yx, gx, mx, xx, bx, wx, Mx, Tx, kx, Nx, Sx, Ax, Ex, Cx, zx, Px, Lx, qx, Ux, Rx, Dx, Ox, Fx = new Dl,
		Ix = 1e-6,
		Yx = 1e-12,
		Bx = Math.PI,
		jx = Bx / 2,
		Hx = Bx / 4,
		Xx = 2 * Bx,
		Vx = 180 / Bx,
		Wx = Bx / 180,
		$x = Math.abs,
		Zx = Math.atan,
		Gx = Math.atan2,
		Jx = Math.cos,
		Qx = Math.ceil,
		Kx = Math.exp,
		tb = Math.log,
		nb = Math.pow,
		eb = Math.sin,
		rb = Math.sign || function(t) {
			return t > 0 ? 1 : 0 > t ? -1 : 0
		},
		ib = Math.sqrt,
		ob = Math.tan,
		ub = {
			Feature: function(t, n) {
				jl(t.geometry, n)
			},
			FeatureCollection: function(t, n) {
				for (var e = t.features, r = -1, i = e.length; ++r < i;) jl(e[r].geometry, n)
			}
		},
		ab = {
			Sphere: function(t, n) {
				n.sphere()
			},
			Point: function(t, n) {
				t = t.coordinates, n.point(t[0], t[1], t[2])
			},
			MultiPoint: function(t, n) {
				for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
			},
			LineString: function(t, n) {
				Hl(t.coordinates, n, 0)
			},
			MultiLineString: function(t, n) {
				for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Hl(e[r], n, 0)
			},
			Polygon: function(t, n) {
				Xl(t.coordinates, n)
			},
			MultiPolygon: function(t, n) {
				for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Xl(e[r], n)
			},
			GeometryCollection: function(t, n) {
				for (var e = t.geometries, r = -1, i = e.length; ++r < i;) jl(e[r], n)
			}
		},
		cb = {
			point: Bl,
			lineStart: Bl,
			lineEnd: Bl,
			polygonStart: function() {
				ox.reset(), cb.lineStart = Wl, cb.lineEnd = $l
			},
			polygonEnd: function() {
				var t = +ox;
				ux.add(0 > t ? Xx + t : t), this.lineStart = this.lineEnd = this.point = Bl
			},
			sphere: function() {
				ux.add(Xx)
			}
		},
		sb = {
			point: oh,
			lineStart: ah,
			lineEnd: ch,
			polygonStart: function() {
				sb.point = sh, sb.lineStart = fh, sb.lineEnd = lh, xx.reset(), cb.polygonStart()
			},
			polygonEnd: function() {
				cb.polygonEnd(), sb.point = oh, sb.lineStart = ah, sb.lineEnd = ch, 0 > ox ? (hx = -(dx = 180), px = -(vx = 90)) : xx > Ix ? vx = 90 : -Ix > xx && (px = -90), wx[0] = hx, wx[1] = dx
			}
		},
		fb = {
			sphere: Bl,
			point: _h,
			lineStart: gh,
			lineEnd: bh,
			polygonStart: function() {
				fb.lineStart = wh, fb.lineEnd = Mh
			},
			polygonEnd: function() {
				fb.lineStart = gh, fb.lineEnd = bh
			}
		};
	Eh.invert = Eh;
	var lb, hb, pb, db, vb, _b, yb, gb, mb, xb, bb, wb, Mb = 1e9,
		Tb = -Mb,
		kb = {
			sphere: Bl,
			point: Bl,
			lineStart: Vh,
			lineEnd: Bl,
			polygonStart: Bl,
			polygonEnd: Bl
		},
		Nb = [null, null],
		Sb = {
			type: "LineString",
			coordinates: Nb
		},
		Ab = Rl(),
		Eb = Rl(),
		Cb = {
			point: Bl,
			lineStart: Bl,
			lineEnd: Bl,
			polygonStart: function() {
				Cb.lineStart = rp, Cb.lineEnd = up
			},
			polygonEnd: function() {
				Cb.lineStart = Cb.lineEnd = Cb.point = Bl, Ab.add($x(Eb)), Eb.reset()
			},
			result: function() {
				var t = Ab / 2;
				return Ab.reset(), t
			}
		},
		zb = 1 / 0,
		Pb = zb,
		Lb = -zb,
		qb = Lb,
		Ub = {
			point: ap,
			lineStart: Bl,
			lineEnd: Bl,
			polygonStart: Bl,
			polygonEnd: Bl,
			result: function() {
				var t = [
					[zb, Pb],
					[Lb, qb]
				];
				return Lb = qb = -(Pb = zb = 1 / 0), t
			}
		},
		Rb = 0,
		Db = 0,
		Ob = 0,
		Fb = 0,
		Ib = 0,
		Yb = 0,
		Bb = 0,
		jb = 0,
		Hb = 0,
		Xb = {
			point: cp,
			lineStart: sp,
			lineEnd: hp,
			polygonStart: function() {
				Xb.lineStart = pp, Xb.lineEnd = dp
			},
			polygonEnd: function() {
				Xb.point = cp, Xb.lineStart = sp, Xb.lineEnd = hp
			},
			result: function() {
				var t = Hb ? [Bb / Hb, jb / Hb] : Yb ? [Fb / Yb, Ib / Yb] : Ob ? [Rb / Ob, Db / Ob] : [NaN, NaN];
				return Rb = Db = Ob = Fb = Ib = Yb = Bb = jb = Hb = 0, t
			}
		},
		Vb = Rl(),
		Wb = wp(function() {
			return !0
		}, kp, Sp, [-Bx, -jx]);
	Cp.prototype = {
		point: function(t, n) {
			this.stream.point(t, n)
		},
		sphere: function() {
			this.stream.sphere()
		},
		lineStart: function() {
			this.stream.lineStart()
		},
		lineEnd: function() {
			this.stream.lineEnd()
		},
		polygonStart: function() {
			this.stream.polygonStart()
		},
		polygonEnd: function() {
			this.stream.polygonEnd()
		}
	};
	var $b = 16,
		Zb = Jx(30 * Wx),
		Gb = Ep({
			point: function(t, n) {
				this.stream.point(t * Wx, n * Wx)
			}
		}),
		Jb = Bp(function(t) {
			return ib(2 / (1 + t))
		});
	Jb.invert = jp(function(t) {
		return 2 * Il(t / 2)
	});
	var Qb = Bp(function(t) {
		return (t = Fl(t)) && t / eb(t)
	});
	Qb.invert = jp(function(t) {
		return t
	}), Vp.invert = function(t, n) {
		return [t, 2 * Zx(Kx(n)) - jx]
	}, Qp.invert = Qp, ed.invert = jp(Zx), id.invert = jp(Il), ud.invert = jp(function(t) {
		return 2 + Zx(t)
	}), cd.invert = function(t, n) {
		return [-n, 2 * Zx(Kx(t)) - jx]
	}, t.version = fd, t.bisect = hd, t.bisectRight = hd, t.bisectLeft = pd, t.ascending = n, t.bisector = e, t.descending = i, t.deviation = a, t.extent = c, t.histogram = v, t.thresholdFreedmanDiaconis = y, t.thresholdScott = g, t.thresholdSturges = d, t.max = m, t.mean = x, t.median = b, t.merge = w, t.min = M, t.pairs = T, t.permute = k, t.quantile = _, t.range = l, t.scan = N, t.shuffle = S, t.sum = A, t.ticks = h, t.tickStep = p, t.transpose = E, t.variance = u, t.zip = z, t.entries = j, t.keys = Y, t.values = B, t.map = L, t.set = I, t.nest = q, t.randomUniform = H, t.randomNormal = X, t.randomLogNormal = V, t.randomBates = $, t.randomIrwinHall = W, t.randomExponential = Z, t.easeLinear = G, t.easeQuad = K, t.easeQuadIn = J, t.easeQuadOut = Q, t.easeQuadInOut = K, t.easeCubic = et, t.easeCubicIn = tt, t.easeCubicOut = nt, t.easeCubicInOut = et, t.easePoly = kd, t.easePolyIn = Md, t.easePolyOut = Td, t.easePolyInOut = kd, t.easeSin = ot, t.easeSinIn = rt, t.easeSinOut = it, t.easeSinInOut = ot, t.easeExp = ct, t.easeExpIn = ut, t.easeExpOut = at, t.easeExpInOut = ct, t.easeCircle = lt, t.easeCircleIn = st, t.easeCircleOut = ft, t.easeCircleInOut = lt, t.easeBounce = pt, t.easeBounceIn = ht, t.easeBounceOut = pt, t.easeBounceInOut = dt, t.easeBack = Yd, t.easeBackIn = Fd, t.easeBackOut = Id, t.easeBackInOut = Yd, t.easeElastic = Vd, t.easeElasticIn = Xd, t.easeElasticOut = Vd, t.easeElasticInOut = Wd, t.polygonArea = vt, t.polygonCentroid = _t, t.polygonHull = xt, t.polygonContains = bt, t.polygonLength = wt, t.path = Tt, t.quadtree = jt, t.queue = Qt, t.arc = sn, t.area = vn, t.line = dn, t.pie = gn, t.radialArea = Mn, t.radialLine = wn, t.symbol = Tn, t.symbols = Tv, t.symbolCircle = uv, t.symbolCross = av, t.symbolDiamond = fv, t.symbolSquare = _v, t.symbolStar = vv, t.symbolTriangle = gv, t.symbolWye = Mv, t.curveBasisClosed = Cn, t.curveBasisOpen = Pn, t.curveBasis = An, t.curveBundle = kv, t.curveCardinalClosed = Sv, t.curveCardinalOpen = Av, t.curveCardinal = Nv, t.curveCatmullRomClosed = Cv, t.curveCatmullRomOpen = zv, t.curveCatmullRom = Ev, t.curveLinearClosed = jn, t.curveLinear = ln, t.curveMonotoneX = Jn, t.curveMonotoneY = Qn, t.curveNatural = ne, t.curveStep = re, t.curveStepAfter = oe, t.curveStepBefore = ie, t.stack = se, t.stackOffsetExpand = fe, t.stackOffsetNone = ue, t.stackOffsetSilhouette = le, t.stackOffsetWiggle = he, t.stackOrderAscending = pe, t.stackOrderDescending = ve, t.stackOrderInsideOut = _e, t.stackOrderNone = ae, t.stackOrderReverse = ye, t.color = be, t.rgb = ke, t.hsl = Ee, t.lab = Le, t.hcl = Ie, t.cubehelix = je, t.interpolate = ar, t.interpolateArray = nr, t.interpolateNumber = er, t.interpolateObject = rr, t.interpolateRound = cr, t.interpolateString = ur, t.interpolateTransformCss = m_, t.interpolateTransformSvg = x_, t.interpolateZoom = _r, t.interpolateRgb = h_, t.interpolateRgbBasis = p_, t.interpolateRgbBasisClosed = d_, t.interpolateHsl = k_, t.interpolateHslLong = N_, t.interpolateLab = gr, t.interpolateHcl = S_, t.interpolateHclLong = A_, t.interpolateCubehelix = E_, t.interpolateCubehelixLong = C_, t.interpolateBasis = Ve, t.interpolateBasisClosed = We, t.quantize = br, t.dispatch = wr, t.dsvFormat = Cr, t.csvParse = U_, t.csvParseRows = R_, t.csvFormat = D_, t.csvFormatRows = O_, t.tsvParse = I_, t.tsvParseRows = Y_, t.tsvFormat = B_, t.tsvFormatRows = j_, t.request = zr, t.html = H_, t.json = X_, t.text = V_, t.xml = W_, t.csv = $_, t.tsv = Z_, t.now = Dr, t.timer = Ir, t.timerFlush = Yr, t.timeout = Vr, t.interval = Wr, t.timeInterval = $r, t.timeMillisecond = ay, t.timeMilliseconds = cy, t.timeSecond = dy, t.timeSeconds = vy, t.timeMinute = _y, t.timeMinutes = yy, t.timeHour = gy, t.timeHours = my, t.timeDay = xy, t.timeDays = by, t.timeWeek = wy, t.timeWeeks = Ey, t.timeSunday = wy, t.timeSundays = Ey, t.timeMonday = My, t.timeMondays = Cy, t.timeTuesday = Ty, t.timeTuesdays = zy, t.timeWednesday = ky, t.timeWednesdays = Py, t.timeThursday = Ny, t.timeThursdays = Ly, t.timeFriday = Sy, t.timeFridays = qy, t.timeSaturday = Ay, t.timeSaturdays = Uy, t.timeMonth = Ry, t.timeMonths = Dy, t.timeYear = Oy, t.timeYears = Fy, t.utcMillisecond = ay, t.utcMilliseconds = cy, t.utcSecond = dy, t.utcSeconds = vy, t.utcMinute = Iy, t.utcMinutes = Yy, t.utcHour = By, t.utcHours = jy, t.utcDay = Hy, t.utcDays = Xy, t.utcWeek = Vy, t.utcWeeks = Ky, t.utcSunday = Vy, t.utcSundays = Ky, t.utcMonday = Wy, t.utcMondays = tg, t.utcTuesday = $y, t.utcTuesdays = ng, t.utcWednesday = Zy, t.utcWednesdays = eg, t.utcThursday = Gy, t.utcThursdays = rg, t.utcFriday = Jy, t.utcFridays = ig, t.utcSaturday = Qy, t.utcSaturdays = og, t.utcMonth = ug, t.utcMonths = ag, t.utcYear = cg, t.utcYears = fg, t.format = vg, t.formatPrefix = _g, t.formatLocale = ui, t.formatSpecifier = ri, t.precisionFixed = ai, t.precisionPrefix = ci, t.precisionRound = si, t.timeFormat = gg, t.timeParse = mg, t.utcFormat = xg, t.utcParse = bg, t.isoFormat = Sg, t.isoParse = Ag, t.timeFormatLocale = pi, t.scaleBand = fo, t.scalePoint = ho, t.scaleIdentity = No, t.scaleLinear = ko, t.scaleLog = qo, t.scaleOrdinal = so, t.scaleImplicit = Pg, t.scalePow = Ro, t.scaleSqrt = Do, t.scaleQuantile = Oo, t.scaleQuantize = Fo, t.scaleThreshold = Io, t.scaleTime = Ho, t.scaleUtc = Xo, t.schemeCategory10 = Yg, t.schemeCategory20b = Bg, t.schemeCategory20c = jg, t.schemeCategory20 = Hg, t.scaleSequential = Zo, t.interpolateCubehelixDefault = Xg, t.interpolateRainbow = Wo, t.interpolateWarm = Vg, t.interpolateCool = Wg, t.interpolateViridis = Zg, t.interpolateMagma = Gg, t.interpolateInferno = Jg, t.interpolatePlasma = Qg, t.creator = Ko, t.customEvent = cu, t.local = tu, t.matcher = om, t.mouse = lu, t.namespace = Go, t.namespaces = tm, t.select = Ca, t.selectAll = za, t.selection = Ea, t.selector = hu, t.selectorAll = du, t.touch = Pa, t.touches = La, t.window = Bu, t.active = Rc, t.interrupt = Fa, t.transition = Pc, t.axisTop = jc, t.axisRight = Hc, t.axisBottom = Xc, t.axisLeft = Vc, t.cluster = ts, t.hierarchy = hs, t.pack = Ds, t.packSiblings = zs, t.packEnclose = xs, t.partition = js, t.stratify = Vs, t.tree = nf, t.treemap = of, t.treemapBinary = uf, t.treemapDice = Bs, t.treemapSlice = ef, t.treemapSliceDice = af, t.treemapSquarify = Lm, t.treemapResquarify = qm, t.forceCenter = cf, t.forceCollide = pf, t.forceLink = vf, t.forceManyBody = mf, t.forceSimulation = gf, t.forceX = xf, t.forceY = bf, t.drag = zf, t.dragDisable = Tf, t.dragEnable = kf, t.voronoi = ll, t.zoom = bl, t.zoomIdentity = Vm, t.zoomTransform = vl, t.brush = ql, t.brushX = Pl, t.brushY = Ll, t.brushSelection = zl, t.geoArea = Jl, t.geoBounds = vh, t.geoCentroid = Nh, t.geoCircle = Dh, t.geoClipExtent = Xh, t.geoDistance = Jh, t.geoGraticule = tp, t.geoInterpolate = np, t.geoLength = Gh, t.geoPath = xp, t.geoAlbers = Fp, t.geoAlbersUsa = Yp, t.geoAzimuthalEqualArea = Hp, t.geoAzimuthalEquidistant = Xp, t.geoConicConformal = Jp, t.geoConicEqualArea = Op, t.geoConicEquidistant = nd, t.geoEquirectangular = Kp, t.geoGnomonic = rd, t.geoProjection = qp, t.geoProjectionMutator = Up, t.geoMercator = Wp, t.geoOrthographic = od, t.geoStereographic = ad, t.geoTransverseMercator = sd, t.geoRotation = qh, t.geoStream = Vl, t.geoTransform = Ep, Object.defineProperty(t, "__esModule", {
		value: !0
	})
});