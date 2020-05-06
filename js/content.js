/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const xb = {};

for (let wg of 'object array string regex date math type std'.split(' '))
{
	xb[wg] = {};
}

xb.et = function(la, ni)
{
	return la != undefined && la.constructor === ni;
}

xb.oy = function()
{
	return xb.nk(9);
}

xb.xz = function(vt)
{
	return ha[0].test(vt);
}

xb.yv = function(tf)
{
	return Object.keys(tf).length == 0;
}

xb.jh = function(yn, tf)
{
	for (let zl in tf)
	{
		const fd = tf[zl];

		if (zl == yn) return fd;
		if (fd == yn) return zl;
	}
}

xb.dh = function(tf, jf)
{
	let vt = '';

	for (let zl in tf)
	{
		vt += zl + '=' + tf[zl] + jf;
	}

	return vt.slice(0, -1);
}

xb.aw = function(bo, kx, oc)
{
	const fq = kx + 1;

	return oc.slice(fq, fq + bo);
}

xb.zr = function(oc)
{
	return oc[oc.length - 1];
}

xb.vc = function(jy, lc)
{
	jy += '?';

	for (let zl in lc)
	{
		jy += zl + '=' + encodeURIComponent(lc[zl]) + '&';
	}

	return jy.slice(0, -1);
}

xb.lq = function(vt, vx)
{
	if (xb.et(vx, Array))
	{
		let i = 0;

		return vt.replace(ha[1], _ => vx[i++]);
	}

	return vt.replace('%s', vx);
}

xb.nz = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

xb.to = function(vt, qg)
{
	const er = xb.lq('(%s)', qg.join('|'));

	return vt.split(new RegExp(er)).filter(s => s !== '');
}

xb.lb = function(vt)
{
	return vt.toUpperCase();
}

xb.kw = function(vt)
{
	return vt.toLowerCase();
}

xb.ki = function(vt, nf)
{
	if (!nf)
	{
		vt = vt.toLowerCase();
	}

	return vt[0].toUpperCase() + vt.slice(1);
}

xb.gb = function(tr, vt)
{
	return vt.match(tr) || [];
}

xb.it = function(tr, vt)
{
	if (tr.global) return '';

	const m = xb.gb(tr, vt);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

xb.lg = function()
{
	return Math.floor(Date.now() / 1000);
}

xb.hb = function(tx)
{
	return tx < xb.lg();
}

xb.ud = function(q)
{
	const id = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = xb.it(ha[2], q);

	return Date.now() + (x[0] * id[x[1]] * 1000);
}

xb.cm = function(mz)
{
	let x = mz.split(':'),
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

xb.sd = function(ws)
{
	let oc = [];

	oc.push(ws / 3600);

	ws %= 3600;

	oc.push(ws / 60);

	oc.push(ws % 60);

	oc = oc.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return oc.join(':').replace(ha[3], '');
}

xb.nk = function(md)
{
	return Math.random().toString().slice(2, md + 2);
}

xb.zn = function(tn, fk)
{
	const tu = Math.random() * (fk - tn) + tn;

	return Math.floor(tu);
}

xb.kq = function(x, a, b)
{
	return x >= a && x <= b;
}

xb.qb = function(a, b)
{
	return 100 * (a / b);
}

xb.nj = function()
{
	let mp, ul = 0;

	try {
		mp = [qw, fl, ot];
	}
	catch (e) {
		mp = [am, ot];
	}

	mp.forEach(
		ip => ul += ip.toString().length
	);

	return ul != 2035;
}

class bt
{
	constructor(sl, oq)
	{
		this.sl = sl;
		this.oq = oq;
	}
}

class cj
{
	constructor(sn, sl, oq)
	{
		this.sn = sn;
		this.ge = new bt(sl, oq);
	}
}

class ef extends Array
{
	constructor(vw)
	{
		super();

		if (vw != null)
		{
			super.push(vw);
		}
	}

	push(wh)
	{
		return !this.includes(wh) && super.push(wh);
	}
}

class fv
{
	constructor(ke, io)
	{
		const ip = ke.status;

		this.ip = ip;
		this.oa = false;
		this.pn = false;
		this.nw = null;
		this.oq = null;

		switch (io)
		{
			case 'error':
				return this.oi('yx');

			case 'timeout':
				return this.oi('rk');

			default:
			{
				this.oa = (ip == 200);

				if (ip >= 500)
				{
					return this.oi('rd');
				}

				try {
					this.oq = JSON.parse(ke.responseText);
				}
				catch (e) {
					this.oq = ke.responseText;
				}
			}
		}
	}

	sm(ia)
	{
		this.nw = ia;
	}

	oi(ia)
	{
		this.sm(ia);

		this.pn = true;
	}
}

class zj
{
	constructor(oq, ka)
	{
		Object.assign(this, oq);

		Object.defineProperty(this, 'ka', {
			value: ka
		});
	}

	set(zl, fd)
	{
		this[zl] = fd;

		this.hw();
	}

	hw()
	{
		return wp.set(this.ka, this);
	}
}

class ot extends zj
{
	constructor(oq, ka)
	{
		super(oq, ka);
	}

	get ye()
	{
		return Boolean(this.hk)
	}

	get hk()
	{
		return this[0];
	}

	get uo()
	{
		return this[1];
	}

	get wf()
	{
		return xb.hb(this.uo);
	}

	get pi()
	{
		const dm = this.uo.toString().split('').pop();

		return Boolean(+dm);
	}

	set hk(zl)
	{
		this.set(0, zl);
	}

	set uo(jm)
	{
		this.set(1, jm);
	}

	get da()
	{
		let s = this.uo.toString(),
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

class bh
{
	constructor(ja)
	{
		if (ja)
		{
			this.tk();
		}
	}

	zf(qi, ky, ci)
	{
	}

	tk()
	{
		chrome.runtime.onMessage.addListener(
			this.zf.bind(this)
		);
	}
}

class oj extends bh
{
	constructor()
	{
		super(false);
	}

	zf(qi, ky, ci)
	{
		const oq = qi.oq;

		switch (qi.sl)
		{
			case 'vq':
				return this.cs(oq);
		}
	}

	cs(vq)
	{
		if (vq == 'ik')
		{
			fi.fq();
		}
	}

	wz()
	{
		return this.sr('wz');
	}

	vb(jp)
	{
		return this.sr('vb', jp);
	}

	gh(hk)
	{
		return this.sr('gh', hk);
	}

	rt()
	{
		return this.sr('rt');
	}

	qf()
	{
		return this.sr('qf');
	}

	sr(sl, oq)
	{
		const qi = new bt(sl, oq);

		return new Promise(ci =>
		{
			try {
				chrome.runtime.sendMessage(qi, ci);
			}
			catch (e) {
			}
		});
	}
}

class fm extends bh
{
	constructor()
	{
		super(true);
	}

	zf(qi, ky, ci)
	{
		const pz = function(...vx)
		{
			try {
				ci(...vx);
			}
			catch (e) {
			}
		};

		fw.yi.then(_ =>
		{
			const oq = qi.oq;

			switch (qi.sl)
			{
				case 'wz':
					fw.wz().then(pz);
				break;

				case 'vb':
					fw.vb(oq).then(pz);
				break;

				case 'gh':
					fw.gh(oq).then(pz);
				break;

				case 'rt':
					kz.mr.rt(oq).then(pz);
				break;

				case 'qf':
					fw.tw();
				break;
			}
		});

		return true;
	}
}

class vd
{
	get(zl)
	{
		return new Promise(du =>
		{
			try {
				chrome.storage.local.get(zl, su =>
					du(typeof zl == 'string' ? su[zl] : su)
				);
			}
			catch (e) {
			}
		});
	}

	set(zl, fd)
	{
		let oq;

		if (typeof zl == 'object')
		{
			oq = zl;
		}
		else {
			oq = {[zl]:fd};
		}

		return new Promise(nt =>
		{
			try {
				chrome.storage.local.set(oq, nt);
			}
			catch (e) {
			}
		});
	}

	uq()
	{
		return new Promise(nt =>
		{
			try {
				chrome.storage.local.clear(nt);
			}
			catch (e) {
			}
		});
	}
}

class rkstz
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			cj => this.dg(cj)
		);

		Port.onDisconnect.addListener(
			_ => this.gl()
		);

		this.Port = Port;

		this.zc = {
		};

		this.zd = false;
	}

	zf(m)
	{
	}

	sf(sn, sl, oq)
	{
		const yu = new cj(sn, sl, oq);

		if (!this.zd)
		{
			this.Port.postMessage(yu);
		}
	}

	dg(x)
	{
		this.nr(x.sn).zf(x.ge);
	}

	nr(sn)
	{
		return this.zc[sn] || this;
	}

	ym(sn, zf, gl)
	{
		return this.zc[sn] = new bs(this, sn, zf, gl);
	}

	gl()
	{
		this.zd = true;

		for (let sn in this.zc)
		{
			this.nr(sn).gl();
		}
	}
}

class qe extends rkstz
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	zf(qi)
	{
		const oq = qi.oq;

		switch (qi.sl)
		{
			case 'ts':
				return vo.cb(oq);
		}
	}

	ym(sn, zf, gl)
	{
		this.sf(null, 'ym', sn);

		return super.ym(sn, zf, gl);
	}

	gl()
	{
		super.gl();

		fi.ux();
	}
}

