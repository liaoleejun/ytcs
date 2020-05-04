/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const it = {};

for (let gs of 'object array string regex date math type std'.split(' '))
{
	it[gs] = {};
}

it.zn = function(fd, xe)
{
	return fd != undefined && fd.constructor === xe;
}

it.lg = function()
{
	return it.pn(9);
}

it.rw = function(sv)
{
	return gh[0].test(sv);
}

it.ic = function(tm)
{
	return Object.keys(tm).length == 0;
}

it.cj = function(wc, tm)
{
	for (let km in tm)
	{
		const ug = tm[km];

		if (km == wc) return ug;
		if (ug == wc) return km;
	}
}

it.qd = function(tm, jg)
{
	let sv = '';

	for (let km in tm)
	{
		sv += km + '=' + tm[km] + jg;
	}

	return sv.slice(0, -1);
}

it.ya = function(vl, ke, mw)
{
	const oi = ke + 1;

	return mw.slice(oi, oi + vl);
}

it.np = function(mw)
{
	return mw[mw.length - 1];
}

it.be = function(em, yw)
{
	em += '?';

	for (let km in yw)
	{
		em += km + '=' + encodeURIComponent(yw[km]) + '&';
	}

	return em.slice(0, -1);
}

it.jx = function(sv, wx)
{
	if (it.zn(wx, Array))
	{
		let i = 0;

		return sv.replace(gh[1], _ => wx[i++]);
	}

	return sv.replace('%s', wx);
}

it.yp = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

it.by = function(sv, qf)
{
	const lx = it.jx('(%s)', qf.join('|'));

	return sv.split(new RegExp(lx)).filter(s => s !== '');
}

it.di = function(sv)
{
	return sv.toUpperCase();
}

it.az = function(sv)
{
	return sv.toLowerCase();
}

it.ap = function(sv, rf)
{
	if (!rf)
	{
		sv = sv.toLowerCase();
	}

	return sv[0].toUpperCase() + sv.slice(1);
}

it.aj = function(fq, sv)
{
	return sv.match(fq) || [];
}

it.me = function(fq, sv)
{
	if (fq.global) return '';

	const m = it.aj(fq, sv);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

it.cz = function()
{
	return Math.floor(Date.now() / 1000);
}

it.wj = function(xa)
{
	return xa < it.cz();
}

it.lq = function(q)
{
	const al = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = it.me(gh[2], q);

	return Date.now() + (x[0] * al[x[1]] * 1000);
}

it.hc = function(pa)
{
	let x = pa.split(':'),
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

it.hp = function(cw)
{
	let mw = [];

	mw.push(cw / 3600);

	cw %= 3600;

	mw.push(cw / 60);

	mw.push(cw % 60);

	mw = mw.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return mw.join(':').replace(gh[3], '');
}

it.pn = function(fl)
{
	return Math.random().toString().slice(2, fl + 2);
}

it.nm = function(er, he)
{
	const uk = Math.random() * (he - er) + er;

	return Math.floor(uk);
}

it.ko = function(x, a, b)
{
	return x >= a && x <= b;
}

it.dt = function(a, b)
{
	return 100 * (a / b);
}

it.ao = function()
{
	let ty, lk = 0;

	try {
		ty = [xc, cm, kg];
	}
	catch (e) {
		ty = [dx, kg];
	}

	ty.forEach(
		xj => lk += xj.toString().length
	);

	return lk != 3428;
}

class pm
{
	constructor(vj, hs)
	{
		this.vj = vj;
		this.hs = hs;
	}
}

class lc
{
	constructor(fe, vj, hs)
	{
		this.fe = fe;
		this.et = new pm(vj, hs);
	}
}

class dj extends Array
{
	constructor(yq)
	{
		super();

		if (yq != null)
		{
			super.push(yq);
		}
	}

	push(xu)
	{
		return !this.includes(xu) && super.push(xu);
	}
}

class hb
{
	constructor(or, zv)
	{
		const xj = or.status;

		this.xj = xj;
		this.mf = false;
		this.gy = false;
		this.ch = null;
		this.hs = null;

		switch (zv)
		{
			case 'error':
				return this.ta('xp');

			case 'timeout':
				return this.ta('pt');

			default:
			{
				this.mf = (xj == 200);

				if (xj >= 500)
				{
					return this.ta('rz');
				}

				try {
					this.hs = JSON.parse(or.responseText);
				}
				catch (e) {
					this.hs = or.responseText;
				}
			}
		}
	}

	is(qu)
	{
		this.ch = qu;
	}

	ta(qu)
	{
		this.is(qu);

		this.gy = true;
	}
}

class ny
{
	constructor(hs, co)
	{
		Object.assign(this, hs);

		Object.defineProperty(this, 'co', {
			value: co
		});
	}

	set(km, ug)
	{
		this[km] = ug;

		this.wf();
	}

	wf()
	{
		return qo.set(this.co, this);
	}
}

class kg extends ny
{
	constructor(hs, co)
	{
		super(hs, co);
	}

	get gm()
	{
		return Boolean(this.gv)
	}

	get gv()
	{
		return this[0];
	}

	get ym()
	{
		return this[1];
	}

	get cv()
	{
		return it.wj(this.ym);
	}

	get sz()
	{
		const vo = this.ym.toString().split('').pop();

		return Boolean(+vo);
	}

	set gv(km)
	{
		this.set(0, km);
	}

	set ym(ed)
	{
		this.set(1, ed);
	}

	get wk()
	{
		let s = this.ym.toString(),
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

class bd
{
	constructor(gf)
	{
		if (gf)
		{
			this.ql();
		}
	}

	ei(rd, xr, go)
	{
	}

	ql()
	{
		chrome.runtime.onMessage.addListener(
			this.ei.bind(this)
		);
	}
}

class yl extends bd
{
	constructor()
	{
		super(false);
	}

	ei(rd, xr, go)
	{
		const hs = rd.hs;

		switch (rd.vj)
		{
			case 'ne':
				return this.qb(hs);
		}
	}

	qb(ne)
	{
		if (ne == 'fi')
		{
			un.oi();
		}
	}

	wz()
	{
		return this.gu('wz');
	}

	dm(vi)
	{
		return this.gu('dm', vi);
	}

	ye(gv)
	{
		return this.gu('ye', gv);
	}

	ak()
	{
		return this.gu('ak');
	}

	wm()
	{
		return this.gu('wm');
	}

	gu(vj, hs)
	{
		const rd = new pm(vj, hs);

		return new Promise(go =>
		{
			try {
				chrome.runtime.sendMessage(rd, go);
			}
			catch (e) {
			}
		});
	}
}

class gc extends bd
{
	constructor()
	{
		super(true);
	}

	ei(rd, xr, go)
	{
		const bp = function(...wx)
		{
			try {
				go(...wx);
			}
			catch (e) {
			}
		};

		fy.zg.then(_ =>
		{
			const hs = rd.hs;

			switch (rd.vj)
			{
				case 'wz':
					fy.wz().then(bp);
				break;

				case 'dm':
					fy.dm(hs).then(bp);
				break;

				case 'ye':
					fy.ye(hs).then(bp);
				break;

				case 'ak':
					tq.md.ak(hs).then(bp);
				break;

				case 'wm':
					fy.ni();
				break;
			}
		});

		return true;
	}
}

class ue
{
	get(km)
	{
		return new Promise(lr =>
		{
			try {
				chrome.storage.local.get(km, cr =>
					lr(typeof km == 'string' ? cr[km] : cr)
				);
			}
			catch (e) {
			}
		});
	}

	set(km, ug)
	{
		let hs;

		if (typeof km == 'object')
		{
			hs = km;
		}
		else {
			hs = {[km]:ug};
		}

		return new Promise(ho =>
		{
			try {
				chrome.storage.local.set(hs, ho);
			}
			catch (e) {
			}
		});
	}

	uo()
	{
		return new Promise(ho =>
		{
			try {
				chrome.storage.local.clear(ho);
			}
			catch (e) {
			}
		});
	}
}

class ysfwj
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			lc => this.eu(lc)
		);

		Port.onDisconnect.addListener(
			_ => this.rs()
		);

		this.Port = Port;

		this.vd = {
		};

		this.dq = false;
	}

	ei(m)
	{
	}

	zu(fe, vj, hs)
	{
		const ra = new lc(fe, vj, hs);

		if (!this.dq)
		{
			this.Port.postMessage(ra);
		}
	}

	eu(x)
	{
		this.kt(x.fe).ei(x.et);
	}

	kt(fe)
	{
		return this.vd[fe] || this;
	}

	de(fe, ei, rs)
	{
		return this.vd[fe] = new vg(this, fe, ei, rs);
	}

	rs()
	{
		this.dq = true;

		for (let fe in this.vd)
		{
			this.kt(fe).rs();
		}
	}
}

class qj extends ysfwj
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	ei(rd)
	{
		const hs = rd.hs;

		switch (rd.vj)
		{
			case 'en':
				return uj.mj(hs);
		}
	}

	de(fe, ei, rs)
	{
		this.zu(null, 'de', fe);

		return super.de(fe, ei, rs);
	}

	rs()
	{
		super.rs();

		un.jo();
	}
}

