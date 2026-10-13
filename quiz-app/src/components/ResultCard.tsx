type Props = { score: number; total: number }
export default function ResultCard({ score, total }: Props) {
  return (
    <div className="card result">
      <h2>Quiz Completed</h2>
      <h1>Your score: {score} / {total}</h1>
      <p>Total: {total} | Correct: {score} | Wrong: {total-score}</p>
      <p>Percentage: {Math.round((score/total)*100)}%</p>
    </div>
  )
}