import { SVGProps } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const sidebarItemClass =
  'flex items-center gap-3 rounded-lg px-3 py-2 transition-all'
const sidebarItemDefaultClass =
  'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
const sidebarItemActiveClass =
  'bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'

const SidebarNav = () => {
  const location = useLocation()
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
        Docs
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
