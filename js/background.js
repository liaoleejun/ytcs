/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const mh = {};

for (let ca of 'object array string regex date math type std cmp'.split(' '))
{
	mh[ca] = {};
}

mh.qc = function(hr, cx)
{
	return hr != undefined && hr.constructor === cx;
}

mh.mr = function()
{
	return mh.wi(9);
}

mh.pi = function(ai)
{
	return fw[0].test(ai);
}

mh.gx = function(kb)
{
	return Object.keys(kb).length == 0;
}

mh.fk = function(eo, kb)
{
	for (let gj in kb)
	{
		const dc = kb[gj];

		if (gj == eo) return dc;
		if (dc == eo) return gj;
	}
}

mh.bs = function(kb, zk)
{
	if (kb instanceof Object)
	{
		return kb[zk];
	}
}

mh.gn = function(kb, zk, wc)
{
	if (kb instanceof Object)
	{
		kb[zk] = wc;
	}
}

mh.mp = function(kb, uc)
{
	let ai = '';

	for (let gj in kb)
	{
		ai += gj + '=' + kb[gj] + uc;
	}

	return ai.slice(0, -1);
}

mh.kj = function(dy, pr, fo)
{
	const vm = pr + 1;

	return fo.slice(vm, vm + dy);
}

mh.hx = function(fo)
{
	return fo[fo.length - 1];
}

mh.mo = function(rn, yl)
{
	rn += '?';

	for (let gj in yl)
	{
		rn += gj + '=' + encodeURIComponent(yl[gj]) + '&';
	}

	return rn.slice(0, -1);
}

mh.ox = function(ai, gf)
{
	if (mh.qc(gf, Array))
	{
		let i = 0;

		return ai.replace(fw[1], _ => gf[i++]);
	}

	return ai.replace('%s', gf);
}

mh.xk = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

mh.ya = function(ai, iu)
{
	const lt = mh.ox('(%s)', iu.join('|'));

	return ai.split(new RegExp(lt)).filter(s => s !== '');
}

mh.fn = function(ai)
{
	return ai.toUpperCase();
}

mh.za = function(ai)
{
	return ai.toLowerCase();
}

mh.ef = function(ai, xc)
{
	if (!xc)
	{
		ai = ai.toLowerCase();
	}

	return ai[0].toUpperCase() + ai.slice(1);
}

mh.bi = function(xz, ai)
{
	return ai.match(xz) || [];
}

mh.as = function(xz, ai)
{
	if (xz.global) return '';

	const m = mh.bi(xz, ai);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

mh.zu = function()
{
	return Math.floor(Date.now() / 1000);
}

mh.ec = function(at)
{
	return at < mh.zu();
}

mh.xd = function(q)
{
	const dp = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = mh.as(fw[2], q);

	return Date.now() + (x[0] * dp[x[1]] * 1000);
}

mh.eu = function(gt)
{
	let x = gt.split(':'),
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

mh.qh = function(yp)
{
	let fo = [];

	fo.push(yp / 3600);

	yp %= 3600;

	fo.push(yp / 60);

	fo.push(yp % 60);

	fo = fo.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return fo.join(':').replace(fw[3], '');
}

mh.wi = function(mk)
{
	return Math.random().toString().slice(2, mk + 2);
}

mh.ez = function(ev, bk)
{
	const jn = Math.random() * (bk - ev) + ev;

	return Math.floor(jn);
}

mh.ub = function(x, a, b)
{
	return x >= a && x <= b;
}

mh.kg = function(a, b)
{
	return 100 * (a / b);
}

mh.ki = function(se)
{
	const n = se.length;
	const i = Math.floor(n / 2);

	if (n == 0)
		return 0;

	if (n % 2 != 0)
		return se[i];

	if (n % 2 == 0)
		return (se[i] + se[i-1]) / 2;
}

mh.cr = function()
{
	let kp, ja = 0;

	try {
		kp = [km, lq, no];
	}
	catch (e) {
		kp = [xi, no];
	}

	kp.forEach(
		we => ja += we.toString().length
	);

	return ja != 3412;
}

mh.uq = function(a, b)
{
	return a - b;
}

mh.iz = function(a, b)
{
	return b - a;
}

mh.st = function(a, b)
{
	return a.length - b.length;
}

mh.ux = function(a, b)
{
	return b.length - a.length;
}

class ag
{
	constructor(ps, xu)
	{
		this.ps = ps;
		this.xu = xu;
	}
}

class jb
{
	constructor(sz, ps, xu)
	{
		this.sz = sz;
		this.kx = new ag(ps, xu);
	}
}

class sj extends Array
{
	constructor(co)
	{
		super();

		if (co != null)
		{
			super.push(co);
		}
	}

	push(wm)
	{
		return !this.includes(wm) && super.push(wm);
	}
}

class hm
{
	constructor(zm, ad)
	{
		const we = zm.status;

		this.we = we;
		this.ds = false;
		this.tz = false;
		this.xq = null;
		this.xu = null;

		switch (ad)
		{
			case 'error':
				return this.cy('pb');

			case 'timeout':
				return this.cy('gh');

			default:
			{
				this.ds = (we == 200);

				if (we >= 500)
				{
					return this.cy('qd');
				}

				try {
					this.xu = JSON.parse(zm.responseText);
				}
				catch (e) {
					this.xu = zm.responseText;
				}
			}
		}
	}

	qu(pa)
	{
		this.xq = pa;
	}

	cy(pa)
	{
		this.qu(pa);

		this.tz = true;
	}
}

class lm
{
	constructor(xu, ws)
	{
		Object.assign(this, xu);

		Object.defineProperty(this, 'ws', {
			value: ws
		});
	}

	set(gj, dc)
	{
		this[gj] = dc;

		this.oh();
	}

	oh()
	{
		return md.set(this.ws, this);
	}
}

class no extends lm
{
	constructor(xu, ws)
	{
		super(xu, ws);
	}

	get vg()
	{
		return Boolean(this.so)
	}

	get so()
	{
		return this[0];
	}

	get bl()
	{
		return this[1];
	}

	get nf()
	{
		return mh.ec(this.bl);
	}

	get ql()
	{
		const aq = this.bl.toString().split('').pop();

		return Boolean(+aq);
	}

	set so(gj)
	{
		this.set(0, gj);
	}

	set bl(wa)
	{
		this.set(1, wa);
	}

	get eq()
	{
		let s = this.bl.toString(),
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

class ab
{
	constructor(yz)
	{
		if (yz)
		{
			this.fd();
		}
	}

	ml(ga, pq, bj)
	{
	}

	fd()
	{
		chrome.runtime.onMessage.addListener(
			this.ml.bind(this)
		);
	}
}

class bu extends ab
{
	constructor()
	{
		super(false);
	}

	ml(ga, pq, bj)
	{
		const xu = ga.xu;

		switch (ga.ps)
		{
			case 'ir':
				return this.vr(xu);
		}
	}

	vr(ir)
	{
		if (ir == 'fs')
		{
			bn.vm();
		}
	}

	hu()
	{
		return this.hw('hu');
	}

	sm(zj)
	{
		return this.hw('sm', zj);
	}

	sy(so)
	{
		return this.hw('sy', so);
	}

	ld(tj)
	{
		return this.hw('ld', tj);
	}

	op()
	{
		return this.hw('op');
	}

	hw(ps, xu)
	{
		const ga = new ag(ps, xu);

		return new Promise(bj =>
		{
			try {
				chrome.runtime.sendMessage(ga, bj);
			}
			catch (e) {
			}
		});
	}
}

class yr extends ab
{
	constructor()
	{
		super(true);
	}

	ml(ga, pq, bj)
	{
		const tv = function(...gf)
		{
			try {
				bj(...gf);
			}
			catch (e) {
			}
		};

		zs.ka.then(_ =>
		{
			const xu = ga.xu;

			switch (ga.ps)
			{
				case 'hu':
					zs.hu().then(tv);
				break;

				case 'sm':
					zs.sm(xu).then(tv);
				break;

				case 'sy':
					zs.sy(xu).then(tv);
				break;

				case 'ld':
					kw.id.ld(xu).then(tv);
				break;

				case 'op':
					zs.oj();
				break;
			}
		});

		return true;
	}
}

class lr
{
	get(gj)
	{
		return new Promise(zt =>
		{
			try {
				chrome.storage.local.get(gj, ih =>
					zt(typeof gj == 'string' ? ih[gj] : ih)
				);
			}
			catch (e) {
			}
		});
	}

	set(gj, dc)
	{
		let xu;

		if (typeof gj == 'object')
		{
			xu = gj;
		}
		else {
			xu = {[gj]:dc};
		}

		return new Promise(vs =>
		{
			try {
				chrome.storage.local.set(xu, vs);
			}
			catch (e) {
			}
		});
	}

	lc()
	{
		return new Promise(vs =>
		{
			try {
				chrome.storage.local.clear(vs);
			}
			catch (e) {
			}
		});
	}
}

class pdsan
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			jb => this.am(jb)
		);

		Port.onDisconnect.addListener(
			_ => this.bd()
		);

		this.Port = Port;

		this.xf = {
		};

		this.on = false;
	}

	ml(m)
	{
	}

	vy(sz, ps, xu)
	{
		const ks = new jb(sz, ps, xu);

		if (!this.on)
		{
			this.Port.postMessage(ks);
		}
	}

	am(x)
	{
		this.ju(x.sz).ml(x.kx);
	}

	ju(sz)
	{
		return this.xf[sz] || this;
	}

	jr(sz, ml, bd)
	{
		return this.xf[sz] = new ax(this, sz, ml, bd);
	}

	bd()
	{
		this.on = true;

		for (let sz in this.xf)
		{
			this.ju(sz).bd();
		}
	}
}

class yb extends pdsan
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	ml(ga)
	{
		const xu = ga.xu;

		switch (ga.ps)
		{
			case 'xy':
				return em.ji(xu);
		}
	}

	jr(sz, ml, bd)
	{
		this.vy(null, 'jr', sz);

		return super.jr(sz, ml, bd);
	}

	bd()
	{
		super.bd();

		bn.up();
	}
}

