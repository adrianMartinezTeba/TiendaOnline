import React from "react";
import { Layout } from "antd";
import './Footer.scss'

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="footer">
      Gamer's Paradise. En las noches se forjan leyendas
    </AntFooter>
  );
};

export default Footer;