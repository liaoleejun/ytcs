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

	return cj != 3428;
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

ql.vsy = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

ql.npb = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

ql.xqf = function(ul, rb)
{
	if (rb)
	{
		const xc = Object.create(
			Object.getPrototypeOf(ul)
		);

		return Object.assign(xc, ul);
	}

	return {...ul};
}

ql.erg = function(zl, fx, lk)
{
	let i = lk.indexOf(zl);

	if (i >= 0)
	{
		lk[i] = fx;
	}
}

ql.xiv = function(dl, vu, lk)
{
	if (vu != dl)
	{
		const wa = lk[dl];
		lk.splice(dl, 1);
		lk.splice(vu, 0, wa);
	}
}

ql.vnh = function(dl, lk)
{
	ql.xiv(dl, Infinity, lk);
}

ql.ojx = function(...wj)
{
    wj.sort(
    	(a, b) => a.length - b.length
    );

	return wj.shift().filter(wa =>
	{
		for (let wr of wj)
        {
			if (!wr.includes(wa))
				return false;
        }

		return true;
    });
}

ql.zys = function(lk)
{
	return lk.filter((value, cs) => lk.indexOf(value) == cs);
}

ql.jst = function(ih, oh)
{
	return ih.join(oh || '.');
}

ql.nun = function(gb, kd)
{
	if (kd)
	{
		gb = gb.replace(qu[4], '\n');

		gb = gb.replace(qu[5], ' ');
	}
	else {
		gb = gb.replace(qu[6], ' ');

	}

	return gb.trim();
}

ql.ebq = function(gb, rq, ey)
{
	return gb.replace(rq, (mj, sm) =>
	{
		return mj.replace(sm, ey(sm));
	});
}

ql.tqn = function(xo)
{
	return qu[7].test(xo);
}

ql.weh = function(gb)
{
	return !qu[8].test(gb);
}

ql.egp = function(gb)
{
	return gb.toLowerCase().replace(qu[9], ql.rk);
}

ql.gnw = function(gb)
{
	return gb == gb.toUpperCase();
}

ql.aoc = function(gb)
{
	return gb == gb.toLowerCase();
}

ql.elq = function(gb)
{
	return ql.aoc(gb) || ql.gnw(gb);
}

ql.ush = function(vh, gb)
{
	return ql.dj(vh, gb).length;
}

ql.wvc = function(gb)
{
	return ql.ush(qu[10], gb) + 1;
}

ql.pen = function(gb)
{
	return gb ? gb.split(' ') : [];
}

ql.sea = function(i, gb)
{
	return gb.substring(0, i) + 'x' + gb.substring(++i);
}

ql.yxc = function(s)
{
	return String(s).replace(qu[11], '\\$1').replace(qu[12], '\\x08');
}

ql.zxk = function(rq, ud, eo)
{
	if (Array === ud.constructor)
	{
		ud = ud.map(ql.yxc);
	}
	else {
		ud = ql.yxc(ud);
	}

	rq = ql.iu(rq, ud);

	return new RegExp(rq, eo);
}

