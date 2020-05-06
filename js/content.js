/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const cw = {};

for (let ey of 'object array string regex date math type std'.split(' '))
{
	cw[ey] = {};
}

cw.yt = function(ni, yb)
{
	return ni != undefined && ni.constructor === yb;
}

cw.jl = function()
{
	return cw.jg(9);
}

cw.tp = function(au)
{
	return jz[0].test(au);
}

cw.rh = function(fu)
{
	return Object.keys(fu).length == 0;
}

cw.jm = function(pv, fu)
{
	for (let px in fu)
	{
		const as = fu[px];

		if (px == pv) return as;
		if (as == pv) return px;
	}
}

cw.xe = function(fu, mv)
{
	let au = '';

	for (let px in fu)
	{
		au += px + '=' + fu[px] + mv;
	}

	return au.slice(0, -1);
}

cw.vp = function(fs, ue, ae)
{
	const cu = ue + 1;

	return ae.slice(cu, cu + fs);
}

cw.sr = function(ae)
{
	return ae[ae.length - 1];
}

cw.aj = function(ql, lf)
{
	ql += '?';

	for (let px in lf)
	{
		ql += px + '=' + encodeURIComponent(lf[px]) + '&';
	}

	return ql.slice(0, -1);
}

cw.od = function(au, kw)
{
	if (cw.yt(kw, Array))
	{
		let i = 0;

		return au.replace(jz[1], _ => kw[i++]);
	}

	return au.replace('%s', kw);
}

cw.kx = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

cw.kg = function(au, eg)
{
	const we = cw.od('(%s)', eg.join('|'));

	return au.split(new RegExp(we)).filter(s => s !== '');
}

cw.de = function(au)
{
	return au.toUpperCase();
}

cw.nv = function(au)
{
	return au.toLowerCase();
}

cw.gm = function(au, el)
{
	if (!el)
	{
		au = au.toLowerCase();
	}

	return au[0].toUpperCase() + au.slice(1);
}

cw.bq = function(yf, au)
{
	return au.match(yf) || [];
}

cw.cx = function(yf, au)
{
	if (yf.global) return '';

	const m = cw.bq(yf, au);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

cw.zx = function()
{
	return Math.floor(Date.now() / 1000);
}

cw.xu = function(hm)
{
	return hm < cw.zx();
}

cw.ao = function(q)
{
	const kl = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = cw.cx(jz[2], q);

	return Date.now() + (x[0] * kl[x[1]] * 1000);
}

cw.za = function(am)
{
	let x = am.split(':'),
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

cw.hr = function(be)
{
	let ae = [];

	ae.push(be / 3600);

	be %= 3600;

	ae.push(be / 60);

	ae.push(be % 60);

	ae = ae.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return ae.join(':').replace(jz[3], '');
}

cw.jg = function(fm)
{
	return Math.random().toString().slice(2, fm + 2);
}

cw.cl = function(ib, mz)
{
	const bi = Math.random() * (mz - ib) + ib;

	return Math.floor(bi);
}

cw.cz = function(x, a, b)
{
	return x >= a && x <= b;
}

cw.jk = function(a, b)
{
	return 100 * (a / b);
}

cw.ln = function()
{
	let tl, ps = 0;

	try {
		tl = [qp, qt, ct];
	}
	catch (e) {
		tl = [xq, ct];
	}

	tl.forEach(
		gx => ps += gx.toString().length
	);

	return ps != 2028;
}

class ky
{
	constructor(lk, ih)
	{
		this.lk = lk;
		this.ih = ih;
	}
}

class bj
{
	constructor(fg, lk, ih)
	{
		this.fg = fg;
		this.dg = new ky(lk, ih);
	}
}

class fi extends Array
{
	constructor(rv)
	{
		super();

		if (rv != null)
		{
			super.push(rv);
		}
	}

	push(np)
	{
		return !this.includes(np) && super.push(np);
	}
}

class wp
{
	constructor(yx, jw)
	{
		const gx = yx.status;

		this.gx = gx;
		this.wa = false;
		this.zs = false;
		this.zf = null;
		this.ih = null;

		switch (jw)
		{
			case 'error':
				return this.mj('va');

			case 'timeout':
				return this.mj('fw');

			default:
			{
				this.wa = (gx == 200);

				if (gx >= 500)
				{
					return this.mj('qu');
				}

				try {
					this.ih = JSON.parse(yx.responseText);
				}
				catch (e) {
					this.ih = yx.responseText;
				}
			}
		}
	}

	lm(on)
	{
		this.zf = on;
	}

	mj(on)
	{
		this.lm(on);

		this.zs = true;
	}
}

class br
{
	constructor(ih, jo)
	{
		Object.assign(this, ih);

		Object.defineProperty(this, 'jo', {
			value: jo
		});
	}

	set(px, as)
	{
		this[px] = as;

		this.bm();
	}

	bm()
	{
		return fl.set(this.jo, this);
	}
}

class ct extends br
{
	constructor(ih, jo)
	{
		super(ih, jo);
	}

	get ux()
	{
		return Boolean(this.bz)
	}

	get bz()
	{
		return this[0];
	}

	get ja()
	{
		return this[1];
	}

	get is()
	{
		return cw.xu(this.ja);
	}

	get no()
	{
		const op = this.ja.toString().split('').pop();

		return Boolean(+op);
	}

	set bz(px)
	{
		this.set(0, px);
	}

	set ja(qd)
	{
		this.set(1, qd);
	}

	get wh()
	{
		let s = this.ja.toString(),
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

class lu
{
	constructor(xy)
	{
		if (xy)
		{
			this.hw();
		}
	}

	iw(sp, cr, ca)
	{
	}

	hw()
	{
		chrome.runtime.onMessage.addListener(
			this.iw.bind(this)
		);
	}
}

class ng extends lu
{
	constructor()
	{
		super(false);
	}

	iw(sp, cr, ca)
	{
		const ih = sp.ih;

		switch (sp.lk)
		{
			case 'tw':
				return this.kc(ih);
		}
	}

	kc(tw)
	{
		if (tw == 'co')
		{
			vx.cu();
		}
	}

	du()
	{
		return this.xi('du');
	}

	hy(fo)
	{
		return this.xi('hy', fo);
	}

	lz(bz)
	{
		return this.xi('lz', bz);
	}

	an()
	{
		return this.xi('an');
	}

	ot()
	{
		return this.xi('ot');
	}

	xi(lk, ih)
	{
		const sp = new ky(lk, ih);

		return new Promise(ca =>
		{
			try {
				chrome.runtime.sendMessage(sp, ca);
			}
			catch (e) {
			}
		});
	}
}

class oi extends lu
{
	constructor()
	{
		super(true);
	}

	iw(sp, cr, ca)
	{
		const fn = function(...kw)
		{
			try {
				ca(...kw);
			}
			catch (e) {
			}
		};

		fj.jx.then(_ =>
		{
			const ih = sp.ih;

			switch (sp.lk)
			{
				case 'du':
					fj.du().then(fn);
				break;

				case 'hy':
					fj.hy(ih).then(fn);
				break;

				case 'lz':
					fj.lz(ih).then(fn);
				break;

				case 'an':
					gf.bl.an(ih).then(fn);
				break;

				case 'ot':
					fj.gd();
				break;
			}
		});

		return true;
	}
}

class ad
{
	get(px)
	{
		return new Promise(dj =>
		{
			try {
				chrome.storage.local.get(px, ay =>
					dj(typeof px == 'string' ? ay[px] : ay)
				);
			}
			catch (e) {
			}
		});
	}

	set(px, as)
	{
		let ih;

		if (typeof px == 'object')
		{
			ih = px;
		}
		else {
			ih = {[px]:as};
		}

		return new Promise(hx =>
		{
			try {
				chrome.storage.local.set(ih, hx);
			}
			catch (e) {
			}
		});
	}

	gb()
	{
		return new Promise(hx =>
		{
			try {
				chrome.storage.local.clear(hx);
			}
			catch (e) {
			}
		});
	}
}

class hsopg
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			bj => this.ac(bj)
		);

		Port.onDisconnect.addListener(
			_ => this.xr()
		);

		this.Port = Port;

		this.gp = {
		};

		this.mt = false;
	}

	iw(m)
	{
	}

	po(fg, lk, ih)
	{
		const wn = new bj(fg, lk, ih);

		if (!this.mt)
		{
			this.Port.postMessage(wn);
		}
	}

	ac(x)
	{
		this.dp(x.fg).iw(x.dg);
	}

	dp(fg)
	{
		return this.gp[fg] || this;
	}

	yi(fg, iw, xr)
	{
		return this.gp[fg] = new bc(this, fg, iw, xr);
	}

	xr()
	{
		this.mt = true;

		for (let fg in this.gp)
		{
			this.dp(fg).xr();
		}
	}
}

class av extends hsopg
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	iw(sp)
	{
		const ih = sp.ih;

		switch (sp.lk)
		{
			case 'nt':
				return gu.sj(ih);
		}
	}

	yi(fg, iw, xr)
	{
		this.po(null, 'yi', fg);

		return super.yi(fg, iw, xr);
	}

	xr()
	{
		super.xr();

		vx.tr();
	}
}

