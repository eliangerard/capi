"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5295],{41140:function(t,e,r){r.d(e,{S:function(){return s}});var a=r(17249),n=r(9596);class s{get chainId(){return this._chainId}constructor(t,e,r){var s=this;(0,a._)(this,"contractWrapper",void 0),(0,a._)(this,"storage",void 0),(0,a._)(this,"erc1155",void 0),(0,a._)(this,"_chainId",void 0),(0,a._)(this,"transfer",(0,n.cS)(async function(t,e,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return s.erc1155.transfer.prepare(t,e,r,a)})),(0,a._)(this,"setApprovalForAll",(0,n.cS)(async(t,e)=>this.erc1155.setApprovalForAll.prepare(t,e))),(0,a._)(this,"airdrop",(0,n.cS)(async function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0];return s.erc1155.airdrop.prepare(t,e,r)})),this.contractWrapper=t,this.storage=e,this.erc1155=new n.aC(this.contractWrapper,this.storage,r),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,e){return this.erc1155.balanceOf(t,e)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,e){return this.erc1155.isApproved(t,e)}}},34413:function(t,e,r){r.r(e),r.d(e,{Pack:function(){return b}});var a=r(17249),n=r(9596),s=r(41140),o=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),i=r(27761),c=r(2593),d=r(61744),p=r(9279),l=r(1604);r(13550),r(62822),r(71770),r(96200),r(54098),r(2162),r(64063);let u=l.z.object({contractAddress:n.aa}),h=u.extend({quantity:a.A}),y=u.extend({tokenId:n.a7}),g=u.extend({tokenId:n.a7,quantity:n.a7}),w=h.omit({quantity:!0}).extend({quantityPerReward:a.A}),m=g.omit({quantity:!0}).extend({quantityPerReward:n.a7}),f=w.extend({totalRewards:n.a7.default("1")}),v=m.extend({totalRewards:n.a7.default("1")});l.z.object({erc20Rewards:l.z.array(w).default([]),erc721Rewards:l.z.array(y).default([]),erc1155Rewards:l.z.array(m).default([])});let k=l.z.object({erc20Rewards:l.z.array(f).default([]),erc721Rewards:l.z.array(y).default([]),erc1155Rewards:l.z.array(v).default([])}),W=k.extend({packMetadata:a.N,rewardsPerPack:n.a7.default("1"),openStartTime:n.ab.default(new Date)});class A{constructor(t,e,r,s,o){var d=this;let p=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new n.c_(t,e,i,s);(0,a._)(this,"featureName",n.da.name),(0,a._)(this,"contractWrapper",void 0),(0,a._)(this,"storage",void 0),(0,a._)(this,"chainId",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"open",(0,n.cS)(async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5;return n.aT.fromContractWrapper({contractWrapper:d.contractWrapper,method:"openPack",args:[t,e],overrides:{gasLimit:r},parse:t=>{let e=c.O$.from(0);try{let r=d.contractWrapper.parseLogs("PackOpenRequested",t?.logs);e=r[0].args.requestId}catch(t){}return{receipt:t,id:e}}})})),(0,a._)(this,"claimRewards",(0,n.cS)(async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e5;return n.aT.fromContractWrapper({contractWrapper:d.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:t},parse:async t=>{let e=d.contractWrapper.parseLogs("PackOpened",t?.logs);if(0===e.length)throw Error("PackOpened event not found");let r=e[0].args.rewardUnitsDistributed;return await d.parseRewards(r)}})})),this.contractWrapper=p,this.storage=r,this.chainId=o,this.events=new n.aO(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async parseRewards(t){let e=[],r=[],a=[];for(let s of t)switch(s.tokenType){case 0:{let t=await (0,n.bV)(this.contractWrapper.getProvider(),s.assetContract);e.push({contractAddress:s.assetContract,quantityPerReward:d.formatUnits(s.totalAmount,t.decimals).toString()});break}case 1:r.push({contractAddress:s.assetContract,tokenId:s.tokenId.toString()});break;case 2:a.push({contractAddress:s.assetContract,tokenId:s.tokenId.toString(),quantityPerReward:s.totalAmount.toString()})}return{erc20Rewards:e,erc721Rewards:r,erc1155Rewards:a}}async addPackOpenEventListener(t){return this.events.addEventListener("PackOpened",async e=>{t(e.data.packId.toString(),e.data.opener,await this.parseRewards(e.data.rewardUnitsDistributed))})}async canClaimRewards(t){let e=await (0,n.cT)(t||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.readContract.canClaimRewards(e)}async openAndClaim(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5,a=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[t,e,r],{gasLimit:c.O$.from(5e5)}),n=c.O$.from(0);try{let t=this.contractWrapper.parseLogs("PackOpenRequested",a?.logs);n=t[0].args.requestId}catch(t){}return{receipt:a,id:n}}async getLinkBalance(){return this.getLinkContract().balanceOf(this.contractWrapper.readContract.address)}async transferLink(t){await this.getLinkContract().transfer(this.contractWrapper.readContract.address,t)}getLinkContract(){let t=n.ch[this.chainId];if(!t)throw Error(`No LINK token address found for chainId ${this.chainId}`);let e=new n.c_(this.contractWrapper.getSignerOrProvider(),t,o,this.contractWrapper.options);return new n.ao(e,this.storage,this.chainId)}}class b extends s.S{get vrf(){return(0,n.bM)(this._vrf,n.da)}constructor(t,e,r){var s;let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.c_(t,e,i,o.gasless&&"openzeppelin"in o.gasless?{...o,gasless:{openzeppelin:{...o.gasless.openzeppelin,useEOAForwarder:!0}}}:o);super(p,r,c),s=this,(0,a._)(this,"abi",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"app",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"owner",void 0),(0,a._)(this,"_vrf",void 0),(0,a._)(this,"create",(0,n.cS)(async t=>{let e=await this.contractWrapper.getSignerAddress();return this.createTo.prepare(e,t)})),(0,a._)(this,"addPackContents",(0,n.cS)(async(t,e)=>{let r=await this.contractWrapper.getSignerAddress(),a=await k.parseAsync(e),{contents:s,numOfRewardUnits:o}=await this.toPackContentArgs(a);return n.aT.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addPackContents",args:[t,s,o,r],parse:t=>{let e=this.contractWrapper.parseLogs("PackUpdated",t?.logs);if(0===e.length)throw Error("PackUpdated event not found");let r=e[0].args.packId;return{id:r,receipt:t,data:()=>this.erc1155.get(r)}}})})),(0,a._)(this,"createTo",(0,n.cS)(async(t,e)=>{let r=await (0,n.d6)(e.packMetadata,this.storage),a=await W.parseAsync(e),{erc20Rewards:s,erc721Rewards:o,erc1155Rewards:i}=a,{contents:c,numOfRewardUnits:d}=await this.toPackContentArgs({erc20Rewards:s,erc721Rewards:o,erc1155Rewards:i});return n.aT.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createPack",args:[c,d,r,a.openStartTime,a.rewardsPerPack,await (0,n.cT)(t)],parse:t=>{let e=this.contractWrapper.parseLogs("PackCreated",t?.logs);if(0===e.length)throw Error("PackCreated event not found");let r=e[0].args.packId;return{id:r,receipt:t,data:()=>this.erc1155.get(r)}}})})),(0,a._)(this,"open",(0,n.cS)(async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5;if(s._vrf)throw Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");return n.aT.fromContractWrapper({contractWrapper:s.contractWrapper,method:"openPack",args:[t,e],overrides:{gasLimit:r},parse:async t=>{let e=s.contractWrapper.parseLogs("PackOpened",t?.logs);if(0===e.length)throw Error("PackOpened event not found");let r=e[0].args.rewardUnitsDistributed,a=[],o=[],i=[];for(let t of r)switch(t.tokenType){case 0:{let e=await (0,n.bV)(s.contractWrapper.getProvider(),t.assetContract);a.push({contractAddress:t.assetContract,quantityPerReward:d.formatUnits(t.totalAmount,e.decimals).toString()});break}case 1:o.push({contractAddress:t.assetContract,tokenId:t.tokenId.toString()});break;case 2:i.push({contractAddress:t.assetContract,tokenId:t.tokenId.toString(),quantityPerReward:t.totalAmount.toString()})}return{erc20Rewards:a,erc721Rewards:o,erc1155Rewards:i}}})})),this.abi=n.e.parse(i||[]),this.metadata=new n.ah(this.contractWrapper,n.db,this.storage),this.app=new n.aV(this.contractWrapper,this.metadata,this.storage),this.roles=new n.ai(this.contractWrapper,b.contractRoles),this.royalties=new n.aj(this.contractWrapper,this.metadata),this.encoder=new n.ag(this.contractWrapper),this.estimator=new n.aN(this.contractWrapper),this.events=new n.aO(this.contractWrapper),this.interceptor=new n.aP(this.contractWrapper),this.owner=new n.aS(this.contractWrapper),this._vrf=this.detectVrf()}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t),this._vrf?.onNetworkUpdated(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,n.bp)("transfer"),p.d);return!t}async getPackContents(t){let{contents:e,perUnitAmounts:r}=await this.contractWrapper.readContract.getPackContents(t),a=[],s=[],o=[];for(let t=0;t<e.length;t++){let i=e[t],p=r[t];switch(i.tokenType){case 0:{let t=await (0,n.bV)(this.contractWrapper.getProvider(),i.assetContract),e=d.formatUnits(p,t.decimals),r=d.formatUnits(c.O$.from(i.totalAmount).div(p),t.decimals);a.push({contractAddress:i.assetContract,quantityPerReward:e,totalRewards:r});break}case 1:s.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString()});break;case 2:o.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString(),quantityPerReward:p.toString(),totalRewards:c.O$.from(i.totalAmount).div(p).toString()})}}return{erc20Rewards:a,erc721Rewards:s,erc1155Rewards:o}}async toPackContentArgs(t){let e=[],r=[],{erc20Rewards:a,erc721Rewards:s,erc1155Rewards:o}=t,i=this.contractWrapper.getProvider(),d=await this.contractWrapper.getSignerAddress();for(let t of a){let a=await (0,n.bU)(i,t.quantityPerReward,t.contractAddress),s=a.mul(t.totalRewards),o=await (0,n.bZ)(this.contractWrapper,t.contractAddress,s);if(!o)throw Error(`ERC20 token with contract address "${t.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${t.contractAddress}").setAllowance("${this.getAddress()}", ${s});

`);r.push(t.totalRewards),e.push({assetContract:t.contractAddress,tokenType:0,totalAmount:s,tokenId:0})}for(let t of s){let a=await (0,n.cW)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,d);if(!a)throw Error(`ERC721 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${t.contractAddress}").setApprovalForToken("${this.getAddress()}", ${t.tokenId});

`);r.push("1"),e.push({assetContract:t.contractAddress,tokenType:1,totalAmount:1,tokenId:t.tokenId})}for(let t of o){let a=await (0,n.cW)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,d);if(!a)throw Error(`ERC1155 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${t.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);r.push(t.totalRewards),e.push({assetContract:t.contractAddress,tokenType:2,totalAmount:c.O$.from(t.quantityPerReward).mul(c.O$.from(t.totalRewards)),tokenId:t.tokenId})}return{contents:e,numOfRewardUnits:r}}async prepare(t,e,r){return n.aT.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}detectVrf(){if((0,n.bN)(this.contractWrapper,"PackVRF"))return new A(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.readContract.address,this.storage,this.contractWrapper.options,this.chainId)}}(0,a._)(b,"contractRoles",["admin","minter","asset","transfer"])}}]);