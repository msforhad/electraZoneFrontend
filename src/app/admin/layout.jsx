import AdminLayout from "@/components/admin/AdminLayout";




export const metadata = {
  title: "electraZone | admin",
  description: "electraZone",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};


export default function RootAdminLayout({ children }) {
  return (
    <>
      <AdminLayout >
      {children}
      </AdminLayout >
    </>
  );
}
