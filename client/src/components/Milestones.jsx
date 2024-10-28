import Wrapper from '../assets/wrappers/Milestones';

const Milestones = () => {
  return (
    <Wrapper>
      <div className="mileStonesContainer">
        <h1>Milestones</h1>
        <ul className="mileStonesSections">
          <li>
            <span>4.8/5 </span>
            <span>Customer rating</span>
          </li>
          <li>
            <span>8 </span>
            <span>Years in business</span>
          </li>
          <li>
            <span>20+ </span>
            <span>Countries served</span>
          </li>
          <li>
            <span>1K+ </span>
            <span>Writers</span>
          </li>
          <li>
            <span>200K+ </span>
            <span>Successful orders</span>
          </li>
          <li>
            <span>1MM+ </span>
            <span>Pages written</span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
export default Milestones;
