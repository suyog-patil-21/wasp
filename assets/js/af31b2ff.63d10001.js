"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4578],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return t?i.createElement(g,l(l({ref:n},d),{},{components:t})):i.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},39820:(e,n,t)=>{t.d(n,{ZP:()=>o});var i=t(87462),a=(t(67294),t(3905));const r={toc:[]},l="wrapper";function o(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,i.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Sending emails while developing",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When you run your app in development mode, the e-mails are not actually sent. Instead, they are logged to the console."),(0,a.kt)("p",{parentName:"admonition"},"In order to enable sending e-mails in development mode, you need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"SEND_EMAILS_IN_DEVELOPMENT")," env variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},".env.server")," file.")))}o.isMDXComponent=!0},5366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=t(87462),a=(t(67294),t(3905)),r=t(39820);const l={title:"Sending Emails"},o="Sending Emails",p={unversionedId:"guides/sending-emails",id:"guides/sending-emails",title:"Sending Emails",description:"With Wasp's email-sending feature, you can easily integrate email functionality into your web application.",source:"@site/docs/guides/sending-emails.md",sourceDirName:"guides",slug:"/guides/sending-emails",permalink:"/docs/guides/sending-emails",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/guides/sending-emails.md",tags:[],version:"current",frontMatter:{title:"Sending Emails"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/guides/testing"},next:{title:"Middleware Customization",permalink:"/docs/guides/middleware-customization"}},s={},d=[{value:"Sending e-mails",id:"sending-e-mails",level:2},{value:"Providers",id:"providers",level:2},{value:"Using the SMTP provider",id:"using-the-smtp-provider",level:2},{value:"Using the Mailgun provider",id:"using-the-mailgun-provider",level:2},{value:"Getting the API key and domain",id:"getting-the-api-key-and-domain",level:3},{value:"Using the SendGrid provider",id:"using-the-sendgrid-provider",level:2},{value:"Getting the API key",id:"getting-the-api-key",level:3}],m={toc:d},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-emails"},"Sending Emails"),(0,a.kt)("p",null,"With Wasp's email-sending feature, you can easily integrate email functionality into your web application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp"',title:'"main.wasp"'},'app Example {\n  ...\n  emailSender: {\n    provider: <provider>,\n    defaultFrom: {\n        name: "Example",\n        email: "hello@itsme.com"\n    },\n  }\n}\n')),(0,a.kt)("p",null,"Choose from one of the providers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Mailgun"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SendGrid")),(0,a.kt)("li",{parentName:"ul"},"or the good old ",(0,a.kt)("inlineCode",{parentName:"li"},"SMTP"),". ")),(0,a.kt)("p",null,"Optionally, define the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultFrom")," field, so you don't need to provide it whenever sending an e-mail."),(0,a.kt)("h2",{id:"sending-e-mails"},"Sending e-mails"),(0,a.kt)(r.ZP,{mdxType:"SendingEmailsInDevelopment"}),(0,a.kt)("p",null,"Before jumping into details about setting up various providers, let's see how easy it is to send e-mails. "),(0,a.kt)("p",null,"You import the ",(0,a.kt)("inlineCode",{parentName:"p"},"emailSender")," that is provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"@wasp/email")," module and call the ",(0,a.kt)("inlineCode",{parentName:"p"},"send")," method on it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/actions/sendEmail.js"',title:'"src/actions/sendEmail.js"'},"import { emailSender } from '@wasp/email/index.js'\n\n// In some action handler...\nconst info = await emailSender.send({\n  from: {\n    name: 'John Doe',\n    email: 'john@doe.com',\n  },\n  to: 'user@domain.com',\n  subject: 'Saying hello',\n  text: 'Hello world',\n  html: 'Hello <strong>world</strong>'\n})\n")),(0,a.kt)("p",null,"Let's see what the ",(0,a.kt)("inlineCode",{parentName:"p"},"send")," method accepts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from")," - the sender's details.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - the name of the sender"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"email")," - the e-mail address of the sender"),(0,a.kt)("li",{parentName:"ul"},"If you set up ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultFrom")," field in the ",(0,a.kt)("inlineCode",{parentName:"li"},"main.wasp"),", this field is optional."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"to")," - the recipient's e-mail address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subject")," - the subject of the e-mail"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"text")," - the text version of the e-mail"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"html")," - the HTML version of the e-mail")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"send")," method returns an object with the status of the sent e-mail. It varies depending on the provider you use."),(0,a.kt)("h2",{id:"providers"},"Providers"),(0,a.kt)("p",null,"For each provider, you'll need to set up env variables in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env.server")," file at the root of your project."),(0,a.kt)("h2",{id:"using-the-smtp-provider"},"Using the SMTP provider"),(0,a.kt)("p",null,"First, set the provider to ",(0,a.kt)("inlineCode",{parentName:"p"},"SMTP")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"main.wasp")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: SMTP,\n  }\n}\n")),(0,a.kt)("p",null,"Then, add the following env variables to your ",(0,a.kt)("inlineCode",{parentName:"p"},".env.server")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title=".env.server"',title:'".env.server"'},"SMTP_HOST=\nSMTP_USERNAME=\nSMTP_PASSWORD=\nSMTP_PORT=\n")),(0,a.kt)("p",null,"Many transactional email providers (e.g. Mailgun, SendGrid but also others) can also use SMTP, so you can use them as well."),(0,a.kt)("h2",{id:"using-the-mailgun-provider"},"Using the Mailgun provider"),(0,a.kt)("p",null,"Set the provider to ",(0,a.kt)("inlineCode",{parentName:"p"},"Mailgun")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"main.wasp")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: Mailgun,\n  }\n}\n")),(0,a.kt)("p",null,"Then, get the Mailgun API key and domain and add them to your ",(0,a.kt)("inlineCode",{parentName:"p"},".env.server")," file."),(0,a.kt)("h3",{id:"getting-the-api-key-and-domain"},"Getting the API key and domain"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://www.mailgun.com/"},"Mailgun")," and create an account."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://app.mailgun.com/app/account/security/api_keys"},"API Keys")," and create a new API key."),(0,a.kt)("li",{parentName:"ol"},"Copy the API key and add it to your ",(0,a.kt)("inlineCode",{parentName:"li"},".env.server")," file."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://app.mailgun.com/app/domains"},"Domains")," and create a new domain."),(0,a.kt)("li",{parentName:"ol"},"Copy the domain and add it to your ",(0,a.kt)("inlineCode",{parentName:"li"},".env.server")," file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title=".env.server"',title:'".env.server"'},"MAILGUN_API_KEY=\nMAILGUN_DOMAIN=\n")),(0,a.kt)("h2",{id:"using-the-sendgrid-provider"},"Using the SendGrid provider"),(0,a.kt)("p",null,"Set the provider field to ",(0,a.kt)("inlineCode",{parentName:"p"},"SendGrid")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"main.wasp")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: SendGrid,\n  }\n}\n")),(0,a.kt)("p",null,"Then, get the SendGrid API key and add it to your ",(0,a.kt)("inlineCode",{parentName:"p"},".env.server")," file."),(0,a.kt)("h3",{id:"getting-the-api-key"},"Getting the API key"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://sendgrid.com/"},"SendGrid")," and create an account."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://app.sendgrid.com/settings/api_keys"},"API Keys")," and create a new API key."),(0,a.kt)("li",{parentName:"ol"},"Copy the API key and add it to your ",(0,a.kt)("inlineCode",{parentName:"li"},".env.server")," file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title=".env.server"',title:'".env.server"'},"SENDGRID_API_KEY=\n")))}c.isMDXComponent=!0}}]);