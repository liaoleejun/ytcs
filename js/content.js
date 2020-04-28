/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const zt = {};

for (let kx of 'object array string regex date math type std'.split(' '))
{
	zt[kx] = {};
}

zt.kc = function(sz, fg)
{
	return sz != undefined && sz.constructor === fg;
}

zt.ul = function()
{
	return zt.de(9);
}

zt.uc = function(fy)
{
	return jx[0].test(fy);
}

zt.kw = function(ui)
{
	return Object.keys(ui).length == 0;
}

zt.lh = function(vx, ui)
{
	for (let wj in ui)
	{
		const yn = ui[wj];

		if (wj == vx) return yn;
		if (yn == vx) return wj;
	}
}

zt.md = function(ui, cz)
{
	let fy = '';

	for (let wj in ui)
	{
		fy += wj + '=' + ui[wj] + cz;
	}

	return fy.slice(0, -1);
}

zt.za = function(ry, rj, ch)
{
	const tu = rj + 1;

	return ch.slice(tu, tu + ry);
}

zt.gy = function(ch)
{
	return ch[ch.length - 1];
}

zt.st = function(fx, yu)
{
	fx += '?';

	for (let wj in yu)
	{
		fx += wj + '=' + encodeURIComponent(yu[wj]) + '&';
	}

	return fx.slice(0, -1);
}

zt.zb = function(fy, sk)
{
	if (zt.kc(sk, Array))
	{
		let i = 0;

		return fy.replace(jx[1], _ => sk[i++]);
	}

	return fy.replace('%s', sk);
}

zt.zn = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

zt.gu = function(fy, oh)
{
	const ai = zt.zb('(%s)', oh.join('|'));

	return fy.split(new RegExp(ai)).filter(s => s !== '');
}

zt.ka = function(fy)
{
	return fy.toUpperCase();
}

zt.ck = function(fy)
{
	return fy.toLowerCase();
}

zt.uh = function(fy, bt)
{
	if (!bt)
	{
		fy = fy.toLowerCase();
	}

	return fy[0].toUpperCase() + fy.slice(1);
}

zt.fe = function(ax, fy)
{
	return fy.match(ax) || [];
}

zt.rp = function(ax, fy)
{
	if (ax.global) return '';

	const m = zt.fe(ax, fy);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

zt.ab = function()
{
	return Math.floor(Date.now() / 1000);
}

zt.wr = function(qr)
{
	return qr < zt.ab();
}

zt.yw = function(q)
{
	const ja = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = zt.rp(jx[2], q);

	return Date.now() + (x[0] * ja[x[1]] * 1000);
}

zt.gc = function(he)
{
	let x = he.split(':'),
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

zt.wh = function(lf)
{
	let ch = [];

	ch.push(lf / 3600);

	lf %= 3600;

	ch.push(lf / 60);

	ch.push(lf % 60);

	ch = ch.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return ch.join(':').replace(jx[3], '');
}

zt.de = function(at)
{
	return Math.random().toString().slice(2, at + 2);
}

zt.tq = function(tc, ok)
{
	const oe = Math.random() * (ok - tc) + tc;

	return Math.floor(oe);
}

zt.ni = function(x, a, b)
{
	return x >= a && x <= b;
}

zt.ws = function(a, b)
{
	return 100 * (a / b);
}

zt.jw = function()
{
	let gm, dc = 0;

	try {
		gm = [ex, jl, gf];
	}
	catch (e) {
		gm = [bz, gf];
	}

	gm.forEach(
		ig => dc += ig.toString().length
	);

	return dc != 2035;
}

class pi
{
	constructor(ez, tx)
	{
		this.ez = ez;
		this.tx = tx;
	}
}

class ot
{
	constructor(xr, ez, tx)
	{
		this.xr = xr;
		this.sg = new pi(ez, tx);
	}
}

class cu extends Array
{
	constructor(ox)
	{
		super();

		if (ox != null)
		{
			super.push(ox);
		}
	}

	push(yj)
	{
		return !this.includes(yj) && super.push(yj);
	}
}

class oa
{
	constructor(nj, en)
	{
		const ig = nj.status;

		this.ig = ig;
		this.eh = false;
		this.hr = false;
		this.bg = null;
		this.tx = null;

		switch (en)
		{
			case 'error':
				return this.pc('am');

			case 'timeout':
				return this.pc('ys');

			default:
			{
				this.eh = (ig == 200);

				if (ig >= 500)
				{
					return this.pc('pw');
				}

				try {
					this.tx = JSON.parse(nj.responseText);
				}
				catch (e) {
					this.tx = nj.responseText;
				}
			}
		}
	}

	vq(yq)
	{
		this.bg = yq;
	}

	pc(yq)
	{
		this.vq(yq);

		this.hr = true;
	}
}

class vu
{
	constructor(tx, dt)
	{
		Object.assign(this, tx);

		Object.defineProperty(this, 'dt', {
			value: dt
		});
	}

	set(wj, yn)
	{
		this[wj] = yn;

		this.yp();
	}

	yp()
	{
		return jf.set(this.dt, this);
	}
}

class gf extends vu
{
	constructor(tx, dt)
	{
		super(tx, dt);
	}

	get rb()
	{
		return Boolean(this.lc)
	}

	get lc()
	{
		return this[0];
	}

	get cb()
	{
		return this[1];
	}

	get ba()
	{
		return zt.wr(this.cb);
	}

	get tb()
	{
		const ou = this.cb.toString().split('').pop();

		return Boolean(+ou);
	}

	set lc(wj)
	{
		this.set(0, wj);
	}

	set cb(xf)
	{
		this.set(1, xf);
	}

	get is()
	{
		let s = this.cb.toString(),
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

class hy
{
	constructor(fa)
	{
		if (fa)
		{
			this.mr();
		}
	}

	ln(nd, cs, tr)
	{
	}

	mr()
	{
		chrome.runtime.onMessage.addListener(
			this.ln.bind(this)
		);
	}
}

class gd extends hy
{
	constructor()
	{
		super(false);
	}

	ln(nd, cs, tr)
	{
		const tx = nd.tx;

		switch (nd.ez)
		{
			case 'kz':
				return this.ya(tx);
		}
	}

	ya(kz)
	{
		if (kz == 'ha')
		{
			jv.tu();
		}
	}

	aw()
	{
		return this.iv('aw');
	}

	lz(vz)
	{
		return this.iv('lz', vz);
	}

	dg(lc)
	{
		return this.iv('dg', lc);
	}

	ep()
	{
		return this.iv('ep');
	}

	jp()
	{
		return this.iv('jp');
	}

	iv(ez, tx)
	{
		const nd = new pi(ez, tx);

		return new Promise(tr =>
		{
			try {
				chrome.runtime.sendMessage(nd, tr);
			}
			catch (e) {
			}
		});
	}
}

class dn extends hy
{
	constructor()
	{
		super(true);
	}

	ln(nd, cs, tr)
	{
		const no = function(...sk)
		{
			try {
				tr(...sk);
			}
			catch (e) {
			}
		};

		ze.cr.then(_ =>
		{
			const tx = nd.tx;

			switch (nd.ez)
			{
				case 'aw':
					ze.aw().then(no);
				break;

				case 'lz':
					ze.lz(tx).then(no);
				break;

				case 'dg':
					ze.dg(tx).then(no);
				break;

				case 'ep':
					tv.fh.ep(tx).then(no);
				break;

				case 'jp':
					ze.er();
				break;
			}
		});

		return true;
	}
}

class js
{
	get(wj)
	{
		return new Promise(tf =>
		{
			try {
				chrome.storage.local.get(wj, km =>
					tf(typeof wj == 'string' ? km[wj] : km)
				);
			}
			catch (e) {
			}
		});
	}

	set(wj, yn)
	{
		let tx;

		if (typeof wj == 'object')
		{
			tx = wj;
		}
		else {
			tx = {[wj]:yn};
		}

		return new Promise(xw =>
		{
			try {
				chrome.storage.local.set(tx, xw);
			}
			catch (e) {
			}
		});
	}

	pj()
	{
		return new Promise(xw =>
		{
			try {
				chrome.storage.local.clear(xw);
			}
			catch (e) {
			}
		});
	}
}

class lrkfo
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			ot => this.xb(ot)
		);

		Port.onDisconnect.addListener(
			_ => this.ed()
		);

		this.Port = Port;

		this.av = {
		};

		this.my = false;
	}

	ln(m)
	{
	}

	wd(xr, ez, tx)
	{
		const xc = new ot(xr, ez, tx);

		if (!this.my)
		{
			this.Port.postMessage(xc);
		}
	}

	xb(x)
	{
		this.hx(x.xr).ln(x.sg);
	}

	hx(xr)
	{
		return this.av[xr] || this;
	}

	zu(xr, ln, ed)
	{
		return this.av[xr] = new si(this, xr, ln, ed);
	}

	ed()
	{
		this.my = true;

		for (let xr in this.av)
		{
			this.hx(xr).ed();
		}
	}
}

class ol extends lrkfo
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	ln(nd)
	{
		const tx = nd.tx;

		switch (nd.ez)
		{
			case 'mh':
				return bo.dr(tx);
		}
	}

	zu(xr, ln, ed)
	{
		this.wd(null, 'zu', xr);

		return super.zu(xr, ln, ed);
	}

	ed()
	{
		super.ed();

		jv.qs();
	}
}

