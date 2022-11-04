function generatequestion(score){
    if (score == 10){
        document.body.style.background = "blue"
        document.querySelector('.answers').innerHTML = ""
        document.querySelector('.question').innerHTML = "you passed"

    }else{
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        document.querySelector('.question').innerHTML = 'What is ${x} * ${y}'
        let correctAnswer = Math.floor(Math.random() * 4)
        for (let i = 0; i < 4; i++){
            if (i == correctAnswer){
                let answerDiv = document.createElement('div')
                answerDiv.classList.add('answer')
                answerDiv.innerHTML = y*x
                document.querySelector('.answers').appendChild(answerDiv)
                answerDiv.addEventListener('click', () => {
                document.body.style.background = "green"
                setTimeout(() => { 
                    document,body,style,background = "lightblue"

                    document,querySelector('answer').innerHTML = ""
                    generate.question(score)

                }, 1000,)
                        (score) ++
                        document,querySelector('.score').innerHTML = "Score: "+ score
                        
                })

            }else{

                let answerDiv = document.createElement('div')
                answerDiv.classList.add('answer')
                let wrongx = Math.floor(Math.random() * 100)
                let wrongy = Math.floor(Math.random() * 100)
                let wronganswer = wrongx * wrongy
                while(wrongx * wrongy === x*y){
                    wrongx = Math.floor(Math.random() * 100)
                    wrongy = Math.floor(Math.random() * 100)
                }
                wronganswer = wrongx * wrongy
                answerDiv.innerHTML = wronganswer;
                document.querySelector('.answers').appendChild(answerDiv)
                answerDiv.innerHTML = wronganswer;
                    document.body.style.background = "red"
                    document.querySelector('.amswers').innerHTML = "answer: " + (x * y)

            }
        }
    }
}
generatequestion(0);
