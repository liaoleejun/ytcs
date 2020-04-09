/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const gp = {};

for (let zv of 'object array string regex date math type std'.split(' '))
{
	gp[zv] = {};
}

gp.zf = function(nk, rw)
{
	return nk != undefined && nk.constructor === rw;
}

gp.zx = function()
{
	return gp.tm(9);
}

gp.ct = function(wz)
{
	return gr[0].test(wz);
}

gp.nu = function(xe)
{
	return Object.keys(xe).length == 0;
}

gp.is = function(jy, xe)
{
	for (let mn in xe)
	{
		const kr = xe[mn];

		if (mn == jy) return kr;
		if (kr == jy) return mn;
	}
}

gp.cx = function(xe, gj)
{
	let wz = '';

	for (let mn in xe)
	{
		wz += mn + '=' + xe[mn] + gj;
	}

	return wz.slice(0, -1);
}

gp.yr = function(ks, bi, gq)
{
	const gv = bi + 1;

	return gq.slice(gv, gv + ks);
}

gp.hz = function(gq)
{
	return gq[gq.length - 1];
}

gp.qc = function(sm, pi)
{
	sm += '?';

	for (let mn in pi)
	{
		sm += mn + '=' + encodeURIComponent(pi[mn]) + '&';
	}

	return sm.slice(0, -1);
}

gp.ir = function(wz, zc)
{
	if (gp.zf(zc, Array))
	{
		let i = 0;

		return wz.replace(gr[1], _ => zc[i++]);
	}

	return wz.replace('%s', zc);
}

gp.mr = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

gp.lq = function(wz, sf)
{
	const eh = gp.ir('(%s)', sf.join('|'));

	return wz.split(new RegExp(eh)).filter(s => s !== '');
}

gp.uz = function(wz)
{
	return wz.toUpperCase();
}

gp.fv = function(wz)
{
	return wz.toLowerCase();
}

gp.oz = function(wz, qw)
{
	if (!qw)
	{
		wz = wz.toLowerCase();
	}

	return wz[0].toUpperCase() + wz.slice(1);
}

gp.zu = function(rm, wz)
{
	return wz.match(rm) || [];
}

gp.ty = function(rm, wz)
{
	if (rm.global) return '';

	const m = gp.zu(rm, wz);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

gp.cz = function()
{
	return Math.floor(Date.now() / 1000);
}

gp.vw = function(wn)
{
	return wn < gp.cz();
}

gp.zk = function(q)
{
	const rc = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = gp.ty(gr[2], q);

	return Date.now() + (x[0] * rc[x[1]] * 1000);
}

gp.ei = function(nb)
{
	let x = nb.split(':'),
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

gp.qa = function(qd)
{
	let gq = [];

	gq.push(qd / 3600);

	qd %= 3600;

	gq.push(qd / 60);

	gq.push(qd % 60);

	gq = gq.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return gq.join(':').replace(gr[3], '');
}

gp.tm = function(np)
{
	return Math.random().toString().slice(2, np + 2);
}

gp.uo = function(dh, cm)
{
	const go = Math.random() * (cm - dh) + dh;

	return Math.floor(go);
}

gp.th = function(x, a, b)
{
	return x >= a && x <= b;
}

gp.mj = function(a, b)
{
	return 100 * (a / b);
}

gp.bd = function()
{
	let xd, un = 0;

	try {
		xd = [eg, pa, qu];
	}
	catch (e) {
		xd = [sy, qu];
	}

	xd.forEach(
		kh => un += kh.toString().length
	);

	return un != 3381;
}

class lt
{
	constructor(qh, oj)
	{
		this.qh = qh;
		this.oj = oj;
	}
}

class xz
{
	constructor(ez, qh, oj)
	{
		this.ez = ez;
		this.co = new lt(qh, oj);
	}
}

class zg extends Array
{
	constructor(wj)
	{
		super();

		if (wj != null)
		{
			super.push(wj);
		}
	}

	push(cp)
	{
		return !this.includes(cp) && super.push(cp);
	}
}

class ov
{
	constructor(nc, ym)
	{
		const kh = nc.status;

		this.kh = kh;
		this.fu = false;
		this.mv = false;
		this.io = null;
		this.oj = null;

		switch (ym)
		{
			case 'error':
				return this.ug('xb');

			case 'timeout':
				return this.ug('tv');

			default:
			{
				this.fu = (kh == 200);

				if (kh >= 500)
				{
					return this.ug('pn');
				}

				try {
					this.oj = JSON.parse(nc.responseText);
				}
				catch (e) {
					this.oj = nc.responseText;
				}
			}
		}
	}

	hf(gc)
	{
		this.io = gc;
	}

	ug(gc)
	{
		this.hf(gc);

		this.mv = true;
	}
}

class nq
{
	constructor(oj, le)
	{
		Object.assign(this, oj);

		Object.defineProperty(this, 'le', {
			value: le
		});
	}

	set(mn, kr)
	{
		this[mn] = kr;

		this.xg();
	}

	xg()
	{
		return gt.set(this.le, this);
	}
}

class qu extends nq
{
	constructor(oj, le)
	{
		super(oj, le);
	}

	get tp()
	{
		return Boolean(this.yl)
	}

	get yl()
	{
		return this[0];
	}

	get zs()
	{
		return this[1];
	}

	get om()
	{
		return gp.vw(this.zs);
	}

	get oc()
	{
		const sx = this.zs.toString().split('').pop();

		return Boolean(+sx);
	}

	set yl(mn)
	{
		this.set(0, mn);
	}

	set zs(yx)
	{
		this.set(1, yx);
	}

	get hy()
	{
		let s = this.zs.toString();

		let n = 0;

		for (let i = 0; i < s.length; i++)
		{
			let m = s[i] * (i % 2 ? 2 : 1);

			if (m > 9)
			{
				m = m.toString();
				m = +m[0] + +m[1];
			}

			n += m;
		}

		return !(n % 5);
	}
}

class md
{
	constructor(iw)
	{
		if (iw)
		{
			this.xy();
		}
	}

	ob(ay, dn, vc)
	{
	}

	xy()
	{
		chrome.runtime.onMessage.addListener(
			this.ob.bind(this)
		);
	}
}

class nz extends md
{
	constructor()
	{
		super(false);
	}

	ob(ay, dn, vc)
	{
		const oj = ay.oj;

		switch (ay.qh)
		{
			case 'zq':
				return this.dq(oj);
		}
	}

	dq(zq)
	{
		if (zq == 'uc')
		{
			lx.gv();
		}
	}

	ki()
	{
		return this.lf('ki');
	}

	ey(ub)
	{
		return this.lf('ey', ub);
	}

	ow(yl)
	{
		return this.lf('ow', yl);
	}

	pw()
	{
		return this.lf('pw');
	}

	id()
	{
		return this.lf('id');
	}

	lf(qh, oj)
	{
		const ay = new lt(qh, oj);

		return new Promise(vc =>
		{
			try {
				chrome.runtime.sendMessage(ay, vc);
			}
			catch (e) {
			}
		});
	}
}

class cb extends md
{
	constructor()
	{
		super(true);
	}

	ob(ay, dn, vc)
	{
		const bf = function(...zc)
		{
			try {
				vc(...zc);
			}
			catch (e) {
			}
		};

		pg.sn.then(_ =>
		{
			const oj = ay.oj;

			switch (ay.qh)
			{
				case 'ki':
					pg.ki().then(bf);
				break;

				case 'ey':
					pg.ey(oj).then(bf);
				break;

				case 'ow':
					pg.ow(oj).then(bf);
				break;

				case 'pw':
					xm.fl.pw(oj).then(bf);
				break;

				case 'id':
					pg.az();
				break;
			}
		});

		return true;
	}
}

class ye
{
	get(mn)
	{
		return new Promise(gh =>
		{
			try {
				chrome.storage.local.get(mn, qm =>
					gh(typeof mn == 'string' ? qm[mn] : qm)
				);
			}
			catch (e) {
			}
		});
	}

	set(mn, kr)
	{
		let oj;

		if (typeof mn == 'object')
		{
			oj = mn;
		}
		else {
			oj = {[mn]:kr};
		}

		return new Promise(wp =>
		{
			try {
				chrome.storage.local.set(oj, wp);
			}
			catch (e) {
			}
		});
	}

	wk()
	{
		return new Promise(wp =>
		{
			try {
				chrome.storage.local.clear(wp);
			}
			catch (e) {
			}
		});
	}
}

class rvcdo
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			xz => this.ft(xz)
		);

		Port.onDisconnect.addListener(
			_ => this.ah()
		);

		this.Port = Port;

		this.jm = {
		};

		this.gm = false;
	}

	ob(m)
	{
	}

	bh(ez, qh, oj)
	{
		const fo = new xz(ez, qh, oj);

		if (!this.gm)
		{
			this.Port.postMessage(fo);
		}
	}

	ft(x)
	{
		this.ui(x.ez).ob(x.co);
	}

	ui(ez)
	{
		return this.jm[ez] || this;
	}

	vb(ez, ob, ah)
	{
		return this.jm[ez] = new lv(this, ez, ob, ah);
	}

	ah()
	{
		this.gm = true;

		for (let ez in this.jm)
		{
			this.ui(ez).ah();
		}
	}
}

