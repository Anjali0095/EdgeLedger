function send() {
  let Name = document.getElementById("name");
  console.log(Name.value);
  let Email = document.getElementById("email");
  console.log(Email.value);
  let Phone = document.getElementById("phone");
  console.log(Phone.value);
  if (Name.value == "" || Email.value == "" || Phone.value == "") {
    return SwalAlerts("Error!", "All Fields are Required!", "error");
  }
  SwalAlerts("Success!", "We Will Call you back soon!", "success");
}
