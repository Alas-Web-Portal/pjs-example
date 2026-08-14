function echo(elementId, string) {
  document.getElementById(elementId).innerText = string;
}



const $_GET = (sget) => new URLSearchParams(window.location.search).get(sget);
async function include(elementId, file) {
  const response = await fetch(file);
  if (!response.ok) {
    throw new Error("Could not get file");
  }
  document.getElementById(elementId).innerHTML = await response.text();
}
