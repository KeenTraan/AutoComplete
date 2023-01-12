import { v4 as uuidv4 } from 'uuid';
export const stepProgress = [
    {
        id: uuidv4(),
        num: 1,
        label: 'Thông tin cá nhân',
        isDone: true,
    },
    {
        id: uuidv4(),
        num: 2,
        label: 'Kinh nghiệm làm việc',
        isDone: true,
    },
    {
        id: uuidv4(),
        num: 3,
        label: 'Xác nhận thông tin',
        isDone: true,
    },
]