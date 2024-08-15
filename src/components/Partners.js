import part1 from "../assets/images/part1.png";
import part2 from "../assets/images/part2.png";
import part3 from "../assets/images/part3.png";
import part5 from "../assets/images/part5.jpeg";
import part6 from "../assets/images/part6.png";

const Partners = () => {
  const partners = [part1, part2, part3, part5, part6];

  return (
    <div className="partners">
      <h3>TRUSTED BY 70+ COMPANIES</h3>
      <div className="partners__main">
        {partners.map((part, i) => {
          return <img key={i} src={part} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Partners;
