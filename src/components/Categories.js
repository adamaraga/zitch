import { useEffect, useState } from "react";
import chi from "../assets/images/chi.png";
import titleIcon from "../assets/images/svg/title.svg";
import { toast } from "react-toastify";
import { fetchCat, fetchResByCat } from "../api/main";
import Loading from "./Loading";

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMain, setLoadingMain] = useState(false);
  const [categories, setcategories] = useState([]);
  const [stores, setstores] = useState([]);
  const [category, setcategory] = useState("");

  useEffect(() => {
    const handleFetchCat = async () => {
      setLoading(true);
      try {
        const res = await fetchCat();

        // const topStore = res.data?.stores?.slice(0, 10);
        setcategories(res.data);
        setcategory(res.data?.[0]?.slug);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        const message =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        toast.error(message);
      }
    };

    handleFetchCat();
  }, []);

  useEffect(() => {
    const handleFetchResByCat = async () => {
      if (category) {
        setLoadingMain(true);
        try {
          const res = await fetchResByCat(category);

          setstores(res.data?.stores);
          console.log("ress.data", res.data);
          setLoadingMain(false);
        } catch (err) {
          setLoadingMain(false);
          const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
          toast.error(message);
        }
      }
    };

    handleFetchResByCat();
  }, [category]);

  // const categories = ["All", "Chicken", "Local food", "Shawarma", "Snacks"];
  return (
    <section id="category" className="categories">
      <div className="categories__header">
        <h2>Categories</h2>
        <img src={titleIcon} alt="" />
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="categories__top">
          {categories?.map((cat) => {
            return (
              <span
                key={cat?.id}
                className={
                  cat?.slug === category
                    ? "categories__top__item active"
                    : "categories__top__item"
                }
                onClick={() => setcategory(cat?.slug)}
              >
                {cat?.name}
              </span>
            );
          })}
        </div>
      )}

      <div className="categories__main">
        {loadingMain ? (
          <Loading />
        ) : (
          stores?.map((store) => {
            return (
              <div key={store?.id} className="categories__main__item">
                <img src={chi} alt="" />

                <p>{store?.name}</p>
              </div>
            );
          })
        )}
        {/* <div className="categories__main__item">
          <img src={chi} alt="" />

          <p>Chicken Republic</p>
        </div>
        <div className="categories__main__item">
          <img src={chi} alt="" />

          <p>Chicken Republic</p>
        </div>
        <div className="categories__main__item">
          <img src={chi} alt="" />

          <p>Chicken Republic</p>
        </div>
        <div className="categories__main__item">
          <img src={chi} alt="" />

          <p>Chicken Republic</p>
        </div> */}
      </div>
    </section>
  );
};

export default Categories;
