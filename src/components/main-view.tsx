import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { SVGProps } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { JSX } from 'react/jsx-runtime'
import SidebarNav from './ui/sidebar-nav'
import UploadWidget from './upload-widget'

const MainView = () => {
  return (
    <div className="grid min-h-screen h-screen items-start gap-0 pb-0 lg:grid-cols-[280px_1fr] w-full">
      <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block h-full">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <a className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="size-6" />
              <span className="">DocYard</span>
            </a>
            <Button
              className="ml-auto size-8 rounded-md"
              size="icon"
              variant="outline"
            >
              <BellIcon className="size-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <SidebarNav />
          </div>
          <div className="mt-auto p-4">
            <UploadWidget />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
          <a className="lg:hidden" href="#">
            <Package2Icon className="size-6" />
            <span className="sr-only">Home</span>
          </a>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 size-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full appearance-none bg-white pl-8 shadow-none dark:bg-gray-950 md:w-2/3 lg:w-1/3"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <div>
            <SignedOut>
              <Link to="/sign-in">Sign In</Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/sign-in" />
            </SignedIn>
          </div>
        </header>
        <main
          // style={{ height: 'calc(100vh - 84px)' }}
          className="flex flex-1 flex-col relative gap-4 md:gap-8 max-w-5xl"
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function Package2Icon(
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export default MainView
