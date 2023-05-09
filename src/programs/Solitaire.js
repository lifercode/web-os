import { OsWindow, OsIframe } from '@react-os/core'

export default function Solitaire({data}) {
  const config = {
    size: [965,650],
  }

  return (
    <OsWindow {...config}>
      <OsIframe
        title={data.label}
        src="https://98.js.org/programs/js-solitaire/index.html"
      />
    </OsWindow>
  )
}