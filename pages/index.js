import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/icon/icon"));

export default function Home() {
  return (
    <div>
      <div class="bg-gray-100 py-10 md:px-60 md:py-32 grid md:grid-cols-3 space-y-4 md:space-y-0">
        <DynamicComponent
          image="/box.svg"
          title="FREE SHIPPING"
          description="Same day delivery is included on all orders"
        ></DynamicComponent>
        <DynamicComponent
          image="/guarantee.svg"
          title="30-DAY GUARANTEE"
          description="Covers any damage that renders your tights unwearable"
        ></DynamicComponent>
        <DynamicComponent
          image="/dumbbell.svg"
          title="STRENGTH TESTED"
          description="Rated 5 stars by thousands of happy customers"
        ></DynamicComponent>
      </div>
      <div></div>
    </div>
  );
}
