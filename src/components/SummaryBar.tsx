import "./summary-bar.css";
const SummaryBar = ({
  icon,
  category,
  score,
  bgColor,
  txtColor,
}: {
  icon: string;
  category: string;
  score: number;
  bgColor: string;
  txtColor?: string;
}) => {
  return (
    <div className="summary-container">
      <div
        className="summary-bar"
        style={{ backgroundColor: `var(${bgColor})` }}
      >
        <div className="summary-bar-img-container">
          <img src={icon} alt={icon} />
          <h3 style={{ color: `var(${txtColor})` }}>{category}</h3>
        </div>
        <div className="summary-bar-value">
          <span>{score}</span>
          <span> / 100</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryBar;
