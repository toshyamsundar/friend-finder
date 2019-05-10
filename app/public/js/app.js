$(document).ready(() => {
  $(document).on("click", "#btn-submit", event => {
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

    friendInfo.scores = scores;

    $.post("/api/friends", friendInfo)
      .then(() => {
        console.log("Successfully added");
      })
      .catch(err => {
        console.log(err);
      });
  });
});
