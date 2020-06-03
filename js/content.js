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

	return zf != 3022;
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
class wu
{
	up(pe)
	{
		this.pe = pe;
	}

	po(xq, bl)
	{
		if (xq in this && this != bl)
		{
			return this[xq](bl);
		}

		if (this.bi)
		{
			return this.bi.po(xq, bl);
		}
	}

	get bi()
	{
		return this.pe || this.es;
	}
}

const xc = function(za, lc)
{
	return new lc(za);
}

class jy extends wu
{
	constructor(wq)
	{
		super();

		this.al = wq;

		this.vg('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	fw(wc)
	{
		if (typeof wc == 'string')
		{
			wc = [wc];
		}

		this.al.classList.add(...wc);
	}

	oe(wc)
	{
		this.al.classList.remove(wc);
	}

	sc(wc)
	{
		this.al.classList.contains(wc) ? this.oe(wc)
												: this.fw(wc);
	}

	jd()
	{
		this.al.remove();
	}

	vg(...uf)
	{
		for (let x of uf) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.al[x] instanceof Function)
			{
				this[x] = this.al[x].bind(this.al);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.al[x];
					},
					set(v) {
						this.al[x] = v;
					}
				});
			}
		}
	}
}

class qy extends jy
{
	constructor(nw, bx)
	{
		super(
			typeof nw == 'string' ? wy.jz(nw) : nw
		);

		this.es = null;
		this.uq = [];
		this.gm = {};
		this.yd = {};

		if (bx)
		{
			if (bx.tz)
			{
				this.fw(bx.tz);
			}

			if (bx.vm)
			{
				this.textContent = bx.vm;
			}

			if (bx.gl)
			{
				this.lk(...bx.gl);
			}

			if (bx.bj)
			{
				for (let bt in bx.bj)
				{
					this.setAttribute(bt, bx.bj[bt]);
				}
			}

			if (bx.import)
			{
				for (let ur of bx.import)
				{
					this.vg(ur);
				}
			}
		}
	}

	pj(ue, ax)
	{
		if (ue.es)
		{
			if (ue.es == this)
				return;

			ue.ha();
		}

		ue.es = this;
		this.uq.push(ue);

		switch (typeof ax)
		{
			case 'string':
				return this.ky(ax).appendChild(ue.al);

			case 'number':
				return this.al.prepend(ue.al);

			default:
				return this.appendChild(ue.al);
		}
	}

	ky(eg)
	{
		return this.querySelector('#' + eg);
	}

	lk(gl, xq, km)
	{
		if (typeof km == 'string')
		{
			km = [km];
		}

		for (let fk of km)
		{
			if (!this.yd[fk])
			{
				this.yd[fk] = new Map;

				this.addEventListener(
					sv.qf(fk, qy.fv), e => this.dr(e)
				);
			}

			this.yd[fk].set(gl, xq)
		}
	}

	ze()
	{
		this.yd = {};
	}

	oj(gl, xq, km)
	{
		this.ze();

		this.lk(gl, xq, km);
	}

	zc(fk)
	{
		const yd = this.yd[fk];

		if (yd)
		{
			for (let [gl, xq] of yd)
			{
				gl.po(xq, this);
			}
		}
	}

	td()
	{
		this.hidden = true;
	}

	jq()
	{
		this.hidden = false;
	}

	rq()
	{
		let i = this.uq.length;

		while (i--)
		{
			this.uq[i].ha();
		}
	}

	ha()
	{
		this.es.mv(this);
	}

	se(ue)
	{
		this.appendChild(ue.al);
	}

	mv(ue)
	{
		ue.es = null;

		this.uq.splice(
			this.uq.indexOf(ue), 1
		);

		ue.al.remove();
	}

	dr(e)
	{
		e.stopPropagation();

		this[sv.qf(e.type, qy.fv)](e);
	}

	xi()
	{
		this.zc('xi');
	}
}

qy.fv = {
	xi:'click',
	dl:'paste',
	iz:'keyup',
	fg:'keyup',
	pu:'focus',
};

class yp extends qy
{
	constructor(bx)
	{
		super('yp', bx);
	}
}

