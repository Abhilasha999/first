"use client";

import { PaylioContext } from "@/context/context";
import dynamic from "next/dynamic";
import { useContext } from "react";
import Select from "../select/Select";
import AccountDetails from "./AccountDetails";
import LinkedPaymentSystem from "./LinkedPaymentSystem";
import Recipients from "./Recipients";
import TransactionTabel from "./TransactionTabel";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const month = [
  { id: 1, name: "Jan" },
  { id: 2, name: "Feb" },
  { id: 3, name: "Mar" },
];

const DashboardMain = () => {
  const { activeLefMenu } = useContext(PaylioContext);

  const options = {
    labels: ["Send", "Receive", "Payment", "Deposit", "Withdraw"],
    dataLabels: {
      enabled: false,
    },
  };
  const series = [44, 55, 13, 33, 22];

  return (
    <section
      className={`dashboard-section ${activeLefMenu ? "body-collapse" : ""}`}>
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="section-content">
                <div className="acc-details">
                  {/* Account Details */}
                  <AccountDetails />
                </div>
                <div className="transactions-area mt-40">
                  {/* Transaction Tabel  */}
                  <TransactionTabel />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="side-items">
                <div className="single-item">
                  {/* Linked Payment System */}
                  <LinkedPaymentSystem />
                </div>
                <div className="single-item">
                  <div className="section-text d-flex align-items-center justify-content-between">
                    <h6>Payment Analytics</h6>
                    <div className="select-box">
                      <Select data={month} btn="bg-transparent border" />
                    </div>
                  </div>

                  {/* Chart */}
                  <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="100%"
                    height={380}
                  />
                </div>

                {/* Recipients */}
                <Recipients />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardMain;