class je extends rkstz
{
	constructor(gp)
	{
		super(gp);
	}

	zf(qi)
	{
		switch (qi.sl)
		{
			case 'ym':
				return this.ym(qi.oq);
		}
	}

	ym(sn)
	{
		const od = super.ym(sn);

		switch (sn)
		{
			case 'bn':
				return new nv(od);
		}
	}
}

class xd
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			xv => this.gz(xv)
		);

		this.pf = [];
	}

	gz(gp)
	{
		this.pf.push(
			new je(gp)
		);
	}

	jt(pl)
	{
		for (let gp of this.pf)
		{
			gp.sf(null, 'ts', pl);
		}
	}
}

class bs
{
	constructor(gp, sn, zf, gl)
	{
		this.gp = gp;

		this.sn = sn;

		if (zf)
		{
			this.zf = zf;
		}

		if (gl)
		{
			this.gl = gl;
		}
	}

	sf(sl, oq)
	{
		this.gp.sf(this.sn, sl, oq);
	}

	zf(m)
	{
	}

	gl()
	{
	}
}
class wc
{
	or(ji)
	{
		this.ji = ji;
	}

	cz(mi, ky)
	{
		if (mi in this && this != ky)
		{
			return this[mi](ky);
		}

		if (this.bf)
		{
			return this.bf.cz(mi, ky);
		}
	}

	get bf()
	{
		return this.ji || this.qk;
	}
}

const ov = function(ug, ms)
{
	return new ms(ug);
}

class sw extends wc
{
	constructor(ai)
	{
		super();

		this.ek = ai;

		this.ap('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	ba(jg)
	{
		if (typeof jg == 'string')
		{
			jg = [jg];
		}

		this.ek.classList.add(...jg);
	}

	xm(jg)
	{
		this.ek.classList.remove(jg);
	}

	zh(jg)
	{
		this.ek.classList.contains(jg) ? this.xm(jg)
												: this.ba(jg);
	}

	dt()
	{
		this.ek.remove();
	}

	ap(...uj)
	{
		for (let x of uj) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.ek[x] instanceof Function)
			{
				this[x] = this.ek[x].bind(this.ek);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.ek[x];
					},
					set(v) {
						this.ek[x] = v;
					}
				});
			}
		}
	}
}

class pw extends sw
{
	constructor(lv, ns)
	{
		super(
			typeof lv == 'string' ? xw.mw(lv) : lv
		);

		this.qk = null;
		this.mu = [];
		this.ro = {};
		this.rf = {};

		if (ns)
		{
			if (ns.vi)
			{
				this.ba(ns.vi);
			}

			if (ns.te)
			{
				this.textContent = ns.te;
			}

			if (ns.ea)
			{
				this.cd(...ns.ea);
			}

			if (ns.yo)
			{
				for (let hf in ns.yo)
				{
					this.setAttribute(hf, ns.yo[hf]);
				}
			}

			if (ns.import)
			{
				for (let ez of ns.import)
				{
					this.ap(ez);
				}
			}
		}
	}

