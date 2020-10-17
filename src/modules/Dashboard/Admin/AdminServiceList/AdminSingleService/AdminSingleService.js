import React from 'react';

const AdminSingleService = (props) => {
    const order = props.order;
    return (
        <tr>
            <th scope="row">{order.name}</th>
            <td>{order.email}</td>
            <td>{order.serviceName}</td>
            <td>{order.description}</td>
            <td>
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">Pending</option>
                    <option value="2">Done</option>
                    <option value="3">Ongoing</option>
                </select>
            </td>
        </tr>
    );
};

export default AdminSingleService;