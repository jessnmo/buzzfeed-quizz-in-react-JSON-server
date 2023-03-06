import { useState, useEffect } from 'react';
import Title from './Components/Title';
import QuestionsContainer from './Components/QuestionsContainer';
import AnswerContainer from './Components/AnswerContainer';

const App = () => {
	const [quiz, setQuiz] = useState(false);
	const [answerChosen, setAnswerChosen] = useState([]);
	const [unansweredQuestionId, setUnansweredQuestionId] = useState(null);
	const [showAnswer, setShowAnswer] = useState(false);

	const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:8000/quiz');
			const data = await response.json();
			console.log(data);
			setQuiz(data); //whatever comes back it says in the setQuiz
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		const unansweredIds = quiz?.content?.map(({ id }) => id); //to get the id from the content array. If the quiz exist, go to content and get that id
		setUnansweredQuestionId(unansweredIds);
	}, [quiz]); //run this everytime quiz data changes

	useEffect(() => {
		if (unansweredQuestionId) {
			//if unansweredQuestionId length is smaller or equal to 0, then we have everything answered, and if 1 or more answer chosen
			if (unansweredQuestionId.length <= 0 && answerChosen.length >= 1) {
				//scroll to answer block
				setShowAnswer(true);
				const answerContainer = document.getElementById('answerContainer');
				answerContainer?.scrollIntoView({ behavior: 'smooth' });
			}
			//making sure we scroll to the unanswered questions, make sure everything is answered
			const highestID = Math.min(...unansweredQuestionId);
			const highestElement = document.getElementById(highestID);
			highestElement?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [unansweredQuestionId, answerChosen, showAnswer]);

	console.log(answerChosen);
	console.log(unansweredQuestionId);

	return (
		<div className="app">
			<Title title={quiz.title} subtitle={quiz.subtitle} />
			{/* check if quiz exist, then go to content and map out to the questionsContainer */}
			{quiz &&
				quiz?.content.map((item) => (
					<QuestionsContainer
						key={item.id}
						quizItem={item}
						setAnswerChosen={setAnswerChosen}
						answerChosen={answerChosen}
						unansweredQuestionId={unansweredQuestionId}
						setUnansweredQuestionId={setUnansweredQuestionId}
					/>
				))}
			{showAnswer && (
				<AnswerContainer
					answerOptions={quiz?.answers}
					answerPicked={answerChosen}
				/>
			)}
		</div>
	);
};

export default App;
