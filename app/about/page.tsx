import { Heading } from "@/components/Heading";
import styles from "./about.module.css";
import Link from "next/dist/client/link";
import {
  Table,
  TableHeader,
  TableRow,
  TableCaption,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "An about page describing the purpose of this blog and how it was created.",
};

export default function Page() {
  return (
    <>
      <Heading variant={"1"}>About</Heading>
      <Heading variant={"2"}>What is this place?</Heading>
      <p className={styles.p}>
        This website is a personal blog for myself in order to discuss my
        professional life in a space which I can control and is separated from
        LinkedIn. To learn more about myself please check out my{" "}
        <Link
          className={styles.link}
          href="https://joe-gilbert-developer.xyz"
          target="_blank"
        >
          portfolio
        </Link>
        .
      </p>

      <Heading variant={"2"}>What technologies did you use?</Heading>
      <p className={styles.p}>
        This website was built with Next.Js using a mixture of server and client
        rendering methods. Logic was written using the TypeScript language and
        the shadcn library was used for components. Usually, I prefer to built
        components myself using JSX, however, shadcn was selected to increase
        the the speed that I could get this website up and running.
      </p>
      <p className={styles.p}>
        The backend is a dotNET server which stores content in a SQL database
        and serves content to this website.
      </p>

      <Heading variant={"2"}>Features to implement</Heading>
      <p className={styles.p}>
        This website is a work in progress. As such many features are missing or
        incomplete at this time.
      </p>

      <div className={styles.tableContainer}>
        <Table className="w-[80vw]">
          <TableCaption>Features to implement</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-extrabold">Feature</TableHead>
              <TableHead className="font-extrabold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>About page</TableCell>
              <TableCell>Complete ✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Header with navigation</TableCell>
              <TableCell>Complete ✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Footer with links</TableCell>
              <TableCell>Complete ✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Change dark mode theme colours</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                Add playwright tests and a pipeline to run them on creation of a
                PR
              </TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                Fetch blog post data from server and populate the index page
              </TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Light / dark mode toggle</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Dragon font</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Sort blog posts by date, etc</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Heading variant={"2"}>AI disclaimer</Heading>
      <p className={styles.p}>
        The majority of this website and it&apos;s backend server code was
        written by hand using my own skills and experience. The commit history
        of the website can be found{" "}
        <Link
          className={styles.link}
          href="https://github.com/joeglDev/Personal-blog-NextJs"
          target="_blank"
        >
          here
        </Link>
        . Large Language Models were used to generate some sections of code in a
        synchronous manner. This code was then reviewed and implemented by
        myself.
      </p>
    </>
  );
}
