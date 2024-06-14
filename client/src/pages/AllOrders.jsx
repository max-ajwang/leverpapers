import { toast } from 'react-toastify';
import { OrdersContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get('/orders');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllOrders = () => {
  const { data } = useLoaderData();

  return (
    <>
      <SearchContainer />
      <OrdersContainer />
    </>
  );
};

export default AllOrders;
