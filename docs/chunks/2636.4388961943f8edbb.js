"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2636],{32636:function(t,r,e){e.r(r),e.d(r,{MarketplaceV3:function(){return a}});var i=e(17249),s=e(9596);e(13550),e(62822),e(71770),e(96200),e(54098),e(2162),e(64063);class a{get directListings(){return(0,s.bM)(this.detectDirectListings(),s.d2)}get englishAuctions(){return(0,s.bM)(this.detectEnglishAuctions(),s.d3)}get offers(){return(0,s.bM)(this.detectOffers(),s.d4)}get chainId(){return this._chainId}constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.c_(t,r,c,n);(0,i._)(this,"abi",void 0),(0,i._)(this,"contractWrapper",void 0),(0,i._)(this,"storage",void 0),(0,i._)(this,"encoder",void 0),(0,i._)(this,"events",void 0),(0,i._)(this,"estimator",void 0),(0,i._)(this,"platformFees",void 0),(0,i._)(this,"metadata",void 0),(0,i._)(this,"app",void 0),(0,i._)(this,"roles",void 0),(0,i._)(this,"interceptor",void 0),(0,i._)(this,"_chainId",void 0),this._chainId=o,this.abi=s.e.parse(c||[]),this.contractWrapper=h,this.storage=e,this.metadata=new s.ah(this.contractWrapper,s.d1,this.storage),this.app=new s.aV(this.contractWrapper,this.metadata,this.storage),this.roles=new s.ai(this.contractWrapper,a.contractRoles),this.encoder=new s.ag(this.contractWrapper),this.estimator=new s.aN(this.contractWrapper),this.events=new s.aO(this.contractWrapper),this.platformFees=new s.aQ(this.contractWrapper),this.interceptor=new s.aP(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async prepare(t,r,e){return s.aT.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectDirectListings(){if((0,s.bN)(this.contractWrapper,"DirectListings"))return new s.aJ(this.contractWrapper,this.storage)}detectEnglishAuctions(){if((0,s.bN)(this.contractWrapper,"EnglishAuctions"))return new s.aK(this.contractWrapper,this.storage)}detectOffers(){if((0,s.bN)(this.contractWrapper,"Offers"))return new s.aL(this.contractWrapper,this.storage)}}(0,i._)(a,"contractRoles",["admin","lister","asset"])}}]);