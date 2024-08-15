import titleIcon from "../assets/images/svg/title.svg";
import flyer from "../assets/images/flyer/5.jpg";
import RatingReview from "./RatingReview";

const Review = () => {
  const comment = [
    {
      name: "Ifeoma Akintola",
      desc: "Finally, a food app that gets it! Easy to use, great selection, and always on time. My new go-to for dinner.",
      rating: 5,
    },
    {
      name: "Adeola Okonkwo",
      desc: "Ready to experience the future of food delivery? Download the order food app app now on the Playstore! ",
      rating: 5,
    },
    {
      name: "Ifeoma Akintola",
      desc: "order food app is a game-changer! Fast, reliable, and the deals are amazing. Highly recommend!",
      rating: 5,
    },
    {
      name: "Ifeoma Akintola",
      desc: "From the easy-to-use app to the helpful customer service, Order Food APp has exceeded my expectations.",
      rating: 4,
    },
  ];

  return (
    <section id="review" className="review">
      <div className="review__top">
        <h2>
          What Our Customers <br /> Say About Us
        </h2>

        <img src={titleIcon} alt="" />
      </div>
      <div className="review__main">
        <img src={flyer} alt="" />
        <div className="review__main__right">
          {comment.map((com, i) => {
            return (
              <div key={i} className="review__main__right__item">
                <h4>{com.name}</h4>
                <RatingReview rating={com.rating} />
                <p>{com.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Review;
