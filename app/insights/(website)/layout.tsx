import { ReactNode } from 'react'; // Import ReactNode type for children
import { getSettings } from "@/lib/sanity/client";
import Header from "@/components/HeaderDark";
import Footer from "@/components/Footer";

// Define the type for props
interface LayoutProps {
  children: ReactNode; // Type for children
  params: { [key: string]: any }; // Generic type for params, adjust as necessary
}

export default async function Layout({ children, params }: LayoutProps) {
  const settings = await getSettings();
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div>{children}</div>
      <Footer />
    </>
  );
}

// Enable revalidate for all pages in this layout
// export const revalidate = 60;

