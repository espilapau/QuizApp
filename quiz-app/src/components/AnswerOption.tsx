type Props = { choice: string; selected: string | null; onSelect: (c: string) => void }
export default function AnswerOption({ choice, selected, onSelect }: Props) {
  return <button className={`option ${selected===choice?'selected':''}`} onClick={()=>onSelect(choice)}>{choice}</button>
}