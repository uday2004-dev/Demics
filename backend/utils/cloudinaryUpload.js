


import cloudinary from "../config/cloudinary.js";

console.log("Cloudinary Object =>", cloudinary.config());

export const uploadOnCloudinary = async (
  fileBuffer,
  folder = "uploads"
) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      )
      .end(fileBuffer);
  });
};