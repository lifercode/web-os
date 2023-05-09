import { OsWindow, OsIframe } from '@react-os/core'

export default function Movies({data}) {
  const config = {
    footer: 'Playlist from YouTube',
    size: [800,500],
  }

  return (
    <OsWindow {...config}>
      <OsIframe
        title={data.label}
        src="https://www.youtube.com/embed/videoseries?list=PLz21IZGPLw_L56eCAEZjQKUDAujI4tXbp"
      />
    </OsWindow>
  )
}