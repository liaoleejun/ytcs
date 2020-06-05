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

	return nr != 3029;
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
class vr
{
	di(xv)
	{
		this.xv = xv;
	}

	my(wo, cb)
	{
		if (wo in this && this != cb)
		{
			return this[wo](cb);
		}

		if (this.qb)
		{
			return this.qb.my(wo, cb);
		}
	}

	get qb()
	{
		return this.xv || this.qz;
	}
}

const fx = function(ug, de)
{
	return new de(ug);
}

class am extends vr
{
	constructor(zo)
	{
		super();

		this.ld = zo;

		this.cw('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	vo(xt)
	{
		if (typeof xt == 'string')
		{
			xt = [xt];
		}

		this.ld.classList.add(...xt);
	}

	yq(xt)
	{
		this.ld.classList.remove(xt);
	}

	rh(xt)
	{
		this.ld.classList.contains(xt) ? this.yq(xt)
												: this.vo(xt);
	}

	vk()
	{
		this.ld.remove();
	}

	cw(...no)
	{
		for (let x of no) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.ld[x] instanceof Function)
			{
				this[x] = this.ld[x].bind(this.ld);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.ld[x];
					},
					set(v) {
						this.ld[x] = v;
					}
				});
			}
		}
	}
}

class gb extends am
{
	constructor(ut, le)
	{
		super(
			typeof ut == 'string' ? eu.bo(ut) : ut
		);

		this.qz = null;
		this.cx = [];
		this.zx = {};
		this.xy = {};

		if (le)
		{
			if (le.ds)
			{
				this.vo(le.ds);
			}

			if (le.as)
			{
				this.textContent = le.as;
			}

			if (le.vp)
			{
				this.bg(...le.vp);
			}

			if (le.up)
			{
				for (let wq in le.up)
				{
					this.setAttribute(wq, le.up[wq]);
				}
			}

			if (le.import)
			{
				for (let fo of le.import)
				{
					this.cw(fo);
				}
			}
		}
	}

	ml(lu, lh)
	{
		if (lu.qz)
		{
			if (lu.qz == this)
				return;

			lu.wd();
		}

		lu.qz = this;
		this.cx.push(lu);

		switch (typeof lh)
		{
			case 'string':
				return this.hx(lh).appendChild(lu.ld);

			case 'number':
				return this.ld.prepend(lu.ld);

			default:
				return this.appendChild(lu.ld);
		}
	}

	hx(zy)
	{
		return this.querySelector('#' + zy);
	}

	bg(vp, wo, tu)
	{
		if (typeof tu == 'string')
		{
			tu = [tu];
		}

		for (let pd of tu)
		{
			if (!this.xy[pd])
			{
				this.xy[pd] = new Map;

				this.addEventListener(
					ic.xj(pd, gb.az), e => this.ax(e)
				);
			}

			this.xy[pd].set(vp, wo)
		}
	}

	wb()
	{
		this.xy = {};
	}

	ub(vp, wo, tu)
	{
		this.wb();

		this.bg(vp, wo, tu);
	}

	kr(pd)
	{
		const xy = this.xy[pd];

		if (xy)
		{
			for (let [vp, wo] of xy)
			{
				vp.my(wo, this);
			}
		}
	}

	ho()
	{
		this.hidden = true;
	}

	rs()
	{
		this.hidden = false;
	}

	he()
	{
		let i = this.cx.length;

		while (i--)
		{
			this.cx[i].wd();
		}
	}

	wd()
	{
		this.qz.nu(this);
	}

	pz(lu)
	{
		this.appendChild(lu.ld);
	}

	nu(lu)
	{
		lu.qz = null;

		this.cx.splice(
			this.cx.indexOf(lu), 1
		);

		lu.ld.remove();
	}

	ax(e)
	{
		e.stopPropagation();

		this[ic.xj(e.type, gb.az)](e);
	}

	dc()
	{
		this.kr('dc');
	}
}

gb.az = {
	dc:'click',
	ht:'paste',
	ba:'keyup',
	dt:'keyup',
	gj:'focus',
};

class xr extends gb
{
	constructor(le)
	{
		super('xr', le);
	}
}

