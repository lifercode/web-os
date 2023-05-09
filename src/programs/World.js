import { OsWindow, OsIframe } from '@react-os/core'

export default function World({data}) {
  const config = {
    size: [800,500],
  }

  return (
    <OsWindow {...config}>
      <OsIframe
        title={data.label}
        src="https://lifercode.world"
      />
    </OsWindow>
  )
}