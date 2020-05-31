/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const ha = {};

for (let by of 'object array string regex date math type std cmp'.split(' '))
{
	ha[by] = {};
}

ha.rn = function(qa, tz)
{
	return qa != undefined && qa.constructor === tz;
}

ha.yi = function()
{
	return ha.lx(9);
}

ha.ex = function(xv)
{
	return ci[0].test(xv);
}

ha.nk = function(sw)
{
	return Object.keys(sw).length == 0;
}

ha.cy = function(ih, sw)
{
	for (let lw in sw)
	{
		const uo = sw[lw];

		if (lw == ih) return uo;
		if (uo == ih) return lw;
	}
}

ha.zn = function(sw, ra)
{
	if (sw instanceof Object)
	{
		return sw[ra];
	}
}

ha.vi = function(sw, ra, rp)
{
	if (sw instanceof Object)
	{
		sw[ra] = rp;
	}
}

ha.qj = function(sw, xu)
{
	let xv = '';

	for (let lw in sw)
	{
		xv += lw + '=' + sw[lw] + xu;
	}

	return xv.slice(0, -1);
}

ha.yq = function(rs, mh, bd)
{
	const dn = mh + 1;

	return bd.slice(dn, dn + rs);
}

ha.cv = function(bd)
{
	return bd[bd.length - 1];
}

ha.pl = function(lv, vt)
{
	lv += '?';

	for (let lw in vt)
	{
		lv += lw + '=' + encodeURIComponent(vt[lw]) + '&';
	}

	return lv.slice(0, -1);
}

ha.jz = function(xv, bm)
{
	if (ha.rn(bm, Array))
	{
		let i = 0;

		return xv.replace(ci[1], _ => bm[i++]);
	}

	return xv.replace('%s', bm);
}

ha.xi = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

ha.fj = function(xv, yt)
{
	const wh = ha.jz('(%s)', yt.join('|'));

	return xv.split(new RegExp(wh)).filter(s => s !== '');
}

ha.ay = function(xv)
{
	return xv.toUpperCase();
}

ha.gs = function(xv)
{
	return xv.toLowerCase();
}

ha.rf = function(xv, gx)
{
	if (!gx)
	{
		xv = xv.toLowerCase();
	}

	return xv[0].toUpperCase() + xv.slice(1);
}

ha.jp = function(lk, xv)
{
	return xv.match(lk) || [];
}

ha.py = function(lk, xv)
{
	if (lk.global) return '';

	const m = ha.jp(lk, xv);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

ha.wx = function()
{
	return Math.floor(Date.now() / 1000);
}

ha.hc = function(ud)
{
	return ud < ha.wx();
}

ha.kx = function(q)
{
	const ez = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = ha.py(ci[2], q);

	return Date.now() + (x[0] * ez[x[1]] * 1000);
}

ha.yx = function(zl)
{
	let x = zl.split(':'),
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

ha.xk = function(lc)
{
	let bd = [];

	bd.push(lc / 3600);

	lc %= 3600;

	bd.push(lc / 60);

	bd.push(lc % 60);

	bd = bd.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return bd.join(':').replace(ci[3], '');
}

ha.lx = function(qf)
{
	return Math.random().toString().slice(2, qf + 2);
}

ha.ec = function(qh, ic)
{
	const lf = Math.random() * (ic - qh) + qh;

	return Math.floor(lf);
}

ha.ya = function(x, a, b)
{
	return x >= a && x <= b;
}

ha.wt = function(a, b)
{
	return 100 * (a / b);
}

ha.sh = function(tc)
{
	const n = tc.length;
	const i = Math.floor(n / 2);

	if (n == 0)
		return 0;

	if (n % 2 != 0)
		return tc[i];

	if (n % 2 == 0)
		return (tc[i] + tc[i-1]) / 2;
}

ha.ie = function()
{
	let yv, ht = 0;

	try {
		yv = [sk, vu, hq, pz, go, iu];
	}
	catch (e) {
		yv = [sk, vu];
	}

	yv.forEach(
		iy => ht += iy.toString().length
	);

	return ht != 3412;
}

ha.kg = function(a, b)
{
	return a - b;
}

ha.ej = function(a, b)
{
	return b - a;
}

ha.ka = function(a, b)
{
	return a.length - b.length;
}

ha.ae = function(a, b)
{
	return b.length - a.length;
}

class gj
{
	constructor(ps, jr)
	{
		this.ps = ps;
		this.jr = jr;
	}
}

class ce
{
	constructor(vl, ps, jr)
	{
		this.vl = vl;
		this.ot = new gj(ps, jr);
	}
}

class pv extends Array
{
	constructor(si)
	{
		super();

		if (si != null)
		{
			super.push(si);
		}
	}

	push(xe)
	{
		return !this.includes(xe) && super.push(xe);
	}
}

class xf
{
	constructor(vj, rb)
	{
		const iy = vj.status;

		this.iy = iy;
		this.sr = false;
		this.gf = false;
		this.lm = null;
		this.jr = null;

		switch (rb)
		{
			case 'error':
				return this.jf('xg');

			case 'timeout':
				return this.jf('gr');

			default:
			{
				this.sr = (iy == 200);

				if (iy >= 500)
				{
					return this.jf('th');
				}

				try {
					this.jr = JSON.parse(vj.responseText);
				}
				catch (e) {
					this.jr = vj.responseText;
				}
			}
		}
	}

	ob(br)
	{
		this.lm = br;
	}

	jf(br)
	{
		this.ob(br);

		this.gf = true;
	}
}

class fo
{
	constructor(jr, wi)
	{
		Object.assign(this, jr);

		Object.defineProperty(this, 'wi', {
			value: wi
		});
	}

	set(lw, uo)
	{
		this[lw] = uo;

		this.qs();
	}

	qs()
	{
		return gd.set(this.wi, this);
	}
}

class sk extends fo
{
	constructor(jr, wi)
	{
		super(jr, wi);
	}

	get ea()
	{
		return Boolean(this.df)
	}

	get df()
	{
		return this[0];
	}

	get pu()
	{
		return this[1];
	}

	get ux()
	{
		return ha.hc(this.pu);
	}

	get bk()
	{
		const zr = this.pu.toString().split('').pop();

		return Boolean(+zr);
	}

	set df(lw)
	{
		this.set(0, lw);
	}

	set pu(zu)
	{
		this.set(1, zu);
	}

	get ri()
	{
		let s = this.pu.toString(),
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

class pd
{
	constructor(dm)
	{
		if (dm)
		{
			this.nl();
		}
	}

	ls(fs, cq, gz)
	{
	}

	nl()
	{
		chrome.runtime.onMessage.addListener(
			this.ls.bind(this)
		);
	}
}

class ro extends pd
{
	constructor()
	{
		super(false);
	}

	ls(fs, cq, gz)
	{
		const jr = fs.jr;

		switch (fs.ps)
		{
			case 'nc':
				return this.sp(jr);
		}
	}

	sp(nc)
	{
		if (nc == 'tj')
		{
			yw.dn();
		}
	}

	re()
	{
		return this.jx('re');
	}

	nv(jw)
	{
		return this.jx('nv', jw);
	}

	ts(df)
	{
		return this.jx('ts', df);
	}

	ek(rt)
	{
		return this.jx('ek', rt);
	}

	kd()
	{
		return this.jx('kd');
	}

	jx(ps, jr)
	{
		const fs = new gj(ps, jr);

		return new Promise(gz =>
		{
			try {
				chrome.runtime.sendMessage(fs, gz);
			}
			catch (e) {
			}
		});
	}
}

class rm extends pd
{
	constructor()
	{
		super(true);
	}

	ls(fs, cq, gz)
	{
		const ko = function(...bm)
		{
			try {
				gz(...bm);
			}
			catch (e) {
			}
		};

		pi.dv.then(_ =>
		{
			const jr = fs.jr;

			switch (fs.ps)
			{
				case 're':
					pi.re().then(ko);
				break;

				case 'nv':
					pi.nv(jr).then(ko);
				break;

				case 'ts':
					pi.ts(jr).then(ko);
				break;

				case 'ek':
					ao.xs.ek(jr).then(ko);
				break;

				case 'kd':
					pi.fa();
				break;
			}
		});

		return true;
	}
}

class yg
{
	get(lw)
	{
		return new Promise(zx =>
		{
			try {
				chrome.storage.local.get(lw, mj =>
					zx(typeof lw == 'string' ? mj[lw] : mj)
				);
			}
			catch (e) {
			}
		});
	}

	set(lw, uo)
	{
		let jr;

		if (typeof lw == 'object')
		{
			jr = lw;
		}
		else {
			jr = {[lw]:uo};
		}

		return new Promise(au =>
		{
			try {
				chrome.storage.local.set(jr, au);
			}
			catch (e) {
			}
		});
	}

	pt()
	{
		return new Promise(au =>
		{
			try {
				chrome.storage.local.clear(au);
			}
			catch (e) {
			}
		});
	}
}

class fnagf
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			ce => this.sa(ce)
		);

		Port.onDisconnect.addListener(
			_ => this.jd()
		);

		this.Port = Port;

		this.jo = {
		};

		this.cp = false;
	}

	ls(m)
	{
	}

	jm(vl, ps, jr)
	{
		const kn = new ce(vl, ps, jr);

		if (!this.cp)
		{
			this.Port.postMessage(kn);
		}
	}

	sa(x)
	{
		this.wg(x.vl).ls(x.ot);
	}

	wg(vl)
	{
		return this.jo[vl] || this;
	}

	yf(vl, ls, jd)
	{
		return this.jo[vl] = new ou(this, vl, ls, jd);
	}

	jd()
	{
		this.cp = true;

		for (let vl in this.jo)
		{
			this.wg(vl).jd();
		}
	}
}

class ix extends fnagf
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	ls(fs)
	{
		const jr = fs.jr;

		switch (fs.ps)
		{
			case 'zh':
				return wk.fp(jr);
		}
	}

	yf(vl, ls, jd)
	{
		this.jm(null, 'yf', vl);

		return super.yf(vl, ls, jd);
	}

	jd()
	{
		super.jd();

		yw.za();
	}
}