class ug extends lrkfo
{
	constructor(dm)
	{
		super(dm);
	}

	ln(nd)
	{
		switch (nd.ez)
		{
			case 'zu':
				return this.zu(nd.tx);
		}
	}

	zu(xr)
	{
		const kb = super.zu(xr);

		switch (xr)
		{
			case 'ho':
				return new xa(kb);
		}
	}
}

class dk
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			wo => this.ew(wo)
		);

		this.wt = [];
	}

	ew(dm)
	{
		this.wt.push(
			new ug(dm)
		);
	}

	ut(ej)
	{
		for (let dm of this.wt)
		{
			dm.wd(null, 'mh', ej);
		}
	}
}

class si
{
	constructor(dm, xr, ln, ed)
	{
		this.dm = dm;

		this.xr = xr;

		if (ln)
		{
			this.ln = ln;
		}

		if (ed)
		{
			this.ed = ed;
		}
	}

	wd(ez, tx)
	{
		this.dm.wd(this.xr, ez, tx);
	}

	ln(m)
	{
	}

	ed()
	{
	}
}
class jh
{
	ud(su)
	{
		this.su = su;
	}

	lg(ju, cs)
	{
		if (ju in this && this != cs)
		{
			return this[ju](cs);
		}

		if (this.ht)
		{
			return this.ht.lg(ju, cs);
		}
	}

	get ht()
	{
		return this.su || this.zx;
	}
}

const sf = function(bm, nz)
{
	return new nz(bm);
}

class gh extends jh
{
	constructor(eu)
	{
		super();

		this.bf = eu;

		this.po('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	pt(fq)
	{
		if (typeof fq == 'string')
		{
			fq = [fq];
		}

		this.bf.classList.add(...fq);
	}

	hw(fq)
	{
		this.bf.classList.remove(fq);
	}

	ms(fq)
	{
		this.bf.classList.contains(fq) ? this.hw(fq)
												: this.pt(fq);
	}

	kt()
	{
		this.bf.remove();
	}

	po(...ym)
	{
		for (let x of ym) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.bf[x] instanceof Function)
			{
				this[x] = this.bf[x].bind(this.bf);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.bf[x];
					},
					set(v) {
						this.bf[x] = v;
					}
				});
			}
		}
	}
}

class ki extends gh
{
	constructor(vl, kj)
	{
		super(
			typeof vl == 'string' ? zc.kv(vl) : vl
		);

		this.zx = null;
		this.fl = [];
		this.xk = {};
		this.le = {};

		if (kj)
		{
			if (kj.bw)
			{
				this.pt(kj.bw);
			}

			if (kj.nv)
			{
				this.textContent = kj.nv;
			}

			if (kj.jz)
			{
				this.hm(...kj.jz);
			}

			if (kj.gi)
			{
				for (let ea in kj.gi)
				{
					this.setAttribute(ea, kj.gi[ea]);
				}
			}

			if (kj.import)
			{
				for (let zq of kj.import)
				{
					this.po(zq);
				}
			}
		}
	}

