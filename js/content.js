/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const tz = {};

for (let al of 'object array string regex date math type std'.split(' '))
{
	tz[al] = {};
}

tz.ug = function(xm, nc)
{
	return xm != undefined && xm.constructor === nc;
}

tz.dt = function()
{
	return tz.dl(9);
}

tz.ue = function(oc)
{
	return yt[0].test(oc);
}

tz.oq = function(up)
{
	return Object.keys(up).length == 0;
}

tz.ir = function(wn, up)
{
	for (let ob in up)
	{
		const to = up[ob];

		if (ob == wn) return to;
		if (to == wn) return ob;
	}
}

tz.xy = function(up, mp)
{
	let oc = '';

	for (let ob in up)
	{
		oc += ob + '=' + up[ob] + mp;
	}

	return oc.slice(0, -1);
}

tz.xh = function(iw, eo, jt)
{
	const vm = eo + 1;

	return jt.slice(vm, vm + iw);
}

tz.ap = function(jt)
{
	return jt[jt.length - 1];
}

tz.xk = function(rx, vb)
{
	rx += '?';

	for (let ob in vb)
	{
		rx += ob + '=' + encodeURIComponent(vb[ob]) + '&';
	}

	return rx.slice(0, -1);
}

tz.xi = function(oc, uz)
{
	if (tz.ug(uz, Array))
	{
		let i = 0;

		return oc.replace(yt[1], _ => uz[i++]);
	}

	return oc.replace('%s', uz);
}

tz.gr = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

tz.zw = function(oc, ve)
{
	const nu = tz.xi('(%s)', ve.join('|'));

	return oc.split(new RegExp(nu)).filter(s => s !== '');
}

tz.dq = function(oc)
{
	return oc.toUpperCase();
}

tz.lp = function(oc)
{
	return oc.toLowerCase();
}

tz.et = function(oc, kp)
{
	if (!kp)
	{
		oc = oc.toLowerCase();
	}

	return oc[0].toUpperCase() + oc.slice(1);
}

tz.ky = function(zx, oc)
{
	return oc.match(zx) || [];
}

tz.ha = function(zx, oc)
{
	if (zx.global) return '';

	const m = tz.ky(zx, oc);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

tz.la = function()
{
	return Math.floor(Date.now() / 1000);
}

tz.pz = function(tm)
{
	return tm < tz.la();
}

tz.ys = function(q)
{
	const qv = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = tz.ha(yt[2], q);

	return Date.now() + (x[0] * qv[x[1]] * 1000);
}

tz.mb = function(ta)
{
	let x = ta.split(':'),
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

tz.nr = function(ld)
{
	let jt = [];

	jt.push(ld / 3600);

	ld %= 3600;

	jt.push(ld / 60);

	jt.push(ld % 60);

	jt = jt.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return jt.join(':').replace(yt[3], '');
}

tz.dl = function(jo)
{
	return Math.random().toString().slice(2, jo + 2);
}

tz.uw = function(zf, cf)
{
	const ek = Math.random() * (cf - zf) + zf;

	return Math.floor(ek);
}

tz.ux = function(x, a, b)
{
	return x >= a && x <= b;
}

tz.pi = function(a, b)
{
	return 100 * (a / b);
}

tz.be = function()
{
	let pv, me = 0;

	try {
		pv = [oa, wy, ak];
	}
	catch (e) {
		pv = [dn, ak];
	}

	pv.forEach(
		yg => me += yg.toString().length
	);

	return me != 2035;
}

class ka
{
	constructor(ew, ey)
	{
		this.ew = ew;
		this.ey = ey;
	}
}

class pt
{
	constructor(ly, ew, ey)
	{
		this.ly = ly;
		this.pw = new ka(ew, ey);
	}
}

class yc extends Array
{
	constructor(de)
	{
		super();

		if (de != null)
		{
			super.push(de);
		}
	}

	push(or)
	{
		return !this.includes(or) && super.push(or);
	}
}

class rh
{
	constructor(tl, ad)
	{
		const yg = tl.status;

		this.yg = yg;
		this.dx = false;
		this.jy = false;
		this.mu = null;
		this.ey = null;

		switch (ad)
		{
			case 'error':
				return this.sp('qh');

			case 'timeout':
				return this.sp('vk');

			default:
			{
				this.dx = (yg == 200);

				if (yg >= 500)
				{
					return this.sp('gh');
				}

				try {
					this.ey = JSON.parse(tl.responseText);
				}
				catch (e) {
					this.ey = tl.responseText;
				}
			}
		}
	}

	vh(jg)
	{
		this.mu = jg;
	}

	sp(jg)
	{
		this.vh(jg);

		this.jy = true;
	}
}

class zr
{
	constructor(ey, kw)
	{
		Object.assign(this, ey);

		Object.defineProperty(this, 'kw', {
			value: kw
		});
	}

	set(ob, to)
	{
		this[ob] = to;

		this.mr();
	}

	mr()
	{
		return ki.set(this.kw, this);
	}
}

class ak extends zr
{
	constructor(ey, kw)
	{
		super(ey, kw);
	}

	get pg()
	{
		return Boolean(this.ox)
	}

	get ox()
	{
		return this[0];
	}

	get yq()
	{
		return this[1];
	}

	get ck()
	{
		return tz.pz(this.yq);
	}

	get bm()
	{
		const rl = this.yq.toString().split('').pop();

		return Boolean(+rl);
	}

	set ox(ob)
	{
		this.set(0, ob);
	}

	set yq(eb)
	{
		this.set(1, eb);
	}

	get gs()
	{
		let s = this.yq.toString(),
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
	constructor(vj)
	{
		if (vj)
		{
			this.po();
		}
	}

	xv(wi, bh, ow)
	{
	}

	po()
	{
		chrome.runtime.onMessage.addListener(
			this.xv.bind(this)
		);
	}
}

class wm extends ab
{
	constructor()
	{
		super(false);
	}

	xv(wi, bh, ow)
	{
		const ey = wi.ey;

		switch (wi.ew)
		{
			case 'jp':
				return this.yu(ey);
		}
	}

	yu(jp)
	{
		if (jp == 'qt')
		{
			rk.vm();
		}
	}

	xl()
	{
		return this.ph('xl');
	}

	qr(fd)
	{
		return this.ph('qr', fd);
	}

	xs(ox)
	{
		return this.ph('xs', ox);
	}

	jf(vp)
	{
		return this.ph('jf', vp);
	}

	te()
	{
		return this.ph('te');
	}

	ph(ew, ey)
	{
		const wi = new ka(ew, ey);

		return new Promise(ow =>
		{
			try {
				chrome.runtime.sendMessage(wi, ow);
			}
			catch (e) {
			}
		});
	}
}

class he extends ab
{
	constructor()
	{
		super(true);
	}

	xv(wi, bh, ow)
	{
		const xf = function(...uz)
		{
			try {
				ow(...uz);
			}
			catch (e) {
			}
		};

		dc.tb.then(_ =>
		{
			const ey = wi.ey;

			switch (wi.ew)
			{
				case 'xl':
					dc.xl().then(xf);
				break;

				case 'qr':
					dc.qr(ey).then(xf);
				break;

				case 'xs':
					dc.xs(ey).then(xf);
				break;

				case 'jf':
					au.jc.jf(ey).then(xf);
				break;

				case 'te':
					dc.iu();
				break;
			}
		});

		return true;
	}
}

class ao
{
	get(ob)
	{
		return new Promise(pe =>
		{
			try {
				chrome.storage.local.get(ob, np =>
					pe(typeof ob == 'string' ? np[ob] : np)
				);
			}
			catch (e) {
			}
		});
	}

	set(ob, to)
	{
		let ey;

		if (typeof ob == 'object')
		{
			ey = ob;
		}
		else {
			ey = {[ob]:to};
		}

		return new Promise(cv =>
		{
			try {
				chrome.storage.local.set(ey, cv);
			}
			catch (e) {
			}
		});
	}

	db()
	{
		return new Promise(cv =>
		{
			try {
				chrome.storage.local.clear(cv);
			}
			catch (e) {
			}
		});
	}
}

class vqncd
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			pt => this.xa(pt)
		);

		Port.onDisconnect.addListener(
			_ => this.pq()
		);

		this.Port = Port;

		this.en = {
		};

		this.ks = false;
	}

	xv(m)
	{
	}

	ev(ly, ew, ey)
	{
		const jx = new pt(ly, ew, ey);

		if (!this.ks)
		{
			this.Port.postMessage(jx);
		}
	}

	xa(x)
	{
		this.oz(x.ly).xv(x.pw);
	}

	oz(ly)
	{
		return this.en[ly] || this;
	}

	tn(ly, xv, pq)
	{
		return this.en[ly] = new qd(this, ly, xv, pq);
	}

	pq()
	{
		this.ks = true;

		for (let ly in this.en)
		{
			this.oz(ly).pq();
		}
	}
}

