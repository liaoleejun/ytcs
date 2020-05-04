/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const it = {};

for (let gs of 'object array string regex date math type std'.split(' '))
{
	it[gs] = {};
}

it.zn = function(fd, xe)
{
	return fd != undefined && fd.constructor === xe;
}

it.lg = function()
{
	return it.pn(9);
}

it.rw = function(sv)
{
	return gh[0].test(sv);
}

it.ic = function(tm)
{
	return Object.keys(tm).length == 0;
}

it.cj = function(wc, tm)
{
	for (let km in tm)
	{
		const ug = tm[km];

		if (km == wc) return ug;
		if (ug == wc) return km;
	}
}

it.qd = function(tm, jg)
{
	let sv = '';

	for (let km in tm)
	{
		sv += km + '=' + tm[km] + jg;
	}

	return sv.slice(0, -1);
}

it.ya = function(vl, ke, mw)
{
	const oi = ke + 1;

	return mw.slice(oi, oi + vl);
}

it.np = function(mw)
{
	return mw[mw.length - 1];
}

it.be = function(em, yw)
{
	em += '?';

	for (let km in yw)
	{
		em += km + '=' + encodeURIComponent(yw[km]) + '&';
	}

	return em.slice(0, -1);
}

it.jx = function(sv, wx)
{
	if (it.zn(wx, Array))
	{
		let i = 0;

		return sv.replace(gh[1], _ => wx[i++]);
	}

	return sv.replace('%s', wx);
}

it.yp = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

it.by = function(sv, qf)
{
	const lx = it.jx('(%s)', qf.join('|'));

	return sv.split(new RegExp(lx)).filter(s => s !== '');
}

it.di = function(sv)
{
	return sv.toUpperCase();
}

it.az = function(sv)
{
	return sv.toLowerCase();
}

it.ap = function(sv, rf)
{
	if (!rf)
	{
		sv = sv.toLowerCase();
	}

	return sv[0].toUpperCase() + sv.slice(1);
}

it.aj = function(fq, sv)
{
	return sv.match(fq) || [];
}

it.me = function(fq, sv)
{
	if (fq.global) return '';

	const m = it.aj(fq, sv);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

it.cz = function()
{
	return Math.floor(Date.now() / 1000);
}

it.wj = function(xa)
{
	return xa < it.cz();
}

it.lq = function(q)
{
	const al = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = it.me(gh[2], q);

	return Date.now() + (x[0] * al[x[1]] * 1000);
}

it.hc = function(pa)
{
	let x = pa.split(':'),
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

it.hp = function(cw)
{
	let mw = [];

	mw.push(cw / 3600);

	cw %= 3600;

	mw.push(cw / 60);

	mw.push(cw % 60);

	mw = mw.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return mw.join(':').replace(gh[3], '');
}

it.pn = function(fl)
{
	return Math.random().toString().slice(2, fl + 2);
}

it.nm = function(er, he)
{
	const uk = Math.random() * (he - er) + er;

	return Math.floor(uk);
}

it.ko = function(x, a, b)
{
	return x >= a && x <= b;
}

it.dt = function(a, b)
{
	return 100 * (a / b);
}

it.ao = function()
{
	let ty, lk = 0;

	try {
		ty = [xc, cm, kg];
	}
	catch (e) {
		ty = [dx, kg];
	}

	ty.forEach(
		xj => lk += xj.toString().length
	);

	return lk != 2035;
}

class pm
{
	constructor(vj, hs)
	{
		this.vj = vj;
		this.hs = hs;
	}
}

class lc
{
	constructor(fe, vj, hs)
	{
		this.fe = fe;
		this.et = new pm(vj, hs);
	}
}

class dj extends Array
{
	constructor(yq)
	{
		super();

		if (yq != null)
		{
			super.push(yq);
		}
	}

	push(xu)
	{
		return !this.includes(xu) && super.push(xu);
	}
}

class hb
{
	constructor(or, zv)
	{
		const xj = or.status;

		this.xj = xj;
		this.mf = false;
		this.gy = false;
		this.ch = null;
		this.hs = null;

		switch (zv)
		{
			case 'error':
				return this.ta('xp');

			case 'timeout':
				return this.ta('pt');

			default:
			{
				this.mf = (xj == 200);

				if (xj >= 500)
				{
					return this.ta('rz');
				}

				try {
					this.hs = JSON.parse(or.responseText);
				}
				catch (e) {
					this.hs = or.responseText;
				}
			}
		}
	}

	is(qu)
	{
		this.ch = qu;
	}

	ta(qu)
	{
		this.is(qu);

		this.gy = true;
	}
}

class ny
{
	constructor(hs, co)
	{
		Object.assign(this, hs);

		Object.defineProperty(this, 'co', {
			value: co
		});
	}

	set(km, ug)
	{
		this[km] = ug;

		this.wf();
	}

	wf()
	{
		return qo.set(this.co, this);
	}
}

class kg extends ny
{
	constructor(hs, co)
	{
		super(hs, co);
	}

	get gm()
	{
		return Boolean(this.gv)
	}

	get gv()
	{
		return this[0];
	}

	get ym()
	{
		return this[1];
	}

	get cv()
	{
		return it.wj(this.ym);
	}

	get sz()
	{
		const vo = this.ym.toString().split('').pop();

		return Boolean(+vo);
	}

	set gv(km)
	{
		this.set(0, km);
	}

	set ym(ed)
	{
		this.set(1, ed);
	}

	get wk()
	{
		let s = this.ym.toString(),
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

class bd
{
	constructor(gf)
	{
		if (gf)
		{
			this.ql();
		}
	}

	ei(rd, xr, go)
	{
	}

	ql()
	{
		chrome.runtime.onMessage.addListener(
			this.ei.bind(this)
		);
	}
}

class yl extends bd
{
	constructor()
	{
		super(false);
	}

	ei(rd, xr, go)
	{
		const hs = rd.hs;

		switch (rd.vj)
		{
			case 'ne':
				return this.qb(hs);
		}
	}

	qb(ne)
	{
		if (ne == 'fi')
		{
			un.oi();
		}
	}

	wz()
	{
		return this.gu('wz');
	}

	dm(vi)
	{
		return this.gu('dm', vi);
	}

	ye(gv)
	{
		return this.gu('ye', gv);
	}

	ak()
	{
		return this.gu('ak');
	}

	wm()
	{
		return this.gu('wm');
	}

	gu(vj, hs)
	{
		const rd = new pm(vj, hs);

		return new Promise(go =>
		{
			try {
				chrome.runtime.sendMessage(rd, go);
			}
			catch (e) {
			}
		});
	}
}

class gc extends bd
{
	constructor()
	{
		super(true);
	}

	ei(rd, xr, go)
	{
		const bp = function(...wx)
		{
			try {
				go(...wx);
			}
			catch (e) {
			}
		};

		fy.zg.then(_ =>
		{
			const hs = rd.hs;

			switch (rd.vj)
			{
				case 'wz':
					fy.wz().then(bp);
				break;

				case 'dm':
					fy.dm(hs).then(bp);
				break;

				case 'ye':
					fy.ye(hs).then(bp);
				break;

				case 'ak':
					tq.md.ak(hs).then(bp);
				break;

				case 'wm':
					fy.ni();
				break;
			}
		});

		return true;
	}
}

class ue
{
	get(km)
	{
		return new Promise(lr =>
		{
			try {
				chrome.storage.local.get(km, cr =>
					lr(typeof km == 'string' ? cr[km] : cr)
				);
			}
			catch (e) {
			}
		});
	}

	set(km, ug)
	{
		let hs;

		if (typeof km == 'object')
		{
			hs = km;
		}
		else {
			hs = {[km]:ug};
		}

		return new Promise(ho =>
		{
			try {
				chrome.storage.local.set(hs, ho);
			}
			catch (e) {
			}
		});
	}

	uo()
	{
		return new Promise(ho =>
		{
			try {
				chrome.storage.local.clear(ho);
			}
			catch (e) {
			}
		});
	}
}

class ysfwj
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			lc => this.eu(lc)
		);

		Port.onDisconnect.addListener(
			_ => this.rs()
		);

		this.Port = Port;

		this.vd = {
		};

		this.dq = false;
	}

	ei(m)
	{
	}

	zu(fe, vj, hs)
	{
		const ra = new lc(fe, vj, hs);

		if (!this.dq)
		{
			this.Port.postMessage(ra);
		}
	}

	eu(x)
	{
		this.kt(x.fe).ei(x.et);
	}

	kt(fe)
	{
		return this.vd[fe] || this;
	}

	de(fe, ei, rs)
	{
		return this.vd[fe] = new vg(this, fe, ei, rs);
	}

	rs()
	{
		this.dq = true;

		for (let fe in this.vd)
		{
			this.kt(fe).rs();
		}
	}
}

class qj extends ysfwj
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	ei(rd)
	{
		const hs = rd.hs;

		switch (rd.vj)
		{
			case 'en':
				return uj.mj(hs);
		}
	}

	de(fe, ei, rs)
	{
		this.zu(null, 'de', fe);

		return super.de(fe, ei, rs);
	}

	rs()
	{
		super.rs();

		un.jo();
	}
}

