/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const ic = {};

for (let ko of 'object array string regex date math type std cmp'.split(' '))
{
	ic[ko] = {};
}

ic.bv = function(go, tx)
{
	return go != undefined && go.constructor === tx;
}

ic.zv = function()
{
	return ic.kz(9);
}

ic.fs = function(xq)
{
	return ys[0].test(xq);
}

ic.jr = function(qm)
{
	return Object.keys(qm).length == 0;
}

ic.xj = function(ur, qm)
{
	for (let qv in qm)
	{
		const lv = qm[qv];

		if (qv == ur) return lv;
		if (lv == ur) return qv;
	}
}

ic.hk = function(qm, mz)
{
	if (qm instanceof Object)
	{
		return qm[mz];
	}
}

ic.ag = function(qm, mz, ni)
{
	if (qm instanceof Object)
	{
		qm[mz] = ni;
	}
}

ic.zb = function(qm, pc)
{
	let xq = '';

	for (let qv in qm)
	{
		xq += qv + '=' + qm[qv] + pc;
	}

	return xq.slice(0, -1);
}

ic.tz = function(ia, mc, pe)
{
	const gk = mc + 1;

	return pe.slice(gk, gk + ia);
}

ic.pa = function(pe)
{
	return pe[pe.length - 1];
}

ic.aw = function(ik, bn)
{
	ik += '?';

	for (let qv in bn)
	{
		ik += qv + '=' + encodeURIComponent(bn[qv]) + '&';
	}

	return ik.slice(0, -1);
}

ic.gw = function(xq, rl)
{
	if (ic.bv(rl, Array))
	{
		let i = 0;

		return xq.replace(ys[1], _ => rl[i++]);
	}

	return xq.replace('%s', rl);
}

ic.mn = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

ic.bt = function(xq, yh)
{
	const kh = ic.gw('(%s)', yh.join('|'));

	return xq.split(new RegExp(kh)).filter(s => s !== '');
}

ic.cl = function(xq)
{
	return xq.toUpperCase();
}

ic.xn = function(xq)
{
	return xq.toLowerCase();
}

ic.hu = function(xq, hv)
{
	if (!hv)
	{
		xq = xq.toLowerCase();
	}

	return xq[0].toUpperCase() + xq.slice(1);
}

ic.sw = function(pr, xq)
{
	return xq.match(pr) || [];
}

ic.wm = function(pr, xq)
{
	if (pr.global) return '';

	const m = ic.sw(pr, xq);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

ic.ou = function()
{
	return Math.floor(Date.now() / 1000);
}

ic.df = function(qi)
{
	return qi < ic.ou();
}

ic.ev = function(q)
{
	const kj = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = ic.wm(ys[2], q);

	return Date.now() + (x[0] * kj[x[1]] * 1000);
}

ic.dz = function(yi)
{
	let x = yi.split(':'),
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

ic.wt = function(fe)
{
	let pe = [];

	pe.push(fe / 3600);

	fe %= 3600;

	pe.push(fe / 60);

	pe.push(fe % 60);

	pe = pe.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return pe.join(':').replace(ys[3], '');
}

ic.kz = function(ky)
{
	return Math.random().toString().slice(2, ky + 2);
}

ic.jv = function(ae, yw)
{
	const yl = Math.random() * (yw - ae) + ae;

	return Math.floor(yl);
}

ic.mp = function(x, a, b)
{
	return x >= a && x <= b;
}

ic.pj = function(a, b)
{
	return 100 * (a / b);
}

ic.yd = function(zr)
{
	const n = zr.length;
	const i = Math.floor(n / 2);

	if (n == 0)
		return 0;

	if (n % 2 != 0)
		return zr[i];

	if (n % 2 == 0)
		return (zr[i] + zr[i-1]) / 2;
}

ic.vt = function()
{
	let io, nr = 0;

	try {
		io = [to, dg, qf, hq, gl];
	}
	catch (e) {
		io = [to, dg];
	}

	io.forEach(
		lw => nr += lw.toString().length
	);

	return nr != 3344;
}

ic.tn = function(a, b)
{
	return a - b;
}

ic.kv = function(a, b)
{
	return b - a;
}

ic.bl = function(a, b)
{
	return a.length - b.length;
}

ic.gs = function(a, b)
{
	return b.length - a.length;
}

class lb
{
	constructor(uz, tc)
	{
		this.uz = uz;
		this.tc = tc;
	}
}

class jw
{
	constructor(bz, uz, tc)
	{
		this.bz = bz;
		this.bq = new lb(uz, tc);
	}
}

class pb extends Array
{
	constructor(un)
	{
		super();

		if (un != null)
		{
			super.push(un);
		}
	}

	push(nz)
	{
		return !this.includes(nz) && super.push(nz);
	}
}

class kw
{
	constructor(cm, fu)
	{
		const lw = cm.status;

		this.lw = lw;
		this.ck = false;
		this.uv = false;
		this.ep = null;
		this.tc = null;

		switch (fu)
		{
			case 'error':
				return this.cd('qs');

			case 'timeout':
				return this.cd('fa');

			default:
			{
				this.ck = (lw == 200);

				if (lw >= 500)
				{
					return this.cd('nm');
				}

				try {
					this.tc = JSON.parse(cm.responseText);
				}
				catch (e) {
					this.tc = cm.responseText;
				}
			}
		}
	}

	aq(rp)
	{
		this.ep = rp;
	}

	cd(rp)
	{
		this.aq(rp);

		this.uv = true;
	}
}

class la
{
	constructor(tc, yr)
	{
		Object.assign(this, tc);

		Object.defineProperty(this, 'yr', {
			value: yr
		});
	}

	set(qv, lv)
	{
		this[qv] = lv;

		return this.wp();
	}

	sc(fd)
	{
		Object.assign(this, fd);

		return this.wp();
	}

	sa(fd)
	{
		for (let mz in this)
		{
			delete this[mz];
		}

		Object.assign(this, fd);

		return this.wp();
	}

	wp()
	{
		return zc.set(this.yr, this);
	}
}

class dg extends la
{
	constructor(tc, yr)
	{
		super(tc, yr);
	}

	get wy()
	{
		return !!(this.mr)
	}

	get mr()
	{
		return this[0];
	}

	get si()
	{
		return this[1];
	}

	get iq()
	{
		return ic.df(this.si);
	}

	get xp()
	{
		return !!(
			+this.si.toString().split('').pop()
		);
	}

	set mr(qv)
	{
		this.set(0, qv);
	}

	set si(po)
	{
		this.set(1, po);
	}

	get vb()
	{
		let s = this.si.toString(),
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

class ak
{
	constructor(np)
	{
		if (np)
		{
			this.kf();
		}
	}

	du(ob, cb, hw)
	{
	}

	kf()
	{
		chrome.runtime.onMessage.addListener(
			this.du.bind(this)
		);
	}
}

class rd extends ak
{
	constructor()
	{
		super(false);
	}

	du(ob, cb, hw)
	{
		const tc = ob.tc;

		switch (ob.uz)
		{
			case 'xd':
				return this.pl(tc);
		}
	}

	pl(xd)
	{
		if (xd == 'ye')
		{
			mo.gk();
		}
	}

	kl()
	{
		return this.ne('kl');
	}

	jy(ed)
	{
		return this.ne('jy', ed);
	}

	el(mr)
	{
		return this.ne('el', mr);
	}

	bm(ar)
	{
		return this.ne('bm', ar);
	}

	ay(bc)
	{
		return this.ne('ay', bc);
	}

	ne(uz, tc)
	{
		const ob = new lb(uz, tc);

		return new Promise(hw =>
		{
			try {
				chrome.runtime.sendMessage(ob, hw);
			}
			catch (e) {
			}
		});
	}
}

class xm extends ak
{
	constructor()
	{
		super(true);
	}

	du(ob, cb, hw)
	{
		const pf = function(...rl)
		{
			try {
				hw(...rl);
			}
			catch (e) {
			}
		};

		ow.hm.then(_ =>
		{
			const tc = ob.tc;

			switch (ob.uz)
			{
				case 'kl':
					ow.kl().then(pf);
					break;

				case 'jy':
					ow.jy(tc).then(pf);
					break;

				case 'el':
					ow.el(tc).then(pf);
					break;

				case 'bm':
					oj.td.bm(tc).then(pf);
					break;

				case 'ay':
					ow.ay(tc);
					break;
			}
		});

		return true;
	}
}

class it
{
	get(qv)
	{
		return new Promise(qr =>
		{
			try {
				chrome.storage.local.get(qv, pu =>
					qr(typeof qv == 'string' ? pu[qv] : pu)
				);
			}
			catch (e) {
			}
		});
	}

	set(qv, lv)
	{
		let tc;

		if (typeof qv == 'object')
		{
			tc = qv;
		}
		else {
			tc = {[qv]:lv};
		}

		return new Promise(bw =>
		{
			try {
				chrome.storage.local.set(tc, bw);
			}
			catch (e) {
			}
		});
	}

	he()
	{
		return new Promise(bw =>
		{
			try {
				chrome.storage.local.clear(bw);
			}
			catch (e) {
			}
		});
	}
}

class mwofo
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			jw => this.mh(jw)
		);

		Port.onDisconnect.addListener(
			_ => this.im()
		);

		this.Port = Port;

		this.rb = {
		};

		this.ts = false;
	}

	du(m)
	{
	}

	tq(bz, uz, tc)
	{
		const hz = new jw(bz, uz, tc);

		if (!this.ts)
		{
			this.Port.postMessage(hz);
		}
	}

	mh(x)
	{
		this.xz(x.bz).du(x.bq);
	}

	xz(bz)
	{
		return this.rb[bz] || this;
	}

	xo(bz, du, im)
	{
		return this.rb[bz] = new zd(this, bz, du, im);
	}

	im()
	{
		this.ts = true;

		for (let bz in this.rb)
		{
			this.xz(bz).im();
		}
	}
}

class gv extends mwofo
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	du(ob)
	{
		const tc = ob.tc;

		switch (ob.uz)
		{
			case 'uf':
				return zm.dv(tc);
		}
	}

	xo(bz, du, im)
	{
		this.tq(null, 'xo', bz);

		return super.xo(bz, du, im);
	}

	im()
	{
		super.im();

		mo.ji();
	}
}

