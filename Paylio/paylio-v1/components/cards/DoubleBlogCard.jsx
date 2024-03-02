import Image from "next/image";
import Link from "next/link";

const DoubleBlogCard = ({ blogData, start, end }) => {
  return (
    <>
      {blogData.slice(start, end).map((itm) => (
        <div key={itm.id} className="col-lg-6 col-sm-10">
          <div className="single-post">
            <div className="thumbnail">
              <Image src={itm.img} alt="image" className="w-100" />
            </div>
            <div className="blog-text">
              <p className="date">
                By {itm.author_name} - {itm.published_date}
              </p>
              <Link href="/blog/1">
                <h5>{itm.title}</h5>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DoubleBlogCard;
