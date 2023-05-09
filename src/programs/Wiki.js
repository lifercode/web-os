import { Frame } from 'react95'
import {QRCodeSVG} from 'qrcode.react'

import { OsWindow } from '@react-os/core'

export default function Wiki({data}) {
  const config = {
    size: [265,300],
  }

  return (
    <OsWindow {...config}>
      <Frame
        variant='field'
        style={{minHeight: '100%', width: '100%', padding: 20}}
      >
      <br />
      <QRCodeSVG
        style={{width: 200, backgroundColor: 'white', height: 200, padding: 10}}
        value="your code is 901283"
      />
      <br />
      </Frame>
    </OsWindow>
  )
}