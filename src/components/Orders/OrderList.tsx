import React from "react";

const OrderList: React.FC = () => {
    // const orders: Order[] = useSelector((state: StateType) => state.orderss.orders);

    // const orderList: JSX.Element[] = orders.map((order) => {
    //     return (
    //         <tr className={"table-row"} key={`order_${order.id}`}>
    //             <th scope="row">{order.id}</th>
    //             <td>{order.name}</td>
    //             <td>{order.product.name}</td>
    //             <td>{order.amount}</td>
    //             <td>{order.totalPrice}</td>
    //         </tr>
    //     );
    // });

    return (
        <div className="table-responsive portlet">
            {/*<table className="table">*/}
            {/*    <thead className="thead-light">*/}
            {/*        <tr>*/}
            {/*            <th scope="col">#</th>*/}
            {/*            <th scope="col">Name</th>*/}
            {/*            <th scope="col">Product</th>*/}
            {/*            <th scope="col">Amount</th>*/}
            {/*            <th scope="col">Total price</th>*/}
            {/*        </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>{orderList}</tbody>*/}
            {/*</table>*/}
        </div>
    );
};

export default OrderList;
