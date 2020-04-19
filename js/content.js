/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const wk = {};

for (let su of 'object array string regex date math type std'.split(' '))
{
	wk[su] = {};
}

wk.xp = function(qg, cb)
{
	return qg != undefined && qg.constructor === cb;
}

wk.cr = function()
{
	return wk.lg(9);
}

wk.cu = function(ia)
{
	return nf[0].test(ia);
}

wk.xm = function(vl)
{
	return Object.keys(vl).length == 0;
}

wk.ds = function(zq, vl)
{
	for (let tl in vl)
	{
		const fy = vl[tl];

		if (tl == zq) return fy;
		if (fy == zq) return tl;
	}
}

wk.vn = function(vl, fu)
{
	let ia = '';

	for (let tl in vl)
	{
		ia += tl + '=' + vl[tl] + fu;
	}

	return ia.slice(0, -1);
}

wk.zi = function(pw, zp, th)
{
	const xq = zp + 1;

	return th.slice(xq, xq + pw);
}

wk.hb = function(th)
{
	return th[th.length - 1];
}

wk.yj = function(iv, xy)
{
	iv += '?';

	for (let tl in xy)
	{
		iv += tl + '=' + encodeURIComponent(xy[tl]) + '&';
	}

	return iv.slice(0, -1);
}

wk.xf = function(ia, xz)
{
	if (wk.xp(xz, Array))
	{
		let i = 0;

		return ia.replace(nf[1], _ => xz[i++]);
	}

	return ia.replace('%s', xz);
}

wk.jt = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

wk.ew = function(ia, vm)
{
	const zv = wk.xf('(%s)', vm.join('|'));

	return ia.split(new RegExp(zv)).filter(s => s !== '');
}

wk.sj = function(ia)
{
	return ia.toUpperCase();
}

wk.bx = function(ia)
{
	return ia.toLowerCase();
}

wk.ki = function(ia, rl)
{
	if (!rl)
	{
		ia = ia.toLowerCase();
	}

	return ia[0].toUpperCase() + ia.slice(1);
}

wk.fo = function(ok, ia)
{
	return ia.match(ok) || [];
}

wk.kw = function(ok, ia)
{
	if (ok.global) return '';

	const m = wk.fo(ok, ia);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

wk.cs = function()
{
	return Math.floor(Date.now() / 1000);
}

wk.wc = function(os)
{
	return os < wk.cs();
}

wk.io = function(q)
{
	const ni = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = wk.kw(nf[2], q);

	return Date.now() + (x[0] * ni[x[1]] * 1000);
}

wk.vq = function(mp)
{
	let x = mp.split(':'),
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

wk.ej = function(au)
{
	let th = [];

	th.push(au / 3600);

	au %= 3600;

	th.push(au / 60);

	th.push(au % 60);

	th = th.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return th.join(':').replace(nf[3], '');
}

wk.lg = function(xj)
{
	return Math.random().toString().slice(2, xj + 2);
}

wk.vz = function(td, so)
{
	const aq = Math.random() * (so - td) + td;

	return Math.floor(aq);
}

wk.pf = function(x, a, b)
{
	return x >= a && x <= b;
}

wk.ws = function(a, b)
{
	return 100 * (a / b);
}

wk.sh = function()
{
	let bn, lc = 0;

	try {
		bn = [sd, bs, mk];
	}
	catch (e) {
		bn = [nh, mk];
	}

	bn.forEach(
		je => lc += je.toString().length
	);

	return lc != 2035;
}

class mr
{
	constructor(rn, tz)
	{
		this.rn = rn;
		this.tz = tz;
	}
}

class ky
{
	constructor(pl, rn, tz)
	{
		this.pl = pl;
		this.vc = new mr(rn, tz);
	}
}

class zs extends Array
{
	constructor(yw)
	{
		super();

		if (yw != null)
		{
			super.push(yw);
		}
	}

	push(la)
	{
		return !this.includes(la) && super.push(la);
	}
}

class tr
{
	constructor(qw, rd)
	{
		const je = qw.status;

		this.je = je;
		this.ig = false;
		this.rq = false;
		this.sm = null;
		this.tz = null;

		switch (rd)
		{
			case 'error':
				return this.ya('tw');

			case 'timeout':
				return this.ya('ot');

			default:
			{
				this.ig = (je == 200);

				if (je >= 500)
				{
					return this.ya('xo');
				}

				try {
					this.tz = JSON.parse(qw.responseText);
				}
				catch (e) {
					this.tz = qw.responseText;
				}
			}
		}
	}

	mf(xh)
	{
		this.sm = xh;
	}

	ya(xh)
	{
		this.mf(xh);

		this.rq = true;
	}
}

class yu
{
	constructor(tz, om)
	{
		Object.assign(this, tz);

		Object.defineProperty(this, 'om', {
			value: om
		});
	}

	set(tl, fy)
	{
		this[tl] = fy;

		this.rg();
	}

	rg()
	{
		return yh.set(this.om, this);
	}
}

class mk extends yu
{
	constructor(tz, om)
	{
		super(tz, om);
	}

	get pm()
	{
		return Boolean(this.ch)
	}

	get ch()
	{
		return this[0];
	}

	get xd()
	{
		return this[1];
	}

	get ck()
	{
		return wk.wc(this.xd);
	}

	get nx()
	{
		const fd = this.xd.toString().split('').pop();

		return Boolean(+fd);
	}

	set ch(tl)
	{
		this.set(0, tl);
	}

	set xd(re)
	{
		this.set(1, re);
	}

	get sq()
	{
		let s = this.xd.toString(),
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

class oz
{
	constructor(ke)
	{
		if (ke)
		{
			this.jy();
		}
	}

	iz(qx, ks, ox)
	{
	}

	jy()
	{
		chrome.runtime.onMessage.addListener(
			this.iz.bind(this)
		);
	}
}

class pe extends oz
{
	constructor()
	{
		super(false);
	}

	iz(qx, ks, ox)
	{
		const tz = qx.tz;

		switch (qx.rn)
		{
			case 'qj':
				return this.nb(tz);
		}
	}

	nb(qj)
	{
		if (qj == 'kq')
		{
			im.xq();
		}
	}

	ze()
	{
		return this.ns('ze');
	}

	ti(sn)
	{
		return this.ns('ti', sn);
	}

	gi(ch)
	{
		return this.ns('gi', ch);
	}

	wj()
	{
		return this.ns('wj');
	}

	ho()
	{
		return this.ns('ho');
	}

	ns(rn, tz)
	{
		const qx = new mr(rn, tz);

		return new Promise(ox =>
		{
			try {
				chrome.runtime.sendMessage(qx, ox);
			}
			catch (e) {
			}
		});
	}
}

class ne extends oz
{
	constructor()
	{
		super(true);
	}

	iz(qx, ks, ox)
	{
		const po = function(...xz)
		{
			try {
				ox(...xz);
			}
			catch (e) {
			}
		};

		bi.dl.then(_ =>
		{
			const tz = qx.tz;

			switch (qx.rn)
			{
				case 'ze':
					bi.ze().then(po);
				break;

				case 'ti':
					bi.ti(tz).then(po);
				break;

				case 'gi':
					bi.gi(tz).then(po);
				break;

				case 'wj':
					es.ad.wj(tz).then(po);
				break;

				case 'ho':
					bi.bk();
				break;
			}
		});

		return true;
	}
}

class ci
{
	get(tl)
	{
		return new Promise(zk =>
		{
			try {
				chrome.storage.local.get(tl, ib =>
					zk(typeof tl == 'string' ? ib[tl] : ib)
				);
			}
			catch (e) {
			}
		});
	}

	set(tl, fy)
	{
		let tz;

		if (typeof tl == 'object')
		{
			tz = tl;
		}
		else {
			tz = {[tl]:fy};
		}

		return new Promise(mo =>
		{
			try {
				chrome.storage.local.set(tz, mo);
			}
			catch (e) {
			}
		});
	}

	ip()
	{
		return new Promise(mo =>
		{
			try {
				chrome.storage.local.clear(mo);
			}
			catch (e) {
			}
		});
	}
}

class udepc
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			ky => this.pj(ky)
		);

		Port.onDisconnect.addListener(
			_ => this.nl()
		);

		this.Port = Port;

		this.br = {
		};

		this.fx = false;
	}

	iz(m)
	{
	}

	dn(pl, rn, tz)
	{
		const uj = new ky(pl, rn, tz);

		if (!this.fx)
		{
			this.Port.postMessage(uj);
		}
	}

	pj(x)
	{
		this.aw(x.pl).iz(x.vc);
	}

	aw(pl)
	{
		return this.br[pl] || this;
	}

	km(pl, iz, nl)
	{
		return this.br[pl] = new jm(this, pl, iz, nl);
	}

	nl()
	{
		this.fx = true;

		for (let pl in this.br)
		{
			this.aw(pl).nl();
		}
	}
}

class mw extends udepc
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	iz(qx)
	{
		const tz = qx.tz;

		switch (qx.rn)
		{
			case 'gd':
				return qv.vb(tz);
		}
	}

	km(pl, iz, nl)
	{
		this.dn(null, 'km', pl);

		return super.km(pl, iz, nl);
	}

	nl()
	{
		super.nl();

		im.bu();
	}
}

