import Pricing from "../components/pricing"
import Header from "../components/header/Header"
import FooterComponent from "../components/footer/footer"
const PricingPage=()=>{
    return(
        <>
            <div className=" 2xl:px-60 xl:px-36 lg:px-10 bg-[url('/static/images/Website-Background.png')] ">
                <Header/>
                <Pricing/>
            </div>
                <FooterComponent/>
        </>
    )
}


export default PricingPage