class mf extends fnagf
{
	constructor(ki)
	{
		super(ki);
	}

	ls(fs)
	{
		switch (fs.ps)
		{
			case 'yf':
				return this.yf(fs.jr);
		}
	}

	yf(vl)
	{
		const qm = super.yf(vl);

		switch (vl)
		{
			case 'el':
				return new ov(qm);
		}
	}
}

class qc
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			um => this.fy(um)
		);

		this.ua = [];
	}

	fy(ki)
	{
		this.ua.push(
			new mf(ki)
		);
	}

	uk(sn)
	{
		for (let ki of this.ua)
		{
			ki.jm(null, 'zh', sn);
		}
	}
}

class ou
{
	constructor(ki, vl, ls, jd)
	{
		this.ki = ki;

		this.vl = vl;

		if (ls)
		{
			this.ls = ls;
		}

		if (jd)
		{
			this.jd = jd;
		}
	}

	jm(ps, jr)
	{
		this.ki.jm(this.vl, ps, jr);
	}

	ls(m)
	{
	}

	jd()
	{
	}
}

ha.uxt = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

ha.yuo = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

ha.nwu = function(oy, tr)
{
	if (tr)
	{
		const ut = Object.create(
			Object.getPrototypeOf(oy)
		);

		return Object.assign(ut, oy);
	}

	return {...oy};
}

ha.tcn = function(zq, rp, bd)
{
	let i = bd.indexOf(zq);

	if (i >= 0)
	{
		bd[i] = rp;
	}
}

ha.avp = function(vn, cg, bd)
{
	if (cg != vn)
	{
		const xe = bd[vn];
		bd.splice(vn, 1);
		bd.splice(cg, 0, xe);
	}
}

ha.mjc = function(vn, bd)
{
	ha.avp(vn, Infinity, bd);
}

ha.slk = function(...kz)
{
    kz.sort(
    	(a, b) => a.length - b.length
    );

	return kz.shift().filter(xe =>
	{
		for (let un of kz)
        {
			if (!un.includes(xe))
				return false;
        }

		return true;
    });
}

ha.fwh = function(bd)
{
	return bd.filter(
		(value, ib) => bd.indexOf(value) == ib
	);
}

ha.lvd = function(ke, fq)
{
	return ke.join(fq || '.');
}

ha.ezh = function(xv, qfw)
{
	if (qfw)
	{
		xv = xv.replace(ci[4], '\n');

		xv = xv.replace(ci[5], ' ');
	}
	else {
		xv = xv.replace(ci[6], ' ');

	}

	return xv.trim();
}

ha.nev = function(xv, wh, gz)
{
	return xv.replace(wh, (xzx, wnt) =>
	{
		return xzx.replace(wnt, gz(wnt));
	});
}

ha.tfi = function(tiu)
{
	return ci[7].test(tiu);
}

ha.dys = function(xv)
{
	return !ci[8].test(xv);
}

ha.wil = function(xv)
{
	return xv.toLowerCase().replace(ci[9], ha.ay);
}

ha.xpb = function(xv)
{
	return xv == xv.toUpperCase();
}

ha.kbc = function(xv)
{
	return xv == xv.toLowerCase();
}

ha.cke = function(xv)
{
	return ha.kbc(xv) || ha.xpb(xv);
}

ha.jwb = function(lk, xv)
{
	return ha.jp(lk, xv).length;
}

ha.rur = function(xv)
{
	return ha.jwb(ci[10], xv) + 1;
}

ha.qpm = function(xv)
{
	return xv ? xv.split(' ') : [];
}

ha.ecq = function(i, xv)
{
	return xv.substring(0, i) + 'x' + xv.substring(++i);
}

ha.sbc = function(s)
{
	return String(s).replace(ci[11], '\\$1').replace(ci[12], '\\x08');
}

ha.tiq = function(wh, bm, sur)
{
	if (bm.constructor === Array)
	{
		bm = bm.map(ha.sbc);
	}
	else {
		bm = ha.sbc(bm);
	}

	wh = ha.jz(wh, bm);

	return new RegExp(wh, sur);
}