class zo extends ysfwj
{
	constructor(ri)
	{
		super(ri);
	}

	ei(rd)
	{
		switch (rd.vj)
		{
			case 'de':
				return this.de(rd.hs);
		}
	}

	de(fe)
	{
		const kq = super.de(fe);

		switch (fe)
		{
			case 'ea':
				return new yz(kq);
		}
	}
}

class dp
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			sp => this.mb(sp)
		);

		this.om = [];
	}

	mb(ri)
	{
		this.om.push(
			new zo(ri)
		);
	}

	rv(ks)
	{
		for (let ri of this.om)
		{
			ri.zu(null, 'en', ks);
		}
	}
}

class vg
{
	constructor(ri, fe, ei, rs)
	{
		this.ri = ri;

		this.fe = fe;

		if (ei)
		{
			this.ei = ei;
		}

		if (rs)
		{
			this.rs = rs;
		}
	}

	zu(vj, hs)
	{
		this.ri.zu(this.fe, vj, hs);
	}

	ei(m)
	{
	}

	rs()
	{
	}
}

it.ubi = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

it.zul = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

it.rhr = function(sn, uz)
{
	if (uz)
	{
		const gn = Object.create(
			Object.getPrototypeOf(sn)
		);

		return Object.assign(gn, sn);
	}

	return {...sn};
}

it.lnl = function(fr, ul, mw)
{
	let i = mw.indexOf(fr);

	if (i >= 0)
	{
		mw[i] = ul;
	}
}

it.jda = function(ry, we, mw)
{
	if (we != ry)
	{
		const xu = mw[ry];
		mw.splice(ry, 1);
		mw.splice(we, 0, xu);
	}
}

it.hip = function(ry, mw)
{
	it.jda(ry, Infinity, mw);
}

it.pdb = function(...kf)
{
    kf.sort(
    	(a, b) => a.length - b.length
    );

	return kf.shift().filter(xu =>
	{
		for (let fg of kf)
        {
			if (!fg.includes(xu))
				return false;
        }

		return true;
    });
}

it.tlm = function(mw)
{
	return mw.filter((value, ek) => mw.indexOf(value) == ek);
}

it.xsh = function(hm, rg)
{
	return hm.join(rg || '.');
}

it.zoy = function(sv, kh)
{
	if (kh)
	{
		sv = sv.replace(gh[4], '\n');

		sv = sv.replace(gh[5], ' ');
	}
	else {
		sv = sv.replace(gh[6], ' ');

	}

	return sv.trim();
}

it.adn = function(sv, lx, go)
{
	return sv.replace(lx, (sh, gx) =>
	{
		return sh.replace(gx, go(gx));
	});
}

it.kmd = function(au)
{
	return gh[7].test(au);
}

it.acs = function(sv)
{
	return !gh[8].test(sv);
}

it.kea = function(sv)
{
	return sv.toLowerCase().replace(gh[9], it.di);
}

it.nrm = function(sv)
{
	return sv == sv.toUpperCase();
}

it.myd = function(sv)
{
	return sv == sv.toLowerCase();
}

it.pui = function(sv)
{
	return it.myd(sv) || it.nrm(sv);
}

it.une = function(fq, sv)
{
	return it.aj(fq, sv).length;
}

it.dmv = function(sv)
{
	return it.une(gh[10], sv) + 1;
}

it.zqh = function(sv)
{
	return sv ? sv.split(' ') : [];
}

it.kqd = function(i, sv)
{
	return sv.substring(0, i) + 'x' + sv.substring(++i);
}

it.jwr = function(s)
{
	return String(s).replace(gh[11], '\\$1').replace(gh[12], '\\x08');
}

it.aed = function(lx, wx, yd)
{
	if (wx.constructor === Array)
	{
		wx = wx.map(it.jwr);
	}
	else {
		wx = it.jwr(wx);
	}

	lx = it.jx(lx, wx);

	return new RegExp(lx, yd);
}

