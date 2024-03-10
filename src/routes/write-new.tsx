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
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const MIN_CHARS = 50
const MAX_CHARS = 5000

const FormSchema = z.object({
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
          className="w-2/3 space-y-6 flex flex-1 flex-col items-start"
        >
          <FormField
            control={form.control}
            name="newdoc"
            render={({ field }) => (
              <FormItem className="abc w-full">
                <div className="text-left">
                  <FormLabel>New Documentation</FormLabel>
                </div>
                <FormControl className="h-96">
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-left">
                  Documentation can be{' '}
                  <span>
                    {MIN_CHARS} - {MAX_CHARS}
                  </span>{' '}
                  characters long.
                </FormDescription>
                <FormMessage className="text-left" />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default TextareaForm
