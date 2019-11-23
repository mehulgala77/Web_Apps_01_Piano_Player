
// Driver code
$( document ).ready(function() {

  // Listen for the click events on all piano tunes
  $(".piano > *").click(playMusic);

  // When user clicks on "Display Key" control
  $(".switch label input[type=checkbox]").click(displayKeys);

  // To play songs when play button is clicked.
  $(".songs .btn").click(playSong);

});

function playMusic(e) {

  const song = "tunes/" + this.dataset.key + ".mp3";

  const music = new Audio(song);
  music.play();

  // Display the key text which is pressed.
  const key = $(this).find(".key");

  // To show the key text which is being pressed
  if(!key.hasClass("show")) {
    key.addClass("show");
    setTimeout(() => {
      key.removeClass("show");
    }, 300);
  }

  // To show make the key font go little higher
  if(!key.hasClass("highlight")) {
    key.addClass("highlight");
    setTimeout(() => {
      key.removeClass("highlight");
    }, 300);
  }

  // To show the pressing effect
  $(this).addClass("active");
  setTimeout(() => {
    $(this).removeClass("active");
  }, 300);
}

function displayKeys() {
  if (this.checked == true) {
    $(".key").addClass("show");
  }
  else {
    $(".key").removeClass("show");
  }
}

let playing = false;

async function pressKey(key, wait = 500) {

  $("[data-key=" + key + "]").click();
  await new Promise( (resolve) => {
    setTimeout(() => resolve(), wait);
  });

}

// When a song request arises
async function playSong() {
  if (playing) return;  // If already playing, do not play again.

  playing = true;

  await new Promise( (resolve) => {
    setTimeout(() => resolve(), 1000);
  });

  $(this).text("Playing 🎼");

  if($(this).attr("id").includes("Happy")) {

    // First line
    await pressKey("c4");
    await pressKey("c4");
    await pressKey("d4");
    await pressKey("c4");
    await pressKey("f4");
    await pressKey("e4", 1500);

    // Second line
    await pressKey("c4");
    await pressKey("c4");
    await pressKey("d4");
    await pressKey("c4");
    await pressKey("g4");
    await pressKey("f4", 1500);

    // Third line
    await pressKey("c4");
    await pressKey("c4");
    await pressKey("c4");
    await pressKey("a4");
    await pressKey("f4");
    await pressKey("e4");
    await pressKey("d4", 1500);

    // Line line
    await pressKey("bb4");
    await pressKey("bb4");
    await pressKey("a4");
    await pressKey("f4");
    await pressKey("g4");
    await pressKey("f4", 1500);

  }

  if($(this).attr("id").includes("Aashiqui")) {

    // First line
    await pressKey("ab4", 300);
    await pressKey("bb4", 300);
    await pressKey("c5", 800);
    await pressKey("ab4", 300);
    await pressKey("bb4", 1500);

    // Second line
    await pressKey("ab4", 300);
    await pressKey("bb4", 300);
    await pressKey("c5", 800);
    await pressKey("ab4", 300);
    await pressKey("bb4", 1500);

    // Third line
    await pressKey("g4", 700);
    await pressKey("bb4", 300);
    await pressKey("ab4", 1000);
    await pressKey("g4", 300);
    await pressKey("f4", 300);
    await pressKey("g4", 800);
    await pressKey("eb4", 300);
    await pressKey("f4", 500);
    await pressKey("g4", 500);

    // Fourth line
    await pressKey("ab4", 300);
    await pressKey("bb4", 300);
    await pressKey("c5", 800);
    await pressKey("ab4", 300);
    await pressKey("bb4", 1500);

    // Fifth line
    await pressKey("ab4", 300);
    await pressKey("bb4", 300);
    await pressKey("c5", 800);
    await pressKey("ab4", 300);
    await pressKey("bb4", 1500);

    // Sixth line
    await pressKey("g4", 700);
    await pressKey("bb4", 300);
    await pressKey("ab4", 1000);
    await pressKey("g4", 300);
    await pressKey("f4", 300);
    await pressKey("g4", 800);
    await pressKey("eb4", 300);
    await pressKey("f4", 500);
  }

  $(this).text("Play 🎹");

  playing = false;
}
