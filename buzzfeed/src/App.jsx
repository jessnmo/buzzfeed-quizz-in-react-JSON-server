import { useState, useEffect } from 'react';
import Title from './Components/Title';
import QuestionsContainer from './Components/QuestionsContainer';

const App = () => {
	const [quiz, setQuiz] = useState(false);
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

	return (
		<div className="app">
			<Title title={quiz.title} subtitle={quiz.subtitle} />
			{/* check if quiz exist, then go to content and map out to the questionsContainer */}
			{quiz &&
				quiz?.content.map((item) => (
					<QuestionsContainer key={item.id} quizItem={item} />
				))}
		</div>
	);
};

export default App;
