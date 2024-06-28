import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddTask = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter Task" />
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