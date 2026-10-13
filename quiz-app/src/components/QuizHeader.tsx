type Props = { current: number; total: number }
export default function QuizHeader({ current, total }: Props) {
  return <h3>Question {current} / {total}</h3>
}