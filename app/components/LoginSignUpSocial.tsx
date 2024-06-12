import LoginSignUpSocialBtn from "./LoginSignUpSocialBtn";
import { FacebookIcon } from "./svgs/FacebookIcon";
import { GoogleIcon } from "./svgs/GoogleIcon";

const LoginSignUpSocial = () => {
  const numbers = Array.from({ length: 3 }, (_, index) => index + 1);
  return (
    <div className="flex flex-col gap-y-[6px]">
      {data.map(({ id, icon, text }) => (
        <LoginSignUpSocialBtn key={id} icon={icon} text={text} />
      ))}
    </div>
  );
};

export default LoginSignUpSocial;

const data = [
  { id: 1, text: "Continue with Facebook", icon: <FacebookIcon /> },
  { id: 2, text: "Continue with Google", icon: <GoogleIcon /> },
];
