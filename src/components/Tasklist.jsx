import { useState } from 'react';

import { UpdateModel } from './UpdateModel';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Tasklist = () => {

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
                        <th>#</th>
                        <th>Title</th>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto </td>
                        <td>
                            <Button className='mx-2' variant="primary" onClick={updateTask}>
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                            <Button variant="primary" onClick={deleteTask}>
                                <i className="bi bi-trash3"></i>
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <UpdateModel
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </section>

    );
}

export default Tasklist