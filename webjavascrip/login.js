function dangNhap() {

    //if username/password = rỗng/null
    // alert('Nhap đủ thông tin')
    //else
    // alert('Dang nhap thanh cong!')
    var username = document.getElementById("user-name").value;
    var password = document.getElementById("password").value;
    if ((username == null || username.trim() == "") || (password == null || password.trim() == "")) {
        alert('Nhap đủ thông tin')
    } else {
        alert('Dang nhap  thanh cong!')
    }

}