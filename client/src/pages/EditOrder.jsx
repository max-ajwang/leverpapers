import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData, useParams } from 'react-router-dom';
import {
  CITATION_STYLE,
  EDUCATION_LEVEL,
  LANGUAGE,
  ORDER_STATUS,
  PAPER_TYPE,
  SUBJECT,
} from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

const singleOrderQuery = (id) => {
  return {
    queryKey: ['order', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/orders/${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleOrderQuery(params.id));
      return params.id;
    } catch (error) {
      toast.error(error.response.data.msg);
      return redirect('/dashboard/all-orders');
    }
  };

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.patch(`/orders/${params.id}`, data);
      queryClient.invalidateQueries(['orders']);
      toast.success('Order edited successfully');
      return redirect('/dashboard/all-orders');
    } catch (error) {
      toast.error(error.response.data.msg);
      return error;
    }
  };

const EditOrder = () => {
  const id = useLoaderData();

  const {
    data: { order },
  } = useQuery(singleOrderQuery(id));

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit order</h4>
        <div className="form-center">
          <FormRowSelect
            name="paperType"
            labelText="paper type"
            defaultValue={order.paperType}
            list={Object.values(PAPER_TYPE)}
          />

          <FormRowSelect
            labelText="education level"
            name="educationLevel"
            defaultValue={order.educationLevel}
            list={Object.values(EDUCATION_LEVEL)}
          />

          <FormRowSelect
            labelText="subject"
            name="subject"
            defaultValue={order.subject}
            list={Object.values(SUBJECT)}
          />

          <FormRow
            type="text"
            name="topic"
            labelText="topic"
            defaultValue={order.topic}
          />

          <FormRow
            type="number"
            name="pages"
            labelText="pages"
            defaultValue={order.pages}
          />
          <FormRow
            type="number"
            name="sources"
            labelText="sources"
            defaultValue={order.sources}
          />

          <FormRow
            type="date"
            name="deadlineDate"
            labelText="deadline date"
            defaultValue={order.deadlineDate}
          />

          <FormRowSelect
            labelText="citation style"
            name="citationStyle"
            defaultValue={order.citationStyle}
            list={Object.values(CITATION_STYLE)}
          />

          <FormRowSelect
            labelText="language"
            name="language"
            defaultValue={order.language}
            list={Object.values(LANGUAGE)}
          />

          <FormRowSelect
            labelText="order status"
            name="orderStatus"
            defaultValue={order.orderStatus}
            list={Object.values(ORDER_STATUS)}
          />

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditOrder;
