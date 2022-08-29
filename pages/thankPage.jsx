import Link from "next/link";
const thankPage = () => {
  return (
    <div className="text-center regImg text-white" id="thankCont">
      <div className="my-5 py-5">
        <h1 className="text-white">Thanks For Ordering</h1>
        <p>Hope You Enjoy our Services</p>
        <Link href="/"><a className="btn btn-danger roleBtn">Go to Homepage</a></Link>
      </div>
    </div>
  );
};

export default thankPage;
