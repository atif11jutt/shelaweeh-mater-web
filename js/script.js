jQuery(function () {
  $.ajax({
    method: "GET",
    url: "shop-data.json",
  }).done(function (data) {
    for (var i = 0; i < data.length; i++) {
      var shopHTML = `<div class="col-sm-4">
            <div class="card mb-4">
               <img src="${data[i].thumbnail}" alt="cycle" style="width:100%">
               <div class="py-3 px-3">
                  <h3>${data[i].title}</h3>
                  <p class="price">${data[i].price}</p>
                  <p>${data[i].description}</p>
                  <button class="btn btn-primary">Add to Cart</button>
               </div>
            </div>
         </div>`;
      $("#shop").append(shopHTML);
    }
  });



  $("#conact-form").submit(function(e){
    e.preventDefault();
    var name = $("#name").val();
    alert("Thanks "+name+" for contacting!!!")
    $("#conact-form")[0].reset()
  })






//   welcome text
if(localStorage.getItem("username")){
    $("#username").html(localStorage.getItem("username"));
}else{
    var name = prompt("Enter your name!");
    localStorage.setItem("username", name);
    $("#username").html(localStorage.getItem("username"));
}


});
