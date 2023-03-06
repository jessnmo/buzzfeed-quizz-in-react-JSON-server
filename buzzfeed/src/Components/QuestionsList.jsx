//individual question
const QuestionsList = ({
	question,
	setAnswerChosen,
	answerChosen,
	unansweredQuestionId,
	setUnansweredQuestionId,
	quizItemId,
}) => {
	const handleClick = () => {
		setAnswerChosen((prevState) => [...prevState, question.text]); //getting whatever is in it previously, and add whatever we chose
		setUnansweredQuestionId(
			unansweredQuestionId.filter((id) => id !== quizItemId)
		); //find the array and 點到名字請離開. set the new array under setUnansweredQuestionId
	};

	const pickedAnswer =
		!answerChosen?.includes(question.text) && //doesn't include the question text and the unanswered Id doesn't include the quiz item id
		!unansweredQuestionId?.includes(quizItemId); //沒點到名字的就離開

	return (
		<button
			onClick={handleClick}
			className="question-list"
			disabled={pickedAnswer} //should not include the chosen answer text
		>
			<img src={question.image} alt={question.alt} />
			<h3>{question.text}</h3>
			<p>
				<a href={question.image}>{question.credit} </a>
				<a href="http://www.unsplash.com">Unsplash</a>
			</p>
		</button>
	);
};

export default QuestionsList;
