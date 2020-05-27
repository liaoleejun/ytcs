/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const mh = {};

for (let ca of 'object array string regex date math type std cmp'.split(' '))
{
	mh[ca] = {};
}

mh.qc = function(hr, cx)
{
	return hr != undefined && hr.constructor === cx;
}

mh.mr = function()
{
	return mh.wi(9);
}

mh.pi = function(ai)
{
	return fw[0].test(ai);
}

mh.gx = function(kb)
{
	return Object.keys(kb).length == 0;
}

mh.fk = function(eo, kb)
{
	for (let gj in kb)
	{
		const dc = kb[gj];

		if (gj == eo) return dc;
		if (dc == eo) return gj;
	}
}

mh.bs = function(kb, zk)
{
	if (kb instanceof Object)
	{
		return kb[zk];
	}
}

mh.gn = function(kb, zk, wc)
{
	if (kb instanceof Object)
	{
		kb[zk] = wc;
	}
}

mh.mp = function(kb, uc)
{
	let ai = '';

	for (let gj in kb)
	{
		ai += gj + '=' + kb[gj] + uc;
	}

	return ai.slice(0, -1);
}

mh.kj = function(dy, pr, fo)
{
	const vm = pr + 1;

	return fo.slice(vm, vm + dy);
}

mh.hx = function(fo)
{
	return fo[fo.length - 1];
}

mh.mo = function(rn, yl)
{
	rn += '?';

	for (let gj in yl)
	{
		rn += gj + '=' + encodeURIComponent(yl[gj]) + '&';
	}

	return rn.slice(0, -1);
}

mh.ox = function(ai, gf)
{
	if (mh.qc(gf, Array))
	{
		let i = 0;

		return ai.replace(fw[1], _ => gf[i++]);
	}

	return ai.replace('%s', gf);
}

mh.xk = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

mh.ya = function(ai, iu)
{
	const lt = mh.ox('(%s)', iu.join('|'));

	return ai.split(new RegExp(lt)).filter(s => s !== '');
}

mh.fn = function(ai)
{
	return ai.toUpperCase();
}

mh.za = function(ai)
{
	return ai.toLowerCase();
}

mh.ef = function(ai, xc)
{
	if (!xc)
	{
		ai = ai.toLowerCase();
	}

	return ai[0].toUpperCase() + ai.slice(1);
}

mh.bi = function(xz, ai)
{
	return ai.match(xz) || [];
}

mh.as = function(xz, ai)
{
	if (xz.global) return '';

	const m = mh.bi(xz, ai);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

mh.zu = function()
{
	return Math.floor(Date.now() / 1000);
}

mh.ec = function(at)
{
	return at < mh.zu();
}

mh.xd = function(q)
{
	const dp = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = mh.as(fw[2], q);

	return Date.now() + (x[0] * dp[x[1]] * 1000);
}

mh.eu = function(gt)
{
	let x = gt.split(':'),
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

mh.qh = function(yp)
{
	let fo = [];

	fo.push(yp / 3600);

	yp %= 3600;

	fo.push(yp / 60);

	fo.push(yp % 60);

	fo = fo.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return fo.join(':').replace(fw[3], '');
}

mh.wi = function(mk)
{
	return Math.random().toString().slice(2, mk + 2);
}

mh.ez = function(ev, bk)
{
	const jn = Math.random() * (bk - ev) + ev;

	return Math.floor(jn);
}

mh.ub = function(x, a, b)
{
	return x >= a && x <= b;
}

mh.kg = function(a, b)
{
	return 100 * (a / b);
}

mh.ki = function(se)
{
	const n = se.length;
	const i = Math.floor(n / 2);

	if (n == 0)
		return 0;

	if (n % 2 != 0)
		return se[i];

	if (n % 2 == 0)
		return (se[i] + se[i-1]) / 2;
}

mh.cr = function()
{
	let kp, ja = 0;

	try {
		kp = [km, lq, no];
	}
	catch (e) {
		kp = [xi, no];
	}

	kp.forEach(
		we => ja += we.toString().length
	);

	return ja != 942;
}

mh.uq = function(a, b)
{
	return a - b;
}

mh.iz = function(a, b)
{
	return b - a;
}

mh.st = function(a, b)
{
	return a.length - b.length;
}

mh.ux = function(a, b)
{
	return b.length - a.length;
}

class ag
{
	constructor(ps, xu)
	{
		this.ps = ps;
		this.xu = xu;
	}
}

class jb
{
	constructor(sz, ps, xu)
	{
		this.sz = sz;
		this.kx = new ag(ps, xu);
	}
}

class sj extends Array
{
	constructor(co)
	{
		super();

		if (co != null)
		{
			super.push(co);
		}
	}

	push(wm)
	{
		return !this.includes(wm) && super.push(wm);
	}
}

class hm
{
	constructor(zm, ad)
	{
		const we = zm.status;

		this.we = we;
		this.ds = false;
		this.tz = false;
		this.xq = null;
		this.xu = null;

		switch (ad)
		{
			case 'error':
				return this.cy('pb');

			case 'timeout':
				return this.cy('gh');

			default:
			{
				this.ds = (we == 200);

				if (we >= 500)
				{
					return this.cy('qd');
				}

				try {
					this.xu = JSON.parse(zm.responseText);
				}
				catch (e) {
					this.xu = zm.responseText;
				}
			}
		}
	}

	qu(pa)
	{
		this.xq = pa;
	}

	cy(pa)
	{
		this.qu(pa);

		this.tz = true;
	}
}

class lm
{
	constructor(xu, ws)
	{
		Object.assign(this, xu);

		Object.defineProperty(this, 'ws', {
			value: ws
		});
	}

	set(gj, dc)
	{
		this[gj] = dc;

		this.oh();
	}

	oh()
	{
		return md.set(this.ws, this);
	}
}

class no extends lm
{
	constructor(xu, ws)
	{
		super(xu, ws);
	}

	get vg()
	{
		return Boolean(this.so)
	}

	get so()
	{
		return this[0];
	}

	get bl()
	{
		return this[1];
	}

	get nf()
	{
		return mh.ec(this.bl);
	}

	get ql()
	{
		const aq = this.bl.toString().split('').pop();

		return Boolean(+aq);
	}

	set so(gj)
	{
		this.set(0, gj);
	}

	set bl(wa)
	{
		this.set(1, wa);
	}

	get eq()
	{
		let s = this.bl.toString(),
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

class ab
{
	constructor(yz)
	{
		if (yz)
		{
			this.fd();
		}
	}

	ml(ga, pq, bj)
	{
	}

	fd()
	{
		chrome.runtime.onMessage.addListener(
			this.ml.bind(this)
		);
	}
}

class bu extends ab
{
	constructor()
	{
		super(false);
	}

	ml(ga, pq, bj)
	{
		const xu = ga.xu;

		switch (ga.ps)
		{
			case 'ir':
				return this.vr(xu);
		}
	}

	vr(ir)
	{
		if (ir == 'fs')
		{
			bn.vm();
		}
	}

	hu()
	{
		return this.hw('hu');
	}

	sm(zj)
	{
		return this.hw('sm', zj);
	}

	sy(so)
	{
		return this.hw('sy', so);
	}

	ld(tj)
	{
		return this.hw('ld', tj);
	}

	op()
	{
		return this.hw('op');
	}

	hw(ps, xu)
	{
		const ga = new ag(ps, xu);

		return new Promise(bj =>
		{
			try {
				chrome.runtime.sendMessage(ga, bj);
			}
			catch (e) {
			}
		});
	}
}

class yr extends ab
{
	constructor()
	{
		super(true);
	}

	ml(ga, pq, bj)
	{
		const tv = function(...gf)
		{
			try {
				bj(...gf);
			}
			catch (e) {
			}
		};

		zs.ka.then(_ =>
		{
			const xu = ga.xu;

			switch (ga.ps)
			{
				case 'hu':
					zs.hu().then(tv);
				break;

				case 'sm':
					zs.sm(xu).then(tv);
				break;

				case 'sy':
					zs.sy(xu).then(tv);
				break;

				case 'ld':
					kw.id.ld(xu).then(tv);
				break;

				case 'op':
					zs.oj();
				break;
			}
		});

		return true;
	}
}

class lr
{
	get(gj)
	{
		return new Promise(zt =>
		{
			try {
				chrome.storage.local.get(gj, ih =>
					zt(typeof gj == 'string' ? ih[gj] : ih)
				);
			}
			catch (e) {
			}
		});
	}

	set(gj, dc)
	{
		let xu;

		if (typeof gj == 'object')
		{
			xu = gj;
		}
		else {
			xu = {[gj]:dc};
		}

		return new Promise(vs =>
		{
			try {
				chrome.storage.local.set(xu, vs);
			}
			catch (e) {
			}
		});
	}

	lc()
	{
		return new Promise(vs =>
		{
			try {
				chrome.storage.local.clear(vs);
			}
			catch (e) {
			}
		});
	}
}

class pdsan
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			jb => this.am(jb)
		);

		Port.onDisconnect.addListener(
			_ => this.bd()
		);

		this.Port = Port;

		this.xf = {
		};

		this.on = false;
	}

	ml(m)
	{
	}

	vy(sz, ps, xu)
	{
		const ks = new jb(sz, ps, xu);

		if (!this.on)
		{
			this.Port.postMessage(ks);
		}
	}

	am(x)
	{
		this.ju(x.sz).ml(x.kx);
	}

	ju(sz)
	{
		return this.xf[sz] || this;
	}

	jr(sz, ml, bd)
	{
		return this.xf[sz] = new ax(this, sz, ml, bd);
	}

	bd()
	{
		this.on = true;

		for (let sz in this.xf)
		{
			this.ju(sz).bd();
		}
	}
}

class yb extends pdsan
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	ml(ga)
	{
		const xu = ga.xu;

		switch (ga.ps)
		{
			case 'xy':
				return em.ji(xu);
		}
	}

	jr(sz, ml, bd)
	{
		this.vy(null, 'jr', sz);

		return super.jr(sz, ml, bd);
	}

	bd()
	{
		super.bd();

		bn.up();
	}
}

