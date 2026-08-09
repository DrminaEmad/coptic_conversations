
type PlayButtonProps = {
    togglePlay: () => void ;
    children: React.ReactNode; // 🌟 Allows you to pass custom text or icons from the parent

}




const PlayButton = ({togglePlay, children} : PlayButtonProps) => {
  return (
        <button 
          onClick={togglePlay}
          className="flex items-center gap-2 text-brand-primary px-3 md:px-6 py-3 rounded-2xl font-semibold cursor-pointer transition-transform active:scale-95 hover:hover:bg-brand-hover hover:hover:text-white shadow-sm   active:bg-brand-hover active:text-white"
        >
          {children}
        </button>
  )
}

export default PlayButton