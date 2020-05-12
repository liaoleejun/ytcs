/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const tz = {};

for (let al of 'object array string regex date math type std'.split(' '))
{
	tz[al] = {};
}

tz.ug = function(xm, nc)
{
	return xm != undefined && xm.constructor === nc;
}

tz.dt = function()
{
	return tz.dl(9);
}

tz.ue = function(oc)
{
	return yt[0].test(oc);
}

tz.oq = function(up)
{
	return Object.keys(up).length == 0;
}

tz.ir = function(wn, up)
{
	for (let ob in up)
	{
		const to = up[ob];

		if (ob == wn) return to;
		if (to == wn) return ob;
	}
}

tz.xy = function(up, mp)
{
	let oc = '';

	for (let ob in up)
	{
		oc += ob + '=' + up[ob] + mp;
	}

	return oc.slice(0, -1);
}

tz.xh = function(iw, eo, jt)
{
	const vm = eo + 1;

	return jt.slice(vm, vm + iw);
}

tz.ap = function(jt)
{
	return jt[jt.length - 1];
}

tz.xk = function(rx, vb)
{
	rx += '?';

	for (let ob in vb)
	{
		rx += ob + '=' + encodeURIComponent(vb[ob]) + '&';
	}

	return rx.slice(0, -1);
}

tz.xi = function(oc, uz)
{
	if (tz.ug(uz, Array))
	{
		let i = 0;

		return oc.replace(yt[1], _ => uz[i++]);
	}

	return oc.replace('%s', uz);
}

tz.gr = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

tz.zw = function(oc, ve)
{
	const nu = tz.xi('(%s)', ve.join('|'));

	return oc.split(new RegExp(nu)).filter(s => s !== '');
}

tz.dq = function(oc)
{
	return oc.toUpperCase();
}

tz.lp = function(oc)
{
	return oc.toLowerCase();
}

tz.et = function(oc, kp)
{
	if (!kp)
	{
		oc = oc.toLowerCase();
	}

	return oc[0].toUpperCase() + oc.slice(1);
}

tz.ky = function(zx, oc)
{
	return oc.match(zx) || [];
}

tz.ha = function(zx, oc)
{
	if (zx.global) return '';

	const m = tz.ky(zx, oc);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

tz.la = function()
{
	return Math.floor(Date.now() / 1000);
}

tz.pz = function(tm)
{
	return tm < tz.la();
}

tz.ys = function(q)
{
	const qv = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = tz.ha(yt[2], q);

	return Date.now() + (x[0] * qv[x[1]] * 1000);
}

tz.mb = function(ta)
{
	let x = ta.split(':'),
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

tz.nr = function(ld)
{
	let jt = [];

	jt.push(ld / 3600);

	ld %= 3600;

	jt.push(ld / 60);

	jt.push(ld % 60);

	jt = jt.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return jt.join(':').replace(yt[3], '');
}

tz.dl = function(jo)
{
	return Math.random().toString().slice(2, jo + 2);
}

tz.uw = function(zf, cf)
{
	const ek = Math.random() * (cf - zf) + zf;

	return Math.floor(ek);
}

tz.ux = function(x, a, b)
{
	return x >= a && x <= b;
}

tz.pi = function(a, b)
{
	return 100 * (a / b);
}

tz.be = function()
{
	let pv, me = 0;

	try {
		pv = [oa, wy, ak];
	}
	catch (e) {
		pv = [dn, ak];
	}

	pv.forEach(
		yg => me += yg.toString().length
	);

	return me != 3410;
}

class ka
{
	constructor(ew, ey)
	{
		this.ew = ew;
		this.ey = ey;
	}
}

class pt
{
	constructor(ly, ew, ey)
	{
		this.ly = ly;
		this.pw = new ka(ew, ey);
	}
}

class yc extends Array
{
	constructor(de)
	{
		super();

		if (de != null)
		{
			super.push(de);
		}
	}

	push(or)
	{
		return !this.includes(or) && super.push(or);
	}
}

class rh
{
	constructor(tl, ad)
	{
		const yg = tl.status;

		this.yg = yg;
		this.dx = false;
		this.jy = false;
		this.mu = null;
		this.ey = null;

		switch (ad)
		{
			case 'error':
				return this.sp('qh');

			case 'timeout':
				return this.sp('vk');

			default:
			{
				this.dx = (yg == 200);

				if (yg >= 500)
				{
					return this.sp('gh');
				}

				try {
					this.ey = JSON.parse(tl.responseText);
				}
				catch (e) {
					this.ey = tl.responseText;
				}
			}
		}
	}

	vh(jg)
	{
		this.mu = jg;
	}

	sp(jg)
	{
		this.vh(jg);

		this.jy = true;
	}
}

class zr
{
	constructor(ey, kw)
	{
		Object.assign(this, ey);

		Object.defineProperty(this, 'kw', {
			value: kw
		});
	}

	set(ob, to)
	{
		this[ob] = to;

		this.mr();
	}

	mr()
	{
		return ki.set(this.kw, this);
	}
}

class ak extends zr
{
	constructor(ey, kw)
	{
		super(ey, kw);
	}

	get pg()
	{
		return Boolean(this.ox)
	}

	get ox()
	{
		return this[0];
	}

	get yq()
	{
		return this[1];
	}

	get ck()
	{
		return tz.pz(this.yq);
	}

	get bm()
	{
		const rl = this.yq.toString().split('').pop();

		return Boolean(+rl);
	}

	set ox(ob)
	{
		this.set(0, ob);
	}

	set yq(eb)
	{
		this.set(1, eb);
	}

	get gs()
	{
		let s = this.yq.toString(),
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
	constructor(vj)
	{
		if (vj)
		{
			this.po();
		}
	}

	xv(wi, bh, ow)
	{
	}

	po()
	{
		chrome.runtime.onMessage.addListener(
			this.xv.bind(this)
		);
	}
}

class wm extends ab
{
	constructor()
	{
		super(false);
	}

	xv(wi, bh, ow)
	{
		const ey = wi.ey;

		switch (wi.ew)
		{
			case 'jp':
				return this.yu(ey);
		}
	}

	yu(jp)
	{
		if (jp == 'qt')
		{
			rk.vm();
		}
	}

	xl()
	{
		return this.ph('xl');
	}

	qr(fd)
	{
		return this.ph('qr', fd);
	}

	xs(ox)
	{
		return this.ph('xs', ox);
	}

	jf(vp)
	{
		return this.ph('jf', vp);
	}

	te()
	{
		return this.ph('te');
	}

	ph(ew, ey)
	{
		const wi = new ka(ew, ey);

		return new Promise(ow =>
		{
			try {
				chrome.runtime.sendMessage(wi, ow);
			}
			catch (e) {
			}
		});
	}
}

class he extends ab
{
	constructor()
	{
		super(true);
	}

	xv(wi, bh, ow)
	{
		const xf = function(...uz)
		{
			try {
				ow(...uz);
			}
			catch (e) {
			}
		};

		dc.tb.then(_ =>
		{
			const ey = wi.ey;

			switch (wi.ew)
			{
				case 'xl':
					dc.xl().then(xf);
				break;

				case 'qr':
					dc.qr(ey).then(xf);
				break;

				case 'xs':
					dc.xs(ey).then(xf);
				break;

				case 'jf':
					au.jc.jf(ey).then(xf);
				break;

				case 'te':
					dc.iu();
				break;
			}
		});

		return true;
	}
}

class ao
{
	get(ob)
	{
		return new Promise(pe =>
		{
			try {
				chrome.storage.local.get(ob, np =>
					pe(typeof ob == 'string' ? np[ob] : np)
				);
			}
			catch (e) {
			}
		});
	}

	set(ob, to)
	{
		let ey;

		if (typeof ob == 'object')
		{
			ey = ob;
		}
		else {
			ey = {[ob]:to};
		}

		return new Promise(cv =>
		{
			try {
				chrome.storage.local.set(ey, cv);
			}
			catch (e) {
			}
		});
	}

	db()
	{
		return new Promise(cv =>
		{
			try {
				chrome.storage.local.clear(cv);
			}
			catch (e) {
			}
		});
	}
}

class vqncd
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			pt => this.xa(pt)
		);

		Port.onDisconnect.addListener(
			_ => this.pq()
		);

		this.Port = Port;

		this.en = {
		};

		this.ks = false;
	}

	xv(m)
	{
	}

	ev(ly, ew, ey)
	{
		const jx = new pt(ly, ew, ey);

		if (!this.ks)
		{
			this.Port.postMessage(jx);
		}
	}

	xa(x)
	{
		this.oz(x.ly).xv(x.pw);
	}

	oz(ly)
	{
		return this.en[ly] || this;
	}

	tn(ly, xv, pq)
	{
		return this.en[ly] = new qd(this, ly, xv, pq);
	}

	pq()
	{
		this.ks = true;

		for (let ly in this.en)
		{
			this.oz(ly).pq();
		}
	}
}