class jx extends udepc
{
	constructor(er)
	{
		super(er);
	}

	iz(qx)
	{
		switch (qx.rn)
		{
			case 'km':
				return this.km(qx.tz);
		}
	}

	km(pl)
	{
		const dz = super.km(pl);

		switch (pl)
		{
			case 'el':
				return new mx(dz);
		}
	}
}

class kl
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			mj => this.xt(mj)
		);

		this.bd = [];
	}

	xt(er)
	{
		this.bd.push(
			new jx(er)
		);
	}

	fg(kz)
	{
		for (let er of this.bd)
		{
			er.dn(null, 'gd', kz);
		}
	}
}

class jm
{
	constructor(er, pl, iz, nl)
	{
		this.er = er;

		this.pl = pl;

		if (iz)
		{
			this.iz = iz;
		}

		if (nl)
		{
			this.nl = nl;
		}
	}

	dn(rn, tz)
	{
		this.er.dn(this.pl, rn, tz);
	}

	iz(m)
	{
	}

	nl()
	{
	}
}
class mu
{
	kx(zc)
	{
		this.zc = zc;
	}

	iw(cm, ks)
	{
		if (cm in this && this != ks)
		{
			return this[cm](ks);
		}

		if (this.av)
		{
			return this.av.iw(cm, ks);
		}
	}

	get av()
	{
		return this.zc || this.hf;
	}
}

const kb = function(xa, mt)
{
	return new mt(xa);
}

class ys extends mu
{
	constructor(eh)
	{
		super();

		this.ry = eh;

		this.nj('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	gc(wm)
	{
		if (typeof wm == 'string')
		{
			wm = [wm];
		}

		this.ry.classList.add(...wm);
	}

	hl(wm)
	{
		this.ry.classList.remove(wm);
	}

	et(wm)
	{
		this.ry.classList.contains(wm) ? this.hl(wm)
												: this.gc(wm);
	}

	hs()
	{
		this.ry.remove();
	}

	nj(...dm)
	{
		for (let x of dm) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.ry[x] instanceof Function)
			{
				this[x] = this.ry[x].bind(this.ry);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.ry[x];
					},
					set(v) {
						this.ry[x] = v;
					}
				});
			}
		}
	}
}

class sb extends ys
{
	constructor(sz, dk)
	{
		super(
			typeof sz == 'string' ? xe.rt(sz) : sz
		);

		this.hf = null;
		this.qp = [];
		this.fc = {};
		this.mq = {};

		if (dk)
		{
			if (dk.vu)
			{
				this.gc(dk.vu);
			}

			if (dk.ui)
			{
				this.textContent = dk.ui;
			}

			if (dk.dy)
			{
				this.rp(...dk.dy);
			}

			if (dk.cf)
			{
				for (let gf in dk.cf)
				{
					this.setAttribute(gf, dk.cf[gf]);
				}
			}

			if (dk.import)
			{
				for (let jc of dk.import)
				{
					this.nj(jc);
				}
			}
		}
	}