class zo extends ysfwj
{
	constructor(ri)
	{
		super(ri);
	}

	ei(rd)
	{
		switch (rd.vj)
		{
			case 'de':
				return this.de(rd.hs);
		}
	}

	de(fe)
	{
		const kq = super.de(fe);

		switch (fe)
		{
			case 'ea':
				return new yz(kq);
		}
	}
}

class dp
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			sp => this.mb(sp)
		);

		this.om = [];
	}

	mb(ri)
	{
		this.om.push(
			new zo(ri)
		);
	}

	rv(ks)
	{
		for (let ri of this.om)
		{
			ri.zu(null, 'en', ks);
		}
	}
}

class vg
{
	constructor(ri, fe, ei, rs)
	{
		this.ri = ri;

		this.fe = fe;

		if (ei)
		{
			this.ei = ei;
		}

		if (rs)
		{
			this.rs = rs;
		}
	}

	zu(vj, hs)
	{
		this.ri.zu(this.fe, vj, hs);
	}

	ei(m)
	{
	}

	rs()
	{
	}
}
class so
{
	ja(gl)
	{
		this.gl = gl;
	}

	mh(ju, xr)
	{
		if (ju in this && this != xr)
		{
			return this[ju](xr);
		}

		if (this.wb)
		{
			return this.wb.mh(ju, xr);
		}
	}

	get wb()
	{
		return this.gl || this.mx;
	}
}

const ac = function(ud, ms)
{
	return new ms(ud);
}

class gd extends so
{
	constructor(jz)
	{
		super();

		this.vm = jz;

		this.fv('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	qe(iz)
	{
		if (typeof iz == 'string')
		{
			iz = [iz];
		}

		this.vm.classList.add(...iz);
	}

	sc(iz)
	{
		this.vm.classList.remove(iz);
	}

	vn(iz)
	{
		this.vm.classList.contains(iz) ? this.sc(iz)
												: this.qe(iz);
	}

	jd()
	{
		this.vm.remove();
	}

	fv(...ce)
	{
		for (let x of ce) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.vm[x] instanceof Function)
			{
				this[x] = this.vm[x].bind(this.vm);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.vm[x];
					},
					set(v) {
						this.vm[x] = v;
					}
				});
			}
		}
	}
}

class oz extends gd
{
	constructor(bl, da)
	{
		super(
			typeof bl == 'string' ? kc.zk(bl) : bl
		);

		this.mx = null;
		this.yh = [];
		this.cs = {};
		this.qz = {};

		if (da)
		{
			if (da.xm)
			{
				this.qe(da.xm);
			}

			if (da.bx)
			{
				this.textContent = da.bx;
			}

			if (da.aw)
			{
				this.el(...da.aw);
			}

			if (da.mo)
			{
				for (let dr in da.mo)
				{
					this.setAttribute(dr, da.mo[dr]);
				}
			}

			if (da.import)
			{
				for (let jn of da.import)
				{
					this.fv(jn);
				}
			}
		}
	}

