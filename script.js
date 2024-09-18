
function retrieveEnvelope(){
    let env = undefined;
    try {
      env = decodeURIComponent(document.cookie.match('(^|;) *_lr_env=([^;]*)')[2]);
      // env = {'envelope': JSON.parse(atob(env)).envelope};
      // env = JSON.stringify(env);
    } catch (e) {
      console.log(e);
    } finally {
        return env;
    }
  }
    


const button = document.querySelector(".submit-button");
button.addEventListener("click", ()=>{
    const p = document.createElement("p");
    const div = document.querySelector(".form-handler");

    setTimeout(retrieveEnvelope, 3000);

 
    p.innerHTML = env;
    div.append(p);
},false);