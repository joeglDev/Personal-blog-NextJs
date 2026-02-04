import { Metadata } from "next";
import {getAllBlogPosts} from "@/api";
import {Heading} from "@/components/Heading";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A blog written to discuss my professional life and hobbies.",
};

export default async function Home() {
const {data, isError} = await getAllBlogPosts();

// TODO handle isError
    // TODO handle no results
    // TODO get image if applicable

  return (
    <>
      <h1>Index page</h1>
      <p>⚠️ Under construction ⚠️️</p>
        {
            data.map(({title, content}, index) => {
                return (
                    <div key={index}>
                        <Heading variant={"2"}>{title}</Heading>
                        <p>{content}</p>
                    </div>
                )
            })
        }
    </>
  );
}
