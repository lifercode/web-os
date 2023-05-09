import { Frame } from 'react95'
import { OsWindow } from '@react-os/core'

import AuthForm from '../components/AuthForm'

export default function Keys({data}) {
  const config = {
    size: [540,480],
  }

  return (
    <OsWindow {...config}>
      <Frame variant='well' style={{minHeight: '100%', padding: 20, width:'100%' }}>
        <AuthForm />
      </Frame>
    </OsWindow>
  )
}