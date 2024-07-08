import { useState } from 'react';

import { UpdateModel } from './UpdateModel';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { useSelector } from 'react-redux';

const Tasklist = () => {
    const {tasksList} = useSelector((state) => state.tasks);
    const [modalShow, setModalShow] = useState(false);

    function updateTask() {
        console.log("Upadte");
        setModalShow(true);
    }

    function deleteTask() {
        console.log("Delete");
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

                    {tasksList && tasksList.map((task) => {
                        return (<tr>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.task}</td>
                            <td>
                                <Button className='mx-2' variant="primary" onClick={updateTask}>
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