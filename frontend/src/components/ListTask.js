import { Button, Checkbox, List } from "antd";
import { DeleteFilled } from '@ant-design/icons';
import axios from "axios";

export function ListTask({tasks, setTasks, api_url}) {
    function handleDelete(task) {
        const updatedTasks = tasks.filter((t) => t.id !== task.id);
        setTasks(updatedTasks);
        axios.delete(`${api_url}${task.id}/`);
    }

    function handleToggle(task) {
        const updatedTasks = tasks.map((t) => {
        if(t.id === task.id) {
            return {...t, completed: !t.completed};
        }
        return t;
        });
        setTasks(updatedTasks);
        const taskData = {name: task.name, addition_info: task.addition_info, completed: !task.completed};
        axios.put(`${api_url}${task.id}/`, taskData)
    }

    return (
        <List id="list-task" data-testid='list-task'
            dataSource={tasks} 
            renderItem={(task) => (
                <List.Item>
                    <Checkbox checked={task.completed} onChange={() => handleToggle(task)} />
                    <span id="task-content" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.name}
                    </span>
                    <Button onClick={() => handleDelete(task)} > <DeleteFilled /> </Button>
                </List.Item>
            )}
        />
    );
};