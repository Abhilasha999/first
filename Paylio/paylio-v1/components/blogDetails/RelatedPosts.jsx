import blogData from "@/data/blogData";
import Link from "next/link";
import SingleBlogCard from "../cards/SingleBlogCard";

const RelatedPosts = () => {
  return (
    <section className="blog-section details">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row blog-section-content pt-120 justify-content-center justify-content-center">
            <div className="col-xl-12">
              <div className="section-text d-flex align-items-center justify-content-between">
                <h2>Latest Posts</h2>
                <Link href="/blog" className="cmn-btn">
                  Browse all articles
                </Link>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {/* TODO: Single Blog Card */}
            <SingleBlogCard blogData={blogData} start={1} end={4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