class cy extends mwofo
{
	constructor(tw)
	{
		super(tw);
	}

	du(ob)
	{
		switch (ob.uz)
		{
			case 'xo':
				return this.xo(ob.tc);
		}
	}

	xo(bz)
	{
		const hs = super.xo(bz);

		switch (bz)
		{
			case 'ca':
				return new px(hs);
		}
	}
}

class pt
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			gz => this.vj(gz)
		);

		this.aj = [];
	}

	vj(tw)
	{
		this.aj.push(
			new cy(tw)
		);
	}

	jd(vz)
	{
		for (let tw of this.aj)
		{
			tw.tq(null, 'uf', vz);
		}
	}
}

class zd
{
	constructor(tw, bz, du, im)
	{
		this.tw = tw;

		this.bz = bz;

		if (du)
		{
			this.du = du;
		}

		if (im)
		{
			this.im = im;
		}
	}

	tq(uz, tc)
	{
		this.tw.tq(this.bz, uz, tc);
	}

	du(m)
	{
	}

	im()
	{
	}
}

ic.wea = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

ic.whf = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

ic.sgs = function(mv, ih)
{
	if (ih)
	{
		const qj = Object.create(
			Object.getPrototypeOf(mv)
		);

		return Object.assign(qj, mv);
	}

	return {...mv};
}

ic.hsj = function(ea, ni, pe)
{
	let i = pe.indexOf(ea);

	if (i >= 0)
	{
		pe[i] = ni;
	}
}

ic.nwn = function(qt, xl, pe)
{
	if (xl != qt)
	{
		const nz = pe[qt];
		pe.splice(qt, 1);
		pe.splice(xl, 0, nz);
	}
}

ic.ixp = function(qt, pe)
{
	ic.nwn(qt, Infinity, pe);
}

ic.lrg = function(...fi)
{
    fi.sort(
    	(a, b) => a.length - b.length
    );

	return fi.shift().filter(nz =>
	{
		for (let fh of fi)
        {
			if (!fh.includes(nz))
				return false;
        }

		return true;
    });
}

ic.rzj = function(pe)
{
	return pe.filter(
		(value, mtc) => pe.indexOf(value) == mtc
	);
}

ic.dka = function(vh, env)
{
	return vh.join(env || '.');
}

ic.tmi = function(xq, xdv)
{
	if (xdv)
	{
		xq = xq.replace(ys[4], '\n');

		xq = xq.replace(ys[5], ' ');
	}
	else {
		xq = xq.replace(ys[6], ' ');

	}

	return xq.trim();
}

ic.sej = function(xq, kh, hw)
{
	return xq.replace(kh, (znk, bfq) =>
	{
		return znk.replace(bfq, hw(bfq));
	});
}

ic.uwy = function(hug)
{
	return ys[7].test(hug);
}

ic.nsg = function(xq)
{
	return !ys[8].test(xq);
}

ic.vsv = function(xq)
{
	return xq.toLowerCase().replace(ys[9], ic.cl);
}

ic.wix = function(xq)
{
	return xq == xq.toUpperCase();
}

ic.gzp = function(xq)
{
	return xq == xq.toLowerCase();
}

ic.isk = function(xq)
{
	return ic.gzp(xq) || ic.wix(xq);
}

ic.ykp = function(pr, xq)
{
	return ic.sw(pr, xq).length;
}

ic.fbr = function(xq)
{
	return ic.ykp(ys[10], xq) + 1;
}

ic.vbp = function(xq)
{
	return xq ? xq.split(' ') : [];
}

ic.faz = function(i, xq)
{
	return xq.substring(0, i) + 'x' + xq.substring(++i);
}

ic.njm = function(s)
{
	return String(s).replace(ys[11], '\\$1').replace(ys[12], '\\x08');
}

ic.eas = function(kh, rl, xhi)
{
	if (rl.constructor === Array)
	{
		rl = rl.map(ic.njm);
	}
	else {
		rl = ic.njm(rl);
	}

	kh = ic.gw(kh, rl);

	return new RegExp(kh, xhi);
}

