const fileInput = document.getElementById("fileInput");
const uploadedImage = document.getElementById("uploadedImage");
const useImageBtn = document.getElementById("useImage");
const downloadImageBtn = document.getElementById("downloadImage");
const uploadedImageContainer = document.querySelector(".uploaded-image");
const cropOptions = document.querySelectorAll(".crop-options .option");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImage.src = e.target.result;
    uploadedImageContainer.style.display = "flex";
  };
  reader.readAsDataURL(file);
});

cropOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const cropType = option.dataset.crop;
    
    switch (cropType) {
      case "original":
        uploadedImage.style.width = "auto";
        uploadedImage.style.height = "auto";
        uploadedImage.style.borderRadius = "";
        uploadedImage.style.aspectRatio = "unset";
        break;
      case "heart":
        uploadedImage.style.width = "auto";
        uploadedImage.style.height = "auto";
        uploadedImage.style.borderRadius =
          "30% 30% 10% 10% / 10% 10% 40% 40%";
        uploadedImage.style.aspectRatio = "unset";
        break;
      case "square":
        uploadedImage.style.width = "100%";
        uploadedImage.style.height = "100%";
        uploadedImage.style.borderRadius = "";
        uploadedImage.style.aspectRatio = "1/1";
        break;
      case "circle":
        uploadedImage.style.width = "auto";
        uploadedImage.style.height = "100%";
        uploadedImage.style.borderRadius = "80%";
        uploadedImage.style.aspectRatio = "unset";
        break;
      case "rectangle":
        uploadedImage.style.width = "100%";
        uploadedImage.style.height = "vw";
        uploadedImage.style.borderRadius = "";
        uploadedImage.style.aspectRatio = "unset";
        break;
      default:
        break;
    }
  });
});

downloadImageBtn.addEventListener("click", () => {
  const image = uploadedImage;
  const link = document.createElement("a");
  link.href = image.src;
  link.download = "image.png";
  link.click();
});