import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Order';
import OrderInfo from './OrderInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Order = ({
  _id,
  paperType,
  educationLevel,
  subject,
  topic,
  pages,
  sources,
  citationStyle,
  language,
  orderStatus,
  deadlineDate,
  createdAt,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY, HH:mm:ss');
  const deadline = day(deadlineDate).format('MMM Do, YYYY, HH:mm:ss');

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{paperType.charAt(0)}</div>
        <div className="info">
          <h5>{_id}</h5>
          <p>Topic: {topic}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <OrderInfo label="paper type: " text={paperType} />
          <OrderInfo label="subject: " text={subject} />
          <OrderInfo label="education level: " text={educationLevel} />
          <OrderInfo label="pages: " text={pages} />
          <OrderInfo label="sources: " text={sources} />
          <OrderInfo label="citation style: " text={citationStyle} />
          <OrderInfo label="language: " text={language} />
          <OrderInfo label="created on: " text={date} />
          <OrderInfo label="deadline: " text={deadline} />
          <div className={`status ${orderStatus}`}>{orderStatus}</div>
        </div>

        <footer className="actions">
          <Link to={`../edit-order/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-order/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Order;
