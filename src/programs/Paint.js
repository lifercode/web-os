import { OsWindow, OsIframe } from '@react-os/core'

export default function Paint({data}) {
  const config = {
    size: [800,500],
  }

  return (
    <OsWindow {...config}>
      <OsIframe
        title={data.label}
        src="https://jspaint.app/"
        noFrame
      />
    </OsWindow>
  )
}