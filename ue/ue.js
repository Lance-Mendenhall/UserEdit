var url = "http://localhost:8080/Users/";

$().ready(() => {

$("#getuser").click(() => {
getUserByPrimaryKey($("userid").val())

});
$("#save").click(() => {
    updateUser();

});

});


function updateUser() {
    var id = $("#pid").val();
    var userName = $("#pusername").val();
    var password = $("#ppassword").val();
    var firstName = $("#pfirstName").val();
    var lastName = $("#plastName").val();
    var phoneNumber = $("#phoneNumber").val();
    var email = $("#pemail").val();
    var isReviewer = $("#previewer").val();
    var isAdmin = $("#padmin").val();
    // var active = $("#pactive").val();

    var user = {
        id: id,
        userName : userName,
        password : password,
        firstName : firstName,
        lastName : lastName,
        phoneNumber : phoneNumber,
        email : email,
        isReviewer : isReviewer,
        isAdmin : isAdmin
    }
    $.post(url+"change", user)
        .then((resp) => {
            console.log(resp);
        });

}


function getUserByPrimaryKey(id) {
    console.log("getUserByPrimaryKey()");
    $.getJSON(url+"Get/"+id)
        .then((resp) => {
            render(resp.data);
        });
}


    function render(user) {
      $("#pid").val(user.id);
      $("#pusername").val(user.userName);
      $("#ppassword").val(user.password);
      $("#pfirstname").val(user.firstName);
      $("#plastname").val(user.lastName);
      $("#pphone").val(user.phoneNumber);
      $("#pemail").val(user.email);
      $("#previewer").prop("checked",user.isReviewer);
      $("#padmin").prop("checked",user.idsAdmin);
 }
    

