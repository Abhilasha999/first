import Image from "next/image";

const ContentCard = ({ itm, cls = "" }) => {
  return (
    <div className={`single-item ${cls}`}>
      <Image width={100} height={100} src={itm.icon} alt="icon" />
      <h5>{itm.title}</h5>
      <p>{itm.desc}</p>
    </div>
  );
};

export default ContentCard;
