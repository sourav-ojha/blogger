import{r as a,R as e,e as v,a as y,L as N}from"./index.4684735b.js";import{a as C,b as S}from"./index.esm.b0ca7820.js";import{T as f,c as I,a as k,b as L}from"./index.esm.6b45c3ee.js";import{B as F}from"./index.esm.1c57068d.js";import{I as l,C as B}from"./CircularLoading.1f51a085.js";import"./sweetalert2.all.c9a96007.js";const D=()=>{const[o,i]=a.exports.useState(!1),[m,x]=a.exports.useState(!1),[t,p]=e.useState({username:"",password:""}),[c,g]=a.exports.useState(!1),E=()=>{g(!c)},n=r=>{p({...t,[r.target.name]:r.target.value})},s=v(),{token:u,register:w}=y();a.exports.useEffect(()=>{u&&s("/")},[u,s]),a.exports.useEffect(()=>{m&&(f.fire({icon:"error",title:m}),i(!1))},[m,o,s]);const h=async r=>{r.preventDefault(),i(!0);let{status:b,message:d}=await w(t);b?(f.fire({icon:"success",title:d}),s("/signin")):x(d)};return e.createElement(e.Fragment,null,e.createElement("div",{className:" flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-full sm:w-3/6 lg:w-2/6"},e.createElement("div",{className:"font-medium self-center text-xl sm:text-3xl text-gray-800"},"Welcome"),e.createElement("div",{className:"mt-4 self-center sm:text-xl sm text-center  text-gray-800"},"Create your account & Begin your journey"),e.createElement("div",{className:" self-center text-xl sm:text-sm text-gray-800"},"Blogger"),e.createElement("div",{className:"mt-5"},e.createElement("form",{onSubmit:h},e.createElement(l,{label:"Full name:",name:"full_name",value:t.full_name,onChange:n,Icon:F,placeholder:"Enter Your full name",required:!0}),e.createElement(l,{label:"Email address:",name:"email",value:t.email,onChange:n,Icon:I,placeholder:"Enter Your email address",required:!0}),e.createElement(l,{label:"User name:",name:"username",value:t.username,onChange:n,Icon:C,placeholder:"Enter Your username",required:!0}),e.createElement(l,{label:"Password:",name:"password",type:c?"text":"password",value:t.password,onChange:n,Icon:S,EndIcon:c?k:L,clickEndIcon:E,placeholder:"Enter Your Password",required:!0}),e.createElement("div",{className:"flex w-full"},e.createElement("button",{type:"submit",className:`
                flex
                mt-2
                items-center
                justify-center
                focus:outline-none
                text-white text-sm
                sm:text-base
                bg-blue-500
                hover:bg-blue-600
                rounded-2xl
                py-2
                w-full
                transition
                duration-150
                ease-in
                disabled:opacity-50
              `,disabled:o},e.createElement("span",{className:"mr-2 uppercase"},"Sign up"),o?e.createElement("span",null,e.createElement(B,null)):e.createElement("span",null,e.createElement("svg",{className:"h-6 w-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"})))))))),e.createElement("div",{className:"flex justify-center items-center mt-6"},e.createElement(N,{to:"/signin",className:`
          inline-flex
          items-center
          text-gray-700
          font-medium
          text-xs text-center
        `},e.createElement("span",{className:"ml-2"},"Already have an account?",e.createElement("span",{className:"text-xs ml-2 text-blue-500 font-semibold"},"Signin now")))))};export{D as default};