ha.vda = new function()
{
	const ez = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const led = (txd) => new Date(txd).getTime() / 1000;

	return (txd) =>
	{
		const akv = ha.wx() - led(txd);

		for (let [zr, eaj] of ez)
		{
			let aza = akv / eaj;

			if (aza >= 1)
			{
				aza = Math.floor(aza);

				return ha.jz('%s %s%s ago', [aza, zr, (aza > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

ha.rqx = function(bd)
{
	return bd.reduce((a, b) => a + b, 0);
}

ha.ert = function(bd)
{
	return ha.qhg(ha.rqx(bd), bd.length);
}

ha.qhg = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const oso = {
	dvu(lv, dqm, ryn)
	{
		return this.lkc('GET', lv, dqm, null, ryn);
	},

	ebq(lv, dqm, ot, ryn)
	{
		return this.lkc('POST', lv, dqm, ot, ryn);
	},

	lkc(fk, lv, dqm, ot, ryn)
	{
		if (dqm)
		{
			lv = ha.pl(lv, dqm);
		}

		if (ot)
		{
			ot = this.ctx(ot);
		}

		return new Promise(zx =>
		{
			let vj = new XMLHttpRequest;

			if (ryn != Infinity)
			{
				let yix = 0;

				vj.ontimeout = (e) =>
				{
					if (++yix < 3)
					{
						return this.rem(vj, fk, lv, ot);
					}

					vj.onerror(e);
				}

				vj.timeout = 5000;
			}

			vj.onload = vj.onerror = (e) => zx(
				new xf(vj, e.type)
			);

			this.rem(vj, fk, lv, ot);
		});
	},

	rem(vj, fk, lv, ot)
	{
		vj.open(fk, lv);
		vj.send(ot);
	},

	ctx(vt)
	{
		let kfn = new FormData;

		for (let lw in vt)
		{
			kfn.append(lw, vt[lw]);
		}

		return kfn;
	}
}

class vmp
{
	constructor(ems)
	{
		this.map = {};

		this.jyz = Object.getOwnPropertyNames(Object.prototype);

		this.lgl = ems;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(lw)
	{
		lw = this.mez(lw);

		return this.sjk(this.map[lw]);
	}

	set(lw, uo)
	{
		lw = this.mez(lw);

		this.map[lw] = this.sjk(uo);
	}

	vhr(lw)
	{
		return this.mez(lw) in this.map;
	}

	yiv(lw)
	{
		!this.vhr(lw) && this.set(lw);
	}

	mez(lw)
	{
		if (this.jyz.includes(lw))
		{
			return lw + '*';
		}

		return lw;
	}

	sjk(uo)
	{
		if (uo == undefined && this.lgl)
		{
			return new this.lgl;
		}

		return uo;
	}
}

class gha
{
	constructor(rot, tqh)
	{
		this.qn = rot.qn;

		this.eoc = rot.eoc;

		this.tqh = tqh;

		this.qku = [];

		this.dmv = new pv;

		this.xjz(rot);
	}

	xjz(sj)
	{
		if (this.eoc == sj.eoc)
		{
			sj.wfx = true;
		}

		this.dmv.push(sj.eoc);

		this.qku.push(sj);
	}

	gnf(qn)
	{
		return this.dmv.includes(qn);
	}

	iso()
	{
		this.mqz.forEach(qrp => qrp.hidden = true);
	}

	rte(rv, kp)
	{
		let azf = rv;

		while (azf.yab)
		{
			azf = azf.yab;
		}

		this.gmd(azf, kp);

		rv.hx(kp);
	}

	gmd(a, b)
	{
		const vn = this.qku.indexOf(b);
		const cg = this.qku.indexOf(a) + 1;

		ha.avp(vn, cg, this.qku);
	}

	get length()
	{
		return this.qku.length;
	}

	get wfr()
	{
		return this.dmv.length;
	}

	get rot()
	{
		return this.qku[0];
	}

	get nyt()
	{
		return this.qku[1];
	}

	get tzo()
	{
		return this.length > 1;
	}

	get mqz()
	{
		return this.qku.slice(1);
	}

	get kev()
	{
		return this.qku.length - 1;
	}

	get hidden()
	{
		return this.rot.hidden;
	}

	set hidden(dw)
	{
		this.rot.hidden = dw;
	}

	get ut()
	{
		const ut = ha.nwu(this, true);

		ut.qku = this.qku.map(ha.nwu);

		return ut;
	}
}

class gcm
{
	constructor(pfy)
	{
		this.rh = gcm.mco(pfy);
		this.nr = gcm.hkn(this.rh);
	}

	static hkn(rh)
	{
		return ['he','ar'].includes(rh) ? 'rtl' : 'ltr';
	}

	static mco(xv)
	{
		let ebm = .57 * ha.rur(xv);

		switch (true)
		{
			case ebm < ha.jwb(ci[13], xv): return 'en';

			case ebm < ha.jwb(ci[14], xv): return 'ar';

			case ebm < ha.jwb(ci[15], xv): return 'he';

			default: return '';
		}
	}

	static get cxu()
	{
		if (!this.vxk)
		{
			this.vxk = navigator.languages.map(rh => rh.slice(0, 2));
		}

		return this.vxk;
	}
}

class qnl
{
	constructor(cjw)
	{
		const _ = cjw.items[0];

		this.kci = _.snippet.channelId;
		this.zc = _.statistics.commentCount;

		if (this.zc == undefined)
		{
			this.zc = -1;
		}
		else {
			this.zc = +this.zc;
		}
	}
}

class snj
{
	constructor(cjw)
	{
		const _ = cjw.snippet;

		this.qn = cjw.id;
		this.fv = _.videoId;
		this.eoc = _.authorChannelId.value;
		this.mi = _.authorProfileImageUrl;
		this.xof = _.authorDisplayName;
		this.str = _.textOriginal;
		this.dyk = _.publishedAt;
		this.qji = _.likeCount;
		this.wfx = false;
		this.it = false;
	}
}

class qay
{
	constructor(snj)
	{
		Object.assign(this, snj);

		this.pns = '';
		this.tqg = '';
		this.wv = {};
		this.children = [];
		this.rv = null;
		this.tfx = null;
		this.pdb = null;
		this.xom = null;
		this.hidden = false;

		this.buc();
		this.ykc();
		this.chb();
		this.zyl();
		this.upm();
	}

	buc()
	{
		this.pns = this.str.replace(ci[16], '');

		delete this.str;
	}

	upm()
	{
		this.tqg = nxo.zmc(this.pns);

		this.xom = new gcm(this.tqg);

		if (this.xom.rh == 'en')
		{
			this.tqg = nxo.fpv(this.tqg);
		}
	}

	ykc()
	{
		if (!this.pns.includes('/'))
			return;

		this.pns = this.pns.replace(ci[17], (lv) =>
		{
			let x;

			const gus = ski.rpk(lv);

			if (gus) {
				if (gus.fv == this.fv)
				{
					x = new qo(this.fv, gus.pj);
				}
				else {
					x = new te(gus);
				}
			}
			else {
				x = new brv(lv);
			}

			return this.qof(x);
		});
	}

	chb()
	{
		if (!this.pns.includes('#'))
			return;

		this.pns = this.pns.replace(ci[18], (gra) =>
		{
			const x = new jfp(gra);

			return this.qof(x);
		});
	}

	zyl()
	{
		if (!this.pns.includes(':'))
			return;

		this.pns = this.pns.replace(ci[19], (zl) =>
		{
			const x = new qo(this.fv, zl);

			return this.qof(x);
		});
	}

	qof(xe)
	{
		this.wv[xe.qn] = xe;

		return xe.qn;
	}

	dh()
	{
		this.hidden = true;

		for (let kp of this.children)
		{
			kp.dh();
		}
	}

	hx(kp)
	{
		this.children.push(kp);

		kp.rv = this;
	}

	get yab()
	{
		return ha.cv(this.children);
	}

	get ywz()
	{
		return this.children.some(kp => !kp.hidden);
	}
}

class fay
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.ta = x.ta;
		this.wv = x.wv;
		this.fv = x.fv;
		this.qn = x.qn;
		this.ba = ha.zn(x.rv, 'qn');
		this.eoc = x.eoc;
		this.mi = x.mi;
		this.zoa = x.zoa;
		this.an = x.an;
		this.dyk = x.dyk;
		this.wfx = x.wfx;
		this.it = x.it;
		this.rh = x.xom.rh;
		this.nr = x.xom.nr;
		this.vwv = '';
		this.bze = '';

		this.dyk = ha.vda(this.dyk);

		this.vwv = ha.jz('https://www.youtube.com/channel/%s', this.eoc);

		this.bze = ha.jz('https://www.youtube.com/watch?v=%s&lc=%s', [this.fv, this.qn]);
	}
}

class hmg
{
	constructor(ql, wy)
	{
		this.qn = ha.yi();

		this.ql = ql;

		this.wy = wy;
	}
}

class qo extends hmg
{
	constructor(fv, t)
	{
		super(null, 'qo');

		let ql, dq;

		if (ha.xi(t))
		{
			ql = ha.xk(t);
			dq = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			ql = t;
			dq = ha.yx(t);
		}

		this.fv = fv;
		this.pj = dq;
		this.ql = ql;
	}
}

class te extends hmg
{
	constructor(vt)
	{
		super('youtube.com', 'te');

		this.fv = vt.fv;
		this.pj = vt.pj;
	}
}

class brv extends hmg
{
	constructor(lv)
	{
		super('', 'qe');

		this.lv = lv;

		this.kiq = lv.startsWith('https');

		this.ql = ski.ekg(lv) || lv;
	}
}

class jfp extends hmg
{
	constructor(jvd)
	{
		super(jvd, 'qe');

		this.lv = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(jvd);
	}
}

class kyh extends hmg
{
	constructor(lpm, kci)
	{
		super(lpm, 'qe');

		this.lv = 'https://www.youtube.com/channel/' + kci;
	}
}

class mfq
{
	constructor(xv)
	{
		this.euw = '';
		this.nhj = '';
		this.hsm = [];
		this.taw = false;
		this.fra = false;

		this.zmc(xv);
		this.tyt();
		this.kzc();
	}

	get rzr()
	{
		return this.euw;
	}

	get length()
	{
		return this.euw.length;
	}

	get qet()
	{
		return ha.xpb(this.nhj);
	}

	toLowerCase()
	{
		this.euw = this.euw.toLowerCase();
	}

	hcp(tiu)
	{
		return this.hsm.includes(tiu);
	}

	gms(zqr)
	{
		for (let tiu of zqr)
		{
			if (this.hcp(tiu)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.euw[this.length + i] : this.euw[i];
	}

	jxw(n)
	{
		this.euw = this.euw.slice(0, -n);
	}

	replace(lk, gz)
	{
		this.euw = this.euw.replace(lk, gz);
	}

	zmc(xv)
	{
		this.euw = ha.ezh(xv, 'syk');

		this.replace(ci[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(ci[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (ha.dys(x))
				{
					return m.length > 3 && !ci[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	tyt()
	{
		let tpc = ha.fwh([...this.euw]).join('');

		this.nhj = tpc.slice(0, 16);

		this.hsm = ha.jp(ci[23], tpc);

		this.taw = this.hsm.some(this.lho);
	}

	kzc()
	{
		if (!this.taw) return;

		for (let i = 0, k = 0, n = this.hsm.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.hsm[i] + this.hsm[k];

				this.replace(ha.tiq('(%s)+', x, 'g'), x);
			}
		}
	}

	lho(tiu)
	{
		return tiu.charCodeAt(0) > 255;
	}

	fah(tiu)
	{
		return tiu == '\u{200D}';
	}
}

class jyw
{
	constructor(tc)
	{
		tc.sort(ha.kg);

		const pvg = tc.slice(0, Math.floor(tc.length / 2));
		const izl = tc.slice(Math.round(tc.length / 2));

		this.ims = ha.sh(pvg);
		this.aem = ha.sh(izl);
		this.uqm = this.aem - this.ims;

		this.tc = tc;
	}

	ums(n)
	{
		const qh = this.ims - 1.5 * this.uqm;
		const ic = this.aem + 1.5 * this.uqm;

		return n < qh || ic < n;
	}

	akt()
	{
		return this.tc.filter(
			n => !this.ums(n)
		);
	}
}

class vu
{
	constructor()
	{
		this.qn = chrome.runtime.id;

		this.ion = chrome.runtime.getManifest().version;

		this.dv = new Promise(zx => this.qni = zx);

		this.dv.then(
			_ => this.my()
		);

		this.yu();

		chrome.runtime.onInstalled.addListener(
			gus => this.djo(gus)
		);

		chrome.browserAction.onClicked.addListener(
			_ => jhu.fbx('tj')
		);

		chrome.alarms.onAlarm.addListener(
			gus => this.kby('gkb', gus)
		);

		chrome.runtime.onMessageExternal.addListener(
			fs => this.kby('rjz', fs)
		);
	}

	async yu()
	{
		if (await this.yet == this.ion)
		{
			const ub = await gd.get(['0', '1']);

			this.xyu = new fo(ub[0], 0);

			wr = new sk(ub[1], 1);

			if (wr.ea)
			{
				ao.tb.dkl(wr.df);
			}

			this.qni(1);
		}
	}

	async re()
	{
		const lkn = await this.nv('/html/view.html');

		const xh = (
			this.ion < this.mqv
		);

		const kt = (
			!wr.ea || !wr.bk
		);

		return {
			dw: {
				xh, kt
			},
			af: lkn
		};
	}

	async ts(df)
	{
		if (ci[24].test(df))
		{
			const ymu = await ao.tb.kxc(df);

			if (ymu)
			{
				const wr = await ao.xs.mry(df);

				if (wr)
				{
					await this.qr(wr);

					ua.uk('gb');

					return true;
				}
			}
		}

		return false;
	}

	tqf(nzn)
	{
		wr.pu = nzn;

		ua.uk('rg');
	}

	fa()
	{
		if (wr.ea)
		{
			wr.df = ha.ecq(19, wr.df);
		}
	}

	qr(upi)
	{
		wr = new sk(upi, '1');

		return wr.qs();
	}

	async nv(jw)
	{
		const xos = await oso.dvu(chrome.runtime.getURL(jw));

		return xos.jr;
	}

	async azq(gus)
	{
		this.pdi();

		if (gus.reason == 'install')
		{
			await this.rvi();
		}
		else {
			if (gus.previousVersion < '')
			{

			}
		}

		await this.cfb();

		await this.yu();
	}

	async djo(gus)
	{
		await this.azq(gus);

		switch (gus.reason)
		{
			case 'install':
				this.lsf();
			break;

			case 'update':
				this.uih();
			break;
		}

		jhu.kat();
	}

	lsf()
	{

	}

	uih()
	{

	}

	async kby(cof, jr)
	{
		await this.dv;

		switch (cof)
		{
			case 'gkb':
				return this.gbw(jr);

			case 'rjz':
				return this.gcd(jr);
		}
	}

	gbw(gkb)
	{
		const uke = gkb.name;

		switch (uke)
		{
			case 'zmt':
				this.zmt();
		}
	}

	gcd(fs)
	{
		return new mfv().ls(fs);
	}

	async zmt()
	{
		const v = await ao.xs.fwy();

		if (v)
		{
			this.ews(v);
		}
	}

	my()
	{
		if (wr.ea)
		{
			if (ha.ie() || !wr.ri)
			{
				this.fa();
			}
		}
	}

	get yet()
	{
		return gd.get('schemaVersion');
	}

	cfb()
	{
		return gd.set('schemaVersion', this.ion);
	}

	get mqv()
	{
		return this.xyu.latestVersion;
	}

	ews(v)
	{
		this.xyu.set('latestVersion', v);
	}

	rvi()
	{
		return gd.set({
			0: {
				latestVersion: this.ion
			},
			1: {},
		});
	}

	pdi()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('zmt', {periodInMinutes:240});
	}
}

class mfv
{
	ls(fs)
	{
		fs = ha.yuo(fs);

		switch (fs.issuer)
		{
			case 'authServer':
				return this.gwu(fs.data);
		}
	}

	gwu(jr)
	{
		if (jr.id == 'pa')
		{
			pi.tqf(jr.token);
		}
	}
}

class oxo
{
	constructor()
	{
		this.xs = new rhc;

		this.tb = new nth;
	}
}

class rhc
{
	constructor()
	{
		this.ywk = 'https://api.lett.app/cs';
	}

	async mry(df)
	{
		const xos = await this.get('/auth', {
			apiKey:df,
			token:pi.qn
		});

		if (xos.sr)
		{
			return xos.jr;
		}
	}

	async fwy()
	{
		const xos = await this.get('/update');

		if (xos.sr)
		{
			return xos.jr.version;
		}
	}

	async ek(rt)
	{
		const vt = {
			extId:pi.qn,
			apiKey:wr.df,
			amount:rt,
		};

		const xos = await this.get('https://api.lett.app/donate/accept', vt, Infinity);

		if (xos.sr)
		{
			return xos.jr.url;
		}
	}

	async get(one, vt, ryn)
	{
		if (one[0] == '/')
		{
			one = this.ywk + one;
		}

		const xos = await oso.dvu(one, vt, ryn);

		if (!xos.sr && !xos.gf)
		{
			xos.ob(xos.jr.error);
		}

		return xos;
	}
}

class lqd
{
	constructor()
	{
		this.ywk = 'https://www.googleapis.com/youtube/v3';
	}

	dkl(df)
	{
		this.lw = df;
	}

	async kxc(df)
	{
		this.dkl(df);

		const xos = await this.wbu('jNQXAC9IVRw');

		return xos.sr;
	}

	orc(fv)
	{
		return this.cu({
			videoId:fv
		});
	}

	cgp(fv, ouf)
	{
		return this.tv({
			videoId:fv,
			searchTerms:ouf
		});
	}

	xle(kci, ouf)
	{
		return this.tv({
			allThreadsRelatedToChannelId:kci,
			searchTerms:ouf
		});
	}

	async wbu(fv)
	{
		const xos = await this.boa({
			id:fv,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (xos.sr)
		{
			try {
				xos.jr = new qnl(xos.jr);
			}
			catch (e) {
				xos.ob('uj');
			}
		}

		return xos;
	}

	async get(one, vt)
	{
		const xos = await oso.dvu(this.ywk + one, vt);

		if (!xos.sr && !xos.gf)
		{
			const hfn = this.hxi(xos.jr);

			xos.ob(hfn);
		}

		return xos;
	}

	async tv(vt)
	{
		const xos = await this.get('/commentThreads', vt);

		if (xos.sr)
		{
			xos.jr = this.ujf(xos.jr);
		}

		return xos;
	}

	async cu(vt)
	{
		let xos, ke = [];

		do {
			xos = await this.get('/commentThreads', vt);

			if (xos.sr)
			{
				const swp = this.ujf(xos.jr);

				ke.push(swp);

				vt.pageToken = xos.jr.nextPageToken;
			}
		}
		while (xos.sr && vt.pageToken)

		xos.jr = ke.flat();

		return xos;
	}

	boa(vt)
	{
		return this.get('/videos', vt);
	}

	wfu(lfr)
	{
		try {
			return new snj(lfr);
		}
		catch (e) {
			return null;
		}
	}

	sgb(lfr)
	{
		let mqz = [];

		try {
			if (lfr.replies) {
				mqz = lfr.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return mqz;
	}

	hxi(hmh)
	{
		try {
			return hmh.error.errors[0].reason;
		}
		catch (e) {
			return hmh.lm || 'gn';
		}
	}

	ujf(lfr)
	{
		const swp = [];

		try {
			for (let xe of lfr.items)
			{
				const wo = this.zow(xe);

				if (wo) {
					swp.push(wo);
				}
			}
		}
		catch (e) {
		}

		return swp;
	}

	zow(lfr)
	{
		try {
			const dnc = lfr.snippet;

			if (dnc.videoId)
			{
				let sj = this.wfu(dnc.topLevelComment);

				if (sj)
				{
					const wo = new gha(sj, dnc.totalReplyCount);

					if (wo.tqh <= 5)
					{
						for (let qrp of this.sgb(lfr))
						{
							sj = this.wfu(qrp);

							if (sj) {
								wo.xjz(sj);
							}
						}
					}

					return wo;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class nth extends lqd
{
	cu(vt)
	{
		this.wol(vt);

		return super.cu(vt);
	}

	tv(vt)
	{
		this.wol(vt);

		return super.tv(vt);
	}

	async get(one, vt)
	{
		vt.key = this.lw;

		let xos, i = 3;

		while (i--)
		{
			xos = await super.get(one, vt);

			if (xos.lm != 'processingFailure')
				break;
		}

		return xos;
	}

	wol(vt)
	{
		Object.assign(vt, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class ski
{
	static rpk(lv)
	{
		const fv = ha.py(ci[25], lv);

		if (fv)
		{
			let pj = ha.py(ci[26], lv) || 0;

			if (!ha.xi(pj))
			{
				pj = ha.jp(ci[27], pj).join(':');

				pj = ha.yx(pj);
			}

			return {fv, pj};
		}
	}

	static ekg(lv)
	{
		return ha.py(ci[28], lv).replace('www.', '');
	}
}

class knv
{
	async fbx(nc)
	{
		const psa = await this.xau();

		if (psa && psa.url)
		{
			this.jx(psa.id, 'nc', nc);
		}
	}

	kat()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, jhu =>
		{
			for (let psa of jhu)
			{
				chrome.tabs.reload(psa.id);
			}
		});
	}

	xau()
	{
		return new Promise(zx =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, jhu =>
			{
				zx(jhu[0]);
			});
		});
	}

	jx(aoz, ps, jr)
	{
		chrome.tabs.sendMessage(aoz, new gj(ps, jr));
	}
}

class vtq
{
	constructor(tn, tpm)
	{
		this.qn = tpm.fv;

		this.tpm = tpm;

		this.fls = new juf(tn);

		this.ke = {};

		for (let dpg of ['ogl', 'lsc'])
		{
			this[dpg] = new vmp(Array);
		}

		for (let dpg of ['rcv', 'pan', 'evs'])
		{
			this[dpg] = [];
		}

		for (let wo of tn)
		{
			this.hf(wo);
			this.eds(wo);
		}
	}

	wqp(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.ufm();

			case ':all':
				return this.dib();

			case ':creator':
				return this.ilm();

			case ':link':
				return this.lnj();

			case ':reply':
				return this.gcj();
		}

		if (ci[29].test(q))
		{
			const ud = this.inm(q);

			switch (ud.length)
			{
				case 1: return this.nmj(ud[0]);

				case 2: return this.mnj(ud[0], ud[1]);
			}
		}

		return this.qbi(q);
	}

	dib()
	{
		return this.weq(
			Object.keys(this.ke)
		);
	}

	ufm()
	{
		return this.weq(this.lsc.values);
	}

	ilm()
	{
		return this.weq(this.rcv);
	}

	lnj()
	{
		return this.weq(this.evs);
	}

	gcj()
	{
		return this.weq(this.pan);
	}

	mnj(dn, cyg)
	{
		const yak = ha.yx(dn);
		const qno = ha.yx(cyg);

		const yoa = [];

		for (let ud of this.lsc.keys)
		{
			if (yak <= ud && ud <= qno)
			{
				yoa.push(
					this.lsc.get(ud)
				);
			}

			if (qno < ud) break;
		}

		return this.weq(yoa);
	}

	hf(xe)
	{
		this.ke[xe.qn] = xe;
	}

	etd(qn)
	{
		return this.ke[qn].ut;
	}

	weq(yoa)
	{
		yoa = yoa.flat();

		return ha.fwh(yoa).map(
			qn => this.etd(qn)
		);
	}

	qbi(xv)
	{
		let dbs = [];

		let yt = this.soq(xv);

		let yoa = yt.map(
			k => this.select('ogl', k)
		);

		yoa = yoa.filter(x => x.length);

		if (yoa.length)
		{
			dbs = ha.slk(...yoa);

			if (dbs.length < 1)
			{
				yoa.sort((a, b) => a.length - b.length);

				dbs = yoa[0];
			}
		}

		return this.weq(dbs);
	}

	nmj(zl)
	{
		let gv = ha.yx(zl);

		let yoa = [
			this.select('lsc', gv)
		];

		for (let i = gv; i--;)
		{
			let x = this.select('lsc', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			yoa.push(x);
		}

		for (let i = gv; i++;)
		{
			let x = this.select('lsc', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			yoa.push(x);
		}

		return this.weq(yoa);
	}

	eds(wo)
	{
		const ql = wo.qku.map(sj => sj.str).join(' ');

		this.ykc(ql, wo.qn);

		this.jev(ql, wo.qn);

		this.zfz(ql, wo.qn);

		this.sgb(wo);
	}

	sgb(wo)
	{
		if (wo.length > 1)
		{
			this.pan.push(wo.qn);
		}

		if (wo.gnf(this.tpm.kci))
		{
			this.rcv.push(wo.qn);
		}
	}

	ykc(ql, qn)
	{
		ql.includes('http') && this.evs.push(qn);
	}

	jev(ql, qn)
	{
		const wgm = this.inm(ql);

		for (let ud of wgm)
		{
			ud = ha.yx(ud);

			if (0 <= ud && ud < this.tpm.rl)
			{
				this.jds('lsc', ud, qn);
			}
		}
	}

	zfz(ql, qn)
	{
		this.soq(ql).forEach(
			ih => this.jds('ogl', ih, qn)
		);
	}

	jds(dpg, lw, uo)
	{
		this[dpg].yiv(lw);

		this[dpg].get(lw).push(uo);
	}

	select(dpg, lw)
	{
		return this[dpg].get(lw);
	}

	soq(xv)
	{
		xv = nxo.zmc(xv);

		xv = nxo.fpv(xv);

		xv = ha.qpm(xv);

		return ha.fwh(xv);
	}

	inm(xv)
	{
		return ha.jp(ci[30], xv);
	}
}

class juf
{
	constructor(tn)
	{
		this.fls = {};

		this.fqm = {};

		this.ksq = {};

		for (let wo of tn)
		{
			this.jby(wo);
		}

		this.wfg();
	}

	dby(hom)
	{
		return this.fqm.wqp(hom);
	}

	dyl(qn)
	{
		return this.fls[qn];
	}

	jby(wo)
	{
		for (let sj of wo.qku)
		{
			this.oho(sj.eoc, sj.str);
			this.rso(sj.eoc, sj.xof);
		}
	}

	wfg()
	{
		this.fqm = new gmj(this.fqm);

		for (let qn in this.ksq)
		{
			const ksq = this.ksq[qn];

			if (ksq.length > 1)
			{
				const don = ksq.filter(
					(ql, i) => ql.length < 28 || i == ksq.indexOf(ql)
				);

				this.dyl(qn).arx = (ksq.length != don.length);
			}
		}
	}

	rso(qn, tap)
	{
		let tfx = new bde(qn, tap);

		this.fls[qn] = tfx;

		this.fqm[tap] = tfx;
	}

	oho(qn, ql)
	{
		this.ksq[qn] = this.ksq[qn] || [];

		this.ksq[qn].push(ql);
	}
}

class bde
{
	constructor(qn, tap)
	{
		this.qn = qn;
		this.tap = tap;
		this.arx = false;
		this.qvk = false;
	}

	get zoa()
	{
		return this.qvk ? this.tap : this.ngz;
	}

	get skh()
	{
		return !this.qvk && this.arx;
	}

	get ngz()
	{
		if (!this.ksa)
		{
			this.ksa = ibo.wpr(this.tap);
		}

		return this.ksa;
	}
}

class gmj
{
	constructor(sw)
	{
		this.keys = Object.keys(sw).sort(this.joy);

		this.zsj = this.keys.map(lw => sw[lw]);

		this.keys = this.keys.map(ha.gs);
	}

	wqp(tfb)
	{
		tfb = tfb.toLowerCase();

		let ke = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(tfb))
			{
				do {
					ke.push(this.zsj[i])
				}
				while (++i < n && this.keys[i].startsWith(tfb));

				break;
			}
		}

		return ke.sort(this.wmt);
	}

	wmt(a, b)
	{
		return b.tap.length - a.tap.length;
	}

	joy(a, b)
	{
		return a.localeCompare(b);
	}
}

const ouo = {
	ajp: {
		npi(rhm, gne = 0)
		{
			return +rhm || gne;
		},

		kev(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		oyh(n)
		{
			return ha.qhg(1, n);
		},
	},

	eds(tn, efz, tpm)
	{
		this.hqy = tpm.kci;

		this.wqp = tpm.wqp;

		this.upq = new umr;

		this.lsc = new coq;

		this.ejv = new yqd;

		this.wtd = {};

		ha.vi(
			efz.dyl(this.hqy), 'qvk', true
		);

		return this.tyt(tn, efz);
	},

	tyt(tn, efz)
	{
		const jdv = ('you are not but for the thi and that was').split(' ');

		const pwg = {
			kev: this.ajp.kev,
			euc: this.ajp.oyh,
			npi: this.ajp.npi,
		};

		const lxs = {
			zdw: 1
		};

		const jrv = {
			ogl: .5,
			euc: .2,
			zsu: .2,
			ecy: .0,
		};

		if (this.wqp.ufb)
		{
			Object.assign(jrv, {
				ecy:.3,
			});
		}

		let yoa = [];

		tn = tn.filter(
			wo => !yoa.includes(wo.eoc) && yoa.push(wo.eoc)
		);

		for (let wo of tn)
		{
			Object.assign(wo,
			{
				jv: {
					lsc: [],
					yt: [],
					sgx: 0,
					ftk: 0,
					uls: false,
					zsu: false,
				},
				hwj: {
					ogl: 0,
					euc: 0,
					zsu: 0,
					ecy: 0,
					fix: 0,
				},
			});

			const jv = wo.jv;

			for (let i = 0; i < wo.length; i++)
			{
				const sj = wo.qku[i] = new qay(wo.qku[i]);

				sj.tfx = efz.dyl(sj.eoc);

				sj.it = this.it(sj.eoc);

				if (i > 0)
				{
					sj.ta = true;

					if (sj.wfx && wo.wfr > 1)
					{
						jv.uls = true
					}

					if (sj.it)
					{
						jv.zsu = true;
					}
				}

				if (sj.tqg == '' || sj.tfx.skh)
				{
					!sj.tfx.qvk && sj.dh();
				}
			}

			const rot = wo.rot;

			if (this.uak(rot.pns))
			{
				wo.hidden = true;

				continue;
			}

			jv.yt = ha.qpm(rot.tqg);
			jv.sgx = jv.yt.length;
			jv.yt = ha.fwh(jv.yt);
			jv.ftk = jv.yt.length;

			for (let x in rot.wv)
			{
				x = rot.wv[x];

				if (x.qn == rot.pns)
				{
					wo.hidden = true;
				}

				if (x instanceof qo)
				{
					jv.lsc.push(x.pj);

					ha.tcn(x.qn, this.lsc.rkq(x.pj), jv.yt);
				}
			}

			for (let ih of jv.yt)
			{
				if (ih.length > 2 && !jdv.includes(ih))
				{
					this.upq.zsp(ih);
				}
			}
		}

		for (let wo of tn)
		{
			if (wo.hidden)
				continue;

			const hwj = wo.hwj;

			for (let ih of wo.jv.yt)
			{
				hwj.ogl += this.upq.get(ih);
			}

			hwj.ogl /= wo.jv.sgx;

			hwj.euc = wo.jv.lsc.length;

			lxs.zdw = Math.max(lxs.zdw, hwj.ogl);
		}

		for (let wo of tn)
		{
			const hwj = wo.hwj;

			hwj.ogl = jrv.ogl * ha.qhg(hwj.ogl, lxs.zdw);
			hwj.euc = jrv.euc * pwg.euc(hwj.euc);
			hwj.zsu = jrv.zsu * pwg.npi(wo.jv.zsu);
			hwj.ecy = jrv.ecy * pwg.npi(wo.jv.uls, .5);

			hwj.fix = ha.rqx(Object.values(hwj));
		}

		tn.sort(
			(a, b) => b.hwj.fix - a.hwj.fix
		);

		for (let i = 0, n = tn.length; i < n; i++)
		{
			const a = tn[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = tn[k];

				if (!b.hidden && !b.tzo)
				{
					const mxk = ha.slk(a.jv.yt, b.jv.yt);
					const gyp = (a.jv.yt.length + b.jv.yt.length) / 2;

					if (mxk.length == b.jv.sgx)
					{
						b.hidden = true;
					}

					if (mxk.length >= .5 * gyp)
					{
						const qno = a.jv.lsc[0] || 0;
						const qci = b.jv.lsc[0] || 0;

						if (this.lsc.gxm(qno, qci))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < tn.length; i++)
		{
			const wo = tn[i];

			if (wo.ycr)
				break;

			let qid = false;

			if (wo.jv.ftk == 1)
			{
				qid = true;
			}

			if (i == 0 && !wo.tzo)
			{
				const dvk = this.wqp.xv.toLowerCase();
				const sxz = wo.rot.tqg;

				if (dvk == sxz)
				{
					qid = true;
				}
			}

			if (wo.tzo && wo.wfr == 1)
			{
				const yak = new Date(wo.rot.dyk);
				const qno = new Date(wo.nyt.dyk);

				if (.001 * (qno - yak) < 300)
				{
					qid = true;
				}
			}

			if (qid)
			{
				ha.mjc(i, tn);

				wo.ycr = true;
				i--;
			}
		}

		for (let wo of tn)
		{
			this.ejv.jon(wo.qn, wo.eoc);

			for (let eoc of wo.dmv)
			{
				this.ejv.sjz(eoc, wo.qn)
			}
		}

		for (let wo of tn)
		{
			if (wo.kev == 0) continue;

			for (let qrp of wo.mqz)
			{
				const ql = qrp.pns;

				const mkc = ha.py(ci[31], ql);

				for (let tfx of efz.dby(mkc))
				{
					if (this.hfg(tfx).test(ql))
					{
						qrp.pdb = tfx;
						break;
					}
				}
			}

			if (wo.length > 2)
			{
				let fls = [], ke = [], tso = false;

				const n = wo.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					if (tso)
					{
						fls = [];
						ke = [];
						tso = false;
					}

					const qrp = wo.qku[i];
					const wr = qrp.tfx;

					if (ha.cv(fls) == wr) {
						i++;
					}
					else if (fls.includes(wr) || ha.fwh(fls).length < 2)
					{
						fls.push(wr);
						ke.push(qrp);

						if (i + 1 < n)
							continue;
					}

					if (ke.length > 2)
					{
						let ymu = !ke.some(qrp => qrp.pdb && !fls.includes(qrp.pdb));

						if (ymu)
						{
							ke.forEach(qrp =>
								qrp.pdb = fls.find(tfx => tfx != qrp.tfx)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						tso = true;
					}
				}
			}

			for (let awe, i = 1; i < wo.length; i++)
			{
				const qrp = wo.qku[i];

				if (!qrp.pdb)
				{
					if (awe && awe.pdb == qrp.tfx)
					{
						qrp.pdb = awe.tfx;

						wo.rte(awe, qrp);
					}
				}
				else {
					let qhn;

					const vbh = qrp.pdb;

					for (let k = i - 1; k >= 0; k--)
					{
						const awe = wo.qku[k];

						if (k == 0)
						{
							if (awe.tfx == vbh)
							{
								qhn = '';
							}

							break;
						}

						if (awe.tfx == vbh)
						{
							wo.rte(awe, qrp);

							if (awe.children.length == 1)
							{
								qhn = '';
							}

							break;
						}
					}

					if (qhn == null)
					{
						const ca = new kyh(vbh.zoa, vbh.qn);

						qhn = qrp.qof(ca) + ' ';
					}

					qrp.pns = qrp.pns.replace(
						this.hfg(vbh), qhn
					);
				}

				awe = qrp;
			}

			for (let i = 1, n = wo.length; i < n; i++)
			{
				const qrp = wo.qku[i];

				if (qrp.rv || qrp.children.length)
				{
					ha.mjc(i, wo.qku);
					i--;
					n--;
				}
			}

			for (let ctj = false, i = 1; i < wo.length; i++)
			{
				let qrp = wo.qku[i];

				ctj = (ctj || !qrp.wfx);

				if (qrp.ywz)
				{
					continue;
				}

				if (!ctj)
				{
					const ql = qrp.pns;

					if (wo.length > 2 || ['+','@'].includes(ql[0]) || ql.length < 10)
					{
						qrp.dh();
					}
				}

				qrp.pdb && !wo.gnf(qrp.pdb.qn) && qrp.dh();

				this.pat(qrp.eoc, wo.qn) && qrp.dh();
			}
		}

		tn = tn.map(wo =>
		{
			if (wo.rot.hidden)
			{
				return [];
			}

			const qku = [];

			for (let i = 0; i < wo.length; i++)
			{
				const sj = wo.qku[i];

				sj.an = ibo.azo(sj.pns);

				sj.zoa = sj.tfx.zoa;

				if (sj.an.length < 2)
				{
					if (i == 0)
						return [];

					sj.dh();
				}

				qku.push(
					new fay(sj)
				);
			}

			return qku;
		});

		return tn.filter(wo => wo.length > 0);
	},

	uak(xv)
	{
		return xv.length > 500 || ha.jwb(ci[32], xv) > 3;
	},

	it(eoc)
	{
		return this.hqy == eoc;
	},

	pat(eoc, ypt)
	{
		if (this.it(eoc))
		{
			return false;
		}

		for (let xwq of this.ejv.exh(eoc))
		{
			if (xwq == ypt)
			{
				return false;
			}

			if (!this.ejv.mxr(xwq, eoc))
			{
				return true;
			}
		}

		return false;
	},

	hfg(tfx)
	{
		const qn = tfx.qn;

		if (qn in this.wtd)
		{
			return this.wtd[qn];
		}

		return this.wtd[qn] = ha.tiq('^[+@]?%s[-\\s,.:;?!]*', tfx.tap, 'i');
	}
};

const ibo = {
	azo(bt)
	{
		let xv = new mfq(bt);

		xv.hcp('<') && xv.replace(ci[33], '&lt;');

		xv.qet && xv.toLowerCase();

		if (xv.hcp('.'))
		{
			xv.charAt(-1) == '.' && xv.charAt(-2) != '.' && xv.jxw(1);

			xv.replace(ci[34], (m) => m.replace(ci[35], ''));
		}

		if (xv.hcp('\n'))
		{
			xv.replace(ci[36], function(m, i)
			{
				let x = xv.charAt(i - 1);

				return ha.tfi(x) ? '. ' : ' ';
			});
		}

		if (xv.gms('*_'))
		{
			xv.replace(ci[37], '$2');
		}

		if (xv.gms('(,!?.)'))
		{
			xv.replace(ci[38], '?!');

			xv.replace(ci[39], '$1');

			xv.replace(ci[40], '$1 $2');

			xv.hcp('!') && xv.replace(ci[41], '$1');
		}

		if (xv.gms('$£€'))
		{
			xv.replace(ci[42], (_, lgm, ijg) =>
			{
				ci[43].test(lgm) && (lgm = Math.round(lgm));

				return ijg + lgm;
			});
		}

		xv.hcp(':') && xv.replace(ci[44], ': ');

		xv.hcp('&') && xv.replace(ci[45], ' and ');

		xv.hcp('"') && xv.replace(ci[46], '" - $1');

		return ofj.arc(xv.rzr);
	},

	wpr(bt)
	{
		return bt.length < 28 && this.qia(bt) || this.osh();
	},

	qia(xv)
	{
		let yt;

		if (!ci[47].test(xv))
		{
			if (ha.cke(xv))
			{
				xv = ha.wil(xv);
			}

			yt = xv.split(' ');

			if (yt.length == 1)
			{
				return ha.rf(yt[0], 'PRE_CASE');
			}
		}
		else {
			yt = ha.jp(ci[48], xv);
		}

		yt = yt.map(ih =>
		{
			switch (true)
			{
				case ih.length < 2 || ha.xi(ih):
					return '';

				default:
					return ha.rf(ih);
			}
		});

		yt = yt.filter(
			(ih, i) => ih != '' && i == yt.indexOf(ih)
		);

		return yt.join(' ');
	},

	osh()
	{
		return 'user' + ha.lx(4);
	}
};

const nxo = {
	zmc(xv)
	{
		xv = xv.toLowerCase();

		xv = xv.replace(ci[49], ' ');

		return ha.ezh(xv);
	},

	fpv(xv)
	{
		return xv.replace(ci[50], '$1');
	}
};

const ofj = {
	vuh: {
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

	arc(xv)
	{
		return xv.replace(ci[51], m => this.get(m));
	},

	get(lw)
	{
		lw = lw.toLowerCase();

		(lw.length == 2) || (lw = lw.slice(0, 2));

		return this.vuh[lw] || lw;
	}
};

class umr
{
	constructor()
	{
		this.map = {};
	}

	zsp(ih)
	{
		this.map[ih] = ++this.map[ih] || 0;
	}

	get(ih)
	{
		return this.map[ih] || 0;
	}
}

class coq
{
	constructor()
	{
		this.map = {};
	}

	rkq(usk)
	{
		for (let vwj in this.map)
		{
			if (this.gxm(usk, vwj))
			{
				return this.map[vwj];
			}
		}

		return this.hzd(usk);
	}

	hzd(ud)
	{
		return this.map[ud] = ha.jz('TS%s', ud);
	}

	gxm(qno, qci)
	{
		return Math.abs(qci - qno) < 5;
	}
}

class yqd
{
	constructor()
	{
		this.ebu = {};

		this.tn = {};
	}

	exh(eoc)
	{
		return this.ebu[eoc];
	}

	mxr(xwq, eoc)
	{
		return this.tn[xwq] == eoc;
	}

	jon(xwq, eoc)
	{
		this.tn[xwq] = eoc;
	}

	sjz(eoc, xwq)
	{
		if (!this.ebu[eoc])
		{
			this.ebu[eoc] = new pv;
		}

		this.ebu[eoc].push(xwq);
	}
}

class ov
{
	constructor(ki)
	{
		ki.ls = this.ls.bind(this);

		this.ki = ki;

		this.jto = 0;

		this.itg = new Promise(zx => zx(null));

		this.tpm;

		this.frz = new frz;

		this.adq = new vtq([], {});
	}

	async ls(fs)
	{
		const fv = fs.jr.fv;

		try {
			const gus = await this.frz.xuf(fv);

			this.tpm = new vqw(fs.jr, gus);
		}
		catch (br) {
			return this.upv(br);
		}

		switch (fs.ps)
		{
			case 'tv':
				return this.kpf(fv);

			case 'zc':
				return this.tw(fv);
		}
	}

	upv(qn)
	{
		this.nvm('lm', {qn});
	}

	tw(fv)
	{
		const n = this.tpm.zc;

		if (0 < n && n < 1000)
		{
			this.fte(fv);
		}

		this.nvm('zc', n);
	}

	async kpf(fv)
	{
		if (this.tpm.wqp.umn)
		{
			return this.upv('qk');
		}

		this.sxv();
	}

	async sxv()
	{
		let r = new wkx(this.axd);

		try {
			if (this.tpm.wqp.irk)
			{
				await this.atf(r);
			}
			else {
				await this.qob(r);
			}

			!this.lto(r.qn) && this.nvm('tv', r);
		}
		catch (br) {
			!this.lto(r.qn) && this.upv(br);
		}
	}

	async atf(hmh)
	{
		const xos = await ao.tb.xle(this.tpm.kci, this.tpm.wqp.xv);

		if (xos.lm)
		{
			throw xos.lm;
		}

		const fls = new juf(xos.jr);

		const tn = ouo.eds(xos.jr, fls, this.tpm);

		hmh.nhn(tn);
		hmh.ula(-2);
	}

	async qob(hmh)
	{
		const fv = this.tpm.fv;
		const pm = this.tpm.wqp.xv;

		const p = hmh.ula(this.tpm.zc);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.tpm.wqp.azv)
		{
			throw 'gl';
		}

		let tn, fls;

		if (p < 1000)
		{
			const br = await this.fte(fv);

			if (br)
			{
				throw br;
			}

			fls = this.adq.fls;

			tn = this.adq.wqp(pm);
		}
		else {
			const xos = await ao.tb.cgp(fv, pm);

			if (xos.lm)
			{
				throw xos.lm;
			}

			fls = new juf(xos.jr);

			tn = xos.jr;
		}

		tn = ouo.eds(tn, fls, this.tpm);

		hmh.nhn(tn);
	}

	nvm(ps, jr)
	{
		this.ki.jm(ps, jr);
	}

	async fte(fv)
	{
		await this.itg;

		if (fv != this.adq.qn)
		{
			this.itg = new Promise(async zx =>
			{
				const xos = await ao.tb.orc(fv);

				if (xos.sr)
				{
					this.adq = new vtq(xos.jr, this.tpm);
				}

				zx(xos.lm);
			});
		}

		return this.itg;
	}

	get axd()
	{
		return ++this.jto;
	}

	lto(umv)
	{
		return umv != this.jto;
	}
}

class frz
{
	constructor()
	{
		this.map = {};
	}

	async xuf(fv)
	{
		let x = this.map[fv];

		if (x == undefined)
		{
			x = this.smp(fv);
		}

		if (x instanceof Promise)
		{
			const xos = await x;

			if (xos.lm)
			{
				this.muf(fv);

				throw xos.lm;
			}

			x = this.vwl(fv, xos.jr);
		}

		return x;
	}

	wfy(fv, value)
	{
		return this.map[fv] = value;
	}

	smp(fv)
	{
		const r = ao.tb.wbu(fv);

		return this.wfy(fv, r);
	}

	vwl(fv, ysw)
	{
		return this.wfy(fv, ysw);
	}

	muf(fv)
	{
		this.wfy(fv, undefined);
	}
}

class efi
{
	constructor(q)
	{
		this.xv = '';
		this.wy = '';
		this.irk = false;
		this.umn = false;

		this.tyt(q);
	}

	get azv()
	{
		return this.wy == 'jyz';
	}

	get ufb()
	{
		return this.wy == 'fty';
	}

	tyt(q)
	{
		const ofi = q.replace(ci[52], '');

		if (ofi != q)
		{
			this.irk = true;

			if (ofi == '')
			{
				this.umn = true;
			}
		}

		this.xv = ofi;
		this.wy = efi.qjh(ofi);
	}

	static qjh(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'jyz';

			case (ci[53]).test(q):
				return 'fty';

			default:
				return '';
		}
	}
}

class vqw
{
	constructor(wgb, lvl)
	{
		Object.assign(this, ...[wgb, lvl]);

		this.rl = Math.floor(wgb.rl) || Infinity;
		this.ol = Math.floor(wgb.ol);

		this.wqp = new efi(wgb.pm);
	}
}

class wkx
{
	constructor(umv)
	{
		this.qn = umv;
		this.tn = [];
		this.rs = 0;
		this.bw = 0;
	}

	nhn(tn)
	{
		this.tn = tn;
		this.rs = tn.length;
	}

	ula(n)
	{
		return this.bw = n;
	}
}

let wr;

const ao = new oxo;
const gd = new yg;
const jhu = new knv;
const pi = new vu;
const ua = new qc;
const va = new rm;

const ci = [
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