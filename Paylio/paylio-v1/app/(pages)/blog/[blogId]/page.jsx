import Banner from "@/components/blogDetails/Banner";
import Details from "@/components/blogDetails/Details";
import RelatedPosts from "@/components/blogDetails/RelatedPosts";

export default function BlogDetails() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Details Section */}
      <Details />

      {/* Related Posts Section */}
      <RelatedPosts />
    </>
  );
}
