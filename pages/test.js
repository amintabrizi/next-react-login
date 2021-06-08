import dynamic from "next/dynamic";


const DynamicComponentWithNoSSR = dynamic(
  () => import("./../components/test"),
  { ssr: false }
);


export default function Test() {
  console.log('test main component');
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  )
}
