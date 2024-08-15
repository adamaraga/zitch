import mobile1 from "../assets/images/mobile1.png";
import mobile2 from "../assets/images/mobile2.png";
import titleIcon from "../assets/images/svg/title.svg";

const Feature = () => {
  return (
    <section id="features" className="feature">
      <div className="feature__header">
        <div className="feature__header__top">
          <h2 style={{ marginBottom: 10 }}>Latest Features</h2>
          <img src={titleIcon} alt="" />
        </div>
        <p>
          Orderfood is building infrastructure for local restaurants, and market
          stores, enabling merchants to thrive in the convenience economy,
          giving consumers access to more of their communities, and providing
          work that empowers. With OrderFood, you enjoy seamless and fast food
          delivery in every order.
        </p>
      </div>

      <div className="feature__main" style={{ marginTop: 40 }}>
        <img src={mobile1} alt="" />

        <div className="feature__main__info">
          <h3>Order Food Customer App.</h3>
          <p>
            Craving delicious food? Order from your favorite restaurants near
            you with just a few taps! Our app lets you browse menus, place
            orders for delivery or pickup, track your food in real-time, and pay
            securely. Enjoy a variety of cuisines, exclusive deals, and fast
            delivery straight to your doorstep. Download order food customer app
            and experience convenient food delivery at your fingertips.
          </p>
        </div>
      </div>
      <div className="feature__main alt">
        <div className="feature__main__info">
          <h3>Oder Food Vendor App</h3>
          <p>
            Take control of your online business with the order food Vendor App.
            Receive and manage customer orders efficiently, update menus and
            availability in real-time, track driver progress, and gain valuable
            insights into your sales performance. This user-friendly app allows
            you to focus on what matters most - providing delicious food to your
            customers.
          </p>
        </div>
        <img src={mobile2} alt="" />
      </div>
    </section>
  );
};

export default Feature;
