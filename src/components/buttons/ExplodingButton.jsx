<div className="p-8 bg-[url('/src/img/ui/modal/modal6.webp')] h-[600px] bg-contain w-[400px] bg-no-repeat">
  <h1 className="text-4xl font-bold text-center mt-16 mb-6">Connect</h1>
  <div className="buttons">
    <button
      className={`particles ${
        isActive ? "activeclass" : "border-white border-4 rounded"
      }`}
      onClick={() => {
        loginWithEpic();
      }}
    >
      <span class="particles__content">
        <div
          style={{
            backgroundImage: `url(${epicSignIn})`,
            backgroundSize: "contain", // make sure that the image fits the button
            width: "80px",
            height: "110px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            fontWeight: "500",
            transition: "0.2s",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </span>
      <span class="particles__parts">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  </div>
</div>;
