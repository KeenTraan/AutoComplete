const data = [
    {
        step: '1',
        layout: [
            {
                type: text,
                key: "name",
            },
            {
                key: Worker,
                type: multiDefinitions,
                definition: [
                    {
                        type: text,
                        key: "ten cong viec",
                    },
                    {
                        type: text,
                        key: "ngay lam viec",
                    },
                ]
            }
        ]
    }
]

const saveData = [
    {
        name: "value name",
        Worker: [
            {
                tencongviec: "",
                ngaylamviec: "",
            }, {
                tencongviec: "",
                ngaylamviec: "",
            }, {
                tencongviec: "",
                ngaylamviec: "",
            },
        ]
    }
]