class ct extends pdsan
{
	constructor(zh)
	{
		super(zh);
	}

	ml(ga)
	{
		switch (ga.ps)
		{
			case 'jr':
				return this.jr(ga.xu);
		}
	}

	jr(sz)
	{
		const an = super.jr(sz);

		switch (sz)
		{
			case 'zi':
				return new zb(an);
		}
	}
}

class wu
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			wt => this.vj(wt)
		);

		this.ay = [];
	}

	vj(zh)
	{
		this.ay.push(
			new ct(zh)
		);
	}

	fz(ti)
	{
		for (let zh of this.ay)
		{
			zh.vy(null, 'xy', ti);
		}
	}
}

class ax
{
	constructor(zh, sz, ml, bd)
	{
		this.zh = zh;

		this.sz = sz;

		if (ml)
		{
			this.ml = ml;
		}

		if (bd)
		{
			this.bd = bd;
		}
	}

	vy(ps, xu)
	{
		this.zh.vy(this.sz, ps, xu);
	}

	ml(m)
	{
	}

	bd()
	{
	}
}
class rp
{
	zc(px)
	{
		this.px = px;
	}

	ok(yx, pq)
	{
		if (yx in this && this != pq)
		{
			return this[yx](pq);
		}

		if (this.mi)
		{
			return this.mi.ok(yx, pq);
		}
	}

	get mi()
	{
		return this.px || this.un;
	}
}

const ma = function(jk, pn)
{
	return new pn(jk);
}

class cp extends rp
{
	constructor(cu)
	{
		super();

		this.kc = cu;

		this.sa('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	bz(wb)
	{
		if (typeof wb == 'string')
		{
			wb = [wb];
		}

		this.kc.classList.add(...wb);
	}

	br(wb)
	{
		this.kc.classList.remove(wb);
	}

	eh(wb)
	{
		this.kc.classList.contains(wb) ? this.br(wb)
												: this.bz(wb);
	}

	ob()
	{
		this.kc.remove();
	}

	sa(...lj)
	{
		for (let x of lj) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.kc[x] instanceof Function)
			{
				this[x] = this.kc[x].bind(this.kc);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.kc[x];
					},
					set(v) {
						this.kc[x] = v;
					}
				});
			}
		}
	}
}

class tw extends cp
{
	constructor(im, xt)
	{
		super(
			typeof im == 'string' ? fr.ym(im) : im
		);

		this.un = null;
		this.pv = [];
		this.bv = {};
		this.jv = {};

		if (xt)
		{
			if (xt.xj)
			{
				this.bz(xt.xj);
			}

			if (xt.wx)
			{
				this.textContent = xt.wx;
			}

			if (xt.ou)
			{
				this.qw(...xt.ou);
			}

			if (xt.gm)
			{
				for (let lu in xt.gm)
				{
					this.setAttribute(lu, xt.gm[lu]);
				}
			}

			if (xt.import)
			{
				for (let xp of xt.import)
				{
					this.sa(xp);
				}
			}
		}
	}

