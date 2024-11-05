import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/page_trans/layout";

export default function App({ Component, pageProps, router }: AppProps) {
  console.log(router.asPath);

  return (
    <>
      <div>
        <AnimatePresence mode="wait" initial={false}>
          <Layout key={router.asPath}>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </div>
    </>
  );
}
