fetch("/welcomeMessage?user=Anders")
.then((response) => response.json())
.then((result) => {
    const welcomeMessageHeader = document.getElementById("welcomeMessage");
    welcomeMessageHeader.innerText = result.data;
});