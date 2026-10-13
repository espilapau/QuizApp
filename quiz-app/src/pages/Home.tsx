import { useNavigate } from "react-router-dom"
export default function Home() {
  const nav = useNavigate()
  return (
    <div className="home">
      <h1>Welcome to the <span>Frontend Quiz!</span></h1>
      <p>A 10-question quiz to test your talino</p>
      <button className="btn-primary" onClick={()=>nav('/quiz')}>Start Quiz</button>
    </div>
  )
}