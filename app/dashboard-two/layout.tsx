interface AuthLayoutProps {
    children: React.ReactNode
  }
  
  export default function AuthLayout({ children }: AuthLayoutProps) {
    return <div className="min-h-screen mx-auto m-w-[1280px]">{children}</div>
  }
  