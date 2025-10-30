import StoreLayout from "@/components/store/StoreLayout";



export const metadata = {
  title: "electraZone | Store Dashboard",
  description: "electraZone. - Store Dashboard",
  icons: {
    icon: "/favicon.ico", // ✅ ঠিক এই path
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};


export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
