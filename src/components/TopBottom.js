import { HashLink } from "react-router-hash-link";
import Drawer from "./Drawer";
import HoverMenu from "./HoverMenu";
import { fetchTopRes } from "../api/main";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "./Loading";

const TopBottom = ({ alt, setOpen, resList, links, open, show }) => {
  const [loading, setLoading] = useState(false);
  const [topRes, setTopRes] = useState([]);

  useEffect(() => {
    const handleFetchTopRes = async () => {
      setLoading(true);
      try {
        const res = await fetchTopRes();

        const topStore = res.data?.stores?.slice(0, 10);
        setTopRes(topStore);
        // console.log("ress.data", res.data);
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

    handleFetchTopRes();
  }, []);

  return (
    <div
      className={
        alt
          ? "topbar__bottom"
          : show
          ? "topbar__bottom alt"
          : "topbar__bottom alt fixed"
      }
    >
      <div className="topbar__bottom__left">
        <div className="topbar__bottom__cat">
          <div
            className="topbar__bottom__cat__top"
            onClick={() => setOpen((curr) => !curr)}
          >
            <div className="topbar__bottom__cat__top__left">
              <i className="icon-list"></i>
              <span>Top Resturant</span>
            </div>
            <div className="topbar__bottom__cat__top__right">
              <i className="icon-arrow-down"></i>
            </div>
          </div>

          <ul
            // className={
            //   open
            //     ? "topbar__bottom__cat__list open"
            //     : "topbar__bottom__cat__list"
            // }
            className="topbar__bottom__cat__list"
            style={{ height: open ? topRes?.length * 44.2 : 0 }}
          >
            {loading ? (
              <Loading />
            ) : (
              topRes?.map((item, i) => {
                return <li key={i}>{item.name}</li>;
              })
            )}
          </ul>
        </div>

        <ul className="topbar__bottom__links">
          {links?.map((item, i) => {
            if (i + 1 === links?.length) return null;
            return (
              <HashLink key={i} to={`/#${item.url}`}>
                <li className="topbar__bottom__links__item" key={item.name}>
                  {item.name}
                </li>
              </HashLink>
            );
          })}
        </ul>
      </div>

      {/* <ul className="topbar__bottom__links">
        <HashLink href={`/#${links[links?.length - 1].url}`}>
          <li className="topbar__bottom__links__item">
            {links[links?.length - 1].name}
          </li>
        </HashLink>
      </ul> */}

      <HoverMenu />

      <Drawer links={links} />
    </div>
  );
};

export default TopBottom;
