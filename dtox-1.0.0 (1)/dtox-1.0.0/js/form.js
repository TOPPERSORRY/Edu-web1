function validateForm() {
    var argName = "";
    var argEmail = "";
    var argSubject="";
    var argMessage="";
  
 
   
  
   
    if(null != document.forms.contactForm.name && null != document.forms.contactForm.name.value){
              argName = document.forms.contactForm.name.value;
              
    }
    if(null != document.forms.contactForm.mail && null != document.forms.contactForm.mail.value){
              argEmail = document.forms.contactForm.mail.value;
              //alert(argEmail);
    }
    if(null != document.forms.contactForm.subject && null != document.forms.contactForm.subject.value){
              argSubject = document.forms.contactForm.subject.value;
              
    }
    if(null != document.forms.contactForm.message && null != document.forms.contactForm.message.value){
                argMessage = document.forms.contactForm.message.value;
              
    }
    // if(null != document.forms.signupform.schoolname && null != document.forms.signupform.schoolname.value){
    //           argSchName = document.forms.signupform.schoolname.value;
              
    // }
    // if(null != document.forms.signupform.dob && null != document.forms.signupform.dob.value){
    //           argDOB = document.forms.signupform.dob.value;
              
    // }
    // if(null != document.forms.signupform.gender && null != document.forms.signupform.gender.value){
    //           argGender = document.forms.signupform.gender.value;
              
    // }
     
 
    
   argName = argName.trim();
    if (argName == ""||argName.length<3) {
      alert("Name is too short")
      event.preventDefault();
      document.getElementById(document.forms.contactForm.name.id).focus();
      document.getElementById(document.forms.contactForm.name.id).select(); 
      return false;
    
    }  
   else if (argName.length>30) {
      alert("Name is too long")
      event.preventDefault();
      document.getElementById(document.forms.contactForm.name.id).focus();
      document.getElementById(document.forms.contactForm.name.id).select(); 
      return false;
    
    }  
   
    if(argEmail == ""){ 
       //alert(argEmail);
        alert("EMail must be filled out")
        event.preventDefault();
        document.getElementById(document.forms.contactForm.mail.id).focus();
        document.getElementById(document.forms.contactForm.mail.id).select(); 
        return false;
     
    }else if(!checkValidMail(argEmail)){ 
       //alert(argEmail);
        alert("Email format should be correct")
        event.preventDefault();
        document.getElementById(document.forms.contactForm.mail.id).focus();
        document.getElementById(document.forms.contactForm.mail.id).select(); 
        return false;
        }

        argSubject = argSubject.trim();
        if (argSubject == ""||argSubject.length<3) {
          alert("Subject is too short")
          event.preventDefault();
          document.getElementById(document.forms.contactForm.subject.id).focus();
          document.getElementById(document.forms.contactForm.subject.id).select(); 
          return false;
        
        }  
       else if (argSubject.length>30) {
          alert("Subject is too long")
          event.preventDefault();
          document.getElementById(document.forms.contactForm.subject.id).focus();
          document.getElementById(document.forms.contactForm.subject.id).select(); 
          return false;
        
        }  

        argMessage = argMessage.trim();
        if (argMessage == ""||argMessage.length<2) {
          alert("Message is too short")
          event.preventDefault();
          document.getElementById(document.forms.contactForm.message.id).focus();
          document.getElementById(document.forms.contactForm.message.id).select(); 
          return false;
        
        }  
       else if (argMessage.length>100) {
          alert("Message is too long")
          event.preventDefault();
          document.getElementById(document.forms.contactForm.message.id).focus();
          document.getElementById(document.forms.contactForm.message.id).select(); 
          return false;
        
        }  
    
      
  
  function checkValidMail(inputtxt){
  
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputtxt))
    { 
     
     return true;
    }
    else
    { 
     
      return false;
    }
  }
}


function count_word( val ){
    var wom = val.match(/\S+/g);
    return {
        words : wom ? wom.length : 0
    };
}

var showWordCount   = document.getElementById("countWord");
argMessage.addEventListener("input", function(){
  var v = count_word( this.value );
  showWordCount.innerHTML = (
      "<br>Words: "+ v.words
  );
}, false);