	hw(xo, to)
	{
		if (xo.mx)
		{
			if (xo.mx == this)
				return;

			xo.dk();
		}

		xo.mx = this;
		this.yh.push(xo);

		switch (typeof to)
		{
			case 'string':
				return this.gb(to).appendChild(xo.vm);

			case 'number':
				return this.vm.prepend(xo.vm);

			default:
				return this.appendChild(xo.vm);
		}
	}

	gb(bi)
	{
		return this.querySelector('#' + bi);
	}

	pu(aw, ju, hv)
	{
		this.aw = {};

		this.el(aw, ju, hv);
	}

	el(aw, ju, hv)
	{
		if (typeof hv == 'string')
		{
			hv = [hv];
		}

		for (let uc of hv)
		{
			if (!this.qz[uc])
			{
				this.qz[uc] = new Map;

				this.addEventListener(
					it.cj(uc, oz.fa), e => this.nd(e)
				);
			}

			this.qz[uc].set(aw, ju)
		}
	}

	xq(uc)
	{
		const qz = this.qz[uc];

		if (qz)
		{
			for (let [aw, ju] of qz)
			{
				aw.mh(ju, this);
			}
		}
	}

	wo()
	{
		this.hidden = true;
	}

	te()
	{
		this.hidden = false;
	}

	uo()
	{
		let i = this.yh.length;

		while (i--)
		{
			this.yh[i].dk();
		}
	}

	dk()
	{
		this.mx.ur(this);
	}

	bu(xo)
	{
		this.appendChild(xo.vm);
	}

	ur(xo)
	{
		xo.mx = null;

		this.yh.splice(
			this.yh.indexOf(xo), 1
		);

		xo.vm.remove();
	}

	nd(e)
	{
		e.stopPropagation();

		this[it.cj(e.type, oz.fa)](e);
	}

	es()
	{
		this.xq('es');
	}
}

oz.fa = {
	es:'click',
	ai:'paste',
	pq:'keyup',
	ix:'keyup',
	nr:'focus',
};

class xh extends oz
{
	constructor(da)
	{
		super('xh', da);
	}
}

