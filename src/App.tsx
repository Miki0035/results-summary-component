import SummaryBar from "./components/SummaryBar";
import { summaryData } from "./data";
import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <div className="upper-container">
          <h1>Your Result</h1>
          <div className="result-container">
            <div className="result">
              <div>
                <span>76 </span>
                <span>of 100</span>
              </div>
            </div>
          </div>
          <div className="text-container">
            <h2>Great</h2>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="bottom-container">
          <h2>Summary</h2>
          {summaryData.map((data) => (
            <SummaryBar
              icon={data.icon}
              category={data.category}
              score={data.score}
              bgColor={data.bgColor}
              txtColor={data.txtColor}
            />
          ))}
          <div className="button-container">
            <button>Continue</button>
          </div>
        </div>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/mikiyas-kebede-b661aa225/"
          target="_blank"
        >
          Mikiyas Kebede
        </a>
        .
      </div>
    </>
  );
};

export default App;
