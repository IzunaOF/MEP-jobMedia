import "@/styles/concepts/blurTemplate.css";
import "@/styles/concepts/customButton.css";
import "@/styles/trpBox.css";
import "@/styles/Tbox.css";
import "@/styles/concepts/shadows.css";

import backgroundImg from "@/assets/topbackground.jpg";
import LandingPage from "./components/LandingPage";
import WhatHireSection from "./components/WhatHireSection";
import AdvantageSection from "./components/AdvantageSection";
import AppSection from "./components/AppSection";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
    const [animate, setAnimate] = useState<boolean>(false);
    useEffect(() => {
        const animated = () => {
            if (window.scrollY > 400) {
                setAnimate(true);
            } else {
                setAnimate(false);
            }
        };
        window.addEventListener("scroll", animated);
        return () => {
            window.removeEventListener("scroll", animated);
        };
    }, []);

    return (
        <>
            <Navbar />
            <main className="flex flex-col w-full gap-20 text-center bg-BGCImage">
                <div className="blurTemplate"></div>
                <button
                    type="button"
                    onClick={() => window.scroll({ behavior: "smooth", top: 0 })}
                    className={`flex flex-col items-center fixed top-[88%] left-[95%] w-max z-50 ${
                        animate ? "animate-bounce" : ""
                    } `}>
                    <span>^</span>
                    <span>up</span>
                </button>
                <img
                    className="BGCIMG"
                    src={backgroundImg}
                    alt="backgroundImg"
                />
                <LandingPage />
                <WhatHireSection />
                <AdvantageSection />
                <AppSection />
            </main>
            <Footer />
        </>
    );
}

export default App;
