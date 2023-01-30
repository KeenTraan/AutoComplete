import { v4 as uuidv4 } from 'uuid';
export const stepForm = [
    {
        label: "Thông tin",
        isActive: true,
        layout: [
            {
                id: uuidv4(),
                label: 'Họ và tên',
                type: 'text',
                key: 'name',
                required: true,
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Ngày Sinh',
                type: "datetime",
                key: 'age',
                required: true,
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Thành Phố',
                type: 'select',
                key: 'address',
                dropdown_type: 'chosen_city',
                required: true,
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Vị trí làm việc',
                description: 'Có thể chọn nhiều vị trí làm việc mà bạn muốn làm việc',
                required: true,
                type: 'input_search',
                value: '',
                key: 'job'
            },
            {
                id: uuidv4(),
                label: 'Mô tả về bản thân',
                required: false,
                type: 'textarea',
                value: '',
                key: 'description'
            },
            {
                id: uuidv4(),
                label: 'Ảnh cá nhân',
                required: true,
                type: 'input_multi_file',
                value: {}
            },
        ]
    },
    {
        label: "Kinh nghiệm làm việc",
        isActive: false,
        layout: [
            {
                id: uuidv4(),
                type: 'select',
                key: 'positions',
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Vị trí từng làm',
                type: 'text',
                key: 'worked_posiotion',
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Thời gian làm việc',
                key: 'input_range_time',
                type: "input_range_time",
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Mô tả công việc',
                key: 'description',
                type: 'textarea',
                required: false,
                value: ''
            }
        ]
    },
    {
        label: "Xác nhận thông tin",
        isActive: false,
        layout: [
            {
                id: uuidv4(),
                label: 'Lý do muốn ứng tuyển vào công ty',
                type: 'textarea',
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Mức lương mong muốn',
                type: 'salary',
                required: true,
                value: ''
            },
        ]
    }
]

