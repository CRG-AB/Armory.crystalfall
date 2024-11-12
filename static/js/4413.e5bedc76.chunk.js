"use strict";(self.webpackChunkARMORY=self.webpackChunkARMORY||[]).push([[4413],{27575:(t,r,a)=>{a.d(r,{C:()=>p,G:()=>h,a:()=>d,b:()=>l,d:()=>c,h:()=>i});var e=a(62070),s=a(15647),n=a(6222),o=a(18281);function c(t,r){return(0,e.ai)(t.abi,r,t.extensions)}function i(t,r){return t in r.readContract.functions}class p{featureName=e.cJ.name;constructor(t,r,a){this.contractWrapper=t,this.schema=r,this.storage=a}parseOutputMetadata(t){return this.schema.output.parseAsync(t)}parseInputMetadata(t){return this.schema.input.parseAsync(t)}async get(){let t;if(this.supportsContractMetadata(this.contractWrapper)){const r=await this.contractWrapper.read("contractURI",[]);r&&r.includes("://")&&(t=await this.storage.downloadJSON(r))}if(!t)try{let a,s,n;try{i("name",this.contractWrapper)&&(a=await this.contractWrapper.read("name",[]))}catch(r){}try{i("symbol",this.contractWrapper)&&(s=await this.contractWrapper.read("symbol",[]))}catch(r){}try{n=await(0,e.K)(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options)}catch(r){}t={name:a||n?.name,symbol:s,description:n?.info.title}}catch(a){throw new Error("Could not fetch contract metadata")}return this.parseOutputMetadata(t)}set=(0,s.f)((async t=>{const r=await this._parseAndUploadMetadata(t),a=this.contractWrapper;if(this.supportsContractMetadata(a))return s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setContractURI",args:[r],parse:t=>({receipt:t,data:this.get})});throw new e.x(e.cJ)}));update=(0,s.f)((async t=>await this.set.prepare({...await this.get(),...t})));async _parseAndUploadMetadata(t){const r=await this.parseInputMetadata(t);return this.storage.upload(r)}supportsContractMetadata(t){return c(t,"ContractMetadata")}}class d{constructor(t){this.contractWrapper=t}addTransactionListener(t){this.contractWrapper.addListener(e.a_.Transaction,t)}removeTransactionListener(t){this.contractWrapper.off(e.a_.Transaction,t)}addEventListener(t,r){const a=this.contractWrapper.readContract.interface.getEvent(t),e={address:this.contractWrapper.address,topics:[this.contractWrapper.readContract.interface.getEventTopic(a)]},s=t=>{const a=this.contractWrapper.readContract.interface.parseLog(t);r(this.toContractEvent(a.eventFragment,a.args,t))};return this.contractWrapper.getProvider().on(e,s),()=>{this.contractWrapper.getProvider().off(e,s)}}listenToAllEvents(t){const r={address:this.contractWrapper.address},a=r=>{try{const a=this.contractWrapper.readContract.interface.parseLog(r);t(this.toContractEvent(a.eventFragment,a.args,r))}catch(a){console.error("Could not parse event:",r,a)}};return this.contractWrapper.getProvider().on(r,a),()=>{this.contractWrapper.getProvider().off(r,a)}}removeEventListener(t,r){const a=this.contractWrapper.readContract.interface.getEvent(t);this.contractWrapper.readContract.off(a.name,r)}removeAllListeners(){this.contractWrapper.readContract.removeAllListeners();const t={address:this.contractWrapper.address};this.contractWrapper.getProvider().removeAllListeners(t)}async getAllEvents(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fromBlock:0,toBlock:"latest",order:"desc"};const r=(await this.contractWrapper.readContract.queryFilter({},t.fromBlock,t.toBlock)).sort(((r,a)=>"desc"===t.order?a.blockNumber-r.blockNumber:r.blockNumber-a.blockNumber));return this.parseEvents(r)}async getEvents(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromBlock:0,toBlock:"latest",order:"desc"};const a=this.contractWrapper.readContract.interface.getEvent(t),e=r.filters?a.inputs.map((t=>r.filters[t.name])):[],s=this.contractWrapper.readContract.filters[a.name](...e),n=(await this.contractWrapper.readContract.queryFilter(s,r.fromBlock,r.toBlock)).sort(((t,a)=>"desc"===r.order?a.blockNumber-t.blockNumber:t.blockNumber-a.blockNumber));return this.parseEvents(n)}parseEvents(t){return t.map((t=>{const r=Object.fromEntries(Object.entries(t).filter((t=>"function"!==typeof t[1]&&"args"!==t[0])));if(t.args){const a=Object.entries(t.args),e=a.slice(a.length/2,a.length),s={};for(const[t,r]of e)s[t]=r;return{eventName:t.event||"",data:s,transaction:r}}return{eventName:t.event||"",data:{},transaction:r}}))}toContractEvent(t,r,a){const e=Object.fromEntries(Object.entries(a).filter((t=>"function"!==typeof t[1]&&"args"!==t[0]))),s={};return t.inputs.forEach(((t,a)=>{if(Array.isArray(r[a])){const e=t.components;if(e){const n=r[a];if("tuple[]"===t.type){const r=[];for(let t=0;t<n.length;t++){const a=n[t],s={};for(let t=0;t<e.length;t++){s[e[t].name]=a[t]}r.push(s)}s[t.name]=r}else{const r={};for(let t=0;t<e.length;t++){r[e[t].name]=n[t]}s[t.name]=r}}}else s[t.name]=r[a]})),{eventName:t.name,data:s,transaction:e}}}class h{constructor(t){this.contractWrapper=t}async gasCostOf(t,r){const a=await(0,s.c)(this.contractWrapper.getProvider(),await this.contractWrapper.populateTransaction(t,r));return e=a,n.formatEther(e);var e}async gasLimitOf(t,r){return this.contractWrapper.estimateGas(t,r)}async currentGasPriceInGwei(){const t=await this.contractWrapper.getProvider().getGasPrice();return n.formatUnits(t,"gwei")}}class l{featureName=e.cK.name;constructor(t,r,a){this.contractWrapper=t,this.metadata=r,this.storage=a}async get(){return c(this.contractWrapper,"AppURI")?await this.contractWrapper.read("appURI",[]):(0,o.ov)((await this.metadata.get()).app_uri||"",this.storage.getGatewayUrls())}set=(0,s.f)((async t=>c(this.contractWrapper,"AppURI")?s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAppURI",args:[t]}):await this.metadata.update.prepare({app_uri:t})))}},72106:(t,r,a)=>{a.d(r,{C:()=>e});class e{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},64413:(t,r,a)=>{a.r(r),a.d(r,{Vote:()=>u});var e=a(2257),s=a(51583),n=a(6222),o=a(34029),c=a(36561),i=a(62070),p=a(15647),d=a(27575),h=a(72106);let l=function(t){return t[t.Against=0]="Against",t[t.For=1]="For",t[t.Abstain=2]="Abstain",t}({});a(80518),a(66315),a(13631);class u{get chainId(){return this._chainId}constructor(t,r,a){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cs(t,r,s,e,a);this._chainId=n,this.abi=i.bk.parse(s||[]),this.contractWrapper=o,this.storage=a,this.metadata=new d.C(this.contractWrapper,i.cp,this.storage),this.app=new d.b(this.contractWrapper,this.metadata,this.storage),this.encoder=new c.C(this.contractWrapper),this.estimator=new d.G(this.contractWrapper),this.events=new d.a(this.contractWrapper),this.interceptor=new h.C(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const r=(await this.getAll()).filter((r=>r.proposalId.eq(e.O$.from(t))));if(0===r.length)throw new Error("proposal not found");return r[0]}async getAll(){const t=await this.contractWrapper.read("getAllProposals",[])??[];return(await Promise.all(t.map((t=>Promise.all([this.contractWrapper.read("state",[t.proposalId]),this.getProposalVotes(t.proposalId)]))))).map(((r,a)=>{let[e,s]=r;const n=t[a];return{proposalId:n.proposalId,proposer:n.proposer,description:n.description,startBlock:n.startBlock,endBlock:n.endBlock,state:e,votes:s,executions:n[3].map(((t,r)=>({toAddress:n.targets[r],nativeTokenValue:t,transactionData:n.calldatas[r]})))}}))}async getProposalVotes(t){const r=await this.contractWrapper.read("proposalVotes",[t]);return[{type:l.Against,label:"Against",count:r.againstVotes},{type:l.For,label:"For",count:r.forVotes},{type:l.Abstain,label:"Abstain",count:r.abstainVotes}]}async hasVoted(t,r){return r||(r=await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("hasVoted",[t,await(0,i.aM)(r)])}async canExecute(t){await this.ensureExists(t);const r=await this.get(t),a=r.executions.map((t=>t.toAddress)),e=r.executions.map((t=>t.nativeTokenValue)),n=r.executions.map((t=>t.transactionData)),o=s.id(r.description);try{return await this.contractWrapper.callStatic().execute(a,e,n,o),!0}catch(c){return!1}}async balance(){const t=await this.contractWrapper.getProvider().getBalance(this.contractWrapper.address);return{name:"",symbol:"",decimals:18,value:t,displayValue:n.formatUnits(t,18)}}async balanceOfToken(t){const r=(await Promise.resolve().then(a.t.bind(a,49242,19))).default,e=new o.CH(await(0,i.aM)(t),r,this.contractWrapper.getProvider());return await(0,c.a)(this.contractWrapper.getProvider(),t,await e.balanceOf(this.contractWrapper.address))}async ensureExists(t){try{await this.contractWrapper.read("state",[t])}catch(r){throw Error(`Proposal ${t} not found`)}}async settings(){const[t,r,a,e,s]=await Promise.all([this.contractWrapper.read("votingDelay",[]),this.contractWrapper.read("votingPeriod",[]),this.contractWrapper.read("token",[]),this.contractWrapper.read("quorumNumerator",[]),this.contractWrapper.read("proposalThreshold",[])]),n=await(0,c.f)(this.contractWrapper.getProvider(),a);return{votingDelay:t.toString(),votingPeriod:r.toString(),votingTokenAddress:a,votingTokenMetadata:n,votingQuorumFraction:e.toString(),proposalTokenThreshold:s.toString()}}propose=(0,p.f)((async(t,r)=>{r||(r=[{toAddress:this.contractWrapper.address,nativeTokenValue:0,transactionData:"0x"}]);const a=r.map((t=>t.toAddress)),e=r.map((t=>t.nativeTokenValue)),s=r.map((t=>t.transactionData));return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"propose",args:[a,e,s,t],parse:t=>({id:this.contractWrapper.parseLogs("ProposalCreated",t?.logs)[0].args.proposalId,receipt:t})})}));vote=(0,p.f)((()=>{var t=this;return async function(r,a){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return await t.ensureExists(r),p.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"castVoteWithReason",args:[r,a,e]})}})());execute=(0,p.f)((async t=>{await this.ensureExists(t);const r=await this.get(t),a=r.executions.map((t=>t.toAddress)),e=r.executions.map((t=>t.nativeTokenValue)),n=r.executions.map((t=>t.transactionData)),o=s.id(r.description);return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"execute",args:[a,e,n,o]})}));async prepare(t,r,a){return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}}}}]);
//# sourceMappingURL=4413.e5bedc76.chunk.js.map