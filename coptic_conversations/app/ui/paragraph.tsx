import Sentence, {SentenceProps} from "./sentence"


type ParagraphProps = {
    paragraph: SentenceProps[]
}

const Paragraph = ({paragraph}: ParagraphProps) => {
  return (
    <div className="font-coptic-classic text-3xl w-full flex flex-col gap-6">
      <pre>
        {
          paragraph.map((item, index ) => {
            return <div key={index }>
                <Sentence {...item} />
            </div>
          }
        )}  
      </pre>
    </div>
  )
}

export default Paragraph