ic.arb = new function()
{
	const kj = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const lrk = (zdn) => new Date(zdn).getTime() / 1000;

	return (zdn) =>
	{
		const fwb = ic.ou() - lrk(zdn);

		for (let [hvz, mry] of kj)
		{
			let usb = fwb / mry;

			if (usb >= 1)
			{
				usb = Math.floor(usb);

				return ic.gw('%s %s%s ago', [usb, hvz, (usb > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

ic.zcz = function(pe)
{
	return pe.reduce((a, b) => a + b, 0);
}

ic.faf = function(pe)
{
	return ic.gkg(ic.zcz(pe), pe.length);
}

ic.gkg = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const mrj = {
	rfu(ik, axu, ntv)
	{
		return this.qnh('GET', ik, axu, null, ntv);
	},

	nen(ik, axu, bq, ntv)
	{
		return this.qnh('POST', ik, axu, bq, ntv);
	},

	qnh(fo, ik, axu, bq, ntv)
	{
		if (axu)
		{
			ik = ic.aw(ik, axu);
		}

		if (bq)
		{
			bq = this.uvu(bq);
		}

		return new Promise(qr =>
		{
			let cm = new XMLHttpRequest;

			if (ntv != Infinity)
			{
				let hdo = 0;

				cm.ontimeout = (e) =>
				{
					if (++hdo < 3)
					{
						return this.des(cm, fo, ik, bq);
					}

					cm.onerror(e);
				}

				cm.timeout = 5000;
			}

			cm.onload = cm.onerror = (e) => qr(
				new kw(cm, e.type)
			);

			this.des(cm, fo, ik, bq);
		});
	},

	des(cm, fo, ik, bq)
	{
		cm.open(fo, ik);
		cm.send(bq);
	},

	uvu(bn)
	{
		let djr = new FormData;

		for (let qv in bn)
		{
			djr.append(qv, bn[qv]);
		}

		return djr;
	}
}

class vav
{
	constructor(kfv)
	{
		this.map = {};

		this.vta = Object.getOwnPropertyNames(Object.prototype);

		this.nxp = kfv;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(qv)
	{
		qv = this.aqx(qv);

		return this.cqw(this.map[qv]);
	}

	set(qv, lv)
	{
		qv = this.aqx(qv);

		this.map[qv] = this.cqw(lv);
	}

	eoy(qv)
	{
		return this.aqx(qv) in this.map;
	}

	osh(qv)
	{
		!this.eoy(qv) && this.set(qv);
	}

	aqx(qv)
	{
		if (this.vta.includes(qv))
		{
			return qv + '*';
		}

		return qv;
	}

	cqw(lv)
	{
		if (lv == undefined && this.nxp)
		{
			return new this.nxp;
		}

		return lv;
	}
}

class bud
{
	constructor(riw, vfv)
	{
		this.zy = riw.zy;

		this.ayr = riw.ayr;

		this.vfv = vfv;

		this.glc = [];

		this.qkt = new pb;

		this.bpr(riw);
	}

	bpr(lr)
	{
		if (this.ayr == lr.ayr)
		{
			lr.lxz = true;
		}

		this.qkt.push(lr.ayr);

		this.glc.push(lr);
	}

	olx(zy)
	{
		return this.qkt.includes(zy);
	}

	zai()
	{
		this.vqf.forEach(kcb => kcb.hidden = true);
	}

	tjs(xv, od)
	{
		let jid = xv;

		while (jid.bmt)
		{
			jid = jid.bmt;
		}

		this.azn(jid, od);

		xv.so(od);
	}

	azn(a, b)
	{
		const qt = this.glc.indexOf(b);
		const xl = this.glc.indexOf(a) + 1;

		ic.nwn(qt, xl, this.glc);
	}

	get length()
	{
		return this.glc.length;
	}

	get cxi()
	{
		return this.qkt.length;
	}

	get riw()
	{
		return this.glc[0];
	}

	get rkd()
	{
		return this.glc[1];
	}

	get usp()
	{
		return this.length > 1;
	}

	get vqf()
	{
		return this.glc.slice(1);
	}

	get mql()
	{
		return this.glc.length - 1;
	}

	get hidden()
	{
		return this.riw.hidden;
	}

	set hidden(lf)
	{
		this.riw.hidden = lf;
	}

	get qj()
	{
		const qj = ic.sgs(this, true);

		qj.glc = this.glc.map(ic.sgs);

		return qj;
	}
}

class miu
{
	constructor(bqv)
	{
		this.sp = miu.lyj(bqv);
		this.wn = miu.hzi(this.sp);
	}

	static hzi(sp)
	{
		return ['he','ar'].includes(sp) ? 'rtl' : 'ltr';
	}

	static lyj(xq)
	{
		let opr = .57 * ic.fbr(xq);

		switch (true)
		{
			case opr < ic.ykp(ys[13], xq): return 'en';

			case opr < ic.ykp(ys[14], xq): return 'ar';

			case opr < ic.ykp(ys[15], xq): return 'he';

			default: return '';
		}
	}

	static get aca()
	{
		if (!this.zdt)
		{
			this.zdt = navigator.languages.map(sp => sp.slice(0, 2));
		}

		return this.zdt;
	}
}

class coq
{
	constructor(jpg)
	{
		const _ = jpg.items[0];

		this.meq = _.snippet.channelId;
		this.hj = _.statistics.commentCount;

		if (this.hj == undefined)
		{
			this.hj = -1;
		}
		else {
			this.hj = +this.hj;
		}
	}
}

class fmz
{
	constructor(jpg)
	{
		const _ = jpg.snippet;

		this.zy = jpg.id;
		this.mb = _.videoId;
		this.ayr = _.authorChannelId.value;
		this.sd = _.authorProfileImageUrl;
		this.rdv = _.authorDisplayName;
		this.bve = _.textOriginal;
		this.lfu = _.publishedAt;
		this.ogf = _.likeCount;
		this.lxz = false;
		this.sg = false;
	}
}

class cly
{
	constructor(fmz)
	{
		Object.assign(this, fmz);

		this.xad = '';
		this.waw = '';
		this.gr = {};
		this.children = [];
		this.xv = null;
		this.sor = null;
		this.kgj = null;
		this.hcb = null;
		this.hidden = false;

		this.ezp();
		this.xjk();
		this.kfx();
		this.hgo();
		this.niq();
	}

	ezp()
	{
		this.xad = this.bve.replace(ys[16], '');

		delete this.bve;
	}

	niq()
	{
		this.waw = yuj.okb(this.xad);

		this.hcb = new miu(this.waw);

		if (this.hcb.sp == 'en')
		{
			this.waw = yuj.pkb(this.waw);
		}
	}

	xjk()
	{
		if (!this.xad.includes('/'))
			return;

		this.xad = this.xad.replace(ys[17], (ik) =>
		{
			let x;

			const uvn = yel.tbc(ik);

			if (uvn) {
				if (uvn.mb == this.mb)
				{
					x = new vn(this.mb, uvn.ze);
				}
				else {
					x = new nv(uvn);
				}
			}
			else {
				x = new kjy(ik);
			}

			return this.oyd(x);
		});
	}

	kfx()
	{
		if (!this.xad.includes('#'))
			return;

		this.xad = this.xad.replace(ys[18], (fmb) =>
		{
			const x = new xhy(fmb);

			return this.oyd(x);
		});
	}

	hgo()
	{
		if (!this.xad.includes(':'))
			return;

		this.xad = this.xad.replace(ys[19], (yi) =>
		{
			const x = new vn(this.mb, yi);

			return this.oyd(x);
		});
	}

	oyd(nz)
	{
		this.gr[nz.zy] = nz;

		return nz.zy;
	}

	ho()
	{
		this.hidden = true;

		for (let od of this.children)
		{
			od.ho();
		}
	}

	so(od)
	{
		this.children.push(od);

		od.xv = this;
	}

	get bmt()
	{
		return ic.pa(this.children);
	}

	get inw()
	{
		return this.children.some(od => !od.hidden);
	}
}

class vbu
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.ja = x.ja;
		this.gr = x.gr;
		this.mb = x.mb;
		this.zy = x.zy;
		this.eo = ic.hk(x.xv, 'zy');
		this.ayr = x.ayr;
		this.sd = x.sd;
		this.ail = x.ail;
		this.jx = x.jx;
		this.lfu = x.lfu;
		this.lxz = x.lxz;
		this.sg = x.sg;
		this.sp = x.hcb.sp;
		this.wn = x.hcb.wn;
		this.xmp = '';
		this.uyu = '';

		this.lfu = ic.arb(this.lfu);

		this.xmp = ic.gw('https://www.youtube.com/channel/%s', this.ayr);

		this.uyu = ic.gw('https://www.youtube.com/watch?v=%s&lc=%s', [this.mb, this.zy]);
	}
}

class kzx
{
	constructor(as, ju)
	{
		this.zy = ic.zv();

		this.as = as;

		this.ju = ju;
	}
}

class vn extends kzx
{
	constructor(mb, t)
	{
		super(null, 'vn');

		let as, fr;

		if (ic.mn(t))
		{
			as = ic.wt(t);
			fr = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			as = t;
			fr = ic.dz(t);
		}

		this.mb = mb;
		this.ze = fr;
		this.as = as;
	}
}

class nv extends kzx
{
	constructor(bn)
	{
		super('youtube.com', 'nv');

		this.mb = bn.mb;
		this.ze = bn.ze;
	}
}

class kjy extends kzx
{
	constructor(ik)
	{
		super('', 'xc');

		this.ik = ik;

		this.pfk = ik.startsWith('https');

		this.as = yel.fsd(ik) || ik;
	}
}

class xhy extends kzx
{
	constructor(zfi)
	{
		super(zfi, 'xc');

		this.ik = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(zfi);
	}
}

class siv extends kzx
{
	constructor(ykw, meq)
	{
		super(ykw, 'xc');

		this.ik = 'https://www.youtube.com/channel/' + meq;
	}
}

class gco
{
	constructor(xq)
	{
		this.dtr = '';
		this.ync = '';
		this.roy = [];
		this.ona = false;
		this.ycq = false;

		this.okb(xq);
		this.thv();
		this.ier();
	}

	get zbc()
	{
		return this.dtr;
	}

	get length()
	{
		return this.dtr.length;
	}

	get bau()
	{
		return ic.wix(this.ync);
	}

	toLowerCase()
	{
		this.dtr = this.dtr.toLowerCase();
	}

	edv(hug)
	{
		return this.roy.includes(hug);
	}

	las(ltk)
	{
		for (let hug of ltk)
		{
			if (this.edv(hug)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.dtr[this.length + i] : this.dtr[i];
	}

	azx(n)
	{
		this.dtr = this.dtr.slice(0, -n);
	}

	replace(pr, hw)
	{
		this.dtr = this.dtr.replace(pr, hw);
	}

	okb(xq)
	{
		this.dtr = ic.tmi(xq, 'jre');

		this.replace(ys[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(ys[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (ic.nsg(x))
				{
					return m.length > 3 && !ys[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	thv()
	{
		let uoi = ic.rzj([...this.dtr]).join('');

		this.ync = uoi.slice(0, 16);

		this.roy = ic.sw(ys[23], uoi);

		this.ona = this.roy.some(this.bnl);
	}

	ier()
	{
		if (!this.ona) return;

		for (let i = 0, k = 0, n = this.roy.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.roy[i] + this.roy[k];

				this.replace(ic.eas('(%s)+', x, 'g'), x);
			}
		}
	}

	bnl(hug)
	{
		return hug.charCodeAt(0) > 255;
	}

	oug(hug)
	{
		return hug == '\u{200D}';
	}
}

class zfv
{
	constructor(zr)
	{
		zr.sort(ic.tn);

		const mdv = zr.slice(0, Math.floor(zr.length / 2));
		const awl = zr.slice(Math.round(zr.length / 2));

		this.ghv = ic.yd(mdv);
		this.ydp = ic.yd(awl);
		this.ort = this.ydp - this.ghv;

		this.zr = zr;
	}

	ikf(n)
	{
		const ae = this.ghv - 1.5 * this.ort;
		const yw = this.ydp + 1.5 * this.ort;

		return n < ae || yw < n;
	}

	yhw()
	{
		return this.zr.filter(
			n => !this.ikf(n)
		);
	}
}

class to
{
	constructor()
	{
		this.zy = chrome.runtime.id;

		this.grs = chrome.runtime.getManifest().version;

		this.hm = new Promise(qr => this.duw = qr);

		this.hm.then(
			_ => this.xe()
		);

		this.le();

		chrome.runtime.onInstalled.addListener(
			uvn => this.ceu(uvn)
		);

		chrome.browserAction.onClicked.addListener(
			_ => ckz.lbo('ye')
		);

		chrome.alarms.onAlarm.addListener(
			uvn => this.ura('vfd', uvn)
		);

		chrome.runtime.onMessageExternal.addListener(
			ob => this.ura('byp', ob)
		);
	}

	async le()
	{
		if (await this.kjv == this.grs)
		{
			const xa = await zc.get(['0', '1']);

			this.dty = new la(xa[0], 0);

			id = new dg(xa[1], 1);

			this.duw(1);
		}
	}

	async kl()
	{
		const vut = await this.jy('/html/view.html');

		const qc = (
			this.grs < this.emo
		);

		const yb = (
			!id.wy || !id.xp
		);

		return {
			lf: {
				qc, yb
			},
			ap: vut
		};
	}

	async el(mr)
	{
		if (ys[24].test(mr))
		{
			const qya = await oj.sy.prh(mr);

			if (qya)
			{
				const unz = await oj.td.klb(mr);

				if (unz)
				{
					id.sa(unz).then(
						_ => aj.jd('oy')
					);

					return true;
				}
			}
		}

		return false;
	}

	nxv(dek)
	{
		id.si = dek;

		aj.jd('zt');
	}

	ay(bc)
	{
		let mr = id.mr;

		if (mr)
		{
			if (bc)
			{
				mr = ic.faz(19, mr);

				id.mr = mr;
			}

			oj.sy.fyn(mr);
		}
	}

	async jy(ed)
	{
		const slz = await mrj.rfu(chrome.runtime.getURL(ed));

		return slz.tc;
	}

	async osm(uvn)
	{
		this.xth();

		if (uvn.reason == 'install')
		{
			await this.mca();
		}
		else {
			if (uvn.previousVersion < '')
			{

			}
		}

		await this.nin();

		await this.le();
	}

	async ceu(uvn)
	{
		await this.osm(uvn);

		switch (uvn.reason)
		{
			case 'install':
				this.gpt();
				break;

			case 'update':
				this.rmo();
				break;
		}

		ckz.pqr();
	}

	gpt()
	{

	}

	rmo()
	{

	}

	async ura(juk, tc)
	{
		await this.hm;

		switch (juk)
		{
			case 'vfd':
				return this.jch(tc);

			case 'byp':
				return this.fxk(tc);
		}
	}

	jch(vfd)
	{
		const htc = vfd.name;

		switch (htc)
		{
			case 'pzf':
				this.pzf();
		}
	}

	fxk(ob)
	{
		return new dhc().du(ob);
	}

	xe()
	{
		this.ay(
			id.wy && (ic.vt() || !id.vb)
		);
	}

	get kjv()
	{
		return zc.get('schemaVersion');
	}

	nin()
	{
		return zc.set('schemaVersion', this.grs);
	}

	get emo()
	{
		return this.dty.latestVersion;
	}

	udx(v)
	{
		this.dty.set('latestVersion', v);
	}

	mca()
	{
		return zc.set({
			0: {
				latestVersion: this.grs
			},
			1: {},
		});
	}

	xth()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('pzf', {periodInMinutes:240});
	}

	async pzf()
	{
		const v = await oj.td.odg();

		if (v)
		{
			this.udx(v);
		}
	}
}

class dhc
{
	du(ob)
	{
		ob = ic.whf(ob);

		switch (ob.issuer)
		{
			case 'authServer':
				return this.lbe(ob.data);
		}
	}

	lbe(tc)
	{
		if (tc.id == 'pa')
		{
			ow.nxv(tc.token);
		}
	}
}

class vxn
{
	constructor()
	{
		this.td = new njq;

		this.sy = new fzu;
	}
}

class njq
{
	constructor()
	{
		this.khv = 'https://api.lett.app/cs';
	}

	async klb(mr)
	{
		const slz = await this.get('/auth', {apiKey:mr});

		if (slz.ck)
		{
			return slz.tc;
		}
	}

	async odg()
	{
		const slz = await this.get('/update');

		if (slz.ck)
		{
			return slz.tc.version;
		}
	}

	async bm(ar)
	{
		const bn = {
			extId:ow.zy,
			apiKey:id.mr,
			amount:ar,
		};

		const slz = await this.get('https://api.lett.app/donate/accept', bn, Infinity);

		if (slz.ck)
		{
			return slz.tc.url;
		}
	}

	async get(chr, bn, ntv)
	{
		if (chr[0] == '/')
		{
			chr = this.khv + chr;
		}

		const slz = await mrj.rfu(chr, bn, ntv);

		if (!slz.ck && !slz.uv)
		{
			slz.aq(slz.tc.error);
		}

		return slz;
	}
}

class och
{
	constructor()
	{
		this.khv = 'https://www.googleapis.com/youtube/v3';
	}

	fyn(mr)
	{
		this.qv = mr;
	}

	async prh(mr)
	{
		this.fyn(mr);

		const slz = await this.aef('jNQXAC9IVRw');

		return slz.ck;
	}

	vum(mb)
	{
		return this.jp({
			videoId:mb
		});
	}

	gzw(mb, jem)
	{
		return this.nl({
			videoId:mb,
			searchTerms:jem
		});
	}

	kmw(meq, jem)
	{
		return this.nl({
			allThreadsRelatedToChannelId:meq,
			searchTerms:jem
		});
	}

	async aef(mb)
	{
		const slz = await this.fcx({
			id:mb,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (slz.ck)
		{
			try {
				slz.tc = new coq(slz.tc);
			}
			catch (e) {
				slz.aq('se');
			}
		}

		return slz;
	}

	async get(chr, bn)
	{
		const slz = await mrj.rfu(this.khv + chr, bn);

		if (!slz.ck && !slz.uv)
		{
			const jmx = this.jsw(slz.tc);

			slz.aq(jmx);
		}

		return slz;
	}

	async nl(bn)
	{
		const slz = await this.get('/commentThreads', bn);

		if (slz.ck)
		{
			slz.tc = this.bqk(slz.tc);
		}

		return slz;
	}

	async jp(bn)
	{
		let slz, vh = [];

		do {
			slz = await this.get('/commentThreads', bn);

			if (slz.ck)
			{
				const wnm = this.bqk(slz.tc);

				vh.push(wnm);

				bn.pageToken = slz.tc.nextPageToken;
			}
		}
		while (slz.ck && bn.pageToken)

		slz.tc = vh.flat();

		return slz;
	}

	fcx(bn)
	{
		return this.get('/videos', bn);
	}

	dzx(kxs)
	{
		try {
			return new fmz(kxs);
		}
		catch (e) {
			return null;
		}
	}

	jin(kxs)
	{
		let vqf = [];

		try {
			if (kxs.replies) {
				vqf = kxs.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return vqf;
	}

	jsw(ont)
	{
		try {
			return ont.error.errors[0].reason;
		}
		catch (e) {
			return ont.ep || 'kg';
		}
	}

	bqk(kxs)
	{
		const wnm = [];

		try {
			for (let nz of kxs.items)
			{
				const qp = this.ipj(nz);

				if (qp) {
					wnm.push(qp);
				}
			}
		}
		catch (e) {
		}

		return wnm;
	}

	ipj(kxs)
	{
		try {
			const zci = kxs.snippet;

			if (zci.videoId)
			{
				let lr = this.dzx(zci.topLevelComment);

				if (lr)
				{
					const qp = new bud(lr, zci.totalReplyCount);

					if (qp.vfv <= 5)
					{
						for (let kcb of this.jin(kxs))
						{
							lr = this.dzx(kcb);

							if (lr) {
								qp.bpr(lr);
							}
						}
					}

					return qp;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class fzu extends och
{
	jp(bn)
	{
		this.xkr(bn);

		return super.jp(bn);
	}

	nl(bn)
	{
		this.xkr(bn);

		return super.nl(bn);
	}

	async get(chr, bn)
	{
		bn.key = this.qv;

		let slz, i = 3;

		while (i--)
		{
			slz = await super.get(chr, bn);

			if (slz.ep != 'processingFailure')
				break;
		}

		return slz;
	}

	xkr(bn)
	{
		Object.assign(bn, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class yel
{
	static tbc(ik)
	{
		const mb = ic.wm(ys[25], ik);

		if (mb)
		{
			let ze = ic.wm(ys[26], ik) || 0;

			if (!ic.mn(ze))
			{
				ze = ic.sw(ys[27], ze).join(':');

				ze = ic.dz(ze);
			}

			return {mb, ze};
		}
	}

	static fsd(ik)
	{
		return ic.wm(ys[28], ik).replace('www.', '');
	}
}

class uwm
{
	async lbo(xd)
	{
		const dvn = await this.imr();

		if (dvn && dvn.url)
		{
			this.ne(dvn.id, 'xd', xd);
		}
	}

	pqr()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, ckz =>
		{
			for (let dvn of ckz)
			{
				chrome.tabs.reload(dvn.id);
			}
		});
	}

	imr()
	{
		return new Promise(qr =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, ckz =>
			{
				qr(ckz[0]);
			});
		});
	}

	ne(sjq, uz, tc)
	{
		chrome.tabs.sendMessage(sjq, new lb(uz, tc));
	}
}

class rmz
{
	constructor(or, sfe)
	{
		this.zy = sfe.mb;

		this.sfe = sfe;

		this.ukv = new rkm(or);

		this.vh = {};

		for (let rbz of ['xdu', 'kng'])
		{
			this[rbz] = new vav(Array);
		}

		for (let rbz of ['cms', 'dym', 'uyq'])
		{
			this[rbz] = [];
		}

		for (let qp of or)
		{
			this.fk(qp);
			this.swm(qp);
		}
	}

	cop(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.txk();

			case ':all':
				return this.vgn();

			case ':creator':
				return this.weg();

			case ':link':
				return this.vbr();

			case ':reply':
				return this.zqk();
		}

		if (ys[29].test(q))
		{
			const qi = this.tkm(q);

			switch (qi.length)
			{
				case 1: return this.wtl(qi[0]);

				case 2: return this.qdg(qi[0], qi[1]);
			}
		}

		return this.egt(q);
	}

	vgn()
	{
		return this.mse(
			Object.keys(this.vh)
		);
	}

	txk()
	{
		return this.mse(this.kng.values);
	}

	weg()
	{
		return this.mse(this.cms);
	}

	vbr()
	{
		return this.mse(this.uyq);
	}

	zqk()
	{
		return this.mse(this.dym);
	}

	qdg(gk, mqn)
	{
		const tyx = ic.dz(gk);
		const owg = ic.dz(mqn);

		const ags = [];

		for (let qi of this.kng.keys)
		{
			if (tyx <= qi && qi <= owg)
			{
				ags.push(
					this.kng.get(qi)
				);
			}

			if (owg < qi) break;
		}

		return this.mse(ags);
	}

	fk(nz)
	{
		this.vh[nz.zy] = nz;
	}

	sqn(zy)
	{
		return this.vh[zy].qj;
	}

	mse(ags)
	{
		ags = ags.flat();

		return ic.rzj(ags).map(
			zy => this.sqn(zy)
		);
	}

	egt(xq)
	{
		let aou = [];

		let yh = this.jwh(xq);

		let ags = yh.map(
			k => this.select('xdu', k)
		);

		ags = ags.filter(x => x.length);

		if (ags.length)
		{
			aou = ic.lrg(...ags);

			if (aou.length < 1)
			{
				ags.sort((a, b) => a.length - b.length);

				aou = ags[0];
			}
		}

		return this.mse(aou);
	}

	wtl(yi)
	{
		let je = ic.dz(yi);

		let ags = [
			this.select('kng', je)
		];

		for (let i = je; i--;)
		{
			let x = this.select('kng', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			ags.push(x);
		}

		for (let i = je; i++;)
		{
			let x = this.select('kng', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			ags.push(x);
		}

		return this.mse(ags);
	}

	swm(qp)
	{
		const as = qp.glc.map(lr => lr.bve).join(' ');

		this.xjk(as, qp.zy);

		this.xgu(as, qp.zy);

		this.cyh(as, qp.zy);

		this.jin(qp);
	}

	jin(qp)
	{
		if (qp.length > 1)
		{
			this.dym.push(qp.zy);
		}

		if (qp.olx(this.sfe.meq))
		{
			this.cms.push(qp.zy);
		}
	}

	xjk(as, zy)
	{
		as.includes('http') && this.uyq.push(zy);
	}

	xgu(as, zy)
	{
		const jvy = this.tkm(as);

		for (let qi of jvy)
		{
			qi = ic.dz(qi);

			if (0 <= qi && qi < this.sfe.jz)
			{
				this.hka('kng', qi, zy);
			}
		}
	}

	cyh(as, zy)
	{
		this.jwh(as).forEach(
			ur => this.hka('xdu', ur, zy)
		);
	}

	hka(rbz, qv, lv)
	{
		this[rbz].osh(qv);

		this[rbz].get(qv).push(lv);
	}

	select(rbz, qv)
	{
		return this[rbz].get(qv);
	}

	jwh(xq)
	{
		xq = yuj.okb(xq);

		xq = yuj.pkb(xq);

		xq = ic.vbp(xq);

		return ic.rzj(xq);
	}

	tkm(xq)
	{
		return ic.sw(ys[30], xq);
	}
}

class rkm
{
	constructor(or)
	{
		this.ukv = {};

		this.pwn = {};

		this.enw = {};

		for (let qp of or)
		{
			this.xvu(qp);
		}

		this.lxw();
	}

	lse(nfp)
	{
		return this.pwn.cop(nfp);
	}

	abm(zy)
	{
		return this.ukv[zy];
	}

	xvu(qp)
	{
		for (let lr of qp.glc)
		{
			this.trt(lr.ayr, lr.bve);
			this.fnf(lr.ayr, lr.rdv);
		}
	}

	lxw()
	{
		this.pwn = new wfi(this.pwn);

		for (let zy in this.enw)
		{
			const enw = this.enw[zy];

			if (enw.length > 1)
			{
				const lfx = enw.filter(
					(as, i) => as.length < 28 || i == enw.indexOf(as)
				);

				this.abm(zy).zoy = (enw.length != lfx.length);
			}
		}
	}

	fnf(zy, lof)
	{
		let sor = new brh(zy, lof);

		this.ukv[zy] = sor;

		this.pwn[lof] = sor;
	}

	trt(zy, as)
	{
		this.enw[zy] = this.enw[zy] || [];

		this.enw[zy].push(as);
	}
}

class brh
{
	constructor(zy, lof)
	{
		this.zy = zy;
		this.lof = lof;
		this.zoy = false;
		this.jyn = false;
	}

	get ail()
	{
		return this.jyn ? this.lof : this.ajo;
	}

	get hjk()
	{
		return !this.jyn && this.zoy;
	}

	get ajo()
	{
		if (!this.txu)
		{
			this.txu = exr.wjg(this.lof);
		}

		return this.txu;
	}
}

class wfi
{
	constructor(qm)
	{
		this.keys = Object.keys(qm).sort(this.euv);

		this.oio = this.keys.map(qv => qm[qv]);

		this.keys = this.keys.map(ic.xn);
	}

	cop(sew)
	{
		sew = sew.toLowerCase();

		let vh = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(sew))
			{
				do {
					vh.push(this.oio[i])
				}
				while (++i < n && this.keys[i].startsWith(sew));

				break;
			}
		}

		return vh.sort(this.urz);
	}

	urz(a, b)
	{
		return b.lof.length - a.lof.length;
	}

	euv(a, b)
	{
		return a.localeCompare(b);
	}
}

const iye = {
	pgz: {
		byj(ijo, zrd = 0)
		{
			return +ijo || zrd;
		},

		mql(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		leq(n)
		{
			return ic.gkg(1, n);
		},
	},

	swm(or, tqv, sfe)
	{
		this.tsm = sfe.meq;

		this.cop = sfe.cop;

		this.nce = new hnr;

		this.kng = new gev;

		this.xwi = new qnz;

		this.qbd = {};

		ic.ag(
			tqv.abm(this.tsm), 'jyn', true
		);

		return this.thv(or, tqv);
	},

	thv(or, tqv)
	{
		const tca = ('you are not but for the thi and that was').split(' ');

		const shz = {
			mql: this.pgz.mql,
			qtz: this.pgz.leq,
			byj: this.pgz.byj,
		};

		const qiw = {
			vcn: 1
		};

		const pfl = {
			xdu: .5,
			qtz: .2,
			gfv: .2,
			ami: .0,
		};

		if (this.cop.xrq)
		{
			Object.assign(pfl, {
				ami:.3,
			});
		}

		let ags = [];

		or = or.filter(
			qp => !ags.includes(qp.ayr) && ags.push(qp.ayr)
		);

		for (let qp of or)
		{
			Object.assign(qp,
			{
				ge: {
					kng: [],
					yh: [],
					xhf: 0,
					kxp: 0,
					jao: false,
					gfv: false,
				},
				rhc: {
					xdu: 0,
					qtz: 0,
					gfv: 0,
					ami: 0,
					mzf: 0,
				},
			});

			const ge = qp.ge;

			for (let i = 0; i < qp.length; i++)
			{
				const lr = qp.glc[i] = new cly(qp.glc[i]);

				lr.sor = tqv.abm(lr.ayr);

				lr.sg = this.sg(lr.ayr);

				if (i > 0)
				{
					lr.ja = true;

					if (lr.lxz && qp.cxi > 1)
					{
						ge.jao = true
					}

					if (lr.sg)
					{
						ge.gfv = true;
					}
				}

				if (lr.waw == '' || lr.sor.hjk)
				{
					!lr.sor.jyn && lr.ho();
				}
			}

			const riw = qp.riw;

			if (this.rvp(riw.xad))
			{
				qp.hidden = true;

				continue;
			}

			ge.yh = ic.vbp(riw.waw);
			ge.xhf = ge.yh.length;
			ge.yh = ic.rzj(ge.yh);
			ge.kxp = ge.yh.length;

			for (let x in riw.gr)
			{
				x = riw.gr[x];

				if (x.zy == riw.xad)
				{
					qp.hidden = true;
				}

				if (x instanceof vn)
				{
					ge.kng.push(x.ze);

					ic.hsj(x.zy, this.kng.sfb(x.ze), ge.yh);
				}
			}

			for (let ur of ge.yh)
			{
				if (ur.length > 2 && !tca.includes(ur))
				{
					this.nce.awo(ur);
				}
			}
		}

		for (let qp of or)
		{
			if (qp.hidden)
				continue;

			const rhc = qp.rhc;

			for (let ur of qp.ge.yh)
			{
				rhc.xdu += this.nce.get(ur);
			}

			rhc.xdu /= qp.ge.xhf;

			rhc.qtz = qp.ge.kng.length;

			qiw.vcn = Math.max(qiw.vcn, rhc.xdu);
		}

		for (let qp of or)
		{
			const rhc = qp.rhc;

			rhc.xdu = pfl.xdu * ic.gkg(rhc.xdu, qiw.vcn);
			rhc.qtz = pfl.qtz * shz.qtz(rhc.qtz);
			rhc.gfv = pfl.gfv * shz.byj(qp.ge.gfv);
			rhc.ami = pfl.ami * shz.byj(qp.ge.jao, .5);

			rhc.mzf = ic.zcz(Object.values(rhc));
		}

		or.sort(
			(a, b) => b.rhc.mzf - a.rhc.mzf
		);

		for (let i = 0, n = or.length; i < n; i++)
		{
			const a = or[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = or[k];

				if (!b.hidden && !b.usp)
				{
					const tsa = ic.lrg(a.ge.yh, b.ge.yh);
					const ljm = (a.ge.yh.length + b.ge.yh.length) / 2;

					if (tsa.length == b.ge.xhf)
					{
						b.hidden = true;
					}

					if (tsa.length >= .5 * ljm)
					{
						const owg = a.ge.kng[0] || 0;
						const nfv = b.ge.kng[0] || 0;

						if (this.kng.cxs(owg, nfv))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < or.length; i++)
		{
			const qp = or[i];

			if (qp.xew)
				break;

			let kjz = false;

			if (qp.ge.kxp == 1)
			{
				kjz = true;
			}

			if (i == 0 && !qp.usp)
			{
				const idh = this.cop.xq.toLowerCase();
				const ikd = qp.riw.waw;

				if (idh == ikd)
				{
					kjz = true;
				}
			}

			if (qp.usp && qp.cxi == 1)
			{
				const tyx = new Date(qp.riw.lfu);
				const owg = new Date(qp.rkd.lfu);

				if (.001 * (owg - tyx) < 300)
				{
					kjz = true;
				}
			}

			if (kjz)
			{
				ic.ixp(i, or);

				qp.xew = true;
				i--;
			}
		}

		for (let qp of or)
		{
			this.xwi.ayn(qp.zy, qp.ayr);

			for (let ayr of qp.qkt)
			{
				this.xwi.noa(ayr, qp.zy)
			}
		}

		for (let qp of or)
		{
			if (qp.mql == 0) continue;

			for (let kcb of qp.vqf)
			{
				const as = kcb.xad;

				const ltp = ic.wm(ys[31], as);

				for (let sor of tqv.lse(ltp))
				{
					if (this.cgk(sor).test(as))
					{
						kcb.kgj = sor;
						break;
					}
				}
			}

			if (qp.length > 2)
			{
				let ukv = [], vh = [], sei = false;

				const n = qp.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					if (sei)
					{
						ukv = [];
						vh = [];
						sei = false;
					}

					const kcb = qp.glc[i];
					const id = kcb.sor;

					if (ic.pa(ukv) == id) {
						i++;
					}
					else if (ukv.includes(id) || ic.rzj(ukv).length < 2)
					{
						ukv.push(id);
						vh.push(kcb);

						if (i + 1 < n)
							continue;
					}

					if (vh.length > 2)
					{
						let qya = !vh.some(kcb => kcb.kgj && !ukv.includes(kcb.kgj));

						if (qya)
						{
							vh.forEach(kcb =>
								kcb.kgj = ukv.find(sor => sor != kcb.sor)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						sei = true;
					}
				}
			}

			for (let jvu, i = 1; i < qp.length; i++)
			{
				const kcb = qp.glc[i];

				if (!kcb.kgj)
				{
					if (jvu && jvu.kgj == kcb.sor)
					{
						kcb.kgj = jvu.sor;

						qp.tjs(jvu, kcb);
					}
				}
				else {
					let kek;

					const khy = kcb.kgj;

					for (let k = i - 1; k >= 0; k--)
					{
						const jvu = qp.glc[k];

						if (k == 0)
						{
							if (jvu.sor == khy)
							{
								kek = '';
							}

							break;
						}

						if (jvu.sor == khy)
						{
							qp.tjs(jvu, kcb);

							if (jvu.children.length == 1)
							{
								kek = '';
							}

							break;
						}
					}

					if (kek == null)
					{
						const gn = new siv(khy.ail, khy.zy);

						kek = kcb.oyd(gn) + ' ';
					}

					kcb.xad = kcb.xad.replace(
						this.cgk(khy), kek
					);
				}

				jvu = kcb;
			}

			for (let i = 1, n = qp.length; i < n; i++)
			{
				const kcb = qp.glc[i];

				if (kcb.xv || kcb.children.length)
				{
					ic.ixp(i, qp.glc);
					i--;
					n--;
				}
			}

			for (let prm = false, i = 1; i < qp.length; i++)
			{
				let kcb = qp.glc[i];

				prm = (prm || !kcb.lxz);

				if (kcb.inw)
				{
					continue;
				}

				if (!prm)
				{
					const as = kcb.xad;

					if (qp.length > 2 || ['+','@'].includes(as[0]) || as.length < 10)
					{
						kcb.ho();
					}
				}

				kcb.kgj && !qp.olx(kcb.kgj.zy) && kcb.ho();

				this.lpq(kcb.ayr, qp.zy) && kcb.ho();
			}
		}

		or = or.map(qp =>
		{
			if (qp.riw.hidden)
			{
				return [];
			}

			const glc = [];

			for (let i = 0; i < qp.length; i++)
			{
				const lr = qp.glc[i];

				lr.jx = exr.wik(lr.xad);

				lr.ail = lr.sor.ail;

				if (lr.jx.length < 2)
				{
					if (i == 0)
						return [];

					lr.ho();
				}

				glc.push(
					new vbu(lr)
				);
			}

			return glc;
		});

		return or.filter(qp => qp.length > 0);
	},

	rvp(xq)
	{
		return xq.length > 500 || ic.ykp(ys[32], xq) > 3;
	},

	sg(ayr)
	{
		return this.tsm == ayr;
	},

	lpq(ayr, ctm)
	{
		if (this.sg(ayr))
		{
			return false;
		}

		for (let ezg of this.xwi.coe(ayr))
		{
			if (ezg == ctm)
			{
				return false;
			}

			if (!this.xwi.rmr(ezg, ayr))
			{
				return true;
			}
		}

		return false;
	},

	cgk(sor)
	{
		const zy = sor.zy;

		if (zy in this.qbd)
		{
			return this.qbd[zy];
		}

		return this.qbd[zy] = ic.eas('^[+@]?%s[-\\s,.:;?!]*', sor.lof, 'i');
	}
};

const exr = {
	wik(ri)
	{
		let xq = new gco(ri);

		xq.bau && xq.toLowerCase();

		if (xq.edv('.'))
		{
			xq.charAt(-1) == '.' && xq.charAt(-2) != '.' && xq.azx(1);

			xq.replace(ys[33], (m) => m.replace(ys[34], ''));
		}

		if (xq.edv('\n'))
		{
			xq.replace(ys[35], function(m, i)
			{
				let x = xq.charAt(i - 1);

				return ic.uwy(x) ? '. ' : ' ';
			});
		}

		if (xq.las('*_'))
		{
			xq.replace(ys[36], '$2');
		}

		if (xq.las('(,!?.)'))
		{
			xq.replace(ys[37], '?!');

			xq.replace(ys[38], '$1');

			xq.replace(ys[39], '$1 $2');

			xq.edv('!') && xq.replace(ys[40], '$1');
		}

		if (xq.las('$£€'))
		{
			xq.replace(ys[41], (_, emy, npb) =>
			{
				ys[42].test(emy) && (emy = Math.round(emy));

				return npb + emy;
			});
		}

		xq.edv(':') && xq.replace(ys[43], ': ');

		xq.edv('&') && xq.replace(ys[44], ' and ');

		xq.edv('"') && xq.replace(ys[45], '" - $1');

		return yok.wzp(xq.zbc);
	},

	wjg(ri)
	{
		return ri.length < 28 && this.bex(ri) || this.odf();
	},

	bex(xq)
	{
		let yh;

		if (!ys[46].test(xq))
		{
			if (ic.isk(xq))
			{
				xq = ic.vsv(xq);
			}

			yh = xq.split(' ');

			if (yh.length == 1)
			{
				return ic.hu(yh[0], 'PRE_CASE');
			}
		}
		else {
			yh = ic.sw(ys[47], xq);
		}

		yh = yh.map(ur =>
		{
			switch (true)
			{
				case ur.length < 2 || ic.mn(ur):
					return '';

				default:
					return ic.hu(ur);
			}
		});

		yh = yh.filter(
			(ur, i) => ur != '' && i == yh.indexOf(ur)
		);

		return yh.join(' ');
	},

	odf()
	{
		return 'user' + ic.kz(4);
	}
};

const yuj = {
	okb(xq)
	{
		xq = xq.toLowerCase();

		xq = xq.replace(ys[48], ' ');

		return ic.tmi(xq);
	},

	pkb(xq)
	{
		return xq.replace(ys[49], '$1');
	}
};

const yok = {
	fjt: {
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

	wzp(xq)
	{
		return xq.replace(ys[50], m => this.get(m));
	},

	get(qv)
	{
		qv = qv.toLowerCase();

		(qv.length == 2) || (qv = qv.slice(0, 2));

		return this.fjt[qv] || qv;
	}
};

class hnr
{
	constructor()
	{
		this.map = {};
	}

	awo(ur)
	{
		this.map[ur] = ++this.map[ur] || 0;
	}

	get(ur)
	{
		return this.map[ur] || 0;
	}
}

class gev
{
	constructor()
	{
		this.map = {};
	}

	sfb(dws)
	{
		for (let jcu in this.map)
		{
			if (this.cxs(dws, jcu))
			{
				return this.map[jcu];
			}
		}

		return this.fvq(dws);
	}

	fvq(qi)
	{
		return this.map[qi] = ic.gw('TS%s', qi);
	}

	cxs(owg, nfv)
	{
		return Math.abs(nfv - owg) < 5;
	}
}

class qnz
{
	constructor()
	{
		this.whv = {};

		this.or = {};
	}

	coe(ayr)
	{
		return this.whv[ayr];
	}

	rmr(ezg, ayr)
	{
		return this.or[ezg] == ayr;
	}

	ayn(ezg, ayr)
	{
		this.or[ezg] = ayr;
	}

	noa(ayr, ezg)
	{
		if (!this.whv[ayr])
		{
			this.whv[ayr] = new pb;
		}

		this.whv[ayr].push(ezg);
	}
}

class px
{
	constructor(tw)
	{
		tw.du = this.du.bind(this);

		this.tw = tw;

		this.ahb = 0;

		this.elq = new Promise(qr => qr(null));

		this.sfe;

		this.mgy = new mgy;

		this.nfo = new rmz([], {});
	}

	async du(ob)
	{
		const mb = ob.tc.mb;

		try {
			const uvn = await this.mgy.tun(mb);

			this.sfe = new men(ob.tc, uvn);
		}
		catch (rp) {
			return this.wxi(rp);
		}

		switch (ob.uz)
		{
			case 'nl':
				return this.szd(mb);

			case 'hj':
				return this.fz(mb);
		}
	}

	wxi(zy)
	{
		this.ohw('ep', {zy});
	}

	fz(mb)
	{
		const n = this.sfe.hj;

		if (0 < n && n < 1000)
		{
			this.txj(mb);
		}

		this.ohw('hj', n);
	}

	async szd(mb)
	{
		if (this.sfe.cop.bdm)
		{
			return this.wxi('ib');
		}

		this.pmo();
	}

	async pmo()
	{
		let r = new ktx(this.jzd);

		try {
			if (this.sfe.cop.smt)
			{
				await this.vjo(r);
			}
			else {
				await this.ouh(r);
			}

			!this.neh(r.zy) && this.ohw('nl', r);
		}
		catch (rp) {
			!this.neh(r.zy) && this.wxi(rp);
		}
	}

	async vjo(ont)
	{
		const slz = await oj.sy.kmw(this.sfe.meq, this.sfe.cop.xq);

		if (slz.ep)
		{
			throw slz.ep;
		}

		const ukv = new rkm(slz.tc);

		const or = iye.swm(slz.tc, ukv, this.sfe);

		ont.rhm(or);
		ont.nqs(-2);
	}

	async ouh(ont)
	{
		const mb = this.sfe.mb;
		const lo = this.sfe.cop.xq;

		const p = ont.nqs(this.sfe.hj);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.sfe.cop.zmi)
		{
			throw 'lg';
		}

		let or, ukv;

		if (p < 1000)
		{
			const rp = await this.txj(mb);

			if (rp)
			{
				throw rp;
			}

			ukv = this.nfo.ukv;

			or = this.nfo.cop(lo);
		}
		else {
			const slz = await oj.sy.gzw(mb, lo);

			if (slz.ep)
			{
				throw slz.ep;
			}

			ukv = new rkm(slz.tc);

			or = slz.tc;
		}

		or = iye.swm(or, ukv, this.sfe);

		ont.rhm(or);
	}

	ohw(uz, tc)
	{
		this.tw.tq(uz, tc);
	}

	async txj(mb)
	{
		await this.elq;

		if (mb != this.nfo.zy)
		{
			this.elq = new Promise(async qr =>
			{
				const slz = await oj.sy.vum(mb);

				if (slz.ck)
				{
					this.nfo = new rmz(slz.tc, this.sfe);
				}

				qr(slz.ep);
			});
		}

		return this.elq;
	}

	get jzd()
	{
		return ++this.ahb;
	}

	neh(yky)
	{
		return yky != this.ahb;
	}
}

class mgy
{
	constructor()
	{
		this.map = {};
	}

	async tun(mb)
	{
		let x = this.map[mb];

		if (x == undefined)
		{
			x = this.pdz(mb);
		}

		if (x instanceof Promise)
		{
			const slz = await x;

			if (slz.ep)
			{
				this.pvw(mb);

				throw slz.ep;
			}

			x = this.adg(mb, slz.tc);
		}

		return x;
	}

	zwp(mb, value)
	{
		return this.map[mb] = value;
	}

	pdz(mb)
	{
		const r = oj.sy.aef(mb);

		return this.zwp(mb, r);
	}

	adg(mb, ngn)
	{
		return this.zwp(mb, ngn);
	}

	pvw(mb)
	{
		this.zwp(mb, undefined);
	}
}

class bzd
{
	constructor(q)
	{
		this.xq = '';
		this.ju = '';
		this.smt = false;
		this.bdm = false;

		this.thv(q);
	}

	get zmi()
	{
		return this.ju == 'vta';
	}

	get xrq()
	{
		return this.ju == 'ocm';
	}

	thv(q)
	{
		const dub = q.replace(ys[51], '');

		if (dub != q)
		{
			this.smt = true;

			if (dub == '')
			{
				this.bdm = true;
			}
		}

		this.xq = dub;
		this.ju = bzd.kbg(dub);
	}

	static kbg(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'vta';

			case (ys[52]).test(q):
				return 'ocm';

			default:
				return '';
		}
	}
}

class men
{
	constructor(oed, kgk)
	{
		Object.assign(this, ...[oed, kgk]);

		this.jz = Math.floor(oed.jz) || Infinity;
		this.vc = Math.floor(oed.vc);

		this.cop = new bzd(oed.lo);
	}
}

class ktx
{
	constructor(yky)
	{
		this.zy = yky;
		this.or = [];
		this.ia = 0;
		this.hr = 0;
	}

	rhm(or)
	{
		this.or = or;
		this.ia = or.length;
	}

	nqs(n)
	{
		return this.hr = n;
	}
}

let id;

const oj = new vxn;
const zc = new it;
const ckz = new uwm;
const ow = new to;
const aj = new pt;
const ps = new xm;

const ys = [
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