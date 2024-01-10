import './index.css';
import Table from './components/Table';
import CardBlue from './components/CardBlue';
import CardWhite from './components/CardWhite';
import arrow from './assets/arrow.svg';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
function App() {
  return (
    <div className="w-full bg-gray-100 screenHeight">
      <div className="flex w-full ">
        <SideBar />
        <div className="w-full">
          <Navbar />
          <div className="p-4 mx-auto max-w-[1400px] h-screen flex flex-col gap-12">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Overview</h1>
              <button className="text-sm flex items-center bg-white shadow px-3 py-2 text-gray-800 gap-1 rounded">
                <span>This Month</span>
                <img src={arrow} />
              </button>
            </div>
            {/* Card start */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start justify-between">
              <CardBlue
                title="Next Payout"
                amount="2,312.23"
                orders="23"
                date="Today, 04:00PM"
              />
              <CardWhite
                title="Amount Pending"
                amount="92,312.20"
                orders="13"
              />
              <CardWhite title="Amount Processed" amount="23,92,312.19" />
            </div>
            {/* Card end */}

            {/* Transaction start */}
            <div className="flex flex-col gap-8">
              <h1 className="font-semibold text-base md:text-xl">
                Transactions | This Month
              </h1>
              <div className="flex gap-4">
                <button className="py-1 px-3 md:text-sm text-xs text-gray-500 bg-gray-200 rounded-full">
                  Payouts (22)
                </button>
                <button className="py-1 px-3 bg-primaryBlue text-white  text-xs md:text-sm rounded-full">
                  Refunds (6)
                </button>
              </div>
            </div>
            {/* Transaction End */}

            {/* Table Start */}
            <Table />
            {/* Table End */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
