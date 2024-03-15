import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import * as Tabs from '@radix-ui/react-tabs'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ReactMarkdown from 'react-markdown'
import { Input } from '@/components/ui/input'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeFormat from 'rehype-format'
import 'github-markdown-css/github-markdown-light.css'
import { useState } from 'react'

const MIN_CHARS = 50
const MAX_CHARS = 5000

const FormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  newdoc: z
    .string()
    .min(50, {
      message: `Documentation must be minimum ${MIN_CHARS} characters long.`
    })
    .max(5000, {
      message: `Documentation cannot be more than ${MAX_CHARS} characters long.`
    })
})

const TextareaForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  const [selectedTab, setSelectedTab] = useState('write')

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <div className="flex justify-start items-start">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col space-y-4"
        >
          <Tabs.Root defaultValue="write" onValueChange={setSelectedTab}>
            <Tabs.List className="TabsList" aria-label="Markdown editor tabs">
              <Tabs.Trigger value="write" className="TabsTrigger">
                Write
              </Tabs.Trigger>
              <Tabs.Trigger value="preview" className="TabsTrigger">
                Preview
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className="TabsContent" value="write">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Document Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the document title"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newdoc"
                render={({ field }) => (
                  <div className="flex-1">
                    <FormItem>
                      <FormLabel>New Documentation</FormLabel>
                      <FormControl className="h-full">
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="resize-none h-96"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Documentation can be {MIN_CHARS} - {MAX_CHARS}{' '}
                        characters long.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
            </Tabs.Content>

            <Tabs.Content value="preview" className="TabsContent">
              <div className="flex-1">
                <div className="border p-4 h-96 overflow-auto">
                  <ReactMarkdown
                    className="markdown-body"
                    rehypePlugins={[
                      rehypeRaw,
                      rehypeSanitize,
                      rehypeFormat,
                    ]}
                  >
                    {form.watch('newdoc')}
                  </ReactMarkdown>
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default TextareaForm
