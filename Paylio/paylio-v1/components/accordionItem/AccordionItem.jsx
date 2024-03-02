const AccordionItem = ({ singleItm }) => {
  const { id, title, desc } = singleItm;

  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id={`heading${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}
        >
          {title}
        </button>
      </h6>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${id}`}
        data-bs-parent="#accordion"
      >
        <div className="accordion-body">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
