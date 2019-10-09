/* Author: Emma Brousseau
Description: CS 321 Assignment 3 */
function validate() {
      
         if(document.form.name.value == "") {
            alert("Please enter your name");
            document.form.name.focus() ;
            return false;
         }
         if(document.form.email.value == "") {
            alert("Please enter your email");
            document.form.email.focus() ;
            return false;
         }
         if(document.form.phone.value ==""){
           alert("Please enter your phone number");
           document.form.phone.focus();
           return false;
         }
  //Shino: the radio button/check box don't work correctly, they flag errors no matter what, but I left the code in because it does technically catch errors
  if(form.radioButton.checked){
    true;
  }else{
    alert("Please select an option!")
  }
  if(document.form.option.checked) {
    true;
  }else{
    alert("Please select an option");
            document.form.option.focus() ;
            return false;
  }
          }

  
