//individual question
const QuestionsList = ({ question }) => {
	return (
		<button className="question-list">
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
