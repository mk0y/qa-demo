import { useState } from 'react'
import { Textarea } from './textarea'

interface MyComponentProps extends Record<string, any> {
  // You can still define known props here
  onPress: Function
}

const ChatTextarea: React.FC<MyComponentProps> = ({ onPress, ...props }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <Textarea
        {...props}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            setValue('')
            onPress(value)
          }
        }}
        onKeyUp={(e) => {
          if (e.key == 'Enter') {
            setValue('')
          }
        }}
      />
    </>
  )
}

export default ChatTextarea
