import React from 'react'
import { AnswerObject } from '../App'
import { ButtonWrapper, Wrapper } from './QuestionCard.styles'

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNum: number;
	totalQuestions: number;
	image: string;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNum, totalQuestions, image}) => {
	return (
		<Wrapper>
			<p className="number">
				Question: {questionNum} / {totalQuestions}
			</p>
			<p className="question" dangerouslySetInnerHTML={{__html: question}} />
			<img src={image} alt="code" className="image"/>
			<div className="options">
				{answers.map((answer) => (
					<ButtonWrapper 
						key={answer} 
						correct={userAnswer?.correctAnswer === answer} 
						userClicked={userAnswer?.answer === answer}
						id={answer}
						>
						<button value={answer} disabled={userAnswer ? true : false} onClick={callback}>
							<span dangerouslySetInnerHTML={{__html: answer}}/>
						</button>
					</ButtonWrapper>
				))}
			</div>
		</Wrapper>
	)
}

export default QuestionCard
