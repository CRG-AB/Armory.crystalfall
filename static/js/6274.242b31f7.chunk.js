"use strict";(self.webpackChunkARMORY=self.webpackChunkARMORY||[]).push([[6274],{3499:(t,e,r)=>{r.d(e,{C:()=>s});var a=r(15647),n=r(62070);class s{featureName=n.d4.name;constructor(t){this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}setRecipient=(0,a.f)((async t=>a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))}},66274:(t,e,r)=>{r.r(e),r.d(e,{SmartContract:()=>U});var a=r(78523),n=r(27575),s=r(62070),i=r(15647),o=r(2257),c=r(6222),p=r(97419),d=r(83374),h=r(51583),m=r(17303),g=r(44554),u=r(48749),l=r(60874),f=r(91849);let A=function(t){return t[t.None=0]="None",t[t.AddAdmin=1]="AddAdmin",t[t.RemoveAdmin=2]="RemoveAdmin",t}({});const W={startDate:o.O$.from(0),expirationDate:o.O$.from(0),approvedCallTargets:[],nativeTokenLimitPerTransaction:"0"},y=(()=>l.z.object({startDate:a.S,expirationDate:a.E,nativeTokenLimitPerTransaction:s.cw.default(0),approvedCallTargets:l.z.union([l.z.array(s.ba),l.z.literal("*")])}))(),w=(()=>l.z.array(l.z.object({signer:s.ba,makeAdmin:l.z.boolean(),permissions:y})))(),v=[{name:"signer",type:"address"},{name:"approvedTargets",type:"address[]"},{name:"nativeTokenLimitPerTransaction",type:"uint256"},{name:"permissionStartTimestamp",type:"uint128"},{name:"permissionEndTimestamp",type:"uint128"},{name:"reqValidityStartTimestamp",type:"uint128"},{name:"reqValidityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],T=[{name:"signer",type:"address"},{name:"isAdmin",type:"uint8"},{name:"approvedTargets",type:"address[]"},{name:"nativeTokenLimitPerTransaction",type:"uint256"},{name:"permissionStartTimestamp",type:"uint128"},{name:"permissionEndTimestamp",type:"uint128"},{name:"reqValidityStartTimestamp",type:"uint128"},{name:"reqValidityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}];class P{featureName=s.dj.name;constructor(t){this.contractWrapper=t}getAddress(){return this.contractWrapper.address}hasDuplicateSigners(t){const e={},r=t.map((t=>t.signer));for(const a of r){if(e[a])return!0;e[a]=!0}return!1}parseSignerPermissionsStruct(t){return{startDate:new Date(1e3*parseInt(t.startTimestamp.toString())),expirationDate:new Date(1e3*parseInt(t.endTimestamp.toString())),nativeTokenLimitPerTransaction:o.O$.from(t.nativeTokenLimitPerTransaction),approvedCallTargets:t.approvedTargets}}async sendSignerPermissionRequest(t,e,r){const{payload:a,signature:n}=await this.generatePayload(t,e,r);return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPermissionsForSigner",args:[a,n]})}async generatePayload(t,e,r){const a={signer:t,isAdmin:r.valueOf(),approvedTargets:"*"===e.approvedCallTargets?[s.cu]:e.approvedCallTargets,nativeTokenLimitPerTransaction:c.parseEther(e.nativeTokenLimitPerTransaction),permissionStartTimestamp:e.startDate,permissionEndTimestamp:e.expirationDate,reqValidityStartTimestamp:0,reqValidityEndTimestamp:o.O$.from(Math.floor(new Date(Date.now()+31536e7).getTime()/1e3)),uid:(0,u.L)(void 0)},n=await this.contractWrapper.getChainID(),i=this.contractWrapper.getSigner();(0,g.Z)(i,"No signer available");return{payload:a,signature:await this.contractWrapper.signTypedData(i,{name:"Account",version:"1",chainId:n,verifyingContract:this.getAddress()},{SignerPermissionRequest:T},a)}}async generateLegacyPayload(t,e){if("*"===e.approvedCallTargets)throw new Error("Wildcard call targets are not supported on legacy account permissions contract, please deploy an updated contract factory.");const r={signer:t,approvedTargets:e.approvedCallTargets,nativeTokenLimitPerTransaction:c.parseEther(e.nativeTokenLimitPerTransaction),permissionStartTimestamp:e.startDate,permissionEndTimestamp:e.expirationDate,reqValidityStartTimestamp:0,reqValidityEndTimestamp:o.O$.from(Math.floor(new Date(Date.now()+31536e7).getTime()/1e3)),uid:(0,u.L)(void 0)},a=await this.contractWrapper.getChainID(),n=this.contractWrapper.getSigner();(0,g.Z)(n,"No signer available");return{payload:r,signature:await this.contractWrapper.signTypedData(n,{name:"Account",version:"1",chainId:a,verifyingContract:this.getAddress()},{SignerPermissionRequest:v},r)}}async isAdmin(t){const e=await(0,s.aM)(t);return await this.contractWrapper.read("isAdmin",[e])}async isSigner(t){const e=await(0,s.aM)(t);return await this.contractWrapper.read("isActiveSigner",[e])}async getAllAdmins(){return await this.contractWrapper.read("getAllAdmins",[])}async getAllSigners(){const t=await this.contractWrapper.read("getAllActiveSigners",[]);return await Promise.all(t.map((async t=>({signer:t.signer,permissions:this.parseSignerPermissionsStruct(t)}))))}async getAllAdminsAndSigners(){return[...(await this.getAllAdmins()).map((t=>({isAdmin:!0,signer:t,permissions:{startDate:new Date(0),expirationDate:new Date(0),nativeTokenLimitPerTransaction:o.O$.from(0),approvedCallTargets:[]}}))),...await this.getAllSigners()]}grantAdminPermissions=(0,i.f)((async t=>{const e=await(0,s.aM)(t);return await this.sendSignerPermissionRequest(e,W,A.AddAdmin)}));revokeAdminPermissions=(0,i.f)((async t=>{const e=await(0,s.aM)(t);return await this.sendSignerPermissionRequest(e,W,A.RemoveAdmin)}));grantPermissions=(0,i.f)((async(t,e)=>{const r=await(0,s.aM)(t),a=await y.parseAsync(e);return await this.sendSignerPermissionRequest(r,a,A.None)}));updatePermissions=(0,i.f)((async(t,e)=>{const r=await(0,s.aM)(t),a=await y.parseAsync(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot update permissions of an existing admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");return await this.sendSignerPermissionRequest(r,a,A.None)}));revokeAccess=(0,i.f)((async t=>{const e=await(0,s.aM)(t);return await this.sendSignerPermissionRequest(e,{startDate:o.O$.from(0),expirationDate:o.O$.from(0),approvedCallTargets:[],nativeTokenLimitPerTransaction:"0"},A.None)}));approveTargetForSigner=(0,i.f)((async(t,e)=>{const r=await(0,s.aM)(t),a=await(0,s.aM)(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot approve targets for an admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");const n=await this.contractWrapper.read("getPermissionsForSigner",[r]);if(n.approvedTargets.includes(e))throw new Error("Target is already approved");const i=[...n.approvedTargets,a];return await this.sendSignerPermissionRequest(r,{startDate:o.O$.from(n.startTimestamp),expirationDate:o.O$.from(n.endTimestamp),approvedCallTargets:i,nativeTokenLimitPerTransaction:n.nativeTokenLimitPerTransaction.toString()},A.None)}));disapproveTargetForSigner=(0,i.f)((async(t,e)=>{const r=await(0,s.aM)(t),a=await(0,s.aM)(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot approve targets for an admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");const n=await this.contractWrapper.read("getPermissionsForSigner",[r]);if(!n.approvedTargets.includes(a))throw new Error("Target is currently not approved");const i=n.approvedTargets.filter((t=>p.getAddress(t)!==p.getAddress(a)));return await this.sendSignerPermissionRequest(r,{startDate:o.O$.from(n.startTimestamp),expirationDate:o.O$.from(n.endTimestamp),approvedCallTargets:i,nativeTokenLimitPerTransaction:n.nativeTokenLimitPerTransaction.toString()},A.None)}));resetAllPermissions=(0,i.f)((async t=>{const e=await w.parseAsync(t);if(this.hasDuplicateSigners(e))throw new Error("Duplicate signers found in input.");const r=[],a=[],n=[],s=await this.getAllAdmins(),o=e.filter((t=>t.makeAdmin)).map((t=>t.signer));s.forEach((async t=>{if(!o.includes(t)){const e=(await this.sendSignerPermissionRequest(t,W,A.RemoveAdmin)).encode();r.push(e)}}));const c=await this.getAllSigners(),p=e.filter((t=>!t.makeAdmin)).map((t=>t.signer));await Promise.all(c.map((async t=>{if(!p.includes(t.signer)){const e=(await this.sendSignerPermissionRequest(t.signer,W,A.None)).encode();n.push(e)}})));for(const i of e)if(i.makeAdmin)(await this.sendSignerPermissionRequest(i.signer,W,A.AddAdmin)).encode();else{const t=(await this.sendSignerPermissionRequest(i.signer,i.permissions,A.None)).encode();a.push(t)}const d=[];return r.forEach((t=>{d.push(t)})),n.forEach((t=>{d.push(t)})),a.forEach((t=>{d.push(t)})),i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[d]})}))}class x{featureName=s.dk.name;constructor(t){this.contractWrapper=t,this.accountPermissions=this.detectAccountPermissions()}detectAccountPermissions(){if((0,n.d)(this.contractWrapper,"AccountPermissions")||(0,n.d)(this.contractWrapper,"AccountPermissionsV1"))return new P(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async isAdmin(t){return(0,a.a)(this.accountPermissions,s.dj).isAdmin(t)}async isSigner(t){return(0,a.a)(this.accountPermissions,s.dj).isSigner(t)}async getAllAdmins(){return(0,a.a)(this.accountPermissions,s.dj).getAllAdmins()}async getAllSigners(){return(0,a.a)(this.accountPermissions,s.dj).getAllSigners()}async getAllAdminsAndSigners(){return(0,a.a)(this.accountPermissions,s.dj).getAllAdminsAndSigners()}grantAdminPermissions=(0,i.f)((async t=>(0,a.a)(this.accountPermissions,s.dj).grantAdminPermissions.prepare(t)));revokeAdminPermissions=(0,i.f)((async t=>(0,a.a)(this.accountPermissions,s.dj).revokeAdminPermissions.prepare(t)));grantPermissions=(0,i.f)((async(t,e)=>(0,a.a)(this.accountPermissions,s.dj).grantPermissions.prepare(t,e)));updatePermissions=(0,i.f)((async(t,e)=>(0,a.a)(this.accountPermissions,s.dj).updatePermissions.prepare(t,e)));revokeAccess=(0,i.f)((async t=>(0,a.a)(this.accountPermissions,s.dj).revokeAccess.prepare(t)));approveTargetForSigner=(0,i.f)((async(t,e)=>(0,a.a)(this.accountPermissions,s.dj).approveTargetForSigner.prepare(t,e)));disapproveTargetForSigner=(0,i.f)((async(t,e)=>(0,a.a)(this.accountPermissions,s.dj).disapproveTargetForSigner.prepare(t,e)));resetAllPermissions=(0,i.f)((async t=>(0,a.a)(this.accountPermissions,s.dj).resetAllPermissions.prepare(t)))}class S{featureName=s.dl.name;constructor(t){this.contractWrapper=t,this.events=new n.a(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async predictAccountAddress(t,e){let r=d.Y0("");return e&&(r=e),this.contractWrapper.read("getAddress",[t,r])}async getAssociatedAccounts(t){return this.contractWrapper.read("getAccountsOfSigner",[t])}async getAllAccounts(){return await this.contractWrapper.read("getAllAccounts",[])}async isAccountDeployed(t,e){const r=await this.predictAccountAddress(t,e);return(0,s.av)(r,this.contractWrapper.getProvider())}createAccount=(0,i.f)((async(t,e)=>{if(await this.isAccountDeployed(t,e))throw new Error(`Account already deployed for admin: ${t}`);let r=d.Y0("");return e&&(r=e),i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createAccount",args:[t,r],parse:t=>({address:this.contractWrapper.parseLogs("AccountCreated",t?.logs)[0].args.account,receipt:t})})}))}class b{constructor(t,e){this.contractWrapper=t,this.storage=e}async get(){return this._cachedMetadata||(this._cachedMetadata=await(0,s.K)(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options)),this._cachedMetadata}async extractSources(){const t=await this.get();return(0,s.ao)(t,this.storage)}async extractFunctions(){let t;try{t=await this.get()}catch(e){}return(0,s.a2)(s.bk.parse(this.contractWrapper.abi),t?.metadata)}async extractEvents(){let t;try{t=await this.get()}catch(e){}return function(t,e){const r=s.bk.parse(t||[]).filter((t=>"event"===t.type)),a=[];for(const n of r){const t=(0,s.a0)(n.name,e,"events");a.push({inputs:n.inputs||[],outputs:n.outputs||[],name:n.name||"unknown",comment:t})}return a}(s.bk.parse(this.contractWrapper.abi),t?.metadata)}}class E{featureName=s.dm.name;constructor(t){this.contractWrapper=t}getAddress(){return this.contractWrapper.readContract.address}async getAll(){return await this.contractWrapper.readContract.getAllExtensions()}async get(t){return await this.contractWrapper.readContract.getExtension(t)}async getExtensionAddress(t){return(await this.get(t)).metadata.implementation}async getAllFunctions(t){return(await this.get(t)).functions}async getExtensionForFunction(t){let e=t.functionSelector;e||((0,g.Z)(t.functionSignature,"Atleast one of function selector and signature must be provided"),e=h.id(t.functionSignature).substring(0,10));return await this.contractWrapper.readContract.getMetadataForFunction(e)}async getExtensionAddressForFunction(t){return(await this.getExtensionForFunction(t)).implementation}add=(0,i.f)((async t=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addExtension",args:[t.extension],parse:async e=>{if(this.contractWrapper.parseLogs("ExtensionAdded",e.logs).length<1)throw new Error("No ExtensionAdded event found");const r=t.extensionAbi?s.bk.parse(t.extensionAbi):(await(0,s.K)(t.extension.metadata.implementation,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,a=this.filterAbiForAdd(r,t.extension),n=(0,s.aj)([s.bk.parse(this.contractWrapper.abi),a]);return this.contractWrapper.updateAbi(n),e}})));addDeployed=(0,i.f)((async t=>{let e=t.extensionAbi;if(!e){e=(await(0,s.K)(t.extensionAddress,this.contractWrapper.getProvider(),this.contractWrapper.storage,this.contractWrapper.options)).abi}(0,g.Z)(e,"Require extension ABI");let r="";if(t.extensionMetadata)if("string"===typeof t.extensionMetadata)r=t.extensionMetadata;else{const e=await s.bD.parseAsync(t.extensionMetadata);r=await this.contractWrapper.storage.upload(e)}const a=(0,f.b)(s.bk.parse(e)),n={metadata:{name:t.extensionName,metadataURI:r,implementation:t.extensionAddress},functions:a};return this.add.prepare({extension:n,extensionAbi:e})}));addPublished=(0,i.f)((async t=>{const e=t.version||"latest",{deployedExtensionAddress:r,extensionMetadata:a}=await this.deployExtension(t.extensionName,t.publisherAddress||s.aI,e);return this.addDeployed.prepare({extensionName:t.extensionName,extensionAddress:r,extensionMetadata:t.extensionMetadataOverride||a})}));replace=(0,i.f)((async t=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"replaceExtension",args:[t.extension],parse:async e=>{if(this.contractWrapper.parseLogs("ExtensionReplaced",e.logs).length<1)throw new Error("No ExtensionReplaced event found");const r=t.extensionAbi?s.bk.parse(t.extensionAbi):(await(0,s.K)(t.extension.metadata.implementation,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,a=this.filterAbiForRemove(s.bk.parse(this.contractWrapper.abi),r),n=this.filterAbiForAdd(r,t.extension),i=(0,s.aj)([a,n]);return this.contractWrapper.updateAbi(i),e}})));replaceDeployed=(0,i.f)((async t=>{let e=t.extensionAbi;if(!e){e=(await(0,s.K)(t.extensionAddress,this.contractWrapper.getProvider(),this.contractWrapper.storage,this.contractWrapper.options)).abi}(0,g.Z)(e,"Require extension ABI");let r="";if(t.extensionMetadata)if("string"===typeof t.extensionMetadata)r=t.extensionMetadata;else{const e=await s.bD.parseAsync(t.extensionMetadata);r=await this.contractWrapper.storage.upload(e)}const a=(0,f.b)(s.bk.parse(e)),n={metadata:{name:t.extensionName,metadataURI:r,implementation:t.extensionAddress},functions:a};return this.replace.prepare({extension:n,extensionAbi:e})}));replacePublished=(0,i.f)((async t=>{const e=t.version||"latest",{deployedExtensionAddress:r,extensionMetadata:a}=await this.deployExtension(t.extensionName,t.publisherAddress||s.aI,e);return this.replaceDeployed.prepare({extensionName:t.extensionName,extensionAddress:r,extensionMetadata:t.extensionMetadataOverride||a})}));remove=(0,i.f)((async t=>{const e=await this.getExtensionAddress(t.extensionName);return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"removeExtension",args:[t.extensionName],parse:async t=>{if(this.contractWrapper.parseLogs("ExtensionRemoved",t.logs).length<1)throw new Error("No ExtensionRemoved event found");const r=(await(0,s.K)(e,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,a=this.filterAbiForRemove(s.bk.parse(this.contractWrapper.abi),r);return this.contractWrapper.updateAbi(a),t}})}));filterAbiForAdd(t,e){const r=new m.vU(t),a=e.functions.map((t=>t.functionSelector));return t.filter((t=>{const e=Object.values(new m.vU([t]).functions);if(0===e.length)return!1;const n=r.getSighash(e[0]);return a.includes(n)}))}filterAbiForRemove(t,e){const r=new m.vU(t),a=new m.vU(e),n=Object.values(a.functions).map((t=>a.getSighash(t)));return t.filter((t=>{const e=Object.values(new m.vU([t]).functions);if(0===e.length)return!1;const a=r.getSighash(e[0]);return!n.includes(a)}))}async deployExtension(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"latest";const a=await(0,s.aJ)(e,t,r,this.contractWrapper.storage,this.contractWrapper.options.clientId,this.contractWrapper.options.secretKey),n=await(0,f.g)(a.metadataUri,this.contractWrapper.storage,this.contractWrapper.getProvider(),"",this.contractWrapper.options.clientId,this.contractWrapper.options.secretKey),i=n.find((t=>"implementation"===t.type))?.transaction.predictedAddress,o=n.filter((t=>t.transaction.data&&t.transaction.data.length>0)),c=o.filter((t=>"infra"!==t.type)).map((t=>t.transaction)),p=o.filter((t=>"infra"===t.type)).map((t=>t.transaction)),d=this.contractWrapper.getSigner();(0,g.Z)(d,"Signer is required"),await(0,f.a)(d,p,{});for(const s of c)try{await(0,f.d)(d,s)}catch(h){console.debug(`Error deploying contract at ${s.predictedAddress}`,h?.message)}return{deployedExtensionAddress:i,extensionMetadata:a.metadataUri}}}class C{featureName=s.dn.name;constructor(t){this.contractWrapper=t}getAddress(){return this.contractWrapper.address}drop=(0,i.f)((async(t,e,r)=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC20",args:[t,e,r],parse:t=>{const e=this.contractWrapper.parseLogs("AirdropFailed",t.logs).map((t=>({recipient:t.args.recipient,amount:t.args.amount.toString()})));return{successfulDropCount:r.length-e.length,failedDropCount:e.length,failedDrops:e}}})))}class R{featureName=s.dp.name;constructor(t){this.contractWrapper=t}getAddress(){return this.contractWrapper.address}drop=(0,i.f)((async(t,e,r)=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC721",args:[t,e,r],parse:t=>{const e=this.contractWrapper.parseLogs("AirdropFailed",t.logs).map((t=>({recipient:t.args.recipient,tokenId:t.args.tokenId.toNumber()})));return{successfulDropCount:r.length-e.length,failedDropCount:e.length,failedDrops:e}}})))}class D{featureName=s.dq.name;constructor(t){this.contractWrapper=t}getAddress(){return this.contractWrapper.address}drop=(0,i.f)((async(t,e,r)=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC1155",args:[t,e,r],parse:t=>{const e=this.contractWrapper.parseLogs("AirdropFailed",t.logs).map((t=>({recipient:t.args.recipient,tokenId:t.args.tokenId.toNumber(),amount:t.args.amount.toString()})));return{successfulDropCount:r.length-e.length,failedDropCount:e.length,failedDrops:e}}})))}var k=r(36561),M=r(72106),F=r(42889),N=r(77069),L=r(20727),O=r(3499),q=r(64849),I=r(94420),j=r(47568),$=r(55329);r(80518),r(66315),r(13631),r(78262);class U{get abi(){return s.bk.parse(this.contractWrapper.abi||[])}get royalties(){return(0,a.a)(this.detectRoyalties(),s.d2)}get roles(){return(0,a.a)(this.detectRoles(),s.d1)}get sales(){return(0,a.a)(this.detectPrimarySales(),s.d4)}get platformFees(){return(0,a.a)(this.detectPlatformFees(),s.dr)}get owner(){return(0,a.a)(this.detectOwnable(),s.d3)}get erc20(){return(0,a.a)(this.detectErc20(),s.cI)}get erc721(){return(0,a.a)(this.detectErc721(),s.c$)}get erc1155(){return(0,a.a)(this.detectErc1155(),s.dg)}get app(){return(0,a.a)(this.detectApp(),s.cK)}get directListings(){return(0,a.a)(this.detectDirectListings(),s.dx)}get englishAuctions(){return(0,a.a)(this.detectEnglishAuctions(),s.dy)}get offers(){return(0,a.a)(this.detectOffers(),s.dz)}get airdrop20(){return(0,a.a)(this.detectAirdrop20(),s.dn)}get airdrop721(){return(0,a.a)(this.detectAirdrop721(),s.dp)}get airdrop1155(){return(0,a.a)(this.detectAirdrop1155(),s.dq)}get accountFactory(){return(0,a.a)(this.detectAccountFactory(),s.dl)}get account(){return(0,a.a)(this.detectAccount(),s.dk)}get extensions(){return(0,a.a)(this.detectBaseRouter(),s.dm)}get chainId(){return this._chainId}constructor(t,e,r,a){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.cs(t,e,r,i,a);this._chainId=o,this.storage=a,this.contractWrapper=c,this.events=new n.a(this.contractWrapper),this.encoder=new k.C(this.contractWrapper),this.interceptor=new M.C(this.contractWrapper),this.estimator=new n.G(this.contractWrapper),this.publishedMetadata=new b(this.contractWrapper,this.storage),this.metadata=new n.C(this.contractWrapper,s.bh,this.storage)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}prepare(t,e,r){return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}detectRoyalties(){if((0,n.d)(this.contractWrapper,"Royalty")){const t=new n.C(this.contractWrapper,s.bh,this.storage);return new F.C(this.contractWrapper,t)}}detectRoles(){if((0,n.d)(this.contractWrapper,"Permissions"))return new L.C(this.contractWrapper,s.G)}detectPrimarySales(){if((0,n.d)(this.contractWrapper,"PrimarySale"))return new O.C(this.contractWrapper)}detectPlatformFees(){if((0,n.d)(this.contractWrapper,"PlatformFee"))return new N.C(this.contractWrapper)}detectErc20(){if((0,n.d)(this.contractWrapper,"ERC20"))return new I.E(this.contractWrapper,this.storage,this.chainId)}detectErc721(){if((0,n.d)(this.contractWrapper,"ERC721"))return new j.E(this.contractWrapper,this.storage,this.chainId)}detectErc1155(){if((0,n.d)(this.contractWrapper,"ERC1155"))return new q.E(this.contractWrapper,this.storage,this.chainId)}detectOwnable(){if((0,n.d)(this.contractWrapper,"Ownable"))return new F.a(this.contractWrapper)}detectApp(){const t=new n.C(this.contractWrapper,s.bh,this.storage);return(0,n.d)(this.contractWrapper,"AppURI")||(0,n.d)(this.contractWrapper,"ContractMetadata")?new n.b(this.contractWrapper,t,this.storage):void 0}detectDirectListings(){if((0,n.d)(this.contractWrapper,"DirectListings"))return new $.M(this.contractWrapper,this.storage)}detectEnglishAuctions(){if((0,n.d)(this.contractWrapper,"EnglishAuctions"))return new $.a(this.contractWrapper,this.storage)}detectOffers(){if((0,n.d)(this.contractWrapper,"Offers"))return new $.b(this.contractWrapper,this.storage)}detectBaseRouter(){if((0,n.d)(this.contractWrapper,s.dm.name))return new E(this.contractWrapper)}detectAirdrop20(){if((0,n.d)(this.contractWrapper,"AirdropERC20"))return new C(this.contractWrapper)}detectAirdrop721(){if((0,n.d)(this.contractWrapper,"AirdropERC721"))return new R(this.contractWrapper)}detectAirdrop1155(){if((0,n.d)(this.contractWrapper,"AirdropERC1155"))return new D(this.contractWrapper)}detectAccountFactory(){if((0,n.d)(this.contractWrapper,s.dl.name))return new S(this.contractWrapper)}detectAccount(){if((0,n.d)(this.contractWrapper,s.dk.name))return new x(this.contractWrapper)}}}}]);
//# sourceMappingURL=6274.242b31f7.chunk.js.map