class cr extends vqncd
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	xv(wi)
	{
		const ey = wi.ey;

		switch (wi.ew)
		{
			case 'ou':
				return dy.qm(ey);
		}
	}

	tn(ly, xv, pq)
	{
		this.ev(null, 'tn', ly);

		return super.tn(ly, xv, pq);
	}

	pq()
	{
		super.pq();

		rk.ql();
	}
}

class si extends vqncd
{
	constructor(zg)
	{
		super(zg);
	}

	xv(wi)
	{
		switch (wi.ew)
		{
			case 'tn':
				return this.tn(wi.ey);
		}
	}

	tn(ly)
	{
		const yk = super.tn(ly);

		switch (ly)
		{
			case 'oi':
				return new dv(yk);
		}
	}
}

class lo
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			tp => this.dm(tp)
		);

		this.ia = [];
	}

	dm(zg)
	{
		this.ia.push(
			new si(zg)
		);
	}

	uk(su)
	{
		for (let zg of this.ia)
		{
			zg.ev(null, 'ou', su);
		}
	}
}

class qd
{
	constructor(zg, ly, xv, pq)
	{
		this.zg = zg;

		this.ly = ly;

		if (xv)
		{
			this.xv = xv;
		}

		if (pq)
		{
			this.pq = pq;
		}
	}

	ev(ew, ey)
	{
		this.zg.ev(this.ly, ew, ey);
	}

	xv(m)
	{
	}

	pq()
	{
	}
}

tz.kzn = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

tz.gjz = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

tz.egw = function(gm, ds)
{
	if (ds)
	{
		const kf = Object.create(
			Object.getPrototypeOf(gm)
		);

		return Object.assign(kf, gm);
	}

	return {...gm};
}

tz.qxa = function(bd, iq, jt)
{
	let i = jt.indexOf(bd);

	if (i >= 0)
	{
		jt[i] = iq;
	}
}

tz.fzu = function(gd, wg, jt)
{
	if (wg != gd)
	{
		const or = jt[gd];
		jt.splice(gd, 1);
		jt.splice(wg, 0, or);
	}
}

tz.gci = function(gd, jt)
{
	tz.fzu(gd, Infinity, jt);
}

tz.nfo = function(...td)
{
    td.sort(
    	(a, b) => a.length - b.length
    );

	return td.shift().filter(or =>
	{
		for (let ea of td)
        {
			if (!ea.includes(or))
				return false;
        }

		return true;
    });
}

tz.tef = function(jt)
{
	return jt.filter((value, fc) => jt.indexOf(value) == fc);
}

tz.hzc = function(lq, ls)
{
	return lq.join(ls || '.');
}

tz.unh = function(oc, tj)
{
	if (tj)
	{
		oc = oc.replace(yt[4], '\n');

		oc = oc.replace(yt[5], ' ');
	}
	else {
		oc = oc.replace(yt[6], ' ');

	}

	return oc.trim();
}

tz.xvq = function(oc, nu, ow)
{
	return oc.replace(nu, (rb, om) =>
	{
		return rb.replace(om, ow(om));
	});
}

tz.tgs = function(wa)
{
	return yt[7].test(wa);
}

tz.jzu = function(oc)
{
	return !yt[8].test(oc);
}

tz.tgo = function(oc)
{
	return oc.toLowerCase().replace(yt[9], tz.dq);
}

tz.meu = function(oc)
{
	return oc == oc.toUpperCase();
}

tz.oul = function(oc)
{
	return oc == oc.toLowerCase();
}

tz.ays = function(oc)
{
	return tz.oul(oc) || tz.meu(oc);
}

tz.jhd = function(zx, oc)
{
	return tz.ky(zx, oc).length;
}

tz.yim = function(oc)
{
	return tz.jhd(yt[10], oc) + 1;
}

tz.mgv = function(oc)
{
	return oc ? oc.split(' ') : [];
}

tz.ixt = function(i, oc)
{
	return oc.substring(0, i) + 'x' + oc.substring(++i);
}

tz.sod = function(s)
{
	return String(s).replace(yt[11], '\\$1').replace(yt[12], '\\x08');
}

tz.scq = function(nu, uz, cs)
{
	if (uz.constructor === Array)
	{
		uz = uz.map(tz.sod);
	}
	else {
		uz = tz.sod(uz);
	}

	nu = tz.xi(nu, uz);

	return new RegExp(nu, cs);
}

