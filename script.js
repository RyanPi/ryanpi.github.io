
function retrieveEnvelope(callback) {
    let env = undefined;
    try {
      env =
   decodeURIComponent(document.cookie.match('(^|;) *_lr_env=([^;]*)')[2]);
        env = {
            'envelope': JSON.parse(atob(env)).envelope
        };
  env = JSON.stringify(env);
    } catch (e) {
      console.log(e);
    } finally {
      if(callback){
        callback(env);
      } else {
        return env;
      }
    }
  }

const button = document.querySelector(".submit-button");
button.addEventListener("click", ()=>{
    const p = document.createElement("p");
    const decodedp = document.createElement("p");
    const div = document.querySelector(".form-handler");
    env = retrieveEnvelope()
    decoded = JSON.parse(atob(env)).envelope
    p.innerHTML = env;
    decodedp.innerHTML = decodedp;
    div.append(p);
    div.append(decodedp);
},false);