it.nad = new function()
{
	const al = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const vq = (sk) => new Date(sk).getTime() / 1000;

	return (sk) =>
	{
		const mu = it.cz() - vq(sk);

		for (let [vo, ws] of al)
		{
			let ui = mu / ws;

			if (ui >= 1)
			{
				ui = Math.floor(ui);

				return it.jx('%s %s%s ago', [ui, vo, (ui > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

it.mxo = function(mw)
{
	return mw.reduce((a, b) => a + b, 0);
}

it.icz = function(mw)
{
	return it.weq(it.mxo(mw), mw.length);
}

it.weq = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const id = {
	su(em, za, lz)
	{
		return this.dl('GET', em, za, null, lz);
	},

	zt(em, za, et, lz)
	{
		return this.dl('POST', em, za, et, lz);
	},

	dl(jn, em, za, et, lz)
	{
		if (za)
		{
			em = it.be(em, za);
		}

		if (et)
		{
			et = this.vc(et);
		}

		return new Promise(lr =>
		{
			let or = new XMLHttpRequest;

			if (lz != Infinity)
			{
				let xd = 0;

				or.ontimeout = (e) =>
				{
					if (++xd < 3)
					{
						return this.gq(or, jn, em, et);
					}

					or.onerror(e);
				}

				or.timeout = 5000;
			}

			or.onload = or.onerror = (e) => lr(
				new hb(or, e.type)
			);

			this.gq(or, jn, em, et);
		});
	},

	gq(or, jn, em, et)
	{
		or.open(jn, em);
		or.send(et);
	},

	vc(yw)
	{
		let rx = new FormData;

		for (let km in yw)
		{
			rx.append(km, yw[km]);
		}

		return rx;
	}
}

class nc
{
	constructor(px)
	{
		this.map = {};

		this.mp = Object.getOwnPropertyNames(Object.prototype);

		this.io = px;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(km)
	{
		km = this.zou(km);

		return this.ftw(this.map[km]);
	}

	set(km, ug)
	{
		km = this.zou(km);

		this.map[km] = this.ftw(ug);
	}

	dyx(km)
	{
		return this.zou(km) in this.map;
	}

	oyn(km)
	{
		!this.dyx(km) && this.set(km);
	}

	zou(km)
	{
		if (this.mp.includes(km))
		{
			return km + '*';
		}

		return km;
	}

	ftw(ug)
	{
		if (ug == undefined && this.io)
		{
			return new this.io;
		}

		return ug;
	}
}

class sgu
{
	constructor(fab, hwj)
	{
		this.bi = fab.bi;

		this.pci = fab.pci;

		this.hwj = hwj;

		this.ztc = [];

		this.psi = new dj;

		this.jzi(fab);
	}

	jzi(xv)
	{
		if (this.pci == xv.pci)
		{
			xv.ywr = true;
		}

		this.psi.push(xv.pci);

		this.ztc.push(xv);
	}

	lrf(bi)
	{
		return this.psi.includes(bi);
	}

	cgj()
	{
		this.nok.forEach(dlg => dlg.hidden = true);
	}

	deg(ji, gl)
	{
		this.qio(gl.ata, ji);

		gl.yf(ji);
	}

	qio(a, b)
	{
		const ry = this.ztc.indexOf(b);
		const we = this.ztc.indexOf(a) + 1;

		it.jda(ry, we, this.ztc);
	}

	get length()
	{
		return this.ztc.length;
	}

	get fab()
	{
		return this.ztc[0];
	}

	get qmb()
	{
		return this.ztc[1];
	}

	get cjv()
	{
		return this.length > 1;
	}

	get nok()
	{
		return this.ztc.slice(1);
	}

	get ihq()
	{
		return this.ztc.length - 1;
	}

	get hidden()
	{
		return this.fab.hidden;
	}

	set hidden(oy)
	{
		this.fab.hidden = oy;
	}

	get gn()
	{
		const gn = it.rhr(this, true);

		gn.ztc = this.ztc.map(it.rhr);

		return gn;
	}
}

class tma
{
	constructor(nrd)
	{
		this.ga = tma.teg(nrd);
		this.at = tma.oyl(this.ga);
	}

	static oyl(ga)
	{
		return ['he','ar'].includes(ga) ? 'rtl' : 'ltr';
	}

	static teg(sv)
	{
		let eof = .57 * it.dmv(sv);

		switch (true)
		{
			case eof < it.une(gh[13], sv): return 'en';

			case eof < it.une(gh[14], sv): return 'ar';

			case eof < it.une(gh[15], sv): return 'he';

			default: return '';
		}
	}

	static get nlr()
	{
		if (!this.dnq)
		{
			this.dnq = navigator.languages.map(ga => ga.slice(0, 2));
		}

		return this.dnq;
	}
}

class onr
{
	constructor(opk)
	{
		const _ = opk.items[0];

		this.sas = _.snippet.channelId;
		this.kw = _.statistics.commentCount;

		if (this.kw == undefined)
		{
			this.kw = -1;
		}
		else {
			this.kw = +this.kw;
		}
	}
}

class ylm
{
	constructor(opk)
	{
		const _ = opk.snippet;

		this.bi = opk.id;
		this.ob = _.videoId;
		this.pci = _.authorChannelId.value;
		this.lu = _.authorProfileImageUrl;
		this.rsh = _.authorDisplayName;
		this.smt = _.textOriginal;
		this.pnj = _.publishedAt;
		this.nzc = _.likeCount;
		this.ywr = null;
		this.an = null;
	}
}

class evn
{
	constructor(ylm)
	{
		Object.assign(this, ylm);

		this.ebe = '';
		this.byf = '';
		this.kv = {};
		this.children = [];
		this.gl = null;
		this.zec = null;
		this.bfv = null;
		this.grf = null;
		this.hidden = false;

		this.rld();
		this.gps();
		this.cng();
		this.mbx();
		this.uzn();
	}

	rld()
	{
		this.ebe = this.smt.replace(gh[16], '');

		delete this.smt;
	}

	uzn()
	{
		this.byf = yri.bhd(this.ebe);

		this.grf = new tma(this.byf);

		if (this.grf.ga == 'en')
		{
			this.byf = yri.lzv(this.byf);
		}
	}

	gps()
	{
		if (!this.ebe.includes('/'))
			return;

		this.ebe = this.ebe.replace(gh[17], (em) =>
		{
			let x;

			const bem = gly.rcj(em);

			if (bem) {
				if (bem.ob == this.ob)
				{
					x = new zf(this.ob, bem.ns);
				}
				else {
					x = new yb(bem);
				}
			}
			else {
				x = new ram(em);
			}

			return this.kvo(x);
		});
	}

	cng()
	{
		if (!this.ebe.includes('#'))
			return;

		this.ebe = this.ebe.replace(gh[18], (plt) =>
		{
			const x = new xsb(plt);

			return this.kvo(x);
		});
	}

	mbx()
	{
		if (!this.ebe.includes(':'))
			return;

		this.ebe = this.ebe.replace(gh[19], (pa) =>
		{
			const x = new zf(this.ob, pa);

			return this.kvo(x);
		});
	}

	kvo(xu)
	{
		this.kv[xu.bi] = xu;

		return xu.bi;
	}

	wo()
	{
		this.hidden = true;

		for (let ji of this.children)
		{
			ji.wo();
		}
	}

	yf(ji)
	{
		ji.gl = this;

		this.children.push(ji);
	}

	get ata()
	{
		return it.np(this.children) || this;
	}

	get xuo()
	{
		return this.children.some(ji => !ji.hidden);
	}
}

class bey
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.bj = x.bj;
		this.kv = x.kv;
		this.ob = x.ob;
		this.bi = x.bi;
		this.pci = x.pci;
		this.lu = x.lu;
		this.odb = x.odb;
		this.no = x.no;
		this.pnj = x.pnj;
		this.ywr = x.ywr;
		this.an = x.an;
		this.ga = x.grf.ga;
		this.at = x.grf.at;
		this.xn = x.children.length;
		this.pyl = '';
		this.lxt = '';

		this.pnj = it.nad(this.pnj);

		this.pyl = it.jx('https://www.youtube.com/channel/%s', this.pci);

		this.lxt = it.jx('https://www.youtube.com/watch?v=%s&lc=%s', [this.ob, this.bi]);
	}
}

class eyr
{
	constructor(bx, bg)
	{
		this.bi = it.lg();

		this.bx = bx;

		this.bg = bg;
	}
}

class zf extends eyr
{
	constructor(ob, t)
	{
		super(null, 'zf');

		let bx, yk;

		if (it.yp(t))
		{
			bx = it.hp(t);
			yk = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			bx = t;
			yk = it.hc(t);
		}

		this.ob = ob;
		this.ns = yk;
		this.bx = bx;
	}
}

class yb extends eyr
{
	constructor(yw)
	{
		super('youtube.com', 'yb');

		this.ob = yw.ob;
		this.ns = yw.ns;
	}
}

class ram extends eyr
{
	constructor(em)
	{
		super('', 'on');

		this.em = em;

		this.bwp = em.startsWith('https');

		this.bx = gly.zrv(em) || em;
	}
}

class xsb extends eyr
{
	constructor(plt)
	{
		super(plt, 'on');

		this.em = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(plt);
	}
}

class zji extends eyr
{
	constructor(ymc, sas)
	{
		super(ymc, 'on');

		this.em = 'https://www.youtube.com/channel/' + sas;
	}
}

class zuz
{
	constructor(sv)
	{
		this.rhm = '';
		this.rcd = '';
		this.zez = [];
		this.cek = false;
		this.vjp = false;

		this.bhd(sv);
		this.xuw();
		this.baf();
	}

	get vku()
	{
		return this.rhm;
	}

	get length()
	{
		return this.rhm.length;
	}

	get qpv()
	{
		return it.nrm(this.rcd);
	}

	toLowerCase()
	{
		this.rhm = this.rhm.toLowerCase();
	}

	yrg(au)
	{
		return this.zez.includes(au);
	}

	zxa(sta)
	{
		for (let au of sta)
		{
			if (this.yrg(au)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.rhm[this.length + i] : this.rhm[i];
	}

	fxr(n)
	{
		this.rhm = this.rhm.slice(0, -n);
	}

	replace(fq, go)
	{
		this.rhm = this.rhm.replace(fq, go);
	}

	bhd(sv)
	{
		this.rhm = it.zoy(sv, 'gpt');

		this.replace(gh[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(gh[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (it.acs(x))
				{
					return m.length > 3 && !gh[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	xuw()
	{
		let xnb = it.tlm([...this.rhm]).join('');

		this.rcd = xnb.slice(0, 16);

		this.zez = it.aj(gh[23], xnb);

		this.cek = this.zez.some(this.txm);
	}

	baf()
	{
		if (!this.cek) return;

		for (let i = 0, k = 0, n = this.zez.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.zez[i] + this.zez[k];

				this.replace(it.aed('(%s)+', x, 'g'), x);
			}
		}
	}

	txm(au)
	{
		return au.charCodeAt(0) > 255;
	}

	qho(au)
	{
		return au == '\u{200D}';
	}
}

class dx
{
	constructor()
	{
		this.bi = chrome.runtime.id;

		this.tbf = chrome.runtime.getManifest().version;

		this.zg = new Promise(lr => this.zia = lr);

		this.zg.then(
			_ => this.ds()
		);

		this.da();

		chrome.runtime.onInstalled.addListener(
			bem => this.yup(bem)
		);

		chrome.browserAction.onClicked.addListener(
			_ => plu.iht('fi')
		);

		chrome.alarms.onAlarm.addListener(
			bem => this.mtm('qbs', bem)
		);

		chrome.runtime.onMessageExternal.addListener(
			rd => this.mtm('ite', rd)
		);
	}

	async da()
	{
		if (await this.bih == this.tbf)
		{
			const nl = await qo.get(['0', '1']);

			this.unb = new ny(nl[0], 0);

			th = new kg(nl[1], 1);

			if (th.gm)
			{
				tq.uf.ugy(th.gv);
			}

			this.zia(1);
		}
	}

	async wz()
	{
		const mtc = await this.dm('/html/view.html');

		const gt = (
			this.tbf < this.lba
		);

		const vy = (
			!th.gm || !th.sz
		);

		return {
			oy: {
				gt, vy
			},
			hl: mtc
		};
	}

	async ye(gv)
	{
		if (gh[24].test(gv))
		{
			const yuc = await tq.uf.vxe(gv);

			if (yuc)
			{
				const th = await tq.md.cqg(gv);

				if (th)
				{
					await this.pf(th);

					om.rv('ir');

					return true;
				}
			}
		}

		return false;
	}

	mer(bjn)
	{
		th.ym = bjn;

		om.rv('fz');
	}

	ni()
	{
		if (th.gm)
		{
			th.gv = it.kqd(19, th.gv);
		}
	}

	pf(cae)
	{
		th = new kg(cae, '1');

		return th.wf();
	}

	async dm(vi)
	{
		const ixe = await id.su(chrome.runtime.getURL(vi));

		return ixe.hs;
	}

	async naz(bem)
	{
		this.hqo();

		if (bem.reason == 'install')
		{
			await this.sju();
		}
		else {
			if (bem.previousVersion < '')
			{

			}
		}

		await this.xux();

		await this.da();
	}

	async yup(bem)
	{
		await this.naz(bem);

		switch (bem.reason)
		{
			case 'install':
				this.xve();
			break;

			case 'update':
				this.mtg();
			break;
		}

		plu.ptm();
	}

	xve()
	{

	}

	mtg()
	{

	}

	async mtm(dpx, hs)
	{
		await this.zg;

		switch (dpx)
		{
			case 'qbs':
				return this.gfb(hs);

			case 'ite':
				return this.stn(hs);
		}
	}

	gfb(qbs)
	{
		const tpi = qbs.name;

		switch (tpi)
		{
			case 'csi':
				this.csi();
		}
	}

	stn(rd)
	{
		return new rzp().ei(rd);
	}

	async csi()
	{
		const v = await tq.md.jki();

		if (v > this.tbf)
		{
			return this.cel(v);
		}
	}

	ds()
	{
		if (th.gm)
		{
			if (it.ao() || !th.wk)
			{
				this.ni();
			}
		}
	}

	get bih()
	{
		return qo.get('schemaVersion');
	}

	xux()
	{
		return qo.set('schemaVersion', this.tbf);
	}

	get lba()
	{
		return this.unb.latestVersion;
	}

	cel(v)
	{
		this.unb.set('latestVersion', v);
	}

	sju()
	{
		return qo.set({
			0: {
				latestVersion: this.tbf
			},
			1: {},
		});
	}

	hqo()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('csi', {periodInMinutes:240});
	}
}

class rzp
{
	ei(rd)
	{
		rd = it.zul(rd);

		switch (rd.issuer)
		{
			case 'authServer':
				return this.yrj(rd.data);
		}
	}

	yrj(hs)
	{
		if (hs.id == 'pa')
		{
			fy.mer(hs.token);
		}
	}
}

class lnc
{
	constructor()
	{
		this.md = new muo;

		this.uf = new ixv;
	}
}

class muo
{
	constructor()
	{
		this.exf = 'https://api.lett.app/cs';
	}

	async cqg(gv)
	{
		const ixe = await this.get('/auth', {
			apiKey:gv,
			token:fy.bi
		});

		if (ixe.mf)
		{
			return ixe.hs;
		}
	}

	async jki()
	{
		const ixe = await this.get('/update');

		if (ixe.mf)
		{
			return ixe.hs.version;
		}
	}

	async ak()
	{
		const ixe = await this.get(
			'https://api.lett.app/donate/accept', this.jzs, Infinity
		);

		if (ixe.mf)
		{
			return ixe.hs.url;
		}
	}

	get jzs()
	{
		return {
			extId:fy.bi,
			apiKey:th.gv,
			p:1,
		};
	}

	async get(cno, yw, lz)
	{
		if (cno[0] == '/')
		{
			cno = this.exf + cno;
		}

		const ixe = await id.su(cno, yw, lz);

		if (!ixe.mf && !ixe.gy)
		{
			ixe.is(ixe.hs.error);
		}

		return ixe;
	}
}

class und
{
	constructor()
	{
		this.exf = 'https://www.googleapis.com/youtube/v3';
	}

	ugy(gv)
	{
		this.km = gv;
	}

	async vxe(gv)
	{
		this.ugy(gv);

		const ixe = await this.bcr('jNQXAC9IVRw');

		return ixe.mf;
	}

	rmz(ob)
	{
		return this.bn({
			videoId:ob
		});
	}

	zxf(ob, kni)
	{
		return this.xi({
			videoId:ob,
			searchTerms:kni
		});
	}

	wfn(sas, kni)
	{
		return this.xi({
			allThreadsRelatedToChannelId:sas,
			searchTerms:kni
		});
	}

	async bcr(ob)
	{
		const ixe = await this.qwb({
			id:ob,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (ixe.mf)
		{
			try {
				ixe.hs = new onr(ixe.hs);
			}
			catch (e) {
				ixe.is('rq');
			}
		}

		return ixe;
	}

	async get(cno, yw)
	{
		const ixe = await id.su(this.exf + cno, yw);

		if (!ixe.mf && !ixe.gy)
		{
			const byn = this.nrq(ixe.hs);

			ixe.is(byn);
		}

		return ixe;
	}

	async xi(yw)
	{
		const ixe = await this.get('/commentThreads', yw);

		if (ixe.mf)
		{
			ixe.hs = this.zvy(ixe.hs);
		}

		return ixe;
	}

	async bn(yw)
	{
		let ixe, hm = [];

		do {
			ixe = await this.get('/commentThreads', yw);

			if (ixe.mf)
			{
				const knp = this.zvy(ixe.hs);

				hm.push(knp);

				yw.pageToken = ixe.hs.nextPageToken;
			}
		}
		while (ixe.mf && yw.pageToken)

		ixe.hs = hm.flat();

		return ixe;
	}

	qwb(yw)
	{
		return this.get('/videos', yw);
	}

	yof(sku)
	{
		try {
			return new ylm(sku);
		}
		catch (e) {
			return null;
		}
	}

	zhv(sku)
	{
		let nok = [];

		try {
			if (sku.replies) {
				nok = sku.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return nok;
	}

	nrq(avr)
	{
		try {
			return avr.error.errors[0].reason;
		}
		catch (e) {
			return avr.ch || 're';
		}
	}

	zvy(sku)
	{
		const knp = [];

		try {
			for (let xu of sku.items)
			{
				const la = this.fjq(xu);

				if (la) {
					knp.push(la);
				}
			}
		}
		catch (e) {
		}

		return knp;
	}

	fjq(sku)
	{
		try {
			const omw = sku.snippet;

			if (omw.videoId)
			{
				let xv = this.yof(omw.topLevelComment);

				if (xv)
				{
					const la = new sgu(xv, omw.totalReplyCount);

					if (la.hwj <= 5)
					{
						for (let dlg of this.zhv(sku))
						{
							xv = this.yof(dlg);

							if (xv) {
								la.jzi(xv);
							}
						}
					}

					return la;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class ixv extends und
{
	bn(yw)
	{
		this.ghy(yw);

		return super.bn(yw);
	}

	xi(yw)
	{
		this.ghy(yw);

		return super.xi(yw);
	}

	async get(cno, yw)
	{
		yw.key = this.km;

		let ixe, i = 3;

		while (i--)
		{
			ixe = await super.get(cno, yw);

			if (ixe.ch != 'processingFailure')
				break;
		}

		return ixe;
	}

	ghy(yw)
	{
		Object.assign(yw, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class gly
{
	static rcj(em)
	{
		const ob = it.me(gh[25], em);

		if (ob)
		{
			let ns = it.me(gh[26], em) || 0;

			if (!it.yp(ns))
			{
				ns = it.aj(gh[27], ns).join(':');

				ns = it.hc(ns);
			}

			return {ob, ns};
		}
	}

	static zrv(em)
	{
		return it.me(gh[28], em).replace('www.', '');
	}
}

class cvd
{
	async iht(ne)
	{
		const qve = await this.uai();

		if (qve && qve.url)
		{
			this.gu(qve.id, 'ne', ne);
		}
	}

	ptm()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, plu =>
		{
			for (let qve of plu)
			{
				chrome.tabs.reload(qve.id);
			}
		});
	}

	uai()
	{
		return new Promise(lr =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, plu =>
			{
				lr(plu[0]);
			});
		});
	}

	gu(crk, vj, hs)
	{
		chrome.tabs.sendMessage(crk, new pm(vj, hs));
	}
}

class pzy
{
	constructor(kr, gsh)
	{
		this.bi = gsh.ob;

		this.gsh = gsh;

		this.zfk = new rjc(kr);

		this.hm = {};

		for (let psa of ['eto', 'seq'])
		{
			this[psa] = new nc(Array);
		}

		for (let psa of ['igp', 'urv', 'oak'])
		{
			this[psa] = [];
		}

		for (let la of kr)
		{
			this.wh(la);
			this.mhn(la);
		}
	}

	kts(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.wec();

			case ':all':
				return this.ywz();

			case ':creator':
				return this.vcw();

			case ':link':
				return this.tks();

			case ':reply':
				return this.sig();
		}

		if (gh[29].test(q))
		{
			const xa = this.fxb(q);

			switch (xa.length)
			{
				case 1: return this.tqx(xa[0]);

				case 2: return this.qfg(xa[0], xa[1]);
			}
		}

		return this.kxz(q);
	}

	ywz()
	{
		return this.rir(
			Object.keys(this.hm)
		);
	}

	wec()
	{
		return this.rir(this.seq.values);
	}

	vcw()
	{
		return this.rir(this.igp);
	}

	tks()
	{
		return this.rir(this.oak);
	}

	sig()
	{
		return this.rir(this.urv);
	}

	qfg(oi, vun)
	{
		const hlv = it.hc(oi);
		const sor = it.hc(vun);

		const msf = [];

		for (let xa of this.seq.keys)
		{
			if (hlv <= xa && xa <= sor)
			{
				msf.push(
					this.seq.get(xa)
				);
			}

			if (sor < xa) break;
		}

		return this.rir(msf);
	}

	wh(xu)
	{
		this.hm[xu.bi] = xu;
	}

	ovy(bi)
	{
		return this.hm[bi].gn;
	}

	rir(msf)
	{
		msf = msf.flat();

		return it.tlm(msf).map(
			bi => this.ovy(bi)
		);
	}

	kxz(sv)
	{
		let ijw = [];

		let qf = this.coh(sv);

		let msf = qf.map(
			k => this.select('eto', k)
		);

		msf = msf.filter(x => x.length);

		if (msf.length)
		{
			ijw = it.pdb(...msf);

			if (ijw.length < 1)
			{
				msf.sort((a, b) => a.length - b.length);

				ijw = msf[0];
			}
		}

		return this.rir(ijw);
	}

	tqx(pa)
	{
		let zq = it.hc(pa);

		let msf = [
			this.select('seq', zq)
		];

		for (let i = zq; i--;)
		{
			let x = this.select('seq', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			msf.push(x);
		}

		for (let i = zq; i++;)
		{
			let x = this.select('seq', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			msf.push(x);
		}

		return this.rir(msf);
	}

	mhn(la)
	{
		const bx = la.ztc.map(xv => xv.smt).join(' ');

		this.gps(bx, la.bi);

		this.inq(bx, la.bi);

		this.uhc(bx, la.bi);

		this.zhv(la);
	}

	zhv(la)
	{
		if (la.length > 1)
		{
			this.urv.push(la.bi);
		}

		if (la.lrf(this.gsh.sas))
		{
			this.igp.push(la.bi);
		}
	}

	gps(bx, bi)
	{
		bx.includes('http') && this.oak.push(bi);
	}

	inq(bx, bi)
	{
		const xdx = this.fxb(bx);

		for (let xa of xdx)
		{
			xa = it.hc(xa);

			if (0 <= xa && xa < this.gsh.dy)
			{
				this.sie('seq', xa, bi);
			}
		}
	}

	uhc(bx, bi)
	{
		this.coh(bx).forEach(
			wc => this.sie('eto', wc, bi)
		);
	}

	sie(psa, km, ug)
	{
		this[psa].oyn(km);

		this[psa].get(km).push(ug);
	}

	select(psa, km)
	{
		return this[psa].get(km);
	}

	coh(sv)
	{
		sv = yri.bhd(sv);

		sv = yri.lzv(sv);

		sv = it.zqh(sv);

		return it.tlm(sv);
	}

	fxb(sv)
	{
		return it.aj(gh[30], sv);
	}
}

class rjc
{
	constructor(kr)
	{
		this.zfk = {};

		this.ugw = {};

		this.uln = {};

		for (let la of kr)
		{
			this.bnb(la);
		}

		this.gaf();
	}

	yjs(glb)
	{
		return this.ugw.kts(glb);
	}

	tub(bi)
	{
		return this.zfk[bi];
	}

	bnb(la)
	{
		for (let xv of la.ztc)
		{
			this.eqy(xv.pci, xv.smt);
			this.rkr(xv.pci, xv.rsh);
		}
	}

	gaf()
	{
		this.ugw = new jhb(this.ugw);

		for (let bi in this.uln)
		{
			const uln = this.uln[bi];

			if (uln.length > 1)
			{
				const dgm = uln.filter(
					(bx, i) => bx.length < 28 || i == uln.indexOf(bx)
				);

				this.tub(bi).qhv = (uln.length != dgm.length);
			}
		}
	}

	rkr(bi, prz)
	{
		let zec = new hbv(bi, prz);

		this.zfk[bi] = zec;

		this.ugw[prz] = zec;
	}

	eqy(bi, bx)
	{
		this.uln[bi] = this.uln[bi] || [];

		this.uln[bi].push(bx);
	}
}

class hbv
{
	constructor(bi, prz)
	{
		this.bi = bi;
		this.prz = prz;
		this.qhv = false;
		this.vxj = false;
	}

	get odb()
	{
		return this.vxj ? this.prz : this.lkf;
	}

	get wed()
	{
		return !this.vxj && this.qhv;
	}

	get lkf()
	{
		if (!this.kam)
		{
			this.kam = yov.bml(this.prz);
		}

		return this.kam;
	}
}

class jhb
{
	constructor(tm)
	{
		this.keys = Object.keys(tm).sort(this.fka);

		this.xae = this.keys.map(km => tm[km]);

		this.keys = this.keys.map(it.az);
	}

	kts(wmk)
	{
		wmk = wmk.toLowerCase();

		let hm = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(wmk))
			{
				do {
					hm.push(this.xae[i])
				}
				while (++i < n && this.keys[i].startsWith(wmk));

				break;
			}
		}

		return hm.sort(this.imt);
	}

	imt(a, b)
	{
		return b.prz.length - a.prz.length;
	}

	fka(a, b)
	{
		return a.localeCompare(b);
	}
}

const bfx = {
	hqh: {
		ihq(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		paf(x)
		{
			return (x != 0) ? (1 / x) : 0;
		},

		wpc(vdt)
		{
			let kbu = it.icz(vdt);

			return (n) => (kbu - Math.abs(kbu - n)) / kbu;
		}
	},

	mhn(kr, gjb, gsh)
	{
		this.cpa = gsh.sas;

		const blf = gjb.tub(this.cpa);

		if (blf)
		{
			blf.vxj = true;
		}

		this.kts = gsh.kts;

		this.rul = new dho;

		this.xmh = new siv;

		this.ilg = new dws;

		this.ztq = {};

		return this.xuw(kr, gjb);
	},

	xuw(kr, gjb)
	{
		const zsg = ('you are not but for the thi and that was').split(' ');

		const qtz = {
			vqd: 1,
			soi: [],
		};

		const lrp = {
			ihq: this.hqh.ihq,
			ray: this.hqh.paf,
			soi: null,
		};

		const rjg = {
			eto: .5,
			soi: .2,
			rde: .2,
			ray: .15,
			fwc: .1,
			ihq: .1,
			gpj: .1,
		};

		if (this.kts.jnl)
		{
			Object.assign(rjg, {
				gpj: .4,
				rde:.4,
				ray: .1,
				soi: .0,
			});
		}

		for (let la of kr)
		{
			Object.assign(la,
			{
				tx: {
					soi: la.fab.smt.length,
					zno: 0,
					fwc: false,
					rde: false,
					seq: [],
					qf: [],
				},
				lia: {
					eto: 0,
					rde: 0,
					ray: 0,
					soi: 0,
					jzn: 0,
					tgq: 0,
				},
			});

			const tx = la.tx;

			for (let i = 0; i < la.length; i++)
			{
				const xv = la.ztc[i] = new evn(la.ztc[i]);

				xv.zec = gjb.tub(xv.pci);

				xv.an = this.an(xv.pci);

				if (i > 0)
				{
					xv.bj = true;

					xv.ywr && (tx.fwc = true);
					xv.an && (tx.rde = true);
				}

				if (xv.byf == '' || xv.zec.wed)
				{
					xv.wo();
				}
			}

			const fab = la.fab;

			if (this.yrw(fab.ebe))
			{
				la.hidden = true;

				continue;
			}

			tx.qf = it.zqh(fab.byf);
			tx.zno = tx.qf.length;
			tx.qf = it.tlm(tx.qf);

			for (let x in fab.kv)
			{
				x = fab.kv[x];

				if (x.bi == fab.ebe)
				{
					la.hidden = true;
				}

				if (x instanceof zf)
				{
					tx.seq.push(x.yk);

					it.lnl(x.bi, this.xmh.fpu(x.yk), tx.qf);
				}
			}

			for (let wc of tx.qf)
			{
				if (wc.length > 2 && !zsg.includes(wc))
				{
					this.rul.xct(wc);
				}
			}
		}

		for (let la of kr)
		{
			if (la.hidden)
				continue;

			const lia = la.lia;

			for (let wc of la.tx.qf)
			{
				lia.eto += this.rul.get(wc);
			}

			lia.eto /= la.tx.zno;

			lia.ray = la.tx.seq.length;

			if (lia.eto > qtz.vqd)
			{
				qtz.vqd = lia.eto;
			}

			qtz.soi.push(la.tx.soi);
		}

		lrp.soi = this.hqh.wpc(qtz.soi);

		for (let la of kr)
		{
			const lia = la.lia;

			lia.eto = rjg.eto * (lia.eto / qtz.vqd);
			lia.rde = rjg.rde * +la.tx.rde;
			lia.ray = rjg.ray * lrp.ray(lia.ray);
			lia.soi = rjg.soi * lrp.soi(la.tx.soi);

			const ihq = rjg.ihq * lrp.ihq(la.ihq);
			const fwc = +la.tx.fwc || .5;
			const gpj = it.weq(la.ihq, la.hwj) || .5;

			lia.jzn = fwc * gpj * ihq;

			lia.tgq = it.mxo(Object.values(lia));
		}

		kr.sort(
			(a, b) => b.lia.tgq - a.lia.tgq
		);

		for (let i = 0, n = kr.length; i < n; i++)
		{
			const a = kr[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = kr[k];

				if (b.pci == a.pci && !b.fab.zec.vxj)
				{
					b.hidden = true;
				}

				if (!b.hidden && !b.cjv)
				{
					const jkx = it.pdb(a.tx.qf, b.tx.qf);
					const guh = (a.tx.qf.length + b.tx.qf.length) / 2;

					if (jkx.length == b.tx.zno)
					{
						b.hidden = true;
					}

					if (jkx.length >= (1 - (1 / guh)) * guh)
					{
						const sor = a.tx.seq[0] || 0;
						const qed = b.tx.seq[0] || 0;

						if (this.xmh.icv(sor, qed))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < kr.length; i++)
		{
			const la = kr[i];

			let eyh = false;

			if (i == 0 && !la.cjv)
			{
				const wbg = this.kts.sv.toLowerCase();
				const thk = la.fab.byf;

				if (wbg == thk)
				{
					eyh = true;
				}
			}

			if (la.cjv && la.psi.length == 1)
			{
				const hlv = new Date(la.fab.pnj);
				const sor = new Date(la.qmb.pnj);

				if (.001 * (sor - hlv) < 300)
				{
					eyh = true;
				}
			}

			if (eyh)
			{
				it.hip(i, kr);
			}
		}

		for (let la of kr)
		{
			this.ilg.svb(la.bi, la.pci);

			for (let pci of la.psi)
			{
				this.ilg.krj(pci, la.bi)
			}
		}

		for (let la of kr)
		{
			if (la.ihq == 0) continue;

			for (let dlg of la.nok)
			{
				const bx = dlg.ebe;

				const nvb = it.me(gh[31], bx);

				for (let zec of gjb.yjs(nvb))
				{
					if (this.sxr(zec).test(bx))
					{
						dlg.bfv = zec;
						break;
					}
				}
			}

			if (la.length > 2)
			{
				let zfk, hm, zeg = true;

				const n = la.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					const dlg = la.ztc[i];

					if (zeg)
					{
						zfk = [];
						hm = [];
						zeg = false;
					}

					const th = dlg.zec;

					if (it.np(zfk) == th) {
						i++;
					}
					else if (zfk.includes(th) || it.tlm(zfk).length < 2) {
						hm.push(dlg);
						zfk.push(th);

						if (i + 1 < n)
							continue;
					}

					if (hm.length > 2)
					{
						let yuc = !hm.some(dlg => dlg.bfv && !zfk.includes(dlg.bfv));

						if (yuc)
						{
							hm.forEach(dlg =>
								dlg.bfv = zfk.find(zec => zec != dlg.zec)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						zeg = true;
					}
				}
			}

			for (let mlz, i = 1; i < la.length; i++)
			{
				const dlg = la.ztc[i];

				if (!dlg.bfv)
				{
					if (mlz && mlz.bfv == dlg.zec)
					{
						dlg.bfv = mlz.zec;

						la.deg(dlg, mlz);
					}
				}
				else {
					const zcq = dlg.bfv;

					let ymx;

					for (let k = i - 1; k >= 0; k--)
					{
						const mlz = la.ztc[k];

						if (k == 0)
						{
							if (mlz.zec == zcq)
							{
								ymx = '';
							}

							break;
						}

						if (mlz.zec == zcq)
						{
							la.deg(dlg, mlz);

							if (mlz.children.length == 1)
							{
								ymx = '';
							}

							break;
						}
					}

					if (ymx == null)
					{
						const cu = new zji(zcq.odb, zcq.bi);

						ymx = dlg.kvo(cu) + ' ';
					}

					dlg.ebe = dlg.ebe.replace(this.sxr(zcq), ymx);
				}

				mlz = dlg;
			}

			for (let i = 1, n = la.length; i < n; i++)
			{
				const dlg = la.ztc[i];

				if (dlg.gl || dlg.children.length)
				{
					it.hip(i, la.ztc);
					i--;
					n--;
				}
			}

			for (let hod = false, i = 1; i < la.length; i++)
			{
				let dlg = la.ztc[i];

				hod = (hod || !dlg.ywr);

				if (dlg.xuo)
				{
					continue;
				}

				if (!hod)
				{
					const bx = dlg.ebe;

					if (la.length > 2 || ['+','@'].includes(bx[0]) || bx.length < 10)
					{
						dlg.wo();
					}
				}

				dlg.bfv && !la.lrf(dlg.bfv.bi) && dlg.wo();

				this.tjk(dlg.pci, la.bi) && dlg.wo();
			}
		}

		kr = kr.map(la =>
		{
			if (la.fab.hidden)
			{
				return [];
			}

			const ztc = [];

			for (let i = 0; i < la.length; i++)
			{
				const xv = la.ztc[i];

				xv.no = yov.xrf(xv.ebe);

				xv.odb = xv.zec.odb;

				if (xv.no.length < 2)
				{
					if (i == 0) return [];

					xv.wo();
				}

				ztc.push(new bey(xv));
			}

			return ztc;
		});

		return kr.filter(la => la.length > 0);
	},

	yrw(sv)
	{
		return sv.length > 500 || it.une(gh[32], sv) > 3;
	},

	an(pci)
	{
		return this.cpa == pci;
	},

	tjk(pci, siz)
	{
		if (!this.cpa || this.an(pci))
		{
			return false;
		}

		for (let wxl of this.ilg.of(pci))
		{
			if (wxl == siz)
			{
				return false;
			}

			if (!this.ilg.ytl(wxl, pci))
			{
				return true;
			}
		}
	},

	sxr(zec)
	{
		const bi = zec.bi;

		if (bi in this.ztq)
		{
			return this.ztq[bi];
		}

		return this.ztq[bi] = it.aed('^[+@]?%s[-\\s,.:;?!]*', zec.prz, 'i');
	}
};

const yov = {
	xrf(rc)
	{
		let sv = new zuz(rc);

		sv.yrg('<') && sv.replace(gh[33], '&lt;');

		sv.qpv && sv.toLowerCase();

		if (sv.yrg('.'))
		{
			sv.charAt(-1) == '.' && sv.charAt(-2) != '.' && sv.fxr(1);

			sv.replace(gh[34], (m) => m.replace(gh[35], ''));
		}

		if (sv.yrg('\n'))
		{
			sv.replace(gh[36], function(m, i)
			{
				let x = sv.charAt(i - 1);

				return it.kmd(x) ? '. ' : ' ';
			});
		}

		if (sv.zxa('*_'))
		{
			sv.replace(gh[37], '$2');
		}

		if (sv.zxa('(,!?.)'))
		{
			sv.replace(gh[38], '?!');

			sv.replace(gh[39], '$1');

			sv.replace(gh[40], '$1 $2');

			sv.yrg('!') && sv.replace(gh[41], '$1');
		}

		if (sv.zxa('$£€'))
		{
			sv.replace(gh[42], (_, ijh, ofq) =>
			{
				gh[43].test(ijh) && (ijh = Math.round(ijh));

				return ofq + ijh;
			});
		}

		sv.yrg(':') && sv.replace(gh[44], ': ');

		sv.yrg('&') && sv.replace(gh[45], ' and ');

		sv.yrg('"') && sv.replace(gh[46], '" - $1');

		return cvn.xej(sv.vku);
	},

	bml(rc)
	{
		return rc.length < 28 && this.uom(rc) || this.dcv();
	},

	uom(sv)
	{
		let qf;

		if (!gh[47].test(sv))
		{
			if (it.pui(sv))
			{
				sv = it.kea(sv);
			}

			qf = sv.split(' ');

			if (qf.length == 1)
			{
				return it.ap(qf[0], 'PRE_CASE');
			}
		}
		else {
			qf = it.aj(gh[48], sv);
		}

		qf = qf.map(wc =>
		{
			switch (true)
			{
				case wc.length < 2 || it.yp(wc):
					return '';

				default:
					return it.ap(wc);
			}
		});

		qf = qf.filter(
			(wc, i) => wc != '' && i == qf.indexOf(wc)
		);

		return qf.join(' ');
	},

	dcv()
	{
		return 'user' + it.pn(4);
	}
};

const yri = {
	bhd(sv)
	{
		sv = sv.toLowerCase();

		sv = sv.replace(gh[49], ' ');

		return it.zoy(sv);
	},

	lzv(sv)
	{
		return sv.replace(gh[50], '$1');
	}
};

const cvn = {
	ghp: {
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

	xej(sv)
	{
		return sv.replace(gh[51], m => this.get(m));
	},

	get(km)
	{
		km = km.toLowerCase();

		(km.length == 2) || (km = km.slice(0, 2));

		return this.ghp[km] || km;
	}
};

class dho
{
	constructor()
	{
		this.map = {};
	}

	xct(wc)
	{
		this.map[wc] = ++this.map[wc] || 0;
	}

	get(wc)
	{
		return this.map[wc] || 0;
	}
}

class siv
{
	constructor()
	{
		this.map = {};
	}

	fpu(qhd)
	{
		for (let grn in this.map)
		{
			if (this.icv(qhd, grn))
			{
				return this.map[grn];
			}
		}

		return this.tyr(qhd);
	}

	tyr(xa)
	{
		return this.map[xa] = it.jx('TS%s', xa);
	}

	icv(sor, qed)
	{
		return Math.abs(qed - sor) < 5;
	}
}

class dws
{
	constructor()
	{
		this.zfk = {};

		this.kr = {};
	}

	of(pla)
	{
		return this.zfk[pla];
	}

	ytl(phk, pla)
	{
		return this.kr[phk] == pla;
	}

	svb(bi, ouh)
	{
		this.kr[bi] = ouh;
	}

	krj(bi, phk)
	{
		if (!this.zfk[bi])
		{
			this.zfk[bi] = new dj;
		}

		this.zfk[bi].push(phk);
	}
}

class yz
{
	constructor(ri)
	{
		ri.ei = this.ei.bind(this);

		this.ri = ri;

		this.bpy = 0;

		this.swf = new Promise(lr => lr(null));

		this.gsh;

		this.tik = new tik;

		this.uxu = new pzy([], {});
	}

	async ei(rd)
	{
		const ob = rd.hs.ob;

		try {
			const bem = await this.tik.nbe(ob);

			this.gsh = new san(rd.hs, bem);
		}
		catch (qu) {
			return this.zsp(qu);
		}

		switch (rd.vj)
		{
			case 'xi':
				return this.pmh(ob);

			case 'kw':
				return this.nq(ob);
		}
	}

	zsp(bi)
	{
		this.nyz('ch', {bi});
	}

	nq(ob)
	{
		const n = this.gsh.kw;

		if (0 < n && n < 1000)
		{
			this.cxj(ob);
		}

		this.nyz('kw', n);
	}

	async pmh(ob)
	{
		if (this.gsh.kts.cns)
		{
			return this.zsp('cl');
		}

		this.orp();
	}

	async orp()
	{
		let r = new fuq(this.jgb);

		try {
			if (this.gsh.kts.xcf)
			{
				await this.aco(r);
			}
			else {
				await this.fsl(r);
			}

			!this.ynw(r.bi) && this.nyz('xi', r);
		}
		catch (qu) {
			!this.ynw(r.bi) && this.zsp(qu);
		}
	}

	async aco(avr)
	{
		const ixe = await tq.uf.wfn(this.gsh.sas, this.gsh.kts.sv);

		if (ixe.ch)
		{
			throw ixe.ch;
		}

		const zfk = new rjc(ixe.hs);

		const kr = bfx.mhn(ixe.hs, zfk, this.gsh);

		avr.idx(kr);
		avr.uvi(-2);
	}

	async fsl(avr)
	{
		const ob = this.gsh.ob;
		const yn = this.gsh.kts.sv;

		const p = avr.uvi(this.gsh.kw);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.gsh.kts.rme)
		{
			throw 'zc';
		}

		let kr, zfk;

		if (p < 1000)
		{
			const qu = await this.cxj(ob);

			if (qu)
			{
				throw qu;
			}

			zfk = this.uxu.zfk;

			kr = this.uxu.kts(yn);
		}
		else {
			const ixe = await tq.uf.zxf(ob, yn);

			if (ixe.ch)
			{
				throw ixe.ch;
			}

			zfk = new rjc(ixe.hs);

			kr = ixe.hs;
		}

		kr = bfx.mhn(kr, zfk, this.gsh);

		avr.idx(kr);
	}

	nyz(vj, hs)
	{
		this.ri.zu(vj, hs);
	}

	async cxj(ob)
	{
		await this.swf;

		if (ob != this.uxu.bi)
		{
			this.swf = new Promise(async lr =>
			{
				const ixe = await tq.uf.rmz(ob);

				if (ixe.mf)
				{
					this.uxu = new pzy(ixe.hs, this.gsh);
				}

				lr(ixe.ch);
			});
		}

		return this.swf;
	}

	get jgb()
	{
		return ++this.bpy;
	}

	ynw(vgv)
	{
		return vgv != this.bpy;
	}
}

class tik
{
	constructor()
	{
		this.map = {};
	}

	async nbe(ob)
	{
		let x = this.map[ob];

		if (x == undefined)
		{
			x = this.bol(ob);
		}

		if (x instanceof Promise)
		{
			const ixe = await x;

			if (ixe.ch)
			{
				this.tpa(ob);

				throw ixe.ch;
			}

			x = this.trn(ob, ixe.hs);
		}

		return x;
	}

	env(ob, value)
	{
		return this.map[ob] = value;
	}

	bol(ob)
	{
		const r = tq.uf.bcr(ob);

		return this.env(ob, r);
	}

	trn(ob, ags)
	{
		return this.env(ob, ags);
	}

	tpa(ob)
	{
		this.env(ob, undefined);
	}
}

class xml
{
	constructor(q)
	{
		this.sv = '';
		this.bg = '';
		this.xcf = false;
		this.cns = false;

		this.xuw(q);
	}

	get rme()
	{
		return this.bg == 'mp';
	}

	get jnl()
	{
		return this.bg == 'ndh';
	}

	xuw(q)
	{
		const vbp = q.replace(gh[52], '');

		if (vbp != q)
		{
			this.xcf = true;

			if (vbp == '')
			{
				this.cns = true;
			}
		}

		this.sv = vbp;
		this.bg = xml.udl(vbp);
	}

	static udl(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'mp';

			case (gh[53]).test(q):
				return 'ndh';

			default:
				return '';
		}
	}
}

class san
{
	constructor(out, hem)
	{
		Object.assign(this, ...[out, hem]);

		this.dy = Math.floor(out.dy) || Infinity;
		this.vb = Math.floor(out.vb);

		this.kts = new xml(out.yn);
	}
}

class fuq
{
	constructor(vgv)
	{
		this.bi = vgv;
		this.kr = [];
		this.vl = 0;
		this.dh = 0;
	}

	idx(kr)
	{
		this.kr = kr;
		this.vl = kr.length;
	}

	uvi(n)
	{
		return this.dh = n;
	}
}

let th;

const tq = new lnc;
const qo = new ue;
const plu = new cvd;
const fy = new dx;
const om = new dp;
const lj = new gc;

const gh = [
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