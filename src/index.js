/**
 * Adds a submit event listener to the form that:
 * - Prevents default form submission
 * - Shows all div elements
 * - Makes request to URL shortener API
 * - Hides all div elements again
 * - Displays and updates short URL link
 * - Clears long URL input
 */

document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  document.querySelectorAll("div").forEach((divs) => {
    return (divs.style.display = "block");
  });

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

  document.querySelectorAll("div").forEach((divs) => {
    return (divs.style.display = "none");
  });

  const data = await res.json();
  console.log(data);
  let short_url = document.getElementById("s-url");
  short_url.style.display = "block";
  short_url.href = data.data.short_url;
  short_url.innerHTML = `${data.data.short_url}`;

  document.getElementById("l-url").value = "";
});
