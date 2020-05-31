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

	return ht != 3059;
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
class no
{
	sx(rv)
	{
		this.rv = rv;
	}

	dr(bx, cq)
	{
		if (bx in this && this != cq)
		{
			return this[bx](cq);
		}

		if (this.sd)
		{
			return this.sd.dr(bx, cq);
		}
	}

	get sd()
	{
		return this.rv || this.sz;
	}
}

const oq = function(ev, hb)
{
	return new hb(ev);
}

class xo extends no
{
	constructor(eq)
	{
		super();

		this.be = eq;

		this.fl('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	er(nd)
	{
		if (typeof nd == 'string')
		{
			nd = [nd];
		}

		this.be.classList.add(...nd);
	}

	bl(nd)
	{
		this.be.classList.remove(nd);
	}

	zk(nd)
	{
		this.be.classList.contains(nd) ? this.bl(nd)
												: this.er(nd);
	}

	vm()
	{
		this.be.remove();
	}

	fl(...pf)
	{
		for (let x of pf) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.be[x] instanceof Function)
			{
				this[x] = this.be[x].bind(this.be);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.be[x];
					},
					set(v) {
						this.be[x] = v;
					}
				});
			}
		}
	}
}

class ji extends xo
{
	constructor(en, yu)
	{
		super(
			typeof en == 'string' ? fx.xj(en) : en
		);

		this.sz = null;
		this.qw = [];
		this.iq = {};
		this.or = {};

		if (yu)
		{
			if (yu.zd)
			{
				this.er(yu.zd);
			}

			if (yu.ql)
			{
				this.textContent = yu.ql;
			}

			if (yu.fn)
			{
				this.mo(...yu.fn);
			}

			if (yu.pk)
			{
				for (let ve in yu.pk)
				{
					this.setAttribute(ve, yu.pk[ve]);
				}
			}

			if (yu.import)
			{
				for (let fk of yu.import)
				{
					this.fl(fk);
				}
			}
		}
	}

	sf(rw, ck)
	{
		if (rw.sz)
		{
			if (rw.sz == this)
				return;

			rw.px();
		}

		rw.sz = this;
		this.qw.push(rw);

		switch (typeof ck)
		{
			case 'string':
				return this.pr(ck).appendChild(rw.be);

			case 'number':
				return this.be.prepend(rw.be);

			default:
				return this.appendChild(rw.be);
		}
	}

	pr(qn)
	{
		return this.querySelector('#' + qn);
	}

	ul(fn, bx, mn)
	{
		this.fn = {};

		this.mo(fn, bx, mn);
	}

	mo(fn, bx, mn)
	{
		if (typeof mn == 'string')
		{
			mn = [mn];
		}

		for (let mg of mn)
		{
			if (!this.or[mg])
			{
				this.or[mg] = new Map;

				this.addEventListener(
					ha.cy(mg, ji.qt), e => this.tm(e)
				);
			}

			this.or[mg].set(fn, bx)
		}
	}

	ac(mg)
	{
		const or = this.or[mg];

		if (or)
		{
			for (let [fn, bx] of or)
			{
				fn.dr(bx, this);
			}
		}
	}

	dh()
	{
		this.hidden = true;
	}

	ns()
	{
		this.hidden = false;
	}

	pt()
	{
		let i = this.qw.length;

		while (i--)
		{
			this.qw[i].px();
		}
	}

	px()
	{
		this.sz.ai(this);
	}

	vc(rw)
	{
		this.appendChild(rw.be);
	}

	ai(rw)
	{
		rw.sz = null;

		this.qw.splice(
			this.qw.indexOf(rw), 1
		);

		rw.be.remove();
	}

	tm(e)
	{
		e.stopPropagation();

		this[ha.cy(e.type, ji.qt)](e);
	}

	yz()
	{
		this.ac('yz');
	}
}

ji.qt = {
	yz:'click',
	zg:'paste',
	ug:'keyup',
	os:'keyup',
	rx:'focus',
};

class ew extends ji
{
	constructor(yu)
	{
		super('ew', yu);
	}
}

