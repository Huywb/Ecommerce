export const uploadToCloudinary = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'Ecomerce_App')
  const res = await fetch(
    'https://api.cloudinary.com/v1_1/abcdvku/image/upload',
    {
      method: 'POST',
      body: formData
    }
  )
  if (!res.ok) {
    throw new Error('Upload failed')
  }
  return await res.json()
}