class cr extends vqncd
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	xv(wi)
	{
		const ey = wi.ey;

		switch (wi.ew)
		{
			case 'ou':
				return dy.qm(ey);
		}
	}

	tn(ly, xv, pq)
	{
		this.ev(null, 'tn', ly);

		return super.tn(ly, xv, pq);
	}

	pq()
	{
		super.pq();

		rk.ql();
	}
}

class si extends vqncd
{
	constructor(zg)
	{
		super(zg);
	}

	xv(wi)
	{
		switch (wi.ew)
		{
			case 'tn':
				return this.tn(wi.ey);
		}
	}

	tn(ly)
	{
		const yk = super.tn(ly);

		switch (ly)
		{
			case 'oi':
				return new dv(yk);
		}
	}
}

class lo
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			tp => this.dm(tp)
		);

		this.ia = [];
	}

	dm(zg)
	{
		this.ia.push(
			new si(zg)
		);
	}

	uk(su)
	{
		for (let zg of this.ia)
		{
			zg.ev(null, 'ou', su);
		}
	}
}

class qd
{
	constructor(zg, ly, xv, pq)
	{
		this.zg = zg;

		this.ly = ly;

		if (xv)
		{
			this.xv = xv;
		}

		if (pq)
		{
			this.pq = pq;
		}
	}

	ev(ew, ey)
	{
		this.zg.ev(this.ly, ew, ey);
	}

	xv(m)
	{
	}

	pq()
	{
	}
}
class ud
{
	zb(ri)
	{
		this.ri = ri;
	}

	df(cz, bh)
	{
		if (cz in this && this != bh)
		{
			return this[cz](bh);
		}

		if (this.ul)
		{
			return this.ul.df(cz, bh);
		}
	}

	get ul()
	{
		return this.ri || this.bp;
	}
}

const gt = function(rn, fa)
{
	return new fa(rn);
}

class xo extends ud
{
	constructor(py)
	{
		super();

		this.pc = py;

		this.dj('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	yf(ej)
	{
		if (typeof ej == 'string')
		{
			ej = [ej];
		}

		this.pc.classList.add(...ej);
	}

	sj(ej)
	{
		this.pc.classList.remove(ej);
	}

	nm(ej)
	{
		this.pc.classList.contains(ej) ? this.sj(ej)
												: this.yf(ej);
	}

	ci()
	{
		this.pc.remove();
	}

	dj(...fn)
	{
		for (let x of fn) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.pc[x] instanceof Function)
			{
				this[x] = this.pc[x].bind(this.pc);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.pc[x];
					},
					set(v) {
						this.pc[x] = v;
					}
				});
			}
		}
	}
}

class hx extends xo
{
	constructor(kl, wv)
	{
		super(
			typeof kl == 'string' ? sn.sb(kl) : kl
		);

		this.bp = null;
		this.pb = [];
		this.ym = {};
		this.ty = {};

		if (wv)
		{
			if (wv.wt)
			{
				this.yf(wv.wt);
			}

			if (wv.gy)
			{
				this.textContent = wv.gy;
			}

			if (wv.fm)
			{
				this.uj(...wv.fm);
			}

			if (wv.sg)
			{
				for (let hb in wv.sg)
				{
					this.setAttribute(hb, wv.sg[hb]);
				}
			}

			if (wv.import)
			{
				for (let ub of wv.import)
				{
					this.dj(ub);
				}
			}
		}
	}

	ex(vt, ra)
	{
		if (vt.bp)
		{
			if (vt.bp == this)
				return;

			vt.yz();
		}

		vt.bp = this;
		this.pb.push(vt);

		switch (typeof ra)
		{
			case 'string':
				return this.zc(ra).appendChild(vt.pc);

			case 'number':
				return this.pc.prepend(vt.pc);

			default:
				return this.appendChild(vt.pc);
		}
	}

