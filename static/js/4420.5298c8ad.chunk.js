"use strict";(self.webpackChunkARMORY=self.webpackChunkARMORY||[]).push([[4420],{94420:(t,a,r)=>{r.d(a,{E:()=>C,a:()=>b});var e=r(6222),n=r(2257),c=r(36561),i=r(62070),s=r(78523),o=r(27575),p=r(15647),h=r(71247),l=r(44554),m=r(31349),u=r(82449),d=r(48749);class W{featureName=i.cD.name;constructor(t,a){this.erc20=t,this.contractWrapper=a}tokens=(0,p.f)((async t=>p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[await this.erc20.normalizeAmount(t)]})));from=(0,p.f)((async(t,a)=>p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burnFrom",args:await Promise.all([(0,i.aM)(t),this.erc20.normalizeAmount(a)])})))}class g{featureName=i.cE.name;constructor(t,a,r){this.erc20=t,this.contractWrapper=a,this.storage=r;const e=new o.C(this.contractWrapper,i.bh,this.storage);this.conditions=new h.D(this.contractWrapper,e,this.storage)}to=(0,p.f)((async(t,a,r)=>{const e=await this.erc20.normalizeAmount(a);return await this.conditions.getClaimTransaction(t,e,r)}))}class f{constructor(t,a,r){this.erc20=t,this.contractWrapper=a,this.storage=r,this.claim=new g(this.erc20,this.contractWrapper,this.storage)}}class w{featureName=i.cF.name;constructor(t,a){this.erc20=t,this.contractWrapper=a}to=(0,p.f)((async t=>{const a=new c.C(this.contractWrapper),r=(await Promise.all(t.map((t=>Promise.all([(0,i.aM)(t.toAddress),this.erc20.normalizeAmount(t.amount)]))))).map((t=>{let[r,e]=t;return a.encode("mintTo",[r,e])}));return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})}))}class y{featureName=i.cG.name;constructor(t,a){this.erc20=t,this.contractWrapper=a,this.batch=this.detectErc20BatchMintable()}to=(0,p.f)((async(t,a)=>await this.getMintTransaction(t,a)));async getMintTransaction(t,a){return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:await Promise.all([(0,i.aM)(t),this.erc20.normalizeAmount(a)])})}detectErc20BatchMintable(){if((0,o.d)(this.contractWrapper,"ERC20BatchMintable"))return new w(this.erc20,this.contractWrapper)}}class b{featureName=i.cH.name;constructor(t,a){this.contractWrapper=t,this.roles=a}mint=(0,p.f)((async t=>{const a=t.payload,r=t.signature,[e,c]=await Promise.all([this.mapPayloadToContractStruct(a),this.contractWrapper.getCallOverrides()]);return await(0,u.s)(this.contractWrapper,n.O$.from(e.price),a.currencyAddress,c),p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[e,r],overrides:c})}));mintBatch=(0,p.f)((async t=>{const a=await Promise.all(t.map((t=>this.mapPayloadToContractStruct(t.payload)))),r=t.map(((t,r)=>{const e=a[r],c=t.signature,i=t.payload.price;if(n.O$.from(i).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:e,signature:c}})),e=new c.C(this.contractWrapper),i=r.map((t=>e.encode("mintWithSignature",[t.message,t.signature])));return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[i]})}));async verify(t){const a=t.payload,r=t.signature,e=await this.mapPayloadToContractStruct(a);return(await this.contractWrapper.read("verify",[e,r]))[0]}async generate(t){return(await this.generateBatch([t]))[0]}async generateBatch(t){await(this.roles?.verify(["minter"],await this.contractWrapper.getSignerAddress()));const[a,r,e]=await Promise.all([this.contractWrapper.getChainID(),this.contractWrapper.read("name",[]),Promise.all(t.map((t=>d.S.parseAsync(t))))]),n=this.contractWrapper.getSigner();(0,l.Z)(n,"No signer available");const c=await Promise.all(e.map((t=>d.n.parseAsync(t)))),i=await Promise.all(c.map((t=>this.mapPayloadToContractStruct(t)))),s=await Promise.all(i.map((t=>this.contractWrapper.signTypedData(n,{name:r,version:"1",chainId:a,verifyingContract:this.contractWrapper.address},{MintRequest:d.M},t))));return e.map(((t,a)=>({payload:c[a],signature:s[a].toString()})))}async mapPayloadToContractStruct(t){const[a,r]=await Promise.all([(0,m.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress),this.contractWrapper.read("decimals",[])]),n=e.parseUnits(t.quantity,r);return{to:t.to,primarySaleRecipient:t.primarySaleRecipient,quantity:n,price:a,currency:t.currencyAddress,validityEndTimestamp:t.mintEndTime,validityStartTimestamp:t.mintStartTime,uid:t.uid}}}class C{featureName=i.cI.name;get chainId(){return this._chainId}constructor(t,a,r){this.contractWrapper=t,this.storage=a,this.mintable=this.detectErc20Mintable(),this.burnable=this.detectErc20Burnable(),this.droppable=this.detectErc20Droppable(),this.signatureMintable=this.detectErc20SignatureMintable(),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(){return await(0,c.f)(this.contractWrapper.getProvider(),this.getAddress())}async balance(){return await this.balanceOf(await this.contractWrapper.getSignerAddress())}async balanceOf(t){return this.getValue(await this.contractWrapper.read("balanceOf",[await(0,i.aM)(t)]))}async totalSupply(){return await this.getValue(await this.contractWrapper.read("totalSupply",[]))}async allowance(t){const[a,r]=await Promise.all([this.contractWrapper.getSignerAddress(),(0,i.aM)(t)]);return await this.allowanceOf(a,r)}async allowanceOf(t,a){const r=await Promise.all([(0,i.aM)(t),(0,i.aM)(a)]);return await this.getValue(await this.contractWrapper.read("allowance",r))}transfer=(0,p.f)((async(t,a)=>p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transfer",args:await Promise.all([(0,i.aM)(t),this.normalizeAmount(a)])})));transferFrom=(0,p.f)((async(t,a,r)=>p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom",args:await Promise.all([(0,i.aM)(t),(0,i.aM)(a),this.normalizeAmount(r)])})));setAllowance=(0,p.f)((async(t,a)=>p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:await Promise.all([(0,i.aM)(t),this.normalizeAmount(a)])})));transferBatch=(0,p.f)((async t=>{const a=new c.C(this.contractWrapper),r=(await Promise.all(t.map((t=>Promise.all([this.normalizeAmount(t.amount),(0,i.aM)(t.toAddress)]))))).map((t=>{let[r,e]=t;return a.encode("transfer",[e,r])}));return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})}));mint=(0,p.f)((async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)));mintTo=(0,p.f)((async(t,a)=>(0,s.a)(this.mintable,i.cG).to.prepare(t,a)));async getMintTransaction(t,a){return(0,s.a)(this.mintable,i.cG).getMintTransaction(t,a)}mintBatchTo=(0,p.f)((async t=>(0,s.a)(this.mintable?.batch,i.cF).to.prepare(t)));burn=(0,p.f)((async t=>(0,s.a)(this.burnable,i.cD).tokens.prepare(t)));burnFrom=(0,p.f)((async(t,a)=>(0,s.a)(this.burnable,i.cD).from.prepare(t,a)));claim=(0,p.f)((async(t,a)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,a)));claimTo=(0,p.f)((async(t,a,r)=>(0,s.a)(this.droppable?.claim,i.cE).to.prepare(t,a,r)));get claimConditions(){return(0,s.a)(this.droppable?.claim,i.cE).conditions}get signature(){return(0,s.a)(this.signatureMintable,i.cH)}async normalizeAmount(t){return async function(t,a){const r=await t.read("decimals",[]);return e.parseUnits(i.cw.parse(a),r)}(this.contractWrapper,t)}async getValue(t){return await(0,c.a)(this.contractWrapper.getProvider(),this.getAddress(),n.O$.from(t))}detectErc20Mintable(){if((0,o.d)(this.contractWrapper,"ERC20"))return new y(this,this.contractWrapper)}detectErc20Burnable(){if((0,o.d)(this.contractWrapper,"ERC20Burnable"))return new W(this,this.contractWrapper)}detectErc20Droppable(){if((0,o.d)(this.contractWrapper,"ERC20ClaimConditionsV1")||(0,o.d)(this.contractWrapper,"ERC20ClaimConditionsV2")||(0,o.d)(this.contractWrapper,"ERC20ClaimPhasesV1")||(0,o.d)(this.contractWrapper,"ERC20ClaimPhasesV2"))return new f(this,this.contractWrapper,this.storage)}detectErc20SignatureMintable(){if((0,o.d)(this.contractWrapper,"ERC20SignatureMintable"))return new b(this.contractWrapper)}}}}]);
//# sourceMappingURL=4420.5298c8ad.chunk.js.map