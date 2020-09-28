import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  table {
    width: 100%;
    max-height: 500px;
    overflow-y: scroll;
    margin: 50px 0;
    background-color: #ccc;
    border-radius: 12px;
    font-family: "Roboto", sans-serif;

    tr:first-child {
      background-color: #fff;
    }

    th {
      text-align: left;
      padding: 10px 20px;
    }

    td {
      text-align: left;
      padding: 5px 20px;
    }
  }
`;

export const overlayStyle = {
  zIndex: 5,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
};

export const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: 20,
  top: 0,
  left: 0,
  width: 450,
  border: "none",
};

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ccc;
  align-items: center;
  border-radius: 12px;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 10px 20px;
    color: #777;
    font-size: 15px;
    width: 90%;
    border-radius: 4px;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }

  select {
    width: 100%;
    height: 46px;
    margin-bottom: 15px;
    padding: 10px 15px;
    color: #777;
    font-size: 15px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;
