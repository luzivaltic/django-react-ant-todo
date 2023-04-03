import { Form, Input } from "antd";


function InputTask({ onAdd }) {
    const [form] = Form.useForm();
    function submitTask(value) {
        form.resetFields();
        onAdd(value);
    }
    return (
        <Form form={form} onFinish={submitTask} id="form-input" >
            <Form.Item name="task" rules={[{ required: true }]}>
                <Input
                    placeholder="Your task..."
                />
            </Form.Item>
        </Form>
    );
}

export default InputTask;