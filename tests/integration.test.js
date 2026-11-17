/**
 * @jest-environment node
 */

describe("COLORS Login API", () => {
    test("Login.php returns valid JSON for invalid credentials", async () => {
        const response = await fetch(
            "http://cop4331-3.xyz/LAMPAPI/Login.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    login: "DefinitelyNotARealUser",
                    password: "InvalidPassword"
                })
            }
        );

        expect(response.ok).toBe(true);

        const data = await response.json();

        expect(data).toEqual(
            expect.objectContaining({
                id: 0,
                firstName: "",
                lastName: ""
            })
        );

        expect(typeof data.error).toBe("string");
    });
});