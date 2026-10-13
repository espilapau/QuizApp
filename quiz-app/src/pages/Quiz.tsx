import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { questions } from "../data/question"
import QuizHeader from "../components/QuizHeader"
import ProgressBar from "../components/ProgressBar"
import QuestionCard from "../components/QuestionCard"

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const nav = useNavigate()
  const q = questions[current]

  const handleNext = () => {
    const newScore = selected === q.answer? score + 1 : score
    if (current + 1 < questions.length) {
      setScore(newScore)
      setCurrent(c => c + 1)
      setSelected(null)
    } else {
      nav("/result", { state: { score: newScore, total: questions.length } })
    }
  }

  return (
    <div className="quiz-page">
      <QuizHeader current={current + 1} total={questions.length} />
      <ProgressBar current={current + 1} total={questions.length} />
      <QuestionCard q={q} selected={selected} onSelect={setSelected} />
      <button className="btn-primary" disabled={!selected} onClick={handleNext}>
        {current + 1 === questions.length? "Submit" : "Next"}
      </button>
    </div>
  )
}