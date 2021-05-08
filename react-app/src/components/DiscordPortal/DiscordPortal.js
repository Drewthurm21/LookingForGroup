import * as React from 'react'
import WidgetBot from '@widgetbot/react-embed'
import '../SingleEventPage/SingleEventPage.css'
const DiscordPortal = ({ server_id, channel_id }) => {

  const server = server_id ? server_id : '839942777001082941'
  const channel = channel_id ? channel_id : '839942777001082941'

  console.log(typeof server)

  return (
    <WidgetBot
      className='widgetbot'
      server={String(server)}
      channel={String(channel)}
    />

  )


}
export default DiscordPortal