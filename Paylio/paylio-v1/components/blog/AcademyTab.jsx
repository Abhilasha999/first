import blogData from "@/data/blogData";
import BlogFullWidhtCard from "../cards/BlogFullWidhtCard";
import DoubleBlogCard from "../cards/DoubleBlogCard";
import SingleBlogCard from "../cards/SingleBlogCard";

const AcademyTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="academy"
      role="tabpanel"
      aria-labelledby="academy-tab"
    >
      <div className="row">
        <SingleBlogCard blogData={blogData} start={1} end={4} />

        <BlogFullWidhtCard blogData={blogData} start={0} end={1} />

        <DoubleBlogCard blogData={blogData} start={4} end={6} />

        <BlogFullWidhtCard blogData={blogData} start={6} end={7} />

        <SingleBlogCard blogData={blogData} start={7} end={10} />

        <BlogFullWidhtCard blogData={blogData} start={10} end={11} />

        <DoubleBlogCard blogData={blogData} start={11} end={13} />
      </div>
    </div>
  );
};

export default AcademyTab;
