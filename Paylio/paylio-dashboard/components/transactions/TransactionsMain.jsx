"use client";
import Pagination from "@/components/pagination/Pagination";
import Filter from "@/components/transactions/Filter";
import { PaylioContext } from "@/context/context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import csv from "/public/images/icon/csv.png";
import excel from "/public/images/icon/excel.png";
import pdf from "/public/images/icon/pdf.png";
import printer from "/public/images/icon/printer.png";
import search from "/public/images/icon/search.png";

const TransactionsMain = () => {
  const { activeLefMenu } = useContext(PaylioContext);
  return (
    <section
      className={`dashboard-section transactions ${
        activeLefMenu ? "body-collapse" : ""
      }`}>
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="head-area">
            <div className="row">
              <div className="col-lg-5 col-md-4">
                <h4>Transactions</h4>
              </div>
              <div className="col-lg-7 col-md-8">
                <div className="transactions-right d-flex align-items-center">
                  <form action="#" className="flex-fill">
                    <div className="form-group d-flex align-items-center">
                      <Image src={search} alt="icon" />
                      <input type="text" placeholder="Type to search..." />
                    </div>
                  </form>
                  <Link href="#">Monthly Statement</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="transactions-main">
                <div className="top-items">
                  <h6>All Transactions</h6>
                  <div className="export-area">
                    <ul className="d-flex align-items-center">
                      <li>
                        <Link href="#">
                          <Image src={printer} alt="icon" />
                          Print
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image src={excel} alt="icon" />
                          Excel
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image src={pdf} alt="icon" />
                          PDF
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image src={csv} alt="icon" />
                          CSV
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Filter */}
                <Filter />
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name/ Business</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        data-bs-toggle="modal"
                        data-bs-target="#transactionsMod">
                        <th scope="row">
                          <p>Bangkok Bank</p>
                          <p className="mdr">Withdraw to bank account</p>
                        </th>
                        <td>
                          <p>03:00 PM</p>
                          <p className="mdr">10 Mar 2022</p>
                        </td>
                        <td>
                          <p className="inprogress">In Progress</p>
                        </td>
                        <td>
                          <p>-$520</p>
                          <p className="mdr">$3.0</p>
                        </td>
                      </tr>
                      <tr
                        data-bs-toggle="modal"
                        data-bs-target="#transactionsMod">
                        <th scope="row">
                          <p>Envato Pty Ltd</p>
                          <p className="mdr">Marketplace Payment Received</p>
                        </th>
                        <td>
                          <p>04:30 PM</p>
                          <p className="mdr">01 Mar 2022</p>
                        </td>
                        <td>
                          <p className="completed">Completed</p>
                        </td>
                        <td>
                          <p>+$450</p>
                          <p className="mdr">No Fees</p>
                        </td>
                      </tr>
                      <tr
                        data-bs-toggle="modal"
                        data-bs-target="#transactionsMod">
                        <th scope="row">
                          <p>Mailchimp</p>
                          <p className="mdr">Subscription Service Payment</p>
                        </th>
                        <td>
                          <p>01:15 PM</p>
                          <p className="mdr">25 Mar 2022</p>
                        </td>
                        <td>
                          <p className="completed">Completed</p>
                        </td>
                        <td>
                          <p>-$100</p>
                          <p className="mdr">No Fees</p>
                        </td>
                      </tr>
                      <tr
                        data-bs-toggle="modal"
                        data-bs-target="#transactionsMod">
                        <th scope="row">
                          <p>Facebook Ads</p>
                          <p className="mdr">Ads Service</p>
                        </th>
                        <td>
                          <p>07:05 PM</p>
                          <p className="mdr">15 Mar 2022</p>
                        </td>
                        <td>
                          <p className="pending">Pending</p>
                        </td>
                        <td>
                          <p>$200</p>
                          <p className="mdr">No Fees</p>
                        </td>
                      </tr>
                      <tr
                        data-bs-toggle="modal"
                        data-bs-target="#transactionsMod">
                        <th scope="row">
                          <p>Upwork Escow Inc</p>
                          <p className="mdr">Payment payment</p>
                        </th>
                        <td>
                          <p>04:02 PM</p>
                          <p className="mdr">10 Mar 2022</p>
                        </td>
                        <td>
                          <p className="completed">Completed</p>
                        </td>
                        <td>
                          <p>$450</p>
                          <p className="mdr">$.5</p>
                        </td>
                      </tr>
                      <tr
                        data-bs-toggle="modal"
                        data-bs-target="#transactionsMod">
                        <th scope="row">
                          <p>Ron Stewart</p>
                          <p className="mdr">Payment Refund</p>
                        </th>
                        <td>
                          <p>11:00 PM</p>
                          <p className="mdr">21 Mar 2022</p>
                        </td>
                        <td>
                          <p className="cancelled">Cancelled</p>
                        </td>
                        <td>
                          <p>+$450</p>
                          <p className="mdr">No Fees</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionsMain;
