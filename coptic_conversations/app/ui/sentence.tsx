import SingleWord ,  { WordProps } from './word'



export type SentenceProps = {

    [sentenceKey: string]: WordProps[]

}



const Sentence = (props: SentenceProps) => {
    // Get the first available array from the object keys (e.g., "sentence1")
  const firstKey = Object.keys(props)[0];
  const words = props[firstKey] || [];

  return (
    <div className="flex flex-wrap gap-4 items-start">
      {
        words.map((word, index) => {
            return(
            <div key={`${word.english}-${index}`}>
              {<SingleWord word={word} />} 
            </div>)
        })
      }
    </div>
  )
}

export default Sentence