class jh extends hsopg
{
	constructor(lv)
	{
		super(lv);
	}

	iw(sp)
	{
		switch (sp.lk)
		{
			case 'yi':
				return this.yi(sp.ih);
		}
	}

	yi(fg)
	{
		const zl = super.yi(fg);

		switch (fg)
		{
			case 'qa':
				return new wj(zl);
		}
	}
}

class zd
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			ew => this.kq(ew)
		);

		this.yd = [];
	}

	kq(lv)
	{
		this.yd.push(
			new jh(lv)
		);
	}

	fc(vf)
	{
		for (let lv of this.yd)
		{
			lv.po(null, 'nt', vf);
		}
	}
}

class bc
{
	constructor(lv, fg, iw, xr)
	{
		this.lv = lv;

		this.fg = fg;

		if (iw)
		{
			this.iw = iw;
		}

		if (xr)
		{
			this.xr = xr;
		}
	}

	po(lk, ih)
	{
		this.lv.po(this.fg, lk, ih);
	}

	iw(m)
	{
	}

	xr()
	{
	}
}
class nf
{
	ha(pl)
	{
		this.pl = pl;
	}

	ya(wt, cr)
	{
		if (wt in this && this != cr)
		{
			return this[wt](cr);
		}

		if (this.ki)
		{
			return this.ki.ya(wt, cr);
		}
	}

	get ki()
	{
		return this.pl || this.oy;
	}
}

const xw = function(uf, kn)
{
	return new kn(uf);
}

class db extends nf
{
	constructor(vt)
	{
		super();

		this.ia = vt;

		this.pd('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	um(su)
	{
		if (typeof su == 'string')
		{
			su = [su];
		}

		this.ia.classList.add(...su);
	}

	xj(su)
	{
		this.ia.classList.remove(su);
	}

	id(su)
	{
		this.ia.classList.contains(su) ? this.xj(su)
												: this.um(su);
	}

	aw()
	{
		this.ia.remove();
	}

	pd(...pr)
	{
		for (let x of pr) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.ia[x] instanceof Function)
			{
				this[x] = this.ia[x].bind(this.ia);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.ia[x];
					},
					set(v) {
						this.ia[x] = v;
					}
				});
			}
		}
	}
}

class xp extends db
{
	constructor(sy, ph)
	{
		super(
			typeof sy == 'string' ? td.hd(sy) : sy
		);

		this.oy = null;
		this.rp = [];
		this.kp = {};
		this.ud = {};

		if (ph)
		{
			if (ph.ls)
			{
				this.um(ph.ls);
			}

			if (ph.kh)
			{
				this.textContent = ph.kh;
			}

			if (ph.kd)
			{
				this.vl(...ph.kd);
			}

			if (ph.zm)
			{
				for (let jp in ph.zm)
				{
					this.setAttribute(jp, ph.zm[jp]);
				}
			}

			if (ph.import)
			{
				for (let eq of ph.import)
				{
					this.pd(eq);
				}
			}
		}
	}