	qf(nt, sg)
	{
		if (nt.un)
		{
			if (nt.un == this)
				return;

			nt.jh();
		}

		nt.un = this;
		this.pv.push(nt);

		switch (typeof sg)
		{
			case 'string':
				return this.lk(sg).appendChild(nt.kc);

			case 'number':
				return this.kc.prepend(nt.kc);

			default:
				return this.appendChild(nt.kc);
		}
	}

	lk(vq)
	{
		return this.querySelector('#' + vq);
	}

	sx(ou, yx, sr)
	{
		this.ou = {};

		this.qw(ou, yx, sr);
	}

	qw(ou, yx, sr)
	{
		if (typeof sr == 'string')
		{
			sr = [sr];
		}

		for (let ns of sr)
		{
			if (!this.jv[ns])
			{
				this.jv[ns] = new Map;

				this.addEventListener(
					mh.fk(ns, tw.cz), e => this.gv(e)
				);
			}

			this.jv[ns].set(ou, yx)
		}
	}

	yw(ns)
	{
		const jv = this.jv[ns];

		if (jv)
		{
			for (let [ou, yx] of jv)
			{
				ou.ok(yx, this);
			}
		}
	}

	gu()
	{
		this.hidden = true;
	}

	og()
	{
		this.hidden = false;
	}

	lc()
	{
		let i = this.pv.length;

		while (i--)
		{
			this.pv[i].jh();
		}
	}

	jh()
	{
		this.un.me(this);
	}

	ij(nt)
	{
		this.appendChild(nt.kc);
	}

	me(nt)
	{
		nt.un = null;

		this.pv.splice(
			this.pv.indexOf(nt), 1
		);

		nt.kc.remove();
	}

	gv(e)
	{
		e.stopPropagation();

		this[mh.fk(e.type, tw.cz)](e);
	}

	kf()
	{
		this.yw('kf');
	}
}

tw.cz = {
	kf:'click',
	xs:'paste',
	xa:'keyup',
	zo:'keyup',
	mt:'focus',
};

class nx extends tw
{
	constructor(xt)
	{
		super('nx', xt);
	}
}

