/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const cw = {};

for (let ey of 'object array string regex date math type std'.split(' '))
{
	cw[ey] = {};
}

cw.yt = function(ni, yb)
{
	return ni != undefined && ni.constructor === yb;
}

cw.jl = function()
{
	return cw.jg(9);
}

cw.tp = function(au)
{
	return jz[0].test(au);
}

cw.rh = function(fu)
{
	return Object.keys(fu).length == 0;
}

cw.jm = function(pv, fu)
{
	for (let px in fu)
	{
		const as = fu[px];

		if (px == pv) return as;
		if (as == pv) return px;
	}
}

cw.xe = function(fu, mv)
{
	let au = '';

	for (let px in fu)
	{
		au += px + '=' + fu[px] + mv;
	}

	return au.slice(0, -1);
}

cw.vp = function(fs, ue, ae)
{
	const cu = ue + 1;

	return ae.slice(cu, cu + fs);
}

cw.sr = function(ae)
{
	return ae[ae.length - 1];
}

cw.aj = function(ql, lf)
{
	ql += '?';

	for (let px in lf)
	{
		ql += px + '=' + encodeURIComponent(lf[px]) + '&';
	}

	return ql.slice(0, -1);
}

cw.od = function(au, kw)
{
	if (cw.yt(kw, Array))
	{
		let i = 0;

		return au.replace(jz[1], _ => kw[i++]);
	}

	return au.replace('%s', kw);
}

cw.kx = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

cw.kg = function(au, eg)
{
	const we = cw.od('(%s)', eg.join('|'));

	return au.split(new RegExp(we)).filter(s => s !== '');
}

cw.de = function(au)
{
	return au.toUpperCase();
}

cw.nv = function(au)
{
	return au.toLowerCase();
}

cw.gm = function(au, el)
{
	if (!el)
	{
		au = au.toLowerCase();
	}

	return au[0].toUpperCase() + au.slice(1);
}

cw.bq = function(yf, au)
{
	return au.match(yf) || [];
}

cw.cx = function(yf, au)
{
	if (yf.global) return '';

	const m = cw.bq(yf, au);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

cw.zx = function()
{
	return Math.floor(Date.now() / 1000);
}

cw.xu = function(hm)
{
	return hm < cw.zx();
}

cw.ao = function(q)
{
	const kl = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = cw.cx(jz[2], q);

	return Date.now() + (x[0] * kl[x[1]] * 1000);
}

cw.za = function(am)
{
	let x = am.split(':'),
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

cw.hr = function(be)
{
	let ae = [];

	ae.push(be / 3600);

	be %= 3600;

	ae.push(be / 60);

	ae.push(be % 60);

	ae = ae.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return ae.join(':').replace(jz[3], '');
}

cw.jg = function(fm)
{
	return Math.random().toString().slice(2, fm + 2);
}

cw.cl = function(ib, mz)
{
	const bi = Math.random() * (mz - ib) + ib;

	return Math.floor(bi);
}

cw.cz = function(x, a, b)
{
	return x >= a && x <= b;
}

cw.jk = function(a, b)
{
	return 100 * (a / b);
}

cw.ln = function()
{
	let tl, ps = 0;

	try {
		tl = [qp, qt, ct];
	}
	catch (e) {
		tl = [xq, ct];
	}

	tl.forEach(
		gx => ps += gx.toString().length
	);

	return ps != 3428;
}

class ky
{
	constructor(lk, ih)
	{
		this.lk = lk;
		this.ih = ih;
	}
}

class bj
{
	constructor(fg, lk, ih)
	{
		this.fg = fg;
		this.dg = new ky(lk, ih);
	}
}

class fi extends Array
{
	constructor(rv)
	{
		super();

		if (rv != null)
		{
			super.push(rv);
		}
	}

	push(np)
	{
		return !this.includes(np) && super.push(np);
	}
}

class wp
{
	constructor(yx, jw)
	{
		const gx = yx.status;

		this.gx = gx;
		this.wa = false;
		this.zs = false;
		this.zf = null;
		this.ih = null;

		switch (jw)
		{
			case 'error':
				return this.mj('va');

			case 'timeout':
				return this.mj('fw');

			default:
			{
				this.wa = (gx == 200);

				if (gx >= 500)
				{
					return this.mj('qu');
				}

				try {
					this.ih = JSON.parse(yx.responseText);
				}
				catch (e) {
					this.ih = yx.responseText;
				}
			}
		}
	}

	lm(on)
	{
		this.zf = on;
	}

	mj(on)
	{
		this.lm(on);

		this.zs = true;
	}
}

class br
{
	constructor(ih, jo)
	{
		Object.assign(this, ih);

		Object.defineProperty(this, 'jo', {
			value: jo
		});
	}

	set(px, as)
	{
		this[px] = as;

		this.bm();
	}

	bm()
	{
		return fl.set(this.jo, this);
	}
}

class ct extends br
{
	constructor(ih, jo)
	{
		super(ih, jo);
	}

	get ux()
	{
		return Boolean(this.bz)
	}

	get bz()
	{
		return this[0];
	}

	get ja()
	{
		return this[1];
	}

	get is()
	{
		return cw.xu(this.ja);
	}

	get no()
	{
		const op = this.ja.toString().split('').pop();

		return Boolean(+op);
	}

	set bz(px)
	{
		this.set(0, px);
	}

	set ja(qd)
	{
		this.set(1, qd);
	}

	get wh()
	{
		let s = this.ja.toString(),
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

class lu
{
	constructor(xy)
	{
		if (xy)
		{
			this.hw();
		}
	}

	iw(sp, cr, ca)
	{
	}

	hw()
	{
		chrome.runtime.onMessage.addListener(
			this.iw.bind(this)
		);
	}
}

class ng extends lu
{
	constructor()
	{
		super(false);
	}

	iw(sp, cr, ca)
	{
		const ih = sp.ih;

		switch (sp.lk)
		{
			case 'tw':
				return this.kc(ih);
		}
	}

	kc(tw)
	{
		if (tw == 'co')
		{
			vx.cu();
		}
	}

	du()
	{
		return this.xi('du');
	}

	hy(fo)
	{
		return this.xi('hy', fo);
	}

	lz(bz)
	{
		return this.xi('lz', bz);
	}

	an()
	{
		return this.xi('an');
	}

	ot()
	{
		return this.xi('ot');
	}

	xi(lk, ih)
	{
		const sp = new ky(lk, ih);

		return new Promise(ca =>
		{
			try {
				chrome.runtime.sendMessage(sp, ca);
			}
			catch (e) {
			}
		});
	}
}

class oi extends lu
{
	constructor()
	{
		super(true);
	}

	iw(sp, cr, ca)
	{
		const fn = function(...kw)
		{
			try {
				ca(...kw);
			}
			catch (e) {
			}
		};

		fj.jx.then(_ =>
		{
			const ih = sp.ih;

			switch (sp.lk)
			{
				case 'du':
					fj.du().then(fn);
				break;

				case 'hy':
					fj.hy(ih).then(fn);
				break;

				case 'lz':
					fj.lz(ih).then(fn);
				break;

				case 'an':
					gf.bl.an(ih).then(fn);
				break;

				case 'ot':
					fj.gd();
				break;
			}
		});

		return true;
	}
}

class ad
{
	get(px)
	{
		return new Promise(dj =>
		{
			try {
				chrome.storage.local.get(px, ay =>
					dj(typeof px == 'string' ? ay[px] : ay)
				);
			}
			catch (e) {
			}
		});
	}

	set(px, as)
	{
		let ih;

		if (typeof px == 'object')
		{
			ih = px;
		}
		else {
			ih = {[px]:as};
		}

		return new Promise(hx =>
		{
			try {
				chrome.storage.local.set(ih, hx);
			}
			catch (e) {
			}
		});
	}

	gb()
	{
		return new Promise(hx =>
		{
			try {
				chrome.storage.local.clear(hx);
			}
			catch (e) {
			}
		});
	}
}

class hsopg
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			bj => this.ac(bj)
		);

		Port.onDisconnect.addListener(
			_ => this.xr()
		);

		this.Port = Port;

		this.gp = {
		};

		this.mt = false;
	}

	iw(m)
	{
	}

	po(fg, lk, ih)
	{
		const wn = new bj(fg, lk, ih);

		if (!this.mt)
		{
			this.Port.postMessage(wn);
		}
	}

	ac(x)
	{
		this.dp(x.fg).iw(x.dg);
	}

	dp(fg)
	{
		return this.gp[fg] || this;
	}

	yi(fg, iw, xr)
	{
		return this.gp[fg] = new bc(this, fg, iw, xr);
	}

	xr()
	{
		this.mt = true;

		for (let fg in this.gp)
		{
			this.dp(fg).xr();
		}
	}
}

class av extends hsopg
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	iw(sp)
	{
		const ih = sp.ih;

		switch (sp.lk)
		{
			case 'nt':
				return gu.sj(ih);
		}
	}

	yi(fg, iw, xr)
	{
		this.po(null, 'yi', fg);

		return super.yi(fg, iw, xr);
	}

	xr()
	{
		super.xr();

		vx.tr();
	}
}

