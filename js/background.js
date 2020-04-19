/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const wk = {};

for (let su of 'object array string regex date math type std'.split(' '))
{
	wk[su] = {};
}

wk.xp = function(qg, cb)
{
	return qg != undefined && qg.constructor === cb;
}

wk.cr = function()
{
	return wk.lg(9);
}

wk.cu = function(ia)
{
	return nf[0].test(ia);
}

wk.xm = function(vl)
{
	return Object.keys(vl).length == 0;
}

wk.ds = function(zq, vl)
{
	for (let tl in vl)
	{
		const fy = vl[tl];

		if (tl == zq) return fy;
		if (fy == zq) return tl;
	}
}

wk.vn = function(vl, fu)
{
	let ia = '';

	for (let tl in vl)
	{
		ia += tl + '=' + vl[tl] + fu;
	}

	return ia.slice(0, -1);
}

wk.zi = function(pw, zp, th)
{
	const xq = zp + 1;

	return th.slice(xq, xq + pw);
}

wk.hb = function(th)
{
	return th[th.length - 1];
}

wk.yj = function(iv, xy)
{
	iv += '?';

	for (let tl in xy)
	{
		iv += tl + '=' + encodeURIComponent(xy[tl]) + '&';
	}

	return iv.slice(0, -1);
}

wk.xf = function(ia, xz)
{
	if (wk.xp(xz, Array))
	{
		let i = 0;

		return ia.replace(nf[1], _ => xz[i++]);
	}

	return ia.replace('%s', xz);
}

wk.jt = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

wk.ew = function(ia, vm)
{
	const zv = wk.xf('(%s)', vm.join('|'));

	return ia.split(new RegExp(zv)).filter(s => s !== '');
}

wk.sj = function(ia)
{
	return ia.toUpperCase();
}

wk.bx = function(ia)
{
	return ia.toLowerCase();
}

wk.ki = function(ia, rl)
{
	if (!rl)
	{
		ia = ia.toLowerCase();
	}

	return ia[0].toUpperCase() + ia.slice(1);
}

wk.fo = function(ok, ia)
{
	return ia.match(ok) || [];
}

wk.kw = function(ok, ia)
{
	if (ok.global) return '';

	const m = wk.fo(ok, ia);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

wk.cs = function()
{
	return Math.floor(Date.now() / 1000);
}

wk.wc = function(os)
{
	return os < wk.cs();
}

wk.io = function(q)
{
	const ni = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = wk.kw(nf[2], q);

	return Date.now() + (x[0] * ni[x[1]] * 1000);
}

wk.vq = function(mp)
{
	let x = mp.split(':'),
		i = x.length,
		s = 0,
		m = 1;

	while (i--)
	{
		s += m * x[i];
		m *= 60;
	}

	return s;
}

wk.ej = function(au)
{
	let th = [];

	th.push(au / 3600);

	au %= 3600;

	th.push(au / 60);

	th.push(au % 60);

	th = th.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return th.join(':').replace(nf[3], '');
}

wk.lg = function(xj)
{
	return Math.random().toString().slice(2, xj + 2);
}

wk.vz = function(td, so)
{
	const aq = Math.random() * (so - td) + td;

	return Math.floor(aq);
}

wk.pf = function(x, a, b)
{
	return x >= a && x <= b;
}

wk.ws = function(a, b)
{
	return 100 * (a / b);
}

wk.sh = function()
{
	let bn, lc = 0;

	try {
		bn = [sd, bs, mk];
	}
	catch (e) {
		bn = [nh, mk];
	}

	bn.forEach(
		je => lc += je.toString().length
	);

	return lc != 3428;
}

class mr
{
	constructor(rn, tz)
	{
		this.rn = rn;
		this.tz = tz;
	}
}

class ky
{
	constructor(pl, rn, tz)
	{
		this.pl = pl;
		this.vc = new mr(rn, tz);
	}
}

class zs extends Array
{
	constructor(yw)
	{
		super();

		if (yw != null)
		{
			super.push(yw);
		}
	}

	push(la)
	{
		return !this.includes(la) && super.push(la);
	}
}

class tr
{
	constructor(qw, rd)
	{
		const je = qw.status;

		this.je = je;
		this.ig = false;
		this.rq = false;
		this.sm = null;
		this.tz = null;

		switch (rd)
		{
			case 'error':
				return this.ya('tw');

			case 'timeout':
				return this.ya('ot');

			default:
			{
				this.ig = (je == 200);

				if (je >= 500)
				{
					return this.ya('xo');
				}

				try {
					this.tz = JSON.parse(qw.responseText);
				}
				catch (e) {
					this.tz = qw.responseText;
				}
			}
		}
	}

	mf(xh)
	{
		this.sm = xh;
	}

	ya(xh)
	{
		this.mf(xh);

		this.rq = true;
	}
}

class yu
{
	constructor(tz, om)
	{
		Object.assign(this, tz);

		Object.defineProperty(this, 'om', {
			value: om
		});
	}

	set(tl, fy)
	{
		this[tl] = fy;

		this.rg();
	}

	rg()
	{
		return yh.set(this.om, this);
	}
}

class mk extends yu
{
	constructor(tz, om)
	{
		super(tz, om);
	}

	get pm()
	{
		return Boolean(this.ch)
	}

	get ch()
	{
		return this[0];
	}

	get xd()
	{
		return this[1];
	}

	get ck()
	{
		return wk.wc(this.xd);
	}

	get nx()
	{
		const fd = this.xd.toString().split('').pop();

		return Boolean(+fd);
	}

	set ch(tl)
	{
		this.set(0, tl);
	}

	set xd(re)
	{
		this.set(1, re);
	}

	get sq()
	{
		let s = this.xd.toString(),
			d = s.length,
			x = s.substring(0,1),
			n = 0;

		for (let i = 0; i < d; i++)
		{
			let m = s[i] * (i % 2 ? 2 : 1);

			if (m > 9)
			{
				m = m.toString();
				m = +m[0] + +m[1];
			}

			n += m;
		}

		return d * +x == 10 && !(n % 5);
	}
}

class oz
{
	constructor(ke)
	{
		if (ke)
		{
			this.jy();
		}
	}

	iz(qx, ks, ox)
	{
	}

	jy()
	{
		chrome.runtime.onMessage.addListener(
			this.iz.bind(this)
		);
	}
}

class pe extends oz
{
	constructor()
	{
		super(false);
	}

	iz(qx, ks, ox)
	{
		const tz = qx.tz;

		switch (qx.rn)
		{
			case 'qj':
				return this.nb(tz);
		}
	}

	nb(qj)
	{
		if (qj == 'kq')
		{
			im.xq();
		}
	}

	ze()
	{
		return this.ns('ze');
	}

	ti(sn)
	{
		return this.ns('ti', sn);
	}

	gi(ch)
	{
		return this.ns('gi', ch);
	}

	wj()
	{
		return this.ns('wj');
	}

	ho()
	{
		return this.ns('ho');
	}

	ns(rn, tz)
	{
		const qx = new mr(rn, tz);

		return new Promise(ox =>
		{
			try {
				chrome.runtime.sendMessage(qx, ox);
			}
			catch (e) {
			}
		});
	}
}

class ne extends oz
{
	constructor()
	{
		super(true);
	}

	iz(qx, ks, ox)
	{
		const po = function(...xz)
		{
			try {
				ox(...xz);
			}
			catch (e) {
			}
		};

		bi.dl.then(_ =>
		{
			const tz = qx.tz;

			switch (qx.rn)
			{
				case 'ze':
					bi.ze().then(po);
				break;

				case 'ti':
					bi.ti(tz).then(po);
				break;

				case 'gi':
					bi.gi(tz).then(po);
				break;

				case 'wj':
					es.ad.wj(tz).then(po);
				break;

				case 'ho':
					bi.bk();
				break;
			}
		});

		return true;
	}
}

class ci
{
	get(tl)
	{
		return new Promise(zk =>
		{
			try {
				chrome.storage.local.get(tl, ib =>
					zk(typeof tl == 'string' ? ib[tl] : ib)
				);
			}
			catch (e) {
			}
		});
	}

	set(tl, fy)
	{
		let tz;

		if (typeof tl == 'object')
		{
			tz = tl;
		}
		else {
			tz = {[tl]:fy};
		}

		return new Promise(mo =>
		{
			try {
				chrome.storage.local.set(tz, mo);
			}
			catch (e) {
			}
		});
	}

	ip()
	{
		return new Promise(mo =>
		{
			try {
				chrome.storage.local.clear(mo);
			}
			catch (e) {
			}
		});
	}
}

class udepc
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			ky => this.pj(ky)
		);

		Port.onDisconnect.addListener(
			_ => this.nl()
		);

		this.Port = Port;

		this.br = {
		};

		this.fx = false;
	}

	iz(m)
	{
	}

	dn(pl, rn, tz)
	{
		const uj = new ky(pl, rn, tz);

		if (!this.fx)
		{
			this.Port.postMessage(uj);
		}
	}

	pj(x)
	{
		this.aw(x.pl).iz(x.vc);
	}

	aw(pl)
	{
		return this.br[pl] || this;
	}

	km(pl, iz, nl)
	{
		return this.br[pl] = new jm(this, pl, iz, nl);
	}

	nl()
	{
		this.fx = true;

		for (let pl in this.br)
		{
			this.aw(pl).nl();
		}
	}
}

