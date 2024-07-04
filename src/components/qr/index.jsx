import qr from "../../assets/image-qr-code.png";

export const QRComponent = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-slate-200">
        <div className="rounded-2xl w-[320px] h-[497px] bg-white p-4 shadow-lg">
          <img src={qr} className="rounded-xl shadow-lg" />
          <h2 className="font-bold text-xl mt-3 text-center">
            Improve your front-end skills by building projects
          </h2>
          <p className="text-center text-md mt-3">
            Scan the QR codeto visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </>
  );
};
