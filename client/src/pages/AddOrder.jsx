import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
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

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post('/orders', data);
      queryClient.invalidateQueries(['orders']);
      toast.success('Order added successfully');
      return redirect('all-orders');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const AddOrder = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add order</h4>
        <div className="form-center">
          <FormRowSelect
            labelText="paper type"
            name="paperType"
            defaultValue={PAPER_TYPE.ESSAY}
            list={Object.values(PAPER_TYPE)}
          />

          <FormRowSelect
            labelText="education level"
            name="educationLevel"
            defaultValue={EDUCATION_LEVEL.COLLEGE}
            list={Object.values(EDUCATION_LEVEL)}
          />

          <FormRowSelect
            labelText="subject"
            name="subject"
            defaultValue={SUBJECT.PSYCHOLOGY}
            list={Object.values(SUBJECT)}
          />

          <FormRow type="text" name="topic" />
          <FormRow type="number" name="pages" />
          <FormRow type="number" name="sources" />
          <FormRow type="date" name="deadlineDate" />

          <FormRowSelect
            labelText="citation style"
            name="citationStyle"
            defaultValue={CITATION_STYLE.APA_7TH_EDITION}
            list={Object.values(CITATION_STYLE)}
          />

          <FormRowSelect
            labelText="language"
            name="language"
            defaultValue={LANGUAGE.ENGLISH_US}
            list={Object.values(LANGUAGE)}
          />

          <FormRowSelect
            labelText="order status"
            name="orderStatus"
            defaultValue={ORDER_STATUS.ACCEPTING_BIDS}
            list={Object.values(ORDER_STATUS)}
          />

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddOrder;
