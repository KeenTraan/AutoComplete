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
                type: "datetime",
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
                description: 'Có thể chọn nhiều vị trí làm việc mà bạn muốn làm việc',
                type: 'position',
            },
            {
                id: uuidv4(),
                label: 'Mô tả về bản thân',
                type: 'textarea'
            },
            {
                id: uuidv4(),
                label: 'Ảnh cá nhân',
                type: 'Drop_and_Drag'
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
        label: "Xác nhận thông tin",
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


