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

	return un != 1988;
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
class ol
{
	ge(yz)
	{
		this.yz = yz;
	}

	cl(zr, dn)
	{
		if (zr in this && this != dn)
		{
			return this[zr](dn);
		}

		if (this.qt)
		{
			return this.qt.cl(zr, dn);
		}
	}

	get qt()
	{
		return this.yz || this.er;
	}
}

const fq = function(cj, nr)
{
	return new nr(cj);
}

class eo extends ol
{
	constructor(sl)
	{
		super();

		this.kv = sl;

		this.vk('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	ep(yb)
	{
		if (typeof yb == 'string')
		{
			yb = [yb];
		}

		this.kv.classList.add(...yb);
	}

	dm(yb)
	{
		this.kv.classList.remove(yb);
	}

	ha(yb)
	{
		this.kv.classList.contains(yb) ? this.dm(yb)
												: this.ep(yb);
	}

	dg()
	{
		this.kv.remove();
	}

	vk(...vs)
	{
		for (let x of vs) {
			if (x in this)
			{
				throw Error('Propery already defined');
			}

			if (this.kv[x] instanceof Function)
			{
				this[x] = this.kv[x].bind(this.kv);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.kv[x];
					},
					set(v) {
						this.kv[x] = v;
					}
				});
			}
		}
	}
}

class xo extends eo
{
	constructor(ux, af)
	{
		super(
			typeof ux == 'string' ? va.tr(ux) : ux
		);

		this.er = null;
		this.xj = [];
		this.cd = {};
		this.wm = {};

		if (af)
		{
			if (af.km)
			{
				this.ep(af.km);
			}

			if (af.sp)
			{
				this.textContent = af.sp;
			}

			if (af.cs)
			{
				this.jp(...af.cs);
			}

			if (af.ie)
			{
				for (let jg in af.ie)
				{
					this.setAttribute(jg, af.ie[jg]);
				}
			}

			if (af.import)
			{
				for (let rx of af.import)
				{
					this.vk(rx);
				}
			}
		}
	}

	fk(hn, ix)
	{
		if (hn.er)
		{
			if (hn.er == this)
				return;

			hn.vu();
		}

		hn.er = this;
		this.xj.push(hn);

		switch (typeof ix)
		{
			case 'string':
				return this.yo(ix).appendChild(hn.kv);

			case 'number':
				return this.kv.prepend(hn.kv);

			default:
				return this.appendChild(hn.kv);
		}
	}

	yo(ce)
	{
		return this.querySelector('#' + ce);
	}

	gb(cs, zr, vz)
	{
		this.cs = {};

		this.jp(cs, zr, vz);
	}

	jp(cs, zr, vz)
	{
		if (typeof vz == 'string')
		{
			vz = [vz];
		}

		for (let cq of vz)
		{
			if (!this.wm[cq])
			{
				this.wm[cq] = new Map;

				this.addEventListener(
					gp.is(cq, xo.lo), e => this.nj(e)
				);
			}

			this.wm[cq].set(cs, zr)
		}
	}

	ka(cq)
	{
		const wm = this.wm[cq];

		if (wm)
		{
			for (let [cs, zr] of wm)
			{
				cs.cl(zr, this);
			}
		}
	}

	he()
	{
		this.hidden = true;
	}

	pz()
	{
		this.hidden = false;
	}

	wk()
	{
		let i = this.xj.length;

		while (i--)
		{
			this.xj[i].vu();
		}
	}

	vu()
	{
		this.er.uj(this);
	}

	hs(hn)
	{
		this.appendChild(hn.kv);
	}

	uj(hn)
	{
		hn.er = null;

		this.xj.splice(
			this.xj.indexOf(hn), 1
		);

		hn.kv.remove();
	}

	nj(e)
	{
		e.stopPropagation();

		this[gp.is(e.type, xo.lo)](e);
	}

	vm()
	{
		this.ka('vm');
	}
}

xo.lo = {
	vm:'click',
	pm:'paste',
	nx:'keyup',
	hd:'keyup',
};

class kn extends xo
{
	constructor(af)
	{
		super('kn', af);
	}
}

