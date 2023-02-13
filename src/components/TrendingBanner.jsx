import { useEffect, useRef, useState } from "react"
import { IMAGE_BASE_URL } from "../common/constants"
import { dotSVG, leftArrowSVG, rightArrowSVG } from "../common/svg";

export const TrendingBanner = (props) => {

    const MAX_BANNER_ITEM = 10;
    const [reload, setReload] = useState(false);
    const rufusRef = useRef(undefined);
    // -------------------------------------------------------------------------------------

    useEffect(() => {
        rufusRef.currentStep = 0;
    }, []);

    useEffect(() => {
        rufusRef.bannerData = props.bannerData.slice(0, MAX_BANNER_ITEM);
    }, [props.bannerData]);

    // -------------------------------------------------------------------------------------

    const showBannerSlide = (id) => {
        rufusRef.currentStep = id;
        setReload(!reload);
    }

    // -------------------------------------------------------------------------------------

    const leftArrowHandler = () => {
        showBannerSlide(rufusRef.currentStep -= 1);
    }

    const rightArrowHandler = () => {
        showBannerSlide(rufusRef.currentStep += 1);
    }


    // -------------------------------------------------------------------------------------
    return <div className="trending-banner-container">

        {(rufusRef.currentStep !== 0)
            ? <div className="arrow left-arrow" onClick={leftArrowHandler}>
                {leftArrowSVG}
            </div>
            : ''}

        <div className="banner-holder" style={{ transform: `translateX(calc(${rufusRef.currentStep} * -100%))` }}>

            {rufusRef.bannerData && rufusRef.bannerData.map((item, index) => {
                return <div key={index} className="banner-item">
                    <img src={IMAGE_BASE_URL + item.backdrop_path} />


                    <div className="banner-movie-details">
                        <span className="banner-movie-name">{item.title ? item.title : item.name}</span>
                        <span className="banner-movie-description">{item.overview}</span>
                    </div>

                </div>
            })}

        </div>

        {(rufusRef.currentStep !== props.bannerData.length - 1)
            ? <div className="arrow right-arrow" onClick={rightArrowHandler}>
                {rightArrowSVG}
            </div>
            : ''}


        <div className="dots-holder">
            {rufusRef.bannerData && rufusRef.bannerData.map((item, index) => {
                return <span key={index} className={`dots ${rufusRef.currentStep === index ? "active" : ''}`} onClick={() => showBannerSlide(index)}>
                    {dotSVG}
                </span>
            })}


        </div>

    </div>
}