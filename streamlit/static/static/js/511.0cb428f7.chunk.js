"use strict";(self.webpackChunkstreamlit_browser=self.webpackChunkstreamlit_browser||[]).push([[511],{4371:function(e,t,n){n.d(t,{$:function(){return i},Z:function(){return c}});var i,r=n(47313),a=n(83985),s=n(49950),o=n(80788),l=n(75314),d=n(74969),u=n(46417);!function(e){e.EXTRASMALL="xs",e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e.EXTRALARGE="xl"}(i||(i={}));var c=function(e){var t=e.value,n=e.width,c=e.size,g=void 0===c?i.SMALL:c,p=e.overrides,f=(0,a.u)(),m={xs:f.spacing.twoXS,sm:f.spacing.sm,md:f.spacing.lg,lg:f.spacing.xl,xl:f.spacing.twoXL},h=r.useContext(s.Z).activeTheme,v=!(0,o.MJ)(h),x={BarContainer:{style:{marginTop:f.spacing.none,marginBottom:f.spacing.none,marginRight:f.spacing.none,marginLeft:f.spacing.none}},Bar:{style:function(e){var t=e.$theme;return{width:n?n.toString():void 0,marginTop:f.spacing.none,marginBottom:f.spacing.none,marginRight:f.spacing.none,marginLeft:f.spacing.none,height:m[g],backgroundColor:t.colors.progressbarTrackFill,borderTopLeftRadius:f.spacing.twoXS,borderTopRightRadius:f.spacing.twoXS,borderBottomLeftRadius:f.spacing.twoXS,borderBottomRightRadius:f.spacing.twoXS}}},BarProgress:{style:function(e){e.$theme;return{backgroundColor:v?f.colors.primary:f.colors.blue70,borderTopLeftRadius:f.spacing.twoXS,borderTopRightRadius:f.spacing.twoXS,borderBottomLeftRadius:f.spacing.twoXS,borderBottomRightRadius:f.spacing.twoXS}}}};return(0,u.jsx)(l.Z,{value:t,overrides:(0,d.aO)(x,p)})}},84677:function(e,t,n){n.d(t,{R:function(){return a}});var i=n(15671),r=n(43144),a=function(){function e(t,n,r,a){(0,i.Z)(this,e),this.name=void 0,this.size=void 0,this.status=void 0,this.id=void 0,this.name=t,this.size=n,this.id=r,this.status=a}return(0,r.Z)(e,[{key:"setStatus",value:function(t){return new e(this.name,this.size,this.id,t)}}]),e}()},41511:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var i,r=n(93433),a=n(15671),s=n(43144),o=n(60136),l=n(29388),d=n(31881),u=n.n(d),c=n(16031),g=n.n(c),p=n(47313),f=n(7976),m=n(46332),h=n(64243);!function(e){e.Gigabyte="gb",e.Megabyte="mb",e.Kilobyte="kb",e.Byte="b"}(i||(i={}));var v=(0,h.rA)()?1024:1e3,x=[i.Gigabyte,i.Megabyte,i.Kilobyte,i.Byte],y=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(n||(n=i.Byte),r<0&&(r=0),t<0)throw new Error("Size must be greater than or equal to 0");var a=x.indexOf(n),s=t/v;return a&&t>v/2?e(s,x[a-1],r):"".concat(t.toFixed(r)).concat(n.toUpperCase())},S=n(65167),w=n(73290),b=n(80213),Z=n(1413),F=n(80614),j=n(69367),I=n(4942),z=n(47167);var M=(0,z.Z)("section",{target:"exg6vvm15"})((function(e){var t=e.isDisabled,n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing.lg,backgroundColor:n.colors.secondaryBg,borderRadius:n.radii.md,":focus":{outline:"none",boxShadow:"0 0 0 1px ".concat(n.colors.primary)},color:t?n.colors.gray:n.colors.bodyText}}),""),B=(0,z.Z)("div",{target:"exg6vvm14"})((function(e){e.theme;return{marginRight:"auto",alignItems:"center",display:"flex"}}),""),k=(0,z.Z)("span",{target:"exg6vvm13"})((function(e){var t=e.theme;return{color:t.colors.darkenedBgMix100,marginRight:t.spacing.lg}}),""),L=(0,z.Z)("span",{target:"exg6vvm12"})((function(e){return{marginBottom:e.theme.spacing.twoXS}}),""),R=(0,z.Z)("div",{target:"exg6vvm11"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),C=(0,z.Z)("div",{target:"exg6vvm10"})((function(e){var t=e.theme;return{left:0,right:0,lineHeight:t.lineHeights.tight,paddingTop:t.spacing.md,paddingLeft:t.spacing.lg,paddingRight:t.spacing.lg}}),""),U=(0,z.Z)("ul",{target:"exg6vvm9"})((function(e){e.theme;return{listStyleType:"none",marginBottom:0}}),""),P=(0,z.Z)("li",{target:"exg6vvm8"})((function(e){var t=e.theme;return{margin:t.spacing.none,padding:t.spacing.none}}),""),T=(0,z.Z)("div",{target:"exg6vvm7"})((function(e){return{display:"flex",alignItems:"baseline",flex:1,paddingLeft:e.theme.spacing.lg,overflow:"hidden"}}),""),X=(0,z.Z)("div",{target:"exg6vvm6"})((function(e){var t=e.theme;return{marginRight:t.spacing.sm,marginBottom:t.spacing.twoXS,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),""),D=(0,z.Z)("div",{target:"exg6vvm5"})((function(e){return{display:"flex",alignItems:"center",marginBottom:e.theme.spacing.twoXS}}),""),E=(0,z.Z)("span",{target:"exg6vvm4"})((function(e){return{marginRight:e.theme.spacing.twoXS}}),""),A=(0,z.Z)("div",{target:"exg6vvm3"})((function(e){var t=e.theme;return{display:"flex",padding:t.spacing.twoXS,color:t.colors.darkenedBgMix100}}),""),N=(0,z.Z)("small",{target:"exg6vvm2"})((function(e){var t=e.theme;return{color:t.colors.danger,fontSize:t.fontSizes.sm,height:t.fontSizes.sm,lineHeight:t.fontSizes.sm,display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),""),O=(0,z.Z)("span",{target:"exg6vvm1"})({name:"0",styles:""}),V=function(e){var t;return t={},(0,I.Z)(t,M,{display:"flex",flexDirection:"column",alignItems:"flex-start"}),(0,I.Z)(t,B,{marginBottom:e.spacing.lg}),(0,I.Z)(t,k,{display:"none"}),(0,I.Z)(t,C,{paddingRight:e.spacing.lg}),(0,I.Z)(t,D,{maxWidth:"inherit",flex:1,alignItems:"flex-start",marginBottom:e.spacing.sm}),(0,I.Z)(t,X,{width:e.sizes.full}),(0,I.Z)(t,T,{flexDirection:"column"}),(0,I.Z)(t,N,{height:"auto",whiteSpace:"initial"}),(0,I.Z)(t,O,{display:"none"}),(0,I.Z)(t,P,{margin:e.spacing.none,padding:e.spacing.none}),t},H=(0,z.Z)("div",{target:"exg6vvm0"})((function(e){var t=e.theme;return t.inSidebar?V(t):(0,I.Z)({},"@media (max-width: ".concat(t.breakpoints.sm,")"),V(t))}),""),G=n(66071),W=n(49089),Y=n(49986),$=n(46417),q=function(e){var t=e.multiple,n=e.acceptedExtensions,r=e.maxSizeBytes;return(0,$.jsxs)(B,{children:[(0,$.jsx)(k,{children:(0,$.jsx)(W.ZP,{content:G.n,size:"threeXL"})}),(0,$.jsxs)(R,{children:[(0,$.jsxs)(L,{children:["Drag and drop file",t?"s":""," here"]}),(0,$.jsxs)(Y.x,{children:["Limit ".concat(y(r,i.Byte,0)," per file"),n.length?" \u2022 ".concat(n.join(", ").replace(/\./g,"").toUpperCase()):null]})]})]})},_=function(e){var t=e.onDrop,n=e.multiple,i=e.acceptedExtensions,r=e.maxSizeBytes,a=e.disabled,s=e.label;return(0,$.jsx)(F.ZP,{onDrop:t,multiple:n,accept:i.length?i:void 0,maxSize:r,disabled:a,children:function(e){var t=e.getRootProps,o=e.getInputProps;return(0,$.jsxs)(M,(0,Z.Z)((0,Z.Z)({},t()),{},{"data-testid":"stFileUploadDropzone",isDisabled:a,"aria-label":s,children:[(0,$.jsx)("input",(0,Z.Z)({},o())),(0,$.jsx)(q,{multiple:n,acceptedExtensions:i,maxSizeBytes:r}),(0,$.jsx)(j.ZP,{kind:j.hY.SECONDARY,disabled:a,size:j.$u.SMALL,children:"Browse files"})]}))}})},K=n(29439),J=n(45987),Q=n(67861),ee=n.n(Q),te=n(71054),ne=n(87669),ie=(0,z.Z)("div",{target:"e1f8s2qs1"})((function(e){var t=e.theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:t.spacing.twoXS,marginBottom:t.spacing.twoXS}}),""),re=(0,z.Z)("div",{target:"e1f8s2qs0"})((function(e){return{display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.colors.fadedText40}}),""),ae=function(e){var t=e.className,n=e.currentPage,i=e.totalPages,r=e.onNext,a=e.onPrevious;return(0,$.jsxs)(ie,{className:t,children:[(0,$.jsx)(Y.x,{children:"Showing page ".concat(n," of ").concat(i)}),(0,$.jsxs)(re,{children:[(0,$.jsx)(j.ZP,{onClick:a,kind:j.hY.MINIMAL,children:(0,$.jsx)(W.ZP,{content:te.s,size:"xl"})}),(0,$.jsx)(j.ZP,{onClick:r,kind:j.hY.MINIMAL,children:(0,$.jsx)(W.ZP,{content:ne._,size:"xl"})})]})]})},se=n(74424),oe=["pageSize","items","resetOnAdd"],le=function(e,t){return Math.ceil(e.length/t)},de=function(e){return ee()((function(t){var n=t.pageSize,i=t.items,r=t.resetOnAdd,a=(0,J.Z)(t,oe),s=(0,p.useState)(0),o=(0,K.Z)(s,2),l=o[0],d=o[1],u=(0,p.useState)(le(i,n)),c=(0,K.Z)(u,2),g=c[0],f=c[1],m=(0,se.D)(i);(0,p.useEffect)((function(){m&&m.length!==i.length&&f(le(i,n)),m&&m.length<i.length?r&&d(0):l+1>=g&&d(g-1)}),[i,l,n,m,r,g]);var h=i.slice(l*n,l*n+n);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(e,(0,Z.Z)({items:h},a)),i.length>n?(0,$.jsx)(ae,{className:"streamlit-paginator",pageSize:n,totalPages:g,currentPage:l+1,onNext:function(){d(Math.min(l+1,g-1))},onPrevious:function(){d(Math.max(0,l-1))}}):null]})}),e)},ue=n(2029),ce=n(70782),ge=n(98664),pe=n(4371),fe=function(e){var t=e.fileInfo;return"uploading"===t.status.type?(0,$.jsx)(pe.Z,{value:t.status.progress,size:pe.$.SMALL,overrides:{Bar:{style:{marginLeft:0,marginTop:"4px"}}}}):"error"===t.status.type?(0,$.jsxs)(N,{children:[(0,$.jsx)(E,{"data-testid":"stUploadedFileErrorMessage",children:t.status.errorMessage}),(0,$.jsx)(O,{children:(0,$.jsx)(W.ZP,{content:ue.j,size:"lg"})})]}):"uploaded"===t.status.type?(0,$.jsx)(Y.x,{children:y(t.size,i.Byte)}):null},me=function(e){var t=e.fileInfo,n=e.onDelete;return(0,$.jsxs)(D,{className:"uploadedFile",children:[(0,$.jsx)(A,{children:(0,$.jsx)(W.ZP,{content:ce.h,size:"twoXL"})}),(0,$.jsxs)(T,{className:"uploadedFileData",children:[(0,$.jsx)(X,{className:"uploadedFileName",title:t.name,children:t.name}),(0,$.jsx)(fe,{fileInfo:t})]}),(0,$.jsx)("div",{"data-testid":"fileDeleteBtn",children:(0,$.jsx)(j.ZP,{onClick:function(){return n(t.id)},kind:j.hY.MINIMAL,children:(0,$.jsx)(W.ZP,{content:ge.U,size:"lg"})})})]})},he=de((function(e){var t=e.items,n=e.onDelete;return(0,$.jsx)(U,{children:t.map((function(e){return(0,$.jsx)(P,{children:(0,$.jsx)(me,{fileInfo:e,onDelete:n})},e.id)}))})})),ve=function(e){return(0,$.jsx)(C,{children:(0,$.jsx)(he,(0,Z.Z)({},e))})},xe=n(84677),ye=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(e){var s;return(0,a.Z)(this,n),(s=t.call(this,e)).formClearHelper=new m.Kz,s.localFileIdCounter=1,s.componentDidUpdate=function(e){var t=s.props,n=t.element,i=t.widgetMgr;if(e.disabled!==s.props.disabled&&s.props.disabled)return s.reset(),void i.setFileUploaderStateValue(n,new f.xO,{fromUi:!1});if("ready"===s.status){var r=s.createWidgetValue();if(void 0!==r){var a=i.getFileUploaderStateValue(n);g().isEqual(r,a)||i.setFileUploaderStateValue(n,r,{fromUi:!0})}}},s.reset=function(){s.setState({files:[]})},s.dropHandler=function(e,t){var n=s.props.element.multipleFiles;if(!n&&0===e.length&&t.length>1){var i=t.findIndex((function(e){return 1===e.errors.length&&"too-many-files"===e.errors[0].code}));i>=0&&(e.push(t[i].file),t.splice(i,1))}if(!n&&e.length>0&&s.state.files.length>0&&s.removeFile(s.state.files[0].id),e.forEach(s.uploadFile),t.length>0){var r=t.map((function(e){var t=e.file;return new xe.R(t.name,t.size,s.nextLocalFileId(),{type:"error",errorMessage:s.getErrorMessage(e.errors[0].code,e.file)})}));s.addFiles(r)}},s.uploadFile=function(e){var t=u().CancelToken.source(),n=new xe.R(e.name,e.size,s.nextLocalFileId(),{type:"uploading",cancelToken:t,progress:1});s.addFile(n),s.props.uploadClient.uploadFile(s.props.element,e,(function(e){return s.onUploadProgress(e,n.id)}),t.token).then((function(e){return s.onUploadComplete(n.id,e)})).catch((function(e){u().isCancel(e)||s.updateFile(n.id,n.setStatus({type:"error",errorMessage:e?e.toString():"Unknown error"}))}))},s.onUploadComplete=function(e,t){s.setState((function(e){return{newestServerFileId:Math.max(e.newestServerFileId,t)}}));var n=s.getFile(e);null!=n&&"uploading"===n.status.type&&s.updateFile(n.id,n.setStatus({type:"uploaded",serverFileId:t}))},s.getErrorMessage=function(e,t){switch(e){case"file-too-large":return"File must be ".concat(y(s.maxUploadSizeInBytes,i.Byte)," or smaller.");case"file-invalid-type":return"".concat(t.type," files are not allowed.");case"file-too-small":return"File size is too small.";case"too-many-files":return"Only one file is allowed.";default:return"Unexpected error. Please try again."}},s.deleteFile=function(e){var t=s.getFile(e);null!=t&&("uploading"===t.status.type&&t.status.cancelToken.cancel(),s.removeFile(e))},s.addFile=function(e){s.setState((function(t){return{files:[].concat((0,r.Z)(t.files),[e])}}))},s.addFiles=function(e){s.setState((function(t){return{files:[].concat((0,r.Z)(t.files),(0,r.Z)(e))}}))},s.removeFile=function(e){s.setState((function(t){return{files:t.files.filter((function(t){return t.id!==e}))}}))},s.getFile=function(e){return s.state.files.find((function(t){return t.id===e}))},s.updateFile=function(e,t){s.setState((function(n){return{files:n.files.map((function(n){return n.id===e?t:n}))}}))},s.onUploadProgress=function(e,t){var n=s.getFile(t);if(null!=n&&"uploading"===n.status.type){var i=Math.round(100*e.loaded/e.total);n.status.progress!==i&&s.updateFile(t,n.setStatus({type:"uploading",cancelToken:n.status.cancelToken,progress:i}))}},s.onFormCleared=function(){s.setState({files:[]},(function(){var e=s.createWidgetValue();null!=e&&s.props.widgetMgr.setFileUploaderStateValue(s.props.element,e,{fromUi:!0})}))},s.state=s.initialValue,s}return(0,s.Z)(n,[{key:"initialValue",get:function(){var e=this,t={files:[],newestServerFileId:0},n=this.props,i=n.widgetMgr,r=n.element,a=i.getFileUploaderStateValue(r);if(null==a)return t;var s=a.maxFileId,o=a.uploadedFileInfo;return null==s||0===s||null==o?t:{files:o.map((function(t){var n=t.name,i=t.size,r=t.id;return new xe.R(n,i,e.nextLocalFileId(),{type:"uploaded",serverFileId:r})})),newestServerFileId:Number(s)}}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maxUploadSizeInBytes",get:function(){return function(e,t,n){if(e<0)throw Error("Size must be 0 or greater");var i=x.findIndex((function(e){return e===t})),r=x.findIndex((function(e){return e===n}));if(-1===i||-1===r)throw Error("Unexpected byte unit provided");if(i===r)return e;var a=Math.abs(i-r),s=Math.pow(v,a);return i>r?e/s:e*s}(this.props.element.maxUploadSizeMb,i.Megabyte,i.Byte)}},{key:"status",get:function(){return this.state.files.some((function(e){return"uploading"===e.status.type}))?"updating":"ready"}},{key:"createWidgetValue",value:function(){if(0!==this.state.newestServerFileId){var e=this.state.files.filter((function(e){return"uploaded"===e.status.type})).map((function(e){var t=e.name,n=e.size,i=e.status;return new f.jM({id:i.serverFileId,name:t,size:n})}));return new f.xO({maxFileId:this.state.newestServerFileId,uploadedFileInfo:e})}}},{key:"render",value:function(){var e,t=this.state.files,n=this.props,i=n.element,r=n.disabled,a=n.widgetMgr,s=i.type;this.formClearHelper.manageFormClearListener(a,i.formId,this.onFormCleared);var o=t.slice().reverse();return(0,$.jsxs)(H,{"data-testid":"stFileUploader",children:[(0,$.jsx)(S.ON,{label:i.label,disabled:r,labelVisibility:(0,h.iF)(null===(e=i.labelVisibility)||void 0===e?void 0:e.value),children:i.help&&(0,$.jsx)(S.dT,{children:(0,$.jsx)(w.Z,{content:i.help,placement:b.ug.TOP_RIGHT})})}),(0,$.jsx)(_,{onDrop:this.dropHandler,multiple:i.multipleFiles,acceptedExtensions:s,maxSizeBytes:this.maxUploadSizeInBytes,label:i.label,disabled:r}),o.length>0&&(0,$.jsx)(ve,{items:o,pageSize:3,onDelete:this.deleteFile,resetOnAdd:!0})]})}},{key:"nextLocalFileId",value:function(){return this.localFileIdCounter++}}]),n}(p.PureComponent)}}]);