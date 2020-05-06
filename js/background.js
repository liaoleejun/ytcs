/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const xb = {};

for (let wg of 'object array string regex date math type std'.split(' '))
{
	xb[wg] = {};
}

xb.et = function(la, ni)
{
	return la != undefined && la.constructor === ni;
}

xb.oy = function()
{
	return xb.nk(9);
}

xb.xz = function(vt)
{
	return ha[0].test(vt);
}

xb.yv = function(tf)
{
	return Object.keys(tf).length == 0;
}

xb.jh = function(yn, tf)
{
	for (let zl in tf)
	{
		const fd = tf[zl];

		if (zl == yn) return fd;
		if (fd == yn) return zl;
	}
}

xb.dh = function(tf, jf)
{
	let vt = '';

	for (let zl in tf)
	{
		vt += zl + '=' + tf[zl] + jf;
	}

	return vt.slice(0, -1);
}

xb.aw = function(bo, kx, oc)
{
	const fq = kx + 1;

	return oc.slice(fq, fq + bo);
}

xb.zr = function(oc)
{
	return oc[oc.length - 1];
}

xb.vc = function(jy, lc)
{
	jy += '?';

	for (let zl in lc)
	{
		jy += zl + '=' + encodeURIComponent(lc[zl]) + '&';
	}

	return jy.slice(0, -1);
}

xb.lq = function(vt, vx)
{
	if (xb.et(vx, Array))
	{
		let i = 0;

		return vt.replace(ha[1], _ => vx[i++]);
	}

	return vt.replace('%s', vx);
}

xb.nz = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

xb.to = function(vt, qg)
{
	const er = xb.lq('(%s)', qg.join('|'));

	return vt.split(new RegExp(er)).filter(s => s !== '');
}

xb.lb = function(vt)
{
	return vt.toUpperCase();
}

xb.kw = function(vt)
{
	return vt.toLowerCase();
}

xb.ki = function(vt, nf)
{
	if (!nf)
	{
		vt = vt.toLowerCase();
	}

	return vt[0].toUpperCase() + vt.slice(1);
}

xb.gb = function(tr, vt)
{
	return vt.match(tr) || [];
}

xb.it = function(tr, vt)
{
	if (tr.global) return '';

	const m = xb.gb(tr, vt);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

xb.lg = function()
{
	return Math.floor(Date.now() / 1000);
}

xb.hb = function(tx)
{
	return tx < xb.lg();
}

xb.ud = function(q)
{
	const id = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = xb.it(ha[2], q);

	return Date.now() + (x[0] * id[x[1]] * 1000);
}

xb.cm = function(mz)
{
	let x = mz.split(':'),
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

xb.sd = function(ws)
{
	let oc = [];

	oc.push(ws / 3600);

	ws %= 3600;

	oc.push(ws / 60);

	oc.push(ws % 60);

	oc = oc.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return oc.join(':').replace(ha[3], '');
}

xb.nk = function(md)
{
	return Math.random().toString().slice(2, md + 2);
}

xb.zn = function(tn, fk)
{
	const tu = Math.random() * (fk - tn) + tn;

	return Math.floor(tu);
}

xb.kq = function(x, a, b)
{
	return x >= a && x <= b;
}

xb.qb = function(a, b)
{
	return 100 * (a / b);
}

xb.nj = function()
{
	let mp, ul = 0;

	try {
		mp = [qw, fl, ot];
	}
	catch (e) {
		mp = [am, ot];
	}

	mp.forEach(
		ip => ul += ip.toString().length
	);

	return ul != 3428;
}

class bt
{
	constructor(sl, oq)
	{
		this.sl = sl;
		this.oq = oq;
	}
}

class cj
{
	constructor(sn, sl, oq)
	{
		this.sn = sn;
		this.ge = new bt(sl, oq);
	}
}

class ef extends Array
{
	constructor(vw)
	{
		super();

		if (vw != null)
		{
			super.push(vw);
		}
	}

	push(wh)
	{
		return !this.includes(wh) && super.push(wh);
	}
}

class fv
{
	constructor(ke, io)
	{
		const ip = ke.status;

		this.ip = ip;
		this.oa = false;
		this.pn = false;
		this.nw = null;
		this.oq = null;

		switch (io)
		{
			case 'error':
				return this.oi('yx');

			case 'timeout':
				return this.oi('rk');

			default:
			{
				this.oa = (ip == 200);

				if (ip >= 500)
				{
					return this.oi('rd');
				}

				try {
					this.oq = JSON.parse(ke.responseText);
				}
				catch (e) {
					this.oq = ke.responseText;
				}
			}
		}
	}

	sm(ia)
	{
		this.nw = ia;
	}

	oi(ia)
	{
		this.sm(ia);

		this.pn = true;
	}
}

class zj
{
	constructor(oq, ka)
	{
		Object.assign(this, oq);

		Object.defineProperty(this, 'ka', {
			value: ka
		});
	}

	set(zl, fd)
	{
		this[zl] = fd;

		this.hw();
	}

	hw()
	{
		return wp.set(this.ka, this);
	}
}

class ot extends zj
{
	constructor(oq, ka)
	{
		super(oq, ka);
	}

	get ye()
	{
		return Boolean(this.hk)
	}

	get hk()
	{
		return this[0];
	}

	get uo()
	{
		return this[1];
	}

	get wf()
	{
		return xb.hb(this.uo);
	}

	get pi()
	{
		const dm = this.uo.toString().split('').pop();

		return Boolean(+dm);
	}

	set hk(zl)
	{
		this.set(0, zl);
	}

	set uo(jm)
	{
		this.set(1, jm);
	}

	get da()
	{
		let s = this.uo.toString(),
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

class bh
{
	constructor(ja)
	{
		if (ja)
		{
			this.tk();
		}
	}

	zf(qi, ky, ci)
	{
	}

	tk()
	{
		chrome.runtime.onMessage.addListener(
			this.zf.bind(this)
		);
	}
}

class oj extends bh
{
	constructor()
	{
		super(false);
	}

	zf(qi, ky, ci)
	{
		const oq = qi.oq;

		switch (qi.sl)
		{
			case 'vq':
				return this.cs(oq);
		}
	}

	cs(vq)
	{
		if (vq == 'ik')
		{
			fi.fq();
		}
	}

	wz()
	{
		return this.sr('wz');
	}

	vb(jp)
	{
		return this.sr('vb', jp);
	}

	gh(hk)
	{
		return this.sr('gh', hk);
	}

	rt()
	{
		return this.sr('rt');
	}

	qf()
	{
		return this.sr('qf');
	}

	sr(sl, oq)
	{
		const qi = new bt(sl, oq);

		return new Promise(ci =>
		{
			try {
				chrome.runtime.sendMessage(qi, ci);
			}
			catch (e) {
			}
		});
	}
}

class fm extends bh
{
	constructor()
	{
		super(true);
	}

	zf(qi, ky, ci)
	{
		const pz = function(...vx)
		{
			try {
				ci(...vx);
			}
			catch (e) {
			}
		};

		fw.yi.then(_ =>
		{
			const oq = qi.oq;

			switch (qi.sl)
			{
				case 'wz':
					fw.wz().then(pz);
				break;

				case 'vb':
					fw.vb(oq).then(pz);
				break;

				case 'gh':
					fw.gh(oq).then(pz);
				break;

				case 'rt':
					kz.mr.rt(oq).then(pz);
				break;

				case 'qf':
					fw.tw();
				break;
			}
		});

		return true;
	}
}

class vd
{
	get(zl)
	{
		return new Promise(du =>
		{
			try {
				chrome.storage.local.get(zl, su =>
					du(typeof zl == 'string' ? su[zl] : su)
				);
			}
			catch (e) {
			}
		});
	}

	set(zl, fd)
	{
		let oq;

		if (typeof zl == 'object')
		{
			oq = zl;
		}
		else {
			oq = {[zl]:fd};
		}

		return new Promise(nt =>
		{
			try {
				chrome.storage.local.set(oq, nt);
			}
			catch (e) {
			}
		});
	}

	uq()
	{
		return new Promise(nt =>
		{
			try {
				chrome.storage.local.clear(nt);
			}
			catch (e) {
			}
		});
	}
}

class rkstz
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			cj => this.dg(cj)
		);

		Port.onDisconnect.addListener(
			_ => this.gl()
		);

		this.Port = Port;

		this.zc = {
		};

		this.zd = false;
	}

	zf(m)
	{
	}

	sf(sn, sl, oq)
	{
		const yu = new cj(sn, sl, oq);

		if (!this.zd)
		{
			this.Port.postMessage(yu);
		}
	}

	dg(x)
	{
		this.nr(x.sn).zf(x.ge);
	}

	nr(sn)
	{
		return this.zc[sn] || this;
	}

	ym(sn, zf, gl)
	{
		return this.zc[sn] = new bs(this, sn, zf, gl);
	}

	gl()
	{
		this.zd = true;

		for (let sn in this.zc)
		{
			this.nr(sn).gl();
		}
	}
}

class qe extends rkstz
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	zf(qi)
	{
		const oq = qi.oq;

		switch (qi.sl)
		{
			case 'ts':
				return vo.cb(oq);
		}
	}

	ym(sn, zf, gl)
	{
		this.sf(null, 'ym', sn);

		return super.ym(sn, zf, gl);
	}

	gl()
	{
		super.gl();

		fi.ux();
	}
}