	gk(xn, sw)
	{
		if (xn.hf)
		{
			if (xn.hf == this)
				return;

			xn.ma();
		}

		xn.hf = this;
		this.qp.push(xn);

		switch (typeof sw)
		{
			case 'string':
				return this.wi(sw).appendChild(xn.ry);

			case 'number':
				return this.ry.prepend(xn.ry);

			default:
				return this.appendChild(xn.ry);
		}
	}

	wi(lp)
	{
		return this.querySelector('#' + lp);
	}

	bm(dy, cm, bp)
	{
		this.dy = {};

		this.rp(dy, cm, bp);
	}

	rp(dy, cm, bp)
	{
		if (typeof bp == 'string')
		{
			bp = [bp];
		}

		for (let yl of bp)
		{
			if (!this.mq[yl])
			{
				this.mq[yl] = new Map;

				this.addEventListener(
					wk.ds(yl, sb.ji), e => this.fh(e)
				);
			}

			this.mq[yl].set(dy, cm)
		}
	}

	qf(yl)
	{
		const mq = this.mq[yl];

		if (mq)
		{
			for (let [dy, cm] of mq)
			{
				dy.iw(cm, this);
			}
		}
	}

	lf()
	{
		this.hidden = true;
	}

	up()
	{
		this.hidden = false;
	}

	ip()
	{
		let i = this.qp.length;

		while (i--)
		{
			this.qp[i].ma();
		}
	}

	ma()
	{
		this.hf.ek(this);
	}

	ol(xn)
	{
		this.appendChild(xn.ry);
	}

	ek(xn)
	{
		xn.hf = null;

		this.qp.splice(
			this.qp.indexOf(xn), 1
		);

		xn.ry.remove();
	}

	fh(e)
	{
		e.stopPropagation();

		this[wk.ds(e.type, sb.ji)](e);
	}

	xg()
	{
		this.qf('xg');
	}
}

sb.ji = {
	xg:'click',
	rv:'paste',
	hg:'keyup',
	xi:'keyup',
	hu:'focus',
};

class jp extends sb
{
	constructor(dk)
	{
		super('jp', dk);
	}
}

