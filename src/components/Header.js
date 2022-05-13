import { PageHeader, Button, Input, Space, Badge } from "antd";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import "./Header.css";
import Amazon from "/home/msizi/Web3/amazon-clone-1/src/images/logo.png";
import BookStore from "/home/msizi/Web3/amazon-clone-1/src/images/bookstore.png";
import zar from "/home/msizi/Web3/amazon-clone-1/src/images/flag-400.png";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";

const { Search } = Input;
const categories = [
  "Comics",
  "Dictionaries",
  "Novels",
  "Fantasy",
  "Horror",
  "Adventure",
];

const Header = () => {
  const { authenticate, account } = useMoralis();
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
            <img className="logo" src={Amazon}></img>
            <img className="logo" src={BookStore}></img>
            <Search
              placeholder="Find A Product"
              enterButton
              className="searchBar"
            />
            <Button
              key="1"
              type="primary"
              onClick={() => authenticate()}
              className="login"
            >
              {account ? <span>{account.slice(0, 5)}...</span> : <span>Login</span>}
            </Button>
            <Space size={"large"}>
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img src={zar} alt="region" className="flag"></img>▾
              </Space>
            </Space>
          </>,
        ]}
      ></PageHeader>
      <div className="site-page-subheader-ghost-wrapper">
        <Space size={"middle"}>
          <Space size={"small"} style={{ fontWeight: "bold" }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map((e) => {
            return (
              <Link to="/categories" state={e} className="categories">
                {e}
              </Link>
            );
          })}
        </Space>
      </div>
    </div>
  );
};

export default Header;
