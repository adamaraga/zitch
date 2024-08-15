import titleIcon from "../assets/images/svg/title.svg";

const Faq = () => {
  const faqs = [
    {
      title: "What Are The Login Hours?",
      desc: "We are happy to serve you delicious food 24/7! You can place orders and browse our menus any time of day or night. Our network of restaurants operates on varied schedules",
    },
    {
      title: "How Long It Will Take Food To Arrive?",
      desc: "The closer the restaurant is to your location, the quicker your food will arrive. Consider this when choosing a restaurant, especially if you're hungry! ",
    },
    {
      title: "What Is Cost Of Food Delivery? ",
      desc: "Our app charges little or no fee This helps us cover the costs of operating the app and maintaining our delivery network. ",
    },
    {
      title: "How Do I Place An Order? ",
      desc: `It's simple! Download our app, browse the menus of nearby restaurants, choose your delicious feast, add it to your cart, select your payment method, and hit "Order Now." We'll handle the rest! `,
    },
    {
      title: "What If I Have Dietary Restrictions? ",
      desc: "We've got you covered! Many restaurants offer filters for specific dietary needs, like vegan, gluten-free, or nut-free options. Simply select your preferences and let the app do the legwork ",
    },
    {
      title: "Can I Tip My Driver? ",
      desc: "Absolutely! Tipping is optional but highly appreciated. You can add a tip directly within the app before placing your order or in cash upon delivery. ",
    },
  ];
  return (
    <section id="faqs" className="faq">
      <div className="faq__top">
        <h2>
          Frequently <br />
          Asked Questions
        </h2>

        <img src={titleIcon} alt="" />
      </div>

      <div className="faq__main">
        {faqs.map((faq, i) => {
          return (
            <div key={i} className="faq__main__item">
              <h4 className="faq__main__item__title">{faq.title}</h4>
              <p>{faq.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
