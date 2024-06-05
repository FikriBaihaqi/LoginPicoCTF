(async () => {
    await new Promise(resolve => window.addEventListener("load", resolve));
    
    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();

        const selectors = {
            username: "input[name=username]",
            password: "input[name=password]"
        };

        const encodedValues = {};

        for (const key in selectors) {
            const inputValue = document.querySelector(selectors[key]).value;
            const encodedValue = btoa(inputValue).replace(/=/g, "");
            encodedValues[key] = encodedValue;

            console.log(`${key} input value: ${inputValue}`);
            console.log(`${key} encoded value: ${encodedValue}`);
        }

        const correctUsername = "YWRtaW4";
        const correctPassword = "VEk0MDQge0hlaGVoZV9Mb2dpbmthbl9jdXlfeGl4aXhpfQ";

        console.log(`Encoded Username: ${encodedValues.username}`);
        console.log(`Encoded Password: ${encodedValues.password}`);

        if (encodedValues.username !== correctUsername) {
            alert("Incorrect Username");
        } else if (encodedValues.password !== correctPassword) {
            alert("Incorrect Password");
        } else {
            alert(`Correct Password! Your flag is ${atob(correctPassword)}.`);
        }
    });
})();
