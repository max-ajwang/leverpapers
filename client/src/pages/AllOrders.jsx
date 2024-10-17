import { toast } from 'react-toastify';
import { OrdersContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';

const allOrdersQuery = (params) => {
  const { search, orderStatus, orderType, sort, page } = params;

  return {
    queryKey: [
      'orders',
      search ?? '',
      orderStatus ?? 'all',
      orderType ?? 'all',
      sort ?? 'newest',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/orders', { params });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allOrdersQuery(params));
    return { searchValues: { ...params } };
  };

const AllOrdersContext = createContext();

const AllOrders = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allOrdersQuery(searchValues));

  return (
    <AllOrdersContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <OrdersContainer />
    </AllOrdersContext.Provider>
  );
};

export const useAllOrdersContext = () => useContext(AllOrdersContext);

export default AllOrders;
