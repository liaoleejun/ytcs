/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const ig = {};

for (let gc of 'object array string regex date math type std'.split(' '))
{
	ig[gc] = {};
}

ig.jz = function(eu, ue)
{
	return eu != undefined && eu.constructor === ue;
}

ig.pn = function()
{
	return ig.gs(9);
}

ig.ow = function(hv)
{
	return se[0].test(hv);
}

ig.tj = function(he)
{
	return Object.keys(he).length == 0;
}

ig.qk = function(mg, he)
{
	for (let jd in he)
	{
		const xo = he[jd];

		if (jd == mg) return xo;
		if (xo == mg) return jd;
	}
}

ig.on = function(he, sa)
{
	let hv = '';

	for (let jd in he)
	{
		hv += jd + '=' + he[jd] + sa;
	}

	return hv.slice(0, -1);
}

ig.pg = function(el, na, px)
{
	const uc = na + 1;

	return px.slice(uc, uc + el);
}

ig.wz = function(px)
{
	return px[px.length - 1];
}

ig.pf = function(fm, sq)
{
	fm += '?';

	for (let jd in sq)
	{
		fm += jd + '=' + encodeURIComponent(sq[jd]) + '&';
	}

	return fm.slice(0, -1);
}

ig.xc = function(hv, sp)
{
	if (ig.jz(sp, Array))
	{
		let i = 0;

		return hv.replace(se[1], _ => sp[i++]);
	}

	return hv.replace('%s', sp);
}

ig.nu = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

ig.dn = function(hv, fa)
{
	const tv = ig.xc('(%s)', fa.join('|'));

	return hv.split(new RegExp(tv)).filter(s => s !== '');
}

ig.ge = function(hv)
{
	return hv.toUpperCase();
}

ig.wm = function(hv)
{
	return hv.toLowerCase();
}

ig.qy = function(hv, bx)
{
	if (!bx)
	{
		hv = hv.toLowerCase();
	}

	return hv[0].toUpperCase() + hv.slice(1);
}

ig.tz = function(zg, hv)
{
	return hv.match(zg) || [];
}

ig.yn = function(zg, hv)
{
	if (zg.global) return '';

	const m = ig.tz(zg, hv);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

ig.wd = function()
{
	return Math.floor(Date.now() / 1000);
}

ig.mp = function(db)
{
	return db < ig.wd();
}

ig.pe = function(q)
{
	const th = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = ig.yn(se[2], q);

	return Date.now() + (x[0] * th[x[1]] * 1000);
}

ig.gp = function(hc)
{
	let x = hc.split(':'),
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

ig.ne = function(eh)
{
	let px = [];

	px.push(eh / 3600);

	eh %= 3600;

	px.push(eh / 60);

	px.push(eh % 60);

	px = px.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return px.join(':').replace(se[3], '');
}

ig.gs = function(ni)
{
	return Math.random().toString().slice(2, ni + 2);
}

ig.ed = function(fj, ij)
{
	const eb = Math.random() * (ij - fj) + fj;

	return Math.floor(eb);
}

ig.ad = function(x, a, b)
{
	return x >= a && x <= b;
}

ig.ok = function(a, b)
{
	return 100 * (a / b);
}

ig.rw = function()
{
	let dc, lw = 0;

	try {
		dc = [qp, hm, sz];
	}
	catch (e) {
		dc = [xn, sz];
	}

	dc.forEach(
		gq => lw += gq.toString().length
	);

	return lw != 3428;
}

class hq
{
	constructor(jn, ub)
	{
		this.jn = jn;
		this.ub = ub;
	}
}

class xi
{
	constructor(eg, jn, ub)
	{
		this.eg = eg;
		this.ym = new hq(jn, ub);
	}
}

class du extends Array
{
	constructor(jk)
	{
		super();

		if (jk != null)
		{
			super.push(jk);
		}
	}

	push(xb)
	{
		return !this.includes(xb) && super.push(xb);
	}
}

class vc
{
	constructor(wt, qj)
	{
		const gq = wt.status;

		this.gq = gq;
		this.cu = false;
		this.ce = false;
		this.bw = null;
		this.ub = null;

		switch (qj)
		{
			case 'error':
				return this.vj('zm');

			case 'timeout':
				return this.vj('en');

			default:
			{
				this.cu = (gq == 200);

				if (gq >= 500)
				{
					return this.vj('kc');
				}

				try {
					this.ub = JSON.parse(wt.responseText);
				}
				catch (e) {
					this.ub = wt.responseText;
				}
			}
		}
	}

	pk(zn)
	{
		this.bw = zn;
	}

	vj(zn)
	{
		this.pk(zn);

		this.ce = true;
	}
}

class dj
{
	constructor(ub, yi)
	{
		Object.assign(this, ub);

		Object.defineProperty(this, 'yi', {
			value: yi
		});
	}

	set(jd, xo)
	{
		this[jd] = xo;

		this.iq();
	}

	iq()
	{
		return ck.set(this.yi, this);
	}
}

class sz extends dj
{
	constructor(ub, yi)
	{
		super(ub, yi);
	}

	get an()
	{
		return Boolean(this.qd)
	}

	get qd()
	{
		return this[0];
	}

	get ur()
	{
		return this[1];
	}

	get lk()
	{
		return ig.mp(this.ur);
	}

	get zq()
	{
		const tn = this.ur.toString().split('').pop();

		return Boolean(+tn);
	}

	set qd(jd)
	{
		this.set(0, jd);
	}

	set ur(yt)
	{
		this.set(1, yt);
	}

	get sv()
	{
		let s = this.ur.toString(),
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

class bc
{
	constructor(pb)
	{
		if (pb)
		{
			this.ar();
		}
	}

	jf(rh, dz, qf)
	{
	}

	ar()
	{
		chrome.runtime.onMessage.addListener(
			this.jf.bind(this)
		);
	}
}

class my extends bc
{
	constructor()
	{
		super(false);
	}

	jf(rh, dz, qf)
	{
		const ub = rh.ub;

		switch (rh.jn)
		{
			case 'fi':
				return this.gr(ub);
		}
	}

	gr(fi)
	{
		if (fi == 'un')
		{
			zw.uc();
		}
	}

	gy()
	{
		return this.hl('gy');
	}

	xp(ew)
	{
		return this.hl('xp', ew);
	}

	to(qd)
	{
		return this.hl('to', qd);
	}

	vw()
	{
		return this.hl('vw');
	}

	og()
	{
		return this.hl('og');
	}

	hl(jn, ub)
	{
		const rh = new hq(jn, ub);

		return new Promise(qf =>
		{
			try {
				chrome.runtime.sendMessage(rh, qf);
			}
			catch (e) {
			}
		});
	}
}

class xt extends bc
{
	constructor()
	{
		super(true);
	}

	jf(rh, dz, qf)
	{
		const wl = function(...sp)
		{
			try {
				qf(...sp);
			}
			catch (e) {
			}
		};

		jo.oc.then(_ =>
		{
			const ub = rh.ub;

			switch (rh.jn)
			{
				case 'gy':
					jo.gy().then(wl);
				break;

				case 'xp':
					jo.xp(ub).then(wl);
				break;

				case 'to':
					jo.to(ub).then(wl);
				break;

				case 'vw':
					cm.lr.vw(ub).then(wl);
				break;

				case 'og':
					jo.si();
				break;
			}
		});

		return true;
	}
}

class pc
{
	get(jd)
	{
		return new Promise(re =>
		{
			try {
				chrome.storage.local.get(jd, kr =>
					re(typeof jd == 'string' ? kr[jd] : kr)
				);
			}
			catch (e) {
			}
		});
	}

	set(jd, xo)
	{
		let ub;

		if (typeof jd == 'object')
		{
			ub = jd;
		}
		else {
			ub = {[jd]:xo};
		}

		return new Promise(cg =>
		{
			try {
				chrome.storage.local.set(ub, cg);
			}
			catch (e) {
			}
		});
	}

	au()
	{
		return new Promise(cg =>
		{
			try {
				chrome.storage.local.clear(cg);
			}
			catch (e) {
			}
		});
	}
}

class xigsd
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			xi => this.ua(xi)
		);

		Port.onDisconnect.addListener(
			_ => this.wu()
		);

		this.Port = Port;

		this.kx = {
		};

		this.ze = false;
	}

	jf(m)
	{
	}

	gu(eg, jn, ub)
	{
		const ns = new xi(eg, jn, ub);

		if (!this.ze)
		{
			this.Port.postMessage(ns);
		}
	}

	ua(x)
	{
		this.fs(x.eg).jf(x.ym);
	}

	fs(eg)
	{
		return this.kx[eg] || this;
	}

	rq(eg, jf, wu)
	{
		return this.kx[eg] = new cy(this, eg, jf, wu);
	}

	wu()
	{
		this.ze = true;

		for (let eg in this.kx)
		{
			this.fs(eg).wu();
		}
	}
}

class bf extends xigsd
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	jf(rh)
	{
		const ub = rh.ub;

		switch (rh.jn)
		{
			case 'gn':
				return vr.iw(ub);
		}
	}

	rq(eg, jf, wu)
	{
		this.gu(null, 'rq', eg);

		return super.rq(eg, jf, wu);
	}

	wu()
	{
		super.wu();

		zw.qt();
	}
}

