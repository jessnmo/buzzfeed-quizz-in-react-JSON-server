import QuestionsList from './QuestionsList';

const QuestionsContainer = ({ quizItem }) => {
	console.log(quizItem);
	return (
		<>
			<h2 className="question-title">{quizItem.text}</h2>
			<div className="questionsContainer">
				{quizItem.questions.map((question) => (
					<QuestionsList question={question} />
				))}
			</div>
		</>
	);
};

export default QuestionsContainer;
