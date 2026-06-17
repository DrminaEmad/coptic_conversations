import Sentence, {SentenceProps} from "./sentence"


type ParagraphProps = {
    paragraph: SentenceProps[]
}

const Paragraph = ({paragraph}: ParagraphProps) => {
  return (
    <div className="font-coptic-classic text-3xl">
      <pre>
        {
          paragraph.map(item ) => {
            return <div key={}>
                <Sentence {...item} />
            </div>
          }
        }  
      </pre>
    </div>
  )
}

export default Paragraph