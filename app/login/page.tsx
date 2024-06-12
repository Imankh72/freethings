import LoginSignUpInfoBox from "../components/LoginSignUpInfoBox";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/footer/Footer";
import LoggedInNavbar from "../components/home/hero-section/LoggedInNavbar";
import Navbar from "../components/home/hero-section/Navbar";
import LoginForm from "../components/login/LoginForm";
import { PaleGreenCircle } from "../components/svgs/PaleGreenCircle";
import WhiteCircle from "../components/svgs/WhiteCircle";

const LoginPage = () => {
  return (
    <main className="pb-5 bg-gray-100 h-screen overflow-y-scroll relative overflow-x-hidden mx-auto lg:overflow-visible lg:relative lg:z-10 lg:pt-[50px] lg:pb-32 lg:mb-[30px] lg:px-0 2xl:px-0">
      <div className="lg:hidden">
        <Navbar />
      </div>
      <div className="hidden lg:block lg:mb-10 lg:max-[1430px] lg:mx-auto lg:px-20">
        <LoggedInNavbar isWhite />
      </div>
      <div className="px-3 max-width lg:pb-[150px] lg:px-20 lg:relative">
        <div className="pt-10 lg:items-center lg:gap-x-[30px] lg:relative lg:z-20 lg:w-full lg:flex lg:px-20 lg:pt-20">
          <LoginSignUpInfoBox
            formHeading="Login"
            title="free smiles"
            text="Log in now and let FreeThings sprinkle your day with a dash of adorable and a heap of"
          />
          <LoginForm />
        </div>
        <div className="hidden lg:block lg:absolute lg:-right-[31rem] lg:top-14 lg:-z-0">
          <PaleGreenCircle />
        </div>
        <div className="hidden lg:block lg:absolute lg:-left-[31rem] lg:top-2/3 lg:-translate-y-2/3 lg:-z-0">
          <WhiteCircle />
        </div>
      </div>
      <MobileMenu />
      <Footer />
    </main>
  );
};

export default LoginPage;
