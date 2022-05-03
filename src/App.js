import "./App.css";

export default function App() {
  let card_details = [
    {
      plan_type: "FREE",
      price: "$0",
      plan_cycle: "/month",
      feature1: "Single User",
      included1: "done",
      feature2: "5GB Storage",
      included2: "done",
      feature3: "Unlimited Public Projects",
      included3: "done",
      feature4: "Community Access",
      included4: "done",
      feature5: "Unlimited Private Projects",
      included5: "close",
      feature6: "Dedicated Phone Support",
      included6: "close",
      feature7: "Free Subdomain",
      included7: "close",
      feature8: "Monthly Status Reports",
      included8: "close",
      button_name: "BUTTON"
    },
    {
      plan_type: "PLUS",
      price: "$9",
      plan_cycle: "/month",
      feature1: "5 User",
      included1: "done",
      feature2: "50GB Storage",
      included2: "done",
      feature3: "Unlimited Public Projects",
      included3: "done",
      feature4: "Community Access",
      included4: "done",
      feature5: "Unlimited Private Projects",
      included5: "done",
      feature6: "Dedicated Phone Support",
      included6: "done",
      feature7: "Free Subdomain",
      included7: "done",
      feature8: "Monthly Status Reports",
      included8: "close",
      button_name: "BUTTON"
    },
    {
      plan_type: "PRO",
      price: "$49",
      plan_cycle: "/month",
      feature1: "Unlimited User",
      included1: "done",
      feature2: "50GB Storage",
      included2: "done",
      feature3: "Unlimited Public Projects",
      included3: "done",
      feature4: "Community Access",
      included4: "done",
      feature5: "Unlimited Private Projects",
      included5: "done",
      feature6: "Dedicated Phone Support",
      included6: "done",
      feature7: "Free Subdomain",
      included7: "done",
      feature8: "Monthly Status Reports",
      included8: "done",
      button_name: "BUTTON"
    }
  ];
  return (
    <div className="App">
      {card_details.map((n) => (
        <Cart
          plan_type={n.plan_type}
          price={n.price}
          plan_cycle={n.plan_cycle}
          list={n.list}
          f1={n.feature1}
          f2={n.feature2}
          f3={n.feature3}
          f4={n.feature4}
          f5={n.feature5}
          f6={n.feature6}
          f7={n.feature7}
          f8={n.feature8}
          inc1={n.included1}
          inc2={n.included2}
          inc3={n.included3}
          inc4={n.included4}
          inc5={n.included5}
          inc6={n.included6}
          inc7={n.included7}
          inc8={n.included8}
        />
      ))}
    </div>
  );
}

function Cart({
  plan_type,
  price,
  plan_cycle,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  inc1,
  inc2,
  inc3,
  inc4,
  inc5,
  inc6,
  inc7,
  inc8
}) {
  return (
    <div class="container">
      <div class="pkg_rate_card">
        <h5 class="close">{plan_type}</h5>
        <h1>
          {price}
          <span class="span_heading">{plan_cycle}</span>
        </h1>
        <hr />
        <div class="list_item">
          <p>
            <span class="material-symbols-outlined">{inc1}</span>
            {f1}
          </p>
          <p>
            <span class="material-symbols-outlined">{inc2}</span>
            {f2}
          </p>
          <p>
            <span class="material-symbols-outlined">{inc3}</span>
            {f3}
          </p>
          <p>
            <span class="material-symbols-outlined">{inc4}</span>
            {f4}
          </p>
          <p class={inc5}>
            <span class="material-symbols-outlined">{inc5}</span>
            {f5}
          </p>
          <p class={inc6}>
            <span class="material-symbols-outlined">{inc6}</span>
            {f6}
          </p>
          <p class={inc7}>
            <span class="material-symbols-outlined">{inc7}</span>
            {f7}
          </p>
          <p class={inc8}>
            <span class="material-symbols-outlined">{inc8}</span>
            {f8}
          </p>

          {/* {data.map((m) => (
            <Features included={m.included} feature={m.feature} />
          ))} */}
        </div>
        <button class="button">BUTTON</button>
      </div>
    </div>
  );
}