class ec extends gb
{
	constructor()
	{
		super('ec');

		this.cw('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			ai.ra(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class ya extends ec
{
	constructor(uq)
	{
		super();

		this.uq = uq;

		this.ad;

		this.addEventListener('scroll',
			_ => this.ef()
		);
	}

	ki()
	{
	}

	dr()
	{
		this.he();
		this.iu();
		this.en();

		this.vm();
	}

	ef()
	{
		if (this.ct && this.ex)
		{
			this.en();
		}
	}

	iu()
	{
		this.ad = this.ki(this.uq.fc);
	}

	en()
	{
		for (let lu of this.ad)
		{
			this.ml(lu);
		}

		this.iu();
	}

	vm()
	{
		this.yq('tzyjb');

		if (this.em)
		{
			this.vo('tzyjb');
		}
	}

	get em()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get ct()
	{
		return this.ad.length;
	}

	get ex()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class bk extends gb
{
	constructor(qa, jc)
	{
		super('bk');

		this.cw('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.uw = qa;

		this.wf(qa, jc);

		this.fg();
		this.tf();
	}

	zh(eb)
	{
		for (let k in eb)
		{
			this.style[k] = eb[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	wf(qa, jc)
	{
		const x = window.innerHeight - jc;
		const y = window.innerWidth - qa - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = qa + 'px';
	}

	fg()
	{
		let ac = this.querySelectorAll('[resize]');

		for (let fn of ac)
		{
			fn.addEventListener('pointerdown',
				e => this.dw(e, 'hd')
			);
		}
	}

	tf()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.dw(e, 'ij')
		);
	}

	dw(e, wo)
	{
		if (e.which == 1)
			this[wo](e);
	}

	xh()
	{
		return this.getBoundingClientRect();
	}

	hd(e)
	{
		const vx = e.target.getAttribute('resize'),
				sj = vx.includes('w'),
				ro = vx.includes('n'),
				ls = vx.includes('e');

		const qy = this.xh(),
				uw = this.uw,
				co = 56,
				wx = wk.qg,
				kn = window.innerHeight - co,
				je = e.clientX,
				ci = e.clientY,
				ey = qy.x,
				gy = qy.y,
				gq = qy.width;

		let oq = 0,
				rz = 0,
				sh = ey,
				tm = gy,
				qn = gq;

		let tk = (e) =>
		{
			oq = e.clientX - je;
			rz = e.clientY - ci;

			if (ro)
			{
				tm = gy + rz;

				(tm < 0) && (tm = 0);

				(tm > kn) && (tm = kn);

				this.style.top = tm + 'px';
			}

			if (ls)
			{
				qn = gq + oq;

				(e.clientX > wx) && (qn = wx - ey);

				(qn < uw) && (qn = uw);

				this.style.width = qn + 'px';
			}

			if (sj)
			{
				sh = ey + oq;
				qn = gq - oq;

				if (sh < 0)
				{
					sh = 0;
					qn = gq + ey;
				}

				if (qn < uw)
				{
					sh = ey + (gq - uw);
					qn = uw;
				}

				this.style.width = qn + 'px';
				this.style.left = sh + 'px';
			}
		};

		let fq = () => {
			(oq != 0 || rz != 0) && this.fj();
		};

		this.js(tk, fq);
	}

	ij(e)
	{
		let ey = this.offsetLeft,
			je = e.clientX,
			oq = 0;

		let tk = (e) => {
			oq = e.clientX - je;
			this.style.left = ey + oq + 'px';
		};

		let fq = () => {
			(oq != 0) && this.fj();
		};

		this.js(tk, fq);
	}

	js(tk, fq)
	{
		ai.is(true);

		document.onpointermove = (e) => tk(e);

		document.onpointerup = (e) => {
			ai.is(false);
			fq();
			document.onpointerup = document.onpointermove = null;
		};
	}

	fj()
	{
		if (this.hidden) return;

		let qy = this.xh();

		let eb = {
			width: ic.pj(qy.width, window.innerWidth),
			left: ic.pj(qy.x, window.innerWidth),
			top: ic.pj(qy.y, window.innerHeight),
		};

		this.zh(eb);

		if ('bx' in this.zx)
		{
			this.zx.bx(eb);
		}
	}
}

class dy extends bk
{
	constructor(qa, jc)
	{
		super(qa, jc);

		this.addEventListener('wheel', ai.ra);
	}
}

class zp extends gb
{
	constructor(le)
	{
		super('zp', le);

		this.cw('src');

		if (le.da)
		{
			this.addEventListener('error', e => this.src = le.da, {once:true});
		}

		this.src = le.dn;
	}
}

class hi extends gb
{
	constructor(ut, le)
	{
		super(ut, le);

		this.ql = [];
		this.er = false;
	}

	ba(e)
	{
		if (e.key == 'Enter')
		{
			this.kr('dt');
		}

		this.kr('ba');
	}

	ht(e)
	{
		setTimeout(
			_ => this.kr('ht'),
		10);
	}

	gj(e)
	{
		this.kr('gj');
	}

	get gc()
	{
		if (!this.er)
		{
			const zw = Date.now();

			const ky = this.ql.push(zw);

			if (ky > 3)
			{
				if (zw - this.ql[0] < 2000)
				{
					this.er = true;

					setTimeout(
						_ => this.er = false,
					20 * 1000);
				}
				else {
					this.ql.length = 0;
				}
			}
		}

		return this.er;
	}
}

class uh extends hi
{
	constructor(le)
	{
		super('uh', le);

		this.cw('placeholder', 'focus', 'select');

		if (le && le.placeholder)
		{
			this.placeholder = le.placeholder;
		}
	}

	get value()
	{
		return this.ld.value.trim();
	}

	set value(s)
	{
		this.ld.value = String(s).trim();
	}
}

class ix extends hi
{
	constructor(le)
	{
		super('ix', le);

		this.wf();
	}

	wf()
	{
		this.ri = new uh();

		this.ml(this.ri, 'su');

		this.yc = new gh();

		this.ml(this.yc, 'su');

		this.sr = this.hx('sr');
	}

	focus()
	{
		this.ri.focus();
	}

	get value()
	{
		return this.ri.value;
	}

	vs(lf, as)
	{
		this.yc.pm(lf);

		this.sr.textContent = as || '';
	}
}

class be extends gb
{
	constructor(ut, le)
	{
		super(ut, le);

		this.pm(le.lf || 'initial');
	}

	get ws()
	{
		return this.lf == 'disabled';
	}

	get hp()
	{
		return this.lf == 'selected';
	}

	pm(lf)
	{
		this.lf = lf;

		this.setAttribute('state', lf);
	}

	ax(e)
	{
		if (!this.ws)
		{
			super.ax(e);
		}
	}
}

class iy extends be
{
	constructor(le)
	{
		super('iy', le);

		this.value = le.value;

		if (le.st)
		{
			this.wz(le.st);
		}

		if (le.ux)
		{
			this.pv(le.ux);
		}
	}

	wz(as)
	{
		this.textContent = as;
	}

	pv(ut)
	{
		const ux = eu.bo(ut);

		this.appendChild(ux);
	}
}

class ng extends iy
{
	constructor(le)
	{
		super(le);

		this.value = le.value;
	}

	dc()
	{
		if (this.hp)
		{
			this.pm('initial');
		}
		else {
			this.pm('selected');
		}

		super.dc();
	}
}

class ke extends gb
{
	constructor(le)
	{
		super('ke', le);

		if (le.gn)
		{
			this.setAttribute('href', le.gn);
		}
	}
}

class gh extends gb
{
	constructor(le)
	{
		super('gh', le);
	}

	pm(lf)
	{
		this.setAttribute('state', lf);
	}
}

class th extends vr
{
	constructor(lu, es)
	{
		super();

		this.lu;

		this.ma;

		this.children = [];

		this.nq(lu, es);
	}

	nq(lu, es)
	{
		lu.di(this);

		if (es)
		{
			lu.zx = new fx(this, es);
		}

		this.lu = lu;

		this.fl();
	}

	wa(ot, bd)
	{
		this.ma = new ot;

		if (bd)
		{
			this.ma.zx = new fx(this, bd);
		}

		this.pw();
	}

	pw()
	{
	}

	fl()
	{
	}

	ch(cb)
	{
		if (this.fm)
		{
			this.fm.ch(cb);
		}

	}

	qu(cb)
	{
		if (this.fm)
		{
			this.fm.qu(cb);
		}

	}

	op(cb)
	{
		if (this.fm)
		{
			this.fm.op(cb);
		}

	}

	oa(cb)
	{
		if (this.fm)
		{
			this.fm.oa(cb);
		}

	}

	ue(zy)
	{
	}

	rs(kd, cb)
	{
		this.lu.appendChild(kd.lu.ld);
	}

	ov(kd)
	{
		this.uk.so(kd);
	}

	oe()
	{
		this.uk.ie();
	}

	so(od, af)
	{
		od.di(this);

		od.ch();

		this.children.push(od);

		this.lu.ml(od.lu, af);

		od.qu();
	}

	ie()
	{
		this.children.pop().zi();
	}

	get uk()
	{
		let pn = this;

		while (pn.xv)
		{
			pn = pn.xv;
		}

		return pn;
	}

	get ym()
	{
		return this.children.length;
	}

	get fm()
	{
		return ic.pa(this.children);
	}

	zi()
	{
		this.lu.vk();

		for (let od of this.children)
		{
			od.zi();
		}
	}
}

class za extends th
{
	constructor()
	{
		const lu = new gb('hg');

		super(lu);
	}

	fl()
	{
		this.iv = new iy({
			ds:['qnyhy', 'cyanf'],
			ux:'mx',
			lf:'hidden',
			vp:[this, 'jm', 'dc']
		});

		this.lu.ml(this.iv);
	}

	jm()
	{
		this.ie();

		this.kq();
	}

	eh()
	{
		this.iv.pm('hidden');
	}

	so(od)
	{
		super.so(od, 'uo');

		this.kq();
	}

	kq()
	{
		if (this.ym > 1)
		{
			this.iv.pm('initial');
		}
		else {
			this.iv.pm('hidden');
		}
	}




}

ic.hy = function(av, fr)
{
	av.currentTime = fr;

	if (av.paused)
	{
		av.play();
	}
}

function openWindow(ik)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = ic.zb(q, ',');

	return window.open(ik, '', q);
}

class dx
{
	constructor(q)
	{
		Object.assign(this, {
			lo: q,
			mb: sy.mb,
			jz: sy.av.duration,
			vc:sy.av.currentTime
		});
	}
}

class xu
{
	constructor()
	{
		this.wu = navigator.platform.includes('Mac');
	}

	get qg()
	{
		return !this.wu ? document.body.clientWidth : window.innerWidth;
	}
}

const sy = {
	get cg()
	{
		return ['www', 'music'].includes(this.sx);
	},

	get eg()
	{
		return location.pathname == '/watch';
	},

	get av()
	{
		if (!this.ao)
		{
			this.ao = ai.querySelector('video');
		}

		return this.ao || document.createElement('video');
	},

	get mb()
	{
		return ic.wm(ys[4], location.href);
	},

	get sx()
	{
		return location.host.split('.')[0];
	}
}

class mj
{
	constructor(cf)
	{
		this.ga = document.createElement('div');

		this.zf = {};

		for (let tj of this.bs(cf).children)
		{
			const ah = tj.getAttribute('protoid');

			if (ah) {
				tj.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.zf[ah] = tj.outerHTML;
		}
	}

	bo(ut, mu)
	{
		let fw = this.zf[ut];

		if (mu)
		{
			fw = fw.replace(ys[5], (_, qv) => mu[qv]);
		}

		return this.bs(fw);
	}

	eq(as)
	{
		const s = document.createElement('span');

		s.textContent = as;

		return s;
	}

	bs(fw)
	{
		this.ga.innerHTML = fw;

		return this.ga.children[0];
	}
}

class ok extends am
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.ph = 'fullscreenchange';
			this.an = 'fullscreenElement';
		}
		else {
			this.ph = 'webkitfullscreenchange';
			this.an = 'webkitFullscreenElement';
		}

		this.dm();

		document.addEventListener(
			this.ph, _ => this.dm()
		);
	}

	get mi()
	{
		return !!(document[this.an]);
	}

	wi()
	{
		this.vo('lkxjm');
	}

	is(ly)
	{
		ly ? this.vo('caulr')
			: this.yq('caulr');
	}

	ra(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	dm()
	{
		this.setAttribute('cs-fullscreen', this.mi);
	}
}

class to
{
	constructor()
	{
		this.kb = {
			vl: '/html/svg/1.svg',
			rq: '/html/svg/2.svg',
			ve: '/html/svg/3.svg',
		}
	}

	na()
	{
		return zc.get('1').then(tc => {
			id = new dg(tc);
		});
	}

	al(zy)
	{
		return chrome.runtime.getURL(this.kb[zy]);
	}

	xe()
	{
		ps.ay(
			ic.vt()
		);
	}
}

class qf extends th
{
	constructor(lf)
	{
		const lu = new dy(460, 480);

		super(lu, gu);

		this.wa(qk);

		this.zq = false;

		zm.cj(this, [
			'lq', 'og', 'tr', 'dp'
		]);

		switch (true)
		{
			case (lf.qc):
				return this.so(new re);

			case (lf.yb):
				return this.so(new hq);

			default:
				return this.rw();
		}
	}

	fl()
	{
		this.lu.ml(new iy({
			ds:['qnyhy', 'mxfyw'],
			ux:'hb',
			vp:[this, 'nh', 'dc']
		}));

		document.body.appendChild(this.lu.ld);
	}

	pw()
	{
		this.ma.xh.then(
			eb => eb && this.lu.zh(eb)
		);
	}

	ue(zy)
	{
		switch (zy)
		{
			case 'lq':
				return this.gk('vi');

			case 'og':
				return this.gk('mg');

			case 'tr':
				return this.nh();

			case 'dp':
				return this.gp();
		}
	}

	rw()
	{
		this.so(new ce);
	}

	gp()
	{
		this.ie();

		this.rw();
	}

	gk(cb)
	{
		this.fm.ch(cb);

		this.lu.rs();

		this.fm.qu(cb);

		this.zq = true;
	}

	nh(cb)
	{
		this.fm.op(cb);

		this.lu.ho();
	}

	ji()
	{
		this.so(new ft);
	}
}

class qk
{
	get xh()
	{
		return zc.get('appPosition');
	}

	jb(ds)
	{
		(ds.width > 100) && (ds.width = 100);

		(ds.left < 0) && (ds.left = 0);

		if (ds.left + ds.width > 100)
		{
			ds.left = 100 - ds.width;
		}

		zc.set('appPosition', ds);
	}
}

const gu = function(ug)
{
	return {
		bx(eb)
		{
			ug.ma.jb(eb);
		}
	}
}

class we
{
	static jn(qv)
	{
		return qv == 'Enter';
	}

	static br(qv)
	{
		return ['Control','Meta'].includes(qv);
	}
}

class gf
{
	constructor()
	{
		window.addEventListener('keydown', e => this.oc(e), true);
	}

	oc(e)
	{
		this.vq(e);

		const lw = this.lw;

		if (this.au)
		{
			if (lw == 'KeyS')
			{
				e.preventDefault();

				return zm.dv('lq');
			}

			if (lw == 'KeyE' && sy.eg)
			{
				e.preventDefault();

				return zm.dv('og');
			}

			if (lw == 'KeyX' && ai.mi)
			{
				return zm.dv('tr');
			}
		}

		if (lw == 'Escape')
		{
			return zm.dv('tr');
		}
	}

	vq(e)
	{
		this.lw = e.code;

		this.au = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get jk()
	{
		return this.lw == 'KeyV';
	}
}

class jh
{
	constructor()
	{
		this.gx = {};
	}

	dv(vz)
	{
		let ei = this.fp(vz);

		for (let pk of ei)
		{
			pk.ue(vz);
		}
	}

	cj(pk, zm)
	{
		if (typeof zm == 'string')
		{
			zm = [zm];
		}

		for (let zy of zm)
		{
			this.fp(zy).push(pk);
		}
	}

	fp(vz)
	{
		return this.gx[vz] || (this.gx[vz] = new pb);
	}
}

class iw extends th
{
	constructor()
	{
		const lu = new gb('lm');

		super(lu);
	}

	wh()
	{
		ps.ns();

		this.oe();
	}
}

class re extends th
{
	constructor()
	{
		super(
			new gb('md')
		);
	}

	fl()
	{
		this.lu.ml(
			new zp({
				dn:ow.al('ve')
			}), 'yt'
		);

		const ua = new iy({
			ds:'gbkgn',
			st:'Update Now',
			vp:[this, 'ab', 'dc']
		});

		this.lu.ml(ua, 'tp');
	}

	ab()
	{
		window.open('https://cs.lett.app/update');
	}
}

class nt extends th
{
	constructor()
	{
		const lu = new gb('rv');

		super(lu);
	}

	fl()
	{
		this.lu.ml(new iy({
			ds:['cyanf', 'qnyhy'],
			ux:'mx',
			vp:[this, 'oe', 'dc']
		}));
	}
}

class ft extends th
{
	constructor()
	{
		const lu = new gb('wc');

		super(lu);
	}
}

class hq extends th
{
	constructor()
	{
		const lu = new gb('gb');

		super(lu);

		zm.cj(this, [
			'oy', 'zt'
		]);
	}

	fl()
	{
		switch (true)
		{
			case (!id.mr):
				return this.so(new lt);

			case (!id.xp):
				return this.so(new et);
		}
	}

	async ue(zy)
	{
		await ow.na();

		switch (zy)
		{
			case 'oy':
				return this.qd();

			case 'zt':
				return this.xg();
		}
	}

	qd()
	{
		if (!id.xp)
			return this.so(new et);

		this.kx();
	}

	xg()
	{
		!mo.zq && this.kx();
	}

	rf()
	{
		this.kx();
	}

	kx()
	{
		zm.dv('dp');
	}
}

class lt extends th
{
	constructor()
	{
		const lu = new gb('qo');

		super(lu);
	}

	fl()
	{
		this.bh = new ix({
			vp:[this, 'el', ['ht', 'dt']]
		});

		this.lu.ml(this.bh, 'lj');

		this.lu.ml(
			new zp({
				dn:ow.al('vl')
			}), 'yt'
		);

		this.lu.ml(
			new ke({as:'Need help?', gn:'https://cs.lett.app/generating-youtube-api-key'}), 'jt'
		);
	}

	qu()
	{
		this.bh.focus();
	}

	el(cb)
	{
		cb.vs('loading');

		if (!this.by)
		{
			this.by = true;

			ps.el(cb.value).then(ck =>
			{
				!ck && cb.vs('error', 'try again');

				this.by = false;
			});
		}
	}
}

class et extends za
{
	constructor()
	{
		super();

		this.so(new gl);
	}

	ln()
	{
		this.so(new yk);
	}
}

class gl extends th
{
	constructor()
	{
		const lu = new gb('um');

		super(lu);
	}

	fl()
	{
		const zg = [];

		zg.push(
			new iy({
				ds:'gbkgn',
				st:'Remind me later',
				vp:[this, 'rf', 'dc']
			})
		);

		zg.push(
			new iy({
				ds:'gbkgn',
				st:'Join',
				vp:[this, 'ln', 'dc']
			})
		);

		id.iq && zg[0].ub(this, 'ej', 'dc');

		for (let ha of zg)
		{
			this.lu.ml(ha, 'tp');
		}

		this.lu.ml(
			new zp({
				dn:ow.al('rq')
			}), 'yt'
		);
	}

	ej(cb)
	{
		cb.vo('yvudh');

		setTimeout(
			_ => cb.yq('yvudh'),
		500);
	}
}

class yk extends th
{
	constructor()
	{
		const lu = new gb('cz');

		super(lu);

		this.pi;

		this.yx;
		this.cv;

		zm.cj(this, ['zt']);
	}

	ue(zy)
	{
		switch (zy)
		{
			case 'zt':
				return this.xg();
		}
	}

	fl()
	{
		this.yc = new gh({
			ds:'rlgwv'
		});

		this.lu.ml(this.yc);

		this.lu.ml(
			new zp({
				dn:ow.al('ve')
			}), 'yt'
		);

		this.dq = new mk();

		const mf = new xr({ds:'uxpun'});

		for (let ar of [10,15,20,25])
		{
			const ti = new iy({
				ds:'xezpq',
				as:ar,
				value:ar,
				vp:[this, 'ox', 'dc']
			});

			mf.ml(ti);
		}

		this.dq.fy(mf);

		this.lu.ml(this.dq, 'dq');

		this.va = new mk();

		this.va.xb(
			new xr({
				as:'Select amount in USD'
			})
		);

		this.lu.ml(this.va, 'va');

		this.zj = new iy({
			ds:['gbkgn', 'pqebf'],
			st:'Pay with PayPal',
			vp:[this, 'py', 'dc']
		});

		this.lu.ml(this.zj, 'tp');
	}

	op()
	{
		this.qh();
	}

	ox(cb)
	{
		const sk = this.pi;
		const qx = cb;

		if (sk != qx)
		{
			qx.pm('selected');

			if (sk)
			{
				sk.pm('initial');
			}

			this.pi = qx;
		}
	}

	py()
	{
		if (this.zl || !this.pi)
			return;

		this.zl = true;

		this.yc.pm('loading');

		ps.bm(this.pi.value).then(ik =>
		{
			if (ik) {
				this.uy(ik);

				this.yc.pm('waiting');
			}
			else {
				this.yc.pm('error');
			}

			this.zl = false;
		});
	}

	uy(ik)
	{
		this.qh();

		this.yx = openWindow(ik);

		this.cv = setInterval(
			_ => this.yx.closed && this.qh(),
		500);
	}

	qh()
	{
		if (this.yx)
		{
			this.yx.close();

			this.yc.pm('initial');

			clearInterval(this.cv);
		}
	}

	xg()
	{
		this.qh();

		setTimeout(_ => {
			this.my('eh', this);
			this.bp();
		}, 900);
	}

	bp()
	{
		this.dq.fy(
			new xr({ds:'qnlpk',as:'Thank You!'}), true
		);

		this.va.xb(
			new xr({as:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.zj.vo('cixmv');
			this.zj.textContent = 'Done';
			this.zj.ub(this, 'kx', 'dc');
		}, 200);
	}

	kx()
	{
		this.my('kx', this);
	}

	zi()
	{
		super.zi();

		this.qh();
	}
}

class mk extends xr
{
	constructor()
	{
		super();

		this.wf();
	}

	wf()
	{
		this.vh = new xr({
			ds:'ypqsk'
		});

		this.ml(this.vh);
	}

	fy(nz, rk)
	{
		this.fk(nz, 0, rk);
	}

	xb(nz, rk)
	{
		this.fk(nz, null, rk);
	}

	fk(nz, oh, rk)
	{
		this.vh.ml(nz, oh);

		if (rk)
		{
			this.rk(oh != null);
		}
	}

	rk(db)
	{
		let vu, yn = this.vh;

		if (db)
		{
			yn.style.transform = 'translateY(-100%)';

			vu = 'translateY(0)';
		}
		else {
			vu = 'translateY(-100%)';
		}

		setTimeout(_ => {
			yn.style.transition = 'transform 300ms';

			setTimeout(
				_ => yn.style.transform = vu,
			10);

			setTimeout(_ => {
				yn.style.transition = null;
			}, 300);
		}, 10);
	}
}

class rc extends th
{
	constructor(rx)
	{
		const lu = new ec;

		super(lu);

		this.jy(rx).then(
			ny => this.le(ny)
		);
	}

	fl()
	{
		this.lu.vo('pqbmh');
	}

	le(ny)
	{
		this.lu.innerHTML = ny;
	}

	jy(rx)
	{
		const ed = ic.gw('/html/policies/%s.html', rx);

		return ps.jy(ed);
	}
}

class ce extends th
{
	constructor()
	{
		const lu = new gb('zu');

		super(lu);

		this.wa(tv, vy);

		zm.cj(this, 'og');
	}

	fl()
	{
		this.ul = new uh({
			placeholder:'type keywords here..',
		});
		this.ul.bg(this, 'xs', ['gj']);
		this.ul.bg(this, 'ry', ['dt', 'ht']);

		this.gm = new iy({
			ds:'hpwvx',
			st:'0',
			lf:'disabled',
			vp:[this, 'lp', 'dc']
		});

		this.sl = new ek(this);

		this.ew = new sb();
		this.ew.zx = new ka(this);

		this.kc = new gb(this.lu.hx('dl'));
		this.kc.ml(this.ul);
		this.kc.ml(this.gm);

		this.uj = new gb(this.lu.hx('xw'));
		this.uj.ml(this.ew);
		this.uj.ml(this.sl);
	}

	ch()
	{
		if (this.kp)
		{
			this.sm();

			if (this.ma.zn)
			{
				this.bf('');
				this.ew.rn();
			}
		}
	}

	qu(cb)
	{
		this.ul.focus();

		if (cb == 'vi')
		{
			this.ul.select();
		}
	}

	op()
	{
		if (this.sl.oz)
		{
			this.sl.hl.oe();
		}
	}

	ue(zy)
	{
		if (zy == 'og')
			return this.sv();
	}

	nk(lu)
	{
		this.uj.pz(lu);
	}

	xs()
	{
		if (this.kp)
		{
			this.sm();
		}
	}

	ry()
	{
		let q = this.oi();

		switch (true)
		{
			case (!q):
				return;

			case (!sy.eg):
				return this.ew.gd('wr');

			case (this.ma.jq):
			{
				if (!this.ma.cr)
					return;

				if (q == this.ma.mq)
				{
					return this.ew.gd('me');
				}
			}
		}

		this.ol(q);
	}

	jp()
	{
		if (!sy.eg)
			return this.ew.gd('wr');

		this.ks(':all');
	}

	get fc()
	{
		return this.ma.fc;
	}

	lp()
	{
		this.ov(new nt);
	}

	ol(q)
	{
		this.ma.search(q);
		this.ew.gd('os');
	}

	sm()
	{
		this.ma.fz();
	}

	sv()
	{
		let q = ic.wt(sy.av.currentTime);

		this.ks(q);
	}

	oi()
	{
		return this.ul.value;
	}

	bf(q)
	{
		this.ul.value = q;
	}

	ks(q)
	{
		this.bf(q);
		this.ol(q);
	}

	get kp()
	{
		if (sy.eg && sy.mb != this.on)
		{
			return !!(this.on = sy.mb);
		}

		return false;
	}
}

class tv
{
	constructor()
	{
		this.tw = tw.xo('ca', this.nf.bind(this));

		this.mq = '';
		this.rm = 0;
		this.nb = 0;
		this.yo = 500;
		this.cr = false;
		this.zn = false;
		this.vf = [];
		this.zk = 25;
	}

	nf(ob)
	{
		const tc = ob.tc;

		switch (ob.uz)
		{
			case 'nl':
				return this.bj(tc);

			case 'hj':
				return this.yu(tc);

			case 'ep':
				return this.yv(tc);
		}
	}

	get jq()
	{
		return this.cr || this.tl('nb') < 500;
	}

	get fc()
	{
		return this.vf.splice(0, this.zk);
	}

	fz()
	{
		this.tw.tq('hj', new dx(''));
	}

	search(q)
	{
		this.lx(q);

		this.tw.tq('nl', new dx(q));
	}

	yv(ep)
	{
		this.hf();

		this.zx.yv(ep.zy);
	}

	bj(r)
	{
		this.hf();

		let nd = this.yo - this.tl('rm');

		(r.ia == 0) && (nd = 200);

		this.vf = r.or;
		this.zn = (r.ia == 0);

		setTimeout(
			_ => this.zx.bj(r.ia, r.hr),
		nd);
	}

	yu(n)
	{
		this.zx.yu(n);
	}

	hn(ku)
	{
		this[ku] = Date.now();
	}

	tl(ku)
	{
		return Date.now() - this[ku];
	}

	lx(q)
	{
		this.mq = q;

		this.cr = true;

		this.hn('rm');
	}

	hf()
	{
		this.cr = false;

		this.hn('nb');
	}
}

class sb extends gb
{
	constructor()
	{
		super('gb', {
			ds:'hqfdg'
		});

		this.vw = {
			rg: 'no results match your query',
			os: 'Searching...',
			me: 'Searching still...',
			wr: 'You are not watching any video',
			ib: 'Invalid request',
			vg: 'This video has zero comments',
			km: 'Comments are disabled for this video.',
			qs: 'check your internet connection',
			nm: 'service down for maintenance',
			fa: 'request timeout, try again',
			lg: 'feature not supported for this video',
			se: 'invalid response from server, try again',
			kg: 'something is not working properly, if this persists please let us know',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'max allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
			commentsDisabled: 'Comments are disabled for this video.'
		};
	}

	gd(fv)
	{
		this.yz(fv);
	}

	mt(...rl)
	{
		this.ig(...rl);
	}

	at(xk, rl)
	{
		this.ig(
			ic.gw(xk, rl)
		);
	}

	rn()
	{
		this.innerHTML = '';
	}

	yz(zy)
	{
		let cp = this.vw[zy];

		if (!cp)
		{
			cp = this.vw.kg;
		}

		this.ig(cp);
	}

	ig(...ir)
	{
		const ms = document.createDocumentFragment();

		for (let bi of ir)
		{
			let pg = null;

			if (typeof bi == 'string')
			{
				pg = document.createTextNode(bi);
			}
			else {
				pg = bi.ld;
			}

			ms.appendChild(pg);
		}

		this.rn();
		this.appendChild(ms);

		this.zx.rt();
	}
}

class ek extends ya
{
	constructor(uq)
	{
		super(uq);

		this.oz = false;
	}

	mw(cb)
	{
		this.hl.vd(cb.mb, cb.ze);

		cb.pq.yf(this.hl);
	}

	bu(cb)
	{
		ic.hy(sy.av, cb.ze);
	}

	ki(nj)
	{
		const sn = [];

		for (let qp of nj)
		{
			for (let i = 0; i < qp.length; i++)
			{
				const lr = qp[i];

				if (lr.eo && !lr.hidden)
				{
					qp[i-1].tg = true;

					for (let k = i - 1; k > 0; k--)
					{
						if (qp[k].zy == lr.eo)
						{
							qp[k].tg = true;
						}
					}
				}
			}

			let jo = new gb('jf');

			for (let lr of qp)
			{
				jo.ml(
					new gi(lr)
				);
			}

			sn.push(jo);
		}

		return sn;
	}

	get hl()
	{
		if (!this.oz)
		{
			this.oz = true;
			this.te = new yp;
		}

		return this.te;
	}
}

const vy = function(ug)
{
	return {
		yu(n)
		{
			if (0 < n && n < 1000)
			{
				ug.gm.pm('normal')
			}
			else {
				ug.gm.pm('disabled');
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

			ug.gm.wz(n);
		},

		bj(ia, p)
		{
			this.yu(p);

			if (ia > 0)
			{
				ug.sl.dr();

				return ug.nk(ug.sl);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return ug.ew.gd('vg');

				case -1:
					return ug.ew.gd('km');

				case -2:
					return ug.ew.gd('rg');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const wo = new ke({
						as:ic.gw('%s comments', p),
						vp:[ug, 'jp', 'dc']
					});

					return ug.ew.mt('Nothing found in ', wo);
				}

				return ug.ew.at('Nothing found in %s comments', p);
			}

			ug.ew.gd('rg');
		},

		yv(rp)
		{
			ug.ew.gd(rp);
		}
	}
}

const ka = function(ug)
{
	return {
		rt()
		{
			ug.nk(ug.ew);
		}
	}
}

class yp extends gb
{
	constructor()
	{
		super('yp');

		this.xi = this.children[0];

		this.xi.onload = () => {
			try {
				const rj = this.xi.contentDocument.body;

				this.av = rj.querySelector('video');

				rj.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.on;
		this.sz;
	}

	vd(mb, ze)
	{
		if (mb != this.on) {
			this.xi.src = ic.gw(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [mb, ze]
			);
		}
		else if (this.av) {
			ic.hy(this.av, ze);
		}

		this.on = mb;
		this.sz = ze;
	}

	oe()
	{
		if (this.qz)
		{
			this.wd();
		}
	}
}

class gi extends gb
{
	constructor(lr)
	{
		const uc = eu.bo('gi', lr);

		super(uc);

		this.wf(lr);
	}

	wf(lr)
	{
		this.dk(lr);
		this.sq(lr);

		if (lr.ja)
		{
			if (lr.tg)
				this.vo('ekyjd');

			if (lr.hidden)
				this.vo('xchky');
		}

		if (lr.sg)
		{
			this.vo('uvilv');

			this.ml(
				new gb('sf', {ds:'sdbwg'}), 'ge'
			);
		}
	}

	ez()
	{
		return this;
	}

	yf(hl)
	{
		this.ml(hl, 'oc');
	}

	dk(lr)
	{
		const iz = lr.sd;

		const cs = iz.replace(
			ys[6], ic.gw('s%s-', lr.ja ? 48 : 80)
		);

		this.ml(new zp({
			dn:cs,
			da:iz,
		}), 'ip');
	}

	sq(lr)
	{
		const ty = new xr({
			ds:'sqrpg',
			up: {
				dir:lr.wn,
				lang:lr.sp
			}
		});

		const yh = Object.keys(lr.gr);

		if (yh.length)
		{
			const pe = ic.bt(lr.jx, yh);

			for (let x of pe)
			{
				if (ic.fs(x))
				{
					const a = this.cq(lr.gr[x]);

					ty.ml(a);
				}
				else {
					const s = eu.eq(x);

					ty.appendChild(s);
				}
			}
		}
		else {
			ty.textContent = lr.jx;
		}

		if (lr.ja && !lr.sg)
		{
			ty.vo('dvcjs');

			ty.addEventListener('click',
				e => ty.yq('dvcjs')
			);
		}

		this.ml(ty, 'oc');
	}

	cq(x)
	{
		let a;

		if (x.ju == 'vn' && x.mb != sy.mb)
		{
			x.ju = 'nv';
		}

		switch (x.ju)
		{
			case 'vn':
				a = new zs(x.as, x.ze);
				a.bg(this, 'bu', 'dc');
				return a;

			case 'nv':
				a = new wl(x.as, x.mb, x.ze);
				a.bg(this, 'mw', 'dc');
				return a;

			case 'xc':
				return new ke({
					as:x.as,
					gn:x.ik
				});
		}
	}
}

class wl extends ke
{
	constructor(as, mb, ze)
	{
		super({
			ds:'majiq',
			as:as
		});

		this.mb = mb;
		this.ze = ze;
	}

	get pq()
	{
		return this.my('ez');
	}
}

class zs extends ke
{
	constructor(as, ze)
	{
		super({
			ds:'majiq',
			as:as
		});

		this.ze = ze;
	}
}

let ow;
let zc;
let wk;
let tw;
let ps;
let zm;
let id;
let mo;
let yj;
let ai;
let eu;

if (sy.cg)
{
	ow = new to;
	zc = new it;
	wk = new xu;
	tw = new gv;
	ps = new rd;
	zm = new jh;
	ai = new ok;

	ps.kl().then(async xa =>
	{
		if (xa.lf.yb)
		{
			await ow.na();
		}

		eu = new mj(xa.ap);

		mo = new qf(xa.lf);

		yj = new gf;

		ps.kf();

		ow.xe();
	});

	wk.wu && ai.wi();
}

const ys = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];