class ds extends xigsd
{
	constructor(kn)
	{
		super(kn);
	}

	jf(rh)
	{
		switch (rh.jn)
		{
			case 'rq':
				return this.rq(rh.ub);
		}
	}

	rq(eg)
	{
		const dv = super.rq(eg);

		switch (eg)
		{
			case 'sx':
				return new wo(dv);
		}
	}
}

class dh
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			mo => this.zx(mo)
		);

		this.np = [];
	}

	zx(kn)
	{
		this.np.push(
			new ds(kn)
		);
	}

	vu(uv)
	{
		for (let kn of this.np)
		{
			kn.gu(null, 'gn', uv);
		}
	}
}

class cy
{
	constructor(kn, eg, jf, wu)
	{
		this.kn = kn;

		this.eg = eg;

		if (jf)
		{
			this.jf = jf;
		}

		if (wu)
		{
			this.wu = wu;
		}
	}

	gu(jn, ub)
	{
		this.kn.gu(this.eg, jn, ub);
	}

	jf(m)
	{
	}

	wu()
	{
	}
}

ig.rdc = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

ig.okl = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

ig.wzn = function(js, or)
{
	if (or)
	{
		const vi = Object.create(
			Object.getPrototypeOf(js)
		);

		return Object.assign(vi, js);
	}

	return {...js};
}

ig.qlr = function(ch, vq, px)
{
	let i = px.indexOf(ch);

	if (i >= 0)
	{
		px[i] = vq;
	}
}

ig.ybj = function(gk, al, px)
{
	if (al != gk)
	{
		const xb = px[gk];
		px.splice(gk, 1);
		px.splice(al, 0, xb);
	}
}

ig.ulx = function(gk, px)
{
	ig.ybj(gk, Infinity, px);
}

ig.scw = function(...jc)
{
    jc.sort(
    	(a, b) => a.length - b.length
    );

	return jc.shift().filter(xb =>
	{
		for (let zh of jc)
        {
			if (!zh.includes(xb))
				return false;
        }

		return true;
    });
}

ig.mtv = function(px)
{
	return px.filter((value, mw) => px.indexOf(value) == mw);
}

ig.fpo = function(wq, iu)
{
	return wq.join(iu || '.');
}

ig.oer = function(hv, tq)
{
	if (tq)
	{
		hv = hv.replace(se[4], '\n');

		hv = hv.replace(se[5], ' ');
	}
	else {
		hv = hv.replace(se[6], ' ');

	}

	return hv.trim();
}

ig.cac = function(hv, tv, qf)
{
	return hv.replace(tv, (lq, wf) =>
	{
		return lq.replace(wf, qf(wf));
	});
}

ig.ifz = function(pz)
{
	return se[7].test(pz);
}

ig.iyi = function(hv)
{
	return !se[8].test(hv);
}

ig.sbt = function(hv)
{
	return hv.toLowerCase().replace(se[9], ig.ge);
}

ig.mge = function(hv)
{
	return hv == hv.toUpperCase();
}

ig.xfc = function(hv)
{
	return hv == hv.toLowerCase();
}

ig.esg = function(hv)
{
	return ig.xfc(hv) || ig.mge(hv);
}

ig.ljc = function(zg, hv)
{
	return ig.tz(zg, hv).length;
}

ig.ztz = function(hv)
{
	return ig.ljc(se[10], hv) + 1;
}

ig.fnb = function(hv)
{
	return hv ? hv.split(' ') : [];
}

ig.oek = function(i, hv)
{
	return hv.substring(0, i) + 'x' + hv.substring(++i);
}

ig.utg = function(s)
{
	return String(s).replace(se[11], '\\$1').replace(se[12], '\\x08');
}

ig.jyn = function(tv, sp, mr)
{
	if (Array === sp.constructor)
	{
		sp = sp.map(ig.utg);
	}
	else {
		sp = ig.utg(sp);
	}

	tv = ig.xc(tv, sp);

	return new RegExp(tv, mr);
}