	zc(aq)
	{
		return this.querySelector('#' + aq);
	}

	fz(fm, cz, pn)
	{
		this.fm = {};

		this.uj(fm, cz, pn);
	}

	uj(fm, cz, pn)
	{
		if (typeof pn == 'string')
		{
			pn = [pn];
		}

		for (let fx of pn)
		{
			if (!this.ty[fx])
			{
				this.ty[fx] = new Map;

				this.addEventListener(
					tz.ir(fx, hx.vn), e => this.cu(e)
				);
			}

			this.ty[fx].set(fm, cz)
		}
	}

	fp(fx)
	{
		const ty = this.ty[fx];

		if (ty)
		{
			for (let [fm, cz] of ty)
			{
				fm.df(cz, this);
			}
		}
	}

	ix()
	{
		this.hidden = true;
	}

	qo()
	{
		this.hidden = false;
	}

	db()
	{
		let i = this.pb.length;

		while (i--)
		{
			this.pb[i].yz();
		}
	}

	yz()
	{
		this.bp.hu(this);
	}

	cg(vt)
	{
		this.appendChild(vt.pc);
	}

	hu(vt)
	{
		vt.bp = null;

		this.pb.splice(
			this.pb.indexOf(vt), 1
		);

		vt.pc.remove();
	}

	cu(e)
	{
		e.stopPropagation();

		this[tz.ir(e.type, hx.vn)](e);
	}

	gp()
	{
		this.fp('gp');
	}
}

hx.vn = {
	gp:'click',
	kt:'paste',
	ei:'keyup',
	yw:'keyup',
	er:'focus',
};

class xg extends hx
{
	constructor(wv)
	{
		super('xg', wv);
	}
}

