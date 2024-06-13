import { useState } from 'react';

const RegisterTest = () => {
    const [testName, setTestName] = useState('');
    const [questions, setQuestions] = useState([{ question: '', answers: [''] }]);

    const handleTestNameChange = (e) => {
        setTestName(e.target.value);
    };

    const handleQuestionChange = (index, e) => {
        const newQuestions = [...questions];
        newQuestions[index].question = e.target.value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (qIndex, aIndex, e) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].answers[aIndex] = e.target.value;
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: '', answers: [''] }]);
    };

    const addAnswer = (qIndex) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].answers.push('');
        setQuestions(newQuestions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            testName,
            questions
        });
        // Aquí podrías enviar los datos a tu API o backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Test Name:</label>
                <input type="text" value={testName} onChange={handleTestNameChange} required />
            </div>
            {questions.map((q, qIndex) => (
                <div key={qIndex}>
                    <label>Question {qIndex + 1}:</label>
                    <input
                        type="text"
                        value={q.question}
                        onChange={(e) => handleQuestionChange(qIndex, e)}
                        required
                    />
                    {q.answers.map((a, aIndex) => (
                        <div key={aIndex}>
                            <label>Answer {aIndex + 1}:</label>
                            <input
                                type="text"
                                value={a}
                                onChange={(e) => handleAnswerChange(qIndex, aIndex, e)}
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={() => addAnswer(qIndex)}>Add Answer</button>
                </div>
            ))}
            <button type="button" onClick={addQuestion}>Add Question</button>
            <button type="submit">Save Test</button>
        </form>
    );
};

export default RegisterTest;
