import { OsWindow, OsIframe } from '@react-os/core'

export default function TRexRunner({data}) {
  const config = {
    size: [800,400],
  }

  return (
    <OsWindow {...config}>
      <OsIframe
        title={data.label}
        src="https://wayou.github.io/t-rex-runner/"
      />
    </OsWindow>
  )
}