class jh extends hsopg
{
	constructor(lv)
	{
		super(lv);
	}

	iw(sp)
	{
		switch (sp.lk)
		{
			case 'yi':
				return this.yi(sp.ih);
		}
	}

	yi(fg)
	{
		const zl = super.yi(fg);

		switch (fg)
		{
			case 'qa':
				return new wj(zl);
		}
	}
}

class zd
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			ew => this.kq(ew)
		);

		this.yd = [];
	}

	kq(lv)
	{
		this.yd.push(
			new jh(lv)
		);
	}

	fc(vf)
	{
		for (let lv of this.yd)
		{
			lv.po(null, 'nt', vf);
		}
	}
}

class bc
{
	constructor(lv, fg, iw, xr)
	{
		this.lv = lv;

		this.fg = fg;

		if (iw)
		{
			this.iw = iw;
		}

		if (xr)
		{
			this.xr = xr;
		}
	}

	po(lk, ih)
	{
		this.lv.po(this.fg, lk, ih);
	}

	iw(m)
	{
	}

	xr()
	{
	}
}

cw.thd = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

cw.bzi = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

cw.kew = function(xz, hs)
{
	if (hs)
	{
		const ou = Object.create(
			Object.getPrototypeOf(xz)
		);

		return Object.assign(ou, xz);
	}

	return {...xz};
}

cw.fwo = function(lq, ep, ae)
{
	let i = ae.indexOf(lq);

	if (i >= 0)
	{
		ae[i] = ep;
	}
}

cw.fci = function(ak, ej, ae)
{
	if (ej != ak)
	{
		const np = ae[ak];
		ae.splice(ak, 1);
		ae.splice(ej, 0, np);
	}
}

cw.jcd = function(ak, ae)
{
	cw.fci(ak, Infinity, ae);
}

cw.fkn = function(...ik)
{
    ik.sort(
    	(a, b) => a.length - b.length
    );

	return ik.shift().filter(np =>
	{
		for (let sl of ik)
        {
			if (!sl.includes(np))
				return false;
        }

		return true;
    });
}

cw.hbt = function(ae)
{
	return ae.filter((value, gy) => ae.indexOf(value) == gy);
}

cw.wim = function(wc, mx)
{
	return wc.join(mx || '.');
}

cw.jzu = function(au, pa)
{
	if (pa)
	{
		au = au.replace(jz[4], '\n');

		au = au.replace(jz[5], ' ');
	}
	else {
		au = au.replace(jz[6], ' ');

	}

	return au.trim();
}

cw.voe = function(au, we, ca)
{
	return au.replace(we, (uo, uq) =>
	{
		return uo.replace(uq, ca(uq));
	});
}

cw.mzc = function(pq)
{
	return jz[7].test(pq);
}

cw.vcs = function(au)
{
	return !jz[8].test(au);
}

cw.lhf = function(au)
{
	return au.toLowerCase().replace(jz[9], cw.de);
}

cw.duc = function(au)
{
	return au == au.toUpperCase();
}

cw.biu = function(au)
{
	return au == au.toLowerCase();
}

cw.xhe = function(au)
{
	return cw.biu(au) || cw.duc(au);
}

cw.twf = function(yf, au)
{
	return cw.bq(yf, au).length;
}

cw.tnh = function(au)
{
	return cw.twf(jz[10], au) + 1;
}

cw.jkz = function(au)
{
	return au ? au.split(' ') : [];
}

cw.ylr = function(i, au)
{
	return au.substring(0, i) + 'x' + au.substring(++i);
}

cw.frm = function(s)
{
	return String(s).replace(jz[11], '\\$1').replace(jz[12], '\\x08');
}

cw.pzm = function(we, kw, ry)
{
	if (kw.constructor === Array)
	{
		kw = kw.map(cw.frm);
	}
	else {
		kw = cw.frm(kw);
	}

	we = cw.od(we, kw);

	return new RegExp(we, ry);
}

