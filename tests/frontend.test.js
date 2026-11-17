/**
 * @jest-environment jsdom
 */

const { doLogin } = require("../js/code.js");

describe("COLORS frontend login", () => {
    test("doLogin sends the entered username and password to Login.php", () => {
        document.body.innerHTML = `
            <input id="loginName" value="TestUser">
            <input id="loginPassword" value="TestPassword">
            <span id="loginResult"></span>
        `;

        let request;

        class MockXMLHttpRequest {
            constructor() {
                request = this;
            }

            open(method, url, async) {
                this.method = method;
                this.url = url;
                this.async = async;
            }

            setRequestHeader(name, value) {
                this.headerName = name;
                this.headerValue = value;
            }

            send(payload) {
                this.payload = payload;
            }
        }

        global.XMLHttpRequest = MockXMLHttpRequest;

        doLogin();

        expect(request.method).toBe("POST");
        expect(request.url).toBe("/LAMPAPI/Login.php");
        expect(JSON.parse(request.payload)).toEqual({
            login: "TestUser",
            password: "TestPassword"
        });
    });
});