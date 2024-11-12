"use strict";(self.webpackChunkARMORY=self.webpackChunkARMORY||[]).push([[727],{27575:(t,r,e)=>{e.d(r,{C:()=>p,G:()=>h,a:()=>l,b:()=>d,d:()=>c,h:()=>i});var a=e(62070),s=e(15647),o=e(6222),n=e(18281);function c(t,r){return(0,a.ai)(t.abi,r,t.extensions)}function i(t,r){return t in r.readContract.functions}class p{featureName=a.cJ.name;constructor(t,r,e){this.contractWrapper=t,this.schema=r,this.storage=e}parseOutputMetadata(t){return this.schema.output.parseAsync(t)}parseInputMetadata(t){return this.schema.input.parseAsync(t)}async get(){let t;if(this.supportsContractMetadata(this.contractWrapper)){const r=await this.contractWrapper.read("contractURI",[]);r&&r.includes("://")&&(t=await this.storage.downloadJSON(r))}if(!t)try{let e,s,o;try{i("name",this.contractWrapper)&&(e=await this.contractWrapper.read("name",[]))}catch(r){}try{i("symbol",this.contractWrapper)&&(s=await this.contractWrapper.read("symbol",[]))}catch(r){}try{o=await(0,a.K)(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options)}catch(r){}t={name:e||o?.name,symbol:s,description:o?.info.title}}catch(e){throw new Error("Could not fetch contract metadata")}return this.parseOutputMetadata(t)}set=(0,s.f)((async t=>{const r=await this._parseAndUploadMetadata(t),e=this.contractWrapper;if(this.supportsContractMetadata(e))return s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setContractURI",args:[r],parse:t=>({receipt:t,data:this.get})});throw new a.x(a.cJ)}));update=(0,s.f)((async t=>await this.set.prepare({...await this.get(),...t})));async _parseAndUploadMetadata(t){const r=await this.parseInputMetadata(t);return this.storage.upload(r)}supportsContractMetadata(t){return c(t,"ContractMetadata")}}class l{constructor(t){this.contractWrapper=t}addTransactionListener(t){this.contractWrapper.addListener(a.a_.Transaction,t)}removeTransactionListener(t){this.contractWrapper.off(a.a_.Transaction,t)}addEventListener(t,r){const e=this.contractWrapper.readContract.interface.getEvent(t),a={address:this.contractWrapper.address,topics:[this.contractWrapper.readContract.interface.getEventTopic(e)]},s=t=>{const e=this.contractWrapper.readContract.interface.parseLog(t);r(this.toContractEvent(e.eventFragment,e.args,t))};return this.contractWrapper.getProvider().on(a,s),()=>{this.contractWrapper.getProvider().off(a,s)}}listenToAllEvents(t){const r={address:this.contractWrapper.address},e=r=>{try{const e=this.contractWrapper.readContract.interface.parseLog(r);t(this.toContractEvent(e.eventFragment,e.args,r))}catch(e){console.error("Could not parse event:",r,e)}};return this.contractWrapper.getProvider().on(r,e),()=>{this.contractWrapper.getProvider().off(r,e)}}removeEventListener(t,r){const e=this.contractWrapper.readContract.interface.getEvent(t);this.contractWrapper.readContract.off(e.name,r)}removeAllListeners(){this.contractWrapper.readContract.removeAllListeners();const t={address:this.contractWrapper.address};this.contractWrapper.getProvider().removeAllListeners(t)}async getAllEvents(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fromBlock:0,toBlock:"latest",order:"desc"};const r=(await this.contractWrapper.readContract.queryFilter({},t.fromBlock,t.toBlock)).sort(((r,e)=>"desc"===t.order?e.blockNumber-r.blockNumber:r.blockNumber-e.blockNumber));return this.parseEvents(r)}async getEvents(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromBlock:0,toBlock:"latest",order:"desc"};const e=this.contractWrapper.readContract.interface.getEvent(t),a=r.filters?e.inputs.map((t=>r.filters[t.name])):[],s=this.contractWrapper.readContract.filters[e.name](...a),o=(await this.contractWrapper.readContract.queryFilter(s,r.fromBlock,r.toBlock)).sort(((t,e)=>"desc"===r.order?e.blockNumber-t.blockNumber:t.blockNumber-e.blockNumber));return this.parseEvents(o)}parseEvents(t){return t.map((t=>{const r=Object.fromEntries(Object.entries(t).filter((t=>"function"!==typeof t[1]&&"args"!==t[0])));if(t.args){const e=Object.entries(t.args),a=e.slice(e.length/2,e.length),s={};for(const[t,r]of a)s[t]=r;return{eventName:t.event||"",data:s,transaction:r}}return{eventName:t.event||"",data:{},transaction:r}}))}toContractEvent(t,r,e){const a=Object.fromEntries(Object.entries(e).filter((t=>"function"!==typeof t[1]&&"args"!==t[0]))),s={};return t.inputs.forEach(((t,e)=>{if(Array.isArray(r[e])){const a=t.components;if(a){const o=r[e];if("tuple[]"===t.type){const r=[];for(let t=0;t<o.length;t++){const e=o[t],s={};for(let t=0;t<a.length;t++){s[a[t].name]=e[t]}r.push(s)}s[t.name]=r}else{const r={};for(let t=0;t<a.length;t++){r[a[t].name]=o[t]}s[t.name]=r}}}else s[t.name]=r[e]})),{eventName:t.name,data:s,transaction:a}}}class h{constructor(t){this.contractWrapper=t}async gasCostOf(t,r){const e=await(0,s.c)(this.contractWrapper.getProvider(),await this.contractWrapper.populateTransaction(t,r));return a=e,o.formatEther(a);var a}async gasLimitOf(t,r){return this.contractWrapper.estimateGas(t,r)}async currentGasPriceInGwei(){const t=await this.contractWrapper.getProvider().getGasPrice();return o.formatUnits(t,"gwei")}}class d{featureName=a.cK.name;constructor(t,r,e){this.contractWrapper=t,this.metadata=r,this.storage=e}async get(){return c(this.contractWrapper,"AppURI")?await this.contractWrapper.read("appURI",[]):(0,n.ov)((await this.metadata.get()).app_uri||"",this.storage.getGatewayUrls())}set=(0,s.f)((async t=>c(this.contractWrapper,"AppURI")?s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAppURI",args:[t]}):await this.metadata.update.prepare({app_uri:t})))}},20727:(t,r,e)=>{e.d(r,{C:()=>i});var a=e(44554),s=e(62070),o=e(27575),n=e(15647),c=e(36561);class i{featureName=s.d1.name;constructor(t,r){this.contractWrapper=t,this.roles=r}async getAll(){(0,a.Z)(this.roles.length,"this contract has no support for roles");const t={},r=Object.entries(this.roles);return(await Promise.all(r.map((t=>{let[,r]=t;return this.get(r)})))).forEach(((e,a)=>t[r[a][1]]=e)),t}async get(t){(0,a.Z)(this.roles.includes(t),`this contract does not support the "${t}" role`);const r=this.contractWrapper;if((0,o.h)("getRoleMemberCount",r)&&(0,o.h)("getRoleMember",r)){const e=(0,s.H)(t),a=(await r.read("getRoleMemberCount",[e])).toNumber();return await Promise.all(Array.from(Array(a).keys()).map((t=>r.read("getRoleMember",[e,t]))))}throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.")}setAll=(0,n.f)((async(t,r)=>{const e=r||await this.contractWrapper.getSignerAddress(),o=new c.C(this.contractWrapper),i=Object.keys(t);(0,a.Z)(i.length,"you must provide at least one role to set"),(0,a.Z)(i.every((t=>this.roles.includes(t))),"this contract does not support the given role");const p=await this.getAll(),l=[],h=i.sort((t=>"admin"===t?1:-1));for(let a=0;a<h.length;a++){const r=h[a],[n,c]=await Promise.all([Promise.all(t[r]?.map((t=>(0,s.aM)(t)))||[]),Promise.all(p[r]?.map((t=>(0,s.aM)(t)))||[])]),i=n.filter((t=>!c.includes(t))),d=c.filter((t=>!n.includes(t)));if(d.length>1){const t=d.indexOf(e);t>-1&&(d.splice(t,1),d.push(e))}if(i.length&&i.forEach((t=>{l.push(o.encode("grantRole",[(0,s.H)(r),t]))})),d.length){(await Promise.all(d.map((t=>this.getRevokeRoleFunctionName(t))))).forEach(((t,e)=>l.push(o.encode(t,[(0,s.H)(r),d[e]]))))}}return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[l]})}));async verify(t,r){await Promise.all(t.map((async t=>{const[e,a]=await Promise.all([this.get(t),(0,s.aM)(r)]);if(!e.map((t=>t.toLowerCase())).includes(a.toLowerCase()))throw new s.o(a,t)})))}grant=(0,n.f)((async(t,r)=>{(0,a.Z)(this.roles.includes(t),`this contract does not support the "${t}" role`);const e=await(0,s.aM)(r);return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"grantRole",args:[(0,s.H)(t),e]})}));revoke=(0,n.f)((async(t,r)=>{(0,a.Z)(this.roles.includes(t),`this contract does not support the "${t}" role`);const e=await(0,s.aM)(r),o=await this.getRevokeRoleFunctionName(e);return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:o,args:[(0,s.H)(t),e]})}));async getRevokeRoleFunctionName(t){const[r,e]=await Promise.all([(0,s.aM)(t),this.contractWrapper.getSignerAddress()]);return e.toLowerCase()===r.toLowerCase()?"renounceRole":"revokeRole"}}}}]);
//# sourceMappingURL=727.b47ec0d9.chunk.js.map