class je extends rkstz
{
	constructor(gp)
	{
		super(gp);
	}

	zf(qi)
	{
		switch (qi.sl)
		{
			case 'ym':
				return this.ym(qi.oq);
		}
	}

	ym(sn)
	{
		const od = super.ym(sn);

		switch (sn)
		{
			case 'bn':
				return new nv(od);
		}
	}
}

class xd
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			xv => this.gz(xv)
		);

		this.pf = [];
	}

	gz(gp)
	{
		this.pf.push(
			new je(gp)
		);
	}

	jt(pl)
	{
		for (let gp of this.pf)
		{
			gp.sf(null, 'ts', pl);
		}
	}
}

class bs
{
	constructor(gp, sn, zf, gl)
	{
		this.gp = gp;

		this.sn = sn;

		if (zf)
		{
			this.zf = zf;
		}

		if (gl)
		{
			this.gl = gl;
		}
	}

	sf(sl, oq)
	{
		this.gp.sf(this.sn, sl, oq);
	}

	zf(m)
	{
	}

	gl()
	{
	}
}

xb.xjg = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

xb.zdy = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

xb.tun = function(mc, bi)
{
	if (bi)
	{
		const ku = Object.create(
			Object.getPrototypeOf(mc)
		);

		return Object.assign(ku, mc);
	}

	return {...mc};
}

xb.rgy = function(pk, br, oc)
{
	let i = oc.indexOf(pk);

	if (i >= 0)
	{
		oc[i] = br;
	}
}

xb.dtz = function(fz, za, oc)
{
	if (za != fz)
	{
		const wh = oc[fz];
		oc.splice(fz, 1);
		oc.splice(za, 0, wh);
	}
}

xb.ulf = function(fz, oc)
{
	xb.dtz(fz, Infinity, oc);
}

xb.gre = function(...lw)
{
    lw.sort(
    	(a, b) => a.length - b.length
    );

	return lw.shift().filter(wh =>
	{
		for (let cl of lw)
        {
			if (!cl.includes(wh))
				return false;
        }

		return true;
    });
}

xb.syn = function(oc)
{
	return oc.filter((value, mk) => oc.indexOf(value) == mk);
}

xb.blo = function(lp, ty)
{
	return lp.join(ty || '.');
}

xb.mrj = function(vt, ub)
{
	if (ub)
	{
		vt = vt.replace(ha[4], '\n');

		vt = vt.replace(ha[5], ' ');
	}
	else {
		vt = vt.replace(ha[6], ' ');

	}

	return vt.trim();
}

xb.ges = function(vt, er, ci)
{
	return vt.replace(er, (pj, zw) =>
	{
		return pj.replace(zw, ci(zw));
	});
}

xb.yao = function(rv)
{
	return ha[7].test(rv);
}

xb.wdu = function(vt)
{
	return !ha[8].test(vt);
}

xb.cty = function(vt)
{
	return vt.toLowerCase().replace(ha[9], xb.lb);
}

xb.bae = function(vt)
{
	return vt == vt.toUpperCase();
}

xb.lur = function(vt)
{
	return vt == vt.toLowerCase();
}

xb.afy = function(vt)
{
	return xb.lur(vt) || xb.bae(vt);
}

xb.tyl = function(tr, vt)
{
	return xb.gb(tr, vt).length;
}

xb.fpb = function(vt)
{
	return xb.tyl(ha[10], vt) + 1;
}

xb.nmc = function(vt)
{
	return vt ? vt.split(' ') : [];
}

xb.alk = function(i, vt)
{
	return vt.substring(0, i) + 'x' + vt.substring(++i);
}

xb.lwm = function(s)
{
	return String(s).replace(ha[11], '\\$1').replace(ha[12], '\\x08');
}

xb.hgi = function(er, vx, lf)
{
	if (vx.constructor === Array)
	{
		vx = vx.map(xb.lwm);
	}
	else {
		vx = xb.lwm(vx);
	}

	er = xb.lq(er, vx);

	return new RegExp(er, lf);
}