class pi extends qy
{
	constructor()
	{
		super('pi');

		this.vg('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			th.vq(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class eq extends pi
{
	constructor(yx)
	{
		super();

		this.yx = yx;

		this.nh;

		this.addEventListener('scroll',
			_ => this.wp()
		);
	}

	zj()
	{
	}

	qi()
	{
		this.rq();
		this.fr();
		this.qm();

		this.wg();
	}

	wp()
	{
		if (this.nq && this.mc)
		{
			this.qm();
		}
	}

	fr()
	{
		this.nh = this.zj(this.yx.sa);
	}

	qm()
	{
		for (let ue of this.nh)
		{
			this.pj(ue);
		}

		this.fr();
	}

	wg()
	{
		this.oe('xolht');

		if (this.wr)
		{
			this.fw('xolht');
		}
	}

	get wr()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get nq()
	{
		return this.nh.length;
	}

	get mc()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class ud extends qy
{
	constructor(dj, vk)
	{
		super('ud');

		this.vg('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.sj = dj;

		this.bo(dj, vk);

		this.gw();
		this.oh();
	}

	pn(pw)
	{
		for (let k in pw)
		{
			this.style[k] = pw[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	bo(dj, vk)
	{
		const x = window.innerHeight - vk;
		const y = window.innerWidth - dj - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = dj + 'px';
	}

	gw()
	{
		let vy = this.querySelectorAll('[resize]');

		for (let um of vy)
		{
			um.addEventListener('pointerdown',
				e => this.ij(e, 'mo')
			);
		}
	}

	oh()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.ij(e, 'pr')
		);
	}

	ij(e, xq)
	{
		if (e.which == 1)
			this[xq](e);
	}

	wb()
	{
		return this.getBoundingClientRect();
	}

	mo(e)
	{
		const wa = e.target.getAttribute('resize'),
				bh = wa.includes('w'),
				bw = wa.includes('n'),
				ck = wa.includes('e');

		const zi = this.wb(),
				sj = this.sj,
				hf = 56,
				ba = jn.kt,
				jt = window.innerHeight - hf,
				nv = e.clientX,
				hb = e.clientY,
				rj = zi.x,
				cf = zi.y,
				dt = zi.width;

		let bk = 0,
				pd = 0,
				kr = rj,
				hc = cf,
				hm = dt;

		let me = (e) =>
		{
			bk = e.clientX - nv;
			pd = e.clientY - hb;

			if (bw)
			{
				hc = cf + pd;

				(hc < 0) && (hc = 0);

				(hc > jt) && (hc = jt);

				this.style.top = hc + 'px';
			}

			if (ck)
			{
				hm = dt + bk;

				(e.clientX > ba) && (hm = ba - rj);

				(hm < sj) && (hm = sj);

				this.style.width = hm + 'px';
			}

			if (bh)
			{
				kr = rj + bk;
				hm = dt - bk;

				if (kr < 0)
				{
					kr = 0;
					hm = dt + rj;
				}

				if (hm < sj)
				{
					kr = rj + (dt - sj);
					hm = sj;
				}

				this.style.width = hm + 'px';
				this.style.left = kr + 'px';
			}
		};

		let dm = () => {
			(bk != 0 || pd != 0) && this.py();
		};

		this.aq(me, dm);
	}

	pr(e)
	{
		let rj = this.offsetLeft,
			nv = e.clientX,
			bk = 0;

		let me = (e) => {
			bk = e.clientX - nv;
			this.style.left = rj + bk + 'px';
		};

		let dm = () => {
			(bk != 0) && this.py();
		};

		this.aq(me, dm);
	}

	aq(me, dm)
	{
		th.ra(true);

		document.onpointermove = (e) => me(e);

		document.onpointerup = (e) => {
			th.ra(false);
			dm();
			document.onpointerup = document.onpointermove = null;
		};
	}

	py()
	{
		if (this.hidden) return;

		let zi = this.wb();

		let pw = {
			width: sv.ve(zi.width, window.innerWidth),
			left: sv.ve(zi.x, window.innerWidth),
			top: sv.ve(zi.y, window.innerHeight),
		};

		this.pn(pw);

		if ('uz' in this.gm)
		{
			this.gm.uz(pw);
		}
	}
}

class qx extends ud
{
	constructor(dj, vk)
	{
		super(dj, vk);

		this.addEventListener('wheel', th.vq);
	}
}

class iy extends qy
{
	constructor(bx)
	{
		super('iy', bx);

		this.vg('src');

		if (bx.nd)
		{
			this.addEventListener('error', e => this.src = bx.nd, {once:true});
		}

		this.src = bx.yb;
	}
}

class vt extends qy
{
	constructor(nw, bx)
	{
		super(nw, bx);

		this.pt = [];
		this.co = false;
	}

	iz(e)
	{
		if (e.key == 'Enter')
		{
			this.zc('fg');
		}

		this.zc('iz');
	}

	dl(e)
	{
		setTimeout(
			_ => this.zc('dl'),
		10);
	}

	pu(e)
	{
		this.zc('pu');
	}

	get pb()
	{
		if (!this.co)
		{
			const ew = Date.now();

			const sg = this.pt.push(ew);

			if (sg > 3)
			{
				if (ew - this.pt[0] < 2000)
				{
					this.co = true;

					setTimeout(
						_ => this.co = false,
					20 * 1000);
				}
				else {
					this.pt.length = 0;
				}
			}
		}

		return this.co;
	}
}

class ov extends vt
{
	constructor(bx)
	{
		super('ov', bx);

		this.vg('placeholder', 'focus', 'select');

		if (bx && bx.placeholder)
		{
			this.placeholder = bx.placeholder;
		}
	}

	get value()
	{
		return this.al.value.trim();
	}

	set value(s)
	{
		this.al.value = String(s).trim();
	}
}

class mq extends vt
{
	constructor(bx)
	{
		super('mq', bx);

		this.bo();
	}

	bo()
	{
		this.so = new ov();

		this.pj(this.so, 'bg');

		this.au = new df();

		this.pj(this.au, 'bg');

		this.aw = this.ky('aw');
	}

	focus()
	{
		this.so.focus();
	}

	get value()
	{
		return this.so.value;
	}

	ri(ai, vm)
	{
		this.au.fo(ai);

		this.aw.textContent = vm || '';
	}
}

class zg extends qy
{
	constructor(nw, bx)
	{
		super(nw, bx);

		this.fo(bx.ai || 'initial');
	}

	get vh()
	{
		return this.ai == 'disabled';
	}

	get ko()
	{
		return this.ai == 'selected';
	}

	fo(ai)
	{
		this.ai = ai;

		this.setAttribute('state', ai);
	}

	dr(e)
	{
		if (!this.vh)
		{
			super.dr(e);
		}
	}
}

class jr extends zg
{
	constructor(bx)
	{
		super('jr', bx);

		this.value = bx.value;

		if (bx.zr)
		{
			this.uy(bx.zr);
		}

		if (bx.tr)
		{
			this.lj(bx.tr);
		}
	}

	uy(vm)
	{
		this.textContent = vm;
	}

	lj(nw)
	{
		const tr = wy.jz(nw);

		this.appendChild(tr);
	}
}

class at extends jr
{
	constructor(bx)
	{
		super(bx);

		this.value = bx.value;
	}

	xi()
	{
		if (this.ko)
		{
			this.fo('initial');
		}
		else {
			this.fo('selected');
		}

		super.xi();
	}
}

class uk extends qy
{
	constructor(bx)
	{
		super('uk', bx);

		if (bx.mz)
		{
			this.setAttribute('href', bx.mz);
		}
	}
}

class df extends qy
{
	constructor(bx)
	{
		super('df', bx);
	}

	fo(ai)
	{
		this.setAttribute('state', ai);
	}
}

class nb extends wu
{
	constructor(ue, ys)
	{
		super();

		this.ue;

		this.ym;

		this.children = [];

		this.bm(ue, ys);
	}

	bm(ue, ys)
	{
		ue.up(this);

		if (ys)
		{
			ue.gm = new xc(this, ys);
		}

		this.ue = ue;

		this.yh();
	}

	ne(xa, cm)
	{
		this.ym = new xa;

		if (cm)
		{
			this.ym.gm = new xc(this, cm);
		}

		this.cz();
	}

	cz()
	{
	}

	yh()
	{
	}

	kv(bl)
	{
		if (this.zd)
		{
			this.zd.kv(bl);
		}

	}

	gf(bl)
	{
		if (this.zd)
		{
			this.zd.gf(bl);
		}

	}

	yz(bl)
	{
		if (this.zd)
		{
			this.zd.yz(bl);
		}

	}

	hg(bl)
	{
		if (this.zd)
		{
			this.zd.hg(bl);
		}

	}

	ki(eg)
	{
	}

	jq(zp, bl)
	{
		this.ue.appendChild(zp.ue.al);
	}

	ma(zp)
	{
		this.gu.cw(zp);
	}

	ex()
	{
		this.gu.kb();
	}

	cw(ry, oq)
	{
		ry.up(this);

		ry.kv();

		this.children.push(ry);

		this.ue.pj(ry.ue, oq);

		ry.gf();
	}

	kb()
	{
		this.children.pop().vo();
	}

	get gu()
	{
		let wl = this;

		while (wl.pe)
		{
			wl = wl.pe;
		}

		return wl;
	}

	get yq()
	{
		return this.children.length;
	}

	get zd()
	{
		return sv.uj(this.children);
	}

	vo()
	{
		this.ue.jd();

		for (let ry of this.children)
		{
			ry.vo();
		}
	}
}

class ql extends nb
{
	constructor()
	{
		const ue = new qy('vc');

		super(ue);
	}

	yh()
	{
		this.sb = new jr({
			tz:['slnso', 'jsbjo'],
			tr:'gn',
			ai:'hidden',
			gl:[this, 'hv', 'xi']
		});

		this.ue.pj(this.sb);
	}

	hv()
	{
		this.kb();

		this.ch();
	}

	qz()
	{
		this.sb.fo('hidden');
	}

	cw(ry)
	{
		super.cw(ry, 'tc');

		this.ch();
	}

	ch()
	{
		if (this.yq > 1)
		{
			this.sb.fo('initial');
		}
		else {
			this.sb.fo('hidden');
		}
	}




}

sv.rv = function(hi, te)
{
	hi.currentTime = te;

	if (hi.paused)
	{
		hi.play();
	}
}

function openWindow(wj)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = sv.zy(q, ',');

	return window.open(wj, '', q);
}

class dy
{
	constructor(q)
	{
		Object.assign(this, {
			sk: q,
			xl: et.xl,
			fs: et.hi.duration,
			xk:et.hi.currentTime
		});
	}
}

class it
{
	constructor()
	{
		this.ep = navigator.platform.includes('Mac');
	}

	get kt()
	{
		return !this.ep ? document.body.clientWidth : window.innerWidth;
	}
}

const et = {
	get fn()
	{
		return ['www', 'music'].includes(this.bn);
	},

	get kp()
	{
		return location.pathname == '/watch';
	},

	get hi()
	{
		if (!this.oc)
		{
			this.oc = th.querySelector('video');
		}

		return this.oc || document.createElement('video');
	},

	get xl()
	{
		return sv.fh(cs[4], location.href);
	},

	get bn()
	{
		return location.host.split('.')[0];
	}
}

class yw
{
	constructor(od)
	{
		this.dx = document.createElement('div');

		this.dk = {};

		for (let sr of this.jf(od).children)
		{
			const ik = sr.getAttribute('protoid');

			if (ik) {
				sr.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.dk[ik] = sr.outerHTML;
		}
	}

	jz(nw, sd)
	{
		let xg = this.dk[nw];

		if (sd)
		{
			xg = xg.replace(cs[5], (_, yt) => sd[yt]);
		}

		return this.jf(xg);
	}

	rh(vm)
	{
		const s = document.createElement('span');

		s.textContent = vm;

		return s;
	}

	jf(xg)
	{
		this.dx.innerHTML = xg;

		return this.dx.children[0];
	}
}

class ku extends jy
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.lr = 'fullscreenchange';
			this.by = 'fullscreenElement';
		}
		else {
			this.lr = 'webkitfullscreenchange';
			this.by = 'webkitFullscreenElement';
		}

		this.on();

		document.addEventListener(
			this.lr, _ => this.on()
		);
	}

	get xn()
	{
		return !!(document[this.by]);
	}

	gv()
	{
		this.fw('cytvb');
	}

	ra(ab)
	{
		ab ? this.fw('txgui')
			: this.oe('txgui');
	}

	vq(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	on()
	{
		this.setAttribute('cs-fullscreen', this.xn);
	}
}

class xv
{
	constructor()
	{
		this.dv = {
			kf: '/html/svg/1.svg',
			st: '/html/svg/2.svg',
			yo: '/html/svg/3.svg',
		}
	}

	nm()
	{
		return nu.get('1').then(sn => {
			xs = new mx(sn);
		});
	}

	rt(eg)
	{
		return chrome.runtime.getURL(this.dv[eg]);
	}

	qt()
	{
		jp.ay(
			sv.cg()
		);
	}
}

class tn extends nb
{
	constructor(ai)
	{
		const ue = new qx(460, 480);

		super(ue, kj);

		this.ne(sp);

		ie.xu(this, [
			'de', 'ht', 'sh', 'lv'
		]);

		this.xb = false;

		switch (true)
		{
			case (ai.pq):
				return this.cw(new ke);

			case (ai.qj):
				return this.cw(new ib);

			default:
				this.og();
		}
	}

	yh()
	{
		this.ue.pj(new jr({
			tz:['slnso', 'pzlkq'],
			tr:'si',
			gl:[this, 'or', 'xi']
		}));

		document.body.appendChild(this.ue.al);
	}

	cz()
	{
		this.ym.wb.then(
			pw => pw && this.ue.pn(pw)
		);
	}

	ki(eg)
	{
		switch (eg)
		{
			case 'de':
				return this.we('to');

			case 'ht':
				return this.we('pc');

			case 'sh':
				return this.or();

			case 'lv':
				return this.la();
		}
	}

	og()
	{
		this.cw(new vb);
	}

	la()
	{
		this.kb();

		this.og();
	}

	we(bl)
	{
		this.zd.kv(bl);

		this.ue.jq();

		this.zd.gf(bl);

		this.xb = true;
	}

	or(bl)
	{
		this.zd.yz(bl);

		this.ue.td();
	}

	wf()
	{
		this.cw(new dn);
	}
}

class sp
{
	get wb()
	{
		return nu.get('appPosition');
	}

	iu(tz)
	{
		(tz.width > 100) && (tz.width = 100);

		(tz.left < 0) && (tz.left = 0);

		if (tz.left + tz.width > 100)
		{
			tz.left = 100 - tz.width;
		}

		nu.set('appPosition', tz);
	}
}

const kj = function(za)
{
	return {
		uz(pw)
		{
			za.ym.iu(pw);
		}
	}
}

class rs
{
	static ts(yt)
	{
		return yt == 'Enter';
	}

	static he(yt)
	{
		return ['Control','Meta'].includes(yt);
	}
}

class pf
{
	constructor()
	{
		window.addEventListener('keydown', e => this.pk(e), true);
	}

	pk(e)
	{
		this.gc(e);

		const vs = this.vs;

		if (this.kh)
		{
			if (vs == 'KeyS')
			{
				e.preventDefault();

				return ie.zv('de');
			}

			if (vs == 'KeyE' && et.kp)
			{
				e.preventDefault();

				return ie.zv('ht');
			}

			if (vs == 'KeyX' && th.xn)
			{
				return ie.zv('sh');
			}
		}

		if (vs == 'Escape')
		{
			return ie.zv('sh');
		}
	}

	gc(e)
	{
		this.vs = e.code;

		this.kh = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get wo()
	{
		return this.vs == 'KeyV';
	}
}

class fi
{
	constructor()
	{
		this.ti = {};
	}

	zv(yg)
	{
		let am = this.hz(yg);

		for (let lx of am)
		{
			lx.ki(yg);
		}
	}

	xu(lx, ie)
	{
		if (typeof ie == 'string')
		{
			ie = [ie];
		}

		for (let eg of ie)
		{
			this.hz(eg).push(lx);
		}
	}

	hz(yg)
	{
		return this.ti[yg] || (this.ti[yg] = new dp);
	}
}

class ip extends nb
{
	constructor()
	{
		const ue = new qy('rf');

		super(ue);
	}

	nc()
	{
		jp.ct();

		this.ex();
	}
}

class ke extends nb
{
	constructor()
	{
		super(
			new qy('xo')
		);
	}

	yh()
	{
		this.ue.pj(
			new iy({
				yb:vf.rt('yo')
			}), 'ic'
		);

		const cv = new jr({
			tz:'wewjn',
			zr:'Update Now',
			gl:[this, 'lm', 'xi']
		});

		this.ue.pj(cv, 'sl');
	}

	lm()
	{
		window.open('https://cs.lett.app/update');
	}
}

class hj extends nb
{
	constructor()
	{
		const ue = new qy('no');

		super(ue);
	}

	yh()
	{
		this.ue.pj(new jr({
			tz:['jsbjo', 'slnso'],
			tr:'gn',
			gl:[this, 'ex', 'xi']
		}));
	}
}

class dn extends nb
{
	constructor()
	{
		const ue = new qy('fe');

		super(ue);
	}
}

class ib extends nb
{
	constructor()
	{
		const ue = new qy('qy');

		super(ue);

		ie.xu(this, [
			'hp', 'zk'
		]);
	}

	yh()
	{
		switch (true)
		{
			case (!xs.lp):
				return this.cw(new tq);

			case (!xs.lq):
				return this.cw(new lo);
		}
	}

	async ki(eg)
	{
		await vf.nm();

		switch (eg)
		{
			case 'hp':
				return this.ml();

			case 'zk':
				return this.fq();
		}
	}

	ml()
	{
		if (!xs.lq)
			return this.cw(new lo);

		this.ca();
	}

	fq()
	{
		!dz.xb && this.ca();
	}

	uv()
	{
		this.ca();
	}

	ca()
	{
		ie.zv('lv');
	}
}

class tq extends nb
{
	constructor()
	{
		const ue = new qy('ad');

		super(ue);
	}

	yh()
	{
		this.bs = new mq({
			gl:[this, 'rl', ['dl', 'fg']]
		});

		this.ue.pj(this.bs, 'om');

		this.ue.pj(
			new iy({
				yb:vf.rt('kf')
			}), 'ic'
		);

		this.ue.pj(
			new uk({vm:'Need help?', mz:'https://cs.lett.app/generating-youtube-api-key'}), 'wv'
		);
	}

	gf()
	{
		this.bs.focus();
	}

	rl(bl)
	{
		bl.ri('loading');

		if (!this.ob)
		{
			this.ob = true;

			jp.rl(bl.value).then(el =>
			{
				!el && bl.ri('error', 'try again');

				this.ob = false;
			});
		}
	}
}

class lo extends ql
{
	constructor()
	{
		super();

		this.cw(new af);
	}

	pa()
	{
		this.cw(new nk);
	}
}

class af extends nb
{
	constructor()
	{
		const ue = new qy('mu');

		super(ue);
	}

	yh()
	{
		const tj = [];

		tj.push(
			new jr({
				tz:'wewjn',
				zr:'Remind me later',
				gl:[this, 'uv', 'xi']
			})
		);

		tj.push(
			new jr({
				tz:'wewjn',
				zr:'Join',
				gl:[this, 'pa', 'xi']
			})
		);

		xs.ek && tj[0].oj(this, 'rn', 'xi');

		for (let op of tj)
		{
			this.ue.pj(op, 'sl');
		}

		this.ue.pj(
			new iy({
				yb:vf.rt('st')
			}), 'ic'
		);
	}

	rn(bl)
	{
		bl.fw('rvxnx');

		setTimeout(
			_ => bl.oe('rvxnx'),
		500);
	}
}

class nk extends nb
{
	constructor()
	{
		const ue = new qy('kz');

		super(ue);

		this.hy;

		this.yr;
		this.bd;

		ie.xu(this, ['zk']);
	}

	ki(eg)
	{
		switch (eg)
		{
			case 'zk':
				return this.fq();
		}
	}

	yh()
	{
		this.au = new df({
			tz:'fumrj'
		});

		this.ue.pj(this.au);

		this.ue.pj(
			new iy({
				yb:vf.rt('yo')
			}), 'ic'
		);

		this.ft = new qn();

		const gt = new yp({tz:'ckoca'});

		for (let mw of [10,15,20,25])
		{
			const ge = new jr({
				tz:'zvhvd',
				vm:mw,
				value:mw,
				gl:[this, 'be', 'xi']
			});

			gt.pj(ge);
		}

		this.ft.zx(gt);

		this.ue.pj(this.ft, 'ft');

		this.px = new qn();

		this.px.gi(
			new yp({
				vm:'Select amount in USD'
			})
		);

		this.ue.pj(this.px, 'px');

		this.qr = new jr({
			tz:['wewjn', 'cybsa'],
			zr:'Pay with PayPal',
			gl:[this, 'fa', 'xi']
		});

		this.ue.pj(this.qr, 'sl');
	}

	yz()
	{
		this.gh();
	}

	be(bl)
	{
		const bq = this.hy;
		const di = bl;

		if (bq != di)
		{
			di.fo('selected');

			if (bq)
			{
				bq.fo('initial');
			}

			this.hy = di;
		}
	}

	fa()
	{
		if (this.gd || !this.hy)
			return;

		this.gd = true;

		this.au.fo('loading');

		jp.dw(this.hy.value).then(wj =>
		{
			if (wj) {
				this.un(wj);

				this.au.fo('waiting');
			}
			else {
				this.au.fo('error');
			}

			this.gd = false;
		});
	}

	un(wj)
	{
		this.gh();

		this.yr = openWindow(wj);

		this.bd = setInterval(
			_ => this.yr.closed && this.gh(),
		500);
	}

	gh()
	{
		if (this.yr)
		{
			this.yr.close();

			this.au.fo('initial');

			clearInterval(this.bd);
		}
	}

	fq()
	{
		this.gh();

		setTimeout(_ => {
			this.po('qz', this);
			this.ly();
		}, 900);
	}

	ly()
	{
		this.ft.zx(
			new yp({tz:'axtgw',vm:'Thank You!'}), true
		);

		this.px.gi(
			new yp({vm:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.qr.fw('opwni');
			this.qr.textContent = 'Done';
			this.qr.oj(this, 'ca', 'xi');
		}, 200);
	}

	ca()
	{
		this.po('ca', this);
	}

	vo()
	{
		super.vo();

		this.gh();
	}
}

class qn extends yp
{
	constructor()
	{
		super();

		this.bo();
	}

	bo()
	{
		this.io = new yp({
			tz:'xnejd'
		});

		this.pj(this.io);
	}

	zx(nl, rw)
	{
		this.ae(nl, 0, rw);
	}

	gi(nl, rw)
	{
		this.ae(nl, null, rw);
	}

	ae(nl, wd, rw)
	{
		this.io.pj(nl, wd);

		if (rw)
		{
			this.rw(wd != null);
		}
	}

	rw(rd)
	{
		let ei, is = this.io;

		if (rd)
		{
			is.style.transform = 'translateY(-100%)';

			ei = 'translateY(0)';
		}
		else {
			ei = 'translateY(-100%)';
		}

		setTimeout(_ => {
			is.style.transition = 'transform 300ms';

			setTimeout(
				_ => is.style.transform = ei,
			10);

			setTimeout(_ => {
				is.style.transition = null;
			}, 300);
		}, 10);
	}
}

class kc extends nb
{
	constructor(pv)
	{
		const ue = new pi;

		super(ue);

		this.cd(pv).then(
			ey => this.bx(ey)
		);
	}

	yh()
	{
		this.ue.fw('vtntu');
	}

	bx(ey)
	{
		this.ue.innerHTML = ey;
	}

	cd(pv)
	{
		const ju = sv.cj('/html/policies/%s.html', pv);

		return jp.cd(ju);
	}
}

class vb extends nb
{
	constructor()
	{
		const ue = new qy('fy');

		super(ue);

		this.ne(ya, ec);

		ie.xu(this, 'ht');
	}

	yh()
	{
		this.qh = new ov({
			placeholder:'type keywords here..',
		});
		this.qh.lk(this, 'mf', ['pu']);
		this.qh.lk(this, 'jl', ['fg', 'dl']);

		this.mb = new jr({
			tz:'kanej',
			zr:'0',
			ai:'disabled',
			gl:[this, 'jm', 'xi']
		});

		this.go = new xt(this);

		this.jb = new cr();
		this.jb.gm = new qw(this);

		this.je = new qy(this.ue.ky('mp'));
		this.je.pj(this.qh);
		this.je.pj(this.mb);

		this.wx = new qy(this.ue.ky('kw'));
		this.wx.pj(this.jb);
		this.wx.pj(this.go);
	}

	kv()
	{
		if (this.xy)
		{
			this.vw();

			if (this.ym.rg)
			{
				this.xp('');
				this.jb.fj();
			}
		}
	}

	gf(bl)
	{
		this.qh.focus();

		if (bl == 'to')
		{
			this.qh.select();
		}
	}

	yz()
	{
		if (this.go.tx)
		{
			this.go.ih.ex();
		}
	}

	ki(eg)
	{
		if (eg == 'ht')
			return this.tu();
	}

	fp(ue)
	{
		this.wx.se(ue);
	}

	mf()
	{
		if (this.xy)
		{
			this.vw();
		}
	}

	jl()
	{
		let q = this.tb();

		switch (true)
		{
			case (!q):
				return;

			case (!et.kp):
				return this.jb.ea('uh');

			case (this.ym.vx):
			{
				if (!this.ym.sw)
					return;

				if (q == this.ym.im)
				{
					return this.jb.ea('en');
				}
			}
		}

		this.va(q);
	}

	yv()
	{
		if (!et.kp)
			return this.jb.ea('uh');

		this.os(':all');
	}

	get sa()
	{
		return this.ym.sa;
	}

	jm()
	{
		this.ma(new hj);
	}

	va(q)
	{
		this.ym.search(q);
		this.jb.ea('kx');
	}

	vw()
	{
		this.ym.zn();
	}

	tu()
	{
		let q = sv.ac(et.hi.currentTime);

		this.os(q);
	}

	tb()
	{
		return this.qh.value;
	}

	xp(q)
	{
		this.qh.value = q;
	}

	os(q)
	{
		this.xp(q);
		this.va(q);
	}

	get xy()
	{
		if (et.kp && et.xl != this.ol)
		{
			return !!(this.ol = et.xl);
		}

		return false;
	}
}

class ya
{
	constructor()
	{
		this.ao = ao.ms('hd', this.mn.bind(this));

		this.im = '';
		this.cl = 0;
		this.hu = 0;
		this.mt = 500;
		this.sw = false;
		this.rg = false;
		this.ug = [];
		this.jv = 25;
	}

	mn(su)
	{
		const sn = su.sn;

		switch (su.gj)
		{
			case 'er':
				return this.gs(sn);

			case 'lf':
				return this.nt(sn);

			case 'ds':
				return this.md(sn);
		}
	}

	get vx()
	{
		return this.sw || this.ld('hu') < 500;
	}

	get sa()
	{
		return this.ug.splice(0, this.jv);
	}

	zn()
	{
		this.ao.ka('lf', new dy(''));
	}

	search(q)
	{
		this.fu(q);

		this.ao.ka('er', new dy(q));
	}

	md(ds)
	{
		this.qv();

		this.gm.md(ds.eg);
	}

	gs(r)
	{
		this.qv();

		let xz = this.mt - this.ld('cl');

		(r.ws == 0) && (xz = 200);

		this.ug = r.hw;
		this.rg = (r.ws == 0);

		setTimeout(
			_ => this.gm.gs(r.ws, r.iw),
		xz);
	}

	nt(n)
	{
		this.gm.nt(n);
	}

	ez(lg)
	{
		this[lg] = Date.now();
	}

	ld(lg)
	{
		return Date.now() - this[lg];
	}

	fu(q)
	{
		this.im = q;

		this.sw = true;

		this.ez('cl');
	}

	qv()
	{
		this.sw = false;

		this.ez('hu');
	}
}

class cr extends qy
{
	constructor()
	{
		super('qy', {
			tz:'lkioa'
		});

		this.tf = {
			ir: 'no results match your query',
			kx: 'Searching...',
			en: 'Searching still...',
			uh: 'You are not watching any video',
			ln: 'Invalid request',
			ls: 'This video has zero comments',
			jw: 'Comments are disabled for this video.',
			yn: 'check your internet connection',
			tw: 'service down for maintenance',
			ho: 'request timeout, try again',
			kl: 'feature not supported for this video',
			as: 'invalid response from server, try again',
			bf: 'something is not working properly, if this persists please let us know',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'max allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
			commentsDisabled: 'Comments are disabled for this video.'
		};
	}

	ea(wz)
	{
		this.ux(wz);
	}

	yj(...hs)
	{
		this.jk(...hs);
	}

	wm(dc, hs)
	{
		this.jk(
			sv.cj(dc, hs)
		);
	}

	fj()
	{
		this.innerHTML = '';
	}

	ux(eg)
	{
		let fl = this.tf[eg];

		if (!fl)
		{
			fl = this.tf.bf;
		}

		this.jk(fl);
	}

	jk(...em)
	{
		const ce = document.createDocumentFragment();

		for (let lu of em)
		{
			let ow = null;

			if (typeof lu == 'string')
			{
				ow = document.createTextNode(lu);
			}
			else {
				ow = lu.al;
			}

			ce.appendChild(ow);
		}

		this.fj();
		this.appendChild(ce);

		this.gm.rz();
	}
}

class xt extends eq
{
	constructor(yx)
	{
		super(yx);

		this.tx = false;
	}

	kq(bl)
	{
		this.ih.wi(bl.xl, bl.eb);

		bl.xm.lz(this.ih);
	}

	ou(bl)
	{
		sv.rv(et.hi, bl.eb);
	}

	zj(iv)
	{
		const mr = [];

		for (let tm of iv)
		{
			for (let i = 0; i < tm.length; i++)
			{
				const zo = tm[i];

				if (zo.sx && !zo.hidden)
				{
					tm[i-1].rb = true;

					for (let k = i - 1; k > 0; k--)
					{
						if (tm[k].eg == zo.sx)
						{
							tm[k].rb = true;
						}
					}
				}
			}

			let dg = new qy('ev');

			for (let zo of tm)
			{
				dg.pj(
					new yi(zo)
				);
			}

			mr.push(dg);
		}

		return mr;
	}

	get ih()
	{
		if (!this.tx)
		{
			this.tx = true;
			this.gr = new wt;
		}

		return this.gr;
	}
}

const ec = function(za)
{
	return {
		nt(n)
		{
			if (0 < n && n < 1000)
			{
				za.mb.fo('normal')
			}
			else {
				za.mb.fo('disabled');
			}

			if (n <= 0) switch (n)
			{
				case 0:
					n = 'zero';
					break;

				case -1:
					n = 'off';
					break;

				case -2:
					n = 'global';
					break;
			}

			za.mb.uy(n);
		},

		gs(ws, p)
		{
			this.nt(p);

			if (ws > 0)
			{
				za.go.qi();

				return za.fp(za.go);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return za.jb.ea('ls');

				case -1:
					return za.jb.ea('jw');

				case -2:
					return za.jb.ea('ir');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const xq = new uk({
						vm:sv.cj('%s comments', p),
						gl:[za, 'yv', 'xi']
					});

					return za.jb.yj('Nothing found in ', xq);
				}

				return za.jb.wm('Nothing found in %s comments', p);
			}

			za.jb.ea('ir');
		},

		md(gq)
		{
			za.jb.ea(gq);
		}
	}
}

const qw = function(za)
{
	return {
		rz()
		{
			za.fp(za.jb);
		}
	}
}

class wt extends qy
{
	constructor()
	{
		super('wt');

		this.vl = this.children[0];

		this.vl.onload = () => {
			try {
				const ia = this.vl.contentDocument.body;

				this.hi = ia.querySelector('video');

				ia.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.ol;
		this.le;
	}

	wi(xl, eb)
	{
		if (xl != this.ol) {
			this.vl.src = sv.cj(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [xl, eb]
			);
		}
		else if (this.hi) {
			sv.rv(this.hi, eb);
		}

		this.ol = xl;
		this.le = eb;
	}

	ex()
	{
		if (this.es)
		{
			this.ha();
		}
	}
}

class yi extends qy
{
	constructor(zo)
	{
		const oz = wy.jz('yi', zo);

		super(oz);

		this.bo(zo);
	}

	bo(zo)
	{
		this.zw(zo);
		this.li(zo);

		if (zo.mi)
		{
			if (zo.rb)
				this.fw('uexfx');

			if (zo.hidden)
				this.fw('utjbh');
		}

		if (zo.zt)
		{
			this.fw('nwcnq');

			this.pj(
				new qy('bp', {tz:'wcupu'}), 'oy'
			);
		}
	}

	ix()
	{
		return this;
	}

	lz(ih)
	{
		this.pj(ih, 'pk');
	}

	zw(zo)
	{
		const zq = zo.ah;

		const jc = zq.replace(
			cs[6], sv.cj('s%s-', zo.mi ? 48 : 80)
		);

		this.pj(new iy({
			yb:jc,
			nd:zq,
		}), 'vi');
	}

	li(zo)
	{
		const re = new yp({
			tz:'ynbum',
			bj: {
				dir:zo.id,
				lang:zo.an
			}
		});

		const tp = Object.keys(zo.ok);

		if (tp.length)
		{
			const ks = sv.ta(zo.ag, tp);

			for (let x of ks)
			{
				if (sv.hx(x))
				{
					const a = this.xj(zo.ok[x]);

					re.pj(a);
				}
				else {
					const s = wy.rh(x);

					re.appendChild(s);
				}
			}
		}
		else {
			re.textContent = zo.ag;
		}

		if (zo.mi && !zo.zt)
		{
			re.fw('tgjhv');

			re.addEventListener('click',
				e => re.oe('tgjhv')
			);
		}

		this.pj(re, 'pk');
	}

	xj(x)
	{
		let a;

		if (x.zb == 'wh' && x.xl != et.xl)
		{
			x.zb = 'ap';
		}

		switch (x.zb)
		{
			case 'wh':
				a = new ar(x.vm, x.eb);
				a.lk(this, 'ou', 'xi');
				return a;

			case 'ap':
				a = new eu(x.vm, x.xl, x.eb);
				a.lk(this, 'kq', 'xi');
				return a;

			case 'vj':
				return new uk({
					vm:x.vm,
					mz:x.wj
				});
		}
	}
}

class eu extends uk
{
	constructor(vm, xl, eb)
	{
		super({
			tz:'bqjgl',
			vm:vm
		});

		this.xl = xl;
		this.eb = eb;
	}

	get xm()
	{
		return this.po('ix');
	}
}

class ar extends uk
{
	constructor(vm, eb)
	{
		super({
			tz:'bqjgl',
			vm:vm
		});

		this.eb = eb;
	}
}

let vf;
let nu;
let jn;
let ao;
let jp;
let ie;
let xs;
let dz;
let jx;
let th;
let wy;

if (et.fn)
{
	vf = new xv;
	nu = new eh;
	jn = new it;
	ao = new gb;
	jp = new ja;
	ie = new fi;
	th = new ku;

	jp.hk().then(async oi =>
	{
		if (oi.ai.qj)
		{
			await vf.nm();
		}

		wy = new yw(oi.cu);

		dz = new tn(oi.ai);

		jx = new pf;

		jp.hn();

		vf.qt();
	});

	jn.ep && th.gv();
}

const cs = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];