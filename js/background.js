/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const zt = {};

for (let kx of 'object array string regex date math type std'.split(' '))
{
	zt[kx] = {};
}

zt.kc = function(sz, fg)
{
	return sz != undefined && sz.constructor === fg;
}

zt.ul = function()
{
	return zt.de(9);
}

zt.uc = function(fy)
{
	return jx[0].test(fy);
}

zt.kw = function(ui)
{
	return Object.keys(ui).length == 0;
}

zt.lh = function(vx, ui)
{
	for (let wj in ui)
	{
		const yn = ui[wj];

		if (wj == vx) return yn;
		if (yn == vx) return wj;
	}
}

zt.md = function(ui, cz)
{
	let fy = '';

	for (let wj in ui)
	{
		fy += wj + '=' + ui[wj] + cz;
	}

	return fy.slice(0, -1);
}

zt.za = function(ry, rj, ch)
{
	const tu = rj + 1;

	return ch.slice(tu, tu + ry);
}

zt.gy = function(ch)
{
	return ch[ch.length - 1];
}

zt.st = function(fx, yu)
{
	fx += '?';

	for (let wj in yu)
	{
		fx += wj + '=' + encodeURIComponent(yu[wj]) + '&';
	}

	return fx.slice(0, -1);
}

zt.zb = function(fy, sk)
{
	if (zt.kc(sk, Array))
	{
		let i = 0;

		return fy.replace(jx[1], _ => sk[i++]);
	}

	return fy.replace('%s', sk);
}

zt.zn = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

zt.gu = function(fy, oh)
{
	const ai = zt.zb('(%s)', oh.join('|'));

	return fy.split(new RegExp(ai)).filter(s => s !== '');
}

zt.ka = function(fy)
{
	return fy.toUpperCase();
}

zt.ck = function(fy)
{
	return fy.toLowerCase();
}

zt.uh = function(fy, bt)
{
	if (!bt)
	{
		fy = fy.toLowerCase();
	}

	return fy[0].toUpperCase() + fy.slice(1);
}

zt.fe = function(ax, fy)
{
	return fy.match(ax) || [];
}

zt.rp = function(ax, fy)
{
	if (ax.global) return '';

	const m = zt.fe(ax, fy);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

zt.ab = function()
{
	return Math.floor(Date.now() / 1000);
}

zt.wr = function(qr)
{
	return qr < zt.ab();
}

zt.yw = function(q)
{
	const ja = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = zt.rp(jx[2], q);

	return Date.now() + (x[0] * ja[x[1]] * 1000);
}

zt.gc = function(he)
{
	let x = he.split(':'),
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

zt.wh = function(lf)
{
	let ch = [];

	ch.push(lf / 3600);

	lf %= 3600;

	ch.push(lf / 60);

	ch.push(lf % 60);

	ch = ch.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return ch.join(':').replace(jx[3], '');
}

zt.de = function(at)
{
	return Math.random().toString().slice(2, at + 2);
}

zt.tq = function(tc, ok)
{
	const oe = Math.random() * (ok - tc) + tc;

	return Math.floor(oe);
}

zt.ni = function(x, a, b)
{
	return x >= a && x <= b;
}

zt.ws = function(a, b)
{
	return 100 * (a / b);
}

zt.jw = function()
{
	let gm, dc = 0;

	try {
		gm = [ex, jl, gf];
	}
	catch (e) {
		gm = [bz, gf];
	}

	gm.forEach(
		ig => dc += ig.toString().length
	);

	return dc != 3428;
}

class pi
{
	constructor(ez, tx)
	{
		this.ez = ez;
		this.tx = tx;
	}
}

class ot
{
	constructor(xr, ez, tx)
	{
		this.xr = xr;
		this.sg = new pi(ez, tx);
	}
}

class cu extends Array
{
	constructor(ox)
	{
		super();

		if (ox != null)
		{
			super.push(ox);
		}
	}

	push(yj)
	{
		return !this.includes(yj) && super.push(yj);
	}
}

class oa
{
	constructor(nj, en)
	{
		const ig = nj.status;

		this.ig = ig;
		this.eh = false;
		this.hr = false;
		this.bg = null;
		this.tx = null;

		switch (en)
		{
			case 'error':
				return this.pc('am');

			case 'timeout':
				return this.pc('ys');

			default:
			{
				this.eh = (ig == 200);

				if (ig >= 500)
				{
					return this.pc('pw');
				}

				try {
					this.tx = JSON.parse(nj.responseText);
				}
				catch (e) {
					this.tx = nj.responseText;
				}
			}
		}
	}

	vq(yq)
	{
		this.bg = yq;
	}

	pc(yq)
	{
		this.vq(yq);

		this.hr = true;
	}
}

class vu
{
	constructor(tx, dt)
	{
		Object.assign(this, tx);

		Object.defineProperty(this, 'dt', {
			value: dt
		});
	}

	set(wj, yn)
	{
		this[wj] = yn;

		this.yp();
	}

	yp()
	{
		return jf.set(this.dt, this);
	}
}

class gf extends vu
{
	constructor(tx, dt)
	{
		super(tx, dt);
	}

	get rb()
	{
		return Boolean(this.lc)
	}

	get lc()
	{
		return this[0];
	}

	get cb()
	{
		return this[1];
	}

	get ba()
	{
		return zt.wr(this.cb);
	}

	get tb()
	{
		const ou = this.cb.toString().split('').pop();

		return Boolean(+ou);
	}

	set lc(wj)
	{
		this.set(0, wj);
	}

	set cb(xf)
	{
		this.set(1, xf);
	}

	get is()
	{
		let s = this.cb.toString(),
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

class hy
{
	constructor(fa)
	{
		if (fa)
		{
			this.mr();
		}
	}

	ln(nd, cs, tr)
	{
	}

	mr()
	{
		chrome.runtime.onMessage.addListener(
			this.ln.bind(this)
		);
	}
}

class gd extends hy
{
	constructor()
	{
		super(false);
	}

	ln(nd, cs, tr)
	{
		const tx = nd.tx;

		switch (nd.ez)
		{
			case 'kz':
				return this.ya(tx);
		}
	}

	ya(kz)
	{
		if (kz == 'ha')
		{
			jv.tu();
		}
	}

	aw()
	{
		return this.iv('aw');
	}

	lz(vz)
	{
		return this.iv('lz', vz);
	}

	dg(lc)
	{
		return this.iv('dg', lc);
	}

	ep()
	{
		return this.iv('ep');
	}

	jp()
	{
		return this.iv('jp');
	}

	iv(ez, tx)
	{
		const nd = new pi(ez, tx);

		return new Promise(tr =>
		{
			try {
				chrome.runtime.sendMessage(nd, tr);
			}
			catch (e) {
			}
		});
	}
}

class dn extends hy
{
	constructor()
	{
		super(true);
	}

	ln(nd, cs, tr)
	{
		const no = function(...sk)
		{
			try {
				tr(...sk);
			}
			catch (e) {
			}
		};

		ze.cr.then(_ =>
		{
			const tx = nd.tx;

			switch (nd.ez)
			{
				case 'aw':
					ze.aw().then(no);
				break;

				case 'lz':
					ze.lz(tx).then(no);
				break;

				case 'dg':
					ze.dg(tx).then(no);
				break;

				case 'ep':
					tv.fh.ep(tx).then(no);
				break;

				case 'jp':
					ze.er();
				break;
			}
		});

		return true;
	}
}

class js
{
	get(wj)
	{
		return new Promise(tf =>
		{
			try {
				chrome.storage.local.get(wj, km =>
					tf(typeof wj == 'string' ? km[wj] : km)
				);
			}
			catch (e) {
			}
		});
	}

	set(wj, yn)
	{
		let tx;

		if (typeof wj == 'object')
		{
			tx = wj;
		}
		else {
			tx = {[wj]:yn};
		}

		return new Promise(xw =>
		{
			try {
				chrome.storage.local.set(tx, xw);
			}
			catch (e) {
			}
		});
	}

	pj()
	{
		return new Promise(xw =>
		{
			try {
				chrome.storage.local.clear(xw);
			}
			catch (e) {
			}
		});
	}
}

class lrkfo
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			ot => this.xb(ot)
		);

		Port.onDisconnect.addListener(
			_ => this.ed()
		);

		this.Port = Port;

		this.av = {
		};

		this.my = false;
	}

	ln(m)
	{
	}

	wd(xr, ez, tx)
	{
		const xc = new ot(xr, ez, tx);

		if (!this.my)
		{
			this.Port.postMessage(xc);
		}
	}

	xb(x)
	{
		this.hx(x.xr).ln(x.sg);
	}

	hx(xr)
	{
		return this.av[xr] || this;
	}

	zu(xr, ln, ed)
	{
		return this.av[xr] = new si(this, xr, ln, ed);
	}

	ed()
	{
		this.my = true;

		for (let xr in this.av)
		{
			this.hx(xr).ed();
		}
	}
}

class ol extends lrkfo
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	ln(nd)
	{
		const tx = nd.tx;

		switch (nd.ez)
		{
			case 'mh':
				return bo.dr(tx);
		}
	}

	zu(xr, ln, ed)
	{
		this.wd(null, 'zu', xr);

		return super.zu(xr, ln, ed);
	}

	ed()
	{
		super.ed();

		jv.qs();
	}
}

