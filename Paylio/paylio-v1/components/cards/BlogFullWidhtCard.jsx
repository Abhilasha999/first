import Image from "next/image";
import Link from "next/link";
import arrow_4 from "/public/images/icon/arrow-right-4.png";

const BlogFullWidhtCard = ({ blogData, start, end }) => {
  return (
    <>
      {blogData.slice(start, end)?.map((itm) => (
        <div key={itm.id} className="col-lg-12">
          <div className="single-post d-flex">
            <div className="thumbnail">
              <Image src={itm.img} alt="image" />
            </div>
            <div className="blog-text">
              <p className="date">
                By {itm.author_name} - {itm.published_date}
              </p>
              <Link href="/blog/1">
                <h4>{itm.title}</h4>
              </Link>
              <p className="blog-content">{itm.desc}</p>
              <div className="bottom-area d-flex align-items-center justify-content-between">
                <Image src={itm.author_avt} alt="image" />
                <div className="btn-area d-flex align-items-center">
                  <Link href="/blog/1">
                    Read More
                    <Image src={arrow_4} alt="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogFullWidhtCard;
