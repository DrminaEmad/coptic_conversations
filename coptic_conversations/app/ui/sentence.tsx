import SingleWord ,  { WordProps } from './word'



export type SentenceProps = {

    [sentenceKey: string]: WordProps[]

}



const Sentence = (props: SentenceProps) => {
    // Get the first available array from the object keys (e.g., "sentence1")
  const firstKey = Object.keys(props)[0];
  const words = props[firstKey] || [];

  return (
    <div>
      {
        words.map((word) => {
            return(
            <div key={word.arabic}>
              {<SingleWord word={word} /> }
            </div>)
        })
      }
    </div>
  )
}

export default Sentence