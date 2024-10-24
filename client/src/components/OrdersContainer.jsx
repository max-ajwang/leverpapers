import Order from './Order';
import Wrapper from '../assets/wrappers/OrdersContainer';
import { useAllOrdersContext } from '../pages/AllOrders';
import PageBtnContainer from './PageBtnContainer';

const OrdersContainer = () => {
  const { data } = useAllOrdersContext();
  const { orders, totalOrders, numOfPages } = data;

  if (orders.length === 0) {
    return (
      <Wrapper>
        <h2>No orders to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalOrders} order{orders.length > 1 && 's'}
      </h5>
      <div className="orders">
        {orders.map((order) => {
          return <Order key={order._id} {...order} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default OrdersContainer;
