import { OsWindow, OsIframe } from '@react-os/core'

export default function Musics({data}) {
  const config = {
    size: [500,600],
  }

  return (
    <OsWindow {...config}>
      <OsIframe
        title={data.label}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/212510885&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
      />
    </OsWindow>
  )
}