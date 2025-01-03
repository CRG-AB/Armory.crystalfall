"use strict";(self.webpackChunkARMORY=self.webpackChunkARMORY||[]).push([[8868],{92160:(t,r,e)=>{e.d(r,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},70743:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(55089),n=e(10538);class c{featureName=(()=>n.du.name)();constructor(t){this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}set=(()=>(0,a.f)((async t=>{const r=await n.bH.parseAsync(t);return a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})})))()}},2300:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(55089),n=e(10538);class c{featureName=(()=>n.d7.name)();constructor(t){this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}setRecipient=(()=>(0,a.f)((async t=>a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]}))))()}},45964:(t,r,e)=>{e.d(r,{S:()=>s});var a=e(10538),n=e(55089),c=e(17251);class s{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc721=new c.E(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await(0,a.aL)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await(0,a.aL)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(()=>(0,n.f)((async(t,r)=>this.erc721.transfer.prepare(t,r))))();setApprovalForAll=(()=>(0,n.f)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r))))();setApprovalForToken=(()=>(0,n.f)((async(t,r)=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await(0,a.aL)(t),r]}))))()}},38868:(t,r,e)=>{e.r(r),e.d(r,{NFTDrop:()=>w});var a=e(42151),n=e(83042),c=e(82509),s=e(10538),i=e(55089),o=e(85166),p=e(66166),h=e(92160),l=e(29734),d=e(70743),u=e(11204),m=e(2300),y=e(62231),f=e(45964),g=e(51236);e(2914),e(70689),e(68070),e(45355);class w extends f.S{static contractRoles=(()=>s.dG)();constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.cs(t,r,n,a,e),e,c),this.abi=s.bj.parse(n||[]),this.metadata=new o.C(this.contractWrapper,s.bT,this.storage),this.app=new o.b(this.contractWrapper,this.metadata,this.storage),this.roles=new u.C(this.contractWrapper,w.contractRoles),this.royalties=new l.C(this.contractWrapper,this.metadata),this.sales=new m.C(this.contractWrapper),this.claimConditions=new y.D(this.contractWrapper,this.metadata,this.storage),this.encoder=new p.C(this.contractWrapper),this.estimator=new o.G(this.contractWrapper),this.events=new o.a(this.contractWrapper),this.platformFees=new d.C(this.contractWrapper),this.revealer=new l.D(this.contractWrapper,this.storage,s.cQ.name,(()=>this.erc721.nextTokenIdToMint())),this.interceptor=new h.C(this.contractWrapper),this.owner=new l.a(this.contractWrapper),this.checkout=new g.P(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){const[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){const r=a.gH.from(t?.start||0).toNumber(),e=a.gH.from(t?.count||c.D).toNumber(),n=Math.min((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r+e);return await Promise.all(Array.from(Array(n).keys()).map((t=>this.get(t.toString()))))}async getAllUnclaimed(t){const r=a.gH.from(t?.start||0).toNumber(),e=a.gH.from(t?.count||c.D).toNumber(),n=a.gH.from(Math.max((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r)),s=a.gH.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),n.toNumber()+e));return await Promise.all(Array.from(Array(s.sub(n).toNumber()).keys()).map((t=>this.erc721.getTokenMetadata(n.add(t).toString()))))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,s.H)("transfer"),n.L])}createBatch=(()=>(0,i.f)((async(t,r)=>this.erc721.lazyMint.prepare(t,r))))();async getClaimTransaction(t,r){let e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:e})}claimTo=(()=>(0,i.f)((()=>{var t=this;return async function(r,e){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.erc721.claimTo.prepare(r,e,{checkERC20Allowance:a})}})()))();claim=(()=>(0,i.f)((()=>{var t=this;return async function(r){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,e)}})()))();burn=(()=>(0,i.f)((async t=>this.erc721.burn.prepare(t))))();async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(()=>(0,i.f)((async(t,r)=>this.erc721.transfer.prepare(t,r))))();setApprovalForAll=(()=>(0,i.f)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r))))();setApprovalForToken=(()=>(0,i.f)((async(t,r)=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[t,r]}))))();async prepare(t,r,e){return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}},51236:(t,r,e)=>{e.d(r,{P:()=>p});var a=e(10538),n=e(67033);const c="https://paper.xyz/api/2022-08-12/platform/thirdweb",s={[a.aS.Mainnet]:"Ethereum",[a.aS.Goerli]:"Goerli",[a.aS.Polygon]:"Polygon",[a.aS.Mumbai]:"Mumbai",[a.aS.Avalanche]:"Avalanche"};async function i(t,r){const e=function(t){return(0,n.A)(t in s,`chainId not supported by paper: ${t}`),s[t]}(r),a=await fetch(`${c}/register-contract?contractAddress=${t}&chain=${e}`),i=await a.json();return(0,n.A)(i.result.id,"Contract is not registered with paper"),i.result.id}const o={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};class p{constructor(t){this.contractWrapper=t}async getCheckoutId(){return i(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await async function(t,r){const e=await fetch(`${c}/checkout-link-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...o,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await e.json();return(0,n.A)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}(await this.getCheckoutId(),t)}}}}]);