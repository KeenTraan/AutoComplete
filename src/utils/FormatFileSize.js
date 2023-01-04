import { NUMBER_BYTES } from "@/constant/Dopzone"
const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return "0 bytes";
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = Math.floor(Math.log(bytes) / Math.log(NUMBER_BYTES));
    return `${parseFloat((bytes / Math.pow(NUMBER_BYTES, i)).toFixed(dm))} ${sizes[i]}`
}
export default formatBytes;