class yv extends xo
{
	constructor()
	{
		super('yv');

		this.vk('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			kf.lk(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class ji extends yv
{
	constructor(im)
	{
		super();

		this.im = im;

		this.gz;

		this.addEventListener('scroll',
			_ => this.qz()
		);
	}

	kw()
	{
	}

	yq()
	{
		this.wk();
		this.kl();
		this.ad();

		this.kb();
	}

	qz()
	{
		if (this.wd && this.hg)
		{
			this.ad();
		}
	}

	kl()
	{
		this.gz = this.kw(this.im.jz);
	}

	ad()
	{
		for (let hn of this.gz)
		{
			this.fk(hn);
		}

		this.kl();
	}

	kb()
	{
		this.dm('pcljv');

		if (this.lh)
		{
			this.ep('pcljv');
		}
	}

	get lh()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get wd()
	{
		return this.gz.length;
	}

	get hg()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class uv extends xo
{
	constructor(pj, ng)
	{
		super('uv');

		this.vk('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.ba = pj;

		this.jr(pj, ng);

		this.ve();
		this.ql();
	}

	na(sh)
	{
		for (let k in sh)
		{
			this.style[k] = sh[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	jr(pj, ng)
	{
		const x = window.innerHeight - ng;
		const y = window.innerWidth - pj - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = pj + 'px';
	}

	ve()
	{
		let qf = this.querySelectorAll('[resize]');

		for (let fw of qf)
		{
			fw.addEventListener('pointerdown',
				e => this.uw(e, 'la')
			);
		}
	}

	ql()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.uw(e, 'mu')
		);
	}

	uw(e, zr)
	{
		if (e.which == 1)
			this[zr](e);
	}

	qp()
	{
		return this.getBoundingClientRect();
	}

	la(e)
	{
		const og = e.target.getAttribute('resize'),
				nm = og.includes('w'),
				ar = og.includes('n'),
				wf = og.includes('e');

		const ig = this.qp(),
				ba = this.ba,
				uf = 56,
				bs = vx.cf,
				ny = window.innerHeight - uf,
				yt = e.clientX,
				kz = e.clientY,
				mk = ig.x,
				de = ig.y,
				ku = ig.width;

		let pb = 0,
				gl = 0,
				es = mk,
				dv = de,
				xh = ku;

		let px = (e) =>
		{
			pb = e.clientX - yt;
			gl = e.clientY - kz;

			if (ar)
			{
				dv = de + gl;

				(dv < 0) && (dv = 0);

				(dv > ny) && (dv = ny);

				this.style.top = dv + 'px';
			}

			if (wf)
			{
				xh = ku + pb;

				(e.clientX > bs) && (xh = bs - mk);

				(xh < ba) && (xh = ba);

				this.style.width = xh + 'px';
			}

			if (nm)
			{
				es = mk + pb;
				xh = ku - pb;

				if (es < 0)
				{
					es = 0;
					xh = ku + mk;
				}

				if (xh < ba)
				{
					es = mk + (ku - ba);
					xh = ba;
				}

				this.style.width = xh + 'px';
				this.style.left = es + 'px';
			}
		};

		let vi = () => {
			(pb != 0 || gl != 0) && this.wv();
		};

		this.rj(px, vi);
	}

	mu(e)
	{
		let mk = this.offsetLeft,
			yt = e.clientX,
			pb = 0;

		let px = (e) => {
			pb = e.clientX - yt;
			this.style.left = mk + pb + 'px';
		};

		let vi = () => {
			(pb != 0) && this.wv();
		};

		this.rj(px, vi);
	}

	rj(px, vi)
	{
		kf.ya(true);

		document.onpointermove = (e) => px(e);

		document.onpointerup = (e) => {
			kf.ya(false);
			vi();
			document.onpointerup = document.onpointermove = null;
		};
	}

	wv()
	{
		if (this.hidden) return;

		let ig = this.qp();

		let sh = {
			width: gp.mj(ig.width, window.innerWidth),
			left: gp.mj(ig.x, window.innerWidth),
			top: gp.mj(ig.y, window.innerHeight),
		};

		this.na(sh);

		if ('zd' in this.cd)
		{
			this.cd.zd(sh);
		}
	}
}

class rv extends uv
{
	constructor(pj, ng)
	{
		super(pj, ng);

		this.addEventListener('wheel', kf.lk);
	}
}

class jf extends xo
{
	constructor(af)
	{
		super('jf', af);

		this.vk('src');

		if (af.mq)
		{
			this.addEventListener('error', e => this.src = af.mq, {once:true});
		}

		this.src = af.qb;
	}
}

class xp extends xo
{
	constructor(ux, af)
	{
		super(ux, af);

		this.gy = [];
		this.cy = false;
	}

	nx(e)
	{
		if (e.key == 'Enter')
		{
			this.ka('hd');
		}

		this.ka('nx');
	}

	pm(e)
	{
		setTimeout(
			_ => this.ka('pm'),
		10);
	}

	get vl()
	{
		if (!this.cy)
		{
			const xq = Date.now();

			const np = this.gy.push(xq);

			if (np > 3)
			{
				if (xq - this.gy[0] < 2000)
				{
					this.cy = true;

					setTimeout(
						_ => this.cy = false,
					20 * 1000);
				}
				else {
					this.gy.length = 0;
				}
			}
		}

		return this.cy;
	}
}

class gi extends xp
{
	constructor(af)
	{
		super('gi', af);

		this.vk('placeholder', 'focus', 'select');

		if (af && af.placeholder)
		{
			this.placeholder = af.placeholder;
		}
	}

	get value()
	{
		return this.kv.value.trim();
	}

	set value(s)
	{
		this.kv.value = String(s).trim();
	}
}

class zw extends xp
{
	constructor(af)
	{
		super('zw', af);

		this.jr();
	}

	jr()
	{
		this.ps = new gi();

		this.fk(this.ps, 'nh');

		this.xs = new nt();

		this.fk(this.xs, 'nh');

		this.dk = this.yo('dk');
	}

	focus()
	{
		this.ps.focus();
	}

	get value()
	{
		return this.ps.value;
	}

	tn(rh, sp)
	{
		this.xs.tk(rh);

		this.dk.textContent = sp || '';
	}
}

class kt extends xo
{
	constructor(ux, af)
	{
		super(ux, af);

		this.tk(af.rh || 'initial');
	}

	get cu()
	{
		return this.rh == 'disabled';
	}

	get di()
	{
		return this.rh == 'selected';
	}

	tk(rh)
	{
		this.rh = rh;

		this.setAttribute('state', rh);
	}

	nj(e)
	{
		if (!this.cu)
		{
			super.nj(e);
		}
	}
}

class pv extends kt
{
	constructor(af)
	{
		super('pv', af);

		if (af.iy)
		{
			this.so(af.iy);
		}

		if (af.ld)
		{
			this.wg(af.ld);
		}
	}

	so(sp)
	{
		this.textContent = sp;
	}

	wg(ux)
	{
		const ld = va.tr(ux);

		this.appendChild(ld);
	}
}

class en extends pv
{
	constructor(af)
	{
		super(af);

		this.value = af.value;
	}

	vm()
	{
		if (this.di)
		{
			this.tk('initial');
		}
		else {
			this.tk('selected');
		}

		super.vm();
	}
}

class el extends xo
{
	constructor(af)
	{
		super('el', af);

		if (af.ur)
		{
			this.setAttribute('href', af.ur);
		}
	}
}

class nt extends xo
{
	constructor(af)
	{
		super('nt', af);
	}

	tk(rh)
	{
		this.setAttribute('state', rh);
	}
}

class mg extends ol
{
	constructor(hn, zh)
	{
		super();

		this.hn;

		this.as;

		this.children = [];

		this.hx(hn, zh);
	}

	hx(hn, zh)
	{
		hn.ge(this);

		if (zh)
		{
			hn.cd = new fq(this, zh);
		}

		this.hn = hn;

		this.bv();
	}

	nd(mp, em)
	{
		this.as = new mp;

		if (em)
		{
			this.as.cd = new fq(this, em);
		}

		this.tg();
	}

	tg()
	{
	}

	bv()
	{
	}

	jb(dn)
	{
		if (this.ou)
		{
			this.ou.jb(dn);
		}

	}

	pr(dn)
	{
		if (this.ou)
		{
			this.ou.pr(dn);
		}

	}

	lu(dn)
	{
		if (this.ou)
		{
			this.ou.lu(dn);
		}

	}

	zy(dn)
	{
		if (this.ou)
		{
			this.ou.zy(dn);
		}

	}

	it(ce)
	{
	}

	pz(mi, dn)
	{
		this.hn.appendChild(mi.hn.kv);
	}

	dl(mi)
	{
		this.be.nw(mi);
	}

	fs()
	{
		this.be.sj();
	}

	nw(ws, db)
	{
		ws.ge(this);

		ws.jb();

		this.children.push(ws);

		this.hn.fk(ws.hn, db);

		ws.pr();
	}

	sj()
	{
		this.children.pop().po();
	}

	get be()
	{
		let uy = this;

		while (uy.yz)
		{
			uy = uy.yz;
		}

		return uy;
	}

	get hq()
	{
		return this.children.length;
	}

	get ou()
	{
		return gp.hz(this.children);
	}

	po()
	{
		this.hn.dg();

		for (let ws of this.children)
		{
			ws.po();
		}
	}
}

class iu extends mg
{
	constructor()
	{
		const hn = new xo('yc');

		super(hn);
	}

	bv()
	{
		this.wb = new pv({
			km:['juouv', 'tegis'],
			ld:'wh',
			rh:'hidden',
			cs:[this, 'ek', 'vm']
		});

		this.hn.fk(this.wb);
	}

	ek()
	{
		this.sj();

		this.re();
	}

	pf()
	{
		this.wb.tk('hidden');
	}

	nw(ws)
	{
		super.nw(ws, 'ij');

		this.re();
	}

	re()
	{
		if (this.hq > 1)
		{
			this.wb.tk('initial');
		}
		else {
			this.wb.tk('hidden');
		}
	}




}

gp.jd = function(xt, iq)
{
	xt.currentTime = iq;

	if (xt.paused)
	{
		xt.play();
	}
}

function openWindow(sm)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = gp.cx(q, ',');

	return window.open(sm, '', q);
}

class iv
{
	constructor(q)
	{
		Object.assign(this, {
			vp: q,
			nf: eb.nf,
			xv: eb.xt.duration,
			sg:eb.xt.currentTime
		});
	}
}

class wc
{
	constructor()
	{
		this.qn = navigator.platform.includes('Mac');
	}

	get cf()
	{
		return !this.qn ? document.body.clientWidth : window.innerWidth;
	}
}

const eb = {
	get jw()
	{
		return ['www', 'music'].includes(this.mo);
	},

	get fi()
	{
		return location.pathname == '/watch';
	},

	get xt()
	{
		if (!this.ik)
		{
			this.ik = kf.querySelector('video');
		}

		return this.ik || document.createElement('video');
	},

	get nf()
	{
		return gp.ty(gr[4], location.href);
	},

	get mo()
	{
		return location.host.split('.')[0];
	}
}

class ju
{
	constructor(hp)
	{
		this.ox = document.createElement('div');

		this.me = {};

		for (let ok of this.ti(hp).children)
		{
			const xl = ok.getAttribute('protoid');

			if (xl) {
				ok.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.me[xl] = ok.outerHTML;
		}
	}

	tr(ux, vn)
	{
		let rq = this.me[ux];

		if (vn)
		{
			rq = rq.replace(gr[5], (_, mn) => vn[mn]);
		}

		return this.ti(rq);
	}

	lm(sp)
	{
		const s = document.createElement('span');

		s.textContent = sp;

		return s;
	}

	ti(rq)
	{
		this.ox.innerHTML = rq;

		return this.ox.children[0];
	}
}

class hr extends eo
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.tb = 'fullscreenchange';
			this.av = 'fullscreenElement';
		}
		else {
			this.tb = 'webkitfullscreenchange';
			this.av = 'webkitFullscreenElement';
		}

		this.qk();

		document.addEventListener(
			this.tb, _ => this.qk()
		);
	}

	get ra()
	{
		return Boolean(document[this.av]);
	}

	mt()
	{
		this.ep('olyix');
	}

	ya(zl)
	{
		zl ? this.ep('pqzag')
			: this.dm('pqzag');
	}

	lk(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	qk()
	{
		this.setAttribute('cs-fullscreen', this.ra);
	}
}

class sy
{
	constructor()
	{
		this.pt = {
			ef: '/html/svg/1.svg',
			dr: '/html/svg/2.svg'
		}
	}

	yu()
	{
		gp.bd() && to.id();
	}

	async qr()
	{
		pl = await gt.get('1');

		pl = new qu(pl);
	}

	wy(ce)
	{
		return chrome.runtime.getURL(this.pt[ce]);
	}
}

class eg extends mg
{
	constructor(rh)
	{
		const hn = new rv(460, 480);

		super(hn, sk);

		this.nd(ns);

		dc.ih(this, [
			'da', 'ml', 'zj', 'oe'
		]);

		this.ma = false;

		switch (true)
		{
			case (rh.jt):
				return this.nw(new xn);

			case (rh.bk):
				return this.nw(new bp);

			default:
				this.mh();
		}
	}

	bv()
	{
		this.hn.fk(new pv({
			km:['juouv', 'xmvwd'],
			ld:'vt',
			cs:[this, 'oy', 'vm']
		}));

		document.body.appendChild(this.hn.kv);
	}

	tg()
	{
		this.as.qp.then(
			sh => sh && this.hn.na(sh)
		);
	}

	it(ce)
	{
		switch (ce)
		{
			case 'da':
				return this.gv('nl');

			case 'ml':
				return this.gv('tf');

			case 'zj':
				return this.oy();

			case 'oe':
				return this.ea();
		}
	}

	mh()
	{
		this.nw(new bq);
	}

	ea()
	{
		this.sj();

		this.mh();
	}

	gv(dn)
	{
		this.ou.jb(dn);

		this.hn.pz();

		this.ou.pr(dn);

		this.ma = true;
	}

	oy(dn)
	{
		this.ou.lu(dn);

		this.hn.he();
	}

	rb()
	{
		this.nw(new qv);
	}
}

class ns
{
	get qp()
	{
		return gt.get('appPosition');
	}

	ri(km)
	{
		(km.width > 100) && (km.width = 100);

		(km.left < 0) && (km.left = 0);

		if (km.left + km.width > 100)
		{
			km.left = 100 - km.width;
		}

		gt.set('appPosition', km);
	}
}

const sk = function(cj)
{
	return {
		zd(sh)
		{
			cj.as.ri(sh);
		}
	}
}

class hm
{
	static tw(mn)
	{
		return mn == 'Enter';
	}

	static dz(mn)
	{
		return ['Control','Meta'].includes(mn);
	}
}

class td
{
	constructor()
	{
		window.addEventListener('keydown', e => this.xa(e), true);
	}

	xa(e)
	{
		this.jc(e);

		const kh = this.kh;

		if (this.ia)
		{
			if (kh == 'KeyS')
			{
				e.preventDefault();

				return dc.kj('da');
			}

			if (kh == 'KeyE' && eb.fi)
			{
				e.preventDefault();

				return dc.kj('ml');
			}

			if (kh == 'KeyX' && kf.ra)
			{
				return dc.kj('zj');
			}
		}

		if (kh == 'Escape')
		{
			return dc.kj('zj');
		}
	}

	jc(e)
	{
		this.kh = e.code;

		this.ia = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get vf()
	{
		return this.kh == 'KeyV';
	}
}

class ph
{
	constructor()
	{
		this.yd = {};
	}

	kj(yp)
	{
		let pc = this.fh(yp);

		for (let jn of pc)
		{
			jn.it(yp);
		}
	}

	ih(jn, dc)
	{
		if (typeof dc == 'string')
		{
			dc = [dc];
		}

		for (let ce of dc)
		{
			this.fh(ce).push(jn);
		}
	}

	fh(yp)
	{
		return this.yd[yp] || (this.yd[yp] = new zg);
	}
}

class yn extends mg
{
	constructor()
	{
		const hn = new xo('ot');

		super(hn);
	}

	ed()
	{
		to.ly();

		this.fs();
	}
}

class xn extends mg
{
	constructor()
	{
		super(
			new xo('qi')
		);
	}

	bv()
	{
		const we = new pv({
			km:'zmevp',
			iy:'Update Now',
			cs:[this, 'ut', 'vm']
		});

		this.hn.fk(we, 'li');
	}

	ut()
	{
		window.open('https://cs.lett.app/update');
	}
}

class qo extends mg
{
	constructor()
	{
		const hn = new xo('sd');

		super(hn);
	}

	bv()
	{
		this.hn.fk(new pv({
			km:['tegis', 'juouv'],
			ld:'wh',
			cs:[this, 'fs', 'vm']
		}));
	}
}

class qv extends mg
{
	constructor()
	{
		const hn = new xo('ls');

		super(hn);
	}
}

class bp extends mg
{
	constructor()
	{
		const hn = new xo('xo');

		super(hn);

		this.jh();

		dc.ih(this, [
			'yj', 'vy'
		]);
	}

	async it(ce)
	{
		await pg.qr();

		switch (ce)
		{
			case 'yj':
				return this.jh();

			case 'vy':
				return this.xf();
		}
	}

	jh()
	{
		if (!pl.yl)
		{
			return this.nw(new mc);
		}

		if (!pl.oc)
		{
			return this.nw(new qg);
		}

		this.au();
	}

	ky()
	{
		this.au();
	}

	xf()
	{
		!lx.ma && this.au();
	}

	au()
	{
		dc.kj('oe');
	}
}

class mc extends mg
{
	constructor()
	{
		const hn = new xo('hu');

		super(hn);
	}

	bv()
	{
		this.dt = new zw({
			cs:[this, 'ow', ['pm', 'hd']]
		});

		this.hn.fk(this.dt, 'vg');

		this.hn.fk(
			new jf({
				qb:pg.wy('ef')
			}), 'qs'
		);

		this.hn.fk(
			new el({sp:'Need help?', ur:'https://cs.lett.app/generating-youtube-api-key'}), 'lc'
		);
	}

	pr()
	{
		this.dt.focus();
	}

	ow(dn)
	{
		dn.tn('loading');

		to.ow(dn.value).then(
			fu => !fu && dn.tn('error', 'try again')
		);
	}
}

class qg extends iu
{
	constructor()
	{
		super();

		this.nw(new pa);
	}

	fx()
	{
		this.nw(new lb);
	}
}

class pa extends mg
{
	constructor()
	{
		const hn = new xo('uq');

		super(hn);
	}

	bv()
	{
		const um = [];

		um.push(
			new pv({
				km:'zmevp',
				iy:'support it',
				cs:[this, 'fx', 'vm']
			})
		);

		um.push(
			new pv({
				km:'zmevp',
				iy:'try it',
				cs:[this, 'ky', 'vm']
			})
		);

		pl.om && um.pop();

		for (let ry of um)
		{
			this.hn.fk(ry, 'li');
		}
	}
}

class lb extends mg
{
	constructor()
	{
		const hn = new xo('qx');

		super(hn);

		this.ni;
		this.vq;

		dc.ih(this, ['vy']);
	}

	it(ce)
	{
		switch (ce)
		{
			case 'vy':
				return this.xf();
		}
	}

	bv()
	{
		this.xs = new nt({
			km:'rsfyu'
		});

		this.hn.fk(this.xs);

		this.vh = new lz();

		this.vh.nv(
			new kn({
				km:['bdptw', 'kxurg'],
				sp:'12.99'
			})
		);

		this.hn.fk(this.vh, 'vh');

		this.kd = new lz();

		this.kd.du(
			new kn({
				sp:'One-Time Payment via PayPal'
			})
		);

		this.hn.fk(this.kd, 'kd');

		this.oq = new pv({
			km:['zmevp', 'hemgb'],
			iy:'Pay with PayPal',
			cs:[this, 'tc', 'vm']
		});

		this.hn.fk(this.oq, 'li');
	}

	lu()
	{
		this.gn();
	}

	tc()
	{
		if (this.wi)
			return;

		this.wi = true;

		this.xs.tk('loading');

		to.pw().then(sm =>
		{
			if (sm) {
				this.lw(sm);

				this.xs.tk('waiting');
			}
			else {
				this.xs.tk('error');
			}

			this.wi = false;
		});
	}

	lw(sm)
	{
		this.gn();

		this.ni = openWindow(sm);

		this.vq = setInterval(
			_ => this.ni.closed && this.gn(),
		500);
	}

	gn()
	{
		if (this.ni)
		{
			this.ni.close();

			this.xs.tk('initial');

			clearInterval(this.vq);
		}
	}

	xf()
	{
		this.gn();

		setTimeout(_ => {
			this.cl('pf', this);
			this.wq();
		}, 900);
	}

	wq()
	{
		this.vh.nv(
			new kn({km:'kxurg',sp:'Thank You!'}), true
		);

		this.kd.du(
			new kn({sp:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.oq.ep('hosmj');
			this.oq.textContent = 'Done';
			this.oq.gb(this, 'au', 'vm');
		}, 200);
	}

	au()
	{
		this.cl('au', this);
	}

	po()
	{
		super.po();

		this.gn();
	}
}

class lz extends kn
{
	constructor()
	{
		super();

		this.jr();
	}

	jr()
	{
		this.kc = new kn({
			km:'ckqpf'
		});

		this.fk(this.kc);
	}

	nv(cp, ag)
	{
		this.wo(cp, 0, ag);
	}

	du(cp, ag)
	{
		this.wo(cp, null, ag);
	}

	wo(cp, si, ag)
	{
		this.kc.fk(cp, si);

		if (ag)
		{
			this.ag(si != null);
		}
	}

	ag(qy)
	{
		let xk, on = this.kc;

		if (qy)
		{
			on.style.transform = 'translateY(-100%)';

			xk = 'translateY(0)';
		}
		else {
			xk = 'translateY(-100%)';
		}

		setTimeout(_ => {
			on.style.transition = 'transform 300ms';

			setTimeout(
				_ => on.style.transform = xk,
			10);

			setTimeout(_ => {
				on.style.transition = null;
			}, 300);
		}, 10);
	}
}

class mb extends mg
{
	constructor(wt)
	{
		const hn = new yv;

		super(hn);

		this.ey(wt).then(
			sw => this.af(sw)
		);
	}

	bv()
	{
		this.hn.ep('lcwac');
	}

	af(sw)
	{
		this.hn.innerHTML = sw;
	}

	ey(wt)
	{
		const ub = gp.ir('/html/policies/%s.html', wt);

		return to.ey(ub);
	}
}

class bq extends mg
{
	constructor()
	{
		const hn = new xo('st');

		super(hn);

		this.nd(rl, jx);

		dc.ih(this, 'ml');
	}

	bv()
	{
		this.bo = new gi({
			placeholder:'type keywords here..',
			cs:[this, 'ul', ['hd', 'pm']]
		});

		this.ua = new pv({
			km:'acsrg',
			iy:'0',
			rh:'disabled',
			cs:[this, 'rd', 'vm']
		});

		this.bl = new ib(this);

		this.yi = new cw();
		this.yi.cd = new ca(this);

		this.yk = new xo(this.hn.yo('hw'));
		this.yk.fk(this.bo);
		this.yk.fk(this.ua);

		this.bn = new xo(this.hn.yo('bx'));
		this.bn.fk(this.yi);
		this.bn.fk(this.bl);
	}

	jb()
	{
		if (eb.fi)
		{
			this.je();

			if (this.tz)
			{
				this.yi.fr();
			}
		}
	}

	pr(dn)
	{
		this.bo.focus();

		if (dn == 'nl')
		{
			this.bo.select();
		}
	}

	lu()
	{
		if (this.bl.tx)
		{
			this.bl.vd.fs();
		}
	}

	it(ce)
	{
		if (ce == 'ml')
			return this.iz();
	}

	gu(hn)
	{
		this.bn.hs(hn);
	}

	ul()
	{
		let q = this.df();

		switch (true)
		{
			case (!q):
				return;

			case (!eb.fi):
				return this.yi.ck('al');

			case (this.as.ga):
			{
				if (!this.as.hi)
					return;

				if (q == this.as.ev)
				{
					return this.yi.ck('bz');
				}
			}
		}

		this.eu(q);
	}

	gk()
	{
		if (!eb.fi)
			return this.yi.ck('al');

		this.wl(':all');
	}

	get jz()
	{
		return this.as.jz;
	}

	rd()
	{
		this.dl(new qo);
	}

	eu(q)
	{
		this.as.search(q);
		this.yi.ck('gf');
	}

	je()
	{
		this.as.zb();
	}

	iz()
	{
		let q = gp.qa(eb.xt.currentTime);

		this.wl(q);
	}

	df()
	{
		return this.bo.value;
	}

	zo(q)
	{
		this.bo.value = q;
	}

	wl(q)
	{
		this.zo(q);
		this.eu(q);
	}

	get tz()
	{
		const pk = this.gs;

		if (pk && pk != eb.nf)
		{
			return this.gs = eb.nf;
		}
	}
}

class rl
{
	constructor()
	{
		this.ja = ja.vb('wx', this.cg.bind(this));

		this.ev = '';
		this.od = 0;
		this.fg = 0;
		this.os = 500;
		this.hi = false;
		this.eq = [];
		this.ej = 25;
	}

	cg(ay)
	{
		const oj = ay.oj;

		switch (ay.qh)
		{
			case 'ao':
				return this.bm(oj);

			case 'jk':
				return this.wu(oj);

			case 'io':
				return this.br(oj);
		}
	}

	get ga()
	{
		return this.hi || this.ae('fg') < 500;
	}

	get jz()
	{
		return this.eq.splice(0, this.ej);
	}

	zb()
	{
		this.ja.bh('jk', new iv(''));
	}

	search(q)
	{
		this.lr(q);

		this.ja.bh('ao', new iv(q));
	}

	br(io)
	{
		this.se();

		this.cd.br(io.ce);
	}

	bm(r)
	{
		this.se();

		let ys = this.os - this.ae('od');

		(r.ks == 0) && (ys = 200);

		this.eq = r.fp;

		setTimeout(
			_ => this.cd.bm(r.ks, r.te),
		ys);
	}

	wu(n)
	{
		this.cd.wu(n);
	}

	oh(yw)
	{
		this[yw] = Date.now();
	}

	ae(yw)
	{
		return Date.now() - this[yw];
	}

	lr(q)
	{
		this.ev = q;

		this.hi = true;

		this.oh('od');
	}

	se()
	{
		this.hi = false;

		this.oh('fg');
	}
}

class cw extends xo
{
	constructor()
	{
		super('xo', {
			km:'mcstz'
		});

		this.yf = {
			ab: 'no results match your query',
			gf: 'Searching...',
			bz: 'Searching still...',
			al: 'You are not watching any video',
			pd: 'Invalid request',
			cr: 'This video has 0 comments',
			fd: 'Comments are disabled for this video.',
			xb: 'check your internet connection',
			pn: 'service down for maintenance',
			tv: 'request timeout, try again',
			by: 'feature not supported for this video',
			ud: 'invalid response from server, try again',
			sa: 'something is not working properly',
			ho: 'Rate limit exceeded, please try later',

			processingFailure: 'Comments server is not responding.',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed.',
		};
	}

	ck(bc)
	{
		this.ak(bc);
	}

	rg(...zc)
	{
		this.sq(...zc);
	}

	no(xw, zc)
	{
		this.sq(
			gp.ir(xw, zc)
		);
	}

	fr()
	{
		this.innerHTML = '';
	}

	ak(ce)
	{
		let pe = this.yf[ce];

		if (!pe)
		{
			pe = this.yf.sa;
		}

		this.sq(pe);
	}

	sq(...ms)
	{
		const pq = document.createDocumentFragment();

		for (let ic of ms)
		{
			let vo = null;

			if (typeof ic == 'string')
			{
				vo = document.createTextNode(ic);
			}
			else {
				vo = ic.kv;
			}

			pq.appendChild(vo);
		}

		this.fr();
		this.appendChild(pq);

		this.cd.xc();
	}
}

class ib extends ji
{
	constructor(im)
	{
		super(im);

		this.tx = false;
	}

	xu(dn)
	{
		this.vd.mx(dn.nf, dn.sz);

		dn.uh.sv(this.vd);
	}

	fz(dn)
	{
		gp.jd(eb.xt, dn.sz);
	}

	kw(fm)
	{
		const su = [];

		for (let ew of fm)
		{
			let or = new xo('fj');

			for (let i = 0; i < ew.length; i++)
			{
				const zm = ew[i];

				if (zm.hq > 0)
				{
					const n = i + zm.hq;

					for (let k = i; k < n; k++)
					{
						ew[k].wr = ew.slice(k + 1, n + 1).some(ws => !ws.hidden);
					}
				}

				or.fk(
					new ci(zm)
				);
			}

			su.push(or);
		}

		return su;
	}

	get vd()
	{
		if (!this.tx)
		{
			this.tx = true;
			this.sc = new hc;
		}

		return this.sc;
	}
}

const jx = function(cj)
{
	return {
		wu(n)
		{
			let wz = n;

			if (n < 0) switch (n)
			{
				case -2:
					wz = '∞';
					break;

				case -1:
					wz = '∅';
					break;
			}

			cj.ua.so(wz);

			if (0 < n && n < 1000)
			{
				cj.ua.tk('normal')
			}
			else {
				cj.ua.tk('disabled');
			}
		},

		bm(ks, p)
		{
			this.wu(p);

			if (ks > 0)
			{
				cj.bl.yq();

				return cj.gu(cj.bl);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return cj.yi.ck('cr');

				case -1:
					return cj.yi.ck('fd');

				case -2:
					return cj.yi.ck('ab');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const zr = new el({
						sp:gp.ir('%s comments', p),
						cs:[cj, 'gk', 'vm']
					});

					return cj.yi.rg('Nothing found in ', zr);
				}

				return cj.yi.no('Nothing found in %s comments', p);
			}

			cj.yi.ck('ab');
		},

		br(gc)
		{
			cj.yi.ck(gc);
		}
	}
}

const ca = function(cj)
{
	return {
		xc()
		{
			cj.gu(cj.yi);
		}
	}
}

class hc extends xo
{
	constructor()
	{
		super('hc');

		this.kp = this.children[0];

		this.kp.onload = () => {
			try {
				const uk = this.kp.contentDocument.body;

				this.xt = uk.querySelector('video');

				uk.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.gs;
		this.zn;
	}

	mx(nf, sz)
	{
		if (nf != this.gs) {
			this.kp.src = gp.ir(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [nf, sz]
			);
		}
		else if (this.xt) {
			gp.jd(this.xt, sz);
		}

		this.gs = nf;
		this.zn = sz;
	}

	fs()
	{
		if (this.er)
		{
			this.vu();
		}
	}
}

class ci extends xo
{
	constructor(zm)
	{
		const ac = va.tr('ci', zm);

		super(ac);

		this.jr(zm);
	}

	jr(zm)
	{
		this.dp(zm);
		this.pu(zm);

		if (zm.lj)
		{
			if (zm.wr)
				this.ep('hsbxh');

			if (zm.hidden)
				this.ep('eowxw');
		}

		if (zm.rp)
		{
			this.ep('mqswl');

			this.fk(
				new xo('kx', {km:'vjplh'}), 'ta'
			);
		}
	}

	rf()
	{
		return this;
	}

	sv(vd)
	{
		this.fk(vd, 'xa');
	}

	dp(zm)
	{
		const xr = zm.ip;

		const ax = xr.replace(
			gr[6], gp.ir('s%s-', zm.lj ? 48 : 80)
		);

		this.fk(new jf({
			qb:ax,
			mq:xr,
		}), 'ex');
	}

	pu(zm)
	{
		const mz = new kn({
			km:'hitvc',
			ie: {
				dir:zm.fe,
				lang:zm.ne
			}
		});

		const sf = Object.keys(zm.tq);

		if (sf.length)
		{
			const gq = gp.lq(zm.fy, sf);

			for (let x of gq)
			{
				if (gp.ct(x))
				{
					const a = this.py(zm.tq[x]);

					mz.fk(a);
				}
				else {
					const s = va.lm(x);

					mz.appendChild(s);
				}
			}
		}
		else {
			mz.textContent = zm.fy;
		}

		if (zm.lj && !zm.rp)
		{
			mz.ep('rljby');

			mz.addEventListener('click',
				e => mz.dm('rljby')
			);
		}

		this.fk(mz, 'xa');
	}

	py(x)
	{
		let a;

		if (x.fa == 'dy' && x.nf != eb.nf)
		{
			x.fa = 'bg';
		}

		switch (x.fa)
		{
			case 'dy':
				a = new ko(x.sp, x.sz);
				a.jp(this, 'fz', 'vm');
				return a;

			case 'bg':
				a = new up(x.sp, x.nf, x.sz);
				a.jp(this, 'xu', 'vm');
				return a;

			case 'ht':
				return new el({
					sp:x.sp,
					ur:x.sm
				});
		}
	}
}

class up extends el
{
	constructor(sp, nf, sz)
	{
		super({
			km:'libiy',
			sp:sp
		});

		this.nf = nf;
		this.sz = sz;
	}

	get uh()
	{
		return this.cl('rf');
	}
}

class ko extends el
{
	constructor(sp, sz)
	{
		super({
			km:'libiy',
			sp:sp
		});

		this.sz = sz;
	}
}

let pg;
let gt;
let vx;
let ja;
let to;
let dc;
let pl;
let lx;
let rk;
let kf;
let va;

if (eb.jw)
{
	pg = new sy;
	gt = new ye;
	vx = new wc;
	ja = new dj;
	to = new nz;
	dc = new ph;
	kf = new hr;

	to.ki().then(async lg =>
	{
		if (lg.rh.bk)
		{
			await pg.qr();
		}

		va = new ju(lg.za);

		lx = new eg(lg.rh);

		rk = new td;

		to.xy();

		pg.yu();
	});

	vx.qn && kf.mt();
}

const gr = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];