	xq(fv, ux)
	{
		if (fv.zx)
		{
			if (fv.zx == this)
				return;

			fv.ub();
		}

		fv.zx = this;
		this.fl.push(fv);

		switch (typeof ux)
		{
			case 'string':
				return this.nb(ux).appendChild(fv.bf);

			case 'number':
				return this.bf.prepend(fv.bf);

			default:
				return this.appendChild(fv.bf);
		}
	}

	nb(jc)
	{
		return this.querySelector('#' + jc);
	}

	zd(jz, ju, fj)
	{
		this.jz = {};

		this.hm(jz, ju, fj);
	}

	hm(jz, ju, fj)
	{
		if (typeof fj == 'string')
		{
			fj = [fj];
		}

		for (let mq of fj)
		{
			if (!this.le[mq])
			{
				this.le[mq] = new Map;

				this.addEventListener(
					zt.lh(mq, ki.ue), e => this.fw(e)
				);
			}

			this.le[mq].set(jz, ju)
		}
	}

	pf(mq)
	{
		const le = this.le[mq];

		if (le)
		{
			for (let [jz, ju] of le)
			{
				jz.lg(ju, this);
			}
		}
	}

	wm()
	{
		this.hidden = true;
	}

	or()
	{
		this.hidden = false;
	}

	pj()
	{
		let i = this.fl.length;

		while (i--)
		{
			this.fl[i].ub();
		}
	}

	ub()
	{
		this.zx.tg(this);
	}

	zj(fv)
	{
		this.appendChild(fv.bf);
	}

	tg(fv)
	{
		fv.zx = null;

		this.fl.splice(
			this.fl.indexOf(fv), 1
		);

		fv.bf.remove();
	}

	fw(e)
	{
		e.stopPropagation();

		this[zt.lh(e.type, ki.ue)](e);
	}

	db()
	{
		this.pf('db');
	}
}

ki.ue = {
	db:'click',
	wk:'paste',
	hd:'keyup',
	ie:'keyup',
	wl:'focus',
};

class va extends ki
{
	constructor(kj)
	{
		super('va', kj);
	}
}