class xk extends oz
{
	constructor()
	{
		super('xk');

		this.fv('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			ly.vh(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class jm extends xk
{
	constructor(cg)
	{
		super();

		this.cg = cg;

		this.fw;

		this.addEventListener('scroll',
			_ => this.ma()
		);
	}

	qn()
	{
	}

	vp()
	{
		this.uo();
		this.hz();
		this.qa();

		this.qc();
	}

	ma()
	{
		if (this.nw && this.cx)
		{
			this.qa();
		}
	}

	hz()
	{
		this.fw = this.qn(this.cg.yr);
	}

	qa()
	{
		for (let xo of this.fw)
		{
			this.hw(xo);
		}

		this.hz();
	}

	qc()
	{
		this.sc('ayrlg');

		if (this.os)
		{
			this.qe('ayrlg');
		}
	}

	get os()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get nw()
	{
		return this.fw.length;
	}

	get cx()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class rn extends oz
{
	constructor(pi, mi)
	{
		super('rn');

		this.fv('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.bm = pi;

		this.uw(pi, mi);

		this.aq();
		this.rk();
	}

	fs(hq)
	{
		for (let k in hq)
		{
			this.style[k] = hq[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	uw(pi, mi)
	{
		const x = window.innerHeight - mi;
		const y = window.innerWidth - pi - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = pi + 'px';
	}

	aq()
	{
		let iv = this.querySelectorAll('[resize]');

		for (let tz of iv)
		{
			tz.addEventListener('pointerdown',
				e => this.zi(e, 'mr')
			);
		}
	}

	rk()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.zi(e, 'ax')
		);
	}

	zi(e, ju)
	{
		if (e.which == 1)
			this[ju](e);
	}

	ld()
	{
		return this.getBoundingClientRect();
	}

	mr(e)
	{
		const dv = e.target.getAttribute('resize'),
				nz = dv.includes('w'),
				od = dv.includes('n'),
				ps = dv.includes('e');

		const xs = this.ld(),
				bm = this.bm,
				dz = 56,
				ua = xt.av,
				wv = window.innerHeight - dz,
				zq = e.clientX,
				st = e.clientY,
				ci = xs.x,
				ef = xs.y,
				tc = xs.width;

		let yu = 0,
				kn = 0,
				oj = ci,
				cp = ef,
				va = tc;

		let qp = (e) =>
		{
			yu = e.clientX - zq;
			kn = e.clientY - st;

			if (od)
			{
				cp = ef + kn;

				(cp < 0) && (cp = 0);

				(cp > wv) && (cp = wv);

				this.style.top = cp + 'px';
			}

			if (ps)
			{
				va = tc + yu;

				(e.clientX > ua) && (va = ua - ci);

				(va < bm) && (va = bm);

				this.style.width = va + 'px';
			}

			if (nz)
			{
				oj = ci + yu;
				va = tc - yu;

				if (oj < 0)
				{
					oj = 0;
					va = tc + ci;
				}

				if (va < bm)
				{
					oj = ci + (tc - bm);
					va = bm;
				}

				this.style.width = va + 'px';
				this.style.left = oj + 'px';
			}
		};

		let fp = () => {
			(yu != 0 || kn != 0) && this.nk();
		};

		this.sq(qp, fp);
	}

	ax(e)
	{
		let ci = this.offsetLeft,
			zq = e.clientX,
			yu = 0;

		let qp = (e) => {
			yu = e.clientX - zq;
			this.style.left = ci + yu + 'px';
		};

		let fp = () => {
			(yu != 0) && this.nk();
		};

		this.sq(qp, fp);
	}

	sq(qp, fp)
	{
		ly.as(true);

		document.onpointermove = (e) => qp(e);

		document.onpointerup = (e) => {
			ly.as(false);
			fp();
			document.onpointerup = document.onpointermove = null;
		};
	}

	nk()
	{
		if (this.hidden) return;

		let xs = this.ld();

		let hq = {
			width: it.dt(xs.width, window.innerWidth),
			left: it.dt(xs.x, window.innerWidth),
			top: it.dt(xs.y, window.innerHeight),
		};

		this.fs(hq);

		if ('tu' in this.cs)
		{
			this.cs.tu(hq);
		}
	}
}

class ex extends rn
{
	constructor(pi, mi)
	{
		super(pi, mi);

		this.addEventListener('wheel', ly.vh);
	}
}

class iw extends oz
{
	constructor(da)
	{
		super('iw', da);

		this.fv('src');

		if (da.si)
		{
			this.addEventListener('error', e => this.src = da.si, {once:true});
		}

		this.src = da.py;
	}
}

class rm extends oz
{
	constructor(bl, da)
	{
		super(bl, da);

		this.oh = [];
		this.nt = false;
	}

	pq(e)
	{
		if (e.key == 'Enter')
		{
			this.xq('ix');
		}

		this.xq('pq');
	}

	ai(e)
	{
		setTimeout(
			_ => this.xq('ai'),
		10);
	}

	nr(e)
	{
		this.xq('nr');
	}

	get sb()
	{
		if (!this.nt)
		{
			const ux = Date.now();

			const fl = this.oh.push(ux);

			if (fl > 3)
			{
				if (ux - this.oh[0] < 2000)
				{
					this.nt = true;

					setTimeout(
						_ => this.nt = false,
					20 * 1000);
				}
				else {
					this.oh.length = 0;
				}
			}
		}

		return this.nt;
	}
}

class ts extends rm
{
	constructor(da)
	{
		super('ts', da);

		this.fv('placeholder', 'focus', 'select');

		if (da && da.placeholder)
		{
			this.placeholder = da.placeholder;
		}
	}

	get value()
	{
		return this.vm.value.trim();
	}

	set value(s)
	{
		this.vm.value = String(s).trim();
	}
}

class ay extends rm
{
	constructor(da)
	{
		super('ay', da);

		this.uw();
	}

	uw()
	{
		this.rc = new ts();

		this.hw(this.rc, 'lh');

		this.ut = new lf();

		this.hw(this.ut, 'lh');

		this.mt = this.gb('mt');
	}

	focus()
	{
		this.rc.focus();
	}

	get value()
	{
		return this.rc.value;
	}

	js(oy, bx)
	{
		this.ut.jh(oy);

		this.mt.textContent = bx || '';
	}
}

class up extends oz
{
	constructor(bl, da)
	{
		super(bl, da);

		this.jh(da.oy || 'initial');
	}

	get yg()
	{
		return this.oy == 'disabled';
	}

	get ca()
	{
		return this.oy == 'selected';
	}

	jh(oy)
	{
		this.oy = oy;

		this.setAttribute('state', oy);
	}

	nd(e)
	{
		if (!this.yg)
		{
			super.nd(e);
		}
	}
}

class xb extends up
{
	constructor(da)
	{
		super('xb', da);

		if (da.pj)
		{
			this.bz(da.pj);
		}

		if (da.dc)
		{
			this.oe(da.dc);
		}
	}

	bz(bx)
	{
		this.textContent = bx;
	}

	oe(bl)
	{
		const dc = kc.zk(bl);

		this.appendChild(dc);
	}
}

class jy extends xb
{
	constructor(da)
	{
		super(da);

		this.value = da.value;
	}

	es()
	{
		if (this.ca)
		{
			this.jh('initial');
		}
		else {
			this.jh('selected');
		}

		super.es();
	}
}

class sg extends oz
{
	constructor(da)
	{
		super('sg', da);

		if (da.cu)
		{
			this.setAttribute('href', da.cu);
		}
	}
}

class lf extends oz
{
	constructor(da)
	{
		super('lf', da);
	}

	jh(oy)
	{
		this.setAttribute('state', oy);
	}
}

class wa extends so
{
	constructor(xo, wp)
	{
		super();

		this.xo;

		this.ka;

		this.children = [];

		this.ck(xo, wp);
	}

	ck(xo, wp)
	{
		xo.ja(this);

		if (wp)
		{
			xo.cs = new ac(this, wp);
		}

		this.xo = xo;

		this.cf();
	}

	hn(sl, wd)
	{
		this.ka = new sl;

		if (wd)
		{
			this.ka.cs = new ac(this, wd);
		}

		this.ib();
	}

	ib()
	{
	}

	cf()
	{
	}

	fj(xr)
	{
		if (this.lt)
		{
			this.lt.fj(xr);
		}

	}

	mc(xr)
	{
		if (this.lt)
		{
			this.lt.mc(xr);
		}

	}

	ph(xr)
	{
		if (this.lt)
		{
			this.lt.ph(xr);
		}

	}

	zp(xr)
	{
		if (this.lt)
		{
			this.lt.zp(xr);
		}

	}

	ku(bi)
	{
	}

	te(mz, xr)
	{
		this.xo.appendChild(mz.xo.vm);
	}

	ev(mz)
	{
		this.vz.yf(mz);
	}

	tk()
	{
		this.vz.rb();
	}

	yf(ji, qm)
	{
		ji.ja(this);

		ji.fj();

		this.children.push(ji);

		this.xo.hw(ji.xo, qm);

		ji.mc();
	}

	rb()
	{
		this.children.pop().uv();
	}

	get vz()
	{
		let pz = this;

		while (pz.gl)
		{
			pz = pz.gl;
		}

		return pz;
	}

	get xn()
	{
		return this.children.length;
	}

	get lt()
	{
		return it.np(this.children);
	}

	uv()
	{
		this.xo.jd();

		for (let ji of this.children)
		{
			ji.uv();
		}
	}
}

class bt extends wa
{
	constructor()
	{
		const xo = new oz('fx');

		super(xo);
	}

	cf()
	{
		this.ox = new xb({
			xm:['ryhgt', 'cfsek'],
			dc:'ip',
			oy:'hidden',
			aw:[this, 'ep', 'es']
		});

		this.xo.hw(this.ox);
	}

	ep()
	{
		this.rb();

		this.rt();
	}

	zl()
	{
		this.ox.jh('hidden');
	}

	yf(ji)
	{
		super.yf(ji, 'vs');

		this.rt();
	}

	rt()
	{
		if (this.xn > 1)
		{
			this.ox.jh('initial');
		}
		else {
			this.ox.jh('hidden');
		}
	}




}

it.sd = function(tr, yk)
{
	tr.currentTime = yk;

	if (tr.paused)
	{
		tr.play();
	}
}

function openWindow(em)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = it.qd(q, ',');

	return window.open(em, '', q);
}

class qk
{
	constructor(q)
	{
		Object.assign(this, {
			yn: q,
			ob: uf.ob,
			dy: uf.tr.duration,
			vb:uf.tr.currentTime
		});
	}
}

class ij
{
	constructor()
	{
		this.lv = navigator.platform.includes('Mac');
	}

	get av()
	{
		return !this.lv ? document.body.clientWidth : window.innerWidth;
	}
}

const uf = {
	get bw()
	{
		return ['www', 'music'].includes(this.wi);
	},

	get ot()
	{
		return location.pathname == '/watch';
	},

	get tr()
	{
		if (!this.qs)
		{
			this.qs = ly.querySelector('video');
		}

		return this.qs || document.createElement('video');
	},

	get ob()
	{
		return it.me(gh[4], location.href);
	},

	get wi()
	{
		return location.host.split('.')[0];
	}
}

class du
{
	constructor(gw)
	{
		this.iy = document.createElement('div');

		this.hx = {};

		for (let gz of this.oq(gw).children)
		{
			const yj = gz.getAttribute('protoid');

			if (yj) {
				gz.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.hx[yj] = gz.outerHTML;
		}
	}

	zk(bl, ia)
	{
		let oa = this.hx[bl];

		if (ia)
		{
			oa = oa.replace(gh[5], (_, km) => ia[km]);
		}

		return this.oq(oa);
	}

	cy(bx)
	{
		const s = document.createElement('span');

		s.textContent = bx;

		return s;
	}

	oq(oa)
	{
		this.iy.innerHTML = oa;

		return this.iy.children[0];
	}
}

class yi extends gd
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.xg = 'fullscreenchange';
			this.tf = 'fullscreenElement';
		}
		else {
			this.xg = 'webkitfullscreenchange';
			this.tf = 'webkitFullscreenElement';
		}

		this.ih();

		document.addEventListener(
			this.xg, _ => this.ih()
		);
	}

	get jc()
	{
		return Boolean(document[this.tf]);
	}

	rp()
	{
		this.qe('mjfbf');
	}

	as(wl)
	{
		wl ? this.qe('gflsr')
			: this.sc('gflsr');
	}

	vh(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	ih()
	{
		this.setAttribute('cs-fullscreen', this.jc);
	}
}

class dx
{
	constructor()
	{
		this.zh = {
			bc: '/html/svg/1.svg',
		}
	}

	ds()
	{
		it.ao() && lj.wm();
	}

	async pf()
	{
		th = await qo.get('1');

		th = new kg(th);
	}

	ag(bi)
	{
		return chrome.runtime.getURL(this.zh[bi]);
	}
}

class xc extends wa
{
	constructor(oy)
	{
		const xo = new ex(460, 480);

		super(xo, ok);

		this.hn(pb);

		uj.ig(this, [
			'lw', 'cq', 'yc', 'sf'
		]);

		this.lb = false;

		switch (true)
		{
			case (oy.gt):
				return this.yf(new zj);

			case (oy.vy):
				return this.yf(new dn);

			default:
				this.ow();
		}
	}

	cf()
	{
		this.xo.hw(new xb({
			xm:['ryhgt', 'svnln'],
			dc:'cd',
			aw:[this, 'op', 'es']
		}));

		document.body.appendChild(this.xo.vm);
	}

	ib()
	{
		this.ka.ld.then(
			hq => hq && this.xo.fs(hq)
		);
	}

	ku(bi)
	{
		switch (bi)
		{
			case 'lw':
				return this.oi('kb');

			case 'cq':
				return this.oi('mn');

			case 'yc':
				return this.op();

			case 'sf':
				return this.iu();
		}
	}

	ow()
	{
		this.yf(new kj);
	}

	iu()
	{
		this.rb();

		this.ow();
	}

	oi(xr)
	{
		this.lt.fj(xr);

		this.xo.te();

		this.lt.mc(xr);

		this.lb = true;
	}

	op(xr)
	{
		this.lt.ph(xr);

		this.xo.wo();
	}

	jo()
	{
		this.yf(new qy);
	}
}

class pb
{
	get ld()
	{
		return qo.get('appPosition');
	}

	hy(xm)
	{
		(xm.width > 100) && (xm.width = 100);

		(xm.left < 0) && (xm.left = 0);

		if (xm.left + xm.width > 100)
		{
			xm.left = 100 - xm.width;
		}

		qo.set('appPosition', xm);
	}
}

const ok = function(ud)
{
	return {
		tu(hq)
		{
			ud.ka.hy(hq);
		}
	}
}

class ey
{
	static uy(km)
	{
		return km == 'Enter';
	}

	static lp(km)
	{
		return ['Control','Meta'].includes(km);
	}
}

class tj
{
	constructor()
	{
		window.addEventListener('keydown', e => this.zy(e), true);
	}

	zy(e)
	{
		this.bh(e);

		const xj = this.xj;

		if (this.se)
		{
			if (xj == 'KeyS')
			{
				e.preventDefault();

				return uj.mj('lw');
			}

			if (xj == 'KeyE' && uf.ot)
			{
				e.preventDefault();

				return uj.mj('cq');
			}

			if (xj == 'KeyX' && ly.jc)
			{
				return uj.mj('yc');
			}
		}

		if (xj == 'Escape')
		{
			return uj.mj('yc');
		}
	}

	bh(e)
	{
		this.xj = e.code;

		this.se = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get nv()
	{
		return this.xj == 'KeyV';
	}
}

class kd
{
	constructor()
	{
		this.pw = {};
	}

	mj(ks)
	{
		let ej = this.im(ks);

		for (let pc of ej)
		{
			pc.ku(ks);
		}
	}

	ig(pc, uj)
	{
		if (typeof uj == 'string')
		{
			uj = [uj];
		}

		for (let bi of uj)
		{
			this.im(bi).push(pc);
		}
	}

	im(ks)
	{
		return this.pw[ks] || (this.pw[ks] = new dj);
	}
}

class ad extends wa
{
	constructor()
	{
		const xo = new oz('fc');

		super(xo);
	}

	gi()
	{
		lj.qr();

		this.tk();
	}
}

class zj extends wa
{
	constructor()
	{
		super(
			new oz('zx')
		);
	}

	cf()
	{
		const ha = new xb({
			xm:'gyxny',
			pj:'Update Now',
			aw:[this, 'xl', 'es']
		});

		this.xo.hw(ha, 'ah');
	}

	xl()
	{
		window.open('https://cs.lett.app/update');
	}
}

class ct extends wa
{
	constructor()
	{
		const xo = new oz('pe');

		super(xo);
	}

	cf()
	{
		this.xo.hw(new xb({
			xm:['cfsek', 'ryhgt'],
			dc:'ip',
			aw:[this, 'tk', 'es']
		}));
	}
}

class qy extends wa
{
	constructor()
	{
		const xo = new oz('pv');

		super(xo);
	}
}

class dn extends wa
{
	constructor()
	{
		const xo = new oz('oz');

		super(xo);

		this.pg();

		uj.ig(this, [
			'ir', 'fz'
		]);
	}

	async ku(bi)
	{
		await fy.pf();

		switch (bi)
		{
			case 'ir':
				return this.pg();

			case 'fz':
				return this.sa();
		}
	}

	pg()
	{
		if (!th.gv)
		{
			return this.yf(new ol);
		}

		if (!th.sz)
		{
			return this.yf(new iq);
		}

		this.ti();
	}

	ro()
	{
		this.ti();
	}

	sa()
	{
		!un.lb && this.ti();
	}

	ti()
	{
		uj.mj('sf');
	}
}

class ol extends wa
{
	constructor()
	{
		const xo = new oz('rj');

		super(xo);
	}

	cf()
	{
		this.uq = new ay({
			aw:[this, 'ye', ['ai', 'ix']]
		});

		this.xo.hw(this.uq, 'oc');

		this.xo.hw(
			new iw({
				py:fy.ag('bc')
			}), 'bv'
		);

		this.xo.hw(
			new sg({bx:'Need help?', cu:'https://cs.lett.app/generating-youtube-api-key'}), 'pd'
		);
	}

	mc()
	{
		this.uq.focus();
	}

	ye(xr)
	{
		xr.js('loading');

		if (!this.pl)
		{
			this.pl = true;

			lj.ye(xr.value).then(mf =>
			{
				!mf && xr.js('error', 'try again');

				this.pl = false;
			});
		}
	}
}

class iq extends bt
{
	constructor()
	{
		super();

		this.yf(new cm);
	}

	eg()
	{
		this.yf(new tg);
	}
}

class cm extends wa
{
	constructor()
	{
		const xo = new oz('wr');

		super(xo);
	}

	cf()
	{
		const tv = [];

		tv.push(
			new xb({
				xm:'gyxny',
				pj:'support it',
				aw:[this, 'eg', 'es']
			})
		);

		tv.push(
			new xb({
				xm:'gyxny',
				pj:'try it',
				aw:[this, 'ro', 'es']
			})
		);

		th.cv && tv.pop();

		for (let wq of tv)
		{
			this.xo.hw(wq, 'ah');
		}
	}
}

class tg extends wa
{
	constructor()
	{
		const xo = new oz('pk');

		super(xo);

		this.qi;
		this.jb;

		uj.ig(this, ['fz']);
	}

	ku(bi)
	{
		switch (bi)
		{
			case 'fz':
				return this.sa();
		}
	}

	cf()
	{
		this.ut = new lf({
			xm:'bzhqk'
		});

		this.xo.hw(this.ut);

		this.am = new jr();

		this.am.ou(
			new xh({
				xm:['bnpwa', 'sqtzm'],
				bx:'9'
			})
		);

		this.xo.hw(this.am, 'am');

		this.td = new jr();

		this.td.ml(
			new xh({
				bx:'One-Time Payment via PayPal'
			})
		);

		this.xo.hw(this.td, 'td');

		this.jp = new xb({
			xm:['gyxny', 'ytwkm'],
			pj:'Pay with PayPal',
		});

		setTimeout(
			_ => this.jp.el(this, 'ki', 'es')
		, 750);

		this.xo.hw(this.jp, 'ah');
	}

	ph()
	{
		this.fm();
	}

	ki()
	{
		if (this.vt)
			return;

		this.vt = true;

		this.ut.jh('loading');

		lj.ak().then(em =>
		{
			if (em) {
				this.ae(em);

				this.ut.jh('waiting');
			}
			else {
				this.ut.jh('error');
			}

			this.vt = false;
		});
	}

	ae(em)
	{
		this.fm();

		this.qi = openWindow(em);

		this.jb = setInterval(
			_ => this.qi.closed && this.fm(),
		500);
	}

	fm()
	{
		if (this.qi)
		{
			this.qi.close();

			this.ut.jh('initial');

			clearInterval(this.jb);
		}
	}

	sa()
	{
		this.fm();

		setTimeout(_ => {
			this.mh('zl', this);
			this.vx();
		}, 900);
	}

	vx()
	{
		this.am.ou(
			new xh({xm:'sqtzm',bx:'Thank You!'}), true
		);

		this.td.ml(
			new xh({bx:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.jp.qe('hxwia');
			this.jp.textContent = 'Done';
			this.jp.pu(this, 'ti', 'es');
		}, 200);
	}

	ti()
	{
		this.mh('ti', this);
	}

	uv()
	{
		super.uv();

		this.fm();
	}
}

class jr extends xh
{
	constructor()
	{
		super();

		this.uw();
	}

	uw()
	{
		this.hm = new xh({
			xm:'efsko'
		});

		this.hw(this.hm);
	}

	ou(xu, df)
	{
		this.wh(xu, 0, df);
	}

	ml(xu, df)
	{
		this.wh(xu, null, df);
	}

	wh(xu, tl, df)
	{
		this.hm.hw(xu, tl);

		if (df)
		{
			this.df(tl != null);
		}
	}

	df(vu)
	{
		let jq, vr = this.hm;

		if (vu)
		{
			vr.style.transform = 'translateY(-100%)';

			jq = 'translateY(0)';
		}
		else {
			jq = 'translateY(-100%)';
		}

		setTimeout(_ => {
			vr.style.transition = 'transform 300ms';

			setTimeout(
				_ => vr.style.transform = jq,
			10);

			setTimeout(_ => {
				vr.style.transition = null;
			}, 300);
		}, 10);
	}
}

class qv extends wa
{
	constructor(eq)
	{
		const xo = new xk;

		super(xo);

		this.dm(eq).then(
			uh => this.da(uh)
		);
	}

	cf()
	{
		this.xo.qe('tvioy');
	}

	da(uh)
	{
		this.xo.innerHTML = uh;
	}

	dm(eq)
	{
		const vi = it.jx('/html/policies/%s.html', eq);

		return lj.dm(vi);
	}
}

class kj extends wa
{
	constructor()
	{
		const xo = new oz('fn');

		super(xo);

		this.hn(ab, yx);

		uj.ig(this, 'cq');
	}

	cf()
	{
		this.qx = new ts({
			placeholder:'type keywords here..',
		});
		this.qx.el(this, 'zb', ['nr']);
		this.qx.el(this, 'sj', ['ix', 'ai']);

		this.ew = new xb({
			xm:'xeqwj',
			pj:'0',
			oy:'disabled',
			aw:[this, 'nb', 'es']
		});

		this.fh = new mq(this);

		this.qt = new zd();
		this.qt.cs = new na(this);

		this.ba = new oz(this.xo.gb('fu'));
		this.ba.hw(this.qx);
		this.ba.hw(this.ew);

		this.wt = new oz(this.xo.gb('bq'));
		this.wt.hw(this.qt);
		this.wt.hw(this.fh);
	}

	fj()
	{
		if (this.bf)
		{
			this.rl();

			if (this.ka.fo)
			{
				this.le('');
				this.qt.mv();
			}
		}
	}

	mc(xr)
	{
		this.qx.focus();

		if (xr == 'kb')
		{
			this.qx.select();
		}
	}

	ph()
	{
		if (this.fh.ky)
		{
			this.fh.lm.tk();
		}
	}

	ku(bi)
	{
		if (bi == 'cq')
			return this.hj();
	}

	kl(xo)
	{
		this.wt.bu(xo);
	}

	zb()
	{
		if (this.bf)
		{
			this.rl();
		}
	}

	sj()
	{
		let q = this.xz();

		switch (true)
		{
			case (!q):
				return;

			case (!uf.ot):
				return this.qt.ec('dg');

			case (this.ka.pr):
			{
				if (!this.ka.hg)
					return;

				if (q == this.ka.af)
				{
					return this.qt.ec('wu');
				}
			}
		}

		this.vk(q);
	}

	bn()
	{
		if (!uf.ot)
			return this.qt.ec('dg');

		this.tn(':all');
	}

	get yr()
	{
		return this.ka.yr;
	}

	nb()
	{
		this.ev(new ct);
	}

	vk(q)
	{
		this.ka.search(q);
		this.qt.ec('li');
	}

	rl()
	{
		this.ka.nq();
	}

	hj()
	{
		let q = it.hp(uf.tr.currentTime);

		this.tn(q);
	}

	xz()
	{
		return this.qx.value;
	}

	le(q)
	{
		this.qx.value = q;
	}

	tn(q)
	{
		this.le(q);
		this.vk(q);
	}

	get bf()
	{
		if (uf.ot && uf.ob != this.nj)
		{
			return Boolean(this.nj = uf.ob);
		}

		return false;
	}
}

class ab
{
	constructor()
	{
		this.ri = ri.de('ea', this.po.bind(this));

		this.af = '';
		this.um = 0;
		this.bo = 0;
		this.kp = 500;
		this.hg = false;
		this.fo = false;
		this.nf = [];
		this.ln = 25;
	}

	po(rd)
	{
		const hs = rd.hs;

		switch (rd.vj)
		{
			case 'xi':
				return this.yt(hs);

			case 'kw':
				return this.my(hs);

			case 'ch':
				return this.hf(hs);
		}
	}

	get pr()
	{
		return this.hg || this.ge('bo') < 500;
	}

	get yr()
	{
		return this.nf.splice(0, this.ln);
	}

	nq()
	{
		this.ri.zu('kw', new qk(''));
	}

	search(q)
	{
		this.yv(q);

		this.ri.zu('xi', new qk(q));
	}

	hf(ch)
	{
		this.nh();

		this.cs.hf(ch.bi);
	}

	yt(r)
	{
		this.nh();

		let xf = this.kp - this.ge('um');

		(r.vl == 0) && (xf = 200);

		this.nf = r.kr;
		this.fo = (r.vl == 0);

		setTimeout(
			_ => this.cs.yt(r.vl, r.dh),
		xf);
	}

	my(n)
	{
		this.cs.my(n);
	}

	tb(sy)
	{
		this[sy] = Date.now();
	}

	ge(sy)
	{
		return Date.now() - this[sy];
	}

	yv(q)
	{
		this.af = q;

		this.hg = true;

		this.tb('um');
	}

	nh()
	{
		this.hg = false;

		this.tb('bo');
	}
}

class zd extends oz
{
	constructor()
	{
		super('oz', {
			xm:'kaiji'
		});

		this.mg = {
			bs: 'no results match your query',
			li: 'Searching...',
			wu: 'Searching still...',
			dg: 'You are not watching any video',
			cl: 'Invalid request',
			ht: 'This video has 0 comments',
			nx: 'Comments are disabled for this video.',
			xp: 'check your internet connection',
			rz: 'service down for maintenance',
			pt: 'request timeout, try again',
			zc: 'feature not supported for this video',
			rq: 'invalid response from server, try again',
			re: 'something is not working properly',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'maximum allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
		};
	}

	ec(wy)
	{
		this.tw(wy);
	}

	hk(...wx)
	{
		this.nu(...wx);
	}

	gp(jw, wx)
	{
		this.nu(
			it.jx(jw, wx)
		);
	}

	mv()
	{
		this.innerHTML = '';
	}

	tw(bi)
	{
		let hi = this.mg[bi];

		if (!hi)
		{
			hi = this.mg.re;
		}

		this.nu(hi);
	}

	nu(...kx)
	{
		const gj = document.createDocumentFragment();

		for (let ft of kx)
		{
			let gk = null;

			if (typeof ft == 'string')
			{
				gk = document.createTextNode(ft);
			}
			else {
				gk = ft.vm;
			}

			gj.appendChild(gk);
		}

		this.mv();
		this.appendChild(gj);

		this.cs.cb();
	}
}

class mq extends jm
{
	constructor(cg)
	{
		super(cg);

		this.ky = false;
	}

	xw(xr)
	{
		this.lm.og(xr.ob, xr.ns);

		xr.zs.gr(this.lm);
	}

	qg(xr)
	{
		it.sd(uf.tr, xr.ns);
	}

	qn(mk)
	{
		const wg = [];

		for (let la of mk)
		{
			let dw = new oz('qh');

			for (let i = 0; i < la.length; i++)
			{
				const xv = la[i];

				if (xv.xn > 0)
				{
					const n = i + xv.xn;

					for (let k = i; k < n; k++)
					{
						la[k].ve = la.slice(k + 1, n + 1).some(ji => !ji.hidden);
					}
				}

				dw.hw(
					new ez(xv)
				);
			}

			wg.push(dw);
		}

		return wg;
	}

	get lm()
	{
		if (!this.ky)
		{
			this.ky = true;
			this.ar = new sm;
		}

		return this.ar;
	}
}

const yx = function(ud)
{
	return {
		my(n)
		{
			let sv = n;

			if (n < 0) switch (n)
			{
				case -2:
					sv = '∞';
					break;

				case -1:
					sv = '∅';
					break;
			}

			ud.ew.bz(sv);

			if (0 < n && n < 1000)
			{
				ud.ew.jh('normal')
			}
			else {
				ud.ew.jh('disabled');
			}
		},

		yt(vl, p)
		{
			this.my(p);

			if (vl > 0)
			{
				ud.fh.vp();

				return ud.kl(ud.fh);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return ud.qt.ec('ht');

				case -1:
					return ud.qt.ec('nx');

				case -2:
					return ud.qt.ec('bs');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const ju = new sg({
						bx:it.jx('%s comments', p),
						aw:[ud, 'bn', 'es']
					});

					return ud.qt.hk('Nothing found in ', ju);
				}

				return ud.qt.gp('Nothing found in %s comments', p);
			}

			ud.qt.ec('bs');
		},

		hf(qu)
		{
			ud.qt.ec(qu);
		}
	}
}

const na = function(ud)
{
	return {
		cb()
		{
			ud.kl(ud.qt);
		}
	}
}

class sm extends oz
{
	constructor()
	{
		super('sm');

		this.wn = this.children[0];

		this.wn.onload = () => {
			try {
				const ov = this.wn.contentDocument.body;

				this.tr = ov.querySelector('video');

				ov.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.nj;
		this.je;
	}

	og(ob, ns)
	{
		if (ob != this.nj) {
			this.wn.src = it.jx(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [ob, ns]
			);
		}
		else if (this.tr) {
			it.sd(this.tr, ns);
		}

		this.nj = ob;
		this.je = ns;
	}

	tk()
	{
		if (this.mx)
		{
			this.dk();
		}
	}
}

class ez extends oz
{
	constructor(xv)
	{
		const ls = kc.zk('ez', xv);

		super(ls);

		this.uw(xv);
	}

	uw(xv)
	{
		this.ub(xv);
		this.jv(xv);

		if (xv.bj)
		{
			if (xv.ve)
				this.qe('jyqoi');

			if (xv.hidden)
				this.qe('qojqm');
		}

		if (xv.an)
		{
			this.qe('qciwo');

			this.hw(
				new oz('hr', {xm:'ydkzw'}), 'tx'
			);
		}
	}

	hu()
	{
		return this;
	}

	gr(lm)
	{
		this.hw(lm, 'zy');
	}

	ub(xv)
	{
		const sx = xv.lu;

		const lo = sx.replace(
			gh[6], it.jx('s%s-', xv.bj ? 48 : 80)
		);

		this.hw(new iw({
			py:lo,
			si:sx,
		}), 'rh');
	}

	jv(xv)
	{
		const zm = new xh({
			xm:'cnvko',
			mo: {
				dir:xv.at,
				lang:xv.ga
			}
		});

		const qf = Object.keys(xv.kv);

		if (qf.length)
		{
			const mw = it.by(xv.no, qf);

			for (let x of mw)
			{
				if (it.rw(x))
				{
					const a = this.jf(xv.kv[x]);

					zm.hw(a);
				}
				else {
					const s = kc.cy(x);

					zm.appendChild(s);
				}
			}
		}
		else {
			zm.textContent = xv.no;
		}

		if (xv.bj && !xv.an)
		{
			zm.qe('qrsmi');

			zm.addEventListener('click',
				e => zm.sc('qrsmi')
			);
		}

		this.hw(zm, 'zy');
	}

	jf(x)
	{
		let a;

		if (x.bg == 'zf' && x.ob != uf.ob)
		{
			x.bg = 'yb';
		}

		switch (x.bg)
		{
			case 'zf':
				a = new ys(x.bx, x.ns);
				a.el(this, 'qg', 'es');
				return a;

			case 'yb':
				a = new jl(x.bx, x.ob, x.ns);
				a.el(this, 'xw', 'es');
				return a;

			case 'on':
				return new sg({
					bx:x.bx,
					cu:x.em
				});
		}
	}
}

class jl extends sg
{
	constructor(bx, ob, ns)
	{
		super({
			xm:'dfhgz',
			bx:bx
		});

		this.ob = ob;
		this.ns = ns;
	}

	get zs()
	{
		return this.mh('hu');
	}
}

class ys extends sg
{
	constructor(bx, ns)
	{
		super({
			xm:'dfhgz',
			bx:bx
		});

		this.ns = ns;
	}
}

let fy;
let qo;
let xt;
let ri;
let lj;
let uj;
let th;
let un;
let fk;
let ly;
let kc;

if (uf.bw)
{
	fy = new dx;
	qo = new ue;
	xt = new ij;
	ri = new qj;
	lj = new yl;
	uj = new kd;
	ly = new yi;

	lj.wz().then(async nl =>
	{
		if (nl.oy.vy)
		{
			await fy.pf();
		}

		kc = new du(nl.hl);

		un = new xc(nl.oy);

		fk = new tj;

		lj.ql();

		fy.ds();
	});

	xt.lv && ly.rp();
}

const gh = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];