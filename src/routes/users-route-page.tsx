import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  useLazyGetEmailsInvitationsQuery,
  useLazyGetRegisteredUsersQuery,
  useSendEmailsInvitationsMutation
} from '@/store/api'
import { useAuth } from '@clerk/clerk-react'
import { ScrollArea } from '@radix-ui/themes'
import { Loader2 } from 'lucide-react'
import { KeyboardEventHandler, useCallback, useEffect, useState } from 'react'
import CreatableSelect from 'react-select/creatable'

interface Option {
  readonly label: string
  readonly value: string
  readonly isValid?: boolean
}

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
  return re.test(String(email).toLowerCase())
}

const Users = () => {
  const [emailsInputValue, setEmailsInputValue] = useState('')
  const [emailsValue, setEmailsValue] = useState<readonly Option[]>([])
  const { getToken, sessionId } = useAuth()
  const [getUsers,] = useLazyGetRegisteredUsersQuery()
  const [submitInvites, { isLoading }] = useSendEmailsInvitationsMutation()
  const [getInvitations, getInvitationsResult] =
    useLazyGetEmailsInvitationsQuery()
  useEffect(() => {
    const fetchInvites = async () => {
      const token = await getToken()
      if (!token) return
      getInvitations({ st: token })
    }
    fetchInvites()
  }, [isLoading])
  useEffect(() => {
    const fetchUsers = async () => {
      const token = await getToken()
      getUsers({ sid: sessionId, stoken: token })
    }
    fetchUsers()
  }, [])
  const createOption = useCallback(
    (label: string, isValid: boolean = true) => ({
      label,
      value: label,
      isValid
    }),
    []
  )
  const handleKeyDown: KeyboardEventHandler = useCallback(
    (event) => {
      if (!emailsValue) return
      switch (event.key) {
        case 'Enter':
        case 'Tab':
          setEmailsValue((prev) => {
            const newOpt = createOption(emailsInputValue)
            const isValid = validateEmail(newOpt.value)
            if (!isValid) newOpt.isValid = false
            return [...prev, { ...newOpt }]
          })
          setEmailsInputValue('')
      }
    },
    [emailsInputValue, emailsValue]
  )
  const hasInvalidOptions = emailsValue.some((v) => !v.isValid)
  return (
    <div className="flex flex-col items-start p-8">
      <div className="text-2xl mb-8">Users</div>
      <div className="relative w-[600px] text-left mb-8 flex justify-between">
        <div className="w-full">
          <CreatableSelect
            menuIsOpen={false}
            styles={{
              multiValue: (styles, rest) => {
                return {
                  ...styles,
                  backgroundColor: rest.data.isValid
                    ? styles.backgroundColor
                    : '#ffd3d3'
                }
              }
            }}
            components={{
              DropdownIndicator: null
            }}
            inputValue={emailsInputValue}
            value={emailsValue}
            isClearable
            isMulti
            onChange={(newValue) => {
              if (newValue) setEmailsValue(newValue)
            }}
            onInputChange={(newValue) => setEmailsInputValue(newValue)}
            onKeyDown={handleKeyDown}
            placeholder="Type an email and press enter..."
          />
        </div>
        <div className="ml-4">
          <Button
            disabled={isLoading}
            onClick={async () => {
              if (hasInvalidOptions || emailsValue.length < 1) {
                return
              }
              const st = await getToken()
              if (!st) return
              submitInvites({ emails: emailsValue.map((inv) => inv.value), st })
            }}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Send invite
          </Button>
        </div>
      </div>
      <ScrollArea type="always" scrollbars="vertical" style={{ height: 250 }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getInvitationsResult.data &&
              getInvitationsResult.data.map((invite: any) => {
                return (
                  <TableRow>
                    <TableCell align="left">{invite.email_address}</TableCell>
                    <TableCell align="left">{invite.status}</TableCell>
                    <TableCell align="left">{invite.role}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  )
}

export default Users