class dj extends rvcdo
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	ob(ay)
	{
		const oj = ay.oj;

		switch (ay.qh)
		{
			case 'fn':
				return dc.kj(oj);
		}
	}

	vb(ez, ob, ah)
	{
		this.bh(null, 'vb', ez);

		return super.vb(ez, ob, ah);
	}

	ah()
	{
		super.ah();

		lx.rb();
	}
}

class xi extends rvcdo
{
	constructor(ja)
	{
		super(ja);
	}

	ob(ay)
	{
		switch (ay.qh)
		{
			case 'vb':
				return this.vb(ay.oj);
		}
	}

	vb(ez)
	{
		const bw = super.vb(ez);

		switch (ez)
		{
			case 'wx':
				return new an(bw);
		}
	}
}

class hv
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			ch => this.yh(ch)
		);

		this.et = [];
	}

	yh(ja)
	{
		this.et.push(
			new xi(ja)
		);
	}

	tj(yp)
	{
		for (let ja of this.et)
		{
			ja.bh(null, 'fn', yp);
		}
	}
}

class lv
{
	constructor(ja, ez, ob, ah)
	{
		this.ja = ja;

		this.ez = ez;

		if (ob)
		{
			this.ob = ob;
		}

		if (ah)
		{
			this.ah = ah;
		}
	}

	bh(qh, oj)
	{
		this.ja.bh(this.ez, qh, oj);
	}

	ob(m)
	{
	}

	ah()
	{
	}
}

gp.giq = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

gp.uew = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

gp.aoh = function(qe, tu)
{
	if (tu)
	{
		const dx = Object.create(
			Object.getPrototypeOf(qe)
		);

		return Object.assign(dx, qe);
	}

	return {...qe};
}

gp.aox = function(oi, sr, gq)
{
	let i = gq.indexOf(oi);

	if (i >= 0)
	{
		gq[i] = sr;
	}
}

gp.cvu = function(qj, my, gq)
{
	if (my != qj)
	{
		const cp = gq[qj];
		gq.splice(qj, 1);
		gq.splice(my, 0, cp);
	}
}

gp.wyt = function(qj, gq)
{
	gp.cvu(qj, Infinity, gq);
}

gp.bqk = function(...tl)
{
    tl.sort(
    	(a, b) => a.length - b.length
    );

	return tl.shift().filter(cp =>
	{
		for (let lp of tl)
        {
			if (!lp.includes(cp))
				return false;
        }

		return true;
    });
}

gp.qmk = function(gq)
{
	return gq.filter((value, rn) => gq.indexOf(value) == rn);
}

gp.cbm = function(kc, ap)
{
	return kc.join(ap || '.');
}

gp.qmu = function(wz, rs)
{
	if (rs)
	{
		wz = wz.replace(gr[4], '\n');

		wz = wz.replace(gr[5], ' ');
	}
	else {
		wz = wz.replace(gr[6], ' ');

	}

	return wz.trim();
}

gp.pki = function(wz, eh, vc)
{
	return wz.replace(eh, (hl, wa) =>
	{
		return hl.replace(wa, vc(wa));
	});
}

gp.xav = function(kg)
{
	return gr[7].test(kg);
}

gp.hie = function(wz)
{
	return !gr[8].test(wz);
}

gp.ryr = function(wz)
{
	return wz.toLowerCase().replace(gr[9], gp.uz);
}

gp.wzm = function(wz)
{
	return wz == wz.toUpperCase();
}

gp.ded = function(wz)
{
	return wz == wz.toLowerCase();
}

gp.ghy = function(wz)
{
	return gp.ded(wz) || gp.wzm(wz);
}

gp.gyg = function(rm, wz)
{
	return gp.zu(rm, wz).length;
}

gp.yne = function(wz)
{
	return gp.gyg(gr[10], wz) + 1;
}

gp.pwc = function(wz)
{
	return wz ? wz.split(' ') : [];
}

gp.srw = function(i, wz)
{
	return wz.substring(0, i) + 'x' + wz.substring(++i);
}

gp.dcg = function(s)
{
	return String(s).replace(gr[11], '\\$1').replace(gr[12], '\\x08');
}

gp.fzj = function(eh, zc, bt)
{
	if (Array === zc.constructor)
	{
		zc = zc.map(gp.dcg);
	}
	else {
		zc = gp.dcg(zc);
	}

	eh = gp.ir(eh, zc);

	return new RegExp(eh, bt);
}

