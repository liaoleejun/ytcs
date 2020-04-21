/*
 * This code belongs to Comments Search for YouTube chrome extension
 * developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) the extension developers - all rights reserved
 *
 */
'use strict';

const ql = {};

for (let jm of 'object array string regex date math type std'.split(' '))
{
	ql[jm] = {};
}

ql.rx = function(iv, db)
{
	return iv != undefined && iv.constructor === db;
}

ql.an = function()
{
	return ql.iq(9);
}

ql.vb = function(gb)
{
	return qu[0].test(gb);
}

ql.rn = function(tj)
{
	return Object.keys(tj).length == 0;
}

ql.kw = function(lm, tj)
{
	for (let aq in tj)
	{
		const kq = tj[aq];

		if (aq == lm) return kq;
		if (kq == lm) return aq;
	}
}

ql.xj = function(tj, su)
{
	let gb = '';

	for (let aq in tj)
	{
		gb += aq + '=' + tj[aq] + su;
	}

	return gb.slice(0, -1);
}

ql.ze = function(tu, el, lk)
{
	const nd = el + 1;

	return lk.slice(nd, nd + tu);
}

ql.tc = function(lk)
{
	return lk[lk.length - 1];
}

ql.fm = function(yt, hw)
{
	yt += '?';

	for (let aq in hw)
	{
		yt += aq + '=' + encodeURIComponent(hw[aq]) + '&';
	}

	return yt.slice(0, -1);
}

ql.iu = function(gb, ud)
{
	if (ql.rx(ud, Array))
	{
		let i = 0;

		return gb.replace(qu[1], _ => ud[i++]);
	}

	return gb.replace('%s', ud);
}

ql.ou = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

ql.mn = function(gb, uv)
{
	const rq = ql.iu('(%s)', uv.join('|'));

	return gb.split(new RegExp(rq)).filter(s => s !== '');
}

ql.rk = function(gb)
{
	return gb.toUpperCase();
}

ql.bu = function(gb)
{
	return gb.toLowerCase();
}

ql.wo = function(gb, zj)
{
	if (!zj)
	{
		gb = gb.toLowerCase();
	}

	return gb[0].toUpperCase() + gb.slice(1);
}

ql.dj = function(vh, gb)
{
	return gb.match(vh) || [];
}

ql.pr = function(vh, gb)
{
	if (vh.global) return '';

	const m = ql.dj(vh, gb);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

ql.ym = function()
{
	return Math.floor(Date.now() / 1000);
}

ql.yg = function(xs)
{
	return xs < ql.ym();
}

ql.zr = function(q)
{
	const hj = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = ql.pr(qu[2], q);

	return Date.now() + (x[0] * hj[x[1]] * 1000);
}

ql.yp = function(je)
{
	let x = je.split(':'),
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

ql.ix = function(by)
{
	let lk = [];

	lk.push(by / 3600);

	by %= 3600;

	lk.push(by / 60);

	lk.push(by % 60);

	lk = lk.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return lk.join(':').replace(qu[3], '');
}

ql.iq = function(gk)
{
	return Math.random().toString().slice(2, gk + 2);
}

ql.lx = function(jy, kh)
{
	const hm = Math.random() * (kh - jy) + jy;

	return Math.floor(hm);
}

ql.cd = function(x, a, b)
{
	return x >= a && x <= b;
}

ql.xv = function(a, b)
{
	return 100 * (a / b);
}

ql.zo = function()
{
	let xk, cj = 0;

	try {
		xk = [ar, rz, fr];
	}
	catch (e) {
		xk = [yw, fr];
	}

	xk.forEach(
		ei => cj += ei.toString().length
	);

	return cj != 2035;
}

class pi
{
	constructor(pb, cw)
	{
		this.pb = pb;
		this.cw = cw;
	}
}

class tm
{
	constructor(yh, pb, cw)
	{
		this.yh = yh;
		this.zi = new pi(pb, cw);
	}
}

class pa extends Array
{
	constructor(sz)
	{
		super();

		if (sz != null)
		{
			super.push(sz);
		}
	}

	push(wa)
	{
		return !this.includes(wa) && super.push(wa);
	}
}

class rh
{
	constructor(ts, rd)
	{
		const ei = ts.status;

		this.ei = ei;
		this.vl = false;
		this.eu = false;
		this.zv = null;
		this.cw = null;

		switch (rd)
		{
			case 'error':
				return this.mx('ti');

			case 'timeout':
				return this.mx('ke');

			default:
			{
				this.vl = (ei == 200);

				if (ei >= 500)
				{
					return this.mx('sh');
				}

				try {
					this.cw = JSON.parse(ts.responseText);
				}
				catch (e) {
					this.cw = ts.responseText;
				}
			}
		}
	}

	vm(nm)
	{
		this.zv = nm;
	}

	mx(nm)
	{
		this.vm(nm);

		this.eu = true;
	}
}

class wy
{
	constructor(cw, wh)
	{
		Object.assign(this, cw);

		Object.defineProperty(this, 'wh', {
			value: wh
		});
	}

	set(aq, kq)
	{
		this[aq] = kq;

		this.xy();
	}

	xy()
	{
		return au.set(this.wh, this);
	}
}

class fr extends wy
{
	constructor(cw, wh)
	{
		super(cw, wh);
	}

	get ly()
	{
		return Boolean(this.vq)
	}

	get vq()
	{
		return this[0];
	}

	get vo()
	{
		return this[1];
	}

	get uf()
	{
		return ql.yg(this.vo);
	}

	get yl()
	{
		const sd = this.vo.toString().split('').pop();

		return Boolean(+sd);
	}

	set vq(aq)
	{
		this.set(0, aq);
	}

	set vo(ht)
	{
		this.set(1, ht);
	}

	get um()
	{
		let s = this.vo.toString(),
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

class ho
{
	constructor(df)
	{
		if (df)
		{
			this.mg();
		}
	}

	xg(zs, kc, ey)
	{
	}

	mg()
	{
		chrome.runtime.onMessage.addListener(
			this.xg.bind(this)
		);
	}
}

class jv extends ho
{
	constructor()
	{
		super(false);
	}

	xg(zs, kc, ey)
	{
		const cw = zs.cw;

		switch (zs.pb)
		{
			case 'ld':
				return this.ob(cw);
		}
	}

	ob(ld)
	{
		if (ld == 'qh')
		{
			vj.nd();
		}
	}

	lu()
	{
		return this.sg('lu');
	}

	oa(lv)
	{
		return this.sg('oa', lv);
	}

	wv(vq)
	{
		return this.sg('wv', vq);
	}

	gr()
	{
		return this.sg('gr');
	}

	bf()
	{
		return this.sg('bf');
	}

	sg(pb, cw)
	{
		const zs = new pi(pb, cw);

		return new Promise(ey =>
		{
			try {
				chrome.runtime.sendMessage(zs, ey);
			}
			catch (e) {
			}
		});
	}
}

class en extends ho
{
	constructor()
	{
		super(true);
	}

	xg(zs, kc, ey)
	{
		const vf = function(...ud)
		{
			try {
				ey(...ud);
			}
			catch (e) {
			}
		};

		de.xm.then(_ =>
		{
			const cw = zs.cw;

			switch (zs.pb)
			{
				case 'lu':
					de.lu().then(vf);
				break;

				case 'oa':
					de.oa(cw).then(vf);
				break;

				case 'wv':
					de.wv(cw).then(vf);
				break;

				case 'gr':
					vw.di.gr(cw).then(vf);
				break;

				case 'bf':
					de.ig();
				break;
			}
		});

		return true;
	}
}

class bk
{
	get(aq)
	{
		return new Promise(kg =>
		{
			try {
				chrome.storage.local.get(aq, gc =>
					kg(typeof aq == 'string' ? gc[aq] : gc)
				);
			}
			catch (e) {
			}
		});
	}

	set(aq, kq)
	{
		let cw;

		if (typeof aq == 'object')
		{
			cw = aq;
		}
		else {
			cw = {[aq]:kq};
		}

		return new Promise(zb =>
		{
			try {
				chrome.storage.local.set(cw, zb);
			}
			catch (e) {
			}
		});
	}

	mb()
	{
		return new Promise(zb =>
		{
			try {
				chrome.storage.local.clear(zb);
			}
			catch (e) {
			}
		});
	}
}

class ckzns
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			tm => this.om(tm)
		);

		Port.onDisconnect.addListener(
			_ => this.vt()
		);

		this.Port = Port;

		this.tf = {
		};

		this.mq = false;
	}

	xg(m)
	{
	}

	dq(yh, pb, cw)
	{
		const kl = new tm(yh, pb, cw);

		if (!this.mq)
		{
			this.Port.postMessage(kl);
		}
	}

	om(x)
	{
		this.pz(x.yh).xg(x.zi);
	}

	pz(yh)
	{
		return this.tf[yh] || this;
	}

	nu(yh, xg, vt)
	{
		return this.tf[yh] = new fd(this, yh, xg, vt);
	}

	vt()
	{
		this.mq = true;

		for (let yh in this.tf)
		{
			this.pz(yh).vt();
		}
	}
}

class yc extends ckzns
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	xg(zs)
	{
		const cw = zs.cw;

		switch (zs.pb)
		{
			case 'mt':
				return js.gf(cw);
		}
	}

	nu(yh, xg, vt)
	{
		this.dq(null, 'nu', yh);

		return super.nu(yh, xg, vt);
	}

	vt()
	{
		super.vt();

		vj.bw();
	}
}

