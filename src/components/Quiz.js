import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Question from "./Question";

const Quiz = () => {
const [quizState, dispatch] = useContext(QuizContext)
console.log('quizState', quizState);
    return (
    <div className="quiz">
    {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of &nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
          </div>
        </div>
      )}
        {!quizState.showResults && (
            <div>
            <div className="score">
            Question {quizState.currentQuestionIndex +1} / {quizState.questions.length}
        </div>
        <Question />
        <div className="next-button" onClick={() => dispatch({type: "NEXT_QUESTION"})}>Next Question</div>
            </div>
        )}
    </div>
    )
  };
  
  export default Quiz;