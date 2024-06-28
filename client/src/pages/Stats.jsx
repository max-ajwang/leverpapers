import { ChartsContainer, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const response = await customFetch.get('/orders/stats');
    return response.data;
  } catch (error) {
    return error;
  }
};

const Stats = () => {
  const { defaultStats, monthlyOrders } = useLoaderData();
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyOrders?.length > 0 && <ChartsContainer data={monthlyOrders} />}
    </>
  );
};
export default Stats;
