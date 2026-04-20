
interface headingProps{
    headingText:string
}
export const Heading = ({headingText}:headingProps

) => {
  return (
    <div className="flex justify-center items-center">
        <span className="text-2xl font-mono ">{headingText}</span>
    </div>
  )
}