class cx extends ki
{
	constructor()
	{
		super('cx');

		this.po('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			rl.sw(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class ga extends cx
{
	constructor(ce)
	{
		super();

		this.ce = ce;

		this.vc;

		this.addEventListener('scroll',
			_ => this.ay()
		);
	}

	mn()
	{
	}

	xi()
	{
		this.pj();
		this.al();
		this.vw();

		this.li();
	}

	ay()
	{
		if (this.vt && this.yx)
		{
			this.vw();
		}
	}

	al()
	{
		this.vc = this.mn(this.ce.tl);
	}

	vw()
	{
		for (let fv of this.vc)
		{
			this.xq(fv);
		}

		this.al();
	}

	li()
	{
		this.hw('nlrlq');

		if (this.fo)
		{
			this.pt('nlrlq');
		}
	}

	get fo()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get vt()
	{
		return this.vc.length;
	}

	get yx()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class sx extends ki
{
	constructor(pe, rh)
	{
		super('sx');

		this.po('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.lr = pe;

		this.ke(pe, rh);

		this.nk();
		this.xj();
	}

	cg(qf)
	{
		for (let k in qf)
		{
			this.style[k] = qf[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	ke(pe, rh)
	{
		const x = window.innerHeight - rh;
		const y = window.innerWidth - pe - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = pe + 'px';
	}

	nk()
	{
		let ny = this.querySelectorAll('[resize]');

		for (let um of ny)
		{
			um.addEventListener('pointerdown',
				e => this.xz(e, 'eg')
			);
		}
	}

	xj()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.xz(e, 'ph')
		);
	}

	xz(e, ju)
	{
		if (e.which == 1)
			this[ju](e);
	}

	bx()
	{
		return this.getBoundingClientRect();
	}

	eg(e)
	{
		const jr = e.target.getAttribute('resize'),
				nw = jr.includes('w'),
				gl = jr.includes('n'),
				np = jr.includes('e');

		const vs = this.bx(),
				lr = this.lr,
				pg = 56,
				hn = an.xd,
				ur = window.innerHeight - pg,
				lx = e.clientX,
				jn = e.clientY,
				lk = vs.x,
				rt = vs.y,
				uw = vs.width;

		let wi = 0,
				hi = 0,
				ku = lk,
				ip = rt,
				hk = uw;

		let ev = (e) =>
		{
			wi = e.clientX - lx;
			hi = e.clientY - jn;

			if (gl)
			{
				ip = rt + hi;

				(ip < 0) && (ip = 0);

				(ip > ur) && (ip = ur);

				this.style.top = ip + 'px';
			}

			if (np)
			{
				hk = uw + wi;

				(e.clientX > hn) && (hk = hn - lk);

				(hk < lr) && (hk = lr);

				this.style.width = hk + 'px';
			}

			if (nw)
			{
				ku = lk + wi;
				hk = uw - wi;

				if (ku < 0)
				{
					ku = 0;
					hk = uw + lk;
				}

				if (hk < lr)
				{
					ku = lk + (uw - lr);
					hk = lr;
				}

				this.style.width = hk + 'px';
				this.style.left = ku + 'px';
			}
		};

		let vf = () => {
			(wi != 0 || hi != 0) && this.ko();
		};

		this.wv(ev, vf);
	}

	ph(e)
	{
		let lk = this.offsetLeft,
			lx = e.clientX,
			wi = 0;

		let ev = (e) => {
			wi = e.clientX - lx;
			this.style.left = lk + wi + 'px';
		};

		let vf = () => {
			(wi != 0) && this.ko();
		};

		this.wv(ev, vf);
	}

	wv(ev, vf)
	{
		rl.up(true);

		document.onpointermove = (e) => ev(e);

		document.onpointerup = (e) => {
			rl.up(false);
			vf();
			document.onpointerup = document.onpointermove = null;
		};
	}

	ko()
	{
		if (this.hidden) return;

		let vs = this.bx();

		let qf = {
			width: zt.ws(vs.width, window.innerWidth),
			left: zt.ws(vs.x, window.innerWidth),
			top: zt.ws(vs.y, window.innerHeight),
		};

		this.cg(qf);

		if ('ei' in this.xk)
		{
			this.xk.ei(qf);
		}
	}
}

class mz extends sx
{
	constructor(pe, rh)
	{
		super(pe, rh);

		this.addEventListener('wheel', rl.sw);
	}
}

class qb extends ki
{
	constructor(kj)
	{
		super('qb', kj);

		this.po('src');

		if (kj.nt)
		{
			this.addEventListener('error', e => this.src = kj.nt, {once:true});
		}

		this.src = kj.af;
	}
}

class lv extends ki
{
	constructor(vl, kj)
	{
		super(vl, kj);

		this.ir = [];
		this.uq = false;
	}

	hd(e)
	{
		if (e.key == 'Enter')
		{
			this.pf('ie');
		}

		this.pf('hd');
	}

	wk(e)
	{
		setTimeout(
			_ => this.pf('wk'),
		10);
	}

	wl(e)
	{
		this.pf('wl');
	}

	get vd()
	{
		if (!this.uq)
		{
			const rq = Date.now();

			const at = this.ir.push(rq);

			if (at > 3)
			{
				if (rq - this.ir[0] < 2000)
				{
					this.uq = true;

					setTimeout(
						_ => this.uq = false,
					20 * 1000);
				}
				else {
					this.ir.length = 0;
				}
			}
		}

		return this.uq;
	}
}

class ci extends lv
{
	constructor(kj)
	{
		super('ci', kj);

		this.po('placeholder', 'focus', 'select');

		if (kj && kj.placeholder)
		{
			this.placeholder = kj.placeholder;
		}
	}

	get value()
	{
		return this.bf.value.trim();
	}

	set value(s)
	{
		this.bf.value = String(s).trim();
	}
}

class lt extends lv
{
	constructor(kj)
	{
		super('lt', kj);

		this.ke();
	}

	ke()
	{
		this.ix = new ci();

		this.xq(this.ix, 'uk');

		this.dj = new qo();

		this.xq(this.dj, 'uk');

		this.os = this.nb('os');
	}

	focus()
	{
		this.ix.focus();
	}

	get value()
	{
		return this.ix.value;
	}

	az(mk, nv)
	{
		this.dj.ij(mk);

		this.os.textContent = nv || '';
	}
}

class oz extends ki
{
	constructor(vl, kj)
	{
		super(vl, kj);

		this.ij(kj.mk || 'initial');
	}

	get rx()
	{
		return this.mk == 'disabled';
	}

	get tm()
	{
		return this.mk == 'selected';
	}

	ij(mk)
	{
		this.mk = mk;

		this.setAttribute('state', mk);
	}

	fw(e)
	{
		if (!this.rx)
		{
			super.fw(e);
		}
	}
}

class ky extends oz
{
	constructor(kj)
	{
		super('ky', kj);

		if (kj.gv)
		{
			this.mg(kj.gv);
		}

		if (kj.ua)
		{
			this.ec(kj.ua);
		}
	}

	mg(nv)
	{
		this.textContent = nv;
	}

	ec(vl)
	{
		const ua = zc.kv(vl);

		this.appendChild(ua);
	}
}

class ef extends ky
{
	constructor(kj)
	{
		super(kj);

		this.value = kj.value;
	}

	db()
	{
		if (this.tm)
		{
			this.ij('initial');
		}
		else {
			this.ij('selected');
		}

		super.db();
	}
}

class vb extends ki
{
	constructor(kj)
	{
		super('vb', kj);

		if (kj.zi)
		{
			this.setAttribute('href', kj.zi);
		}
	}
}

class qo extends ki
{
	constructor(kj)
	{
		super('qo', kj);
	}

	ij(mk)
	{
		this.setAttribute('state', mk);
	}
}

class dh extends jh
{
	constructor(fv, xu)
	{
		super();

		this.fv;

		this.ng;

		this.children = [];

		this.iz(fv, xu);
	}

	iz(fv, xu)
	{
		fv.ud(this);

		if (xu)
		{
			fv.xk = new sf(this, xu);
		}

		this.fv = fv;

		this.yg();
	}

	hq(sb, df)
	{
		this.ng = new sb;

		if (df)
		{
			this.ng.xk = new sf(this, df);
		}

		this.qd();
	}

	qd()
	{
	}

	yg()
	{
	}

	qx(cs)
	{
		if (this.pz)
		{
			this.pz.qx(cs);
		}

	}

	om(cs)
	{
		if (this.pz)
		{
			this.pz.om(cs);
		}

	}

	zf(cs)
	{
		if (this.pz)
		{
			this.pz.zf(cs);
		}

	}

	fi(cs)
	{
		if (this.pz)
		{
			this.pz.fi(cs);
		}

	}

	uz(jc)
	{
	}

	or(yl, cs)
	{
		this.fv.appendChild(yl.fv.bf);
	}

	te(yl)
	{
		this.qe.sr(yl);
	}

	vr()
	{
		this.qe.gr();
	}

	sr(dv, mj)
	{
		dv.ud(this);

		dv.qx();

		this.children.push(dv);

		this.fv.xq(dv.fv, mj);

		dv.om();
	}

	gr()
	{
		this.children.pop().jy();
	}

	get qe()
	{
		let hj = this;

		while (hj.su)
		{
			hj = hj.su;
		}

		return hj;
	}

	get vg()
	{
		return this.children.length;
	}

	get pz()
	{
		return zt.gy(this.children);
	}

	jy()
	{
		this.fv.kt();

		for (let dv of this.children)
		{
			dv.jy();
		}
	}
}

class gt extends dh
{
	constructor()
	{
		const fv = new ki('nf');

		super(fv);
	}

	yg()
	{
		this.wq = new ky({
			bw:['kdjzp', 'athvp'],
			ua:'rw',
			mk:'hidden',
			jz:[this, 'cv', 'db']
		});

		this.fv.xq(this.wq);
	}

	cv()
	{
		this.gr();

		this.ae();
	}

	xt()
	{
		this.wq.ij('hidden');
	}

	sr(dv)
	{
		super.sr(dv, 'vm');

		this.ae();
	}

	ae()
	{
		if (this.vg > 1)
		{
			this.wq.ij('initial');
		}
		else {
			this.wq.ij('hidden');
		}
	}




}

zt.fp = function(cf, ik)
{
	cf.currentTime = ik;

	if (cf.paused)
	{
		cf.play();
	}
}

function openWindow(fx)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = zt.md(q, ',');

	return window.open(fx, '', q);
}

class zo
{
	constructor(q)
	{
		Object.assign(this, {
			dw: q,
			ta: kp.ta,
			zg: kp.cf.duration,
			be:kp.cf.currentTime
		});
	}
}

class xh
{
	constructor()
	{
		this.we = navigator.platform.includes('Mac');
	}

	get xd()
	{
		return !this.we ? document.body.clientWidth : window.innerWidth;
	}
}

const kp = {
	get dx()
	{
		return ['www', 'music'].includes(this.yf);
	},

	get hc()
	{
		return location.pathname == '/watch';
	},

	get cf()
	{
		if (!this.se)
		{
			this.se = rl.querySelector('video');
		}

		return this.se || document.createElement('video');
	},

	get ta()
	{
		return zt.rp(jx[4], location.href);
	},

	get yf()
	{
		return location.host.split('.')[0];
	}
}

class kl
{
	constructor(cd)
	{
		this.zl = document.createElement('div');

		this.yt = {};

		for (let mv of this.mb(cd).children)
		{
			const zp = mv.getAttribute('protoid');

			if (zp) {
				mv.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.yt[zp] = mv.outerHTML;
		}
	}

	kv(vl, hu)
	{
		let ri = this.yt[vl];

		if (hu)
		{
			ri = ri.replace(jx[5], (_, wj) => hu[wj]);
		}

		return this.mb(ri);
	}

	em(nv)
	{
		const s = document.createElement('span');

		s.textContent = nv;

		return s;
	}

	mb(ri)
	{
		this.zl.innerHTML = ri;

		return this.zl.children[0];
	}
}

class ah extends gh
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.yv = 'fullscreenchange';
			this.lj = 'fullscreenElement';
		}
		else {
			this.yv = 'webkitfullscreenchange';
			this.lj = 'webkitFullscreenElement';
		}

		this.cm();

		document.addEventListener(
			this.yv, _ => this.cm()
		);
	}

	get fm()
	{
		return Boolean(document[this.lj]);
	}

	rc()
	{
		this.pt('gkepn');
	}

	up(go)
	{
		go ? this.pt('wqkpl')
			: this.hw('wqkpl');
	}

	sw(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	cm()
	{
		this.setAttribute('cs-fullscreen', this.fm);
	}
}

class bz
{
	constructor()
	{
		this.hs = {
			sp: '/html/svg/1.svg',
		}
	}

	ti()
	{
		zt.jw() && lo.jp();
	}

	async qv()
	{
		fz = await jf.get('1');

		fz = new gf(fz);
	}

	rd(jc)
	{
		return chrome.runtime.getURL(this.hs[jc]);
	}
}

class ex extends dh
{
	constructor(mk)
	{
		const fv = new mz(460, 480);

		super(fv, qc);

		this.hq(sn);

		bo.io(this, [
			'gx', 'un', 'zh', 'xs'
		]);

		this.px = false;

		switch (true)
		{
			case (mk.zr):
				return this.sr(new ro);

			case (mk.og):
				return this.sr(new gq);

			default:
				this.ob();
		}
	}

	yg()
	{
		this.fv.xq(new ky({
			bw:['kdjzp', 'bzwfk'],
			ua:'bs',
			jz:[this, 'gw', 'db']
		}));

		document.body.appendChild(this.fv.bf);
	}

	qd()
	{
		this.ng.bx.then(
			qf => qf && this.fv.cg(qf)
		);
	}

	uz(jc)
	{
		switch (jc)
		{
			case 'gx':
				return this.tu('ye');

			case 'un':
				return this.tu('cq');

			case 'zh':
				return this.gw();

			case 'xs':
				return this.zw();
		}
	}

	ob()
	{
		this.sr(new ve);
	}

	zw()
	{
		this.gr();

		this.ob();
	}

	tu(cs)
	{
		this.pz.qx(cs);

		this.fv.or();

		this.pz.om(cs);

		this.px = true;
	}

	gw(cs)
	{
		this.pz.zf(cs);

		this.fv.wm();
	}

	qs()
	{
		this.sr(new sv);
	}
}

class sn
{
	get bx()
	{
		return jf.get('appPosition');
	}

	xv(bw)
	{
		(bw.width > 100) && (bw.width = 100);

		(bw.left < 0) && (bw.left = 0);

		if (bw.left + bw.width > 100)
		{
			bw.left = 100 - bw.width;
		}

		jf.set('appPosition', bw);
	}
}

const qc = function(bm)
{
	return {
		ei(qf)
		{
			bm.ng.xv(qf);
		}
	}
}

class rs
{
	static fd(wj)
	{
		return wj == 'Enter';
	}

	static pr(wj)
	{
		return ['Control','Meta'].includes(wj);
	}
}

class ca
{
	constructor()
	{
		window.addEventListener('keydown', e => this.iu(e), true);
	}

	iu(e)
	{
		this.oq(e);

		const ig = this.ig;

		if (this.nl)
		{
			if (ig == 'KeyS')
			{
				e.preventDefault();

				return bo.dr('gx');
			}

			if (ig == 'KeyE' && kp.hc)
			{
				e.preventDefault();

				return bo.dr('un');
			}

			if (ig == 'KeyX' && rl.fm)
			{
				return bo.dr('zh');
			}
		}

		if (ig == 'Escape')
		{
			return bo.dr('zh');
		}
	}

	oq(e)
	{
		this.ig = e.code;

		this.nl = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get dz()
	{
		return this.ig == 'KeyV';
	}
}

class da
{
	constructor()
	{
		this.du = {};
	}

	dr(ej)
	{
		let vn = this.zm(ej);

		for (let kh of vn)
		{
			kh.uz(ej);
		}
	}

	io(kh, bo)
	{
		if (typeof bo == 'string')
		{
			bo = [bo];
		}

		for (let jc of bo)
		{
			this.zm(jc).push(kh);
		}
	}

	zm(ej)
	{
		return this.du[ej] || (this.du[ej] = new cu);
	}
}

class je extends dh
{
	constructor()
	{
		const fv = new ki('vi');

		super(fv);
	}

	bh()
	{
		lo.uy();

		this.vr();
	}
}

class ro extends dh
{
	constructor()
	{
		super(
			new ki('ib')
		);
	}

	yg()
	{
		const es = new ky({
			bw:'rcvld',
			gv:'Update Now',
			jz:[this, 'kn', 'db']
		});

		this.fv.xq(es, 'jt');
	}

	kn()
	{
		window.open('https://cs.lett.app/update');
	}
}

class br extends dh
{
	constructor()
	{
		const fv = new ki('cw');

		super(fv);
	}

	yg()
	{
		this.fv.xq(new ky({
			bw:['athvp', 'kdjzp'],
			ua:'rw',
			jz:[this, 'vr', 'db']
		}));
	}
}

class sv extends dh
{
	constructor()
	{
		const fv = new ki('jd');

		super(fv);
	}
}

class gq extends dh
{
	constructor()
	{
		const fv = new ki('ki');

		super(fv);

		this.wz();

		bo.io(this, [
			'ak', 'bn'
		]);
	}

	async uz(jc)
	{
		await ze.qv();

		switch (jc)
		{
			case 'ak':
				return this.wz();

			case 'bn':
				return this.kg();
		}
	}

	wz()
	{
		if (!fz.lc)
		{
			return this.sr(new qp);
		}

		if (!fz.tb)
		{
			return this.sr(new yc);
		}

		this.yb();
	}

	ks()
	{
		this.yb();
	}

	kg()
	{
		!jv.px && this.yb();
	}

	yb()
	{
		bo.dr('xs');
	}
}

class qp extends dh
{
	constructor()
	{
		const fv = new ki('ji');

		super(fv);
	}

	yg()
	{
		this.ly = new lt({
			jz:[this, 'dg', ['wk', 'ie']]
		});

		this.fv.xq(this.ly, 'pb');

		this.fv.xq(
			new qb({
				af:ze.rd('sp')
			}), 'id'
		);

		this.fv.xq(
			new vb({nv:'Need help?', zi:'https://cs.lett.app/generating-youtube-api-key'}), 'bv'
		);
	}

	om()
	{
		this.ly.focus();
	}

	dg(cs)
	{
		cs.az('loading');

		if (!this.yi)
		{
			this.yi = true;

			lo.dg(cs.value).then(eh =>
			{
				!eh && cs.az('error', 'try again');

				this.yi = false;
			});
		}
	}
}

class yc extends gt
{
	constructor()
	{
		super();

		this.sr(new jl);
	}

	qj()
	{
		this.sr(new tp);
	}
}

class jl extends dh
{
	constructor()
	{
		const fv = new ki('as');

		super(fv);
	}

	yg()
	{
		const kq = [];

		kq.push(
			new ky({
				bw:'rcvld',
				gv:'support it',
				jz:[this, 'qj', 'db']
			})
		);

		kq.push(
			new ky({
				bw:'rcvld',
				gv:'try it',
				jz:[this, 'ks', 'db']
			})
		);

		fz.ba && kq.pop();

		for (let rv of kq)
		{
			this.fv.xq(rv, 'jt');
		}
	}
}

class tp extends dh
{
	constructor()
	{
		const fv = new ki('xg');

		super(fv);

		this.gj;
		this.ia;

		bo.io(this, ['bn']);
	}

	uz(jc)
	{
		switch (jc)
		{
			case 'bn':
				return this.kg();
		}
	}

	yg()
	{
		this.dj = new qo({
			bw:'auguq'
		});

		this.fv.xq(this.dj);

		this.im = new iq();

		this.im.xl(
			new va({
				bw:['jincq', 'rzxub'],
				nv:'9'
			})
		);

		this.fv.xq(this.im, 'im');

		this.xo = new iq();

		this.xo.dl(
			new va({
				nv:'One-Time Payment via PayPal'
			})
		);

		this.fv.xq(this.xo, 'xo');

		this.ra = new ky({
			bw:['rcvld', 'ayluo'],
			gv:'Pay with PayPal',
		});

		setTimeout(
			_ => this.ra.hm(this, 'rm', 'db')
		, 750);

		this.fv.xq(this.ra, 'jt');
	}

	zf()
	{
		this.ih();
	}

	rm()
	{
		if (this.ag)
			return;

		this.ag = true;

		this.dj.ij('loading');

		lo.ep().then(fx =>
		{
			if (fx) {
				this.wp(fx);

				this.dj.ij('waiting');
			}
			else {
				this.dj.ij('error');
			}

			this.ag = false;
		});
	}

	wp(fx)
	{
		this.ih();

		this.gj = openWindow(fx);

		this.ia = setInterval(
			_ => this.gj.closed && this.ih(),
		500);
	}

	ih()
	{
		if (this.gj)
		{
			this.gj.close();

			this.dj.ij('initial');

			clearInterval(this.ia);
		}
	}

	kg()
	{
		this.ih();

		setTimeout(_ => {
			this.lg('xt', this);
			this.wg();
		}, 900);
	}

	wg()
	{
		this.im.xl(
			new va({bw:'rzxub',nv:'Thank You!'}), true
		);

		this.xo.dl(
			new va({nv:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.ra.pt('btzak');
			this.ra.textContent = 'Done';
			this.ra.zd(this, 'yb', 'db');
		}, 200);
	}

	yb()
	{
		this.lg('yb', this);
	}

	jy()
	{
		super.jy();

		this.ih();
	}
}

class iq extends va
{
	constructor()
	{
		super();

		this.ke();
	}

	ke()
	{
		this.pm = new va({
			bw:'cvdkb'
		});

		this.xq(this.pm);
	}

	xl(yj, wa)
	{
		this.qg(yj, 0, wa);
	}

	dl(yj, wa)
	{
		this.qg(yj, null, wa);
	}

	qg(yj, wn, wa)
	{
		this.pm.xq(yj, wn);

		if (wa)
		{
			this.wa(wn != null);
		}
	}

	wa(on)
	{
		let nh, zk = this.pm;

		if (on)
		{
			zk.style.transform = 'translateY(-100%)';

			nh = 'translateY(0)';
		}
		else {
			nh = 'translateY(-100%)';
		}

		setTimeout(_ => {
			zk.style.transition = 'transform 300ms';

			setTimeout(
				_ => zk.style.transform = nh,
			10);

			setTimeout(_ => {
				zk.style.transition = null;
			}, 300);
		}, 10);
	}
}

class ow extends dh
{
	constructor(gp)
	{
		const fv = new cx;

		super(fv);

		this.lz(gp).then(
			so => this.kj(so)
		);
	}

	yg()
	{
		this.fv.pt('fwqgl');
	}

	kj(so)
	{
		this.fv.innerHTML = so;
	}

	lz(gp)
	{
		const vz = zt.zb('/html/policies/%s.html', gp);

		return lo.lz(vz);
	}
}

class ve extends dh
{
	constructor()
	{
		const fv = new ki('iw');

		super(fv);

		this.hq(py, et);

		bo.io(this, 'un');
	}

	yg()
	{
		this.hf = new ci({
			placeholder:'type keywords here..',
		});
		this.hf.hm(this, 'jg', ['wl']);
		this.hf.hm(this, 'it', ['ie', 'wk']);

		this.pa = new ky({
			bw:'qefoq',
			gv:'0',
			mk:'disabled',
			jz:[this, 'rk', 'db']
		});

		this.fr = new td(this);

		this.hz = new cl();
		this.hz.xk = new qw(this);

		this.bc = new ki(this.fv.nb('mx'));
		this.bc.xq(this.hf);
		this.bc.xq(this.pa);

		this.qt = new ki(this.fv.nb('vj'));
		this.qt.xq(this.hz);
		this.qt.xq(this.fr);
	}

	qx()
	{
		if (this.xy)
		{
			this.rf();

			if (this.ng.nc)
			{
				this.ft('');
				this.hz.ao();
			}
		}
	}

	om(cs)
	{
		this.hf.focus();

		if (cs == 'ye')
		{
			this.hf.select();
		}
	}

	zf()
	{
		if (this.fr.cj)
		{
			this.fr.jb.vr();
		}
	}

	uz(jc)
	{
		if (jc == 'un')
			return this.ge();
	}

	oj(fv)
	{
		this.qt.zj(fv);
	}

	jg()
	{
		if (this.xy)
		{
			this.rf();
		}
	}

	it()
	{
		let q = this.nu();

		switch (true)
		{
			case (!q):
				return;

			case (!kp.hc):
				return this.hz.pu('mu');

			case (this.ng.re):
			{
				if (!this.ng.sl)
					return;

				if (q == this.ng.nm)
				{
					return this.hz.pu('lw');
				}
			}
		}

		this.to(q);
	}

	el()
	{
		if (!kp.hc)
			return this.hz.pu('mu');

		this.sh(':all');
	}

	get tl()
	{
		return this.ng.tl;
	}

	rk()
	{
		this.te(new br);
	}

	to(q)
	{
		this.ng.search(q);
		this.hz.pu('wu');
	}

	rf()
	{
		this.ng.ld();
	}

	ge()
	{
		let q = zt.wh(kp.cf.currentTime);

		this.sh(q);
	}

	nu()
	{
		return this.hf.value;
	}

	ft(q)
	{
		this.hf.value = q;
	}

	sh(q)
	{
		this.ft(q);
		this.to(q);
	}

	get xy()
	{
		if (kp.hc && kp.ta != this.yz)
		{
			return Boolean(this.yz = kp.ta);
		}

		return false;
	}
}

class py
{
	constructor()
	{
		this.dm = dm.zu('ho', this.qh.bind(this));

		this.nm = '';
		this.uv = 0;
		this.qm = 0;
		this.ov = 500;
		this.sl = false;
		this.nc = false;
		this.zs = [];
		this.sm = 25;
	}

	qh(nd)
	{
		const tx = nd.tx;

		switch (nd.ez)
		{
			case 'wf':
				return this.op(tx);

			case 'xp':
				return this.jq(tx);

			case 'bg':
				return this.zy(tx);
		}
	}

	get re()
	{
		return this.sl || this.uf('qm') < 500;
	}

	get tl()
	{
		return this.zs.splice(0, this.sm);
	}

	ld()
	{
		this.dm.wd('xp', new zo(''));
	}

	search(q)
	{
		this.tn(q);

		this.dm.wd('wf', new zo(q));
	}

	zy(bg)
	{
		this.tw();

		this.xk.zy(bg.jc);
	}

	op(r)
	{
		this.tw();

		let lp = this.ov - this.uf('uv');

		(r.ry == 0) && (lp = 200);

		this.zs = r.qk;
		this.nc = (r.ry == 0);

		setTimeout(
			_ => this.xk.op(r.ry, r.ds),
		lp);
	}

	jq(n)
	{
		this.xk.jq(n);
	}

	me(nq)
	{
		this[nq] = Date.now();
	}

	uf(nq)
	{
		return Date.now() - this[nq];
	}

	tn(q)
	{
		this.nm = q;

		this.sl = true;

		this.me('uv');
	}

	tw()
	{
		this.sl = false;

		this.me('qm');
	}
}

class cl extends ki
{
	constructor()
	{
		super('ki', {
			bw:'yunze'
		});

		this.lb = {
			xe: 'no results match your query',
			wu: 'Searching...',
			lw: 'Searching still...',
			mu: 'You are not watching any video',
			pk: 'Invalid request',
			kf: 'This video has 0 comments',
			ls: 'Comments are disabled for this video.',
			am: 'check your internet connection',
			pw: 'service down for maintenance',
			ys: 'request timeout, try again',
			wy: 'feature not supported for this video',
			gs: 'invalid response from server, try again',
			dy: 'something is not working properly',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'maximum allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
		};
	}

	pu(ts)
	{
		this.vp(ts);
	}

	gn(...sk)
	{
		this.ct(...sk);
	}

	oi(xm, sk)
	{
		this.ct(
			zt.zb(xm, sk)
		);
	}

	ao()
	{
		this.innerHTML = '';
	}

	vp(jc)
	{
		let ek = this.lb[jc];

		if (!ek)
		{
			ek = this.lb.dy;
		}

		this.ct(ek);
	}

	ct(...zv)
	{
		const rz = document.createDocumentFragment();

		for (let iy of zv)
		{
			let mo = null;

			if (typeof iy == 'string')
			{
				mo = document.createTextNode(iy);
			}
			else {
				mo = iy.bf;
			}

			rz.appendChild(mo);
		}

		this.ao();
		this.appendChild(rz);

		this.xk.vh();
	}
}

class td extends ga
{
	constructor(ce)
	{
		super(ce);

		this.cj = false;
	}

	sy(cs)
	{
		this.jb.bj(cs.ta, cs.mp);

		cs.oc.co(this.jb);
	}

	lm(cs)
	{
		zt.fp(kp.cf, cs.mp);
	}

	mn(sj)
	{
		const qi = [];

		for (let hb of sj)
		{
			let fu = new ki('rg');

			for (let i = 0; i < hb.length; i++)
			{
				const vk = hb[i];

				if (vk.vg > 0)
				{
					const n = i + vk.vg;

					for (let k = i; k < n; k++)
					{
						hb[k].sd = hb.slice(k + 1, n + 1).some(dv => !dv.hidden);
					}
				}

				fu.xq(
					new mt(vk)
				);
			}

			qi.push(fu);
		}

		return qi;
	}

	get jb()
	{
		if (!this.cj)
		{
			this.cj = true;
			this.yh = new wb;
		}

		return this.yh;
	}
}

const et = function(bm)
{
	return {
		jq(n)
		{
			let fy = n;

			if (n < 0) switch (n)
			{
				case -2:
					fy = '∞';
					break;

				case -1:
					fy = '∅';
					break;
			}

			bm.pa.mg(fy);

			if (0 < n && n < 1000)
			{
				bm.pa.ij('normal')
			}
			else {
				bm.pa.ij('disabled');
			}
		},

		op(ry, p)
		{
			this.jq(p);

			if (ry > 0)
			{
				bm.fr.xi();

				return bm.oj(bm.fr);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return bm.hz.pu('kf');

				case -1:
					return bm.hz.pu('ls');

				case -2:
					return bm.hz.pu('xe');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const ju = new vb({
						nv:zt.zb('%s comments', p),
						jz:[bm, 'el', 'db']
					});

					return bm.hz.gn('Nothing found in ', ju);
				}

				return bm.hz.oi('Nothing found in %s comments', p);
			}

			bm.hz.pu('xe');
		},

		zy(yq)
		{
			bm.hz.pu(yq);
		}
	}
}

const qw = function(bm)
{
	return {
		vh()
		{
			bm.oj(bm.hz);
		}
	}
}

class wb extends ki
{
	constructor()
	{
		super('wb');

		this.jm = this.children[0];

		this.jm.onload = () => {
			try {
				const hl = this.jm.contentDocument.body;

				this.cf = hl.querySelector('video');

				hl.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.yz;
		this.bl;
	}

	bj(ta, mp)
	{
		if (ta != this.yz) {
			this.jm.src = zt.zb(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [ta, mp]
			);
		}
		else if (this.cf) {
			zt.fp(this.cf, mp);
		}

		this.yz = ta;
		this.bl = mp;
	}

	vr()
	{
		if (this.zx)
		{
			this.ub();
		}
	}
}

class mt extends ki
{
	constructor(vk)
	{
		const ma = zc.kv('mt', vk);

		super(ma);

		this.ke(vk);
	}

	ke(vk)
	{
		this.yd(vk);
		this.mc(vk);

		if (vk.dp)
		{
			if (vk.sd)
				this.pt('sxdxv');

			if (vk.hidden)
				this.pt('ndkja');
		}

		if (vk.ps)
		{
			this.pt('wafeo');

			this.xq(
				new ki('la', {bw:'zkbzt'}), 'ml'
			);
		}
	}

	tk()
	{
		return this;
	}

	co(jb)
	{
		this.xq(jb, 'iu');
	}

	yd(vk)
	{
		const aj = vk.hv;

		const xn = aj.replace(
			jx[6], zt.zb('s%s-', vk.dp ? 48 : 80)
		);

		this.xq(new qb({
			af:xn,
			nt:aj,
		}), 'od');
	}

	mc(vk)
	{
		const uj = new va({
			bw:'jxngd',
			gi: {
				dir:vk.sa,
				lang:vk.hp
			}
		});

		const oh = Object.keys(vk.th);

		if (oh.length)
		{
			const ch = zt.gu(vk.pn, oh);

			for (let x of ch)
			{
				if (zt.uc(x))
				{
					const a = this.eq(vk.th[x]);

					uj.xq(a);
				}
				else {
					const s = zc.em(x);

					uj.appendChild(s);
				}
			}
		}
		else {
			uj.textContent = vk.pn;
		}

		if (vk.dp && !vk.ps)
		{
			uj.pt('bxyly');

			uj.addEventListener('click',
				e => uj.hw('bxyly')
			);
		}

		this.xq(uj, 'iu');
	}

	eq(x)
	{
		let a;

		if (x.hg == 'ad' && x.ta != kp.ta)
		{
			x.hg = 'qa';
		}

		switch (x.hg)
		{
			case 'ad':
				a = new bi(x.nv, x.mp);
				a.hm(this, 'lm', 'db');
				return a;

			case 'qa':
				a = new kd(x.nv, x.ta, x.mp);
				a.hm(this, 'sy', 'db');
				return a;

			case 'gk':
				return new vb({
					nv:x.nv,
					zi:x.fx
				});
		}
	}
}

class kd extends vb
{
	constructor(nv, ta, mp)
	{
		super({
			bw:'bqbgd',
			nv:nv
		});

		this.ta = ta;
		this.mp = mp;
	}

	get oc()
	{
		return this.lg('tk');
	}
}

class bi extends vb
{
	constructor(nv, mp)
	{
		super({
			bw:'bqbgd',
			nv:nv
		});

		this.mp = mp;
	}
}

let ze;
let jf;
let an;
let dm;
let lo;
let bo;
let fz;
let jv;
let ql;
let rl;
let zc;

if (kp.dx)
{
	ze = new bz;
	jf = new js;
	an = new xh;
	dm = new ol;
	lo = new gd;
	bo = new da;
	rl = new ah;

	lo.aw().then(async ac =>
	{
		if (ac.mk.og)
		{
			await ze.qv();
		}

		zc = new kl(ac.nr);

		jv = new ex(ac.mk);

		ql = new ca;

		lo.mr();

		ze.ti();
	});

	an.we && rl.rc();
}

const jx = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];