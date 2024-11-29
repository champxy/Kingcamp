import { ThemeProvider } from "./theme-provider"
import { Toaster } from "@/components/ui/toaster"

//this is the provider for the theme and notifcation provider in future
const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        >
            {children}
            <Toaster />
        </ThemeProvider>
    </div>
  )
}
export default Providers