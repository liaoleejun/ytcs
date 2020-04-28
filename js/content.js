/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const ig = {};

for (let gc of 'object array string regex date math type std'.split(' '))
{
	ig[gc] = {};
}

ig.jz = function(eu, ue)
{
	return eu != undefined && eu.constructor === ue;
}

ig.pn = function()
{
	return ig.gs(9);
}

ig.ow = function(hv)
{
	return se[0].test(hv);
}

ig.tj = function(he)
{
	return Object.keys(he).length == 0;
}

ig.qk = function(mg, he)
{
	for (let jd in he)
	{
		const xo = he[jd];

		if (jd == mg) return xo;
		if (xo == mg) return jd;
	}
}

ig.on = function(he, sa)
{
	let hv = '';

	for (let jd in he)
	{
		hv += jd + '=' + he[jd] + sa;
	}

	return hv.slice(0, -1);
}

ig.pg = function(el, na, px)
{
	const uc = na + 1;

	return px.slice(uc, uc + el);
}

ig.wz = function(px)
{
	return px[px.length - 1];
}

ig.pf = function(fm, sq)
{
	fm += '?';

	for (let jd in sq)
	{
		fm += jd + '=' + encodeURIComponent(sq[jd]) + '&';
	}

	return fm.slice(0, -1);
}

ig.xc = function(hv, sp)
{
	if (ig.jz(sp, Array))
	{
		let i = 0;

		return hv.replace(se[1], _ => sp[i++]);
	}

	return hv.replace('%s', sp);
}

ig.nu = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

ig.dn = function(hv, fa)
{
	const tv = ig.xc('(%s)', fa.join('|'));

	return hv.split(new RegExp(tv)).filter(s => s !== '');
}

ig.ge = function(hv)
{
	return hv.toUpperCase();
}

ig.wm = function(hv)
{
	return hv.toLowerCase();
}

ig.qy = function(hv, bx)
{
	if (!bx)
	{
		hv = hv.toLowerCase();
	}

	return hv[0].toUpperCase() + hv.slice(1);
}

ig.tz = function(zg, hv)
{
	return hv.match(zg) || [];
}

ig.yn = function(zg, hv)
{
	if (zg.global) return '';

	const m = ig.tz(zg, hv);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

ig.wd = function()
{
	return Math.floor(Date.now() / 1000);
}

ig.mp = function(db)
{
	return db < ig.wd();
}

ig.pe = function(q)
{
	const th = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = ig.yn(se[2], q);

	return Date.now() + (x[0] * th[x[1]] * 1000);
}

ig.gp = function(hc)
{
	let x = hc.split(':'),
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

ig.ne = function(eh)
{
	let px = [];

	px.push(eh / 3600);

	eh %= 3600;

	px.push(eh / 60);

	px.push(eh % 60);

	px = px.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return px.join(':').replace(se[3], '');
}

ig.gs = function(ni)
{
	return Math.random().toString().slice(2, ni + 2);
}

ig.ed = function(fj, ij)
{
	const eb = Math.random() * (ij - fj) + fj;

	return Math.floor(eb);
}

ig.ad = function(x, a, b)
{
	return x >= a && x <= b;
}

ig.ok = function(a, b)
{
	return 100 * (a / b);
}

ig.rw = function()
{
	let dc, lw = 0;

	try {
		dc = [qp, hm, sz];
	}
	catch (e) {
		dc = [xn, sz];
	}

	dc.forEach(
		gq => lw += gq.toString().length
	);

	return lw != 2035;
}

class hq
{
	constructor(jn, ub)
	{
		this.jn = jn;
		this.ub = ub;
	}
}

class xi
{
	constructor(eg, jn, ub)
	{
		this.eg = eg;
		this.ym = new hq(jn, ub);
	}
}

class du extends Array
{
	constructor(jk)
	{
		super();

		if (jk != null)
		{
			super.push(jk);
		}
	}

	push(xb)
	{
		return !this.includes(xb) && super.push(xb);
	}
}

class vc
{
	constructor(wt, qj)
	{
		const gq = wt.status;

		this.gq = gq;
		this.cu = false;
		this.ce = false;
		this.bw = null;
		this.ub = null;

		switch (qj)
		{
			case 'error':
				return this.vj('zm');

			case 'timeout':
				return this.vj('en');

			default:
			{
				this.cu = (gq == 200);

				if (gq >= 500)
				{
					return this.vj('kc');
				}

				try {
					this.ub = JSON.parse(wt.responseText);
				}
				catch (e) {
					this.ub = wt.responseText;
				}
			}
		}
	}

	pk(zn)
	{
		this.bw = zn;
	}

	vj(zn)
	{
		this.pk(zn);

		this.ce = true;
	}
}

class dj
{
	constructor(ub, yi)
	{
		Object.assign(this, ub);

		Object.defineProperty(this, 'yi', {
			value: yi
		});
	}

	set(jd, xo)
	{
		this[jd] = xo;

		this.iq();
	}

	iq()
	{
		return ck.set(this.yi, this);
	}
}

class sz extends dj
{
	constructor(ub, yi)
	{
		super(ub, yi);
	}

	get an()
	{
		return Boolean(this.qd)
	}

	get qd()
	{
		return this[0];
	}

	get ur()
	{
		return this[1];
	}

	get lk()
	{
		return ig.mp(this.ur);
	}

	get zq()
	{
		const tn = this.ur.toString().split('').pop();

		return Boolean(+tn);
	}

	set qd(jd)
	{
		this.set(0, jd);
	}

	set ur(yt)
	{
		this.set(1, yt);
	}

	get sv()
	{
		let s = this.ur.toString(),
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

class bc
{
	constructor(pb)
	{
		if (pb)
		{
			this.ar();
		}
	}

	jf(rh, dz, qf)
	{
	}

	ar()
	{
		chrome.runtime.onMessage.addListener(
			this.jf.bind(this)
		);
	}
}

class my extends bc
{
	constructor()
	{
		super(false);
	}

	jf(rh, dz, qf)
	{
		const ub = rh.ub;

		switch (rh.jn)
		{
			case 'fi':
				return this.gr(ub);
		}
	}

	gr(fi)
	{
		if (fi == 'un')
		{
			zw.uc();
		}
	}

	gy()
	{
		return this.hl('gy');
	}

	xp(ew)
	{
		return this.hl('xp', ew);
	}

	to(qd)
	{
		return this.hl('to', qd);
	}

	vw()
	{
		return this.hl('vw');
	}

	og()
	{
		return this.hl('og');
	}

	hl(jn, ub)
	{
		const rh = new hq(jn, ub);

		return new Promise(qf =>
		{
			try {
				chrome.runtime.sendMessage(rh, qf);
			}
			catch (e) {
			}
		});
	}
}

class xt extends bc
{
	constructor()
	{
		super(true);
	}

	jf(rh, dz, qf)
	{
		const wl = function(...sp)
		{
			try {
				qf(...sp);
			}
			catch (e) {
			}
		};

		jo.oc.then(_ =>
		{
			const ub = rh.ub;

			switch (rh.jn)
			{
				case 'gy':
					jo.gy().then(wl);
				break;

				case 'xp':
					jo.xp(ub).then(wl);
				break;

				case 'to':
					jo.to(ub).then(wl);
				break;

				case 'vw':
					cm.lr.vw(ub).then(wl);
				break;

				case 'og':
					jo.si();
				break;
			}
		});

		return true;
	}
}

class pc
{
	get(jd)
	{
		return new Promise(re =>
		{
			try {
				chrome.storage.local.get(jd, kr =>
					re(typeof jd == 'string' ? kr[jd] : kr)
				);
			}
			catch (e) {
			}
		});
	}

	set(jd, xo)
	{
		let ub;

		if (typeof jd == 'object')
		{
			ub = jd;
		}
		else {
			ub = {[jd]:xo};
		}

		return new Promise(cg =>
		{
			try {
				chrome.storage.local.set(ub, cg);
			}
			catch (e) {
			}
		});
	}

	au()
	{
		return new Promise(cg =>
		{
			try {
				chrome.storage.local.clear(cg);
			}
			catch (e) {
			}
		});
	}
}

class xigsd
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			xi => this.ua(xi)
		);

		Port.onDisconnect.addListener(
			_ => this.wu()
		);

		this.Port = Port;

		this.kx = {
		};

		this.ze = false;
	}

	jf(m)
	{
	}

	gu(eg, jn, ub)
	{
		const ns = new xi(eg, jn, ub);

		if (!this.ze)
		{
			this.Port.postMessage(ns);
		}
	}

	ua(x)
	{
		this.fs(x.eg).jf(x.ym);
	}

	fs(eg)
	{
		return this.kx[eg] || this;
	}

	rq(eg, jf, wu)
	{
		return this.kx[eg] = new cy(this, eg, jf, wu);
	}

	wu()
	{
		this.ze = true;

		for (let eg in this.kx)
		{
			this.fs(eg).wu();
		}
	}
}

class bf extends xigsd
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	jf(rh)
	{
		const ub = rh.ub;

		switch (rh.jn)
		{
			case 'gn':
				return vr.iw(ub);
		}
	}

	rq(eg, jf, wu)
	{
		this.gu(null, 'rq', eg);

		return super.rq(eg, jf, wu);
	}

	wu()
	{
		super.wu();

		zw.qt();
	}
}