class ug extends lrkfo
{
	constructor(dm)
	{
		super(dm);
	}

	ln(nd)
	{
		switch (nd.ez)
		{
			case 'zu':
				return this.zu(nd.tx);
		}
	}

	zu(xr)
	{
		const kb = super.zu(xr);

		switch (xr)
		{
			case 'ho':
				return new xa(kb);
		}
	}
}

class dk
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			wo => this.ew(wo)
		);

		this.wt = [];
	}

	ew(dm)
	{
		this.wt.push(
			new ug(dm)
		);
	}

	ut(ej)
	{
		for (let dm of this.wt)
		{
			dm.wd(null, 'mh', ej);
		}
	}
}

class si
{
	constructor(dm, xr, ln, ed)
	{
		this.dm = dm;

		this.xr = xr;

		if (ln)
		{
			this.ln = ln;
		}

		if (ed)
		{
			this.ed = ed;
		}
	}

	wd(ez, tx)
	{
		this.dm.wd(this.xr, ez, tx);
	}

	ln(m)
	{
	}

	ed()
	{
	}
}

zt.vrj = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

zt.veq = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

zt.sxz = function(bp, sc)
{
	if (sc)
	{
		const tj = Object.create(
			Object.getPrototypeOf(bp)
		);

		return Object.assign(tj, bp);
	}

	return {...bp};
}

zt.qpe = function(rn, au, ch)
{
	let i = ch.indexOf(rn);

	if (i >= 0)
	{
		ch[i] = au;
	}
}

zt.vdf = function(wc, lq, ch)
{
	if (lq != wc)
	{
		const yj = ch[wc];
		ch.splice(wc, 1);
		ch.splice(lq, 0, yj);
	}
}

zt.zuw = function(wc, ch)
{
	zt.vdf(wc, Infinity, ch);
}

zt.pix = function(...oy)
{
    oy.sort(
    	(a, b) => a.length - b.length
    );

	return oy.shift().filter(yj =>
	{
		for (let bq of oy)
        {
			if (!bq.includes(yj))
				return false;
        }

		return true;
    });
}

zt.qbd = function(ch)
{
	return ch.filter((value, uo) => ch.indexOf(value) == uo);
}

zt.cnl = function(pm, fn)
{
	return pm.join(fn || '.');
}

zt.qgl = function(fy, yo)
{
	if (yo)
	{
		fy = fy.replace(jx[4], '\n');

		fy = fy.replace(jx[5], ' ');
	}
	else {
		fy = fy.replace(jx[6], ' ');

	}

	return fy.trim();
}

zt.tpj = function(fy, ai, tr)
{
	return fy.replace(ai, (dq, cy) =>
	{
		return dq.replace(cy, tr(cy));
	});
}

zt.snd = function(di)
{
	return jx[7].test(di);
}

zt.mhk = function(fy)
{
	return !jx[8].test(fy);
}

zt.hsp = function(fy)
{
	return fy.toLowerCase().replace(jx[9], zt.ka);
}

zt.ojg = function(fy)
{
	return fy == fy.toUpperCase();
}

zt.rcg = function(fy)
{
	return fy == fy.toLowerCase();
}

zt.uri = function(fy)
{
	return zt.rcg(fy) || zt.ojg(fy);
}

zt.rtc = function(ax, fy)
{
	return zt.fe(ax, fy).length;
}

zt.myd = function(fy)
{
	return zt.rtc(jx[10], fy) + 1;
}

zt.rkz = function(fy)
{
	return fy ? fy.split(' ') : [];
}

zt.cpe = function(i, fy)
{
	return fy.substring(0, i) + 'x' + fy.substring(++i);
}

zt.yop = function(s)
{
	return String(s).replace(jx[11], '\\$1').replace(jx[12], '\\x08');
}

zt.akr = function(ai, sk, nx)
{
	if (Array === sk.constructor)
	{
		sk = sk.map(zt.yop);
	}
	else {
		sk = zt.yop(sk);
	}

	ai = zt.zb(ai, sk);

	return new RegExp(ai, nx);
}

