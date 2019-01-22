function validateEmail(email) {
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email)
 }


$(document).ready(function(){

  //sign-up form animation//

  $("#signup_btn").click(function(){
    $("#main").animate({left:"22.5%"},400);
    $("#main").animate({left:"30%"},500);
    $("#loginform").css("visibility","hidden");
    $("#loginform").animate({left:"25%"},400);

    $("#signupform").animate({left:"17%"},400);
    $("#signupform").animate({left:"30%"},500);
    $("#signupform").css("visibility","visible");
  });

    //login form animation//

  $("#login_btn").click(function(){

    $("#main").animate({left:"77.5%"},400);
    $("#main").animate({left:"70%"},500);
    $("#signupform").css("visibility","hidden");
    $("#signupform").animate({left:"75%"},400);

    $("#loginform").animate({left:"83.5%"},400);
    $("#loginform").animate({left:"70%"},500);
    $("#loginform").css("visibility", "visible");
  });

    //login form validation//

 $("#login_btn2").click(function(){
   let email = $('#emailInput').val();
   let password = $('#passwordInput').val();

   if(name = "" || email == "" || password == ""){
    $('#errormsg-fields').fadeIn('fast')
  } else if(!validateEmail(email)){
     $('#errormsg-email').fadeIn('fast')
   } else {
     $('#validmsg').fadeIn('fast')
    return
  }
      setTimeout(()=>{
        $('.errormsg').fadeOut('fast')
      }, 5000)
 });

      //sign up form animation//

 $("#signup_btn2").click(function(){
   let nameD= $('#nameInput2').val();
   let emailD = $('#emailInput2').val();
   let passwordD = $('#passwordInput2').val();

   if(nameD = "" || emailD == "" || passwordD == ""){
    $('#errormsg-fields2').fadeIn('fast')
  } else if(!validateEmail(emailD)){
     $('#errormsg-email2').fadeIn('fast')
   } else {
     $('#validmsg2').fadeIn('fast')
    return
  }
  setTimeout(()=>{
    $('.errormsg').fadeOut('fast')
  }, 5000)

});

});
