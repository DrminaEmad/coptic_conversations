
type ParagraphProps = {
    paragraph: any
}

const Paragraph = ({paragraph}: ParagraphProps) => {
  return (
    <div className="font-coptic-classic text-3xl">
      <pre>{JSON.stringify(paragraph, null, 2)}</pre>
    </div>
  )
}

export default Paragraph