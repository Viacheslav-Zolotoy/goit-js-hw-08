!function(){var e=document.querySelector(".feedback-form"),t=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};!function(){if(t("feedback-form-state")){var a=t("feedback-form-state");e.email.value=a.email,e.message.value=a.message}}();e.addEventListener("input",(function(e){var t=e.currentTarget,a=t.email,r=t.message;!function(e,t){try{var a=JSON.stringify(t);localStorage.setItem(e,a)}catch(e){console.error("Set state error: ",e.message)}}("feedback-form-state",{email:a.value,message:r.value})})),e.addEventListener("submit",(function(e){e.preventDefault(),console.log(t("feedback-form-state")),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.46a57688.js.map