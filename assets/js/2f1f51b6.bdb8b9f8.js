"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5132],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),f=o,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||n;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={title:"Restore Wallet",permalink:"/Restore_Wallet/"},i=void 0,l={unversionedId:"auto/Restore_Wallet",id:"auto/Restore_Wallet",title:"Restore Wallet",description:"Upfront information: At the time this article was created the latest version of the DeFiChain app is 2.3.0. The article was updated for version 2.5.2.",source:"@site/docs/auto/Restore_Wallet.md",sourceDirName:"auto",slug:"/auto/Restore_Wallet",permalink:"/DeFiChain-Wiki/docs/auto/Restore_Wallet",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Restore_Wallet.md",tags:[],version:"current",lastUpdatedAt:1661697302,formattedLastUpdatedAt:"Aug 28, 2022",frontMatter:{title:"Restore Wallet",permalink:"/Restore_Wallet/"},sidebar:"tutorialSidebar",previous:{title:"Backup Wallet",permalink:"/DeFiChain-Wiki/docs/auto/Backup_Wallet"},next:{title:"Password Setting",permalink:"/DeFiChain-Wiki/docs/auto/Password_Setting"}},s={},c=[{value:"Introduction",id:"introduction",level:4},{value:"Scenario 1: Wallet created in 2.3.0 or higher, password is set, .dat file available",id:"scenario-1-wallet-created-in-230-or-higher-password-is-set-dat-file-available",level:4},{value:"Scenario 2: Wallet created before 2.3.0, recovery seed available, no password set",id:"scenario-2-wallet-created-before-230-recovery-seed-available-no-password-set",level:4},{value:"Scenario 3: Wallet created before 2.3.0, recovery seed available, password set",id:"scenario-3-wallet-created-before-230-recovery-seed-available-password-set",level:4},{value:"Scenario 4: Wallet created before 2.3.0, recovery seed available, password set, .txt backup available",id:"scenario-4-wallet-created-before-230-recovery-seed-available-password-set-txt-backup-available",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Upfront information: At the time this article was created the latest version of the DeFiChain app is 2.3.0. The article was updated for version 2.5.2."),(0,o.kt)("h4",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"There are several scenarios where you might want or need to restore your wallet. Examples are a complete computer reinstall with reinstall of DeFiChain app, an installation of the DeFiChain app on a second computer or a virtual machine for redundancy. The restore process has improved with version 2.3.0 and higher of the app and offers better guidance among different possibilities."),(0,o.kt)("p",null,"In general you can restore from a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},".dat file (which is the underlying file format the wallet data is stored in or backup to) or a"),(0,o.kt)("li",{parentName:"ul"},"recovery seed (aka mnemonic seed, seed phrase, 24 words, ...).")),(0,o.kt)("p",null,"If you restore from a .dat file be aware that this file needs to stay at it's location since the app is keeping to use it. The current .dat file the app is using is configured in the defi.conf file. If you're unsure which .dat file is currently used, please check defi.conf. Moving, changing or removing a .dat file that is currently used by the app causes problems."),(0,o.kt)("p",null,"The recovery seed is only for users who created the wallet in older app versions than 2.3.0. There are many problem with recovery seed and wallet encryption as described ",(0,o.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/docs/auto/Wallet_Encryption"},"here"),"."),(0,o.kt)("p",null,"It may take some minutes after the restore until your funds and assets are completely visible. You might miss receiving addresses after restore. You can add them manually if you stored them somewhere (described ",(0,o.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/docs/auto/Create_address#Display_an_old_address_again"},"here"),")."),(0,o.kt)("h4",{id:"scenario-1-wallet-created-in-230-or-higher-password-is-set-dat-file-available"},"Scenario 1: Wallet created in 2.3.0 or higher, password is set, .dat file available"),(0,o.kt)("p",null,'Select "Restore wallet from backup" from the app\'s start page. Keep in mind that your app needs to be synced before restoring can be started. Choose the .dat file you want to restore from.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'Note: If you do not see an option to "Restore wallet from backup" within the app, you can click the arrowed box icon in the upper left portion of the app. This will allow you to exit the current wallet and remove it from the app. The node restarts and you will now have an option to restore the wallet from backup.')),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7977).Z,width:"410",height:"314"})),(0,o.kt)("h4",{id:"scenario-2-wallet-created-before-230-recovery-seed-available-no-password-set"},"Scenario 2: Wallet created before 2.3.0, recovery seed available, no password set"),(0,o.kt)("p",null,'Select "Restore wallet from recovery seed". Enter the 24 words.'),(0,o.kt)("h4",{id:"scenario-3-wallet-created-before-230-recovery-seed-available-password-set"},"Scenario 3: Wallet created before 2.3.0, recovery seed available, password set"),(0,o.kt)("p",null,"Setting the password enables wallet encryption. As described ",(0,o.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/docs/auto/corrupt_salvage_failed"},"here"),", a full recovery from the seed phrase is no longer possible and a .dat file is required for full restore. The seed phrase works in general but it can only restore private keys, public keys and addresses that have been created ",(0,o.kt)("u",null,"before")," encryption was enabled, i.e. the password was set."),(0,o.kt)("p",null,"So if you have .dat file available restore from it as in scenario 1, if not cross your fingers and restore as in scenario 2."),(0,o.kt)("h4",{id:"scenario-4-wallet-created-before-230-recovery-seed-available-password-set-txt-backup-available"},"Scenario 4: Wallet created before 2.3.0, recovery seed available, password set, .txt backup available"),(0,o.kt)("p",null,"In older versions, backups of the wallet have been stored in .txt format by the app. These .txt backup are unencrypted and contain sensitive information such as your private keys. If you stored them somewhere remember to keep them very safe! Of course you need to remember your password in that case."),(0,o.kt)("p",null,"To restore you need to use the command line of the app. Type the command"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"importwallet "),(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"<complete path to your .txt file>"))),(0,o.kt)("p",null,"so e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"importwallet c:\\Users\\toni\\documents\\defi_backup.txt")))}p.isMDXComponent=!0},7977:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Remove_wallet-892ec39b8f77160ef45c61810b9adba8.png"}}]);