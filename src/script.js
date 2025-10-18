const $ = document;
let colors = $.querySelectorAll(".color");
let input = $.getElementById("note-input");
let addBtn = $.getElementById("add-note-btn");
let deleteBtn = $.getElementById("delete-all-btn");
let notesContainer = $.getElementById("notes-container");
// رنگ پیش‌ فرض
let selectedColor = "white";
//  انتخاب رنگ
colors.forEach((color) => {
  color.addEventListener("click", () => {
    const bgColor = window.getComputedStyle(color).backgroundColor;
    //  اینجا مقدار رو ذخیره می‌کنیم
    selectedColor = bgColor;
    // تغییر رنگ input
    input.style.backgroundColor = bgColor;
  });
});

// ➕ ساخت نوت جدید
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const noteText = input.value.trim();
    if (noteText === "") return;

    const note = $.createElement("div");
    note.textContent = noteText;
    note.classList.add("p-3", "m-2", "rounded-md", "shadow");
    // رنگ انتخاب‌شده برای نوت
    note.style.backgroundColor = selectedColor;
    note.addEventListener("click", function () {
      note.remove();
    });

    notesContainer.appendChild(note);
    input.value = "";
  }
});
addBtn.addEventListener("click", () => {
  const noteText = input.value.trim();
  if (noteText === "") return;

  const note = $.createElement("div");
  note.textContent = noteText;
  note.classList.add("p-3", "m-2", "rounded-md", "shadow");
  // رنگ انتخاب‌شده برای نوت
  note.style.backgroundColor = selectedColor;
  // دکمه delet
  note.addEventListener("click", function () {
    note.remove();
  });
  notesContainer.appendChild(note);
  input.value = "";
});

// ایکون delet
deleteBtn.addEventListener("click" , function(){
    input.value= ""
})