import { Form, Input } from "antd";
import axios from "axios";

function InputTask({ tasks, setTasks, api_url }) {
    const [form] = Form.useForm();
    
    function submitTask(value) {
        form.resetFields();
        const newTask = {id : tasks.length + 1, name: value.task, addition_info: '', completed: false};
        setTasks([...tasks, newTask]);
        axios.post(api_url, newTask);
    }
    
    return (
        <Form form={form} onFinish={(value) => submitTask(value)} id="form-input" >
            <Form.Item name="task" rules={[{ required: true }]}>
                <Input
                    placeholder="Your task..."
                />
            </Form.Item>
        </Form>
    );
}

export default InputTask;