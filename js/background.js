/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const sv = {};

for (let oa of 'object array string regex date math type std cmp'.split(' '))
{
	sv[oa] = {};
}

sv.cb = function(ul, da)
{
	return ul != undefined && ul.constructor === da;
}

sv.qs = function()
{
	return sv.vd(9);
}

sv.hx = function(ye)
{
	return cs[0].test(ye);
}

sv.cp = function(yc)
{
	return Object.keys(yc).length == 0;
}

sv.qf = function(sy, yc)
{
	for (let yt in yc)
	{
		const bu = yc[yt];

		if (yt == sy) return bu;
		if (bu == sy) return yt;
	}
}

sv.tv = function(yc, rk)
{
	if (yc instanceof Object)
	{
		return yc[rk];
	}
}

sv.fc = function(yc, rk, qb)
{
	if (yc instanceof Object)
	{
		yc[rk] = qb;
	}
}

sv.zy = function(yc, sz)
{
	let ye = '';

	for (let yt in yc)
	{
		ye += yt + '=' + yc[yt] + sz;
	}

	return ye.slice(0, -1);
}

sv.fx = function(ws, dh, ks)
{
	const we = dh + 1;

	return ks.slice(we, we + ws);
}

sv.uj = function(ks)
{
	return ks[ks.length - 1];
}

sv.jg = function(wj, mk)
{
	wj += '?';

	for (let yt in mk)
	{
		wj += yt + '=' + encodeURIComponent(mk[yt]) + '&';
	}

	return wj.slice(0, -1);
}

sv.cj = function(ye, hs)
{
	if (sv.cb(hs, Array))
	{
		let i = 0;

		return ye.replace(cs[1], _ => hs[i++]);
	}

	return ye.replace('%s', hs);
}

sv.ef = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

sv.ta = function(ye, tp)
{
	const jh = sv.cj('(%s)', tp.join('|'));

	return ye.split(new RegExp(jh)).filter(s => s !== '');
}

sv.gy = function(ye)
{
	return ye.toUpperCase();
}

sv.ps = function(ye)
{
	return ye.toLowerCase();
}

sv.lt = function(ye, rp)
{
	if (!rp)
	{
		ye = ye.toLowerCase();
	}

	return ye[0].toUpperCase() + ye.slice(1);
}

sv.zu = function(ng, ye)
{
	return ye.match(ng) || [];
}

sv.fh = function(ng, ye)
{
	if (ng.global) return '';

	const m = sv.zu(ng, ye);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

sv.na = function()
{
	return Math.floor(Date.now() / 1000);
}

sv.hl = function(db)
{
	return db < sv.na();
}

sv.nj = function(q)
{
	const bz = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = sv.fh(cs[2], q);

	return Date.now() + (x[0] * bz[x[1]] * 1000);
}

sv.qk = function(wk)
{
	let x = wk.split(':'),
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

sv.ac = function(rx)
{
	let ks = [];

	ks.push(rx / 3600);

	rx %= 3600;

	ks.push(rx / 60);

	ks.push(rx % 60);

	ks = ks.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return ks.join(':').replace(cs[3], '');
}

sv.vd = function(sg)
{
	return Math.random().toString().slice(2, sg + 2);
}

sv.qc = function(ot, pz)
{
	const tk = Math.random() * (pz - ot) + ot;

	return Math.floor(tk);
}

sv.js = function(x, a, b)
{
	return x >= a && x <= b;
}

sv.ve = function(a, b)
{
	return 100 * (a / b);
}

sv.xr = function(mh)
{
	const n = mh.length;
	const i = Math.floor(n / 2);

	if (n == 0)
		return 0;

	if (n % 2 != 0)
		return mh[i];

	if (n % 2 == 0)
		return (mh[i] + mh[i-1]) / 2;
}

sv.cg = function()
{
	let kn, zf = 0;

	try {
		kn = [xv, mx, tn, ib, af];
	}
	catch (e) {
		kn = [xv, mx];
	}

	kn.forEach(
		vs => zf += vs.toString().length
	);

	return zf != 3344;
}

sv.gp = function(a, b)
{
	return a - b;
}

sv.zh = function(a, b)
{
	return b - a;
}

sv.pm = function(a, b)
{
	return a.length - b.length;
}

sv.ox = function(a, b)
{
	return b.length - a.length;
}

class qo
{
	constructor(gj, sn)
	{
		this.gj = gj;
		this.sn = sn;
	}
}

class pg
{
	constructor(ui, gj, sn)
	{
		this.ui = ui;
		this.yf = new qo(gj, sn);
	}
}

class dp extends Array
{
	constructor(xh)
	{
		super();

		if (xh != null)
		{
			super.push(xh);
		}
	}

	push(nl)
	{
		return !this.includes(nl) && super.push(nl);
	}
}

class gk
{
	constructor(sm, kd)
	{
		const vs = sm.status;

		this.vs = vs;
		this.el = false;
		this.np = false;
		this.ds = null;
		this.sn = null;

		switch (kd)
		{
			case 'error':
				return this.br('yn');

			case 'timeout':
				return this.br('ho');

			default:
			{
				this.el = (vs == 200);

				if (vs >= 500)
				{
					return this.br('tw');
				}

				try {
					this.sn = JSON.parse(sm.responseText);
				}
				catch (e) {
					this.sn = sm.responseText;
				}
			}
		}
	}

	ty(gq)
	{
		this.ds = gq;
	}

	br(gq)
	{
		this.ty(gq);

		this.np = true;
	}
}

class bc
{
	constructor(sn, ej)
	{
		Object.assign(this, sn);

		Object.defineProperty(this, 'ej', {
			value: ej
		});
	}

	set(yt, bu)
	{
		this[yt] = bu;

		return this.yl();
	}

	cq(xf)
	{
		Object.assign(this, xf);

		return this.yl();
	}

	vn(xf)
	{
		for (let rk in this)
		{
			delete this[rk];
		}

		Object.assign(this, xf);

		return this.yl();
	}

	yl()
	{
		return nu.set(this.ej, this);
	}
}

class mx extends bc
{
	constructor(sn, ej)
	{
		super(sn, ej);
	}

	get ro()
	{
		return !!(this.lp)
	}

	get lp()
	{
		return this[0];
	}

	get nf()
	{
		return this[1];
	}

	get ek()
	{
		return sv.hl(this.nf);
	}

	get lq()
	{
		return !!(
			+this.nf.toString().split('').pop()
		);
	}

	set lp(yt)
	{
		this.set(0, yt);
	}

	set nf(ut)
	{
		this.set(1, ut);
	}

	get fd()
	{
		let s = this.nf.toString(),
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

class qd
{
	constructor(pl)
	{
		if (pl)
		{
			this.hn();
		}
	}

	nz(su, bl, kg)
	{
	}

	hn()
	{
		chrome.runtime.onMessage.addListener(
			this.nz.bind(this)
		);
	}
}

class ja extends qd
{
	constructor()
	{
		super(false);
	}

	nz(su, bl, kg)
	{
		const sn = su.sn;

		switch (su.gj)
		{
			case 'lw':
				return this.mg(sn);
		}
	}

	mg(lw)
	{
		if (lw == 'ig')
		{
			dz.we();
		}
	}

	hk()
	{
		return this.ga('hk');
	}

	cd(ju)
	{
		return this.ga('cd', ju);
	}

	rl(lp)
	{
		return this.ga('rl', lp);
	}

	dw(mw)
	{
		return this.ga('dw', mw);
	}

	ay(sq)
	{
		return this.ga('ay', sq);
	}

	ga(gj, sn)
	{
		const su = new qo(gj, sn);

		return new Promise(kg =>
		{
			try {
				chrome.runtime.sendMessage(su, kg);
			}
			catch (e) {
			}
		});
	}
}

class du extends qd
{
	constructor()
	{
		super(true);
	}

	nz(su, bl, kg)
	{
		const qa = function(...hs)
		{
			try {
				kg(...hs);
			}
			catch (e) {
			}
		};

		vf.qp.then(_ =>
		{
			const sn = su.sn;

			switch (su.gj)
			{
				case 'hk':
					vf.hk().then(qa);
					break;

				case 'cd':
					vf.cd(sn).then(qa);
					break;

				case 'rl':
					vf.rl(sn).then(qa);
					break;

				case 'dw':
					bv.qe.dw(sn).then(qa);
					break;

				case 'ay':
					vf.ay(sn);
					break;
			}
		});

		return true;
	}
}

class eh
{
	get(yt)
	{
		return new Promise(uc =>
		{
			try {
				chrome.storage.local.get(yt, xw =>
					uc(typeof yt == 'string' ? xw[yt] : xw)
				);
			}
			catch (e) {
			}
		});
	}

	set(yt, bu)
	{
		let sn;

		if (typeof yt == 'object')
		{
			sn = yt;
		}
		else {
			sn = {[yt]:bu};
		}

		return new Promise(hq =>
		{
			try {
				chrome.storage.local.set(sn, hq);
			}
			catch (e) {
			}
		});
	}

	rq()
	{
		return new Promise(hq =>
		{
			try {
				chrome.storage.local.clear(hq);
			}
			catch (e) {
			}
		});
	}
}

class vamvo
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			pg => this.xd(pg)
		);

		Port.onDisconnect.addListener(
			_ => this.vz()
		);

		this.Port = Port;

		this.wn = {
		};

		this.qu = false;
	}

	nz(m)
	{
	}

	ka(ui, gj, sn)
	{
		const gz = new pg(ui, gj, sn);

		if (!this.qu)
		{
			this.Port.postMessage(gz);
		}
	}

	xd(x)
	{
		this.ua(x.ui).nz(x.yf);
	}

	ua(ui)
	{
		return this.wn[ui] || this;
	}

	ms(ui, nz, vz)
	{
		return this.wn[ui] = new gx(this, ui, nz, vz);
	}

	vz()
	{
		this.qu = true;

		for (let ui in this.wn)
		{
			this.ua(ui).vz();
		}
	}
}

class gb extends vamvo
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	nz(su)
	{
		const sn = su.sn;

		switch (su.gj)
		{
			case 'xe':
				return ie.zv(sn);
		}
	}

	ms(ui, nz, vz)
	{
		this.ka(null, 'ms', ui);

		return super.ms(ui, nz, vz);
	}

	vz()
	{
		super.vz();

		dz.wf();
	}
}

