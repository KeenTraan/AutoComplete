import { v4 as uuidv4 } from 'uuid';
export const stepProgress = [
    {
        id: 1,
        num: 1,
        isDone: false,
    },
    {
        id: 2,
        num: 2,
        isDone: false,
    },
    {
        id: 3,
        num: 3,
        isDone: false,
    }
]
export const FirstForm = [
    {
        id: uuidv4(),
        label: "Họ Và Tên",
        view_type: 'input-text',
        required: true,
        key: 'fullname',
        value: "",
        error: "",
        maxlength: 100
    }
]