class mw extends udepc
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	iz(qx)
	{
		const tz = qx.tz;

		switch (qx.rn)
		{
			case 'gd':
				return qv.vb(tz);
		}
	}

	km(pl, iz, nl)
	{
		this.dn(null, 'km', pl);

		return super.km(pl, iz, nl);
	}

	nl()
	{
		super.nl();

		im.bu();
	}
}

class jx extends udepc
{
	constructor(er)
	{
		super(er);
	}

	iz(qx)
	{
		switch (qx.rn)
		{
			case 'km':
				return this.km(qx.tz);
		}
	}

	km(pl)
	{
		const dz = super.km(pl);

		switch (pl)
		{
			case 'el':
				return new mx(dz);
		}
	}
}

class kl
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			mj => this.xt(mj)
		);

		this.bd = [];
	}

	xt(er)
	{
		this.bd.push(
			new jx(er)
		);
	}

	fg(kz)
	{
		for (let er of this.bd)
		{
			er.dn(null, 'gd', kz);
		}
	}
}

class jm
{
	constructor(er, pl, iz, nl)
	{
		this.er = er;

		this.pl = pl;

		if (iz)
		{
			this.iz = iz;
		}

		if (nl)
		{
			this.nl = nl;
		}
	}

	dn(rn, tz)
	{
		this.er.dn(this.pl, rn, tz);
	}

	iz(m)
	{
	}

	nl()
	{
	}
}

wk.swk = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

wk.iwn = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

wk.fma = function(kd, ld)
{
	if (ld)
	{
		const tb = Object.create(
			Object.getPrototypeOf(kd)
		);

		return Object.assign(tb, kd);
	}

	return {...kd};
}

wk.bph = function(og, uf, th)
{
	let i = th.indexOf(og);

	if (i >= 0)
	{
		th[i] = uf;
	}
}

wk.cws = function(fi, yz, th)
{
	if (yz != fi)
	{
		const la = th[fi];
		th.splice(fi, 1);
		th.splice(yz, 0, la);
	}
}

wk.hsm = function(fi, th)
{
	wk.cws(fi, Infinity, th);
}

wk.fvz = function(...pb)
{
    pb.sort(
    	(a, b) => a.length - b.length
    );

	return pb.shift().filter(la =>
	{
		for (let gw of pb)
        {
			if (!gw.includes(la))
				return false;
        }

		return true;
    });
}

wk.ezr = function(th)
{
	return th.filter((value, pc) => th.indexOf(value) == pc);
}

wk.wzk = function(gb, eb)
{
	return gb.join(eb || '.');
}

wk.nrc = function(ia, is)
{
	if (is)
	{
		ia = ia.replace(nf[4], '\n');

		ia = ia.replace(nf[5], ' ');
	}
	else {
		ia = ia.replace(nf[6], ' ');

	}

	return ia.trim();
}

wk.hdw = function(ia, zv, ox)
{
	return ia.replace(zv, (hz, uw) =>
	{
		return hz.replace(uw, ox(uw));
	});
}

wk.jgu = function(dq)
{
	return nf[7].test(dq);
}

wk.rhe = function(ia)
{
	return !nf[8].test(ia);
}

wk.gyt = function(ia)
{
	return ia.toLowerCase().replace(nf[9], wk.sj);
}

wk.dyr = function(ia)
{
	return ia == ia.toUpperCase();
}

wk.iel = function(ia)
{
	return ia == ia.toLowerCase();
}

wk.uzp = function(ia)
{
	return wk.iel(ia) || wk.dyr(ia);
}

wk.vbl = function(ok, ia)
{
	return wk.fo(ok, ia).length;
}

wk.xvd = function(ia)
{
	return wk.vbl(nf[10], ia) + 1;
}

wk.qjl = function(ia)
{
	return ia ? ia.split(' ') : [];
}

wk.trw = function(i, ia)
{
	return ia.substring(0, i) + 'x' + ia.substring(++i);
}

wk.wzv = function(s)
{
	return String(s).replace(nf[11], '\\$1').replace(nf[12], '\\x08');
}

wk.hku = function(zv, xz, jd)
{
	if (Array === xz.constructor)
	{
		xz = xz.map(wk.wzv);
	}
	else {
		xz = wk.wzv(xz);
	}

	zv = wk.xf(zv, xz);

	return new RegExp(zv, jd);
}

