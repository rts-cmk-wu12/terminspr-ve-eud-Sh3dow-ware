import "@/styles/components/start-screen/start-screen.sass"
import Link from "next/link";

export const StartScreen = () => {
  return (
      <>
        <div className={"start-screen"}>
          <div className={"start-screen__container"}>
            <p className={"start-screen__title"}>LANDRUP</p>
            <p className={"start-screen__under-title"}>DANS</p>
            <div className={"start-screen__line"}></div>
          </div>
          <Link href={"/activities"} className={"start-screen__button"}>Kom i Gang</Link>
        </div>
      </>
  );
};