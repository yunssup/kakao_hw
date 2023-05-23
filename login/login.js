function validateForm() {
  var nameInput = document.querySelector('input[name="st_name"]');
  var idInput = document.querySelector('input[name="st_id"]');

  if (nameInput.value === "" || idInput.value === "") {
    alert("Please fill in all the fields.");
    return false;
  }

  // 폼 검증에 성공한 경우 로그인 동작을 수행합니다.
}

var idInput = document.getElementById("st_id");
idInput.addEventListener("input", function () {
  var hiddenValue = idInput.value.replace(/./g, "*");
  idInput.value = hiddenValue;
});
