function validateForm() {

    let x = document.forms["contactForm"]["fname", "lname", "message"].value;

    if (x == "") {
      alert("Required field must be fill e.g. Name, Last Name and Message!");
      return false;
    }
}