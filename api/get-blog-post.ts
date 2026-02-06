import { getBaseUrl } from "@/api/utils";
import { BlogPost } from "@/api/schemas";

export const getBlogPost = async (id: number) => {
  try {
    const response = await fetch(`${getBaseUrl()}/api/posts/${id}`);
    const data: BlogPost = await response.json();

    return { data, isError: !response.ok };
  } catch {
    return { data: null, isError: true };
  }
};
