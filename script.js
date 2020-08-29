const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let countRightAnswers = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})

function startGame(){
	console.log('started')
	startButton.classList.add('hide')
	shuffledQuestions = questions.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
	countRightAnswers = 0
}

function setNextQuestion(){
	resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    	const button = document.createElement('button')
    	button.innerText = answer.text
    	button.classList.add('btn')
    	if (answer.correct) {
    		button.dataset.correct = answer.correct
    	}
    	button.addEventListener('click', selectAnswer)
    	answerButtonsElement.appendChild(button)
    })

    showProgress()
}

function showProgress() {
	var currentQuestionNumber = currentQuestionIndex + 1
	var element = document.getElementById("question-number")
	element.innerHTML = "Question " + currentQuestionNumber + " of 10"
}

function resetState() {
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
    	setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    	nextButton.classList.remove('hide')
    } else {
    	
    }
    if (selectedButton.dataset = correct) {
    	countRightAnswers++;
    }
    document.getElementById('right-answers').innerHTML = "Your score by order of The Peaky Blinders : " + countRightAnswers
}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const questions = [
 {
	question: 'What part of Birmingham did the Peaky Blinders belong to?',
	answers: [
      { text: 'Small Heath', correct: true},
      { text: 'Digbeth', correct: false},
      { text: 'Stourbridge', correct: false},
      { text: 'Handsworth', correct: false}
	]
 },
 {
	question: 'What is the name of their pub?',
	answers: [
      { text: 'The Caste', correct: false},
      { text: 'The Brigade', correct: false},
      { text: 'The Garrison', correct: true},
      { text: 'The Fort', correct: false}
	]
 },
 {
	question: 'What is the name of the theme song?',
	answers: [
      { text: 'The Black Right Hand', correct: false},
      { text: 'The Red Right Hand', correct: true},
      { text: 'The Black Left Hand', correct: false},
      { text: 'The Red Left Hand', correct: false}
	]
 },
 {
	question: 'Which one of these was the race horse of Tommy Shelby?',
	answers: [
      { text: 'Grace\'s Secret', correct: true},
      { text: 'Irish Lackey', correct: false},
      { text: 'Great Gypsy Runner', correct: false},
      { text: 'Brummy Bomber', correct: false}
	]
 },
 {
	question: 'Where was Alfie Solomons from?',
	answers: [
      { text: 'Islington', correct: false},
      { text: 'Covent Garden', correct: false},
      { text: 'Camden', correct: true},
      { text: 'Euston', correct: false}
	]
 },
 {
	question: 'What alchohol did The Peaky Blinders distill?',
	answers: [
      { text: 'Rum', correct: false},
      { text: 'Gin', correct: true},
      { text: 'Wine', correct: false},
      { text: 'Whiskey', correct: false}
	]
 },
 {
	question: 'What cursed gemstone was in the necklace that Grace wore when she was killed?',
	answers: [
      { text: 'Ruby', correct: false},
      { text: 'Diamond', correct: false},
      { text: 'Sapphire', correct: true},
      { text: 'Emerald', correct: false}
	]
 },
 {
	question: 'What did The Peaky Blinders intend to steal in the very first episode?',
	answers: [
      { text: 'Guns', correct: false},
      { text: 'Opium', correct: false},
      { text: 'Motorcycles', correct: true},
      { text: 'Gold Bullion', correct: false}
	]
 },
 {
	question: 'What ran did Tommy hold in the British Army in WW1?',
	answers: [
      { text: 'Lietenant', correct: false},
      { text: 'Brigadier', correct: false},
      { text: 'Sergeant Major', correct: true},
      { text: 'Lance Corporal', correct: false}
	]
 },
 {
	question: 'What rival gang did Billy Kimber lead?',
	answers: [
      { text: 'The Bomber Boys', correct: false},
      { text: 'The Brutal Boys', correct: false},
      { text: 'The Birmingham Boys', correct: true},
      { text: 'The Brummy Boys', correct: false}
	]
 }
]