wk.kdm = new function()
{
	const ni = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const uo = (de) => new Date(de).getTime() / 1000;

	return (de) =>
	{
		const ah = wk.cs() - uo(de);

		for (let [fd, mn] of ni)
		{
			let hd = ah / mn;

			if (hd >= 1)
			{
				hd = Math.floor(hd);

				return wk.xf('%s %s%s ago', [hd, fd, (hd > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

wk.ief = function(th)
{
	return th.reduce((a, b) => a + b, 0);
}

wk.nwc = function(th)
{
	return wk.wfa(wk.ief(th), th.length);
}

wk.wfa = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const bq = {
	ir(iv, gq, eo)
	{
		return this.yt('GET', iv, gq, null, eo);
	},

	cy(iv, gq, vc, eo)
	{
		return this.yt('POST', iv, gq, vc, eo);
	},

	yt(jc, iv, gq, vc, eo)
	{
		if (gq)
		{
			iv = wk.yj(iv, gq);
		}

		if (vc)
		{
			vc = this.vd(vc);
		}

		return new Promise(zk =>
		{
			let qw = new XMLHttpRequest;

			if (eo != Infinity)
			{
				let nd = 0;

				qw.ontimeout = (e) =>
				{
					if (++nd < 3)
					{
						return this.sa(qw, jc, iv, vc);
					}

					qw.onerror(e);
				}

				qw.timeout = 5000;
			}

			qw.onload = qw.onerror = (e) => zk(
				new tr(qw, e.type)
			);

			this.sa(qw, jc, iv, vc);
		});
	},

	sa(qw, jc, iv, vc)
	{
		qw.open(jc, iv);
		qw.send(vc);
	},

	vd(xy)
	{
		let mz = new FormData;

		for (let tl in xy)
		{
			mz.append(tl, xy[tl]);
		}

		return mz;
	}
}

class xv
{
	constructor(pt)
	{
		this.map = {};

		this.qn = Object.getOwnPropertyNames(Object.prototype);

		this.fhc = pt;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(tl)
	{
		tl = this.otz(tl);

		return this.skp(this.map[tl]);
	}

	set(tl, fy)
	{
		tl = this.otz(tl);

		this.map[tl] = this.skp(fy);
	}

	ams(tl)
	{
		return this.otz(tl) in this.map;
	}

	sko(tl)
	{
		!this.ams(tl) && this.set(tl);
	}

	otz(tl)
	{
		if (this.qn.includes(tl))
		{
			return tl + '*';
		}

		return tl;
	}

	skp(fy)
	{
		if (fy == undefined && this.fhc)
		{
			return new this.fhc;
		}

		return fy;
	}
}

class eke
{
	constructor(qyu, ajw)
	{
		this.lp = qyu.lp;

		this.wdq = qyu.wdq;

		this.ajw = ajw;

		this.fqm = [];

		this.ske = new zs;

		this.klp(qyu);
	}

	klp(um)
	{
		if (this.wdq == um.wdq)
		{
			um.vaf = true;
		}

		this.ske.push(um.wdq);

		this.fqm.push(um);
	}

	utb(lp)
	{
		return this.ske.includes(lp);
	}

	mdk()
	{
		this.wxr.forEach(rwx => rwx.hidden = true);
	}

	szm(qs, zc)
	{
		this.zkt(zc.ivt, qs);

		zc.to(qs);
	}

	zkt(a, b)
	{
		const fi = this.fqm.indexOf(b);
		const yz = this.fqm.indexOf(a) + 1;

		wk.cws(fi, yz, this.fqm);
	}

	get length()
	{
		return this.fqm.length;
	}

	get qyu()
	{
		return this.fqm[0];
	}

	get ehn()
	{
		return this.fqm[1];
	}

	get pvr()
	{
		return this.length > 1;
	}

	get wxr()
	{
		return this.fqm.slice(1);
	}

	get wgq()
	{
		return this.fqm.length - 1;
	}

	get hidden()
	{
		return this.qyu.hidden;
	}

	set hidden(zf)
	{
		this.qyu.hidden = zf;
	}

	get tb()
	{
		const tb = wk.fma(this, true);

		tb.fqm = this.fqm.map(wk.fma);

		return tb;
	}
}

class bxw
{
	constructor(pak)
	{
		this.qe = bxw.wyz(pak);
		this.nw = bxw.ayt(this.qe);
	}

	static ayt(qe)
	{
		return ['he','ar'].includes(qe) ? 'rtl' : 'ltr';
	}

	static wyz(ia)
	{
		let wzn = .57 * wk.xvd(ia);

		switch (true)
		{
			case wzn < wk.vbl(nf[13], ia): return 'en';

			case wzn < wk.vbl(nf[14], ia): return 'ar';

			case wzn < wk.vbl(nf[15], ia): return 'he';

			default: return '';
		}
	}

	static get aqx()
	{
		if (!this.mzi)
		{
			this.mzi = navigator.languages.map(qe => qe.slice(0, 2));
		}

		return this.mzi;
	}
}

class xnr
{
	constructor(igh)
	{
		const _ = igh.items[0];

		this.nym = _.snippet.channelId;
		this.ri = _.statistics.commentCount;

		if (this.ri == undefined)
		{
			this.ri = -1;
		}
		else {
			this.ri = +this.ri;
		}
	}
}

class rxn
{
	constructor(igh)
	{
		const _ = igh.snippet;

		this.lp = igh.id;
		this.fs = _.videoId;
		this.wdq = _.authorChannelId.value;
		this.sv = _.authorProfileImageUrl;
		this.jcy = _.authorDisplayName;
		this.meb = _.textOriginal;
		this.bsq = _.publishedAt;
		this.ilr = _.likeCount;
		this.vaf = null;
		this.kn = null;
	}
}

class ugk
{
	constructor(rxn)
	{
		Object.assign(this, rxn);

		this.ynh = '';
		this.qzt = '';
		this.sk = {};
		this.children = [];
		this.zc = null;
		this.glq = null;
		this.wte = null;
		this.qld = null;
		this.hidden = false;

		this.kmy();
		this.xgb();
		this.zrm();
		this.vns();
		this.kve();
	}

	kmy()
	{
		this.ynh = this.meb.replace(nf[16], '');

		delete this.meb;
	}

	kve()
	{
		this.qzt = lju.umz(this.ynh);

		this.qld = new bxw(this.qzt);

		if (this.qld.qe == 'en')
		{
			this.qzt = lju.tyh(this.qzt);
		}
	}

	xgb()
	{
		if (!this.ynh.includes('/'))
			return;

		this.ynh = this.ynh.replace(nf[17], (iv) =>
		{
			let x;

			const pan = ere.kjy(iv);

			if (pan) {
				if (pan.fs == this.fs)
				{
					x = new ih(this.fs, pan.vf);
				}
				else {
					x = new bh(pan);
				}
			}
			else {
				x = new ynf(iv);
			}

			return this.avd(x);
		});
	}

	zrm()
	{
		if (!this.ynh.includes('#'))
			return;

		this.ynh = this.ynh.replace(nf[18], (fmv) =>
		{
			const x = new cmq(fmv);

			return this.avd(x);
		});
	}

	vns()
	{
		if (!this.ynh.includes(':'))
			return;

		this.ynh = this.ynh.replace(nf[19], (mp) =>
		{
			const x = new ih(this.fs, mp);

			return this.avd(x);
		});
	}

	avd(la)
	{
		this.sk[la.lp] = la;

		return la.lp;
	}

	lf()
	{
		this.hidden = true;

		for (let qs of this.children)
		{
			qs.lf();
		}
	}

	to(qs)
	{
		qs.zc = this;

		this.children.push(qs);
	}

	get ivt()
	{
		return wk.hb(this.children) || this;
	}

	get lsa()
	{
		return this.children.some(qs => !qs.hidden);
	}
}

class ovi
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.jq = x.jq;
		this.sk = x.sk;
		this.fs = x.fs;
		this.lp = x.lp;
		this.wdq = x.wdq;
		this.sv = x.sv;
		this.vws = x.vws;
		this.ai = x.ai;
		this.bsq = x.bsq;
		this.vaf = x.vaf;
		this.kn = x.kn;
		this.qe = x.qld.qe;
		this.nw = x.qld.nw;
		this.hj = x.children.length;
		this.rpu = '';
		this.gfx = '';

		this.bsq = wk.kdm(this.bsq);

		this.rpu = wk.xf('https://www.youtube.com/channel/%s', this.wdq);

		this.gfx = wk.xf('https://www.youtube.com/watch?v=%s&lc=%s', [this.fs, this.lp]);
	}
}

class ldn
{
	constructor(ui, fr)
	{
		this.lp = wk.cr();

		this.ui = ui;

		this.fr = fr;
	}
}

class ih extends ldn
{
	constructor(fs, t)
	{
		super(null, 'ih');

		let ui, hc;

		if (wk.jt(t))
		{
			ui = wk.ej(t);
			hc = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			ui = t;
			hc = wk.vq(t);
		}

		this.fs = fs;
		this.vf = hc;
		this.ui = ui;
	}
}

class bh extends ldn
{
	constructor(xy)
	{
		super('youtube.com', 'bh');

		this.fs = xy.fs;
		this.vf = xy.vf;
	}
}

class ynf extends ldn
{
	constructor(iv)
	{
		super('', 'ov');

		this.iv = iv;

		this.jaq = iv.startsWith('https');

		this.ui = ere.wfs(iv) || iv;
	}
}

class cmq extends ldn
{
	constructor(fmv)
	{
		super(fmv, 'ov');

		this.iv = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(fmv);
	}
}

class dap extends ldn
{
	constructor(hmx, nym)
	{
		super(hmx, 'ov');

		this.iv = 'https://www.youtube.com/channel/' + nym;
	}
}

class asf
{
	constructor(ia)
	{
		this.pit = '';
		this.kpy = '';
		this.qwh = [];
		this.aio = false;
		this.qxq = false;

		this.umz(ia);
		this.fsg();
		this.ocy();
	}

	get wjf()
	{
		return this.pit;
	}

	get length()
	{
		return this.pit.length;
	}

	get ctk()
	{
		return wk.dyr(this.kpy);
	}

	toLowerCase()
	{
		this.pit = this.pit.toLowerCase();
	}

	ikq(dq)
	{
		return this.qwh.includes(dq);
	}

	uic(hcq)
	{
		for (let dq of hcq)
		{
			if (this.ikq(dq)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.pit[this.length + i] : this.pit[i];
	}

	gej(n)
	{
		this.pit = this.pit.slice(0, -n);
	}

	replace(ok, ox)
	{
		this.pit = this.pit.replace(ok, ox);
	}

	umz(ia)
	{
		this.pit = wk.nrc(ia, 'gzp');

		this.replace(nf[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(nf[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (wk.rhe(x))
				{
					return m.length > 3 && !nf[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	fsg()
	{
		let raw = wk.ezr([...this.pit]).join('');

		this.kpy = raw.slice(0, 16);

		this.qwh = wk.fo(nf[23], raw);

		this.aio = this.qwh.some(this.rku);
	}

	ocy()
	{
		if (!this.aio) return;

		for (let i = 0, k = 0, n = this.qwh.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.qwh[i] + this.qwh[k];

				this.replace(wk.hku('(%s)+', x, 'g'), x);
			}
		}
	}

	rku(dq)
	{
		return dq.charCodeAt(0) > 255;
	}

	cgu(dq)
	{
		return dq == '\u{200D}';
	}
}

class nh
{
	constructor()
	{
		this.lp = chrome.runtime.id;

		this.wut = chrome.runtime.getManifest().version;

		this.dl = new Promise(zk => this.fas = zk);

		this.dl.then(
			_ => this.cd()
		);

		this.dk();

		chrome.runtime.onInstalled.addListener(
			pan => this.uoq(pan)
		);

		chrome.browserAction.onClicked.addListener(
			_ => itm.pjm('kq')
		);

		chrome.alarms.onAlarm.addListener(
			pan => this.sun('pby', pan)
		);

		chrome.runtime.onMessageExternal.addListener(
			qx => this.sun('wal', qx)
		);
	}

	async dk()
	{
		if (await this.cdt == this.wut)
		{
			const qh = await yh.get(['0', '1']);

			this.swn = new yu(qh[0], 0);

			dt = new mk(qh[1], 1);

			if (dt.pm)
			{
				es.lj.mai(dt.ch);
			}

			this.fas(1);
		}
	}

	async ze()
	{
		const dgw = await this.ti('/html/view.html');

		const oq = (
			this.wut < this.oxt
		);

		const uc = (
			!dt.pm || !dt.nx
		);

		return {
			zf: {
				oq, uc
			},
			te: dgw
		};
	}

	async gi(ch)
	{
		if (nf[24].test(ch))
		{
			const cfd = await es.lj.vgt(ch);

			if (cfd)
			{
				const dt = await es.ad.mpw(ch);

				if (dt)
				{
					await this.ju(dt);

					bd.fg('ar');

					return true;
				}
			}
		}

		return false;
	}

	yrc(ovs)
	{
		dt.xd = ovs;

		bd.fg('pq');
	}

	bk()
	{
		if (dt.pm)
		{
			dt.ch = wk.trw(19, dt.ch);
		}
	}

	ju(rcs)
	{
		dt = new mk(rcs, '1');

		return dt.rg();
	}

	async ti(sn)
	{
		const ayj = await bq.ir(chrome.runtime.getURL(sn));

		return ayj.tz;
	}

	async afz(pan)
	{
		this.juh();

		if (pan.reason == 'install')
		{
			await this.bur();
		}
		else {
			if (pan.previousVersion < '')
			{

			}
		}

		await this.lcg();

		await this.dk();
	}

	async uoq(pan)
	{
		await this.afz(pan);

		switch (pan.reason)
		{
			case 'install':
				this.ecb();
			break;

			case 'update':
				this.qeg();
			break;
		}

		itm.rlb();
	}

	ecb()
	{

	}

	qeg()
	{

	}

	async sun(buv, tz)
	{
		await this.dl;

		switch (buv)
		{
			case 'pby':
				return this.tiw(tz);

			case 'wal':
				return this.jgd(tz);
		}
	}

	tiw(pby)
	{
		const nxa = pby.name;

		switch (nxa)
		{
			case 'acd':
				this.acd();
		}
	}

	jgd(qx)
	{
		return new vju().iz(qx);
	}

	async acd()
	{
		const v = await es.ad.iby();

		if (v > this.wut)
		{
			return this.bpz(v);
		}
	}

	cd()
	{
		if (dt.pm)
		{
			if (wk.sh() || !dt.sq)
			{
				this.bk();
			}
		}
	}

	get cdt()
	{
		return yh.get('schemaVersion');
	}

	lcg()
	{
		return yh.set('schemaVersion', this.wut);
	}

	get oxt()
	{
		return this.swn.latestVersion;
	}

	bpz(v)
	{
		this.swn.set('latestVersion', v);
	}

	bur()
	{
		return yh.set({
			0: {
				latestVersion: this.wut
			},
			1: {},
		});
	}

	juh()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('acd', {periodInMinutes:240});
	}
}

class vju
{
	iz(qx)
	{
		qx = wk.iwn(qx);

		switch (qx.issuer)
		{
			case 'authServer':
				return this.oxf(qx.data);
		}
	}

	oxf(tz)
	{
		if (tz.id == 'pa')
		{
			bi.yrc(tz.token);
		}
	}
}

class lug
{
	constructor()
	{
		this.ad = new aqg;

		this.lj = new fcs;
	}
}

class aqg
{
	constructor()
	{
		this.oza = 'https://api.lett.app/cs';
	}

	async mpw(ch)
	{
		const ayj = await this.get('/auth', {
			apiKey:ch,
			token:bi.lp
		});

		if (ayj.ig)
		{
			return ayj.tz;
		}
	}

	async iby()
	{
		const ayj = await this.get('/update');

		if (ayj.ig)
		{
			return ayj.tz.version;
		}
	}

	async wj()
	{
		const ayj = await this.get(
			'https://api.lett.app/donate/accept', this.trm, Infinity
		);

		if (ayj.ig)
		{
			return ayj.tz.url;
		}
	}

	get trm()
	{
		return {
			extId:bi.lp,
			apiKey:dt.ch,
		};
	}

	async get(zvh, xy, eo)
	{
		if (zvh[0] == '/')
		{
			zvh = this.oza + zvh;
		}

		const ayj = await bq.ir(zvh, xy, eo);

		if (!ayj.ig && !ayj.rq)
		{
			ayj.mf(ayj.tz.error);
		}

		return ayj;
	}
}

class fdb
{
	constructor()
	{
		this.oza = 'https://www.googleapis.com/youtube/v3';
	}

	mai(ch)
	{
		this.tl = ch;
	}

	async vgt(ch)
	{
		this.mai(ch);

		const ayj = await this.iha('jNQXAC9IVRw');

		return ayj.ig;
	}

	enj(fs)
	{
		return this.vh({
			videoId:fs
		});
	}

	mlk(fs, zxn)
	{
		return this.jg({
			videoId:fs,
			searchTerms:zxn
		});
	}

	tge(nym, zxn)
	{
		return this.jg({
			allThreadsRelatedToChannelId:nym,
			searchTerms:zxn
		});
	}

	async iha(fs)
	{
		const ayj = await this.qlk({
			id:fs,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (ayj.ig)
		{
			try {
				ayj.tz = new xnr(ayj.tz);
			}
			catch (e) {
				ayj.mf('ap');
			}
		}

		return ayj;
	}

	async get(zvh, xy)
	{
		const ayj = await bq.ir(this.oza + zvh, xy);

		if (!ayj.ig && !ayj.rq)
		{
			const gfk = this.pyi(ayj.tz);

			ayj.mf(gfk);
		}

		return ayj;
	}

	async jg(xy)
	{
		const ayj = await this.get('/commentThreads', xy);

		if (ayj.ig)
		{
			ayj.tz = this.egy(ayj.tz);
		}

		return ayj;
	}

	async vh(xy)
	{
		let ayj, gb = [];

		do {
			ayj = await this.get('/commentThreads', xy);

			if (ayj.ig)
			{
				const xzf = this.egy(ayj.tz);

				gb.push(xzf);

				xy.pageToken = ayj.tz.nextPageToken;
			}
		}
		while (ayj.ig && xy.pageToken)

		ayj.tz = gb.flat();

		return ayj;
	}

	qlk(xy)
	{
		return this.get('/videos', xy);
	}

	qmu(zfm)
	{
		try {
			return new rxn(zfm);
		}
		catch (e) {
			return null;
		}
	}

	jvn(zfm)
	{
		let wxr = [];

		try {
			if (zfm.replies) {
				wxr = zfm.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return wxr;
	}

	pyi(iqh)
	{
		try {
			return iqh.error.errors[0].reason;
		}
		catch (e) {
			return iqh.sm || 'xb';
		}
	}

	egy(zfm)
	{
		const xzf = [];

		try {
			for (let la of zfm.items)
			{
				const nt = this.czr(la);

				if (nt) {
					xzf.push(nt);
				}
			}
		}
		catch (e) {
		}

		return xzf;
	}

	czr(zfm)
	{
		try {
			const evg = zfm.snippet;

			if (evg.videoId)
			{
				let um = this.qmu(evg.topLevelComment);

				if (um)
				{
					const nt = new eke(um, evg.totalReplyCount);

					for (let rwx of this.jvn(zfm))
					{
						um = this.qmu(rwx);

						if (um) {
							nt.klp(um);
						}
					}

					return nt;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class fcs extends fdb
{
	vh(xy)
	{
		this.btr(xy);

		return super.vh(xy);
	}

	jg(xy)
	{
		this.btr(xy);

		return super.jg(xy);
	}

	async get(zvh, xy)
	{
		xy.key = this.tl;

		let ayj, i = 3;

		while (i--)
		{
			ayj = await super.get(zvh, xy);

			if (ayj.sm != 'processingFailure')
				break;
		}

		return ayj;
	}

	btr(xy)
	{
		Object.assign(xy, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class ere
{
	static kjy(iv)
	{
		const fs = wk.kw(nf[25], iv);

		if (fs)
		{
			let vf = wk.kw(nf[26], iv) || 0;

			if (!wk.jt(vf))
			{
				vf = wk.fo(nf[27], vf).join(':');

				vf = wk.vq(vf);
			}

			return {fs, vf};
		}
	}

	static wfs(iv)
	{
		return wk.kw(nf[28], iv).replace('www.', '');
	}
}

class feb
{
	async pjm(qj)
	{
		const qme = await this.jwn();

		if (qme && qme.url)
		{
			this.ns(qme.id, 'qj', qj);
		}
	}

	rlb()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, itm =>
		{
			for (let qme of itm)
			{
				chrome.tabs.reload(qme.id);
			}
		});
	}

	jwn()
	{
		return new Promise(zk =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, itm =>
			{
				zk(itm[0]);
			});
		});
	}

	ns(tst, rn, tz)
	{
		chrome.tabs.sendMessage(tst, new mr(rn, tz));
	}
}

class edj
{
	constructor(ic, bcs)
	{
		this.lp = bcs.fs;

		this.bcs = bcs;

		this.dia = new zrv(ic);

		this.gb = {};

		for (let rid of ['wlh', 'fst'])
		{
			this[rid] = new xv(Array);
		}

		for (let rid of ['jkr', 'jpb', 'ark'])
		{
			this[rid] = [];
		}

		for (let nt of ic)
		{
			this.fa(nt);
			this.ryf(nt);
		}
	}

	lqy(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.pyr();

			case ':all':
				return this.ocq();

			case ':creator':
				return this.nhg();

			case ':link':
				return this.hxf();

			case ':reply':
				return this.fte();
		}

		if (nf[29].test(q))
		{
			const os = this.hmw(q);

			switch (os.length)
			{
				case 1: return this.ndx(os[0]);

				case 2: return this.zsg(os[0], os[1]);
			}
		}

		return this.wqo(q);
	}

	ocq()
	{
		return this.btn(
			Object.keys(this.gb)
		);
	}

	pyr()
	{
		return this.btn(this.fst.values);
	}

	nhg()
	{
		return this.btn(this.jkr);
	}

	hxf()
	{
		return this.btn(this.ark);
	}

	fte()
	{
		return this.btn(this.jpb);
	}

	zsg(xq, jxa)
	{
		const nai = wk.vq(xq);
		const ksw = wk.vq(jxa);

		const uds = [];

		for (let os of this.fst.keys)
		{
			if (nai <= os && os <= ksw)
			{
				uds.push(
					this.fst.get(os)
				);
			}

			if (ksw < os) break;
		}

		return this.btn(uds);
	}

	fa(la)
	{
		this.gb[la.lp] = la;
	}

	ehd(lp)
	{
		return this.gb[lp].tb;
	}

	btn(uds)
	{
		uds = uds.flat();

		return wk.ezr(uds).map(
			lp => this.ehd(lp)
		);
	}

	wqo(ia)
	{
		let pup = [];

		let vm = this.mit(ia);

		let uds = vm.map(
			k => this.select('wlh', k)
		);

		uds = uds.filter(x => x.length);

		if (uds.length)
		{
			pup = wk.fvz(...uds);

			if (pup.length < 1)
			{
				uds.sort((a, b) => a.length - b.length);

				pup = uds[0];
			}
		}

		return this.btn(pup);
	}

	ndx(mp)
	{
		let hk = wk.vq(mp);

		let uds = [
			this.select('fst', hk)
		];

		for (let i = hk; i--;)
		{
			let x = this.select('fst', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			uds.push(x);
		}

		for (let i = hk; i++;)
		{
			let x = this.select('fst', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			uds.push(x);
		}

		return this.btn(uds);
	}

	ryf(nt)
	{
		const ui = nt.fqm.map(um => um.meb).join(' ');

		this.xgb(ui, nt.lp);

		this.gcu(ui, nt.lp);

		this.azm(ui, nt.lp);

		this.jvn(nt);
	}

	jvn(nt)
	{
		if (nt.length > 1)
		{
			this.jpb.push(nt.lp);
		}

		if (nt.utb(this.bcs.nym))
		{
			this.jkr.push(nt.lp);
		}
	}

	xgb(ui, lp)
	{
		ui.includes('http') && this.ark.push(lp);
	}

	gcu(ui, lp)
	{
		const xyi = this.hmw(ui);

		for (let os of xyi)
		{
			os = wk.vq(os);

			if (0 <= os && os < this.bcs.rm)
			{
				this.cin('fst', os, lp);
			}
		}
	}

	azm(ui, lp)
	{
		this.mit(ui).forEach(
			zq => this.cin('wlh', zq, lp)
		);
	}

	cin(rid, tl, fy)
	{
		this[rid].sko(tl);

		this[rid].get(tl).push(fy);
	}

	select(rid, tl)
	{
		return this[rid].get(tl);
	}

	mit(ia)
	{
		ia = lju.umz(ia);

		ia = lju.tyh(ia);

		ia = wk.qjl(ia);

		return wk.ezr(ia);
	}

	hmw(ia)
	{
		return wk.fo(nf[30], ia);
	}
}

class zrv
{
	constructor(ic)
	{
		this.dia = {};

		this.kpt = {};

		this.cxq = {};

		for (let nt of ic)
		{
			this.zce(nt);
		}

		this.uhw();
	}

	dqz(gqc)
	{
		return this.kpt.lqy(gqc);
	}

	kde(lp)
	{
		return this.dia[lp];
	}

	zce(nt)
	{
		for (let um of nt.fqm)
		{
			this.ynv(um.wdq, um.meb);
			this.lze(um.wdq, um.jcy);
		}
	}

	uhw()
	{
		this.kpt = new bmj(this.kpt);

		for (let lp in this.cxq)
		{
			const cxq = this.cxq[lp];

			if (cxq.length > 1)
			{
				const hra = cxq.filter(
					(ui, i) => ui.length < 28 || i == cxq.indexOf(ui)
				);

				this.kde(lp).kjf = (cxq.length != hra.length);
			}
		}
	}

	lze(lp, jam)
	{
		let glq = new scd(lp, jam);

		this.dia[lp] = glq;

		this.kpt[jam] = glq;
	}

	ynv(lp, ui)
	{
		this.cxq[lp] = this.cxq[lp] || [];

		this.cxq[lp].push(ui);
	}
}

class scd
{
	constructor(lp, jam)
	{
		this.lp = lp;
		this.jam = jam;
		this.kjf = false;
		this.ash = false;
	}

	get vws()
	{
		return this.ash ? this.jam : this.uwz;
	}

	get dvg()
	{
		return !this.ash && this.kjf;
	}

	get uwz()
	{
		if (!this.rtj)
		{
			this.rtj = sil.cbn(this.jam);
		}

		return this.rtj;
	}
}

class bmj
{
	constructor(vl)
	{
		this.keys = Object.keys(vl).sort(this.nko);

		this.sia = this.keys.map(tl => vl[tl]);

		this.keys = this.keys.map(wk.bx);
	}

	lqy(dto)
	{
		dto = dto.toLowerCase();

		let gb = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(dto))
			{
				do {
					gb.push(this.sia[i])
				}
				while (++i < n && this.keys[i].startsWith(dto));

				break;
			}
		}

		return gb.sort(this.xyu);
	}

	xyu(a, b)
	{
		return b.jam.length - a.jam.length;
	}

	nko(a, b)
	{
		return a.localeCompare(b);
	}
}

const ejc = {
	mup: {
		wgq(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		grc(x)
		{
			return (x != 0) ? (1 / x) : 0;
		},

		jsc(mvs)
		{
			let qot = wk.nwc(mvs);

			return (n) => (qot - Math.abs(qot - n)) / qot;
		}
	},

	ryf(ic, okq, bcs)
	{
		this.zis = bcs.nym;

		const yzk = okq.kde(this.zis);

		if (yzk)
		{
			yzk.ash = true;
		}

		this.lqy = bcs.lqy;

		this.uvi = new eav;

		this.hok = new tav;

		this.xvb = new vdn;

		this.cfo = {};

		return this.fsg(ic, okq);
	},

	fsg(ic, okq)
	{
		const grn = ('you are not but for the thi and that was').split(' ');

		const jrx = {
			sem: 1,
			uju: [],
		};

		const ixg = {
			wgq: this.mup.wgq,
			fpr: this.mup.grc,
			uju: null,
		};

		const emq = {
			wlh: .5,
			mdx: .1,
			yum: .2,
			fpr: .15,
			uju: .2,
			wgq: .1,
			awe: .1,
		};

		if (this.lqy.rcx)
		{
			Object.assign(emq, {
				awe: .4,
				yum:.4,
				fpr: .1,
				uju: .0,
			});
		}

		for (let nt of ic)
		{
			Object.assign(nt,
			{
				jz: {
					uju: nt.qyu.meb.length,
					cfa: 0,
					mdx: false,
					yum: false,
					fst: [],
					vm: [],
				},
				ety: {
					wlh: 0,
					mdx: 0,
					yum: 0,
					fpr: 0,
					uju: 0,
					wgq: 0,
					awe: 0,
					nab: 0,
				},
			});

			const jz = nt.jz;

			for (let i = 0; i < nt.length; i++)
			{
				const um = nt.fqm[i] = new ugk(nt.fqm[i]);

				um.glq = okq.kde(um.wdq);

				um.kn = this.kn(um.wdq);

				if (i > 0)
				{
					um.jq = true;

					um.vaf && (jz.mdx = true);
					um.kn && (jz.yum = true);
				}

				if (um.qzt == '' || um.glq.dvg)
				{
					um.lf();
				}
			}

			const qyu = nt.qyu;

			if (this.kex(qyu.ynh))
			{
				nt.hidden = true;

				continue;
			}

			jz.vm = wk.qjl(qyu.qzt);
			jz.cfa = jz.vm.length;
			jz.vm = wk.ezr(jz.vm);

			for (let x in qyu.sk)
			{
				x = qyu.sk[x];

				if (x.lp == qyu.ynh)
				{
					nt.hidden = true;
				}

				if (x instanceof ih)
				{
					jz.fst.push(x.hc);

					wk.bph(x.lp, this.hok.sdc(x.hc), jz.vm);
				}
			}

			for (let zq of jz.vm)
			{
				if (zq.length > 2 && !grn.includes(zq))
				{
					this.uvi.art(zq);
				}
			}

		}

		for (let nt of ic)
		{
			if (nt.hidden)
				continue;

			const ety = nt.ety;

			for (let zq of nt.jz.vm)
			{
				ety.wlh += this.uvi.get(zq);
			}

			ety.wlh /= nt.jz.cfa;

			ety.fpr = nt.jz.fst.length;

			if (ety.wlh > jrx.sem)
			{
				jrx.sem = ety.wlh;
			}

			jrx.uju.push(nt.jz.uju);
		}

		ixg.uju = this.mup.jsc(jrx.uju);

		for (let nt of ic)
		{
			const ety = nt.ety;

			ety.wlh = emq.wlh * (ety.wlh / jrx.sem);
			ety.yum = emq.yum * +nt.jz.yum;
			ety.fpr = emq.fpr * ixg.fpr(ety.fpr);
			ety.uju = emq.uju * ixg.uju(nt.jz.uju);
			ety.wgq = emq.wgq * ixg.wgq(nt.wgq);

			ety.nab = wk.ief(Object.values(ety));
		}

		ic.sort(
			(a, b) => b.ety.nab - a.ety.nab
		);

		for (let i = 0, n = ic.length; i < n; i++)
		{
			const a = ic[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = ic[k];

				if (b.wdq == a.wdq && !b.qyu.glq.ash)
				{
					b.hidden = true;
				}

				if (!b.hidden && !b.pvr)
				{
					const gsf = wk.fvz(a.jz.vm, b.jz.vm);
					const ogj = (a.jz.vm.length + b.jz.vm.length) / 2;

					if (gsf.length == b.jz.cfa)
					{
						b.hidden = true;
					}

					if (gsf.length / ogj > .57)
					{
						const ksw = a.jz.fst[0] || 0;
						const jdm = b.jz.fst[0] || 0;

						if (this.hok.gry(ksw, jdm))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < ic.length; i++)
		{
			const nt = ic[i];

			let yqv;

			if (i == 0 && !nt.pvr)
			{
				const jnh = this.lqy.ia.toLowerCase();
				const qwn = nt.qyu.qzt;

				if (jnh == qwn)
				{
					yqv = true;
				}
			}

			if (nt.pvr && nt.ske.length == 1)
			{
				const nai = new Date(nt.qyu.bsq);
				const ksw = new Date(nt.ehn.bsq);

				if (.001 * (ksw - nai) < 300)
				{
					yqv = true;
				}
			}

			if (yqv)
			{
				wk.hsm(i, ic);
			}
		}

		for (let nt of ic)
		{
			this.xvb.lau(nt.lp, nt.wdq);

			for (let wdq of nt.ske)
			{
				this.xvb.gap(wdq, nt.lp)
			}
		}

		for (let nt of ic)
		{
			if (nt.wgq == 0) continue;

			for (let rwx of nt.wxr)
			{
				const ui = rwx.ynh;

				const dvs = wk.kw(nf[31], ui);

				for (let glq of okq.dqz(dvs))
				{
					if (this.ebx(glq).test(ui))
					{
						rwx.wte = glq;
						break;
					}
				}
			}

			if (nt.length > 2)
			{
				let dia, gb, srl = true;

				const n = nt.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					const rwx = nt.fqm[i];

					if (srl)
					{
						dia = [];
						gb = [];
						srl = false;
					}

					const dt = rwx.glq;

					if (wk.hb(dia) == dt) {
						i++;
					}
					else if (dia.includes(dt) || wk.ezr(dia).length < 2) {
						gb.push(rwx);
						dia.push(dt);

						if (i + 1 < n)
							continue;
					}

					if (gb.length > 2)
					{
						let cfd = !gb.some(rwx => rwx.wte && !dia.includes(rwx.wte));

						if (cfd)
						{
							gb.forEach(rwx =>
								rwx.wte = dia.find(glq => glq != rwx.glq)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						srl = true;
					}
				}
			}

			for (let iyu, i = 1; i < nt.length; i++)
			{
				const rwx = nt.fqm[i];

				if (!rwx.wte)
				{
					if (iyu && iyu.wte == rwx.glq)
					{
						rwx.wte = iyu.glq;

						nt.szm(rwx, iyu);
					}
				}
				else {
					const sgd = rwx.wte;

					let vou;

					for (let k = i - 1; k >= 0; k--)
					{
						const iyu = nt.fqm[k];

						if (k == 0)
						{
							if (iyu.glq == sgd)
							{
								vou = '';
							}

							break;
						}

						if (iyu.glq == sgd)
						{
							nt.szm(rwx, iyu);

							if (iyu.children.length == 1)
							{
								vou = '';
							}

							break;
						}
					}

					if (vou == null)
					{
						const lb = new dap(sgd.vws, sgd.lp);

						vou = rwx.avd(lb) + ' ';
					}

					rwx.ynh = rwx.ynh.replace(this.ebx(sgd), vou);
				}

				iyu = rwx;
			}

			for (let i = 1, n = nt.length; i < n; i++)
			{
				const rwx = nt.fqm[i];

				if (rwx.zc || rwx.children.length)
				{
					wk.hsm(i, nt.fqm);
					i--;
					n--;
				}
			}

			for (let zie = false, i = 1; i < nt.length; i++)
			{
				let rwx = nt.fqm[i];

				zie = (zie || !rwx.vaf);

				if (rwx.lsa)
				{
					continue;
				}

				if (!zie)
				{
					const ui = rwx.ynh;

					if (nt.length > 2 || ['+','@'].includes(ui[0]) || ui.length < 10)
					{
						rwx.lf();
					}
				}

				rwx.wte && !nt.utb(rwx.wte.lp) && rwx.lf();

				this.gbd(rwx.wdq, nt.lp) && rwx.lf();
			}
		}

		ic = ic.map(nt =>
		{
			if (nt.qyu.hidden)
			{
				return [];
			}

			const fqm = [];

			for (let i = 0; i < nt.length; i++)
			{
				const um = nt.fqm[i];

				um.ai = sil.nbz(um.ynh);

				um.vws = um.glq.vws;

				if (um.ai.length < 2)
				{
					if (i == 0) return [];

					um.lf();
				}

				fqm.push(new ovi(um));
			}

			return fqm;
		});

		return ic.filter(nt => nt.length > 0);
	},

	kex(ia)
	{
		return ia.length > 500 || wk.vbl(nf[32], ia) > 3;
	},

	kn(wdq)
	{
		return this.zis == wdq;
	},

	gbd(wdq, iaq)
	{
		if (!this.zis || this.kn(wdq))
		{
			return false;
		}

		for (let jyn of this.xvb.of(wdq))
		{
			if (jyn == iaq)
			{
				return false;
			}

			if (!this.xvb.eys(jyn, wdq))
			{
				return true;
			}
		}
	},

	ebx(glq)
	{
		const lp = glq.lp;

		if (lp in this.cfo)
		{
			return this.cfo[lp];
		}

		return this.cfo[lp] = wk.hku('^[+@]?%s[-\\s,.:?!]*', glq.jam, 'i');
	}
};

const sil = {
	nbz(wo)
	{
		let ia = new asf(wo);

		ia.ikq('<') && ia.replace(nf[33], '&lt;');

		ia.ctk && ia.toLowerCase();

		if (ia.ikq('.'))
		{
			ia.charAt(-1) == '.' && ia.charAt(-2) != '.' && ia.gej(1);

			ia.replace(nf[34], (m) => m.replace(nf[35], ''));
		}

		if (ia.ikq('\n'))
		{
			ia.replace(nf[36], function(m, i)
			{
				let x = ia.charAt(i - 1);

				return wk.jgu(x) ? '. ' : ' ';
			});
		}

		if (ia.uic('*_'))
		{
			ia.replace(nf[37], '$2');
		}

		if (ia.uic('(,!?.)'))
		{
			ia.replace(nf[38], '?!');

			ia.replace(nf[39], '$1');

			ia.replace(nf[40], '$1 $2');

			ia.ikq('!') && ia.replace(nf[41], '$1');
		}

		if (ia.uic('$£€'))
		{
			ia.replace(nf[42], (_, umc, qpq) =>
			{
				nf[43].test(umc) && (umc = Math.round(umc));

				return qpq + umc;
			});
		}

		ia.ikq(':') && ia.replace(nf[44], ': ');

		ia.ikq('&') && ia.replace(nf[45], ' and ');

		ia.ikq('"') && ia.replace(nf[46], '" - $1');

		return yua.vhb(ia.wjf);
	},

	cbn(wo)
	{
		return wo.length < 28 && this.zej(wo) || this.ieh();
	},

	zej(ia)
	{
		let vm;

		if (!nf[47].test(ia))
		{
			if (wk.uzp(ia))
			{
				ia = wk.gyt(ia);
			}

			vm = ia.split(' ');

			if (vm.length == 1)
			{
				return wk.ki(vm[0], 'PRE_CASE');
			}
		}
		else {
			vm = wk.fo(nf[48], ia);
		}

		vm = vm.map(zq =>
		{
			switch (true)
			{
				case zq.length < 2 || wk.jt(zq):
					return '';

				default:
					return wk.ki(zq);
			}
		});

		vm = vm.filter(
			(zq, i) => zq != '' && i == vm.indexOf(zq)
		);

		return vm.join(' ');
	},

	ieh()
	{
		return 'user' + wk.lg(4);
	}
};

const lju = {
	umz(ia)
	{
		ia = ia.toLowerCase();

		ia = ia.replace(nf[49], ' ');

		return wk.nrc(ia);
	},

	tyh(ia)
	{
		return ia.replace(nf[50], '$1');
	}
};

const yua = {
	dei: {
		':p':'\u{1F60B}',
		';p':'\u{1F60B}',
		':d':'\u{1F604}',
		';d':'\u{1F604}',
		':o':'\u{1F62F}',
		':v':'\u{0270C}',
		':x':'\u{1F635}',
		'xo':'\u{1F635}',
		'xd':'\u{1F606}',
		':)':'\u{1F642}',
		';)':'\u{1F609}',
		':(':'\u{1F641}',
		':|':'\u{1F610}',
		'-_':'\u{1F611}',
		'^_':'\u{1F60A}',
		'+_':'\u{1F915}',
		':/':'\u{1F615}',
		':\\':'\u{1F615}',
		'<3':'\u2764\ufe0f',
	},

	vhb(ia)
	{
		return ia.replace(nf[51], m => this.get(m));
	},

	get(tl)
	{
		tl = tl.toLowerCase();

		(tl.length == 2) || (tl = tl.slice(0, 2));

		return this.dei[tl] || tl;
	}
};

class eav
{
	constructor()
	{
		this.map = {};
	}

	art(zq)
	{
		this.map[zq] = ++this.map[zq] || 0;
	}

	get(zq)
	{
		return this.map[zq] || 0;
	}
}

class tav
{
	constructor()
	{
		this.map = {};
	}

	sdc(msa)
	{
		for (let rno in this.map)
		{
			if (this.gry(msa, rno))
			{
				return this.map[rno];
			}
		}

		return this.eqi(msa);
	}

	eqi(os)
	{
		return this.map[os] = wk.xf('TS%s', os);
	}

	gry(ksw, jdm)
	{
		return Math.abs(jdm - ksw) < 5;
	}
}

class vdn
{
	constructor()
	{
		this.dia = {};

		this.ic = {};
	}

	of(jgb)
	{
		return this.dia[jgb];
	}

	eys(xbz, jgb)
	{
		return this.ic[xbz] == jgb;
	}

	lau(lp, xgu)
	{
		this.ic[lp] = xgu;
	}

	gap(lp, xbz)
	{
		if (!this.dia[lp])
		{
			this.dia[lp] = new zs;
		}

		this.dia[lp].push(xbz);
	}
}

class mx
{
	constructor(er)
	{
		er.iz = this.iz.bind(this);

		this.er = er;

		this.ipy = 0;

		this.isv = new Promise(zk => zk(null));

		this.bcs;

		this.gxl = new gxl;

		this.hou = new edj([], {});
	}

	async iz(qx)
	{
		const fs = qx.tz.fs;

		try {
			const pan = await this.gxl.rvh(fs);

			this.bcs = new dfo(qx.tz, pan);
		}
		catch (xh) {
			return this.sqk(xh);
		}

		switch (qx.rn)
		{
			case 'jg':
				return this.wzy(fs);

			case 'ri':
				return this.wh(fs);
		}
	}

	sqk(lp)
	{
		this.yco('sm', {lp});
	}

	wh(fs)
	{
		const n = this.bcs.ri;

		if (0 < n && n < 1000)
		{
			this.gax(fs);
		}

		this.yco('ri', n);
	}

	async wzy(fs)
	{
		if (this.bcs.lqy.tuh)
		{
			return this.sqk('ga');
		}

		this.bux();
	}

	async bux()
	{
		let r = new zmy(this.fiz);

		try {
			if (this.bcs.lqy.wcg)
			{
				await this.fvj(r);
			}
			else {
				await this.cdg(r);
			}

			!this.pkm(r.lp) && this.yco('jg', r);
		}
		catch (xh) {
			!this.pkm(r.lp) && this.sqk(xh);
		}
	}

	async fvj(iqh)
	{
		const ayj = await es.lj.tge(this.bcs.nym, this.bcs.lqy.ia);

		if (ayj.sm)
		{
			throw ayj.sm;
		}

		const dia = new zrv(ayj.tz);

		const ic = ejc.ryf(ayj.tz, dia, this.bcs);

		iqh.ejo(ic);
		iqh.aty(-2);
	}

	async cdg(iqh)
	{
		const fs = this.bcs.fs;
		const hm = this.bcs.lqy.ia;

		const p = iqh.aty(this.bcs.ri);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.bcs.lqy.xms)
		{
			throw 'sl';
		}

		let ic, dia;

		if (p < 1000)
		{
			const xh = await this.gax(fs);

			if (xh)
			{
				throw xh;
			}

			dia = this.hou.dia;

			ic = this.hou.lqy(hm);
		}
		else {
			const ayj = await es.lj.mlk(fs, hm);

			if (ayj.sm)
			{
				throw ayj.sm;
			}

			dia = new zrv(ayj.tz);

			ic = ayj.tz;
		}

		ic = ejc.ryf(ic, dia, this.bcs);

		iqh.ejo(ic);
	}

	yco(rn, tz)
	{
		this.er.dn(rn, tz);
	}

	async gax(fs)
	{
		await this.isv;

		if (fs != this.hou.lp)
		{
			this.isv = new Promise(async zk =>
			{
				const ayj = await es.lj.enj(fs);

				if (ayj.ig)
				{
					this.hou = new edj(ayj.tz, this.bcs);
				}

				zk(ayj.sm);
			});
		}

		return this.isv;
	}

	get fiz()
	{
		return ++this.ipy;
	}

	pkm(wci)
	{
		return wci != this.ipy;
	}
}

class gxl
{
	constructor()
	{
		this.map = {};
	}

	async rvh(fs)
	{
		let x = this.map[fs];

		if (x == undefined)
		{
			x = this.rab(fs);
		}

		if (x instanceof Promise)
		{
			const ayj = await x;

			if (ayj.sm)
			{
				this.hml(fs);

				throw ayj.sm;
			}

			x = this.rdi(fs, ayj.tz);
		}

		return x;
	}

	ifi(fs, value)
	{
		return this.map[fs] = value;
	}

	rab(fs)
	{
		const r = es.lj.iha(fs);

		return this.ifi(fs, r);
	}

	rdi(fs, bhg)
	{
		return this.ifi(fs, bhg);
	}

	hml(fs)
	{
		this.ifi(fs, undefined);
	}
}

class cev
{
	constructor(q)
	{
		this.ia = '';
		this.fr = '';
		this.wcg = false;
		this.tuh = false;

		this.fsg(q);
	}

	get xms()
	{
		return this.fr == 'qn';
	}

	get rcx()
	{
		return this.fr == 'mna';
	}

	fsg(q)
	{
		const ikl = q.replace(nf[52], '');

		if (ikl != q)
		{
			this.wcg = true;

			if (ikl == '')
			{
				this.tuh = true;
			}
		}

		this.ia = ikl;
		this.fr = cev.hvc(ikl);
	}

	static hvc(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'qn';

			case (nf[53]).test(q):
				return 'mna';

			default:
				return '';
		}
	}
}

class dfo
{
	constructor(kze, szb)
	{
		Object.assign(this, ...[kze, szb]);

		this.rm = Math.floor(kze.rm) || Infinity;
		this.zd = Math.floor(kze.zd);

		this.lqy = new cev(kze.hm);
	}
}

class zmy
{
	constructor(wci)
	{
		this.lp = wci;
		this.ic = [];
		this.pw = 0;
		this.ln = 0;
	}

	ejo(ic)
	{
		this.ic = ic;
		this.pw = ic.length;
	}

	aty(n)
	{
		return this.ln = n;
	}
}

let dt;

const es = new lug;
const yh = new ci;
const itm = new feb;
const bi = new nh;
const bd = new kl;
const lk = new ne;

const nf = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/\s*\n\s*/g,
	/[^\S\n]+/g,
	/\s+/g,
	/\p{L}/u,
	/[^\p{L}\p{N}]/u,
	/(^|\s)[a-z]/g,
	/\s/g,
	/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
	/\x08/g,
	/[a-z]+/g,
	/[\u{0621}-\u{064A}]+/gu,
	/[א-ת]+/g,
	/^\u200b/,
	/https?:[^\s]+/g,
	/#[a-zA-Z0-9]\w{2,}/g,
	/\b\d\d?(:\d\d)+/g,
	/[`´‘’׳״“”„׳]/g,
	/(.)\1+/gu,
	/\p{N}/u,
	/[^\p{L}\p{N}]/gu,
	/^[A-Za-z0-9_-]{32,}$/,
	/(?:youtu\.be\/|[?&]v=)([\w\-]{11})/,
	/[?&](?:time_continue|t)=([\dms]+)/,
	/\d+/g,
	/[a-z]+[\.\-][a-z\.\-]+/,
	/^\d\d?:.*\d\d$/,
	/\d\d?(:\d\d)+/g,
	/[@+]?(.{2})/,
	/^.{0,3}\n/g,
	/<[^3]/g,
	/(\.[a-z]){2,}\.?/gi,
	/\./g,
	/\n/g,
	/([*_])(.+?)\1/g,
	/[?!]{2,}/,
	/ ([!?),.])/g,
	/([)!?,.])(\p{L})/gu,
	/([?!])[,.]+/g,
	/(\d[\d,.]*)([$£€])/g,
	/\.\d{2}$/,
	/ : /g,
	/ & /g,
	/\"\. ([a-z])/i,
	/[^A-Za-z0-9\s]/,
	/([A-Za-z0-9]+)/g,
	/[^\p{L}\p{N}\s]/gu,
	/([a-z]{3,})(ing|ed|e?s)\b/g,
	/<3+|([+^-])_\1|[;:]([xvopd]+\b|[|()\\/])|\b(xd|xo)+\b/gi,
	/^global:\s*/i,
	/^(wh(o|y|at|en|ere)|how)|\?$/,
];