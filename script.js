document.addEventListener("DOMContentLoaded", function () {
  // Global initialization for tooltips (run this when the document is ready or after dynamically adding elements)
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Ensure Jupiter is loaded
  if (window.Jupiter) {
    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "integrated-terminal",
      endpoint: "https://api.mainnet-beta.solana.com",
      formProps: {
        initialOutputMint: "BMZrGVueywcyYekmWZSf4cJnmdNTcVe1cML3QoySh3HC",
      },
    });
  }

  // var video = document.getElementById("background-video");
  // video.onended = function () {
  //   video.classList.add("fadeOut");

  //   setTimeout(function () {
  //     var contentDiv = document.getElementById("after-video-content");
  //     contentDiv.style.display = "flex";
  //     contentDiv.classList.add("fadeIn");

  //     // document.body.style.overflow = "auto";
  //     // document.documentElement.style.overflow = "auto";

  //     var titleSvg = document.getElementById("title-container");
  //     var dexScreener = document.getElementById("dexscreener-embed-container");
  //     var leftImg = document.getElementById("left-image");
  //     var rightImg = document.getElementById("right-image");
  //     var dexContainer = document.getElementById("dex-container");
  //     var socialButton = document.getElementById("social-button-container");

  //     titleSvg.style.animation = "bounceUp 2s ease 0s 1 normal forwards";
  //     leftImg.style.animation =
  //       "fadeIn 2s ease 0s 1 normal forwards, sizeIncrease 2s ease 0s 1 normal forwards, continuousRotate 2s ease 0s infinite normal forwards";
  //     rightImg.style.animation =
  //       "fadeIn 2s ease 0s 1 normal forwards, sizeIncrease 2s ease 0s 1 normal forwards, continuousRotate 2s ease 0s infinite normal forwards";
  //     socialButton.style.animation = "fadeIn 2s ease 0s 1 normal forwards";
  //     dexScreener.style.animation = "fadeIn 2s ease 0s 1 normal forwards";
  //     dexContainer.style.animation = "fadeIn 2s ease 0s 1 normal forwards";
  //   }, 0);
  // };
});

function copyText(textToCopy, element) {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Text copied to clipboard");

      // Update the tooltip title
      element.setAttribute("data-bs-title", "Text copied!");

      // Refresh and show tooltip
      showTooltip(element);
    })
    .catch((err) => console.error("Error in copying text: ", err));
}

function showTooltip(element) {
  // First, hide and dispose of any existing tooltip to prevent errors
  let existingTooltip = bootstrap.Tooltip.getInstance(element);
  if (existingTooltip) {
    existingTooltip.dispose(); // Dispose of the existing tooltip instance
  }

  // Reinitialize the tooltip with the updated title
  let tooltipTrigger = new bootstrap.Tooltip(element);

  // Show the tooltip
  tooltipTrigger.show();

  // Optionally hide the tooltip after a delay
  setTimeout(() => {
    tooltipTrigger.hide();
  }, 2000); // Adjust timing as needed
}
