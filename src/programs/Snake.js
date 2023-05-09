import { OsWindow, OsIframe } from '@react-os/core'

export default function Snake({data}) {
  const config = {
    size: [600,600],
  }

  return (
    <OsWindow {...config}>
      <OsIframe
        title={data.label}
        src="https://snak.ee/google-snake-new/index.html"
      />
    </OsWindow>
  )
}