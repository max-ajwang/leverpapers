import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData, useParams } from 'react-router-dom';
import { ORDER_STATUS, ORDER_TYPE } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/orders/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect('/dashboard/all-orders');
  }
};

export const action = async () => {
  return null;
};

const EditOrder = () => {
  const { order } = useLoaderData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return <h1>EditOrder</h1>;
};

export default EditOrder;
