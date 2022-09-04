import{r as t,R as e,e as h,a as v,L as y}from"./index.4684735b.js";import{a as N,b as S}from"./index.esm.b0ca7820.js";import{I as f,C as L}from"./CircularLoading.1f51a085.js";import{T as k,a as I,b as C}from"./index.esm.6b45c3ee.js";import"./sweetalert2.all.c9a96007.js";const Y=()=>{const[s,r]=t.exports.useState(!1),[l,c]=t.exports.useState(!1),[n,x]=e.useState({username:"",password:""}),[o,p]=t.exports.useState(!1),g=()=>{p(!o)},i=a=>{x({...n,[a.target.name]:a.target.value})},m=h(),{token:u,login:E}=v();t.exports.useEffect(()=>{u&&m("/")},[u,m]),t.exports.useEffect(()=>{l&&(k.fire({icon:"error",title:l}),r(!1))},[l,s,m]);const w=async a=>{a.preventDefault(),r(!0);let{status:b,message:d}=await E(n);b?(r(!1),c(!1)):(console.log(d),c(d))};return e.createElement(e.Fragment,null,e.createElement("div",{className:`
        flex flex-col
        bg-white
        shadow-md
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        py-8
        rounded-3xl
        w-50
        max-w-md
      `},e.createElement("div",{className:"font-medium self-center text-xl sm:text-3xl text-gray-800"},"Welcome"),e.createElement("div",{className:"mt-4 self-center text-xl sm:text-sm text-gray-800"},"Enter your credentials to access your account"),e.createElement("div",{className:"mt-10"},e.createElement("form",{onSubmit:w},e.createElement(f,{label:"User name:",name:"username",value:n.username,onChange:i,Icon:N,placeholder:"Enter Your username",required:!0}),e.createElement(f,{label:"Password:",name:"password",type:o?"text":"password",value:n.password,onChange:i,Icon:S,EndIcon:o?I:C,clickEndIcon:g,placeholder:"Enter Your Password",required:!0}),e.createElement("div",{className:"flex w-full"},e.createElement("button",{type:"submit",className:`
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
                  `,disabled:s},e.createElement("span",{className:"mr-2 uppercase"},"Sign In"),s?e.createElement("span",null,e.createElement(L,null)):e.createElement("span",null,e.createElement("svg",{className:"h-6 w-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"})))))))),e.createElement("div",{className:"flex justify-center items-center mt-6"},e.createElement(y,{to:"/signup",className:`
              inline-flex
              items-center
              text-gray-700
              font-medium
              text-xs text-center
            `},e.createElement("span",{className:"ml-2"},"You don't have an account?",e.createElement("span",{className:"text-xs ml-2 text-blue-500 font-semibold"},"Sign up")))))};export{Y as default};