class ds extends xigsd
{
	constructor(kn)
	{
		super(kn);
	}

	jf(rh)
	{
		switch (rh.jn)
		{
			case 'rq':
				return this.rq(rh.ub);
		}
	}

	rq(eg)
	{
		const dv = super.rq(eg);

		switch (eg)
		{
			case 'sx':
				return new wo(dv);
		}
	}
}

class dh
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			mo => this.zx(mo)
		);

		this.np = [];
	}

	zx(kn)
	{
		this.np.push(
			new ds(kn)
		);
	}

	vu(uv)
	{
		for (let kn of this.np)
		{
			kn.gu(null, 'gn', uv);
		}
	}
}

class cy
{
	constructor(kn, eg, jf, wu)
	{
		this.kn = kn;

		this.eg = eg;

		if (jf)
		{
			this.jf = jf;
		}

		if (wu)
		{
			this.wu = wu;
		}
	}

	gu(jn, ub)
	{
		this.kn.gu(this.eg, jn, ub);
	}

	jf(m)
	{
	}

	wu()
	{
	}
}
class ld
{
	ob(wc)
	{
		this.wc = wc;
	}

	jb(kv, dz)
	{
		if (kv in this && this != dz)
		{
			return this[kv](dz);
		}

		if (this.um)
		{
			return this.um.jb(kv, dz);
		}
	}

	get um()
	{
		return this.wc || this.tr;
	}
}

const jw = function(am, vt)
{
	return new vt(am);
}

class zo extends ld
{
	constructor(id)
	{
		super();

		this.ie = id;

		this.ye('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	ao(yh)
	{
		if (typeof yh == 'string')
		{
			yh = [yh];
		}

		this.ie.classList.add(...yh);
	}

	qs(yh)
	{
		this.ie.classList.remove(yh);
	}

	im(yh)
	{
		this.ie.classList.contains(yh) ? this.qs(yh)
												: this.ao(yh);
	}

	dk()
	{
		this.ie.remove();
	}

	ye(...ha)
	{
		for (let x of ha) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.ie[x] instanceof Function)
			{
				this[x] = this.ie[x].bind(this.ie);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.ie[x];
					},
					set(v) {
						this.ie[x] = v;
					}
				});
			}
		}
	}
}

class gt extends zo
{
	constructor(xr, ir)
	{
		super(
			typeof xr == 'string' ? ep.pw(xr) : xr
		);

		this.tr = null;
		this.om = [];
		this.tw = {};
		this.zf = {};

		if (ir)
		{
			if (ir.go)
			{
				this.ao(ir.go);
			}

			if (ir.bm)
			{
				this.textContent = ir.bm;
			}

			if (ir.by)
			{
				this.ox(...ir.by);
			}

			if (ir.fn)
			{
				for (let ut in ir.fn)
				{
					this.setAttribute(ut, ir.fn[ut]);
				}
			}

			if (ir.import)
			{
				for (let ng of ir.import)
				{
					this.ye(ng);
				}
			}
		}
	}

