"use strict";(self.webpackChunkARMORY=self.webpackChunkARMORY||[]).push([[6131],{69822:(e,t,n)=>{n.d(t,{W:()=>r});var s=n(29278),i=n(13631);class r extends i.Z{constructor(e){let{chains:t=s.gL9,options:n}=e;super(),this.chains=t,this.options=n}getBlockExplorerUrls(e){const t=e.explorers?.map((e=>e.url))??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some((t=>t.chainId===e))}updateChains(e){this.chains=e}}},43561:(e,t,n)=>{n.d(t,{A:()=>o,C:()=>c,R:()=>h,S:()=>d,U:()=>u,a:()=>a});var s=n(61685);class i extends Error{constructor(e,t){const{cause:n,code:s,data:i}=t;if(!Number.isInteger(s))throw new Error('"code" must be an integer.');if(!e||"string"!==typeof e)throw new Error('"message" must be a nonempty string.');super(`${e}. Cause: ${JSON.stringify(n)}`),this.cause=n,this.code=s,this.data=i}}class r extends i{constructor(e,t){const{cause:n,code:s,data:i}=t;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:n,code:s,data:i})}}class o extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}}class c extends Error{constructor(e){let{chainId:t,connectorId:n}=e;super(`Chain "${t}" not configured for connector "${n}".`),(0,s._)(this,"name","ChainNotConfigured")}}class a extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}}class h extends i{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}}class d extends r{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,s._)(this,"name","SwitchChainError")}}class u extends r{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},91609:(e,t,n)=>{function s(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}n.d(t,{n:()=>s})},66131:(e,t,n)=>{n.d(t,{InjectedConnector:()=>l});var s=n(61685),i=n(69822),r=n(43561),o=n(66072),c=n(83506),a=n(97419),h=n(60723),d=n(49716),u=n(91609);n(13631);class l extends i.W{constructor(e){const t={...{shimDisconnect:!0,getProvider:()=>{if((0,o.a)(globalThis.window))return globalThis.window.ethereum}},...e.options};super({chains:e.chains,options:t}),(0,s._)(this,"shimDisconnectKey","injected.shimDisconnect"),(0,s._)(this,"onAccountsChanged",(async e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:a.getAddress(e[0])})})),(0,s._)(this,"onChainChanged",(e=>{const t=(0,u.n)(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})})),(0,s._)(this,"onDisconnect",(async e=>{if(1013===e.code){if(await this.getProvider())try{if(await this.getAccount())return}catch{}}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)}));const n=t.getProvider();if("string"===typeof t.name)this.name=t.name;else if(n){const e=function(e){if(!e)return"Injected";const t=e=>e.isAvalanche?"Core Wallet":e.isBitKeep?"BitKeep":e.isBraveWallet?"Brave Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isExodus?"Exodus":e.isFrame?"Frame":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPortal?"Ripio Portal":e.isTally?"Tally":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isMetaMask?"MetaMask":e.isImToken?"imToken":void 0;if(e.providers?.length){const n=new Set;let s=1;for(const r of e.providers){let e=t(r);e||(e=`Unknown Wallet #${s}`,s+=1),n.add(e)}const i=[...n];return i.length?i:i[0]??"Injected"}return t(e)??"Injected"}(n);t.name?this.name=t.name(e):this.name="string"===typeof e?e:e[0]}else this.name="Injected";this.id="injected",this.ready=!!n,this.connectorStorage=e.connectorStorage}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const n=await this.getProvider();if(!n)throw new r.a;this.setupListeners(),this.emit("message",{type:"connecting"});const s=await n.request({method:"eth_requestAccounts"}),i=a.getAddress(s[0]);let o=await this.getChainId(),c=this.isChainUnsupported(o);if(e.chainId&&o!==e.chainId)try{await this.switchChain(e.chainId),o=e.chainId,c=this.isChainUnsupported(e.chainId)}catch(t){console.error(`Could not switch to chain id: ${e.chainId}`,t)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={account:i,chain:{id:o,unsupported:c},provider:n};return this.emit("connect",h),h}catch(n){if(this.isUserRejectedRequestError(n))throw new r.U(n);if(-32002===n.code)throw new r.R(n);throw n}}async disconnect(){const e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){const e=await this.getProvider();if(!e)throw new r.a;const t=await e.request({method:"eth_accounts"});return a.getAddress(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new r.a;return e.request({method:"eth_chainId"}).then(u.n)}async getProvider(){const e=this.options.getProvider();return e&&(this._provider=e),this._provider}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new h.Q(t,e).getSigner(n)}async isAuthorized(){try{if(this.options.shimDisconnect&&!Boolean(await this.connectorStorage.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new r.a;return!!await this.getAccount()}catch{return!1}}async switchChain(e){const t=await this.getProvider();if(!t)throw new r.a;const n=d.hexValue(e);try{await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]});const s=this.chains.find((t=>t.chainId===e));return s||{chainId:e,name:`Chain ${n}`,slug:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(s){const o=this.chains.find((t=>t.chainId===e));if(!o)throw new r.C({chainId:e,connectorId:this.id});if(4902===s.code||4902===s?.data?.originalError?.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:(0,c.g)(o),blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(i){if(this.isUserRejectedRequestError(i))throw new r.U(s);throw new r.A}if(this.isUserRejectedRequestError(s))throw new r.U(s);throw new r.S(s)}}async setupListeners(){const e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return 4001===e.code}}}}]);
//# sourceMappingURL=6131.c3b2342a.chunk.js.map