
export type WordProps = { 
    coptic: string;
    arabic: string; 
    english: string 
}



const SingleWord = ({ word } : {word: WordProps}) => {
  return (
    <>
        <div>{word.coptic}</div>
        <div>{word.arabic}</div>
        <div>{word.english}</div>
    </>

  )
}

export default SingleWord