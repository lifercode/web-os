import { Frame } from 'react95'
import { OsWindow } from '@react-os/core'

export default function Notes({data}) {
  const config = {
    size: [540,480],
  }

  return (
    <OsWindow {...config}>
      <Frame variant='field' style={{minHeight: '100%', padding: 20}}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat consequatur illum reprehenderit quod! Inventore animi dolor enim, quaerat quia vel commodi impedit cumque ut ducimus, voluptatum suscipit natus accusantium.
        </p>
      </Frame>
    </OsWindow>
  )
}