import type { CSSProperties } from "react";
import {
  formatPercent,
  getPercentage,
  type SurveyQuestion,
} from "@/lib/content/survey";

type QuestionChartProps = {
  question: SurveyQuestion;
  code: string;
  context: string;
};

export function QuestionChart({ question, code, context }: QuestionChartProps) {
  const maxCount = Math.max(...question.options.map((option) => option.count));

  return (
    <figure className="survey-question">
      <figcaption className="survey-question__head">
        <p className="survey-question__meta">
          <span className="survey-question__code">{code}</span>
          <span>{context}</span>
        </p>
        <h4 className="survey-question__title">{question.question}</h4>
        <p className="survey-question__note">
          {question.totalResponses} respuestas · selección única
        </p>
      </figcaption>

      <ul className="survey-bars" role="list">
        {question.options.map((option) => {
          const percentage = getPercentage(option.count, question.totalResponses);
          const isTop = option.count > 0 && option.count === maxCount;
          const isZero = option.count === 0;

          return (
            <li
              className={`survey-bar${isTop ? " survey-bar--top" : ""}${
                isZero ? " survey-bar--zero" : ""
              }`}
              key={option.label}
            >
              <div className="survey-bar__meta">
                <span className="survey-bar__label">{option.label}</span>
                <span className="survey-bar__value">
                  <strong>{formatPercent(percentage)}</strong>
                  <span className="survey-bar__count">
                    {option.count} de {question.totalResponses}
                  </span>
                </span>
              </div>
              <div className="survey-bar__track" aria-hidden="true">
                <span
                  className="survey-bar__fill"
                  style={
                    { "--bar-value": `${percentage}%` } as CSSProperties
                  }
                />
              </div>
            </li>
          );
        })}
      </ul>
    </figure>
  );
}