class oi extends sb
{
	constructor()
	{
		super('oi');

		this.nj('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			tm.sp(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class qr extends oi
{
	constructor(mb)
	{
		super();

		this.mb = mb;

		this.da;

		this.addEventListener('scroll',
			_ => this.on()
		);
	}

	jh()
	{
	}

	al()
	{
		this.ip();
		this.lz();
		this.pg();

		this.fm();
	}

	on()
	{
		if (this.bz && this.wn)
		{
			this.pg();
		}
	}

	lz()
	{
		this.da = this.jh(this.mb.go);
	}

	pg()
	{
		for (let xn of this.da)
		{
			this.gk(xn);
		}

		this.lz();
	}

	fm()
	{
		this.hl('bdjvn');

		if (this.iu)
		{
			this.gc('bdjvn');
		}
	}

	get iu()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get bz()
	{
		return this.da.length;
	}

	get wn()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class nr extends sb
{
	constructor(un, qi)
	{
		super('nr');

		this.nj('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.tk = un;

		this.rh(un, qi);

		this.ps();
		this.ez();
	}

	ik(xw)
	{
		for (let k in xw)
		{
			this.style[k] = xw[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	rh(un, qi)
	{
		const x = window.innerHeight - qi;
		const y = window.innerWidth - un - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = un + 'px';
	}

	ps()
	{
		let yi = this.querySelectorAll('[resize]');

		for (let yn of yi)
		{
			yn.addEventListener('pointerdown',
				e => this.dr(e, 'si')
			);
		}
	}

	ez()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.dr(e, 'ue')
		);
	}

	dr(e, cm)
	{
		if (e.which == 1)
			this[cm](e);
	}

	it()
	{
		return this.getBoundingClientRect();
	}

	si(e)
	{
		const nz = e.target.getAttribute('resize'),
				vt = nz.includes('w'),
				me = nz.includes('n'),
				zt = nz.includes('e');

		const lr = this.it(),
				tk = this.tk,
				az = 56,
				dc = ce.kp,
				ec = window.innerHeight - az,
				hk = e.clientX,
				fe = e.clientY,
				mi = lr.x,
				zu = lr.y,
				wp = lr.width;

		let bt = 0,
				uz = 0,
				py = mi,
				za = zu,
				ng = wp;

		let ul = (e) =>
		{
			bt = e.clientX - hk;
			uz = e.clientY - fe;

			if (me)
			{
				za = zu + uz;

				(za < 0) && (za = 0);

				(za > ec) && (za = ec);

				this.style.top = za + 'px';
			}

			if (zt)
			{
				ng = wp + bt;

				(e.clientX > dc) && (ng = dc - mi);

				(ng < tk) && (ng = tk);

				this.style.width = ng + 'px';
			}

			if (vt)
			{
				py = mi + bt;
				ng = wp - bt;

				if (py < 0)
				{
					py = 0;
					ng = wp + mi;
				}

				if (ng < tk)
				{
					py = mi + (wp - tk);
					ng = tk;
				}

				this.style.width = ng + 'px';
				this.style.left = py + 'px';
			}
		};

		let oy = () => {
			(bt != 0 || uz != 0) && this.wl();
		};

		this.gv(ul, oy);
	}

	ue(e)
	{
		let mi = this.offsetLeft,
			hk = e.clientX,
			bt = 0;

		let ul = (e) => {
			bt = e.clientX - hk;
			this.style.left = mi + bt + 'px';
		};

		let oy = () => {
			(bt != 0) && this.wl();
		};

		this.gv(ul, oy);
	}

	gv(ul, oy)
	{
		tm.kg(true);

		document.onpointermove = (e) => ul(e);

		document.onpointerup = (e) => {
			tm.kg(false);
			oy();
			document.onpointerup = document.onpointermove = null;
		};
	}

	wl()
	{
		if (this.hidden) return;

		let lr = this.it();

		let xw = {
			width: wk.ws(lr.width, window.innerWidth),
			left: wk.ws(lr.x, window.innerWidth),
			top: wk.ws(lr.y, window.innerHeight),
		};

		this.ik(xw);

		if ('tg' in this.fc)
		{
			this.fc.tg(xw);
		}
	}
}

class wx extends nr
{
	constructor(un, qi)
	{
		super(un, qi);

		this.addEventListener('wheel', tm.sp);
	}
}

class ou extends sb
{
	constructor(dk)
	{
		super('ou', dk);

		this.nj('src');

		if (dk.ct)
		{
			this.addEventListener('error', e => this.src = dk.ct, {once:true});
		}

		this.src = dk.ca;
	}
}

class fl extends sb
{
	constructor(sz, dk)
	{
		super(sz, dk);

		this.ve = [];
		this.jl = false;
	}

	hg(e)
	{
		if (e.key == 'Enter')
		{
			this.qf('xi');
		}

		this.qf('hg');
	}

	rv(e)
	{
		setTimeout(
			_ => this.qf('rv'),
		10);
	}

	hu(e)
	{
		this.qf('hu');
	}

	get yv()
	{
		if (!this.jl)
		{
			const yg = Date.now();

			const xj = this.ve.push(yg);

			if (xj > 3)
			{
				if (yg - this.ve[0] < 2000)
				{
					this.jl = true;

					setTimeout(
						_ => this.jl = false,
					20 * 1000);
				}
				else {
					this.ve.length = 0;
				}
			}
		}

		return this.jl;
	}
}

class lt extends fl
{
	constructor(dk)
	{
		super('lt', dk);

		this.nj('placeholder', 'focus', 'select');

		if (dk && dk.placeholder)
		{
			this.placeholder = dk.placeholder;
		}
	}

	get value()
	{
		return this.ry.value.trim();
	}

	set value(s)
	{
		this.ry.value = String(s).trim();
	}
}

class tj extends fl
{
	constructor(dk)
	{
		super('tj', dk);

		this.rh();
	}

	rh()
	{
		this.wo = new lt();

		this.gk(this.wo, 'vw');

		this.rf = new fq();

		this.gk(this.rf, 'vw');

		this.md = this.wi('md');
	}

	focus()
	{
		this.wo.focus();
	}

	get value()
	{
		return this.wo.value;
	}

	wg(zf, ui)
	{
		this.rf.lh(zf);

		this.md.textContent = ui || '';
	}
}

class co extends sb
{
	constructor(sz, dk)
	{
		super(sz, dk);

		this.lh(dk.zf || 'initial');
	}

	get sx()
	{
		return this.zf == 'disabled';
	}

	get hr()
	{
		return this.zf == 'selected';
	}

	lh(zf)
	{
		this.zf = zf;

		this.setAttribute('state', zf);
	}

	fh(e)
	{
		if (!this.sx)
		{
			super.fh(e);
		}
	}
}

class ab extends co
{
	constructor(dk)
	{
		super('ab', dk);

		if (dk.ye)
		{
			this.ny(dk.ye);
		}

		if (dk.or)
		{
			this.ph(dk.or);
		}
	}

	ny(ui)
	{
		this.textContent = ui;
	}

	ph(sz)
	{
		const or = xe.rt(sz);

		this.appendChild(or);
	}
}

class rz extends ab
{
	constructor(dk)
	{
		super(dk);

		this.value = dk.value;
	}

	xg()
	{
		if (this.hr)
		{
			this.lh('initial');
		}
		else {
			this.lh('selected');
		}

		super.xg();
	}
}

class dp extends sb
{
	constructor(dk)
	{
		super('dp', dk);

		if (dk.lb)
		{
			this.setAttribute('href', dk.lb);
		}
	}
}

class fq extends sb
{
	constructor(dk)
	{
		super('fq', dk);
	}

	lh(zf)
	{
		this.setAttribute('state', zf);
	}
}

class rk extends mu
{
	constructor(xn, zx)
	{
		super();

		this.xn;

		this.jn;

		this.children = [];

		this.cj(xn, zx);
	}

	cj(xn, zx)
	{
		xn.kx(this);

		if (zx)
		{
			xn.fc = new kb(this, zx);
		}

		this.xn = xn;

		this.no();
	}

	yx(yq, sc)
	{
		this.jn = new yq;

		if (sc)
		{
			this.jn.fc = new kb(this, sc);
		}

		this.ak();
	}

	ak()
	{
	}

	no()
	{
	}

	ur(ks)
	{
		if (this.gh)
		{
			this.gh.ur(ks);
		}

	}

	qc(ks)
	{
		if (this.gh)
		{
			this.gh.qc(ks);
		}

	}

	ty(ks)
	{
		if (this.gh)
		{
			this.gh.ty(ks);
		}

	}

	oa(ks)
	{
		if (this.gh)
		{
			this.gh.oa(ks);
		}

	}

	rs(lp)
	{
	}

	up(sf, ks)
	{
		this.xn.appendChild(sf.xn.ry);
	}

	pv(sf)
	{
		this.js.to(sf);
	}

	wb()
	{
		this.js.gy();
	}

	to(qs, tq)
	{
		qs.kx(this);

		qs.ur();

		this.children.push(qs);

		this.xn.gk(qs.xn, tq);

		qs.qc();
	}

	gy()
	{
		this.children.pop().gs();
	}

	get js()
	{
		let lo = this;

		while (lo.zc)
		{
			lo = lo.zc;
		}

		return lo;
	}

	get hj()
	{
		return this.children.length;
	}

	get gh()
	{
		return wk.hb(this.children);
	}

	gs()
	{
		this.xn.hs();

		for (let qs of this.children)
		{
			qs.gs();
		}
	}
}

class ow extends rk
{
	constructor()
	{
		const xn = new sb('ko');

		super(xn);
	}

	no()
	{
		this.yf = new ab({
			vu:['bkbvb', 'pycwu'],
			or:'zl',
			zf:'hidden',
			dy:[this, 'cg', 'xg']
		});

		this.xn.gk(this.yf);
	}

	cg()
	{
		this.gy();

		this.dv();
	}

	ms()
	{
		this.yf.lh('hidden');
	}

	to(qs)
	{
		super.to(qs, 'vi');

		this.dv();
	}

	dv()
	{
		if (this.hj > 1)
		{
			this.yf.lh('initial');
		}
		else {
			this.yf.lh('hidden');
		}
	}




}

wk.wz = function(ta, hc)
{
	ta.currentTime = hc;

	if (ta.paused)
	{
		ta.play();
	}
}

function openWindow(iv)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = wk.vn(q, ',');

	return window.open(iv, '', q);
}

class vx
{
	constructor(q)
	{
		Object.assign(this, {
			hm: q,
			fs: lj.fs,
			rm: lj.ta.duration,
			zd:lj.ta.currentTime
		});
	}
}

class zw
{
	constructor()
	{
		this.uq = navigator.platform.includes('Mac');
	}

	get kp()
	{
		return !this.uq ? document.body.clientWidth : window.innerWidth;
	}
}

const lj = {
	get nk()
	{
		return ['www', 'music'].includes(this.qb);
	},

	get ix()
	{
		return location.pathname == '/watch';
	},

	get ta()
	{
		if (!this.pk)
		{
			this.pk = tm.querySelector('video');
		}

		return this.pk || document.createElement('video');
	},

	get fs()
	{
		return wk.kw(nf[4], location.href);
	},

	get qb()
	{
		return location.host.split('.')[0];
	}
}

class ay
{
	constructor(at)
	{
		this.qz = document.createElement('div');

		this.xk = {};

		for (let pa of this.kr(at).children)
		{
			const xl = pa.getAttribute('protoid');

			if (xl) {
				pa.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.xk[xl] = pa.outerHTML;
		}
	}

	rt(sz, ym)
	{
		let vy = this.xk[sz];

		if (ym)
		{
			vy = vy.replace(nf[5], (_, tl) => ym[tl]);
		}

		return this.kr(vy);
	}

	ft(ui)
	{
		const s = document.createElement('span');

		s.textContent = ui;

		return s;
	}

	kr(vy)
	{
		this.qz.innerHTML = vy;

		return this.qz.children[0];
	}
}

class yc extends ys
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.ly = 'fullscreenchange';
			this.ja = 'fullscreenElement';
		}
		else {
			this.ly = 'webkitfullscreenchange';
			this.ja = 'webkitFullscreenElement';
		}

		this.hq();

		document.addEventListener(
			this.ly, _ => this.hq()
		);
	}

	get ed()
	{
		return Boolean(document[this.ja]);
	}

	cw()
	{
		this.gc('imuhk');
	}

	kg(ud)
	{
		ud ? this.gc('oryiy')
			: this.hl('oryiy');
	}

	sp(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	hq()
	{
		this.setAttribute('cs-fullscreen', this.ed);
	}
}

class nh
{
	constructor()
	{
		this.nc = {
			ao: '/html/svg/1.svg',
			tn: '/html/svg/2.svg'
		}
	}

	cd()
	{
		wk.sh() && lk.ho();
	}

	async ju()
	{
		dt = await yh.get('1');

		dt = new mk(dt);
	}

	ra(lp)
	{
		return chrome.runtime.getURL(this.nc[lp]);
	}
}

class sd extends rk
{
	constructor(zf)
	{
		const xn = new wx(460, 480);

		super(xn, na);

		this.yx(be);

		qv.qk(this, [
			'sg', 'he', 'yr', 'hw'
		]);

		this.zh = false;

		switch (true)
		{
			case (zf.oq):
				return this.to(new gx);

			case (zf.uc):
				return this.to(new af);

			default:
				this.li();
		}
	}

	no()
	{
		this.xn.gk(new ab({
			vu:['bkbvb', 'sbfyp'],
			or:'od',
			dy:[this, 'bl', 'xg']
		}));

		document.body.appendChild(this.xn.ry);
	}

	ak()
	{
		this.jn.it.then(
			xw => xw && this.xn.ik(xw)
		);
	}

	rs(lp)
	{
		switch (lp)
		{
			case 'sg':
				return this.xq('dx');

			case 'he':
				return this.xq('dh');

			case 'yr':
				return this.bl();

			case 'hw':
				return this.wq();
		}
	}

	li()
	{
		this.to(new tc);
	}

	wq()
	{
		this.gy();

		this.li();
	}

	xq(ks)
	{
		this.gh.ur(ks);

		this.xn.up();

		this.gh.qc(ks);

		this.zh = true;
	}

	bl(ks)
	{
		this.gh.ty(ks);

		this.xn.lf();
	}

	bu()
	{
		this.to(new iq);
	}
}

class be
{
	get it()
	{
		return yh.get('appPosition');
	}

	vg(vu)
	{
		(vu.width > 100) && (vu.width = 100);

		(vu.left < 0) && (vu.left = 0);

		if (vu.left + vu.width > 100)
		{
			vu.left = 100 - vu.width;
		}

		yh.set('appPosition', vu);
	}
}

const na = function(xa)
{
	return {
		tg(xw)
		{
			xa.jn.vg(xw);
		}
	}
}

class hv
{
	static zg(tl)
	{
		return tl == 'Enter';
	}

	static zr(tl)
	{
		return ['Control','Meta'].includes(tl);
	}
}

class nu
{
	constructor()
	{
		window.addEventListener('keydown', e => this.cl(e), true);
	}

	cl(e)
	{
		this.wr(e);

		const je = this.je;

		if (this.dw)
		{
			if (je == 'KeyS')
			{
				e.preventDefault();

				return qv.vb('sg');
			}

			if (je == 'KeyE' && lj.ix)
			{
				e.preventDefault();

				return qv.vb('he');
			}

			if (je == 'KeyX' && tm.ed)
			{
				return qv.vb('yr');
			}
		}

		if (je == 'Escape')
		{
			return qv.vb('yr');
		}
	}

	wr(e)
	{
		this.je = e.code;

		this.dw = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get pn()
	{
		return this.je == 'KeyV';
	}
}

class vj
{
	constructor()
	{
		this.lu = {};
	}

	vb(kz)
	{
		let gl = this.tx(kz);

		for (let lm of gl)
		{
			lm.rs(kz);
		}
	}

	qk(lm, qv)
	{
		if (typeof qv == 'string')
		{
			qv = [qv];
		}

		for (let lp of qv)
		{
			this.tx(lp).push(lm);
		}
	}

	tx(kz)
	{
		return this.lu[kz] || (this.lu[kz] = new zs);
	}
}

class yo extends rk
{
	constructor()
	{
		const xn = new sb('ij');

		super(xn);
	}

	zb()
	{
		lk.yk();

		this.wb();
	}
}

class gx extends rk
{
	constructor()
	{
		super(
			new sb('se')
		);
	}

	no()
	{
		const zo = new ab({
			vu:'nrudy',
			ye:'Update Now',
			dy:[this, 'hx', 'xg']
		});

		this.xn.gk(zo, 'qu');
	}

	hx()
	{
		window.open('https://cs.lett.app/update');
	}
}

class vk extends rk
{
	constructor()
	{
		const xn = new sb('oj');

		super(xn);
	}

	no()
	{
		this.xn.gk(new ab({
			vu:['pycwu', 'bkbvb'],
			or:'zl',
			dy:[this, 'wb', 'xg']
		}));
	}
}

class iq extends rk
{
	constructor()
	{
		const xn = new sb('hi');

		super(xn);
	}
}

class af extends rk
{
	constructor()
	{
		const xn = new sb('sb');

		super(xn);

		this.oc();

		qv.qk(this, [
			'ar', 'pq'
		]);
	}

	async rs(lp)
	{
		await bi.ju();

		switch (lp)
		{
			case 'ar':
				return this.oc();

			case 'pq':
				return this.mg();
		}
	}

	oc()
	{
		if (!dt.ch)
		{
			return this.to(new kv);
		}

		if (!dt.nx)
		{
			return this.to(new fk);
		}

		this.db();
	}

	wu()
	{
		this.db();
	}

	mg()
	{
		!im.zh && this.db();
	}

	db()
	{
		qv.vb('hw');
	}
}

class kv extends rk
{
	constructor()
	{
		const xn = new sb('mh');

		super(xn);
	}

	no()
	{
		this.ua = new tj({
			dy:[this, 'gi', ['rv', 'xi']]
		});

		this.xn.gk(this.ua, 'lw');

		this.xn.gk(
			new ou({
				ca:bi.ra('ao')
			}), 'eu'
		);

		this.xn.gk(
			new dp({ui:'Need help?', lb:'https://cs.lett.app/generating-youtube-api-key'}), 'jb'
		);
	}

	qc()
	{
		this.ua.focus();
	}

	gi(ks)
	{
		ks.wg('loading');

		lk.gi(ks.value).then(
			ig => !ig && ks.wg('error', 'try again')
		);
	}
}

class fk extends ow
{
	constructor()
	{
		super();

		this.to(new bs);
	}

	ax()
	{
		this.to(new xu);
	}
}

class bs extends rk
{
	constructor()
	{
		const xn = new sb('tf');

		super(xn);
	}

	no()
	{
		const ku = [];

		ku.push(
			new ab({
				vu:'nrudy',
				ye:'support it',
				dy:[this, 'ax', 'xg']
			})
		);

		ku.push(
			new ab({
				vu:'nrudy',
				ye:'try it',
				dy:[this, 'wu', 'xg']
			})
		);

		dt.ck && ku.pop();

		for (let eq of ku)
		{
			this.xn.gk(eq, 'qu');
		}
	}
}

class xu extends rk
{
	constructor()
	{
		const xn = new sb('sr');

		super(xn);

		this.vs;
		this.vo;

		qv.qk(this, ['pq']);
	}

	rs(lp)
	{
		switch (lp)
		{
			case 'pq':
				return this.mg();
		}
	}

	no()
	{
		this.rf = new fq({
			vu:'cbsju'
		});

		this.xn.gk(this.rf);

		this.kt = new ge();

		this.kt.ro(
			new jp({
				vu:['kivur', 'nkzij'],
				ui:'12.99'
			})
		);

		this.xn.gk(this.kt, 'kt');

		this.gm = new ge();

		this.gm.ei(
			new jp({
				ui:'One-Time Payment via PayPal'
			})
		);

		this.xn.gk(this.gm, 'gm');

		this.an = new ab({
			vu:['nrudy', 'fcoub'],
			ye:'Pay with PayPal',
			dy:[this, 'wt', 'xg']
		});

		this.xn.gk(this.an, 'qu');
	}

	ty()
	{
		this.pi();
	}

	wt()
	{
		if (this.nq)
			return;

		this.nq = true;

		this.rf.lh('loading');

		lk.wj().then(iv =>
		{
			if (iv) {
				this.jf(iv);

				this.rf.lh('waiting');
			}
			else {
				this.rf.lh('error');
			}

			this.nq = false;
		});
	}

	jf(iv)
	{
		this.pi();

		this.vs = openWindow(iv);

		this.vo = setInterval(
			_ => this.vs.closed && this.pi(),
		500);
	}

	pi()
	{
		if (this.vs)
		{
			this.vs.close();

			this.rf.lh('initial');

			clearInterval(this.vo);
		}
	}

	mg()
	{
		this.pi();

		setTimeout(_ => {
			this.iw('ms', this);
			this.tp();
		}, 900);
	}

	tp()
	{
		this.kt.ro(
			new jp({vu:'nkzij',ui:'Thank You!'}), true
		);

		this.gm.ei(
			new jp({ui:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.an.gc('xfqmj');
			this.an.textContent = 'Done';
			this.an.bm(this, 'db', 'xg');
		}, 200);
	}

	db()
	{
		this.iw('db', this);
	}

	gs()
	{
		super.gs();

		this.pi();
	}
}

class ge extends jp
{
	constructor()
	{
		super();

		this.rh();
	}

	rh()
	{
		this.gb = new jp({
			vu:'pcwsj'
		});

		this.gk(this.gb);
	}

	ro(la, jw)
	{
		this.fa(la, 0, jw);
	}

	ei(la, jw)
	{
		this.fa(la, null, jw);
	}

	fa(la, rw, jw)
	{
		this.gb.gk(la, rw);

		if (jw)
		{
			this.jw(rw != null);
		}
	}

	jw(ha)
	{
		let uv, ka = this.gb;

		if (ha)
		{
			ka.style.transform = 'translateY(-100%)';

			uv = 'translateY(0)';
		}
		else {
			uv = 'translateY(-100%)';
		}

		setTimeout(_ => {
			ka.style.transition = 'transform 300ms';

			setTimeout(
				_ => ka.style.transform = uv,
			10);

			setTimeout(_ => {
				ka.style.transition = null;
			}, 300);
		}, 10);
	}
}

class gt extends rk
{
	constructor(cv)
	{
		const xn = new oi;

		super(xn);

		this.ti(cv).then(
			jk => this.dk(jk)
		);
	}

	no()
	{
		this.xn.gc('ankwi');
	}

	dk(jk)
	{
		this.xn.innerHTML = jk;
	}

	ti(cv)
	{
		const sn = wk.xf('/html/policies/%s.html', cv);

		return lk.ti(sn);
	}
}

class tc extends rk
{
	constructor()
	{
		const xn = new sb('ep');

		super(xn);

		this.yx(fj, fn);

		qv.qk(this, 'he');
	}

	no()
	{
		this.pu = new lt({
			placeholder:'type keywords here..',
		});
		this.pu.rp(this, 'fv', ['hu']);
		this.pu.rp(this, 'uy', ['xi', 'rv']);

		this.ac = new ab({
			vu:'kyabg',
			ye:'0',
			zf:'disabled',
			dy:[this, 'hy', 'xg']
		});

		this.rj = new ht(this);

		this.yp = new bv();
		this.yp.fc = new cq(this);

		this.xs = new sb(this.xn.wi('kf'));
		this.xs.gk(this.pu);
		this.xs.gk(this.ac);

		this.zy = new sb(this.xn.wi('le'));
		this.zy.gk(this.yp);
		this.zy.gk(this.rj);
	}

	ur()
	{
		if (this.ut)
		{
			this.jr();

			if (this.jn.bw)
			{
				this.lq('');
				this.yp.px();
			}
		}
	}

	qc(ks)
	{
		this.pu.focus();

		if (ks == 'dx')
		{
			this.pu.select();
		}
	}

	ty()
	{
		if (this.rj.jv)
		{
			this.rj.wf.wb();
		}
	}

	rs(lp)
	{
		if (lp == 'he')
			return this.pr();
	}

	bf(xn)
	{
		this.zy.ol(xn);
	}

	fv()
	{
		if (this.ut)
		{
			this.jr();
		}
	}

	uy()
	{
		let q = this.du();

		switch (true)
		{
			case (!q):
				return;

			case (!lj.ix):
				return this.yp.gj('fz');

			case (this.jn.aj):
			{
				if (!this.jn.kc)
					return;

				if (q == this.jn.lx)
				{
					return this.yp.gj('hn');
				}
			}
		}

		this.sy(q);
	}

	vh()
	{
		if (!lj.ix)
			return this.yp.gj('fz');

		this.id(':all');
	}

	get go()
	{
		return this.jn.go;
	}

	hy()
	{
		this.pv(new vk);
	}

	sy(q)
	{
		this.jn.search(q);
		this.yp.gj('pz');
	}

	jr()
	{
		this.jn.wh();
	}

	pr()
	{
		let q = wk.ej(lj.ta.currentTime);

		this.id(q);
	}

	du()
	{
		return this.pu.value;
	}

	lq(q)
	{
		this.pu.value = q;
	}

	id(q)
	{
		this.lq(q);
		this.sy(q);
	}

	get ut()
	{
		if (lj.ix && lj.fs != this.ug)
		{
			return Boolean(this.ug = lj.fs);
		}

		return false;
	}
}

class fj
{
	constructor()
	{
		this.er = er.km('el', this.ls.bind(this));

		this.lx = '';
		this.my = 0;
		this.wa = 0;
		this.ev = 500;
		this.kc = false;
		this.bw = false;
		this.iy = [];
		this.bj = 25;
	}

	ls(qx)
	{
		const tz = qx.tz;

		switch (qx.rn)
		{
			case 'jg':
				return this.qd(tz);

			case 'ri':
				return this.em(tz);

			case 'sm':
				return this.gp(tz);
		}
	}

	get aj()
	{
		return this.kc || this.wd('wa') < 500;
	}

	get go()
	{
		return this.iy.splice(0, this.bj);
	}

	wh()
	{
		this.er.dn('ri', new vx(''));
	}

	search(q)
	{
		this.lv(q);

		this.er.dn('jg', new vx(q));
	}

	gp(sm)
	{
		this.xc();

		this.fc.gp(sm.lp);
	}

	qd(r)
	{
		this.xc();

		let as = this.ev - this.wd('my');

		(r.pw == 0) && (as = 200);

		this.iy = r.ic;
		this.bw = (r.pw == 0);

		setTimeout(
			_ => this.fc.qd(r.pw, r.ln),
		as);
	}

	em(n)
	{
		this.fc.em(n);
	}

	mv(am)
	{
		this[am] = Date.now();
	}

	wd(am)
	{
		return Date.now() - this[am];
	}

	lv(q)
	{
		this.lx = q;

		this.kc = true;

		this.mv('my');
	}

	xc()
	{
		this.kc = false;

		this.mv('wa');
	}
}

class bv extends sb
{
	constructor()
	{
		super('sb', {
			vu:'kqjfl'
		});

		this.rb = {
			qo: 'no results match your query',
			pz: 'Searching...',
			hn: 'Searching still...',
			fz: 'You are not watching any video',
			ga: 'Invalid request',
			zm: 'This video has 0 comments',
			bo: 'Comments are disabled for this video.',
			tw: 'check your internet connection',
			xo: 'service down for maintenance',
			ot: 'request timeout, try again',
			sl: 'feature not supported for this video',
			ap: 'invalid response from server, try again',
			xb: 'something is not working properly',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'maximum allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
		};
	}

	gj(bc)
	{
		this.ie(bc);
	}

	gn(...xz)
	{
		this.di(...xz);
	}

	ex(hp, xz)
	{
		this.di(
			wk.xf(hp, xz)
		);
	}

	px()
	{
		this.innerHTML = '';
	}

	ie(lp)
	{
		let rc = this.rb[lp];

		if (!rc)
		{
			rc = this.rb.xb;
		}

		this.di(rc);
	}

	di(...ml)
	{
		const cz = document.createDocumentFragment();

		for (let we of ml)
		{
			let va = null;

			if (typeof we == 'string')
			{
				va = document.createTextNode(we);
			}
			else {
				va = we.ry;
			}

			cz.appendChild(va);
		}

		this.px();
		this.appendChild(cz);

		this.fc.wv();
	}
}

class ht extends qr
{
	constructor(mb)
	{
		super(mb);

		this.jv = false;
	}

	ef(ks)
	{
		this.wf.bg(ks.fs, ks.vf);

		ks.nm.fw(this.wf);
	}

	kj(ks)
	{
		wk.wz(lj.ta, ks.vf);
	}

	jh(yb)
	{
		const gr = [];

		for (let nt of yb)
		{
			let qt = new sb('ea');

			for (let i = 0; i < nt.length; i++)
			{
				const um = nt[i];

				if (um.hj > 0)
				{
					const n = i + um.hj;

					for (let k = i; k < n; k++)
					{
						nt[k].ql = nt.slice(k + 1, n + 1).some(qs => !qs.hidden);
					}
				}

				qt.gk(
					new yd(um)
				);
			}

			gr.push(qt);
		}

		return gr;
	}

	get wf()
	{
		if (!this.jv)
		{
			this.jv = true;
			this.pd = new wy;
		}

		return this.pd;
	}
}

const fn = function(xa)
{
	return {
		em(n)
		{
			let ia = n;

			if (n < 0) switch (n)
			{
				case -2:
					ia = '∞';
					break;

				case -1:
					ia = '∅';
					break;
			}

			xa.ac.ny(ia);

			if (0 < n && n < 1000)
			{
				xa.ac.lh('normal')
			}
			else {
				xa.ac.lh('disabled');
			}
		},

		qd(pw, p)
		{
			this.em(p);

			if (pw > 0)
			{
				xa.rj.al();

				return xa.bf(xa.rj);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return xa.yp.gj('zm');

				case -1:
					return xa.yp.gj('bo');

				case -2:
					return xa.yp.gj('qo');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const cm = new dp({
						ui:wk.xf('%s comments', p),
						dy:[xa, 'vh', 'xg']
					});

					return xa.yp.gn('Nothing found in ', cm);
				}

				return xa.yp.ex('Nothing found in %s comments', p);
			}

			xa.yp.gj('qo');
		},

		gp(xh)
		{
			xa.yp.gj(xh);
		}
	}
}

const cq = function(xa)
{
	return {
		wv()
		{
			xa.bf(xa.yp);
		}
	}
}

class wy extends sb
{
	constructor()
	{
		super('wy');

		this.qy = this.children[0];

		this.qy.onload = () => {
			try {
				const st = this.qy.contentDocument.body;

				this.ta = st.querySelector('video');

				st.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.ug;
		this.oe;
	}

	bg(fs, vf)
	{
		if (fs != this.ug) {
			this.qy.src = wk.xf(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [fs, vf]
			);
		}
		else if (this.ta) {
			wk.wz(this.ta, vf);
		}

		this.ug = fs;
		this.oe = vf;
	}

	wb()
	{
		if (this.hf)
		{
			this.ma();
		}
	}
}

class yd extends sb
{
	constructor(um)
	{
		const fp = xe.rt('yd', um);

		super(fp);

		this.rh(um);
	}

	rh(um)
	{
		this.zj(um);
		this.gz(um);

		if (um.jq)
		{
			if (um.ql)
				this.gc('isvpd');

			if (um.hidden)
				this.gc('zofrs');
		}

		if (um.kn)
		{
			this.gc('mgrqt');

			this.gk(
				new sb('nv', {vu:'ibhnh'}), 'jz'
			);
		}
	}

	tv()
	{
		return this;
	}

	fw(wf)
	{
		this.gk(wf, 'cl');
	}

	zj(um)
	{
		const ub = um.sv;

		const vp = ub.replace(
			nf[6], wk.xf('s%s-', um.jq ? 48 : 80)
		);

		this.gk(new ou({
			ca:vp,
			ct:ub,
		}), 'df');
	}

	gz(um)
	{
		const xr = new jp({
			vu:'fzcko',
			cf: {
				dir:um.nw,
				lang:um.qe
			}
		});

		const vm = Object.keys(um.sk);

		if (vm.length)
		{
			const th = wk.ew(um.ai, vm);

			for (let x of th)
			{
				if (wk.cu(x))
				{
					const a = this.ba(um.sk[x]);

					xr.gk(a);
				}
				else {
					const s = xe.ft(x);

					xr.appendChild(s);
				}
			}
		}
		else {
			xr.textContent = um.ai;
		}

		if (um.jq && !um.kn)
		{
			xr.gc('fsyvt');

			xr.addEventListener('click',
				e => xr.hl('fsyvt')
			);
		}

		this.gk(xr, 'cl');
	}

	ba(x)
	{
		let a;

		if (x.fr == 'ih' && x.fs != lj.fs)
		{
			x.fr = 'bh';
		}

		switch (x.fr)
		{
			case 'ih':
				a = new qa(x.ui, x.vf);
				a.rp(this, 'kj', 'xg');
				return a;

			case 'bh':
				a = new dg(x.ui, x.fs, x.vf);
				a.rp(this, 'ef', 'xg');
				return a;

			case 'ov':
				return new dp({
					ui:x.ui,
					lb:x.iv
				});
		}
	}
}

class dg extends dp
{
	constructor(ui, fs, vf)
	{
		super({
			vu:'wzwth',
			ui:ui
		});

		this.fs = fs;
		this.vf = vf;
	}

	get nm()
	{
		return this.iw('tv');
	}
}

class qa extends dp
{
	constructor(ui, vf)
	{
		super({
			vu:'wzwth',
			ui:ui
		});

		this.vf = vf;
	}
}

let bi;
let yh;
let ce;
let er;
let lk;
let qv;
let dt;
let im;
let qm;
let tm;
let xe;

if (lj.nk)
{
	bi = new nh;
	yh = new ci;
	ce = new zw;
	er = new mw;
	lk = new pe;
	qv = new vj;
	tm = new yc;

	lk.ze().then(async qh =>
	{
		if (qh.zf.uc)
		{
			await bi.ju();
		}

		xe = new ay(qh.te);

		im = new sd(qh.zf);

		qm = new nu;

		lk.jy();

		bi.cd();
	});

	ce.uq && tm.cw();
}

const nf = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];