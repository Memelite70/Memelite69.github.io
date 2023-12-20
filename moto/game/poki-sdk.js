/*Stylesheet*/
body, html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
    -webkit-user-select: none;
    margin: 0;
    padding: 0;
    font-family: Arial, Verdana, sans-serif;
    font-size: 12px;
    font-weight: normal;
    color: #ccc;
    background-color: #000000;
    overflow: hidden;
}
#orientation {
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../images/rotate.png);
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgb(0, 0, 0);
    background-size: 25%;
    z-index: 999;
    display: none;
}
#loader {
    width: 100%;
    height: 50px;
    position: absolute;
    text-align: center;
    margin-top: 250px;
    display: block;
}
#loader,
#loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
}
#loader {
    margin: 60px auto;
    font-size: 10px;
    position: absolute;
    z-index: 99;
    left: 50%;
    top: 50%;
    margin-left: -5em;
    margin-top: -5em;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