class jk extends hx
{
	constructor()
	{
		super('jk');

		this.dj('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			zo.ac(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class di extends jk
{
	constructor(nf)
	{
		super();

		this.nf = nf;

		this.aj;

		this.addEventListener('scroll',
			_ => this.ib()
		);
	}

	km()
	{
	}

	lz()
	{
		this.db();
		this.es();
		this.eu();

		this.hr();
	}

	ib()
	{
		if (this.zs && this.wd)
		{
			this.eu();
		}
	}

	es()
	{
		this.aj = this.km(this.nf.mg);
	}

	eu()
	{
		for (let vt of this.aj)
		{
			this.ex(vt);
		}

		this.es();
	}

	hr()
	{
		this.sj('xcwzx');

		if (this.wq)
		{
			this.yf('xcwzx');
		}
	}

	get wq()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get zs()
	{
		return this.aj.length;
	}

	get wd()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class so extends hx
{
	constructor(xd, qz)
	{
		super('so');

		this.dj('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.fs = xd;

		this.lj(xd, qz);

		this.ji();
		this.da();
	}

	gn(mh)
	{
		for (let k in mh)
		{
			this.style[k] = mh[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	lj(xd, qz)
	{
		const x = window.innerHeight - qz;
		const y = window.innerWidth - xd - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = xd + 'px';
	}

	ji()
	{
		let kx = this.querySelectorAll('[resize]');

		for (let vl of kx)
		{
			vl.addEventListener('pointerdown',
				e => this.jr(e, 'uy')
			);
		}
	}

	da()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.jr(e, 'qx')
		);
	}

	jr(e, cz)
	{
		if (e.which == 1)
			this[cz](e);
	}

	am()
	{
		return this.getBoundingClientRect();
	}

	uy(e)
	{
		const wp = e.target.getAttribute('resize'),
				sz = wp.includes('w'),
				mk = wp.includes('n'),
				hs = wp.includes('e');

		const qc = this.am(),
				fs = this.fs,
				xc = 56,
				nh = lg.xq,
				jb = window.innerHeight - xc,
				yi = e.clientX,
				uv = e.clientY,
				pj = qc.x,
				bc = qc.y,
				va = qc.width;

		let ze = 0,
				jd = 0,
				pm = pj,
				og = bc,
				iv = va;

		let tf = (e) =>
		{
			ze = e.clientX - yi;
			jd = e.clientY - uv;

			if (mk)
			{
				og = bc + jd;

				(og < 0) && (og = 0);

				(og > jb) && (og = jb);

				this.style.top = og + 'px';
			}

			if (hs)
			{
				iv = va + ze;

				(e.clientX > nh) && (iv = nh - pj);

				(iv < fs) && (iv = fs);

				this.style.width = iv + 'px';
			}

			if (sz)
			{
				pm = pj + ze;
				iv = va - ze;

				if (pm < 0)
				{
					pm = 0;
					iv = va + pj;
				}

				if (iv < fs)
				{
					pm = pj + (va - fs);
					iv = fs;
				}

				this.style.width = iv + 'px';
				this.style.left = pm + 'px';
			}
		};

		let uf = () => {
			(ze != 0 || jd != 0) && this.ca();
		};

		this.uc(tf, uf);
	}

	qx(e)
	{
		let pj = this.offsetLeft,
			yi = e.clientX,
			ze = 0;

		let tf = (e) => {
			ze = e.clientX - yi;
			this.style.left = pj + ze + 'px';
		};

		let uf = () => {
			(ze != 0) && this.ca();
		};

		this.uc(tf, uf);
	}

	uc(tf, uf)
	{
		zo.eq(true);

		document.onpointermove = (e) => tf(e);

		document.onpointerup = (e) => {
			zo.eq(false);
			uf();
			document.onpointerup = document.onpointermove = null;
		};
	}

	ca()
	{
		if (this.hidden) return;

		let qc = this.am();

		let mh = {
			width: tz.pi(qc.width, window.innerWidth),
			left: tz.pi(qc.x, window.innerWidth),
			top: tz.pi(qc.y, window.innerHeight),
		};

		this.gn(mh);

		if ('jv' in this.ym)
		{
			this.ym.jv(mh);
		}
	}
}

class st extends so
{
	constructor(xd, qz)
	{
		super(xd, qz);

		this.addEventListener('wheel', zo.ac);
	}
}

class qu extends hx
{
	constructor(wv)
	{
		super('qu', wv);

		this.dj('src');

		if (wv.nq)
		{
			this.addEventListener('error', e => this.src = wv.nq, {once:true});
		}

		this.src = wv.ws;
	}
}

class od extends hx
{
	constructor(kl, wv)
	{
		super(kl, wv);

		this.cx = [];
		this.jh = false;
	}

	ei(e)
	{
		if (e.key == 'Enter')
		{
			this.fp('yw');
		}

		this.fp('ei');
	}

	kt(e)
	{
		setTimeout(
			_ => this.fp('kt'),
		10);
	}

	er(e)
	{
		this.fp('er');
	}

	get oe()
	{
		if (!this.jh)
		{
			const qg = Date.now();

			const jo = this.cx.push(qg);

			if (jo > 3)
			{
				if (qg - this.cx[0] < 2000)
				{
					this.jh = true;

					setTimeout(
						_ => this.jh = false,
					20 * 1000);
				}
				else {
					this.cx.length = 0;
				}
			}
		}

		return this.jh;
	}
}

class ln extends od
{
	constructor(wv)
	{
		super('ln', wv);

		this.dj('placeholder', 'focus', 'select');

		if (wv && wv.placeholder)
		{
			this.placeholder = wv.placeholder;
		}
	}

	get value()
	{
		return this.pc.value.trim();
	}

	set value(s)
	{
		this.pc.value = String(s).trim();
	}
}

class fl extends od
{
	constructor(wv)
	{
		super('fl', wv);

		this.lj();
	}

	lj()
	{
		this.ro = new ln();

		this.ex(this.ro, 'sm');

		this.at = new yn();

		this.ex(this.at, 'sm');

		this.ga = this.zc('ga');
	}

	focus()
	{
		this.ro.focus();
	}

	get value()
	{
		return this.ro.value;
	}

	ng(re, gy)
	{
		this.at.tg(re);

		this.ga.textContent = gy || '';
	}
}

class qs extends hx
{
	constructor(kl, wv)
	{
		super(kl, wv);

		this.tg(wv.re || 'initial');
	}

	get vf()
	{
		return this.re == 'disabled';
	}

	get bk()
	{
		return this.re == 'selected';
	}

	tg(re)
	{
		this.re = re;

		this.setAttribute('state', re);
	}

	cu(e)
	{
		if (!this.vf)
		{
			super.cu(e);
		}
	}
}

class zi extends qs
{
	constructor(wv)
	{
		super('zi', wv);

		this.value = wv.value;

		if (wv.oh)
		{
			this.yj(wv.oh);
		}

		if (wv.wo)
		{
			this.bx(wv.wo);
		}
	}

	yj(gy)
	{
		this.textContent = gy;
	}

	bx(kl)
	{
		const wo = sn.sb(kl);

		this.appendChild(wo);
	}
}

class pr extends zi
{
	constructor(wv)
	{
		super(wv);

		this.value = wv.value;
	}

	gp()
	{
		if (this.bk)
		{
			this.tg('initial');
		}
		else {
			this.tg('selected');
		}

		super.gp();
	}
}

class jm extends hx
{
	constructor(wv)
	{
		super('jm', wv);

		if (wv.za)
		{
			this.setAttribute('href', wv.za);
		}
	}
}

class yn extends hx
{
	constructor(wv)
	{
		super('yn', wv);
	}

	tg(re)
	{
		this.setAttribute('state', re);
	}
}

class pa extends ud
{
	constructor(vt, lw)
	{
		super();

		this.vt;

		this.ag;

		this.children = [];

		this.jn(vt, lw);
	}

	jn(vt, lw)
	{
		vt.zb(this);

		if (lw)
		{
			vt.ym = new gt(this, lw);
		}

		this.vt = vt;

		this.we();
	}

	tq(ms, nz)
	{
		this.ag = new ms;

		if (nz)
		{
			this.ag.ym = new gt(this, nz);
		}

		this.wl();
	}

	wl()
	{
	}

	we()
	{
	}

	bt(bh)
	{
		if (this.dp)
		{
			this.dp.bt(bh);
		}

	}

	tu(bh)
	{
		if (this.dp)
		{
			this.dp.tu(bh);
		}

	}

	ui(bh)
	{
		if (this.dp)
		{
			this.dp.ui(bh);
		}

	}

	tr(bh)
	{
		if (this.dp)
		{
			this.dp.tr(bh);
		}

	}

	gi(aq)
	{
	}

	qo(rm, bh)
	{
		this.vt.appendChild(rm.vt.pc);
	}

	bj(rm)
	{
		this.cl.xu(rm);
	}

	bz()
	{
		this.cl.pu();
	}

	xu(ij, ft)
	{
		ij.zb(this);

		ij.bt();

		this.children.push(ij);

		this.vt.ex(ij.vt, ft);

		ij.tu();
	}

	pu()
	{
		this.children.pop().fr();
	}

	get cl()
	{
		let rf = this;

		while (rf.ri)
		{
			rf = rf.ri;
		}

		return rf;
	}

	get gw()
	{
		return this.children.length;
	}

	get dp()
	{
		return tz.ap(this.children);
	}

	fr()
	{
		this.vt.ci();

		for (let ij of this.children)
		{
			ij.fr();
		}
	}
}

class kg extends pa
{
	constructor()
	{
		const vt = new hx('yd');

		super(vt);
	}

	we()
	{
		this.js = new zi({
			wt:['svlwc', 'euacl'],
			wo:'no',
			re:'hidden',
			fm:[this, 'hy', 'gp']
		});

		this.vt.ex(this.js);
	}

	hy()
	{
		this.pu();

		this.xz();
	}

	bs()
	{
		this.js.tg('hidden');
	}

	xu(ij)
	{
		super.xu(ij, 'lb');

		this.xz();
	}

	xz()
	{
		if (this.gw > 1)
		{
			this.js.tg('initial');
		}
		else {
			this.js.tg('hidden');
		}
	}




}

tz.wb = function(ce, gb)
{
	ce.currentTime = gb;

	if (ce.paused)
	{
		ce.play();
	}
}

function openWindow(rx)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = tz.xy(q, ',');

	return window.open(rx, '', q);
}

class av
{
	constructor(q)
	{
		Object.assign(this, {
			bi: q,
			ig: nk.ig,
			xt: nk.ce.duration,
			ah:nk.ce.currentTime
		});
	}
}

class by
{
	constructor()
	{
		this.qw = navigator.platform.includes('Mac');
	}

	get xq()
	{
		return !this.qw ? document.body.clientWidth : window.innerWidth;
	}
}

const nk = {
	get zt()
	{
		return ['www', 'music'].includes(this.kq);
	},

	get nx()
	{
		return location.pathname == '/watch';
	},

	get ce()
	{
		if (!this.se)
		{
			this.se = zo.querySelector('video');
		}

		return this.se || document.createElement('video');
	},

	get ig()
	{
		return tz.ha(yt[4], location.href);
	},

	get kq()
	{
		return location.host.split('.')[0];
	}
}

class wx
{
	constructor(qj)
	{
		this.fy = document.createElement('div');

		this.qi = {};

		for (let hn of this.bo(qj).children)
		{
			const mz = hn.getAttribute('protoid');

			if (mz) {
				hn.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.qi[mz] = hn.outerHTML;
		}
	}

	sb(kl, cy)
	{
		let xw = this.qi[kl];

		if (cy)
		{
			xw = xw.replace(yt[5], (_, ob) => cy[ob]);
		}

		return this.bo(xw);
	}

	ua(gy)
	{
		const s = document.createElement('span');

		s.textContent = gy;

		return s;
	}

	bo(xw)
	{
		this.fy.innerHTML = xw;

		return this.fy.children[0];
	}
}

class xj extends xo
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.lx = 'fullscreenchange';
			this.kr = 'fullscreenElement';
		}
		else {
			this.lx = 'webkitfullscreenchange';
			this.kr = 'webkitFullscreenElement';
		}

		this.hj();

		document.addEventListener(
			this.lx, _ => this.hj()
		);
	}

	get rc()
	{
		return Boolean(document[this.kr]);
	}

	mf()
	{
		this.yf('gtvmu');
	}

	eq(sc)
	{
		sc ? this.yf('gfriv')
			: this.sj('gfriv');
	}

	ac(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	hj()
	{
		this.setAttribute('cs-fullscreen', this.rc);
	}
}

class dn
{
	constructor()
	{
		this.ge = {
			xr: '/html/svg/1.svg',
			ch: '/html/svg/2.svg',
		}
	}

	nj()
	{
		tz.be() && zd.te();
	}

	async fw()
	{
		zk = await ki.get('1');

		zk = new ak(zk);
	}

	hl(aq)
	{
		return chrome.runtime.getURL(this.ge[aq]);
	}
}

class oa extends pa
{
	constructor(re)
	{
		const vt = new st(460, 480);

		super(vt, lk);

		this.tq(iy);

		dy.um(this, [
			'cq', 'mv', 'cj', 'ht'
		]);

		this.vd = false;

		switch (true)
		{
			case (re.yx):
				return this.xu(new ar);

			case (re.nl):
				return this.xu(new tw);

			default:
				this.mi();
		}
	}

	we()
	{
		this.vt.ex(new zi({
			wt:['svlwc', 'yszro'],
			wo:'kz',
			fm:[this, 'gk', 'gp']
		}));

		document.body.appendChild(this.vt.pc);
	}

	wl()
	{
		this.ag.am.then(
			mh => mh && this.vt.gn(mh)
		);
	}

	gi(aq)
	{
		switch (aq)
		{
			case 'cq':
				return this.vm('ns');

			case 'mv':
				return this.vm('dr');

			case 'cj':
				return this.gk();

			case 'ht':
				return this.fh();
		}
	}

	mi()
	{
		this.xu(new kb);
	}

	fh()
	{
		this.pu();

		this.mi();
	}

	vm(bh)
	{
		this.dp.bt(bh);

		this.vt.qo();

		this.dp.tu(bh);

		this.vd = true;
	}

	gk(bh)
	{
		this.dp.ui(bh);

		this.vt.ix();
	}

	ql()
	{
		this.xu(new gc);
	}
}

class iy
{
	get am()
	{
		return ki.get('appPosition');
	}

	vz(wt)
	{
		(wt.width > 100) && (wt.width = 100);

		(wt.left < 0) && (wt.left = 0);

		if (wt.left + wt.width > 100)
		{
			wt.left = 100 - wt.width;
		}

		ki.set('appPosition', wt);
	}
}

const lk = function(rn)
{
	return {
		jv(mh)
		{
			rn.ag.vz(mh);
		}
	}
}

class fi
{
	static wk(ob)
	{
		return ob == 'Enter';
	}

	static vi(ob)
	{
		return ['Control','Meta'].includes(ob);
	}
}

class nd
{
	constructor()
	{
		window.addEventListener('keydown', e => this.el(e), true);
	}

	el(e)
	{
		this.zv(e);

		const yg = this.yg;

		if (this.px)
		{
			if (yg == 'KeyS')
			{
				e.preventDefault();

				return dy.qm('cq');
			}

			if (yg == 'KeyE' && nk.nx)
			{
				e.preventDefault();

				return dy.qm('mv');
			}

			if (yg == 'KeyX' && zo.rc)
			{
				return dy.qm('cj');
			}
		}

		if (yg == 'Escape')
		{
			return dy.qm('cj');
		}
	}

	zv(e)
	{
		this.yg = e.code;

		this.px = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get ko()
	{
		return this.yg == 'KeyV';
	}
}

class gj
{
	constructor()
	{
		this.fk = {};
	}

	qm(su)
	{
		let ye = this.ae(su);

		for (let vr of ye)
		{
			vr.gi(su);
		}
	}

	um(vr, dy)
	{
		if (typeof dy == 'string')
		{
			dy = [dy];
		}

		for (let aq of dy)
		{
			this.ae(aq).push(vr);
		}
	}

	ae(su)
	{
		return this.fk[su] || (this.fk[su] = new yc);
	}
}

class zj extends pa
{
	constructor()
	{
		const vt = new hx('un');

		super(vt);
	}

	ts()
	{
		zd.op();

		this.bz();
	}
}

class ar extends pa
{
	constructor()
	{
		super(
			new hx('fu')
		);
	}

	we()
	{
		this.vt.ex(
			new qu({
				ws:dc.hl('xr')
			}), 'wc'
		);

		const hz = new zi({
			wt:'dwalc',
			oh:'Update Now',
			fm:[this, 'ik', 'gp']
		});

		this.vt.ex(hz, 'rs');
	}

	ik()
	{
		window.open('https://cs.lett.app/update');
	}
}

class tx extends pa
{
	constructor()
	{
		const vt = new hx('eg');

		super(vt);
	}

	we()
	{
		this.vt.ex(new zi({
			wt:['euacl', 'svlwc'],
			wo:'no',
			fm:[this, 'bz', 'gp']
		}));
	}
}

class gc extends pa
{
	constructor()
	{
		const vt = new hx('mt');

		super(vt);
	}
}

class tw extends pa
{
	constructor()
	{
		const vt = new hx('hx');

		super(vt);

		this.ez();

		dy.um(this, [
			'nv', 'fq'
		]);
	}

	async gi(aq)
	{
		await dc.fw();

		switch (aq)
		{
			case 'nv':
				return this.ez();

			case 'fq':
				return this.hd();
		}
	}

	ez()
	{
		if (!zk.ox)
		{
			return this.xu(new ya);
		}

		if (!zk.bm)
		{
			return this.xu(new pf);
		}

		this.ur();
	}

	mx()
	{
		this.ur();
	}

	hd()
	{
		!rk.vd && this.ur();
	}

	ur()
	{
		dy.qm('ht');
	}
}

class ya extends pa
{
	constructor()
	{
		const vt = new hx('oy');

		super(vt);
	}

	we()
	{
		this.uo = new fl({
			fm:[this, 'xs', ['kt', 'yw']]
		});

		this.vt.ex(this.uo, 'ma');

		this.vt.ex(
			new qu({
				ws:dc.hl('xr')
			}), 'wc'
		);

		this.vt.ex(
			new jm({gy:'Need help?', za:'https://cs.lett.app/generating-youtube-api-key'}), 'tk'
		);
	}

	tu()
	{
		this.uo.focus();
	}

	xs(bh)
	{
		bh.ng('loading');

		if (!this.it)
		{
			this.it = true;

			zd.xs(bh.value).then(dx =>
			{
				!dx && bh.ng('error', 'try again');

				this.it = false;
			});
		}
	}
}

class pf extends kg
{
	constructor()
	{
		super();

		this.xu(new wy);
	}

	hm()
	{
		this.xu(new oj);
	}
}

class wy extends pa
{
	constructor()
	{
		const vt = new hx('yb');

		super(vt);
	}

	we()
	{
		const ku = [];

		ku.push(
			new zi({
				wt:'dwalc',
				oh:'support it',
				fm:[this, 'hm', 'gp']
			})
		);

		ku.push(
			new zi({
				wt:'dwalc',
				oh:'try it',
				fm:[this, 'mx', 'gp']
			})
		);

		zk.ck && ku.pop();

		for (let du of ku)
		{
			this.vt.ex(du, 'rs');
		}
	}
}

class oj extends pa
{
	constructor()
	{
		const vt = new hx('qk');

		super(vt);

		this.fj;

		this.hf;
		this.qe;

		dy.um(this, ['fq']);
	}

	gi(aq)
	{
		switch (aq)
		{
			case 'fq':
				return this.hd();
		}
	}

	we()
	{
		this.at = new yn({
			wt:'xqhmg'
		});

		this.vt.ex(this.at);

		this.jz = new yv();

		const tv = new xg({wt:'eltvf'});

		for (let vp of [10,15,50])
		{
			const rq = new zi({
				wt:'vpmhw',
				gy:vp,
				value:vp,
				fm:[this, 'ct', 'gp']
			});

			if (vp == 15)
			{
				this.ct(rq);
			}

			tv.ex(rq);
		}

		this.jz.lt(tv);

		this.vt.ex(this.jz, 'jz');

		this.im = new yv();

		this.im.vg(
			new xg({
				gy:'US Dollars - One Time Payment'
			})
		);

		this.vt.ex(this.im, 'im');

		this.sa = new zi({
			wt:['dwalc', 'usyob'],
			oh:'Pay with PayPal',
		});

		setTimeout(
			_ => this.sa.uj(this, 'pd', 'gp')
		, 500);

		this.vt.ex(this.sa, 'rs');
	}

	ui()
	{
		this.rd();
	}

	ct(bh)
	{
		const hi = this.fj;
		const na = bh;

		if (na != hi)
		{
			if (hi)
				hi.tg('initial');

			na.tg('selected');

			this.fj = na;
		}
	}

	pd()
	{
		if (this.zy)
			return;

		this.zy = true;

		this.at.tg('loading');

		zd.jf(this.fj.value).then(rx =>
		{
			if (rx) {
				this.pl(rx);

				this.at.tg('waiting');
			}
			else {
				this.at.tg('error');
			}

			this.zy = false;
		});
	}

	pl(rx)
	{
		this.rd();

		this.hf = openWindow(rx);

		this.qe = setInterval(
			_ => this.hf.closed && this.rd(),
		500);
	}

	rd()
	{
		if (this.hf)
		{
			this.hf.close();

			this.at.tg('initial');

			clearInterval(this.qe);
		}
	}

	hd()
	{
		this.rd();

		setTimeout(_ => {
			this.df('bs', this);
			this.lm();
		}, 900);
	}

	lm()
	{
		this.jz.lt(
			new xg({wt:'rultj',gy:'Thank You!'}), true
		);

		this.im.vg(
			new xg({gy:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.sa.yf('bsbte');
			this.sa.textContent = 'Done';
			this.sa.fz(this, 'ur', 'gp');
		}, 200);
	}

	ur()
	{
		this.df('ur', this);
	}

	fr()
	{
		super.fr();

		this.rd();
	}
}

class yv extends xg
{
	constructor()
	{
		super();

		this.lj();
	}

	lj()
	{
		this.lq = new xg({
			wt:'rnxhc'
		});

		this.ex(this.lq);
	}

	lt(or, th)
	{
		this.pk(or, 0, th);
	}

	vg(or, th)
	{
		this.pk(or, null, th);
	}

	pk(or, id, th)
	{
		this.lq.ex(or, id);

		if (th)
		{
			this.th(id != null);
		}
	}

	th(nb)
	{
		let kh, wf = this.lq;

		if (nb)
		{
			wf.style.transform = 'translateY(-100%)';

			kh = 'translateY(0)';
		}
		else {
			kh = 'translateY(-100%)';
		}

		setTimeout(_ => {
			wf.style.transition = 'transform 300ms';

			setTimeout(
				_ => wf.style.transform = kh,
			10);

			setTimeout(_ => {
				wf.style.transition = null;
			}, 300);
		}, 10);
	}
}

class je extends pa
{
	constructor(fg)
	{
		const vt = new jk;

		super(vt);

		this.qr(fg).then(
			sd => this.wv(sd)
		);
	}

	we()
	{
		this.vt.yf('xbqrh');
	}

	wv(sd)
	{
		this.vt.innerHTML = sd;
	}

	qr(fg)
	{
		const fd = tz.xi('/html/policies/%s.html', fg);

		return zd.qr(fd);
	}
}

class kb extends pa
{
	constructor()
	{
		const vt = new hx('ni');

		super(vt);

		this.tq(ut, io);

		dy.um(this, 'mv');
	}

	we()
	{
		this.bn = new ln({
			placeholder:'type keywords here..',
		});
		this.bn.uj(this, 'ps', ['er']);
		this.bn.uj(this, 'cp', ['yw', 'kt']);

		this.qy = new zi({
			wt:'pqtwf',
			oh:'0',
			re:'disabled',
			fm:[this, 'zh', 'gp']
		});

		this.vo = new ke(this);

		this.vx = new cw();
		this.vx.ym = new ja(this);

		this.ic = new hx(this.vt.zc('zq'));
		this.ic.ex(this.bn);
		this.ic.ex(this.qy);

		this.sy = new hx(this.vt.zc('ok'));
		this.sy.ex(this.vx);
		this.sy.ex(this.vo);
	}

	bt()
	{
		if (this.lf)
		{
			this.rg();

			if (this.ag.an)
			{
				this.xn('');
				this.vx.hc();
			}
		}
	}

	tu(bh)
	{
		this.bn.focus();

		if (bh == 'ns')
		{
			this.bn.select();
		}
	}

	ui()
	{
		if (this.vo.wj)
		{
			this.vo.ml.bz();
		}
	}

	gi(aq)
	{
		if (aq == 'mv')
			return this.dh();
	}

	rp(vt)
	{
		this.sy.cg(vt);
	}

	ps()
	{
		if (this.lf)
		{
			this.rg();
		}
	}

	cp()
	{
		let q = this.kn();

		switch (true)
		{
			case (!q):
				return;

			case (!nk.nx):
				return this.vx.vq('gx');

			case (this.ag.co):
			{
				if (!this.ag.vc)
					return;

				if (q == this.ag.qp)
				{
					return this.vx.vq('lr');
				}
			}
		}

		this.zn(q);
	}

	fo()
	{
		if (!nk.nx)
			return this.vx.vq('gx');

		this.vy(':all');
	}

	get mg()
	{
		return this.ag.mg;
	}

	zh()
	{
		this.bj(new tx);
	}

	zn(q)
	{
		this.ag.search(q);
		this.vx.vq('ju');
	}

	rg()
	{
		this.ag.rj();
	}

	dh()
	{
		let q = tz.nr(nk.ce.currentTime);

		this.vy(q);
	}

	kn()
	{
		return this.bn.value;
	}

	xn(q)
	{
		this.bn.value = q;
	}

	vy(q)
	{
		this.xn(q);
		this.zn(q);
	}

	get lf()
	{
		if (nk.nx && nk.ig != this.sl)
		{
			return Boolean(this.sl = nk.ig);
		}

		return false;
	}
}

class ut
{
	constructor()
	{
		this.zg = zg.tn('oi', this.eh.bind(this));

		this.qp = '';
		this.hp = 0;
		this.mj = 0;
		this.mc = 500;
		this.vc = false;
		this.an = false;
		this.gq = [];
		this.sr = 25;
	}

	eh(wi)
	{
		const ey = wi.ey;

		switch (wi.ew)
		{
			case 'mq':
				return this.rt(ey);

			case 'uq':
				return this.lu(ey);

			case 'mu':
				return this.ed(ey);
		}
	}

	get co()
	{
		return this.vc || this.qf('mj') < 500;
	}

	get mg()
	{
		return this.gq.splice(0, this.sr);
	}

	rj()
	{
		this.zg.ev('uq', new av(''));
	}

	search(q)
	{
		this.sq(q);

		this.zg.ev('mq', new av(q));
	}

	ed(mu)
	{
		this.ai();

		this.ym.ed(mu.aq);
	}

	rt(r)
	{
		this.ai();

		let li = this.mc - this.qf('hp');

		(r.iw == 0) && (li = 200);

		this.gq = r.gl;
		this.an = (r.iw == 0);

		setTimeout(
			_ => this.ym.rt(r.iw, r.wu),
		li);
	}

	lu(n)
	{
		this.ym.lu(n);
	}

	qn(yo)
	{
		this[yo] = Date.now();
	}

	qf(yo)
	{
		return Date.now() - this[yo];
	}

	sq(q)
	{
		this.qp = q;

		this.vc = true;

		this.qn('hp');
	}

	ai()
	{
		this.vc = false;

		this.qn('mj');
	}
}

class cw extends hx
{
	constructor()
	{
		super('hx', {
			wt:'mfide'
		});

		this.ov = {
			lv: 'no results match your query',
			ju: 'Searching...',
			lr: 'Searching still...',
			gx: 'You are not watching any video',
			bv: 'Invalid request',
			ie: 'This video has 0 comments',
			mn: 'Comments are disabled for this video.',
			qh: 'check your internet connection',
			gh: 'service down for maintenance',
			vk: 'request timeout, try again',
			on: 'feature not supported for this video',
			xb: 'invalid response from server, try again',
			hw: 'something is not working properly',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'maximum allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
		};
	}

	vq(lh)
	{
		this.jl(lh);
	}

	ec(...uz)
	{
		this.bl(...uz);
	}

	gv(sw, uz)
	{
		this.bl(
			tz.xi(sw, uz)
		);
	}

	hc()
	{
		this.innerHTML = '';
	}

	jl(aq)
	{
		let yr = this.ov[aq];

		if (!yr)
		{
			yr = this.ov.hw;
		}

		this.bl(yr);
	}

	bl(...sx)
	{
		const hk = document.createDocumentFragment();

		for (let qa of sx)
		{
			let kd = null;

			if (typeof qa == 'string')
			{
				kd = document.createTextNode(qa);
			}
			else {
				kd = qa.pc;
			}

			hk.appendChild(kd);
		}

		this.hc();
		this.appendChild(hk);

		this.ym.iz();
	}
}

class ke extends di
{
	constructor(nf)
	{
		super(nf);

		this.wj = false;
	}

	bf(bh)
	{
		this.ml.hq(bh.ig, bh.my);

		bh.ot.ny(this.ml);
	}

	xe(bh)
	{
		tz.wb(nk.ce, bh.my);
	}

	km(gz)
	{
		const sh = [];

		for (let mo of gz)
		{
			let ry = new hx('ep');

			for (let i = 0; i < mo.length; i++)
			{
				const dg = mo[i];

				if (dg.gw > 0)
				{
					const n = i + dg.gw;

					for (let k = i; k < n; k++)
					{
						mo[k].bw = mo.slice(k + 1, n + 1).some(ij => !ij.hidden);
					}
				}

				ry.ex(
					new as(dg)
				);
			}

			sh.push(ry);
		}

		return sh;
	}

	get ml()
	{
		if (!this.wj)
		{
			this.wj = true;
			this.zp = new bq;
		}

		return this.zp;
	}
}

const io = function(rn)
{
	return {
		lu(n)
		{
			let oc = n;

			if (n < 0) switch (n)
			{
				case -2:
					oc = '∞';
					break;

				case -1:
					oc = '∅';
					break;
			}

			rn.qy.yj(oc);

			if (0 < n && n < 1000)
			{
				rn.qy.tg('normal')
			}
			else {
				rn.qy.tg('disabled');
			}
		},

		rt(iw, p)
		{
			this.lu(p);

			if (iw > 0)
			{
				rn.vo.lz();

				return rn.rp(rn.vo);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return rn.vx.vq('ie');

				case -1:
					return rn.vx.vq('mn');

				case -2:
					return rn.vx.vq('lv');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const cz = new jm({
						gy:tz.xi('%s comments', p),
						fm:[rn, 'fo', 'gp']
					});

					return rn.vx.ec('Nothing found in ', cz);
				}

				return rn.vx.gv('Nothing found in %s comments', p);
			}

			rn.vx.vq('lv');
		},

		ed(jg)
		{
			rn.vx.vq(jg);
		}
	}
}

const ja = function(rn)
{
	return {
		iz()
		{
			rn.rp(rn.vx);
		}
	}
}

class bq extends hx
{
	constructor()
	{
		super('bq');

		this.br = this.children[0];

		this.br.onload = () => {
			try {
				const fe = this.br.contentDocument.body;

				this.ce = fe.querySelector('video');

				fe.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.sl;
		this.kv;
	}

	hq(ig, my)
	{
		if (ig != this.sl) {
			this.br.src = tz.xi(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [ig, my]
			);
		}
		else if (this.ce) {
			tz.wb(this.ce, my);
		}

		this.sl = ig;
		this.kv = my;
	}

	bz()
	{
		if (this.bp)
		{
			this.yz();
		}
	}
}

class as extends hx
{
	constructor(dg)
	{
		const gu = sn.sb('as', dg);

		super(gu);

		this.lj(dg);
	}

	lj(dg)
	{
		this.tc(dg);
		this.rw(dg);

		if (dg.cb)
		{
			if (dg.bw)
				this.yf('faent');

			if (dg.hidden)
				this.yf('zqrgk');
		}

		if (dg.mw)
		{
			this.yf('rqnmb');

			this.ex(
				new hx('xp', {wt:'igshq'}), 'ol'
			);
		}
	}

	ba()
	{
		return this;
	}

	ny(ml)
	{
		this.ex(ml, 'el');
	}

	tc(dg)
	{
		const ay = dg.em;

		const wr = ay.replace(
			yt[6], tz.xi('s%s-', dg.cb ? 48 : 80)
		);

		this.ex(new qu({
			ws:wr,
			nq:ay,
		}), 'aw');
	}

	rw(dg)
	{
		const yh = new xg({
			wt:'hjuhv',
			sg: {
				dir:dg.nw,
				lang:dg.ho
			}
		});

		const ve = Object.keys(dg.dz);

		if (ve.length)
		{
			const jt = tz.zw(dg.wh, ve);

			for (let x of jt)
			{
				if (tz.ue(x))
				{
					const a = this.rv(dg.dz[x]);

					yh.ex(a);
				}
				else {
					const s = sn.ua(x);

					yh.appendChild(s);
				}
			}
		}
		else {
			yh.textContent = dg.wh;
		}

		if (dg.cb && !dg.mw)
		{
			yh.yf('paype');

			yh.addEventListener('click',
				e => yh.sj('paype')
			);
		}

		this.ex(yh, 'el');
	}

	rv(x)
	{
		let a;

		if (x.ax == 'hv' && x.ig != nk.ig)
		{
			x.ax = 'az';
		}

		switch (x.ax)
		{
			case 'hv':
				a = new af(x.gy, x.my);
				a.uj(this, 'xe', 'gp');
				return a;

			case 'az':
				a = new ne(x.gy, x.ig, x.my);
				a.uj(this, 'bf', 'gp');
				return a;

			case 'lc':
				return new jm({
					gy:x.gy,
					za:x.rx
				});
		}
	}
}

class ne extends jm
{
	constructor(gy, ig, my)
	{
		super({
			wt:'schfg',
			gy:gy
		});

		this.ig = ig;
		this.my = my;
	}

	get ot()
	{
		return this.df('ba');
	}
}

class af extends jm
{
	constructor(gy, my)
	{
		super({
			wt:'schfg',
			gy:gy
		});

		this.my = my;
	}
}

let dc;
let ki;
let lg;
let zg;
let zd;
let dy;
let zk;
let rk;
let gf;
let zo;
let sn;

if (nk.zt)
{
	dc = new dn;
	ki = new ao;
	lg = new by;
	zg = new cr;
	zd = new wm;
	dy = new gj;
	zo = new xj;

	zd.xl().then(async sf =>
	{
		if (sf.re.nl)
		{
			await dc.fw();
		}

		sn = new wx(sf.qb);

		rk = new oa(sf.re);

		gf = new nd;

		zd.po();

		dc.nj();
	});

	lg.qw && zo.mf();
}

const yt = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];