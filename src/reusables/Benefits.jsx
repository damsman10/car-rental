import Benefit from "./Benefit";
import b1 from "../assets/b-1.jpg";
import b2 from "../assets/b-2.jpg";
import b3 from "../assets/b-3.jpg";
import b4 from "../assets/b-4.jpg";
import p1 from "../assets/p-1.png";
import p2 from "../assets/p-2.png";
import p3 from "../assets/p-3.png";
import p4 from "../assets/p-4.png";

const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-9 p-4">
      <Benefit image={b1} pic={p1} text="No Extra Hidden Fees" />
      <Benefit image={b2} pic={p2} text="Multilingual Service" />
      <Benefit image={b3} pic={p3} text="24/7 Customer Support" />
      <Benefit image={b4} pic={p4} text="100% You Can Trust" />
    </div>
  );
}

export default Benefits;