class tr extends tw
{
	constructor()
	{
		super('tr');

		this.sa('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			om.sn(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class eb extends tr
{
	constructor(qv)
	{
		super();

		this.qv = qv;

		this.ms;

		this.addEventListener('scroll',
			_ => this.dm()
		);
	}

	yd()
	{
	}

	di()
	{
		this.lc();
		this.nq();
		this.vh();

		this.dt();
	}

	dm()
	{
		if (this.fe && this.pm)
		{
			this.vh();
		}
	}

	nq()
	{
		this.ms = this.yd(this.qv.mx);
	}

	vh()
	{
		for (let nt of this.ms)
		{
			this.qf(nt);
		}

		this.nq();
	}

	dt()
	{
		this.br('esube');

		if (this.xw)
		{
			this.bz('esube');
		}
	}

	get xw()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get fe()
	{
		return this.ms.length;
	}

	get pm()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class az extends tw
{
	constructor(tl, lb)
	{
		super('az');

		this.sa('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.ve = tl;

		this.it(tl, lb);

		this.tu();
		this.zw();
	}

	le(ey)
	{
		for (let k in ey)
		{
			this.style[k] = ey[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	it(tl, lb)
	{
		const x = window.innerHeight - lb;
		const y = window.innerWidth - tl - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = tl + 'px';
	}

	tu()
	{
		let va = this.querySelectorAll('[resize]');

		for (let wg of va)
		{
			wg.addEventListener('pointerdown',
				e => this.lf(e, 'hf')
			);
		}
	}

	zw()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.lf(e, 'lw')
		);
	}

	lf(e, yx)
	{
		if (e.which == 1)
			this[yx](e);
	}

	xr()
	{
		return this.getBoundingClientRect();
	}

	hf(e)
	{
		const yv = e.target.getAttribute('resize'),
				xm = yv.includes('w'),
				dv = yv.includes('n'),
				nm = yv.includes('e');

		const nu = this.xr(),
				ve = this.ve,
				hp = 56,
				uk = bw.jw,
				ny = window.innerHeight - hp,
				nk = e.clientX,
				zy = e.clientY,
				ae = nu.x,
				ur = nu.y,
				jx = nu.width;

		let dk = 0,
				ar = 0,
				kh = ae,
				ao = ur,
				er = jx;

		let ua = (e) =>
		{
			dk = e.clientX - nk;
			ar = e.clientY - zy;

			if (dv)
			{
				ao = ur + ar;

				(ao < 0) && (ao = 0);

				(ao > ny) && (ao = ny);

				this.style.top = ao + 'px';
			}

			if (nm)
			{
				er = jx + dk;

				(e.clientX > uk) && (er = uk - ae);

				(er < ve) && (er = ve);

				this.style.width = er + 'px';
			}

			if (xm)
			{
				kh = ae + dk;
				er = jx - dk;

				if (kh < 0)
				{
					kh = 0;
					er = jx + ae;
				}

				if (er < ve)
				{
					kh = ae + (jx - ve);
					er = ve;
				}

				this.style.width = er + 'px';
				this.style.left = kh + 'px';
			}
		};

		let tn = () => {
			(dk != 0 || ar != 0) && this.ac();
		};

		this.jo(ua, tn);
	}

	lw(e)
	{
		let ae = this.offsetLeft,
			nk = e.clientX,
			dk = 0;

		let ua = (e) => {
			dk = e.clientX - nk;
			this.style.left = ae + dk + 'px';
		};

		let tn = () => {
			(dk != 0) && this.ac();
		};

		this.jo(ua, tn);
	}

	jo(ua, tn)
	{
		om.yu(true);

		document.onpointermove = (e) => ua(e);

		document.onpointerup = (e) => {
			om.yu(false);
			tn();
			document.onpointerup = document.onpointermove = null;
		};
	}

	ac()
	{
		if (this.hidden) return;

		let nu = this.xr();

		let ey = {
			width: mh.kg(nu.width, window.innerWidth),
			left: mh.kg(nu.x, window.innerWidth),
			top: mh.kg(nu.y, window.innerHeight),
		};

		this.le(ey);

		if ('zd' in this.bv)
		{
			this.bv.zd(ey);
		}
	}
}

class vn extends az
{
	constructor(tl, lb)
	{
		super(tl, lb);

		this.addEventListener('wheel', om.sn);
	}
}

class ft extends tw
{
	constructor(xt)
	{
		super('ft', xt);

		this.sa('src');

		if (xt.nd)
		{
			this.addEventListener('error', e => this.src = xt.nd, {once:true});
		}

		this.src = xt.is;
	}
}

class je extends tw
{
	constructor(im, xt)
	{
		super(im, xt);

		this.lx = [];
		this.gi = false;
	}

	xa(e)
	{
		if (e.key == 'Enter')
		{
			this.yw('zo');
		}

		this.yw('xa');
	}

	xs(e)
	{
		setTimeout(
			_ => this.yw('xs'),
		10);
	}

	mt(e)
	{
		this.yw('mt');
	}

	get uz()
	{
		if (!this.gi)
		{
			const kz = Date.now();

			const mk = this.lx.push(kz);

			if (mk > 3)
			{
				if (kz - this.lx[0] < 2000)
				{
					this.gi = true;

					setTimeout(
						_ => this.gi = false,
					20 * 1000);
				}
				else {
					this.lx.length = 0;
				}
			}
		}

		return this.gi;
	}
}

class td extends je
{
	constructor(xt)
	{
		super('td', xt);

		this.sa('placeholder', 'focus', 'select');

		if (xt && xt.placeholder)
		{
			this.placeholder = xt.placeholder;
		}
	}

	get value()
	{
		return this.kc.value.trim();
	}

	set value(s)
	{
		this.kc.value = String(s).trim();
	}
}

class vl extends je
{
	constructor(xt)
	{
		super('vl', xt);

		this.it();
	}

	it()
	{
		this.hs = new td();

		this.qf(this.hs, 'wf');

		this.af = new sv();

		this.qf(this.af, 'wf');

		this.wv = this.lk('wv');
	}

	focus()
	{
		this.hs.focus();
	}

	get value()
	{
		return this.hs.value;
	}

	te(hn, wx)
	{
		this.af.cb(hn);

		this.wv.textContent = wx || '';
	}
}

class ra extends tw
{
	constructor(im, xt)
	{
		super(im, xt);

		this.cb(xt.hn || 'initial');
	}

	get ex()
	{
		return this.hn == 'disabled';
	}

	get nz()
	{
		return this.hn == 'selected';
	}

	cb(hn)
	{
		this.hn = hn;

		this.setAttribute('state', hn);
	}

	gv(e)
	{
		if (!this.ex)
		{
			super.gv(e);
		}
	}
}

class yn extends ra
{
	constructor(xt)
	{
		super('yn', xt);

		this.value = xt.value;

		if (xt.pt)
		{
			this.gs(xt.pt);
		}

		if (xt.hy)
		{
			this.sd(xt.hy);
		}
	}

	gs(wx)
	{
		this.textContent = wx;
	}

	sd(im)
	{
		const hy = fr.ym(im);

		this.appendChild(hy);
	}
}

class cd extends yn
{
	constructor(xt)
	{
		super(xt);

		this.value = xt.value;
	}

	kf()
	{
		if (this.nz)
		{
			this.cb('initial');
		}
		else {
			this.cb('selected');
		}

		super.kf();
	}
}

class au extends tw
{
	constructor(xt)
	{
		super('au', xt);

		if (xt.db)
		{
			this.setAttribute('href', xt.db);
		}
	}
}

class sv extends tw
{
	constructor(xt)
	{
		super('sv', xt);
	}

	cb(hn)
	{
		this.setAttribute('state', hn);
	}
}

class he extends rp
{
	constructor(nt, oz)
	{
		super();

		this.nt;

		this.bf;

		this.children = [];

		this.uy(nt, oz);
	}

	uy(nt, oz)
	{
		nt.zc(this);

		if (oz)
		{
			nt.bv = new ma(this, oz);
		}

		this.nt = nt;

		this.ri();
	}

	xo(qj, cg)
	{
		this.bf = new qj;

		if (cg)
		{
			this.bf.bv = new ma(this, cg);
		}

		this.go();
	}

	go()
	{
	}

	ri()
	{
	}

	ul(pq)
	{
		if (this.qb)
		{
			this.qb.ul(pq);
		}

	}

	bg(pq)
	{
		if (this.qb)
		{
			this.qb.bg(pq);
		}

	}

	kv(pq)
	{
		if (this.qb)
		{
			this.qb.kv(pq);
		}

	}

	ty(pq)
	{
		if (this.qb)
		{
			this.qb.ty(pq);
		}

	}

	uf(vq)
	{
	}

	og(fy, pq)
	{
		this.nt.appendChild(fy.nt.kc);
	}

	ha(fy)
	{
		this.uo.um(fy);
	}

	rq()
	{
		this.uo.wq();
	}

	um(sb, ho)
	{
		sb.zc(this);

		sb.ul();

		this.children.push(sb);

		this.nt.qf(sb.nt, ho);

		sb.bg();
	}

	wq()
	{
		this.children.pop().cf();
	}

	get uo()
	{
		let dj = this;

		while (dj.px)
		{
			dj = dj.px;
		}

		return dj;
	}

	get py()
	{
		return this.children.length;
	}

	get qb()
	{
		return mh.hx(this.children);
	}

	cf()
	{
		this.nt.ob();

		for (let sb of this.children)
		{
			sb.cf();
		}
	}
}

class zq extends he
{
	constructor()
	{
		const nt = new tw('nr');

		super(nt);
	}

	ri()
	{
		this.hi = new yn({
			xj:['cjevr', 'mipwx'],
			hy:'da',
			hn:'hidden',
			ou:[this, 'es', 'kf']
		});

		this.nt.qf(this.hi);
	}

	es()
	{
		this.wq();

		this.sc();
	}

	eg()
	{
		this.hi.cb('hidden');
	}

	um(sb)
	{
		super.um(sb, 'ov');

		this.sc();
	}

	sc()
	{
		if (this.py > 1)
		{
			this.hi.cb('initial');
		}
		else {
			this.hi.cb('hidden');
		}
	}




}

mh.js = function(jg, yt)
{
	jg.currentTime = yt;

	if (jg.paused)
	{
		jg.play();
	}
}

function openWindow(rn)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = mh.mp(q, ',');

	return window.open(rn, '', q);
}

class dq
{
	constructor(q)
	{
		Object.assign(this, {
			li: q,
			yo: fu.yo,
			iq: fu.jg.duration,
			oi:fu.jg.currentTime
		});
	}
}

class jq
{
	constructor()
	{
		this.fg = navigator.platform.includes('Mac');
	}

	get jw()
	{
		return !this.fg ? document.body.clientWidth : window.innerWidth;
	}
}

const fu = {
	get wp()
	{
		return ['www', 'music'].includes(this.mb);
	},

	get bt()
	{
		return location.pathname == '/watch';
	},

	get jg()
	{
		if (!this.ud)
		{
			this.ud = om.querySelector('video');
		}

		return this.ud || document.createElement('video');
	},

	get yo()
	{
		return mh.as(fw[4], location.href);
	},

	get mb()
	{
		return location.host.split('.')[0];
	}
}

class vd
{
	constructor(qi)
	{
		this.hk = document.createElement('div');

		this.th = {};

		for (let fl of this.dn(qi).children)
		{
			const hl = fl.getAttribute('protoid');

			if (hl) {
				fl.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.th[hl] = fl.outerHTML;
		}
	}

	ym(im, tc)
	{
		let bq = this.th[im];

		if (tc)
		{
			bq = bq.replace(fw[5], (_, gj) => tc[gj]);
		}

		return this.dn(bq);
	}

	mq(wx)
	{
		const s = document.createElement('span');

		s.textContent = wx;

		return s;
	}

	dn(bq)
	{
		this.hk.innerHTML = bq;

		return this.hk.children[0];
	}
}

class gc extends cp
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.np = 'fullscreenchange';
			this.yq = 'fullscreenElement';
		}
		else {
			this.np = 'webkitfullscreenchange';
			this.yq = 'webkitFullscreenElement';
		}

		this.sp();

		document.addEventListener(
			this.np, _ => this.sp()
		);
	}

	get xe()
	{
		return Boolean(document[this.yq]);
	}

	tx()
	{
		this.bz('hijam');
	}

	yu(wj)
	{
		wj ? this.bz('kvbpw')
			: this.br('kvbpw');
	}

	sn(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	sp()
	{
		this.setAttribute('cs-fullscreen', this.xe);
	}
}

class xi
{
	constructor()
	{
		this.ry = {
			bx: '/html/svg/1.svg',
			rc: '/html/svg/2.svg',
		}
	}

	tg()
	{
		mh.cr() && rh.op();
	}

	async rk()
	{
		zr = await md.get('1');

		zr = new no(zr);
	}

	yc(vq)
	{
		return chrome.runtime.getURL(this.ry[vq]);
	}
}

class km extends he
{
	constructor(hn)
	{
		const nt = new vn(460, 480);

		super(nt, bp);

		this.xo(du);

		em.ba(this, [
			'oy', 'qz', 'ye', 'oc'
		]);

		this.pd = false;

		switch (true)
		{
			case (hn.la):
				return this.um(new de);

			case (hn.bc):
				return this.um(new zv);

			default:
				this.od();
		}
	}

	ri()
	{
		this.nt.qf(new yn({
			xj:['cjevr', 'lbqkr'],
			hy:'hv',
			ou:[this, 'ig', 'kf']
		}));

		document.body.appendChild(this.nt.kc);
	}

	go()
	{
		this.bf.xr.then(
			ey => ey && this.nt.le(ey)
		);
	}

	uf(vq)
	{
		switch (vq)
		{
			case 'oy':
				return this.vm('oq');

			case 'qz':
				return this.vm('iy');

			case 'ye':
				return this.ig();

			case 'oc':
				return this.na();
		}
	}

	od()
	{
		this.um(new jf);
	}

	na()
	{
		this.wq();

		this.od();
	}

	vm(pq)
	{
		this.qb.ul(pq);

		this.nt.og();

		this.qb.bg(pq);

		this.pd = true;
	}

	ig(pq)
	{
		this.qb.kv(pq);

		this.nt.gu();
	}

	up()
	{
		this.um(new nb);
	}
}

class du
{
	get xr()
	{
		return md.get('appPosition');
	}

	ep(xj)
	{
		(xj.width > 100) && (xj.width = 100);

		(xj.left < 0) && (xj.left = 0);

		if (xj.left + xj.width > 100)
		{
			xj.left = 100 - xj.width;
		}

		md.set('appPosition', xj);
	}
}

const bp = function(jk)
{
	return {
		zd(ey)
		{
			jk.bf.ep(ey);
		}
	}
}

class gl
{
	static pg(gj)
	{
		return gj == 'Enter';
	}

	static zp(gj)
	{
		return ['Control','Meta'].includes(gj);
	}
}

class ei
{
	constructor()
	{
		window.addEventListener('keydown', e => this.aw(e), true);
	}

	aw(e)
	{
		this.qm(e);

		const we = this.we;

		if (this.ng)
		{
			if (we == 'KeyS')
			{
				e.preventDefault();

				return em.ji('oy');
			}

			if (we == 'KeyE' && fu.bt)
			{
				e.preventDefault();

				return em.ji('qz');
			}

			if (we == 'KeyX' && om.xe)
			{
				return em.ji('ye');
			}
		}

		if (we == 'Escape')
		{
			return em.ji('ye');
		}
	}

	qm(e)
	{
		this.we = e.code;

		this.ng = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get dh()
	{
		return this.we == 'KeyV';
	}
}

class pf
{
	constructor()
	{
		this.et = {};
	}

	ji(ti)
	{
		let pk = this.vz(ti);

		for (let mc of pk)
		{
			mc.uf(ti);
		}
	}

	ba(mc, em)
	{
		if (typeof em == 'string')
		{
			em = [em];
		}

		for (let vq of em)
		{
			this.vz(vq).push(mc);
		}
	}

	vz(ti)
	{
		return this.et[ti] || (this.et[ti] = new sj);
	}
}

class by extends he
{
	constructor()
	{
		const nt = new tw('qg');

		super(nt);
	}

	si()
	{
		rh.ge();

		this.rq();
	}
}

class de extends he
{
	constructor()
	{
		super(
			new tw('oe')
		);
	}

	ri()
	{
		this.nt.qf(
			new ft({
				is:zs.yc('bx')
			}), 'yg'
		);

		const ap = new yn({
			xj:'lbclu',
			pt:'Update Now',
			ou:[this, 'al', 'kf']
		});

		this.nt.qf(ap, 'dl');
	}

	al()
	{
		window.open('https://cs.lett.app/update');
	}
}

class yf extends he
{
	constructor()
	{
		const nt = new tw('ky');

		super(nt);
	}

	ri()
	{
		this.nt.qf(new yn({
			xj:['mipwx', 'cjevr'],
			hy:'da',
			ou:[this, 'rq', 'kf']
		}));
	}
}

class nb extends he
{
	constructor()
	{
		const nt = new tw('jm');

		super(nt);
	}
}

class zv extends he
{
	constructor()
	{
		const nt = new tw('tw');

		super(nt);

		em.ba(this, [
			'uw', 'nh'
		]);

		switch (true)
		{
			case (!zr.so):
				return this.um(new fm);

			case (!zr.ql):
				return this.um(new jt);
		}
	}

	async uf(vq)
	{
		await zs.rk();

		switch (vq)
		{
			case 'uw':
				return this.ck();

			case 'nh':
				return this.yh();
		}
	}

	ck()
	{
		if (zr.ql) {
			return this.gw();
		}

		this.um(
			new jt('jl')
		);
	}

	yh()
	{
		if (!bn.pd) {
			return this.gw();
		}
	}

	gr()
	{
		this.gw();
	}

	gw()
	{
		em.ji('oc');
	}
}

class fm extends he
{
	constructor()
	{
		const nt = new tw('vk');

		super(nt);
	}

	ri()
	{
		this.rj = new vl({
			ou:[this, 'sy', ['xs', 'zo']]
		});

		this.nt.qf(this.rj, 'fx');

		this.nt.qf(
			new ft({
				is:zs.yc('bx')
			}), 'yg'
		);

		this.nt.qf(
			new au({wx:'Need help?', db:'https://cs.lett.app/generating-youtube-api-key'}), 'fi'
		);
	}

	bg()
	{
		this.rj.focus();
	}

	sy(pq)
	{
		pq.te('loading');

		if (!this.cl)
		{
			this.cl = true;

			rh.sy(pq.value).then(ds =>
			{
				!ds && pq.te('error', 'try again');

				this.cl = false;
			});
		}
	}
}

class jt extends zq
{
	constructor(nc)
	{
		super();

		switch (nc)
		{
			case 'jl':
				return this.um(new zf);

			default:
				return this.um(new jc);
		}
	}

	ut()
	{
		this.um(new xh);
	}
}

class zf extends he
{
	constructor()
	{
		const nt = new tw('xb');

		super(nt);
	}

	ri()
	{
		const hb = [];

		hb.push(
			new yn({
				xj:'lbclu',
				pt:'support it',
				ou:[this, 'ut', 'kf']
			})
		);

		hb.push(
			new yn({
				xj:'lbclu',
				pt:'try it',
				ou:[this, 'gr', 'kf']
			})
		);

		zr.nf && hb.pop();

		for (let hg of hb)
		{
			this.nt.qf(hg, 'dl');
		}
	}
}

class jc extends he
{
	constructor()
	{
		const nt = new tw('aj');

		super(nt);
	}

	ri()
	{
		const hb = [];

		hb.push(
			new yn({
				xj:'lbclu',
				pt:'Remind me later',
				ou:[this, 'gr', 'kf']
			})
		);

		hb.push(
			new yn({
				xj:'lbclu',
				pt:'Go!',
				ou:[this, 'ut', 'kf']
			})
		);

		zr.nf && hb.shift();

		for (let hg of hb)
		{
			this.nt.qf(hg, 'dl');
		}
	}
}

class xh extends he
{
	constructor()
	{
		const nt = new tw('vc');

		super(nt);

		this.ro;

		this.hd;
		this.nl;

		em.ba(this, ['nh']);
	}

	uf(vq)
	{
		switch (vq)
		{
			case 'nh':
				return this.yh();
		}
	}

	ri()
	{
		this.af = new sv({
			xj:'pcxol'
		});

		this.nt.qf(this.af);

		this.jy = new mf();

		const su = new nx({xj:'jitil'});

		for (let tj of [10,15,20])
		{
			const vp = new yn({
				xj:'rtagt',
				wx:tj,
				value:tj,
				ou:[this, 'ts', 'kf']
			});

			su.qf(vp);
		}

		this.jy.tf(su);

		this.nt.qf(this.jy, 'jy');

		this.ik = new mf();

		this.ik.nv(
			new nx({
				wx:'Select amount in USD'
			})
		);

		this.nt.qf(this.ik, 'ik');

		this.yi = new yn({
			xj:['lbclu', 'nlnjk'],
			pt:'Pay with PayPal',
			ou:[this, 'rw', 'kf']
		});

		this.nt.qf(this.yi, 'dl');
	}

	kv()
	{
		this.gb();
	}

	ts(pq)
	{
		const lp = this.ro;
		const vf = pq;

		if (vf != lp)
		{
			if (lp)
				lp.cb('initial');

			vf.cb('selected');

			this.ro = vf;
		}
	}

	rw()
	{
		if (this.yk || !this.ro)
			return;

		this.yk = true;

		this.af.cb('loading');

		rh.ld(this.ro.value).then(rn =>
		{
			if (rn) {
				this.pw(rn);

				this.af.cb('waiting');
			}
			else {
				this.af.cb('error');
			}

			this.yk = false;
		});
	}

	pw(rn)
	{
		this.gb();

		this.hd = openWindow(rn);

		this.nl = setInterval(
			_ => this.hd.closed && this.gb(),
		500);
	}

	gb()
	{
		if (this.hd)
		{
			this.hd.close();

			this.af.cb('initial');

			clearInterval(this.nl);
		}
	}

	yh()
	{
		this.gb();

		setTimeout(_ => {
			this.ok('eg', this);
			this.bh();
		}, 900);
	}

	bh()
	{
		this.jy.tf(
			new nx({xj:'pkcmy',wx:'Thank You!'}), true
		);

		this.ik.nv(
			new nx({wx:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.yi.bz('oagso');
			this.yi.textContent = 'Done';
			this.yi.sx(this, 'gw', 'kf');
		}, 200);
	}

	gw()
	{
		this.ok('gw', this);
	}

	cf()
	{
		super.cf();

		this.gb();
	}
}

class mf extends nx
{
	constructor()
	{
		super();

		this.it();
	}

	it()
	{
		this.sl = new nx({
			xj:'sgvmt'
		});

		this.qf(this.sl);
	}

	tf(wm, vw)
	{
		this.ph(wm, 0, vw);
	}

	nv(wm, vw)
	{
		this.ph(wm, null, vw);
	}

	ph(wm, ht, vw)
	{
		this.sl.qf(wm, ht);

		if (vw)
		{
			this.vw(ht != null);
		}
	}

	vw(pc)
	{
		let cs, av = this.sl;

		if (pc)
		{
			av.style.transform = 'translateY(-100%)';

			cs = 'translateY(0)';
		}
		else {
			cs = 'translateY(-100%)';
		}

		setTimeout(_ => {
			av.style.transition = 'transform 300ms';

			setTimeout(
				_ => av.style.transform = cs,
			10);

			setTimeout(_ => {
				av.style.transition = null;
			}, 300);
		}, 10);
	}
}

class rg extends he
{
	constructor(my)
	{
		const nt = new tr;

		super(nt);

		this.sm(my).then(
			cj => this.xt(cj)
		);
	}

	ri()
	{
		this.nt.bz('ukimh');
	}

	xt(cj)
	{
		this.nt.innerHTML = cj;
	}

	sm(my)
	{
		const zj = mh.ox('/html/policies/%s.html', my);

		return rh.sm(zj);
	}
}

class jf extends he
{
	constructor()
	{
		const nt = new tw('wy');

		super(nt);

		this.xo(ku, wh);

		em.ba(this, 'qz');
	}

	ri()
	{
		this.ys = new td({
			placeholder:'type keywords here..',
		});
		this.ys.qw(this, 'po', ['mt']);
		this.ys.qw(this, 'tq', ['zo', 'xs']);

		this.dr = new yn({
			xj:'ydsvo',
			pt:'0',
			hn:'disabled',
			ou:[this, 'jp', 'kf']
		});

		this.pl = new xl(this);

		this.gz = new zn();
		this.gz.bv = new wl(this);

		this.mu = new tw(this.nt.lk('hj'));
		this.mu.qf(this.ys);
		this.mu.qf(this.dr);

		this.sk = new tw(this.nt.lk('uv'));
		this.sk.qf(this.gz);
		this.sk.qf(this.pl);
	}

	ul()
	{
		if (this.rl)
		{
			this.io();

			if (this.bf.fh)
			{
				this.tm('');
				this.gz.pj();
			}
		}
	}

	bg(pq)
	{
		this.ys.focus();

		if (pq == 'oq')
		{
			this.ys.select();
		}
	}

	kv()
	{
		if (this.pl.xv)
		{
			this.pl.rs.rq();
		}
	}

	uf(vq)
	{
		if (vq == 'qz')
			return this.wn();
	}

	wd(nt)
	{
		this.sk.ij(nt);
	}

	po()
	{
		if (this.rl)
		{
			this.io();
		}
	}

	tq()
	{
		let q = this.lo();

		switch (true)
		{
			case (!q):
				return;

			case (!fu.bt):
				return this.gz.qn('ni');

			case (this.bf.ek):
			{
				if (!this.bf.uj)
					return;

				if (q == this.bf.fa)
				{
					return this.gz.qn('kt');
				}
			}
		}

		this.rb(q);
	}

	pe()
	{
		if (!fu.bt)
			return this.gz.qn('ni');

		this.kr(':all');
	}

	get mx()
	{
		return this.bf.mx;
	}

	jp()
	{
		this.ha(new yf);
	}

	rb(q)
	{
		this.bf.search(q);
		this.gz.qn('hc');
	}

	io()
	{
		this.bf.to();
	}

	wn()
	{
		let q = mh.qh(fu.jg.currentTime);

		this.kr(q);
	}

	lo()
	{
		return this.ys.value;
	}

	tm(q)
	{
		this.ys.value = q;
	}

	kr(q)
	{
		this.tm(q);
		this.rb(q);
	}

	get rl()
	{
		if (fu.bt && fu.yo != this.rt)
		{
			return Boolean(this.rt = fu.yo);
		}

		return false;
	}
}

class ku
{
	constructor()
	{
		this.zh = zh.jr('zi', this.kl.bind(this));

		this.fa = '';
		this.tp = 0;
		this.ch = 0;
		this.zx = 500;
		this.uj = false;
		this.fh = false;
		this.ls = [];
		this.xn = 25;
	}

	kl(ga)
	{
		const xu = ga.xu;

		switch (ga.ps)
		{
			case 'ue':
				return this.el(xu);

			case 'qo':
				return this.fc(xu);

			case 'xq':
				return this.sw(xu);
		}
	}

	get ek()
	{
		return this.uj || this.jd('ch') < 500;
	}

	get mx()
	{
		return this.ls.splice(0, this.xn);
	}

	to()
	{
		this.zh.vy('qo', new dq(''));
	}

	search(q)
	{
		this.ta(q);

		this.zh.vy('ue', new dq(q));
	}

	sw(xq)
	{
		this.zg();

		this.bv.sw(xq.vq);
	}

	el(r)
	{
		this.zg();

		let uh = this.zx - this.jd('tp');

		(r.dy == 0) && (uh = 200);

		this.ls = r.rv;
		this.fh = (r.dy == 0);

		setTimeout(
			_ => this.bv.el(r.dy, r.cv),
		uh);
	}

	fc(n)
	{
		this.bv.fc(n);
	}

	lv(en)
	{
		this[en] = Date.now();
	}

	jd(en)
	{
		return Date.now() - this[en];
	}

	ta(q)
	{
		this.fa = q;

		this.uj = true;

		this.lv('tp');
	}

	zg()
	{
		this.uj = false;

		this.lv('ch');
	}
}

class zn extends tw
{
	constructor()
	{
		super('tw', {
			xj:'urost'
		});

		this.ke = {
			gd: 'no results match your query',
			hc: 'Searching...',
			kt: 'Searching still...',
			ni: 'You are not watching any video',
			iw: 'Invalid request',
			ze: 'This video has 0 comments',
			xg: 'Comments are disabled for this video.',
			pb: 'check your internet connection',
			qd: 'service down for maintenance',
			gh: 'request timeout, try again',
			ko: 'feature not supported for this video',
			gp: 'invalid response from server, try again',
			ug: 'something is not working properly',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'maximum allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
		};
	}

	qn(fp)
	{
		this.dw(fp);
	}

	wk(...gf)
	{
		this.pu(...gf);
	}

	vi(jz, gf)
	{
		this.pu(
			mh.ox(jz, gf)
		);
	}

	pj()
	{
		this.innerHTML = '';
	}

	dw(vq)
	{
		let ow = this.ke[vq];

		if (!ow)
		{
			ow = this.ke.ug;
		}

		this.pu(ow);
	}

	pu(...rm)
	{
		const wz = document.createDocumentFragment();

		for (let lg of rm)
		{
			let gq = null;

			if (typeof lg == 'string')
			{
				gq = document.createTextNode(lg);
			}
			else {
				gq = lg.kc;
			}

			wz.appendChild(gq);
		}

		this.pj();
		this.appendChild(wz);

		this.bv.ne();
	}
}

class xl extends eb
{
	constructor(qv)
	{
		super(qv);

		this.xv = false;
	}

	gy(pq)
	{
		this.rs.yj(pq.yo, pq.cq);

		pq.ia.mz(this.rs);
	}

	dz(pq)
	{
		mh.js(fu.jg, pq.cq);
	}

	yd(kn)
	{
		const ed = [];

		for (let hq of kn)
		{
			for (let i = 0; i < hq.length; i++)
			{
				const cw = hq[i];

				if (cw.fj && !cw.hidden)
				{
					hq[i-1].ce = true;

					for (let k = i - 1; k > 0; k--)
					{
						if (hq[k].vq == cw.fj)
						{
							hq[k].ce = true;
						}
					}
				}
			}

			let ot = new tw('fv');

			for (let cw of hq)
			{
				ot.qf(
					new ak(cw)
				);
			}

			ed.push(ot);
		}

		return ed;
	}

	get rs()
	{
		if (!this.xv)
		{
			this.xv = true;
			this.tk = new or;
		}

		return this.tk;
	}
}

const wh = function(jk)
{
	return {
		fc(n)
		{
			let ai = n;

			if (n < 0) switch (n)
			{
				case -2:
					ai = '∞';
					break;

				case -1:
					ai = '∅';
					break;
			}

			jk.dr.gs(ai);

			if (0 < n && n < 1000)
			{
				jk.dr.cb('normal')
			}
			else {
				jk.dr.cb('disabled');
			}
		},

		el(dy, p)
		{
			this.fc(p);

			if (dy > 0)
			{
				jk.pl.di();

				return jk.wd(jk.pl);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return jk.gz.qn('ze');

				case -1:
					return jk.gz.qn('xg');

				case -2:
					return jk.gz.qn('gd');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const yx = new au({
						wx:mh.ox('%s comments', p),
						ou:[jk, 'pe', 'kf']
					});

					return jk.gz.wk('Nothing found in ', yx);
				}

				return jk.gz.vi('Nothing found in %s comments', p);
			}

			jk.gz.qn('gd');
		},

		sw(pa)
		{
			jk.gz.qn(pa);
		}
	}
}

const wl = function(jk)
{
	return {
		ne()
		{
			jk.wd(jk.gz);
		}
	}
}

class or extends tw
{
	constructor()
	{
		super('or');

		this.ip = this.children[0];

		this.ip.onload = () => {
			try {
				const mg = this.ip.contentDocument.body;

				this.jg = mg.querySelector('video');

				mg.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.rt;
		this.wr;
	}

	yj(yo, cq)
	{
		if (yo != this.rt) {
			this.ip.src = mh.ox(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [yo, cq]
			);
		}
		else if (this.jg) {
			mh.js(this.jg, cq);
		}

		this.rt = yo;
		this.wr = cq;
	}

	rq()
	{
		if (this.un)
		{
			this.jh();
		}
	}
}

class ak extends tw
{
	constructor(cw)
	{
		const qy = fr.ym('ak', cw);

		super(qy);

		this.it(cw);
	}

	it(cw)
	{
		this.rf(cw);
		this.kq(cw);

		if (cw.rx)
		{
			if (cw.ce)
				this.bz('iohlp');

			if (cw.hidden)
				this.bz('pzpzc');
		}

		if (cw.gk)
		{
			this.bz('uvqyt');

			this.qf(
				new tw('qk', {xj:'whtao'}), 'sq'
			);
		}
	}

	re()
	{
		return this;
	}

	mz(rs)
	{
		this.qf(rs, 'aw');
	}

	rf(cw)
	{
		const dg = cw.vt;

		const qr = dg.replace(
			fw[6], mh.ox('s%s-', cw.rx ? 48 : 80)
		);

		this.qf(new ft({
			is:qr,
			nd:dg,
		}), 'vu');
	}

	kq(cw)
	{
		const oa = new nx({
			xj:'qpaek',
			gm: {
				dir:cw.dx,
				lang:cw.pz
			}
		});

		const iu = Object.keys(cw.qs);

		if (iu.length)
		{
			const fo = mh.ya(cw.ol, iu);

			for (let x of fo)
			{
				if (mh.pi(x))
				{
					const a = this.mn(cw.qs[x]);

					oa.qf(a);
				}
				else {
					const s = fr.mq(x);

					oa.appendChild(s);
				}
			}
		}
		else {
			oa.textContent = cw.ol;
		}

		if (cw.rx && !cw.gk)
		{
			oa.bz('gzlnl');

			oa.addEventListener('click',
				e => oa.br('gzlnl')
			);
		}

		this.qf(oa, 'aw');
	}

	mn(x)
	{
		let a;

		if (x.hz == 'be' && x.yo != fu.yo)
		{
			x.hz = 'nj';
		}

		switch (x.hz)
		{
			case 'be':
				a = new mv(x.wx, x.cq);
				a.qw(this, 'dz', 'kf');
				return a;

			case 'nj':
				a = new ej(x.wx, x.yo, x.cq);
				a.qw(this, 'gy', 'kf');
				return a;

			case 'lz':
				return new au({
					wx:x.wx,
					db:x.rn
				});
		}
	}
}

class ej extends au
{
	constructor(wx, yo, cq)
	{
		super({
			xj:'orfcp',
			wx:wx
		});

		this.yo = yo;
		this.cq = cq;
	}

	get ia()
	{
		return this.ok('re');
	}
}

class mv extends au
{
	constructor(wx, cq)
	{
		super({
			xj:'orfcp',
			wx:wx
		});

		this.cq = cq;
	}
}

let zs;
let md;
let bw;
let zh;
let rh;
let em;
let zr;
let bn;
let tb;
let om;
let fr;

if (fu.wp)
{
	zs = new xi;
	md = new lr;
	bw = new jq;
	zh = new yb;
	rh = new bu;
	em = new pf;
	om = new gc;

	rh.hu().then(async ah =>
	{
		if (ah.hn.bc)
		{
			await zs.rk();
		}

		fr = new vd(ah.qa);

		bn = new km(ah.hn);

		tb = new ei;

		rh.fd();

		zs.tg();
	});

	bw.fg && om.tx();
}

const fw = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];