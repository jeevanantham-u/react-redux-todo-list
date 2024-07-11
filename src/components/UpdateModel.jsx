import { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { updateTaskInList } from '../../store/taskSlice';

export const UpdateModel = (props) => {

    const dispatch = useDispatch();

    const { selectedTask } = useSelector((state) => state.tasks);

    const [task, setTask] = useState({
        id: '',
        title: '',
        task: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setTask(prev => ({ ...prev, [name]: value }));
    }

    const updateTask = () => {
        props.onHide();
        dispatch(updateTaskInList(task));
      };

    useEffect(() => {
        if (Object.keys(selectedTask).length !== 0) {
            setTask({
                id: selectedTask.id,
                title: selectedTask.title,
                task: selectedTask.task
            });
        }
    }, [selectedTask]);

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Edit title</Form.Label>
                            <Form.Control type="text" placeholder="Edit Title" name="title"
                                value={task.title}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Edit task</Form.Label>
                            <Form.Control type="text" placeholder="Edit Task" name="task" value={task.task}
                                onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit" 
                        onClick={(e) => updateTask(e)}>
                        Update task
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