	mv(cs, ko)
	{
		if (cs.tr)
		{
			if (cs.tr == this)
				return;

			cs.oe();
		}

		cs.tr = this;
		this.om.push(cs);

		switch (typeof ko)
		{
			case 'string':
				return this.mi(ko).appendChild(cs.ie);

			case 'number':
				return this.ie.prepend(cs.ie);

			default:
				return this.appendChild(cs.ie);
		}
	}

	mi(lf)
	{
		return this.querySelector('#' + lf);
	}

	zc(by, kv, ah)
	{
		this.by = {};

		this.ox(by, kv, ah);
	}

	ox(by, kv, ah)
	{
		if (typeof ah == 'string')
		{
			ah = [ah];
		}

		for (let ny of ah)
		{
			if (!this.zf[ny])
			{
				this.zf[ny] = new Map;

				this.addEventListener(
					ig.qk(ny, gt.we), e => this.mj(e)
				);
			}

			this.zf[ny].set(by, kv)
		}
	}

	vp(ny)
	{
		const zf = this.zf[ny];

		if (zf)
		{
			for (let [by, kv] of zf)
			{
				by.jb(kv, this);
			}
		}
	}

	xj()
	{
		this.hidden = true;
	}

	yb()
	{
		this.hidden = false;
	}

	au()
	{
		let i = this.om.length;

		while (i--)
		{
			this.om[i].oe();
		}
	}

	oe()
	{
		this.tr.gd(this);
	}

	qn(cs)
	{
		this.appendChild(cs.ie);
	}

	gd(cs)
	{
		cs.tr = null;

		this.om.splice(
			this.om.indexOf(cs), 1
		);

		cs.ie.remove();
	}

	mj(e)
	{
		e.stopPropagation();

		this[ig.qk(e.type, gt.we)](e);
	}

	vf()
	{
		this.vp('vf');
	}
}

gt.we = {
	vf:'click',
	ix:'paste',
	is:'keyup',
	lo:'keyup',
	dp:'focus',
};

class ph extends gt
{
	constructor(ir)
	{
		super('ph', ir);
	}
}

