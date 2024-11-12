"use strict";(self.webpackChunkARMORY=self.webpackChunkARMORY||[]).push([[8430],{58457:(t,r,e)=>{e.d(r,{c:()=>n});var a=e(62070),i=e(36561);function n(t){return(0,i.i)(t)?a.aW:t}},77069:(t,r,e)=>{e.d(r,{C:()=>n});var a=e(15647),i=e(62070);class n{featureName=i.dr.name;constructor(t){this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return i.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}set=(0,a.f)((async t=>{const r=await i.bH.parseAsync(t);return a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))}},39118:(t,r,e)=>{e.d(r,{a:()=>m,g:()=>f,h:()=>p,i:()=>d,m:()=>l,v:()=>u});var a=e(34029),i=e(2257),n=e(44554),o=e(6964),s=e(62070),c=e(36561);async function d(t,r,i,n,s){try{const d=(await e.e(5025).then(e.t.bind(e,25025,19))).default,p=new a.CH(i,d,t),[u,l]=await Promise.all([p.supportsInterface(o.I),p.supportsInterface(o.a)]);if(u){const o=(await Promise.resolve().then(e.t.bind(e,70332,19))).default,d=new a.CH(i,o,t);if(await d.isApprovedForAll(s,r))return!0;let p;try{p=await d.getApproved(n)}catch(c){}return p?.toLowerCase()===r.toLowerCase()}if(l){const n=(await Promise.resolve().then(e.t.bind(e,8455,19))).default,o=new a.CH(i,n,t);return await o.isApprovedForAll(s,r)}return console.error("Contract does not implement ERC 1155 or ERC 721."),!1}catch(d){return console.error("Failed to check if token is approved",d),!1}}async function p(t,r,a,i,n){const c=(await e.e(5025).then(e.t.bind(e,25025,19))).default,d=new s.cs(t.getSignerOrProvider(),a,c,t.options,t.storage),[p,u]=await Promise.all([d.read("supportsInterface",[o.I]),d.read("supportsInterface",[o.a])]);if(p){const o=(await Promise.resolve().then(e.t.bind(e,70332,19))).default,c=new s.cs(t.getSignerOrProvider(),a,o,t.options,t.storage);if(!await c.read("isApprovedForAll",[n,r])){(await c.read("getApproved",[i])).toLowerCase()===r.toLowerCase()||await c.sendTransaction("setApprovalForAll",[r,!0])}}else{if(!u)throw Error("Contract must implement ERC 1155 or ERC 721.");{const i=(await Promise.resolve().then(e.t.bind(e,8455,19))).default,o=new s.cs(t.getSignerOrProvider(),a,i,t.options,t.storage);await o.read("isApprovedForAll",[n,r])||await o.sendTransaction("setApprovalForAll",[r,!0])}}}function u(t){if((0,n.Z)(void 0!==t.assetContractAddress&&null!==t.assetContractAddress,"Asset contract address is required"),(0,n.Z)(void 0!==t.buyoutPricePerToken&&null!==t.buyoutPricePerToken,"Buyout price is required"),(0,n.Z)(void 0!==t.listingDurationInSeconds&&null!==t.listingDurationInSeconds,"Listing duration is required"),(0,n.Z)(void 0!==t.startTimestamp&&null!==t.startTimestamp,"Start time is required"),(0,n.Z)(void 0!==t.tokenId&&null!==t.tokenId,"Token ID is required"),(0,n.Z)(void 0!==t.quantity&&null!==t.quantity,"Quantity is required"),"NewAuctionListing"===t.type)(0,n.Z)(void 0!==t.reservePricePerToken&&null!==t.reservePricePerToken,"Reserve price is required")}async function l(t,r,e){return{quantity:e.quantityDesired,pricePerToken:e.pricePerToken,currencyContractAddress:e.currency,buyerAddress:e.offeror,quantityDesired:e.quantityWanted,currencyValue:await(0,c.a)(t,e.currency,e.quantityWanted.mul(e.pricePerToken)),listingId:r}}function m(t,r,e){if(e=i.O$.from(e),t=i.O$.from(t),r=i.O$.from(r),t.eq(i.O$.from(0)))return!1;return r.sub(t).mul(s.dB).div(t).gte(e)}async function f(t,r,e){const a=[];for(;r-t>o.D;)a.push(e(t,t+o.D-1)),t+=o.D;return a.push(e(t,r-1)),await Promise.all(a)}},55329:(t,r,e)=>{e.d(r,{M:()=>v,a:()=>T,b:()=>O});var a=e(2257),i=e(34029),n=e(68624),o=e(6222),s=e(44554),c=e(58457),d=e(36561),p=e(31349),u=e(82449),l=e(62070),m=e(39118),f=e(6964),g=e(15647),h=e(78523),w=e(60874),y=e(27575),A=e(72106);const C=(()=>w.z.object({assetContractAddress:l.ba,tokenId:l.b7,quantity:l.b7.default(1),currencyContractAddress:l.ba.default(l.aW),pricePerToken:l.cw,startTimestamp:h.R.default(new Date),endTimestamp:h.E,isReservedListing:w.z.boolean().default(!1)}))();let W=function(t){return t[t.UNSET=0]="UNSET",t[t.Created=1]="Created",t[t.Completed=2]="Completed",t[t.Cancelled=3]="Cancelled",t[t.Active=4]="Active",t[t.Expired=5]="Expired",t}({});class v{featureName=l.dx.name;constructor(t,r){this.contractWrapper=t,this.storage=r,this.events=new y.a(this.contractWrapper),this.encoder=new d.C(this.contractWrapper),this.interceptor=new A.C(this.contractWrapper),this.estimator=new y.G(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async getAll(t){const r=await this.getTotalCount(),e=a.O$.from(t?.start||0).toNumber(),i=r.toNumber();if(0===i)throw new Error("No listings exist on the contract.");let n=[];n=(await(0,m.g)(e,i,((t,r)=>this.contractWrapper.read("getAllListings",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapListing(t))))}async getAllValid(t){const r=await this.getTotalCount(),e=a.O$.from(t?.start||0).toNumber(),i=r.toNumber();if(0===i)throw new Error("No listings exist on the contract.");let n=[];n=(await(0,m.g)(e,i,((t,r)=>this.contractWrapper.read("getAllValidListings",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapListing(t))))}async getListing(t){const r=await this.contractWrapper.read("getListing",[t]);return await this.mapListing(r)}async isBuyerApprovedForListing(t,r){if(!(await this.validateListing(a.O$.from(t))).isReservedListing)throw new Error(`Listing ${t} is not a reserved listing.`);return await this.contractWrapper.read("isBuyerApprovedForListing",[t,await(0,l.aM)(r)])}async isCurrencyApprovedForListing(t,r){return await this.validateListing(a.O$.from(t)),await this.contractWrapper.read("isCurrencyApprovedForListing",[t,await(0,l.aM)(r)])}async currencyPriceForListing(t,r){const e=await this.validateListing(a.O$.from(t)),i=await(0,l.aM)(r);if(i===e.currencyContractAddress)return e.pricePerToken;if(!await this.isCurrencyApprovedForListing(t,i))throw new Error(`Currency ${i} is not approved for Listing ${t}.`);return await this.contractWrapper.read("currencyPriceForListing",[t,i])}createListing=(0,g.f)((async t=>{const r=await C.parseAsync(t);await(0,m.h)(this.contractWrapper,this.getAddress(),r.assetContractAddress,r.tokenId,await this.contractWrapper.getSignerAddress());const e=await(0,p.n)(this.contractWrapper.getProvider(),r.pricePerToken,r.currencyContractAddress),i=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return r.startTimestamp.lt(i)&&(r.startTimestamp=a.O$.from(i)),g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r.assetContractAddress,tokenId:r.tokenId,quantity:r.quantity,currency:(0,c.c)(r.currencyContractAddress),pricePerToken:e,startTimestamp:r.startTimestamp,endTimestamp:r.endTimestamp,reserved:r.isReservedListing}],parse:t=>({id:this.contractWrapper.parseLogs("NewListing",t?.logs)[0].args.listingId,receipt:t})})}));createListingsBatch=(0,g.f)((async t=>{const r=(await Promise.all(t.map((t=>this.createListing.prepare(t))))).map((t=>t.encode()));return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>this.contractWrapper.parseLogs("NewListing",t?.logs).map((r=>({id:r.args.listingId,receipt:t})))})}));updateListing=(0,g.f)((async(t,r)=>{const e=await C.parseAsync(r);await(0,m.h)(this.contractWrapper,this.getAddress(),e.assetContractAddress,e.tokenId,await this.contractWrapper.getSignerAddress());const a=await(0,p.n)(this.contractWrapper.getProvider(),e.pricePerToken,e.currencyContractAddress);return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t,{assetContract:e.assetContractAddress,tokenId:e.tokenId,quantity:e.quantity,currency:(0,c.c)(e.currencyContractAddress),pricePerToken:a,startTimestamp:e.startTimestamp,endTimestamp:e.endTimestamp,reserved:e.isReservedListing}],parse:t=>({id:this.contractWrapper.parseLogs("UpdatedListing",t?.logs)[0].args.listingId,receipt:t})})}));cancelListing=(0,g.f)((async t=>g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelListing",args:[t]})));buyFromListing=(0,g.f)((async(t,r,e)=>{e&&(e=await(0,l.aM)(e));const i=await this.validateListing(a.O$.from(t)),{valid:n,error:o}=await this.isStillValidListing(i,r);if(!n)throw new Error(`Listing ${t} is no longer valid. ${o}`);const s=e||await this.contractWrapper.getSignerAddress(),c=a.O$.from(r),d=a.O$.from(i.pricePerToken).mul(c),p=await this.contractWrapper.getCallOverrides()||{};return await(0,u.s)(this.contractWrapper,d,i.currencyContractAddress,p),g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buyFromListing",args:[t,s,c,i.currencyContractAddress,d],overrides:p})}));approveBuyerForReservedListing=(0,g.f)((async(t,r)=>{if(await this.isBuyerApprovedForListing(t,r))throw new Error(`Buyer ${r} already approved for listing ${t}.`);return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveBuyerForListing",args:[t,r,!0]})}));revokeBuyerApprovalForReservedListing=(0,g.f)((async(t,r)=>{if(await this.isBuyerApprovedForListing(t,r))return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveBuyerForListing",args:[t,r,!1]});throw new Error(`Buyer ${r} not approved for listing ${t}.`)}));approveCurrencyForListing=(0,g.f)((async(t,r,e)=>{const i=await this.validateListing(a.O$.from(t)),n=await(0,l.aM)(r);n===i.currencyContractAddress&&(0,s.Z)(e===i.pricePerToken,"Approving listing currency with a different price.");const o=await this.contractWrapper.read("currencyPriceForListing",[t,n]);return(0,s.Z)(e===o,"Currency already approved with this price."),g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveCurrencyForListing",args:[t,n,e]})}));revokeCurrencyApprovalForListing=(0,g.f)((async(t,r)=>{const e=await this.validateListing(a.O$.from(t)),i=await(0,l.aM)(r);if(i===e.currencyContractAddress)throw new Error("Can't revoke approval for main listing currency.");const n=await this.contractWrapper.read("currencyPriceForListing",[t,i]);return(0,s.Z)(!n.isZero(),"Currency not approved."),g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveCurrencyForListing",args:[t,i,a.O$.from(0)]})}));async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){let r=W.UNSET;const e=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;switch(t.status){case 1:r=a.O$.from(t.startTimestamp).gt(e)?W.Created:a.O$.from(t.endTimestamp).lt(e)?W.Expired:W.Active;break;case 2:r=W.Completed;break;case 3:r=W.Cancelled}return{assetContractAddress:t.assetContract,currencyContractAddress:t.currency,pricePerToken:t.pricePerToken.toString(),currencyValuePerToken:await(0,d.a)(this.contractWrapper.getProvider(),t.currency,t.pricePerToken),id:t.listingId.toString(),tokenId:t.tokenId.toString(),quantity:t.quantity.toString(),startTimeInSeconds:a.O$.from(t.startTimestamp).toNumber(),asset:await(0,f.c)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),endTimeInSeconds:a.O$.from(t.endTimestamp).toNumber(),creatorAddress:t.listingCreator,isReservedListing:t.reserved,status:r}}async isStillValidListing(t,r){if(!await(0,m.i)(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.creatorAddress))return{valid:!1,error:`Token '${t.tokenId}' from contract '${t.assetContractAddress}' is not approved for transfer`};const a=this.contractWrapper.getProvider(),n=(await e.e(5025).then(e.t.bind(e,25025,19))).default,o=new i.CH(t.assetContractAddress,n,a),s=await o.supportsInterface(f.I),c=await o.supportsInterface(f.a);if(s){const r=(await Promise.resolve().then(e.t.bind(e,70332,19))).default,n=new i.CH(t.assetContractAddress,r,a);let o;try{o=await n.ownerOf(t.tokenId)}catch(d){}const s=o?.toLowerCase()===t.creatorAddress.toLowerCase();return{valid:s,error:s?void 0:`Seller is not the owner of Token '${t.tokenId}' from contract '${t.assetContractAddress} anymore'`}}if(c){const n=(await Promise.resolve().then(e.t.bind(e,8455,19))).default,o=new i.CH(t.assetContractAddress,n,a),s=(await o.balanceOf(t.creatorAddress,t.tokenId)).gte(r||t.quantity);return{valid:s,error:s?void 0:`Seller does not have enough balance of Token '${t.tokenId}' from contract '${t.assetContractAddress} to fulfill the listing`}}return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."}}async applyFilter(t,r){let e=[...t];if(r){if(r.seller){const t=await(0,l.aM)(r.seller);e=e.filter((r=>r.listingCreator.toString().toLowerCase()===t?.toString().toLowerCase()))}if(r.tokenContract){const t=await(0,l.aM)(r.tokenContract);e=e.filter((r=>r.assetContract.toString().toLowerCase()===t?.toString().toLowerCase()))}void 0!==r.tokenId&&(e=e.filter((t=>t.tokenId.toString()===r?.tokenId?.toString())))}return r?.count&&r.count<e.length?e.slice(0,r.count):e}}const b=(()=>w.z.object({assetContractAddress:l.ba,tokenId:l.b7,quantity:l.b7.default(1),currencyContractAddress:l.ba.default(l.aW),minimumBidAmount:l.cw,buyoutBidAmount:l.cw,timeBufferInSeconds:l.b7.default(900),bidBufferBps:l.b7.default(500),startTimestamp:h.R.default(new Date),endTimestamp:h.E}))();class T{featureName=l.dy.name;constructor(t,r){this.contractWrapper=t,this.storage=r,this.events=new y.a(this.contractWrapper),this.encoder=new d.C(this.contractWrapper),this.interceptor=new A.C(this.contractWrapper),this.estimator=new y.G(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async getTotalCount(){return await this.contractWrapper.read("totalAuctions",[])}async getAll(t){const r=await this.getTotalCount(),e=a.O$.from(t?.start||0).toNumber(),i=r.toNumber();if(0===i)throw new Error("No auctions exist on the contract.");let n=[];n=(await(0,m.g)(e,i,((t,r)=>this.contractWrapper.read("getAllAuctions",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapAuction(t))))}async getAllValid(t){const r=await this.getTotalCount(),e=a.O$.from(t?.start||0).toNumber(),i=r.toNumber();if(0===i)throw new Error("No auctions exist on the contract.");let n=[];n=(await(0,m.g)(e,i,((t,r)=>this.contractWrapper.read("getAllValidAuctions",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapAuction(t))))}async getAuction(t){const r=await this.contractWrapper.read("getAuction",[t]);return await this.mapAuction(r)}async getWinningBid(t){await this.validateAuction(a.O$.from(t));const r=await this.contractWrapper.read("getWinningBid",[t]);if(r._bidder!==n.d)return await this.mapBid(t.toString(),r._bidder,r._currency,r._bidAmount.toString())}async isWinningBid(t,r){return await this.contractWrapper.read("isNewWinningBid",[t,r])}async getWinner(t){const r=await this.validateAuction(a.O$.from(t)),e=await this.contractWrapper.read("getWinningBid",[t]),i=a.O$.from(Math.floor(Date.now()/1e3)),o=a.O$.from(r.endTimeInSeconds);if(i.gt(o)&&e._bidder!==n.d)return e._bidder;const s=new y.a(this.contractWrapper),c=(await s.getEvents("AuctionClosed")).find((r=>r.data.auctionId.eq(a.O$.from(t))));if(!c)throw new Error(`Could not find auction with ID ${t} in closed auctions`);return c.data.winningBidder}createAuction=(0,g.f)((async t=>{const r=b.parse(t);await(0,m.h)(this.contractWrapper,this.getAddress(),r.assetContractAddress,r.tokenId,await this.contractWrapper.getSignerAddress());const e=await(0,p.n)(this.contractWrapper.getProvider(),r.buyoutBidAmount,r.currencyContractAddress),i=await(0,p.n)(this.contractWrapper.getProvider(),r.minimumBidAmount,r.currencyContractAddress),n=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return r.startTimestamp.lt(n)&&(r.startTimestamp=a.O$.from(n)),g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createAuction",args:[{assetContract:r.assetContractAddress,tokenId:r.tokenId,quantity:r.quantity,currency:(0,c.c)(r.currencyContractAddress),minimumBidAmount:i,buyoutBidAmount:e,timeBufferInSeconds:r.timeBufferInSeconds,bidBufferBps:r.bidBufferBps,startTimestamp:r.startTimestamp,endTimestamp:r.endTimestamp}],parse:t=>({id:this.contractWrapper.parseLogs("NewAuction",t.logs)[0].args.auctionId,receipt:t})})}));createAuctionsBatch=(0,g.f)((async t=>{const r=(await Promise.all(t.map((t=>this.createAuction.prepare(t))))).map((t=>t.encode()));return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>this.contractWrapper.parseLogs("NewAuction",t?.logs).map((r=>({id:r.args.auctionId,receipt:t})))})}));buyoutAuction=(0,g.f)((async t=>{const r=await this.validateAuction(a.O$.from(t)),e=await(0,d.f)(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,o.formatUnits(r.buyoutBidAmount,e.decimals))}));makeBid=(0,g.f)((async(t,r)=>{const e=await this.validateAuction(a.O$.from(t)),i=await(0,p.n)(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(i.eq(a.O$.from(0)))throw new Error("Cannot make a bid with 0 value");if(a.O$.from(e.buyoutBidAmount).gt(0)&&i.gt(e.buyoutBidAmount))throw new Error("Bid amount must be less than or equal to buyoutBidAmount");if(await this.getWinningBid(t)){const r=await this.isWinningBid(t,i);(0,s.Z)(r,"Bid price is too low based on the current winning bid and the bid buffer")}else{const t=i,r=a.O$.from(e.minimumBidAmount);(0,s.Z)(t.gte(r),"Bid price is too low based on minimum bid amount")}const n=await this.contractWrapper.getCallOverrides()||{};return await(0,u.s)(this.contractWrapper,i,e.currencyContractAddress,n),g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"bidInAuction",args:[t,i],overrides:n})}));cancelAuction=(0,g.f)((async t=>{if(await this.getWinningBid(t))throw new Error("Bids already made.");return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelAuction",args:[t]})}));closeAuctionForBidder=(0,g.f)((async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());const e=await this.validateAuction(a.O$.from(t));try{return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"collectAuctionTokens",args:[a.O$.from(t)]})}catch(i){throw i.message.includes("Marketplace: auction still active.")?new l.w(t.toString(),e.endTimeInSeconds.toString()):i}}));closeAuctionForSeller=(0,g.f)((async t=>{const r=await this.validateAuction(a.O$.from(t));try{return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"collectAuctionPayout",args:[a.O$.from(t)]})}catch(e){throw e.message.includes("Marketplace: auction still active.")?new l.w(t.toString(),r.endTimeInSeconds.toString()):e}}));executeSale=(0,g.f)((async t=>{const r=await this.validateAuction(a.O$.from(t));try{const r=await this.getWinningBid(t);(0,s.Z)(r,"No winning bid found");const e=this.encoder.encode("collectAuctionPayout",[t]),a=this.encoder.encode("collectAuctionTokens",[t]);return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[[e,a]]})}catch(e){throw e.message.includes("Marketplace: auction still active.")?new l.w(t.toString(),r.endTimeInSeconds.toString()):e}}));async getBidBufferBps(t){return(await this.getAuction(t)).bidBufferBps}async getMinimumNextBid(t){const[r,e,i]=await Promise.all([this.getBidBufferBps(t),this.getWinningBid(t),this.validateAuction(a.O$.from(t))]),n=e?a.O$.from(e.bidAmount):a.O$.from(i.minimumBidAmount),o=n.add(n.mul(r).div(1e4));return(0,d.a)(this.contractWrapper.getProvider(),i.currencyContractAddress,o)}async validateAuction(t){try{return await this.getAuction(t)}catch(r){throw console.error(`Error getting the auction with id ${t}`),r}}async mapAuction(t){let r=W.UNSET;const e=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;switch(t.status){case 1:r=a.O$.from(t.startTimestamp).gt(e)?W.Created:a.O$.from(t.endTimestamp).lt(e)?W.Expired:W.Active;break;case 2:r=W.Completed;break;case 3:r=W.Cancelled}return{id:t.auctionId.toString(),creatorAddress:t.auctionCreator,assetContractAddress:t.assetContract,tokenId:t.tokenId.toString(),quantity:t.quantity.toString(),currencyContractAddress:t.currency,minimumBidAmount:t.minimumBidAmount.toString(),minimumBidCurrencyValue:await(0,d.a)(this.contractWrapper.getProvider(),t.currency,t.minimumBidAmount),buyoutBidAmount:t.buyoutBidAmount.toString(),buyoutCurrencyValue:await(0,d.a)(this.contractWrapper.getProvider(),t.currency,t.buyoutBidAmount),timeBufferInSeconds:a.O$.from(t.timeBufferInSeconds).toNumber(),bidBufferBps:a.O$.from(t.bidBufferBps).toNumber(),startTimeInSeconds:a.O$.from(t.startTimestamp).toNumber(),endTimeInSeconds:a.O$.from(t.endTimestamp).toNumber(),asset:await(0,f.c)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),status:r}}async mapBid(t,r,e,a){const i=await(0,l.aM)(r),n=await(0,l.aM)(e);return{auctionId:t,bidderAddress:i,currencyContractAddress:n,bidAmount:a,bidAmountCurrencyValue:await(0,d.a)(this.contractWrapper.getProvider(),n,a)}}async applyFilter(t,r){let e=[...t];if(r){if(r.seller){const t=await(0,l.aM)(r.seller);e=e.filter((r=>r.auctionCreator.toString().toLowerCase()===t?.toString().toLowerCase()))}if(r.tokenContract){const t=await(0,l.aM)(r.tokenContract);e=e.filter((r=>r.assetContract.toString().toLowerCase()===t?.toString().toLowerCase()))}void 0!==r.tokenId&&(e=e.filter((t=>t.tokenId.toString()===r?.tokenId?.toString())))}return r?.count&&r.count<e.length?e.slice(0,r.count):e}}const k=(()=>w.z.object({assetContractAddress:l.ba,tokenId:l.b7,quantity:l.b7.default(1),currencyContractAddress:l.ba.default(l.aW),totalPrice:l.cw,endTimestamp:h.E}))();class O{featureName=l.dz.name;constructor(t,r){this.contractWrapper=t,this.storage=r,this.events=new y.a(this.contractWrapper),this.encoder=new d.C(this.contractWrapper),this.interceptor=new A.C(this.contractWrapper),this.estimator=new y.G(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async getTotalCount(){return await this.contractWrapper.read("totalOffers",[])}async getAll(t){const r=await this.getTotalCount(),e=a.O$.from(t?.start||0).toNumber(),i=r.toNumber();if(0===i)throw new Error("No offers exist on the contract.");let n=[];n=(await(0,m.g)(e,i,((t,r)=>this.contractWrapper.read("getAllOffers",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapOffer(t))))}async getAllValid(t){const r=await this.getTotalCount(),e=a.O$.from(t?.start||0).toNumber(),i=r.toNumber();if(0===i)throw new Error("No offers exist on the contract.");let n=[];n=(await(0,m.g)(e,i,((t,r)=>this.contractWrapper.read("getAllValidOffers",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapOffer(t))))}async getOffer(t){const r=await this.contractWrapper.read("getOffer",[t]);return await this.mapOffer(r)}makeOffer=(0,g.f)((async t=>{const r=await k.parseAsync(t),e=await this.contractWrapper.getChainID(),a=(0,d.i)(r.currencyContractAddress)?l.aX[e].wrapped.address:r.currencyContractAddress,i=await(0,p.n)(this.contractWrapper.getProvider(),r.totalPrice,a),n=await this.contractWrapper.getCallOverrides();return await(0,u.s)(this.contractWrapper,i,a,n),g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"makeOffer",args:[{assetContract:r.assetContractAddress,tokenId:r.tokenId,quantity:r.quantity,currency:a,totalPrice:i,expirationTimestamp:r.endTimestamp}],parse:t=>({id:this.contractWrapper.parseLogs("NewOffer",t?.logs)[0].args.offerId,receipt:t})})}));cancelOffer=(0,g.f)((async t=>g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelOffer",args:[t]})));acceptOffer=(0,g.f)((async t=>{const r=await this.validateOffer(a.O$.from(t)),{valid:e,error:i}=await this.isStillValidOffer(r);if(!e)throw new Error(`Offer ${t} is no longer valid. ${i}`);const n=await this.contractWrapper.getCallOverrides()||{};return await(0,m.h)(this.contractWrapper,this.getAddress(),r.assetContractAddress,r.tokenId,await this.contractWrapper.getSignerAddress()),g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t],overrides:n})}));async validateOffer(t){try{return await this.getOffer(t)}catch(r){throw console.error(`Error getting the offer with id ${t}`),r}}async mapOffer(t){let r=W.UNSET;const e=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;switch(t.status){case 1:r=a.O$.from(t.expirationTimestamp).lt(e)?W.Expired:W.Active;break;case 2:r=W.Completed;break;case 3:r=W.Cancelled}return{id:t.offerId.toString(),offerorAddress:t.offeror,assetContractAddress:t.assetContract,currencyContractAddress:t.currency,tokenId:t.tokenId.toString(),quantity:t.quantity.toString(),totalPrice:t.totalPrice.toString(),currencyValue:await(0,d.a)(this.contractWrapper.getProvider(),t.currency,t.totalPrice),asset:await(0,f.c)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),endTimeInSeconds:a.O$.from(t.expirationTimestamp).toNumber(),status:r}}async isStillValidOffer(t){if(a.O$.from(Math.floor(Date.now()/1e3)).gt(t.endTimeInSeconds))return{valid:!1,error:`Offer with ID ${t.id} has expired`};const r=await this.contractWrapper.getChainID(),i=(0,d.i)(t.currencyContractAddress)?l.aX[r].wrapped.address:t.currencyContractAddress,n=this.contractWrapper.getProvider(),o=(await Promise.resolve().then(e.t.bind(e,49242,19))).default,s=new l.cs(n,i,o,{},this.storage);if((await s.read("balanceOf",[t.offerorAddress])).lt(t.totalPrice))return{valid:!1,error:`Offeror ${t.offerorAddress} doesn't have enough balance of token ${i}`};return(await s.read("allowance",[t.offerorAddress,this.getAddress()])).lt(t.totalPrice)?{valid:!1,error:`Offeror ${t.offerorAddress} hasn't approved enough amount of token ${i}`}:{valid:!0,error:""}}async applyFilter(t,r){let e=[...t];if(r){if(r.offeror){const t=await(0,l.aM)(r.offeror);e=e.filter((r=>r.offeror.toString().toLowerCase()===t?.toString().toLowerCase()))}if(r.tokenContract){const t=await(0,l.aM)(r.tokenContract);e=e.filter((r=>r.assetContract.toString().toLowerCase()===t?.toString().toLowerCase()))}void 0!==r.tokenId&&(e=e.filter((t=>t.tokenId.toString()===r?.tokenId?.toString())))}return r?.count&&r.count<e.length?e.slice(0,r.count):e}}}}]);
//# sourceMappingURL=8430.84d5003d.chunk.js.map