ig.mag = new function()
{
	const th = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const qu = (ud) => new Date(ud).getTime() / 1000;

	return (ud) =>
	{
		const as = ig.wd() - qu(ud);

		for (let [tn, bh] of th)
		{
			let nw = as / bh;

			if (nw >= 1)
			{
				nw = Math.floor(nw);

				return ig.xc('%s %s%s ago', [nw, tn, (nw > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

ig.naj = function(px)
{
	return px.reduce((a, b) => a + b, 0);
}

ig.rdf = function(px)
{
	return ig.sza(ig.naj(px), px.length);
}

ig.sza = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const pa = {
	qo(fm, sg, lu)
	{
		return this.ov('GET', fm, sg, null, lu);
	},

	gh(fm, sg, ym, lu)
	{
		return this.ov('POST', fm, sg, ym, lu);
	},

	ov(ng, fm, sg, ym, lu)
	{
		if (sg)
		{
			fm = ig.pf(fm, sg);
		}

		if (ym)
		{
			ym = this.uf(ym);
		}

		return new Promise(re =>
		{
			let wt = new XMLHttpRequest;

			if (lu != Infinity)
			{
				let uk = 0;

				wt.ontimeout = (e) =>
				{
					if (++uk < 3)
					{
						return this.wk(wt, ng, fm, ym);
					}

					wt.onerror(e);
				}

				wt.timeout = 5000;
			}

			wt.onload = wt.onerror = (e) => re(
				new vc(wt, e.type)
			);

			this.wk(wt, ng, fm, ym);
		});
	},

	wk(wt, ng, fm, ym)
	{
		wt.open(ng, fm);
		wt.send(ym);
	},

	uf(sq)
	{
		let oj = new FormData;

		for (let jd in sq)
		{
			oj.append(jd, sq[jd]);
		}

		return oj;
	}
}

class te
{
	constructor(hy)
	{
		this.map = {};

		this.ib = Object.getOwnPropertyNames(Object.prototype);

		this.ftm = hy;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(jd)
	{
		jd = this.vhj(jd);

		return this.sjf(this.map[jd]);
	}

	set(jd, xo)
	{
		jd = this.vhj(jd);

		this.map[jd] = this.sjf(xo);
	}

	qim(jd)
	{
		return this.vhj(jd) in this.map;
	}

	gte(jd)
	{
		!this.qim(jd) && this.set(jd);
	}

	vhj(jd)
	{
		if (this.ib.includes(jd))
		{
			return jd + '*';
		}

		return jd;
	}

	sjf(xo)
	{
		if (xo == undefined && this.ftm)
		{
			return new this.ftm;
		}

		return xo;
	}
}

class gjr
{
	constructor(qiw, lar)
	{
		this.lf = qiw.lf;

		this.ugu = qiw.ugu;

		this.lar = lar;

		this.jad = [];

		this.chd = new du;

		this.pfi(qiw);
	}

	pfi(no)
	{
		if (this.ugu == no.ugu)
		{
			no.fip = true;
		}

		this.chd.push(no.ugu);

		this.jad.push(no);
	}

	krz(lf)
	{
		return this.chd.includes(lf);
	}

	ifc()
	{
		this.ubs.forEach(ejn => ejn.hidden = true);
	}

	ond(it, wc)
	{
		this.aid(wc.jwn, it);

		wc.yp(it);
	}

	aid(a, b)
	{
		const gk = this.jad.indexOf(b);
		const al = this.jad.indexOf(a) + 1;

		ig.ybj(gk, al, this.jad);
	}

	get length()
	{
		return this.jad.length;
	}

	get qiw()
	{
		return this.jad[0];
	}

	get svh()
	{
		return this.jad[1];
	}

	get xos()
	{
		return this.length > 1;
	}

	get ubs()
	{
		return this.jad.slice(1);
	}

	get zlk()
	{
		return this.jad.length - 1;
	}

	get hidden()
	{
		return this.qiw.hidden;
	}

	set hidden(lh)
	{
		this.qiw.hidden = lh;
	}

	get vi()
	{
		const vi = ig.wzn(this, true);

		vi.jad = this.jad.map(ig.wzn);

		return vi;
	}
}

class jof
{
	constructor(hnw)
	{
		this.mh = jof.bdf(hnw);
		this.co = jof.ari(this.mh);
	}

	static ari(mh)
	{
		return ['he','ar'].includes(mh) ? 'rtl' : 'ltr';
	}

	static bdf(hv)
	{
		let ckg = .57 * ig.ztz(hv);

		switch (true)
		{
			case ckg < ig.ljc(se[13], hv): return 'en';

			case ckg < ig.ljc(se[14], hv): return 'ar';

			case ckg < ig.ljc(se[15], hv): return 'he';

			default: return '';
		}
	}

	static get rmg()
	{
		if (!this.wbv)
		{
			this.wbv = navigator.languages.map(mh => mh.slice(0, 2));
		}

		return this.wbv;
	}
}

class fle
{
	constructor(qhk)
	{
		const _ = qhk.items[0];

		this.rmr = _.snippet.channelId;
		this.mq = _.statistics.commentCount;

		if (this.mq == undefined)
		{
			this.mq = -1;
		}
		else {
			this.mq = +this.mq;
		}
	}
}

class alc
{
	constructor(qhk)
	{
		const _ = qhk.snippet;

		this.lf = qhk.id;
		this.tc = _.videoId;
		this.ugu = _.authorChannelId.value;
		this.kp = _.authorProfileImageUrl;
		this.hsb = _.authorDisplayName;
		this.ahj = _.textOriginal;
		this.ucp = _.publishedAt;
		this.ltc = _.likeCount;
		this.fip = null;
		this.ej = null;
	}
}

class etw
{
	constructor(alc)
	{
		Object.assign(this, alc);

		this.ucs = '';
		this.fqs = '';
		this.tu = {};
		this.children = [];
		this.wc = null;
		this.vgw = null;
		this.ejq = null;
		this.lxo = null;
		this.hidden = false;

		this.ktl();
		this.hol();
		this.spx();
		this.cog();
		this.nex();
	}

	ktl()
	{
		this.ucs = this.ahj.replace(se[16], '');

		delete this.ahj;
	}

	nex()
	{
		this.fqs = wpb.tnt(this.ucs);

		this.lxo = new jof(this.fqs);

		if (this.lxo.mh == 'en')
		{
			this.fqs = wpb.zlu(this.fqs);
		}
	}

	hol()
	{
		if (!this.ucs.includes('/'))
			return;

		this.ucs = this.ucs.replace(se[17], (fm) =>
		{
			let x;

			const rpa = vgb.sli(fm);

			if (rpa) {
				if (rpa.tc == this.tc)
				{
					x = new vd(this.tc, rpa.fx);
				}
				else {
					x = new nc(rpa);
				}
			}
			else {
				x = new gcv(fm);
			}

			return this.nog(x);
		});
	}

	spx()
	{
		if (!this.ucs.includes('#'))
			return;

		this.ucs = this.ucs.replace(se[18], (mhl) =>
		{
			const x = new omy(mhl);

			return this.nog(x);
		});
	}

	cog()
	{
		if (!this.ucs.includes(':'))
			return;

		this.ucs = this.ucs.replace(se[19], (hc) =>
		{
			const x = new vd(this.tc, hc);

			return this.nog(x);
		});
	}

	nog(xb)
	{
		this.tu[xb.lf] = xb;

		return xb.lf;
	}

	xj()
	{
		this.hidden = true;

		for (let it of this.children)
		{
			it.xj();
		}
	}

	yp(it)
	{
		it.wc = this;

		this.children.push(it);
	}

	get jwn()
	{
		return ig.wz(this.children) || this;
	}

	get ynd()
	{
		return this.children.some(it => !it.hidden);
	}
}

class bpq
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.cr = x.cr;
		this.tu = x.tu;
		this.tc = x.tc;
		this.lf = x.lf;
		this.ugu = x.ugu;
		this.kp = x.kp;
		this.mgo = x.mgo;
		this.xf = x.xf;
		this.ucp = x.ucp;
		this.fip = x.fip;
		this.ej = x.ej;
		this.mh = x.lxo.mh;
		this.co = x.lxo.co;
		this.rs = x.children.length;
		this.vmw = '';
		this.gzo = '';

		this.ucp = ig.mag(this.ucp);

		this.vmw = ig.xc('https://www.youtube.com/channel/%s', this.ugu);

		this.gzo = ig.xc('https://www.youtube.com/watch?v=%s&lc=%s', [this.tc, this.lf]);
	}
}

class kls
{
	constructor(bm, ta)
	{
		this.lf = ig.pn();

		this.bm = bm;

		this.ta = ta;
	}
}

class vd extends kls
{
	constructor(tc, t)
	{
		super(null, 'vd');

		let bm, xq;

		if (ig.nu(t))
		{
			bm = ig.ne(t);
			xq = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			bm = t;
			xq = ig.gp(t);
		}

		this.tc = tc;
		this.fx = xq;
		this.bm = bm;
	}
}

class nc extends kls
{
	constructor(sq)
	{
		super('youtube.com', 'nc');

		this.tc = sq.tc;
		this.fx = sq.fx;
	}
}

class gcv extends kls
{
	constructor(fm)
	{
		super('', 'vb');

		this.fm = fm;

		this.hvq = fm.startsWith('https');

		this.bm = vgb.diw(fm) || fm;
	}
}

class omy extends kls
{
	constructor(mhl)
	{
		super(mhl, 'vb');

		this.fm = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(mhl);
	}
}

class pva extends kls
{
	constructor(suh, rmr)
	{
		super(suh, 'vb');

		this.fm = 'https://www.youtube.com/channel/' + rmr;
	}
}

class vwf
{
	constructor(hv)
	{
		this.aqi = '';
		this.lsj = '';
		this.kth = [];
		this.hjc = false;
		this.ydp = false;

		this.tnt(hv);
		this.skj();
		this.ibt();
	}

	get fan()
	{
		return this.aqi;
	}

	get length()
	{
		return this.aqi.length;
	}

	get ere()
	{
		return ig.mge(this.lsj);
	}

	toLowerCase()
	{
		this.aqi = this.aqi.toLowerCase();
	}

	buk(pz)
	{
		return this.kth.includes(pz);
	}

	xin(xgn)
	{
		for (let pz of xgn)
		{
			if (this.buk(pz)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.aqi[this.length + i] : this.aqi[i];
	}

	wjy(n)
	{
		this.aqi = this.aqi.slice(0, -n);
	}

	replace(zg, qf)
	{
		this.aqi = this.aqi.replace(zg, qf);
	}

	tnt(hv)
	{
		this.aqi = ig.oer(hv, 'uoq');

		this.replace(se[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(se[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (ig.iyi(x))
				{
					return m.length > 3 && !se[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	skj()
	{
		let kou = ig.mtv([...this.aqi]).join('');

		this.lsj = kou.slice(0, 16);

		this.kth = ig.tz(se[23], kou);

		this.hjc = this.kth.some(this.bfj);
	}

	ibt()
	{
		if (!this.hjc) return;

		for (let i = 0, k = 0, n = this.kth.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.kth[i] + this.kth[k];

				this.replace(ig.jyn('(%s)+', x, 'g'), x);
			}
		}
	}

	bfj(pz)
	{
		return pz.charCodeAt(0) > 255;
	}

	yby(pz)
	{
		return pz == '\u{200D}';
	}
}

class xn
{
	constructor()
	{
		this.lf = chrome.runtime.id;

		this.qjv = chrome.runtime.getManifest().version;

		this.oc = new Promise(re => this.ghv = re);

		this.oc.then(
			_ => this.uh()
		);

		this.ir();

		chrome.runtime.onInstalled.addListener(
			rpa => this.tpl(rpa)
		);

		chrome.browserAction.onClicked.addListener(
			_ => nwz.dnj('un')
		);

		chrome.alarms.onAlarm.addListener(
			rpa => this.eoz('rhm', rpa)
		);

		chrome.runtime.onMessageExternal.addListener(
			rh => this.eoz('jbs', rh)
		);
	}

	async ir()
	{
		if (await this.gde == this.qjv)
		{
			const ju = await ck.get(['0', '1']);

			this.nuq = new dj(ju[0], 0);

			xe = new sz(ju[1], 1);

			if (xe.an)
			{
				cm.bg.mws(xe.qd);
			}

			this.ghv(1);
		}
	}

	async gy()
	{
		const nhm = await this.xp('/html/view.html');

		const tf = (
			this.qjv < this.tvh
		);

		const ol = (
			!xe.an || !xe.zq
		);

		return {
			lh: {
				tf, ol
			},
			di: nhm
		};
	}

	async to(qd)
	{
		if (se[24].test(qd))
		{
			const rts = await cm.bg.iyb(qd);

			if (rts)
			{
				const xe = await cm.lr.qid(qd);

				if (xe)
				{
					await this.fh(xe);

					np.vu('hf');

					return true;
				}
			}
		}

		return false;
	}

	fuy(czq)
	{
		xe.ur = czq;

		np.vu('yx');
	}

	si()
	{
		if (xe.an)
		{
			xe.qd = ig.oek(19, xe.qd);
		}
	}

	fh(eja)
	{
		xe = new sz(eja, '1');

		return xe.iq();
	}

	async xp(ew)
	{
		const ikv = await pa.qo(chrome.runtime.getURL(ew));

		return ikv.ub;
	}

	async jgr(rpa)
	{
		this.dtn();

		if (rpa.reason == 'install')
		{
			await this.neb();
		}
		else {
			if (rpa.previousVersion < '')
			{

			}
		}

		await this.ljo();

		await this.ir();
	}

	async tpl(rpa)
	{
		await this.jgr(rpa);

		switch (rpa.reason)
		{
			case 'install':
				this.ykg();
			break;

			case 'update':
				this.bne();
			break;
		}

		nwz.nvn();
	}

	ykg()
	{

	}

	bne()
	{

	}

	async eoz(qrx, ub)
	{
		await this.oc;

		switch (qrx)
		{
			case 'rhm':
				return this.jmc(ub);

			case 'jbs':
				return this.rob(ub);
		}
	}

	jmc(rhm)
	{
		const vwu = rhm.name;

		switch (vwu)
		{
			case 'kdo':
				this.kdo();
		}
	}

	rob(rh)
	{
		return new qbo().jf(rh);
	}

	async kdo()
	{
		const v = await cm.lr.ptu();

		if (v > this.qjv)
		{
			return this.mbf(v);
		}
	}

	uh()
	{
		if (xe.an)
		{
			if (ig.rw() || !xe.sv)
			{
				this.si();
			}
		}
	}

	get gde()
	{
		return ck.get('schemaVersion');
	}

	ljo()
	{
		return ck.set('schemaVersion', this.qjv);
	}

	get tvh()
	{
		return this.nuq.latestVersion;
	}

	mbf(v)
	{
		this.nuq.set('latestVersion', v);
	}

	neb()
	{
		return ck.set({
			0: {
				latestVersion: this.qjv
			},
			1: {},
		});
	}

	dtn()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('kdo', {periodInMinutes:240});
	}
}

class qbo
{
	jf(rh)
	{
		rh = ig.okl(rh);

		switch (rh.issuer)
		{
			case 'authServer':
				return this.vtr(rh.data);
		}
	}

	vtr(ub)
	{
		if (ub.id == 'pa')
		{
			jo.fuy(ub.token);
		}
	}
}

class cew
{
	constructor()
	{
		this.lr = new clp;

		this.bg = new csy;
	}
}

class clp
{
	constructor()
	{
		this.nvh = 'https://api.lett.app/cs';
	}

	async qid(qd)
	{
		const ikv = await this.get('/auth', {
			apiKey:qd,
			token:jo.lf
		});

		if (ikv.cu)
		{
			return ikv.ub;
		}
	}

	async ptu()
	{
		const ikv = await this.get('/update');

		if (ikv.cu)
		{
			return ikv.ub.version;
		}
	}

	async vw()
	{
		const ikv = await this.get(
			'https://api.lett.app/donate/accept', this.msl, Infinity
		);

		if (ikv.cu)
		{
			return ikv.ub.url;
		}
	}

	get msl()
	{
		return {
			extId:jo.lf,
			apiKey:xe.qd,
			p:1,
		};
	}

	async get(wgh, sq, lu)
	{
		if (wgh[0] == '/')
		{
			wgh = this.nvh + wgh;
		}

		const ikv = await pa.qo(wgh, sq, lu);

		if (!ikv.cu && !ikv.ce)
		{
			ikv.pk(ikv.ub.error);
		}

		return ikv;
	}
}

class zve
{
	constructor()
	{
		this.nvh = 'https://www.googleapis.com/youtube/v3';
	}

	mws(qd)
	{
		this.jd = qd;
	}

	async iyb(qd)
	{
		this.mws(qd);

		const ikv = await this.rno('jNQXAC9IVRw');

		return ikv.cu;
	}

	ovx(tc)
	{
		return this.bk({
			videoId:tc
		});
	}

	yra(tc, asp)
	{
		return this.py({
			videoId:tc,
			searchTerms:asp
		});
	}

	ygf(rmr, asp)
	{
		return this.py({
			allThreadsRelatedToChannelId:rmr,
			searchTerms:asp
		});
	}

	async rno(tc)
	{
		const ikv = await this.xkw({
			id:tc,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (ikv.cu)
		{
			try {
				ikv.ub = new fle(ikv.ub);
			}
			catch (e) {
				ikv.pk('fr');
			}
		}

		return ikv;
	}

	async get(wgh, sq)
	{
		const ikv = await pa.qo(this.nvh + wgh, sq);

		if (!ikv.cu && !ikv.ce)
		{
			const ubp = this.xjf(ikv.ub);

			ikv.pk(ubp);
		}

		return ikv;
	}

	async py(sq)
	{
		const ikv = await this.get('/commentThreads', sq);

		if (ikv.cu)
		{
			ikv.ub = this.eaq(ikv.ub);
		}

		return ikv;
	}

	async bk(sq)
	{
		let ikv, wq = [];

		do {
			ikv = await this.get('/commentThreads', sq);

			if (ikv.cu)
			{
				const jbp = this.eaq(ikv.ub);

				wq.push(jbp);

				sq.pageToken = ikv.ub.nextPageToken;
			}
		}
		while (ikv.cu && sq.pageToken)

		ikv.ub = wq.flat();

		return ikv;
	}

	xkw(sq)
	{
		return this.get('/videos', sq);
	}

	uwk(arz)
	{
		try {
			return new alc(arz);
		}
		catch (e) {
			return null;
		}
	}

	wrl(arz)
	{
		let ubs = [];

		try {
			if (arz.replies) {
				ubs = arz.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return ubs;
	}

	xjf(plm)
	{
		try {
			return plm.error.errors[0].reason;
		}
		catch (e) {
			return plm.bw || 'gx';
		}
	}

	eaq(arz)
	{
		const jbp = [];

		try {
			for (let xb of arz.items)
			{
				const gj = this.yey(xb);

				if (gj) {
					jbp.push(gj);
				}
			}
		}
		catch (e) {
		}

		return jbp;
	}

	yey(arz)
	{
		try {
			const ocl = arz.snippet;

			if (ocl.videoId)
			{
				let no = this.uwk(ocl.topLevelComment);

				if (no)
				{
					const gj = new gjr(no, ocl.totalReplyCount);

					for (let ejn of this.wrl(arz))
					{
						no = this.uwk(ejn);

						if (no) {
							gj.pfi(no);
						}
					}

					return gj;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class csy extends zve
{
	bk(sq)
	{
		this.hxa(sq);

		return super.bk(sq);
	}

	py(sq)
	{
		this.hxa(sq);

		return super.py(sq);
	}

	async get(wgh, sq)
	{
		sq.key = this.jd;

		let ikv, i = 3;

		while (i--)
		{
			ikv = await super.get(wgh, sq);

			if (ikv.bw != 'processingFailure')
				break;
		}

		return ikv;
	}

	hxa(sq)
	{
		Object.assign(sq, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class vgb
{
	static sli(fm)
	{
		const tc = ig.yn(se[25], fm);

		if (tc)
		{
			let fx = ig.yn(se[26], fm) || 0;

			if (!ig.nu(fx))
			{
				fx = ig.tz(se[27], fx).join(':');

				fx = ig.gp(fx);
			}

			return {tc, fx};
		}
	}

	static diw(fm)
	{
		return ig.yn(se[28], fm).replace('www.', '');
	}
}

class nqp
{
	async dnj(fi)
	{
		const jbq = await this.srg();

		if (jbq && jbq.url)
		{
			this.hl(jbq.id, 'fi', fi);
		}
	}

	nvn()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, nwz =>
		{
			for (let jbq of nwz)
			{
				chrome.tabs.reload(jbq.id);
			}
		});
	}

	srg()
	{
		return new Promise(re =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, nwz =>
			{
				re(nwz[0]);
			});
		});
	}

	hl(fdh, jn, ub)
	{
		chrome.tabs.sendMessage(fdh, new hq(jn, ub));
	}
}

class ykc
{
	constructor(ys, otm)
	{
		this.lf = otm.tc;

		this.otm = otm;

		this.iau = new svp(ys);

		this.wq = {};

		for (let ktx of ['mea', 'qrt'])
		{
			this[ktx] = new te(Array);
		}

		for (let ktx of ['myx', 'zsj', 'qap'])
		{
			this[ktx] = [];
		}

		for (let gj of ys)
		{
			this.zv(gj);
			this.adx(gj);
		}
	}

	zbu(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.ula();

			case ':all':
				return this.vde();

			case ':creator':
				return this.dpz();

			case ':link':
				return this.rif();

			case ':reply':
				return this.owz();
		}

		if (se[29].test(q))
		{
			const db = this.qxr(q);

			switch (db.length)
			{
				case 1: return this.dan(db[0]);

				case 2: return this.dxe(db[0], db[1]);
			}
		}

		return this.yjl(q);
	}

	vde()
	{
		return this.vil(
			Object.keys(this.wq)
		);
	}

	ula()
	{
		return this.vil(this.qrt.values);
	}

	dpz()
	{
		return this.vil(this.myx);
	}

	rif()
	{
		return this.vil(this.qap);
	}

	owz()
	{
		return this.vil(this.zsj);
	}

	dxe(uc, lqg)
	{
		const tus = ig.gp(uc);
		const pcf = ig.gp(lqg);

		const yjy = [];

		for (let db of this.qrt.keys)
		{
			if (tus <= db && db <= pcf)
			{
				yjy.push(
					this.qrt.get(db)
				);
			}

			if (pcf < db) break;
		}

		return this.vil(yjy);
	}

	zv(xb)
	{
		this.wq[xb.lf] = xb;
	}

	ilr(lf)
	{
		return this.wq[lf].vi;
	}

	vil(yjy)
	{
		yjy = yjy.flat();

		return ig.mtv(yjy).map(
			lf => this.ilr(lf)
		);
	}

	yjl(hv)
	{
		let qno = [];

		let fa = this.ane(hv);

		let yjy = fa.map(
			k => this.select('mea', k)
		);

		yjy = yjy.filter(x => x.length);

		if (yjy.length)
		{
			qno = ig.scw(...yjy);

			if (qno.length < 1)
			{
				yjy.sort((a, b) => a.length - b.length);

				qno = yjy[0];
			}
		}

		return this.vil(qno);
	}

	dan(hc)
	{
		let pt = ig.gp(hc);

		let yjy = [
			this.select('qrt', pt)
		];

		for (let i = pt; i--;)
		{
			let x = this.select('qrt', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			yjy.push(x);
		}

		for (let i = pt; i++;)
		{
			let x = this.select('qrt', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			yjy.push(x);
		}

		return this.vil(yjy);
	}

	adx(gj)
	{
		const bm = gj.jad.map(no => no.ahj).join(' ');

		this.hol(bm, gj.lf);

		this.dqt(bm, gj.lf);

		this.vpl(bm, gj.lf);

		this.wrl(gj);
	}

	wrl(gj)
	{
		if (gj.length > 1)
		{
			this.zsj.push(gj.lf);
		}

		if (gj.krz(this.otm.rmr))
		{
			this.myx.push(gj.lf);
		}
	}

	hol(bm, lf)
	{
		bm.includes('http') && this.qap.push(lf);
	}

	dqt(bm, lf)
	{
		const kxy = this.qxr(bm);

		for (let db of kxy)
		{
			db = ig.gp(db);

			if (0 <= db && db < this.otm.ek)
			{
				this.qut('qrt', db, lf);
			}
		}
	}

	vpl(bm, lf)
	{
		this.ane(bm).forEach(
			mg => this.qut('mea', mg, lf)
		);
	}

	qut(ktx, jd, xo)
	{
		this[ktx].gte(jd);

		this[ktx].get(jd).push(xo);
	}

	select(ktx, jd)
	{
		return this[ktx].get(jd);
	}

	ane(hv)
	{
		hv = wpb.tnt(hv);

		hv = wpb.zlu(hv);

		hv = ig.fnb(hv);

		return ig.mtv(hv);
	}

	qxr(hv)
	{
		return ig.tz(se[30], hv);
	}
}

class svp
{
	constructor(ys)
	{
		this.iau = {};

		this.jzf = {};

		this.yzu = {};

		for (let gj of ys)
		{
			this.ant(gj);
		}

		this.msz();
	}

	nym(vze)
	{
		return this.jzf.zbu(vze);
	}

	gug(lf)
	{
		return this.iau[lf];
	}

	ant(gj)
	{
		for (let no of gj.jad)
		{
			this.trw(no.ugu, no.ahj);
			this.fax(no.ugu, no.hsb);
		}
	}

	msz()
	{
		this.jzf = new ycv(this.jzf);

		for (let lf in this.yzu)
		{
			const yzu = this.yzu[lf];

			if (yzu.length > 1)
			{
				const qlb = yzu.filter(
					(bm, i) => bm.length < 28 || i == yzu.indexOf(bm)
				);

				this.gug(lf).amj = (yzu.length != qlb.length);
			}
		}
	}

	fax(lf, ehx)
	{
		let vgw = new lix(lf, ehx);

		this.iau[lf] = vgw;

		this.jzf[ehx] = vgw;
	}

	trw(lf, bm)
	{
		this.yzu[lf] = this.yzu[lf] || [];

		this.yzu[lf].push(bm);
	}
}

class lix
{
	constructor(lf, ehx)
	{
		this.lf = lf;
		this.ehx = ehx;
		this.amj = false;
		this.zhi = false;
	}

	get mgo()
	{
		return this.zhi ? this.ehx : this.ztd;
	}

	get nwp()
	{
		return !this.zhi && this.amj;
	}

	get ztd()
	{
		if (!this.rzo)
		{
			this.rzo = xgb.ixz(this.ehx);
		}

		return this.rzo;
	}
}

class ycv
{
	constructor(he)
	{
		this.keys = Object.keys(he).sort(this.ohf);

		this.awi = this.keys.map(jd => he[jd]);

		this.keys = this.keys.map(ig.wm);
	}

	zbu(fhz)
	{
		fhz = fhz.toLowerCase();

		let wq = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(fhz))
			{
				do {
					wq.push(this.awi[i])
				}
				while (++i < n && this.keys[i].startsWith(fhz));

				break;
			}
		}

		return wq.sort(this.cfw);
	}

	cfw(a, b)
	{
		return b.ehx.length - a.ehx.length;
	}

	ohf(a, b)
	{
		return a.localeCompare(b);
	}
}

const cbv = {
	kum: {
		zlk(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		pvw(x)
		{
			return (x != 0) ? (1 / x) : 0;
		},

		ibp(luj)
		{
			let xcl = ig.rdf(luj);

			return (n) => (xcl - Math.abs(xcl - n)) / xcl;
		}
	},

	adx(ys, wui, otm)
	{
		this.jpo = otm.rmr;

		const cvu = wui.gug(this.jpo);

		if (cvu)
		{
			cvu.zhi = true;
		}

		this.zbu = otm.zbu;

		this.qae = new wuy;

		this.det = new njx;

		this.sof = new srw;

		this.zmv = {};

		return this.skj(ys, wui);
	},

	skj(ys, wui)
	{
		const ljq = ('you are not but for the thi and that was').split(' ');

		const yso = {
			eqf: 1,
			btm: [],
		};

		const wfj = {
			zlk: this.kum.zlk,
			fuv: this.kum.pvw,
			btm: null,
		};

		const nlo = {
			mea: .5,
			uhr: .1,
			pgv: .2,
			fuv: .15,
			btm: .2,
			zlk: .1,
			oeb: .1,
		};

		if (this.zbu.thi)
		{
			Object.assign(nlo, {
				oeb: .4,
				pgv:.4,
				fuv: .1,
				btm: .0,
			});
		}

		for (let gj of ys)
		{
			Object.assign(gj,
			{
				ry: {
					btm: gj.qiw.ahj.length,
					gso: 0,
					uhr: false,
					pgv: false,
					qrt: [],
					fa: [],
				},
				gvx: {
					mea: 0,
					uhr: 0,
					pgv: 0,
					fuv: 0,
					btm: 0,
					zlk: 0,
					oeb: 0,
					lwv: 0,
				},
			});

			const ry = gj.ry;

			for (let i = 0; i < gj.length; i++)
			{
				const no = gj.jad[i] = new etw(gj.jad[i]);

				no.vgw = wui.gug(no.ugu);

				no.ej = this.ej(no.ugu);

				if (i > 0)
				{
					no.cr = true;

					no.fip && (ry.uhr = true);
					no.ej && (ry.pgv = true);
				}

				if (no.fqs == '' || no.vgw.nwp)
				{
					no.xj();
				}
			}

			const qiw = gj.qiw;

			if (this.ykw(qiw.ucs))
			{
				gj.hidden = true;

				continue;
			}

			ry.fa = ig.fnb(qiw.fqs);
			ry.gso = ry.fa.length;
			ry.fa = ig.mtv(ry.fa);

			for (let x in qiw.tu)
			{
				x = qiw.tu[x];

				if (x.lf == qiw.ucs)
				{
					gj.hidden = true;
				}

				if (x instanceof vd)
				{
					ry.qrt.push(x.xq);

					ig.qlr(x.lf, this.det.zln(x.xq), ry.fa);
				}
			}

			for (let mg of ry.fa)
			{
				if (mg.length > 2 && !ljq.includes(mg))
				{
					this.qae.rtc(mg);
				}
			}

		}

		for (let gj of ys)
		{
			if (gj.hidden)
				continue;

			const gvx = gj.gvx;

			for (let mg of gj.ry.fa)
			{
				gvx.mea += this.qae.get(mg);
			}

			gvx.mea /= gj.ry.gso;

			gvx.fuv = gj.ry.qrt.length;

			if (gvx.mea > yso.eqf)
			{
				yso.eqf = gvx.mea;
			}

			yso.btm.push(gj.ry.btm);
		}

		wfj.btm = this.kum.ibp(yso.btm);

		for (let gj of ys)
		{
			const gvx = gj.gvx;

			gvx.mea = nlo.mea * (gvx.mea / yso.eqf);
			gvx.pgv = nlo.pgv * +gj.ry.pgv;
			gvx.fuv = nlo.fuv * wfj.fuv(gvx.fuv);
			gvx.btm = nlo.btm * wfj.btm(gj.ry.btm);
			gvx.zlk = nlo.zlk * wfj.zlk(gj.zlk);

			gvx.lwv = ig.naj(Object.values(gvx));
		}

		ys.sort(
			(a, b) => b.gvx.lwv - a.gvx.lwv
		);

		for (let i = 0, n = ys.length; i < n; i++)
		{
			const a = ys[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = ys[k];

				if (b.ugu == a.ugu && !b.qiw.vgw.zhi)
				{
					b.hidden = true;
				}

				if (!b.hidden && !b.xos)
				{
					const oar = ig.scw(a.ry.fa, b.ry.fa);
					const yka = (a.ry.fa.length + b.ry.fa.length) / 2;

					if (oar.length == b.ry.gso)
					{
						b.hidden = true;
					}

					if (oar.length / yka > .57)
					{
						const pcf = a.ry.qrt[0] || 0;
						const den = b.ry.qrt[0] || 0;

						if (this.det.trx(pcf, den))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < ys.length; i++)
		{
			const gj = ys[i];

			let yad;

			if (i == 0 && !gj.xos)
			{
				const gdt = this.zbu.hv.toLowerCase();
				const bfg = gj.qiw.fqs;

				if (gdt == bfg)
				{
					yad = true;
				}
			}

			if (gj.xos && gj.chd.length == 1)
			{
				const tus = new Date(gj.qiw.ucp);
				const pcf = new Date(gj.svh.ucp);

				if (.001 * (pcf - tus) < 300)
				{
					yad = true;
				}
			}

			if (yad)
			{
				ig.ulx(i, ys);
			}
		}

		for (let gj of ys)
		{
			this.sof.kqk(gj.lf, gj.ugu);

			for (let ugu of gj.chd)
			{
				this.sof.viw(ugu, gj.lf)
			}
		}

		for (let gj of ys)
		{
			if (gj.zlk == 0) continue;

			for (let ejn of gj.ubs)
			{
				const bm = ejn.ucs;

				const ivq = ig.yn(se[31], bm);

				for (let vgw of wui.nym(ivq))
				{
					if (this.wgv(vgw).test(bm))
					{
						ejn.ejq = vgw;
						break;
					}
				}
			}

			if (gj.length > 2)
			{
				let iau, wq, hbk = true;

				const n = gj.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					const ejn = gj.jad[i];

					if (hbk)
					{
						iau = [];
						wq = [];
						hbk = false;
					}

					const xe = ejn.vgw;

					if (ig.wz(iau) == xe) {
						i++;
					}
					else if (iau.includes(xe) || ig.mtv(iau).length < 2) {
						wq.push(ejn);
						iau.push(xe);

						if (i + 1 < n)
							continue;
					}

					if (wq.length > 2)
					{
						let rts = !wq.some(ejn => ejn.ejq && !iau.includes(ejn.ejq));

						if (rts)
						{
							wq.forEach(ejn =>
								ejn.ejq = iau.find(vgw => vgw != ejn.vgw)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						hbk = true;
					}
				}
			}

			for (let ica, i = 1; i < gj.length; i++)
			{
				const ejn = gj.jad[i];

				if (!ejn.ejq)
				{
					if (ica && ica.ejq == ejn.vgw)
					{
						ejn.ejq = ica.vgw;

						gj.ond(ejn, ica);
					}
				}
				else {
					const aig = ejn.ejq;

					let fyh;

					for (let k = i - 1; k >= 0; k--)
					{
						const ica = gj.jad[k];

						if (k == 0)
						{
							if (ica.vgw == aig)
							{
								fyh = '';
							}

							break;
						}

						if (ica.vgw == aig)
						{
							gj.ond(ejn, ica);

							if (ica.children.length == 1)
							{
								fyh = '';
							}

							break;
						}
					}

					if (fyh == null)
					{
						const ul = new pva(aig.mgo, aig.lf);

						fyh = ejn.nog(ul) + ' ';
					}

					ejn.ucs = ejn.ucs.replace(this.wgv(aig), fyh);
				}

				ica = ejn;
			}

			for (let i = 1, n = gj.length; i < n; i++)
			{
				const ejn = gj.jad[i];

				if (ejn.wc || ejn.children.length)
				{
					ig.ulx(i, gj.jad);
					i--;
					n--;
				}
			}

			for (let smy = false, i = 1; i < gj.length; i++)
			{
				let ejn = gj.jad[i];

				smy = (smy || !ejn.fip);

				if (ejn.ynd)
				{
					continue;
				}

				if (!smy)
				{
					const bm = ejn.ucs;

					if (gj.length > 2 || ['+','@'].includes(bm[0]) || bm.length < 10)
					{
						ejn.xj();
					}
				}

				ejn.ejq && !gj.krz(ejn.ejq.lf) && ejn.xj();

				this.xzl(ejn.ugu, gj.lf) && ejn.xj();
			}
		}

		ys = ys.map(gj =>
		{
			if (gj.qiw.hidden)
			{
				return [];
			}

			const jad = [];

			for (let i = 0; i < gj.length; i++)
			{
				const no = gj.jad[i];

				no.xf = xgb.leq(no.ucs);

				no.mgo = no.vgw.mgo;

				if (no.xf.length < 2)
				{
					if (i == 0) return [];

					no.xj();
				}

				jad.push(new bpq(no));
			}

			return jad;
		});

		return ys.filter(gj => gj.length > 0);
	},

	ykw(hv)
	{
		return hv.length > 500 || ig.ljc(se[32], hv) > 3;
	},

	ej(ugu)
	{
		return this.jpo == ugu;
	},

	xzl(ugu, cef)
	{
		if (!this.jpo || this.ej(ugu))
		{
			return false;
		}

		for (let rvc of this.sof.of(ugu))
		{
			if (rvc == cef)
			{
				return false;
			}

			if (!this.sof.nzw(rvc, ugu))
			{
				return true;
			}
		}
	},

	wgv(vgw)
	{
		const lf = vgw.lf;

		if (lf in this.zmv)
		{
			return this.zmv[lf];
		}

		return this.zmv[lf] = ig.jyn('^[+@]?%s[-\\s,.:?!]*', vgw.ehx, 'i');
	}
};

const xgb = {
	leq(mb)
	{
		let hv = new vwf(mb);

		hv.buk('<') && hv.replace(se[33], '&lt;');

		hv.ere && hv.toLowerCase();

		if (hv.buk('.'))
		{
			hv.charAt(-1) == '.' && hv.charAt(-2) != '.' && hv.wjy(1);

			hv.replace(se[34], (m) => m.replace(se[35], ''));
		}

		if (hv.buk('\n'))
		{
			hv.replace(se[36], function(m, i)
			{
				let x = hv.charAt(i - 1);

				return ig.ifz(x) ? '. ' : ' ';
			});
		}

		if (hv.xin('*_'))
		{
			hv.replace(se[37], '$2');
		}

		if (hv.xin('(,!?.)'))
		{
			hv.replace(se[38], '?!');

			hv.replace(se[39], '$1');

			hv.replace(se[40], '$1 $2');

			hv.buk('!') && hv.replace(se[41], '$1');
		}

		if (hv.xin('$£€'))
		{
			hv.replace(se[42], (_, sgw, srn) =>
			{
				se[43].test(sgw) && (sgw = Math.round(sgw));

				return srn + sgw;
			});
		}

		hv.buk(':') && hv.replace(se[44], ': ');

		hv.buk('&') && hv.replace(se[45], ' and ');

		hv.buk('"') && hv.replace(se[46], '" - $1');

		return myk.fui(hv.fan);
	},

	ixz(mb)
	{
		return mb.length < 28 && this.xcw(mb) || this.qic();
	},

	xcw(hv)
	{
		let fa;

		if (!se[47].test(hv))
		{
			if (ig.esg(hv))
			{
				hv = ig.sbt(hv);
			}

			fa = hv.split(' ');

			if (fa.length == 1)
			{
				return ig.qy(fa[0], 'PRE_CASE');
			}
		}
		else {
			fa = ig.tz(se[48], hv);
		}

		fa = fa.map(mg =>
		{
			switch (true)
			{
				case mg.length < 2 || ig.nu(mg):
					return '';

				default:
					return ig.qy(mg);
			}
		});

		fa = fa.filter(
			(mg, i) => mg != '' && i == fa.indexOf(mg)
		);

		return fa.join(' ');
	},

	qic()
	{
		return 'user' + ig.gs(4);
	}
};

const wpb = {
	tnt(hv)
	{
		hv = hv.toLowerCase();

		hv = hv.replace(se[49], ' ');

		return ig.oer(hv);
	},

	zlu(hv)
	{
		return hv.replace(se[50], '$1');
	}
};

const myk = {
	lhv: {
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

	fui(hv)
	{
		return hv.replace(se[51], m => this.get(m));
	},

	get(jd)
	{
		jd = jd.toLowerCase();

		(jd.length == 2) || (jd = jd.slice(0, 2));

		return this.lhv[jd] || jd;
	}
};

class wuy
{
	constructor()
	{
		this.map = {};
	}

	rtc(mg)
	{
		this.map[mg] = ++this.map[mg] || 0;
	}

	get(mg)
	{
		return this.map[mg] || 0;
	}
}

class njx
{
	constructor()
	{
		this.map = {};
	}

	zln(sdk)
	{
		for (let syu in this.map)
		{
			if (this.trx(sdk, syu))
			{
				return this.map[syu];
			}
		}

		return this.hyq(sdk);
	}

	hyq(db)
	{
		return this.map[db] = ig.xc('TS%s', db);
	}

	trx(pcf, den)
	{
		return Math.abs(den - pcf) < 5;
	}
}

class srw
{
	constructor()
	{
		this.iau = {};

		this.ys = {};
	}

	of(jmn)
	{
		return this.iau[jmn];
	}

	nzw(pyq, jmn)
	{
		return this.ys[pyq] == jmn;
	}

	kqk(lf, wuf)
	{
		this.ys[lf] = wuf;
	}

	viw(lf, pyq)
	{
		if (!this.iau[lf])
		{
			this.iau[lf] = new du;
		}

		this.iau[lf].push(pyq);
	}
}

class wo
{
	constructor(kn)
	{
		kn.jf = this.jf.bind(this);

		this.kn = kn;

		this.ugp = 0;

		this.lpr = new Promise(re => re(null));

		this.otm;

		this.ugs = new ugs;

		this.amx = new ykc([], {});
	}

	async jf(rh)
	{
		const tc = rh.ub.tc;

		try {
			const rpa = await this.ugs.zrh(tc);

			this.otm = new die(rh.ub, rpa);
		}
		catch (zn) {
			return this.gbv(zn);
		}

		switch (rh.jn)
		{
			case 'py':
				return this.icr(tc);

			case 'mq':
				return this.zi(tc);
		}
	}

	gbv(lf)
	{
		this.eyj('bw', {lf});
	}

	zi(tc)
	{
		const n = this.otm.mq;

		if (0 < n && n < 1000)
		{
			this.unm(tc);
		}

		this.eyj('mq', n);
	}

	async icr(tc)
	{
		if (this.otm.zbu.orw)
		{
			return this.gbv('oz');
		}

		this.jcp();
	}

	async jcp()
	{
		let r = new nvy(this.nto);

		try {
			if (this.otm.zbu.uap)
			{
				await this.gkq(r);
			}
			else {
				await this.zbw(r);
			}

			!this.ilu(r.lf) && this.eyj('py', r);
		}
		catch (zn) {
			!this.ilu(r.lf) && this.gbv(zn);
		}
	}

	async gkq(plm)
	{
		const ikv = await cm.bg.ygf(this.otm.rmr, this.otm.zbu.hv);

		if (ikv.bw)
		{
			throw ikv.bw;
		}

		const iau = new svp(ikv.ub);

		const ys = cbv.adx(ikv.ub, iau, this.otm);

		plm.ilq(ys);
		plm.rzn(-2);
	}

	async zbw(plm)
	{
		const tc = this.otm.tc;
		const rk = this.otm.zbu.hv;

		const p = plm.rzn(this.otm.mq);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.otm.zbu.jkz)
		{
			throw 'mk';
		}

		let ys, iau;

		if (p < 1000)
		{
			const zn = await this.unm(tc);

			if (zn)
			{
				throw zn;
			}

			iau = this.amx.iau;

			ys = this.amx.zbu(rk);
		}
		else {
			const ikv = await cm.bg.yra(tc, rk);

			if (ikv.bw)
			{
				throw ikv.bw;
			}

			iau = new svp(ikv.ub);

			ys = ikv.ub;
		}

		ys = cbv.adx(ys, iau, this.otm);

		plm.ilq(ys);
	}

	eyj(jn, ub)
	{
		this.kn.gu(jn, ub);
	}

	async unm(tc)
	{
		await this.lpr;

		if (tc != this.amx.lf)
		{
			this.lpr = new Promise(async re =>
			{
				const ikv = await cm.bg.ovx(tc);

				if (ikv.cu)
				{
					this.amx = new ykc(ikv.ub, this.otm);
				}

				re(ikv.bw);
			});
		}

		return this.lpr;
	}

	get nto()
	{
		return ++this.ugp;
	}

	ilu(veg)
	{
		return veg != this.ugp;
	}
}

class ugs
{
	constructor()
	{
		this.map = {};
	}

	async zrh(tc)
	{
		let x = this.map[tc];

		if (x == undefined)
		{
			x = this.uen(tc);
		}

		if (x instanceof Promise)
		{
			const ikv = await x;

			if (ikv.bw)
			{
				this.mzv(tc);

				throw ikv.bw;
			}

			x = this.zkq(tc, ikv.ub);
		}

		return x;
	}

	dny(tc, value)
	{
		return this.map[tc] = value;
	}

	uen(tc)
	{
		const r = cm.bg.rno(tc);

		return this.dny(tc, r);
	}

	zkq(tc, ovg)
	{
		return this.dny(tc, ovg);
	}

	mzv(tc)
	{
		this.dny(tc, undefined);
	}
}

class ucn
{
	constructor(q)
	{
		this.hv = '';
		this.ta = '';
		this.uap = false;
		this.orw = false;

		this.skj(q);
	}

	get jkz()
	{
		return this.ta == 'ib';
	}

	get thi()
	{
		return this.ta == 'rmc';
	}

	skj(q)
	{
		const guz = q.replace(se[52], '');

		if (guz != q)
		{
			this.uap = true;

			if (guz == '')
			{
				this.orw = true;
			}
		}

		this.hv = guz;
		this.ta = ucn.par(guz);
	}

	static par(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'ib';

			case (se[53]).test(q):
				return 'rmc';

			default:
				return '';
		}
	}
}

class die
{
	constructor(qli, sdq)
	{
		Object.assign(this, ...[qli, sdq]);

		this.ek = Math.floor(qli.ek) || Infinity;
		this.hn = Math.floor(qli.hn);

		this.zbu = new ucn(qli.rk);
	}
}

class nvy
{
	constructor(veg)
	{
		this.lf = veg;
		this.ys = [];
		this.el = 0;
		this.cq = 0;
	}

	ilq(ys)
	{
		this.ys = ys;
		this.el = ys.length;
	}

	rzn(n)
	{
		return this.cq = n;
	}
}

let xe;

const cm = new cew;
const ck = new pc;
const nwz = new nqp;
const jo = new xn;
const np = new dh;
const hx = new xt;

const se = [
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