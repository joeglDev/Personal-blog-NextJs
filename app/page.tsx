import { Metadata } from "next";
import {getAllBlogPosts} from "@/api";
import {Heading} from "@/components/Heading";
import {Banner } from "@/components/Banner";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A blog written to discuss my professional life and hobbies.",
};

export default async function Home() {
const {data, isError} =  await getAllBlogPosts();
const displayPosts = !isError && data?.length > 0;
const displayNoPostsWarning = data?.length === 0 && !isError;

console.log(data, isError)

//TODO test no data []
  // TODO test error
    // TODO get image if applicable
  return (
    <>
      <Heading variant={"1"}>My blog</Heading>

      {
        isError && (
<Banner type={"Error"}>An error occurred whilst fetching the blog post data. Please bear with us.</Banner>
          )
      }

      {
        displayNoPostsWarning && (
              <Banner type={"Warning"}>The system is working as expected but there are no blog posts at this time. Please check back again another time.</Banner>
          )
      }
        {
            displayPosts && data.map(({title, content}, index) => {
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
