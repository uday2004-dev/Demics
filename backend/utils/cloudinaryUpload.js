


import cloudinary from "../config/cloudinary.js";

console.log("Cloudinary Object =>", cloudinary.config());

export const uploadOnCloudinary = async (fileBuffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "projects",
        },
        (error, result) => {
          if (error) {
            console.log("UPLOAD ERROR =>", error);
            reject(error);
          } else {
            console.log("UPLOAD SUCCESS =>", result);
            resolve(result);
          }
        }
      )
      .end(fileBuffer);
  });
};