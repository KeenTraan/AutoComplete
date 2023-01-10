const formatBytes = (value) => {
    let  sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (value === 0) return '0 Byte';
    let i = parseInt(Math.floor(Math.log(value) / Math.log(1024)));
    return Math.round(value / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
export default formatBytes;