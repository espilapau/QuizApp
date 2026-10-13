import AnswerOption from "./AnswerOption"

type Props = {
  q: {
    id: number
    text: string
    choices: string[]
    answer: string
  }
  selected: string | null
  onSelect: (c: string) => void
}

export default function QuestionCard({ q, selected, onSelect }: Props) {
  return (
    <div className="card">
      <h2>{q.id}. {q.text}</h2>
      <div className="options">
        {q.choices.map(c => (
          <AnswerOption key={c} choice={c} selected={selected} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}