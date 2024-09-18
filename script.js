
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

  //Get Envelope Value
  function getEnvelopeToPage(){
    env = decodeURIComponent(document.cookie.match('(^|;) *_lr_env=([^;]*)')[2]);
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