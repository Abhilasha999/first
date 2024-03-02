import blogData from "@/data/blogData";
import BlogFullWidhtCard from "../cards/BlogFullWidhtCard";
import DoubleBlogCard from "../cards/DoubleBlogCard";
import SingleBlogCard from "../cards/SingleBlogCard";

const PeopleTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="people"
      role="tabpanel"
      aria-labelledby="people-tab"
    >
      <div className="row">
        <BlogFullWidhtCard blogData={blogData} start={0} end={1} />

        <SingleBlogCard blogData={blogData} start={1} end={4} />

        <DoubleBlogCard blogData={blogData} start={4} end={6} />

        <BlogFullWidhtCard blogData={blogData} start={6} end={7} />

        <SingleBlogCard blogData={blogData} start={7} end={10} />

        <BlogFullWidhtCard blogData={blogData} start={10} end={11} />

        <DoubleBlogCard blogData={blogData} start={11} end={13} />
      </div>
    </div>
  );
};

export default PeopleTab;