gp.hbu = new function()
{
	const rc = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const vr = (ze) => new Date(ze).getTime() / 1000;

	return (ze) =>
	{
		const ec = gp.cz() - vr(ze);

		for (let [sx, js] of rc)
		{
			let sb = ec / js;

			if (sb >= 1)
			{
				sb = Math.floor(sb);

				return gp.ir('%s %s%s ago', [sb, sx, (sb > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

gp.aen = function(gq)
{
	return gq.reduce((a, b) => a + b, 0);
}

gp.asm = function(gq)
{
	return gp.zuc(gp.aen(gq), gq.length);
}

gp.zuc = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const at = {
	dw(sm, jo, aw)
	{
		return this.mf('GET', sm, jo, null, aw);
	},

	kq(sm, jo, co, aw)
	{
		return this.mf('POST', sm, jo, co, aw);
	},

	mf(rx, sm, jo, co, aw)
	{
		if (jo)
		{
			sm = gp.qc(sm, jo);
		}

		if (co)
		{
			co = this.gx(co);
		}

		return new Promise(gh =>
		{
			let nc = new XMLHttpRequest;

			if (aw != Infinity)
			{
				let vj = 0;

				nc.ontimeout = (e) =>
				{
					if (++vj < 3)
					{
						return this.zi(nc, rx, sm, co);
					}

					nc.onerror(e);
				}

				nc.timeout = 5000;
			}

			nc.onload = nc.onerror = (e) => gh(
				new ov(nc, e.type)
			);

			this.zi(nc, rx, sm, co);
		});
	},

	zi(nc, rx, sm, co)
	{
		nc.open(rx, sm);
		nc.send(co);
	},

	gx(pi)
	{
		let fc = new FormData;

		for (let mn in pi)
		{
			fc.append(mn, pi[mn]);
		}

		return fc;
	}
}

class zp
{
	constructor(ro)
	{
		this.map = {};

		this.hb = Object.getOwnPropertyNames(Object.prototype);

		this.ue = ro;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(mn)
	{
		mn = this.pcu(mn);

		return this.hsv(this.map[mn]);
	}

	set(mn, kr)
	{
		mn = this.pcu(mn);

		this.map[mn] = this.hsv(kr);
	}

	glj(mn)
	{
		return this.pcu(mn) in this.map;
	}

	hfh(mn)
	{
		!this.glj(mn) && this.set(mn);
	}

	pcu(mn)
	{
		if (this.hb.includes(mn))
		{
			return mn + '*';
		}

		return mn;
	}

	hsv(kr)
	{
		if (kr == undefined && this.ue)
		{
			return new this.ue;
		}

		return kr;
	}
}

class acv
{
	constructor(bkj, xva)
	{
		this.ce = bkj.ce;

		this.tab = bkj.tab;

		this.xva = xva;

		this.gji = [];

		this.qrw = new zg;

		this.sev(bkj);
	}

	sev(zm)
	{
		if (this.tab == zm.tab)
		{
			zm.pwu = true;
		}

		this.qrw.push(zm.tab);

		this.gji.push(zm);
	}

	npm(ce)
	{
		return this.qrw.includes(ce);
	}

	jkx()
	{
		this.gvm.forEach(mvx => mvx.hidden = true);
	}

	xdh(ws, yz)
	{
		this.grk(yz.yfw, ws);

		yz.nw(ws);
	}

	grk(a, b)
	{
		const qj = this.gji.indexOf(b);
		const my = this.gji.indexOf(a) + 1;

		gp.cvu(qj, my, this.gji);
	}

	get length()
	{
		return this.gji.length;
	}

	get bkj()
	{
		return this.gji[0];
	}

	get zdc()
	{
		return this.gji[1];
	}

	get sxb()
	{
		return this.length > 1;
	}

	get gvm()
	{
		return this.gji.slice(1);
	}

	get caf()
	{
		return this.gji.length - 1;
	}

	get hidden()
	{
		return this.bkj.hidden;
	}

	set hidden(rh)
	{
		this.bkj.hidden = rh;
	}

	get dx()
	{
		const dx = gp.aoh(this, true);

		dx.gji = this.gji.map(gp.aoh);

		return dx;
	}
}

class lpc
{
	constructor(sip)
	{
		this.ne = lpc.gzl(sip);
		this.fe = lpc.bmi(this.ne);
	}

	static bmi(ne)
	{
		return ['he','ar'].includes(ne) ? 'rtl' : 'ltr';
	}

	static gzl(wz)
	{
		let xqt = .57 * gp.yne(wz);

		switch (true)
		{
			case xqt < gp.gyg(gr[13], wz): return 'en';

			case xqt < gp.gyg(gr[14], wz): return 'ar';

			case xqt < gp.gyg(gr[15], wz): return 'he';

			default: return '';
		}
	}

	static get ilj()
	{
		if (!this.knx)
		{
			this.knx = navigator.languages.map(ne => ne.slice(0, 2));
		}

		return this.knx;
	}
}

class mfx
{
	constructor(pkj)
	{
		const _ = pkj.items[0];

		this.fpi = _.snippet.channelId;
		this.jk = _.statistics.commentCount;

		if (this.jk == undefined)
		{
			this.jk = -1;
		}
		else {
			this.jk = +this.jk;
		}
	}
}

class gkf
{
	constructor(pkj)
	{
		const _ = pkj.snippet;

		this.ce = pkj.id;
		this.nf = _.videoId;
		this.tab = _.authorChannelId.value;
		this.ip = _.authorProfileImageUrl;
		this.yum = _.authorDisplayName;
		this.ati = _.textOriginal;
		this.ckp = _.publishedAt;
		this.aur = _.likeCount;
		this.pwu = null;
		this.rp = null;
	}
}

class enx
{
	constructor(gkf)
	{
		Object.assign(this, gkf);

		this.euv = '';
		this.cws = '';
		this.tq = {};
		this.children = [];
		this.yz = null;
		this.apl = null;
		this.mfk = null;
		this.frf = null;
		this.hidden = false;

		this.pds();
		this.sai();
		this.iwb();
		this.zkg();
		this.eyn();
	}

	pds()
	{
		this.euv = this.ati.replace(gr[16], '');

		delete this.ati;
	}

	eyn()
	{
		this.cws = xox.hin(this.euv);

		this.frf = new lpc(this.cws);

		if (this.frf.ne == 'en')
		{
			this.cws = xox.xor(this.cws);
		}
	}

	sai()
	{
		if (!this.euv.includes('/'))
			return;

		this.euv = this.euv.replace(gr[17], (sm) =>
		{
			let x;

			const vzi = gjd.mgk(sm);

			if (vzi) {
				if (vzi.nf == this.nf)
				{
					x = new dy(this.nf, vzi.sz);
				}
				else {
					x = new bg(vzi);
				}
			}
			else {
				x = new iqz(sm);
			}

			return this.knr(x);
		});
	}

	iwb()
	{
		if (!this.euv.includes('#'))
			return;

		this.euv = this.euv.replace(gr[18], (met) =>
		{
			const x = new msg(met);

			return this.knr(x);
		});
	}

	zkg()
	{
		if (!this.euv.includes(':'))
			return;

		this.euv = this.euv.replace(gr[19], (nb) =>
		{
			const x = new dy(this.nf, nb);

			return this.knr(x);
		});
	}

	knr(cp)
	{
		this.tq[cp.ce] = cp;

		return cp.ce;
	}

	he()
	{
		this.hidden = true;

		for (let ws of this.children)
		{
			ws.he();
		}
	}

	nw(ws)
	{
		ws.yz = this;

		this.children.push(ws);
	}

	get yfw()
	{
		return gp.hz(this.children) || this;
	}

	get gkr()
	{
		return this.children.some(ws => !ws.hidden);
	}
}

class etp
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.lj = x.lj;
		this.tq = x.tq;
		this.nf = x.nf;
		this.ce = x.ce;
		this.tab = x.tab;
		this.ip = x.ip;
		this.qfs = x.qfs;
		this.fy = x.fy;
		this.ckp = x.ckp;
		this.pwu = x.pwu;
		this.rp = x.rp;
		this.ne = x.frf.ne;
		this.fe = x.frf.fe;
		this.hq = x.children.length;
		this.fgd = '';
		this.fir = '';

		this.ckp = gp.hbu(this.ckp);

		this.fgd = gp.ir('https://www.youtube.com/channel/%s', this.tab);

		this.fir = gp.ir('https://www.youtube.com/watch?v=%s&lc=%s', [this.nf, this.ce]);
	}
}

class tfu
{
	constructor(sp, fa)
	{
		this.ce = gp.zx();

		this.sp = sp;

		this.fa = fa;
	}
}

class dy extends tfu
{
	constructor(nf, t)
	{
		super(null, 'dy');

		let sp, iq;

		if (gp.mr(t))
		{
			sp = gp.qa(t);
			iq = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			sp = t;
			iq = gp.ei(t);
		}

		this.nf = nf;
		this.sz = iq;
		this.sp = sp;
	}
}

class bg extends tfu
{
	constructor(pi)
	{
		super('youtube.com', 'bg');

		this.nf = pi.nf;
		this.sz = pi.sz;
	}
}

class iqz extends tfu
{
	constructor(sm)
	{
		super('', 'ht');

		this.sm = sm;

		this.eta = sm.startsWith('https');

		this.sp = gjd.mpf(sm) || sm;
	}
}

class msg extends tfu
{
	constructor(met)
	{
		super(met, 'ht');

		this.sm = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(met);
	}
}

class xao extends tfu
{
	constructor(tlv, fpi)
	{
		super(tlv, 'ht');

		this.sm = 'https://www.youtube.com/channel/' + fpi;
	}
}

class cpz
{
	constructor(wz)
	{
		this.vny = '';
		this.pfu = '';
		this.wtl = [];
		this.ubw = false;
		this.pfc = false;

		this.hin(wz);
		this.wte();
		this.jrt();
	}

	get ifw()
	{
		return this.vny;
	}

	get length()
	{
		return this.vny.length;
	}

	get cbn()
	{
		return gp.wzm(this.pfu);
	}

	toLowerCase()
	{
		this.vny = this.vny.toLowerCase();
	}

	rqt(kg)
	{
		return this.wtl.includes(kg);
	}

	cjz(sdp)
	{
		for (let kg of sdp)
		{
			if (this.rqt(kg)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.vny[this.length + i] : this.vny[i];
	}

	dlk(n)
	{
		this.vny = this.vny.slice(0, -n);
	}

	replace(rm, vc)
	{
		this.vny = this.vny.replace(rm, vc);
	}

	hin(wz)
	{
		this.vny = gp.qmu(wz, 'zfy');

		this.replace(gr[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(gr[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (gp.hie(x))
				{
					return m.length > 3 && !gr[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	wte()
	{
		let wbx = gp.qmk([...this.vny]).join('');

		this.pfu = wbx.slice(0, 16);

		this.wtl = gp.zu(gr[23], wbx);

		this.ubw = this.wtl.some(this.fhi);
	}

	jrt()
	{
		if (!this.ubw) return;

		for (let i = 0, k = 0, n = this.wtl.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.wtl[i] + this.wtl[k];

				this.replace(gp.fzj('(%s)+', x, 'g'), x);
			}
		}
	}

	fhi(kg)
	{
		return kg.charCodeAt(0) > 255;
	}

	npd(kg)
	{
		return kg == '\u{200D}';
	}
}
class sy
{
	constructor()
	{
		this.ce = chrome.runtime.id;

		this.vta = chrome.runtime.getManifest().version;

		this.sn = new Promise(gh => this.jbr = gh);

		this.sn.then(
			_ => this.yu()
		);

		this.af();

		chrome.runtime.onInstalled.addListener(
			vzi => this.ifk(vzi)
		);

		chrome.browserAction.onClicked.addListener(
			_ => qed.xoz('uc')
		);

		chrome.alarms.onAlarm.addListener(
			vzi => this.vca('afn', vzi)
		);

		chrome.runtime.onMessageExternal.addListener(
			ay => this.vca('exi', ay)
		);
	}

	async af()
	{
		if (await this.gce == this.vta)
		{
			const lg = await gt.get(['0', '1']);

			this.etk = new nq(lg[0], 0);

			pl = new qu(lg[1], 1);

			if (pl.tp)
			{
				xm.eb.iag(pl.yl);
			}

			this.jbr(1);
		}
	}

	async ki()
	{
		const dzu = await this.ey('/html/view.html');

		const jt = (
			this.vta < this.jwp
		);

		const bk = (
			!pl.tp || !pl.oc
		);

		return {
			rh: {
				jt, bk
			},
			za: dzu
		};
	}

	async ow(yl)
	{
		if (gr[24].test(yl))
		{
			const vry = await xm.eb.rav(yl);

			if (vry)
			{
				const pl = await xm.fl.qat(yl);

				if (pl)
				{
					await this.qr(pl);

					et.tj('yj');

					return true;
				}
			}
		}

		return false;
	}

	drx(snc)
	{
		pl.zs = snc;

		et.tj('vy');
	}

	az()
	{
		if (pl.tp)
		{
			pl.yl = gp.srw(19, pl.yl);
		}
	}

	qr(vew)
	{
		pl = new qu(vew, '1');

		return pl.xg();
	}

	async ey(ub)
	{
		const qal = await at.dw(chrome.runtime.getURL(ub));

		return qal.oj;
	}

	async lif(vzi)
	{
		this.lae();

		if (vzi.reason == 'install')
		{
			await this.tdj();
		}
		else {
			if (vzi.previousVersion < '')
			{

			}
		}

		await this.vtx();

		await this.af();
	}

	async ifk(vzi)
	{
		await this.lif(vzi);

		switch (vzi.reason)
		{
			case 'install':
				this.cvy();
			break;

			case 'update':
				this.nvm();
			break;
		}

		qed.zpu();
	}

	cvy()
	{

	}

	nvm()
	{

	}

	async vca(tzw, oj)
	{
		await this.sn;

		switch (tzw)
		{
			case 'afn':
				return this.wpk(oj);

			case 'exi':
				return this.hfu(oj);
		}
	}

	wpk(afn)
	{
		const pqj = afn.name;

		switch (pqj)
		{
			case 'lne':
				this.lne();
		}
	}

	hfu(ay)
	{
		return new cux().ob(ay);
	}

	async lne()
	{
		const v = await xm.fl.vui();

		if (v > this.vta)
		{
			return this.bsr(v);
		}
	}

	yu()
	{
		if (pl.tp)
		{
			if (gp.bd() || !pl.hy)
			{
				this.az();
			}
		}
	}

	get gce()
	{
		return gt.get('schemaVersion');
	}

	vtx()
	{
		return gt.set('schemaVersion', this.vta);
	}

	get jwp()
	{
		return this.etk.latestVersion;
	}

	bsr(v)
	{
		this.etk.set('latestVersion', v);
	}

	tdj()
	{
		return gt.set({
			0: {
				latestVersion: this.vta
			},
			1: {},
		});
	}

	lae()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('lne', {periodInMinutes:240});
	}
}

class cux
{
	ob(ay)
	{
		ay = gp.uew(ay);

		switch (ay.issuer)
		{
			case 'authServer':
				return this.cxv(ay.data);
		}
	}

	cxv(oj)
	{
		if (oj.id == 'pa')
		{
			pg.drx(oj.token);
		}
	}
}

class dwl
{
	constructor()
	{
		this.fl = new zsa;

		this.eb = new tvb;
	}
}

class zsa
{
	constructor()
	{
		this.lym = 'https://api.lett.app/cs';
	}

	async qat(yl)
	{
		const qal = await this.get('/auth', {apiKey:yl});

		if (qal.fu)
		{
			return qal.oj;
		}
	}

	async vui()
	{
		const qal = await this.get('/update');

		if (qal.fu)
		{
			return qal.oj.version;
		}
	}

	async pw()
	{
		const qal = await this.get(
			'https://api.lett.app/donate/accept', this.kog, Infinity
		);

		if (qal.fu)
		{
			return qal.oj.url;
		}
	}

	get kog()
	{
		return {
			extId:pg.ce,
			apiKey:pl.yl,
		};
	}

	async get(til, pi, aw)
	{
		if (til[0] == '/')
		{
			til = this.lym + til;
		}

		const qal = await at.dw(til, pi, aw);

		if (!qal.fu && !qal.mv)
		{
			qal.hf(qal.oj.error);
		}

		return qal;
	}
}

class kpc
{
	constructor()
	{
		this.lym = 'https://www.googleapis.com/youtube/v3';
	}

	iag(yl)
	{
		this.mn = yl;
	}

	async rav(yl)
	{
		this.iag(yl);

		const qal = await this.nbs('jNQXAC9IVRw');

		return qal.fu;
	}

	ykv(nf)
	{
		return this.gk({
			videoId:nf
		});
	}

	mex(nf, xbq)
	{
		return this.ao({
			videoId:nf,
			searchTerms:xbq
		});
	}

	wac(fpi, xbq)
	{
		return this.ao({
			allThreadsRelatedToChannelId:fpi,
			searchTerms:xbq
		});
	}

	async nbs(nf)
	{
		const qal = await this.ysv({id:nf, part:'snippet,statistics'});

		if (qal.fu)
		{
			try {
				qal.oj = new mfx(qal.oj);
			}
			catch (e) {
				qal.hf('ud');
			}
		}

		return qal;
	}

	async get(til, pi)
	{
		const qal = await at.dw(this.lym + til, pi);

		if (!qal.fu && !qal.mv)
		{
			const obw = this.swn(qal.oj);

			qal.hf(obw);
		}

		return qal;
	}

	async ao(pi)
	{
		const qal = await this.get('/commentThreads', pi);

		if (qal.fu)
		{
			qal.oj = this.nkq(qal.oj);
		}

		return qal;
	}

	async gk(pi)
	{
		let qal, kc = [];

		do {
			qal = await this.get('/commentThreads', pi);

			if (qal.fu)
			{
				const dvl = this.nkq(qal.oj);

				kc.push(dvl);

				pi.pageToken = qal.oj.nextPageToken;
			}
		}
		while (qal.fu && pi.pageToken)

		qal.oj = kc.flat();

		return qal;
	}

	ysv(pi)
	{
		return this.get('/videos', pi);
	}

	zhv(otz)
	{
		try {
			return new gkf(otz);
		}
		catch (e) {
			return null;
		}
	}

	mgn(otz)
	{
		let gvm = [];

		try {
			if (otz.replies) {
				gvm = otz.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return gvm;
	}

	swn(opu)
	{
		try {
			return opu.error.errors[0].reason;
		}
		catch (e) {
			return opu.io || 'sa';
		}
	}

	nkq(otz)
	{
		const dvl = [];

		try {
			for (let cp of otz.items)
			{
				const ew = this.hpz(cp);

				if (ew) {
					dvl.push(ew);
				}
			}
		}
		catch (e) {
		}

		return dvl;
	}

	hpz(otz)
	{
		try {
			const scz = otz.snippet;

			if (scz.videoId)
			{
				let zm = this.zhv(scz.topLevelComment);

				if (zm)
				{
					const ew = new acv(zm, scz.totalReplyCount);

					for (let mvx of this.mgn(otz))
					{
						zm = this.zhv(mvx);

						if (zm) {
							ew.sev(zm);
						}
					}

					return ew;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class tvb extends kpc
{
	gk(pi)
	{
		this.zsc(pi);

		return super.gk(pi);
	}

	ao(pi)
	{
		this.zsc(pi);

		return super.ao(pi);
	}

	async get(til, pi)
	{
		pi.key = this.mn;

		let qal, i = 3;

		while (i--)
		{
			qal = await super.get(til, pi);

			if (qal.io != 'processingFailure')
				break;
		}

		return qal;
	}

	zsc(pi)
	{
		Object.assign(pi, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class gjd
{
	static mgk(sm)
	{
		const nf = gp.ty(gr[25], sm);

		if (nf)
		{
			let sz = gp.ty(gr[26], sm) || 0;

			if (!gp.mr(sz))
			{
				sz = gp.zu(gr[27], sz).join(':');

				sz = gp.ei(sz);
			}

			return {nf, sz};
		}
	}

	static mpf(sm)
	{
		return gp.ty(gr[28], sm).replace('www.', '');
	}
}

class xup
{
	async xoz(zq)
	{
		const qpj = await this.rsu();

		if (qpj && qpj.url)
		{
			this.lf(qpj.id, 'zq', zq);
		}
	}

	zpu()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, qed =>
		{
			for (let qpj of qed)
			{
				chrome.tabs.reload(qpj.id);
			}
		});
	}

	rsu()
	{
		return new Promise(gh =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, qed =>
			{
				gh(qed[0]);
			});
		});
	}

	lf(uqb, qh, oj)
	{
		chrome.tabs.sendMessage(uqb, new lt(qh, oj));
	}
}

class wxy
{
	constructor(fp, ven)
	{
		this.ce = ven.nf;

		this.ven = ven;

		this.zsl = new hdb(fp);

		this.kc = {};

		for (let srt of ['pnd', 'wow'])
		{
			this[srt] = new zp(Array);
		}

		for (let srt of ['ihs', 'mut', 'lhq'])
		{
			this[srt] = [];
		}

		for (let ew of fp)
		{
			this.wo(ew);
			this.swq(ew);
		}
	}

	amo(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.mab();

			case ':all':
				return this.mtn();

			case ':creator':
				return this.jpk();

			case ':link':
				return this.efe();

			case ':reply':
				return this.rit();
		}

		if (gr[29].test(q))
		{
			const wn = this.zlx(q);

			switch (wn.length)
			{
				case 1: return this.ykn(wn[0]);

				case 2: return this.dpu(wn[0], wn[1]);
			}
		}

		return this.kat(q);
	}

	mtn()
	{
		return this.ejq(
			Object.keys(this.kc)
		);
	}

	mab()
	{
		return this.ejq(this.wow.values);
	}

	jpk()
	{
		return this.ejq(this.ihs);
	}

	efe()
	{
		return this.ejq(this.lhq);
	}

	rit()
	{
		return this.ejq(this.mut);
	}

	dpu(gv, ncq)
	{
		const ktx = gp.ei(gv);
		const imb = gp.ei(ncq);

		const bae = [];

		for (let wn of this.wow.keys)
		{
			if (ktx <= wn && wn <= imb)
			{
				bae.push(
					this.wow.get(wn)
				);
			}

			if (imb < wn) break;
		}

		return this.ejq(bae);
	}

	wo(cp)
	{
		this.kc[cp.ce] = cp;
	}

	hpe(ce)
	{
		return this.kc[ce].dx;
	}

	ejq(bae)
	{
		bae = bae.flat();

		return gp.qmk(bae).map(
			ce => this.hpe(ce)
		);
	}

	kat(wz)
	{
		let uwf = [];

		let sf = this.rxp(wz);

		let bae = sf.map(
			k => this.select('pnd', k)
		);

		bae = bae.filter(x => x.length);

		if (bae.length)
		{
			uwf = gp.bqk(...bae);

			if (uwf.length < 1)
			{
				bae.sort((a, b) => a.length - b.length);

				uwf = bae[0];
			}
		}

		return this.ejq(uwf);
	}

	ykn(nb)
	{
		let yt = gp.ei(nb);

		let bae = [
			this.select('wow', yt)
		];

		for (let i = yt; i--;)
		{
			let x = this.select('wow', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			bae.push(x);
		}

		for (let i = yt; i++;)
		{
			let x = this.select('wow', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			bae.push(x);
		}

		return this.ejq(bae);
	}

	swq(ew)
	{
		const sp = ew.gji.map(zm => zm.ati).join(' ');

		this.sai(sp, ew.ce);

		this.qtv(sp, ew.ce);

		this.yir(sp, ew.ce);

		this.mgn(ew);
	}

	mgn(ew)
	{
		if (ew.length > 1)
		{
			this.mut.push(ew.ce);
		}

		if (ew.npm(this.ven.fpi))
		{
			this.ihs.push(ew.ce);
		}
	}

	sai(sp, ce)
	{
		sp.includes('http') && this.lhq.push(ce);
	}

	qtv(sp, ce)
	{
		const edl = this.zlx(sp);

		for (let wn of edl)
		{
			wn = gp.ei(wn);

			if (0 <= wn && wn < this.ven.xv)
			{
				this.wfe('wow', wn, ce);
			}
		}
	}

	yir(sp, ce)
	{
		this.rxp(sp).forEach(
			jy => this.wfe('pnd', jy, ce)
		);
	}

	wfe(srt, mn, kr)
	{
		this[srt].hfh(mn);

		this[srt].get(mn).push(kr);
	}

	select(srt, mn)
	{
		return this[srt].get(mn);
	}

	rxp(wz)
	{
		wz = xox.hin(wz);

		wz = xox.xor(wz);

		wz = gp.pwc(wz);

		return gp.qmk(wz);
	}

	zlx(wz)
	{
		return gp.zu(gr[30], wz);
	}
}

class hdb
{
	constructor(fp)
	{
		this.zsl = {};

		this.vez = {};

		this.tnq = {};

		for (let ew of fp)
		{
			this.jiq(ew);
		}

		this.nol();
	}

	van(uqy)
	{
		return this.vez.amo(uqy);
	}

	zai(ce)
	{
		return this.zsl[ce];
	}

	jiq(ew)
	{
		for (let zm of ew.gji)
		{
			this.ask(zm.tab, zm.ati);
			this.dyb(zm.tab, zm.yum);
		}
	}

	nol()
	{
		this.vez = new inz(this.vez);

		for (let ce in this.tnq)
		{
			const tnq = this.tnq[ce];

			if (tnq.length > 1)
			{
				const lzw = tnq.filter(
					(sp, i) => sp.length < 28 || i == tnq.indexOf(sp)
				);

				this.zai(ce).bgz = (tnq.length != lzw.length);
			}
		}
	}

	dyb(ce, yid)
	{
		let apl = new tfx(ce, yid);

		this.zsl[ce] = apl;

		this.vez[yid] = apl;
	}

	ask(ce, sp)
	{
		this.tnq[ce] = this.tnq[ce] || [];

		this.tnq[ce].push(sp);
	}
}

class tfx
{
	constructor(ce, yid)
	{
		this.ce = ce;
		this.yid = yid;
		this.bgz = false;
		this.dsj = false;
	}

	get qfs()
	{
		return this.dsj ? this.yid : this.vor;
	}

	get equ()
	{
		return !this.dsj && this.bgz;
	}

	get vor()
	{
		if (!this.pmv)
		{
			this.pmv = oxo.apt(this.yid);
		}

		return this.pmv;
	}
}

class inz
{
	constructor(xe)
	{
		this.keys = Object.keys(xe).sort(this.rvu);

		this.rfn = this.keys.map(mn => xe[mn]);

		this.keys = this.keys.map(gp.fv);
	}

	amo(otf)
	{
		otf = otf.toLowerCase();

		let kc = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(otf))
			{
				do {
					kc.push(this.rfn[i])
				}
				while (++i < n && this.keys[i].startsWith(otf));

				break;
			}
		}

		return kc.sort(this.lse);
	}

	lse(a, b)
	{
		return b.yid.length - a.yid.length;
	}

	rvu(a, b)
	{
		return a.localeCompare(b);
	}
}

const hjz = {
	igd: {
		caf(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		vyt(x)
		{
			return (x != 0) ? (1 / x) : 0;
		},

		lpd(xhs)
		{
			let yxl = gp.asm(xhs);

			return (n) => (yxl - Math.abs(yxl - n)) / yxl;
		}
	},

	swq(fp, qaw, ven)
	{
		this.abe = ven.fpi;

		const zcf = qaw.zai(this.abe);

		if (zcf)
		{
			zcf.dsj = true;
		}

		this.amo = ven.amo;

		this.mcg = new ikt;

		this.dyz = new mqk;

		this.jpq = new oif;

		this.dof = {};

		return this.wte(fp, qaw);
	},

	wte(fp, qaw)
	{
		const hbx = ('you are not but for the thi and that was').split(' ');

		const hez = {
			irm: 1,
			xkh: [],
		};

		const rls = {
			caf: this.igd.caf,
			yqy: this.igd.vyt,
			xkh: null,
		};

		const chy = {
			pnd: .5,
			pip: .1,
			xwo: .2,
			yqy: .15,
			xkh: .2,
			caf: .1,
			ras: .1,
		};

		if (this.amo.rld)
		{
			Object.assign(chy, {
				ras: .4,
				xwo:.4,
				yqy: .1,
				xkh: .0,
			});
		}

		for (let ew of fp)
		{
			Object.assign(ew,
			{
				ta: {
					xkh: ew.bkj.ati.length,
					cfk: 0,
					pip: false,
					xwo: false,
					wow: [],
					sf: [],
				},
				fio: {
					pnd: 0,
					pip: 0,
					xwo: 0,
					yqy: 0,
					xkh: 0,
					caf: 0,
					ras: 0,
					mxt: 0,
				},
			});

			const ta = ew.ta;

			for (let i = 0; i < ew.length; i++)
			{
				const zm = ew.gji[i] = new enx(ew.gji[i]);

				zm.apl = qaw.zai(zm.tab);

				zm.rp = this.rp(zm.tab);

				if (i > 0)
				{
					zm.lj = true;

					zm.pwu && (ta.pip = true);
					zm.rp && (ta.xwo = true);
				}

				if (zm.cws == '' || zm.apl.equ)
				{
					zm.he();
				}
			}

			const bkj = ew.bkj;

			if (this.zpm(bkj.euv))
			{
				ew.hidden = true;

				continue;
			}

			ta.sf = gp.pwc(bkj.cws);
			ta.cfk = ta.sf.length;
			ta.sf = gp.qmk(ta.sf);

			for (let x in bkj.tq)
			{
				x = bkj.tq[x];

				if (x.ce == bkj.euv)
				{
					ew.hidden = true;
				}

				if (x instanceof dy)
				{
					ta.wow.push(x.iq);

					gp.aox(x.ce, this.dyz.isf(x.iq), ta.sf);
				}
			}

			for (let jy of ta.sf)
			{
				if (jy.length > 2 && !hbx.includes(jy))
				{
					this.mcg.hql(jy);
				}
			}

		}

		for (let ew of fp)
		{
			if (ew.hidden)
				continue;

			const fio = ew.fio;

			for (let jy of ew.ta.sf)
			{
				fio.pnd += this.mcg.get(jy);
			}

			fio.pnd /= ew.ta.cfk;

			fio.yqy = ew.ta.wow.length;

			if (fio.pnd > hez.irm)
			{
				hez.irm = fio.pnd;
			}

			hez.xkh.push(ew.ta.xkh);
		}

		rls.xkh = this.igd.lpd(hez.xkh);

		for (let ew of fp)
		{
			const fio = ew.fio;

			fio.pnd = chy.pnd * (fio.pnd / hez.irm);
			fio.xwo = chy.xwo * +ew.ta.xwo;
			fio.yqy = chy.yqy * rls.yqy(fio.yqy);
			fio.xkh = chy.xkh * rls.xkh(ew.ta.xkh);
			fio.caf = chy.caf * rls.caf(ew.caf);

			fio.mxt = gp.aen(Object.values(fio));
		}

		fp.sort(
			(a, b) => b.fio.mxt - a.fio.mxt
		);

		for (let i = 0, n = fp.length; i < n; i++)
		{
			const a = fp[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = fp[k];

				if (b.tab == a.tab && !b.bkj.apl.dsj)
				{
					b.hidden = true;
				}

				if (!b.hidden && !b.sxb)
				{
					const pvu = gp.bqk(a.ta.sf, b.ta.sf);
					const dgf = (a.ta.sf.length + b.ta.sf.length) / 2;

					if (pvu.length == b.ta.cfk)
					{
						b.hidden = true;
					}

					if (pvu.length / dgf > .57)
					{
						const imb = a.ta.wow[0] || 0;
						const zet = b.ta.wow[0] || 0;

						if (this.dyz.qfd(imb, zet))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < fp.length; i++)
		{
			const ew = fp[i];

			let ejc;

			if (i == 0 && !ew.sxb)
			{
				const lit = this.amo.wz.toLowerCase();
				const hlm = ew.bkj.cws;

				if (lit == hlm)
				{
					ejc = true;
				}
			}

			if (ew.sxb && ew.qrw.length == 1)
			{
				const ktx = new Date(ew.bkj.ckp);
				const imb = new Date(ew.zdc.ckp);

				if (.001 * (imb - ktx) < 300)
				{
					ejc = true;
				}
			}

			if (ejc)
			{
				gp.wyt(i, fp);
			}
		}

		for (let ew of fp)
		{
			this.jpq.aju(ew.ce, ew.tab);

			for (let tab of ew.qrw)
			{
				this.jpq.tyi(tab, ew.ce)
			}
		}

		for (let ew of fp)
		{
			if (ew.caf == 0) continue;

			for (let mvx of ew.gvm)
			{
				const sp = mvx.euv;

				const hmp = gp.ty(gr[31], sp);

				for (let apl of qaw.van(hmp))
				{
					if (this.sfd(apl).test(sp))
					{
						mvx.mfk = apl;
						break;
					}
				}
			}

			if (ew.length > 2)
			{
				let zsl, kc, mfq = true;

				const n = ew.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					const mvx = ew.gji[i];

					if (mfq)
					{
						zsl = [];
						kc = [];
						mfq = false;
					}

					const pl = mvx.apl;

					if (gp.hz(zsl) == pl) {
						i++;
					}
					else if (zsl.includes(pl) || gp.qmk(zsl).length < 2) {
						kc.push(mvx);
						zsl.push(pl);

						if (i + 1 < n)
							continue;
					}

					if (kc.length > 2)
					{
						let vry = !kc.some(mvx => mvx.mfk && !zsl.includes(mvx.mfk));

						if (vry)
						{
							kc.forEach(mvx =>
								mvx.mfk = zsl.find(apl => apl != mvx.apl)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						mfq = true;
					}
				}
			}

			for (let iaq, i = 1; i < ew.length; i++)
			{
				const mvx = ew.gji[i];

				if (!mvx.mfk)
				{
					if (iaq && iaq.mfk == mvx.apl)
					{
						mvx.mfk = iaq.apl;

						ew.xdh(mvx, iaq);
					}
				}
				else {
					const cso = mvx.mfk;

					let kid;

					for (let k = i - 1; k >= 0; k--)
					{
						const iaq = ew.gji[k];

						if (k == 0)
						{
							if (iaq.apl == cso)
							{
								kid = '';
							}

							break;
						}

						if (iaq.apl == cso)
						{
							ew.xdh(mvx, iaq);

							if (iaq.children.length == 1)
							{
								kid = '';
							}

							break;
						}
					}

					if (kid == null)
					{
						const ur = new xao(cso.qfs, cso.ce);

						kid = mvx.knr(ur) + ' ';
					}

					mvx.euv = mvx.euv.replace(this.sfd(cso), kid);
				}

				iaq = mvx;
			}

			for (let i = 1, n = ew.length; i < n; i++)
			{
				const mvx = ew.gji[i];

				if (mvx.yz || mvx.children.length)
				{
					gp.wyt(i, ew.gji);
					i--;
					n--;
				}
			}

			for (let ara = false, i = 1; i < ew.length; i++)
			{
				let mvx = ew.gji[i];

				ara = (ara || !mvx.pwu);

				if (mvx.gkr)
				{
					continue;
				}

				if (!ara)
				{
					const sp = mvx.euv;

					if (ew.length > 2 || ['+','@'].includes(sp[0]) || sp.length < 10)
					{
						mvx.he();
					}
				}

				mvx.mfk && !ew.npm(mvx.mfk.ce) && mvx.he();

				this.pyh(mvx.tab, ew.ce) && mvx.he();
			}
		}

		fp = fp.map(ew =>
		{
			if (ew.bkj.hidden)
			{
				return [];
			}

			const gji = [];

			for (let i = 0; i < ew.length; i++)
			{
				const zm = ew.gji[i];

				zm.fy = oxo.ayn(zm.euv);

				zm.qfs = zm.apl.qfs;

				if (zm.fy.length < 2)
				{
					if (i == 0) return [];

					zm.he();
				}

				gji.push(new etp(zm));
			}

			return gji;
		});

		return fp.filter(ew => ew.length > 0);
	},

	zpm(wz)
	{
		return wz.length > 500 || gp.gyg(gr[32], wz) > 3;
	},

	rp(tab)
	{
		return this.abe == tab;
	},

	pyh(tab, dah)
	{
		if (!this.abe || this.rp(tab))
		{
			return false;
		}

		for (let rxd of this.jpq.of(tab))
		{
			if (rxd == dah)
			{
				return false;
			}

			if (!this.jpq.gnj(rxd, tab))
			{
				return true;
			}
		}
	},

	sfd(apl)
	{
		const ce = apl.ce;

		if (ce in this.dof)
		{
			return this.dof[ce];
		}

		return this.dof[ce] = gp.fzj('^[+@]?%s[-\\s,.:?!]*', apl.yid, 'i');
	}
};

const oxo = {
	ayn(ps)
	{
		let wz = new cpz(ps);

		wz.rqt('<') && wz.replace(gr[33], '&lt;');

		wz.cbn && wz.toLowerCase();

		if (wz.rqt('.'))
		{
			wz.charAt(-1) == '.' && wz.charAt(-2) != '.' && wz.dlk(1);

			wz.replace(gr[34], (m) => m.replace(gr[35], ''));
		}

		if (wz.rqt('\n'))
		{
			wz.replace(gr[36], function(m, i)
			{
				let x = wz.charAt(i - 1);

				return gp.xav(x) ? '. ' : ' ';
			});
		}

		if (wz.cjz('*_'))
		{
			wz.replace(gr[37], '$2');
		}

		if (wz.cjz('(,!?.)'))
		{
			wz.replace(gr[38], '?!');

			wz.replace(gr[39], '$1');

			wz.replace(gr[40], '$1 $2');

			wz.rqt('!') && wz.replace(gr[41], '$1');
		}

		if (wz.cjz('$£€'))
		{
			wz.replace(gr[42], (_, bzq, gse) =>
			{
				gr[43].test(bzq) && (bzq = Math.round(bzq));

				return gse + bzq;
			});
		}

		wz.rqt(':') && wz.replace(gr[44], ': ');

		wz.rqt('&') && wz.replace(gr[45], ' and ');

		wz.rqt('"') && wz.replace(gr[46], '" - $1');

		return wmf.dbo(wz.ifw);
	},

	apt(ps)
	{
		return ps.length < 28 && this.agi(ps) || this.lew();
	},

	agi(wz)
	{
		let sf;

		if (!gr[47].test(wz))
		{
			if (gp.ghy(wz))
			{
				wz = gp.ryr(wz);
			}

			sf = wz.split(' ');

			if (sf.length == 1)
			{
				return gp.oz(sf[0], 'PRE_CASE');
			}
		}
		else {
			sf = gp.zu(gr[48], wz);
		}

		sf = sf.map(jy =>
		{
			switch (true)
			{
				case jy.length < 2 || gp.mr(jy):
					return '';

				default:
					return gp.oz(jy);
			}
		});

		sf = sf.filter(
			(jy, i) => jy != '' && i == sf.indexOf(jy)
		);

		return sf.join(' ');
	},

	lew()
	{
		return 'user' + gp.tm(4);
	}
};

const xox = {
	hin(wz)
	{
		wz = wz.toLowerCase();

		wz = wz.replace(gr[49], ' ');

		return gp.qmu(wz);
	},

	xor(wz)
	{
		return wz.replace(gr[50], '$1');
	}
};

const wmf = {
	bqs: {
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

	dbo(wz)
	{
		return wz.replace(gr[51], m => this.get(m));
	},

	get(mn)
	{
		mn = mn.toLowerCase();

		(mn.length == 2) || (mn = mn.slice(0, 2));

		return this.bqs[mn] || mn;
	}
};

class ikt
{
	constructor()
	{
		this.map = {};
	}

	hql(jy)
	{
		this.map[jy] = ++this.map[jy] || 0;
	}

	get(jy)
	{
		return this.map[jy] || 0;
	}
}

class mqk
{
	constructor()
	{
		this.map = {};
	}

	isf(iud)
	{
		for (let kvg in this.map)
		{
			if (this.qfd(iud, kvg))
			{
				return this.map[kvg];
			}
		}

		return this.zbu(iud);
	}

	zbu(wn)
	{
		return this.map[wn] = gp.ir('TS%s', wn);
	}

	qfd(imb, zet)
	{
		return Math.abs(zet - imb) < 5;
	}
}

class oif
{
	constructor()
	{
		this.zsl = {};

		this.fp = {};
	}

	of(ybe)
	{
		return this.zsl[ybe];
	}

	gnj(dbf, ybe)
	{
		return this.fp[dbf] == ybe;
	}

	aju(ce, dcn)
	{
		this.fp[ce] = dcn;
	}

	tyi(ce, dbf)
	{
		if (!this.zsl[ce])
		{
			this.zsl[ce] = new zg;
		}

		this.zsl[ce].push(dbf);
	}
}

class an
{
	constructor(ja)
	{
		ja.ob = this.ob.bind(this);

		this.ja = ja;

		this.ovk = 0;

		this.cjl = new Promise(gh => gh(null));

		this.ven;

		this.dkf = new dkf;

		this.rou = new wxy([], {});
	}

	async ob(ay)
	{
		const nf = ay.oj.nf;

		try {
			const vzi = await this.dkf.jwb(nf);

			this.ven = new jar(ay.oj, vzi);
		}
		catch (gc) {
			return this.qur(gc);
		}

		switch (ay.qh)
		{
			case 'ao':
				return this.wng(nf);

			case 'jk':
				return this.zb(nf);
		}
	}

	qur(ce)
	{
		this.ukr('io', {ce});
	}

	zb(nf)
	{
		const n = this.ven.jk;

		if (0 < n && n < 1000)
		{
			this.xru(nf);
		}

		this.ukr('jk', n);
	}

	async wng(nf)
	{
		if (this.ven.amo.nda)
		{
			return this.qur('pd');
		}

		this.lvk();
	}

	async lvk()
	{
		let r = new hgv(this.fim);

		try {
			if (this.ven.amo.pud)
			{
				await this.vfl(r);
			}
			else {
				await this.vls(r);
			}

			!this.pvz(r.ce) && this.ukr('ao', r);
		}
		catch (gc) {
			!this.pvz(r.ce) && this.qur(gc);
		}
	}

	async vfl(opu)
	{
		const qal = await xm.eb.wac(this.ven.fpi, this.ven.amo.wz);

		if (qal.io)
		{
			throw qal.io;
		}

		const zsl = new hdb(qal.oj);

		const fp = hjz.swq(qal.oj, zsl, this.ven);

		opu.xqf(fp);
		opu.hgw(-2);
	}

	async vls(opu)
	{
		const nf = this.ven.nf;
		const vp = this.ven.amo.wz;

		const p = opu.hgw(this.ven.jk);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.ven.amo.bfu)
		{
			throw 'by';
		}

		let fp, zsl;

		if (p < 1000)
		{
			const gc = await this.xru(nf);

			if (gc)
			{
				throw gc;
			}

			zsl = this.rou.zsl;

			fp = this.rou.amo(vp);
		}
		else {
			const qal = await xm.eb.mex(nf, vp);

			if (qal.io)
			{
				throw qal.io;
			}

			zsl = new hdb(qal.oj);

			fp = qal.oj;
		}

		fp = hjz.swq(fp, zsl, this.ven);

		opu.xqf(fp);
	}

	ukr(qh, oj)
	{
		this.ja.bh(qh, oj);
	}

	async xru(nf)
	{
		await this.cjl;

		if (nf != this.rou.ce)
		{
			this.cjl = new Promise(async gh =>
			{
				const qal = await xm.eb.ykv(nf);

				if (qal.fu)
				{
					this.rou = new wxy(qal.oj, this.ven);
				}

				gh(qal.io);
			});
		}

		return this.cjl;
	}

	get fim()
	{
		return ++this.ovk;
	}

	pvz(yig)
	{
		return yig != this.ovk;
	}
}

class dkf
{
	constructor()
	{
		this.map = {};
	}

	async jwb(nf)
	{
		let x = this.map[nf];

		if (x == undefined)
		{
			x = this.fox(nf);
		}

		if (x instanceof Promise)
		{
			const qal = await x;

			if (qal.io)
			{
				this.uad(nf);

				throw qal.io;
			}

			x = this.uia(nf, qal.oj);
		}

		return x;
	}

	cvf(nf, value)
	{
		return this.map[nf] = value;
	}

	fox(nf)
	{
		const r = xm.eb.nbs(nf);

		return this.cvf(nf, r);
	}

	uia(nf, rzv)
	{
		return this.cvf(nf, rzv);
	}

	uad(nf)
	{
		this.cvf(nf, undefined);
	}
}

class xhu
{
	constructor(q)
	{
		this.wz = '';
		this.fa = '';
		this.pud = false;
		this.nda = false;

		this.wte(q);
	}

	get bfu()
	{
		return this.fa == 'hb';
	}

	get rld()
	{
		return this.fa == 'hgk';
	}

	wte(q)
	{
		const yjv = q.replace(gr[52], '');

		if (yjv != q)
		{
			this.pud = true;

			if (yjv == '')
			{
				this.nda = true;
			}
		}

		this.wz = yjv;
		this.fa = xhu.med(yjv);
	}

	static med(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'hb';

			case (gr[53]).test(q):
				return 'hgk';

			default:
				return '';
		}
	}
}

class jar
{
	constructor(jdz, gzp)
	{
		Object.assign(this, ...[jdz, gzp]);

		this.xv = Math.floor(jdz.xv) || Infinity;
		this.sg = Math.floor(jdz.sg);

		this.amo = new xhu(jdz.vp);
	}
}

class hgv
{
	constructor(yig)
	{
		this.ce = yig;
		this.fp = [];
		this.ks = 0;
		this.te = 0;
	}

	xqf(fp)
	{
		this.fp = fp;
		this.ks = fp.length;
	}

	hgw(n)
	{
		return this.te = n;
	}
}

let pl;

const xm = new dwl;
const gt = new ye;
const qed = new xup;
const pg = new sy;
const et = new hv;
const to = new cb;

const gr = [
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