tz.fbp = new function()
{
	const qv = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const jw = (jq) => new Date(jq).getTime() / 1000;

	return (jq) =>
	{
		const cd = tz.la() - jw(jq);

		for (let [rl, yl] of qv)
		{
			let zm = cd / yl;

			if (zm >= 1)
			{
				zm = Math.floor(zm);

				return tz.xi('%s %s%s ago', [zm, rl, (zm > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

tz.jys = function(jt)
{
	return jt.reduce((a, b) => a + b, 0);
}

tz.hue = function(jt)
{
	return tz.plt(tz.jys(jt), jt.length);
}

tz.plt = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const le = {
	bu(rx, kj, bg)
	{
		return this.zu('GET', rx, kj, null, bg);
	},

	doa(rx, kj, pw, bg)
	{
		return this.zu('POST', rx, kj, pw, bg);
	},

	zu(ub, rx, kj, pw, bg)
	{
		if (kj)
		{
			rx = tz.xk(rx, kj);
		}

		if (pw)
		{
			pw = this.dlt(pw);
		}

		return new Promise(pe =>
		{
			let tl = new XMLHttpRequest;

			if (bg != Infinity)
			{
				let beh = 0;

				tl.ontimeout = (e) =>
				{
					if (++beh < 3)
					{
						return this.syt(tl, ub, rx, pw);
					}

					tl.onerror(e);
				}

				tl.timeout = 5000;
			}

			tl.onload = tl.onerror = (e) => pe(
				new rh(tl, e.type)
			);

			this.syt(tl, ub, rx, pw);
		});
	},

	syt(tl, ub, rx, pw)
	{
		tl.open(ub, rx);
		tl.send(pw);
	},

	dlt(vb)
	{
		let brh = new FormData;

		for (let ob in vb)
		{
			brh.append(ob, vb[ob]);
		}

		return brh;
	}
}

class iut
{
	constructor(czd)
	{
		this.map = {};

		this.jng = Object.getOwnPropertyNames(Object.prototype);

		this.fju = czd;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(ob)
	{
		ob = this.ubm(ob);

		return this.yij(this.map[ob]);
	}

	set(ob, to)
	{
		ob = this.ubm(ob);

		this.map[ob] = this.yij(to);
	}

	saq(ob)
	{
		return this.ubm(ob) in this.map;
	}

	rjb(ob)
	{
		!this.saq(ob) && this.set(ob);
	}

	ubm(ob)
	{
		if (this.jng.includes(ob))
		{
			return ob + '*';
		}

		return ob;
	}

	yij(to)
	{
		if (to == undefined && this.fju)
		{
			return new this.fju;
		}

		return to;
	}
}

class qkd
{
	constructor(xfs, cme)
	{
		this.aq = xfs.aq;

		this.euz = xfs.euz;

		this.cme = cme;

		this.hzr = [];

		this.umw = new yc;

		this.yri(xfs);
	}

	yri(dg)
	{
		if (this.euz == dg.euz)
		{
			dg.yng = true;
		}

		this.umw.push(dg.euz);

		this.hzr.push(dg);
	}

	xpc(aq)
	{
		return this.umw.includes(aq);
	}

	sym()
	{
		this.gpx.forEach(kvq => kvq.hidden = true);
	}

	qxy(ij, ri)
	{
		this.roi(ri.yti, ij);

		ri.xu(ij);
	}

	roi(a, b)
	{
		const gd = this.hzr.indexOf(b);
		const wg = this.hzr.indexOf(a) + 1;

		tz.fzu(gd, wg, this.hzr);
	}

	get length()
	{
		return this.hzr.length;
	}

	get rso()
	{
		return this.umw.length;
	}

	get xfs()
	{
		return this.hzr[0];
	}

	get zef()
	{
		return this.hzr[1];
	}

	get frj()
	{
		return this.length > 1;
	}

	get gpx()
	{
		return this.hzr.slice(1);
	}

	get dux()
	{
		return this.hzr.length - 1;
	}

	get hidden()
	{
		return this.xfs.hidden;
	}

	set hidden(re)
	{
		this.xfs.hidden = re;
	}

	get kf()
	{
		const kf = tz.egw(this, true);

		kf.hzr = this.hzr.map(tz.egw);

		return kf;
	}
}

class lgl
{
	constructor(kar)
	{
		this.ho = lgl.tpd(kar);
		this.nw = lgl.xmo(this.ho);
	}

	static xmo(ho)
	{
		return ['he','ar'].includes(ho) ? 'rtl' : 'ltr';
	}

	static tpd(oc)
	{
		let dzf = .57 * tz.yim(oc);

		switch (true)
		{
			case dzf < tz.jhd(yt[13], oc): return 'en';

			case dzf < tz.jhd(yt[14], oc): return 'ar';

			case dzf < tz.jhd(yt[15], oc): return 'he';

			default: return '';
		}
	}

	static get dlc()
	{
		if (!this.teh)
		{
			this.teh = navigator.languages.map(ho => ho.slice(0, 2));
		}

		return this.teh;
	}
}

class ilg
{
	constructor(syw)
	{
		const _ = syw.items[0];

		this.bly = _.snippet.channelId;
		this.uq = _.statistics.commentCount;

		if (this.uq == undefined)
		{
			this.uq = -1;
		}
		else {
			this.uq = +this.uq;
		}
	}
}

class ayi
{
	constructor(syw)
	{
		const _ = syw.snippet;

		this.aq = syw.id;
		this.ig = _.videoId;
		this.euz = _.authorChannelId.value;
		this.em = _.authorProfileImageUrl;
		this.sdt = _.authorDisplayName;
		this.zxy = _.textOriginal;
		this.rwe = _.publishedAt;
		this.dop = _.likeCount;
		this.yng = null;
		this.mw = null;
	}
}

class flo
{
	constructor(ayi)
	{
		Object.assign(this, ayi);

		this.wxs = '';
		this.jdl = '';
		this.dz = {};
		this.children = [];
		this.ri = null;
		this.zcb = null;
		this.sjg = null;
		this.odz = null;
		this.hidden = false;

		this.qsl();
		this.veu();
		this.syj();
		this.kwn();
		this.ewz();
	}

	qsl()
	{
		this.wxs = this.zxy.replace(yt[16], '');

		delete this.zxy;
	}

	ewz()
	{
		this.jdl = blz.avf(this.wxs);

		this.odz = new lgl(this.jdl);

		if (this.odz.ho == 'en')
		{
			this.jdl = blz.vzm(this.jdl);
		}
	}

	veu()
	{
		if (!this.wxs.includes('/'))
			return;

		this.wxs = this.wxs.replace(yt[17], (rx) =>
		{
			let x;

			const oji = bdr.cml(rx);

			if (oji) {
				if (oji.ig == this.ig)
				{
					x = new hv(this.ig, oji.my);
				}
				else {
					x = new az(oji);
				}
			}
			else {
				x = new gye(rx);
			}

			return this.atk(x);
		});
	}

	syj()
	{
		if (!this.wxs.includes('#'))
			return;

		this.wxs = this.wxs.replace(yt[18], (aks) =>
		{
			const x = new mnw(aks);

			return this.atk(x);
		});
	}

	kwn()
	{
		if (!this.wxs.includes(':'))
			return;

		this.wxs = this.wxs.replace(yt[19], (ta) =>
		{
			const x = new hv(this.ig, ta);

			return this.atk(x);
		});
	}

	atk(or)
	{
		this.dz[or.aq] = or;

		return or.aq;
	}

	ix()
	{
		this.hidden = true;

		for (let ij of this.children)
		{
			ij.ix();
		}
	}

	xu(ij)
	{
		ij.ri = this;

		this.children.push(ij);
	}

	get yti()
	{
		return tz.ap(this.children) || this;
	}

	get psy()
	{
		return this.children.some(ij => !ij.hidden);
	}
}

class quf
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.cb = x.cb;
		this.dz = x.dz;
		this.ig = x.ig;
		this.aq = x.aq;
		this.euz = x.euz;
		this.em = x.em;
		this.hkj = x.hkj;
		this.wh = x.wh;
		this.rwe = x.rwe;
		this.yng = x.yng;
		this.mw = x.mw;
		this.ho = x.odz.ho;
		this.nw = x.odz.nw;
		this.gw = x.children.length;
		this.nav = '';
		this.awy = '';

		this.rwe = tz.fbp(this.rwe);

		this.nav = tz.xi('https://www.youtube.com/channel/%s', this.euz);

		this.awy = tz.xi('https://www.youtube.com/watch?v=%s&lc=%s', [this.ig, this.aq]);
	}
}

class cox
{
	constructor(gy, ax)
	{
		this.aq = tz.dt();

		this.gy = gy;

		this.ax = ax;
	}
}

class hv extends cox
{
	constructor(ig, t)
	{
		super(null, 'hv');

		let gy, gb;

		if (tz.gr(t))
		{
			gy = tz.nr(t);
			gb = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			gy = t;
			gb = tz.mb(t);
		}

		this.ig = ig;
		this.my = gb;
		this.gy = gy;
	}
}

class az extends cox
{
	constructor(vb)
	{
		super('youtube.com', 'az');

		this.ig = vb.ig;
		this.my = vb.my;
	}
}

class gye extends cox
{
	constructor(rx)
	{
		super('', 'lc');

		this.rx = rx;

		this.xcl = rx.startsWith('https');

		this.gy = bdr.ugp(rx) || rx;
	}
}

class mnw extends cox
{
	constructor(mzt)
	{
		super(mzt, 'lc');

		this.rx = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(mzt);
	}
}

class ord extends cox
{
	constructor(hoe, bly)
	{
		super(hoe, 'lc');

		this.rx = 'https://www.youtube.com/channel/' + bly;
	}
}

class ick
{
	constructor(oc)
	{
		this.amn = '';
		this.nok = '';
		this.znh = [];
		this.lby = false;
		this.lgb = false;

		this.avf(oc);
		this.alp();
		this.dyv();
	}

	get pag()
	{
		return this.amn;
	}

	get length()
	{
		return this.amn.length;
	}

	get qtl()
	{
		return tz.meu(this.nok);
	}

	toLowerCase()
	{
		this.amn = this.amn.toLowerCase();
	}

	qmt(wa)
	{
		return this.znh.includes(wa);
	}

	qnp(nif)
	{
		for (let wa of nif)
		{
			if (this.qmt(wa)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.amn[this.length + i] : this.amn[i];
	}

	nge(n)
	{
		this.amn = this.amn.slice(0, -n);
	}

	replace(zx, ow)
	{
		this.amn = this.amn.replace(zx, ow);
	}

	avf(oc)
	{
		this.amn = tz.unh(oc, 'vbq');

		this.replace(yt[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(yt[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (tz.jzu(x))
				{
					return m.length > 3 && !yt[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	alp()
	{
		let gfg = tz.tef([...this.amn]).join('');

		this.nok = gfg.slice(0, 16);

		this.znh = tz.ky(yt[23], gfg);

		this.lby = this.znh.some(this.szj);
	}

	dyv()
	{
		if (!this.lby) return;

		for (let i = 0, k = 0, n = this.znh.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.znh[i] + this.znh[k];

				this.replace(tz.scq('(%s)+', x, 'g'), x);
			}
		}
	}

	szj(wa)
	{
		return wa.charCodeAt(0) > 255;
	}

	vmw(wa)
	{
		return wa == '\u{200D}';
	}
}

class dn
{
	constructor()
	{
		this.aq = chrome.runtime.id;

		this.ire = chrome.runtime.getManifest().version;

		this.tb = new Promise(pe => this.gqo = pe);

		this.tb.then(
			_ => this.nj()
		);

		this.wv();

		chrome.runtime.onInstalled.addListener(
			oji => this.tyc(oji)
		);

		chrome.browserAction.onClicked.addListener(
			_ => woi.ail('qt')
		);

		chrome.alarms.onAlarm.addListener(
			oji => this.vgx('xiv', oji)
		);

		chrome.runtime.onMessageExternal.addListener(
			wi => this.vgx('axz', wi)
		);
	}

	async wv()
	{
		if (await this.hox == this.ire)
		{
			const sf = await ki.get(['0', '1']);

			this.xuc = new zr(sf[0], 0);

			zk = new ak(sf[1], 1);

			if (zk.pg)
			{
				au.nk.qur(zk.ox);
			}

			this.gqo(1);
		}
	}

	async xl()
	{
		const wyv = await this.qr('/html/view.html');

		const yx = (
			this.ire < this.gkc
		);

		const nl = (
			!zk.pg || !zk.bm
		);

		return {
			re: {
				yx, nl
			},
			qb: wyv
		};
	}

	async xs(ox)
	{
		if (yt[24].test(ox))
		{
			const rnq = await au.nk.izt(ox);

			if (rnq)
			{
				const zk = await au.jc.jra(ox);

				if (zk)
				{
					await this.fw(zk);

					ia.uk('nv');

					return true;
				}
			}
		}

		return false;
	}

	swh(xez)
	{
		zk.yq = xez;

		ia.uk('fq');
	}

	iu()
	{
		if (zk.pg)
		{
			zk.ox = tz.ixt(19, zk.ox);
		}
	}

	fw(jph)
	{
		zk = new ak(jph, '1');

		return zk.mr();
	}

	async qr(fd)
	{
		const kfm = await le.bu(chrome.runtime.getURL(fd));

		return kfm.ey;
	}

	async onk(oji)
	{
		this.spz();

		if (oji.reason == 'install')
		{
			await this.ctx();
		}
		else {
			if (oji.previousVersion < '')
			{

			}
		}

		await this.bor();

		await this.wv();
	}

	async tyc(oji)
	{
		await this.onk(oji);

		switch (oji.reason)
		{
			case 'install':
				this.hej();
			break;

			case 'update':
				this.jsd();
			break;
		}

		woi.xlm();
	}

	hej()
	{

	}

	jsd()
	{

	}

	async vgx(zqk, ey)
	{
		await this.tb;

		switch (zqk)
		{
			case 'xiv':
				return this.pie(ey);

			case 'axz':
				return this.gbe(ey);
		}
	}

	pie(xiv)
	{
		const sdi = xiv.name;

		switch (sdi)
		{
			case 'wak':
				this.wak();
		}
	}

	gbe(wi)
	{
		return new qnr().xv(wi);
	}

	async wak()
	{
		const v = await au.jc.owa();

		if (v)
		{
			this.rho(v);
		}
	}

	nj()
	{
		if (zk.pg)
		{
			if (tz.be() || !zk.gs)
			{
				this.iu();
			}
		}
	}

	get hox()
	{
		return ki.get('schemaVersion');
	}

	bor()
	{
		return ki.set('schemaVersion', this.ire);
	}

	get gkc()
	{
		return this.xuc.latestVersion;
	}

	rho(v)
	{
		this.xuc.set('latestVersion', v);
	}

	ctx()
	{
		return ki.set({
			0: {
				latestVersion: this.ire
			},
			1: {},
		});
	}

	spz()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('wak', {periodInMinutes:240});
	}
}

class qnr
{
	xv(wi)
	{
		wi = tz.gjz(wi);

		switch (wi.issuer)
		{
			case 'authServer':
				return this.cgk(wi.data);
		}
	}

	cgk(ey)
	{
		if (ey.id == 'pa')
		{
			dc.swh(ey.token);
		}
	}
}

class kdm
{
	constructor()
	{
		this.jc = new yde;

		this.nk = new nqe;
	}
}

class yde
{
	constructor()
	{
		this.iax = 'https://api.lett.app/cs';
	}

	async jra(ox)
	{
		const kfm = await this.get('/auth', {
			apiKey:ox,
			token:dc.aq
		});

		if (kfm.dx)
		{
			return kfm.ey;
		}
	}

	async owa()
	{
		const kfm = await this.get('/update');

		if (kfm.dx)
		{
			return kfm.ey.version;
		}
	}

	async jf(vp)
	{
		const vb = {
			extId:dc.aq,
			apiKey:zk.ox,
			amount:vp,
		};

		const kfm = await this.get('https://api.lett.app/donate/accept', vb, Infinity);

		if (kfm.dx)
		{
			return kfm.ey.url;
		}
	}

	async get(xgm, vb, bg)
	{
		if (xgm[0] == '/')
		{
			xgm = this.iax + xgm;
		}

		const kfm = await le.bu(xgm, vb, bg);

		if (!kfm.dx && !kfm.jy)
		{
			kfm.vh(kfm.ey.error);
		}

		return kfm;
	}
}

class zrm
{
	constructor()
	{
		this.iax = 'https://www.googleapis.com/youtube/v3';
	}

	qur(ox)
	{
		this.ob = ox;
	}

	async izt(ox)
	{
		this.qur(ox);

		const kfm = await this.haj('jNQXAC9IVRw');

		return kfm.dx;
	}

	fht(ig)
	{
		return this.fo({
			videoId:ig
		});
	}

	vzd(ig, zur)
	{
		return this.mq({
			videoId:ig,
			searchTerms:zur
		});
	}

	bzr(bly, zur)
	{
		return this.mq({
			allThreadsRelatedToChannelId:bly,
			searchTerms:zur
		});
	}

	async haj(ig)
	{
		const kfm = await this.egb({
			id:ig,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (kfm.dx)
		{
			try {
				kfm.ey = new ilg(kfm.ey);
			}
			catch (e) {
				kfm.vh('xb');
			}
		}

		return kfm;
	}

	async get(xgm, vb)
	{
		const kfm = await le.bu(this.iax + xgm, vb);

		if (!kfm.dx && !kfm.jy)
		{
			const uoa = this.erg(kfm.ey);

			kfm.vh(uoa);
		}

		return kfm;
	}

	async mq(vb)
	{
		const kfm = await this.get('/commentThreads', vb);

		if (kfm.dx)
		{
			kfm.ey = this.kyi(kfm.ey);
		}

		return kfm;
	}

	async fo(vb)
	{
		let kfm, lq = [];

		do {
			kfm = await this.get('/commentThreads', vb);

			if (kfm.dx)
			{
				const lxd = this.kyi(kfm.ey);

				lq.push(lxd);

				vb.pageToken = kfm.ey.nextPageToken;
			}
		}
		while (kfm.dx && vb.pageToken)

		kfm.ey = lq.flat();

		return kfm;
	}

	egb(vb)
	{
		return this.get('/videos', vb);
	}

	nua(coi)
	{
		try {
			return new ayi(coi);
		}
		catch (e) {
			return null;
		}
	}

	rdq(coi)
	{
		let gpx = [];

		try {
			if (coi.replies) {
				gpx = coi.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return gpx;
	}

	erg(hnt)
	{
		try {
			return hnt.error.errors[0].reason;
		}
		catch (e) {
			return hnt.mu || 'hw';
		}
	}

	kyi(coi)
	{
		const lxd = [];

		try {
			for (let or of coi.items)
			{
				const mo = this.zdo(or);

				if (mo) {
					lxd.push(mo);
				}
			}
		}
		catch (e) {
		}

		return lxd;
	}

	zdo(coi)
	{
		try {
			const ywi = coi.snippet;

			if (ywi.videoId)
			{
				let dg = this.nua(ywi.topLevelComment);

				if (dg)
				{
					const mo = new qkd(dg, ywi.totalReplyCount);

					if (mo.cme <= 5)
					{
						for (let kvq of this.rdq(coi))
						{
							dg = this.nua(kvq);

							if (dg) {
								mo.yri(dg);
							}
						}
					}

					return mo;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class nqe extends zrm
{
	fo(vb)
	{
		this.xkg(vb);

		return super.fo(vb);
	}

	mq(vb)
	{
		this.xkg(vb);

		return super.mq(vb);
	}

	async get(xgm, vb)
	{
		vb.key = this.ob;

		let kfm, i = 3;

		while (i--)
		{
			kfm = await super.get(xgm, vb);

			if (kfm.mu != 'processingFailure')
				break;
		}

		return kfm;
	}

	xkg(vb)
	{
		Object.assign(vb, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class bdr
{
	static cml(rx)
	{
		const ig = tz.ha(yt[25], rx);

		if (ig)
		{
			let my = tz.ha(yt[26], rx) || 0;

			if (!tz.gr(my))
			{
				my = tz.ky(yt[27], my).join(':');

				my = tz.mb(my);
			}

			return {ig, my};
		}
	}

	static ugp(rx)
	{
		return tz.ha(yt[28], rx).replace('www.', '');
	}
}

class fjq
{
	async ail(jp)
	{
		const diu = await this.gxq();

		if (diu && diu.url)
		{
			this.ph(diu.id, 'jp', jp);
		}
	}

	xlm()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, woi =>
		{
			for (let diu of woi)
			{
				chrome.tabs.reload(diu.id);
			}
		});
	}

	gxq()
	{
		return new Promise(pe =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, woi =>
			{
				pe(woi[0]);
			});
		});
	}

	ph(vfa, ew, ey)
	{
		chrome.tabs.sendMessage(vfa, new ka(ew, ey));
	}
}

class ycr
{
	constructor(gl, cxg)
	{
		this.aq = cxg.ig;

		this.cxg = cxg;

		this.ros = new hjy(gl);

		this.lq = {};

		for (let uoj of ['ohu', 'sqh'])
		{
			this[uoj] = new iut(Array);
		}

		for (let uoj of ['omy', 'pyw', 'cve'])
		{
			this[uoj] = [];
		}

		for (let mo of gl)
		{
			this.pk(mo);
			this.bwg(mo);
		}
	}

	hip(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.sxf();

			case ':all':
				return this.gjy();

			case ':creator':
				return this.nye();

			case ':link':
				return this.ovz();

			case ':reply':
				return this.bdw();
		}

		if (yt[29].test(q))
		{
			const tm = this.xzy(q);

			switch (tm.length)
			{
				case 1: return this.fdo(tm[0]);

				case 2: return this.vwg(tm[0], tm[1]);
			}
		}

		return this.cfx(q);
	}

	gjy()
	{
		return this.gao(
			Object.keys(this.lq)
		);
	}

	sxf()
	{
		return this.gao(this.sqh.values);
	}

	nye()
	{
		return this.gao(this.omy);
	}

	ovz()
	{
		return this.gao(this.cve);
	}

	bdw()
	{
		return this.gao(this.pyw);
	}

	vwg(vm, yih)
	{
		const leu = tz.mb(vm);
		const pgl = tz.mb(yih);

		const wjg = [];

		for (let tm of this.sqh.keys)
		{
			if (leu <= tm && tm <= pgl)
			{
				wjg.push(
					this.sqh.get(tm)
				);
			}

			if (pgl < tm) break;
		}

		return this.gao(wjg);
	}

	pk(or)
	{
		this.lq[or.aq] = or;
	}

	mzd(aq)
	{
		return this.lq[aq].kf;
	}

	gao(wjg)
	{
		wjg = wjg.flat();

		return tz.tef(wjg).map(
			aq => this.mzd(aq)
		);
	}

	cfx(oc)
	{
		let cna = [];

		let ve = this.xcq(oc);

		let wjg = ve.map(
			k => this.select('ohu', k)
		);

		wjg = wjg.filter(x => x.length);

		if (wjg.length)
		{
			cna = tz.nfo(...wjg);

			if (cna.length < 1)
			{
				wjg.sort((a, b) => a.length - b.length);

				cna = wjg[0];
			}
		}

		return this.gao(cna);
	}

	fdo(ta)
	{
		let yi = tz.mb(ta);

		let wjg = [
			this.select('sqh', yi)
		];

		for (let i = yi; i--;)
		{
			let x = this.select('sqh', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			wjg.push(x);
		}

		for (let i = yi; i++;)
		{
			let x = this.select('sqh', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			wjg.push(x);
		}

		return this.gao(wjg);
	}

	bwg(mo)
	{
		const gy = mo.hzr.map(dg => dg.zxy).join(' ');

		this.veu(gy, mo.aq);

		this.xji(gy, mo.aq);

		this.ywk(gy, mo.aq);

		this.rdq(mo);
	}

	rdq(mo)
	{
		if (mo.length > 1)
		{
			this.pyw.push(mo.aq);
		}

		if (mo.xpc(this.cxg.bly))
		{
			this.omy.push(mo.aq);
		}
	}

	veu(gy, aq)
	{
		gy.includes('http') && this.cve.push(aq);
	}

	xji(gy, aq)
	{
		const xsl = this.xzy(gy);

		for (let tm of xsl)
		{
			tm = tz.mb(tm);

			if (0 <= tm && tm < this.cxg.xt)
			{
				this.dip('sqh', tm, aq);
			}
		}
	}

	ywk(gy, aq)
	{
		this.xcq(gy).forEach(
			wn => this.dip('ohu', wn, aq)
		);
	}

	dip(uoj, ob, to)
	{
		this[uoj].rjb(ob);

		this[uoj].get(ob).push(to);
	}

	select(uoj, ob)
	{
		return this[uoj].get(ob);
	}

	xcq(oc)
	{
		oc = blz.avf(oc);

		oc = blz.vzm(oc);

		oc = tz.mgv(oc);

		return tz.tef(oc);
	}

	xzy(oc)
	{
		return tz.ky(yt[30], oc);
	}
}

class hjy
{
	constructor(gl)
	{
		this.ros = {};

		this.xaf = {};

		this.shl = {};

		for (let mo of gl)
		{
			this.ita(mo);
		}

		this.fnj();
	}

	zeg(mlr)
	{
		return this.xaf.hip(mlr);
	}

	tcm(aq)
	{
		return this.ros[aq];
	}

	ita(mo)
	{
		for (let dg of mo.hzr)
		{
			this.ite(dg.euz, dg.zxy);
			this.oah(dg.euz, dg.sdt);
		}
	}

	fnj()
	{
		this.xaf = new kef(this.xaf);

		for (let aq in this.shl)
		{
			const shl = this.shl[aq];

			if (shl.length > 1)
			{
				const hui = shl.filter(
					(gy, i) => gy.length < 28 || i == shl.indexOf(gy)
				);

				this.tcm(aq).jgi = (shl.length != hui.length);
			}
		}
	}

	oah(aq, kdt)
	{
		let zcb = new lqm(aq, kdt);

		this.ros[aq] = zcb;

		this.xaf[kdt] = zcb;
	}

	ite(aq, gy)
	{
		this.shl[aq] = this.shl[aq] || [];

		this.shl[aq].push(gy);
	}
}

class lqm
{
	constructor(aq, kdt)
	{
		this.aq = aq;
		this.kdt = kdt;
		this.jgi = false;
		this.ule = false;
	}

	get hkj()
	{
		return this.ule ? this.kdt : this.ere;
	}

	get ves()
	{
		return !this.ule && this.jgi;
	}

	get ere()
	{
		if (!this.zub)
		{
			this.zub = ucb.lyf(this.kdt);
		}

		return this.zub;
	}
}

class kef
{
	constructor(up)
	{
		this.keys = Object.keys(up).sort(this.vbg);

		this.inb = this.keys.map(ob => up[ob]);

		this.keys = this.keys.map(tz.lp);
	}

	hip(qca)
	{
		qca = qca.toLowerCase();

		let lq = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(qca))
			{
				do {
					lq.push(this.inb[i])
				}
				while (++i < n && this.keys[i].startsWith(qca));

				break;
			}
		}

		return lq.sort(this.wtk);
	}

	wtk(a, b)
	{
		return b.kdt.length - a.kdt.length;
	}

	vbg(a, b)
	{
		return a.localeCompare(b);
	}
}

const xnx = {
	rfm: {
		dux(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		ima(x)
		{
			return (x != 0) ? (1 / x) : 0;
		},

		zav(pkj)
		{
			let evq = tz.hue(pkj);

			return (n) => (evq - Math.abs(evq - n)) / evq;
		}
	},

	bwg(gl, edk, cxg)
	{
		this.lwu = cxg.bly;

		const ehk = edk.tcm(this.lwu);

		if (ehk)
		{
			ehk.ule = true;
		}

		this.hip = cxg.hip;

		this.yva = new cyc;

		this.rqi = new yep;

		this.hif = new vmk;

		this.jca = {};

		return this.alp(gl, edk);
	},

	alp(gl, edk)
	{
		const mwx = ('you are not but for the thi and that was').split(' ');

		const kpj = {
			lzn: 1,
			pip: [],
		};

		const obx = {
			dux: this.rfm.dux,
			hpd: this.rfm.ima,
			pip: null,
		};

		const plw = {
			ohu: .5,
			pip: .2,
			ztv: .2,
			hpd: .15,
			kgd: .1,
			dux: .1,
			upq: .1,
		};

		if (this.hip.utx)
		{
			Object.assign(plw, {
				upq: .4,
				ztv:.4,
				hpd: .1,
				pip: .0,
			});
		}

		for (let mo of gl)
		{
			Object.assign(mo,
			{
				ol: {
					pip: mo.xfs.zxy.length,
					ehz: 0,
					kgd: false,
					ztv: false,
					sqh: [],
					ve: [],
				},
				vsn: {
					ohu: 0,
					ztv: 0,
					hpd: 0,
					pip: 0,
					vpo: 0,
					agu: 0,
				},
			});

			const ol = mo.ol;

			for (let i = 0; i < mo.length; i++)
			{
				const dg = mo.hzr[i] = new flo(mo.hzr[i]);

				dg.zcb = edk.tcm(dg.euz);

				dg.mw = this.mw(dg.euz);

				if (i > 0)
				{
					dg.cb = true;

					dg.yng && (ol.kgd = true);
					dg.mw && (ol.ztv = true);
				}

				if (dg.jdl == '' || dg.zcb.ves)
				{
					dg.ix();
				}
			}

			const xfs = mo.xfs;

			if (this.laz(xfs.wxs))
			{
				mo.hidden = true;

				continue;
			}

			ol.ve = tz.mgv(xfs.jdl);
			ol.ehz = ol.ve.length;
			ol.ve = tz.tef(ol.ve);
			ol.vkz = ol.ve.length;

			for (let x in xfs.dz)
			{
				x = xfs.dz[x];

				if (x.aq == xfs.wxs)
				{
					mo.hidden = true;
				}

				if (x instanceof hv)
				{
					ol.sqh.push(x.my);

					tz.qxa(x.aq, this.rqi.hoq(x.my), ol.ve);
				}
			}

			for (let wn of ol.ve)
			{
				if (wn.length > 2 && !mwx.includes(wn))
				{
					this.yva.rkb(wn);
				}
			}
		}

		for (let mo of gl)
		{
			if (mo.hidden)
				continue;

			const vsn = mo.vsn;

			for (let wn of mo.ol.ve)
			{
				vsn.ohu += this.yva.get(wn);
			}

			vsn.ohu /= mo.ol.ehz;

			vsn.hpd = mo.ol.sqh.length;

			if (vsn.ohu > kpj.lzn)
			{
				kpj.lzn = vsn.ohu;
			}

			kpj.pip.push(mo.ol.pip);
		}

		obx.pip = this.rfm.zav(kpj.pip);

		for (let mo of gl)
		{
			const vsn = mo.vsn;

			vsn.ohu = plw.ohu * (vsn.ohu / kpj.lzn);
			vsn.hpd = plw.hpd * obx.hpd(vsn.hpd);
			vsn.ztv = plw.ztv * +mo.ol.ztv;

			const dux = plw.dux * obx.dux(mo.dux);
			const kgd = +mo.ol.kgd || .5;
			const upq = tz.plt(mo.dux, mo.cme) || .5;

			vsn.vpo = kgd * upq * dux;

			vsn.agu = tz.jys(Object.values(vsn));
		}

		gl.sort(
			(a, b) => b.vsn.agu - a.vsn.agu
		);

		for (let i = 0, n = gl.length; i < n; i++)
		{
			const a = gl[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = gl[k];

				if (b.euz == a.euz && !b.xfs.zcb.ule)
				{
					b.hidden = true;
				}

				if (!b.hidden && !b.frj)
				{
					const ext = tz.nfo(a.ol.ve, b.ol.ve);
					const jeb = (a.ol.ve.length + b.ol.ve.length) / 2;

					if (ext.length == b.ol.ehz)
					{
						b.hidden = true;
					}

					if (ext.length >= .5 * jeb)
					{
						const pgl = a.ol.sqh[0] || 0;
						const iht = b.ol.sqh[0] || 0;

						if (this.rqi.iwv(pgl, iht))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < gl.length; i++)
		{
			const mo = gl[i];

			if (mo.plm)
				break;

			let yxg = false;

			if (mo.ol.vkz == 1)
			{
				yxg = true;
			}

			if (i == 0 && !mo.frj)
			{
				const ica = this.hip.oc.toLowerCase();
				const rmy = mo.xfs.jdl;

				if (ica == rmy)
				{
					yxg = true;
				}
			}

			if (mo.frj && mo.rso == 1)
			{
				const leu = new Date(mo.xfs.rwe);
				const pgl = new Date(mo.zef.rwe);

				if (.001 * (pgl - leu) < 300)
				{
					yxg = true;
				}
			}

			if (yxg)
			{
				tz.gci(i, gl);

				mo.plm = true;
				i--;
			}
		}

		for (let mo of gl)
		{
			this.hif.scg(mo.aq, mo.euz);

			for (let euz of mo.umw)
			{
				this.hif.juo(euz, mo.aq)
			}
		}

		for (let mo of gl)
		{
			if (mo.dux == 0) continue;

			for (let kvq of mo.gpx)
			{
				const gy = kvq.wxs;

				const fek = tz.ha(yt[31], gy);

				for (let zcb of edk.zeg(fek))
				{
					if (this.rvt(zcb).test(gy))
					{
						kvq.sjg = zcb;
						break;
					}
				}
			}

			if (mo.length > 2)
			{
				let ros = [], lq = [], sts = false;

				const n = mo.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					if (sts)
					{
						ros = [];
						lq = [];
						sts = false;
					}

					const kvq = mo.hzr[i];
					const zk = kvq.zcb;

					if (tz.ap(ros) == zk) {
						i++;
					}
					else if (ros.includes(zk) || tz.tef(ros).length < 2)
					{
						ros.push(zk);
						lq.push(kvq);

						if (i + 1 < n)
							continue;
					}

					if (lq.length > 2)
					{
						let rnq = !lq.some(kvq => kvq.sjg && !ros.includes(kvq.sjg));

						if (rnq)
						{
							lq.forEach(kvq =>
								kvq.sjg = ros.find(zcb => zcb != kvq.zcb)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						sts = true;
					}
				}
			}

			for (let etg, i = 1; i < mo.length; i++)
			{
				const kvq = mo.hzr[i];

				if (!kvq.sjg)
				{
					if (etg && etg.sjg == kvq.zcb)
					{
						kvq.sjg = etg.zcb;

						mo.qxy(kvq, etg);
					}
				}
				else {
					const rjv = kvq.sjg;

					let fbg;

					for (let k = i - 1; k >= 0; k--)
					{
						const etg = mo.hzr[k];

						if (k == 0)
						{
							if (etg.zcb == rjv)
							{
								fbg = '';
							}

							break;
						}

						if (etg.zcb == rjv)
						{
							mo.qxy(kvq, etg);

							if (etg.children.length == 1)
							{
								fbg = '';
							}

							break;
						}
					}

					if (fbg == null)
					{
						const za = new ord(rjv.hkj, rjv.aq);

						fbg = kvq.atk(za) + ' ';
					}

					kvq.wxs = kvq.wxs.replace(this.rvt(rjv), fbg);
				}

				etg = kvq;
			}

			for (let i = 1, n = mo.length; i < n; i++)
			{
				const kvq = mo.hzr[i];

				if (kvq.ri || kvq.children.length)
				{
					tz.gci(i, mo.hzr);
					i--;
					n--;
				}
			}

			for (let oby = false, i = 1; i < mo.length; i++)
			{
				let kvq = mo.hzr[i];

				oby = (oby || !kvq.yng);

				if (kvq.psy)
				{
					continue;
				}

				if (!oby)
				{
					const gy = kvq.wxs;

					if (mo.length > 2 || ['+','@'].includes(gy[0]) || gy.length < 10)
					{
						kvq.ix();
					}
				}

				kvq.sjg && !mo.xpc(kvq.sjg.aq) && kvq.ix();

				this.bvi(kvq.euz, mo.aq) && kvq.ix();
			}
		}

		gl = gl.map(mo =>
		{
			if (mo.xfs.hidden)
			{
				return [];
			}

			const hzr = [];

			for (let i = 0; i < mo.length; i++)
			{
				const dg = mo.hzr[i];

				dg.wh = ucb.uhu(dg.wxs);

				dg.hkj = dg.zcb.hkj;

				if (dg.wh.length < 2)
				{
					if (i == 0) return [];

					dg.ix();
				}

				hzr.push(new quf(dg));
			}

			return hzr;
		});

		return gl.filter(mo => mo.length > 0);
	},

	laz(oc)
	{
		return oc.length > 500 || tz.jhd(yt[32], oc) > 3;
	},

	mw(euz)
	{
		return this.lwu == euz;
	},

	bvi(euz, vlc)
	{
		if (!this.lwu || this.mw(euz))
		{
			return false;
		}

		for (let sqj of this.hif.of(euz))
		{
			if (sqj == vlc)
			{
				return false;
			}

			if (!this.hif.dpc(sqj, euz))
			{
				return true;
			}
		}
	},

	rvt(zcb)
	{
		const aq = zcb.aq;

		if (aq in this.jca)
		{
			return this.jca[aq];
		}

		return this.jca[aq] = tz.scq('^[+@]?%s[-\\s,.:;?!]*', zcb.kdt, 'i');
	}
};

const ucb = {
	uhu(ro)
	{
		let oc = new ick(ro);

		oc.qmt('<') && oc.replace(yt[33], '&lt;');

		oc.qtl && oc.toLowerCase();

		if (oc.qmt('.'))
		{
			oc.charAt(-1) == '.' && oc.charAt(-2) != '.' && oc.nge(1);

			oc.replace(yt[34], (m) => m.replace(yt[35], ''));
		}

		if (oc.qmt('\n'))
		{
			oc.replace(yt[36], function(m, i)
			{
				let x = oc.charAt(i - 1);

				return tz.tgs(x) ? '. ' : ' ';
			});
		}

		if (oc.qnp('*_'))
		{
			oc.replace(yt[37], '$2');
		}

		if (oc.qnp('(,!?.)'))
		{
			oc.replace(yt[38], '?!');

			oc.replace(yt[39], '$1');

			oc.replace(yt[40], '$1 $2');

			oc.qmt('!') && oc.replace(yt[41], '$1');
		}

		if (oc.qnp('$£€'))
		{
			oc.replace(yt[42], (_, bip, qcv) =>
			{
				yt[43].test(bip) && (bip = Math.round(bip));

				return qcv + bip;
			});
		}

		oc.qmt(':') && oc.replace(yt[44], ': ');

		oc.qmt('&') && oc.replace(yt[45], ' and ');

		oc.qmt('"') && oc.replace(yt[46], '" - $1');

		return sbz.qyp(oc.pag);
	},

	lyf(ro)
	{
		return ro.length < 28 && this.bzw(ro) || this.fkz();
	},

	bzw(oc)
	{
		let ve;

		if (!yt[47].test(oc))
		{
			if (tz.ays(oc))
			{
				oc = tz.tgo(oc);
			}

			ve = oc.split(' ');

			if (ve.length == 1)
			{
				return tz.et(ve[0], 'PRE_CASE');
			}
		}
		else {
			ve = tz.ky(yt[48], oc);
		}

		ve = ve.map(wn =>
		{
			switch (true)
			{
				case wn.length < 2 || tz.gr(wn):
					return '';

				default:
					return tz.et(wn);
			}
		});

		ve = ve.filter(
			(wn, i) => wn != '' && i == ve.indexOf(wn)
		);

		return ve.join(' ');
	},

	fkz()
	{
		return 'user' + tz.dl(4);
	}
};

const blz = {
	avf(oc)
	{
		oc = oc.toLowerCase();

		oc = oc.replace(yt[49], ' ');

		return tz.unh(oc);
	},

	vzm(oc)
	{
		return oc.replace(yt[50], '$1');
	}
};

const sbz = {
	rfd: {
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

	qyp(oc)
	{
		return oc.replace(yt[51], m => this.get(m));
	},

	get(ob)
	{
		ob = ob.toLowerCase();

		(ob.length == 2) || (ob = ob.slice(0, 2));

		return this.rfd[ob] || ob;
	}
};

class cyc
{
	constructor()
	{
		this.map = {};
	}

	rkb(wn)
	{
		this.map[wn] = ++this.map[wn] || 0;
	}

	get(wn)
	{
		return this.map[wn] || 0;
	}
}

class yep
{
	constructor()
	{
		this.map = {};
	}

	hoq(zut)
	{
		for (let pgo in this.map)
		{
			if (this.iwv(zut, pgo))
			{
				return this.map[pgo];
			}
		}

		return this.vua(zut);
	}

	vua(tm)
	{
		return this.map[tm] = tz.xi('TS%s', tm);
	}

	iwv(pgl, iht)
	{
		return Math.abs(iht - pgl) < 5;
	}
}

class vmk
{
	constructor()
	{
		this.ros = {};

		this.gl = {};
	}

	of(zve)
	{
		return this.ros[zve];
	}

	dpc(pls, zve)
	{
		return this.gl[pls] == zve;
	}

	scg(aq, edt)
	{
		this.gl[aq] = edt;
	}

	juo(aq, pls)
	{
		if (!this.ros[aq])
		{
			this.ros[aq] = new yc;
		}

		this.ros[aq].push(pls);
	}
}

class dv
{
	constructor(zg)
	{
		zg.xv = this.xv.bind(this);

		this.zg = zg;

		this.dci = 0;

		this.xga = new Promise(pe => pe(null));

		this.cxg;

		this.sjb = new sjb;

		this.lea = new ycr([], {});
	}

	async xv(wi)
	{
		const ig = wi.ey.ig;

		try {
			const oji = await this.sjb.ljk(ig);

			this.cxg = new qsa(wi.ey, oji);
		}
		catch (jg) {
			return this.etf(jg);
		}

		switch (wi.ew)
		{
			case 'mq':
				return this.wsv(ig);

			case 'uq':
				return this.rj(ig);
		}
	}

	etf(aq)
	{
		this.drb('mu', {aq});
	}

	rj(ig)
	{
		const n = this.cxg.uq;

		if (0 < n && n < 1000)
		{
			this.kmp(ig);
		}

		this.drb('uq', n);
	}

	async wsv(ig)
	{
		if (this.cxg.hip.poj)
		{
			return this.etf('bv');
		}

		this.oqz();
	}

	async oqz()
	{
		let r = new xtj(this.hyc);

		try {
			if (this.cxg.hip.qmw)
			{
				await this.cln(r);
			}
			else {
				await this.ejq(r);
			}

			!this.ucw(r.aq) && this.drb('mq', r);
		}
		catch (jg) {
			!this.ucw(r.aq) && this.etf(jg);
		}
	}

	async cln(hnt)
	{
		const kfm = await au.nk.bzr(this.cxg.bly, this.cxg.hip.oc);

		if (kfm.mu)
		{
			throw kfm.mu;
		}

		const ros = new hjy(kfm.ey);

		const gl = xnx.bwg(kfm.ey, ros, this.cxg);

		hnt.zie(gl);
		hnt.jxy(-2);
	}

	async ejq(hnt)
	{
		const ig = this.cxg.ig;
		const bi = this.cxg.hip.oc;

		const p = hnt.jxy(this.cxg.uq);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.cxg.hip.blc)
		{
			throw 'on';
		}

		let gl, ros;

		if (p < 1000)
		{
			const jg = await this.kmp(ig);

			if (jg)
			{
				throw jg;
			}

			ros = this.lea.ros;

			gl = this.lea.hip(bi);
		}
		else {
			const kfm = await au.nk.vzd(ig, bi);

			if (kfm.mu)
			{
				throw kfm.mu;
			}

			ros = new hjy(kfm.ey);

			gl = kfm.ey;
		}

		gl = xnx.bwg(gl, ros, this.cxg);

		hnt.zie(gl);
	}

	drb(ew, ey)
	{
		this.zg.ev(ew, ey);
	}

	async kmp(ig)
	{
		await this.xga;

		if (ig != this.lea.aq)
		{
			this.xga = new Promise(async pe =>
			{
				const kfm = await au.nk.fht(ig);

				if (kfm.dx)
				{
					this.lea = new ycr(kfm.ey, this.cxg);
				}

				pe(kfm.mu);
			});
		}

		return this.xga;
	}

	get hyc()
	{
		return ++this.dci;
	}

	ucw(cyl)
	{
		return cyl != this.dci;
	}
}

class sjb
{
	constructor()
	{
		this.map = {};
	}

	async ljk(ig)
	{
		let x = this.map[ig];

		if (x == undefined)
		{
			x = this.hst(ig);
		}

		if (x instanceof Promise)
		{
			const kfm = await x;

			if (kfm.mu)
			{
				this.mhu(ig);

				throw kfm.mu;
			}

			x = this.osh(ig, kfm.ey);
		}

		return x;
	}

	sdj(ig, value)
	{
		return this.map[ig] = value;
	}

	hst(ig)
	{
		const r = au.nk.haj(ig);

		return this.sdj(ig, r);
	}

	osh(ig, fxp)
	{
		return this.sdj(ig, fxp);
	}

	mhu(ig)
	{
		this.sdj(ig, undefined);
	}
}

class hce
{
	constructor(q)
	{
		this.oc = '';
		this.ax = '';
		this.qmw = false;
		this.poj = false;

		this.alp(q);
	}

	get blc()
	{
		return this.ax == 'jng';
	}

	get utx()
	{
		return this.ax == 'xly';
	}

	alp(q)
	{
		const ixy = q.replace(yt[52], '');

		if (ixy != q)
		{
			this.qmw = true;

			if (ixy == '')
			{
				this.poj = true;
			}
		}

		this.oc = ixy;
		this.ax = hce.hbi(ixy);
	}

	static hbi(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'jng';

			case (yt[53]).test(q):
				return 'xly';

			default:
				return '';
		}
	}
}

class qsa
{
	constructor(jmf, jab)
	{
		Object.assign(this, ...[jmf, jab]);

		this.xt = Math.floor(jmf.xt) || Infinity;
		this.ah = Math.floor(jmf.ah);

		this.hip = new hce(jmf.bi);
	}
}

class xtj
{
	constructor(cyl)
	{
		this.aq = cyl;
		this.gl = [];
		this.iw = 0;
		this.wu = 0;
	}

	zie(gl)
	{
		this.gl = gl;
		this.iw = gl.length;
	}

	jxy(n)
	{
		return this.wu = n;
	}
}

let zk;

const au = new kdm;
const ki = new ao;
const woi = new fjq;
const dc = new dn;
const ia = new lo;
const zd = new he;

const yt = [
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