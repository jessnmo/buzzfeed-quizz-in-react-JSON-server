import { useState, useEffect } from 'react';

const AnswerContainer = ({ answerOptions, answerPicked }) => {
	const [result, setResult] = useState(null);
	useEffect(() => {
		answerOptions.forEach((answer) => {
			if (
				answerPicked.includes(answer.combination[0]) &
				answerPicked.includes(answer.combination[1]) &
				answerPicked.includes(answer.combination[2])
			) {
				setResult(answer);
			} else if (!result) {
				setResult(answerOptions[0]); //setting a default as 1st answer object if no result was saved for whatever reason
			}
		});
	}, [result]);

	console.log(result);

	return (
		<div id="answerContainer" className="answerContainer">
			<h2>{result?.text}</h2>
			<img src={result?.image} alt={result?.alt} />
		</div>
	);
};

export default AnswerContainer;