class hb extends ckzns
{
	constructor(gw)
	{
		super(gw);
	}

	xg(zs)
	{
		switch (zs.pb)
		{
			case 'nu':
				return this.nu(zs.cw);
		}
	}

	nu(yh)
	{
		const vc = super.nu(yh);

		switch (yh)
		{
			case 'pd':
				return new ug(vc);
		}
	}
}

class bv
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			nl => this.hr(nl)
		);

		this.gn = [];
	}

	hr(gw)
	{
		this.gn.push(
			new hb(gw)
		);
	}

	dw(wz)
	{
		for (let gw of this.gn)
		{
			gw.dq(null, 'mt', wz);
		}
	}
}

class fd
{
	constructor(gw, yh, xg, vt)
	{
		this.gw = gw;

		this.yh = yh;

		if (xg)
		{
			this.xg = xg;
		}

		if (vt)
		{
			this.vt = vt;
		}
	}

	dq(pb, cw)
	{
		this.gw.dq(this.yh, pb, cw);
	}

	xg(m)
	{
	}

	vt()
	{
	}
}
class sw
{
	re(im)
	{
		this.im = im;
	}

	se(pk, kc)
	{
		if (pk in this && this != kc)
		{
			return this[pk](kc);
		}

		if (this.rc)
		{
			return this.rc.se(pk, kc);
		}
	}

	get rc()
	{
		return this.im || this.bj;
	}
}

const ck = function(dm, hi)
{
	return new hi(dm);
}

class qw extends sw
{
	constructor(ku)
	{
		super();

		this.za = ku;

		this.yj('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	yx(os)
	{
		if (typeof os == 'string')
		{
			os = [os];
		}

		this.za.classList.add(...os);
	}

	gj(os)
	{
		this.za.classList.remove(os);
	}

	dh(os)
	{
		this.za.classList.contains(os) ? this.gj(os)
												: this.yx(os);
	}

	og()
	{
		this.za.remove();
	}

	yj(...no)
	{
		for (let x of no) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.za[x] instanceof Function)
			{
				this[x] = this.za[x].bind(this.za);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.za[x];
					},
					set(v) {
						this.za[x] = v;
					}
				});
			}
		}
	}
}

class qv extends qw
{
	constructor(mc, nv)
	{
		super(
			typeof mc == 'string' ? er.ak(mc) : mc
		);

		this.bj = null;
		this.it = [];
		this.nk = {};
		this.fu = {};

		if (nv)
		{
			if (nv.fz)
			{
				this.yx(nv.fz);
			}

			if (nv.wc)
			{
				this.textContent = nv.wc;
			}

			if (nv.vi)
			{
				this.eb(...nv.vi);
			}

			if (nv.ky)
			{
				for (let lw in nv.ky)
				{
					this.setAttribute(lw, nv.ky[lw]);
				}
			}

			if (nv.import)
			{
				for (let ai of nv.import)
				{
					this.yj(ai);
				}
			}
		}
	}

