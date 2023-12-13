let question = document.getElementsByClassName("question")! as HTMLCollection;
let option1 = document.getElementsByClassName("optionss")! as HTMLCollection;

const collectionOfQuestion = [
  {
    id: 0,
    question: "What is the capital city of Nepal ?",
    collectionOfOption: {
      option1: "Kathmandu",
      option2: "Nepalgunj",
      option3: "Laxmana",
      option4: "Birgunj",
    },
  },
  {
    id: 1,
    question: "What is the capital city of India ?",
    collectionOfOption: {
      option1: "Kathmandu",
      option2: "Nepalgunj",
      option3: "Laxmana",
      option4: "Birgunj",
    },
  },
  {
    id: 2,
    question: "What is the capital city of Malaysia ?",
    collectionOfOption: {
      option1: "Kathmandu",
      option2: "Nepalgunj",
      option3: "Laxmana",
      option4: "Birgunj",
    },
  },
  {
    id: 3,
    question: "What is the capital city of china ?",
    collectionOfOption: {
      option1: "Kathmandu",
      option2: "Nepalgunj",
      option3: "Laxmana",
      option4: "Birgunj",
    },
  },
  {
    id: 4,
    question: "What is the capital city of America ?",
    collectionOfOption: {
      option1: "Kathmandu",
      option2: "Nepalgunj",
      option3: "Laxmana",
      option4: "Birgunj",
    },
  },
];

function handleQuestions() {
    collectionOfQuestion.forEach((questions) => {
    //   question.innerHTML = questions.question;
      option1[0].innerHTML = questions.collectionOfOption.option1;
      option1[1].innerHTML = questions.collectionOfOption.option2;
      option1[2].innerHTML = questions.collectionOfOption.option3;
      option1[3].innerHTML = questions.collectionOfOption.option4;
  
      const button = document.getElementById("button")! as HTMLElement;
      button.addEventListener("click", function handleEvent() {
        const selectedOption = document.querySelector('.optionss')! as HTMLElement;
        console.log(selectedOption)
  
        if (selectedOption) {
          const selectedValue = selectedOption.innerHTML;
          console.log(selectedValue)
          const correctAnswer = questions.collectionOfOption.option1;
  
          if (selectedValue === correctAnswer) {
            alert('Correct Answer');
          } else {
            alert('Wrong Answer');
          }
        } else {
          alert('Please select an option');
        }
      });
    });
  }
  
  handleQuestions();