class zw extends ji
{
	constructor()
	{
		super('zw');

		this.fl('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			de.ly(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class jc extends zw
{
	constructor(ln)
	{
		super();

		this.ln = ln;

		this.hl;

		this.addEventListener('scroll',
			_ => this.jh()
		);
	}

	jl()
	{
	}

	ia()
	{
		this.pt();
		this.xc();
		this.uq();

		this.me();
	}

	jh()
	{
		if (this.wb && this.ef)
		{
			this.uq();
		}
	}

	xc()
	{
		this.hl = this.jl(this.ln.cr);
	}

	uq()
	{
		for (let rw of this.hl)
		{
			this.sf(rw);
		}

		this.xc();
	}

	me()
	{
		this.bl('lioze');

		if (this.nj)
		{
			this.er('lioze');
		}
	}

	get nj()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get wb()
	{
		return this.hl.length;
	}

	get ef()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class wq extends ji
{
	constructor(eu, sv)
	{
		super('wq');

		this.fl('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.gq = eu;

		this.po(eu, sv);

		this.np();
		this.km();
	}

	db(lq)
	{
		for (let k in lq)
		{
			this.style[k] = lq[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	po(eu, sv)
	{
		const x = window.innerHeight - sv;
		const y = window.innerWidth - eu - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = eu + 'px';
	}

	np()
	{
		let rc = this.querySelectorAll('[resize]');

		for (let pc of rc)
		{
			pc.addEventListener('pointerdown',
				e => this.kc(e, 'xa')
			);
		}
	}

	km()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.kc(e, 'yp')
		);
	}

	kc(e, bx)
	{
		if (e.which == 1)
			this[bx](e);
	}

	ws()
	{
		return this.getBoundingClientRect();
	}

	xa(e)
	{
		const fz = e.target.getAttribute('resize'),
				uc = fz.includes('w'),
				xl = fz.includes('n'),
				gh = fz.includes('e');

		const cf = this.ws(),
				gq = this.gq,
				qy = 56,
				nu = nf.im,
				ju = window.innerHeight - qy,
				gv = e.clientX,
				se = e.clientY,
				jk = cf.x,
				uv = cf.y,
				kw = cf.width;

		let td = 0,
				oj = 0,
				qu = jk,
				lz = uv,
				pb = kw;

		let as = (e) =>
		{
			td = e.clientX - gv;
			oj = e.clientY - se;

			if (xl)
			{
				lz = uv + oj;

				(lz < 0) && (lz = 0);

				(lz > ju) && (lz = ju);

				this.style.top = lz + 'px';
			}

			if (gh)
			{
				pb = kw + td;

				(e.clientX > nu) && (pb = nu - jk);

				(pb < gq) && (pb = gq);

				this.style.width = pb + 'px';
			}

			if (uc)
			{
				qu = jk + td;
				pb = kw - td;

				if (qu < 0)
				{
					qu = 0;
					pb = kw + jk;
				}

				if (pb < gq)
				{
					qu = jk + (kw - gq);
					pb = gq;
				}

				this.style.width = pb + 'px';
				this.style.left = qu + 'px';
			}
		};

		let kj = () => {
			(td != 0 || oj != 0) && this.bz();
		};

		this.vb(as, kj);
	}

	yp(e)
	{
		let jk = this.offsetLeft,
			gv = e.clientX,
			td = 0;

		let as = (e) => {
			td = e.clientX - gv;
			this.style.left = jk + td + 'px';
		};

		let kj = () => {
			(td != 0) && this.bz();
		};

		this.vb(as, kj);
	}

	vb(as, kj)
	{
		de.fi(true);

		document.onpointermove = (e) => as(e);

		document.onpointerup = (e) => {
			de.fi(false);
			kj();
			document.onpointerup = document.onpointermove = null;
		};
	}

	bz()
	{
		if (this.hidden) return;

		let cf = this.ws();

		let lq = {
			width: ha.wt(cf.width, window.innerWidth),
			left: ha.wt(cf.x, window.innerWidth),
			top: ha.wt(cf.y, window.innerHeight),
		};

		this.db(lq);

		if ('ir' in this.iq)
		{
			this.iq.ir(lq);
		}
	}
}

class kr extends wq
{
	constructor(eu, sv)
	{
		super(eu, sv);

		this.addEventListener('wheel', de.ly);
	}
}

class ct extends ji
{
	constructor(yu)
	{
		super('ct', yu);

		this.fl('src');

		if (yu.xm)
		{
			this.addEventListener('error', e => this.src = yu.xm, {once:true});
		}

		this.src = yu.zp;
	}
}

class az extends ji
{
	constructor(en, yu)
	{
		super(en, yu);

		this.zv = [];
		this.hm = false;
	}

	ug(e)
	{
		if (e.key == 'Enter')
		{
			this.ac('os');
		}

		this.ac('ug');
	}

	zg(e)
	{
		setTimeout(
			_ => this.ac('zg'),
		10);
	}

	rx(e)
	{
		this.ac('rx');
	}

	get yb()
	{
		if (!this.hm)
		{
			const su = Date.now();

			const qf = this.zv.push(su);

			if (qf > 3)
			{
				if (su - this.zv[0] < 2000)
				{
					this.hm = true;

					setTimeout(
						_ => this.hm = false,
					20 * 1000);
				}
				else {
					this.zv.length = 0;
				}
			}
		}

		return this.hm;
	}
}

class nh extends az
{
	constructor(yu)
	{
		super('nh', yu);

		this.fl('placeholder', 'focus', 'select');

		if (yu && yu.placeholder)
		{
			this.placeholder = yu.placeholder;
		}
	}

	get value()
	{
		return this.be.value.trim();
	}

	set value(s)
	{
		this.be.value = String(s).trim();
	}
}

class gp extends az
{
	constructor(yu)
	{
		super('gp', yu);

		this.po();
	}

	po()
	{
		this.bt = new nh();

		this.sf(this.bt, 'hu');

		this.hg = new md();

		this.sf(this.hg, 'hu');

		this.gu = this.pr('gu');
	}

	focus()
	{
		this.bt.focus();
	}

	get value()
	{
		return this.bt.value;
	}

	kl(dw, ql)
	{
		this.hg.tq(dw);

		this.gu.textContent = ql || '';
	}
}

class ik extends ji
{
	constructor(en, yu)
	{
		super(en, yu);

		this.tq(yu.dw || 'initial');
	}

	get le()
	{
		return this.dw == 'disabled';
	}

	get nb()
	{
		return this.dw == 'selected';
	}

	tq(dw)
	{
		this.dw = dw;

		this.setAttribute('state', dw);
	}

	tm(e)
	{
		if (!this.le)
		{
			super.tm(e);
		}
	}
}

class gk extends ik
{
	constructor(yu)
	{
		super('gk', yu);

		this.value = yu.value;

		if (yu.cs)
		{
			this.bn(yu.cs);
		}

		if (yu.is)
		{
			this.yj(yu.is);
		}
	}

	bn(ql)
	{
		this.textContent = ql;
	}

	yj(en)
	{
		const is = fx.xj(en);

		this.appendChild(is);
	}
}

class ow extends gk
{
	constructor(yu)
	{
		super(yu);

		this.value = yu.value;
	}

	yz()
	{
		if (this.nb)
		{
			this.tq('initial');
		}
		else {
			this.tq('selected');
		}

		super.yz();
	}
}

class ny extends ji
{
	constructor(yu)
	{
		super('ny', yu);

		if (yu.ca)
		{
			this.setAttribute('href', yu.ca);
		}
	}
}

class md extends ji
{
	constructor(yu)
	{
		super('md', yu);
	}

	tq(dw)
	{
		this.setAttribute('state', dw);
	}
}

class yo extends no
{
	constructor(rw, tk)
	{
		super();

		this.rw;

		this.zm;

		this.children = [];

		this.ga(rw, tk);
	}

	ga(rw, tk)
	{
		rw.sx(this);

		if (tk)
		{
			rw.iq = new oq(this, tk);
		}

		this.rw = rw;

		this.kb();
	}

	to(am, mu)
	{
		this.zm = new am;

		if (mu)
		{
			this.zm.iq = new oq(this, mu);
		}

		this.fw();
	}

	fw()
	{
	}

	kb()
	{
	}

	st(cq)
	{
		if (this.hz)
		{
			this.hz.st(cq);
		}

	}

	ed(cq)
	{
		if (this.hz)
		{
			this.hz.ed(cq);
		}

	}

	bg(cq)
	{
		if (this.hz)
		{
			this.hz.bg(cq);
		}

	}

	ti(cq)
	{
		if (this.hz)
		{
			this.hz.ti(cq);
		}

	}

	cb(qn)
	{
	}

	ns(xd, cq)
	{
		this.rw.appendChild(xd.rw.be);
	}

	tg(xd)
	{
		this.vr.hx(xd);
	}

	ks()
	{
		this.vr.yn();
	}

	hx(kp, od)
	{
		kp.sx(this);

		kp.st();

		this.children.push(kp);

		this.rw.sf(kp.rw, od);

		kp.ed();
	}

	yn()
	{
		this.children.pop().ch();
	}

	get vr()
	{
		let hs = this;

		while (hs.rv)
		{
			hs = hs.rv;
		}

		return hs;
	}

	get uz()
	{
		return this.children.length;
	}

	get hz()
	{
		return ha.cv(this.children);
	}

	ch()
	{
		this.rw.vm();

		for (let kp of this.children)
		{
			kp.ch();
		}
	}
}

class vy extends yo
{
	constructor()
	{
		const rw = new ji('vo');

		super(rw);
	}

	kb()
	{
		this.ak = new gk({
			zd:['metye', 'rgncq'],
			is:'cz',
			dw:'hidden',
			fn:[this, 'ym', 'yz']
		});

		this.rw.sf(this.ak);
	}

	ym()
	{
		this.yn();

		this.vs();
	}

	yd()
	{
		this.ak.tq('hidden');
	}

	hx(kp)
	{
		super.hx(kp, 'ku');

		this.vs();
	}

	vs()
	{
		if (this.uz > 1)
		{
			this.ak.tq('initial');
		}
		else {
			this.ak.tq('hidden');
		}
	}




}

ha.om = function(wl, dq)
{
	wl.currentTime = dq;

	if (wl.paused)
	{
		wl.play();
	}
}

function openWindow(lv)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = ha.qj(q, ',');

	return window.open(lv, '', q);
}

class ni
{
	constructor(q)
	{
		Object.assign(this, {
			pm: q,
			fv: tb.fv,
			rl: tb.wl.duration,
			ol:tb.wl.currentTime
		});
	}
}

class ne
{
	constructor()
	{
		this.oi = navigator.platform.includes('Mac');
	}

	get im()
	{
		return !this.oi ? document.body.clientWidth : window.innerWidth;
	}
}

const tb = {
	get gy()
	{
		return ['www', 'music'].includes(this.jb);
	},

	get hd()
	{
		return location.pathname == '/watch';
	},

	get wl()
	{
		if (!this.mr)
		{
			this.mr = de.querySelector('video');
		}

		return this.mr || document.createElement('video');
	},

	get fv()
	{
		return ha.py(ci[4], location.href);
	},

	get jb()
	{
		return location.host.split('.')[0];
	}
}

class io
{
	constructor(kq)
	{
		this.lj = document.createElement('div');

		this.ue = {};

		for (let iw of this.je(kq).children)
		{
			const fm = iw.getAttribute('protoid');

			if (fm) {
				iw.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.ue[fm] = iw.outerHTML;
		}
	}

	xj(en, ml)
	{
		let fh = this.ue[en];

		if (ml)
		{
			fh = fh.replace(ci[5], (_, lw) => ml[lw]);
		}

		return this.je(fh);
	}

	du(ql)
	{
		const s = document.createElement('span');

		s.textContent = ql;

		return s;
	}

	je(fh)
	{
		this.lj.innerHTML = fh;

		return this.lj.children[0];
	}
}

class cw extends xo
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.gt = 'fullscreenchange';
			this.ge = 'fullscreenElement';
		}
		else {
			this.gt = 'webkitfullscreenchange';
			this.ge = 'webkitFullscreenElement';
		}

		this.wd();

		document.addEventListener(
			this.gt, _ => this.wd()
		);
	}

	get ey()
	{
		return Boolean(document[this.ge]);
	}

	rj()
	{
		this.er('hmsbu');
	}

	fi(ep)
	{
		ep ? this.er('zjtkx')
			: this.bl('zjtkx');
	}

	ly(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	wd()
	{
		this.setAttribute('cs-fullscreen', this.ey);
	}
}

class vu
{
	constructor()
	{
		this.ho = {
			bh: '/html/svg/1.svg',
			bf: '/html/svg/2.svg',
		}
	}

	my()
	{
		ha.ie() && va.kd();
	}

	async qr()
	{
		wr = await gd.get('1');

		wr = new sk(wr);
	}

	na(qn)
	{
		return chrome.runtime.getURL(this.ho[qn]);
	}
}

class hq extends yo
{
	constructor(dw)
	{
		const rw = new kr(460, 480);

		super(rw, uf);

		this.to(ad);

		wk.uy(this, [
			'mv', 'rz', 'so', 'nw'
		]);

		this.lg = false;

		switch (true)
		{
			case (dw.xh):
				return this.hx(new nz);

			case (dw.kt):
				return this.hx(new pz);

			default:
				this.at();
		}
	}

	kb()
	{
		this.rw.sf(new gk({
			zd:['metye', 'rztsw'],
			is:'cj',
			fn:[this, 'mx', 'yz']
		}));

		document.body.appendChild(this.rw.be);
	}

	fw()
	{
		this.zm.ws.then(
			lq => lq && this.rw.db(lq)
		);
	}

	cb(qn)
	{
		switch (qn)
		{
			case 'mv':
				return this.dn('et');

			case 'rz':
				return this.dn('vd');

			case 'so':
				return this.mx();

			case 'nw':
				return this.xw();
		}
	}

	at()
	{
		this.hx(new hi);
	}

	xw()
	{
		this.yn();

		this.at();
	}

	dn(cq)
	{
		this.hz.st(cq);

		this.rw.ns();

		this.hz.ed(cq);

		this.lg = true;
	}

	mx(cq)
	{
		this.hz.bg(cq);

		this.rw.dh();
	}

	za()
	{
		this.hx(new wc);
	}
}

class ad
{
	get ws()
	{
		return gd.get('appPosition');
	}

	qx(zd)
	{
		(zd.width > 100) && (zd.width = 100);

		(zd.left < 0) && (zd.left = 0);

		if (zd.left + zd.width > 100)
		{
			zd.left = 100 - zd.width;
		}

		gd.set('appPosition', zd);
	}
}

const uf = function(ev)
{
	return {
		ir(lq)
		{
			ev.zm.qx(lq);
		}
	}
}

class oh
{
	static sb(lw)
	{
		return lw == 'Enter';
	}

	static we(lw)
	{
		return ['Control','Meta'].includes(lw);
	}
}

class on
{
	constructor()
	{
		window.addEventListener('keydown', e => this.lr(e), true);
	}

	lr(e)
	{
		this.ye(e);

		const iy = this.iy;

		if (this.dz)
		{
			if (iy == 'KeyS')
			{
				e.preventDefault();

				return wk.fp('mv');
			}

			if (iy == 'KeyE' && tb.hd)
			{
				e.preventDefault();

				return wk.fp('rz');
			}

			if (iy == 'KeyX' && de.ey)
			{
				return wk.fp('so');
			}
		}

		if (iy == 'Escape')
		{
			return wk.fp('so');
		}
	}

	ye(e)
	{
		this.iy = e.code;

		this.dz = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get jn()
	{
		return this.iy == 'KeyV';
	}
}

class iz
{
	constructor()
	{
		this.bj = {};
	}

	fp(sn)
	{
		let aq = this.nq(sn);

		for (let ur of aq)
		{
			ur.cb(sn);
		}
	}

	uy(ur, wk)
	{
		if (typeof wk == 'string')
		{
			wk = [wk];
		}

		for (let qn of wk)
		{
			this.nq(qn).push(ur);
		}
	}

	nq(sn)
	{
		return this.bj[sn] || (this.bj[sn] = new pv);
	}
}

class zi extends yo
{
	constructor()
	{
		const rw = new ji('mq');

		super(rw);
	}

	vx()
	{
		va.wu();

		this.ks();
	}
}

class nz extends yo
{
	constructor()
	{
		super(
			new ji('qd')
		);
	}

	kb()
	{
		this.rw.sf(
			new ct({
				zp:pi.na('bh')
			}), 'ab'
		);

		const ag = new gk({
			zd:'qofbn',
			cs:'Update Now',
			fn:[this, 'mw', 'yz']
		});

		this.rw.sf(ag, 'ry');
	}

	mw()
	{
		window.open('https://cs.lett.app/update');
	}
}

class vq extends yo
{
	constructor()
	{
		const rw = new ji('sm');

		super(rw);
	}

	kb()
	{
		this.rw.sf(new gk({
			zd:['rgncq', 'metye'],
			is:'cz',
			fn:[this, 'ks', 'yz']
		}));
	}
}

class wc extends yo
{
	constructor()
	{
		const rw = new ji('kf');

		super(rw);
	}
}

class pz extends yo
{
	constructor()
	{
		const rw = new ji('ji');

		super(rw);

		wk.uy(this, [
			'gb', 'rg'
		]);
	}

	kb()
	{
		switch (true)
		{
			case (!wr.df):
				return this.hx(new rk);

			case (!wr.bk):
				return this.hx(new go);
		}
	}

	async cb(qn)
	{
		await pi.qr();

		switch (qn)
		{
			case 'gb':
				return this.ip();

			case 'rg':
				return this.ax();
		}
	}

	ip()
	{
		if (!wr.bk) {
			this.hx(new go('bc'));
		}
		else {
			this.jy();
		}
	}

	ax()
	{
		!yw.lg && this.jy();
	}

	yc()
	{
		this.jy();
	}

	jy()
	{
		wk.fp('nw');
	}
}

class rk extends yo
{
	constructor()
	{
		const rw = new ji('mp');

		super(rw);
	}

	kb()
	{
		this.dg = new gp({
			fn:[this, 'ts', ['zg', 'os']]
		});

		this.rw.sf(this.dg, 'qp');

		this.rw.sf(
			new ct({
				zp:pi.na('bh')
			}), 'ab'
		);

		this.rw.sf(
			new ny({ql:'Need help?', ca:'https://cs.lett.app/generating-youtube-api-key'}), 'qg'
		);
	}

	ed()
	{
		this.dg.focus();
	}

	ts(cq)
	{
		cq.kl('loading');

		if (!this.ph)
		{
			this.ph = true;

			va.ts(cq.value).then(sr =>
			{
				!sr && cq.kl('error', 'try again');

				this.ph = false;
			});
		}
	}
}

class go extends vy
{
	constructor(ar)
	{
		super();

		switch (ar)
		{
			case 'bc':
				return this.hx(new dc);

			default:
				return this.hx(new iu);
		}
	}

	bo()
	{
		this.hx(new nt);
	}
}

class dc extends yo
{
	constructor()
	{
		const rw = new ji('cm');

		super(rw);
	}

	kb()
	{
		const uh = [];

		uh.push(
			new gk({
				zd:'qofbn',
				cs:'support it',
				fn:[this, 'bo', 'yz']
			})
		);

		uh.push(
			new gk({
				zd:'qofbn',
				cs:'try it',
				fn:[this, 'yc', 'yz']
			})
		);

		wr.ux && uh.pop();

		for (let lp of uh)
		{
			this.rw.sf(lp, 'ry');
		}
	}
}

class iu extends yo
{
	constructor()
	{
		const rw = new ji('ms');

		super(rw);
	}

	kb()
	{
		const uh = [];

		uh.push(
			new gk({
				zd:'qofbn',
				cs:'Remind me later',
				fn:[this, 'yc', 'yz']
			})
		);

		uh.push(
			new gk({
				zd:'qofbn',
				cs:'Go!',
				fn:[this, 'bo', 'yz']
			})
		);

		wr.ux && uh.shift();

		for (let lp of uh)
		{
			this.rw.sf(lp, 'ry');
		}
	}
}

class nt extends yo
{
	constructor()
	{
		const rw = new ji('al');

		super(rw);

		this.ah;

		this.yr;
		this.ys;

		wk.uy(this, ['rg']);
	}

	cb(qn)
	{
		switch (qn)
		{
			case 'rg':
				return this.ax();
		}
	}

	kb()
	{
		this.hg = new md({
			zd:'qikvp'
		});

		this.rw.sf(this.hg);

		this.da = new ld();

		const av = new ew({zd:'gndbx'});

		for (let rt of [10,15,20])
		{
			const pe = new gk({
				zd:'jakur',
				ql:rt,
				value:rt,
				fn:[this, 'op', 'yz']
			});

			av.sf(pe);
		}

		this.da.bs(av);

		this.rw.sf(this.da, 'da');

		this.dk = new ld();

		this.dk.vp(
			new ew({
				ql:'Select amount in USD'
			})
		);

		this.rw.sf(this.dk, 'dk');

		this.mc = new gk({
			zd:['qofbn', 'qbvch'],
			cs:'Pay with PayPal',
			fn:[this, 'dj', 'yz']
		});

		this.rw.sf(this.mc, 'ry');
	}

	bg()
	{
		this.fd();
	}

	op(cq)
	{
		const oz = this.ah;
		const lo = cq;

		if (oz != lo)
		{
			lo.tq('selected');

			if (oz)
			{
				oz.tq('initial');
			}

			this.ah = lo;
		}
	}

	dj()
	{
		if (this.ok || !this.ah)
			return;

		this.ok = true;

		this.hg.tq('loading');

		va.ek(this.ah.value).then(lv =>
		{
			if (lv) {
				this.qb(lv);

				this.hg.tq('waiting');
			}
			else {
				this.hg.tq('error');
			}

			this.ok = false;
		});
	}

	qb(lv)
	{
		this.fd();

		this.yr = openWindow(lv);

		this.ys = setInterval(
			_ => this.yr.closed && this.fd(),
		500);
	}

	fd()
	{
		if (this.yr)
		{
			this.yr.close();

			this.hg.tq('initial');

			clearInterval(this.ys);
		}
	}

	ax()
	{
		this.fd();

		setTimeout(_ => {
			this.dr('yd', this);
			this.oa();
		}, 900);
	}

	oa()
	{
		this.da.bs(
			new ew({zd:'atncw',ql:'Thank You!'}), true
		);

		this.dk.vp(
			new ew({ql:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.mc.er('wdfvz');
			this.mc.textContent = 'Done';
			this.mc.ul(this, 'jy', 'yz');
		}, 200);
	}

	jy()
	{
		this.dr('jy', this);
	}

	ch()
	{
		super.ch();

		this.fd();
	}
}

class ld extends ew
{
	constructor()
	{
		super();

		this.po();
	}

	po()
	{
		this.ke = new ew({
			zd:'ivdqy'
		});

		this.sf(this.ke);
	}

	bs(xe, gw)
	{
		this.hf(xe, 0, gw);
	}

	vp(xe, gw)
	{
		this.hf(xe, null, gw);
	}

	hf(xe, cl, gw)
	{
		this.ke.sf(xe, cl);

		if (gw)
		{
			this.gw(cl != null);
		}
	}

	gw(ty)
	{
		let sq, dt = this.ke;

		if (ty)
		{
			dt.style.transform = 'translateY(-100%)';

			sq = 'translateY(0)';
		}
		else {
			sq = 'translateY(-100%)';
		}

		setTimeout(_ => {
			dt.style.transition = 'transform 300ms';

			setTimeout(
				_ => dt.style.transform = sq,
			10);

			setTimeout(_ => {
				dt.style.transition = null;
			}, 300);
		}, 10);
	}
}

class zb extends yo
{
	constructor(bp)
	{
		const rw = new zw;

		super(rw);

		this.nv(bp).then(
			fr => this.yu(fr)
		);
	}

	kb()
	{
		this.rw.er('wekme');
	}

	yu(fr)
	{
		this.rw.innerHTML = fr;
	}

	nv(bp)
	{
		const jw = ha.jz('/html/policies/%s.html', bp);

		return va.nv(jw);
	}
}

class hi extends yo
{
	constructor()
	{
		const rw = new ji('la');

		super(rw);

		this.to(sc, eo);

		wk.uy(this, 'rz');
	}

	kb()
	{
		this.xq = new nh({
			placeholder:'type keywords here..',
		});
		this.xq.mo(this, 'bq', ['rx']);
		this.xq.mo(this, 'cd', ['os', 'zg']);

		this.tu = new gk({
			zd:'moxbc',
			cs:'0',
			dw:'disabled',
			fn:[this, 'hy', 'yz']
		});

		this.ng = new oc(this);

		this.co = new dx();
		this.co.iq = new hk(this);

		this.hj = new ji(this.rw.pr('fg'));
		this.hj.sf(this.xq);
		this.hj.sf(this.tu);

		this.qz = new ji(this.rw.pr('ft'));
		this.qz.sf(this.co);
		this.qz.sf(this.ng);
	}

	st()
	{
		if (this.vw)
		{
			this.sg();

			if (this.zm.pw)
			{
				this.xn('');
				this.co.ds();
			}
		}
	}

	ed(cq)
	{
		this.xq.focus();

		if (cq == 'et')
		{
			this.xq.select();
		}
	}

	bg()
	{
		if (this.ng.pa)
		{
			this.ng.pg.ks();
		}
	}

	cb(qn)
	{
		if (qn == 'rz')
			return this.di();
	}

	bv(rw)
	{
		this.qz.vc(rw);
	}

	bq()
	{
		if (this.vw)
		{
			this.sg();
		}
	}

	cd()
	{
		let q = this.yk();

		switch (true)
		{
			case (!q):
				return;

			case (!tb.hd):
				return this.co.iv('qi');

			case (this.zm.ja):
			{
				if (!this.zm.pn)
					return;

				if (q == this.zm.nm)
				{
					return this.co.iv('aj');
				}
			}
		}

		this.ap(q);
	}

	cu()
	{
		if (!tb.hd)
			return this.co.iv('qi');

		this.tp(':all');
	}

	get cr()
	{
		return this.zm.cr;
	}

	hy()
	{
		this.tg(new vq);
	}

	ap(q)
	{
		this.zm.search(q);
		this.co.iv('xb');
	}

	sg()
	{
		this.zm.tw();
	}

	di()
	{
		let q = ha.xk(tb.wl.currentTime);

		this.tp(q);
	}

	yk()
	{
		return this.xq.value;
	}

	xn(q)
	{
		this.xq.value = q;
	}

	tp(q)
	{
		this.xn(q);
		this.ap(q);
	}

	get vw()
	{
		if (tb.hd && tb.fv != this.fu)
		{
			return Boolean(this.fu = tb.fv);
		}

		return false;
	}
}

class sc
{
	constructor()
	{
		this.ki = ki.yf('el', this.kv.bind(this));

		this.nm = '';
		this.xy = 0;
		this.up = 0;
		this.zy = 500;
		this.pn = false;
		this.pw = false;
		this.wf = [];
		this.sl = 25;
	}

	kv(fs)
	{
		const jr = fs.jr;

		switch (fs.ps)
		{
			case 'tv':
				return this.jt(jr);

			case 'zc':
				return this.bu(jr);

			case 'lm':
				return this.lb(jr);
		}
	}

	get ja()
	{
		return this.pn || this.fe('up') < 500;
	}

	get cr()
	{
		return this.wf.splice(0, this.sl);
	}

	tw()
	{
		this.ki.jm('zc', new ni(''));
	}

	search(q)
	{
		this.tx(q);

		this.ki.jm('tv', new ni(q));
	}

	lb(lm)
	{
		this.tf();

		this.iq.lb(lm.qn);
	}

	jt(r)
	{
		this.tf();

		let he = this.zy - this.fe('xy');

		(r.rs == 0) && (he = 200);

		this.wf = r.tn;
		this.pw = (r.rs == 0);

		setTimeout(
			_ => this.iq.jt(r.rs, r.bw),
		he);
	}

	bu(n)
	{
		this.iq.bu(n);
	}

	gi(ze)
	{
		this[ze] = Date.now();
	}

	fe(ze)
	{
		return Date.now() - this[ze];
	}

	tx(q)
	{
		this.nm = q;

		this.pn = true;

		this.gi('xy');
	}

	tf()
	{
		this.pn = false;

		this.gi('up');
	}
}

class dx extends ji
{
	constructor()
	{
		super('ji', {
			zd:'fmgqs'
		});

		this.xp = {
			ij: 'no results match your query',
			xb: 'Searching...',
			aj: 'Searching still...',
			qi: 'You are not watching any video',
			qk: 'Invalid request',
			lt: 'This video has 0 comments',
			vg: 'Comments are disabled for this video.',
			xg: 'check your internet connection',
			th: 'service down for maintenance',
			gr: 'request timeout, try again',
			gl: 'feature not supported for this video',
			uj: 'invalid response from server, try again',
			gn: 'something is not working properly',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'maximum allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
		};
	}

	iv(dy)
	{
		this.em(dy);
	}

	gm(...bm)
	{
		this.nx(...bm);
	}

	jg(eg, bm)
	{
		this.nx(
			ha.jz(eg, bm)
		);
	}

	ds()
	{
		this.innerHTML = '';
	}

	em(qn)
	{
		let jq = this.xp[qn];

		if (!jq)
		{
			jq = this.xp.gn;
		}

		this.nx(jq);
	}

	nx(...uw)
	{
		const tl = document.createDocumentFragment();

		for (let xr of uw)
		{
			let wn = null;

			if (typeof xr == 'string')
			{
				wn = document.createTextNode(xr);
			}
			else {
				wn = xr.be;
			}

			tl.appendChild(wn);
		}

		this.ds();
		this.appendChild(tl);

		this.iq.li();
	}
}

class oc extends jc
{
	constructor(ln)
	{
		super(ln);

		this.pa = false;
	}

	zs(cq)
	{
		this.pg.og(cq.fv, cq.pj);

		cq.aw.vk(this.pg);
	}

	gc(cq)
	{
		ha.om(tb.wl, cq.pj);
	}

	jl(dl)
	{
		const wj = [];

		for (let wo of dl)
		{
			for (let i = 0; i < wo.length; i++)
			{
				const sj = wo[i];

				if (sj.ba && !sj.hidden)
				{
					wo[i-1].es = true;

					for (let k = i - 1; k > 0; k--)
					{
						if (wo[k].qn == sj.ba)
						{
							wo[k].es = true;
						}
					}
				}
			}

			let js = new ji('hp');

			for (let sj of wo)
			{
				js.sf(
					new hw(sj)
				);
			}

			wj.push(js);
		}

		return wj;
	}

	get pg()
	{
		if (!this.pa)
		{
			this.pa = true;
			this.wp = new pq;
		}

		return this.wp;
	}
}

const eo = function(ev)
{
	return {
		bu(n)
		{
			let xv = n;

			if (n < 0) switch (n)
			{
				case -2:
					xv = '∞';
					break;

				case -1:
					xv = '∅';
					break;
			}

			ev.tu.bn(xv);

			if (0 < n && n < 1000)
			{
				ev.tu.tq('normal')
			}
			else {
				ev.tu.tq('disabled');
			}
		},

		jt(rs, p)
		{
			this.bu(p);

			if (rs > 0)
			{
				ev.ng.ia();

				return ev.bv(ev.ng);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return ev.co.iv('lt');

				case -1:
					return ev.co.iv('vg');

				case -2:
					return ev.co.iv('ij');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const bx = new ny({
						ql:ha.jz('%s comments', p),
						fn:[ev, 'cu', 'yz']
					});

					return ev.co.gm('Nothing found in ', bx);
				}

				return ev.co.jg('Nothing found in %s comments', p);
			}

			ev.co.iv('ij');
		},

		lb(br)
		{
			ev.co.iv(br);
		}
	}
}

const hk = function(ev)
{
	return {
		li()
		{
			ev.bv(ev.co);
		}
	}
}

class pq extends ji
{
	constructor()
	{
		super('pq');

		this.mb = this.children[0];

		this.mb.onload = () => {
			try {
				const sy = this.mb.contentDocument.body;

				this.wl = sy.querySelector('video');

				sy.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.fu;
		this.lh;
	}

	og(fv, pj)
	{
		if (fv != this.fu) {
			this.mb.src = ha.jz(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [fv, pj]
			);
		}
		else if (this.wl) {
			ha.om(this.wl, pj);
		}

		this.fu = fv;
		this.lh = pj;
	}

	ks()
	{
		if (this.sz)
		{
			this.px();
		}
	}
}

class hw extends ji
{
	constructor(sj)
	{
		const mk = fx.xj('hw', sj);

		super(mk);

		this.po(sj);
	}

	po(sj)
	{
		this.oe(sj);
		this.kh(sj);

		if (sj.ta)
		{
			if (sj.es)
				this.er('upepc');

			if (sj.hidden)
				this.er('jrinp');
		}

		if (sj.it)
		{
			this.er('xybas');

			this.sf(
				new ji('vz', {zd:'cthiz'}), 'jv'
			);
		}
	}

	dp()
	{
		return this;
	}

	vk(pg)
	{
		this.sf(pg, 'lr');
	}

	oe(sj)
	{
		const rq = sj.mi;

		const yh = rq.replace(
			ci[6], ha.jz('s%s-', sj.ta ? 48 : 80)
		);

		this.sf(new ct({
			zp:yh,
			xm:rq,
		}), 'ky');
	}

	kh(sj)
	{
		const zo = new ew({
			zd:'adrhn',
			pk: {
				dir:sj.nr,
				lang:sj.rh
			}
		});

		const yt = Object.keys(sj.wv);

		if (yt.length)
		{
			const bd = ha.fj(sj.an, yt);

			for (let x of bd)
			{
				if (ha.ex(x))
				{
					const a = this.vf(sj.wv[x]);

					zo.sf(a);
				}
				else {
					const s = fx.du(x);

					zo.appendChild(s);
				}
			}
		}
		else {
			zo.textContent = sj.an;
		}

		if (sj.ta && !sj.it)
		{
			zo.er('pdupl');

			zo.addEventListener('click',
				e => zo.bl('pdupl')
			);
		}

		this.sf(zo, 'lr');
	}

	vf(x)
	{
		let a;

		if (x.wy == 'qo' && x.fv != tb.fv)
		{
			x.wy = 'te';
		}

		switch (x.wy)
		{
			case 'qo':
				a = new qv(x.ql, x.pj);
				a.mo(this, 'gc', 'yz');
				return a;

			case 'te':
				a = new bi(x.ql, x.fv, x.pj);
				a.mo(this, 'zs', 'yz');
				return a;

			case 'qe':
				return new ny({
					ql:x.ql,
					ca:x.lv
				});
		}
	}
}

class bi extends ny
{
	constructor(ql, fv, pj)
	{
		super({
			zd:'mwfiy',
			ql:ql
		});

		this.fv = fv;
		this.pj = pj;
	}

	get aw()
	{
		return this.dr('dp');
	}
}

class qv extends ny
{
	constructor(ql, pj)
	{
		super({
			zd:'mwfiy',
			ql:ql
		});

		this.pj = pj;
	}
}

let pi;
let gd;
let nf;
let ki;
let va;
let wk;
let wr;
let yw;
let lu;
let de;
let fx;

if (tb.gy)
{
	pi = new vu;
	gd = new yg;
	nf = new ne;
	ki = new ix;
	va = new ro;
	wk = new iz;
	de = new cw;

	va.re().then(async ub =>
	{
		if (ub.dw.kt)
		{
			await pi.qr();
		}

		fx = new io(ub.af);

		yw = new hq(ub.dw);

		lu = new on;

		va.nl();

		pi.my();
	});

	nf.oi && de.rj();
}

const ci = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];