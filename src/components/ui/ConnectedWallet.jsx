import boxBackground from "../../img/ui/box-background.webp";
import { LogOut } from "lucide-react"; // ludid react

export const ConnectedWallet = ({ wallet, className }) => {
  return (
    <div
      style={{
        background: `url(${boxBackground})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "100px",
        width: "520px",
      }}
      className={`flex gap-4 items-center justify-around ${className}`}
    >
      {wallet != "undefined" && wallet != "" ? (
        <div>Wallet: {wallet}</div>
      ) : (
        <div>No wallet found, create a Game Account first</div>
      )}
      <div
        onClick={() => {
          localStorage.removeItem("walletAddress");
          localStorage.removeItem("authToken");
          window.location.href = "/#/";
        }}
        className="cursor-pointer"
      >
        <LogOut />
      </div>
    </div>
  );
};
