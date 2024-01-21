import NewsletterCard from "./components/NewsletterCard";
import SuccessCard from "./components/SuccessCard";
import { useState } from "react";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(!isSuccess);
    console.log(isSuccess)
  };

  return (
    <div className="flex justify-center items-center  bg-[#36384d] h-screen">
      {isSuccess ? (
        <SuccessCard handleDismiss={handleSuccess} />
      ) : (
        <NewsletterCard handleForm={handleSuccess} />
      )}
    </div>
  );
}

export default App;