	ot(wu, pj)
	{
		if (wu.bj)
		{
			if (wu.bj == this)
				return;

			wu.tw();
		}

		wu.bj = this;
		this.it.push(wu);

		switch (typeof pj)
		{
			case 'string':
				return this.jq(pj).appendChild(wu.za);

			case 'number':
				return this.za.prepend(wu.za);

			default:
				return this.appendChild(wu.za);
		}
	}

	jq(xd)
	{
		return this.querySelector('#' + xd);
	}

	so(vi, pk, lg)
	{
		this.vi = {};

		this.eb(vi, pk, lg);
	}

	eb(vi, pk, lg)
	{
		if (typeof lg == 'string')
		{
			lg = [lg];
		}

		for (let ef of lg)
		{
			if (!this.fu[ef])
			{
				this.fu[ef] = new Map;

				this.addEventListener(
					ql.kw(ef, qv.gp), e => this.cf(e)
				);
			}

			this.fu[ef].set(vi, pk)
		}
	}

	qp(ef)
	{
		const fu = this.fu[ef];

		if (fu)
		{
			for (let [vi, pk] of fu)
			{
				vi.se(pk, this);
			}
		}
	}

	hf()
	{
		this.hidden = true;
	}

	gh()
	{
		this.hidden = false;
	}

	mb()
	{
		let i = this.it.length;

		while (i--)
		{
			this.it[i].tw();
		}
	}

	tw()
	{
		this.bj.ux(this);
	}

	eq(wu)
	{
		this.appendChild(wu.za);
	}

	ux(wu)
	{
		wu.bj = null;

		this.it.splice(
			this.it.indexOf(wu), 1
		);

		wu.za.remove();
	}

	cf(e)
	{
		e.stopPropagation();

		this[ql.kw(e.type, qv.gp)](e);
	}

	jl()
	{
		this.qp('jl');
	}
}

qv.gp = {
	jl:'click',
	sj:'paste',
	hc:'keyup',
	xb:'keyup',
	lj:'focus',
};

class mo extends qv
{
	constructor(nv)
	{
		super('mo', nv);
	}
}

