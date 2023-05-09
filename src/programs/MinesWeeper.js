import { OsWindow, OsIframe } from '@react-os/core'

export default function MinesWeeper({data}) {
  const config = {
    size: [285,343],
  }

  return (
    <OsWindow {...config}>
      <OsIframe
        title={data.label}
        src="https://98.js.org/programs/minesweeper/index.html"
        noFrame
      />
    </OsWindow>
  )
}