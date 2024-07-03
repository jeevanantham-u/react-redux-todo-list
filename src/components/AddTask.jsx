import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddTask = () => {
  
  const [task, setTask] = useState({
    title: "",
    task: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" name="title" 
          value={task.title}
          onChange={handleChange} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter Task" name="task" value={task.task}
          onChange={handleChange} />
      </Form.Group>
    
    <div className='text-end'>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </div>
      
    </Form>
  )
}

export default AddTask