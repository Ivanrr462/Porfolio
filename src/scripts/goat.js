if (typeof document !== "undefined") {
  let keySequence = "";

  const goatContainer = document.getElementById("goat-container");
  const audioElement = document.getElementById("goat-audio");

  function showGoat() {
    goatContainer.classList.add("show");
    audioElement.currentTime = 0;
    audioElement.play();
  }

  function hideGoat() {
    goatContainer.classList.remove("show");
  }

  audioElement.addEventListener("ended", hideGoat);

  window.addEventListener("keydown", (event) => {
    keySequence += event.key;

    if (keySequence.length > 2) {
      keySequence = keySequence.slice(-2);
    }

    if (keySequence === "33") {
      showGoat();
      keySequence = "";
    }
  });
}
