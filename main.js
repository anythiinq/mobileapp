// Get references to the input and image elements
const uploadInput = document.getElementById('uploadInput');
const previewImage = document.getElementById('previewImage');

// Add an event listener to the input element
uploadInput.addEventListener('change', function(event) {
  // Check if any file is selected
  if (event.target.files.length > 0) {
    // Get the selected file
    const file = event.target.files[0];

    // Create a FileReader object
    const reader = new FileReader();

    // Set up the FileReader onload event
    reader.onload = function() {
      // Set the source of the image element to the loaded data URL
      previewImage.src = reader.result;
    };

    // Read the selected file as a Data URL
    reader.readAsDataURL(file);
  } else {
    // If no file is selected or the selection is canceled, clear the preview
    previewImage.src = '';
  }
});
