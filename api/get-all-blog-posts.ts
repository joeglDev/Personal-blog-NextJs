import {getBaseUrl} from "@/api/utils";
import {BlogPost} from "@/api/schemas";

export const getAllBlogPosts = async () => {
    try {
        const response = await fetch(`${getBaseUrl()}/api/posts`);
        const data: BlogPost[] = await response.json();

        return {data, isError: !response.ok}
    } catch {
        return {data: [], isError: true}
    }

}