	ea(oc, ch)
	{
		if (oc.oy)
		{
			if (oc.oy == this)
				return;

			oc.ab();
		}

		oc.oy = this;
		this.rp.push(oc);

		switch (typeof ch)
		{
			case 'string':
				return this.bx(ch).appendChild(oc.ia);

			case 'number':
				return this.ia.prepend(oc.ia);

			default:
				return this.appendChild(oc.ia);
		}
	}

	bx(lx)
	{
		return this.querySelector('#' + lx);
	}

	ku(kd, wt, yc)
	{
		this.kd = {};

		this.vl(kd, wt, yc);
	}

	vl(kd, wt, yc)
	{
		if (typeof yc == 'string')
		{
			yc = [yc];
		}

		for (let tn of yc)
		{
			if (!this.ud[tn])
			{
				this.ud[tn] = new Map;

				this.addEventListener(
					cw.jm(tn, xp.bo), e => this.ij(e)
				);
			}

			this.ud[tn].set(kd, wt)
		}
	}

	rl(tn)
	{
		const ud = this.ud[tn];

		if (ud)
		{
			for (let [kd, wt] of ud)
			{
				kd.ya(wt, this);
			}
		}
	}

	rx()
	{
		this.hidden = true;
	}

	pk()
	{
		this.hidden = false;
	}

	gb()
	{
		let i = this.rp.length;

		while (i--)
		{
			this.rp[i].ab();
		}
	}

	ab()
	{
		this.oy.yz(this);
	}

	nu(oc)
	{
		this.appendChild(oc.ia);
	}

	yz(oc)
	{
		oc.oy = null;

		this.rp.splice(
			this.rp.indexOf(oc), 1
		);

		oc.ia.remove();
	}

	ij(e)
	{
		e.stopPropagation();

		this[cw.jm(e.type, xp.bo)](e);
	}

	vg()
	{
		this.rl('vg');
	}
}

xp.bo = {
	vg:'click',
	ai:'paste',
	xc:'keyup',
	nz:'keyup',
	kv:'focus',
};

class fy extends xp
{
	constructor(ph)
	{
		super('fy', ph);
	}
}

