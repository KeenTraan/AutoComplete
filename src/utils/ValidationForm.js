export const checkLength = (item) => {
    if (item.value.length > item.maxLength) {
        item.err = `${item.label} must be less than ${item.maxLength} characters`
    }
}
export const checkEmptyValue = (item) => {
    if (!item.value) {
        item.err = `${item.label} do not empty`
        if (item.key === "company") {
            item.err = `select company`
        }
    }
}
export const checkDateTime = (item) => {
    if (item.value.from > item.value.to) {
        item.err = `Start date must be less than End date`
    }
    if (item.value.from === "" || item.value.to === "") {
        item.err = `${item.label} do not empty`
    }
}
export const checkDuplicateValue = (item) => {
    for (let i = 0; i < item.length; i++) {
        for (let j = 1; j < item.length; j++) {
            let itemI = item[i];
            let itemJ = item[j];
            if (itemI.value.from && itemJ.value.from !== "" && i < j) {
                if (
                    new Date(itemI.value.from) <= new Date(itemJ.value.to) &&
                    new Date(itemJ.value.from) <= new Date(itemI.value.to)
                ) {
                    itemI.err = "Khoảng thời gian bị trùng nhau vui lòng chọn lại";
                    itemJ.err = "Khoảng thời gian bị trùng nhau vui lòng chọn lại";
                } else {
                    itemI.err = "";
                    itemJ.err = "";
                }
            }
        }
    }
} 