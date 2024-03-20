const Player = ({ number }: { number: number }) => {
  return (
    <video src={`/dwigt${number}.mp4`} muted autoPlay></video>
  )
}

export default Player;
