let textFields = document.querySelectorAll(".field:not([type='submit'])"),
    thePlaceHolder,
    loginEle = document.querySelector(".log-in"),
    signupEle = document.querySelector(".sign-up"),
    loginLink = document.querySelector(".login-link"),
    signupLink = document.querySelector(".signup-link"),
    /***/
    loginUsername = document.querySelector(".log-in .user-name-input"),
    loginPassword = document.querySelector(".log-in .password-input"),
    signupName = document.querySelector(".sign-up .name-input"),
    signupUsername = document.querySelector(".sign-up .user-name-input"),
    signupEmail = document.querySelector(".sign-up .email-input"),
    signupPassword = document.querySelector(".sign-up .password-input")
    sympols = /[-\!\@\#\$\%\^\&\*\(\)\/\+\=\{\}\[\]\'\"\:\;\<\,\>\.\`\~]/,
    emailSympols = /[-\!\#\$\%\^\&\*\(\)\/\+\=\{\}\[\]\'\"\:\;\<\,\>\`\~]/,
    globalSympols = /[-\!\@\#\$\%\^\&\*\(\)\/\+\=\{\}\[\]\'\"\:\;\<\,\>\.\`\~]/g;

// focus and blur effects on the fields && create showErrors element before every field
textFields.forEach(element => {
    let showErrorsEl = document.createElement("div");
    showErrorsEl.classList.add("show-errors");
    element.before(showErrorsEl);

    element.addEventListener('focus', (event) => {
        let ele = event.target;

        thePlaceHolder = ele.placeholder;
        ele.placeholder = "";
    });
    element.addEventListener('blur', (event) => {
        let ele = event.target;

        ele.placeholder = thePlaceHolder;
    });

});

// when click on login's link
loginLink.onclick = (e) => {
    e.preventDefault();

    signupEle.classList.remove("active") || null;
    loginEle.classList.add("active") || null;
}
// when click on signup's link
signupLink.onclick = (e) => {
    e.preventDefault();

    loginEle.classList.remove("active") || null;
    signupEle.classList.add("active") || null;
}
// submit the log in form
document.querySelector(".login-btn").onclick = (e) => {
    "use strict";
    e.preventDefault();

    if ((usernameValidate(loginUsername.value).length + passwordValidate(loginPassword.value).length) == 0) {
        let msgContainer = document.createElement("div");
        msgContainer.classList.add("msg-container");

        let msgBlock = document.createElement("div");
        msgBlock.classList.add("msg-block");

        let closeBtn = document.createElement("span");
        closeBtn.classList.add("close");
        closeBtn.innerText = "x";

        msgBlock.innerHTML = `Hello ${loginUsername.value}. <br \\> Where was you? <br \\> We missed you.`;
        msgBlock.prepend(closeBtn);

        msgContainer.appendChild(msgBlock);
        document.body.appendChild(msgContainer);
        
        // close the msg block
        document.querySelector(".msg-block .close").addEventListener("click", () => {
            document.querySelector(".msg-container").remove();
        });

    } else {
        if (usernameValidate(loginUsername.value).length != 0) {
            loginUsername.classList.add("error");

            setTimeout(() => {
                loginUsername.classList.remove("error");
            }, 1000);
        }
        if(loginUsername.value.length == 0) {
            loginUsername.parentElement.classList.add("empty");

            setTimeout(() => {
                loginUsername.parentElement.classList.remove("empty");
            }, 3000);
        }
        if (passwordValidate(loginPassword.value).length != 0) {
            loginPassword.classList.add("error");

            setTimeout(() => {
                loginPassword.classList.remove("error");
            }, 1000);
        }
        if(loginPassword.value.length == 0) {
            loginPassword.parentElement.classList.add("empty");

            setTimeout(() => {
                loginPassword.parentElement.classList.remove("empty");
            }, 3000);
        }
    }
}
// submit the sign up form
document.querySelector(".signup-btn").onclick = (e) => {
    "use strict";
    e.preventDefault();

    if ((nameValidate(signupName.value).length + usernameValidate(signupUsername.value).length + emailValidate(signupEmail.value).length + passwordValidate(signupPassword.value).length) == 0) {
        let msgContainer = document.createElement("div");
        msgContainer.classList.add("msg-container");

        let msgBlock = document.createElement("div");
        msgBlock.classList.add("msg-block");

        let closeBtn = document.createElement("span");
        closeBtn.classList.add("close");
        closeBtn.innerText = "x";

        msgBlock.innerHTML = `Hello ${signupName.value}. <br \\>
                                Thanks for creating an account on our website and welcome in it. <br \\>
                                We will send an email to (${signupEmail.value}) to check if this is your email. <br \\> 
                                You only have to check your emails and see if you recieves our email and then click on the link there.`;
        msgBlock.prepend(closeBtn);

        msgContainer.appendChild(msgBlock);
        document.body.appendChild(msgContainer);
        
        // close the msg block
        document.querySelector(".msg-block .close").addEventListener("click", () => {
            document.querySelector(".msg-container").remove();
        });

    } else {
        if (nameValidate(signupName.value).length != 0) {
            signupName.classList.add("error");

            setTimeout(() => {
                signupName.classList.remove("error");
            }, 1000);
        }
        if(signupName.value.length == 0) {
            signupName.parentElement.classList.add("empty");

            setTimeout(() => {
                signupName.parentElement.classList.remove("empty");
            }, 3000);
        }
        /***/
        if (usernameValidate(signupUsername.value).length != 0) {
            signupUsername.classList.add("error");

            setTimeout(() => {
                signupUsername.classList.remove("error");
            }, 1000);
        }
        if(signupUsername.value.length == 0) {
            signupUsername.parentElement.classList.add("empty");

            setTimeout(() => {
                signupUsername.parentElement.classList.remove("empty");
            }, 3000);
        }
        /***/
        if (emailValidate(signupEmail.value).length != 0) {
            signupEmail.classList.add("error");

            setTimeout(() => {
                signupEmail.classList.remove("error");
            }, 1000);
        }
        if(signupEmail.value.length == 0) {
            signupEmail.parentElement.classList.add("empty");

            setTimeout(() => {
                signupEmail.parentElement.classList.remove("empty");
            }, 3000);
        }
        /***/
        if (passwordValidate(signupPassword.value).length != 0) {
            signupPassword.classList.add("error");

            setTimeout(() => {
                signupPassword.classList.remove("error");
            }, 1000);
        }
        if(signupPassword.value.length == 0) {
            signupPassword.parentElement.classList.add("empty");

            setTimeout(() => {
                signupPassword.parentElement.classList.remove("empty");
            }, 3000);
        }
        /***/
    }
}

// Validate functions
function nameValidate(value) {
    let minLength = 15,
        minWords = 2,
        msgs = [];

    if(value.replace(globalSympols, "").length < minLength) {
        msgs.push(`The Name is only ${value.replace(sympols, "").length} letters and it must be at least ${minLength} letters`);
    }
    if(value.trim().split(" ").length < minWords) {
        msgs.push(`The Name is only ${value.trim().split(" ").length} word/s and it must be at least ${minWords} word/s`);
    }
    let uncorrectLetters = new Set(value.split("").filter(letter => sympols.test(letter)));
    if([...uncorrectLetters].length > 0) {        
        msgs.push(`You can't write "${[...uncorrectLetters].join('", "')}" in the name`);
    }
    return msgs;
}
function usernameValidate(value) {
    let minLength = 4,
        msgs = [];
    if (value.replace(globalSympols, "").length < minLength) {
        msgs.push(`The username is ${value.replace(globalSympols, "").length} letters and it must be at least ${minLength} letters`);
    }
    let uncorrectLetters = new Set(value.split("").filter(letter => sympols.test(letter)));
    if([...uncorrectLetters].length > 0) {        
        msgs.push(`You can't write "${[...uncorrectLetters].join('", "')}" in the username`);
    }

    return msgs;
}
function emailValidate(value) {
    let msgs = [];

    let exp = /\b((\w+)((\.\w+)*)@\w+\.\w+)\b/;
    if(!exp.test(value)) {
        msgs.push(`The email (${value}) is invalid`);
    }
    let uncorrectLetters = new Set(value.split("").filter(letter => emailSympols.test(letter)));
    if([...uncorrectLetters].length > 0) {        
        msgs.push(`You can't write "${[...uncorrectLetters].join('", "')}" in the email`);
    }

    return msgs;
}
function passwordValidate(value) {
    let minLength = 9,
        capitalLetters = 1,
        maxLength = 20,
        containNumbers = true,
        msgs = [];

    if(value.replace(globalSympols, "").length < minLength) {
        msgs.push(`The password is ${value.replace(sympols, "").length} letters and it must be at least ${minLength} letters`);
    }
    if(value.replace(globalSympols, "").length > maxLength) {
        msgs.push(`The password is ${value.replace(sympols, "").length} letters and it must be less than ${maxLength} letters`);
    }
    let valueCapitalLettersCount = value.split("").filter(letter => /[A-Z]/.test(letter)).length;
    if (valueCapitalLettersCount < capitalLetters) {
        msgs.push(`The capital letters in the password are ${valueCapitalLettersCount} letters but it must be at least ${capitalLetters} letters`);
    }
    if(containNumbers) {
        if(value.split("").filter(letter => /\d/.test(parseInt(letter))).length == 0) {
            msgs.push(`The password must contain numbers`);
        }
    }
    let uncorrectLetters = new Set(value.split("").filter(letter => sympols.test(letter)));
    if([...uncorrectLetters].length > 0) {
        msgs.push(`You can't write "${[...uncorrectLetters].join('", "')}" in the password`);
    }
    return msgs;
}
//validate event function
let validate = (e, msgs) => {
    e.target.parentElement.classList.remove("empty");

    let showErrorsEl = e.target.parentElement.children[0];
    showErrorsEl.innerHTML = "";
    let fadeOut;
    
    if (msgs.length > 0) {
        if(!showErrorsEl.classList.contains("visible")) {
            clearTimeout(fadeOut);
            showErrorsEl.classList.add("visible");
    
            fadeOut = setTimeout(() => {
                showErrorsEl.classList.remove("visible");
            }, 5000);
        }

        msgs.forEach(msg => {
            let error = document.createElement("span");
            error.classList.add("error");
            let errorText = msg;
            error.append(errorText);

            showErrorsEl.append(error);
        });
    } else {
        showErrorsEl.innerHTML = "<span class='succss'>There is no errors</span>";
        if(!showErrorsEl.classList.contains("visible")) {
            clearTimeout(fadeOut);
            showErrorsEl.classList.add("visible");
    
            fadeOut = setTimeout(() => {
                showErrorsEl.classList.remove("visible");
            }, 5000);
        }
    }    
}

// validate events
loginUsername.oninput = (e) => {
    msgs = usernameValidate(e.target.value);
    validate(e, msgs);
}
loginPassword.oninput = (e) => {
    msgs = passwordValidate(e.target.value);
    validate(e, msgs);
}
signupName.oninput = (e) => {
    msgs = nameValidate(e.target.value);
    validate(e, msgs);
}
signupUsername.oninput = (e) => {
    msgs = usernameValidate(e.target.value);
    validate(e, msgs);
}
signupEmail.oninput = (e) => {
    msgs = emailValidate(e.target.value);
    validate(e, msgs);
}
signupPassword.oninput = (e) => {
    msgs = passwordValidate(e.target.value);
    validate(e, msgs);
}