zt.yfp = new function()
{
	const ja = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const lu = (ey) => new Date(ey).getTime() / 1000;

	return (ey) =>
	{
		const qu = zt.ab() - lu(ey);

		for (let [ou, aq] of ja)
		{
			let yr = qu / aq;

			if (yr >= 1)
			{
				yr = Math.floor(yr);

				return zt.zb('%s %s%s ago', [yr, ou, (yr > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

zt.chu = function(ch)
{
	return ch.reduce((a, b) => a + b, 0);
}

zt.vjp = function(ch)
{
	return zt.jyw(zt.chu(ch), ch.length);
}

zt.jyw = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const gz = {
	pv(fx, eb, fc)
	{
		return this.yk('GET', fx, eb, null, fc);
	},

	wx(fx, eb, sg, fc)
	{
		return this.yk('POST', fx, eb, sg, fc);
	},

	yk(zq, fx, eb, sg, fc)
	{
		if (eb)
		{
			fx = zt.st(fx, eb);
		}

		if (sg)
		{
			sg = this.fk(sg);
		}

		return new Promise(tf =>
		{
			let nj = new XMLHttpRequest;

			if (fc != Infinity)
			{
				let jo = 0;

				nj.ontimeout = (e) =>
				{
					if (++jo < 3)
					{
						return this.pl(nj, zq, fx, sg);
					}

					nj.onerror(e);
				}

				nj.timeout = 5000;
			}

			nj.onload = nj.onerror = (e) => tf(
				new oa(nj, e.type)
			);

			this.pl(nj, zq, fx, sg);
		});
	},

	pl(nj, zq, fx, sg)
	{
		nj.open(zq, fx);
		nj.send(sg);
	},

	fk(yu)
	{
		let jk = new FormData;

		for (let wj in yu)
		{
			jk.append(wj, yu[wj]);
		}

		return jk;
	}
}

class cp
{
	constructor(bk)
	{
		this.map = {};

		this.gb = Object.getOwnPropertyNames(Object.prototype);

		this.lmn = bk;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(wj)
	{
		wj = this.imw(wj);

		return this.phf(this.map[wj]);
	}

	set(wj, yn)
	{
		wj = this.imw(wj);

		this.map[wj] = this.phf(yn);
	}

	ctu(wj)
	{
		return this.imw(wj) in this.map;
	}

	fis(wj)
	{
		!this.ctu(wj) && this.set(wj);
	}

	imw(wj)
	{
		if (this.gb.includes(wj))
		{
			return wj + '*';
		}

		return wj;
	}

	phf(yn)
	{
		if (yn == undefined && this.lmn)
		{
			return new this.lmn;
		}

		return yn;
	}
}

class gkx
{
	constructor(frm, pet)
	{
		this.jc = frm.jc;

		this.zfx = frm.zfx;

		this.pet = pet;

		this.iug = [];

		this.xlg = new cu;

		this.iod(frm);
	}

	iod(vk)
	{
		if (this.zfx == vk.zfx)
		{
			vk.jpz = true;
		}

		this.xlg.push(vk.zfx);

		this.iug.push(vk);
	}

	rta(jc)
	{
		return this.xlg.includes(jc);
	}

	par()
	{
		this.sen.forEach(hnb => hnb.hidden = true);
	}

	vqn(dv, su)
	{
		this.fwl(su.wsw, dv);

		su.sr(dv);
	}

	fwl(a, b)
	{
		const wc = this.iug.indexOf(b);
		const lq = this.iug.indexOf(a) + 1;

		zt.vdf(wc, lq, this.iug);
	}

	get length()
	{
		return this.iug.length;
	}

	get frm()
	{
		return this.iug[0];
	}

	get tbe()
	{
		return this.iug[1];
	}

	get lhg()
	{
		return this.length > 1;
	}

	get sen()
	{
		return this.iug.slice(1);
	}

	get whk()
	{
		return this.iug.length - 1;
	}

	get hidden()
	{
		return this.frm.hidden;
	}

	set hidden(mk)
	{
		this.frm.hidden = mk;
	}

	get tj()
	{
		const tj = zt.sxz(this, true);

		tj.iug = this.iug.map(zt.sxz);

		return tj;
	}
}

class xhj
{
	constructor(vca)
	{
		this.hp = xhj.ueo(vca);
		this.sa = xhj.ick(this.hp);
	}

	static ick(hp)
	{
		return ['he','ar'].includes(hp) ? 'rtl' : 'ltr';
	}

	static ueo(fy)
	{
		let kbu = .57 * zt.myd(fy);

		switch (true)
		{
			case kbu < zt.rtc(jx[13], fy): return 'en';

			case kbu < zt.rtc(jx[14], fy): return 'ar';

			case kbu < zt.rtc(jx[15], fy): return 'he';

			default: return '';
		}
	}

	static get grn()
	{
		if (!this.rzi)
		{
			this.rzi = navigator.languages.map(hp => hp.slice(0, 2));
		}

		return this.rzi;
	}
}

class bhp
{
	constructor(nyi)
	{
		const _ = nyi.items[0];

		this.fjf = _.snippet.channelId;
		this.xp = _.statistics.commentCount;

		if (this.xp == undefined)
		{
			this.xp = -1;
		}
		else {
			this.xp = +this.xp;
		}
	}
}

class cbp
{
	constructor(nyi)
	{
		const _ = nyi.snippet;

		this.jc = nyi.id;
		this.ta = _.videoId;
		this.zfx = _.authorChannelId.value;
		this.hv = _.authorProfileImageUrl;
		this.mfl = _.authorDisplayName;
		this.wyp = _.textOriginal;
		this.pqx = _.publishedAt;
		this.boy = _.likeCount;
		this.jpz = null;
		this.ps = null;
	}
}

class vth
{
	constructor(cbp)
	{
		Object.assign(this, cbp);

		this.kdr = '';
		this.lyj = '';
		this.th = {};
		this.children = [];
		this.su = null;
		this.agr = null;
		this.hjh = null;
		this.wsy = null;
		this.hidden = false;

		this.dwr();
		this.iek();
		this.uxv();
		this.roa();
		this.hka();
	}

	dwr()
	{
		this.kdr = this.wyp.replace(jx[16], '');

		delete this.wyp;
	}

	hka()
	{
		this.lyj = gsb.ixv(this.kdr);

		this.wsy = new xhj(this.lyj);

		if (this.wsy.hp == 'en')
		{
			this.lyj = gsb.onx(this.lyj);
		}
	}

	iek()
	{
		if (!this.kdr.includes('/'))
			return;

		this.kdr = this.kdr.replace(jx[17], (fx) =>
		{
			let x;

			const zvo = woh.cns(fx);

			if (zvo) {
				if (zvo.ta == this.ta)
				{
					x = new ad(this.ta, zvo.mp);
				}
				else {
					x = new qa(zvo);
				}
			}
			else {
				x = new lsm(fx);
			}

			return this.ekm(x);
		});
	}

	uxv()
	{
		if (!this.kdr.includes('#'))
			return;

		this.kdr = this.kdr.replace(jx[18], (xvl) =>
		{
			const x = new mui(xvl);

			return this.ekm(x);
		});
	}

	roa()
	{
		if (!this.kdr.includes(':'))
			return;

		this.kdr = this.kdr.replace(jx[19], (he) =>
		{
			const x = new ad(this.ta, he);

			return this.ekm(x);
		});
	}

	ekm(yj)
	{
		this.th[yj.jc] = yj;

		return yj.jc;
	}

	wm()
	{
		this.hidden = true;

		for (let dv of this.children)
		{
			dv.wm();
		}
	}

	sr(dv)
	{
		dv.su = this;

		this.children.push(dv);
	}

	get wsw()
	{
		return zt.gy(this.children) || this;
	}

	get bme()
	{
		return this.children.some(dv => !dv.hidden);
	}
}

class zsk
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.dp = x.dp;
		this.th = x.th;
		this.ta = x.ta;
		this.jc = x.jc;
		this.zfx = x.zfx;
		this.hv = x.hv;
		this.odc = x.odc;
		this.pn = x.pn;
		this.pqx = x.pqx;
		this.jpz = x.jpz;
		this.ps = x.ps;
		this.hp = x.wsy.hp;
		this.sa = x.wsy.sa;
		this.vg = x.children.length;
		this.vod = '';
		this.zyg = '';

		this.pqx = zt.yfp(this.pqx);

		this.vod = zt.zb('https://www.youtube.com/channel/%s', this.zfx);

		this.zyg = zt.zb('https://www.youtube.com/watch?v=%s&lc=%s', [this.ta, this.jc]);
	}
}

class mbz
{
	constructor(nv, hg)
	{
		this.jc = zt.ul();

		this.nv = nv;

		this.hg = hg;
	}
}

class ad extends mbz
{
	constructor(ta, t)
	{
		super(null, 'ad');

		let nv, ik;

		if (zt.zn(t))
		{
			nv = zt.wh(t);
			ik = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			nv = t;
			ik = zt.gc(t);
		}

		this.ta = ta;
		this.mp = ik;
		this.nv = nv;
	}
}

class qa extends mbz
{
	constructor(yu)
	{
		super('youtube.com', 'qa');

		this.ta = yu.ta;
		this.mp = yu.mp;
	}
}

class lsm extends mbz
{
	constructor(fx)
	{
		super('', 'gk');

		this.fx = fx;

		this.cfz = fx.startsWith('https');

		this.nv = woh.ojq(fx) || fx;
	}
}

class mui extends mbz
{
	constructor(xvl)
	{
		super(xvl, 'gk');

		this.fx = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(xvl);
	}
}

class mbj extends mbz
{
	constructor(bcq, fjf)
	{
		super(bcq, 'gk');

		this.fx = 'https://www.youtube.com/channel/' + fjf;
	}
}

class bjx
{
	constructor(fy)
	{
		this.mgb = '';
		this.zth = '';
		this.cuy = [];
		this.oeu = false;
		this.iag = false;

		this.ixv(fy);
		this.phr();
		this.tnh();
	}

	get emr()
	{
		return this.mgb;
	}

	get length()
	{
		return this.mgb.length;
	}

	get ora()
	{
		return zt.ojg(this.zth);
	}

	toLowerCase()
	{
		this.mgb = this.mgb.toLowerCase();
	}

	hcx(di)
	{
		return this.cuy.includes(di);
	}

	ucw(qjo)
	{
		for (let di of qjo)
		{
			if (this.hcx(di)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.mgb[this.length + i] : this.mgb[i];
	}

	cux(n)
	{
		this.mgb = this.mgb.slice(0, -n);
	}

	replace(ax, tr)
	{
		this.mgb = this.mgb.replace(ax, tr);
	}

	ixv(fy)
	{
		this.mgb = zt.qgl(fy, 'boi');

		this.replace(jx[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(jx[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (zt.mhk(x))
				{
					return m.length > 3 && !jx[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	phr()
	{
		let xkz = zt.qbd([...this.mgb]).join('');

		this.zth = xkz.slice(0, 16);

		this.cuy = zt.fe(jx[23], xkz);

		this.oeu = this.cuy.some(this.pis);
	}

	tnh()
	{
		if (!this.oeu) return;

		for (let i = 0, k = 0, n = this.cuy.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.cuy[i] + this.cuy[k];

				this.replace(zt.akr('(%s)+', x, 'g'), x);
			}
		}
	}

	pis(di)
	{
		return di.charCodeAt(0) > 255;
	}

	heq(di)
	{
		return di == '\u{200D}';
	}
}

class bz
{
	constructor()
	{
		this.jc = chrome.runtime.id;

		this.gub = chrome.runtime.getManifest().version;

		this.cr = new Promise(tf => this.uru = tf);

		this.cr.then(
			_ => this.ti()
		);

		this.kj();

		chrome.runtime.onInstalled.addListener(
			zvo => this.jol(zvo)
		);

		chrome.browserAction.onClicked.addListener(
			_ => sao.apk('ha')
		);

		chrome.alarms.onAlarm.addListener(
			zvo => this.brv('sgb', zvo)
		);

		chrome.runtime.onMessageExternal.addListener(
			nd => this.brv('lud', nd)
		);
	}

	async kj()
	{
		if (await this.xtc == this.gub)
		{
			const ac = await jf.get(['0', '1']);

			this.dnt = new vu(ac[0], 0);

			fz = new gf(ac[1], 1);

			if (fz.rb)
			{
				tv.kp.zip(fz.lc);
			}

			this.uru(1);
		}
	}

	async aw()
	{
		const gto = await this.lz('/html/view.html');

		const zr = (
			this.gub < this.ycf
		);

		const og = (
			!fz.rb || !fz.tb
		);

		return {
			mk: {
				zr, og
			},
			nr: gto
		};
	}

	async dg(lc)
	{
		if (jx[24].test(lc))
		{
			const tnj = await tv.kp.ftn(lc);

			if (tnj)
			{
				const fz = await tv.fh.lzb(lc);

				if (fz)
				{
					await this.qv(fz);

					wt.ut('ak');

					return true;
				}
			}
		}

		return false;
	}

	yuo(zof)
	{
		fz.cb = zof;

		wt.ut('bn');
	}

	er()
	{
		if (fz.rb)
		{
			fz.lc = zt.cpe(19, fz.lc);
		}
	}

	qv(uki)
	{
		fz = new gf(uki, '1');

		return fz.yp();
	}

	async lz(vz)
	{
		const icr = await gz.pv(chrome.runtime.getURL(vz));

		return icr.tx;
	}

	async ltj(zvo)
	{
		this.syt();

		if (zvo.reason == 'install')
		{
			await this.sig();
		}
		else {
			if (zvo.previousVersion < '')
			{

			}
		}

		await this.qox();

		await this.kj();
	}

	async jol(zvo)
	{
		await this.ltj(zvo);

		switch (zvo.reason)
		{
			case 'install':
				this.aer();
			break;

			case 'update':
				this.wfl();
			break;
		}

		sao.jdz();
	}

	aer()
	{

	}

	wfl()
	{

	}

	async brv(mvc, tx)
	{
		await this.cr;

		switch (mvc)
		{
			case 'sgb':
				return this.uza(tx);

			case 'lud':
				return this.zyr(tx);
		}
	}

	uza(sgb)
	{
		const evl = sgb.name;

		switch (evl)
		{
			case 'ugi':
				this.ugi();
		}
	}

	zyr(nd)
	{
		return new njm().ln(nd);
	}

	async ugi()
	{
		const v = await tv.fh.tok();

		if (v > this.gub)
		{
			return this.pyn(v);
		}
	}

	ti()
	{
		if (fz.rb)
		{
			if (zt.jw() || !fz.is)
			{
				this.er();
			}
		}
	}

	get xtc()
	{
		return jf.get('schemaVersion');
	}

	qox()
	{
		return jf.set('schemaVersion', this.gub);
	}

	get ycf()
	{
		return this.dnt.latestVersion;
	}

	pyn(v)
	{
		this.dnt.set('latestVersion', v);
	}

	sig()
	{
		return jf.set({
			0: {
				latestVersion: this.gub
			},
			1: {},
		});
	}

	syt()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('ugi', {periodInMinutes:240});
	}
}

class njm
{
	ln(nd)
	{
		nd = zt.veq(nd);

		switch (nd.issuer)
		{
			case 'authServer':
				return this.nmr(nd.data);
		}
	}

	nmr(tx)
	{
		if (tx.id == 'pa')
		{
			ze.yuo(tx.token);
		}
	}
}

class aca
{
	constructor()
	{
		this.fh = new qen;

		this.kp = new nhx;
	}
}

class qen
{
	constructor()
	{
		this.wes = 'https://api.lett.app/cs';
	}

	async lzb(lc)
	{
		const icr = await this.get('/auth', {
			apiKey:lc,
			token:ze.jc
		});

		if (icr.eh)
		{
			return icr.tx;
		}
	}

	async tok()
	{
		const icr = await this.get('/update');

		if (icr.eh)
		{
			return icr.tx.version;
		}
	}

	async ep()
	{
		const icr = await this.get(
			'https://api.lett.app/donate/accept', this.tfy, Infinity
		);

		if (icr.eh)
		{
			return icr.tx.url;
		}
	}

	get tfy()
	{
		return {
			extId:ze.jc,
			apiKey:fz.lc,
			p:1,
		};
	}

	async get(gbx, yu, fc)
	{
		if (gbx[0] == '/')
		{
			gbx = this.wes + gbx;
		}

		const icr = await gz.pv(gbx, yu, fc);

		if (!icr.eh && !icr.hr)
		{
			icr.vq(icr.tx.error);
		}

		return icr;
	}
}

class alr
{
	constructor()
	{
		this.wes = 'https://www.googleapis.com/youtube/v3';
	}

	zip(lc)
	{
		this.wj = lc;
	}

	async ftn(lc)
	{
		this.zip(lc);

		const icr = await this.mpw('jNQXAC9IVRw');

		return icr.eh;
	}

	bxc(ta)
	{
		return this.el({
			videoId:ta
		});
	}

	bwj(ta, ayq)
	{
		return this.wf({
			videoId:ta,
			searchTerms:ayq
		});
	}

	vbh(fjf, ayq)
	{
		return this.wf({
			allThreadsRelatedToChannelId:fjf,
			searchTerms:ayq
		});
	}

	async mpw(ta)
	{
		const icr = await this.eae({
			id:ta,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (icr.eh)
		{
			try {
				icr.tx = new bhp(icr.tx);
			}
			catch (e) {
				icr.vq('gs');
			}
		}

		return icr;
	}

	async get(gbx, yu)
	{
		const icr = await gz.pv(this.wes + gbx, yu);

		if (!icr.eh && !icr.hr)
		{
			const buj = this.nvr(icr.tx);

			icr.vq(buj);
		}

		return icr;
	}

	async wf(yu)
	{
		const icr = await this.get('/commentThreads', yu);

		if (icr.eh)
		{
			icr.tx = this.qeu(icr.tx);
		}

		return icr;
	}

	async el(yu)
	{
		let icr, pm = [];

		do {
			icr = await this.get('/commentThreads', yu);

			if (icr.eh)
			{
				const yfl = this.qeu(icr.tx);

				pm.push(yfl);

				yu.pageToken = icr.tx.nextPageToken;
			}
		}
		while (icr.eh && yu.pageToken)

		icr.tx = pm.flat();

		return icr;
	}

	eae(yu)
	{
		return this.get('/videos', yu);
	}

	fqw(urk)
	{
		try {
			return new cbp(urk);
		}
		catch (e) {
			return null;
		}
	}

	sdg(urk)
	{
		let sen = [];

		try {
			if (urk.replies) {
				sen = urk.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return sen;
	}

	nvr(rjd)
	{
		try {
			return rjd.error.errors[0].reason;
		}
		catch (e) {
			return rjd.bg || 'dy';
		}
	}

	qeu(urk)
	{
		const yfl = [];

		try {
			for (let yj of urk.items)
			{
				const hb = this.cwo(yj);

				if (hb) {
					yfl.push(hb);
				}
			}
		}
		catch (e) {
		}

		return yfl;
	}

	cwo(urk)
	{
		try {
			const nif = urk.snippet;

			if (nif.videoId)
			{
				let vk = this.fqw(nif.topLevelComment);

				if (vk)
				{
					const hb = new gkx(vk, nif.totalReplyCount);

					for (let hnb of this.sdg(urk))
					{
						vk = this.fqw(hnb);

						if (vk) {
							hb.iod(vk);
						}
					}

					return hb;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class nhx extends alr
{
	el(yu)
	{
		this.aft(yu);

		return super.el(yu);
	}

	wf(yu)
	{
		this.aft(yu);

		return super.wf(yu);
	}

	async get(gbx, yu)
	{
		yu.key = this.wj;

		let icr, i = 3;

		while (i--)
		{
			icr = await super.get(gbx, yu);

			if (icr.bg != 'processingFailure')
				break;
		}

		return icr;
	}

	aft(yu)
	{
		Object.assign(yu, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class woh
{
	static cns(fx)
	{
		const ta = zt.rp(jx[25], fx);

		if (ta)
		{
			let mp = zt.rp(jx[26], fx) || 0;

			if (!zt.zn(mp))
			{
				mp = zt.fe(jx[27], mp).join(':');

				mp = zt.gc(mp);
			}

			return {ta, mp};
		}
	}

	static ojq(fx)
	{
		return zt.rp(jx[28], fx).replace('www.', '');
	}
}

class fkn
{
	async apk(kz)
	{
		const zoa = await this.npm();

		if (zoa && zoa.url)
		{
			this.iv(zoa.id, 'kz', kz);
		}
	}

	jdz()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, sao =>
		{
			for (let zoa of sao)
			{
				chrome.tabs.reload(zoa.id);
			}
		});
	}

	npm()
	{
		return new Promise(tf =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, sao =>
			{
				tf(sao[0]);
			});
		});
	}

	iv(mcn, ez, tx)
	{
		chrome.tabs.sendMessage(mcn, new pi(ez, tx));
	}
}

class ezq
{
	constructor(qk, pqa)
	{
		this.jc = pqa.ta;

		this.pqa = pqa;

		this.vra = new dop(qk);

		this.pm = {};

		for (let qti of ['xzx', 'whx'])
		{
			this[qti] = new cp(Array);
		}

		for (let qti of ['gbs', 'ini', 'jwq'])
		{
			this[qti] = [];
		}

		for (let hb of qk)
		{
			this.qg(hb);
			this.xtp(hb);
		}
	}

	zrp(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.uev();

			case ':all':
				return this.qbk();

			case ':creator':
				return this.zxm();

			case ':link':
				return this.kjv();

			case ':reply':
				return this.wmc();
		}

		if (jx[29].test(q))
		{
			const qr = this.cgv(q);

			switch (qr.length)
			{
				case 1: return this.nzn(qr[0]);

				case 2: return this.ziz(qr[0], qr[1]);
			}
		}

		return this.oer(q);
	}

	qbk()
	{
		return this.lal(
			Object.keys(this.pm)
		);
	}

	uev()
	{
		return this.lal(this.whx.values);
	}

	zxm()
	{
		return this.lal(this.gbs);
	}

	kjv()
	{
		return this.lal(this.jwq);
	}

	wmc()
	{
		return this.lal(this.ini);
	}

	ziz(tu, zbp)
	{
		const uyb = zt.gc(tu);
		const ltp = zt.gc(zbp);

		const wtp = [];

		for (let qr of this.whx.keys)
		{
			if (uyb <= qr && qr <= ltp)
			{
				wtp.push(
					this.whx.get(qr)
				);
			}

			if (ltp < qr) break;
		}

		return this.lal(wtp);
	}

	qg(yj)
	{
		this.pm[yj.jc] = yj;
	}

	uxp(jc)
	{
		return this.pm[jc].tj;
	}

	lal(wtp)
	{
		wtp = wtp.flat();

		return zt.qbd(wtp).map(
			jc => this.uxp(jc)
		);
	}

	oer(fy)
	{
		let ysj = [];

		let oh = this.iry(fy);

		let wtp = oh.map(
			k => this.select('xzx', k)
		);

		wtp = wtp.filter(x => x.length);

		if (wtp.length)
		{
			ysj = zt.pix(...wtp);

			if (ysj.length < 1)
			{
				wtp.sort((a, b) => a.length - b.length);

				ysj = wtp[0];
			}
		}

		return this.lal(ysj);
	}

	nzn(he)
	{
		let lx = zt.gc(he);

		let wtp = [
			this.select('whx', lx)
		];

		for (let i = lx; i--;)
		{
			let x = this.select('whx', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			wtp.push(x);
		}

		for (let i = lx; i++;)
		{
			let x = this.select('whx', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			wtp.push(x);
		}

		return this.lal(wtp);
	}

	xtp(hb)
	{
		const nv = hb.iug.map(vk => vk.wyp).join(' ');

		this.iek(nv, hb.jc);

		this.nvf(nv, hb.jc);

		this.vsj(nv, hb.jc);

		this.sdg(hb);
	}

	sdg(hb)
	{
		if (hb.length > 1)
		{
			this.ini.push(hb.jc);
		}

		if (hb.rta(this.pqa.fjf))
		{
			this.gbs.push(hb.jc);
		}
	}

	iek(nv, jc)
	{
		nv.includes('http') && this.jwq.push(jc);
	}

	nvf(nv, jc)
	{
		const pqe = this.cgv(nv);

		for (let qr of pqe)
		{
			qr = zt.gc(qr);

			if (0 <= qr && qr < this.pqa.zg)
			{
				this.lgs('whx', qr, jc);
			}
		}
	}

	vsj(nv, jc)
	{
		this.iry(nv).forEach(
			vx => this.lgs('xzx', vx, jc)
		);
	}

	lgs(qti, wj, yn)
	{
		this[qti].fis(wj);

		this[qti].get(wj).push(yn);
	}

	select(qti, wj)
	{
		return this[qti].get(wj);
	}

	iry(fy)
	{
		fy = gsb.ixv(fy);

		fy = gsb.onx(fy);

		fy = zt.rkz(fy);

		return zt.qbd(fy);
	}

	cgv(fy)
	{
		return zt.fe(jx[30], fy);
	}
}

class dop
{
	constructor(qk)
	{
		this.vra = {};

		this.yjw = {};

		this.vjw = {};

		for (let hb of qk)
		{
			this.bxq(hb);
		}

		this.ahs();
	}

	rau(yhz)
	{
		return this.yjw.zrp(yhz);
	}

	hlb(jc)
	{
		return this.vra[jc];
	}

	bxq(hb)
	{
		for (let vk of hb.iug)
		{
			this.jqv(vk.zfx, vk.wyp);
			this.rwp(vk.zfx, vk.mfl);
		}
	}

	ahs()
	{
		this.yjw = new vse(this.yjw);

		for (let jc in this.vjw)
		{
			const vjw = this.vjw[jc];

			if (vjw.length > 1)
			{
				const rop = vjw.filter(
					(nv, i) => nv.length < 28 || i == vjw.indexOf(nv)
				);

				this.hlb(jc).kod = (vjw.length != rop.length);
			}
		}
	}

	rwp(jc, htl)
	{
		let agr = new fnm(jc, htl);

		this.vra[jc] = agr;

		this.yjw[htl] = agr;
	}

	jqv(jc, nv)
	{
		this.vjw[jc] = this.vjw[jc] || [];

		this.vjw[jc].push(nv);
	}
}

class fnm
{
	constructor(jc, htl)
	{
		this.jc = jc;
		this.htl = htl;
		this.kod = false;
		this.msg = false;
	}

	get odc()
	{
		return this.msg ? this.htl : this.bfs;
	}

	get sfy()
	{
		return !this.msg && this.kod;
	}

	get bfs()
	{
		if (!this.wim)
		{
			this.wim = dex.pun(this.htl);
		}

		return this.wim;
	}
}

class vse
{
	constructor(ui)
	{
		this.keys = Object.keys(ui).sort(this.ksm);

		this.rha = this.keys.map(wj => ui[wj]);

		this.keys = this.keys.map(zt.ck);
	}

	zrp(tgq)
	{
		tgq = tgq.toLowerCase();

		let pm = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(tgq))
			{
				do {
					pm.push(this.rha[i])
				}
				while (++i < n && this.keys[i].startsWith(tgq));

				break;
			}
		}

		return pm.sort(this.jrm);
	}

	jrm(a, b)
	{
		return b.htl.length - a.htl.length;
	}

	ksm(a, b)
	{
		return a.localeCompare(b);
	}
}

const mqc = {
	rhy: {
		whk(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		rgt(x)
		{
			return (x != 0) ? (1 / x) : 0;
		},

		nef(dxj)
		{
			let bqs = zt.vjp(dxj);

			return (n) => (bqs - Math.abs(bqs - n)) / bqs;
		}
	},

	xtp(qk, hve, pqa)
	{
		this.usd = pqa.fjf;

		const ndl = hve.hlb(this.usd);

		if (ndl)
		{
			ndl.msg = true;
		}

		this.zrp = pqa.zrp;

		this.atc = new asw;

		this.paq = new oqe;

		this.kag = new waf;

		this.zah = {};

		return this.phr(qk, hve);
	},

	phr(qk, hve)
	{
		const lhp = ('you are not but for the thi and that was').split(' ');

		const klu = {
			jur: 1,
			tbi: [],
		};

		const rvc = {
			whk: this.rhy.whk,
			ebq: this.rhy.rgt,
			tbi: null,
		};

		const dlq = {
			xzx: .5,
			umf: .1,
			cpf: .2,
			ebq: .15,
			tbi: .2,
			whk: .1,
			lpn: .1,
		};

		if (this.zrp.gfk)
		{
			Object.assign(dlq, {
				lpn: .4,
				cpf:.4,
				ebq: .1,
				tbi: .0,
			});
		}

		for (let hb of qk)
		{
			Object.assign(hb,
			{
				ml: {
					tbi: hb.frm.wyp.length,
					akb: 0,
					umf: false,
					cpf: false,
					whx: [],
					oh: [],
				},
				uzc: {
					xzx: 0,
					umf: 0,
					cpf: 0,
					ebq: 0,
					tbi: 0,
					whk: 0,
					lpn: 0,
					aji: 0,
				},
			});

			const ml = hb.ml;

			for (let i = 0; i < hb.length; i++)
			{
				const vk = hb.iug[i] = new vth(hb.iug[i]);

				vk.agr = hve.hlb(vk.zfx);

				vk.ps = this.ps(vk.zfx);

				if (i > 0)
				{
					vk.dp = true;

					vk.jpz && (ml.umf = true);
					vk.ps && (ml.cpf = true);
				}

				if (vk.lyj == '' || vk.agr.sfy)
				{
					vk.wm();
				}
			}

			const frm = hb.frm;

			if (this.fnx(frm.kdr))
			{
				hb.hidden = true;

				continue;
			}

			ml.oh = zt.rkz(frm.lyj);
			ml.akb = ml.oh.length;
			ml.oh = zt.qbd(ml.oh);

			for (let x in frm.th)
			{
				x = frm.th[x];

				if (x.jc == frm.kdr)
				{
					hb.hidden = true;
				}

				if (x instanceof ad)
				{
					ml.whx.push(x.ik);

					zt.qpe(x.jc, this.paq.hne(x.ik), ml.oh);
				}
			}

			for (let vx of ml.oh)
			{
				if (vx.length > 2 && !lhp.includes(vx))
				{
					this.atc.ehg(vx);
				}
			}

		}

		for (let hb of qk)
		{
			if (hb.hidden)
				continue;

			const uzc = hb.uzc;

			for (let vx of hb.ml.oh)
			{
				uzc.xzx += this.atc.get(vx);
			}

			uzc.xzx /= hb.ml.akb;

			uzc.ebq = hb.ml.whx.length;

			if (uzc.xzx > klu.jur)
			{
				klu.jur = uzc.xzx;
			}

			klu.tbi.push(hb.ml.tbi);
		}

		rvc.tbi = this.rhy.nef(klu.tbi);

		for (let hb of qk)
		{
			const uzc = hb.uzc;

			uzc.xzx = dlq.xzx * (uzc.xzx / klu.jur);
			uzc.cpf = dlq.cpf * +hb.ml.cpf;
			uzc.ebq = dlq.ebq * rvc.ebq(uzc.ebq);
			uzc.tbi = dlq.tbi * rvc.tbi(hb.ml.tbi);
			uzc.whk = dlq.whk * rvc.whk(hb.whk);

			uzc.aji = zt.chu(Object.values(uzc));
		}

		qk.sort(
			(a, b) => b.uzc.aji - a.uzc.aji
		);

		for (let i = 0, n = qk.length; i < n; i++)
		{
			const a = qk[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = qk[k];

				if (b.zfx == a.zfx && !b.frm.agr.msg)
				{
					b.hidden = true;
				}

				if (!b.hidden && !b.lhg)
				{
					const shw = zt.pix(a.ml.oh, b.ml.oh);
					const ovw = (a.ml.oh.length + b.ml.oh.length) / 2;

					if (shw.length == b.ml.akb)
					{
						b.hidden = true;
					}

					if (shw.length / ovw > .57)
					{
						const ltp = a.ml.whx[0] || 0;
						const jra = b.ml.whx[0] || 0;

						if (this.paq.kjn(ltp, jra))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < qk.length; i++)
		{
			const hb = qk[i];

			let ftg;

			if (i == 0 && !hb.lhg)
			{
				const ndv = this.zrp.fy.toLowerCase();
				const htx = hb.frm.lyj;

				if (ndv == htx)
				{
					ftg = true;
				}
			}

			if (hb.lhg && hb.xlg.length == 1)
			{
				const uyb = new Date(hb.frm.pqx);
				const ltp = new Date(hb.tbe.pqx);

				if (.001 * (ltp - uyb) < 300)
				{
					ftg = true;
				}
			}

			if (ftg)
			{
				zt.zuw(i, qk);
			}
		}

		for (let hb of qk)
		{
			this.kag.dcw(hb.jc, hb.zfx);

			for (let zfx of hb.xlg)
			{
				this.kag.jod(zfx, hb.jc)
			}
		}

		for (let hb of qk)
		{
			if (hb.whk == 0) continue;

			for (let hnb of hb.sen)
			{
				const nv = hnb.kdr;

				const piy = zt.rp(jx[31], nv);

				for (let agr of hve.rau(piy))
				{
					if (this.mxg(agr).test(nv))
					{
						hnb.hjh = agr;
						break;
					}
				}
			}

			if (hb.length > 2)
			{
				let vra, pm, eja = true;

				const n = hb.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					const hnb = hb.iug[i];

					if (eja)
					{
						vra = [];
						pm = [];
						eja = false;
					}

					const fz = hnb.agr;

					if (zt.gy(vra) == fz) {
						i++;
					}
					else if (vra.includes(fz) || zt.qbd(vra).length < 2) {
						pm.push(hnb);
						vra.push(fz);

						if (i + 1 < n)
							continue;
					}

					if (pm.length > 2)
					{
						let tnj = !pm.some(hnb => hnb.hjh && !vra.includes(hnb.hjh));

						if (tnj)
						{
							pm.forEach(hnb =>
								hnb.hjh = vra.find(agr => agr != hnb.agr)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						eja = true;
					}
				}
			}

			for (let hlc, i = 1; i < hb.length; i++)
			{
				const hnb = hb.iug[i];

				if (!hnb.hjh)
				{
					if (hlc && hlc.hjh == hnb.agr)
					{
						hnb.hjh = hlc.agr;

						hb.vqn(hnb, hlc);
					}
				}
				else {
					const fwc = hnb.hjh;

					let xru;

					for (let k = i - 1; k >= 0; k--)
					{
						const hlc = hb.iug[k];

						if (k == 0)
						{
							if (hlc.agr == fwc)
							{
								xru = '';
							}

							break;
						}

						if (hlc.agr == fwc)
						{
							hb.vqn(hnb, hlc);

							if (hlc.children.length == 1)
							{
								xru = '';
							}

							break;
						}
					}

					if (xru == null)
					{
						const zi = new mbj(fwc.odc, fwc.jc);

						xru = hnb.ekm(zi) + ' ';
					}

					hnb.kdr = hnb.kdr.replace(this.mxg(fwc), xru);
				}

				hlc = hnb;
			}

			for (let i = 1, n = hb.length; i < n; i++)
			{
				const hnb = hb.iug[i];

				if (hnb.su || hnb.children.length)
				{
					zt.zuw(i, hb.iug);
					i--;
					n--;
				}
			}

			for (let zro = false, i = 1; i < hb.length; i++)
			{
				let hnb = hb.iug[i];

				zro = (zro || !hnb.jpz);

				if (hnb.bme)
				{
					continue;
				}

				if (!zro)
				{
					const nv = hnb.kdr;

					if (hb.length > 2 || ['+','@'].includes(nv[0]) || nv.length < 10)
					{
						hnb.wm();
					}
				}

				hnb.hjh && !hb.rta(hnb.hjh.jc) && hnb.wm();

				this.rfy(hnb.zfx, hb.jc) && hnb.wm();
			}
		}

		qk = qk.map(hb =>
		{
			if (hb.frm.hidden)
			{
				return [];
			}

			const iug = [];

			for (let i = 0; i < hb.length; i++)
			{
				const vk = hb.iug[i];

				vk.pn = dex.gwn(vk.kdr);

				vk.odc = vk.agr.odc;

				if (vk.pn.length < 2)
				{
					if (i == 0) return [];

					vk.wm();
				}

				iug.push(new zsk(vk));
			}

			return iug;
		});

		return qk.filter(hb => hb.length > 0);
	},

	fnx(fy)
	{
		return fy.length > 500 || zt.rtc(jx[32], fy) > 3;
	},

	ps(zfx)
	{
		return this.usd == zfx;
	},

	rfy(zfx, qcf)
	{
		if (!this.usd || this.ps(zfx))
		{
			return false;
		}

		for (let ymv of this.kag.of(zfx))
		{
			if (ymv == qcf)
			{
				return false;
			}

			if (!this.kag.djz(ymv, zfx))
			{
				return true;
			}
		}
	},

	mxg(agr)
	{
		const jc = agr.jc;

		if (jc in this.zah)
		{
			return this.zah[jc];
		}

		return this.zah[jc] = zt.akr('^[+@]?%s[-\\s,.:?!]*', agr.htl, 'i');
	}
};

const dex = {
	gwn(ix)
	{
		let fy = new bjx(ix);

		fy.hcx('<') && fy.replace(jx[33], '&lt;');

		fy.ora && fy.toLowerCase();

		if (fy.hcx('.'))
		{
			fy.charAt(-1) == '.' && fy.charAt(-2) != '.' && fy.cux(1);

			fy.replace(jx[34], (m) => m.replace(jx[35], ''));
		}

		if (fy.hcx('\n'))
		{
			fy.replace(jx[36], function(m, i)
			{
				let x = fy.charAt(i - 1);

				return zt.snd(x) ? '. ' : ' ';
			});
		}

		if (fy.ucw('*_'))
		{
			fy.replace(jx[37], '$2');
		}

		if (fy.ucw('(,!?.)'))
		{
			fy.replace(jx[38], '?!');

			fy.replace(jx[39], '$1');

			fy.replace(jx[40], '$1 $2');

			fy.hcx('!') && fy.replace(jx[41], '$1');
		}

		if (fy.ucw('$£€'))
		{
			fy.replace(jx[42], (_, kze, bnu) =>
			{
				jx[43].test(kze) && (kze = Math.round(kze));

				return bnu + kze;
			});
		}

		fy.hcx(':') && fy.replace(jx[44], ': ');

		fy.hcx('&') && fy.replace(jx[45], ' and ');

		fy.hcx('"') && fy.replace(jx[46], '" - $1');

		return ihr.vpf(fy.emr);
	},

	pun(ix)
	{
		return ix.length < 28 && this.lgm(ix) || this.ksk();
	},

	lgm(fy)
	{
		let oh;

		if (!jx[47].test(fy))
		{
			if (zt.uri(fy))
			{
				fy = zt.hsp(fy);
			}

			oh = fy.split(' ');

			if (oh.length == 1)
			{
				return zt.uh(oh[0], 'PRE_CASE');
			}
		}
		else {
			oh = zt.fe(jx[48], fy);
		}

		oh = oh.map(vx =>
		{
			switch (true)
			{
				case vx.length < 2 || zt.zn(vx):
					return '';

				default:
					return zt.uh(vx);
			}
		});

		oh = oh.filter(
			(vx, i) => vx != '' && i == oh.indexOf(vx)
		);

		return oh.join(' ');
	},

	ksk()
	{
		return 'user' + zt.de(4);
	}
};

const gsb = {
	ixv(fy)
	{
		fy = fy.toLowerCase();

		fy = fy.replace(jx[49], ' ');

		return zt.qgl(fy);
	},

	onx(fy)
	{
		return fy.replace(jx[50], '$1');
	}
};

const ihr = {
	tpy: {
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

	vpf(fy)
	{
		return fy.replace(jx[51], m => this.get(m));
	},

	get(wj)
	{
		wj = wj.toLowerCase();

		(wj.length == 2) || (wj = wj.slice(0, 2));

		return this.tpy[wj] || wj;
	}
};

class asw
{
	constructor()
	{
		this.map = {};
	}

	ehg(vx)
	{
		this.map[vx] = ++this.map[vx] || 0;
	}

	get(vx)
	{
		return this.map[vx] || 0;
	}
}

class oqe
{
	constructor()
	{
		this.map = {};
	}

	hne(pta)
	{
		for (let nwv in this.map)
		{
			if (this.kjn(pta, nwv))
			{
				return this.map[nwv];
			}
		}

		return this.rdc(pta);
	}

	rdc(qr)
	{
		return this.map[qr] = zt.zb('TS%s', qr);
	}

	kjn(ltp, jra)
	{
		return Math.abs(jra - ltp) < 5;
	}
}

class waf
{
	constructor()
	{
		this.vra = {};

		this.qk = {};
	}

	of(gzc)
	{
		return this.vra[gzc];
	}

	djz(fuf, gzc)
	{
		return this.qk[fuf] == gzc;
	}

	dcw(jc, rdz)
	{
		this.qk[jc] = rdz;
	}

	jod(jc, fuf)
	{
		if (!this.vra[jc])
		{
			this.vra[jc] = new cu;
		}

		this.vra[jc].push(fuf);
	}
}

class xa
{
	constructor(dm)
	{
		dm.ln = this.ln.bind(this);

		this.dm = dm;

		this.oph = 0;

		this.mlp = new Promise(tf => tf(null));

		this.pqa;

		this.hfp = new hfp;

		this.tus = new ezq([], {});
	}

	async ln(nd)
	{
		const ta = nd.tx.ta;

		try {
			const zvo = await this.hfp.diy(ta);

			this.pqa = new jmp(nd.tx, zvo);
		}
		catch (yq) {
			return this.tei(yq);
		}

		switch (nd.ez)
		{
			case 'wf':
				return this.hcm(ta);

			case 'xp':
				return this.ld(ta);
		}
	}

	tei(jc)
	{
		this.vgq('bg', {jc});
	}

	ld(ta)
	{
		const n = this.pqa.xp;

		if (0 < n && n < 1000)
		{
			this.eir(ta);
		}

		this.vgq('xp', n);
	}

	async hcm(ta)
	{
		if (this.pqa.zrp.yrk)
		{
			return this.tei('pk');
		}

		this.syx();
	}

	async syx()
	{
		let r = new str(this.xou);

		try {
			if (this.pqa.zrp.lrk)
			{
				await this.hdg(r);
			}
			else {
				await this.xsg(r);
			}

			!this.dsx(r.jc) && this.vgq('wf', r);
		}
		catch (yq) {
			!this.dsx(r.jc) && this.tei(yq);
		}
	}

	async hdg(rjd)
	{
		const icr = await tv.kp.vbh(this.pqa.fjf, this.pqa.zrp.fy);

		if (icr.bg)
		{
			throw icr.bg;
		}

		const vra = new dop(icr.tx);

		const qk = mqc.xtp(icr.tx, vra, this.pqa);

		rjd.moz(qk);
		rjd.qit(-2);
	}

	async xsg(rjd)
	{
		const ta = this.pqa.ta;
		const dw = this.pqa.zrp.fy;

		const p = rjd.qit(this.pqa.xp);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.pqa.zrp.nhc)
		{
			throw 'wy';
		}

		let qk, vra;

		if (p < 1000)
		{
			const yq = await this.eir(ta);

			if (yq)
			{
				throw yq;
			}

			vra = this.tus.vra;

			qk = this.tus.zrp(dw);
		}
		else {
			const icr = await tv.kp.bwj(ta, dw);

			if (icr.bg)
			{
				throw icr.bg;
			}

			vra = new dop(icr.tx);

			qk = icr.tx;
		}

		qk = mqc.xtp(qk, vra, this.pqa);

		rjd.moz(qk);
	}

	vgq(ez, tx)
	{
		this.dm.wd(ez, tx);
	}

	async eir(ta)
	{
		await this.mlp;

		if (ta != this.tus.jc)
		{
			this.mlp = new Promise(async tf =>
			{
				const icr = await tv.kp.bxc(ta);

				if (icr.eh)
				{
					this.tus = new ezq(icr.tx, this.pqa);
				}

				tf(icr.bg);
			});
		}

		return this.mlp;
	}

	get xou()
	{
		return ++this.oph;
	}

	dsx(fxq)
	{
		return fxq != this.oph;
	}
}

class hfp
{
	constructor()
	{
		this.map = {};
	}

	async diy(ta)
	{
		let x = this.map[ta];

		if (x == undefined)
		{
			x = this.qax(ta);
		}

		if (x instanceof Promise)
		{
			const icr = await x;

			if (icr.bg)
			{
				this.lrt(ta);

				throw icr.bg;
			}

			x = this.cyf(ta, icr.tx);
		}

		return x;
	}

	abr(ta, value)
	{
		return this.map[ta] = value;
	}

	qax(ta)
	{
		const r = tv.kp.mpw(ta);

		return this.abr(ta, r);
	}

	cyf(ta, vir)
	{
		return this.abr(ta, vir);
	}

	lrt(ta)
	{
		this.abr(ta, undefined);
	}
}

class ybk
{
	constructor(q)
	{
		this.fy = '';
		this.hg = '';
		this.lrk = false;
		this.yrk = false;

		this.phr(q);
	}

	get nhc()
	{
		return this.hg == 'gb';
	}

	get gfk()
	{
		return this.hg == 'tzr';
	}

	phr(q)
	{
		const cnw = q.replace(jx[52], '');

		if (cnw != q)
		{
			this.lrk = true;

			if (cnw == '')
			{
				this.yrk = true;
			}
		}

		this.fy = cnw;
		this.hg = ybk.msu(cnw);
	}

	static msu(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'gb';

			case (jx[53]).test(q):
				return 'tzr';

			default:
				return '';
		}
	}
}

class jmp
{
	constructor(zql, qur)
	{
		Object.assign(this, ...[zql, qur]);

		this.zg = Math.floor(zql.zg) || Infinity;
		this.be = Math.floor(zql.be);

		this.zrp = new ybk(zql.dw);
	}
}

class str
{
	constructor(fxq)
	{
		this.jc = fxq;
		this.qk = [];
		this.ry = 0;
		this.ds = 0;
	}

	moz(qk)
	{
		this.qk = qk;
		this.ry = qk.length;
	}

	qit(n)
	{
		return this.ds = n;
	}
}

let fz;

const tv = new aca;
const jf = new js;
const sao = new fkn;
const ze = new bz;
const wt = new dk;
const lo = new dn;

const jx = [
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