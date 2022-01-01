import React, { useEffect, useState } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

var options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    orderBy: "marketCap",
    search: "Bitco",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "9c798a43cbmsh370af88385b9732p1791f4jsnbe8f7e361a6e",
  },
};

const fetchCryptoData = async () => {
  return axios
    .request(options)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const Homepage = () => {
  const [cryptoData, setCryptoData] = useState();
  useEffect(() => {
    fetchCryptoData().then((data) => {
      setCryptoData(data || "no data");
    });
  }, []);
  //const cryptoStats = cryptoData.data.data.stats;
  //console.log(JSON.stringify(cryptoStats.total));

  return (
    <>
      <Title level={2} className="heading">
        {" "}
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(cryptoData?.data?.data?.stats?.total)}
          />
          <Statistic
            title="Total Exchanges"
            value={millify(cryptoData?.data?.data?.stats?.totalExchanges)}
          />
          <Statistic
            title="Total Market Caps"
            value={millify(cryptoData?.data?.data?.stats?.totalMarketCap)}
          />
          <Statistic
            title="Total 24h Volume"
            value={millify(cryptoData?.data?.data?.stats?.total24hVolume)}
          />
          <Statistic
            title="Total Markets"
            value={millify(cryptoData?.data?.data?.stats?.totalMarkets)}
          />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
