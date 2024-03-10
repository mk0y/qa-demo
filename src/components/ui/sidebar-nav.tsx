import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { SVGProps } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const sidebarItemClass =
  'flex items-center gap-3 rounded-lg px-3 py-2 transition-all'
const sidebarItemDefaultClass =
  'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
const sidebarItemActiveClass =
  'bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'

const SidebarNav = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <Link
        to={`/`}
        className={twMerge(
          sidebarItemClass,
          sidebarItemDefaultClass,
          location.pathname == '/' && sidebarItemActiveClass
        )}
      >
        <HomeIcon className="size-4" />
        <span className="flex items-center flex-1 justify-between">
          Docs
          <TooltipProvider delayDuration={250}>
            <Tooltip>
              <TooltipTrigger>
                <span
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    navigate('/new')
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </TooltipTrigger>
              <TooltipContent>Write new doc</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
      </Link>
      <Link
        to={`/query`}
        className={twMerge(
          sidebarItemClass,
          sidebarItemDefaultClass,
          location.pathname == '/query' && sidebarItemActiveClass
        )}
      >
        <PackageIcon className="size-4" />
        Query
      </Link>
      <Link
        to="/settings"
        className={twMerge(
          sidebarItemClass,
          sidebarItemDefaultClass,
          location.pathname == '/settings' && sidebarItemActiveClass
        )}
      >
        <SettingsIcon className="size-4" />
        Settings
      </Link>
      <Link
        to="/integrations"
        className={twMerge(
          sidebarItemClass,
          sidebarItemDefaultClass,
          location.pathname == '/integrations' && sidebarItemActiveClass
        )}
      >
        <IntegrationsIcon className="size-4" />
        Integrations
      </Link>
      {/* <Link
        to="/"
        className={twMerge(sidebarItemClass, sidebarItemDefaultClass)}
      >
        <UsersIcon className="size-4" />
        Analytics
      </Link> */}
    </nav>
  )
}

function IntegrationsIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  )
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function PackageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

function SettingsIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.3-.58-.22l-2.49 1c-.52-.4-1.08-.72-1.69-.94l-.38-2.65c-.05-.27-.28-.46-.56-.46h-4c-.28 0-.51.19-.56.46l-.38 2.65c-.61.22-1.17.54-1.69.94l-2.49-1c-.21-.08-.46 0-.58.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.37.3.58.22l2.49-1c.52.4 1.08.72 1.69.94l.38 2.65c.05.27.28.46.56.46h4c.28 0 .51-.19.56-.46l.38-2.65c.61-.22 1.17-.54 1.69-.94l2.49 1c.21.08.46 0 .58-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SidebarNav
