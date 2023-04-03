import { Button, Checkbox, List } from "antd";
import { DeleteFilled } from '@ant-design/icons';

export const ListTask = ({tasks, onToggle, onDelete}) => {
    return (
        <List id="list-task"
            dataSource={tasks} 
            renderItem={(task) => (
                <List.Item>
                    <Checkbox checked={task.completed} onChange={() => onToggle(task)} />
                    <span id="task-content" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.name}
                    </span>
                    <Button onClick={() => onDelete(task)} > <DeleteFilled /> </Button>
                </List.Item>
            )}
        />
    );
};