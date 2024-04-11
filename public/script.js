document.addEventListener("DOMContentLoaded", function () {
  // Global initialization for tooltips (run this when the document is ready or after dynamically adding elements)
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
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
