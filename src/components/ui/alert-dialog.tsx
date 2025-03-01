import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef(
  React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>>(
    ({ className, ...props }, ref) => (
      <AlertDialogPrimitive.Overlay
        ref={ref}
        className={cn("fixed inset-0 z-50 bg-black/50", className)}
        {...props}
      />
    )
  )
)
AlertDialogOverlay.displayName = "AlertDialogOverlay"

const AlertDialogContent = React.forwardRef(
  React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>>(
    ({ className, children, ...props }, ref) => (
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed z-50 grid w-full max-w-lg gap-4 p-6 rounded-lg bg-background",
            className
          )}
          {...props}
        >
          {children}
        </AlertDialogPrimitive.Content>
      </AlertDialogPortal>
    )
  )
)
AlertDialogContent.displayName = "AlertDialogContent"

const AlertDialogTitle = React.forwardRef(
  React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>>(
    ({ className, ...props }, ref) => (
      <AlertDialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold text-center", className)}
        {...props}
      />
    )
  )
)
AlertDialogTitle.displayName = "AlertDialogTitle"

const AlertDialogDescription = React.forwardRef(
  React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>>(
    ({ className, ...props }, ref) => (
      <AlertDialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-center text-muted-foreground", className)}
        {...props}
      />
    )
  )
)
AlertDialogDescription.displayName = "AlertDialogDescription"

const AlertDialogAction = React.forwardRef(
  React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>>(
    ({ className, ...props }, ref) => (
      <AlertDialogPrimitive.Action
        ref={ref}
        className={cn("inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-mauve rounded-md hover:bg-mauve-light", className)}
        {...props}
      />
    )
  )
)
AlertDialogAction.displayName = "AlertDialogAction"

const AlertDialogCancel = React.forwardRef(
  React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>>(
    ({ className, ...props }, ref) => (
      <AlertDialogPrimitive.Cancel
        ref={ref}
        className={cn("inline-flex justify-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white", className)}
        {...props}
      />
    )
  )
)
AlertDialogCancel.displayName = "AlertDialogCancel"

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
