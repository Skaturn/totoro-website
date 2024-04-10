document.addEventListener("DOMContentLoaded", function () {
  // window.Jupiter.init({
  //   displayMode: "integrated",
  //   integratedTargetId: "integrated-terminal",
  //   endpoint: "https://api.mainnet-beta.solana.com",
  //   formProps: {
  //     initialOutputMint: "BMZrGVueywcyYekmWZSf4cJnmdNTcVe1cML3QoySh3HC",
  //   },
  // });
  var video = document.getElementById("background-video");
  video.onended = function () {
    video.classList.add("fadeOut");

    setTimeout(function () {
      var contentDiv = document.getElementById("after-video-content");
      contentDiv.style.display = "flex";
      contentDiv.classList.add("fadeIn");

      // document.body.style.overflow = "auto";
      // document.documentElement.style.overflow = "auto";

      var titleSvg = document.getElementById("title-container");
      var dexScreener = document.getElementById("dexscreener-embed-container");
      var leftImg = document.getElementById("left-image");
      var rightImg = document.getElementById("right-image");
      var dexContainer = document.getElementById("dex-container");
      var socialButton = document.getElementById("social-button-container");

      titleSvg.style.animation = "bounceUp 2s ease 0s 1 normal forwards";
      leftImg.style.animation =
        "fadeIn 2s ease 0s 1 normal forwards, sizeIncrease 2s ease 0s 1 normal forwards, continuousRotate 2s ease 0s infinite normal forwards";
      rightImg.style.animation =
        "fadeIn 2s ease 0s 1 normal forwards, sizeIncrease 2s ease 0s 1 normal forwards, continuousRotate 2s ease 0s infinite normal forwards";
      socialButton.style.animation = "fadeIn 2s ease 0s 1 normal forwards";
      dexScreener.style.animation = "fadeIn 2s ease 0s 1 normal forwards";
      dexContainer.style.animation = "fadeIn 2s ease 0s 1 normal forwards";
    }, 0);
  };
});

function copyText() {
  const text = document.getElementById("coin-address").innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Show the tooltip
      const tooltip = document.getElementById("tooltip");
      tooltip.style.visibility = "visible";

      // Hide the tooltip after 2 seconds
      setTimeout(() => {
        tooltip.style.visibility = "hidden";
      }, 2000);
    })
    .catch((err) => {
      console.error("Error in copying text: ", err);
    });
}
