import { Routes, Route } from "react-router-dom";
import Navbar from "./page/Navbar/Navbar";
import Home from "./page/Home/Home";
import Portfolio from "./page/Portfolio/Portfolio";
import Activity from "./page/Activity/Activity";
import Wallet from "./page/Wallet/Wallet";
import Withdrawal from "./page/Withdrawal/Withdrawal";
import PaymentDetails from "./page/Payment Details/PaymentDetails";
import WatchList from "./page/WatchList/WatchList";
import Profile from "./page/Profile/Profile";
import Search from "./page/Search/Search";
import WithdrawalAdmin from "./page/Admin/WithdrawalAdmin";
import NotFound from "./page/NotFound/NotFound";
import StockDetails from "./page/StockDetails/StockDetails"; // Don't forget this!

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/market/:id" element={<StockDetails />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/withdrawaladmin" element={<WithdrawalAdmin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
