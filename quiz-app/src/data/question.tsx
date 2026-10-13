export interface Question {
  id: number;
  text: string;
  choices: string[];
  answer: string;
}

export const questions: Question[] = [
  { id: 1, text: "Sinong artits ang laging nagmamadali?", choices: ["A: Coco Martin", "B: Dingdong Dantes", "C:Hurry Styles", "D.Maine Mendoza"], answer: "C" },
  { id: 2, text: "Anong isda ang mayaman?", choices: ["A.Bangus", "B: Tilapia", "C: Goldfish", "D: Isdang may GCash"], answer: "D" },
  { id: 3, text: "Anong buwan ang may 28 days?", choices: ["A:February", "B: January", "C: Lahat ng buwan", "D: Buwan ng sahod"], answer: "C" },
  { id: 4, text: "Kung may limang mangga ka at kinuha ko ang dalawa, ilan ang mangga ko?", choices: ["A: Ttalo", "B: Lima", "C: Dalawa", "D: Wala, magnanakaw ka pala!"], answer: "C"},
  { id: 5, text: "Anong tawag sa taong walang buhok?", choices: ["A: Kalbo", "B: Panot", "C: Hairless", "D: Taong tipid sa shampoo"], answer: "A"},
  { id: 6, text: "Anong bagay ang tumataas pero hindi bumababa?", choices: ["A: Presyo ng bilihin", "B: Saranggola", "C: Lobo", "D: Edad ng tao"], answer: "D"},
  { id: 7, text: "Sino ang may pinakamahabang pasensiya?", choices: ["A: Teacher", "B: Nanay", "C: Santo", "D: Taong naghihintay ng reply tapos haha react lang natanggap"], answer: "D"},
  { id: 8, text: "Anong hayop ang marunong mag-computer?", choices: ["A: Mouse", "B: Pusa", "C: Aso", "D: Daga na may master's degree"], answer: "D"},
  { id: 9, text: "Ano ang unang ginagawa mo pagkagising sa umaga?", choices: ["A: Maligo", "B: Mag-toothbrush", "C: Magdasal", "D: Tumingin kung nag-reply na si crush"], answer: "D"},
  { id: 10, text: "Ano ang pinakamabilis na paaran para yumaman?", choices: ["A: Magnegosyo", "B: Mag-invest", "C: Magtrabaho nabg mabuti", "D: Magpakasal sa mayaman"], answer: "D"},
];