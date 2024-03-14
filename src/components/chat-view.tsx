import { Button } from '@/components/ui/button'
import { useAskQMutation } from '@/store/api'
import { useUser } from '@clerk/clerk-react'
import * as R from 'ramda'
import { SVGProps, useEffect, useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import ChatTextarea from './ui/chat-textarea'

export function ChatView() {
  const { user } = useUser()
  const orgSlug = R.path(
    ['organizationMemberships', 0, 'organization', 'slug'],
    user
  ) as string
  const [ask, { data: answer }] = useAskQMutation()
  const [messages, setMessages] = useState<string[]>([])
  useEffect(() => {
    if (answer && answer.done) {
      setMessages(R.append(answer.done, messages))
    }
  }, [answer])
  return (
    <div className="flex flex-col h-full rounded-lg border border-gray-200 dark:border-gray-800">
      <div className="flex flex-1 overflow-auto p-6 flex-col justify-end">
        {/* <div className="flex flex-col items-end gap-1">
          <div className="flex items-center space-x-2 text-sm">
            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3">
              Hi, how can I help you today?
            </div>
            <time className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
              2:26pm
            </time>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3">
              Did my payment go through?
            </div>
            <time className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
              2:27pm
            </time>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3">
              Yes, your payment was successful. Is there anything else I can
              help you with?
            </div>
            <time className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
              2:28pm
            </time>
          </div>
        </div> */}
        {messages.length > 0
          ? messages.map((message: string, i) => {
              const cls =
                i % 2 == 1
                  ? `flex flex-col items-start my-5 text-left`
                  : `flex flex-col items-end gap-1`
              return (
                <div className={cls} key={i}>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3">
                      {message}
                    </div>
                    <time className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
                      {`${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}`}
                    </time>
                  </div>
                </div>
              )
            })
          : null}
      </div>
      <div className="flex flex-grow-0 border-t border-gray-200 dark:border-gray-800">
        <div className="p-4 items-center flex justify-between w-full">
          <div className="w-full m-4 ml-0">
            <ChatTextarea
              className="w-full min-h-0"
              id="message"
              placeholder="Ask me anything based on your docs"
              style={{
                resize: 'none'
              }}
              onPress={(val: string) => {
                setMessages(R.append(val, messages))
                ask({ question: val, container: orgSlug })
              }}
            />
          </div>
          <Button
            className="h-12 w-12 p-0"
            variant="outline"
            onClick={() => {}}
          >
            <SendIcon className="w-6 h-6" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
