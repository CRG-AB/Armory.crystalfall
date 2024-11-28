"use strict";(self.webpackChunkARMORY=self.webpackChunkARMORY||[]).push([[8791],{72106:(t,r,e)=>{e.d(r,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},77069:(t,r,e)=>{e.d(r,{C:()=>n});var a=e(15647),s=e(62070);class n{featureName=s.dr.name;constructor(t){this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return s.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}set=(0,a.f)((async t=>{const r=await s.bH.parseAsync(t);return a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))}},3499:(t,r,e)=>{e.d(r,{C:()=>n});var a=e(15647),s=e(62070);class n{featureName=s.d4.name;constructor(t){this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}setRecipient=(0,a.f)((async t=>a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))}},40816:(t,r,e)=>{e.d(r,{S:()=>c});var a=e(62070),s=e(15647),n=e(47568);class c{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc721=new n.E(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await(0,a.aM)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await(0,a.aM)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(0,s.f)((async(t,r)=>this.erc721.transfer.prepare(t,r)));setApprovalForAll=(0,s.f)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)));setApprovalForToken=(0,s.f)((async(t,r)=>s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await(0,a.aM)(t),r]})))}},8791:(t,r,e)=>{e.r(r),e.d(r,{NFTCollection:()=>W});var a=e(68624),s=e(62070),n=e(15647),c=e(27575),i=e(36561),p=e(72106),o=e(42889),h=e(77069),d=e(20727),l=e(3499),f=e(40816),u=e(47568);e(80518),e(66315),e(13631),e(78262);class W extends f.S{static contractRoles=s.dD;constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,f=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.cs(t,r,n,a,e),e,f),this.abi=s.bk.parse(n||[]),this.metadata=new c.C(this.contractWrapper,s.cf,this.storage),this.app=new c.b(this.contractWrapper,this.metadata,this.storage),this.roles=new d.C(this.contractWrapper,W.contractRoles),this.royalties=new o.C(this.contractWrapper,this.metadata),this.sales=new l.C(this.contractWrapper),this.encoder=new i.C(this.contractWrapper),this.estimator=new c.G(this.contractWrapper),this.events=new c.a(this.contractWrapper),this.platformFees=new h.C(this.contractWrapper),this.interceptor=new p.C(this.contractWrapper),this.signature=new u.a(this.contractWrapper,this.storage),this.owner=new o.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,s.H)("transfer"),a.d])}mint=(0,n.f)((async t=>this.erc721.mint.prepare(t)));mintTo=(0,n.f)((async(t,r)=>this.erc721.mintTo.prepare(t,r)));async getMintTransaction(t,r){return this.erc721.getMintTransaction(t,r)}mintBatch=(0,n.f)((async t=>this.erc721.mintBatch.prepare(t)));mintBatchTo=(0,n.f)((async(t,r)=>this.erc721.mintBatchTo.prepare(t,r)));burn=(0,n.f)((t=>this.erc721.burn.prepare(t)));async prepare(t,r,e){return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}}}]);
//# sourceMappingURL=8791.d9a3e741.chunk.js.map