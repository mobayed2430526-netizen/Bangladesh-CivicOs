function toggleSidebar() {
  document.querySelector(".sidebar")?.classList.toggle("open");
}
function setActive(el) {
  document
    .querySelectorAll(".side-link")
    .forEach((x) => x.classList.remove("active"));
  el.classList.add("active");
}
function toast(msg) {
  let t = document.createElement("div");
  t.textContent = msg;
  t.style.cssText =
    "position:fixed;right:20px;bottom:20px;background:#073f34;color:#fff;padding:13px 18px;border-radius:10px;z-index:100;font-size:13px;box-shadow:0 8px 25px #0003";
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}
function demoSubmit(e, msg = "Action completed successfully.") {
  e?.preventDefault();
  toast(msg);
}
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("[data-toast]")
    .forEach((b) => b.addEventListener("click", () => toast(b.dataset.toast)));
  document.querySelectorAll("[data-filter]").forEach((input) =>
    input.addEventListener("input", () => {
      let q = input.value.toLowerCase();
      let target = document.querySelector(input.dataset.filter);
      target
        ?.querySelectorAll("tbody tr")
        .forEach(
          (r) =>
            (r.style.display = r.innerText.toLowerCase().includes(q)
              ? ""
              : "none"),
        );
    }),
  );
});
