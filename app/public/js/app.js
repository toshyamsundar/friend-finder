$(document).ready(() => {
  $(document).on("click", "#btn-submit", event => {
    event.preventDefault();

    let friendInfo = {
      name: $("#name").val(),
      photo: $("#photo-url").val()
    };

    let scores = [];

    $("#survey-details")
      .children(".form-control")
      .each(() => {
        scores.push($(".survey-question").val());
      });

    friendInfo.scores = scores.map(Number);

    $.post("/api/friends", friendInfo)
      .then(results => {
        $("#modal-friend").modal("show");
        $("#friend-name").text(results.name);
        $("#friend-photo").attr("src", results.photo);
      })
      .catch(err => {
        console.log(err);
      });
  });
});
