import { v4 as uuidv4 } from 'uuid';
export const stepForm = [
    {
        label: "Thông tin",
        isActive: true,
        step: 1,
        layout: [
            {
                id: uuidv4(),
                label: 'Họ và tên',
                type: 'text',
                key: 'name',
                maxLength: 100,
                required: true,
                err: '',
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Ngày Sinh',
                type: "datetime",
                key: 'age',
                required: true,
                err: "",
                value: ""
            },
            {
                id: uuidv4(),
                label: 'Thành Phố',
                type: 'select',
                key: 'address',
                dropdown_type: 'chosen_city',
                required: false,
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Vị trí làm việc',
                description: 'Có thể chọn nhiều vị trí làm việc mà bạn muốn làm việc',
                required: false,
                type: 'search',
                key: 'job',
                value: []
            },
            {
                id: uuidv4(),
                label: 'Mô tả về bản thân',
                required: false,
                type: 'textarea',
                maxLength: 1000,
                value: '',
                err: "",
                key: 'description'
            },
            {
                id: uuidv4(),
                label: 'Ảnh cá nhân',
                required: false,
                type: 'input_multi_file',
                value: []
            },
        ]
    },
    {
        label: "Kinh nghiệm làm việc",
        isActive: false,
        step: 2,
        layout: [
            {
                id: uuidv4(),
                type: 'chosen',
                key: 'positions',
                required: false,
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Vị trí từng làm',
                err: "",
                type: 'text',
                key: 'worked_posiotion',
                maxLength: 100,
                required: true,
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Thời gian làm việc',
                key: 'input_range_time',
                type: "input_range_time",
                required: true,
                err: "",
                value: { from: '', to: '' }
            },
            {
                id: uuidv4(),
                label: 'Mô tả công việc',
                key: 'description',
                type: 'textarea',
                maxLength: 5000,
                required: false,
                err: "",
                value: ''
            }
        ]
    },
    {
        label: "Xác nhận thông tin",
        isActive: false,
        step: 3,
        layout: [
            {
                id: uuidv4(),
                label: 'Lý do muốn ứng tuyển vào công ty',
                type: 'textarea',
                key: 'description',
                maxLength: 1000,
                required: true,
                err: '',
                value: ''
            },
            {
                id: uuidv4(),
                label: 'Mức lương mong muốn',
                type: 'salary',
                key: 'salary',
                required: true,
                err: '',
                value: '',
                maxLength: 10
            },
        ]
    }
]

