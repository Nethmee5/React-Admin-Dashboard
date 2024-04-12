import "./widget.scss";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Widget = () => {
  return (
    <>
      <div className="widget">
        <div className="left">
          <span className="title">Users</span>
          <span className="counter">21312</span>
          <span className="link">See all user</span>
        </div>
        <div className="right">right</div>
        <div className="percentage">
          <ArrowUpwardIcon/>
          20%
        </div>
      </div>
      <div className="widget">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
      <div className="widget">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
      <div className="widget">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    </>
  );
};

export default Widget;