class ct extends pdsan
{
	constructor(zh)
	{
		super(zh);
	}

	ml(ga)
	{
		switch (ga.ps)
		{
			case 'jr':
				return this.jr(ga.xu);
		}
	}

	jr(sz)
	{
		const an = super.jr(sz);

		switch (sz)
		{
			case 'zi':
				return new zb(an);
		}
	}
}

class wu
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			wt => this.vj(wt)
		);

		this.ay = [];
	}

	vj(zh)
	{
		this.ay.push(
			new ct(zh)
		);
	}

	fz(ti)
	{
		for (let zh of this.ay)
		{
			zh.vy(null, 'xy', ti);
		}
	}
}

class ax
{
	constructor(zh, sz, ml, bd)
	{
		this.zh = zh;

		this.sz = sz;

		if (ml)
		{
			this.ml = ml;
		}

		if (bd)
		{
			this.bd = bd;
		}
	}

	vy(ps, xu)
	{
		this.zh.vy(this.sz, ps, xu);
	}

	ml(m)
	{
	}

	bd()
	{
	}
}

mh.oar = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

mh.tcd = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

mh.oif = function(ie, zl)
{
	if (zl)
	{
		const sf = Object.create(
			Object.getPrototypeOf(ie)
		);

		return Object.assign(sf, ie);
	}

	return {...ie};
}

mh.gar = function(rd, wc, fo)
{
	let i = fo.indexOf(rd);

	if (i >= 0)
	{
		fo[i] = wc;
	}
}

mh.ugb = function(qe, vb, fo)
{
	if (vb != qe)
	{
		const wm = fo[qe];
		fo.splice(qe, 1);
		fo.splice(vb, 0, wm);
	}
}

mh.xwe = function(qe, fo)
{
	mh.ugb(qe, Infinity, fo);
}

mh.bko = function(...lh)
{
    lh.sort(
    	(a, b) => a.length - b.length
    );

	return lh.shift().filter(wm =>
	{
		for (let ix of lh)
        {
			if (!ix.includes(wm))
				return false;
        }

		return true;
    });
}

mh.wlc = function(fo)
{
	return fo.filter(
		(value, fq) => fo.indexOf(value) == fq
	);
}

mh.ehe = function(sl, pzi)
{
	return sl.join(pzi || '.');
}

mh.kwk = function(ai, trs)
{
	if (trs)
	{
		ai = ai.replace(fw[4], '\n');

		ai = ai.replace(fw[5], ' ');
	}
	else {
		ai = ai.replace(fw[6], ' ');

	}

	return ai.trim();
}

mh.imk = function(ai, lt, bj)
{
	return ai.replace(lt, (ilx, odh) =>
	{
		return ilx.replace(odh, bj(odh));
	});
}

mh.iwu = function(hld)
{
	return fw[7].test(hld);
}

mh.jyb = function(ai)
{
	return !fw[8].test(ai);
}

mh.lch = function(ai)
{
	return ai.toLowerCase().replace(fw[9], mh.fn);
}

mh.qkl = function(ai)
{
	return ai == ai.toUpperCase();
}

mh.ieg = function(ai)
{
	return ai == ai.toLowerCase();
}

mh.kfx = function(ai)
{
	return mh.ieg(ai) || mh.qkl(ai);
}

mh.qsn = function(xz, ai)
{
	return mh.bi(xz, ai).length;
}

mh.wmg = function(ai)
{
	return mh.qsn(fw[10], ai) + 1;
}

mh.hjs = function(ai)
{
	return ai ? ai.split(' ') : [];
}

mh.zvq = function(i, ai)
{
	return ai.substring(0, i) + 'x' + ai.substring(++i);
}

mh.lpd = function(s)
{
	return String(s).replace(fw[11], '\\$1').replace(fw[12], '\\x08');
}

mh.vnd = function(lt, gf, szn)
{
	if (gf.constructor === Array)
	{
		gf = gf.map(mh.lpd);
	}
	else {
		gf = mh.lpd(gf);
	}

	lt = mh.ox(lt, gf);

	return new RegExp(lt, szn);
}

