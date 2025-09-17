let formData = {
    email:"",
    message:""
};

const localStorageKey = "feedback-form-state";


// const mainEl = document.querySelector("main");
// const div = document.createElement("div");
// mainEl.append(div);

// div.insertAdjacentHTML("beforeend",`<form class="feedback-form" autocomplete="off">
//     <label>
//     Email
//     <input type="email" name="email" autofocus />
//     </label>
//     <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//     </label>
//     <button type="submit">Submit</button>
//     </form>`)

const form = document.querySelector(".feedback-form");

formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? { email: "", message: "" };
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener("input", (event) => {
    const el = event.currentTarget.elements;
    formData.email = el.email.value.trim();
    formData.message = el.message.value.trim();
    localStorage.setItem(localStorageKey,JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
   event.preventDefault();
   if(formData.email === '' || formData.message === '') {
    alert('Fill please all fields')
   }else{
    console.log(formData)
    form.reset();
    localStorage.removeItem(localStorageKey);
    formData = { email: "", message: "" };
   }

});