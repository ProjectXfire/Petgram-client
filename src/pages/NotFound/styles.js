import styled from 'styled-components'

export const ErrorPage = styled.div`

  #notfound {
    position: relative;
    height: 100vh;
    background: #030005;
  }

  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }

  .notfound {
    max-width: 767px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
  }

  .notfound .notfound-404 {
    position: relative;
    height: 180px;
    margin-bottom: 20px;
    z-index: -1;
  }

  .notfound .notfound-404 h1 {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50% , -50%);
        -ms-transform: translate(-50% , -50%);
            transform: translate(-50% , -50%);
    font-size: 150px;
    font-weight: 900;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: -12px;
    color: #030005;
    text-transform: uppercase;
    text-shadow: -1px -1px 0px #8400ff, 1px 1px 0px #ff005a;
    letter-spacing: -20px;
  }


  .notfound .notfound-404 h2 {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    left: 0;
    right: 0;
    top: 110px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0px 2px 0px #8400ff;
    letter-spacing: 13px;
    margin: 0;
  }

  .notfound a {
    font-family: 'Montserrat', sans-serif;
    display: inline-block;
    margin-top: 20px;
    text-transform: uppercase;
    color: #ff005a;
    text-decoration: none;
    border: 2px solid;
    background: transparent;
    padding: 10px 40px;
    font-size: 1.5rem;
    font-weight: 700;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }

  .notfound a:hover {
    color: #8400ff;
  }

  @media only screen and (max-width: 767px) {
      .notfound .notfound-404 h2 {
          font-size: 10px;
      }
  }

  @media only screen and (max-width: 480px) {
    .notfound .notfound-404 h1 {
        font-size: 110px;
    }
  }
`