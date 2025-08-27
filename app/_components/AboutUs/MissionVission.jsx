"use client";
const MissionVision = ({ data }) => {
  return (
    <section className="misvis">
      {data.map((item, index) => (
        <div key={index} className={`row ${index % 2 === 1 ? "reverse" : ""}`}>
          <img src={item.featuredImage} alt={item.headline} />
          <div className="text">
            <h5>{item.headline}</h5>
            <p className="pragraph">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MissionVision;
