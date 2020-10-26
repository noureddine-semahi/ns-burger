$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var justDevoured = $(this).data("justdevoured");

    var justDevouredState = {
      devoured:justDevoured
    };

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: justDevouredState
    }).then(
      function() {
        console.log("changed eaten state to", justDevoured);

        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      name: $(bn).val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");

        location.reload();
      }
    );
  });
  
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
      
        location.reload();
      }
    );
  });
});
