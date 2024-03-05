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
      {/* <Link
        to="/"
        className={twMerge(sidebarItemClass, sidebarItemDefaultClass)}
      >
        <UsersIcon className="size-4" />
        Customers
      </Link>
      <Link
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

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function LineChartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}

export default SidebarNav
