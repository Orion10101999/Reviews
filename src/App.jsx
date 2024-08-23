import ReviewList from "./components/ReviewList";
import Test from "./components/Test";

export default function App() {
  return (
    <>
    <Test/>
      <h2 className="text-3xl my-5 text-green-600 bg-slate-300 p-5">Reviews : </h2>
      <ReviewList />
    </>
  )
}