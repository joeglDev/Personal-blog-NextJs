import { Heading } from "@/components/Heading";
import { getBlogPost } from "@/api";
import { Banner } from "@/components/Banner";

interface PageProps {
  params: Promise<{ id: string }>;
}

// TODO test error
// TODO make pretty
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const { data, isError } = await getBlogPost(parseInt(id));

  return (
    <>
      {isError ? (
        <Banner type={"Error"}>
          An error occurred whilst fetching the blog post data. Please bear with
          us.
        </Banner>
      ) : (
        <div>
          <Heading variant={"1"}>{data?.title}</Heading>
          <p>{data?.content}</p>
        </div>
      )}
    </>
  );
}
