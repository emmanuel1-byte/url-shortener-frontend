
/**
 * Adds a click event listener to the button with ID "b1" that handles submitting
 * a URL to be shortened. Validates input URL, makes request to shortening API,
 * displays shortened URL in output field if successful.
 */
document.getElementById("b1").addEventListener("click", async function (e) {
  e.preventDefault();
  if (document.getElementById("l-url").value === "") {
    alert("Please enter a valid URL");
    return;
  }

  document.querySelectorAll('div').forEach((divs)=>{
    return divs.style.display='block'
   })

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


 document.querySelectorAll('div').forEach((divs)=>{
  return divs.style.display='none'
 })

  const data = await res.json();
  console.log(data);
  let short_url = document.getElementById("s-url");
  short_url.style.display = "block";
  short_url.href = data.data.short_url;
  short_url.innerHTML = `${data.data.short_url}`

  document.getElementById("l-url").value = "";
});

