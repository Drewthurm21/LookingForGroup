import * as React from 'react'
import WidgetBot from '@widgetbot/react-embed'

const DiscordPortal = ({ server_id, channel_id }) => (

  <WidgetBot
    className='widgetbot'
    server={server_id}
    channel={channel_id}
  />
)

export default DiscordPortal