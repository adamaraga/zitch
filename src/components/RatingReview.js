function RatingReview({ rating, setRating }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            className="start"
            style={{
              //   cursor: "pointer",
              color: rating >= star ? "gold" : "#bababa",
              fontSize: `17px`,
            }}
            // onClick={() => {
            //   setRating(star)
            // }}
            key={star}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
}

export default RatingReview;
