export const Thumbnail = (props) => {
  return (
    <div className="h-64 flex flex-col gap-1 " style={{
    }}>
      <img className="transition ease-out hover:scale-110 hover:box-border" src={props.imgSrc} alt="" />
      <div className="flex gap-5 mx-2">
        <img className="rounded-full w-9 h-9" src={props.channelSrc} alt="" />
        <p className="text-sm font-medium overflow-hidden"><a href={props.link}>{props.caption}</a></p>
      </div>
      <p className="text-xs ml-16">{props.channelName}</p>
      <p className="text-xs ml-16">{props.view}</p>
    </div>
  )
}