ql.rwr = new function()
{
	const hj = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const yn = (kf) => new Date(kf).getTime() / 1000;

	return (kf) =>
	{
		const oz = ql.ym() - yn(kf);

		for (let [sd, wg] of hj)
		{
			let zf = oz / wg;

			if (zf >= 1)
			{
				zf = Math.floor(zf);

				return ql.iu('%s %s%s ago', [zf, sd, (zf > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

ql.jvo = function(lk)
{
	return lk.reduce((a, b) => a + b, 0);
}

ql.xge = function(lk)
{
	return ql.atf(ql.jvo(lk), lk.length);
}

ql.atf = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const yd = {
	te(yt, rw, lq)
	{
		return this.ri('GET', yt, rw, null, lq);
	},

	bm(yt, rw, zi, lq)
	{
		return this.ri('POST', yt, rw, zi, lq);
	},

	ri(ai, yt, rw, zi, lq)
	{
		if (rw)
		{
			yt = ql.fm(yt, rw);
		}

		if (zi)
		{
			zi = this.lo(zi);
		}

		return new Promise(kg =>
		{
			let ts = new XMLHttpRequest;

			if (lq != Infinity)
			{
				let uz = 0;

				ts.ontimeout = (e) =>
				{
					if (++uz < 3)
					{
						return this.ch(ts, ai, yt, zi);
					}

					ts.onerror(e);
				}

				ts.timeout = 5000;
			}

			ts.onload = ts.onerror = (e) => kg(
				new rh(ts, e.type)
			);

			this.ch(ts, ai, yt, zi);
		});
	},

	ch(ts, ai, yt, zi)
	{
		ts.open(ai, yt);
		ts.send(zi);
	},

	lo(hw)
	{
		let fw = new FormData;

		for (let aq in hw)
		{
			fw.append(aq, hw[aq]);
		}

		return fw;
	}
}

class iz
{
	constructor(nr)
	{
		this.map = {};

		this.ds = Object.getOwnPropertyNames(Object.prototype);

		this.qz = nr;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(aq)
	{
		aq = this.ovq(aq);

		return this.pbo(this.map[aq]);
	}

	set(aq, kq)
	{
		aq = this.ovq(aq);

		this.map[aq] = this.pbo(kq);
	}

	one(aq)
	{
		return this.ovq(aq) in this.map;
	}

	cog(aq)
	{
		!this.one(aq) && this.set(aq);
	}

	ovq(aq)
	{
		if (this.ds.includes(aq))
		{
			return aq + '*';
		}

		return aq;
	}

	pbo(kq)
	{
		if (kq == undefined && this.qz)
		{
			return new this.qz;
		}

		return kq;
	}
}

class fgp
{
	constructor(qed, djw)
	{
		this.xd = qed.xd;

		this.bcr = qed.bcr;

		this.djw = djw;

		this.zwj = [];

		this.knu = new pa;

		this.ftz(qed);
	}

	ftz(id)
	{
		if (this.bcr == id.bcr)
		{
			id.npt = true;
		}

		this.knu.push(id.bcr);

		this.zwj.push(id);
	}

	lbm(xd)
	{
		return this.knu.includes(xd);
	}

	zap()
	{
		this.miz.forEach(sjp => sjp.hidden = true);
	}

	jha(yq, im)
	{
		this.cdk(im.ard, yq);

		im.yr(yq);
	}

	cdk(a, b)
	{
		const dl = this.zwj.indexOf(b);
		const vu = this.zwj.indexOf(a) + 1;

		ql.xiv(dl, vu, this.zwj);
	}

	get length()
	{
		return this.zwj.length;
	}

	get qed()
	{
		return this.zwj[0];
	}

	get pij()
	{
		return this.zwj[1];
	}

	get gul()
	{
		return this.length > 1;
	}

	get miz()
	{
		return this.zwj.slice(1);
	}

	get sza()
	{
		return this.zwj.length - 1;
	}

	get hidden()
	{
		return this.qed.hidden;
	}

	set hidden(to)
	{
		this.qed.hidden = to;
	}

	get xc()
	{
		const xc = ql.xqf(this, true);

		xc.zwj = this.zwj.map(ql.xqf);

		return xc;
	}
}

class dhq
{
	constructor(amc)
	{
		this.lc = dhq.ybr(amc);
		this.co = dhq.uns(this.lc);
	}

	static uns(lc)
	{
		return ['he','ar'].includes(lc) ? 'rtl' : 'ltr';
	}

	static ybr(gb)
	{
		let xod = .57 * ql.wvc(gb);

		switch (true)
		{
			case xod < ql.ush(qu[13], gb): return 'en';

			case xod < ql.ush(qu[14], gb): return 'ar';

			case xod < ql.ush(qu[15], gb): return 'he';

			default: return '';
		}
	}

	static get bzi()
	{
		if (!this.qpy)
		{
			this.qpy = navigator.languages.map(lc => lc.slice(0, 2));
		}

		return this.qpy;
	}
}

class ilz
{
	constructor(rov)
	{
		const _ = rov.items[0];

		this.cvm = _.snippet.channelId;
		this.ci = _.statistics.commentCount;

		if (this.ci == undefined)
		{
			this.ci = -1;
		}
		else {
			this.ci = +this.ci;
		}
	}
}

class wvh
{
	constructor(rov)
	{
		const _ = rov.snippet;

		this.xd = rov.id;
		this.kn = _.videoId;
		this.bcr = _.authorChannelId.value;
		this.pf = _.authorProfileImageUrl;
		this.zqv = _.authorDisplayName;
		this.une = _.textOriginal;
		this.mpz = _.publishedAt;
		this.zda = _.likeCount;
		this.npt = null;
		this.pe = null;
	}
}

class tzc
{
	constructor(wvh)
	{
		Object.assign(this, wvh);

		this.fcy = '';
		this.kmb = '';
		this.kt = {};
		this.children = [];
		this.im = null;
		this.sfo = null;
		this.czh = null;
		this.otl = null;
		this.hidden = false;

		this.dns();
		this.giv();
		this.wez();
		this.gij();
		this.end();
	}

	dns()
	{
		this.fcy = this.une.replace(qu[16], '');

		delete this.une;
	}

	end()
	{
		this.kmb = jpe.pir(this.fcy);

		this.otl = new dhq(this.kmb);

		if (this.otl.lc == 'en')
		{
			this.kmb = jpe.moe(this.kmb);
		}
	}

	giv()
	{
		if (!this.fcy.includes('/'))
			return;

		this.fcy = this.fcy.replace(qu[17], (yt) =>
		{
			let x;

			const jdb = etd.ywg(yt);

			if (jdb) {
				if (jdb.kn == this.kn)
				{
					x = new tk(this.kn, jdb.du);
				}
				else {
					x = new ub(jdb);
				}
			}
			else {
				x = new cul(yt);
			}

			return this.poe(x);
		});
	}

	wez()
	{
		if (!this.fcy.includes('#'))
			return;

		this.fcy = this.fcy.replace(qu[18], (uxv) =>
		{
			const x = new xjr(uxv);

			return this.poe(x);
		});
	}

	gij()
	{
		if (!this.fcy.includes(':'))
			return;

		this.fcy = this.fcy.replace(qu[19], (je) =>
		{
			const x = new tk(this.kn, je);

			return this.poe(x);
		});
	}

	poe(wa)
	{
		this.kt[wa.xd] = wa;

		return wa.xd;
	}

	hf()
	{
		this.hidden = true;

		for (let yq of this.children)
		{
			yq.hf();
		}
	}

	yr(yq)
	{
		yq.im = this;

		this.children.push(yq);
	}

	get ard()
	{
		return ql.tc(this.children) || this;
	}

	get dsu()
	{
		return this.children.some(yq => !yq.hidden);
	}
}

class vlm
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.ps = x.ps;
		this.kt = x.kt;
		this.kn = x.kn;
		this.xd = x.xd;
		this.bcr = x.bcr;
		this.pf = x.pf;
		this.kzo = x.kzo;
		this.bg = x.bg;
		this.mpz = x.mpz;
		this.npt = x.npt;
		this.pe = x.pe;
		this.lc = x.otl.lc;
		this.co = x.otl.co;
		this.sv = x.children.length;
		this.hjq = '';
		this.fef = '';

		this.mpz = ql.rwr(this.mpz);

		this.hjq = ql.iu('https://www.youtube.com/channel/%s', this.bcr);

		this.fef = ql.iu('https://www.youtube.com/watch?v=%s&lc=%s', [this.kn, this.xd]);
	}
}

class skl
{
	constructor(wc, ur)
	{
		this.xd = ql.an();

		this.wc = wc;

		this.ur = ur;
	}
}

class tk extends skl
{
	constructor(kn, t)
	{
		super(null, 'tk');

		let wc, hv;

		if (ql.ou(t))
		{
			wc = ql.ix(t);
			hv = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			wc = t;
			hv = ql.yp(t);
		}

		this.kn = kn;
		this.du = hv;
		this.wc = wc;
	}
}

class ub extends skl
{
	constructor(hw)
	{
		super('youtube.com', 'ub');

		this.kn = hw.kn;
		this.du = hw.du;
	}
}

class cul extends skl
{
	constructor(yt)
	{
		super('', 'nq');

		this.yt = yt;

		this.vzk = yt.startsWith('https');

		this.wc = etd.ceo(yt) || yt;
	}
}

class xjr extends skl
{
	constructor(uxv)
	{
		super(uxv, 'nq');

		this.yt = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(uxv);
	}
}

class fcm extends skl
{
	constructor(yup, cvm)
	{
		super(yup, 'nq');

		this.yt = 'https://www.youtube.com/channel/' + cvm;
	}
}

class sfa
{
	constructor(gb)
	{
		this.qlv = '';
		this.hvz = '';
		this.baj = [];
		this.had = false;
		this.bge = false;

		this.pir(gb);
		this.lmv();
		this.buy();
	}

	get dfm()
	{
		return this.qlv;
	}

	get length()
	{
		return this.qlv.length;
	}

	get gnf()
	{
		return ql.gnw(this.hvz);
	}

	toLowerCase()
	{
		this.qlv = this.qlv.toLowerCase();
	}

	tzo(xo)
	{
		return this.baj.includes(xo);
	}

	muy(qon)
	{
		for (let xo of qon)
		{
			if (this.tzo(xo)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.qlv[this.length + i] : this.qlv[i];
	}

	uwd(n)
	{
		this.qlv = this.qlv.slice(0, -n);
	}

	replace(vh, ey)
	{
		this.qlv = this.qlv.replace(vh, ey);
	}

	pir(gb)
	{
		this.qlv = ql.nun(gb, 'ewm');

		this.replace(qu[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(qu[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (ql.weh(x))
				{
					return m.length > 3 && !qu[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	lmv()
	{
		let bev = ql.zys([...this.qlv]).join('');

		this.hvz = bev.slice(0, 16);

		this.baj = ql.dj(qu[23], bev);

		this.had = this.baj.some(this.pwk);
	}

	buy()
	{
		if (!this.had) return;

		for (let i = 0, k = 0, n = this.baj.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.baj[i] + this.baj[k];

				this.replace(ql.zxk('(%s)+', x, 'g'), x);
			}
		}
	}

	pwk(xo)
	{
		return xo.charCodeAt(0) > 255;
	}

	cdt(xo)
	{
		return xo == '\u{200D}';
	}
}

class yw
{
	constructor()
	{
		this.xd = chrome.runtime.id;

		this.wdy = chrome.runtime.getManifest().version;

		this.xm = new Promise(kg => this.wrk = kg);

		this.xm.then(
			_ => this.dc()
		);

		this.nv();

		chrome.runtime.onInstalled.addListener(
			jdb => this.iad(jdb)
		);

		chrome.browserAction.onClicked.addListener(
			_ => uzn.kvd('qh')
		);

		chrome.alarms.onAlarm.addListener(
			jdb => this.ckw('nms', jdb)
		);

		chrome.runtime.onMessageExternal.addListener(
			zs => this.ckw('vkj', zs)
		);
	}

	async nv()
	{
		if (await this.rmz == this.wdy)
		{
			const ea = await au.get(['0', '1']);

			this.yft = new wy(ea[0], 0);

			le = new fr(ea[1], 1);

			if (le.ly)
			{
				vw.un.dks(le.vq);
			}

			this.wrk(1);
		}
	}

	async lu()
	{
		const wuk = await this.oa('/html/view.html');

		const ej = (
			this.wdy < this.bfh
		);

		const oi = (
			!le.ly || !le.yl
		);

		return {
			to: {
				ej, oi
			},
			jn: wuk
		};
	}

	async wv(vq)
	{
		if (qu[24].test(vq))
		{
			const uiv = await vw.un.puh(vq);

			if (uiv)
			{
				const le = await vw.di.rtk(vq);

				if (le)
				{
					await this.xe(le);

					gn.dw('py');

					return true;
				}
			}
		}

		return false;
	}

	rys(hai)
	{
		le.vo = hai;

		gn.dw('vs');
	}

	ig()
	{
		if (le.ly)
		{
			le.vq = ql.sea(19, le.vq);
		}
	}

	xe(scp)
	{
		le = new fr(scp, '1');

		return le.xy();
	}

	async oa(lv)
	{
		const uoa = await yd.te(chrome.runtime.getURL(lv));

		return uoa.cw;
	}

	async pfq(jdb)
	{
		this.qca();

		if (jdb.reason == 'install')
		{
			await this.adj();
		}
		else {
			if (jdb.previousVersion < '')
			{

			}
		}

		await this.jqg();

		await this.nv();
	}

	async iad(jdb)
	{
		await this.pfq(jdb);

		switch (jdb.reason)
		{
			case 'install':
				this.fuo();
			break;

			case 'update':
				this.kpd();
			break;
		}

		uzn.hcy();
	}

	fuo()
	{

	}

	kpd()
	{

	}

	async ckw(pwn, cw)
	{
		await this.xm;

		switch (pwn)
		{
			case 'nms':
				return this.rft(cw);

			case 'vkj':
				return this.xrs(cw);
		}
	}

	rft(nms)
	{
		const bcp = nms.name;

		switch (bcp)
		{
			case 'lin':
				this.lin();
		}
	}

	xrs(zs)
	{
		return new hrv().xg(zs);
	}

	async lin()
	{
		const v = await vw.di.qtp();

		if (v > this.wdy)
		{
			return this.plw(v);
		}
	}

	dc()
	{
		if (le.ly)
		{
			if (ql.zo() || !le.um)
			{
				this.ig();
			}
		}
	}

	get rmz()
	{
		return au.get('schemaVersion');
	}

	jqg()
	{
		return au.set('schemaVersion', this.wdy);
	}

	get bfh()
	{
		return this.yft.latestVersion;
	}

	plw(v)
	{
		this.yft.set('latestVersion', v);
	}

	adj()
	{
		return au.set({
			0: {
				latestVersion: this.wdy
			},
			1: {},
		});
	}

	qca()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('lin', {periodInMinutes:240});
	}
}

class hrv
{
	xg(zs)
	{
		zs = ql.npb(zs);

		switch (zs.issuer)
		{
			case 'authServer':
				return this.gdv(zs.data);
		}
	}

	gdv(cw)
	{
		if (cw.id == 'pa')
		{
			de.rys(cw.token);
		}
	}
}

class yfa
{
	constructor()
	{
		this.di = new nhn;

		this.un = new tua;
	}
}

class nhn
{
	constructor()
	{
		this.xat = 'https://api.lett.app/cs';
	}

	async rtk(vq)
	{
		const uoa = await this.get('/auth', {
			apiKey:vq,
			token:de.xd
		});

		if (uoa.vl)
		{
			return uoa.cw;
		}
	}

	async qtp()
	{
		const uoa = await this.get('/update');

		if (uoa.vl)
		{
			return uoa.cw.version;
		}
	}

	async gr()
	{
		const uoa = await this.get(
			'https://api.lett.app/donate/accept', this.ewu, Infinity
		);

		if (uoa.vl)
		{
			return uoa.cw.url;
		}
	}

	get ewu()
	{
		return {
			extId:de.xd,
			apiKey:le.vq,
			p:1,
		};
	}

	async get(ojv, hw, lq)
	{
		if (ojv[0] == '/')
		{
			ojv = this.xat + ojv;
		}

		const uoa = await yd.te(ojv, hw, lq);

		if (!uoa.vl && !uoa.eu)
		{
			uoa.vm(uoa.cw.error);
		}

		return uoa;
	}
}

class zqe
{
	constructor()
	{
		this.xat = 'https://www.googleapis.com/youtube/v3';
	}

	dks(vq)
	{
		this.aq = vq;
	}

	async puh(vq)
	{
		this.dks(vq);

		const uoa = await this.qas('jNQXAC9IVRw');

		return uoa.vl;
	}

	wjd(kn)
	{
		return this.bc({
			videoId:kn
		});
	}

	pfz(kn, wrl)
	{
		return this.pc({
			videoId:kn,
			searchTerms:wrl
		});
	}

	jei(cvm, wrl)
	{
		return this.pc({
			allThreadsRelatedToChannelId:cvm,
			searchTerms:wrl
		});
	}

	async qas(kn)
	{
		const uoa = await this.lev({
			id:kn,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (uoa.vl)
		{
			try {
				uoa.cw = new ilz(uoa.cw);
			}
			catch (e) {
				uoa.vm('qj');
			}
		}

		return uoa;
	}

	async get(ojv, hw)
	{
		const uoa = await yd.te(this.xat + ojv, hw);

		if (!uoa.vl && !uoa.eu)
		{
			const qex = this.czc(uoa.cw);

			uoa.vm(qex);
		}

		return uoa;
	}

	async pc(hw)
	{
		const uoa = await this.get('/commentThreads', hw);

		if (uoa.vl)
		{
			uoa.cw = this.eux(uoa.cw);
		}

		return uoa;
	}

	async bc(hw)
	{
		let uoa, ih = [];

		do {
			uoa = await this.get('/commentThreads', hw);

			if (uoa.vl)
			{
				const qjc = this.eux(uoa.cw);

				ih.push(qjc);

				hw.pageToken = uoa.cw.nextPageToken;
			}
		}
		while (uoa.vl && hw.pageToken)

		uoa.cw = ih.flat();

		return uoa;
	}

	lev(hw)
	{
		return this.get('/videos', hw);
	}

	ymf(ios)
	{
		try {
			return new wvh(ios);
		}
		catch (e) {
			return null;
		}
	}

	vlj(ios)
	{
		let miz = [];

		try {
			if (ios.replies) {
				miz = ios.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return miz;
	}

	czc(upm)
	{
		try {
			return upm.error.errors[0].reason;
		}
		catch (e) {
			return upm.zv || 'hs';
		}
	}

	eux(ios)
	{
		const qjc = [];

		try {
			for (let wa of ios.items)
			{
				const qm = this.ylc(wa);

				if (qm) {
					qjc.push(qm);
				}
			}
		}
		catch (e) {
		}

		return qjc;
	}

	ylc(ios)
	{
		try {
			const kbu = ios.snippet;

			if (kbu.videoId)
			{
				let id = this.ymf(kbu.topLevelComment);

				if (id)
				{
					const qm = new fgp(id, kbu.totalReplyCount);

					for (let sjp of this.vlj(ios))
					{
						id = this.ymf(sjp);

						if (id) {
							qm.ftz(id);
						}
					}

					return qm;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class tua extends zqe
{
	bc(hw)
	{
		this.rhg(hw);

		return super.bc(hw);
	}

	pc(hw)
	{
		this.rhg(hw);

		return super.pc(hw);
	}

	async get(ojv, hw)
	{
		hw.key = this.aq;

		let uoa, i = 3;

		while (i--)
		{
			uoa = await super.get(ojv, hw);

			if (uoa.zv != 'processingFailure')
				break;
		}

		return uoa;
	}

	rhg(hw)
	{
		Object.assign(hw, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class etd
{
	static ywg(yt)
	{
		const kn = ql.pr(qu[25], yt);

		if (kn)
		{
			let du = ql.pr(qu[26], yt) || 0;

			if (!ql.ou(du))
			{
				du = ql.dj(qu[27], du).join(':');

				du = ql.yp(du);
			}

			return {kn, du};
		}
	}

	static ceo(yt)
	{
		return ql.pr(qu[28], yt).replace('www.', '');
	}
}

class wmu
{
	async kvd(ld)
	{
		const qmw = await this.pwr();

		if (qmw && qmw.url)
		{
			this.sg(qmw.id, 'ld', ld);
		}
	}

	hcy()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, uzn =>
		{
			for (let qmw of uzn)
			{
				chrome.tabs.reload(qmw.id);
			}
		});
	}

	pwr()
	{
		return new Promise(kg =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, uzn =>
			{
				kg(uzn[0]);
			});
		});
	}

	sg(ujz, pb, cw)
	{
		chrome.tabs.sendMessage(ujz, new pi(pb, cw));
	}
}

class azw
{
	constructor(sk, oqx)
	{
		this.xd = oqx.kn;

		this.oqx = oqx;

		this.lyj = new kev(sk);

		this.ih = {};

		for (let gsj of ['acn', 'qdb'])
		{
			this[gsj] = new iz(Array);
		}

		for (let gsj of ['sbq', 'qpt', 'hqj'])
		{
			this[gsj] = [];
		}

		for (let qm of sk)
		{
			this.ah(qm);
			this.vbe(qm);
		}
	}

	ulz(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.fvw();

			case ':all':
				return this.dqf();

			case ':creator':
				return this.zla();

			case ':link':
				return this.tjb();

			case ':reply':
				return this.hrk();
		}

		if (qu[29].test(q))
		{
			const xs = this.ufa(q);

			switch (xs.length)
			{
				case 1: return this.dkh(xs[0]);

				case 2: return this.ydh(xs[0], xs[1]);
			}
		}

		return this.rsy(q);
	}

	dqf()
	{
		return this.kzt(
			Object.keys(this.ih)
		);
	}

	fvw()
	{
		return this.kzt(this.qdb.values);
	}

	zla()
	{
		return this.kzt(this.sbq);
	}

	tjb()
	{
		return this.kzt(this.hqj);
	}

	hrk()
	{
		return this.kzt(this.qpt);
	}

	ydh(nd, mks)
	{
		const knv = ql.yp(nd);
		const vbn = ql.yp(mks);

		const goz = [];

		for (let xs of this.qdb.keys)
		{
			if (knv <= xs && xs <= vbn)
			{
				goz.push(
					this.qdb.get(xs)
				);
			}

			if (vbn < xs) break;
		}

		return this.kzt(goz);
	}

	ah(wa)
	{
		this.ih[wa.xd] = wa;
	}

	rwl(xd)
	{
		return this.ih[xd].xc;
	}

	kzt(goz)
	{
		goz = goz.flat();

		return ql.zys(goz).map(
			xd => this.rwl(xd)
		);
	}

	rsy(gb)
	{
		let tfh = [];

		let uv = this.rvh(gb);

		let goz = uv.map(
			k => this.select('acn', k)
		);

		goz = goz.filter(x => x.length);

		if (goz.length)
		{
			tfh = ql.ojx(...goz);

			if (tfh.length < 1)
			{
				goz.sort((a, b) => a.length - b.length);

				tfh = goz[0];
			}
		}

		return this.kzt(tfh);
	}

	dkh(je)
	{
		let ok = ql.yp(je);

		let goz = [
			this.select('qdb', ok)
		];

		for (let i = ok; i--;)
		{
			let x = this.select('qdb', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			goz.push(x);
		}

		for (let i = ok; i++;)
		{
			let x = this.select('qdb', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			goz.push(x);
		}

		return this.kzt(goz);
	}

	vbe(qm)
	{
		const wc = qm.zwj.map(id => id.une).join(' ');

		this.giv(wc, qm.xd);

		this.bto(wc, qm.xd);

		this.hdc(wc, qm.xd);

		this.vlj(qm);
	}

	vlj(qm)
	{
		if (qm.length > 1)
		{
			this.qpt.push(qm.xd);
		}

		if (qm.lbm(this.oqx.cvm))
		{
			this.sbq.push(qm.xd);
		}
	}

	giv(wc, xd)
	{
		wc.includes('http') && this.hqj.push(xd);
	}

	bto(wc, xd)
	{
		const hym = this.ufa(wc);

		for (let xs of hym)
		{
			xs = ql.yp(xs);

			if (0 <= xs && xs < this.oqx.cb)
			{
				this.duz('qdb', xs, xd);
			}
		}
	}

	hdc(wc, xd)
	{
		this.rvh(wc).forEach(
			lm => this.duz('acn', lm, xd)
		);
	}

	duz(gsj, aq, kq)
	{
		this[gsj].cog(aq);

		this[gsj].get(aq).push(kq);
	}

	select(gsj, aq)
	{
		return this[gsj].get(aq);
	}

	rvh(gb)
	{
		gb = jpe.pir(gb);

		gb = jpe.moe(gb);

		gb = ql.pen(gb);

		return ql.zys(gb);
	}

	ufa(gb)
	{
		return ql.dj(qu[30], gb);
	}
}

class kev
{
	constructor(sk)
	{
		this.lyj = {};

		this.amv = {};

		this.xsm = {};

		for (let qm of sk)
		{
			this.ywl(qm);
		}

		this.zrs();
	}

	pgw(bpv)
	{
		return this.amv.ulz(bpv);
	}

	hvn(xd)
	{
		return this.lyj[xd];
	}

	ywl(qm)
	{
		for (let id of qm.zwj)
		{
			this.pmt(id.bcr, id.une);
			this.dtv(id.bcr, id.zqv);
		}
	}

	zrs()
	{
		this.amv = new nkn(this.amv);

		for (let xd in this.xsm)
		{
			const xsm = this.xsm[xd];

			if (xsm.length > 1)
			{
				const wqz = xsm.filter(
					(wc, i) => wc.length < 28 || i == xsm.indexOf(wc)
				);

				this.hvn(xd).xda = (xsm.length != wqz.length);
			}
		}
	}

	dtv(xd, mpl)
	{
		let sfo = new bir(xd, mpl);

		this.lyj[xd] = sfo;

		this.amv[mpl] = sfo;
	}

	pmt(xd, wc)
	{
		this.xsm[xd] = this.xsm[xd] || [];

		this.xsm[xd].push(wc);
	}
}

class bir
{
	constructor(xd, mpl)
	{
		this.xd = xd;
		this.mpl = mpl;
		this.xda = false;
		this.nfu = false;
	}

	get kzo()
	{
		return this.nfu ? this.mpl : this.bps;
	}

	get djn()
	{
		return !this.nfu && this.xda;
	}

	get bps()
	{
		if (!this.ogh)
		{
			this.ogh = zyo.xas(this.mpl);
		}

		return this.ogh;
	}
}

class nkn
{
	constructor(tj)
	{
		this.keys = Object.keys(tj).sort(this.gnm);

		this.ngm = this.keys.map(aq => tj[aq]);

		this.keys = this.keys.map(ql.bu);
	}

	ulz(uth)
	{
		uth = uth.toLowerCase();

		let ih = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(uth))
			{
				do {
					ih.push(this.ngm[i])
				}
				while (++i < n && this.keys[i].startsWith(uth));

				break;
			}
		}

		return ih.sort(this.rac);
	}

	rac(a, b)
	{
		return b.mpl.length - a.mpl.length;
	}

	gnm(a, b)
	{
		return a.localeCompare(b);
	}
}

const wyq = {
	kan: {
		sza(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		den(x)
		{
			return (x != 0) ? (1 / x) : 0;
		},

		sly(vrx)
		{
			let txe = ql.xge(vrx);

			return (n) => (txe - Math.abs(txe - n)) / txe;
		}
	},

	vbe(sk, tsw, oqx)
	{
		this.xhf = oqx.cvm;

		const jqn = tsw.hvn(this.xhf);

		if (jqn)
		{
			jqn.nfu = true;
		}

		this.ulz = oqx.ulz;

		this.gwd = new oit;

		this.yus = new bfs;

		this.tfg = new igc;

		this.cuj = {};

		return this.lmv(sk, tsw);
	},

	lmv(sk, tsw)
	{
		const emt = ('you are not but for the thi and that was').split(' ');

		const jer = {
			xaq: 1,
			nsl: [],
		};

		const tex = {
			sza: this.kan.sza,
			xrf: this.kan.den,
			nsl: null,
		};

		const irq = {
			acn: .5,
			ajd: .1,
			aux: .2,
			xrf: .15,
			nsl: .2,
			sza: .1,
			vfg: .1,
		};

		if (this.ulz.fdb)
		{
			Object.assign(irq, {
				vfg: .4,
				aux:.4,
				xrf: .1,
				nsl: .0,
			});
		}

		for (let qm of sk)
		{
			Object.assign(qm,
			{
				fv: {
					nsl: qm.qed.une.length,
					gtv: 0,
					ajd: false,
					aux: false,
					qdb: [],
					uv: [],
				},
				prg: {
					acn: 0,
					ajd: 0,
					aux: 0,
					xrf: 0,
					nsl: 0,
					sza: 0,
					vfg: 0,
					ufz: 0,
				},
			});

			const fv = qm.fv;

			for (let i = 0; i < qm.length; i++)
			{
				const id = qm.zwj[i] = new tzc(qm.zwj[i]);

				id.sfo = tsw.hvn(id.bcr);

				id.pe = this.pe(id.bcr);

				if (i > 0)
				{
					id.ps = true;

					id.npt && (fv.ajd = true);
					id.pe && (fv.aux = true);
				}

				if (id.kmb == '' || id.sfo.djn)
				{
					id.hf();
				}
			}

			const qed = qm.qed;

			if (this.pcu(qed.fcy))
			{
				qm.hidden = true;

				continue;
			}

			fv.uv = ql.pen(qed.kmb);
			fv.gtv = fv.uv.length;
			fv.uv = ql.zys(fv.uv);

			for (let x in qed.kt)
			{
				x = qed.kt[x];

				if (x.xd == qed.fcy)
				{
					qm.hidden = true;
				}

				if (x instanceof tk)
				{
					fv.qdb.push(x.hv);

					ql.erg(x.xd, this.yus.fjc(x.hv), fv.uv);
				}
			}

			for (let lm of fv.uv)
			{
				if (lm.length > 2 && !emt.includes(lm))
				{
					this.gwd.akm(lm);
				}
			}

		}

		for (let qm of sk)
		{
			if (qm.hidden)
				continue;

			const prg = qm.prg;

			for (let lm of qm.fv.uv)
			{
				prg.acn += this.gwd.get(lm);
			}

			prg.acn /= qm.fv.gtv;

			prg.xrf = qm.fv.qdb.length;

			if (prg.acn > jer.xaq)
			{
				jer.xaq = prg.acn;
			}

			jer.nsl.push(qm.fv.nsl);
		}

		tex.nsl = this.kan.sly(jer.nsl);

		for (let qm of sk)
		{
			const prg = qm.prg;

			prg.acn = irq.acn * (prg.acn / jer.xaq);
			prg.aux = irq.aux * +qm.fv.aux;
			prg.xrf = irq.xrf * tex.xrf(prg.xrf);
			prg.nsl = irq.nsl * tex.nsl(qm.fv.nsl);
			prg.sza = irq.sza * tex.sza(qm.sza);

			prg.ufz = ql.jvo(Object.values(prg));
		}

		sk.sort(
			(a, b) => b.prg.ufz - a.prg.ufz
		);

		for (let i = 0, n = sk.length; i < n; i++)
		{
			const a = sk[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = sk[k];

				if (b.bcr == a.bcr && !b.qed.sfo.nfu)
				{
					b.hidden = true;
				}

				if (!b.hidden && !b.gul)
				{
					const uqg = ql.ojx(a.fv.uv, b.fv.uv);
					const jri = (a.fv.uv.length + b.fv.uv.length) / 2;

					if (uqg.length == b.fv.gtv)
					{
						b.hidden = true;
					}

					if (uqg.length / jri > .57)
					{
						const vbn = a.fv.qdb[0] || 0;
						const rdg = b.fv.qdb[0] || 0;

						if (this.yus.oic(vbn, rdg))
						{
							b.hidden = true;
						}
					}
				}
			}
		}

		for (let i = 0; i < sk.length; i++)
		{
			const qm = sk[i];

			let tln;

			if (i == 0 && !qm.gul)
			{
				const hjb = this.ulz.gb.toLowerCase();
				const wyg = qm.qed.kmb;

				if (hjb == wyg)
				{
					tln = true;
				}
			}

			if (qm.gul && qm.knu.length == 1)
			{
				const knv = new Date(qm.qed.mpz);
				const vbn = new Date(qm.pij.mpz);

				if (.001 * (vbn - knv) < 300)
				{
					tln = true;
				}
			}

			if (tln)
			{
				ql.vnh(i, sk);
			}
		}

		for (let qm of sk)
		{
			this.tfg.kyt(qm.xd, qm.bcr);

			for (let bcr of qm.knu)
			{
				this.tfg.gyc(bcr, qm.xd)
			}
		}

		for (let qm of sk)
		{
			if (qm.sza == 0) continue;

			for (let sjp of qm.miz)
			{
				const wc = sjp.fcy;

				const leg = ql.pr(qu[31], wc);

				for (let sfo of tsw.pgw(leg))
				{
					if (this.jdh(sfo).test(wc))
					{
						sjp.czh = sfo;
						break;
					}
				}
			}

			if (qm.length > 2)
			{
				let lyj, ih, nqh = true;

				const n = qm.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					const sjp = qm.zwj[i];

					if (nqh)
					{
						lyj = [];
						ih = [];
						nqh = false;
					}

					const le = sjp.sfo;

					if (ql.tc(lyj) == le) {
						i++;
					}
					else if (lyj.includes(le) || ql.zys(lyj).length < 2) {
						ih.push(sjp);
						lyj.push(le);

						if (i + 1 < n)
							continue;
					}

					if (ih.length > 2)
					{
						let uiv = !ih.some(sjp => sjp.czh && !lyj.includes(sjp.czh));

						if (uiv)
						{
							ih.forEach(sjp =>
								sjp.czh = lyj.find(sfo => sfo != sjp.sfo)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						nqh = true;
					}
				}
			}

			for (let ftc, i = 1; i < qm.length; i++)
			{
				const sjp = qm.zwj[i];

				if (!sjp.czh)
				{
					if (ftc && ftc.czh == sjp.sfo)
					{
						sjp.czh = ftc.sfo;

						qm.jha(sjp, ftc);
					}
				}
				else {
					const qgl = sjp.czh;

					let vah;

					for (let k = i - 1; k >= 0; k--)
					{
						const ftc = qm.zwj[k];

						if (k == 0)
						{
							if (ftc.sfo == qgl)
							{
								vah = '';
							}

							break;
						}

						if (ftc.sfo == qgl)
						{
							qm.jha(sjp, ftc);

							if (ftc.children.length == 1)
							{
								vah = '';
							}

							break;
						}
					}

					if (vah == null)
					{
						const tx = new fcm(qgl.kzo, qgl.xd);

						vah = sjp.poe(tx) + ' ';
					}

					sjp.fcy = sjp.fcy.replace(this.jdh(qgl), vah);
				}

				ftc = sjp;
			}

			for (let i = 1, n = qm.length; i < n; i++)
			{
				const sjp = qm.zwj[i];

				if (sjp.im || sjp.children.length)
				{
					ql.vnh(i, qm.zwj);
					i--;
					n--;
				}
			}

			for (let qtm = false, i = 1; i < qm.length; i++)
			{
				let sjp = qm.zwj[i];

				qtm = (qtm || !sjp.npt);

				if (sjp.dsu)
				{
					continue;
				}

				if (!qtm)
				{
					const wc = sjp.fcy;

					if (qm.length > 2 || ['+','@'].includes(wc[0]) || wc.length < 10)
					{
						sjp.hf();
					}
				}

				sjp.czh && !qm.lbm(sjp.czh.xd) && sjp.hf();

				this.tsu(sjp.bcr, qm.xd) && sjp.hf();
			}
		}

		sk = sk.map(qm =>
		{
			if (qm.qed.hidden)
			{
				return [];
			}

			const zwj = [];

			for (let i = 0; i < qm.length; i++)
			{
				const id = qm.zwj[i];

				id.bg = zyo.yib(id.fcy);

				id.kzo = id.sfo.kzo;

				if (id.bg.length < 2)
				{
					if (i == 0) return [];

					id.hf();
				}

				zwj.push(new vlm(id));
			}

			return zwj;
		});

		return sk.filter(qm => qm.length > 0);
	},

	pcu(gb)
	{
		return gb.length > 500 || ql.ush(qu[32], gb) > 3;
	},

	pe(bcr)
	{
		return this.xhf == bcr;
	},

	tsu(bcr, ukn)
	{
		if (!this.xhf || this.pe(bcr))
		{
			return false;
		}

		for (let ciu of this.tfg.of(bcr))
		{
			if (ciu == ukn)
			{
				return false;
			}

			if (!this.tfg.sef(ciu, bcr))
			{
				return true;
			}
		}
	},

	jdh(sfo)
	{
		const xd = sfo.xd;

		if (xd in this.cuj)
		{
			return this.cuj[xd];
		}

		return this.cuj[xd] = ql.zxk('^[+@]?%s[-\\s,.:?!]*', sfo.mpl, 'i');
	}
};

const zyo = {
	yib(km)
	{
		let gb = new sfa(km);

		gb.tzo('<') && gb.replace(qu[33], '&lt;');

		gb.gnf && gb.toLowerCase();

		if (gb.tzo('.'))
		{
			gb.charAt(-1) == '.' && gb.charAt(-2) != '.' && gb.uwd(1);

			gb.replace(qu[34], (m) => m.replace(qu[35], ''));
		}

		if (gb.tzo('\n'))
		{
			gb.replace(qu[36], function(m, i)
			{
				let x = gb.charAt(i - 1);

				return ql.tqn(x) ? '. ' : ' ';
			});
		}

		if (gb.muy('*_'))
		{
			gb.replace(qu[37], '$2');
		}

		if (gb.muy('(,!?.)'))
		{
			gb.replace(qu[38], '?!');

			gb.replace(qu[39], '$1');

			gb.replace(qu[40], '$1 $2');

			gb.tzo('!') && gb.replace(qu[41], '$1');
		}

		if (gb.muy('$£€'))
		{
			gb.replace(qu[42], (_, mbj, zku) =>
			{
				qu[43].test(mbj) && (mbj = Math.round(mbj));

				return zku + mbj;
			});
		}

		gb.tzo(':') && gb.replace(qu[44], ': ');

		gb.tzo('&') && gb.replace(qu[45], ' and ');

		gb.tzo('"') && gb.replace(qu[46], '" - $1');

		return xno.rxc(gb.dfm);
	},

	xas(km)
	{
		return km.length < 28 && this.div(km) || this.tju();
	},

	div(gb)
	{
		let uv;

		if (!qu[47].test(gb))
		{
			if (ql.elq(gb))
			{
				gb = ql.egp(gb);
			}

			uv = gb.split(' ');

			if (uv.length == 1)
			{
				return ql.wo(uv[0], 'PRE_CASE');
			}
		}
		else {
			uv = ql.dj(qu[48], gb);
		}

		uv = uv.map(lm =>
		{
			switch (true)
			{
				case lm.length < 2 || ql.ou(lm):
					return '';

				default:
					return ql.wo(lm);
			}
		});

		uv = uv.filter(
			(lm, i) => lm != '' && i == uv.indexOf(lm)
		);

		return uv.join(' ');
	},

	tju()
	{
		return 'user' + ql.iq(4);
	}
};

const jpe = {
	pir(gb)
	{
		gb = gb.toLowerCase();

		gb = gb.replace(qu[49], ' ');

		return ql.nun(gb);
	},

	moe(gb)
	{
		return gb.replace(qu[50], '$1');
	}
};

const xno = {
	bnh: {
		':p':'\u{1F60B}',
		';p':'\u{1F60B}',
		':d':'\u{1F604}',
		';d':'\u{1F604}',
		':o':'\u{1F62F}',
		':v':'\u{0270C}',
		':x':'\u{1F635}',
		'xo':'\u{1F635}',
		'xd':'\u{1F606}',
		':)':'\u{1F642}',
		';)':'\u{1F609}',
		':(':'\u{1F641}',
		':|':'\u{1F610}',
		'-_':'\u{1F611}',
		'^_':'\u{1F60A}',
		'+_':'\u{1F915}',
		':/':'\u{1F615}',
		':\\':'\u{1F615}',
		'<3':'\u2764\ufe0f',
	},

	rxc(gb)
	{
		return gb.replace(qu[51], m => this.get(m));
	},

	get(aq)
	{
		aq = aq.toLowerCase();

		(aq.length == 2) || (aq = aq.slice(0, 2));

		return this.bnh[aq] || aq;
	}
};

class oit
{
	constructor()
	{
		this.map = {};
	}

	akm(lm)
	{
		this.map[lm] = ++this.map[lm] || 0;
	}

	get(lm)
	{
		return this.map[lm] || 0;
	}
}

class bfs
{
	constructor()
	{
		this.map = {};
	}

	fjc(wab)
	{
		for (let hwv in this.map)
		{
			if (this.oic(wab, hwv))
			{
				return this.map[hwv];
			}
		}

		return this.gey(wab);
	}

	gey(xs)
	{
		return this.map[xs] = ql.iu('TS%s', xs);
	}

	oic(vbn, rdg)
	{
		return Math.abs(rdg - vbn) < 5;
	}
}

class igc
{
	constructor()
	{
		this.lyj = {};

		this.sk = {};
	}

	of(gwa)
	{
		return this.lyj[gwa];
	}

	sef(mfz, gwa)
	{
		return this.sk[mfz] == gwa;
	}

	kyt(xd, wqu)
	{
		this.sk[xd] = wqu;
	}

	gyc(xd, mfz)
	{
		if (!this.lyj[xd])
		{
			this.lyj[xd] = new pa;
		}

		this.lyj[xd].push(mfz);
	}
}

class ug
{
	constructor(gw)
	{
		gw.xg = this.xg.bind(this);

		this.gw = gw;

		this.ygj = 0;

		this.mxp = new Promise(kg => kg(null));

		this.oqx;

		this.ovg = new ovg;

		this.xzx = new azw([], {});
	}

	async xg(zs)
	{
		const kn = zs.cw.kn;

		try {
			const jdb = await this.ovg.jkd(kn);

			this.oqx = new mxi(zs.cw, jdb);
		}
		catch (nm) {
			return this.bkg(nm);
		}

		switch (zs.pb)
		{
			case 'pc':
				return this.uoz(kn);

			case 'ci':
				return this.xa(kn);
		}
	}

	bkg(xd)
	{
		this.huo('zv', {xd});
	}

	xa(kn)
	{
		const n = this.oqx.ci;

		if (0 < n && n < 1000)
		{
			this.idx(kn);
		}

		this.huo('ci', n);
	}

	async uoz(kn)
	{
		if (this.oqx.ulz.yru)
		{
			return this.bkg('zk');
		}

		this.zsi();
	}

	async zsi()
	{
		let r = new plb(this.cnv);

		try {
			if (this.oqx.ulz.pqk)
			{
				await this.urh(r);
			}
			else {
				await this.rew(r);
			}

			!this.nmu(r.xd) && this.huo('pc', r);
		}
		catch (nm) {
			!this.nmu(r.xd) && this.bkg(nm);
		}
	}

	async urh(upm)
	{
		const uoa = await vw.un.jei(this.oqx.cvm, this.oqx.ulz.gb);

		if (uoa.zv)
		{
			throw uoa.zv;
		}

		const lyj = new kev(uoa.cw);

		const sk = wyq.vbe(uoa.cw, lyj, this.oqx);

		upm.vrb(sk);
		upm.wsp(-2);
	}

	async rew(upm)
	{
		const kn = this.oqx.kn;
		const xt = this.oqx.ulz.gb;

		const p = upm.wsp(this.oqx.ci);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.oqx.ulz.cim)
		{
			throw 'da';
		}

		let sk, lyj;

		if (p < 1000)
		{
			const nm = await this.idx(kn);

			if (nm)
			{
				throw nm;
			}

			lyj = this.xzx.lyj;

			sk = this.xzx.ulz(xt);
		}
		else {
			const uoa = await vw.un.pfz(kn, xt);

			if (uoa.zv)
			{
				throw uoa.zv;
			}

			lyj = new kev(uoa.cw);

			sk = uoa.cw;
		}

		sk = wyq.vbe(sk, lyj, this.oqx);

		upm.vrb(sk);
	}

	huo(pb, cw)
	{
		this.gw.dq(pb, cw);
	}

	async idx(kn)
	{
		await this.mxp;

		if (kn != this.xzx.xd)
		{
			this.mxp = new Promise(async kg =>
			{
				const uoa = await vw.un.wjd(kn);

				if (uoa.vl)
				{
					this.xzx = new azw(uoa.cw, this.oqx);
				}

				kg(uoa.zv);
			});
		}

		return this.mxp;
	}

	get cnv()
	{
		return ++this.ygj;
	}

	nmu(tmo)
	{
		return tmo != this.ygj;
	}
}

class ovg
{
	constructor()
	{
		this.map = {};
	}

	async jkd(kn)
	{
		let x = this.map[kn];

		if (x == undefined)
		{
			x = this.vfj(kn);
		}

		if (x instanceof Promise)
		{
			const uoa = await x;

			if (uoa.zv)
			{
				this.pma(kn);

				throw uoa.zv;
			}

			x = this.bdx(kn, uoa.cw);
		}

		return x;
	}

	rcy(kn, value)
	{
		return this.map[kn] = value;
	}

	vfj(kn)
	{
		const r = vw.un.qas(kn);

		return this.rcy(kn, r);
	}

	bdx(kn, mpn)
	{
		return this.rcy(kn, mpn);
	}

	pma(kn)
	{
		this.rcy(kn, undefined);
	}
}

class nwg
{
	constructor(q)
	{
		this.gb = '';
		this.ur = '';
		this.pqk = false;
		this.yru = false;

		this.lmv(q);
	}

	get cim()
	{
		return this.ur == 'ds';
	}

	get fdb()
	{
		return this.ur == 'rvj';
	}

	lmv(q)
	{
		const sci = q.replace(qu[52], '');

		if (sci != q)
		{
			this.pqk = true;

			if (sci == '')
			{
				this.yru = true;
			}
		}

		this.gb = sci;
		this.ur = nwg.hys(sci);
	}

	static hys(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'ds';

			case (qu[53]).test(q):
				return 'rvj';

			default:
				return '';
		}
	}
}

class mxi
{
	constructor(jel, tkm)
	{
		Object.assign(this, ...[jel, tkm]);

		this.cb = Math.floor(jel.cb) || Infinity;
		this.zm = Math.floor(jel.zm);

		this.ulz = new nwg(jel.xt);
	}
}

class plb
{
	constructor(tmo)
	{
		this.xd = tmo;
		this.sk = [];
		this.tu = 0;
		this.xr = 0;
	}

	vrb(sk)
	{
		this.sk = sk;
		this.tu = sk.length;
	}

	wsp(n)
	{
		return this.xr = n;
	}
}

let le;

const vw = new yfa;
const au = new bk;
const uzn = new wmu;
const de = new yw;
const gn = new bv;
const jf = new en;

const qu = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/\s*\n\s*/g,
	/[^\S\n]+/g,
	/\s+/g,
	/\p{L}/u,
	/[^\p{L}\p{N}]/u,
	/(^|\s)[a-z]/g,
	/\s/g,
	/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
	/\x08/g,
	/[a-z]+/g,
	/[\u{0621}-\u{064A}]+/gu,
	/[א-ת]+/g,
	/^\u200b/,
	/https?:[^\s]+/g,
	/#[a-zA-Z0-9]\w{2,}/g,
	/\b\d\d?(:\d\d)+/g,
	/[`´‘’׳״“”„׳]/g,
	/(.)\1+/gu,
	/\p{N}/u,
	/[^\p{L}\p{N}]/gu,
	/^[A-Za-z0-9_-]{32,}$/,
	/(?:youtu\.be\/|[?&]v=)([\w\-]{11})/,
	/[?&](?:time_continue|t)=([\dms]+)/,
	/\d+/g,
	/[a-z]+[\.\-][a-z\.\-]+/,
	/^\d\d?:.*\d\d$/,
	/\d\d?(:\d\d)+/g,
	/[@+]?(.{2})/,
	/^.{0,3}\n/g,
	/<[^3]/g,
	/(\.[a-z]){2,}\.?/gi,
	/\./g,
	/\n/g,
	/([*_])(.+?)\1/g,
	/[?!]{2,}/,
	/ ([!?),.])/g,
	/([)!?,.])(\p{L})/gu,
	/([?!])[,.]+/g,
	/(\d[\d,.]*)([$£€])/g,
	/\.\d{2}$/,
	/ : /g,
	/ & /g,
	/\"\. ([a-z])/i,
	/[^A-Za-z0-9\s]/,
	/([A-Za-z0-9]+)/g,
	/[^\p{L}\p{N}\s]/gu,
	/([a-z]{3,})(ing|ed|e?s)\b/g,
	/<3+|([+^-])_\1|[;:]([xvopd]+\b|[|()\\/])|\b(xd|xo)+\b/gi,
	/^global:\s*/i,
	/^(wh(o|y|at|en|ere)|how)|\?$/,
];