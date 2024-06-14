import Order from './Order';
import Wrapper from '../assets/wrappers/OrdersContainer';
import { useAllOrdersContext } from '../pages/AllOrders';

const OrdersContainer = () => {
  const { data } = useAllOrdersContext();
  const { orders } = data;

  if (orders.length === 0) {
    return (
      <Wrapper>
        <h2>No orders to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="orders">
        {orders.map((order) => {
          return <Order key={order._id} {...order} />;
        })}
      </div>
    </Wrapper>
  );
};

export default OrdersContainer;