class op extends gt
{
	constructor()
	{
		super('op');

		this.ye('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			em.wj(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class ba extends op
{
	constructor(jh)
	{
		super();

		this.jh = jh;

		this.pl;

		this.addEventListener('scroll',
			_ => this.yq()
		);
	}

	kz()
	{
	}

	cj()
	{
		this.au();
		this.hw();
		this.xd();

		this.bp();
	}

	yq()
	{
		if (this.kb && this.xh)
		{
			this.xd();
		}
	}

	hw()
	{
		this.pl = this.kz(this.jh.yj);
	}

	xd()
	{
		for (let cs of this.pl)
		{
			this.mv(cs);
		}

		this.hw();
	}

	bp()
	{
		this.qs('ydayl');

		if (this.wh)
		{
			this.ao('ydayl');
		}
	}

	get wh()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get kb()
	{
		return this.pl.length;
	}

	get xh()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class vk extends gt
{
	constructor(pd, ai)
	{
		super('vk');

		this.ye('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.vy = pd;

		this.cx(pd, ai);

		this.kj();
		this.ex();
	}

	bv(ma)
	{
		for (let k in ma)
		{
			this.style[k] = ma[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	cx(pd, ai)
	{
		const x = window.innerHeight - ai;
		const y = window.innerWidth - pd - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = pd + 'px';
	}

	kj()
	{
		let tx = this.querySelectorAll('[resize]');

		for (let hj of tx)
		{
			hj.addEventListener('pointerdown',
				e => this.xu(e, 'yr')
			);
		}
	}

	ex()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.xu(e, 'iz')
		);
	}

	xu(e, kv)
	{
		if (e.which == 1)
			this[kv](e);
	}

	fp()
	{
		return this.getBoundingClientRect();
	}

	yr(e)
	{
		const xg = e.target.getAttribute('resize'),
				zu = xg.includes('w'),
				ke = xg.includes('n'),
				ji = xg.includes('e');

		const qw = this.fp(),
				vy = this.vy,
				kt = 56,
				ms = zk.bs,
				qx = window.innerHeight - kt,
				pt = e.clientX,
				pj = e.clientY,
				iv = qw.x,
				bj = qw.y,
				vs = qw.width;

		let jv = 0,
				qv = 0,
				cb = iv,
				bn = bj,
				sc = vs;

		let ih = (e) =>
		{
			jv = e.clientX - pt;
			qv = e.clientY - pj;

			if (ke)
			{
				bn = bj + qv;

				(bn < 0) && (bn = 0);

				(bn > qx) && (bn = qx);

				this.style.top = bn + 'px';
			}

			if (ji)
			{
				sc = vs + jv;

				(e.clientX > ms) && (sc = ms - iv);

				(sc < vy) && (sc = vy);

				this.style.width = sc + 'px';
			}

			if (zu)
			{
				cb = iv + jv;
				sc = vs - jv;

				if (cb < 0)
				{
					cb = 0;
					sc = vs + iv;
				}

				if (sc < vy)
				{
					cb = iv + (vs - vy);
					sc = vy;
				}

				this.style.width = sc + 'px';
				this.style.left = cb + 'px';
			}
		};

		let gv = () => {
			(jv != 0 || qv != 0) && this.wv();
		};

		this.yw(ih, gv);
	}

	iz(e)
	{
		let iv = this.offsetLeft,
			pt = e.clientX,
			jv = 0;

		let ih = (e) => {
			jv = e.clientX - pt;
			this.style.left = iv + jv + 'px';
		};

		let gv = () => {
			(jv != 0) && this.wv();
		};

		this.yw(ih, gv);
	}

	yw(ih, gv)
	{
		em.bd(true);

		document.onpointermove = (e) => ih(e);

		document.onpointerup = (e) => {
			em.bd(false);
			gv();
			document.onpointerup = document.onpointermove = null;
		};
	}

	wv()
	{
		if (this.hidden) return;

		let qw = this.fp();

		let ma = {
			width: ig.ok(qw.width, window.innerWidth),
			left: ig.ok(qw.x, window.innerWidth),
			top: ig.ok(qw.y, window.innerHeight),
		};

		this.bv(ma);

		if ('yl' in this.tw)
		{
			this.tw.yl(ma);
		}
	}
}

class lj extends vk
{
	constructor(pd, ai)
	{
		super(pd, ai);

		this.addEventListener('wheel', em.wj);
	}
}

class tg extends gt
{
	constructor(ir)
	{
		super('tg', ir);

		this.ye('src');

		if (ir.zl)
		{
			this.addEventListener('error', e => this.src = ir.zl, {once:true});
		}

		this.src = ir.zt;
	}
}

class ja extends gt
{
	constructor(xr, ir)
	{
		super(xr, ir);

		this.yv = [];
		this.xk = false;
	}

	is(e)
	{
		if (e.key == 'Enter')
		{
			this.vp('lo');
		}

		this.vp('is');
	}

	ix(e)
	{
		setTimeout(
			_ => this.vp('ix'),
		10);
	}

	dp(e)
	{
		this.vp('dp');
	}

	get hd()
	{
		if (!this.xk)
		{
			const rf = Date.now();

			const ni = this.yv.push(rf);

			if (ni > 3)
			{
				if (rf - this.yv[0] < 2000)
				{
					this.xk = true;

					setTimeout(
						_ => this.xk = false,
					20 * 1000);
				}
				else {
					this.yv.length = 0;
				}
			}
		}

		return this.xk;
	}
}

class xm extends ja
{
	constructor(ir)
	{
		super('xm', ir);

		this.ye('placeholder', 'focus', 'select');

		if (ir && ir.placeholder)
		{
			this.placeholder = ir.placeholder;
		}
	}

	get value()
	{
		return this.ie.value.trim();
	}

	set value(s)
	{
		this.ie.value = String(s).trim();
	}
}

class vg extends ja
{
	constructor(ir)
	{
		super('vg', ir);

		this.cx();
	}

	cx()
	{
		this.mb = new xm();

		this.mv(this.mb, 'dt');

		this.xw = new uz();

		this.mv(this.xw, 'dt');

		this.qr = this.mi('qr');
	}

	focus()
	{
		this.mb.focus();
	}

	get value()
	{
		return this.mb.value;
	}

	jy(lh, bm)
	{
		this.xw.tp(lh);

		this.qr.textContent = bm || '';
	}
}

class hu extends gt
{
	constructor(xr, ir)
	{
		super(xr, ir);

		this.tp(ir.lh || 'initial');
	}

	get ra()
	{
		return this.lh == 'disabled';
	}

	get zs()
	{
		return this.lh == 'selected';
	}

	tp(lh)
	{
		this.lh = lh;

		this.setAttribute('state', lh);
	}

	mj(e)
	{
		if (!this.ra)
		{
			super.mj(e);
		}
	}
}

class ws extends hu
{
	constructor(ir)
	{
		super('ws', ir);

		if (ir.hs)
		{
			this.gi(ir.hs);
		}

		if (ir.ml)
		{
			this.ql(ir.ml);
		}
	}

	gi(bm)
	{
		this.textContent = bm;
	}

	ql(xr)
	{
		const ml = ep.pw(xr);

		this.appendChild(ml);
	}
}

class zd extends ws
{
	constructor(ir)
	{
		super(ir);

		this.value = ir.value;
	}

	vf()
	{
		if (this.zs)
		{
			this.tp('initial');
		}
		else {
			this.tp('selected');
		}

		super.vf();
	}
}

class je extends gt
{
	constructor(ir)
	{
		super('je', ir);

		if (ir.ul)
		{
			this.setAttribute('href', ir.ul);
		}
	}
}

class uz extends gt
{
	constructor(ir)
	{
		super('uz', ir);
	}

	tp(lh)
	{
		this.setAttribute('state', lh);
	}
}

class ls extends ld
{
	constructor(cs, me)
	{
		super();

		this.cs;

		this.bo;

		this.children = [];

		this.yg(cs, me);
	}

	yg(cs, me)
	{
		cs.ob(this);

		if (me)
		{
			cs.tw = new jw(this, me);
		}

		this.cs = cs;

		this.br();
	}

	xy(nr, ri)
	{
		this.bo = new nr;

		if (ri)
		{
			this.bo.tw = new jw(this, ri);
		}

		this.lb();
	}

	lb()
	{
	}

	br()
	{
	}

	vl(dz)
	{
		if (this.aq)
		{
			this.aq.vl(dz);
		}

	}

	lm(dz)
	{
		if (this.aq)
		{
			this.aq.lm(dz);
		}

	}

	hz(dz)
	{
		if (this.aq)
		{
			this.aq.hz(dz);
		}

	}

	da(dz)
	{
		if (this.aq)
		{
			this.aq.da(dz);
		}

	}

	ef(lf)
	{
	}

	yb(oa, dz)
	{
		this.cs.appendChild(oa.cs.ie);
	}

	ti(oa)
	{
		this.sw.yp(oa);
	}

	wr()
	{
		this.sw.nl();
	}

	yp(it, wg)
	{
		it.ob(this);

		it.vl();

		this.children.push(it);

		this.cs.mv(it.cs, wg);

		it.lm();
	}

	nl()
	{
		this.children.pop().lc();
	}

	get sw()
	{
		let qe = this;

		while (qe.wc)
		{
			qe = qe.wc;
		}

		return qe;
	}

	get rs()
	{
		return this.children.length;
	}

	get aq()
	{
		return ig.wz(this.children);
	}

	lc()
	{
		this.cs.dk();

		for (let it of this.children)
		{
			it.lc();
		}
	}
}

class uw extends ls
{
	constructor()
	{
		const cs = new gt('ap');

		super(cs);
	}

	br()
	{
		this.ts = new ws({
			go:['auiqs', 'dhlkz'],
			ml:'fk',
			lh:'hidden',
			by:[this, 'dq', 'vf']
		});

		this.cs.mv(this.ts);
	}

	dq()
	{
		this.nl();

		this.fe();
	}

	kg()
	{
		this.ts.tp('hidden');
	}

	yp(it)
	{
		super.yp(it, 'ty');

		this.fe();
	}

	fe()
	{
		if (this.rs > 1)
		{
			this.ts.tp('initial');
		}
		else {
			this.ts.tp('hidden');
		}
	}




}

ig.sl = function(uq, xq)
{
	uq.currentTime = xq;

	if (uq.paused)
	{
		uq.play();
	}
}

function openWindow(fm)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = ig.on(q, ',');

	return window.open(fm, '', q);
}

class zb
{
	constructor(q)
	{
		Object.assign(this, {
			rk: q,
			tc: bg.tc,
			ek: bg.uq.duration,
			hn:bg.uq.currentTime
		});
	}
}

class ci
{
	constructor()
	{
		this.nh = navigator.platform.includes('Mac');
	}

	get bs()
	{
		return !this.nh ? document.body.clientWidth : window.innerWidth;
	}
}

const bg = {
	get cp()
	{
		return ['www', 'music'].includes(this.td);
	},

	get ey()
	{
		return location.pathname == '/watch';
	},

	get uq()
	{
		if (!this.jl)
		{
			this.jl = em.querySelector('video');
		}

		return this.jl || document.createElement('video');
	},

	get tc()
	{
		return ig.yn(se[4], location.href);
	},

	get td()
	{
		return location.host.split('.')[0];
	}
}

class df
{
	constructor(av)
	{
		this.vz = document.createElement('div');

		this.nd = {};

		for (let sn of this.jm(av).children)
		{
			const ks = sn.getAttribute('protoid');

			if (ks) {
				sn.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.nd[ks] = sn.outerHTML;
		}
	}

	pw(xr, ic)
	{
		let la = this.nd[xr];

		if (ic)
		{
			la = la.replace(se[5], (_, jd) => ic[jd]);
		}

		return this.jm(la);
	}

	ps(bm)
	{
		const s = document.createElement('span');

		s.textContent = bm;

		return s;
	}

	jm(la)
	{
		this.vz.innerHTML = la;

		return this.vz.children[0];
	}
}

class uy extends zo
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.rc = 'fullscreenchange';
			this.sb = 'fullscreenElement';
		}
		else {
			this.rc = 'webkitfullscreenchange';
			this.sb = 'webkitFullscreenElement';
		}

		this.cw();

		document.addEventListener(
			this.rc, _ => this.cw()
		);
	}

	get kl()
	{
		return Boolean(document[this.sb]);
	}

	ez()
	{
		this.ao('tygjd');
	}

	bd(jx)
	{
		jx ? this.ao('nboam')
			: this.qs('nboam');
	}

	wj(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	cw()
	{
		this.setAttribute('cs-fullscreen', this.kl);
	}
}

class xn
{
	constructor()
	{
		this.kf = {
			ku: '/html/svg/1.svg',
		}
	}

	uh()
	{
		ig.rw() && hx.og();
	}

	async fh()
	{
		xe = await ck.get('1');

		xe = new sz(xe);
	}

	oi(lf)
	{
		return chrome.runtime.getURL(this.kf[lf]);
	}
}

class qp extends ls
{
	constructor(lh)
	{
		const cs = new lj(460, 480);

		super(cs, nj);

		this.xy(zr);

		vr.vm(this, [
			'wx', 'pq', 'tk', 'nk'
		]);

		this.bq = false;

		switch (true)
		{
			case (lh.tf):
				return this.yp(new dx);

			case (lh.ol):
				return this.yp(new fg);

			default:
				this.mu();
		}
	}

	br()
	{
		this.cs.mv(new ws({
			go:['auiqs', 'aszvb'],
			ml:'es',
			by:[this, 'lv', 'vf']
		}));

		document.body.appendChild(this.cs.ie);
	}

	lb()
	{
		this.bo.fp.then(
			ma => ma && this.cs.bv(ma)
		);
	}

	ef(lf)
	{
		switch (lf)
		{
			case 'wx':
				return this.uc('fz');

			case 'pq':
				return this.uc('li');

			case 'tk':
				return this.lv();

			case 'nk':
				return this.xs();
		}
	}

	mu()
	{
		this.yp(new wa);
	}

	xs()
	{
		this.nl();

		this.mu();
	}

	uc(dz)
	{
		this.aq.vl(dz);

		this.cs.yb();

		this.aq.lm(dz);

		this.bq = true;
	}

	lv(dz)
	{
		this.aq.hz(dz);

		this.cs.xj();
	}

	qt()
	{
		this.yp(new eq);
	}
}

class zr
{
	get fp()
	{
		return ck.get('appPosition');
	}

	bz(go)
	{
		(go.width > 100) && (go.width = 100);

		(go.left < 0) && (go.left = 0);

		if (go.left + go.width > 100)
		{
			go.left = 100 - go.width;
		}

		ck.set('appPosition', go);
	}
}

const nj = function(am)
{
	return {
		yl(ma)
		{
			am.bo.bz(ma);
		}
	}
}

class zy
{
	static rj(jd)
	{
		return jd == 'Enter';
	}

	static rz(jd)
	{
		return ['Control','Meta'].includes(jd);
	}
}

class pi
{
	constructor()
	{
		window.addEventListener('keydown', e => this.rb(e), true);
	}

	rb(e)
	{
		this.gb(e);

		const gq = this.gq;

		if (this.za)
		{
			if (gq == 'KeyS')
			{
				e.preventDefault();

				return vr.iw('wx');
			}

			if (gq == 'KeyE' && bg.ey)
			{
				e.preventDefault();

				return vr.iw('pq');
			}

			if (gq == 'KeyX' && em.kl)
			{
				return vr.iw('tk');
			}
		}

		if (gq == 'Escape')
		{
			return vr.iw('tk');
		}
	}

	gb(e)
	{
		this.gq = e.code;

		this.za = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get mn()
	{
		return this.gq == 'KeyV';
	}
}

class pm
{
	constructor()
	{
		this.jr = {};
	}

	iw(uv)
	{
		let hg = this.zp(uv);

		for (let pv of hg)
		{
			pv.ef(uv);
		}
	}

	vm(pv, vr)
	{
		if (typeof vr == 'string')
		{
			vr = [vr];
		}

		for (let lf of vr)
		{
			this.zp(lf).push(pv);
		}
	}

	zp(uv)
	{
		return this.jr[uv] || (this.jr[uv] = new du);
	}
}

class gf extends ls
{
	constructor()
	{
		const cs = new gt('yu');

		super(cs);
	}

	ct()
	{
		hx.rg();

		this.wr();
	}
}

class dx extends ls
{
	constructor()
	{
		super(
			new gt('fv')
		);
	}

	br()
	{
		const os = new ws({
			go:'iqhsy',
			hs:'Update Now',
			by:[this, 'ag', 'vf']
		});

		this.cs.mv(os, 'su');
	}

	ag()
	{
		window.open('https://cs.lett.app/update');
	}
}

class dw extends ls
{
	constructor()
	{
		const cs = new gt('st');

		super(cs);
	}

	br()
	{
		this.cs.mv(new ws({
			go:['dhlkz', 'auiqs'],
			ml:'fk',
			by:[this, 'wr', 'vf']
		}));
	}
}

class eq extends ls
{
	constructor()
	{
		const cs = new gt('ui');

		super(cs);
	}
}

class fg extends ls
{
	constructor()
	{
		const cs = new gt('gt');

		super(cs);

		this.ro();

		vr.vm(this, [
			'hf', 'yx'
		]);
	}

	async ef(lf)
	{
		await jo.fh();

		switch (lf)
		{
			case 'hf':
				return this.ro();

			case 'yx':
				return this.tm();
		}
	}

	ro()
	{
		if (!xe.qd)
		{
			return this.yp(new wb);
		}

		if (!xe.zq)
		{
			return this.yp(new ei);
		}

		this.nq();
	}

	kw()
	{
		this.nq();
	}

	tm()
	{
		!zw.bq && this.nq();
	}

	nq()
	{
		vr.iw('nk');
	}
}

class wb extends ls
{
	constructor()
	{
		const cs = new gt('oy');

		super(cs);
	}

	br()
	{
		this.jq = new vg({
			by:[this, 'to', ['ix', 'lo']]
		});

		this.cs.mv(this.jq, 'hb');

		this.cs.mv(
			new tg({
				zt:jo.oi('ku')
			}), 've'
		);

		this.cs.mv(
			new je({bm:'Need help?', ul:'https://cs.lett.app/generating-youtube-api-key'}), 'mx'
		);
	}

	lm()
	{
		this.jq.focus();
	}

	to(dz)
	{
		dz.jy('loading');

		if (!this.ax)
		{
			this.ax = true;

			hx.to(dz.value).then(cu =>
			{
				!cu && dz.jy('error', 'try again');

				this.ax = false;
			});
		}
	}
}

class ei extends uw
{
	constructor()
	{
		super();

		this.yp(new hm);
	}

	kh()
	{
		this.yp(new ak);
	}
}

class hm extends ls
{
	constructor()
	{
		const cs = new gt('vn');

		super(cs);
	}

	br()
	{
		const cz = [];

		cz.push(
			new ws({
				go:'iqhsy',
				hs:'support it',
				by:[this, 'kh', 'vf']
			})
		);

		cz.push(
			new ws({
				go:'iqhsy',
				hs:'try it',
				by:[this, 'kw', 'vf']
			})
		);

		xe.lk && cz.pop();

		for (let ga of cz)
		{
			this.cs.mv(ga, 'su');
		}
	}
}

class ak extends ls
{
	constructor()
	{
		const cs = new gt('rv');

		super(cs);

		this.tl;
		this.ot;

		vr.vm(this, ['yx']);
	}

	ef(lf)
	{
		switch (lf)
		{
			case 'yx':
				return this.tm();
		}
	}

	br()
	{
		this.xw = new uz({
			go:'tpqcs'
		});

		this.cs.mv(this.xw);

		this.sr = new zj();

		this.sr.ky(
			new ph({
				go:['vscwr', 'behvt'],
				bm:'9'
			})
		);

		this.cs.mv(this.sr, 'sr');

		this.md = new zj();

		this.md.ay(
			new ph({
				bm:'One-Time Payment via PayPal'
			})
		);

		this.cs.mv(this.md, 'md');

		this.sk = new ws({
			go:['iqhsy', 'jtlom'],
			hs:'Pay with PayPal',
			by:[this, 'bt', 'vf']
		});

		this.cs.mv(this.sk, 'su');
	}

	hz()
	{
		this.hr();
	}

	bt()
	{
		if (this.cf)
			return;

		this.cf = true;

		this.xw.tp('loading');

		hx.vw().then(fm =>
		{
			if (fm) {
				this.kq(fm);

				this.xw.tp('waiting');
			}
			else {
				this.xw.tp('error');
			}

			this.cf = false;
		});
	}

	kq(fm)
	{
		this.hr();

		this.tl = openWindow(fm);

		this.ot = setInterval(
			_ => this.tl.closed && this.hr(),
		500);
	}

	hr()
	{
		if (this.tl)
		{
			this.tl.close();

			this.xw.tp('initial');

			clearInterval(this.ot);
		}
	}

	tm()
	{
		this.hr();

		setTimeout(_ => {
			this.jb('kg', this);
			this.ia();
		}, 900);
	}

	ia()
	{
		this.sr.ky(
			new ph({go:'behvt',bm:'Thank You!'}), true
		);

		this.md.ay(
			new ph({bm:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.sk.ao('azynj');
			this.sk.textContent = 'Done';
			this.sk.zc(this, 'nq', 'vf');
		}, 200);
	}

	nq()
	{
		this.jb('nq', this);
	}

	lc()
	{
		super.lc();

		this.hr();
	}
}

class zj extends ph
{
	constructor()
	{
		super();

		this.cx();
	}

	cx()
	{
		this.wq = new ph({
			go:'wqgmf'
		});

		this.mv(this.wq);
	}

	ky(xb, fy)
	{
		this.zv(xb, 0, fy);
	}

	ay(xb, fy)
	{
		this.zv(xb, null, fy);
	}

	zv(xb, bu, fy)
	{
		this.wq.mv(xb, bu);

		if (fy)
		{
			this.fy(bu != null);
		}
	}

	fy(ly)
	{
		let qm, lt = this.wq;

		if (ly)
		{
			lt.style.transform = 'translateY(-100%)';

			qm = 'translateY(0)';
		}
		else {
			qm = 'translateY(-100%)';
		}

		setTimeout(_ => {
			lt.style.transition = 'transform 300ms';

			setTimeout(
				_ => lt.style.transform = qm,
			10);

			setTimeout(_ => {
				lt.style.transition = null;
			}, 300);
		}, 10);
	}
}

class yc extends ls
{
	constructor(xz)
	{
		const cs = new op;

		super(cs);

		this.xp(xz).then(
			cd => this.ir(cd)
		);
	}

	br()
	{
		this.cs.ao('oqmxr');
	}

	ir(cd)
	{
		this.cs.innerHTML = cd;
	}

	xp(xz)
	{
		const ew = ig.xc('/html/policies/%s.html', xz);

		return hx.xp(ew);
	}
}

class wa extends ls
{
	constructor()
	{
		const cs = new gt('lp');

		super(cs);

		this.xy(io, lz);

		vr.vm(this, 'pq');
	}

	br()
	{
		this.nx = new xm({
			placeholder:'type keywords here..',
		});
		this.nx.ox(this, 'qa', ['dp']);
		this.nx.ox(this, 'gz', ['lo', 'ix']);

		this.ux = new ws({
			go:'coixg',
			hs:'0',
			lh:'disabled',
			by:[this, 'sf', 'vf']
		});

		this.nv = new dl(this);

		this.po = new ft();
		this.po.tw = new vh(this);

		this.fu = new gt(this.cs.mi('sm'));
		this.fu.mv(this.nx);
		this.fu.mv(this.ux);

		this.rp = new gt(this.cs.mi('rl'));
		this.rp.mv(this.po);
		this.rp.mv(this.nv);
	}

	vl()
	{
		if (this.wy)
		{
			this.ya();

			if (this.bo.vx)
			{
				this.ou('');
				this.po.ab();
			}
		}
	}

	lm(dz)
	{
		this.nx.focus();

		if (dz == 'fz')
		{
			this.nx.select();
		}
	}

	hz()
	{
		if (this.nv.af)
		{
			this.nv.uj.wr();
		}
	}

	ef(lf)
	{
		if (lf == 'pq')
			return this.aw();
	}

	qg(cs)
	{
		this.rp.qn(cs);
	}

	qa()
	{
		if (this.wy)
		{
			this.ya();
		}
	}

	gz()
	{
		let q = this.nf();

		switch (true)
		{
			case (!q):
				return;

			case (!bg.ey):
				return this.po.ip('km');

			case (this.bo.ug):
			{
				if (!this.bo.fo)
					return;

				if (q == this.bo.et)
				{
					return this.po.ip('ka');
				}
			}
		}

		this.ik(q);
	}

	bk()
	{
		if (!bg.ey)
			return this.po.ip('km');

		this.yk(':all');
	}

	get yj()
	{
		return this.bo.yj;
	}

	sf()
	{
		this.ti(new dw);
	}

	ik(q)
	{
		this.bo.search(q);
		this.po.ip('ea');
	}

	ya()
	{
		this.bo.zi();
	}

	aw()
	{
		let q = ig.ne(bg.uq.currentTime);

		this.yk(q);
	}

	nf()
	{
		return this.nx.value;
	}

	ou(q)
	{
		this.nx.value = q;
	}

	yk(q)
	{
		this.ou(q);
		this.ik(q);
	}

	get wy()
	{
		if (bg.ey && bg.tc != this.oq)
		{
			return Boolean(this.oq = bg.tc);
		}

		return false;
	}
}

class io
{
	constructor()
	{
		this.kn = kn.rq('sx', this.ki.bind(this));

		this.et = '';
		this.nm = 0;
		this.lx = 0;
		this.mc = 500;
		this.fo = false;
		this.vx = false;
		this.cv = [];
		this.yf = 25;
	}

	ki(rh)
	{
		const ub = rh.ub;

		switch (rh.jn)
		{
			case 'py':
				return this.oh(ub);

			case 'mq':
				return this.lg(ub);

			case 'bw':
				return this.at(ub);
		}
	}

	get ug()
	{
		return this.fo || this.sj('lx') < 500;
	}

	get yj()
	{
		return this.cv.splice(0, this.yf);
	}

	zi()
	{
		this.kn.gu('mq', new zb(''));
	}

	search(q)
	{
		this.yd(q);

		this.kn.gu('py', new zb(q));
	}

	at(bw)
	{
		this.ec();

		this.tw.at(bw.lf);
	}

	oh(r)
	{
		this.ec();

		let qz = this.mc - this.sj('nm');

		(r.el == 0) && (qz = 200);

		this.cv = r.ys;
		this.vx = (r.el == 0);

		setTimeout(
			_ => this.tw.oh(r.el, r.cq),
		qz);
	}

	lg(n)
	{
		this.tw.lg(n);
	}

	fd(nt)
	{
		this[nt] = Date.now();
	}

	sj(nt)
	{
		return Date.now() - this[nt];
	}

	yd(q)
	{
		this.et = q;

		this.fo = true;

		this.fd('nm');
	}

	ec()
	{
		this.fo = false;

		this.fd('lx');
	}
}

class ft extends gt
{
	constructor()
	{
		super('gt', {
			go:'gkrlv'
		});

		this.ca = {
			jt: 'no results match your query',
			ea: 'Searching...',
			ka: 'Searching still...',
			km: 'You are not watching any video',
			oz: 'Invalid request',
			gw: 'This video has 0 comments',
			pr: 'Comments are disabled for this video.',
			zm: 'check your internet connection',
			kc: 'service down for maintenance',
			en: 'request timeout, try again',
			mk: 'feature not supported for this video',
			fr: 'invalid response from server, try again',
			gx: 'something is not working properly',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'maximum allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
		};
	}

	ip(gm)
	{
		this.er(gm);
	}

	nb(...sp)
	{
		this.mt(...sp);
	}

	rd(de, sp)
	{
		this.mt(
			ig.xc(de, sp)
		);
	}

	ab()
	{
		this.innerHTML = '';
	}

	er(lf)
	{
		let va = this.ca[lf];

		if (!va)
		{
			va = this.ca.gx;
		}

		this.mt(va);
	}

	mt(...sy)
	{
		const fw = document.createDocumentFragment();

		for (let vo of sy)
		{
			let qb = null;

			if (typeof vo == 'string')
			{
				qb = document.createTextNode(vo);
			}
			else {
				qb = vo.ie;
			}

			fw.appendChild(qb);
		}

		this.ab();
		this.appendChild(fw);

		this.tw.qi();
	}
}

class dl extends ba
{
	constructor(jh)
	{
		super(jh);

		this.af = false;
	}

	eo(dz)
	{
		this.uj.mz(dz.tc, dz.fx);

		dz.dr.yz(this.uj);
	}

	le(dz)
	{
		ig.sl(bg.uq, dz.fx);
	}

	kz(uo)
	{
		const jp = [];

		for (let gj of uo)
		{
			let dm = new gt('aj');

			for (let i = 0; i < gj.length; i++)
			{
				const no = gj[i];

				if (no.rs > 0)
				{
					const n = i + no.rs;

					for (let k = i; k < n; k++)
					{
						gj[k].up = gj.slice(k + 1, n + 1).some(it => !it.hidden);
					}
				}

				dm.mv(
					new iy(no)
				);
			}

			jp.push(dm);
		}

		return jp;
	}

	get uj()
	{
		if (!this.af)
		{
			this.af = true;
			this.ho = new od;
		}

		return this.ho;
	}
}

const lz = function(am)
{
	return {
		lg(n)
		{
			let hv = n;

			if (n < 0) switch (n)
			{
				case -2:
					hv = '∞';
					break;

				case -1:
					hv = '∅';
					break;
			}

			am.ux.gi(hv);

			if (0 < n && n < 1000)
			{
				am.ux.tp('normal')
			}
			else {
				am.ux.tp('disabled');
			}
		},

		oh(el, p)
		{
			this.lg(p);

			if (el > 0)
			{
				am.nv.cj();

				return am.qg(am.nv);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return am.po.ip('gw');

				case -1:
					return am.po.ip('pr');

				case -2:
					return am.po.ip('jt');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const kv = new je({
						bm:ig.xc('%s comments', p),
						by:[am, 'bk', 'vf']
					});

					return am.po.nb('Nothing found in ', kv);
				}

				return am.po.rd('Nothing found in %s comments', p);
			}

			am.po.ip('jt');
		},

		at(zn)
		{
			am.po.ip(zn);
		}
	}
}

const vh = function(am)
{
	return {
		qi()
		{
			am.qg(am.po);
		}
	}
}

class od extends gt
{
	constructor()
	{
		super('od');

		this.qc = this.children[0];

		this.qc.onload = () => {
			try {
				const az = this.qc.contentDocument.body;

				this.uq = az.querySelector('video');

				az.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.oq;
		this.sd;
	}

	mz(tc, fx)
	{
		if (tc != this.oq) {
			this.qc.src = ig.xc(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [tc, fx]
			);
		}
		else if (this.uq) {
			ig.sl(this.uq, fx);
		}

		this.oq = tc;
		this.sd = fx;
	}

	wr()
	{
		if (this.tr)
		{
			this.oe();
		}
	}
}

class iy extends gt
{
	constructor(no)
	{
		const ht = ep.pw('iy', no);

		super(ht);

		this.cx(no);
	}

	cx(no)
	{
		this.hk(no);
		this.jg(no);

		if (no.cr)
		{
			if (no.up)
				this.ao('zetfl');

			if (no.hidden)
				this.ao('hfioh');
		}

		if (no.ej)
		{
			this.ao('maupe');

			this.mv(
				new gt('pu', {go:'oufbg'}), 'ry'
			);
		}
	}

	kd()
	{
		return this;
	}

	yz(uj)
	{
		this.mv(uj, 'rb');
	}

	hk(no)
	{
		const ev = no.kp;

		const fl = ev.replace(
			se[6], ig.xc('s%s-', no.cr ? 48 : 80)
		);

		this.mv(new tg({
			zt:fl,
			zl:ev,
		}), 'ln');
	}

	jg(no)
	{
		const qh = new ph({
			go:'tqzsi',
			fn: {
				dir:no.co,
				lang:no.mh
			}
		});

		const fa = Object.keys(no.tu);

		if (fa.length)
		{
			const px = ig.dn(no.xf, fa);

			for (let x of px)
			{
				if (ig.ow(x))
				{
					const a = this.wn(no.tu[x]);

					qh.mv(a);
				}
				else {
					const s = ep.ps(x);

					qh.appendChild(s);
				}
			}
		}
		else {
			qh.textContent = no.xf;
		}

		if (no.cr && !no.ej)
		{
			qh.ao('fihpb');

			qh.addEventListener('click',
				e => qh.qs('fihpb')
			);
		}

		this.mv(qh, 'rb');
	}

	wn(x)
	{
		let a;

		if (x.ta == 'vd' && x.tc != bg.tc)
		{
			x.ta = 'nc';
		}

		switch (x.ta)
		{
			case 'vd':
				a = new rt(x.bm, x.fx);
				a.ox(this, 'le', 'vf');
				return a;

			case 'nc':
				a = new so(x.bm, x.tc, x.fx);
				a.ox(this, 'eo', 'vf');
				return a;

			case 'vb':
				return new je({
					bm:x.bm,
					ul:x.fm
				});
		}
	}
}

class so extends je
{
	constructor(bm, tc, fx)
	{
		super({
			go:'nqdpj',
			bm:bm
		});

		this.tc = tc;
		this.fx = fx;
	}

	get dr()
	{
		return this.jb('kd');
	}
}

class rt extends je
{
	constructor(bm, fx)
	{
		super({
			go:'nqdpj',
			bm:bm
		});

		this.fx = fx;
	}
}

let jo;
let ck;
let zk;
let kn;
let hx;
let vr;
let xe;
let zw;
let ae;
let em;
let ep;

if (bg.cp)
{
	jo = new xn;
	ck = new pc;
	zk = new ci;
	kn = new bf;
	hx = new my;
	vr = new pm;
	em = new uy;

	hx.gy().then(async ju =>
	{
		if (ju.lh.ol)
		{
			await jo.fh();
		}

		ep = new df(ju.di);

		zw = new qp(ju.lh);

		ae = new pi;

		hx.ar();

		jo.uh();
	});

	zk.nh && em.ez();
}

const se = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];