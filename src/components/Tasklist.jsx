import { useState } from 'react';

import { UpdateModel } from './UpdateModel';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTask ,updateTaskInList} from '../../store/taskSlice';


const Tasklist = () => {

    const dispatch = useDispatch();
    const { tasksList } = useSelector((state) => state.tasks);
    const [modalShow, setModalShow] = useState(false);

    const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true)
    dispatch(setSelectedTask(task))
  };

    function deleteTask() {
        // console.log("Delete");
    }

    return (
        <section className='my-5'>
            <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Title</th>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {tasksList && tasksList.map((task, index) => {
                        return (<tr key={task.id}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.task}</td>
                            <td>
                                <Button className='mx-2' variant="primary" onClick={ () => updateTask (task)}>
                                    <i className="bi bi-pencil-square"></i>
                                </Button>
                                <Button variant="primary" onClick={deleteTask}>
                                    <i className="bi bi-trash3"></i>
                                </Button>
                            </td>
                        </tr>)
                    }
                    )}
                </tbody>
            </Table>

            <UpdateModel
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </section>
    );
}

export default Tasklist;