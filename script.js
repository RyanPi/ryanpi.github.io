
// function retrieveEnvelope(){
//     let env = undefined;
//     try {
//       env = decodeURIComponent(document.cookie.match('(^|;) *_lr_env=([^;]*)')[2]);
//       // env = {'envelope': JSON.parse(atob(env)).envelope};
//       // env = JSON.stringify(env);
//     } catch (e) {
//       console.log(e);
//     } finally {
//         return env;
//     }
//   }

//dummy code to adddvdv
//more dummy code.

  //Get Envelope Value
  function getEnvelopeToPage(){
    env = decodeURIComponent(document.cookie.match('(^|;) *_lr_env=([^;]*)')[2]);
    env_object = {'envelope': JSON.parse(atob(env)).envelope};
    console.log(`this is env_object value:${env_object.envelope}`);
    string_env = JSON.stringify(env_object);
    console.log(`this is env_object value:${string_env}`);

    const p = document.querySelector(".envelope");
    const div = document.querySelector(".form-handler");
    if(p.innerHTML===""){
      p.innerHTML = env;
    } else {
      p.innerHTML = env;
    }
  }

const button = document.querySelector(".submit-button");
button.addEventListener("click", ()=>{setTimeout(getEnvelopeToPage,1000)},false);