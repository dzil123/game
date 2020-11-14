(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-423191c4"],{"13f2":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{"margin-top":"15px"}},[i("span",[t._v("General Settings:")]),i("v-divider",{attrs:{color:"white"}})],1),i("CVnumberinput",{attrs:{name:"Team Number"},model:{value:t.settings.teamNumber,callback:function(e){t.$set(t.settings,"teamNumber",e)},expression:"settings.teamNumber"}}),i("CVradio",{attrs:{list:["DHCP","Static"]},model:{value:t.settings.connectionType,callback:function(e){t.$set(t.settings,"connectionType",e)},expression:"settings.connectionType"}}),i("v-divider",{attrs:{color:"white"}}),i("CVinput",{attrs:{name:"IP",disabled:t.isDisabled},model:{value:t.settings.ip,callback:function(e){t.$set(t.settings,"ip",e)},expression:"settings.ip"}}),i("CVinput",{attrs:{name:"NetMask",disabled:t.isDisabled},model:{value:t.settings.netmask,callback:function(e){t.$set(t.settings,"netmask",e)},expression:"settings.netmask"}}),i("CVinput",{attrs:{name:"Gateway",disabled:t.isDisabled},model:{value:t.settings.gateway,callback:function(e){t.$set(t.settings,"gateway",e)},expression:"settings.gateway"}}),i("v-divider",{attrs:{color:"white"}}),i("CVinput",{attrs:{name:"Hostname"},model:{value:t.settings.hostname,callback:function(e){t.$set(t.settings,"hostname",e)},expression:"settings.hostname"}}),i("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{small:"",color:"#4baf62"},on:{click:t.sendGeneralSettings}},[t._v("Save General Settings")]),i("div",{staticStyle:{"margin-top":"20px"}},[i("span",[t._v("Install or Update:")]),i("v-divider",{attrs:{color:"white"}})],1),t.isLoading?i("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[i("v-progress-circular",{attrs:{color:"white",indeterminate:!0,size:"32",width:"4"}}),i("br"),i("span",[t._v("Please wait this may take a while")])],1):i("div",[i("v-row",{attrs:{dense:"",align:"center"}},[i("v-col",{attrs:{cols:3}},[i("span",[t._v("Choose a newer version: ")])]),i("v-col",{attrs:{cols:6}},[i("v-file-input",{attrs:{accept:".jar",dark:""},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1),i("v-btn",{attrs:{small:""},on:{click:t.installOrUpdate}},[t._v(t._s(t.fileUploadText))])],1),i("v-snackbar",{attrs:{top:"",color:t.snackbar.color},model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[i("span",[t._v(t._s(t.snackbar.text))])])],1)},a=[],n=i("9696"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-radio-group",{attrs:{row:"",dark:"",mandatory:!0},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}},t._l(t.list,(function(t,e){return i("v-radio",{key:e,attrs:{color:"#4baf62",label:t,value:e}})})),1)],1)},r=[],o={name:"Radio",props:["value","list"],data(){return{}},computed:{localValue:{get(){return this.value},set(t){this.$emit("input",t)}}}},u=o,c=i("2877"),h=i("6544"),d=i.n(h),p=(i("2c64"),i("ba87")),m=i("9d26"),v=i("c37a"),g=i("7e2b"),f=i("a9ad"),b=i("4e82"),y=i("5311"),V=i("7560"),S=i("fe09"),C=i("80d2"),k=i("58df");const x=Object(k["a"])(g["a"],f["a"],y["a"],Object(b["a"])("radioGroup"),V["a"]);var $=x.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:()=>({isFocused:!1}),computed:{classes(){return{"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused,...this.themeClasses,...this.groupClasses}},computedColor(){return S["a"].options.computed.computedColor.call(this)},computedIcon(){return this.isActive?this.onIcon:this.offIcon},computedId(){return v["a"].options.computed.computedId.call(this)},hasLabel:v["a"].options.computed.hasLabel,hasState(){return(this.radioGroup||{}).hasState},isDisabled(){return this.disabled||!!(this.radioGroup||{}).disabled},isReadonly(){return this.readonly||!!(this.radioGroup||{}).readonly},computedName(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||`radio-${this.radioGroup._uid}`},validationState(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput(t){return S["a"].options.methods.genInput.call(this,"radio",t)},genLabel(){return this.hasLabel?this.$createElement(p["a"],{on:{click:t=>{t.preventDefault(),this.onChange()}},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(C["n"])(this,"label")||this.label):null},genRadio(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput({name:this.computedName,value:this.value,...this.attrs$}),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(m["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon)])},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onChange(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:()=>{}},render(t){const e={staticClass:"v-radio",class:this.classes};return t("div",e,[this.genRadio(),this.genLabel()])}}),w=(i("ec29"),i("3d86"),i("604c")),_=i("8547");const I=Object(k["a"])(_["a"],w["a"],v["a"]);var D=I.extend({name:"v-radio-group",provide(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes(){return{...v["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},methods:{genDefaultSlot(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},v["a"].options.methods.genDefaultSlot.call(this))},genInputSlot(){const t=v["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel(){const t=v["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="div",t):null},onClick:w["a"].options.methods.onClick}}),A=Object(c["a"])(u,l,r,!1,null,"343af1f8",null),O=A.exports;d()(A,{VRadio:$,VRadioGroup:D});var z=i("759a"),j={name:"General",components:{CVnumberinput:n["a"],CVradio:O,CVinput:z["a"]},data(){return{file:void 0,snackbar:{color:"success",text:""},snack:!1,isLoading:!1}},methods:{sendGeneralSettings(){const t=this;this.axios.post("http://"+this.$address+"/api/settings/general",this.settings).then((function(e){200===e.status&&(t.$store.state.saveBar=!0)}))},installOrUpdate(){let t=new FormData;t.append("file",this.file),void 0!==this.file&&(this.isLoading=!0),this.axios.post("http://"+this.$address+"/api/install",t,{headers:{"Content-Type":"multipart/form-data"}}).then(()=>{this.snackbar={color:"success",text:"Installation successful"},this.isLoading=!1,this.snack=!0}).catch(t=>{this.snackbar={color:"error",text:t.response.data},this.isLoading=!1,this.snack=!0})}},computed:{fileUploadText(){return void 0!==this.file?"update and run at startup":"Run current version at startup"},isDisabled(){return 0===this.settings.connectionType},settings:{get(){return this.$store.state.settings}}}},G=j,L=i("8336"),B=i("62ad"),T=i("ce7e"),E=(i("5803"),i("2677")),F=i("cc20"),N=i("d9bd"),R=E["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:()=>[],validator:t=>"object"===typeof t||Array.isArray(t)}},computed:{classes(){return{...E["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,e)=>t+e.size,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(C["q"])(e,1024===this.base))},internalArrayValue(){return Array.isArray(this.internalValue)?this.internalValue:Object(C["z"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},isMultiple(){return this.$attrs.hasOwnProperty("multiple")},text(){return this.isDirty?this.internalArrayValue.map(t=>{const e=this.truncateText(t.name);return this.showSize?`${e} (${Object(C["q"])(t.size,1024===this.base)})`:e}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&Object(N["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.isMultiple?t:t?[t]:[];Object(C["i"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(F["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genInput(){const t=E["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection},on:{click:()=>this.$refs.input.click()}},t)},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}}),M=i("490a"),P=i("0fd9"),K=i("2db4"),U=Object(c["a"])(G,s,a,!1,null,"21cbb8a8",null);e["default"]=U.exports;d()(U,{VBtn:L["a"],VCol:B["a"],VDivider:T["a"],VFileInput:R,VProgressCircular:M["a"],VRow:P["a"],VSnackbar:K["a"]})},2677:function(t,e,i){"use strict";var s=i("8654");e["a"]=s["a"]},"2c64":function(t,e,i){},"3d86":function(t,e,i){},5311:function(t,e,i){"use strict";var s=i("5607"),a=i("2b0e");e["a"]=a["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}})},5803:function(t,e,i){},"759a":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",{attrs:{dense:"",align:"center"}},[i("v-col",{attrs:{cols:3}},[i("span",[t._v(t._s(t.name))])]),i("v-col",{attrs:{cols:9}},[i("v-text-field",{attrs:{dark:"",dense:"",disabled:t.disabled,"error-messages":t.errorMessage},on:{keydown:t.handleKeyboard},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1)],1)],1)},a=[],n={name:"Input",props:["name","value","disabled","errorMessage"],data(){return{}},methods:{handleKeyboard(t){"Enter"==t.key&&this.$emit("Enter")}},computed:{localValue:{get(){return this.value},set(t){this.$emit("input",t)}}}},l=n,r=i("2877"),o=i("6544"),u=i.n(o),c=i("62ad"),h=i("0fd9"),d=i("8654"),p=Object(r["a"])(l,s,a,!1,null,"60193ff2",null);e["a"]=p.exports;u()(p,{VCol:c["a"],VRow:h["a"],VTextField:d["a"]})},9696:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",{attrs:{dense:"",align:"center"}},[i("v-col",{attrs:{cols:2}},[i("span",[t._v(t._s(t.name))])]),i("v-col",[i("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"70px"},attrs:{dark:"","hide-details":"","single-line":"",type:"number",step:t.step},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1)],1)],1)},a=[],n={name:"NumberInput",props:["name","value","step"],data(){return{}},computed:{localValue:{get(){return this.value},set(t){this.$emit("input",parseFloat(t))}}}},l=n,r=i("2877"),o=i("6544"),u=i.n(o),c=i("62ad"),h=i("0fd9"),d=i("8654"),p=Object(r["a"])(l,s,a,!1,null,"7cb31fe1",null);e["a"]=p.exports;u()(p,{VCol:c["a"],VRow:h["a"],VTextField:d["a"]})},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";var s=i("c37a"),a=i("5311"),n=i("8547"),l=i("58df");e["a"]=Object(l["a"])(s["a"],a["a"],n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}})}}]);
//# sourceMappingURL=chunk-423191c4.430d7b21.js.map