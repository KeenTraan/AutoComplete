import { v4 as uuidv4 } from 'uuid';
export const stepForm = [
    {
        label: "Thông tin",
        layout: [
            {
                id: uuidv4(),
                label: 'Họ và tên',
                type: 'text',
                key: 'name',
                required: true,
            },
            {
                id: uuidv4(),
                label: 'Ngày Sinh',
                type: "text",
                key: 'age',
            },
            {
                id: uuidv4(),
                label: 'Thành Phố',
                type: 'dropdown',
                listOptions: []
            },
            {
                id: uuidv4(),
                label: 'Vị trí làm việc',
                type: 'search',
            },
            {
                id: uuidv4(),
                label: 'Mô tả về bản thân',
                type: 'text_area'
            },
            {
                id: uuidv4(),
                label: 'Ảnh cá nhân',
                type: "Drop_and_Drag"
            },
        ]
    },
    {
        label: "Kinh nghiệm làm việc",
        layout: [
            {
                id: uuidv4(),
                label: 'Thông tin cá nhân',
                isDone: true,
            },
            {
                id: uuidv4(),
                label: 'Kinh nghiệm làm việc',
                isDone: true,
            },
            {
                id: uuidv4(),
                label: 'Xác nhận thông tin',
                isDone: true,
            },
            {
                id: uuidv4(),
                label: 'Xác nhận thông tin',
                isDone: true,
            }, {
                id: uuidv4(),
                label: 'Xác nhận thông tin',
                isDone: true,
            },
        ]
    },
    {
        label: "Xác Nhận Thông Tin",
        layout: [
            {
                id: uuidv4(),
                label: 'Thông tin cá nhân',
                isDone: true,
            },
            {
                id: uuidv4(),
                label: 'Kinh nghiệm làm việc',
                isDone: true,
            },
            {
                id: uuidv4(),
                label: 'Xác nhận thông tin',
                isDone: true,
            },
            {
                id: uuidv4(),
                label: 'Xác nhận thông tin',
                isDone: true,
            }, {
                id: uuidv4(),
                label: 'Xác nhận thông tin',
                isDone: true,
            },
        ]
    }
]



// [
//     {
//         name: 'quang',
//         old: 25,
//     },

//     {
//         name: 'quang',
//         old: 25,
//     }
// ]