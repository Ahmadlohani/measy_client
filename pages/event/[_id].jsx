import Link from "next/link";
import { useRouter } from "next/router";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
const singleEvent = () => {
    const router = useRouter();
    const _id = router.query._id;
    return (
        <div className="row my-5">
            <div className="col-lg-6 col-md-12 col-sm-12 px-5 d-flex justify-content-center">
            <img src="/images/coming.jpg" id="productImg" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 py-5 px-5 text-secondary">
            <div>
                <h3 className="text-white">Born Primitive Rodent Trail Series: Day & Night</h3>
                <p>Feb 04, 2022 03:00 PM</p>
                <p>South Desert of Kuwait</p>
            </div>
            <div>
                <p className="text-danger">Share with Friends</p>
                <div className="d-flex">
                <FacebookShareButton
                    url={"https://peing.net/ja/"}
                    quote={"フェイスブックはタイトルが付けれるようです"}
                    hashtag={"#hashtag"}
                    description={"aiueo"}
                    className="mx-2"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <br />
                <TwitterShareButton
                    title={"test"}
                    url={"https://peing.net/ja/"}
                    hashtags={["hashtag1", "hashtag2"]}
                    className="mx-2"
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton
                    title={"test"}
                    url={"https://peing.net/ja/"}
                    className="mx-2"
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                </div>
            </div>
            <div className="my-5">
            <Link href="/cart/AddToCart">
               <a className="btn btn-sm btn-danger w-100 roleBtn"> Buy Ticket</a>
            </Link>
            </div>
            </div>
        </div>
    )
}

export default singleEvent
