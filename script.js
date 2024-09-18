  //Get Envelope Value
  function getEnvelopeToPage(){
    //get encoded envelope value
    env = decodeURIComponent(document.cookie.match('(^|;) *_lr_env=([^;]*)')[2]);
    //get decoded envelope object
    env_object = {'envelope': JSON.parse(atob(env)).envelope};

    //set up UI variables
    const pe = document.querySelector(".encoded-envelope");
    const pd = document.querySelector(".decoded-envelope");
    const div = document.querySelector(".form-handler");

    //logic for returning envelope values
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