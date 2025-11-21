import { Toaster } from "sonner";

export default function Notification() {
  return (
    <Toaster
      position="top-right"
      expand={false}
      richColors
      closeButton
      duration={4000}
      toastOptions={{
        style: {
          background: "var(--midnight-800)",
          border: "1px solid var(--deep-blue-600)",
          color: "var(--gray-50)",
        },
        className: "sonner-toast",
      }}
    />
  );
}
