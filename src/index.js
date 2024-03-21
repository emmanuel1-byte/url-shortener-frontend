/**
 * Adds a click event listener to the button with ID "b1" that makes
 * an async POST request to the URL shortener API to shorten the URL.
 * Handles the response and displays the shortened URL in the input
 * with ID "s-url".
 */
document.getElementById("b1").addEventListener("click", async function (e) {
  e.preventDefault();
  const res = await fetch("https://url-shortener-yh27.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: document.getElementById("l-url").value,
    }),
  });
  if (!res.ok) {
    console.log(res);
    return;
  }
  const data = await res.json();
  console.log(data);
  let short_url = document.getElementById("s-url");
  short_url.style.display = "block";
  short_url.value = data.data.short_url;
  document.getElementById("l-url").value=''
});