xb.svy = new function()
{
	const id = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const gj = (bk) => new Date(bk).getTime() / 1000;

	return (bk) =>
	{
		const se = xb.lg() - gj(bk);

		for (let [dm, tq] of id)
		{
			let fr = se / tq;

			if (fr >= 1)
			{
				fr = Math.floor(fr);

				return xb.lq('%s %s%s ago', [fr, dm, (fr > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

xb.bvd = function(oc)
{
	return oc.reduce((a, b) => a + b, 0);
}

xb.rza = function(oc)
{
	return xb.gqp(xb.bvd(oc), oc.length);
}

xb.gqp = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const hl = {
	nc(jy, av, li)
	{
		return this.tm('GET', jy, av, null, li);
	},

	ic(jy, av, ge, li)
	{
		return this.tm('POST', jy, av, ge, li);
	},

	tm(ez, jy, av, ge, li)
	{
		if (av)
		{
			jy = xb.vc(jy, av);
		}

		if (ge)
		{
			ge = this.nd(ge);
		}

		return new Promise(du =>
		{
			let ke = new XMLHttpRequest;

			if (li != Infinity)
			{
				let nu = 0;

				ke.ontimeout = (e) =>
				{
					if (++nu < 3)
					{
						return this.bp(ke, ez, jy, ge);
					}

					ke.onerror(e);
				}

				ke.timeout = 5000;
			}

			ke.onload = ke.onerror = (e) => du(
				new fv(ke, e.type)
			);

			this.bp(ke, ez, jy, ge);
		});
	},

	bp(ke, ez, jy, ge)
	{
		ke.open(ez, jy);
		ke.send(ge);
	},

	nd(lc)
	{
		let el = new FormData;

		for (let zl in lc)
		{
			el.append(zl, lc[zl]);
		}

		return el;
	}
}

class bu
{
	constructor(hi)
	{
		this.map = {};

		this.dk = Object.getOwnPropertyNames(Object.prototype);

		this.um = hi;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(zl)
	{
		zl = this.nes(zl);

		return this.mtu(this.map[zl]);
	}

	set(zl, fd)
	{
		zl = this.nes(zl);

		this.map[zl] = this.mtu(fd);
	}

	tzp(zl)
	{
		return this.nes(zl) in this.map;
	}

	qyf(zl)
	{
		!this.tzp(zl) && this.set(zl);
	}

	nes(zl)
	{
		if (this.dk.includes(zl))
		{
			return zl + '*';
		}

		return zl;
	}

	mtu(fd)
	{
		if (fd == undefined && this.um)
		{
			return new this.um;
		}

		return fd;
	}
}

class osd
{
	constructor(asv, mgt)
	{
		this.wq = asv.wq;

		this.mbl = asv.mbl;

		this.mgt = mgt;

		this.xwk = [];

		this.doq = new ef;

		this.mco(asv);
	}

	mco(ln)
	{
		if (this.mbl == ln.mbl)
		{
			ln.spi = true;
		}

		this.doq.push(ln.mbl);

		this.xwk.push(ln);
	}

	uvh(wq)
	{
		return this.doq.includes(wq);
	}

	kuw()
	{
		this.qbt.forEach(dmp => dmp.hidden = true);
	}

	stn(mh, ji)
	{
		this.cby(ji.qoj, mh);

		ji.zq(mh);
	}

	cby(a, b)
	{
		const fz = this.xwk.indexOf(b);
		const za = this.xwk.indexOf(a) + 1;

		xb.dtz(fz, za, this.xwk);
	}

	get length()
	{
		return this.xwk.length;
	}

	get asv()
	{
		return this.xwk[0];
	}

	get njl()
	{
		return this.xwk[1];
	}

	get faj()
	{
		return this.length > 1;
	}

	get qbt()
	{
		return this.xwk.slice(1);
	}

	get uxe()
	{
		return this.xwk.length - 1;
	}

	get hidden()
	{
		return this.asv.hidden;
	}

	set hidden(gq)
	{
		this.asv.hidden = gq;
	}

	get ku()
	{
		const ku = xb.tun(this, true);

		ku.xwk = this.xwk.map(xb.tun);

		return ku;
	}
}

class wke
{
	constructor(zio)
	{
		this.ix = wke.yak(zio);
		this.sb = wke.rzl(this.ix);
	}

	static rzl(ix)
	{
		return ['he','ar'].includes(ix) ? 'rtl' : 'ltr';
	}

	static yak(vt)
	{
		let swm = .57 * xb.fpb(vt);

		switch (true)
		{
			case swm < xb.tyl(ha[13], vt): return 'en';

			case swm < xb.tyl(ha[14], vt): return 'ar';

			case swm < xb.tyl(ha[15], vt): return 'he';

			default: return '';
		}
	}

	static get srj()
	{
		if (!this.ihx)
		{
			this.ihx = navigator.languages.map(ix => ix.slice(0, 2));
		}

		return this.ihx;
	}
}

class mnb
{
	constructor(uru)
	{
		const _ = uru.items[0];

		this.erg = _.snippet.channelId;
		this.th = _.statistics.commentCount;

		if (this.th == undefined)
		{
			this.th = -1;
		}
		else {
			this.th = +this.th;
		}
	}
}

class dag
{
	constructor(uru)
	{
		const _ = uru.snippet;

		this.wq = uru.id;
		this.pd = _.videoId;
		this.mbl = _.authorChannelId.value;
		this.em = _.authorProfileImageUrl;
		this.zoz = _.authorDisplayName;
		this.eqe = _.textOriginal;
		this.sbs = _.publishedAt;
		this.xrj = _.likeCount;
		this.spi = null;
		this.tp = null;
	}
}

class fcm
{
	constructor(dag)
	{
		Object.assign(this, dag);

		this.xnv = '';
		this.zfk = '';
		this.un = {};
		this.children = [];
		this.ji = null;
		this.ikg = null;
		this.edo = null;
		this.hdt = null;
		this.hidden = false;

		this.ewc();
		this.hxs();
		this.njm();
		this.xgw();
		this.zyf();
	}

	ewc()
	{
		this.xnv = this.eqe.replace(ha[16], '');

		delete this.eqe;
	}

	zyf()
	{
		this.zfk = dgz.lqr(this.xnv);

		this.hdt = new wke(this.zfk);

		if (this.hdt.ix == 'en')
		{
			this.zfk = dgz.hxa(this.zfk);
		}
	}

	hxs()
	{
		if (!this.xnv.includes('/'))
			return;

		this.xnv = this.xnv.replace(ha[17], (jy) =>
		{
			let x;

			const qmb = pup.dqs(jy);

			if (qmb) {
				if (qmb.pd == this.pd)
				{
					x = new as(this.pd, qmb.fp);
				}
				else {
					x = new cq(qmb);
				}
			}
			else {
				x = new kau(jy);
			}

			return this.cpm(x);
		});
	}

	njm()
	{
		if (!this.xnv.includes('#'))
			return;

		this.xnv = this.xnv.replace(ha[18], (irc) =>
		{
			const x = new jgv(irc);

			return this.cpm(x);
		});
	}

	xgw()
	{
		if (!this.xnv.includes(':'))
			return;

		this.xnv = this.xnv.replace(ha[19], (mz) =>
		{
			const x = new as(this.pd, mz);

			return this.cpm(x);
		});
	}

	cpm(wh)
	{
		this.un[wh.wq] = wh;

		return wh.wq;
	}

	yd()
	{
		this.hidden = true;

		for (let mh of this.children)
		{
			mh.yd();
		}
	}

	zq(mh)
	{
		mh.ji = this;

		this.children.push(mh);
	}

	get qoj()
	{
		return xb.zr(this.children) || this;
	}

	get dnc()
	{
		return this.children.some(mh => !mh.hidden);
	}
}

class mgu
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.zu = x.zu;
		this.un = x.un;
		this.pd = x.pd;
		this.wq = x.wq;
		this.mbl = x.mbl;
		this.em = x.em;
		this.gyq = x.gyq;
		this.ju = x.ju;
		this.sbs = x.sbs;
		this.spi = x.spi;
		this.tp = x.tp;
		this.ix = x.hdt.ix;
		this.sb = x.hdt.sb;
		this.rb = x.children.length;
		this.bye = '';
		this.njy = '';

		this.sbs = xb.svy(this.sbs);

		this.bye = xb.lq('https://www.youtube.com/channel/%s', this.mbl);

		this.njy = xb.lq('https://www.youtube.com/watch?v=%s&lc=%s', [this.pd, this.wq]);
	}
}

class mkv
{
	constructor(te, co)
	{
		this.wq = xb.oy();

		this.te = te;

		this.co = co;
	}
}

class as extends mkv
{
	constructor(pd, t)
	{
		super(null, 'as');

		let te, pq;

		if (xb.nz(t))
		{
			te = xb.sd(t);
			pq = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			te = t;
			pq = xb.cm(t);
		}

		this.pd = pd;
		this.fp = pq;
		this.te = te;
	}
}

class cq extends mkv
{
	constructor(lc)
	{
		super('youtube.com', 'cq');

		this.pd = lc.pd;
		this.fp = lc.fp;
	}
}

class kau extends mkv
{
	constructor(jy)
	{
		super('', 'pv');

		this.jy = jy;

		this.slo = jy.startsWith('https');

		this.te = pup.zay(jy) || jy;
	}
}

class jgv extends mkv
{
	constructor(iod)
	{
		super(iod, 'pv');

		this.jy = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(iod);
	}
}

class nad extends mkv
{
	constructor(sbh, erg)
	{
		super(sbh, 'pv');

		this.jy = 'https://www.youtube.com/channel/' + erg;
	}
}

class sde
{
	constructor(vt)
	{
		this.ewa = '';
		this.ycj = '';
		this.mwb = [];
		this.aqg = false;
		this.vrp = false;

		this.lqr(vt);
		this.naf();
		this.rck();
	}

	get yfr()
	{
		return this.ewa;
	}

	get length()
	{
		return this.ewa.length;
	}

	get pnp()
	{
		return xb.bae(this.ycj);
	}

	toLowerCase()
	{
		this.ewa = this.ewa.toLowerCase();
	}

	sxy(rv)
	{
		return this.mwb.includes(rv);
	}

	xrf(qyp)
	{
		for (let rv of qyp)
		{
			if (this.sxy(rv)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.ewa[this.length + i] : this.ewa[i];
	}

	vni(n)
	{
		this.ewa = this.ewa.slice(0, -n);
	}

	replace(tr, ci)
	{
		this.ewa = this.ewa.replace(tr, ci);
	}

	lqr(vt)
	{
		this.ewa = xb.mrj(vt, 'nsw');

		this.replace(ha[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(ha[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (xb.wdu(x))
				{
					return m.length > 3 && !ha[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	naf()
	{
		let nof = xb.syn([...this.ewa]).join('');

		this.ycj = nof.slice(0, 16);

		this.mwb = xb.gb(ha[23], nof);

		this.aqg = this.mwb.some(this.ubt);
	}

	rck()
	{
		if (!this.aqg) return;

		for (let i = 0, k = 0, n = this.mwb.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.mwb[i] + this.mwb[k];

				this.replace(xb.hgi('(%s)+', x, 'g'), x);
			}
		}
	}

	ubt(rv)
	{
		return rv.charCodeAt(0) > 255;
	}

	nwr(rv)
	{
		return rv == '\u{200D}';
	}
}

class am
{
	constructor()
	{
		this.wq = chrome.runtime.id;

		this.bld = chrome.runtime.getManifest().version;

		this.yi = new Promise(du => this.ulw = du);

		this.yi.then(
			_ => this.on()
		);

		this.ns();

		chrome.runtime.onInstalled.addListener(
			qmb => this.xnk(qmb)
		);

		chrome.browserAction.onClicked.addListener(
			_ => szj.sgp('ik')
		);

		chrome.alarms.onAlarm.addListener(
			qmb => this.kwd('pgw', qmb)
		);

		chrome.runtime.onMessageExternal.addListener(
			qi => this.kwd('fvn', qi)
		);
	}

	async ns()
	{
		if (await this.ygx == this.bld)
		{
			const kh = await wp.get(['0', '1']);

			this.exk = new zj(kh[0], 0);

			gf = new ot(kh[1], 1);

			if (gf.ye)
			{
				kz.kp.vkn(gf.hk);
			}

			this.ulw(1);
		}
	}

	async wz()
	{
		const trl = await this.vb('/html/view.html');

		const xp = (
			this.bld < this.txj
		);

		const rp = (
			!gf.ye || !gf.pi
		);

		return {
			gq: {
				xp, rp
			},
			yb: trl
		};
	}

	async gh(hk)
	{
		if (ha[24].test(hk))
		{
			const jcv = await kz.kp.uel(hk);

			if (jcv)
			{
				const gf = await kz.mr.vjk(hk);

				if (gf)
				{
					await this.nb(gf);

					pf.jt('vm');

					return true;
				}
			}
		}

		return false;
	}

	jfs(oko)
	{
		gf.uo = oko;

		pf.jt('kv');
	}

	tw()
	{
		if (gf.ye)
		{
			gf.hk = xb.alk(19, gf.hk);
		}
	}

	nb(kum)
	{
		gf = new ot(kum, '1');

		return gf.hw();
	}

	async vb(jp)
	{
		const yjc = await hl.nc(chrome.runtime.getURL(jp));

		return yjc.oq;
	}

	async xrm(qmb)
	{
		this.cmq();

		if (qmb.reason == 'install')
		{
			await this.tgc();
		}
		else {
			if (qmb.previousVersion < '')
			{

			}
		}

		await this.pcg();

		await this.ns();
	}

	async xnk(qmb)
	{
		await this.xrm(qmb);

		switch (qmb.reason)
		{
			case 'install':
				this.vrn();
			break;

			case 'update':
				this.xap();
			break;
		}

		szj.zaj();
	}

	vrn()
	{

	}

	xap()
	{

	}

	async kwd(tge, oq)
	{
		await this.yi;

		switch (tge)
		{
			case 'pgw':
				return this.xpm(oq);

			case 'fvn':
				return this.khs(oq);
		}
	}

	xpm(pgw)
	{
		const tsg = pgw.name;

		switch (tsg)
		{
			case 'yiv':
				this.yiv();
		}
	}

	khs(qi)
	{
		return new sgx().zf(qi);
	}

	async yiv()
	{
		const v = await kz.mr.jvc();

		if (v > this.bld)
		{
			return this.fbd(v);
		}
	}

	on()
	{
		if (gf.ye)
		{
			if (xb.nj() || !gf.da)
			{
				this.tw();
			}
		}
	}

	get ygx()
	{
		return wp.get('schemaVersion');
	}

	pcg()
	{
		return wp.set('schemaVersion', this.bld);
	}

	get txj()
	{
		return this.exk.latestVersion;
	}

	fbd(v)
	{
		this.exk.set('latestVersion', v);
	}

	tgc()
	{
		return wp.set({
			0: {
				latestVersion: this.bld
			},
			1: {},
		});
	}

	cmq()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('yiv', {periodInMinutes:240});
	}
}

class sgx
{
	zf(qi)
	{
		qi = xb.zdy(qi);

		switch (qi.issuer)
		{
			case 'authServer':
				return this.kax(qi.data);
		}
	}

	kax(oq)
	{
		if (oq.id == 'pa')
		{
			fw.jfs(oq.token);
		}
	}
}

class kgs
{
	constructor()
	{
		this.mr = new yaj;

		this.kp = new vxe;
	}
}

class yaj
{
	constructor()
	{
		this.adw = 'https://api.lett.app/cs';
	}

	async vjk(hk)
	{
		const yjc = await this.get('/auth', {
			apiKey:hk,
			token:fw.wq
		});

		if (yjc.oa)
		{
			return yjc.oq;
		}
	}

	async jvc()
	{
		const yjc = await this.get('/update');

		if (yjc.oa)
		{
			return yjc.oq.version;
		}
	}

	async rt()
	{
		const yjc = await this.get(
			'https://api.lett.app/donate/accept', this.glv, Infinity
		);

		if (yjc.oa)
		{
			return yjc.oq.url;
		}
	}

	get glv()
	{
		return {
			extId:fw.wq,
			apiKey:gf.hk,
			p:1,
		};
	}

	async get(rtx, lc, li)
	{
		if (rtx[0] == '/')
		{
			rtx = this.adw + rtx;
		}

		const yjc = await hl.nc(rtx, lc, li);

		if (!yjc.oa && !yjc.pn)
		{
			yjc.sm(yjc.oq.error);
		}

		return yjc;
	}
}

class zcv
{
	constructor()
	{
		this.adw = 'https://www.googleapis.com/youtube/v3';
	}

	vkn(hk)
	{
		this.zl = hk;
	}

	async uel(hk)
	{
		this.vkn(hk);

		const yjc = await this.ixz('jNQXAC9IVRw');

		return yjc.oa;
	}

	oqu(pd)
	{
		return this.bv({
			videoId:pd
		});
	}

	vgh(pd, joq)
	{
		return this.uf({
			videoId:pd,
			searchTerms:joq
		});
	}

	vbx(erg, joq)
	{
		return this.uf({
			allThreadsRelatedToChannelId:erg,
			searchTerms:joq
		});
	}

	async ixz(pd)
	{
		const yjc = await this.evj({
			id:pd,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (yjc.oa)
		{
			try {
				yjc.oq = new mnb(yjc.oq);
			}
			catch (e) {
				yjc.sm('yh');
			}
		}

		return yjc;
	}

	async get(rtx, lc)
	{
		const yjc = await hl.nc(this.adw + rtx, lc);

		if (!yjc.oa && !yjc.pn)
		{
			const qsw = this.fdp(yjc.oq);

			yjc.sm(qsw);
		}

		return yjc;
	}

	async uf(lc)
	{
		const yjc = await this.get('/commentThreads', lc);

		if (yjc.oa)
		{
			yjc.oq = this.pqh(yjc.oq);
		}

		return yjc;
	}

	async bv(lc)
	{
		let yjc, lp = [];

		do {
			yjc = await this.get('/commentThreads', lc);

			if (yjc.oa)
			{
				const otp = this.pqh(yjc.oq);

				lp.push(otp);

				lc.pageToken = yjc.oq.nextPageToken;
			}
		}
		while (yjc.oa && lc.pageToken)

		yjc.oq = lp.flat();

		return yjc;
	}

	evj(lc)
	{
		return this.get('/videos', lc);
	}

	mbi(sye)
	{
		try {
			return new dag(sye);
		}
		catch (e) {
			return null;
		}
	}

	uqr(sye)
	{
		let qbt = [];

		try {
			if (sye.replies) {
				qbt = sye.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return qbt;
	}

	fdp(cwx)
	{
		try {
			return cwx.error.errors[0].reason;
		}
		catch (e) {
			return cwx.nw || 'ds';
		}
	}

	pqh(sye)
	{
		const otp = [];

		try {
			for (let wh of sye.items)
			{
				const ql = this.gwd(wh);

				if (ql) {
					otp.push(ql);
				}
			}
		}
		catch (e) {
		}

		return otp;
	}

	gwd(sye)
	{
		try {
			const gya = sye.snippet;

			if (gya.videoId)
			{
				let ln = this.mbi(gya.topLevelComment);

				if (ln)
				{
					const ql = new osd(ln, gya.totalReplyCount);

					if (ql.mgt <= 5)
					{
						for (let dmp of this.uqr(sye))
						{
							ln = this.mbi(dmp);

							if (ln) {
								ql.mco(ln);
							}
						}
					}

					return ql;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class vxe extends zcv
{
	bv(lc)
	{
		this.eoi(lc);

		return super.bv(lc);
	}

	uf(lc)
	{
		this.eoi(lc);

		return super.uf(lc);
	}

	async get(rtx, lc)
	{
		lc.key = this.zl;

		let yjc, i = 3;

		while (i--)
		{
			yjc = await super.get(rtx, lc);

			if (yjc.nw != 'processingFailure')
				break;
		}

		return yjc;
	}

	eoi(lc)
	{
		Object.assign(lc, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class pup
{
	static dqs(jy)
	{
		const pd = xb.it(ha[25], jy);

		if (pd)
		{
			let fp = xb.it(ha[26], jy) || 0;

			if (!xb.nz(fp))
			{
				fp = xb.gb(ha[27], fp).join(':');

				fp = xb.cm(fp);
			}

			return {pd, fp};
		}
	}

	static zay(jy)
	{
		return xb.it(ha[28], jy).replace('www.', '');
	}
}

class cmk
{
	async sgp(vq)
	{
		const lqe = await this.ytf();

		if (lqe && lqe.url)
		{
			this.sr(lqe.id, 'vq', vq);
		}
	}

	zaj()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, szj =>
		{
			for (let lqe of szj)
			{
				chrome.tabs.reload(lqe.id);
			}
		});
	}

	ytf()
	{
		return new Promise(du =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, szj =>
			{
				du(szj[0]);
			});
		});
	}

	sr(wan, sl, oq)
	{
		chrome.tabs.sendMessage(wan, new bt(sl, oq));
	}
}

class efn
{
	constructor(py, vfo)
	{
		this.wq = vfo.pd;

		this.vfo = vfo;

		this.ima = new qmf(py);

		this.lp = {};

		for (let scl of ['qvy', 'ieb'])
		{
			this[scl] = new bu(Array);
		}

		for (let scl of ['cyl', 'uak', 'jyf'])
		{
			this[scl] = [];
		}

		for (let ql of py)
		{
			this.uc(ql);
			this.ygt(ql);
		}
	}

	agt(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.kjq();

			case ':all':
				return this.ier();

			case ':creator':
				return this.xhq();

			case ':link':
				return this.ndo();

			case ':reply':
				return this.pau();
		}

		if (ha[29].test(q))
		{
			const tx = this.gpw(q);

			switch (tx.length)
			{
				case 1: return this.uyv(tx[0]);

				case 2: return this.xgm(tx[0], tx[1]);
			}
		}

		return this.xnp(q);
	}

	ier()
	{
		return this.fhy(
			Object.keys(this.lp)
		);
	}

	kjq()
	{
		return this.fhy(this.ieb.values);
	}

	xhq()
	{
		return this.fhy(this.cyl);
	}

	ndo()
	{
		return this.fhy(this.jyf);
	}

	pau()
	{
		return this.fhy(this.uak);
	}

	xgm(fq, jxv)
	{
		const dpx = xb.cm(fq);
		const mgo = xb.cm(jxv);

		const bhv = [];

		for (let tx of this.ieb.keys)
		{
			if (dpx <= tx && tx <= mgo)
			{
				bhv.push(
					this.ieb.get(tx)
				);
			}

			if (mgo < tx) break;
		}

		return this.fhy(bhv);
	}

	uc(wh)
	{
		this.lp[wh.wq] = wh;
	}

	acs(wq)
	{
		return this.lp[wq].ku;
	}

	fhy(bhv)
	{
		bhv = bhv.flat();

		return xb.syn(bhv).map(
			wq => this.acs(wq)
		);
	}

	xnp(vt)
	{
		let jds = [];

		let qg = this.szm(vt);

		let bhv = qg.map(
			k => this.select('qvy', k)
		);

		bhv = bhv.filter(x => x.length);

		if (bhv.length)
		{
			jds = xb.gre(...bhv);

			if (jds.length < 1)
			{
				bhv.sort((a, b) => a.length - b.length);

				jds = bhv[0];
			}
		}

		return this.fhy(jds);
	}

	uyv(mz)
	{
		let ps = xb.cm(mz);

		let bhv = [
			this.select('ieb', ps)
		];

		for (let i = ps; i--;)
		{
			let x = this.select('ieb', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			bhv.push(x);
		}

		for (let i = ps; i++;)
		{
			let x = this.select('ieb', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			bhv.push(x);
		}

		return this.fhy(bhv);
	}

	ygt(ql)
	{
		const te = ql.xwk.map(ln => ln.eqe).join(' ');

		this.hxs(te, ql.wq);

		this.kot(te, ql.wq);

		this.zxe(te, ql.wq);

		this.uqr(ql);
	}

	uqr(ql)
	{
		if (ql.length > 1)
		{
			this.uak.push(ql.wq);
		}

		if (ql.uvh(this.vfo.erg))
		{
			this.cyl.push(ql.wq);
		}
	}

	hxs(te, wq)
	{
		te.includes('http') && this.jyf.push(wq);
	}

	kot(te, wq)
	{
		const mnr = this.gpw(te);

		for (let tx of mnr)
		{
			tx = xb.cm(tx);

			if (0 <= tx && tx < this.vfo.yq)
			{
				this.igr('ieb', tx, wq);
			}
		}
	}

	zxe(te, wq)
	{
		this.szm(te).forEach(
			yn => this.igr('qvy', yn, wq)
		);
	}

	igr(scl, zl, fd)
	{
		this[scl].qyf(zl);

		this[scl].get(zl).push(fd);
	}

	select(scl, zl)
	{
		return this[scl].get(zl);
	}

	szm(vt)
	{
		vt = dgz.lqr(vt);

		vt = dgz.hxa(vt);

		vt = xb.nmc(vt);

		return xb.syn(vt);
	}

	gpw(vt)
	{
		return xb.gb(ha[30], vt);
	}
}

class qmf
{
	constructor(py)
	{
		this.ima = {};

		this.lkh = {};

		this.wfo = {};

		for (let ql of py)
		{
			this.zxs(ql);
		}

		this.emz();
	}

	jmf(rze)
	{
		return this.lkh.agt(rze);
	}

	wsv(wq)
	{
		return this.ima[wq];
	}

	zxs(ql)
	{
		for (let ln of ql.xwk)
		{
			this.ioe(ln.mbl, ln.eqe);
			this.ilg(ln.mbl, ln.zoz);
		}
	}

	emz()
	{
		this.lkh = new ark(this.lkh);

		for (let wq in this.wfo)
		{
			const wfo = this.wfo[wq];

			if (wfo.length > 1)
			{
				const ust = wfo.filter(
					(te, i) => te.length < 28 || i == wfo.indexOf(te)
				);

				this.wsv(wq).dcb = (wfo.length != ust.length);
			}
		}
	}

	ilg(wq, lcn)
	{
		let ikg = new tld(wq, lcn);

		this.ima[wq] = ikg;

		this.lkh[lcn] = ikg;
	}

	ioe(wq, te)
	{
		this.wfo[wq] = this.wfo[wq] || [];

		this.wfo[wq].push(te);
	}
}

class tld
{
	constructor(wq, lcn)
	{
		this.wq = wq;
		this.lcn = lcn;
		this.dcb = false;
		this.wxq = false;
	}

	get gyq()
	{
		return this.wxq ? this.lcn : this.ufh;
	}

	get xls()
	{
		return !this.wxq && this.dcb;
	}

	get ufh()
	{
		if (!this.zbc)
		{
			this.zbc = cap.mtc(this.lcn);
		}

		return this.zbc;
	}
}

class ark
{
	constructor(tf)
	{
		this.keys = Object.keys(tf).sort(this.qro);

		this.hyv = this.keys.map(zl => tf[zl]);

		this.keys = this.keys.map(xb.kw);
	}

	agt(mnq)
	{
		mnq = mnq.toLowerCase();

		let lp = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(mnq))
			{
				do {
					lp.push(this.hyv[i])
				}
				while (++i < n && this.keys[i].startsWith(mnq));

				break;
			}
		}

		return lp.sort(this.sfc);
	}

	sfc(a, b)
	{
		return b.lcn.length - a.lcn.length;
	}

	qro(a, b)
	{
		return a.localeCompare(b);
	}
}

const ldr = {
	dea: {
		uxe(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		tch(x)
		{
			return (x != 0) ? (1 / x) : 0;
		},

		qpx(cns)
		{
			let ite = xb.rza(cns);

			return (n) => (ite - Math.abs(ite - n)) / ite;
		}
	},

	ygt(py, tsb, vfo)
	{
		this.dlm = vfo.erg;

		const gcx = tsb.wsv(this.dlm);

		if (gcx)
		{
			gcx.wxq = true;
		}

		this.agt = vfo.agt;

		this.mkh = new ghn;

		this.rxo = new udk;

		this.ayp = new aqf;

		this.hcx = {};

		return this.naf(py, tsb);
	},

	naf(py, tsb)
	{
		const urq = ('you are not but for the thi and that was').split(' ');

		const imk = {
			fsv: 1,
			sgl: [],
		};

		const dhd = {
			uxe: this.dea.uxe,
			hmu: this.dea.tch,
			sgl: null,
		};

		const ktb = {
			qvy: .5,
			sgl: .2,
			cba: .2,
			hmu: .15,
			uxy: .1,
			uxe: .1,
			skw: .1,
		};

		if (this.agt.gue)
		{
			Object.assign(ktb, {
				skw: .4,
				cba:.4,
				hmu: .1,
				sgl: .0,
			});
		}

		for (let ql of py)
		{
			Object.assign(ql,
			{
				al: {
					sgl: ql.asv.eqe.length,
					ubu: 0,
					uxy: false,
					cba: false,
					ieb: [],
					qg: [],
				},
				eqo: {
					qvy: 0,
					cba: 0,
					hmu: 0,
					sgl: 0,
					dcr: 0,
					kbl: 0,
				},
			});

			const al = ql.al;

			for (let i = 0; i < ql.length; i++)
			{
				const ln = ql.xwk[i] = new fcm(ql.xwk[i]);

				ln.ikg = tsb.wsv(ln.mbl);

				ln.tp = this.tp(ln.mbl);

				if (i > 0)
				{
					ln.zu = true;

					ln.spi && (al.uxy = true);
					ln.tp && (al.cba = true);
				}

				if (ln.zfk == '' || ln.ikg.xls)
				{
					ln.yd();
				}
			}

			const asv = ql.asv;

			if (this.xgd(asv.xnv))
			{
				ql.hidden = true;

				continue;
			}

			al.qg = xb.nmc(asv.zfk);
			al.ubu = al.qg.length;
			al.qg = xb.syn(al.qg);

			for (let x in asv.un)
			{
				x = asv.un[x];

				if (x.wq == asv.xnv)
				{
					ql.hidden = true;
				}

				if (x instanceof as)
				{
					al.ieb.push(x.pq);

					xb.rgy(x.wq, this.rxo.mwn(x.pq), al.qg);
				}
			}

			for (let yn of al.qg)
			{
				if (yn.length > 2 && !urq.includes(yn))
				{
					this.mkh.aoh(yn);
				}
			}
		}

		for (let ql of py)
		{
			if (ql.hidden)
				continue;

			const eqo = ql.eqo;

			for (let yn of ql.al.qg)
			{
				eqo.qvy += this.mkh.get(yn);
			}

			eqo.qvy /= ql.al.ubu;

			eqo.hmu = ql.al.ieb.length;

			if (eqo.qvy > imk.fsv)
			{
				imk.fsv = eqo.qvy;
			}

			imk.sgl.push(ql.al.sgl);
		}

		dhd.sgl = this.dea.qpx(imk.sgl);

		for (let ql of py)
		{
			const eqo = ql.eqo;

			eqo.qvy = ktb.qvy * (eqo.qvy / imk.fsv);
			eqo.hmu = ktb.hmu * dhd.hmu(eqo.hmu);
			eqo.cba = ktb.cba * +ql.al.cba;

			const uxe = ktb.uxe * dhd.uxe(ql.uxe);
			const uxy = +ql.al.uxy || .5;
			const skw = xb.gqp(ql.uxe, ql.mgt) || .5;

			eqo.dcr = uxy * skw * uxe;

			eqo.kbl = xb.bvd(Object.values(eqo));
		}

		py.sort(
			(a, b) => b.eqo.kbl - a.eqo.kbl
		);

		for (let i = 0, n = py.length; i < n; i++)
		{
			const a = py[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = py[k];

				if (b.mbl == a.mbl && !b.asv.ikg.wxq)
				{
					b.hidden = true;
				}

				if (!b.hidden && !b.faj)
				{
					const glk = xb.gre(a.al.qg, b.al.qg);
					const xvy = (a.al.qg.length + b.al.qg.length) / 2;

					if (glk.length == b.al.ubu)
					{
						b.hidden = true;
					}

					if (glk.length >= .5 * xvy)
					{
						const mgo = a.al.ieb[0] || 0;
						const qvo = b.al.ieb[0] || 0;

						if (this.rxo.lqs(mgo, qvo))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < py.length; i++)
		{
			const ql = py[i];

			let bjs = false;

			if (i == 0 && !ql.faj)
			{
				const xua = this.agt.vt.toLowerCase();
				const ejo = ql.asv.zfk;

				if (xua == ejo)
				{
					bjs = true;
				}
			}

			if (ql.faj && ql.doq.length == 1)
			{
				const dpx = new Date(ql.asv.sbs);
				const mgo = new Date(ql.njl.sbs);

				if (.001 * (mgo - dpx) < 300)
				{
					bjs = true;
				}
			}

			if (bjs)
			{
				xb.ulf(i, py);
			}
		}

		for (let ql of py)
		{
			this.ayp.obk(ql.wq, ql.mbl);

			for (let mbl of ql.doq)
			{
				this.ayp.gcr(mbl, ql.wq)
			}
		}

		for (let ql of py)
		{
			if (ql.uxe == 0) continue;

			for (let dmp of ql.qbt)
			{
				const te = dmp.xnv;

				const wmq = xb.it(ha[31], te);

				for (let ikg of tsb.jmf(wmq))
				{
					if (this.ayr(ikg).test(te))
					{
						dmp.edo = ikg;
						break;
					}
				}
			}

			if (ql.length > 2)
			{
				let ima, lp, umb = true;

				const n = ql.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					const dmp = ql.xwk[i];

					if (umb)
					{
						ima = [];
						lp = [];
						umb = false;
					}

					const gf = dmp.ikg;

					if (xb.zr(ima) == gf) {
						i++;
					}
					else if (ima.includes(gf) || xb.syn(ima).length < 2) {
						lp.push(dmp);
						ima.push(gf);

						if (i + 1 < n)
							continue;
					}

					if (lp.length > 2)
					{
						let jcv = !lp.some(dmp => dmp.edo && !ima.includes(dmp.edo));

						if (jcv)
						{
							lp.forEach(dmp =>
								dmp.edo = ima.find(ikg => ikg != dmp.ikg)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						umb = true;
					}
				}
			}

			for (let kam, i = 1; i < ql.length; i++)
			{
				const dmp = ql.xwk[i];

				if (!dmp.edo)
				{
					if (kam && kam.edo == dmp.ikg)
					{
						dmp.edo = kam.ikg;

						ql.stn(dmp, kam);
					}
				}
				else {
					const hpw = dmp.edo;

					let ioh;

					for (let k = i - 1; k >= 0; k--)
					{
						const kam = ql.xwk[k];

						if (k == 0)
						{
							if (kam.ikg == hpw)
							{
								ioh = '';
							}

							break;
						}

						if (kam.ikg == hpw)
						{
							ql.stn(dmp, kam);

							if (kam.children.length == 1)
							{
								ioh = '';
							}

							break;
						}
					}

					if (ioh == null)
					{
						const ag = new nad(hpw.gyq, hpw.wq);

						ioh = dmp.cpm(ag) + ' ';
					}

					dmp.xnv = dmp.xnv.replace(this.ayr(hpw), ioh);
				}

				kam = dmp;
			}

			for (let i = 1, n = ql.length; i < n; i++)
			{
				const dmp = ql.xwk[i];

				if (dmp.ji || dmp.children.length)
				{
					xb.ulf(i, ql.xwk);
					i--;
					n--;
				}
			}

			for (let dzt = false, i = 1; i < ql.length; i++)
			{
				let dmp = ql.xwk[i];

				dzt = (dzt || !dmp.spi);

				if (dmp.dnc)
				{
					continue;
				}

				if (!dzt)
				{
					const te = dmp.xnv;

					if (ql.length > 2 || ['+','@'].includes(te[0]) || te.length < 10)
					{
						dmp.yd();
					}
				}

				dmp.edo && !ql.uvh(dmp.edo.wq) && dmp.yd();

				this.dqg(dmp.mbl, ql.wq) && dmp.yd();
			}
		}

		py = py.map(ql =>
		{
			if (ql.asv.hidden)
			{
				return [];
			}

			const xwk = [];

			for (let i = 0; i < ql.length; i++)
			{
				const ln = ql.xwk[i];

				ln.ju = cap.fyp(ln.xnv);

				ln.gyq = ln.ikg.gyq;

				if (ln.ju.length < 2)
				{
					if (i == 0) return [];

					ln.yd();
				}

				xwk.push(new mgu(ln));
			}

			return xwk;
		});

		return py.filter(ql => ql.length > 0);
	},

	xgd(vt)
	{
		return vt.length > 500 || xb.tyl(ha[32], vt) > 3;
	},

	tp(mbl)
	{
		return this.dlm == mbl;
	},

	dqg(mbl, sdl)
	{
		if (!this.dlm || this.tp(mbl))
		{
			return false;
		}

		for (let tih of this.ayp.of(mbl))
		{
			if (tih == sdl)
			{
				return false;
			}

			if (!this.ayp.uiz(tih, mbl))
			{
				return true;
			}
		}
	},

	ayr(ikg)
	{
		const wq = ikg.wq;

		if (wq in this.hcx)
		{
			return this.hcx[wq];
		}

		return this.hcx[wq] = xb.hgi('^[+@]?%s[-\\s,.:;?!]*', ikg.lcn, 'i');
	}
};

const cap = {
	fyp(pu)
	{
		let vt = new sde(pu);

		vt.sxy('<') && vt.replace(ha[33], '&lt;');

		vt.pnp && vt.toLowerCase();

		if (vt.sxy('.'))
		{
			vt.charAt(-1) == '.' && vt.charAt(-2) != '.' && vt.vni(1);

			vt.replace(ha[34], (m) => m.replace(ha[35], ''));
		}

		if (vt.sxy('\n'))
		{
			vt.replace(ha[36], function(m, i)
			{
				let x = vt.charAt(i - 1);

				return xb.yao(x) ? '. ' : ' ';
			});
		}

		if (vt.xrf('*_'))
		{
			vt.replace(ha[37], '$2');
		}

		if (vt.xrf('(,!?.)'))
		{
			vt.replace(ha[38], '?!');

			vt.replace(ha[39], '$1');

			vt.replace(ha[40], '$1 $2');

			vt.sxy('!') && vt.replace(ha[41], '$1');
		}

		if (vt.xrf('$£€'))
		{
			vt.replace(ha[42], (_, xim, zri) =>
			{
				ha[43].test(xim) && (xim = Math.round(xim));

				return zri + xim;
			});
		}

		vt.sxy(':') && vt.replace(ha[44], ': ');

		vt.sxy('&') && vt.replace(ha[45], ' and ');

		vt.sxy('"') && vt.replace(ha[46], '" - $1');

		return jbg.szc(vt.yfr);
	},

	mtc(pu)
	{
		return pu.length < 28 && this.sak(pu) || this.psb();
	},

	sak(vt)
	{
		let qg;

		if (!ha[47].test(vt))
		{
			if (xb.afy(vt))
			{
				vt = xb.cty(vt);
			}

			qg = vt.split(' ');

			if (qg.length == 1)
			{
				return xb.ki(qg[0], 'PRE_CASE');
			}
		}
		else {
			qg = xb.gb(ha[48], vt);
		}

		qg = qg.map(yn =>
		{
			switch (true)
			{
				case yn.length < 2 || xb.nz(yn):
					return '';

				default:
					return xb.ki(yn);
			}
		});

		qg = qg.filter(
			(yn, i) => yn != '' && i == qg.indexOf(yn)
		);

		return qg.join(' ');
	},

	psb()
	{
		return 'user' + xb.nk(4);
	}
};

const dgz = {
	lqr(vt)
	{
		vt = vt.toLowerCase();

		vt = vt.replace(ha[49], ' ');

		return xb.mrj(vt);
	},

	hxa(vt)
	{
		return vt.replace(ha[50], '$1');
	}
};

const jbg = {
	txm: {
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

	szc(vt)
	{
		return vt.replace(ha[51], m => this.get(m));
	},

	get(zl)
	{
		zl = zl.toLowerCase();

		(zl.length == 2) || (zl = zl.slice(0, 2));

		return this.txm[zl] || zl;
	}
};

class ghn
{
	constructor()
	{
		this.map = {};
	}

	aoh(yn)
	{
		this.map[yn] = ++this.map[yn] || 0;
	}

	get(yn)
	{
		return this.map[yn] || 0;
	}
}

class udk
{
	constructor()
	{
		this.map = {};
	}

	mwn(qfb)
	{
		for (let qav in this.map)
		{
			if (this.lqs(qfb, qav))
			{
				return this.map[qav];
			}
		}

		return this.kjy(qfb);
	}

	kjy(tx)
	{
		return this.map[tx] = xb.lq('TS%s', tx);
	}

	lqs(mgo, qvo)
	{
		return Math.abs(qvo - mgo) < 5;
	}
}

class aqf
{
	constructor()
	{
		this.ima = {};

		this.py = {};
	}

	of(ueh)
	{
		return this.ima[ueh];
	}

	uiz(hvl, ueh)
	{
		return this.py[hvl] == ueh;
	}

	obk(wq, xri)
	{
		this.py[wq] = xri;
	}

	gcr(wq, hvl)
	{
		if (!this.ima[wq])
		{
			this.ima[wq] = new ef;
		}

		this.ima[wq].push(hvl);
	}
}

class nv
{
	constructor(gp)
	{
		gp.zf = this.zf.bind(this);

		this.gp = gp;

		this.gvy = 0;

		this.qjq = new Promise(du => du(null));

		this.vfo;

		this.fgf = new fgf;

		this.liu = new efn([], {});
	}

	async zf(qi)
	{
		const pd = qi.oq.pd;

		try {
			const qmb = await this.fgf.uqj(pd);

			this.vfo = new suo(qi.oq, qmb);
		}
		catch (ia) {
			return this.ayf(ia);
		}

		switch (qi.sl)
		{
			case 'uf':
				return this.wvx(pd);

			case 'th':
				return this.hr(pd);
		}
	}

	ayf(wq)
	{
		this.juk('nw', {wq});
	}

	hr(pd)
	{
		const n = this.vfo.th;

		if (0 < n && n < 1000)
		{
			this.uih(pd);
		}

		this.juk('th', n);
	}

	async wvx(pd)
	{
		if (this.vfo.agt.gdj)
		{
			return this.ayf('wv');
		}

		this.oqr();
	}

	async oqr()
	{
		let r = new wax(this.ijp);

		try {
			if (this.vfo.agt.ycx)
			{
				await this.wlk(r);
			}
			else {
				await this.xcg(r);
			}

			!this.rlr(r.wq) && this.juk('uf', r);
		}
		catch (ia) {
			!this.rlr(r.wq) && this.ayf(ia);
		}
	}

	async wlk(cwx)
	{
		const yjc = await kz.kp.vbx(this.vfo.erg, this.vfo.agt.vt);

		if (yjc.nw)
		{
			throw yjc.nw;
		}

		const ima = new qmf(yjc.oq);

		const py = ldr.ygt(yjc.oq, ima, this.vfo);

		cwx.lyz(py);
		cwx.xfk(-2);
	}

	async xcg(cwx)
	{
		const pd = this.vfo.pd;
		const ti = this.vfo.agt.vt;

		const p = cwx.xfk(this.vfo.th);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.vfo.agt.umo)
		{
			throw 'ng';
		}

		let py, ima;

		if (p < 1000)
		{
			const ia = await this.uih(pd);

			if (ia)
			{
				throw ia;
			}

			ima = this.liu.ima;

			py = this.liu.agt(ti);
		}
		else {
			const yjc = await kz.kp.vgh(pd, ti);

			if (yjc.nw)
			{
				throw yjc.nw;
			}

			ima = new qmf(yjc.oq);

			py = yjc.oq;
		}

		py = ldr.ygt(py, ima, this.vfo);

		cwx.lyz(py);
	}

	juk(sl, oq)
	{
		this.gp.sf(sl, oq);
	}

	async uih(pd)
	{
		await this.qjq;

		if (pd != this.liu.wq)
		{
			this.qjq = new Promise(async du =>
			{
				const yjc = await kz.kp.oqu(pd);

				if (yjc.oa)
				{
					this.liu = new efn(yjc.oq, this.vfo);
				}

				du(yjc.nw);
			});
		}

		return this.qjq;
	}

	get ijp()
	{
		return ++this.gvy;
	}

	rlr(ies)
	{
		return ies != this.gvy;
	}
}

class fgf
{
	constructor()
	{
		this.map = {};
	}

	async uqj(pd)
	{
		let x = this.map[pd];

		if (x == undefined)
		{
			x = this.swp(pd);
		}

		if (x instanceof Promise)
		{
			const yjc = await x;

			if (yjc.nw)
			{
				this.aom(pd);

				throw yjc.nw;
			}

			x = this.sqs(pd, yjc.oq);
		}

		return x;
	}

	afz(pd, value)
	{
		return this.map[pd] = value;
	}

	swp(pd)
	{
		const r = kz.kp.ixz(pd);

		return this.afz(pd, r);
	}

	sqs(pd, mkf)
	{
		return this.afz(pd, mkf);
	}

	aom(pd)
	{
		this.afz(pd, undefined);
	}
}

class lks
{
	constructor(q)
	{
		this.vt = '';
		this.co = '';
		this.ycx = false;
		this.gdj = false;

		this.naf(q);
	}

	get umo()
	{
		return this.co == 'dk';
	}

	get gue()
	{
		return this.co == 'hoi';
	}

	naf(q)
	{
		const cor = q.replace(ha[52], '');

		if (cor != q)
		{
			this.ycx = true;

			if (cor == '')
			{
				this.gdj = true;
			}
		}

		this.vt = cor;
		this.co = lks.civ(cor);
	}

	static civ(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'dk';

			case (ha[53]).test(q):
				return 'hoi';

			default:
				return '';
		}
	}
}

class suo
{
	constructor(scx, njz)
	{
		Object.assign(this, ...[scx, njz]);

		this.yq = Math.floor(scx.yq) || Infinity;
		this.vg = Math.floor(scx.vg);

		this.agt = new lks(scx.ti);
	}
}

class wax
{
	constructor(ies)
	{
		this.wq = ies;
		this.py = [];
		this.bo = 0;
		this.qx = 0;
	}

	lyz(py)
	{
		this.py = py;
		this.bo = py.length;
	}

	xfk(n)
	{
		return this.qx = n;
	}
}

let gf;

const kz = new kgs;
const wp = new vd;
const szj = new cmk;
const fw = new am;
const pf = new xd;
const pg = new fm;

const ha = [
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