class uw extends vamvo
{
	constructor(ao)
	{
		super(ao);
	}

	nz(su)
	{
		switch (su.gj)
		{
			case 'ms':
				return this.ms(su.sn);
		}
	}

	ms(ui)
	{
		const zl = super.ms(ui);

		switch (ui)
		{
			case 'hd':
				return new rm(zl);
		}
	}
}

class ed
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			qg => this.uo(qg)
		);

		this.lb = [];
	}

	uo(ao)
	{
		this.lb.push(
			new uw(ao)
		);
	}

	rc(yg)
	{
		for (let ao of this.lb)
		{
			ao.ka(null, 'xe', yg);
		}
	}
}

class gx
{
	constructor(ao, ui, nz, vz)
	{
		this.ao = ao;

		this.ui = ui;

		if (nz)
		{
			this.nz = nz;
		}

		if (vz)
		{
			this.vz = vz;
		}
	}

	ka(gj, sn)
	{
		this.ao.ka(this.ui, gj, sn);
	}

	nz(m)
	{
	}

	vz()
	{
	}
}

sv.oyz = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

sv.gpw = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

sv.bgh = function(yk, ub)
{
	if (ub)
	{
		const ni = Object.create(
			Object.getPrototypeOf(yk)
		);

		return Object.assign(ni, yk);
	}

	return {...yk};
}

sv.cbg = function(mj, qb, ks)
{
	let i = ks.indexOf(mj);

	if (i >= 0)
	{
		ks[i] = qb;
	}
}

sv.brf = function(fz, iq, ks)
{
	if (iq != fz)
	{
		const nl = ks[fz];
		ks.splice(fz, 1);
		ks.splice(iq, 0, nl);
	}
}

sv.gil = function(fz, ks)
{
	sv.brf(fz, Infinity, ks);
}

sv.rvx = function(...az)
{
    az.sort(
    	(a, b) => a.length - b.length
    );

	return az.shift().filter(nl =>
	{
		for (let hr of az)
        {
			if (!hr.includes(nl))
				return false;
        }

		return true;
    });
}

sv.djy = function(ks)
{
	return ks.filter(
		(value, dfs) => ks.indexOf(value) == dfs
	);
}

sv.tdh = function(io, zxg)
{
	return io.join(zxg || '.');
}

sv.kud = function(ye, zus)
{
	if (zus)
	{
		ye = ye.replace(cs[4], '\n');

		ye = ye.replace(cs[5], ' ');
	}
	else {
		ye = ye.replace(cs[6], ' ');

	}

	return ye.trim();
}

sv.wie = function(ye, jh, kg)
{
	return ye.replace(jh, (aeh, qev) =>
	{
		return aeh.replace(qev, kg(qev));
	});
}

sv.rok = function(rvw)
{
	return cs[7].test(rvw);
}

sv.qem = function(ye)
{
	return !cs[8].test(ye);
}

sv.wzp = function(ye)
{
	return ye.toLowerCase().replace(cs[9], sv.gy);
}

sv.eam = function(ye)
{
	return ye == ye.toUpperCase();
}

sv.pnf = function(ye)
{
	return ye == ye.toLowerCase();
}

sv.hag = function(ye)
{
	return sv.pnf(ye) || sv.eam(ye);
}

sv.ipt = function(ng, ye)
{
	return sv.zu(ng, ye).length;
}

sv.kon = function(ye)
{
	return sv.ipt(cs[10], ye) + 1;
}

sv.rvm = function(ye)
{
	return ye ? ye.split(' ') : [];
}

sv.ihq = function(i, ye)
{
	return ye.substring(0, i) + 'x' + ye.substring(++i);
}

sv.xfd = function(s)
{
	return String(s).replace(cs[11], '\\$1').replace(cs[12], '\\x08');
}

sv.yhq = function(jh, hs, msm)
{
	if (hs.constructor === Array)
	{
		hs = hs.map(sv.xfd);
	}
	else {
		hs = sv.xfd(hs);
	}

	jh = sv.cj(jh, hs);

	return new RegExp(jh, msm);
}