	wj(ri, ar)
	{
		if (ri.qk)
		{
			if (ri.qk == this)
				return;

			ri.jw();
		}

		ri.qk = this;
		this.mu.push(ri);

		switch (typeof ar)
		{
			case 'string':
				return this.lo(ar).appendChild(ri.ek);

			case 'number':
				return this.ek.prepend(ri.ek);

			default:
				return this.appendChild(ri.ek);
		}
	}

	lo(wq)
	{
		return this.querySelector('#' + wq);
	}

	up(ea, mi, mj)
	{
		this.ea = {};

		this.cd(ea, mi, mj);
	}

	cd(ea, mi, mj)
	{
		if (typeof mj == 'string')
		{
			mj = [mj];
		}

		for (let hm of mj)
		{
			if (!this.rf[hm])
			{
				this.rf[hm] = new Map;

				this.addEventListener(
					xb.jh(hm, pw.ma), e => this.no(e)
				);
			}

			this.rf[hm].set(ea, mi)
		}
	}

	df(hm)
	{
		const rf = this.rf[hm];

		if (rf)
		{
			for (let [ea, mi] of rf)
			{
				ea.cz(mi, this);
			}
		}
	}

	yd()
	{
		this.hidden = true;
	}

	gx()
	{
		this.hidden = false;
	}

	uq()
	{
		let i = this.mu.length;

		while (i--)
		{
			this.mu[i].jw();
		}
	}

	jw()
	{
		this.qk.td(this);
	}

	tg(ri)
	{
		this.appendChild(ri.ek);
	}

	td(ri)
	{
		ri.qk = null;

		this.mu.splice(
			this.mu.indexOf(ri), 1
		);

		ri.ek.remove();
	}

	no(e)
	{
		e.stopPropagation();

		this[xb.jh(e.type, pw.ma)](e);
	}

	ow()
	{
		this.df('ow');
	}
}

pw.ma = {
	ow:'click',
	cx:'paste',
	vp:'keyup',
	ay:'keyup',
	ut:'focus',
};

class om extends pw
{
	constructor(ns)
	{
		super('om', ns);
	}
}