class iy extends xp
{
	constructor()
	{
		super('iy');

		this.pd('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			dz.ld(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class ka extends iy
{
	constructor(rb)
	{
		super();

		this.rb = rb;

		this.bn;

		this.addEventListener('scroll',
			_ => this.vy()
		);
	}

	mf()
	{
	}

	sd()
	{
		this.gb();
		this.hg();
		this.hp();

		this.up();
	}

	vy()
	{
		if (this.gk && this.sv)
		{
			this.hp();
		}
	}

	hg()
	{
		this.bn = this.mf(this.rb.tz);
	}

	hp()
	{
		for (let oc of this.bn)
		{
			this.ea(oc);
		}

		this.hg();
	}

	up()
	{
		this.xj('jxawy');

		if (this.gh)
		{
			this.um('jxawy');
		}
	}

	get gh()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get gk()
	{
		return this.bn.length;
	}

	get sv()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class hq extends xp
{
	constructor(dh, ge)
	{
		super('hq');

		this.pd('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.rg = dh;

		this.mi(dh, ge);

		this.li();
		this.zo();
	}

	qz(uz)
	{
		for (let k in uz)
		{
			this.style[k] = uz[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	mi(dh, ge)
	{
		const x = window.innerHeight - ge;
		const y = window.innerWidth - dh - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = dh + 'px';
	}

	li()
	{
		let he = this.querySelectorAll('[resize]');

		for (let vm of he)
		{
			vm.addEventListener('pointerdown',
				e => this.wd(e, 'vn')
			);
		}
	}

	zo()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.wd(e, 'ri')
		);
	}

	wd(e, wt)
	{
		if (e.which == 1)
			this[wt](e);
	}

	th()
	{
		return this.getBoundingClientRect();
	}

	vn(e)
	{
		const wy = e.target.getAttribute('resize'),
				lb = wy.includes('w'),
				jf = wy.includes('n'),
				wm = wy.includes('e');

		const ut = this.th(),
				rg = this.rg,
				py = 56,
				st = ip.gs,
				pf = window.innerHeight - py,
				ix = e.clientX,
				eh = e.clientY,
				yw = ut.x,
				rj = ut.y,
				en = ut.width;

		let hc = 0,
				jd = 0,
				jv = yw,
				pc = rj,
				rf = en;

		let mq = (e) =>
		{
			hc = e.clientX - ix;
			jd = e.clientY - eh;

			if (jf)
			{
				pc = rj + jd;

				(pc < 0) && (pc = 0);

				(pc > pf) && (pc = pf);

				this.style.top = pc + 'px';
			}

			if (wm)
			{
				rf = en + hc;

				(e.clientX > st) && (rf = st - yw);

				(rf < rg) && (rf = rg);

				this.style.width = rf + 'px';
			}

			if (lb)
			{
				jv = yw + hc;
				rf = en - hc;

				if (jv < 0)
				{
					jv = 0;
					rf = en + yw;
				}

				if (rf < rg)
				{
					jv = yw + (en - rg);
					rf = rg;
				}

				this.style.width = rf + 'px';
				this.style.left = jv + 'px';
			}
		};

		let ok = () => {
			(hc != 0 || jd != 0) && this.fd();
		};

		this.gl(mq, ok);
	}

	ri(e)
	{
		let yw = this.offsetLeft,
			ix = e.clientX,
			hc = 0;

		let mq = (e) => {
			hc = e.clientX - ix;
			this.style.left = yw + hc + 'px';
		};

		let ok = () => {
			(hc != 0) && this.fd();
		};

		this.gl(mq, ok);
	}

	gl(mq, ok)
	{
		dz.ys(true);

		document.onpointermove = (e) => mq(e);

		document.onpointerup = (e) => {
			dz.ys(false);
			ok();
			document.onpointerup = document.onpointermove = null;
		};
	}

	fd()
	{
		if (this.hidden) return;

		let ut = this.th();

		let uz = {
			width: cw.jk(ut.width, window.innerWidth),
			left: cw.jk(ut.x, window.innerWidth),
			top: cw.jk(ut.y, window.innerHeight),
		};

		this.qz(uz);

		if ('sh' in this.kp)
		{
			this.kp.sh(uz);
		}
	}
}

class tg extends hq
{
	constructor(dh, ge)
	{
		super(dh, ge);

		this.addEventListener('wheel', dz.ld);
	}
}

class ir extends xp
{
	constructor(ph)
	{
		super('ir', ph);

		this.pd('src');

		if (ph.rt)
		{
			this.addEventListener('error', e => this.src = ph.rt, {once:true});
		}

		this.src = ph.rk;
	}
}

class ht extends xp
{
	constructor(sy, ph)
	{
		super(sy, ph);

		this.mk = [];
		this.vw = false;
	}

	xc(e)
	{
		if (e.key == 'Enter')
		{
			this.rl('nz');
		}

		this.rl('xc');
	}

	ai(e)
	{
		setTimeout(
			_ => this.rl('ai'),
		10);
	}

	kv(e)
	{
		this.rl('kv');
	}

	get nl()
	{
		if (!this.vw)
		{
			const ei = Date.now();

			const fm = this.mk.push(ei);

			if (fm > 3)
			{
				if (ei - this.mk[0] < 2000)
				{
					this.vw = true;

					setTimeout(
						_ => this.vw = false,
					20 * 1000);
				}
				else {
					this.mk.length = 0;
				}
			}
		}

		return this.vw;
	}
}

class qj extends ht
{
	constructor(ph)
	{
		super('qj', ph);

		this.pd('placeholder', 'focus', 'select');

		if (ph && ph.placeholder)
		{
			this.placeholder = ph.placeholder;
		}
	}

	get value()
	{
		return this.ia.value.trim();
	}

	set value(s)
	{
		this.ia.value = String(s).trim();
	}
}

class mn extends ht
{
	constructor(ph)
	{
		super('mn', ph);

		this.mi();
	}

	mi()
	{
		this.er = new qj();

		this.ea(this.er, 'wi');

		this.zk = new ra();

		this.ea(this.zk, 'wi');

		this.md = this.bx('md');
	}

	focus()
	{
		this.er.focus();
	}

	get value()
	{
		return this.er.value;
	}

	nc(zg, kh)
	{
		this.zk.fe(zg);

		this.md.textContent = kh || '';
	}
}

class zp extends xp
{
	constructor(sy, ph)
	{
		super(sy, ph);

		this.fe(ph.zg || 'initial');
	}

	get xt()
	{
		return this.zg == 'disabled';
	}

	get qn()
	{
		return this.zg == 'selected';
	}

	fe(zg)
	{
		this.zg = zg;

		this.setAttribute('state', zg);
	}

	ij(e)
	{
		if (!this.xt)
		{
			super.ij(e);
		}
	}
}

class ax extends zp
{
	constructor(ph)
	{
		super('ax', ph);

		if (ph.vb)
		{
			this.kb(ph.vb);
		}

		if (ph.sm)
		{
			this.xd(ph.sm);
		}
	}

	kb(kh)
	{
		this.textContent = kh;
	}

	xd(sy)
	{
		const sm = td.hd(sy);

		this.appendChild(sm);
	}
}

class le extends ax
{
	constructor(ph)
	{
		super(ph);

		this.value = ph.value;
	}

	vg()
	{
		if (this.qn)
		{
			this.fe('initial');
		}
		else {
			this.fe('selected');
		}

		super.vg();
	}
}

class mg extends xp
{
	constructor(ph)
	{
		super('mg', ph);

		if (ph.lp)
		{
			this.setAttribute('href', ph.lp);
		}
	}
}

class ra extends xp
{
	constructor(ph)
	{
		super('ra', ph);
	}

	fe(zg)
	{
		this.setAttribute('state', zg);
	}
}

class vz extends nf
{
	constructor(oc, nj)
	{
		super();

		this.oc;

		this.uv;

		this.children = [];

		this.wu(oc, nj);
	}

	wu(oc, nj)
	{
		oc.ha(this);

		if (nj)
		{
			oc.kp = new xw(this, nj);
		}

		this.oc = oc;

		this.pb();
	}

	xo(cq, tb)
	{
		this.uv = new cq;

		if (tb)
		{
			this.uv.kp = new xw(this, tb);
		}

		this.zy();
	}

	zy()
	{
	}

	pb()
	{
	}

	wl(cr)
	{
		if (this.dt)
		{
			this.dt.wl(cr);
		}

	}

	oj(cr)
	{
		if (this.dt)
		{
			this.dt.oj(cr);
		}

	}

	ta(cr)
	{
		if (this.dt)
		{
			this.dt.ta(cr);
		}

	}

	pt(cr)
	{
		if (this.dt)
		{
			this.dt.pt(cr);
		}

	}

	ma(lx)
	{
	}

	pk(bg, cr)
	{
		this.oc.appendChild(bg.oc.ia);
	}

	nk(bg)
	{
		this.vi.jy(bg);
	}

	iq()
	{
		this.vi.hj();
	}

	jy(pi, vj)
	{
		pi.ha(this);

		pi.wl();

		this.children.push(pi);

		this.oc.ea(pi.oc, vj);

		pi.oj();
	}

	hj()
	{
		this.children.pop().bh();
	}

	get vi()
	{
		let zr = this;

		while (zr.pl)
		{
			zr = zr.pl;
		}

		return zr;
	}

	get kf()
	{
		return this.children.length;
	}

	get dt()
	{
		return cw.sr(this.children);
	}

	bh()
	{
		this.oc.aw();

		for (let pi of this.children)
		{
			pi.bh();
		}
	}
}

class yk extends vz
{
	constructor()
	{
		const oc = new xp('tm');

		super(oc);
	}

	pb()
	{
		this.hk = new ax({
			ls:['jajbf', 'uywyz'],
			sm:'ig',
			zg:'hidden',
			kd:[this, 'wf', 'vg']
		});

		this.oc.ea(this.hk);
	}

	wf()
	{
		this.hj();

		this.mh();
	}

	wo()
	{
		this.hk.fe('hidden');
	}

	jy(pi)
	{
		super.jy(pi, 'lt');

		this.mh();
	}

	mh()
	{
		if (this.kf > 1)
		{
			this.hk.fe('initial');
		}
		else {
			this.hk.fe('hidden');
		}
	}




}

cw.gq = function(cd, vk)
{
	cd.currentTime = vk;

	if (cd.paused)
	{
		cd.play();
	}
}

function openWindow(ql)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = cw.xe(q, ',');

	return window.open(ql, '', q);
}

class ov
{
	constructor(q)
	{
		Object.assign(this, {
			ko: q,
			zt: dk.zt,
			ro: dk.cd.duration,
			xl:dk.cd.currentTime
		});
	}
}

class rn
{
	constructor()
	{
		this.yr = navigator.platform.includes('Mac');
	}

	get gs()
	{
		return !this.yr ? document.body.clientWidth : window.innerWidth;
	}
}

const dk = {
	get sz()
	{
		return ['www', 'music'].includes(this.si);
	},

	get wb()
	{
		return location.pathname == '/watch';
	},

	get cd()
	{
		if (!this.nm)
		{
			this.nm = dz.querySelector('video');
		}

		return this.nm || document.createElement('video');
	},

	get zt()
	{
		return cw.cx(jz[4], location.href);
	},

	get si()
	{
		return location.host.split('.')[0];
	}
}

class yj
{
	constructor(ga)
	{
		this.ts = document.createElement('div');

		this.di = {};

		for (let dm of this.af(ga).children)
		{
			const cy = dm.getAttribute('protoid');

			if (cy) {
				dm.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.di[cy] = dm.outerHTML;
		}
	}

	hd(sy, pe)
	{
		let ce = this.di[sy];

		if (pe)
		{
			ce = ce.replace(jz[5], (_, px) => pe[px]);
		}

		return this.af(ce);
	}

	wk(kh)
	{
		const s = document.createElement('span');

		s.textContent = kh;

		return s;
	}

	af(ce)
	{
		this.ts.innerHTML = ce;

		return this.ts.children[0];
	}
}

class qh extends db
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.sb = 'fullscreenchange';
			this.qw = 'fullscreenElement';
		}
		else {
			this.sb = 'webkitfullscreenchange';
			this.qw = 'webkitFullscreenElement';
		}

		this.ex();

		document.addEventListener(
			this.sb, _ => this.ex()
		);
	}

	get ox()
	{
		return Boolean(document[this.qw]);
	}

	zh()
	{
		this.um('bansn');
	}

	ys(mr)
	{
		mr ? this.um('gkjbg')
			: this.xj('gkjbg');
	}

	ld(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	ex()
	{
		this.setAttribute('cs-fullscreen', this.ox);
	}
}

class xq
{
	constructor()
	{
		this.tq = {
			ek: '/html/svg/1.svg',
		}
	}

	vc()
	{
		cw.ln() && jc.ot();
	}

	async re()
	{
		ml = await fl.get('1');

		ml = new ct(ml);
	}

	dl(lx)
	{
		return chrome.runtime.getURL(this.tq[lx]);
	}
}

class qp extends vz
{
	constructor(zg)
	{
		const oc = new tg(460, 480);

		super(oc, sn);

		this.xo(pz);

		gu.me(this, [
			'so', 'xs', 'xm', 'yp'
		]);

		this.yh = false;

		switch (true)
		{
			case (zg.xa):
				return this.jy(new oq);

			case (zg.sq):
				return this.jy(new je);

			default:
				this.fp();
		}
	}

	pb()
	{
		this.oc.ea(new ax({
			ls:['jajbf', 'mjcew'],
			sm:'wz',
			kd:[this, 'qi', 'vg']
		}));

		document.body.appendChild(this.oc.ia);
	}

	zy()
	{
		this.uv.th.then(
			uz => uz && this.oc.qz(uz)
		);
	}

	ma(lx)
	{
		switch (lx)
		{
			case 'so':
				return this.cu('ws');

			case 'xs':
				return this.cu('jb');

			case 'xm':
				return this.qi();

			case 'yp':
				return this.dn();
		}
	}

	fp()
	{
		this.jy(new mc);
	}

	dn()
	{
		this.hj();

		this.fp();
	}

	cu(cr)
	{
		this.dt.wl(cr);

		this.oc.pk();

		this.dt.oj(cr);

		this.yh = true;
	}

	qi(cr)
	{
		this.dt.ta(cr);

		this.oc.rx();
	}

	tr()
	{
		this.jy(new vq);
	}
}

class pz
{
	get th()
	{
		return fl.get('appPosition');
	}

	fh(ls)
	{
		(ls.width > 100) && (ls.width = 100);

		(ls.left < 0) && (ls.left = 0);

		if (ls.left + ls.width > 100)
		{
			ls.left = 100 - ls.width;
		}

		fl.set('appPosition', ls);
	}
}

const sn = function(uf)
{
	return {
		sh(uz)
		{
			uf.uv.fh(uz);
		}
	}
}

class la
{
	static it(px)
	{
		return px == 'Enter';
	}

	static ck(px)
	{
		return ['Control','Meta'].includes(px);
	}
}

class qb
{
	constructor()
	{
		window.addEventListener('keydown', e => this.ds(e), true);
	}

	ds(e)
	{
		this.ba(e);

		const gx = this.gx;

		if (this.yq)
		{
			if (gx == 'KeyS')
			{
				e.preventDefault();

				return gu.sj('so');
			}

			if (gx == 'KeyE' && dk.wb)
			{
				e.preventDefault();

				return gu.sj('xs');
			}

			if (gx == 'KeyX' && dz.ox)
			{
				return gu.sj('xm');
			}
		}

		if (gx == 'Escape')
		{
			return gu.sj('xm');
		}
	}

	ba(e)
	{
		this.gx = e.code;

		this.yq = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get zn()
	{
		return this.gx == 'KeyV';
	}
}

class tc
{
	constructor()
	{
		this.wr = {};
	}

	sj(vf)
	{
		let tx = this.qm(vf);

		for (let zb of tx)
		{
			zb.ma(vf);
		}
	}

	me(zb, gu)
	{
		if (typeof gu == 'string')
		{
			gu = [gu];
		}

		for (let lx of gu)
		{
			this.qm(lx).push(zb);
		}
	}

	qm(vf)
	{
		return this.wr[vf] || (this.wr[vf] = new fi);
	}
}

class ol extends vz
{
	constructor()
	{
		const oc = new xp('ed');

		super(oc);
	}

	ju()
	{
		jc.cp();

		this.iq();
	}
}

class oq extends vz
{
	constructor()
	{
		super(
			new xp('az')
		);
	}

	pb()
	{
		const wq = new ax({
			ls:'znybd',
			vb:'Update Now',
			kd:[this, 'vs', 'vg']
		});

		this.oc.ea(wq, 'lj');
	}

	vs()
	{
		window.open('https://cs.lett.app/update');
	}
}

class cs extends vz
{
	constructor()
	{
		const oc = new xp('bu');

		super(oc);
	}

	pb()
	{
		this.oc.ea(new ax({
			ls:['uywyz', 'jajbf'],
			sm:'ig',
			kd:[this, 'iq', 'vg']
		}));
	}
}

class vq extends vz
{
	constructor()
	{
		const oc = new xp('uc');

		super(oc);
	}
}

class je extends vz
{
	constructor()
	{
		const oc = new xp('xp');

		super(oc);

		this.ow();

		gu.me(this, [
			'nd', 'ty'
		]);
	}

	async ma(lx)
	{
		await fj.re();

		switch (lx)
		{
			case 'nd':
				return this.ow();

			case 'ty':
				return this.ji();
		}
	}

	ow()
	{
		if (!ml.bz)
		{
			return this.jy(new lc);
		}

		if (!ml.no)
		{
			return this.jy(new ne);
		}

		this.lw();
	}

	xk()
	{
		this.lw();
	}

	ji()
	{
		!vx.yh && this.lw();
	}

	lw()
	{
		gu.sj('yp');
	}
}

class lc extends vz
{
	constructor()
	{
		const oc = new xp('pu');

		super(oc);
	}

	pb()
	{
		this.ve = new mn({
			kd:[this, 'lz', ['ai', 'nz']]
		});

		this.oc.ea(this.ve, 'aq');

		this.oc.ea(
			new ir({
				rk:fj.dl('ek')
			}), 'mp'
		);

		this.oc.ea(
			new mg({kh:'Need help?', lp:'https://cs.lett.app/generating-youtube-api-key'}), 'tf'
		);
	}

	oj()
	{
		this.ve.focus();
	}

	lz(cr)
	{
		cr.nc('loading');

		if (!this.yo)
		{
			this.yo = true;

			jc.lz(cr.value).then(wa =>
			{
				!wa && cr.nc('error', 'try again');

				this.yo = false;
			});
		}
	}
}

class ne extends yk
{
	constructor()
	{
		super();

		this.jy(new qt);
	}

	ur()
	{
		this.jy(new gj);
	}
}

class qt extends vz
{
	constructor()
	{
		const oc = new xp('bp');

		super(oc);
	}

	pb()
	{
		const jr = [];

		jr.push(
			new ax({
				ls:'znybd',
				vb:'support it',
				kd:[this, 'ur', 'vg']
			})
		);

		jr.push(
			new ax({
				ls:'znybd',
				vb:'try it',
			})
		);

		!ml.is && jr[1].vl(this, 'xk', 'vg');

		for (let sg of jr)
		{
			this.oc.ea(sg, 'lj');
		}
	}
}

class gj extends vz
{
	constructor()
	{
		const oc = new xp('qk');

		super(oc);

		this.ly;
		this.to;

		gu.me(this, ['ty']);
	}

	ma(lx)
	{
		switch (lx)
		{
			case 'ty':
				return this.ji();
		}
	}

	pb()
	{
		this.zk = new ra({
			ls:'ybjsq'
		});

		this.oc.ea(this.zk);

		this.km = new bd();

		this.km.gw(
			new fy({
				ls:['lqcle', 'bazpm'],
				kh:'9'
			})
		);

		this.oc.ea(this.km, 'km');

		this.sa = new bd();

		this.sa.hv(
			new fy({
				kh:'One-Time Payment via PayPal'
			})
		);

		this.oc.ea(this.sa, 'sa');

		this.xn = new ax({
			ls:['znybd', 'cexqo'],
			vb:'Pay with PayPal',
		});

		setTimeout(
			_ => this.xn.vl(this, 'dv', 'vg')
		, 500);

		this.oc.ea(this.xn, 'lj');
	}

	ta()
	{
		this.ft();
	}

	dv()
	{
		if (this.kz)
			return;

		this.kz = true;

		this.zk.fe('loading');

		jc.an().then(ql =>
		{
			if (ql) {
				this.rm(ql);

				this.zk.fe('waiting');
			}
			else {
				this.zk.fe('error');
			}

			this.kz = false;
		});
	}

	rm(ql)
	{
		this.ft();

		this.ly = openWindow(ql);

		this.to = setInterval(
			_ => this.ly.closed && this.ft(),
		500);
	}

	ft()
	{
		if (this.ly)
		{
			this.ly.close();

			this.zk.fe('initial');

			clearInterval(this.to);
		}
	}

	ji()
	{
		this.ft();

		setTimeout(_ => {
			this.ya('wo', this);
			this.gi();
		}, 900);
	}

	gi()
	{
		this.km.gw(
			new fy({ls:'bazpm',kh:'Thank You!'}), true
		);

		this.sa.hv(
			new fy({kh:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.xn.um('rucex');
			this.xn.textContent = 'Done';
			this.xn.ku(this, 'lw', 'vg');
		}, 200);
	}

	lw()
	{
		this.ya('lw', this);
	}

	bh()
	{
		super.bh();

		this.ft();
	}
}

class bd extends fy
{
	constructor()
	{
		super();

		this.mi();
	}

	mi()
	{
		this.wc = new fy({
			ls:'quhej'
		});

		this.ea(this.wc);
	}

	gw(np, na)
	{
		this.df(np, 0, na);
	}

	hv(np, na)
	{
		this.df(np, null, na);
	}

	df(np, io, na)
	{
		this.wc.ea(np, io);

		if (na)
		{
			this.na(io != null);
		}
	}

	na(al)
	{
		let tu, tj = this.wc;

		if (al)
		{
			tj.style.transform = 'translateY(-100%)';

			tu = 'translateY(0)';
		}
		else {
			tu = 'translateY(-100%)';
		}

		setTimeout(_ => {
			tj.style.transition = 'transform 300ms';

			setTimeout(
				_ => tj.style.transform = tu,
			10);

			setTimeout(_ => {
				tj.style.transition = null;
			}, 300);
		}, 10);
	}
}

class oh extends vz
{
	constructor(tk)
	{
		const oc = new iy;

		super(oc);

		this.hy(tk).then(
			yu => this.ph(yu)
		);
	}

	pb()
	{
		this.oc.um('onbpj');
	}

	ph(yu)
	{
		this.oc.innerHTML = yu;
	}

	hy(tk)
	{
		const fo = cw.od('/html/policies/%s.html', tk);

		return jc.hy(fo);
	}
}

class mc extends vz
{
	constructor()
	{
		const oc = new xp('gt');

		super(oc);

		this.xo(hi, or);

		gu.me(this, 'xs');
	}

	pb()
	{
		this.go = new qj({
			placeholder:'type keywords here..',
		});
		this.go.vl(this, 'pm', ['kv']);
		this.go.vl(this, 'jn', ['nz', 'ai']);

		this.cg = new ax({
			ls:'owtoj',
			vb:'0',
			zg:'disabled',
			kd:[this, 'ui', 'vg']
		});

		this.xf = new bf(this);

		this.ar = new ti();
		this.ar.kp = new ec(this);

		this.zi = new xp(this.oc.bx('wx'));
		this.zi.ea(this.go);
		this.zi.ea(this.cg);

		this.nq = new xp(this.oc.bx('te'));
		this.nq.ea(this.ar);
		this.nq.ea(this.xf);
	}

	wl()
	{
		if (this.bv)
		{
			this.ye();

			if (this.uv.qr)
			{
				this.sc('');
				this.ar.vd();
			}
		}
	}

	oj(cr)
	{
		this.go.focus();

		if (cr == 'ws')
		{
			this.go.select();
		}
	}

	ta()
	{
		if (this.xf.cb)
		{
			this.xf.ie.iq();
		}
	}

	ma(lx)
	{
		if (lx == 'xs')
			return this.bt();
	}

	vr(oc)
	{
		this.nq.nu(oc);
	}

	pm()
	{
		if (this.bv)
		{
			this.ye();
		}
	}

	jn()
	{
		let q = this.kr();

		switch (true)
		{
			case (!q):
				return;

			case (!dk.wb):
				return this.ar.hn('zw');

			case (this.uv.uk):
			{
				if (!this.uv.js)
					return;

				if (q == this.uv.pj)
				{
					return this.ar.hn('qx');
				}
			}
		}

		this.lo(q);
	}

	ny()
	{
		if (!dk.wb)
			return this.ar.hn('zw');

		this.lh(':all');
	}

	get tz()
	{
		return this.uv.tz;
	}

	ui()
	{
		this.nk(new cs);
	}

	lo(q)
	{
		this.uv.search(q);
		this.ar.hn('yg');
	}

	ye()
	{
		this.uv.kj();
	}

	bt()
	{
		let q = cw.hr(dk.cd.currentTime);

		this.lh(q);
	}

	kr()
	{
		return this.go.value;
	}

	sc(q)
	{
		this.go.value = q;
	}

	lh(q)
	{
		this.sc(q);
		this.lo(q);
	}

	get bv()
	{
		if (dk.wb && dk.zt != this.vu)
		{
			return Boolean(this.vu = dk.zt);
		}

		return false;
	}
}

class hi
{
	constructor()
	{
		this.lv = lv.yi('qa', this.hb.bind(this));

		this.pj = '';
		this.dq = 0;
		this.sf = 0;
		this.fr = 500;
		this.js = false;
		this.qr = false;
		this.cm = [];
		this.kt = 25;
	}

	hb(sp)
	{
		const ih = sp.ih;

		switch (sp.lk)
		{
			case 'fk':
				return this.fa(ih);

			case 'eu':
				return this.qg(ih);

			case 'zf':
				return this.oe(ih);
		}
	}

	get uk()
	{
		return this.js || this.dy('sf') < 500;
	}

	get tz()
	{
		return this.cm.splice(0, this.kt);
	}

	kj()
	{
		this.lv.po('eu', new ov(''));
	}

	search(q)
	{
		this.xv(q);

		this.lv.po('fk', new ov(q));
	}

	oe(zf)
	{
		this.jq();

		this.kp.oe(zf.lx);
	}

	fa(r)
	{
		this.jq();

		let un = this.fr - this.dy('dq');

		(r.fs == 0) && (un = 200);

		this.cm = r.lr;
		this.qr = (r.fs == 0);

		setTimeout(
			_ => this.kp.fa(r.fs, r.vo),
		un);
	}

	qg(n)
	{
		this.kp.qg(n);
	}

	by(ap)
	{
		this[ap] = Date.now();
	}

	dy(ap)
	{
		return Date.now() - this[ap];
	}

	xv(q)
	{
		this.pj = q;

		this.js = true;

		this.by('dq');
	}

	jq()
	{
		this.js = false;

		this.by('sf');
	}
}

class ti extends xp
{
	constructor()
	{
		super('xp', {
			ls:'dahvj'
		});

		this.ul = {
			hz: 'no results match your query',
			yg: 'Searching...',
			qx: 'Searching still...',
			zw: 'You are not watching any video',
			qf: 'Invalid request',
			oz: 'This video has 0 comments',
			bs: 'Comments are disabled for this video.',
			va: 'check your internet connection',
			qu: 'service down for maintenance',
			fw: 'request timeout, try again',
			mw: 'feature not supported for this video',
			se: 'invalid response from server, try again',
			yl: 'something is not working properly',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'maximum allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
		};
	}

	hn(qv)
	{
		this.wv(qv);
	}

	sw(...kw)
	{
		this.ez(...kw);
	}

	og(lg, kw)
	{
		this.ez(
			cw.od(lg, kw)
		);
	}

	vd()
	{
		this.innerHTML = '';
	}

	wv(lx)
	{
		let zj = this.ul[lx];

		if (!zj)
		{
			zj = this.ul.yl;
		}

		this.ez(zj);
	}

	ez(...rs)
	{
		const fv = document.createDocumentFragment();

		for (let yv of rs)
		{
			let bk = null;

			if (typeof yv == 'string')
			{
				bk = document.createTextNode(yv);
			}
			else {
				bk = yv.ia;
			}

			fv.appendChild(bk);
		}

		this.vd();
		this.appendChild(fv);

		this.kp.ah();
	}
}

class bf extends ka
{
	constructor(rb)
	{
		super(rb);

		this.cb = false;
	}

	os(cr)
	{
		this.ie.iu(cr.zt, cr.eo);

		cr.uw.nb(this.ie);
	}

	im(cr)
	{
		cw.gq(dk.cd, cr.eo);
	}

	mf(pn)
	{
		const xg = [];

		for (let rd of pn)
		{
			let zq = new xp('oa');

			for (let i = 0; i < rd.length; i++)
			{
				const hu = rd[i];

				if (hu.kf > 0)
				{
					const n = i + hu.kf;

					for (let k = i; k < n; k++)
					{
						rd[k].rc = rd.slice(k + 1, n + 1).some(pi => !pi.hidden);
					}
				}

				zq.ea(
					new es(hu)
				);
			}

			xg.push(zq);
		}

		return xg;
	}

	get ie()
	{
		if (!this.cb)
		{
			this.cb = true;
			this.nw = new ev;
		}

		return this.nw;
	}
}

const or = function(uf)
{
	return {
		qg(n)
		{
			let au = n;

			if (n < 0) switch (n)
			{
				case -2:
					au = '∞';
					break;

				case -1:
					au = '∅';
					break;
			}

			uf.cg.kb(au);

			if (0 < n && n < 1000)
			{
				uf.cg.fe('normal')
			}
			else {
				uf.cg.fe('disabled');
			}
		},

		fa(fs, p)
		{
			this.qg(p);

			if (fs > 0)
			{
				uf.xf.sd();

				return uf.vr(uf.xf);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return uf.ar.hn('oz');

				case -1:
					return uf.ar.hn('bs');

				case -2:
					return uf.ar.hn('hz');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const wt = new mg({
						kh:cw.od('%s comments', p),
						kd:[uf, 'ny', 'vg']
					});

					return uf.ar.sw('Nothing found in ', wt);
				}

				return uf.ar.og('Nothing found in %s comments', p);
			}

			uf.ar.hn('hz');
		},

		oe(on)
		{
			uf.ar.hn(on);
		}
	}
}

const ec = function(uf)
{
	return {
		ah()
		{
			uf.vr(uf.ar);
		}
	}
}

class ev extends xp
{
	constructor()
	{
		super('ev');

		this.ns = this.children[0];

		this.ns.onload = () => {
			try {
				const dw = this.ns.contentDocument.body;

				this.cd = dw.querySelector('video');

				dw.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.vu;
		this.xh;
	}

	iu(zt, eo)
	{
		if (zt != this.vu) {
			this.ns.src = cw.od(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [zt, eo]
			);
		}
		else if (this.cd) {
			cw.gq(this.cd, eo);
		}

		this.vu = zt;
		this.xh = eo;
	}

	iq()
	{
		if (this.oy)
		{
			this.ab();
		}
	}
}

class es extends xp
{
	constructor(hu)
	{
		const uh = td.hd('es', hu);

		super(uh);

		this.mi(hu);
	}

	mi(hu)
	{
		this.ho(hu);
		this.jt(hu);

		if (hu.eb)
		{
			if (hu.rc)
				this.um('isbrg');

			if (hu.hidden)
				this.um('pifim');
		}

		if (hu.dr)
		{
			this.um('ahvfu');

			this.ea(
				new xp('gz', {ls:'ygadz'}), 'hf'
			);
		}
	}

	fx()
	{
		return this;
	}

	nb(ie)
	{
		this.ea(ie, 'ds');
	}

	ho(hu)
	{
		const dx = hu.ym;

		const cv = dx.replace(
			jz[6], cw.od('s%s-', hu.eb ? 48 : 80)
		);

		this.ea(new ir({
			rk:cv,
			rt:dx,
		}), 'mo');
	}

	jt(hu)
	{
		const da = new fy({
			ls:'yduto',
			zm: {
				dir:hu.pw,
				lang:hu.nx
			}
		});

		const eg = Object.keys(hu.my);

		if (eg.length)
		{
			const ae = cw.kg(hu.uj, eg);

			for (let x of ae)
			{
				if (cw.tp(x))
				{
					const a = this.ic(hu.my[x]);

					da.ea(a);
				}
				else {
					const s = td.wk(x);

					da.appendChild(s);
				}
			}
		}
		else {
			da.textContent = hu.uj;
		}

		if (hu.eb && !hu.dr)
		{
			da.um('hlcae');

			da.addEventListener('click',
				e => da.xj('hlcae')
			);
		}

		this.ea(da, 'ds');
	}

	ic(x)
	{
		let a;

		if (x.em == 'gc' && x.zt != dk.zt)
		{
			x.em = 'cj';
		}

		switch (x.em)
		{
			case 'gc':
				a = new rq(x.kh, x.eo);
				a.vl(this, 'im', 'vg');
				return a;

			case 'cj':
				a = new iz(x.kh, x.zt, x.eo);
				a.vl(this, 'os', 'vg');
				return a;

			case 'qe':
				return new mg({
					kh:x.kh,
					lp:x.ql
				});
		}
	}
}

class iz extends mg
{
	constructor(kh, zt, eo)
	{
		super({
			ls:'odizj',
			kh:kh
		});

		this.zt = zt;
		this.eo = eo;
	}

	get uw()
	{
		return this.ya('fx');
	}
}

class rq extends mg
{
	constructor(kh, eo)
	{
		super({
			ls:'odizj',
			kh:kh
		});

		this.eo = eo;
	}
}

let fj;
let fl;
let ip;
let lv;
let jc;
let gu;
let ml;
let vx;
let qy;
let dz;
let td;

if (dk.sz)
{
	fj = new xq;
	fl = new ad;
	ip = new rn;
	lv = new av;
	jc = new ng;
	gu = new tc;
	dz = new qh;

	jc.du().then(async cf =>
	{
		if (cf.zg.sq)
		{
			await fj.re();
		}

		td = new yj(cf.gn);

		vx = new qp(cf.zg);

		qy = new qb;

		jc.hw();

		fj.vc();
	});

	ip.yr && dz.zh();
}

const jz = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];