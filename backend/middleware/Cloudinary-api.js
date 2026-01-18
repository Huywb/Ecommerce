import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (image, folder = "uploads") => {
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder,
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("Upload image error:", error);
    throw error;
  }
};

export const uploadManyImages = async (images, folder = "products") => {
  try {
    const uploadedImages = await Promise.all(
      images.map((img) => uploadImage(img, folder))
    );

    return uploadedImages;
  } catch (error) {
    console.error("Upload many images error:", error);
    throw error;
  }
};

export const deleteImage = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Delete image error:", error);
  }
};

export const getAssetInfo = async (publicId) => {
  try {
    return await cloudinary.api.resource(publicId);
  } catch (error) {
    console.error("Get asset info error:", error);
    throw error;
  }
};