cw.bix = new function()
{
	const kl = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const tv = (dc) => new Date(dc).getTime() / 1000;

	return (dc) =>
	{
		const rz = cw.zx() - tv(dc);

		for (let [op, zc] of kl)
		{
			let ks = rz / zc;

			if (ks >= 1)
			{
				ks = Math.floor(ks);

				return cw.od('%s %s%s ago', [ks, op, (ks > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

cw.zdv = function(ae)
{
	return ae.reduce((a, b) => a + b, 0);
}

cw.xyr = function(ae)
{
	return cw.mco(cw.zdv(ae), ae.length);
}

cw.mco = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const mu = {
	rw(ql, sx, gr)
	{
		return this.om('GET', ql, sx, null, gr);
	},

	ef(ql, sx, dg, gr)
	{
		return this.om('POST', ql, sx, dg, gr);
	},

	om(eq, ql, sx, dg, gr)
	{
		if (sx)
		{
			ql = cw.aj(ql, sx);
		}

		if (dg)
		{
			dg = this.uy(dg);
		}

		return new Promise(dj =>
		{
			let yx = new XMLHttpRequest;

			if (gr != Infinity)
			{
				let zu = 0;

				yx.ontimeout = (e) =>
				{
					if (++zu < 3)
					{
						return this.et(yx, eq, ql, dg);
					}

					yx.onerror(e);
				}

				yx.timeout = 5000;
			}

			yx.onload = yx.onerror = (e) => dj(
				new wp(yx, e.type)
			);

			this.et(yx, eq, ql, dg);
		});
	},

	et(yx, eq, ql, dg)
	{
		yx.open(eq, ql);
		yx.send(dg);
	},

	uy(lf)
	{
		let fz = new FormData;

		for (let px in lf)
		{
			fz.append(px, lf[px]);
		}

		return fz;
	}
}

class nr
{
	constructor(ms)
	{
		this.map = {};

		this.ci = Object.getOwnPropertyNames(Object.prototype);

		this.plw = ms;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(px)
	{
		px = this.vcu(px);

		return this.ghn(this.map[px]);
	}

	set(px, as)
	{
		px = this.vcu(px);

		this.map[px] = this.ghn(as);
	}

	hal(px)
	{
		return this.vcu(px) in this.map;
	}

	heh(px)
	{
		!this.hal(px) && this.set(px);
	}

	vcu(px)
	{
		if (this.ci.includes(px))
		{
			return px + '*';
		}

		return px;
	}

	ghn(as)
	{
		if (as == undefined && this.plw)
		{
			return new this.plw;
		}

		return as;
	}
}

class atu
{
	constructor(dti, xdf)
	{
		this.lx = dti.lx;

		this.iez = dti.iez;

		this.xdf = xdf;

		this.fdn = [];

		this.lil = new fi;

		this.axw(dti);
	}

	axw(hu)
	{
		if (this.iez == hu.iez)
		{
			hu.zpx = true;
		}

		this.lil.push(hu.iez);

		this.fdn.push(hu);
	}

	ojq(lx)
	{
		return this.lil.includes(lx);
	}

	rdt()
	{
		this.vgr.forEach(fwg => fwg.hidden = true);
	}

	sfe(pi, pl)
	{
		this.xof(pl.kvs, pi);

		pl.jy(pi);
	}

	xof(a, b)
	{
		const ak = this.fdn.indexOf(b);
		const ej = this.fdn.indexOf(a) + 1;

		cw.fci(ak, ej, this.fdn);
	}

	get length()
	{
		return this.fdn.length;
	}

	get dti()
	{
		return this.fdn[0];
	}

	get yco()
	{
		return this.fdn[1];
	}

	get adx()
	{
		return this.length > 1;
	}

	get vgr()
	{
		return this.fdn.slice(1);
	}

	get gxm()
	{
		return this.fdn.length - 1;
	}

	get hidden()
	{
		return this.dti.hidden;
	}

	set hidden(zg)
	{
		this.dti.hidden = zg;
	}

	get ou()
	{
		const ou = cw.kew(this, true);

		ou.fdn = this.fdn.map(cw.kew);

		return ou;
	}
}

class trc
{
	constructor(pum)
	{
		this.nx = trc.avx(pum);
		this.pw = trc.wto(this.nx);
	}

	static wto(nx)
	{
		return ['he','ar'].includes(nx) ? 'rtl' : 'ltr';
	}

	static avx(au)
	{
		let ilw = .57 * cw.tnh(au);

		switch (true)
		{
			case ilw < cw.twf(jz[13], au): return 'en';

			case ilw < cw.twf(jz[14], au): return 'ar';

			case ilw < cw.twf(jz[15], au): return 'he';

			default: return '';
		}
	}

	static get fxl()
	{
		if (!this.gsj)
		{
			this.gsj = navigator.languages.map(nx => nx.slice(0, 2));
		}

		return this.gsj;
	}
}

class xhm
{
	constructor(goq)
	{
		const _ = goq.items[0];

		this.vai = _.snippet.channelId;
		this.eu = _.statistics.commentCount;

		if (this.eu == undefined)
		{
			this.eu = -1;
		}
		else {
			this.eu = +this.eu;
		}
	}
}

class edy
{
	constructor(goq)
	{
		const _ = goq.snippet;

		this.lx = goq.id;
		this.zt = _.videoId;
		this.iez = _.authorChannelId.value;
		this.ym = _.authorProfileImageUrl;
		this.wif = _.authorDisplayName;
		this.whx = _.textOriginal;
		this.hve = _.publishedAt;
		this.hsp = _.likeCount;
		this.zpx = null;
		this.dr = null;
	}
}

class fxj
{
	constructor(edy)
	{
		Object.assign(this, edy);

		this.kza = '';
		this.hsn = '';
		this.my = {};
		this.children = [];
		this.pl = null;
		this.fhw = null;
		this.pim = null;
		this.bwx = null;
		this.hidden = false;

		this.buo();
		this.trq();
		this.sjb();
		this.zfe();
		this.tpb();
	}

	buo()
	{
		this.kza = this.whx.replace(jz[16], '');

		delete this.whx;
	}

	tpb()
	{
		this.hsn = fzy.tsk(this.kza);

		this.bwx = new trc(this.hsn);

		if (this.bwx.nx == 'en')
		{
			this.hsn = fzy.oie(this.hsn);
		}
	}

	trq()
	{
		if (!this.kza.includes('/'))
			return;

		this.kza = this.kza.replace(jz[17], (ql) =>
		{
			let x;

			const znr = ghj.qcv(ql);

			if (znr) {
				if (znr.zt == this.zt)
				{
					x = new gc(this.zt, znr.eo);
				}
				else {
					x = new cj(znr);
				}
			}
			else {
				x = new yog(ql);
			}

			return this.inw(x);
		});
	}

	sjb()
	{
		if (!this.kza.includes('#'))
			return;

		this.kza = this.kza.replace(jz[18], (ykp) =>
		{
			const x = new evy(ykp);

			return this.inw(x);
		});
	}

	zfe()
	{
		if (!this.kza.includes(':'))
			return;

		this.kza = this.kza.replace(jz[19], (am) =>
		{
			const x = new gc(this.zt, am);

			return this.inw(x);
		});
	}

	inw(np)
	{
		this.my[np.lx] = np;

		return np.lx;
	}

	rx()
	{
		this.hidden = true;

		for (let pi of this.children)
		{
			pi.rx();
		}
	}

	jy(pi)
	{
		pi.pl = this;

		this.children.push(pi);
	}

	get kvs()
	{
		return cw.sr(this.children) || this;
	}

	get dxf()
	{
		return this.children.some(pi => !pi.hidden);
	}
}

class bko
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.eb = x.eb;
		this.my = x.my;
		this.zt = x.zt;
		this.lx = x.lx;
		this.iez = x.iez;
		this.ym = x.ym;
		this.fnc = x.fnc;
		this.uj = x.uj;
		this.hve = x.hve;
		this.zpx = x.zpx;
		this.dr = x.dr;
		this.nx = x.bwx.nx;
		this.pw = x.bwx.pw;
		this.kf = x.children.length;
		this.fre = '';
		this.bfn = '';

		this.hve = cw.bix(this.hve);

		this.fre = cw.od('https://www.youtube.com/channel/%s', this.iez);

		this.bfn = cw.od('https://www.youtube.com/watch?v=%s&lc=%s', [this.zt, this.lx]);
	}
}

class jpn
{
	constructor(kh, em)
	{
		this.lx = cw.jl();

		this.kh = kh;

		this.em = em;
	}
}

class gc extends jpn
{
	constructor(zt, t)
	{
		super(null, 'gc');

		let kh, vk;

		if (cw.kx(t))
		{
			kh = cw.hr(t);
			vk = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			kh = t;
			vk = cw.za(t);
		}

		this.zt = zt;
		this.eo = vk;
		this.kh = kh;
	}
}

class cj extends jpn
{
	constructor(lf)
	{
		super('youtube.com', 'cj');

		this.zt = lf.zt;
		this.eo = lf.eo;
	}
}

class yog extends jpn
{
	constructor(ql)
	{
		super('', 'qe');

		this.ql = ql;

		this.uzd = ql.startsWith('https');

		this.kh = ghj.suc(ql) || ql;
	}
}

class evy extends jpn
{
	constructor(sej)
	{
		super(sej, 'qe');

		this.ql = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(sej);
	}
}

class vqk extends jpn
{
	constructor(nzo, vai)
	{
		super(nzo, 'qe');

		this.ql = 'https://www.youtube.com/channel/' + vai;
	}
}

class caq
{
	constructor(au)
	{
		this.ukn = '';
		this.cup = '';
		this.bme = [];
		this.lzs = false;
		this.xkw = false;

		this.tsk(au);
		this.owp();
		this.bnf();
	}

	get hol()
	{
		return this.ukn;
	}

	get length()
	{
		return this.ukn.length;
	}

	get oqu()
	{
		return cw.duc(this.cup);
	}

	toLowerCase()
	{
		this.ukn = this.ukn.toLowerCase();
	}

	pox(pq)
	{
		return this.bme.includes(pq);
	}

	niq(rsj)
	{
		for (let pq of rsj)
		{
			if (this.pox(pq)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.ukn[this.length + i] : this.ukn[i];
	}

	dwy(n)
	{
		this.ukn = this.ukn.slice(0, -n);
	}

	replace(yf, ca)
	{
		this.ukn = this.ukn.replace(yf, ca);
	}

	tsk(au)
	{
		this.ukn = cw.jzu(au, 'rub');

		this.replace(jz[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(jz[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (cw.vcs(x))
				{
					return m.length > 3 && !jz[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	owp()
	{
		let vuy = cw.hbt([...this.ukn]).join('');

		this.cup = vuy.slice(0, 16);

		this.bme = cw.bq(jz[23], vuy);

		this.lzs = this.bme.some(this.ecs);
	}

	bnf()
	{
		if (!this.lzs) return;

		for (let i = 0, k = 0, n = this.bme.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.bme[i] + this.bme[k];

				this.replace(cw.pzm('(%s)+', x, 'g'), x);
			}
		}
	}

	ecs(pq)
	{
		return pq.charCodeAt(0) > 255;
	}

	usk(pq)
	{
		return pq == '\u{200D}';
	}
}

class xq
{
	constructor()
	{
		this.lx = chrome.runtime.id;

		this.tax = chrome.runtime.getManifest().version;

		this.jx = new Promise(dj => this.lpw = dj);

		this.jx.then(
			_ => this.vc()
		);

		this.ph();

		chrome.runtime.onInstalled.addListener(
			znr => this.yok(znr)
		);

		chrome.browserAction.onClicked.addListener(
			_ => qgk.ogv('co')
		);

		chrome.alarms.onAlarm.addListener(
			znr => this.odx('acq', znr)
		);

		chrome.runtime.onMessageExternal.addListener(
			sp => this.odx('bnp', sp)
		);
	}

	async ph()
	{
		if (await this.nus == this.tax)
		{
			const cf = await fl.get(['0', '1']);

			this.dci = new br(cf[0], 0);

			ml = new ct(cf[1], 1);

			if (ml.ux)
			{
				gf.dk.mwr(ml.bz);
			}

			this.lpw(1);
		}
	}

	async du()
	{
		const zxv = await this.hy('/html/view.html');

		const xa = (
			this.tax < this.ysm
		);

		const sq = (
			!ml.ux || !ml.no
		);

		return {
			zg: {
				xa, sq
			},
			gn: zxv
		};
	}

	async lz(bz)
	{
		if (jz[24].test(bz))
		{
			const wcj = await gf.dk.eve(bz);

			if (wcj)
			{
				const ml = await gf.bl.bij(bz);

				if (ml)
				{
					await this.re(ml);

					yd.fc('nd');

					return true;
				}
			}
		}

		return false;
	}

	mle(pyq)
	{
		ml.ja = pyq;

		yd.fc('ty');
	}

	gd()
	{
		if (ml.ux)
		{
			ml.bz = cw.ylr(19, ml.bz);
		}
	}

	re(muv)
	{
		ml = new ct(muv, '1');

		return ml.bm();
	}

	async hy(fo)
	{
		const ckp = await mu.rw(chrome.runtime.getURL(fo));

		return ckp.ih;
	}

	async imo(znr)
	{
		this.mzq();

		if (znr.reason == 'install')
		{
			await this.osh();
		}
		else {
			if (znr.previousVersion < '')
			{

			}
		}

		await this.wub();

		await this.ph();
	}

	async yok(znr)
	{
		await this.imo(znr);

		switch (znr.reason)
		{
			case 'install':
				this.tcq();
			break;

			case 'update':
				this.tia();
			break;
		}

		qgk.kip();
	}

	tcq()
	{

	}

	tia()
	{

	}

	async odx(avs, ih)
	{
		await this.jx;

		switch (avs)
		{
			case 'acq':
				return this.wza(ih);

			case 'bnp':
				return this.pmp(ih);
		}
	}

	wza(acq)
	{
		const wvl = acq.name;

		switch (wvl)
		{
			case 'njp':
				this.njp();
		}
	}

	pmp(sp)
	{
		return new zoq().iw(sp);
	}

	async njp()
	{
		const v = await gf.bl.ybf();

		if (v > this.tax)
		{
			return this.izy(v);
		}
	}

	vc()
	{
		if (ml.ux)
		{
			if (cw.ln() || !ml.wh)
			{
				this.gd();
			}
		}
	}

	get nus()
	{
		return fl.get('schemaVersion');
	}

	wub()
	{
		return fl.set('schemaVersion', this.tax);
	}

	get ysm()
	{
		return this.dci.latestVersion;
	}

	izy(v)
	{
		this.dci.set('latestVersion', v);
	}

	osh()
	{
		return fl.set({
			0: {
				latestVersion: this.tax
			},
			1: {},
		});
	}

	mzq()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('njp', {periodInMinutes:240});
	}
}

class zoq
{
	iw(sp)
	{
		sp = cw.bzi(sp);

		switch (sp.issuer)
		{
			case 'authServer':
				return this.wco(sp.data);
		}
	}

	wco(ih)
	{
		if (ih.id == 'pa')
		{
			fj.mle(ih.token);
		}
	}
}

class bdn
{
	constructor()
	{
		this.bl = new fnm;

		this.dk = new nlg;
	}
}

class fnm
{
	constructor()
	{
		this.kxf = 'https://api.lett.app/cs';
	}

	async bij(bz)
	{
		const ckp = await this.get('/auth', {
			apiKey:bz,
			token:fj.lx
		});

		if (ckp.wa)
		{
			return ckp.ih;
		}
	}

	async ybf()
	{
		const ckp = await this.get('/update');

		if (ckp.wa)
		{
			return ckp.ih.version;
		}
	}

	async an()
	{
		const ckp = await this.get(
			'https://api.lett.app/donate/accept', this.vjp, Infinity
		);

		if (ckp.wa)
		{
			return ckp.ih.url;
		}
	}

	get vjp()
	{
		return {
			extId:fj.lx,
			apiKey:ml.bz,
			p:1,
		};
	}

	async get(pcy, lf, gr)
	{
		if (pcy[0] == '/')
		{
			pcy = this.kxf + pcy;
		}

		const ckp = await mu.rw(pcy, lf, gr);

		if (!ckp.wa && !ckp.zs)
		{
			ckp.lm(ckp.ih.error);
		}

		return ckp;
	}
}

class aze
{
	constructor()
	{
		this.kxf = 'https://www.googleapis.com/youtube/v3';
	}

	mwr(bz)
	{
		this.px = bz;
	}

	async eve(bz)
	{
		this.mwr(bz);

		const ckp = await this.xkf('jNQXAC9IVRw');

		return ckp.wa;
	}

	ktw(zt)
	{
		return this.ny({
			videoId:zt
		});
	}

	aib(zt, dyw)
	{
		return this.fk({
			videoId:zt,
			searchTerms:dyw
		});
	}

	vfs(vai, dyw)
	{
		return this.fk({
			allThreadsRelatedToChannelId:vai,
			searchTerms:dyw
		});
	}

	async xkf(zt)
	{
		const ckp = await this.wsl({
			id:zt,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (ckp.wa)
		{
			try {
				ckp.ih = new xhm(ckp.ih);
			}
			catch (e) {
				ckp.lm('se');
			}
		}

		return ckp;
	}

	async get(pcy, lf)
	{
		const ckp = await mu.rw(this.kxf + pcy, lf);

		if (!ckp.wa && !ckp.zs)
		{
			const txd = this.dph(ckp.ih);

			ckp.lm(txd);
		}

		return ckp;
	}

	async fk(lf)
	{
		const ckp = await this.get('/commentThreads', lf);

		if (ckp.wa)
		{
			ckp.ih = this.bsz(ckp.ih);
		}

		return ckp;
	}

	async ny(lf)
	{
		let ckp, wc = [];

		do {
			ckp = await this.get('/commentThreads', lf);

			if (ckp.wa)
			{
				const wrg = this.bsz(ckp.ih);

				wc.push(wrg);

				lf.pageToken = ckp.ih.nextPageToken;
			}
		}
		while (ckp.wa && lf.pageToken)

		ckp.ih = wc.flat();

		return ckp;
	}

	wsl(lf)
	{
		return this.get('/videos', lf);
	}

	qrh(ydr)
	{
		try {
			return new edy(ydr);
		}
		catch (e) {
			return null;
		}
	}

	ski(ydr)
	{
		let vgr = [];

		try {
			if (ydr.replies) {
				vgr = ydr.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return vgr;
	}

	dph(bfp)
	{
		try {
			return bfp.error.errors[0].reason;
		}
		catch (e) {
			return bfp.zf || 'yl';
		}
	}

	bsz(ydr)
	{
		const wrg = [];

		try {
			for (let np of ydr.items)
			{
				const rd = this.tcn(np);

				if (rd) {
					wrg.push(rd);
				}
			}
		}
		catch (e) {
		}

		return wrg;
	}

	tcn(ydr)
	{
		try {
			const qoa = ydr.snippet;

			if (qoa.videoId)
			{
				let hu = this.qrh(qoa.topLevelComment);

				if (hu)
				{
					const rd = new atu(hu, qoa.totalReplyCount);

					if (rd.xdf <= 5)
					{
						for (let fwg of this.ski(ydr))
						{
							hu = this.qrh(fwg);

							if (hu) {
								rd.axw(hu);
							}
						}
					}

					return rd;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class nlg extends aze
{
	ny(lf)
	{
		this.ofp(lf);

		return super.ny(lf);
	}

	fk(lf)
	{
		this.ofp(lf);

		return super.fk(lf);
	}

	async get(pcy, lf)
	{
		lf.key = this.px;

		let ckp, i = 3;

		while (i--)
		{
			ckp = await super.get(pcy, lf);

			if (ckp.zf != 'processingFailure')
				break;
		}

		return ckp;
	}

	ofp(lf)
	{
		Object.assign(lf, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class ghj
{
	static qcv(ql)
	{
		const zt = cw.cx(jz[25], ql);

		if (zt)
		{
			let eo = cw.cx(jz[26], ql) || 0;

			if (!cw.kx(eo))
			{
				eo = cw.bq(jz[27], eo).join(':');

				eo = cw.za(eo);
			}

			return {zt, eo};
		}
	}

	static suc(ql)
	{
		return cw.cx(jz[28], ql).replace('www.', '');
	}
}

class iar
{
	async ogv(tw)
	{
		const iyf = await this.ywo();

		if (iyf && iyf.url)
		{
			this.xi(iyf.id, 'tw', tw);
		}
	}

	kip()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, qgk =>
		{
			for (let iyf of qgk)
			{
				chrome.tabs.reload(iyf.id);
			}
		});
	}

	ywo()
	{
		return new Promise(dj =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, qgk =>
			{
				dj(qgk[0]);
			});
		});
	}

	xi(hnb, lk, ih)
	{
		chrome.tabs.sendMessage(hnb, new ky(lk, ih));
	}
}

class fvt
{
	constructor(lr, cgw)
	{
		this.lx = cgw.zt;

		this.cgw = cgw;

		this.uwl = new qry(lr);

		this.wc = {};

		for (let vqr of ['bpt', 'qod'])
		{
			this[vqr] = new nr(Array);
		}

		for (let vqr of ['jzk', 'xtz', 'irb'])
		{
			this[vqr] = [];
		}

		for (let rd of lr)
		{
			this.df(rd);
			this.nvd(rd);
		}
	}

	ouc(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.fzq();

			case ':all':
				return this.tfw();

			case ':creator':
				return this.zue();

			case ':link':
				return this.idv();

			case ':reply':
				return this.rfn();
		}

		if (jz[29].test(q))
		{
			const hm = this.lyj(q);

			switch (hm.length)
			{
				case 1: return this.wfc(hm[0]);

				case 2: return this.god(hm[0], hm[1]);
			}
		}

		return this.epf(q);
	}

	tfw()
	{
		return this.fgv(
			Object.keys(this.wc)
		);
	}

	fzq()
	{
		return this.fgv(this.qod.values);
	}

	zue()
	{
		return this.fgv(this.jzk);
	}

	idv()
	{
		return this.fgv(this.irb);
	}

	rfn()
	{
		return this.fgv(this.xtz);
	}

	god(cu, ste)
	{
		const pkq = cw.za(cu);
		const zqt = cw.za(ste);

		const njb = [];

		for (let hm of this.qod.keys)
		{
			if (pkq <= hm && hm <= zqt)
			{
				njb.push(
					this.qod.get(hm)
				);
			}

			if (zqt < hm) break;
		}

		return this.fgv(njb);
	}

	df(np)
	{
		this.wc[np.lx] = np;
	}

	tos(lx)
	{
		return this.wc[lx].ou;
	}

	fgv(njb)
	{
		njb = njb.flat();

		return cw.hbt(njb).map(
			lx => this.tos(lx)
		);
	}

	epf(au)
	{
		let bxn = [];

		let eg = this.edl(au);

		let njb = eg.map(
			k => this.select('bpt', k)
		);

		njb = njb.filter(x => x.length);

		if (njb.length)
		{
			bxn = cw.fkn(...njb);

			if (bxn.length < 1)
			{
				njb.sort((a, b) => a.length - b.length);

				bxn = njb[0];
			}
		}

		return this.fgv(bxn);
	}

	wfc(am)
	{
		let ix = cw.za(am);

		let njb = [
			this.select('qod', ix)
		];

		for (let i = ix; i--;)
		{
			let x = this.select('qod', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			njb.push(x);
		}

		for (let i = ix; i++;)
		{
			let x = this.select('qod', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			njb.push(x);
		}

		return this.fgv(njb);
	}

	nvd(rd)
	{
		const kh = rd.fdn.map(hu => hu.whx).join(' ');

		this.trq(kh, rd.lx);

		this.nac(kh, rd.lx);

		this.ybg(kh, rd.lx);

		this.ski(rd);
	}

	ski(rd)
	{
		if (rd.length > 1)
		{
			this.xtz.push(rd.lx);
		}

		if (rd.ojq(this.cgw.vai))
		{
			this.jzk.push(rd.lx);
		}
	}

	trq(kh, lx)
	{
		kh.includes('http') && this.irb.push(lx);
	}

	nac(kh, lx)
	{
		const sgd = this.lyj(kh);

		for (let hm of sgd)
		{
			hm = cw.za(hm);

			if (0 <= hm && hm < this.cgw.ro)
			{
				this.vbz('qod', hm, lx);
			}
		}
	}

	ybg(kh, lx)
	{
		this.edl(kh).forEach(
			pv => this.vbz('bpt', pv, lx)
		);
	}

	vbz(vqr, px, as)
	{
		this[vqr].heh(px);

		this[vqr].get(px).push(as);
	}

	select(vqr, px)
	{
		return this[vqr].get(px);
	}

	edl(au)
	{
		au = fzy.tsk(au);

		au = fzy.oie(au);

		au = cw.jkz(au);

		return cw.hbt(au);
	}

	lyj(au)
	{
		return cw.bq(jz[30], au);
	}
}

class qry
{
	constructor(lr)
	{
		this.uwl = {};

		this.uxa = {};

		this.ful = {};

		for (let rd of lr)
		{
			this.qmi(rd);
		}

		this.mcv();
	}

	alw(kpt)
	{
		return this.uxa.ouc(kpt);
	}

	rmo(lx)
	{
		return this.uwl[lx];
	}

	qmi(rd)
	{
		for (let hu of rd.fdn)
		{
			this.ied(hu.iez, hu.whx);
			this.huy(hu.iez, hu.wif);
		}
	}

	mcv()
	{
		this.uxa = new psl(this.uxa);

		for (let lx in this.ful)
		{
			const ful = this.ful[lx];

			if (ful.length > 1)
			{
				const flr = ful.filter(
					(kh, i) => kh.length < 28 || i == ful.indexOf(kh)
				);

				this.rmo(lx).xlf = (ful.length != flr.length);
			}
		}
	}

	huy(lx, ftj)
	{
		let fhw = new adg(lx, ftj);

		this.uwl[lx] = fhw;

		this.uxa[ftj] = fhw;
	}

	ied(lx, kh)
	{
		this.ful[lx] = this.ful[lx] || [];

		this.ful[lx].push(kh);
	}
}

class adg
{
	constructor(lx, ftj)
	{
		this.lx = lx;
		this.ftj = ftj;
		this.xlf = false;
		this.fux = false;
	}

	get fnc()
	{
		return this.fux ? this.ftj : this.nfh;
	}

	get nms()
	{
		return !this.fux && this.xlf;
	}

	get nfh()
	{
		if (!this.zjf)
		{
			this.zjf = kup.exn(this.ftj);
		}

		return this.zjf;
	}
}

class psl
{
	constructor(fu)
	{
		this.keys = Object.keys(fu).sort(this.evt);

		this.myl = this.keys.map(px => fu[px]);

		this.keys = this.keys.map(cw.nv);
	}

	ouc(oet)
	{
		oet = oet.toLowerCase();

		let wc = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(oet))
			{
				do {
					wc.push(this.myl[i])
				}
				while (++i < n && this.keys[i].startsWith(oet));

				break;
			}
		}

		return wc.sort(this.qgp);
	}

	qgp(a, b)
	{
		return b.ftj.length - a.ftj.length;
	}

	evt(a, b)
	{
		return a.localeCompare(b);
	}
}

const nok = {
	rst: {
		gxm(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		gmb(x)
		{
			return (x != 0) ? (1 / x) : 0;
		},

		uks(tfc)
		{
			let qnq = cw.xyr(tfc);

			return (n) => (qnq - Math.abs(qnq - n)) / qnq;
		}
	},

	nvd(lr, zsx, cgw)
	{
		this.ump = cgw.vai;

		const ort = zsx.rmo(this.ump);

		if (ort)
		{
			ort.fux = true;
		}

		this.ouc = cgw.ouc;

		this.upm = new lpx;

		this.qxg = new kfz;

		this.yql = new poj;

		this.fwq = {};

		return this.owp(lr, zsx);
	},

	owp(lr, zsx)
	{
		const cbj = ('you are not but for the thi and that was').split(' ');

		const kao = {
			dnj: 1,
			hxm: [],
		};

		const hqc = {
			gxm: this.rst.gxm,
			vkt: this.rst.gmb,
			hxm: null,
		};

		const lih = {
			bpt: .5,
			hxm: .2,
			cfs: .2,
			vkt: .15,
			pjs: .1,
			gxm: .1,
			zgm: .1,
		};

		if (this.ouc.iko)
		{
			Object.assign(lih, {
				zgm: .4,
				cfs:.4,
				vkt: .1,
				hxm: .0,
			});
		}

		for (let rd of lr)
		{
			Object.assign(rd,
			{
				hf: {
					hxm: rd.dti.whx.length,
					pec: 0,
					pjs: false,
					cfs: false,
					qod: [],
					eg: [],
				},
				bqo: {
					bpt: 0,
					cfs: 0,
					vkt: 0,
					hxm: 0,
					gpt: 0,
					slp: 0,
				},
			});

			const hf = rd.hf;

			for (let i = 0; i < rd.length; i++)
			{
				const hu = rd.fdn[i] = new fxj(rd.fdn[i]);

				hu.fhw = zsx.rmo(hu.iez);

				hu.dr = this.dr(hu.iez);

				if (i > 0)
				{
					hu.eb = true;

					hu.zpx && (hf.pjs = true);
					hu.dr && (hf.cfs = true);
				}

				if (hu.hsn == '' || hu.fhw.nms)
				{
					hu.rx();
				}
			}

			const dti = rd.dti;

			if (this.tfv(dti.kza))
			{
				rd.hidden = true;

				continue;
			}

			hf.eg = cw.jkz(dti.hsn);
			hf.pec = hf.eg.length;
			hf.eg = cw.hbt(hf.eg);

			for (let x in dti.my)
			{
				x = dti.my[x];

				if (x.lx == dti.kza)
				{
					rd.hidden = true;
				}

				if (x instanceof gc)
				{
					hf.qod.push(x.vk);

					cw.fwo(x.lx, this.qxg.zxg(x.vk), hf.eg);
				}
			}

			for (let pv of hf.eg)
			{
				if (pv.length > 2 && !cbj.includes(pv))
				{
					this.upm.oqi(pv);
				}
			}
		}

		for (let rd of lr)
		{
			if (rd.hidden)
				continue;

			const bqo = rd.bqo;

			for (let pv of rd.hf.eg)
			{
				bqo.bpt += this.upm.get(pv);
			}

			bqo.bpt /= rd.hf.pec;

			bqo.vkt = rd.hf.qod.length;

			if (bqo.bpt > kao.dnj)
			{
				kao.dnj = bqo.bpt;
			}

			kao.hxm.push(rd.hf.hxm);
		}

		hqc.hxm = this.rst.uks(kao.hxm);

		for (let rd of lr)
		{
			const bqo = rd.bqo;

			bqo.bpt = lih.bpt * (bqo.bpt / kao.dnj);
			bqo.vkt = lih.vkt * hqc.vkt(bqo.vkt);
			bqo.cfs = lih.cfs * +rd.hf.cfs;

			const gxm = lih.gxm * hqc.gxm(rd.gxm);
			const pjs = +rd.hf.pjs || .5;
			const zgm = cw.mco(rd.gxm, rd.xdf) || .5;

			bqo.gpt = pjs * zgm * gxm;

			bqo.slp = cw.zdv(Object.values(bqo));
		}

		lr.sort(
			(a, b) => b.bqo.slp - a.bqo.slp
		);

		for (let i = 0, n = lr.length; i < n; i++)
		{
			const a = lr[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = lr[k];

				if (b.iez == a.iez && !b.dti.fhw.fux)
				{
					b.hidden = true;
				}

				if (!b.hidden && !b.adx)
				{
					const dxk = cw.fkn(a.hf.eg, b.hf.eg);
					const tcp = (a.hf.eg.length + b.hf.eg.length) / 2;

					if (dxk.length == b.hf.pec)
					{
						b.hidden = true;
					}

					if (dxk.length >= .5 * tcp)
					{
						const zqt = a.hf.qod[0] || 0;
						const cbw = b.hf.qod[0] || 0;

						if (this.qxg.gkm(zqt, cbw))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < lr.length; i++)
		{
			const rd = lr[i];

			let urq = false;

			if (i == 0 && !rd.adx)
			{
				const jwu = this.ouc.au.toLowerCase();
				const azj = rd.dti.hsn;

				if (jwu == azj)
				{
					urq = true;
				}
			}

			if (rd.adx && rd.lil.length == 1)
			{
				const pkq = new Date(rd.dti.hve);
				const zqt = new Date(rd.yco.hve);

				if (.001 * (zqt - pkq) < 300)
				{
					urq = true;
				}
			}

			if (urq)
			{
				cw.jcd(i, lr);
			}
		}

		for (let rd of lr)
		{
			this.yql.apm(rd.lx, rd.iez);

			for (let iez of rd.lil)
			{
				this.yql.fjz(iez, rd.lx)
			}
		}

		for (let rd of lr)
		{
			if (rd.gxm == 0) continue;

			for (let fwg of rd.vgr)
			{
				const kh = fwg.kza;

				const vao = cw.cx(jz[31], kh);

				for (let fhw of zsx.alw(vao))
				{
					if (this.mxm(fhw).test(kh))
					{
						fwg.pim = fhw;
						break;
					}
				}
			}

			if (rd.length > 2)
			{
				let uwl, wc, rey = true;

				const n = rd.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					const fwg = rd.fdn[i];

					if (rey)
					{
						uwl = [];
						wc = [];
						rey = false;
					}

					const ml = fwg.fhw;

					if (cw.sr(uwl) == ml) {
						i++;
					}
					else if (uwl.includes(ml) || cw.hbt(uwl).length < 2) {
						wc.push(fwg);
						uwl.push(ml);

						if (i + 1 < n)
							continue;
					}

					if (wc.length > 2)
					{
						let wcj = !wc.some(fwg => fwg.pim && !uwl.includes(fwg.pim));

						if (wcj)
						{
							wc.forEach(fwg =>
								fwg.pim = uwl.find(fhw => fhw != fwg.fhw)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						rey = true;
					}
				}
			}

			for (let cir, i = 1; i < rd.length; i++)
			{
				const fwg = rd.fdn[i];

				if (!fwg.pim)
				{
					if (cir && cir.pim == fwg.fhw)
					{
						fwg.pim = cir.fhw;

						rd.sfe(fwg, cir);
					}
				}
				else {
					const kqk = fwg.pim;

					let udp;

					for (let k = i - 1; k >= 0; k--)
					{
						const cir = rd.fdn[k];

						if (k == 0)
						{
							if (cir.fhw == kqk)
							{
								udp = '';
							}

							break;
						}

						if (cir.fhw == kqk)
						{
							rd.sfe(fwg, cir);

							if (cir.children.length == 1)
							{
								udp = '';
							}

							break;
						}
					}

					if (udp == null)
					{
						const lp = new vqk(kqk.fnc, kqk.lx);

						udp = fwg.inw(lp) + ' ';
					}

					fwg.kza = fwg.kza.replace(this.mxm(kqk), udp);
				}

				cir = fwg;
			}

			for (let i = 1, n = rd.length; i < n; i++)
			{
				const fwg = rd.fdn[i];

				if (fwg.pl || fwg.children.length)
				{
					cw.jcd(i, rd.fdn);
					i--;
					n--;
				}
			}

			for (let yqp = false, i = 1; i < rd.length; i++)
			{
				let fwg = rd.fdn[i];

				yqp = (yqp || !fwg.zpx);

				if (fwg.dxf)
				{
					continue;
				}

				if (!yqp)
				{
					const kh = fwg.kza;

					if (rd.length > 2 || ['+','@'].includes(kh[0]) || kh.length < 10)
					{
						fwg.rx();
					}
				}

				fwg.pim && !rd.ojq(fwg.pim.lx) && fwg.rx();

				this.xps(fwg.iez, rd.lx) && fwg.rx();
			}
		}

		lr = lr.map(rd =>
		{
			if (rd.dti.hidden)
			{
				return [];
			}

			const fdn = [];

			for (let i = 0; i < rd.length; i++)
			{
				const hu = rd.fdn[i];

				hu.uj = kup.mkc(hu.kza);

				hu.fnc = hu.fhw.fnc;

				if (hu.uj.length < 2)
				{
					if (i == 0) return [];

					hu.rx();
				}

				fdn.push(new bko(hu));
			}

			return fdn;
		});

		return lr.filter(rd => rd.length > 0);
	},

	tfv(au)
	{
		return au.length > 500 || cw.twf(jz[32], au) > 3;
	},

	dr(iez)
	{
		return this.ump == iez;
	},

	xps(iez, rus)
	{
		if (!this.ump || this.dr(iez))
		{
			return false;
		}

		for (let zbg of this.yql.of(iez))
		{
			if (zbg == rus)
			{
				return false;
			}

			if (!this.yql.xes(zbg, iez))
			{
				return true;
			}
		}
	},

	mxm(fhw)
	{
		const lx = fhw.lx;

		if (lx in this.fwq)
		{
			return this.fwq[lx];
		}

		return this.fwq[lx] = cw.pzm('^[+@]?%s[-\\s,.:;?!]*', fhw.ftj, 'i');
	}
};

const kup = {
	mkc(er)
	{
		let au = new caq(er);

		au.pox('<') && au.replace(jz[33], '&lt;');

		au.oqu && au.toLowerCase();

		if (au.pox('.'))
		{
			au.charAt(-1) == '.' && au.charAt(-2) != '.' && au.dwy(1);

			au.replace(jz[34], (m) => m.replace(jz[35], ''));
		}

		if (au.pox('\n'))
		{
			au.replace(jz[36], function(m, i)
			{
				let x = au.charAt(i - 1);

				return cw.mzc(x) ? '. ' : ' ';
			});
		}

		if (au.niq('*_'))
		{
			au.replace(jz[37], '$2');
		}

		if (au.niq('(,!?.)'))
		{
			au.replace(jz[38], '?!');

			au.replace(jz[39], '$1');

			au.replace(jz[40], '$1 $2');

			au.pox('!') && au.replace(jz[41], '$1');
		}

		if (au.niq('$£€'))
		{
			au.replace(jz[42], (_, pwf, ife) =>
			{
				jz[43].test(pwf) && (pwf = Math.round(pwf));

				return ife + pwf;
			});
		}

		au.pox(':') && au.replace(jz[44], ': ');

		au.pox('&') && au.replace(jz[45], ' and ');

		au.pox('"') && au.replace(jz[46], '" - $1');

		return urc.odr(au.hol);
	},

	exn(er)
	{
		return er.length < 28 && this.dkl(er) || this.sua();
	},

	dkl(au)
	{
		let eg;

		if (!jz[47].test(au))
		{
			if (cw.xhe(au))
			{
				au = cw.lhf(au);
			}

			eg = au.split(' ');

			if (eg.length == 1)
			{
				return cw.gm(eg[0], 'PRE_CASE');
			}
		}
		else {
			eg = cw.bq(jz[48], au);
		}

		eg = eg.map(pv =>
		{
			switch (true)
			{
				case pv.length < 2 || cw.kx(pv):
					return '';

				default:
					return cw.gm(pv);
			}
		});

		eg = eg.filter(
			(pv, i) => pv != '' && i == eg.indexOf(pv)
		);

		return eg.join(' ');
	},

	sua()
	{
		return 'user' + cw.jg(4);
	}
};

const fzy = {
	tsk(au)
	{
		au = au.toLowerCase();

		au = au.replace(jz[49], ' ');

		return cw.jzu(au);
	},

	oie(au)
	{
		return au.replace(jz[50], '$1');
	}
};

const urc = {
	rfh: {
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

	odr(au)
	{
		return au.replace(jz[51], m => this.get(m));
	},

	get(px)
	{
		px = px.toLowerCase();

		(px.length == 2) || (px = px.slice(0, 2));

		return this.rfh[px] || px;
	}
};

class lpx
{
	constructor()
	{
		this.map = {};
	}

	oqi(pv)
	{
		this.map[pv] = ++this.map[pv] || 0;
	}

	get(pv)
	{
		return this.map[pv] || 0;
	}
}

class kfz
{
	constructor()
	{
		this.map = {};
	}

	zxg(mxv)
	{
		for (let jvo in this.map)
		{
			if (this.gkm(mxv, jvo))
			{
				return this.map[jvo];
			}
		}

		return this.ilb(mxv);
	}

	ilb(hm)
	{
		return this.map[hm] = cw.od('TS%s', hm);
	}

	gkm(zqt, cbw)
	{
		return Math.abs(cbw - zqt) < 5;
	}
}

class poj
{
	constructor()
	{
		this.uwl = {};

		this.lr = {};
	}

	of(wdt)
	{
		return this.uwl[wdt];
	}

	xes(qfv, wdt)
	{
		return this.lr[qfv] == wdt;
	}

	apm(lx, bjs)
	{
		this.lr[lx] = bjs;
	}

	fjz(lx, qfv)
	{
		if (!this.uwl[lx])
		{
			this.uwl[lx] = new fi;
		}

		this.uwl[lx].push(qfv);
	}
}

class wj
{
	constructor(lv)
	{
		lv.iw = this.iw.bind(this);

		this.lv = lv;

		this.oen = 0;

		this.jcv = new Promise(dj => dj(null));

		this.cgw;

		this.hfg = new hfg;

		this.lwy = new fvt([], {});
	}

	async iw(sp)
	{
		const zt = sp.ih.zt;

		try {
			const znr = await this.hfg.bdz(zt);

			this.cgw = new xiv(sp.ih, znr);
		}
		catch (on) {
			return this.xro(on);
		}

		switch (sp.lk)
		{
			case 'fk':
				return this.iup(zt);

			case 'eu':
				return this.kj(zt);
		}
	}

	xro(lx)
	{
		this.amn('zf', {lx});
	}

	kj(zt)
	{
		const n = this.cgw.eu;

		if (0 < n && n < 1000)
		{
			this.kvc(zt);
		}

		this.amn('eu', n);
	}

	async iup(zt)
	{
		if (this.cgw.ouc.yrq)
		{
			return this.xro('qf');
		}

		this.zez();
	}

	async zez()
	{
		let r = new czx(this.hfx);

		try {
			if (this.cgw.ouc.mda)
			{
				await this.sjn(r);
			}
			else {
				await this.yje(r);
			}

			!this.epy(r.lx) && this.amn('fk', r);
		}
		catch (on) {
			!this.epy(r.lx) && this.xro(on);
		}
	}

	async sjn(bfp)
	{
		const ckp = await gf.dk.vfs(this.cgw.vai, this.cgw.ouc.au);

		if (ckp.zf)
		{
			throw ckp.zf;
		}

		const uwl = new qry(ckp.ih);

		const lr = nok.nvd(ckp.ih, uwl, this.cgw);

		bfp.kib(lr);
		bfp.vak(-2);
	}

	async yje(bfp)
	{
		const zt = this.cgw.zt;
		const ko = this.cgw.ouc.au;

		const p = bfp.vak(this.cgw.eu);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.cgw.ouc.fwk)
		{
			throw 'mw';
		}

		let lr, uwl;

		if (p < 1000)
		{
			const on = await this.kvc(zt);

			if (on)
			{
				throw on;
			}

			uwl = this.lwy.uwl;

			lr = this.lwy.ouc(ko);
		}
		else {
			const ckp = await gf.dk.aib(zt, ko);

			if (ckp.zf)
			{
				throw ckp.zf;
			}

			uwl = new qry(ckp.ih);

			lr = ckp.ih;
		}

		lr = nok.nvd(lr, uwl, this.cgw);

		bfp.kib(lr);
	}

	amn(lk, ih)
	{
		this.lv.po(lk, ih);
	}

	async kvc(zt)
	{
		await this.jcv;

		if (zt != this.lwy.lx)
		{
			this.jcv = new Promise(async dj =>
			{
				const ckp = await gf.dk.ktw(zt);

				if (ckp.wa)
				{
					this.lwy = new fvt(ckp.ih, this.cgw);
				}

				dj(ckp.zf);
			});
		}

		return this.jcv;
	}

	get hfx()
	{
		return ++this.oen;
	}

	epy(kdm)
	{
		return kdm != this.oen;
	}
}

class hfg
{
	constructor()
	{
		this.map = {};
	}

	async bdz(zt)
	{
		let x = this.map[zt];

		if (x == undefined)
		{
			x = this.tlk(zt);
		}

		if (x instanceof Promise)
		{
			const ckp = await x;

			if (ckp.zf)
			{
				this.tdu(zt);

				throw ckp.zf;
			}

			x = this.xsa(zt, ckp.ih);
		}

		return x;
	}

	gzn(zt, value)
	{
		return this.map[zt] = value;
	}

	tlk(zt)
	{
		const r = gf.dk.xkf(zt);

		return this.gzn(zt, r);
	}

	xsa(zt, oph)
	{
		return this.gzn(zt, oph);
	}

	tdu(zt)
	{
		this.gzn(zt, undefined);
	}
}

class rfw
{
	constructor(q)
	{
		this.au = '';
		this.em = '';
		this.mda = false;
		this.yrq = false;

		this.owp(q);
	}

	get fwk()
	{
		return this.em == 'ci';
	}

	get iko()
	{
		return this.em == 'lvr';
	}

	owp(q)
	{
		const jed = q.replace(jz[52], '');

		if (jed != q)
		{
			this.mda = true;

			if (jed == '')
			{
				this.yrq = true;
			}
		}

		this.au = jed;
		this.em = rfw.ndu(jed);
	}

	static ndu(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'ci';

			case (jz[53]).test(q):
				return 'lvr';

			default:
				return '';
		}
	}
}

class xiv
{
	constructor(cwa, fzk)
	{
		Object.assign(this, ...[cwa, fzk]);

		this.ro = Math.floor(cwa.ro) || Infinity;
		this.xl = Math.floor(cwa.xl);

		this.ouc = new rfw(cwa.ko);
	}
}

class czx
{
	constructor(kdm)
	{
		this.lx = kdm;
		this.lr = [];
		this.fs = 0;
		this.vo = 0;
	}

	kib(lr)
	{
		this.lr = lr;
		this.fs = lr.length;
	}

	vak(n)
	{
		return this.vo = n;
	}
}

let ml;

const gf = new bdn;
const fl = new ad;
const qgk = new iar;
const fj = new xq;
const yd = new zd;
const jc = new oi;

const jz = [
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
	/\/\/([^\/]+)/,
	/^\d\d?:.*\d\d$/,
	/\d\d?(:\d\d)+/g,
	/[@+]?(.{2})/,
	/^.{0,3}\n/gm,
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