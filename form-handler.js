function sendemail() {
  event.preventDefault();
  let senderName = document.getElementById("name").value;
  let senderEmail = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  console.log(senderEmail, senderName, message);
  var userid = "LO8FSdaecfEtz-rm4";
  emailjs.init(userid);

  var validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (senderName == "") {
    alert("Please Enter Name");
  } else if (senderEmail == "" || senderEmail.match(!validmail)) {
    alert("Please Enter Valid Email");
  } else if (message == "") {
    alert("Please Enter Message");
  } else {
    var contactdetail = {
      from_name: senderName,
      from_email: senderEmail,
      message: message,
    };

    emailjs.send("service_ocbsucd", "template_8f9f5d9", contactdetail).then(
      function (res) {
        alert("Email Sent Successfully");
      },
      (reason) => {
        alert("Error Occur");
      }
    );
  }
}
