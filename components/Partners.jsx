import Container from 'react-bootstrap/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Partners = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <div>
            <Container className="my-5">
                <div className="text-center my-3">
                <span className='fs-3 fw-bolder text-white headingBorder'>Our Partners</span>
                </div>
                <Carousel responsive={responsive}>
                <div className='mx-2 my-2'>
                    <img src="images/site_logo.png" width={"150px"} height={"80px"} alt="partners" />
                    <h5 className='text-white'>Company 1</h5>
                </div>
                <div className='mx-2 my-2'>
                    <img src="images/site_logo.png" width={"150px"} height={"80px"} alt="partners" />
                    <h5 className='text-white'>Company 2</h5>
                </div>
                <div className='mx-2 my-2'>
                    <img src="images/site_logo.png" width={"150px"} height={"80px"} alt="partners" />
                    <h5 className='text-white'>Company 3</h5>
                </div>
                <div className='mx-2 my-2'>
                    <img src="images/site_logo.png" width={"150px"} height={"80px"} alt="partners" />
                    <h5 className='text-white'>Company 4</h5>
                </div>
                <div className='mx-2 my-2'>
                    <img src="images/site_logo.png" width={"150px"} height={"80px"} alt="partners" />
                    <h5 className='text-white'>Company 5</h5>
                </div>
                <div className='mx-2 my-2'>
                    <img src="images/site_logo.png" width={"150px"} height={"80px"} alt="partners" />
                    <h5 className='text-white'>Company 6</h5>
                </div>
                <div className='mx-2 my-2'>
                    <img src="images/site_logo.png" width={"150px"} height={"80px"} alt="partners" />
                    <h5 className='text-white'>Company 7</h5>
                </div>
                <div className='mx-2 my-2'>
                    <img src="images/site_logo.png" width={"150px"} height={"80px"} alt="partners" />
                    <h5 className='text-white'>Company 8</h5>
                </div>
                </Carousel>
            </Container>
        </div>
    )
}

export default Partners;
