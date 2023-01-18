import convertMbtoBytes from "@/utils/ConvertMbToBytes";
export const MESSAGE = {
  SIZE_ERROR: "File size must be less than ",
  LIMITED_ERROR: "File Limited ",
  DUPLICATE_ERROR: "file existed",
  SUCCESSFULLY: 'Upload file successfully'
}
export const TYPE_FILE = {
  DOCX: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  JPEG: "image/jpeg",
  XLS: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  PP: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
}
export const MAXSIZE = convertMbtoBytes(10);