mh.bed = new function()
{
	const dp = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const uwi = (tau) => new Date(tau).getTime() / 1000;

	return (tau) =>
	{
		const kuh = mh.zu() - uwi(tau);

		for (let [aq, txw] of dp)
		{
			let plo = kuh / txw;

			if (plo >= 1)
			{
				plo = Math.floor(plo);

				return mh.ox('%s %s%s ago', [plo, aq, (plo > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

mh.tyh = function(fo)
{
	return fo.reduce((a, b) => a + b, 0);
}

mh.irv = function(fo)
{
	return mh.pvp(mh.tyh(fo), fo.length);
}

mh.pvp = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const pjn = {
	git(rn, jtd, zew)
	{
		return this.rki('GET', rn, jtd, null, zew);
	},

	pcp(rn, jtd, kx, zew)
	{
		return this.rki('POST', rn, jtd, kx, zew);
	},

	rki(xp, rn, jtd, kx, zew)
	{
		if (jtd)
		{
			rn = mh.mo(rn, jtd);
		}

		if (kx)
		{
			kx = this.wcq(kx);
		}

		return new Promise(zt =>
		{
			let zm = new XMLHttpRequest;

			if (zew != Infinity)
			{
				let mdw = 0;

				zm.ontimeout = (e) =>
				{
					if (++mdw < 3)
					{
						return this.wuz(zm, xp, rn, kx);
					}

					zm.onerror(e);
				}

				zm.timeout = 5000;
			}

			zm.onload = zm.onerror = (e) => zt(
				new hm(zm, e.type)
			);

			this.wuz(zm, xp, rn, kx);
		});
	},

	wuz(zm, xp, rn, kx)
	{
		zm.open(xp, rn);
		zm.send(kx);
	},

	wcq(yl)
	{
		let tvo = new FormData;

		for (let gj in yl)
		{
			tvo.append(gj, yl[gj]);
		}

		return tvo;
	}
}

class qhy
{
	constructor(yvx)
	{
		this.map = {};

		this.lak = Object.getOwnPropertyNames(Object.prototype);

		this.jyj = yvx;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(gj)
	{
		gj = this.ilb(gj);

		return this.jwb(this.map[gj]);
	}

	set(gj, dc)
	{
		gj = this.ilb(gj);

		this.map[gj] = this.jwb(dc);
	}

	vyz(gj)
	{
		return this.ilb(gj) in this.map;
	}

	xcn(gj)
	{
		!this.vyz(gj) && this.set(gj);
	}

	ilb(gj)
	{
		if (this.lak.includes(gj))
		{
			return gj + '*';
		}

		return gj;
	}

	jwb(dc)
	{
		if (dc == undefined && this.jyj)
		{
			return new this.jyj;
		}

		return dc;
	}
}

class ikt
{
	constructor(ldc, dvc)
	{
		this.vq = ldc.vq;

		this.ylg = ldc.ylg;

		this.dvc = dvc;

		this.mzh = [];

		this.mvw = new sj;

		this.zwu(ldc);
	}

	zwu(cw)
	{
		if (this.ylg == cw.ylg)
		{
			cw.scr = true;
		}

		this.mvw.push(cw.ylg);

		this.mzh.push(cw);
	}

	onx(vq)
	{
		return this.mvw.includes(vq);
	}

	fgs()
	{
		this.qfj.forEach(vmu => vmu.hidden = true);
	}

	ntv(px, sb)
	{
		let txm = px;

		while (txm.cqh)
		{
			txm = txm.cqh;
		}

		this.ytf(txm, sb);

		px.um(sb);
	}

	ytf(a, b)
	{
		const qe = this.mzh.indexOf(b);
		const vb = this.mzh.indexOf(a) + 1;

		mh.ugb(qe, vb, this.mzh);
	}

	get length()
	{
		return this.mzh.length;
	}

	get ais()
	{
		return this.mvw.length;
	}

	get ldc()
	{
		return this.mzh[0];
	}

	get whw()
	{
		return this.mzh[1];
	}

	get lsl()
	{
		return this.length > 1;
	}

	get qfj()
	{
		return this.mzh.slice(1);
	}

	get hds()
	{
		return this.mzh.length - 1;
	}

	get hidden()
	{
		return this.ldc.hidden;
	}

	set hidden(hn)
	{
		this.ldc.hidden = hn;
	}

	get sf()
	{
		const sf = mh.oif(this, true);

		sf.mzh = this.mzh.map(mh.oif);

		return sf;
	}
}

class hbe
{
	constructor(puo)
	{
		this.pz = hbe.lkr(puo);
		this.dx = hbe.yak(this.pz);
	}

	static yak(pz)
	{
		return ['he','ar'].includes(pz) ? 'rtl' : 'ltr';
	}

	static lkr(ai)
	{
		let gmy = .57 * mh.wmg(ai);

		switch (true)
		{
			case gmy < mh.qsn(fw[13], ai): return 'en';

			case gmy < mh.qsn(fw[14], ai): return 'ar';

			case gmy < mh.qsn(fw[15], ai): return 'he';

			default: return '';
		}
	}

	static get cwt()
	{
		if (!this.wal)
		{
			this.wal = navigator.languages.map(pz => pz.slice(0, 2));
		}

		return this.wal;
	}
}

class fqb
{
	constructor(ton)
	{
		const _ = ton.items[0];

		this.hcw = _.snippet.channelId;
		this.qo = _.statistics.commentCount;

		if (this.qo == undefined)
		{
			this.qo = -1;
		}
		else {
			this.qo = +this.qo;
		}
	}
}

class qiq
{
	constructor(ton)
	{
		const _ = ton.snippet;

		this.vq = ton.id;
		this.yo = _.videoId;
		this.ylg = _.authorChannelId.value;
		this.vt = _.authorProfileImageUrl;
		this.ftn = _.authorDisplayName;
		this.age = _.textOriginal;
		this.szr = _.publishedAt;
		this.mie = _.likeCount;
		this.scr = false;
		this.gk = false;
	}
}

class anc
{
	constructor(qiq)
	{
		Object.assign(this, qiq);

		this.tpa = '';
		this.nwn = '';
		this.qs = {};
		this.children = [];
		this.px = null;
		this.xgs = null;
		this.xqa = null;
		this.ohu = null;
		this.hidden = false;

		this.uyp();
		this.xml();
		this.slb();
		this.egl();
		this.gjr();
	}

	uyp()
	{
		this.tpa = this.age.replace(fw[16], '');

		delete this.age;
	}

	gjr()
	{
		this.nwn = abe.cwj(this.tpa);

		this.ohu = new hbe(this.nwn);

		if (this.ohu.pz == 'en')
		{
			this.nwn = abe.glm(this.nwn);
		}
	}

	xml()
	{
		if (!this.tpa.includes('/'))
			return;

		this.tpa = this.tpa.replace(fw[17], (rn) =>
		{
			let x;

			const hpy = woe.zsf(rn);

			if (hpy) {
				if (hpy.yo == this.yo)
				{
					x = new be(this.yo, hpy.cq);
				}
				else {
					x = new nj(hpy);
				}
			}
			else {
				x = new sxz(rn);
			}

			return this.gzv(x);
		});
	}

	slb()
	{
		if (!this.tpa.includes('#'))
			return;

		this.tpa = this.tpa.replace(fw[18], (are) =>
		{
			const x = new afw(are);

			return this.gzv(x);
		});
	}

	egl()
	{
		if (!this.tpa.includes(':'))
			return;

		this.tpa = this.tpa.replace(fw[19], (gt) =>
		{
			const x = new be(this.yo, gt);

			return this.gzv(x);
		});
	}

	gzv(wm)
	{
		this.qs[wm.vq] = wm;

		return wm.vq;
	}

	gu()
	{
		this.hidden = true;

		for (let sb of this.children)
		{
			sb.gu();
		}
	}

	um(sb)
	{
		this.children.push(sb);

		sb.px = this;
	}

	get cqh()
	{
		return mh.hx(this.children);
	}

	get clo()
	{
		return this.children.some(sb => !sb.hidden);
	}
}

class dvo
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.rx = x.rx;
		this.qs = x.qs;
		this.yo = x.yo;
		this.vq = x.vq;
		this.fj = mh.bs(x.px, 'vq');
		this.ylg = x.ylg;
		this.vt = x.vt;
		this.ybv = x.ybv;
		this.ol = x.ol;
		this.szr = x.szr;
		this.scr = x.scr;
		this.gk = x.gk;
		this.pz = x.ohu.pz;
		this.dx = x.ohu.dx;
		this.eaw = '';
		this.oed = '';

		this.szr = mh.bed(this.szr);

		this.eaw = mh.ox('https://www.youtube.com/channel/%s', this.ylg);

		this.oed = mh.ox('https://www.youtube.com/watch?v=%s&lc=%s', [this.yo, this.vq]);
	}
}

class mku
{
	constructor(wx, hz)
	{
		this.vq = mh.mr();

		this.wx = wx;

		this.hz = hz;
	}
}

class be extends mku
{
	constructor(yo, t)
	{
		super(null, 'be');

		let wx, yt;

		if (mh.xk(t))
		{
			wx = mh.qh(t);
			yt = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			wx = t;
			yt = mh.eu(t);
		}

		this.yo = yo;
		this.cq = yt;
		this.wx = wx;
	}
}

class nj extends mku
{
	constructor(yl)
	{
		super('youtube.com', 'nj');

		this.yo = yl.yo;
		this.cq = yl.cq;
	}
}

class sxz extends mku
{
	constructor(rn)
	{
		super('', 'lz');

		this.rn = rn;

		this.rdl = rn.startsWith('https');

		this.wx = woe.pmu(rn) || rn;
	}
}

class afw extends mku
{
	constructor(eka)
	{
		super(eka, 'lz');

		this.rn = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(eka);
	}
}

class mke extends mku
{
	constructor(sue, hcw)
	{
		super(sue, 'lz');

		this.rn = 'https://www.youtube.com/channel/' + hcw;
	}
}

class tcb
{
	constructor(ai)
	{
		this.emf = '';
		this.gai = '';
		this.lso = [];
		this.dem = false;
		this.pun = false;

		this.cwj(ai);
		this.sys();
		this.qmf();
	}

	get afl()
	{
		return this.emf;
	}

	get length()
	{
		return this.emf.length;
	}

	get wfx()
	{
		return mh.qkl(this.gai);
	}

	toLowerCase()
	{
		this.emf = this.emf.toLowerCase();
	}

	xym(hld)
	{
		return this.lso.includes(hld);
	}

	ucz(gui)
	{
		for (let hld of gui)
		{
			if (this.xym(hld)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.emf[this.length + i] : this.emf[i];
	}

	mfp(n)
	{
		this.emf = this.emf.slice(0, -n);
	}

	replace(xz, bj)
	{
		this.emf = this.emf.replace(xz, bj);
	}

	cwj(ai)
	{
		this.emf = mh.kwk(ai, 'wjs');

		this.replace(fw[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(fw[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (mh.jyb(x))
				{
					return m.length > 3 && !fw[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	sys()
	{
		let mnf = mh.wlc([...this.emf]).join('');

		this.gai = mnf.slice(0, 16);

		this.lso = mh.bi(fw[23], mnf);

		this.dem = this.lso.some(this.loa);
	}

	qmf()
	{
		if (!this.dem) return;

		for (let i = 0, k = 0, n = this.lso.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.lso[i] + this.lso[k];

				this.replace(mh.vnd('(%s)+', x, 'g'), x);
			}
		}
	}

	loa(hld)
	{
		return hld.charCodeAt(0) > 255;
	}

	tpw(hld)
	{
		return hld == '\u{200D}';
	}
}

class ndo
{
	constructor(se)
	{
		se.sort(mh.uq);

		const pnb = se.slice(0, Math.floor(se.length / 2));
		const fhu = se.slice(Math.round(se.length / 2));

		this.mbj = mh.ki(pnb);
		this.yzb = mh.ki(fhu);
		this.alf = this.yzb - this.mbj;

		this.se = se;
	}

	erz(n)
	{
		const ev = this.mbj - 1.5 * this.alf;
		const bk = this.yzb + 1.5 * this.alf;

		return n < ev || bk < n;
	}

	hfq()
	{
		return this.se.filter(
			n => !this.erz(n)
		);
	}
}

class xi
{
	constructor()
	{
		this.vq = chrome.runtime.id;

		this.ypt = chrome.runtime.getManifest().version;

		this.ka = new Promise(zt => this.sjn = zt);

		this.ka.then(
			_ => this.tg()
		);

		this.xt();

		chrome.runtime.onInstalled.addListener(
			hpy => this.wro(hpy)
		);

		chrome.browserAction.onClicked.addListener(
			_ => cve.dry('fs')
		);

		chrome.alarms.onAlarm.addListener(
			hpy => this.fdz('idf', hpy)
		);

		chrome.runtime.onMessageExternal.addListener(
			ga => this.fdz('khz', ga)
		);
	}

	async xt()
	{
		if (await this.bzh == this.ypt)
		{
			const ah = await md.get(['0', '1']);

			this.nlh = new lm(ah[0], 0);

			zr = new no(ah[1], 1);

			if (zr.vg)
			{
				kw.fu.yjh(zr.so);
			}

			this.sjn(1);
		}
	}

	async hu()
	{
		const qbl = await this.sm('/html/view.html');

		const la = (
			this.ypt < this.dkm
		);

		const bc = (
			!zr.vg || !zr.ql
		);

		return {
			hn: {
				la, bc
			},
			qa: qbl
		};
	}

	async sy(so)
	{
		if (fw[24].test(so))
		{
			const exm = await kw.fu.ozd(so);

			if (exm)
			{
				const zr = await kw.id.svc(so);

				if (zr)
				{
					await this.rk(zr);

					ay.fz('uw');

					return true;
				}
			}
		}

		return false;
	}

	uoy(eif)
	{
		zr.bl = eif;

		ay.fz('nh');
	}

	oj()
	{
		if (zr.vg)
		{
			zr.so = mh.zvq(19, zr.so);
		}
	}

	rk(lfm)
	{
		zr = new no(lfm, '1');

		return zr.oh();
	}

	async sm(zj)
	{
		const kyh = await pjn.git(chrome.runtime.getURL(zj));

		return kyh.xu;
	}

	async fxy(hpy)
	{
		this.oqg();

		if (hpy.reason == 'install')
		{
			await this.mcj();
		}
		else {
			if (hpy.previousVersion < '')
			{

			}
		}

		await this.zlm();

		await this.xt();
	}

	async wro(hpy)
	{
		await this.fxy(hpy);

		switch (hpy.reason)
		{
			case 'install':
				this.ruk();
			break;

			case 'update':
				this.rpv();
			break;
		}

		cve.xuo();
	}

	ruk()
	{

	}

	rpv()
	{

	}

	async fdz(cvs, xu)
	{
		await this.ka;

		switch (cvs)
		{
			case 'idf':
				return this.cgx(xu);

			case 'khz':
				return this.mlb(xu);
		}
	}

	cgx(idf)
	{
		const moe = idf.name;

		switch (moe)
		{
			case 'asd':
				this.asd();
		}
	}

	mlb(ga)
	{
		return new esa().ml(ga);
	}

	async asd()
	{
		const v = await kw.id.wil();

		if (v)
		{
			this.boq(v);
		}
	}

	tg()
	{
		if (zr.vg)
		{
			if (mh.cr() || !zr.eq)
			{
				this.oj();
			}
		}
	}

	get bzh()
	{
		return md.get('schemaVersion');
	}

	zlm()
	{
		return md.set('schemaVersion', this.ypt);
	}

	get dkm()
	{
		return this.nlh.latestVersion;
	}

	boq(v)
	{
		this.nlh.set('latestVersion', v);
	}

	mcj()
	{
		return md.set({
			0: {
				latestVersion: this.ypt
			},
			1: {},
		});
	}

	oqg()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('asd', {periodInMinutes:240});
	}
}

class esa
{
	ml(ga)
	{
		ga = mh.tcd(ga);

		switch (ga.issuer)
		{
			case 'authServer':
				return this.fwu(ga.data);
		}
	}

	fwu(xu)
	{
		if (xu.id == 'pa')
		{
			zs.uoy(xu.token);
		}
	}
}

class rky
{
	constructor()
	{
		this.id = new vfr;

		this.fu = new mxy;
	}
}

class vfr
{
	constructor()
	{
		this.ise = 'https://api.lett.app/cs';
	}

	async svc(so)
	{
		const kyh = await this.get('/auth', {
			apiKey:so,
			token:zs.vq
		});

		if (kyh.ds)
		{
			return kyh.xu;
		}
	}

	async wil()
	{
		const kyh = await this.get('/update');

		if (kyh.ds)
		{
			return kyh.xu.version;
		}
	}

	async ld(tj)
	{
		const yl = {
			extId:zs.vq,
			apiKey:zr.so,
			amount:tj,
		};

		const kyh = await this.get('https://api.lett.app/donate/accept', yl, Infinity);

		if (kyh.ds)
		{
			return kyh.xu.url;
		}
	}

	async get(qyg, yl, zew)
	{
		if (qyg[0] == '/')
		{
			qyg = this.ise + qyg;
		}

		const kyh = await pjn.git(qyg, yl, zew);

		if (!kyh.ds && !kyh.tz)
		{
			kyh.qu(kyh.xu.error);
		}

		return kyh;
	}
}

class qmz
{
	constructor()
	{
		this.ise = 'https://www.googleapis.com/youtube/v3';
	}

	yjh(so)
	{
		this.gj = so;
	}

	async ozd(so)
	{
		this.yjh(so);

		const kyh = await this.itl('jNQXAC9IVRw');

		return kyh.ds;
	}

	kau(yo)
	{
		return this.pe({
			videoId:yo
		});
	}

	fnp(yo, ztc)
	{
		return this.ue({
			videoId:yo,
			searchTerms:ztc
		});
	}

	ijr(hcw, ztc)
	{
		return this.ue({
			allThreadsRelatedToChannelId:hcw,
			searchTerms:ztc
		});
	}

	async itl(yo)
	{
		const kyh = await this.qsm({
			id:yo,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (kyh.ds)
		{
			try {
				kyh.xu = new fqb(kyh.xu);
			}
			catch (e) {
				kyh.qu('gp');
			}
		}

		return kyh;
	}

	async get(qyg, yl)
	{
		const kyh = await pjn.git(this.ise + qyg, yl);

		if (!kyh.ds && !kyh.tz)
		{
			const iji = this.lje(kyh.xu);

			kyh.qu(iji);
		}

		return kyh;
	}

	async ue(yl)
	{
		const kyh = await this.get('/commentThreads', yl);

		if (kyh.ds)
		{
			kyh.xu = this.zij(kyh.xu);
		}

		return kyh;
	}

	async pe(yl)
	{
		let kyh, sl = [];

		do {
			kyh = await this.get('/commentThreads', yl);

			if (kyh.ds)
			{
				const sub = this.zij(kyh.xu);

				sl.push(sub);

				yl.pageToken = kyh.xu.nextPageToken;
			}
		}
		while (kyh.ds && yl.pageToken)

		kyh.xu = sl.flat();

		return kyh;
	}

	qsm(yl)
	{
		return this.get('/videos', yl);
	}

	szl(xfr)
	{
		try {
			return new qiq(xfr);
		}
		catch (e) {
			return null;
		}
	}

	pgw(xfr)
	{
		let qfj = [];

		try {
			if (xfr.replies) {
				qfj = xfr.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return qfj;
	}

	lje(myp)
	{
		try {
			return myp.error.errors[0].reason;
		}
		catch (e) {
			return myp.xq || 'ug';
		}
	}

	zij(xfr)
	{
		const sub = [];

		try {
			for (let wm of xfr.items)
			{
				const hq = this.kct(wm);

				if (hq) {
					sub.push(hq);
				}
			}
		}
		catch (e) {
		}

		return sub;
	}

	kct(xfr)
	{
		try {
			const med = xfr.snippet;

			if (med.videoId)
			{
				let cw = this.szl(med.topLevelComment);

				if (cw)
				{
					const hq = new ikt(cw, med.totalReplyCount);

					if (hq.dvc <= 5)
					{
						for (let vmu of this.pgw(xfr))
						{
							cw = this.szl(vmu);

							if (cw) {
								hq.zwu(cw);
							}
						}
					}

					return hq;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class mxy extends qmz
{
	pe(yl)
	{
		this.yay(yl);

		return super.pe(yl);
	}

	ue(yl)
	{
		this.yay(yl);

		return super.ue(yl);
	}

	async get(qyg, yl)
	{
		yl.key = this.gj;

		let kyh, i = 3;

		while (i--)
		{
			kyh = await super.get(qyg, yl);

			if (kyh.xq != 'processingFailure')
				break;
		}

		return kyh;
	}

	yay(yl)
	{
		Object.assign(yl, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class woe
{
	static zsf(rn)
	{
		const yo = mh.as(fw[25], rn);

		if (yo)
		{
			let cq = mh.as(fw[26], rn) || 0;

			if (!mh.xk(cq))
			{
				cq = mh.bi(fw[27], cq).join(':');

				cq = mh.eu(cq);
			}

			return {yo, cq};
		}
	}

	static pmu(rn)
	{
		return mh.as(fw[28], rn).replace('www.', '');
	}
}

class prd
{
	async dry(ir)
	{
		const hni = await this.tdn();

		if (hni && hni.url)
		{
			this.hw(hni.id, 'ir', ir);
		}
	}

	xuo()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, cve =>
		{
			for (let hni of cve)
			{
				chrome.tabs.reload(hni.id);
			}
		});
	}

	tdn()
	{
		return new Promise(zt =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, cve =>
			{
				zt(cve[0]);
			});
		});
	}

	hw(qfs, ps, xu)
	{
		chrome.tabs.sendMessage(qfs, new ag(ps, xu));
	}
}

class rju
{
	constructor(rv, lwr)
	{
		this.vq = lwr.yo;

		this.lwr = lwr;

		this.mdn = new ykb(rv);

		this.sl = {};

		for (let yjq of ['nzx', 'kte'])
		{
			this[yjq] = new qhy(Array);
		}

		for (let yjq of ['drj', 'xye', 'dhu'])
		{
			this[yjq] = [];
		}

		for (let hq of rv)
		{
			this.ph(hq);
			this.igy(hq);
		}
	}

	wln(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.nio();

			case ':all':
				return this.ohg();

			case ':creator':
				return this.gdq();

			case ':link':
				return this.qfl();

			case ':reply':
				return this.jwl();
		}

		if (fw[29].test(q))
		{
			const at = this.uip(q);

			switch (at.length)
			{
				case 1: return this.udb(at[0]);

				case 2: return this.bqn(at[0], at[1]);
			}
		}

		return this.wzv(q);
	}

	ohg()
	{
		return this.crg(
			Object.keys(this.sl)
		);
	}

	nio()
	{
		return this.crg(this.kte.values);
	}

	gdq()
	{
		return this.crg(this.drj);
	}

	qfl()
	{
		return this.crg(this.dhu);
	}

	jwl()
	{
		return this.crg(this.xye);
	}

	bqn(vm, gtl)
	{
		const jph = mh.eu(vm);
		const bxg = mh.eu(gtl);

		const uhp = [];

		for (let at of this.kte.keys)
		{
			if (jph <= at && at <= bxg)
			{
				uhp.push(
					this.kte.get(at)
				);
			}

			if (bxg < at) break;
		}

		return this.crg(uhp);
	}

	ph(wm)
	{
		this.sl[wm.vq] = wm;
	}

	kix(vq)
	{
		return this.sl[vq].sf;
	}

	crg(uhp)
	{
		uhp = uhp.flat();

		return mh.wlc(uhp).map(
			vq => this.kix(vq)
		);
	}

	wzv(ai)
	{
		let zro = [];

		let iu = this.art(ai);

		let uhp = iu.map(
			k => this.select('nzx', k)
		);

		uhp = uhp.filter(x => x.length);

		if (uhp.length)
		{
			zro = mh.bko(...uhp);

			if (zro.length < 1)
			{
				uhp.sort((a, b) => a.length - b.length);

				zro = uhp[0];
			}
		}

		return this.crg(zro);
	}

	udb(gt)
	{
		let nk = mh.eu(gt);

		let uhp = [
			this.select('kte', nk)
		];

		for (let i = nk; i--;)
		{
			let x = this.select('kte', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			uhp.push(x);
		}

		for (let i = nk; i++;)
		{
			let x = this.select('kte', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			uhp.push(x);
		}

		return this.crg(uhp);
	}

	igy(hq)
	{
		const wx = hq.mzh.map(cw => cw.age).join(' ');

		this.xml(wx, hq.vq);

		this.wmk(wx, hq.vq);

		this.edh(wx, hq.vq);

		this.pgw(hq);
	}

	pgw(hq)
	{
		if (hq.length > 1)
		{
			this.xye.push(hq.vq);
		}

		if (hq.onx(this.lwr.hcw))
		{
			this.drj.push(hq.vq);
		}
	}

	xml(wx, vq)
	{
		wx.includes('http') && this.dhu.push(vq);
	}

	wmk(wx, vq)
	{
		const nqn = this.uip(wx);

		for (let at of nqn)
		{
			at = mh.eu(at);

			if (0 <= at && at < this.lwr.iq)
			{
				this.seu('kte', at, vq);
			}
		}
	}

	edh(wx, vq)
	{
		this.art(wx).forEach(
			eo => this.seu('nzx', eo, vq)
		);
	}

	seu(yjq, gj, dc)
	{
		this[yjq].xcn(gj);

		this[yjq].get(gj).push(dc);
	}

	select(yjq, gj)
	{
		return this[yjq].get(gj);
	}

	art(ai)
	{
		ai = abe.cwj(ai);

		ai = abe.glm(ai);

		ai = mh.hjs(ai);

		return mh.wlc(ai);
	}

	uip(ai)
	{
		return mh.bi(fw[30], ai);
	}
}

class ykb
{
	constructor(rv)
	{
		this.mdn = {};

		this.wzi = {};

		this.fst = {};

		for (let hq of rv)
		{
			this.wrb(hq);
		}

		this.bqw();
	}

	cyv(svg)
	{
		return this.wzi.wln(svg);
	}

	zyi(vq)
	{
		return this.mdn[vq];
	}

	wrb(hq)
	{
		for (let cw of hq.mzh)
		{
			this.zkv(cw.ylg, cw.age);
			this.qki(cw.ylg, cw.ftn);
		}
	}

	bqw()
	{
		this.wzi = new kzp(this.wzi);

		for (let vq in this.fst)
		{
			const fst = this.fst[vq];

			if (fst.length > 1)
			{
				const dzm = fst.filter(
					(wx, i) => wx.length < 28 || i == fst.indexOf(wx)
				);

				this.zyi(vq).ghn = (fst.length != dzm.length);
			}
		}
	}

	qki(vq, ypc)
	{
		let xgs = new icz(vq, ypc);

		this.mdn[vq] = xgs;

		this.wzi[ypc] = xgs;
	}

	zkv(vq, wx)
	{
		this.fst[vq] = this.fst[vq] || [];

		this.fst[vq].push(wx);
	}
}

class icz
{
	constructor(vq, ypc)
	{
		this.vq = vq;
		this.ypc = ypc;
		this.ghn = false;
		this.nux = false;
	}

	get ybv()
	{
		return this.nux ? this.ypc : this.mnz;
	}

	get qly()
	{
		return !this.nux && this.ghn;
	}

	get mnz()
	{
		if (!this.dai)
		{
			this.dai = vlq.eat(this.ypc);
		}

		return this.dai;
	}
}

class kzp
{
	constructor(kb)
	{
		this.keys = Object.keys(kb).sort(this.qws);

		this.suv = this.keys.map(gj => kb[gj]);

		this.keys = this.keys.map(mh.za);
	}

	wln(raf)
	{
		raf = raf.toLowerCase();

		let sl = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(raf))
			{
				do {
					sl.push(this.suv[i])
				}
				while (++i < n && this.keys[i].startsWith(raf));

				break;
			}
		}

		return sl.sort(this.wya);
	}

	wya(a, b)
	{
		return b.ypc.length - a.ypc.length;
	}

	qws(a, b)
	{
		return a.localeCompare(b);
	}
}

const cek = {
	uov: {
		jvq(puy, eum = 0)
		{
			return +puy || eum;
		},

		hds(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		laz(n)
		{
			return mh.pvp(1, n);
		},
	},

	igy(rv, vbt, lwr)
	{
		this.ceh = lwr.hcw;

		this.wln = lwr.wln;

		this.lke = new zef;

		this.kte = new mnq;

		this.cam = new vaz;

		this.gzk = {};

		mh.gn(
			vbt.zyi(this.ceh), 'nux', true
		);

		return this.sys(rv, vbt);
	},

	sys(rv, vbt)
	{
		const uxm = ('you are not but for the thi and that was').split(' ');

		const sfa = {
			hds: this.uov.hds,
			cml: this.uov.laz,
			jvq: this.uov.jvq,
		};

		const bgz = {
			ptr: 1
		};

		const ufv = {
			nzx: .5,
			cml: .2,
			eyl: .2,
			gcu: .0,
		};

		if (this.wln.lvx)
		{
			Object.assign(ufv, {
				gcu:.3,
			});
		}

		let uhp = [];

		rv = rv.filter(
			hq => !uhp.includes(hq.ylg) && uhp.push(hq.ylg)
		);

		for (let hq of rv)
		{
			Object.assign(hq,
			{
				sq: {
					kte: [],
					iu: [],
					epl: 0,
					rqh: 0,
					wsr: false,
					eyl: false,
				},
				rvb: {
					nzx: 0,
					cml: 0,
					eyl: 0,
					gcu: 0,
					gqw: 0,
				},
			});

			const sq = hq.sq;

			for (let i = 0; i < hq.length; i++)
			{
				const cw = hq.mzh[i] = new anc(hq.mzh[i]);

				cw.xgs = vbt.zyi(cw.ylg);

				cw.gk = this.gk(cw.ylg);

				if (i > 0)
				{
					cw.rx = true;

					if (cw.scr && hq.ais > 1)
					{
						sq.wsr = true
					}

					if (cw.gk)
					{
						sq.eyl = true;
					}
				}

				if (cw.nwn == '' || cw.xgs.qly)
				{
					!cw.xgs.nux && cw.gu();
				}
			}

			const ldc = hq.ldc;

			if (this.oxn(ldc.tpa))
			{
				hq.hidden = true;

				continue;
			}

			sq.iu = mh.hjs(ldc.nwn);
			sq.epl = sq.iu.length;
			sq.iu = mh.wlc(sq.iu);
			sq.rqh = sq.iu.length;

			for (let x in ldc.qs)
			{
				x = ldc.qs[x];

				if (x.vq == ldc.tpa)
				{
					hq.hidden = true;
				}

				if (x instanceof be)
				{
					sq.kte.push(x.cq);

					mh.gar(x.vq, this.kte.tpq(x.cq), sq.iu);
				}
			}

			for (let eo of sq.iu)
			{
				if (eo.length > 2 && !uxm.includes(eo))
				{
					this.lke.mqj(eo);
				}
			}
		}

		for (let hq of rv)
		{
			if (hq.hidden)
				continue;

			const rvb = hq.rvb;

			for (let eo of hq.sq.iu)
			{
				rvb.nzx += this.lke.get(eo);
			}

			rvb.nzx /= hq.sq.epl;

			rvb.cml = hq.sq.kte.length;

			bgz.ptr = Math.max(bgz.ptr, rvb.nzx);
		}

		for (let hq of rv)
		{
			const rvb = hq.rvb;

			rvb.nzx = ufv.nzx * mh.pvp(rvb.nzx, bgz.ptr);
			rvb.cml = ufv.cml * sfa.cml(rvb.cml);
			rvb.eyl = ufv.eyl * sfa.jvq(hq.sq.eyl);
			rvb.gcu = ufv.gcu * sfa.jvq(hq.sq.wsr, .5);

			rvb.gqw = mh.tyh(Object.values(rvb));
		}

		rv.sort(
			(a, b) => b.rvb.gqw - a.rvb.gqw
		);

		for (let i = 0, n = rv.length; i < n; i++)
		{
			const a = rv[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = rv[k];

				if (!b.hidden && !b.lsl)
				{
					const rje = mh.bko(a.sq.iu, b.sq.iu);
					const jwc = (a.sq.iu.length + b.sq.iu.length) / 2;

					if (rje.length == b.sq.epl)
					{
						b.hidden = true;
					}

					if (rje.length >= .5 * jwc)
					{
						const bxg = a.sq.kte[0] || 0;
						const nrc = b.sq.kte[0] || 0;

						if (this.kte.nda(bxg, nrc))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < rv.length; i++)
		{
			const hq = rv[i];

			if (hq.vqg)
				break;

			let tsl = false;

			if (hq.sq.rqh == 1)
			{
				tsl = true;
			}

			if (i == 0 && !hq.lsl)
			{
				const mby = this.wln.ai.toLowerCase();
				const tes = hq.ldc.nwn;

				if (mby == tes)
				{
					tsl = true;
				}
			}

			if (hq.lsl && hq.ais == 1)
			{
				const jph = new Date(hq.ldc.szr);
				const bxg = new Date(hq.whw.szr);

				if (.001 * (bxg - jph) < 300)
				{
					tsl = true;
				}
			}

			if (tsl)
			{
				mh.xwe(i, rv);

				hq.vqg = true;
				i--;
			}
		}

		for (let hq of rv)
		{
			this.cam.gvo(hq.vq, hq.ylg);

			for (let ylg of hq.mvw)
			{
				this.cam.jdm(ylg, hq.vq)
			}
		}

		for (let hq of rv)
		{
			if (hq.hds == 0) continue;

			for (let vmu of hq.qfj)
			{
				const wx = vmu.tpa;

				const tny = mh.as(fw[31], wx);

				for (let xgs of vbt.cyv(tny))
				{
					if (this.ekw(xgs).test(wx))
					{
						vmu.xqa = xgs;
						break;
					}
				}
			}

			if (hq.length > 2)
			{
				let mdn = [], sl = [], dsh = false;

				const n = hq.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					if (dsh)
					{
						mdn = [];
						sl = [];
						dsh = false;
					}

					const vmu = hq.mzh[i];
					const zr = vmu.xgs;

					if (mh.hx(mdn) == zr) {
						i++;
					}
					else if (mdn.includes(zr) || mh.wlc(mdn).length < 2)
					{
						mdn.push(zr);
						sl.push(vmu);

						if (i + 1 < n)
							continue;
					}

					if (sl.length > 2)
					{
						let exm = !sl.some(vmu => vmu.xqa && !mdn.includes(vmu.xqa));

						if (exm)
						{
							sl.forEach(vmu =>
								vmu.xqa = mdn.find(xgs => xgs != vmu.xgs)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						dsh = true;
					}
				}
			}

			for (let gmp, i = 1; i < hq.length; i++)
			{
				const vmu = hq.mzh[i];

				if (!vmu.xqa)
				{
					if (gmp && gmp.xqa == vmu.xgs)
					{
						vmu.xqa = gmp.xgs;

						hq.ntv(gmp, vmu);
					}
				}
				else {
					let znz;

					const uwr = vmu.xqa;

					for (let k = i - 1; k >= 0; k--)
					{
						const gmp = hq.mzh[k];

						if (k == 0)
						{
							if (gmp.xgs == uwr)
							{
								znz = '';
							}

							break;
						}

						if (gmp.xgs == uwr)
						{
							hq.ntv(gmp, vmu);

							if (gmp.children.length == 1)
							{
								znz = '';
							}

							break;
						}
					}

					if (znz == null)
					{
						const db = new mke(uwr.ybv, uwr.vq);

						znz = vmu.gzv(db) + ' ';
					}

					vmu.tpa = vmu.tpa.replace(
						this.ekw(uwr), znz
					);
				}

				gmp = vmu;
			}

			for (let i = 1, n = hq.length; i < n; i++)
			{
				const vmu = hq.mzh[i];

				if (vmu.px || vmu.children.length)
				{
					mh.xwe(i, hq.mzh);
					i--;
					n--;
				}
			}

			for (let zfb = false, i = 1; i < hq.length; i++)
			{
				let vmu = hq.mzh[i];

				zfb = (zfb || !vmu.scr);

				if (vmu.clo)
				{
					continue;
				}

				if (!zfb)
				{
					const wx = vmu.tpa;

					if (hq.length > 2 || ['+','@'].includes(wx[0]) || wx.length < 10)
					{
						vmu.gu();
					}
				}

				vmu.xqa && !hq.onx(vmu.xqa.vq) && vmu.gu();

				this.jgz(vmu.ylg, hq.vq) && vmu.gu();
			}
		}

		rv = rv.map(hq =>
		{
			if (hq.ldc.hidden)
			{
				return [];
			}

			const mzh = [];

			for (let i = 0; i < hq.length; i++)
			{
				const cw = hq.mzh[i];

				cw.ol = vlq.faf(cw.tpa);

				cw.ybv = cw.xgs.ybv;

				if (cw.ol.length < 2)
				{
					if (i == 0)
						return [];

					cw.gu();
				}

				mzh.push(
					new dvo(cw)
				);
			}

			return mzh;
		});

		return rv.filter(hq => hq.length > 0);
	},

	oxn(ai)
	{
		return ai.length > 500 || mh.qsn(fw[32], ai) > 3;
	},

	gk(ylg)
	{
		return this.ceh == ylg;
	},

	jgz(ylg, kaf)
	{
		if (this.gk(ylg))
		{
			return false;
		}

		for (let kcf of this.cam.ulz(ylg))
		{
			if (kcf == kaf)
			{
				return false;
			}

			if (!this.cam.mqy(kcf, ylg))
			{
				return true;
			}
		}

		return false;
	},

	ekw(xgs)
	{
		const vq = xgs.vq;

		if (vq in this.gzk)
		{
			return this.gzk[vq];
		}

		return this.gzk[vq] = mh.vnd('^[+@]?%s[-\\s,.:;?!]*', xgs.ypc, 'i');
	}
};

const vlq = {
	faf(hs)
	{
		let ai = new tcb(hs);

		ai.xym('<') && ai.replace(fw[33], '&lt;');

		ai.wfx && ai.toLowerCase();

		if (ai.xym('.'))
		{
			ai.charAt(-1) == '.' && ai.charAt(-2) != '.' && ai.mfp(1);

			ai.replace(fw[34], (m) => m.replace(fw[35], ''));
		}

		if (ai.xym('\n'))
		{
			ai.replace(fw[36], function(m, i)
			{
				let x = ai.charAt(i - 1);

				return mh.iwu(x) ? '. ' : ' ';
			});
		}

		if (ai.ucz('*_'))
		{
			ai.replace(fw[37], '$2');
		}

		if (ai.ucz('(,!?.)'))
		{
			ai.replace(fw[38], '?!');

			ai.replace(fw[39], '$1');

			ai.replace(fw[40], '$1 $2');

			ai.xym('!') && ai.replace(fw[41], '$1');
		}

		if (ai.ucz('$£€'))
		{
			ai.replace(fw[42], (_, ecj, ucb) =>
			{
				fw[43].test(ecj) && (ecj = Math.round(ecj));

				return ucb + ecj;
			});
		}

		ai.xym(':') && ai.replace(fw[44], ': ');

		ai.xym('&') && ai.replace(fw[45], ' and ');

		ai.xym('"') && ai.replace(fw[46], '" - $1');

		return slv.dhm(ai.afl);
	},

	eat(hs)
	{
		return hs.length < 28 && this.bwn(hs) || this.irh();
	},

	bwn(ai)
	{
		let iu;

		if (!fw[47].test(ai))
		{
			if (mh.kfx(ai))
			{
				ai = mh.lch(ai);
			}

			iu = ai.split(' ');

			if (iu.length == 1)
			{
				return mh.ef(iu[0], 'PRE_CASE');
			}
		}
		else {
			iu = mh.bi(fw[48], ai);
		}

		iu = iu.map(eo =>
		{
			switch (true)
			{
				case eo.length < 2 || mh.xk(eo):
					return '';

				default:
					return mh.ef(eo);
			}
		});

		iu = iu.filter(
			(eo, i) => eo != '' && i == iu.indexOf(eo)
		);

		return iu.join(' ');
	},

	irh()
	{
		return 'user' + mh.wi(4);
	}
};

const abe = {
	cwj(ai)
	{
		ai = ai.toLowerCase();

		ai = ai.replace(fw[49], ' ');

		return mh.kwk(ai);
	},

	glm(ai)
	{
		return ai.replace(fw[50], '$1');
	}
};

const slv = {
	jva: {
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

	dhm(ai)
	{
		return ai.replace(fw[51], m => this.get(m));
	},

	get(gj)
	{
		gj = gj.toLowerCase();

		(gj.length == 2) || (gj = gj.slice(0, 2));

		return this.jva[gj] || gj;
	}
};

class zef
{
	constructor()
	{
		this.map = {};
	}

	mqj(eo)
	{
		this.map[eo] = ++this.map[eo] || 0;
	}

	get(eo)
	{
		return this.map[eo] || 0;
	}
}

class mnq
{
	constructor()
	{
		this.map = {};
	}

	tpq(gcr)
	{
		for (let lqh in this.map)
		{
			if (this.nda(gcr, lqh))
			{
				return this.map[lqh];
			}
		}

		return this.abx(gcr);
	}

	abx(at)
	{
		return this.map[at] = mh.ox('TS%s', at);
	}

	nda(bxg, nrc)
	{
		return Math.abs(nrc - bxg) < 5;
	}
}

class vaz
{
	constructor()
	{
		this.zih = {};

		this.rv = {};
	}

	ulz(ylg)
	{
		return this.zih[ylg];
	}

	mqy(kcf, ylg)
	{
		return this.rv[kcf] == ylg;
	}

	gvo(kcf, ylg)
	{
		this.rv[kcf] = ylg;
	}

	jdm(ylg, kcf)
	{
		if (!this.zih[ylg])
		{
			this.zih[ylg] = new sj;
		}

		this.zih[ylg].push(kcf);
	}
}

class zb
{
	constructor(zh)
	{
		zh.ml = this.ml.bind(this);

		this.zh = zh;

		this.puk = 0;

		this.ojq = new Promise(zt => zt(null));

		this.lwr;

		this.lpk = new lpk;

		this.kua = new rju([], {});
	}

	async ml(ga)
	{
		const yo = ga.xu.yo;

		try {
			const hpy = await this.lpk.zgi(yo);

			this.lwr = new mpj(ga.xu, hpy);
		}
		catch (pa) {
			return this.ste(pa);
		}

		switch (ga.ps)
		{
			case 'ue':
				return this.pdw(yo);

			case 'qo':
				return this.to(yo);
		}
	}

	ste(vq)
	{
		this.zoy('xq', {vq});
	}

	to(yo)
	{
		const n = this.lwr.qo;

		if (0 < n && n < 1000)
		{
			this.gwi(yo);
		}

		this.zoy('qo', n);
	}

	async pdw(yo)
	{
		if (this.lwr.wln.jcy)
		{
			return this.ste('iw');
		}

		this.pos();
	}

	async pos()
	{
		let r = new buq(this.yog);

		try {
			if (this.lwr.wln.kuk)
			{
				await this.edy(r);
			}
			else {
				await this.wpc(r);
			}

			!this.zsr(r.vq) && this.zoy('ue', r);
		}
		catch (pa) {
			!this.zsr(r.vq) && this.ste(pa);
		}
	}

	async edy(myp)
	{
		const kyh = await kw.fu.ijr(this.lwr.hcw, this.lwr.wln.ai);

		if (kyh.xq)
		{
			throw kyh.xq;
		}

		const mdn = new ykb(kyh.xu);

		const rv = cek.igy(kyh.xu, mdn, this.lwr);

		myp.qdh(rv);
		myp.ciy(-2);
	}

	async wpc(myp)
	{
		const yo = this.lwr.yo;
		const li = this.lwr.wln.ai;

		const p = myp.ciy(this.lwr.qo);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.lwr.wln.zjl)
		{
			throw 'ko';
		}

		let rv, mdn;

		if (p < 1000)
		{
			const pa = await this.gwi(yo);

			if (pa)
			{
				throw pa;
			}

			mdn = this.kua.mdn;

			rv = this.kua.wln(li);
		}
		else {
			const kyh = await kw.fu.fnp(yo, li);

			if (kyh.xq)
			{
				throw kyh.xq;
			}

			mdn = new ykb(kyh.xu);

			rv = kyh.xu;
		}

		rv = cek.igy(rv, mdn, this.lwr);

		myp.qdh(rv);
	}

	zoy(ps, xu)
	{
		this.zh.vy(ps, xu);
	}

	async gwi(yo)
	{
		await this.ojq;

		if (yo != this.kua.vq)
		{
			this.ojq = new Promise(async zt =>
			{
				const kyh = await kw.fu.kau(yo);

				if (kyh.ds)
				{
					this.kua = new rju(kyh.xu, this.lwr);
				}

				zt(kyh.xq);
			});
		}

		return this.ojq;
	}

	get yog()
	{
		return ++this.puk;
	}

	zsr(mpz)
	{
		return mpz != this.puk;
	}
}

class lpk
{
	constructor()
	{
		this.map = {};
	}

	async zgi(yo)
	{
		let x = this.map[yo];

		if (x == undefined)
		{
			x = this.lkq(yo);
		}

		if (x instanceof Promise)
		{
			const kyh = await x;

			if (kyh.xq)
			{
				this.dxp(yo);

				throw kyh.xq;
			}

			x = this.rzu(yo, kyh.xu);
		}

		return x;
	}

	yut(yo, value)
	{
		return this.map[yo] = value;
	}

	lkq(yo)
	{
		const r = kw.fu.itl(yo);

		return this.yut(yo, r);
	}

	rzu(yo, hlt)
	{
		return this.yut(yo, hlt);
	}

	dxp(yo)
	{
		this.yut(yo, undefined);
	}
}

class umj
{
	constructor(q)
	{
		this.ai = '';
		this.hz = '';
		this.kuk = false;
		this.jcy = false;

		this.sys(q);
	}

	get zjl()
	{
		return this.hz == 'lak';
	}

	get lvx()
	{
		return this.hz == 'pjb';
	}

	sys(q)
	{
		const dbx = q.replace(fw[52], '');

		if (dbx != q)
		{
			this.kuk = true;

			if (dbx == '')
			{
				this.jcy = true;
			}
		}

		this.ai = dbx;
		this.hz = umj.mtg(dbx);
	}

	static mtg(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'lak';

			case (fw[53]).test(q):
				return 'pjb';

			default:
				return '';
		}
	}
}

class mpj
{
	constructor(nhx, xob)
	{
		Object.assign(this, ...[nhx, xob]);

		this.iq = Math.floor(nhx.iq) || Infinity;
		this.oi = Math.floor(nhx.oi);

		this.wln = new umj(nhx.li);
	}
}

class buq
{
	constructor(mpz)
	{
		this.vq = mpz;
		this.rv = [];
		this.dy = 0;
		this.cv = 0;
	}

	qdh(rv)
	{
		this.rv = rv;
		this.dy = rv.length;
	}

	ciy(n)
	{
		return this.cv = n;
	}
}

let zr;

const kw = new rky;
const md = new lr;
const cve = new prd;
const zs = new xi;
const ay = new wu;
const rh = new yr;

const fw = [
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