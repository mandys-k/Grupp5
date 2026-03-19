<template>
    <div class="listningcomprehension">
    <h2><b>Level 1</b></h2>

    <div class="listning-container">
        
        
      <div class="script">
        <button class="btn script-btn"><span class="material-symbols-outlined">play_arrow</span>
        <p>Play the sound</p></button>
        <hr>
        <button class="btn script-btn" @click="showScript = !showScript">
            Script
        </button>

        <div v-if="showScript" class="card">
            <p>
            A: Buongiorno! Vorrei un caffè e un cornetto, per favore.<br>
            B: Certo. Vuole anche un succo? <br>
            A: No, grazie. Quanto costa? <br> 
            B: Sono tre euro.
            </p>

            <button class="btn script-btn small" @click="showEnglish = !showEnglish">
            English
            </button>

            <div v-if="showEnglish" class="card ">
            A: Good morning! I would like a coffee and a croissant, please.<br>
            B: Of course. Would you also like a juice?<br>
            A: No, thank you. How much does it cost?<br>
            B: It’s three euros.
            </div>
        </div>
      </div>
        
       <section class="quiz" v-if="!quizCompleted">
        <div class="quiz-questions" >
            <span class="question">{{ getCurrentQuestion.question }}</span>
            <span>Score {{ score }}/{{ questions.length }}</span>
        </div>

        <div class="options">
            <label v-for="(option, index) in getCurrentQuestion.options" 
            :key="index"
            :class="`option ${
              getCurrentQuestion.selected == index 
              ? index == getCurrentQuestion.answer
                ? 'correct': 'wrong'
                : ' '
            }
            ${
              getCurrentQuestion.selected != null &&
              index != getCurrentQuestion.selected
               ? 'disable'
               : ''
            }`">
                <input 
                type="radio" 
                :name="getCurrentQuestion.index"
                :value="index"
                v-model="getCurrentQuestion.selected"
                :disable ="getCurrentQuestion.selected"
                @change="setAnswer">
            <span>{{ option }}</span>
            </label>
        </div>
        <button
        @click="nextQuestion"
        :disabled="getCurrentQuestion.selected === null">
        {{ 
          getCurrentQuestion.index == questions.length-1
           ?"Finish"
           :getCurrentQuestion.selected == null
             ? "Select a option"
             : "Next question"
        }}

        </button>
    </section>
    
    <section v-else>
        <h2>You have finished quiz!</h2>
        <p>Your score is {{ score }}/{{ questions.length }}</p>
    </section>

    </div>

    
</div>
</template>

<script setup>
import { ref, computed} from 'vue'

const showScript = ref(false)
const showEnglish = ref(false)

const questions = ref([
    {
        question: "Q1: Cosa ordina la persona?",
        answer: 2,
        options: [
            "Un tè e una torta",
            "Un succo e un panino",
            "Un caffè e un cornetto",
            "Solo un caffè"
        ],
        selected: null
    },
    {
        question: "Q2: Vuole un succo?",
        answer: 1,
        options: [
            "Sì",
            "No",
            "Forse",
            "Non lo dice"
        ],
        selected: null
    },   
    {
        question: "Q3: Quanto costa in totale?",
        answer: 0,
        options: [
            "Tre euro",
            "Due euro",
            "Cinque euro",
            "Dieci euro"
        ],
        selected: null
    },
    {
        question: "Q4: È mattina o sera?",
        answer: 3,
        options: [
            "Pomeriggio",
            "Sera",
            "Notte",
            "Mattina"
        ],
        selected: null
    },
])

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed (() => {
    let value = 0
    questions.value.map(q=>{
        if(q.selected == q.answer){
            value++
        }
    })
    return value
})

const getCurrentQuestion = computed(() =>{
    let question = questions.value[currentQuestion.value]
    question.index = currentQuestion.value
    return question
})

const setAnswer = evt => {
    questions.value[currentQuestion.value].selected = evt.target.value
    evt.target.value = null
}

const nextQuestion = () => {
     if(currentQuestion.value < questions.value.length-1){
        currentQuestion.value++
     }else{
        quizCompleted.value = true
     }
}
</script>

<style scoped>
.listningcomprehension {
  text-align: center;
  padding: 2rem 1rem;

}

.listning-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.script {
  text-align: left;
  border-color: #0b0b62;
  background-color: #f0f4ff;
  border-radius: 16px;
  border:2px solid;
  color:#0b0b62;
  padding: 2rem;
  width: 100%;
  max-width: 640px;

}

.script-btn {
  width: 100%;
  max-width: 200px;
  color: white;
  display: flex;            
  align-items: center;      
  justify-content: center;   
  gap: 0.5rem; 
}
.script-btn p {
  margin: 0;
}

.card {
    border: none;
}
.quiz {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-color: #0b0b62;
  background-color: #f0f4ff;
  border:2px solid;
  color:#0b0b62;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  max-width: 640px;
 
}


.quiz-questions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}


.options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.option {
  display: block;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  background-color: #ffffff;
 
}

.option:hover {
  background-color: #e0e8ff;

}

.option.correct {
  background-color: #d4f8e8;
  
}

.option.wrong {
  background-color: #ffe0e0;
 
}


.option.disable {
  opacity: 0.6;
  cursor: not-allowed;
}


.option input {
  display: none;
}


button {
  padding: 0.8rem 1.5rem;
  border: none;
  background: linear-gradient(135deg, #0b0b62, #343465);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(74, 108, 255, 0.3);
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
  box-shadow: none;
}

section h2 {
  margin-bottom: 0.5rem;
}

section p {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>