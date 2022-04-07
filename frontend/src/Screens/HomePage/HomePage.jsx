import React, { useEffect, useCallback } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { Table } from "react-bootstrap";
// import "../../Components/Header/Header.css";
import { logout } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { listTransactions } from "../../actions/transactionAction";
import Loading from "../../Components/Loading/Loading";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import Header from "../../Components/Header/Header";
import back1 from "../../Components/img/firstone.png";
import house from "../../Components/img/monkeyrod.png";
import FooterWel from "../../Components/Footer/FooterWel";
import { BackgroundImage } from "react-image-and-background-image-fade";

const HomePage = (props) => {
  const history = useNavigate();

  const abc = useCallback(
    (path) => {
      history(path);
    },
    [history]
  );

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const transactionList = useSelector((state) => state.transactionList);
  const { loading, transaction, error } = transactionList;

  const logoutHandler = () => {
    dispatch(logout());
    abc("/login");
  };

  useEffect(() => {
    dispatch(listTransactions());

    if (!userInfo) {
      abc("login");
    }
  }, [dispatch, abc, userInfo]);

  return (
    <div className="home">
      <Header />
      <section className="sec">
        <div className="homehead">
          <h1>
            <strong>Welcome Back to Kwaba</strong>
          </h1>
          <p className="phome1">
            Hello {userInfo.name} It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
        <div
          style={{
            backgroundImage: "url(" + back1 + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="bgb"
        ></div>
      </section>
      <section className="sec2">
        <div
          style={{
            backgroundImage: "url(" + house + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="bgb2"
        ></div>
        <div className="homehead2">
          <h1>
            <strong>We offer the best Rent Loans</strong>
          </h1>
          <p className="phome2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable.
          </p>
        </div>
      </section>
      <section className="sec">
        <div className="homehead3">
          <h1>Apply Now!!!</h1>
          <div className="butcon">
            <Button
              style={{ marginBottom: "10px", backgroundColor: "#00b74a" }}
            >
              <Link to={"/rent"}>Apply</Link>
            </Button>
            <Button style={{ backgroundColor: "red" }} onClick={logoutHandler}>
              Logout
            </Button>
          </div>
        </div>
        <div className="tabtop">
          <h2 className="trans">Transaction History</h2>
          <hr className="trans" />
          {transaction?.map((transaction) => (
            <Table striped bordered hover variant="light">
              {loading && <Loading />}
              <tbody className="table1" key={transaction._id}>
                <tr className="tabrow">
                  <td>
                    <strong>Amount: </strong>
                    {transaction.amount}
                  </td>
                  <td>
                    <strong>Monthly: </strong>
                    {transaction.result}
                  </td>
                  <td>
                    <strong>Tenor: </strong>
                    {transaction.months} month
                  </td>
                  <td>
                    <strong>Requested on: </strong>
                    {transaction.createdAt.substring(0, 10)}
                  </td>
                </tr>
              </tbody>
            </Table>
          ))}
        </div>
      </section>
      <FooterWel />
    </div>
  );
};

export default HomePage;
