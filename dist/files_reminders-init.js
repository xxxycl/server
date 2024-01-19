/*! For license information please see files_reminders-init.js.LICENSE.txt */
(()=>{var t,e,n,r={61199:(t,e,n)=>{"use strict";var r=n(5656),i=n(31352);const s="set-reminder-menu",o=new r.p$({id:s,displayName:()=>(0,i.Iu)("files","Set reminder"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" /></svg>',enabled:()=>!0,exec:async()=>null,order:20});var a,d=n(64024),l=n(80351),u=n.n(l);!function(t){t.LaterToday="later-today",t.Tomorrow="tomorrow",t.ThisWeekend="this-weekend",t.NextWeek="next-week"}(a||(a={}));const c=t=>({[a.LaterToday]:()=>{const t=u()(),e=u()().startOf("day").add(18,"hour"),n=e.clone().subtract(1,"hour");return t.isSameOrAfter(n)?null:e.toDate()},[a.Tomorrow]:()=>u()().add(1,"day").startOf("day").add(8,"hour").toDate(),[a.ThisWeekend]:()=>{const t=u()();return[5,6,7].includes(t.isoWeekday())?null:u()().startOf("isoWeek").add(5,"day").add(8,"hour").toDate()},[a.NextWeek]:()=>7===u()().isoWeekday()?null:u()().startOf("isoWeek").add(1,"week").add(8,"hour").toDate()}[t]()),m=()=>{const t=u()().get("hour");return u()().startOf("day").add(t+2,"hour").toDate()},p=t=>{let e={hour:"numeric",minute:"2-digit"};const n=u()(t),r=u()();return n.isSame(r,"date")||(e={...e,weekday:"short"}),n.isSame(r,"week")||(e={...e,month:"short",day:"numeric"}),t.toLocaleString((0,i.aj)(),e)},h=t=>t.toLocaleString((0,i.aj)(),{weekday:"long",hour:"numeric",minute:"2-digit",month:"long",day:"numeric"}),f=(0,n(17499).IY)().setApp("files_reminders").detectUser().build();var g=n(93664),b=n(79753);const v=async(t,e)=>{const n=(0,b.generateOcsUrl)("/apps/files_reminders/api/v1/{fileId}",{fileId:t});return(await g.Z.put(n,{dueDate:e.toISOString()})).data.ocs.data};var w=n(93379),y=n.n(w),A=n(7795),j=n.n(A),N=n(90569),x=n.n(N),_=n(3565),E=n.n(_),C=n(19216),D=n.n(C),k=n(44589),I=n.n(k),T=n(58362),S={};S.styleTagTransform=I(),S.setAttributes=E(),S.insert=x().bind(null,"head"),S.domAPI=j(),S.insertStyleElement=D(),y()(T.Z,S),T.Z&&T.Z.locals&&T.Z.locals;const O={dateTimePreset:a.LaterToday,label:(0,i.Iu)("files_reminders","Later today"),ariaLabel:(0,i.Iu)("files_reminders","Set reminder for later today"),dateString:"",verboseDateString:""},P={dateTimePreset:a.Tomorrow,label:(0,i.Iu)("files_reminders","Tomorrow"),ariaLabel:(0,i.Iu)("files_reminders","Set reminder for tomorrow"),dateString:"",verboseDateString:""},L={dateTimePreset:a.ThisWeekend,label:(0,i.Iu)("files_reminders","This weekend"),ariaLabel:(0,i.Iu)("files_reminders","Set reminder for this weekend"),dateString:"",verboseDateString:""},$={dateTimePreset:a.NextWeek,label:(0,i.Iu)("files_reminders","Next week"),ariaLabel:(0,i.Iu)("files_reminders","Set reminder for next week"),dateString:"",verboseDateString:""};[O,P,L,$].forEach((t=>{const e=c(t.dateTimePreset);e&&(t.dateString=p(e),t.verboseDateString=h(e)+setInterval((()=>{const e=c(t.dateTimePreset);e&&(t.dateString=p(e),t.verboseDateString=h(e))}),18e5))}));const R=[O,P,L,$].map((t=>new r.p$({id:`set-reminder-${t.dateTimePreset}`,displayName:()=>`${t.label} – ${t.dateString}`,title:()=>`${t.ariaLabel} – ${t.verboseDateString}`,iconSvgInline:()=>"<svg></svg>",enabled:()=>Boolean(c(t.dateTimePreset)),parent:s,async exec(e){if(!e.fileid)return f.error("Failed to set reminder, missing file id"),(0,d.x2)((0,i.Iu)("files_reminders","Failed to set reminder")),null;try{await v(e.fileid,c(t.dateTimePreset)),(0,d.s$)((0,i.Iu)("files_reminders",'Reminder set for "{fileName}"',{fileName:e.basename}))}catch(t){f.error("Failed to set reminder",{error:t}),(0,d.x2)((0,i.Iu)("files_reminders","Failed to set reminder"))}return null},order:21})));var F=n(20144),B=n(74628),V=n(97947),M=n(65027),z=n(52740),U=n(6156);const W=F.default.extend({name:"SetCustomReminderModal",components:{NcButton:B.Z,NcDateTime:V.Z,NcDateTimePickerNative:M.Z,NcModal:z.Z,NcNoteCard:U.Z},data:()=>({node:void 0,opened:!1,isValid:!0,customDueDate:m(),nowDate:new Date}),computed:{fileId(){return this.node.fileid},fileName(){return this.node.basename},title(){return(0,i.Iu)("files_reminders",'Set reminder for "{fileName}"',{fileName:this.fileName})},label:()=>(0,i.Iu)("files_reminders","Set reminder at custom date & time"),clearAriaLabel:()=>(0,i.Iu)("files_reminders","Clear reminder")},methods:{t:i.Iu,getDateString:p,async open(t){this.node=t,this.isValid=!0,this.opened=!0,this.customDueDate=m(),this.nowDate=new Date,setTimeout((()=>{const t=document.getElementById("set-custom-reminder");t.focus(),t.showPicker()}),300)},async setCustom(){if(this.customDueDate instanceof Date&&!isNaN(this.customDueDate))try{await v(this.fileId,this.customDueDate),(0,d.s$)((0,i.Iu)("files_reminders",'Reminder set for "{fileName}"',{fileName:this.fileName})),this.onClose()}catch(t){f.error("Failed to set reminder",{error:t}),(0,d.x2)((0,i.Iu)("files_reminders","Failed to set reminder"))}else(0,d.x2)((0,i.Iu)("files_reminders","Please choose a valid date & time"))},onClose(){this.opened=!1,this.$emit("close")},onInput(){const t=document.getElementById("set-custom-reminder");this.isValid=t.checkValidity()}}});var Z=n(34647),G={};G.styleTagTransform=I(),G.setAttributes=E(),G.insert=x().bind(null,"head"),G.domAPI=j(),G.insertStyleElement=D(),y()(Z.Z,G),Z.Z&&Z.Z.locals&&Z.Z.locals;const H=(0,n(51900).Z)(W,(function(){var t=this,e=t._self._c;return t._self._setupProxy,t.opened?e("NcModal",{attrs:{"out-transition":!0,size:"small"},on:{close:t.onClose}},[e("form",{staticClass:"custom-reminder-modal",on:{submit:function(e){return e.preventDefault(),t.setCustom.apply(null,arguments)}}},[e("h2",{staticClass:"custom-reminder-modal__title"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),t._v(" "),e("NcDateTimePickerNative",{attrs:{id:"set-custom-reminder",label:t.label,min:t.nowDate,required:!0,type:"datetime-local"},on:{input:t.onInput},model:{value:t.customDueDate,callback:function(e){t.customDueDate=e},expression:"customDueDate"}}),t._v(" "),t.isValid?e("NcNoteCard",{attrs:{type:"info"}},[t._v("\n\t\t\t"+t._s(t.t("files_reminders","We will remind you of this file"))+"\n\t\t\t"),e("NcDateTime",{attrs:{timestamp:t.customDueDate}})],1):e("NcNoteCard",{attrs:{type:"error"}},[t._v("\n\t\t\t"+t._s(t.t("files_reminders","Please choose a valid date & time"))+"\n\t\t")]),t._v(" "),e("div",{staticClass:"custom-reminder-modal__buttons"},[e("NcButton",{on:{click:t.onClose}},[t._v("\n\t\t\t\t"+t._s(t.t("files_reminders","Cancel"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{attrs:{disabled:!t.isValid,"native-type":"submit",type:"primary"}},[t._v("\n\t\t\t\t"+t._s(t.t("files_reminders","Set reminder"))+"\n\t\t\t")])],1)],1)]):t._e()}),[],!1,null,"97db5bfc",null).exports,q=F.default.extend(H),Y=document.createElement("div");Y.id="set-custom-reminder-modal",document.body.appendChild(Y);const K=new q({name:"SetCustomReminderModal",el:Y}),J=new r.p$({id:"set-reminder-custom",displayName:()=>(0,i.Iu)("files","Set custom reminder"),title:()=>(0,i.Iu)("files_reminders","Set reminder at custom date & time"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-clock" viewBox="0 0 24 24"><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>',enabled:()=>!0,parent:s,exec:async t=>((async t=>{K.open(t),new Promise((t=>{K.$on("close",t)}))})(t),null),order:22});(0,r.p4)(o),(0,r.p4)(J),R.forEach((t=>(0,r.p4)(t)))},58362:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(87537),i=n.n(r),s=n(23645),o=n.n(s)()(i());o.push([t.id,'.files-list__row-action-set-reminder-custom{margin-top:13px;position:relative}.files-list__row-action-set-reminder-custom::before{content:"";margin:3px 10px 3px 15px;border-bottom:1px solid var(--color-border-dark);cursor:default;display:flex;height:0;position:absolute;left:0;right:0;top:-10px}',"",{version:3,sources:["webpack://./apps/files_reminders/src/actions/setReminderSuggestionActions.scss"],names:[],mappings:"AAuBA,4CACC,eAAA,CACA,iBAAA,CAEA,oDACC,UAAA,CACA,wBAAA,CACA,gDAAA,CACA,cAAA,CACA,YAAA,CACA,QAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,SAAA",sourcesContent:['/**\n * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n // TODO: remove when/if the actions API supports a separator\n // This the last preset action, so we need to add a separator\n.files-list__row-action-set-reminder-custom {\n\tmargin-top: 13px;\n\tposition: relative;\n\n\t&::before {\n\t\tcontent: "";\n\t\tmargin: 3px 10px 3px 15px;\n\t\tborder-bottom: 1px solid var(--color-border-dark);\n\t\tcursor: default;\n\t\tdisplay: flex;\n\t\theight: 0;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: -10px;\n\t}\n}\n'],sourceRoot:""}]);const a=o},34647:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(87537),i=n.n(r),s=n(23645),o=n.n(s)()(i());o.push([t.id,".custom-reminder-modal[data-v-97db5bfc]{margin:30px}.custom-reminder-modal__title[data-v-97db5bfc]{font-size:16px;line-height:2em}.custom-reminder-modal__buttons[data-v-97db5bfc]{display:flex;justify-content:flex-end;margin-top:30px}.custom-reminder-modal__buttons button[data-v-97db5bfc]{margin-left:10px}","",{version:3,sources:["webpack://./apps/files_reminders/src/components/SetCustomReminderModal.vue"],names:[],mappings:"AACA,wCACC,WAAA,CAEA,+CACC,cAAA,CACA,eAAA,CAGD,iDACC,YAAA,CACA,wBAAA,CACA,eAAA,CAEA,wDACC,gBAAA",sourcesContent:["\n.custom-reminder-modal {\n\tmargin: 30px;\n\n\t&__title {\n\t\tfont-size: 16px;\n\t\tline-height: 2em;\n\t}\n\n\t&__buttons {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tmargin-top: 30px;\n\n\t\tbutton {\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const a=o},46700:(t,e,n)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=s,t.exports=i,i.id=46700},5656:(t,e,n)=>{"use strict";n.d(e,{RL:()=>$,Tv:()=>_,_o:()=>S,h7:()=>N,p$:()=>g,p4:()=>b,pC:()=>L,rp:()=>P,sS:()=>h,tB:()=>x});var r=n(77958),i=n(17499),s=n(31352),o=n(62520),a=n(65358),d=n(79753),l=n(14596);const u=null===(c=(0,r.ts)())?(0,i.IY)().setApp("files").build():(0,i.IY)().setApp("files").setUid(c.uid).build();var c;const m=["B","KB","MB","GB","TB","PB"],p=["B","KiB","MiB","GiB","TiB","PiB"];function h(t,e=!1,n=!1,r=!1){n=n&&!r,"string"==typeof t&&(t=Number(t));let i=t>0?Math.floor(Math.log(t)/Math.log(r?1e3:1024)):0;i=Math.min((n?p.length:m.length)-1,i);const o=n?p[i]:m[i];let a=(t/Math.pow(r?1e3:1024,i)).toFixed(1);return!0===e&&0===i?("0.0"!==a?"< 1 ":"0 ")+(n?p[1]:m[1]):(a=i<2?parseFloat(a).toFixed(0):parseFloat(a).toLocaleString((0,s.aj)()),a+" "+o)}var f=(t=>(t.DEFAULT="default",t.HIDDEN="hidden",t))(f||{});class g{_action;constructor(t){this.validateAction(t),this._action=t}get id(){return this._action.id}get displayName(){return this._action.displayName}get title(){return this._action.title}get iconSvgInline(){return this._action.iconSvgInline}get enabled(){return this._action.enabled}get exec(){return this._action.exec}get execBatch(){return this._action.execBatch}get order(){return this._action.order}get parent(){return this._action.parent}get default(){return this._action.default}get inline(){return this._action.inline}get renderInline(){return this._action.renderInline}validateAction(t){if(!t.id||"string"!=typeof t.id)throw new Error("Invalid id");if(!t.displayName||"function"!=typeof t.displayName)throw new Error("Invalid displayName function");if("title"in t&&"function"!=typeof t.title)throw new Error("Invalid title function");if(!t.iconSvgInline||"function"!=typeof t.iconSvgInline)throw new Error("Invalid iconSvgInline function");if(!t.exec||"function"!=typeof t.exec)throw new Error("Invalid exec function");if("enabled"in t&&"function"!=typeof t.enabled)throw new Error("Invalid enabled function");if("execBatch"in t&&"function"!=typeof t.execBatch)throw new Error("Invalid execBatch function");if("order"in t&&"number"!=typeof t.order)throw new Error("Invalid order");if("parent"in t&&"string"!=typeof t.parent)throw new Error("Invalid parent");if(t.default&&!Object.values(f).includes(t.default))throw new Error("Invalid default");if("inline"in t&&"function"!=typeof t.inline)throw new Error("Invalid inline function");if("renderInline"in t&&"function"!=typeof t.renderInline)throw new Error("Invalid renderInline function")}}const b=function(t){typeof window._nc_fileactions>"u"&&(window._nc_fileactions=[],u.debug("FileActions initialized")),window._nc_fileactions.find((e=>e.id===t.id))?u.error(`FileAction ${t.id} already registered`,{action:t}):window._nc_fileactions.push(t)};var v=(t=>(t[t.NONE=0]="NONE",t[t.CREATE=4]="CREATE",t[t.READ=1]="READ",t[t.UPDATE=2]="UPDATE",t[t.DELETE=8]="DELETE",t[t.SHARE=16]="SHARE",t[t.ALL=31]="ALL",t))(v||{});const w=["d:getcontentlength","d:getcontenttype","d:getetag","d:getlastmodified","d:quota-available-bytes","d:resourcetype","nc:has-preview","nc:is-encrypted","nc:mount-type","nc:share-attributes","oc:comments-unread","oc:favorite","oc:fileid","oc:owner-display-name","oc:owner-id","oc:permissions","oc:share-types","oc:size","ocs:share-permissions"],y={d:"DAV:",nc:"http://nextcloud.org/ns",oc:"http://owncloud.org/ns",ocs:"http://open-collaboration-services.org/ns"},A=function(){return typeof window._nc_dav_properties>"u"&&(window._nc_dav_properties=[...w]),window._nc_dav_properties.map((t=>`<${t} />`)).join(" ")},j=function(){return typeof window._nc_dav_namespaces>"u"&&(window._nc_dav_namespaces={...y}),Object.keys(window._nc_dav_namespaces).map((t=>`xmlns:${t}="${window._nc_dav_namespaces?.[t]}"`)).join(" ")},N=function(){return`<?xml version="1.0"?>\n\t\t<d:propfind ${j()}>\n\t\t\t<d:prop>\n\t\t\t\t${A()}\n\t\t\t</d:prop>\n\t\t</d:propfind>`},x=function(t){return`<?xml version="1.0" encoding="UTF-8"?>\n<d:searchrequest ${j()}\n\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns">\n\t<d:basicsearch>\n\t\t<d:select>\n\t\t\t<d:prop>\n\t\t\t\t${A()}\n\t\t\t</d:prop>\n\t\t</d:select>\n\t\t<d:from>\n\t\t\t<d:scope>\n\t\t\t\t<d:href>/files/${(0,r.ts)()?.uid}/</d:href>\n\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t</d:scope>\n\t\t</d:from>\n\t\t<d:where>\n\t\t\t<d:and>\n\t\t\t\t<d:or>\n\t\t\t\t\t<d:not>\n\t\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t<d:getcontenttype/>\n\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t<d:literal>httpd/unix-directory</d:literal>\n\t\t\t\t\t\t</d:eq>\n\t\t\t\t\t</d:not>\n\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t<oc:size/>\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t<d:literal>0</d:literal>\n\t\t\t\t\t</d:eq>\n\t\t\t\t</d:or>\n\t\t\t\t<d:gt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified/>\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>${t}</d:literal>\n\t\t\t\t</d:gt>\n\t\t\t</d:and>\n\t\t</d:where>\n\t\t<d:orderby>\n\t\t\t<d:order>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<d:getlastmodified/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:descending/>\n\t\t\t</d:order>\n\t\t</d:orderby>\n\t\t<d:limit>\n\t\t\t<d:nresults>100</d:nresults>\n\t\t\t<ns:firstresult>0</ns:firstresult>\n\t\t</d:limit>\n\t</d:basicsearch>\n</d:searchrequest>`};var _=(t=>(t.Folder="folder",t.File="file",t))(_||{});const E=function(t,e){return null!==t.match(e)},C=(t,e)=>{if(t.id&&"number"!=typeof t.id)throw new Error("Invalid id type of value");if(!t.source)throw new Error("Missing mandatory source");try{new URL(t.source)}catch{throw new Error("Invalid source format, source must be a valid URL")}if(!t.source.startsWith("http"))throw new Error("Invalid source format, only http(s) is supported");if(t.mtime&&!(t.mtime instanceof Date))throw new Error("Invalid mtime type");if(t.crtime&&!(t.crtime instanceof Date))throw new Error("Invalid crtime type");if(!t.mime||"string"!=typeof t.mime||!t.mime.match(/^[-\w.]+\/[-+\w.]+$/gi))throw new Error("Missing or invalid mandatory mime");if("size"in t&&"number"!=typeof t.size&&void 0!==t.size)throw new Error("Invalid size type");if("permissions"in t&&void 0!==t.permissions&&!("number"==typeof t.permissions&&t.permissions>=v.NONE&&t.permissions<=v.ALL))throw new Error("Invalid permissions");if(t.owner&&null!==t.owner&&"string"!=typeof t.owner)throw new Error("Invalid owner type");if(t.attributes&&"object"!=typeof t.attributes)throw new Error("Invalid attributes type");if(t.root&&"string"!=typeof t.root)throw new Error("Invalid root type");if(t.root&&!t.root.startsWith("/"))throw new Error("Root must start with a leading slash");if(t.root&&!t.source.includes(t.root))throw new Error("Root must be part of the source");if(t.root&&E(t.source,e)){const n=t.source.match(e)[0];if(!t.source.includes((0,o.join)(n,t.root)))throw new Error("The root must be relative to the service. e.g /files/emma")}if(t.status&&!Object.values(D).includes(t.status))throw new Error("Status must be a valid NodeStatus")};var D=(t=>(t.NEW="new",t.FAILED="failed",t.LOADING="loading",t.LOCKED="locked",t))(D||{});class k{_data;_attributes;_knownDavService=/(remote|public)\.php\/(web)?dav/i;constructor(t,e){C(t,e||this._knownDavService),this._data=t;const n={set:(t,e,n)=>(this.updateMtime(),Reflect.set(t,e,n)),deleteProperty:(t,e)=>(this.updateMtime(),Reflect.deleteProperty(t,e))};this._attributes=new Proxy(t.attributes||{},n),delete this._data.attributes,e&&(this._knownDavService=e)}get source(){return this._data.source.replace(/\/$/i,"")}get encodedSource(){const{origin:t}=new URL(this.source);return t+(0,a.Ec)(this.source.slice(t.length))}get basename(){return(0,o.basename)(this.source)}get extension(){return(0,o.extname)(this.source)}get dirname(){if(this.root){let t=this.source;this.isDavRessource&&(t=t.split(this._knownDavService).pop());const e=t.indexOf(this.root),n=this.root.replace(/\/$/,"");return(0,o.dirname)(t.slice(e+n.length)||"/")}const t=new URL(this.source);return(0,o.dirname)(t.pathname)}get mime(){return this._data.mime}get mtime(){return this._data.mtime}get crtime(){return this._data.crtime}get size(){return this._data.size}get attributes(){return this._attributes}get permissions(){return null!==this.owner||this.isDavRessource?void 0!==this._data.permissions?this._data.permissions:v.NONE:v.READ}get owner(){return this.isDavRessource?this._data.owner:null}get isDavRessource(){return E(this.source,this._knownDavService)}get root(){return this._data.root?this._data.root.replace(/^(.+)\/$/,"$1"):this.isDavRessource&&(0,o.dirname)(this.source).split(this._knownDavService).pop()||null}get path(){if(this.root){let t=this.source;this.isDavRessource&&(t=t.split(this._knownDavService).pop());const e=t.indexOf(this.root),n=this.root.replace(/\/$/,"");return t.slice(e+n.length)||"/"}return(this.dirname+"/"+this.basename).replace(/\/\//g,"/")}get fileid(){return this._data?.id||this.attributes?.fileid}get status(){return this._data?.status}set status(t){this._data.status=t}move(t){C({...this._data,source:t},this._knownDavService),this._data.source=t,this.updateMtime()}rename(t){if(t.includes("/"))throw new Error("Invalid basename");this.move((0,o.dirname)(this.source)+"/"+t)}updateMtime(){this._data.mtime&&(this._data.mtime=new Date)}}class I extends k{get type(){return _.File}}class T extends k{constructor(t){super({...t,mime:"httpd/unix-directory"})}get type(){return _.Folder}get extension(){return null}get mime(){return"httpd/unix-directory"}}const S=`/files/${(0,r.ts)()?.uid}`,O=(0,d.generateRemoteUrl)("dav"),P=function(t=O,e={}){const n=(0,l.eI)(t,{headers:e});function i(t){n.setHeaders({...e,"X-Requested-With":"XMLHttpRequest",requesttoken:t??""})}return(0,r._S)(i),i((0,r.IH)()),(0,l.lD)().patch("fetch",((t,e)=>{const n=e.headers;return n?.method&&(e.method=n.method,delete n.method),fetch(t,e)})),n},L=async(t,e="/",n=S)=>(await t.getDirectoryContents(`${n}${e}`,{details:!0,data:`<?xml version="1.0"?>\n\t\t<oc:filter-files ${j()}>\n\t\t\t<d:prop>\n\t\t\t\t${A()}\n\t\t\t</d:prop>\n\t\t\t<oc:filter-rules>\n\t\t\t\t<oc:favorite>1</oc:favorite>\n\t\t\t</oc:filter-rules>\n\t\t</oc:filter-files>`,headers:{method:"REPORT"},includeSelf:!0})).data.filter((t=>t.filename!==e)).map((t=>$(t,n))),$=function(t,e=S,n=O){const i=t.props,s=function(t=""){let e=v.NONE;return t&&((t.includes("C")||t.includes("K"))&&(e|=v.CREATE),t.includes("G")&&(e|=v.READ),(t.includes("W")||t.includes("N")||t.includes("V"))&&(e|=v.UPDATE),t.includes("D")&&(e|=v.DELETE),t.includes("R")&&(e|=v.SHARE)),e}(i?.permissions),o=i?.["owner-id"]||(0,r.ts)()?.uid,a={id:i?.fileid||0,source:`${n}${t.filename}`,mtime:new Date(Date.parse(t.lastmod)),mime:t.mime,size:i?.size||Number.parseInt(i.getcontentlength||"0"),permissions:s,owner:o,root:e,attributes:{...t,...i,hasPreview:i?.["has-preview"]}};return delete a.attributes?.props,"file"===t.type?new I(a):new T(a)};var R={};!function(t){const e=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",n="["+e+"]["+e+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",r=new RegExp("^"+n+"$");t.isExist=function(t){return typeof t<"u"},t.isEmptyObject=function(t){return 0===Object.keys(t).length},t.merge=function(t,e,n){if(e){const r=Object.keys(e),i=r.length;for(let s=0;s<i;s++)t[r[s]]="strict"===n?[e[r[s]]]:e[r[s]]}},t.getValue=function(e){return t.isExist(e)?e:""},t.isName=function(t){const e=r.exec(t);return!(null===e||typeof e>"u")},t.getAllMatches=function(t,e){const n=[];let r=e.exec(t);for(;r;){const i=[];i.startIndex=e.lastIndex-r[0].length;const s=r.length;for(let t=0;t<s;t++)i.push(r[t]);n.push(i),r=e.exec(t)}return n},t.nameRegexp=n}(R);new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");var F={};const B={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,n){return t}};F.buildOptions=function(t){return Object.assign({},B,t)},F.defaultOptions=B,!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,R.nameRegexp),new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");var V={};function M(t,e,n){let r;const i={};for(let s=0;s<t.length;s++){const o=t[s],a=z(o);let d="";if(d=void 0===n?a:n+"."+a,a===e.textNodeName)void 0===r?r=o[a]:r+=""+o[a];else{if(void 0===a)continue;if(o[a]){let t=M(o[a],e,d);const n=W(t,e);o[":@"]?U(t,o[":@"],d,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==i[a]&&i.hasOwnProperty(a)?(Array.isArray(i[a])||(i[a]=[i[a]]),i[a].push(t)):e.isArray(a,d,n)?i[a]=[t]:i[a]=t}}}return"string"==typeof r?r.length>0&&(i[e.textNodeName]=r):void 0!==r&&(i[e.textNodeName]=r),i}function z(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const n=e[t];if(":@"!==n)return n}}function U(t,e,n,r){if(e){const i=Object.keys(e),s=i.length;for(let o=0;o<s;o++){const s=i[o];r.isArray(s,n+"."+s,!0,!0)?t[s]=[e[s]]:t[s]=e[s]}}}function W(t,e){const{textNodeName:n}=e,r=Object.keys(t).length;return!(0!==r&&(1!==r||!t[n]&&"boolean"!=typeof t[n]&&0!==t[n]))}V.prettify=function(t,e){return M(t,e)};const{buildOptions:Z}=F,{prettify:G}=V;function H(t,e,n,r){let i="",s=!1;for(let o=0;o<t.length;o++){const a=t[o],d=q(a);if(void 0===d)continue;let l="";if(l=0===n.length?d:`${n}.${d}`,d===e.textNodeName){let t=a[d];K(l,e)||(t=e.tagValueProcessor(d,t),t=J(t,e)),s&&(i+=r),i+=t,s=!1;continue}if(d===e.cdataPropName){s&&(i+=r),i+=`<![CDATA[${a[d][0][e.textNodeName]}]]>`,s=!1;continue}if(d===e.commentPropName){i+=r+`\x3c!--${a[d][0][e.textNodeName]}--\x3e`,s=!0;continue}if("?"===d[0]){const t=Y(a[":@"],e),n="?xml"===d?"":r;let o=a[d][0][e.textNodeName];o=0!==o.length?" "+o:"",i+=n+`<${d}${o}${t}?>`,s=!0;continue}let u=r;""!==u&&(u+=e.indentBy);const c=r+`<${d}${Y(a[":@"],e)}`,m=H(a[d],e,l,u);-1!==e.unpairedTags.indexOf(d)?e.suppressUnpairedNode?i+=c+">":i+=c+"/>":m&&0!==m.length||!e.suppressEmptyNode?m&&m.endsWith(">")?i+=c+`>${m}${r}</${d}>`:(i+=c+">",m&&""!==r&&(m.includes("/>")||m.includes("</"))?i+=r+e.indentBy+m+r:i+=m,i+=`</${d}>`):i+=c+"/>",s=!0}return i}function q(t){const e=Object.keys(t);for(let n=0;n<e.length;n++){const r=e[n];if(t.hasOwnProperty(r)&&":@"!==r)return r}}function Y(t,e){let n="";if(t&&!e.ignoreAttributes)for(let r in t){if(!t.hasOwnProperty(r))continue;let i=e.attributeValueProcessor(r,t[r]);i=J(i,e),!0===i&&e.suppressBooleanAttributes?n+=` ${r.substr(e.attributeNamePrefix.length)}`:n+=` ${r.substr(e.attributeNamePrefix.length)}="${i}"`}return n}function K(t,e){let n=(t=t.substr(0,t.length-e.textNodeName.length-1)).substr(t.lastIndexOf(".")+1);for(let r in e.stopNodes)if(e.stopNodes[r]===t||e.stopNodes[r]==="*."+n)return!0;return!1}function J(t,e){if(t&&t.length>0&&e.processEntities)for(let n=0;n<e.entities.length;n++){const r=e.entities[n];t=t.replace(r.regex,r.val)}return t}const X=function(t,e){let n="";return e.format&&e.indentBy.length>0&&(n="\n"),H(t,e,"",n)},Q={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function tt(t){this.options=Object.assign({},Q,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=rt),this.processTextOrObjNode=et,this.options.format?(this.indentate=nt,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function et(t,e,n){const r=this.j2x(t,n+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,r.attrStr,n):this.buildObjectNode(r.val,e,r.attrStr,n)}function nt(t){return this.options.indentBy.repeat(t)}function rt(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}tt.prototype.build=function(t){return this.options.preserveOrder?X(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)},tt.prototype.j2x=function(t,e){let n="",r="";for(let i in t)if(Object.prototype.hasOwnProperty.call(t,i))if(typeof t[i]>"u")this.isAttribute(i)&&(r+="");else if(null===t[i])this.isAttribute(i)?r+="":"?"===i[0]?r+=this.indentate(e)+"<"+i+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+i+"/"+this.tagEndChar;else if(t[i]instanceof Date)r+=this.buildTextValNode(t[i],i,"",e);else if("object"!=typeof t[i]){const s=this.isAttribute(i);if(s)n+=this.buildAttrPairStr(s,""+t[i]);else if(i===this.options.textNodeName){let e=this.options.tagValueProcessor(i,""+t[i]);r+=this.replaceEntitiesValue(e)}else r+=this.buildTextValNode(t[i],i,"",e)}else if(Array.isArray(t[i])){const n=t[i].length;let s="";for(let o=0;o<n;o++){const n=t[i][o];typeof n>"u"||(null===n?"?"===i[0]?r+=this.indentate(e)+"<"+i+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+i+"/"+this.tagEndChar:"object"==typeof n?this.options.oneListGroup?s+=this.j2x(n,e+1).val:s+=this.processTextOrObjNode(n,i,e):s+=this.buildTextValNode(n,i,"",e))}this.options.oneListGroup&&(s=this.buildObjectNode(s,i,"",e)),r+=s}else if(this.options.attributesGroupName&&i===this.options.attributesGroupName){const e=Object.keys(t[i]),r=e.length;for(let s=0;s<r;s++)n+=this.buildAttrPairStr(e[s],""+t[i][e[s]])}else r+=this.processTextOrObjNode(t[i],i,e);return{attrStr:n,val:r}},tt.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},tt.prototype.buildObjectNode=function(t,e,n,r){if(""===t)return"?"===e[0]?this.indentate(r)+"<"+e+n+"?"+this.tagEndChar:this.indentate(r)+"<"+e+n+this.closeTag(e)+this.tagEndChar;{let i="</"+e+this.tagEndChar,s="";return"?"===e[0]&&(s="?",i=""),!n&&""!==n||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===s.length?this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(r)+"<"+e+n+s+this.tagEndChar+t+this.indentate(r)+i:this.indentate(r)+"<"+e+n+s+">"+t+i}},tt.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},tt.prototype.buildTextValNode=function(t,e,n,r){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(r)+`<![CDATA[${t}]]>`+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine;if("?"===e[0])return this.indentate(r)+"<"+e+n+"?"+this.tagEndChar;{let i=this.options.tagValueProcessor(e,t);return i=this.replaceEntitiesValue(i),""===i?this.indentate(r)+"<"+e+n+this.closeTag(e)+this.tagEndChar:this.indentate(r)+"<"+e+n+">"+i+"</"+e+this.tagEndChar}},tt.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const n=this.options.entities[e];t=t.replace(n.regex,n.val)}return t}}},i={};function s(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return r[t].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=r,t=[],s.O=(e,n,r,i)=>{if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],i=t[u][2];for(var a=!0,d=0;d<n.length;d++)(!1&i||o>=i)&&Object.keys(s.O).every((t=>s.O[t](n[d])))?n.splice(d--,1):(a=!1,i<o&&(o=i));if(a){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,r,i]},s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.f={},s.e=t=>Promise.all(Object.keys(s.f).reduce(((e,n)=>(s.f[n](t,e),e)),[])),s.u=t=>t+"-"+t+".js?v="+{1697:"17920ffa1ad36f333ac6",5076:"5df17ad2d937c26c5b50"}[t],s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},n="nextcloud:",s.l=(t,r,i,o)=>{if(e[t])e[t].push(r);else{var a,d;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==n+i){a=c;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",n+i),a.src=t),e[t]=[r];var m=(n,r)=>{a.onerror=a.onload=null,clearTimeout(p);var i=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((t=>t(r))),n)return n(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),d&&document.head.appendChild(a)}},s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),s.j=6437,(()=>{var t;s.g.importScripts&&(t=s.g.location+"");var e=s.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!t;)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t})(),(()=>{s.b=document.baseURI||self.location.href;var t={6437:0};s.f.j=(e,n)=>{var r=s.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,i)=>r=t[e]=[n,i]));n.push(r[2]=i);var o=s.p+s.u(e),a=new Error;s.l(o,(n=>{if(s.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",a.name="ChunkLoadError",a.type=i,a.request=o,r[1](a)}}),"chunk-"+e,e)}},s.O.j=e=>0===t[e];var e=(e,n)=>{var r,i,o=n[0],a=n[1],d=n[2],l=0;if(o.some((e=>0!==t[e]))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(d)var u=d(s)}for(e&&e(n);l<o.length;l++)i=o[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),s.nc=void 0;var o=s.O(void 0,[7874],(()=>s(61199)));o=s.O(o)})();
//# sourceMappingURL=files_reminders-init.js.map?v=28c77cbabfff85fc24c0