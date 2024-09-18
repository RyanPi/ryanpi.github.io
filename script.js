  //Get Envelope Value
  function getEnvelopeToPage(){
    env = decodeURIComponent(document.cookie.match('(^|;) *_lr_env=([^;]*)')[2]);
    env_object = {'envelope': JSON.parse(atob(env)).envelope};
    console.log(`this is env_object value:${env_object.envelope}`);
    // string_env = JSON.stringify(env_object);
    // console.log(`this is env_object value:${string_env}`);

    const pe = document.querySelector(".encoded-envelope");
    const pd = document.querySelector(".decoded-envelope");
    const div = document.querySelector(".form-handler");
    if(pe.innerHTML===""){
      pe.innerHTML = `Encoded envelope: ${env}`;
      pd.innerHTML = `Decoded envelope: ${env_object.envelope}`;

    } else {
      pe.innerHTML = `Encoded envelope: ${env}`;
      pd.innerHTML = `Decoded envelope: ${env_object.envelope}`;
    }
  }

const button = document.querySelector(".submit-button");
button.addEventListener("click", ()=>{setTimeout(getEnvelopeToPage,1000)},false);