class iw extends pw
{
	constructor()
	{
		super('iw');

		this.ap('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			dn.jx(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class hc extends iw
{
	constructor(ij)
	{
		super();

		this.ij = ij;

		this.fu;

		this.addEventListener('scroll',
			_ => this.ep()
		);
	}

	os()
	{
	}

	ex()
	{
		this.uq();
		this.mx();
		this.vj();

		this.ou();
	}

	ep()
	{
		if (this.ib && this.qa)
		{
			this.vj();
		}
	}

	mx()
	{
		this.fu = this.os(this.ij.zx);
	}

	vj()
	{
		for (let ri of this.fu)
		{
			this.wj(ri);
		}

		this.mx();
	}

	ou()
	{
		this.xm('kaebx');

		if (this.ne)
		{
			this.ba('kaebx');
		}
	}

	get ne()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get ib()
	{
		return this.fu.length;
	}

	get qa()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class dc extends pw
{
	constructor(dl, zv)
	{
		super('dc');

		this.ap('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.ew = dl;

		this.nh(dl, zv);

		this.ol();
		this.fg();
	}

	gv(mn)
	{
		for (let k in mn)
		{
			this.style[k] = mn[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	nh(dl, zv)
	{
		const x = window.innerHeight - zv;
		const y = window.innerWidth - dl - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = dl + 'px';
	}

	ol()
	{
		let hj = this.querySelectorAll('[resize]');

		for (let ua of hj)
		{
			ua.addEventListener('pointerdown',
				e => this.ny(e, 'ct')
			);
		}
	}

	fg()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.ny(e, 'yp')
		);
	}

	ny(e, mi)
	{
		if (e.which == 1)
			this[mi](e);
	}

	fe()
	{
		return this.getBoundingClientRect();
	}

	ct(e)
	{
		const rl = e.target.getAttribute('resize'),
				lk = rl.includes('w'),
				sh = rl.includes('n'),
				aq = rl.includes('e');

		const xl = this.fe(),
				ew = this.ew,
				xi = 56,
				my = fy.vs,
				hq = window.innerHeight - xi,
				ps = e.clientX,
				qu = e.clientY,
				hg = xl.x,
				hx = xl.y,
				eh = xl.width;

		let gs = 0,
				xf = 0,
				pb = hg,
				sg = hx,
				ze = eh;

		let fc = (e) =>
		{
			gs = e.clientX - ps;
			xf = e.clientY - qu;

			if (sh)
			{
				sg = hx + xf;

				(sg < 0) && (sg = 0);

				(sg > hq) && (sg = hq);

				this.style.top = sg + 'px';
			}

			if (aq)
			{
				ze = eh + gs;

				(e.clientX > my) && (ze = my - hg);

				(ze < ew) && (ze = ew);

				this.style.width = ze + 'px';
			}

			if (lk)
			{
				pb = hg + gs;
				ze = eh - gs;

				if (pb < 0)
				{
					pb = 0;
					ze = eh + hg;
				}

				if (ze < ew)
				{
					pb = hg + (eh - ew);
					ze = ew;
				}

				this.style.width = ze + 'px';
				this.style.left = pb + 'px';
			}
		};

		let pr = () => {
			(gs != 0 || xf != 0) && this.zm();
		};

		this.oe(fc, pr);
	}

	yp(e)
	{
		let hg = this.offsetLeft,
			ps = e.clientX,
			gs = 0;

		let fc = (e) => {
			gs = e.clientX - ps;
			this.style.left = hg + gs + 'px';
		};

		let pr = () => {
			(gs != 0) && this.zm();
		};

		this.oe(fc, pr);
	}

	oe(fc, pr)
	{
		dn.bw(true);

		document.onpointermove = (e) => fc(e);

		document.onpointerup = (e) => {
			dn.bw(false);
			pr();
			document.onpointerup = document.onpointermove = null;
		};
	}

	zm()
	{
		if (this.hidden) return;

		let xl = this.fe();

		let mn = {
			width: xb.qb(xl.width, window.innerWidth),
			left: xb.qb(xl.x, window.innerWidth),
			top: xb.qb(xl.y, window.innerHeight),
		};

		this.gv(mn);

		if ('nm' in this.ro)
		{
			this.ro.nm(mn);
		}
	}
}

class bz extends dc
{
	constructor(dl, zv)
	{
		super(dl, zv);

		this.addEventListener('wheel', dn.jx);
	}
}

class lr extends pw
{
	constructor(ns)
	{
		super('lr', ns);

		this.ap('src');

		if (ns.qy)
		{
			this.addEventListener('error', e => this.src = ns.qy, {once:true});
		}

		this.src = ns.ae;
	}
}

class mo extends pw
{
	constructor(lv, ns)
	{
		super(lv, ns);

		this.uh = [];
		this.fa = false;
	}

	vp(e)
	{
		if (e.key == 'Enter')
		{
			this.df('ay');
		}

		this.df('vp');
	}

	cx(e)
	{
		setTimeout(
			_ => this.df('cx'),
		10);
	}

	ut(e)
	{
		this.df('ut');
	}

	get kc()
	{
		if (!this.fa)
		{
			const rh = Date.now();

			const md = this.uh.push(rh);

			if (md > 3)
			{
				if (rh - this.uh[0] < 2000)
				{
					this.fa = true;

					setTimeout(
						_ => this.fa = false,
					20 * 1000);
				}
				else {
					this.uh.length = 0;
				}
			}
		}

		return this.fa;
	}
}

class wu extends mo
{
	constructor(ns)
	{
		super('wu', ns);

		this.ap('placeholder', 'focus', 'select');

		if (ns && ns.placeholder)
		{
			this.placeholder = ns.placeholder;
		}
	}

	get value()
	{
		return this.ek.value.trim();
	}

	set value(s)
	{
		this.ek.value = String(s).trim();
	}
}

class lh extends mo
{
	constructor(ns)
	{
		super('lh', ns);

		this.nh();
	}

	nh()
	{
		this.pu = new wu();

		this.wj(this.pu, 'jk');

		this.bd = new yg();

		this.wj(this.bd, 'jk');

		this.yw = this.lo('yw');
	}

	focus()
	{
		this.pu.focus();
	}

	get value()
	{
		return this.pu.value;
	}

	cv(gq, te)
	{
		this.bd.tj(gq);

		this.yw.textContent = te || '';
	}
}

class px extends pw
{
	constructor(lv, ns)
	{
		super(lv, ns);

		this.tj(ns.gq || 'initial');
	}

	get dv()
	{
		return this.gq == 'disabled';
	}

	get wd()
	{
		return this.gq == 'selected';
	}

	tj(gq)
	{
		this.gq = gq;

		this.setAttribute('state', gq);
	}

	no(e)
	{
		if (!this.dv)
		{
			super.no(e);
		}
	}
}

class qj extends px
{
	constructor(ns)
	{
		super('qj', ns);

		if (ns.ls)
		{
			this.xr(ns.ls);
		}

		if (ns.tb)
		{
			this.re(ns.tb);
		}
	}

	xr(te)
	{
		this.textContent = te;
	}

	re(lv)
	{
		const tb = xw.mw(lv);

		this.appendChild(tb);
	}
}

class op extends qj
{
	constructor(ns)
	{
		super(ns);

		this.value = ns.value;
	}

	ow()
	{
		if (this.wd)
		{
			this.tj('initial');
		}
		else {
			this.tj('selected');
		}

		super.ow();
	}
}

class lx extends pw
{
	constructor(ns)
	{
		super('lx', ns);

		if (ns.ag)
		{
			this.setAttribute('href', ns.ag);
		}
	}
}

class yg extends pw
{
	constructor(ns)
	{
		super('yg', ns);
	}

	tj(gq)
	{
		this.setAttribute('state', gq);
	}
}

class tz extends wc
{
	constructor(ri, zt)
	{
		super();

		this.ri;

		this.an;

		this.children = [];

		this.es(ri, zt);
	}

	es(ri, zt)
	{
		ri.or(this);

		if (zt)
		{
			ri.ro = new ov(this, zt);
		}

		this.ri = ri;

		this.ie();
	}

	gy(wt, gi)
	{
		this.an = new wt;

		if (gi)
		{
			this.an.ro = new ov(this, gi);
		}

		this.tv();
	}

	tv()
	{
	}

	ie()
	{
	}

	eo(ky)
	{
		if (this.ld)
		{
			this.ld.eo(ky);
		}

	}

	wa(ky)
	{
		if (this.ld)
		{
			this.ld.wa(ky);
		}

	}

	js(ky)
	{
		if (this.ld)
		{
			this.ld.js(ky);
		}

	}

	ev(ky)
	{
		if (this.ld)
		{
			this.ld.ev(ky);
		}

	}

	ec(wq)
	{
	}

	gx(kl, ky)
	{
		this.ri.appendChild(kl.ri.ek);
	}

	po(kl)
	{
		this.pc.zq(kl);
	}

	sk()
	{
		this.pc.ko();
	}

	zq(mh, is)
	{
		mh.or(this);

		mh.eo();

		this.children.push(mh);

		this.ri.wj(mh.ri, is);

		mh.wa();
	}

	ko()
	{
		this.children.pop().hp();
	}

	get pc()
	{
		let ih = this;

		while (ih.ji)
		{
			ih = ih.ji;
		}

		return ih;
	}

	get rb()
	{
		return this.children.length;
	}

	get ld()
	{
		return xb.zr(this.children);
	}

	hp()
	{
		this.ri.dt();

		for (let mh of this.children)
		{
			mh.hp();
		}
	}
}

class ed extends tz
{
	constructor()
	{
		const ri = new pw('vu');

		super(ri);
	}

	ie()
	{
		this.xj = new qj({
			vi:['qpzms', 'zizue'],
			tb:'rg',
			gq:'hidden',
			ea:[this, 'sp', 'ow']
		});

		this.ri.wj(this.xj);
	}

	sp()
	{
		this.ko();

		this.iq();
	}

	qh()
	{
		this.xj.tj('hidden');
	}

	zq(mh)
	{
		super.zq(mh, 'ue');

		this.iq();
	}

	iq()
	{
		if (this.rb > 1)
		{
			this.xj.tj('initial');
		}
		else {
			this.xj.tj('hidden');
		}
	}




}

xb.xa = function(gd, pq)
{
	gd.currentTime = pq;

	if (gd.paused)
	{
		gd.play();
	}
}

function openWindow(jy)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = xb.dh(q, ',');

	return window.open(jy, '', q);
}

class qt
{
	constructor(q)
	{
		Object.assign(this, {
			ti: q,
			pd: kp.pd,
			yq: kp.gd.duration,
			vg:kp.gd.currentTime
		});
	}
}

class db
{
	constructor()
	{
		this.np = navigator.platform.includes('Mac');
	}

	get vs()
	{
		return !this.np ? document.body.clientWidth : window.innerWidth;
	}
}

const kp = {
	get bq()
	{
		return ['www', 'music'].includes(this.cw);
	},

	get dj()
	{
		return location.pathname == '/watch';
	},

	get gd()
	{
		if (!this.yf)
		{
			this.yf = dn.querySelector('video');
		}

		return this.yf || document.createElement('video');
	},

	get pd()
	{
		return xb.it(ha[4], location.href);
	},

	get cw()
	{
		return location.host.split('.')[0];
	}
}

class gn
{
	constructor(og)
	{
		this.bm = document.createElement('div');

		this.qc = {};

		for (let eb of this.qz(og).children)
		{
			const zb = eb.getAttribute('protoid');

			if (zb) {
				eb.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.qc[zb] = eb.outerHTML;
		}
	}

	mw(lv, sc)
	{
		let wx = this.qc[lv];

		if (sc)
		{
			wx = wx.replace(ha[5], (_, zl) => sc[zl]);
		}

		return this.qz(wx);
	}

	aj(te)
	{
		const s = document.createElement('span');

		s.textContent = te;

		return s;
	}

	qz(wx)
	{
		this.bm.innerHTML = wx;

		return this.bm.children[0];
	}
}

class gk extends sw
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.ey = 'fullscreenchange';
			this.pt = 'fullscreenElement';
		}
		else {
			this.ey = 'webkitfullscreenchange';
			this.pt = 'webkitFullscreenElement';
		}

		this.ad();

		document.addEventListener(
			this.ey, _ => this.ad()
		);
	}

	get kj()
	{
		return Boolean(document[this.pt]);
	}

	rx()
	{
		this.ba('ahbmh');
	}

	bw(hd)
	{
		hd ? this.ba('fcxfs')
			: this.xm('fcxfs');
	}

	jx(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	ad()
	{
		this.setAttribute('cs-fullscreen', this.kj);
	}
}

class am
{
	constructor()
	{
		this.xs = {
			eq: '/html/svg/1.svg',
		}
	}

	on()
	{
		xb.nj() && pg.qf();
	}

	async nb()
	{
		gf = await wp.get('1');

		gf = new ot(gf);
	}

	xk(wq)
	{
		return chrome.runtime.getURL(this.xs[wq]);
	}
}

class qw extends tz
{
	constructor(gq)
	{
		const ri = new bz(460, 480);

		super(ri, zo);

		this.gy(ir);

		vo.zg(this, [
			'rz', 'uw', 'qs', 'gt'
		]);

		this.zk = false;

		switch (true)
		{
			case (gq.xp):
				return this.zq(new ah);

			case (gq.rp):
				return this.zq(new bg);

			default:
				this.zi();
		}
	}

	ie()
	{
		this.ri.wj(new qj({
			vi:['qpzms', 'sixdp'],
			tb:'qp',
			ea:[this, 'xh', 'ow']
		}));

		document.body.appendChild(this.ri.ek);
	}

	tv()
	{
		this.an.fe.then(
			mn => mn && this.ri.gv(mn)
		);
	}

	ec(wq)
	{
		switch (wq)
		{
			case 'rz':
				return this.fq('va');

			case 'uw':
				return this.fq('hn');

			case 'qs':
				return this.xh();

			case 'gt':
				return this.rq();
		}
	}

	zi()
	{
		this.zq(new jv);
	}

	rq()
	{
		this.ko();

		this.zi();
	}

	fq(ky)
	{
		this.ld.eo(ky);

		this.ri.gx();

		this.ld.wa(ky);

		this.zk = true;
	}

	xh(ky)
	{
		this.ld.js(ky);

		this.ri.yd();
	}

	ux()
	{
		this.zq(new ak);
	}
}

class ir
{
	get fe()
	{
		return wp.get('appPosition');
	}

	zs(vi)
	{
		(vi.width > 100) && (vi.width = 100);

		(vi.left < 0) && (vi.left = 0);

		if (vi.left + vi.width > 100)
		{
			vi.left = 100 - vi.width;
		}

		wp.set('appPosition', vi);
	}
}

const zo = function(ug)
{
	return {
		nm(mn)
		{
			ug.an.zs(mn);
		}
	}
}

class le
{
	static iz(zl)
	{
		return zl == 'Enter';
	}

	static lu(zl)
	{
		return ['Control','Meta'].includes(zl);
	}
}

class gm
{
	constructor()
	{
		window.addEventListener('keydown', e => this.kn(e), true);
	}

	kn(e)
	{
		this.iu(e);

		const ip = this.ip;

		if (this.uk)
		{
			if (ip == 'KeyS')
			{
				e.preventDefault();

				return vo.cb('rz');
			}

			if (ip == 'KeyE' && kp.dj)
			{
				e.preventDefault();

				return vo.cb('uw');
			}

			if (ip == 'KeyX' && dn.kj)
			{
				return vo.cb('qs');
			}
		}

		if (ip == 'Escape')
		{
			return vo.cb('qs');
		}
	}

	iu(e)
	{
		this.ip = e.code;

		this.uk = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get ft()
	{
		return this.ip == 'KeyV';
	}
}

class dw
{
	constructor()
	{
		this.ph = {};
	}

	cb(pl)
	{
		let cp = this.wo(pl);

		for (let yc of cp)
		{
			yc.ec(pl);
		}
	}

	zg(yc, vo)
	{
		if (typeof vo == 'string')
		{
			vo = [vo];
		}

		for (let wq of vo)
		{
			this.wo(wq).push(yc);
		}
	}

	wo(pl)
	{
		return this.ph[pl] || (this.ph[pl] = new ef);
	}
}

class cy extends tz
{
	constructor()
	{
		const ri = new pw('na');

		super(ri);
	}

	ho()
	{
		pg.fs();

		this.sk();
	}
}

class ah extends tz
{
	constructor()
	{
		super(
			new pw('jd')
		);
	}

	ie()
	{
		const rj = new qj({
			vi:'gzfcg',
			ls:'Update Now',
			ea:[this, 'uv', 'ow']
		});

		this.ri.wj(rj, 'pm');
	}

	uv()
	{
		window.open('https://cs.lett.app/update');
	}
}

class ya extends tz
{
	constructor()
	{
		const ri = new pw('sv');

		super(ri);
	}

	ie()
	{
		this.ri.wj(new qj({
			vi:['zizue', 'qpzms'],
			tb:'rg',
			ea:[this, 'sk', 'ow']
		}));
	}
}

class ak extends tz
{
	constructor()
	{
		const ri = new pw('cf');

		super(ri);
	}
}

class bg extends tz
{
	constructor()
	{
		const ri = new pw('pw');

		super(ri);

		this.ob();

		vo.zg(this, [
			'vm', 'kv'
		]);
	}

	async ec(wq)
	{
		await fw.nb();

		switch (wq)
		{
			case 'vm':
				return this.ob();

			case 'kv':
				return this.jz();
		}
	}

	ob()
	{
		if (!gf.hk)
		{
			return this.zq(new fj);
		}

		if (!gf.pi)
		{
			return this.zq(new oz);
		}

		this.ok();
	}

	kt()
	{
		this.ok();
	}

	jz()
	{
		!fi.zk && this.ok();
	}

	ok()
	{
		vo.cb('gt');
	}
}

class fj extends tz
{
	constructor()
	{
		const ri = new pw('sz');

		super(ri);
	}

	ie()
	{
		this.zp = new lh({
			ea:[this, 'gh', ['cx', 'ay']]
		});

		this.ri.wj(this.zp, 'xu');

		this.ri.wj(
			new lr({
				ae:fw.xk('eq')
			}), 'pe'
		);

		this.ri.wj(
			new lx({te:'Need help?', ag:'https://cs.lett.app/generating-youtube-api-key'}), 'kf'
		);
	}

	wa()
	{
		this.zp.focus();
	}

	gh(ky)
	{
		ky.cv('loading');

		if (!this.dr)
		{
			this.dr = true;

			pg.gh(ky.value).then(oa =>
			{
				!oa && ky.cv('error', 'try again');

				this.dr = false;
			});
		}
	}
}

class oz extends ed
{
	constructor()
	{
		super();

		this.zq(new fl);
	}

	wm()
	{
		this.zq(new sx);
	}
}

class fl extends tz
{
	constructor()
	{
		const ri = new pw('xq');

		super(ri);
	}

	ie()
	{
		const iy = [];

		iy.push(
			new qj({
				vi:'gzfcg',
				ls:'support it',
				ea:[this, 'wm', 'ow']
			})
		);

		iy.push(
			new qj({
				vi:'gzfcg',
				ls:'try it',
				ea:[this, 'kt', 'ow']
			})
		);

		gf.wf && iy.pop();

		for (let qd of iy)
		{
			this.ri.wj(qd, 'pm');
		}
	}
}

class sx extends tz
{
	constructor()
	{
		const ri = new pw('lz');

		super(ri);

		this.ei;
		this.mb;

		vo.zg(this, ['kv']);
	}

	ec(wq)
	{
		switch (wq)
		{
			case 'kv':
				return this.jz();
		}
	}

	ie()
	{
		this.bd = new yg({
			vi:'twvtr'
		});

		this.ri.wj(this.bd);

		this.jl = new wk();

		this.jl.ce(
			new om({
				vi:['ptwde', 'tsmfg'],
				te:'9'
			})
		);

		this.ri.wj(this.jl, 'jl');

		this.xy = new wk();

		this.xy.si(
			new om({
				te:'One-Time Payment via PayPal'
			})
		);

		this.ri.wj(this.xy, 'xy');

		this.kd = new qj({
			vi:['gzfcg', 'qsdvb'],
			ls:'Pay with PayPal',
		});

		setTimeout(
			_ => this.kd.cd(this, 'uz', 'ow')
		, 500);

		this.ri.wj(this.kd, 'pm');
	}

	js()
	{
		this.km();
	}

	uz()
	{
		if (this.nq)
			return;

		this.nq = true;

		this.bd.tj('loading');

		pg.rt().then(jy =>
		{
			if (jy) {
				this.pa(jy);

				this.bd.tj('waiting');
			}
			else {
				this.bd.tj('error');
			}

			this.nq = false;
		});
	}

	pa(jy)
	{
		this.km();

		this.ei = openWindow(jy);

		this.mb = setInterval(
			_ => this.ei.closed && this.km(),
		500);
	}

	km()
	{
		if (this.ei)
		{
			this.ei.close();

			this.bd.tj('initial');

			clearInterval(this.mb);
		}
	}

	jz()
	{
		this.km();

		setTimeout(_ => {
			this.cz('qh', this);
			this.gr();
		}, 900);
	}

	gr()
	{
		this.jl.ce(
			new om({vi:'tsmfg',te:'Thank You!'}), true
		);

		this.xy.si(
			new om({te:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.kd.ba('nbgqz');
			this.kd.textContent = 'Done';
			this.kd.up(this, 'ok', 'ow');
		}, 200);
	}

	ok()
	{
		this.cz('ok', this);
	}

	hp()
	{
		super.hp();

		this.km();
	}
}

class wk extends om
{
	constructor()
	{
		super();

		this.nh();
	}

	nh()
	{
		this.lp = new om({
			vi:'xyjhd'
		});

		this.wj(this.lp);
	}

	ce(wh, mq)
	{
		this.uc(wh, 0, mq);
	}

	si(wh, mq)
	{
		this.uc(wh, null, mq);
	}

	uc(wh, lm, mq)
	{
		this.lp.wj(wh, lm);

		if (mq)
		{
			this.mq(lm != null);
		}
	}

	mq(de)
	{
		let ve, eu = this.lp;

		if (de)
		{
			eu.style.transform = 'translateY(-100%)';

			ve = 'translateY(0)';
		}
		else {
			ve = 'translateY(-100%)';
		}

		setTimeout(_ => {
			eu.style.transition = 'transform 300ms';

			setTimeout(
				_ => eu.style.transform = ve,
			10);

			setTimeout(_ => {
				eu.style.transition = null;
			}, 300);
		}, 10);
	}
}

class vh extends tz
{
	constructor(we)
	{
		const ri = new iw;

		super(ri);

		this.vb(we).then(
			sy => this.ns(sy)
		);
	}

	ie()
	{
		this.ri.ba('vlizo');
	}

	ns(sy)
	{
		this.ri.innerHTML = sy;
	}

	vb(we)
	{
		const jp = xb.lq('/html/policies/%s.html', we);

		return pg.vb(jp);
	}
}

class jv extends tz
{
	constructor()
	{
		const ri = new pw('yj');

		super(ri);

		this.gy(mt, jc);

		vo.zg(this, 'uw');
	}

	ie()
	{
		this.ox = new wu({
			placeholder:'type keywords here..',
		});
		this.ox.cd(this, 'qr', ['ut']);
		this.ox.cd(this, 'kr', ['ay', 'cx']);

		this.jq = new qj({
			vi:'krije',
			ls:'0',
			gq:'disabled',
			ea:[this, 'ca', 'ow']
		});

		this.kb = new hz(this);

		this.fh = new cg();
		this.fh.ro = new sq(this);

		this.hu = new pw(this.ri.lo('gu'));
		this.hu.wj(this.ox);
		this.hu.wj(this.jq);

		this.dy = new pw(this.ri.lo('tl'));
		this.dy.wj(this.fh);
		this.dy.wj(this.kb);
	}

	eo()
	{
		if (this.qv)
		{
			this.rm();

			if (this.an.ig)
			{
				this.rs('');
				this.fh.dq();
			}
		}
	}

	wa(ky)
	{
		this.ox.focus();

		if (ky == 'va')
		{
			this.ox.select();
		}
	}

	js()
	{
		if (this.kb.wr)
		{
			this.kb.bx.sk();
		}
	}

	ec(wq)
	{
		if (wq == 'uw')
			return this.ys();
	}

	ry(ri)
	{
		this.dy.tg(ri);
	}

	qr()
	{
		if (this.qv)
		{
			this.rm();
		}
	}

	kr()
	{
		let q = this.vr();

		switch (true)
		{
			case (!q):
				return;

			case (!kp.dj):
				return this.fh.ml('af');

			case (this.an.ra):
			{
				if (!this.an.qn)
					return;

				if (q == this.an.oh)
				{
					return this.fh.ml('vf');
				}
			}
		}

		this.wn(q);
	}

	bv()
	{
		if (!kp.dj)
			return this.fh.ml('af');

		this.ht(':all');
	}

	get zx()
	{
		return this.an.zx;
	}

	ca()
	{
		this.po(new ya);
	}

	wn(q)
	{
		this.an.search(q);
		this.fh.ml('bc');
	}

	rm()
	{
		this.an.hr();
	}

	ys()
	{
		let q = xb.sd(kp.gd.currentTime);

		this.ht(q);
	}

	vr()
	{
		return this.ox.value;
	}

	rs(q)
	{
		this.ox.value = q;
	}

	ht(q)
	{
		this.rs(q);
		this.wn(q);
	}

	get qv()
	{
		if (kp.dj && kp.pd != this.mg)
		{
			return Boolean(this.mg = kp.pd);
		}

		return false;
	}
}

class mt
{
	constructor()
	{
		this.gp = gp.ym('bn', this.xc.bind(this));

		this.oh = '';
		this.jo = 0;
		this.ch = 0;
		this.xt = 500;
		this.qn = false;
		this.ig = false;
		this.me = [];
		this.ax = 25;
	}

	xc(qi)
	{
		const oq = qi.oq;

		switch (qi.sl)
		{
			case 'uf':
				return this.ur(oq);

			case 'th':
				return this.yz(oq);

			case 'nw':
				return this.gw(oq);
		}
	}

	get ra()
	{
		return this.qn || this.jn('ch') < 500;
	}

	get zx()
	{
		return this.me.splice(0, this.ax);
	}

	hr()
	{
		this.gp.sf('th', new qt(''));
	}

	search(q)
	{
		this.eg(q);

		this.gp.sf('uf', new qt(q));
	}

	gw(nw)
	{
		this.en();

		this.ro.gw(nw.wq);
	}

	ur(r)
	{
		this.en();

		let nx = this.xt - this.jn('jo');

		(r.bo == 0) && (nx = 200);

		this.me = r.py;
		this.ig = (r.bo == 0);

		setTimeout(
			_ => this.ro.ur(r.bo, r.qx),
		nx);
	}

	yz(n)
	{
		this.ro.yz(n);
	}

	xo(rw)
	{
		this[rw] = Date.now();
	}

	jn(rw)
	{
		return Date.now() - this[rw];
	}

	eg(q)
	{
		this.oh = q;

		this.qn = true;

		this.xo('jo');
	}

	en()
	{
		this.qn = false;

		this.xo('ch');
	}
}

class cg extends pw
{
	constructor()
	{
		super('pw', {
			vi:'xeqtq'
		});

		this.lj = {
			yr: 'no results match your query',
			bc: 'Searching...',
			vf: 'Searching still...',
			af: 'You are not watching any video',
			wv: 'Invalid request',
			ej: 'This video has 0 comments',
			uy: 'Comments are disabled for this video.',
			yx: 'check your internet connection',
			rd: 'service down for maintenance',
			rk: 'request timeout, try again',
			ng: 'feature not supported for this video',
			yh: 'invalid response from server, try again',
			ds: 'something is not working properly',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'maximum allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
		};
	}

	ml(ab)
	{
		this.cr(ab);
	}

	nl(...vx)
	{
		this.wl(...vx);
	}

	bl(ui, vx)
	{
		this.wl(
			xb.lq(ui, vx)
		);
	}

	dq()
	{
		this.innerHTML = '';
	}

	cr(wq)
	{
		let az = this.lj[wq];

		if (!az)
		{
			az = this.lj.ds;
		}

		this.wl(az);
	}

	wl(...lt)
	{
		const fx = document.createDocumentFragment();

		for (let mv of lt)
		{
			let dx = null;

			if (typeof mv == 'string')
			{
				dx = document.createTextNode(mv);
			}
			else {
				dx = mv.ek;
			}

			fx.appendChild(dx);
		}

		this.dq();
		this.appendChild(fx);

		this.ro.cu();
	}
}

class hz extends hc
{
	constructor(ij)
	{
		super(ij);

		this.wr = false;
	}

	qo(ky)
	{
		this.bx.vz(ky.pd, ky.fp);

		ky.hv.xg(this.bx);
	}

	wy(ky)
	{
		xb.xa(kp.gd, ky.fp);
	}

	os(ao)
	{
		const vk = [];

		for (let ql of ao)
		{
			let qm = new pw('gc');

			for (let i = 0; i < ql.length; i++)
			{
				const ln = ql[i];

				if (ln.rb > 0)
				{
					const n = i + ln.rb;

					for (let k = i; k < n; k++)
					{
						ql[k].ga = ql.slice(k + 1, n + 1).some(mh => !mh.hidden);
					}
				}

				qm.wj(
					new he(ln)
				);
			}

			vk.push(qm);
		}

		return vk;
	}

	get bx()
	{
		if (!this.wr)
		{
			this.wr = true;
			this.rc = new be;
		}

		return this.rc;
	}
}

const jc = function(ug)
{
	return {
		yz(n)
		{
			let vt = n;

			if (n < 0) switch (n)
			{
				case -2:
					vt = '∞';
					break;

				case -1:
					vt = '∅';
					break;
			}

			ug.jq.xr(vt);

			if (0 < n && n < 1000)
			{
				ug.jq.tj('normal')
			}
			else {
				ug.jq.tj('disabled');
			}
		},

		ur(bo, p)
		{
			this.yz(p);

			if (bo > 0)
			{
				ug.kb.ex();

				return ug.ry(ug.kb);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return ug.fh.ml('ej');

				case -1:
					return ug.fh.ml('uy');

				case -2:
					return ug.fh.ml('yr');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const mi = new lx({
						te:xb.lq('%s comments', p),
						ea:[ug, 'bv', 'ow']
					});

					return ug.fh.nl('Nothing found in ', mi);
				}

				return ug.fh.bl('Nothing found in %s comments', p);
			}

			ug.fh.ml('yr');
		},

		gw(ia)
		{
			ug.fh.ml(ia);
		}
	}
}

const sq = function(ug)
{
	return {
		cu()
		{
			ug.ry(ug.fh);
		}
	}
}

class be extends pw
{
	constructor()
	{
		super('be');

		this.wi = this.children[0];

		this.wi.onload = () => {
			try {
				const di = this.wi.contentDocument.body;

				this.gd = di.querySelector('video');

				di.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.mg;
		this.go;
	}

	vz(pd, fp)
	{
		if (pd != this.mg) {
			this.wi.src = xb.lq(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [pd, fp]
			);
		}
		else if (this.gd) {
			xb.xa(this.gd, fp);
		}

		this.mg = pd;
		this.go = fp;
	}

	sk()
	{
		if (this.qk)
		{
			this.jw();
		}
	}
}

class he extends pw
{
	constructor(ln)
	{
		const dz = xw.mw('he', ln);

		super(dz);

		this.nh(ln);
	}

	nh(ln)
	{
		this.tc(ln);
		this.vn(ln);

		if (ln.zu)
		{
			if (ln.ga)
				this.ba('vfojf');

			if (ln.hidden)
				this.ba('rpnmn');
		}

		if (ln.tp)
		{
			this.ba('iktpm');

			this.wj(
				new pw('zy', {vi:'kfepj'}), 'al'
			);
		}
	}

	rn()
	{
		return this;
	}

	xg(bx)
	{
		this.wj(bx, 'kn');
	}

	tc(ln)
	{
		const hs = ln.em;

		const by = hs.replace(
			ha[6], xb.lq('s%s-', ln.zu ? 48 : 80)
		);

		this.wj(new lr({
			ae:by,
			qy:hs,
		}), 'so');
	}

	vn(ln)
	{
		const fn = new om({
			vi:'cbjsq',
			yo: {
				dir:ln.sb,
				lang:ln.ix
			}
		});

		const qg = Object.keys(ln.un);

		if (qg.length)
		{
			const oc = xb.to(ln.ju, qg);

			for (let x of oc)
			{
				if (xb.xz(x))
				{
					const a = this.jr(ln.un[x]);

					fn.wj(a);
				}
				else {
					const s = xw.aj(x);

					fn.appendChild(s);
				}
			}
		}
		else {
			fn.textContent = ln.ju;
		}

		if (ln.zu && !ln.tp)
		{
			fn.ba('dcktz');

			fn.addEventListener('click',
				e => fn.xm('dcktz')
			);
		}

		this.wj(fn, 'kn');
	}

	jr(x)
	{
		let a;

		if (x.co == 'as' && x.pd != kp.pd)
		{
			x.co = 'cq';
		}

		switch (x.co)
		{
			case 'as':
				a = new au(x.te, x.fp);
				a.cd(this, 'wy', 'ow');
				return a;

			case 'cq':
				a = new ta(x.te, x.pd, x.fp);
				a.cd(this, 'qo', 'ow');
				return a;

			case 'pv':
				return new lx({
					te:x.te,
					ag:x.jy
				});
		}
	}
}

class ta extends lx
{
	constructor(te, pd, fp)
	{
		super({
			vi:'zljmd',
			te:te
		});

		this.pd = pd;
		this.fp = fp;
	}

	get hv()
	{
		return this.cz('rn');
	}
}

class au extends lx
{
	constructor(te, fp)
	{
		super({
			vi:'zljmd',
			te:te
		});

		this.fp = fp;
	}
}

let fw;
let wp;
let fy;
let gp;
let pg;
let vo;
let gf;
let fi;
let im;
let dn;
let xw;

if (kp.bq)
{
	fw = new am;
	wp = new vd;
	fy = new db;
	gp = new qe;
	pg = new oj;
	vo = new dw;
	dn = new gk;

	pg.wz().then(async kh =>
	{
		if (kh.gq.rp)
		{
			await fw.nb();
		}

		xw = new gn(kh.yb);

		fi = new qw(kh.gq);

		im = new gm;

		pg.tk();

		fw.on();
	});

	fy.np && dn.rx();
}

const ha = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];