class br extends qv
{
	constructor()
	{
		super('br');

		this.yj('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			bo.oq(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class tq extends br
{
	constructor(ys)
	{
		super();

		this.ys = ys;

		this.qn;

		this.addEventListener('scroll',
			_ => this.wp()
		);
	}

	we()
	{
	}

	qf()
	{
		this.mb();
		this.zt();
		this.vx();

		this.sf();
	}

	wp()
	{
		if (this.uj && this.ga)
		{
			this.vx();
		}
	}

	zt()
	{
		this.qn = this.we(this.ys.fs);
	}

	vx()
	{
		for (let wu of this.qn)
		{
			this.ot(wu);
		}

		this.zt();
	}

	sf()
	{
		this.gj('fhtka');

		if (this.tv)
		{
			this.yx('fhtka');
		}
	}

	get tv()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get uj()
	{
		return this.qn.length;
	}

	get ga()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class tb extends qv
{
	constructor(dg, cq)
	{
		super('tb');

		this.yj('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.nt = dg;

		this.gv(dg, cq);

		this.ft();
		this.lb();
	}

	nx(dp)
	{
		for (let k in dp)
		{
			this.style[k] = dp[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	gv(dg, cq)
	{
		const x = window.innerHeight - cq;
		const y = window.innerWidth - dg - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = dg + 'px';
	}

	ft()
	{
		let cx = this.querySelectorAll('[resize]');

		for (let vg of cx)
		{
			vg.addEventListener('pointerdown',
				e => this.aj(e, 'dv')
			);
		}
	}

	lb()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.aj(e, 'ec')
		);
	}

	aj(e, pk)
	{
		if (e.which == 1)
			this[pk](e);
	}

	qd()
	{
		return this.getBoundingClientRect();
	}

	dv(e)
	{
		const ry = e.target.getAttribute('resize'),
				tp = ry.includes('w'),
				sr = ry.includes('n'),
				zh = ry.includes('e');

		const qb = this.qd(),
				nt = this.nt,
				gq = 56,
				cl = ty.lz,
				ie = window.innerHeight - gq,
				ok = e.clientX,
				io = e.clientY,
				jo = qb.x,
				hl = qb.y,
				my = qb.width;

		let tr = 0,
				zw = 0,
				eh = jo,
				lh = hl,
				hg = my;

		let ia = (e) =>
		{
			tr = e.clientX - ok;
			zw = e.clientY - io;

			if (sr)
			{
				lh = hl + zw;

				(lh < 0) && (lh = 0);

				(lh > ie) && (lh = ie);

				this.style.top = lh + 'px';
			}

			if (zh)
			{
				hg = my + tr;

				(e.clientX > cl) && (hg = cl - jo);

				(hg < nt) && (hg = nt);

				this.style.width = hg + 'px';
			}

			if (tp)
			{
				eh = jo + tr;
				hg = my - tr;

				if (eh < 0)
				{
					eh = 0;
					hg = my + jo;
				}

				if (hg < nt)
				{
					eh = jo + (my - nt);
					hg = nt;
				}

				this.style.width = hg + 'px';
				this.style.left = eh + 'px';
			}
		};

		let sn = () => {
			(tr != 0 || zw != 0) && this.bi();
		};

		this.kx(ia, sn);
	}

	ec(e)
	{
		let jo = this.offsetLeft,
			ok = e.clientX,
			tr = 0;

		let ia = (e) => {
			tr = e.clientX - ok;
			this.style.left = jo + tr + 'px';
		};

		let sn = () => {
			(tr != 0) && this.bi();
		};

		this.kx(ia, sn);
	}

	kx(ia, sn)
	{
		bo.uy(true);

		document.onpointermove = (e) => ia(e);

		document.onpointerup = (e) => {
			bo.uy(false);
			sn();
			document.onpointerup = document.onpointermove = null;
		};
	}

	bi()
	{
		if (this.hidden) return;

		let qb = this.qd();

		let dp = {
			width: ql.xv(qb.width, window.innerWidth),
			left: ql.xv(qb.x, window.innerWidth),
			top: ql.xv(qb.y, window.innerHeight),
		};

		this.nx(dp);

		if ('ng' in this.nk)
		{
			this.nk.ng(dp);
		}
	}
}

class wx extends tb
{
	constructor(dg, cq)
	{
		super(dg, cq);

		this.addEventListener('wheel', bo.oq);
	}
}

class po extends qv
{
	constructor(nv)
	{
		super('po', nv);

		this.yj('src');

		if (nv.ph)
		{
			this.addEventListener('error', e => this.src = nv.ph, {once:true});
		}

		this.src = nv.qo;
	}
}

class ij extends qv
{
	constructor(mc, nv)
	{
		super(mc, nv);

		this.tn = [];
		this.sp = false;
	}

	hc(e)
	{
		if (e.key == 'Enter')
		{
			this.qp('xb');
		}

		this.qp('hc');
	}

	sj(e)
	{
		setTimeout(
			_ => this.qp('sj'),
		10);
	}

	lj(e)
	{
		this.qp('lj');
	}

	get ep()
	{
		if (!this.sp)
		{
			const hq = Date.now();

			const gk = this.tn.push(hq);

			if (gk > 3)
			{
				if (hq - this.tn[0] < 2000)
				{
					this.sp = true;

					setTimeout(
						_ => this.sp = false,
					20 * 1000);
				}
				else {
					this.tn.length = 0;
				}
			}
		}

		return this.sp;
	}
}

class vn extends ij
{
	constructor(nv)
	{
		super('vn', nv);

		this.yj('placeholder', 'focus', 'select');

		if (nv && nv.placeholder)
		{
			this.placeholder = nv.placeholder;
		}
	}

	get value()
	{
		return this.za.value.trim();
	}

	set value(s)
	{
		this.za.value = String(s).trim();
	}
}

class sx extends ij
{
	constructor(nv)
	{
		super('sx', nv);

		this.gv();
	}

	gv()
	{
		this.km = new vn();

		this.ot(this.km, 'ab');

		this.ez = new ac();

		this.ot(this.ez, 'ab');

		this.bt = this.jq('bt');
	}

	focus()
	{
		this.km.focus();
	}

	get value()
	{
		return this.km.value;
	}

	tg(to, wc)
	{
		this.ez.jc(to);

		this.bt.textContent = wc || '';
	}
}

class px extends qv
{
	constructor(mc, nv)
	{
		super(mc, nv);

		this.jc(nv.to || 'initial');
	}

	get gl()
	{
		return this.to == 'disabled';
	}

	get qc()
	{
		return this.to == 'selected';
	}

	jc(to)
	{
		this.to = to;

		this.setAttribute('state', to);
	}

	cf(e)
	{
		if (!this.gl)
		{
			super.cf(e);
		}
	}
}

class ay extends px
{
	constructor(nv)
	{
		super('ay', nv);

		if (nv.nj)
		{
			this.pt(nv.nj);
		}

		if (nv.kj)
		{
			this.nf(nv.kj);
		}
	}

	pt(wc)
	{
		this.textContent = wc;
	}

	nf(mc)
	{
		const kj = er.ak(mc);

		this.appendChild(kj);
	}
}

class va extends ay
{
	constructor(nv)
	{
		super(nv);

		this.value = nv.value;
	}

	jl()
	{
		if (this.qc)
		{
			this.jc('initial');
		}
		else {
			this.jc('selected');
		}

		super.jl();
	}
}

class jh extends qv
{
	constructor(nv)
	{
		super('jh', nv);

		if (nv.tx)
		{
			this.setAttribute('href', nv.tx);
		}
	}
}

class ac extends qv
{
	constructor(nv)
	{
		super('ac', nv);
	}

	jc(to)
	{
		this.setAttribute('state', to);
	}
}

class gt extends sw
{
	constructor(wu, jr)
	{
		super();

		this.wu;

		this.hz;

		this.children = [];

		this.gz(wu, jr);
	}

	gz(wu, jr)
	{
		wu.re(this);

		if (jr)
		{
			wu.nk = new ck(this, jr);
		}

		this.wu = wu;

		this.ip();
	}

	yu(bx, zg)
	{
		this.hz = new bx;

		if (zg)
		{
			this.hz.nk = new ck(this, zg);
		}

		this.fa();
	}

	fa()
	{
	}

	ip()
	{
	}

	yz(kc)
	{
		if (this.bd)
		{
			this.bd.yz(kc);
		}

	}

	dy(kc)
	{
		if (this.bd)
		{
			this.bd.dy(kc);
		}

	}

	qi(kc)
	{
		if (this.bd)
		{
			this.bd.qi(kc);
		}

	}

	hd(kc)
	{
		if (this.bd)
		{
			this.bd.hd(kc);
		}

	}

	oy(xd)
	{
	}

	gh(go, kc)
	{
		this.wu.appendChild(go.wu.za);
	}

	uc(go)
	{
		this.ut.yr(go);
	}

	hn()
	{
		this.ut.pn();
	}

	yr(yq, cv)
	{
		yq.re(this);

		yq.yz();

		this.children.push(yq);

		this.wu.ot(yq.wu, cv);

		yq.dy();
	}

	pn()
	{
		this.children.pop().yf();
	}

	get ut()
	{
		let yo = this;

		while (yo.im)
		{
			yo = yo.im;
		}

		return yo;
	}

	get sv()
	{
		return this.children.length;
	}

	get bd()
	{
		return ql.tc(this.children);
	}

	yf()
	{
		this.wu.og();

		for (let yq of this.children)
		{
			yq.yf();
		}
	}
}

class ha extends gt
{
	constructor()
	{
		const wu = new qv('gu');

		super(wu);
	}

	ip()
	{
		this.nb = new ay({
			fz:['akasd', 'lgxjk'],
			kj:'ad',
			to:'hidden',
			vi:[this, 'st', 'jl']
		});

		this.wu.ot(this.nb);
	}

	st()
	{
		this.pn();

		this.rl();
	}

	oe()
	{
		this.nb.jc('hidden');
	}

	yr(yq)
	{
		super.yr(yq, 'ns');

		this.rl();
	}

	rl()
	{
		if (this.sv > 1)
		{
			this.nb.jc('initial');
		}
		else {
			this.nb.jc('hidden');
		}
	}




}

ql.bh = function(nc, hv)
{
	nc.currentTime = hv;

	if (nc.paused)
	{
		nc.play();
	}
}

function openWindow(yt)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = ql.xj(q, ',');

	return window.open(yt, '', q);
}

class ic
{
	constructor(q)
	{
		Object.assign(this, {
			xt: q,
			kn: un.kn,
			cb: un.nc.duration,
			zm:un.nc.currentTime
		});
	}
}

class uw
{
	constructor()
	{
		this.yb = navigator.platform.includes('Mac');
	}

	get lz()
	{
		return !this.yb ? document.body.clientWidth : window.innerWidth;
	}
}

const un = {
	get ji()
	{
		return ['www', 'music'].includes(this.yv);
	},

	get gi()
	{
		return location.pathname == '/watch';
	},

	get nc()
	{
		if (!this.sb)
		{
			this.sb = bo.querySelector('video');
		}

		return this.sb || document.createElement('video');
	},

	get kn()
	{
		return ql.pr(qu[4], location.href);
	},

	get yv()
	{
		return location.host.split('.')[0];
	}
}

class zy
{
	constructor(pw)
	{
		this.ek = document.createElement('div');

		this.at = {};

		for (let zx of this.ws(pw).children)
		{
			const qy = zx.getAttribute('protoid');

			if (qy) {
				zx.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.at[qy] = zx.outerHTML;
		}
	}

	ak(mc, jz)
	{
		let sc = this.at[mc];

		if (jz)
		{
			sc = sc.replace(qu[5], (_, aq) => jz[aq]);
		}

		return this.ws(sc);
	}

	ap(wc)
	{
		const s = document.createElement('span');

		s.textContent = wc;

		return s;
	}

	ws(sc)
	{
		this.ek.innerHTML = sc;

		return this.ek.children[0];
	}
}

class lp extends qw
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.mr = 'fullscreenchange';
			this.qa = 'fullscreenElement';
		}
		else {
			this.mr = 'webkitfullscreenchange';
			this.qa = 'webkitFullscreenElement';
		}

		this.bp();

		document.addEventListener(
			this.mr, _ => this.bp()
		);
	}

	get ew()
	{
		return Boolean(document[this.qa]);
	}

	ra()
	{
		this.yx('wdsjq');
	}

	uy(ax)
	{
		ax ? this.yx('klfid')
			: this.gj('klfid');
	}

	oq(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	bp()
	{
		this.setAttribute('cs-fullscreen', this.ew);
	}
}

class yw
{
	constructor()
	{
		this.wb = {
			wn: '/html/svg/1.svg',
			cu: '/html/svg/2.svg'
		}
	}

	dc()
	{
		ql.zo() && jf.bf();
	}

	async xe()
	{
		le = await au.get('1');

		le = new fr(le);
	}

	mh(xd)
	{
		return chrome.runtime.getURL(this.wb[xd]);
	}
}

class ar extends gt
{
	constructor(to)
	{
		const wu = new wx(460, 480);

		super(wu, pv);

		this.yu(gx);

		js.wk(this, [
			'gs', 'rt', 'pg', 'sl'
		]);

		this.wq = false;

		switch (true)
		{
			case (to.ej):
				return this.yr(new rm);

			case (to.oi):
				return this.yr(new fp);

			default:
				this.wf();
		}
	}

	ip()
	{
		this.wu.ot(new ay({
			fz:['akasd', 'rotop'],
			kj:'xi',
			vi:[this, 'fe', 'jl']
		}));

		document.body.appendChild(this.wu.za);
	}

	fa()
	{
		this.hz.qd.then(
			dp => dp && this.wu.nx(dp)
		);
	}

	oy(xd)
	{
		switch (xd)
		{
			case 'gs':
				return this.nd('pl');

			case 'rt':
				return this.nd('zc');

			case 'pg':
				return this.fe();

			case 'sl':
				return this.jd();
		}
	}

	wf()
	{
		this.yr(new fk);
	}

	jd()
	{
		this.pn();

		this.wf();
	}

	nd(kc)
	{
		this.bd.yz(kc);

		this.wu.gh();

		this.bd.dy(kc);

		this.wq = true;
	}

	fe(kc)
	{
		this.bd.qi(kc);

		this.wu.hf();
	}

	bw()
	{
		this.yr(new fo);
	}
}

class gx
{
	get qd()
	{
		return au.get('appPosition');
	}

	xp(fz)
	{
		(fz.width > 100) && (fz.width = 100);

		(fz.left < 0) && (fz.left = 0);

		if (fz.left + fz.width > 100)
		{
			fz.left = 100 - fz.width;
		}

		au.set('appPosition', fz);
	}
}

const pv = function(dm)
{
	return {
		ng(dp)
		{
			dm.hz.xp(dp);
		}
	}
}

class dz
{
	static lf(aq)
	{
		return aq == 'Enter';
	}

	static np(aq)
	{
		return ['Control','Meta'].includes(aq);
	}
}

class he
{
	constructor()
	{
		window.addEventListener('keydown', e => this.th(e), true);
	}

	th(e)
	{
		this.et(e);

		const ei = this.ei;

		if (this.ev)
		{
			if (ei == 'KeyS')
			{
				e.preventDefault();

				return js.gf('gs');
			}

			if (ei == 'KeyE' && un.gi)
			{
				e.preventDefault();

				return js.gf('rt');
			}

			if (ei == 'KeyX' && bo.ew)
			{
				return js.gf('pg');
			}
		}

		if (ei == 'Escape')
		{
			return js.gf('pg');
		}
	}

	et(e)
	{
		this.ei = e.code;

		this.ev = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get xz()
	{
		return this.ei == 'KeyV';
	}
}

class pu
{
	constructor()
	{
		this.md = {};
	}

	gf(wz)
	{
		let jg = this.ki(wz);

		for (let ba of jg)
		{
			ba.oy(wz);
		}
	}

	wk(ba, js)
	{
		if (typeof js == 'string')
		{
			js = [js];
		}

		for (let xd of js)
		{
			this.ki(xd).push(ba);
		}
	}

	ki(wz)
	{
		return this.md[wz] || (this.md[wz] = new pa);
	}
}

class rf extends gt
{
	constructor()
	{
		const wu = new qv('fg');

		super(wu);
	}

	ya()
	{
		jf.ve();

		this.hn();
	}
}

class rm extends gt
{
	constructor()
	{
		super(
			new qv('cr')
		);
	}

	ip()
	{
		const ca = new ay({
			fz:'rpupw',
			nj:'Update Now',
			vi:[this, 'td', 'jl']
		});

		this.wu.ot(ca, 'sy');
	}

	td()
	{
		window.open('https://cs.lett.app/update');
	}
}

class ny extends gt
{
	constructor()
	{
		const wu = new qv('mf');

		super(wu);
	}

	ip()
	{
		this.wu.ot(new ay({
			fz:['lgxjk', 'akasd'],
			kj:'ad',
			vi:[this, 'hn', 'jl']
		}));
	}
}

class fo extends gt
{
	constructor()
	{
		const wu = new qv('lt');

		super(wu);
	}
}

class fp extends gt
{
	constructor()
	{
		const wu = new qv('qv');

		super(wu);

		this.na();

		js.wk(this, [
			'py', 'vs'
		]);
	}

	async oy(xd)
	{
		await de.xe();

		switch (xd)
		{
			case 'py':
				return this.na();

			case 'vs':
				return this.cp();
		}
	}

	na()
	{
		if (!le.vq)
		{
			return this.yr(new gy);
		}

		if (!le.yl)
		{
			return this.yr(new kz);
		}

		this.jw();
	}

	wt()
	{
		this.jw();
	}

	cp()
	{
		!vj.wq && this.jw();
	}

	jw()
	{
		js.gf('sl');
	}
}

class gy extends gt
{
	constructor()
	{
		const wu = new qv('af');

		super(wu);
	}

	ip()
	{
		this.oj = new sx({
			vi:[this, 'wv', ['sj', 'xb']]
		});

		this.wu.ot(this.oj, 'ja');

		this.wu.ot(
			new po({
				qo:de.mh('wn')
			}), 'bs'
		);

		this.wu.ot(
			new jh({wc:'Need help?', tx:'https://cs.lett.app/generating-youtube-api-key'}), 'ro'
		);
	}

	dy()
	{
		this.oj.focus();
	}

	wv(kc)
	{
		kc.tg('loading');

		jf.wv(kc.value).then(
			vl => !vl && kc.tg('error', 'try again')
		);
	}
}

class kz extends ha
{
	constructor()
	{
		super();

		this.yr(new rz);
	}

	uo()
	{
		this.yr(new rs);
	}
}

class rz extends gt
{
	constructor()
	{
		const wu = new qv('la');

		super(wu);
	}

	ip()
	{
		const si = [];

		si.push(
			new ay({
				fz:'rpupw',
				nj:'support it',
				vi:[this, 'uo', 'jl']
			})
		);

		si.push(
			new ay({
				fz:'rpupw',
				nj:'try it',
				vi:[this, 'wt', 'jl']
			})
		);

		le.uf && si.pop();

		for (let jk of si)
		{
			this.wu.ot(jk, 'sy');
		}
	}
}

class rs extends gt
{
	constructor()
	{
		const wu = new qv('ae');

		super(wu);

		this.rp;
		this.od;

		js.wk(this, ['vs']);
	}

	oy(xd)
	{
		switch (xd)
		{
			case 'vs':
				return this.cp();
		}
	}

	ip()
	{
		this.ez = new ac({
			fz:'aoxku'
		});

		this.wu.ot(this.ez);

		this.wl = new pq();

		this.wl.iw(
			new mo({
				fz:['wrerd', 'xrcrc'],
				wc:'9'
			})
		);

		this.wu.ot(this.wl, 'wl');

		this.hu = new pq();

		this.hu.ka(
			new mo({
				wc:'One-Time Payment via PayPal'
			})
		);

		this.wu.ot(this.hu, 'hu');

		this.uk = new ay({
			fz:['rpupw', 'bqama'],
			nj:'Pay with PayPal',
			vi:[this, 'ua', 'jl']
		});

		this.wu.ot(this.uk, 'sy');
	}

	qi()
	{
		this.dn();
	}

	ua()
	{
		if (this.tl)
			return;

		this.tl = true;

		this.ez.jc('loading');

		jf.gr().then(yt =>
		{
			if (yt) {
				this.qg(yt);

				this.ez.jc('waiting');
			}
			else {
				this.ez.jc('error');
			}

			this.tl = false;
		});
	}

	qg(yt)
	{
		this.dn();

		this.rp = openWindow(yt);

		this.od = setInterval(
			_ => this.rp.closed && this.dn(),
		500);
	}

	dn()
	{
		if (this.rp)
		{
			this.rp.close();

			this.ez.jc('initial');

			clearInterval(this.od);
		}
	}

	cp()
	{
		this.dn();

		setTimeout(_ => {
			this.se('oe', this);
			this.tz();
		}, 900);
	}

	tz()
	{
		this.wl.iw(
			new mo({fz:'xrcrc',wc:'Thank You!'}), true
		);

		this.hu.ka(
			new mo({wc:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.uk.yx('siluk');
			this.uk.textContent = 'Done';
			this.uk.so(this, 'jw', 'jl');
		}, 200);
	}

	jw()
	{
		this.se('jw', this);
	}

	yf()
	{
		super.yf();

		this.dn();
	}
}

class pq extends mo
{
	constructor()
	{
		super();

		this.gv();
	}

	gv()
	{
		this.ih = new mo({
			fz:'ljutz'
		});

		this.ot(this.ih);
	}

	iw(wa, hx)
	{
		this.ah(wa, 0, hx);
	}

	ka(wa, hx)
	{
		this.ah(wa, null, hx);
	}

	ah(wa, xf, hx)
	{
		this.ih.ot(wa, xf);

		if (hx)
		{
			this.hx(xf != null);
		}
	}

	hx(qs)
	{
		let nz, bn = this.ih;

		if (qs)
		{
			bn.style.transform = 'translateY(-100%)';

			nz = 'translateY(0)';
		}
		else {
			nz = 'translateY(-100%)';
		}

		setTimeout(_ => {
			bn.style.transition = 'transform 300ms';

			setTimeout(
				_ => bn.style.transform = nz,
			10);

			setTimeout(_ => {
				bn.style.transition = null;
			}, 300);
		}, 10);
	}
}

class up extends gt
{
	constructor(vr)
	{
		const wu = new br;

		super(wu);

		this.oa(vr).then(
			on => this.nv(on)
		);
	}

	ip()
	{
		this.wu.yx('kjgzn');
	}

	nv(on)
	{
		this.wu.innerHTML = on;
	}

	oa(vr)
	{
		const lv = ql.iu('/html/policies/%s.html', vr);

		return jf.oa(lv);
	}
}

class fk extends gt
{
	constructor()
	{
		const wu = new qv('mi');

		super(wu);

		this.yu(zq, vk);

		js.wk(this, 'rt');
	}

	ip()
	{
		this.me = new vn({
			placeholder:'type keywords here..',
		});
		this.me.eb(this, 'bz', ['lj']);
		this.me.eb(this, 'cg', ['xb', 'sj']);

		this.ce = new ay({
			fz:'nlwjt',
			nj:'0',
			to:'disabled',
			vi:[this, 'hy', 'jl']
		});

		this.ne = new fy(this);

		this.dt = new fq();
		this.dt.nk = new rj(this);

		this.as = new qv(this.wu.jq('ls'));
		this.as.ot(this.me);
		this.as.ot(this.ce);

		this.hp = new qv(this.wu.jq('ni'));
		this.hp.ot(this.dt);
		this.hp.ot(this.ne);
	}

	yz()
	{
		if (this.bq)
		{
			this.am();

			if (this.hz.oc)
			{
				this.qx('');
				this.dt.ct();
			}
		}
	}

	dy(kc)
	{
		this.me.focus();

		if (kc == 'pl')
		{
			this.me.select();
		}
	}

	qi()
	{
		if (this.ne.ju)
		{
			this.ne.rg.hn();
		}
	}

	oy(xd)
	{
		if (xd == 'rt')
			return this.mv();
	}

	fl(wu)
	{
		this.hp.eq(wu);
	}

	bz()
	{
		if (this.bq)
		{
			this.am();
		}
	}

	cg()
	{
		let q = this.ye();

		switch (true)
		{
			case (!q):
				return;

			case (!un.gi):
				return this.dt.av('ol');

			case (this.hz.xq):
			{
				if (!this.hz.xn)
					return;

				if (q == this.hz.hk)
				{
					return this.dt.av('yk');
				}
			}
		}

		this.op(q);
	}

	bc()
	{
		if (!un.gi)
			return this.dt.av('ol');

		this.wm(':all');
	}

	get fs()
	{
		return this.hz.fs;
	}

	hy()
	{
		this.uc(new ny);
	}

	op(q)
	{
		this.hz.search(q);
		this.dt.av('kb');
	}

	am()
	{
		this.hz.xa();
	}

	mv()
	{
		let q = ql.ix(un.nc.currentTime);

		this.wm(q);
	}

	ye()
	{
		return this.me.value;
	}

	qx(q)
	{
		this.me.value = q;
	}

	wm(q)
	{
		this.qx(q);
		this.op(q);
	}

	get bq()
	{
		if (un.gi && un.kn != this.nw)
		{
			return Boolean(this.nw = un.kn);
		}

		return false;
	}
}

class zq
{
	constructor()
	{
		this.gw = gw.nu('pd', this.al.bind(this));

		this.hk = '';
		this.jt = 0;
		this.ko = 0;
		this.qe = 500;
		this.xn = false;
		this.oc = false;
		this.fh = [];
		this.wd = 25;
	}

	al(zs)
	{
		const cw = zs.cw;

		switch (zs.pb)
		{
			case 'pc':
				return this.ov(cw);

			case 'ci':
				return this.aw(cw);

			case 'zv':
				return this.kr(cw);
		}
	}

	get xq()
	{
		return this.xn || this.ox('ko') < 500;
	}

	get fs()
	{
		return this.fh.splice(0, this.wd);
	}

	xa()
	{
		this.gw.dq('ci', new ic(''));
	}

	search(q)
	{
		this.xl(q);

		this.gw.dq('pc', new ic(q));
	}

	kr(zv)
	{
		this.vy();

		this.nk.kr(zv.xd);
	}

	ov(r)
	{
		this.vy();

		let zd = this.qe - this.ox('jt');

		(r.tu == 0) && (zd = 200);

		this.fh = r.sk;
		this.oc = (r.tu == 0);

		setTimeout(
			_ => this.nk.ov(r.tu, r.xr),
		zd);
	}

	aw(n)
	{
		this.nk.aw(n);
	}

	yi(jx)
	{
		this[jx] = Date.now();
	}

	ox(jx)
	{
		return Date.now() - this[jx];
	}

	xl(q)
	{
		this.hk = q;

		this.xn = true;

		this.yi('jt');
	}

	vy()
	{
		this.xn = false;

		this.yi('ko');
	}
}

class fq extends qv
{
	constructor()
	{
		super('qv', {
			fz:'xqber'
		});

		this.ib = {
			wi: 'no results match your query',
			kb: 'Searching...',
			yk: 'Searching still...',
			ol: 'You are not watching any video',
			zk: 'Invalid request',
			xu: 'This video has 0 comments',
			ui: 'Comments are disabled for this video.',
			ti: 'check your internet connection',
			sh: 'service down for maintenance',
			ke: 'request timeout, try again',
			da: 'feature not supported for this video',
			qj: 'invalid response from server, try again',
			hs: 'something is not working properly',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'maximum allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
		};
	}

	av(cz)
	{
		this.fn(cz);
	}

	es(...ud)
	{
		this.ma(...ud);
	}

	qr(ue, ud)
	{
		this.ma(
			ql.iu(ue, ud)
		);
	}

	ct()
	{
		this.innerHTML = '';
	}

	fn(xd)
	{
		let mz = this.ib[xd];

		if (!mz)
		{
			mz = this.ib.hs;
		}

		this.ma(mz);
	}

	ma(...sa)
	{
		const ln = document.createDocumentFragment();

		for (let dk of sa)
		{
			let xh = null;

			if (typeof dk == 'string')
			{
				xh = document.createTextNode(dk);
			}
			else {
				xh = dk.za;
			}

			ln.appendChild(xh);
		}

		this.ct();
		this.appendChild(ln);

		this.nk.is();
	}
}

class fy extends tq
{
	constructor(ys)
	{
		super(ys);

		this.ju = false;
	}

	ir(kc)
	{
		this.rg.iy(kc.kn, kc.du);

		kc.or.vp(this.rg);
	}

	ao(kc)
	{
		ql.bh(un.nc, kc.du);
	}

	we(cm)
	{
		const az = [];

		for (let qm of cm)
		{
			let li = new qv('ag');

			for (let i = 0; i < qm.length; i++)
			{
				const id = qm[i];

				if (id.sv > 0)
				{
					const n = i + id.sv;

					for (let k = i; k < n; k++)
					{
						qm[k].pm = qm.slice(k + 1, n + 1).some(yq => !yq.hidden);
					}
				}

				li.ot(
					new jp(id)
				);
			}

			az.push(li);
		}

		return az;
	}

	get rg()
	{
		if (!this.ju)
		{
			this.ju = true;
			this.ex = new mu;
		}

		return this.ex;
	}
}

const vk = function(dm)
{
	return {
		aw(n)
		{
			let gb = n;

			if (n < 0) switch (n)
			{
				case -2:
					gb = '∞';
					break;

				case -1:
					gb = '∅';
					break;
			}

			dm.ce.pt(gb);

			if (0 < n && n < 1000)
			{
				dm.ce.jc('normal')
			}
			else {
				dm.ce.jc('disabled');
			}
		},

		ov(tu, p)
		{
			this.aw(p);

			if (tu > 0)
			{
				dm.ne.qf();

				return dm.fl(dm.ne);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return dm.dt.av('xu');

				case -1:
					return dm.dt.av('ui');

				case -2:
					return dm.dt.av('wi');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const pk = new jh({
						wc:ql.iu('%s comments', p),
						vi:[dm, 'bc', 'jl']
					});

					return dm.dt.es('Nothing found in ', pk);
				}

				return dm.dt.qr('Nothing found in %s comments', p);
			}

			dm.dt.av('wi');
		},

		kr(nm)
		{
			dm.dt.av(nm);
		}
	}
}

const rj = function(dm)
{
	return {
		is()
		{
			dm.fl(dm.dt);
		}
	}
}

class mu extends qv
{
	constructor()
	{
		super('mu');

		this.fj = this.children[0];

		this.fj.onload = () => {
			try {
				const fc = this.fj.contentDocument.body;

				this.nc = fc.querySelector('video');

				fc.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.nw;
		this.rv;
	}

	iy(kn, du)
	{
		if (kn != this.nw) {
			this.fj.src = ql.iu(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [kn, du]
			);
		}
		else if (this.nc) {
			ql.bh(this.nc, du);
		}

		this.nw = kn;
		this.rv = du;
	}

	hn()
	{
		if (this.bj)
		{
			this.tw();
		}
	}
}

class jp extends qv
{
	constructor(id)
	{
		const be = er.ak('jp', id);

		super(be);

		this.gv(id);
	}

	gv(id)
	{
		this.vz(id);
		this.xw(id);

		if (id.ps)
		{
			if (id.pm)
				this.yx('vbplb');

			if (id.hidden)
				this.yx('kphzr');
		}

		if (id.pe)
		{
			this.yx('efpng');

			this.ot(
				new qv('ml', {fz:'pdame'}), 'fv'
			);
		}
	}

	kp()
	{
		return this;
	}

	vp(rg)
	{
		this.ot(rg, 'th');
	}

	vz(id)
	{
		const uh = id.pf;

		const sq = uh.replace(
			qu[6], ql.iu('s%s-', id.ps ? 48 : 80)
		);

		this.ot(new po({
			qo:sq,
			ph:uh,
		}), 'uq');
	}

	xw(id)
	{
		const dr = new mo({
			fz:'cvlwg',
			ky: {
				dir:id.co,
				lang:id.lc
			}
		});

		const uv = Object.keys(id.kt);

		if (uv.length)
		{
			const lk = ql.mn(id.bg, uv);

			for (let x of lk)
			{
				if (ql.vb(x))
				{
					const a = this.zp(id.kt[x]);

					dr.ot(a);
				}
				else {
					const s = er.ap(x);

					dr.appendChild(s);
				}
			}
		}
		else {
			dr.textContent = id.bg;
		}

		if (id.ps && !id.pe)
		{
			dr.yx('aeosg');

			dr.addEventListener('click',
				e => dr.gj('aeosg')
			);
		}

		this.ot(dr, 'th');
	}

	zp(x)
	{
		let a;

		if (x.ur == 'tk' && x.kn != un.kn)
		{
			x.ur = 'ub';
		}

		switch (x.ur)
		{
			case 'tk':
				a = new ks(x.wc, x.du);
				a.eb(this, 'ao', 'jl');
				return a;

			case 'ub':
				a = new em(x.wc, x.kn, x.du);
				a.eb(this, 'ir', 'jl');
				return a;

			case 'nq':
				return new jh({
					wc:x.wc,
					tx:x.yt
				});
		}
	}
}

class em extends jh
{
	constructor(wc, kn, du)
	{
		super({
			fz:'gdtyp',
			wc:wc
		});

		this.kn = kn;
		this.du = du;
	}

	get or()
	{
		return this.se('kp');
	}
}

class ks extends jh
{
	constructor(wc, du)
	{
		super({
			fz:'gdtyp',
			wc:wc
		});

		this.du = du;
	}
}

let de;
let au;
let ty;
let gw;
let jf;
let js;
let le;
let vj;
let fi;
let bo;
let er;

if (un.ji)
{
	de = new yw;
	au = new bk;
	ty = new uw;
	gw = new yc;
	jf = new jv;
	js = new pu;
	bo = new lp;

	jf.lu().then(async ea =>
	{
		if (ea.to.oi)
		{
			await de.xe();
		}

		er = new zy(ea.jn);

		vj = new ar(ea.to);

		fi = new he;

		jf.mg();

		de.dc();
	});

	ty.yb && bo.ra();
}

const qu = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];