import { getSettings } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Header from "@/components/HeaderDark";
import Footer from "@/components/Footer";



export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      {<Header></Header>}
      <br />
      <br />
      <br />

      <div>{children}</div>

      {<Footer></Footer>}
    </>
  );
}

// enable revalidate for all pages in this layout
// export const revalidate = 60;

