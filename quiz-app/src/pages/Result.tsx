import { useLocation, useNavigate } from "react-router-dom"
import ResultCard from "../components/ResultCard"
type ResultState = { score: number; total: number }
export default function Result() {
  const { state } = useLocation() as { state: ResultState | null }
  const nav = useNavigate()
  if (!state) return <div className="home"><button className="btn-primary" onClick={()=>nav('/')}>Go Home</button></div>
  return (
    <div className="result-page">
      <ResultCard score={state.score} total={state.total} />
      <div className="btn-group">
        <button className="btn-primary" onClick={()=>nav('/quiz')}>Retake Quiz</button>
        <button className="btn-secondary" onClick={()=>nav('/')}>Return Home</button>
      </div>
    </div>
  )
}