sv.qwi = new function()
{
	const bz = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const kpm = (jhx) => new Date(jhx).getTime() / 1000;

	return (jhx) =>
	{
		const nmz = sv.na() - kpm(jhx);

		for (let [tju, mvg] of bz)
		{
			let tib = nmz / mvg;

			if (tib >= 1)
			{
				tib = Math.floor(tib);

				return sv.cj('%s %s%s ago', [tib, tju, (tib > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

sv.uql = function(ks)
{
	return ks.reduce((a, b) => a + b, 0);
}

sv.tzh = function(ks)
{
	return sv.frl(sv.uql(ks), ks.length);
}

sv.frl = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const wic = {
	njp(wj, jib, auv)
	{
		return this.zjc('GET', wj, jib, null, auv);
	},

	cyz(wj, jib, yf, auv)
	{
		return this.zjc('POST', wj, jib, yf, auv);
	},

	zjc(ur, wj, jib, yf, auv)
	{
		if (jib)
		{
			wj = sv.jg(wj, jib);
		}

		if (yf)
		{
			yf = this.ulp(yf);
		}

		return new Promise(uc =>
		{
			let sm = new XMLHttpRequest;

			if (auv != Infinity)
			{
				let oql = 0;

				sm.ontimeout = (e) =>
				{
					if (++oql < 3)
					{
						return this.ruf(sm, ur, wj, yf);
					}

					sm.onerror(e);
				}

				sm.timeout = 5000;
			}

			sm.onload = sm.onerror = (e) => uc(
				new gk(sm, e.type)
			);

			this.ruf(sm, ur, wj, yf);
		});
	},

	ruf(sm, ur, wj, yf)
	{
		sm.open(ur, wj);
		sm.send(yf);
	},

	ulp(mk)
	{
		let csx = new FormData;

		for (let yt in mk)
		{
			csx.append(yt, mk[yt]);
		}

		return csx;
	}
}

class rpq
{
	constructor(osm)
	{
		this.map = {};

		this.pem = Object.getOwnPropertyNames(Object.prototype);

		this.qcq = osm;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(yt)
	{
		yt = this.ilk(yt);

		return this.rxk(this.map[yt]);
	}

	set(yt, bu)
	{
		yt = this.ilk(yt);

		this.map[yt] = this.rxk(bu);
	}

	alq(yt)
	{
		return this.ilk(yt) in this.map;
	}

	wqw(yt)
	{
		!this.alq(yt) && this.set(yt);
	}

	ilk(yt)
	{
		if (this.pem.includes(yt))
		{
			return yt + '*';
		}

		return yt;
	}

	rxk(bu)
	{
		if (bu == undefined && this.qcq)
		{
			return new this.qcq;
		}

		return bu;
	}
}

class bcd
{
	constructor(afy, zbc)
	{
		this.eg = afy.eg;

		this.kuk = afy.kuk;

		this.zbc = zbc;

		this.ysn = [];

		this.omb = new dp;

		this.xjl(afy);
	}

	xjl(zo)
	{
		if (this.kuk == zo.kuk)
		{
			zo.tsz = true;
		}

		this.omb.push(zo.kuk);

		this.ysn.push(zo);
	}

	nzv(eg)
	{
		return this.omb.includes(eg);
	}

	sxy()
	{
		this.mlr.forEach(ynx => ynx.hidden = true);
	}

	toi(pe, ry)
	{
		let gnq = pe;

		while (gnq.nbt)
		{
			gnq = gnq.nbt;
		}

		this.dto(gnq, ry);

		pe.cw(ry);
	}

	dto(a, b)
	{
		const fz = this.ysn.indexOf(b);
		const iq = this.ysn.indexOf(a) + 1;

		sv.brf(fz, iq, this.ysn);
	}

	get length()
	{
		return this.ysn.length;
	}

	get fkl()
	{
		return this.omb.length;
	}

	get afy()
	{
		return this.ysn[0];
	}

	get ske()
	{
		return this.ysn[1];
	}

	get fjx()
	{
		return this.length > 1;
	}

	get mlr()
	{
		return this.ysn.slice(1);
	}

	get tbo()
	{
		return this.ysn.length - 1;
	}

	get hidden()
	{
		return this.afy.hidden;
	}

	set hidden(ai)
	{
		this.afy.hidden = ai;
	}

	get ni()
	{
		const ni = sv.bgh(this, true);

		ni.ysn = this.ysn.map(sv.bgh);

		return ni;
	}
}

class bxc
{
	constructor(qsf)
	{
		this.an = bxc.ogu(qsf);
		this.id = bxc.igi(this.an);
	}

	static igi(an)
	{
		return ['he','ar'].includes(an) ? 'rtl' : 'ltr';
	}

	static ogu(ye)
	{
		let szi = .57 * sv.kon(ye);

		switch (true)
		{
			case szi < sv.ipt(cs[13], ye): return 'en';

			case szi < sv.ipt(cs[14], ye): return 'ar';

			case szi < sv.ipt(cs[15], ye): return 'he';

			default: return '';
		}
	}

	static get bkv()
	{
		if (!this.xdl)
		{
			this.xdl = navigator.languages.map(an => an.slice(0, 2));
		}

		return this.xdl;
	}
}

class rim
{
	constructor(mnq)
	{
		const _ = mnq.items[0];

		this.xqd = _.snippet.channelId;
		this.lf = _.statistics.commentCount;

		if (this.lf == undefined)
		{
			this.lf = -1;
		}
		else {
			this.lf = +this.lf;
		}
	}
}

class xsi
{
	constructor(mnq)
	{
		const _ = mnq.snippet;

		this.eg = mnq.id;
		this.xl = _.videoId;
		this.kuk = _.authorChannelId.value;
		this.ah = _.authorProfileImageUrl;
		this.okb = _.authorDisplayName;
		this.ynu = _.textOriginal;
		this.bdy = _.publishedAt;
		this.ojs = _.likeCount;
		this.tsz = false;
		this.zt = false;
	}
}

class vhd
{
	constructor(xsi)
	{
		Object.assign(this, xsi);

		this.izs = '';
		this.ujz = '';
		this.ok = {};
		this.children = [];
		this.pe = null;
		this.vgb = null;
		this.iap = null;
		this.hmh = null;
		this.hidden = false;

		this.whq();
		this.ioc();
		this.luy();
		this.fgv();
		this.yfi();
	}

	whq()
	{
		this.izs = this.ynu.replace(cs[16], '');

		delete this.ynu;
	}

	yfi()
	{
		this.ujz = lzb.qmx(this.izs);

		this.hmh = new bxc(this.ujz);

		if (this.hmh.an == 'en')
		{
			this.ujz = lzb.ydp(this.ujz);
		}
	}

	ioc()
	{
		if (!this.izs.includes('/'))
			return;

		this.izs = this.izs.replace(cs[17], (wj) =>
		{
			let x;

			const crs = emt.hqt(wj);

			if (crs) {
				if (crs.xl == this.xl)
				{
					x = new wh(this.xl, crs.eb);
				}
				else {
					x = new ap(crs);
				}
			}
			else {
				x = new azh(wj);
			}

			return this.lje(x);
		});
	}

	luy()
	{
		if (!this.izs.includes('#'))
			return;

		this.izs = this.izs.replace(cs[18], (jlg) =>
		{
			const x = new alk(jlg);

			return this.lje(x);
		});
	}

	fgv()
	{
		if (!this.izs.includes(':'))
			return;

		this.izs = this.izs.replace(cs[19], (wk) =>
		{
			const x = new wh(this.xl, wk);

			return this.lje(x);
		});
	}

	lje(nl)
	{
		this.ok[nl.eg] = nl;

		return nl.eg;
	}

	td()
	{
		this.hidden = true;

		for (let ry of this.children)
		{
			ry.td();
		}
	}

	cw(ry)
	{
		this.children.push(ry);

		ry.pe = this;
	}

	get nbt()
	{
		return sv.uj(this.children);
	}

	get cin()
	{
		return this.children.some(ry => !ry.hidden);
	}
}

class uaq
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.mi = x.mi;
		this.ok = x.ok;
		this.xl = x.xl;
		this.eg = x.eg;
		this.sx = sv.tv(x.pe, 'eg');
		this.kuk = x.kuk;
		this.ah = x.ah;
		this.crl = x.crl;
		this.ag = x.ag;
		this.bdy = x.bdy;
		this.tsz = x.tsz;
		this.zt = x.zt;
		this.an = x.hmh.an;
		this.id = x.hmh.id;
		this.ibm = '';
		this.pwi = '';

		this.bdy = sv.qwi(this.bdy);

		this.ibm = sv.cj('https://www.youtube.com/channel/%s', this.kuk);

		this.pwi = sv.cj('https://www.youtube.com/watch?v=%s&lc=%s', [this.xl, this.eg]);
	}
}

class lrw
{
	constructor(vm, zb)
	{
		this.eg = sv.qs();

		this.vm = vm;

		this.zb = zb;
	}
}

class wh extends lrw
{
	constructor(xl, t)
	{
		super(null, 'wh');

		let vm, te;

		if (sv.ef(t))
		{
			vm = sv.ac(t);
			te = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			vm = t;
			te = sv.qk(t);
		}

		this.xl = xl;
		this.eb = te;
		this.vm = vm;
	}
}

class ap extends lrw
{
	constructor(mk)
	{
		super('youtube.com', 'ap');

		this.xl = mk.xl;
		this.eb = mk.eb;
	}
}

class azh extends lrw
{
	constructor(wj)
	{
		super('', 'vj');

		this.wj = wj;

		this.nqt = wj.startsWith('https');

		this.vm = emt.xdh(wj) || wj;
	}
}

class alk extends lrw
{
	constructor(vnp)
	{
		super(vnp, 'vj');

		this.wj = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(vnp);
	}
}

class xml extends lrw
{
	constructor(qce, xqd)
	{
		super(qce, 'vj');

		this.wj = 'https://www.youtube.com/channel/' + xqd;
	}
}

class sfs
{
	constructor(ye)
	{
		this.fhv = '';
		this.urw = '';
		this.rfx = [];
		this.glk = false;
		this.lfo = false;

		this.qmx(ye);
		this.vme();
		this.ghx();
	}

	get bxa()
	{
		return this.fhv;
	}

	get length()
	{
		return this.fhv.length;
	}

	get zwz()
	{
		return sv.eam(this.urw);
	}

	toLowerCase()
	{
		this.fhv = this.fhv.toLowerCase();
	}

	ftm(rvw)
	{
		return this.rfx.includes(rvw);
	}

	bxj(yjp)
	{
		for (let rvw of yjp)
		{
			if (this.ftm(rvw)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.fhv[this.length + i] : this.fhv[i];
	}

	cvx(n)
	{
		this.fhv = this.fhv.slice(0, -n);
	}

	replace(ng, kg)
	{
		this.fhv = this.fhv.replace(ng, kg);
	}

	qmx(ye)
	{
		this.fhv = sv.kud(ye, 'iba');

		this.replace(cs[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(cs[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (sv.qem(x))
				{
					return m.length > 3 && !cs[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	vme()
	{
		let pev = sv.djy([...this.fhv]).join('');

		this.urw = pev.slice(0, 16);

		this.rfx = sv.zu(cs[23], pev);

		this.glk = this.rfx.some(this.yqx);
	}

	ghx()
	{
		if (!this.glk) return;

		for (let i = 0, k = 0, n = this.rfx.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.rfx[i] + this.rfx[k];

				this.replace(sv.yhq('(%s)+', x, 'g'), x);
			}
		}
	}

	yqx(rvw)
	{
		return rvw.charCodeAt(0) > 255;
	}

	vce(rvw)
	{
		return rvw == '\u{200D}';
	}
}

class kmf
{
	constructor(mh)
	{
		mh.sort(sv.gp);

		const muq = mh.slice(0, Math.floor(mh.length / 2));
		const ltg = mh.slice(Math.round(mh.length / 2));

		this.nrw = sv.xr(muq);
		this.uhg = sv.xr(ltg);
		this.sim = this.uhg - this.nrw;

		this.mh = mh;
	}

	the(n)
	{
		const ot = this.nrw - 1.5 * this.sim;
		const pz = this.uhg + 1.5 * this.sim;

		return n < ot || pz < n;
	}

	ycf()
	{
		return this.mh.filter(
			n => !this.the(n)
		);
	}
}

class xv
{
	constructor()
	{
		this.eg = chrome.runtime.id;

		this.uqb = chrome.runtime.getManifest().version;

		this.qp = new Promise(uc => this.djl = uc);

		this.qp.then(
			_ => this.qt()
		);

		this.bx();

		chrome.runtime.onInstalled.addListener(
			crs => this.rmn(crs)
		);

		chrome.browserAction.onClicked.addListener(
			_ => tpa.hdl('ig')
		);

		chrome.alarms.onAlarm.addListener(
			crs => this.gfd('jtk', crs)
		);

		chrome.runtime.onMessageExternal.addListener(
			su => this.gfd('fuz', su)
		);
	}

	async bx()
	{
		if (await this.sce == this.uqb)
		{
			const oi = await nu.get(['0', '1']);

			this.qog = new bc(oi[0], 0);

			xs = new mx(oi[1], 1);

			this.djl(1);
		}
	}

	async hk()
	{
		const bej = await this.cd('/html/view.html');

		const pq = (
			this.uqb < this.onp
		);

		const qj = (
			!xs.ro || !xs.lq
		);

		return {
			ai: {
				pq, qj
			},
			cu: bej
		};
	}

	async rl(lp)
	{
		if (cs[24].test(lp))
		{
			const gty = await bv.et.che(lp);

			if (gty)
			{
				const qhv = await bv.qe.hug(lp);

				if (qhv)
				{
					xs.vn(qhv).then(
						_ => lb.rc('hp')
					);

					return true;
				}
			}
		}

		return false;
	}

	pau(ntc)
	{
		xs.nf = ntc;

		lb.rc('zk');
	}

	ay(sq)
	{
		let lp = xs.lp;

		if (lp)
		{
			if (sq)
			{
				lp = sv.ihq(19, lp);

				xs.lp = lp;
			}

			bv.et.mem(lp);
		}
	}

	async cd(ju)
	{
		const uvg = await wic.njp(chrome.runtime.getURL(ju));

		return uvg.sn;
	}

	async jal(crs)
	{
		this.yum();

		if (crs.reason == 'install')
		{
			await this.jke();
		}
		else {
			if (crs.previousVersion < '')
			{

			}
		}

		await this.pyv();

		await this.bx();
	}

	async rmn(crs)
	{
		await this.jal(crs);

		switch (crs.reason)
		{
			case 'install':
				this.rpi();
				break;

			case 'update':
				this.blt();
				break;
		}

		tpa.sef();
	}

	rpi()
	{

	}

	blt()
	{

	}

	async gfd(xyz, sn)
	{
		await this.qp;

		switch (xyz)
		{
			case 'jtk':
				return this.kaj(sn);

			case 'fuz':
				return this.tir(sn);
		}
	}

	kaj(jtk)
	{
		const mah = jtk.name;

		switch (mah)
		{
			case 'ipy':
				this.ipy();
		}
	}

	tir(su)
	{
		return new eou().nz(su);
	}

	qt()
	{
		this.ay(
			xs.ro && (sv.cg() || !xs.fd)
		);
	}

	get sce()
	{
		return nu.get('schemaVersion');
	}

	pyv()
	{
		return nu.set('schemaVersion', this.uqb);
	}

	get onp()
	{
		return this.qog.latestVersion;
	}

	zjz(v)
	{
		this.qog.set('latestVersion', v);
	}

	jke()
	{
		return nu.set({
			0: {
				latestVersion: this.uqb
			},
			1: {},
		});
	}

	yum()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('ipy', {periodInMinutes:240});
	}

	async ipy()
	{
		const v = await bv.qe.nhf();

		if (v)
		{
			this.zjz(v);
		}
	}
}

class eou
{
	nz(su)
	{
		su = sv.gpw(su);

		switch (su.issuer)
		{
			case 'authServer':
				return this.ena(su.data);
		}
	}

	ena(sn)
	{
		if (sn.id == 'pa')
		{
			vf.pau(sn.token);
		}
	}
}

class hxy
{
	constructor()
	{
		this.qe = new ygs;

		this.et = new qdt;
	}
}

class ygs
{
	constructor()
	{
		this.idz = 'https://api.lett.app/cs';
	}

	async hug(lp)
	{
		const uvg = await this.get('/auth', {
			apiKey:lp,
			token:vf.eg
		});

		if (uvg.el)
		{
			return uvg.sn;
		}
	}

	async nhf()
	{
		const uvg = await this.get('/update');

		if (uvg.el)
		{
			return uvg.sn.version;
		}
	}

	async dw(mw)
	{
		const mk = {
			extId:vf.eg,
			apiKey:xs.lp,
			amount:mw,
		};

		const uvg = await this.get('https://api.lett.app/donate/accept', mk, Infinity);

		if (uvg.el)
		{
			return uvg.sn.url;
		}
	}

	async get(zao, mk, auv)
	{
		if (zao[0] == '/')
		{
			zao = this.idz + zao;
		}

		const uvg = await wic.njp(zao, mk, auv);

		if (!uvg.el && !uvg.np)
		{
			uvg.ty(uvg.sn.error);
		}

		return uvg;
	}
}

class uxe
{
	constructor()
	{
		this.idz = 'https://www.googleapis.com/youtube/v3';
	}

	mem(lp)
	{
		this.yt = lp;
	}

	async che(lp)
	{
		this.mem(lp);

		const uvg = await this.mws('jNQXAC9IVRw');

		return uvg.el;
	}

	ytd(xl)
	{
		return this.yv({
			videoId:xl
		});
	}

	heu(xl, wnd)
	{
		return this.er({
			videoId:xl,
			searchTerms:wnd
		});
	}

	iqh(xqd, wnd)
	{
		return this.er({
			allThreadsRelatedToChannelId:xqd,
			searchTerms:wnd
		});
	}

	async mws(xl)
	{
		const uvg = await this.gbn({
			id:xl,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (uvg.el)
		{
			try {
				uvg.sn = new rim(uvg.sn);
			}
			catch (e) {
				uvg.ty('as');
			}
		}

		return uvg;
	}

	async get(zao, mk)
	{
		const uvg = await wic.njp(this.idz + zao, mk);

		if (!uvg.el && !uvg.np)
		{
			const jag = this.pjh(uvg.sn);

			uvg.ty(jag);
		}

		return uvg;
	}

	async er(mk)
	{
		const uvg = await this.get('/commentThreads', mk);

		if (uvg.el)
		{
			uvg.sn = this.flb(uvg.sn);
		}

		return uvg;
	}

	async yv(mk)
	{
		let uvg, io = [];

		do {
			uvg = await this.get('/commentThreads', mk);

			if (uvg.el)
			{
				const zyv = this.flb(uvg.sn);

				io.push(zyv);

				mk.pageToken = uvg.sn.nextPageToken;
			}
		}
		while (uvg.el && mk.pageToken)

		uvg.sn = io.flat();

		return uvg;
	}

	gbn(mk)
	{
		return this.get('/videos', mk);
	}

	gpz(akq)
	{
		try {
			return new xsi(akq);
		}
		catch (e) {
			return null;
		}
	}

	kpn(akq)
	{
		let mlr = [];

		try {
			if (akq.replies) {
				mlr = akq.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return mlr;
	}

	pjh(gfh)
	{
		try {
			return gfh.error.errors[0].reason;
		}
		catch (e) {
			return gfh.ds || 'bf';
		}
	}

	flb(akq)
	{
		const zyv = [];

		try {
			for (let nl of akq.items)
			{
				const tm = this.elt(nl);

				if (tm) {
					zyv.push(tm);
				}
			}
		}
		catch (e) {
		}

		return zyv;
	}

	elt(akq)
	{
		try {
			const esv = akq.snippet;

			if (esv.videoId)
			{
				let zo = this.gpz(esv.topLevelComment);

				if (zo)
				{
					const tm = new bcd(zo, esv.totalReplyCount);

					if (tm.zbc <= 5)
					{
						for (let ynx of this.kpn(akq))
						{
							zo = this.gpz(ynx);

							if (zo) {
								tm.xjl(zo);
							}
						}
					}

					return tm;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class qdt extends uxe
{
	yv(mk)
	{
		this.csy(mk);

		return super.yv(mk);
	}

	er(mk)
	{
		this.csy(mk);

		return super.er(mk);
	}

	async get(zao, mk)
	{
		mk.key = this.yt;

		let uvg, i = 3;

		while (i--)
		{
			uvg = await super.get(zao, mk);

			if (uvg.ds != 'processingFailure')
				break;
		}

		return uvg;
	}

	csy(mk)
	{
		Object.assign(mk, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class emt
{
	static hqt(wj)
	{
		const xl = sv.fh(cs[25], wj);

		if (xl)
		{
			let eb = sv.fh(cs[26], wj) || 0;

			if (!sv.ef(eb))
			{
				eb = sv.zu(cs[27], eb).join(':');

				eb = sv.qk(eb);
			}

			return {xl, eb};
		}
	}

	static xdh(wj)
	{
		return sv.fh(cs[28], wj).replace('www.', '');
	}
}

class ghl
{
	async hdl(lw)
	{
		const eny = await this.hvs();

		if (eny && eny.url)
		{
			this.ga(eny.id, 'lw', lw);
		}
	}

	sef()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, tpa =>
		{
			for (let eny of tpa)
			{
				chrome.tabs.reload(eny.id);
			}
		});
	}

	hvs()
	{
		return new Promise(uc =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, tpa =>
			{
				uc(tpa[0]);
			});
		});
	}

	ga(jlz, gj, sn)
	{
		chrome.tabs.sendMessage(jlz, new qo(gj, sn));
	}
}

class aya
{
	constructor(hw, ojd)
	{
		this.eg = ojd.xl;

		this.ojd = ojd;

		this.flr = new hot(hw);

		this.io = {};

		for (let xua of ['iow', 'ziy'])
		{
			this[xua] = new rpq(Array);
		}

		for (let xua of ['snr', 'kwy', 'hfw'])
		{
			this[xua] = [];
		}

		for (let tm of hw)
		{
			this.ae(tm);
			this.jhw(tm);
		}
	}

	hym(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.gwc();

			case ':all':
				return this.zrc();

			case ':creator':
				return this.lie();

			case ':link':
				return this.lhn();

			case ':reply':
				return this.jrh();
		}

		if (cs[29].test(q))
		{
			const db = this.sdt(q);

			switch (db.length)
			{
				case 1: return this.qxb(db[0]);

				case 2: return this.mgx(db[0], db[1]);
			}
		}

		return this.sht(q);
	}

	zrc()
	{
		return this.lar(
			Object.keys(this.io)
		);
	}

	gwc()
	{
		return this.lar(this.ziy.values);
	}

	lie()
	{
		return this.lar(this.snr);
	}

	lhn()
	{
		return this.lar(this.hfw);
	}

	jrh()
	{
		return this.lar(this.kwy);
	}

	mgx(we, lut)
	{
		const rds = sv.qk(we);
		const nyw = sv.qk(lut);

		const kuh = [];

		for (let db of this.ziy.keys)
		{
			if (rds <= db && db <= nyw)
			{
				kuh.push(
					this.ziy.get(db)
				);
			}

			if (nyw < db) break;
		}

		return this.lar(kuh);
	}

	ae(nl)
	{
		this.io[nl.eg] = nl;
	}

	fhr(eg)
	{
		return this.io[eg].ni;
	}

	lar(kuh)
	{
		kuh = kuh.flat();

		return sv.djy(kuh).map(
			eg => this.fhr(eg)
		);
	}

	sht(ye)
	{
		let tkb = [];

		let tp = this.ghu(ye);

		let kuh = tp.map(
			k => this.select('iow', k)
		);

		kuh = kuh.filter(x => x.length);

		if (kuh.length)
		{
			tkb = sv.rvx(...kuh);

			if (tkb.length < 1)
			{
				kuh.sort((a, b) => a.length - b.length);

				tkb = kuh[0];
			}
		}

		return this.lar(tkb);
	}

	qxb(wk)
	{
		let nv = sv.qk(wk);

		let kuh = [
			this.select('ziy', nv)
		];

		for (let i = nv; i--;)
		{
			let x = this.select('ziy', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			kuh.push(x);
		}

		for (let i = nv; i++;)
		{
			let x = this.select('ziy', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			kuh.push(x);
		}

		return this.lar(kuh);
	}

	jhw(tm)
	{
		const vm = tm.ysn.map(zo => zo.ynu).join(' ');

		this.ioc(vm, tm.eg);

		this.stu(vm, tm.eg);

		this.eqe(vm, tm.eg);

		this.kpn(tm);
	}

	kpn(tm)
	{
		if (tm.length > 1)
		{
			this.kwy.push(tm.eg);
		}

		if (tm.nzv(this.ojd.xqd))
		{
			this.snr.push(tm.eg);
		}
	}

	ioc(vm, eg)
	{
		vm.includes('http') && this.hfw.push(eg);
	}

	stu(vm, eg)
	{
		const pto = this.sdt(vm);

		for (let db of pto)
		{
			db = sv.qk(db);

			if (0 <= db && db < this.ojd.fs)
			{
				this.eki('ziy', db, eg);
			}
		}
	}

	eqe(vm, eg)
	{
		this.ghu(vm).forEach(
			sy => this.eki('iow', sy, eg)
		);
	}

	eki(xua, yt, bu)
	{
		this[xua].wqw(yt);

		this[xua].get(yt).push(bu);
	}

	select(xua, yt)
	{
		return this[xua].get(yt);
	}

	ghu(ye)
	{
		ye = lzb.qmx(ye);

		ye = lzb.ydp(ye);

		ye = sv.rvm(ye);

		return sv.djy(ye);
	}

	sdt(ye)
	{
		return sv.zu(cs[30], ye);
	}
}

class hot
{
	constructor(hw)
	{
		this.flr = {};

		this.awq = {};

		this.itb = {};

		for (let tm of hw)
		{
			this.vrw(tm);
		}

		this.nzw();
	}

	lgc(gwm)
	{
		return this.awq.hym(gwm);
	}

	drc(eg)
	{
		return this.flr[eg];
	}

	vrw(tm)
	{
		for (let zo of tm.ysn)
		{
			this.gza(zo.kuk, zo.ynu);
			this.gea(zo.kuk, zo.okb);
		}
	}

	nzw()
	{
		this.awq = new jgt(this.awq);

		for (let eg in this.itb)
		{
			const itb = this.itb[eg];

			if (itb.length > 1)
			{
				const gve = itb.filter(
					(vm, i) => vm.length < 28 || i == itb.indexOf(vm)
				);

				this.drc(eg).mbm = (itb.length != gve.length);
			}
		}
	}

	gea(eg, lzr)
	{
		let vgb = new vel(eg, lzr);

		this.flr[eg] = vgb;

		this.awq[lzr] = vgb;
	}

	gza(eg, vm)
	{
		this.itb[eg] = this.itb[eg] || [];

		this.itb[eg].push(vm);
	}
}

class vel
{
	constructor(eg, lzr)
	{
		this.eg = eg;
		this.lzr = lzr;
		this.mbm = false;
		this.tds = false;
	}

	get crl()
	{
		return this.tds ? this.lzr : this.pyn;
	}

	get keu()
	{
		return !this.tds && this.mbm;
	}

	get pyn()
	{
		if (!this.spm)
		{
			this.spm = uko.biz(this.lzr);
		}

		return this.spm;
	}
}

class jgt
{
	constructor(yc)
	{
		this.keys = Object.keys(yc).sort(this.uli);

		this.hfq = this.keys.map(yt => yc[yt]);

		this.keys = this.keys.map(sv.ps);
	}

	hym(vof)
	{
		vof = vof.toLowerCase();

		let io = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(vof))
			{
				do {
					io.push(this.hfq[i])
				}
				while (++i < n && this.keys[i].startsWith(vof));

				break;
			}
		}

		return io.sort(this.npy);
	}

	npy(a, b)
	{
		return b.lzr.length - a.lzr.length;
	}

	uli(a, b)
	{
		return a.localeCompare(b);
	}
}

const zix = {
	zrn: {
		oeh(epd, lpt = 0)
		{
			return +epd || lpt;
		},

		tbo(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		ftl(n)
		{
			return sv.frl(1, n);
		},
	},

	jhw(hw, ucj, ojd)
	{
		this.poh = ojd.xqd;

		this.hym = ojd.hym;

		this.fin = new miq;

		this.ziy = new jwu;

		this.aql = new ahr;

		this.zxy = {};

		sv.fc(
			ucj.drc(this.poh), 'tds', true
		);

		return this.vme(hw, ucj);
	},

	vme(hw, ucj)
	{
		const mli = ('you are not but for the thi and that was').split(' ');

		const xbm = {
			tbo: this.zrn.tbo,
			alb: this.zrn.ftl,
			oeh: this.zrn.oeh,
		};

		const dyh = {
			fyk: 1
		};

		const zfx = {
			iow: .5,
			alb: .2,
			cmr: .2,
			gcn: .0,
		};

		if (this.hym.jcf)
		{
			Object.assign(zfx, {
				gcn:.3,
			});
		}

		let kuh = [];

		hw = hw.filter(
			tm => !kuh.includes(tm.kuk) && kuh.push(tm.kuk)
		);

		for (let tm of hw)
		{
			Object.assign(tm,
			{
				oy: {
					ziy: [],
					tp: [],
					rxl: 0,
					htp: 0,
					vhr: false,
					cmr: false,
				},
				ypn: {
					iow: 0,
					alb: 0,
					cmr: 0,
					gcn: 0,
					lti: 0,
				},
			});

			const oy = tm.oy;

			for (let i = 0; i < tm.length; i++)
			{
				const zo = tm.ysn[i] = new vhd(tm.ysn[i]);

				zo.vgb = ucj.drc(zo.kuk);

				zo.zt = this.zt(zo.kuk);

				if (i > 0)
				{
					zo.mi = true;

					if (zo.tsz && tm.fkl > 1)
					{
						oy.vhr = true
					}

					if (zo.zt)
					{
						oy.cmr = true;
					}
				}

				if (zo.ujz == '' || zo.vgb.keu)
				{
					!zo.vgb.tds && zo.td();
				}
			}

			const afy = tm.afy;

			if (this.mtw(afy.izs))
			{
				tm.hidden = true;

				continue;
			}

			oy.tp = sv.rvm(afy.ujz);
			oy.rxl = oy.tp.length;
			oy.tp = sv.djy(oy.tp);
			oy.htp = oy.tp.length;

			for (let x in afy.ok)
			{
				x = afy.ok[x];

				if (x.eg == afy.izs)
				{
					tm.hidden = true;
				}

				if (x instanceof wh)
				{
					oy.ziy.push(x.eb);

					sv.cbg(x.eg, this.ziy.vgi(x.eb), oy.tp);
				}
			}

			for (let sy of oy.tp)
			{
				if (sy.length > 2 && !mli.includes(sy))
				{
					this.fin.woc(sy);
				}
			}
		}

		for (let tm of hw)
		{
			if (tm.hidden)
				continue;

			const ypn = tm.ypn;

			for (let sy of tm.oy.tp)
			{
				ypn.iow += this.fin.get(sy);
			}

			ypn.iow /= tm.oy.rxl;

			ypn.alb = tm.oy.ziy.length;

			dyh.fyk = Math.max(dyh.fyk, ypn.iow);
		}

		for (let tm of hw)
		{
			const ypn = tm.ypn;

			ypn.iow = zfx.iow * sv.frl(ypn.iow, dyh.fyk);
			ypn.alb = zfx.alb * xbm.alb(ypn.alb);
			ypn.cmr = zfx.cmr * xbm.oeh(tm.oy.cmr);
			ypn.gcn = zfx.gcn * xbm.oeh(tm.oy.vhr, .5);

			ypn.lti = sv.uql(Object.values(ypn));
		}

		hw.sort(
			(a, b) => b.ypn.lti - a.ypn.lti
		);

		for (let i = 0, n = hw.length; i < n; i++)
		{
			const a = hw[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = hw[k];

				if (!b.hidden && !b.fjx)
				{
					const crt = sv.rvx(a.oy.tp, b.oy.tp);
					const qwo = (a.oy.tp.length + b.oy.tp.length) / 2;

					if (crt.length == b.oy.rxl)
					{
						b.hidden = true;
					}

					if (crt.length >= .5 * qwo)
					{
						const nyw = a.oy.ziy[0] || 0;
						const pbw = b.oy.ziy[0] || 0;

						if (this.ziy.dkr(nyw, pbw))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < hw.length; i++)
		{
			const tm = hw[i];

			if (tm.xza)
				break;

			let olg = false;

			if (tm.oy.htp == 1)
			{
				olg = true;
			}

			if (i == 0 && !tm.fjx)
			{
				const umk = this.hym.ye.toLowerCase();
				const ncl = tm.afy.ujz;

				if (umk == ncl)
				{
					olg = true;
				}
			}

			if (tm.fjx && tm.fkl == 1)
			{
				const rds = new Date(tm.afy.bdy);
				const nyw = new Date(tm.ske.bdy);

				if (.001 * (nyw - rds) < 300)
				{
					olg = true;
				}
			}

			if (olg)
			{
				sv.gil(i, hw);

				tm.xza = true;
				i--;
			}
		}

		for (let tm of hw)
		{
			this.aql.awg(tm.eg, tm.kuk);

			for (let kuk of tm.omb)
			{
				this.aql.hca(kuk, tm.eg)
			}
		}

		for (let tm of hw)
		{
			if (tm.tbo == 0) continue;

			for (let ynx of tm.mlr)
			{
				const vm = ynx.izs;

				const lwe = sv.fh(cs[31], vm);

				for (let vgb of ucj.lgc(lwe))
				{
					if (this.vjs(vgb).test(vm))
					{
						ynx.iap = vgb;
						break;
					}
				}
			}

			if (tm.length > 2)
			{
				let flr = [], io = [], suh = false;

				const n = tm.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					if (suh)
					{
						flr = [];
						io = [];
						suh = false;
					}

					const ynx = tm.ysn[i];
					const xs = ynx.vgb;

					if (sv.uj(flr) == xs) {
						i++;
					}
					else if (flr.includes(xs) || sv.djy(flr).length < 2)
					{
						flr.push(xs);
						io.push(ynx);

						if (i + 1 < n)
							continue;
					}

					if (io.length > 2)
					{
						let gty = !io.some(ynx => ynx.iap && !flr.includes(ynx.iap));

						if (gty)
						{
							io.forEach(ynx =>
								ynx.iap = flr.find(vgb => vgb != ynx.vgb)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						suh = true;
					}
				}
			}

			for (let pyz, i = 1; i < tm.length; i++)
			{
				const ynx = tm.ysn[i];

				if (!ynx.iap)
				{
					if (pyz && pyz.iap == ynx.vgb)
					{
						ynx.iap = pyz.vgb;

						tm.toi(pyz, ynx);
					}
				}
				else {
					let qze;

					const tbl = ynx.iap;

					for (let k = i - 1; k >= 0; k--)
					{
						const pyz = tm.ysn[k];

						if (k == 0)
						{
							if (pyz.vgb == tbl)
							{
								qze = '';
							}

							break;
						}

						if (pyz.vgb == tbl)
						{
							tm.toi(pyz, ynx);

							if (pyz.children.length == 1)
							{
								qze = '';
							}

							break;
						}
					}

					if (qze == null)
					{
						const mz = new xml(tbl.crl, tbl.eg);

						qze = ynx.lje(mz) + ' ';
					}

					ynx.izs = ynx.izs.replace(
						this.vjs(tbl), qze
					);
				}

				pyz = ynx;
			}

			for (let i = 1, n = tm.length; i < n; i++)
			{
				const ynx = tm.ysn[i];

				if (ynx.pe || ynx.children.length)
				{
					sv.gil(i, tm.ysn);
					i--;
					n--;
				}
			}

			for (let jfy = false, i = 1; i < tm.length; i++)
			{
				let ynx = tm.ysn[i];

				jfy = (jfy || !ynx.tsz);

				if (ynx.cin)
				{
					continue;
				}

				if (!jfy)
				{
					const vm = ynx.izs;

					if (tm.length > 2 || ['+','@'].includes(vm[0]) || vm.length < 10)
					{
						ynx.td();
					}
				}

				ynx.iap && !tm.nzv(ynx.iap.eg) && ynx.td();

				this.dno(ynx.kuk, tm.eg) && ynx.td();
			}
		}

		hw = hw.map(tm =>
		{
			if (tm.afy.hidden)
			{
				return [];
			}

			const ysn = [];

			for (let i = 0; i < tm.length; i++)
			{
				const zo = tm.ysn[i];

				zo.ag = uko.rnv(zo.izs);

				zo.crl = zo.vgb.crl;

				if (zo.ag.length < 2)
				{
					if (i == 0)
						return [];

					zo.td();
				}

				ysn.push(
					new uaq(zo)
				);
			}

			return ysn;
		});

		return hw.filter(tm => tm.length > 0);
	},

	mtw(ye)
	{
		return ye.length > 500 || sv.ipt(cs[32], ye) > 3;
	},

	zt(kuk)
	{
		return this.poh == kuk;
	},

	dno(kuk, rod)
	{
		if (this.zt(kuk))
		{
			return false;
		}

		for (let mrp of this.aql.gid(kuk))
		{
			if (mrp == rod)
			{
				return false;
			}

			if (!this.aql.ech(mrp, kuk))
			{
				return true;
			}
		}

		return false;
	},

	vjs(vgb)
	{
		const eg = vgb.eg;

		if (eg in this.zxy)
		{
			return this.zxy[eg];
		}

		return this.zxy[eg] = sv.yhq('^[+@]?%s[-\\s,.:;?!]*', vgb.lzr, 'i');
	}
};

const uko = {
	rnv(so)
	{
		let ye = new sfs(so);

		ye.zwz && ye.toLowerCase();

		if (ye.ftm('.'))
		{
			ye.charAt(-1) == '.' && ye.charAt(-2) != '.' && ye.cvx(1);

			ye.replace(cs[33], (m) => m.replace(cs[34], ''));
		}

		if (ye.ftm('\n'))
		{
			ye.replace(cs[35], function(m, i)
			{
				let x = ye.charAt(i - 1);

				return sv.rok(x) ? '. ' : ' ';
			});
		}

		if (ye.bxj('*_'))
		{
			ye.replace(cs[36], '$2');
		}

		if (ye.bxj('(,!?.)'))
		{
			ye.replace(cs[37], '?!');

			ye.replace(cs[38], '$1');

			ye.replace(cs[39], '$1 $2');

			ye.ftm('!') && ye.replace(cs[40], '$1');
		}

		if (ye.bxj('$£€'))
		{
			ye.replace(cs[41], (_, aep, slx) =>
			{
				cs[42].test(aep) && (aep = Math.round(aep));

				return slx + aep;
			});
		}

		ye.ftm(':') && ye.replace(cs[43], ': ');

		ye.ftm('&') && ye.replace(cs[44], ' and ');

		ye.ftm('"') && ye.replace(cs[45], '" - $1');

		return pjs.nqs(ye.bxa);
	},

	biz(so)
	{
		return so.length < 28 && this.lhc(so) || this.yup();
	},

	lhc(ye)
	{
		let tp;

		if (!cs[46].test(ye))
		{
			if (sv.hag(ye))
			{
				ye = sv.wzp(ye);
			}

			tp = ye.split(' ');

			if (tp.length == 1)
			{
				return sv.lt(tp[0], 'PRE_CASE');
			}
		}
		else {
			tp = sv.zu(cs[47], ye);
		}

		tp = tp.map(sy =>
		{
			switch (true)
			{
				case sy.length < 2 || sv.ef(sy):
					return '';

				default:
					return sv.lt(sy);
			}
		});

		tp = tp.filter(
			(sy, i) => sy != '' && i == tp.indexOf(sy)
		);

		return tp.join(' ');
	},

	yup()
	{
		return 'user' + sv.vd(4);
	}
};

const lzb = {
	qmx(ye)
	{
		ye = ye.toLowerCase();

		ye = ye.replace(cs[48], ' ');

		return sv.kud(ye);
	},

	ydp(ye)
	{
		return ye.replace(cs[49], '$1');
	}
};

const pjs = {
	yri: {
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

	nqs(ye)
	{
		return ye.replace(cs[50], m => this.get(m));
	},

	get(yt)
	{
		yt = yt.toLowerCase();

		(yt.length == 2) || (yt = yt.slice(0, 2));

		return this.yri[yt] || yt;
	}
};

class miq
{
	constructor()
	{
		this.map = {};
	}

	woc(sy)
	{
		this.map[sy] = ++this.map[sy] || 0;
	}

	get(sy)
	{
		return this.map[sy] || 0;
	}
}

class jwu
{
	constructor()
	{
		this.map = {};
	}

	vgi(clk)
	{
		for (let mfl in this.map)
		{
			if (this.dkr(clk, mfl))
			{
				return this.map[mfl];
			}
		}

		return this.auj(clk);
	}

	auj(db)
	{
		return this.map[db] = sv.cj('TS%s', db);
	}

	dkr(nyw, pbw)
	{
		return Math.abs(pbw - nyw) < 5;
	}
}

class ahr
{
	constructor()
	{
		this.ozi = {};

		this.hw = {};
	}

	gid(kuk)
	{
		return this.ozi[kuk];
	}

	ech(mrp, kuk)
	{
		return this.hw[mrp] == kuk;
	}

	awg(mrp, kuk)
	{
		this.hw[mrp] = kuk;
	}

	hca(kuk, mrp)
	{
		if (!this.ozi[kuk])
		{
			this.ozi[kuk] = new dp;
		}

		this.ozi[kuk].push(mrp);
	}
}

class rm
{
	constructor(ao)
	{
		ao.nz = this.nz.bind(this);

		this.ao = ao;

		this.rkn = 0;

		this.tos = new Promise(uc => uc(null));

		this.ojd;

		this.wky = new wky;

		this.nkv = new aya([], {});
	}

	async nz(su)
	{
		const xl = su.sn.xl;

		try {
			const crs = await this.wky.qkg(xl);

			this.ojd = new uto(su.sn, crs);
		}
		catch (gq) {
			return this.usg(gq);
		}

		switch (su.gj)
		{
			case 'er':
				return this.gio(xl);

			case 'lf':
				return this.zn(xl);
		}
	}

	usg(eg)
	{
		this.bem('ds', {eg});
	}

	zn(xl)
	{
		const n = this.ojd.lf;

		if (0 < n && n < 1000)
		{
			this.xbp(xl);
		}

		this.bem('lf', n);
	}

	async gio(xl)
	{
		if (this.ojd.hym.qkl)
		{
			return this.usg('ln');
		}

		this.mcp();
	}

	async mcp()
	{
		let r = new lgx(this.fca);

		try {
			if (this.ojd.hym.yti)
			{
				await this.rfi(r);
			}
			else {
				await this.avy(r);
			}

			!this.ifk(r.eg) && this.bem('er', r);
		}
		catch (gq) {
			!this.ifk(r.eg) && this.usg(gq);
		}
	}

	async rfi(gfh)
	{
		const uvg = await bv.et.iqh(this.ojd.xqd, this.ojd.hym.ye);

		if (uvg.ds)
		{
			throw uvg.ds;
		}

		const flr = new hot(uvg.sn);

		const hw = zix.jhw(uvg.sn, flr, this.ojd);

		gfh.ibn(hw);
		gfh.swb(-2);
	}

	async avy(gfh)
	{
		const xl = this.ojd.xl;
		const sk = this.ojd.hym.ye;

		const p = gfh.swb(this.ojd.lf);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.ojd.hym.seo)
		{
			throw 'kl';
		}

		let hw, flr;

		if (p < 1000)
		{
			const gq = await this.xbp(xl);

			if (gq)
			{
				throw gq;
			}

			flr = this.nkv.flr;

			hw = this.nkv.hym(sk);
		}
		else {
			const uvg = await bv.et.heu(xl, sk);

			if (uvg.ds)
			{
				throw uvg.ds;
			}

			flr = new hot(uvg.sn);

			hw = uvg.sn;
		}

		hw = zix.jhw(hw, flr, this.ojd);

		gfh.ibn(hw);
	}

	bem(gj, sn)
	{
		this.ao.ka(gj, sn);
	}

	async xbp(xl)
	{
		await this.tos;

		if (xl != this.nkv.eg)
		{
			this.tos = new Promise(async uc =>
			{
				const uvg = await bv.et.ytd(xl);

				if (uvg.el)
				{
					this.nkv = new aya(uvg.sn, this.ojd);
				}

				uc(uvg.ds);
			});
		}

		return this.tos;
	}

	get fca()
	{
		return ++this.rkn;
	}

	ifk(vql)
	{
		return vql != this.rkn;
	}
}

class wky
{
	constructor()
	{
		this.map = {};
	}

	async qkg(xl)
	{
		let x = this.map[xl];

		if (x == undefined)
		{
			x = this.plw(xl);
		}

		if (x instanceof Promise)
		{
			const uvg = await x;

			if (uvg.ds)
			{
				this.mng(xl);

				throw uvg.ds;
			}

			x = this.hdk(xl, uvg.sn);
		}

		return x;
	}

	cum(xl, value)
	{
		return this.map[xl] = value;
	}

	plw(xl)
	{
		const r = bv.et.mws(xl);

		return this.cum(xl, r);
	}

	hdk(xl, vhx)
	{
		return this.cum(xl, vhx);
	}

	mng(xl)
	{
		this.cum(xl, undefined);
	}
}

class jln
{
	constructor(q)
	{
		this.ye = '';
		this.zb = '';
		this.yti = false;
		this.qkl = false;

		this.vme(q);
	}

	get seo()
	{
		return this.zb == 'pem';
	}

	get jcf()
	{
		return this.zb == 'ogv';
	}

	vme(q)
	{
		const lzd = q.replace(cs[51], '');

		if (lzd != q)
		{
			this.yti = true;

			if (lzd == '')
			{
				this.qkl = true;
			}
		}

		this.ye = lzd;
		this.zb = jln.ncy(lzd);
	}

	static ncy(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'pem';

			case (cs[52]).test(q):
				return 'ogv';

			default:
				return '';
		}
	}
}

class uto
{
	constructor(iqg, hvq)
	{
		Object.assign(this, ...[iqg, hvq]);

		this.fs = Math.floor(iqg.fs) || Infinity;
		this.xk = Math.floor(iqg.xk);

		this.hym = new jln(iqg.sk);
	}
}

class lgx
{
	constructor(vql)
	{
		this.eg = vql;
		this.hw = [];
		this.ws = 0;
		this.iw = 0;
	}

	ibn(hw)
	{
		this.hw = hw;
		this.ws = hw.length;
	}

	swb(n)
	{
		return this.iw = n;
	}
}

let xs;

const bv = new hxy;
const nu = new eh;
const tpa = new ghl;
const vf = new xv;
const lb = new ed;
const jp = new du;

const cs = [
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