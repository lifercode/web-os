import { OsWindow, OsIframe } from '@react-os/core'

export default function Pacman({data}) {
  const config = {
    size: [600,600],
  }

  return (
    <OsWindow {...config}>
      <OsIframe
        title={data.label}
        src="https://pacman.live/play.html"
      />
    </OsWindow>
  )
}