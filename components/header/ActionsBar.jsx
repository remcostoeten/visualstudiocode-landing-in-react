"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
// import { SignIn, UserButton } from "@clerk/nextjs"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import styles from "../../styles/Actionsbar.module.css"
import LogoIcon from "../icons/LogoFull"
import { Label } from "../ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

export default function ActionsBar() {
  const router = useRouter()
  let currentPage = router?.pathname?.replace("/", "") || ""

  if (currentPage === "") {
    currentPage = "homepage"
  }

  const handleSubmit = () => {
    console.log("fake submit")
  }

  const SHEET_SIDES = ["top", "right", "bottom", "left"]

  return (
    <section className="flex h-[40px] items-center border-b border-[#191d20] bg-topbar pl-1 text-sm text-white">
      <span className="logo">
        <LogoIcon />
      </span>
      <div className={styles.items}>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger showhand="true" hidecircel="true">
              File
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <Sheet>
              <SheetTrigger>Open</SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
                <Form>
                  <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
                    <FormField
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="shadcn" />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </SheetContent>
            </Sheet>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger showhand="true" hidecircel="true">
              Sign in
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>{/* <SignIn /> */}</MenubarItem>
              <MenubarItem>{/* <UserButton /> */}</MenubarItem>
              <MenubarItem>
                <Link href="/my-account">My account</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <p className="font- text-sm text-[#678ca6]">
        {currentPage}.jsx - Aspiring to be more than a divjesschuiver
      </p>
      <div
        className={`${styles.windowButtons} flex justify-end space-x-2.5 pr-4`}
      >
        <span className="bg-[#50fa7b]"></span>
        <span className="ml-auto bg-[#f1fa8c]"></span>
        <span className="bg-[#ff5555]"></span>
      </div>
    </section>
  )
}
