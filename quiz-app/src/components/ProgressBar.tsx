type Props = { current: number; total: number }
export default function ProgressBar({ current, total }: Props) {
  return <div className="progress"><div style={{ width: `${(current/total)*100}%` }}></div></div>
}