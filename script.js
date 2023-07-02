const btnStarter = document.getElementById('btnStarter')
btnStarter.addEventListener('click', openModal)
function openModal() {
    btnStarter.style.display = 'none'
    createModal()
}
function createModal() {
    const container = document.createElement('div')
    container.classList.add('container')
    document.body.append(container)
    const header = document.createElement('div')
    header.classList.add('header')
    const title = document.createElement('div')
    title.innerText = 'რეგისტრაცია'
    title.classList.add('title')
    const btnClose = document.createElement('div')
    btnClose.innerText = 'X'
    btnClose.classList.add('btnClose')
    header.append(title, btnClose)
    const body = document.createElement('body')
    body.classList.add('body')
    const footer = document.createElement('div')
    footer.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nisi sit quisquam repudiandae animi exercitationem alias ad non voluptate at? Tenetur laborum vitae nihil dolores earum rerum, cumque culpa nam!'
    footer.classList.add('footer')
    container.append(header, body, footer)
    btnClose.addEventListener('click', () => {
        container.style.display = 'none'
        btnStarter.style.display = 'block'
    })
    for (let form in authModel) {
        const label = document.createElement('label')
        label.innerText = authModel[form].label

        const input = document.createElement('input')
        input.classList.add('input')
        input.type = authModel[form].type
        input.placeholder = authModel[form].label

        const warningText = document.createElement('div')
        warningText.classList.add('warningText')

        const forInputs = document.createElement('div')
        forInputs.classList.add('forInputs')
        forInputs.append(label, input, warningText)
        body.append(forInputs)
    }
    const submitBtn = document.createElement('button')
    submitBtn.classList.add('submitBtn')
    submitBtn.innerText = 'submit'
    footer.append(submitBtn)

    submitBtn.addEventListener('click', validator)
}
const authModel = {
    username: {
        label: 'სახელი',
        type: 'text',
        validators: {
            required: {
                errorText: 'სახელი აუცილებელია'
            },
            minLength: {
                value: 3,
                errorText: 'მინიმუმ 3 სიმბოლო აუცილებელია'
            },
            maxLength: {
                value: 6,
                errorText: 'მაქსიმუმ 6 სიმბოლო აუცილებელია'
            }
        }
    },
    password: {
        label: 'პაროლი',
        type: 'password',
        validators: {
            required: {
                errorText: 'პაროლი აუცილებელია'
            },
            minLength: {
                value: 3,
                errorText: 'მინიმუმ 3 სიმბოლო აუცილებელია'
            },
            donMach: {
                name: 'username',
                errorText: 'პაროლი არ უნდა იყოს სახელი'
            }
        }
    },
    email: {
        label: 'მეილი',
        type: 'email',
        validators: {
            required: {
                errorText: 'მეილი აუცილებელია'
            },
            requiredEmailType: {
                errorText: 'აუცილებელია მეილის ფორმატი'
            }
        }
    },
    country: {
        label: 'დაბადების ადგილი',
        type: 'dropdown',
        validators: {
            required: {
                errorText: 'დაბადების ადგილი აუცილებელია'
            }
        }
    }

}
function validator() {
    const inputs = document.getElementsByClassName('input')
    const username = inputs[0].value;
    const password = inputs[1].value;
    const email = inputs[2].value;
    const country = inputs[3].value;

    const warningText = document.getElementsByClassName('warningText')
    warningText[3].innerText = ''

    if (username === '') {
        warningText[0].innerText = authModel.username.validators.required.errorText
    } else if (username.length < authModel.username.validators.minLength.value) {
        warningText[0].innerText = authModel.username.validators.minLength.errorText
    } else if (username.length > authModel.username.validators.maxLength.value) {
        warningText[0].innerText = authModel.username.validators.maxLength.errorText
    } else if (password === '') {
        warningText[0].innerText = ''
        warningText[1].innerText = authModel.password.validators.required.errorText
    } else if (password.length < authModel.password.validators.minLength.value) {
        warningText[1].innerText = authModel.password.validators.minLength.errorText
    } else if (password === username) {
        warningText[1].innerText = authModel.password.validators.donMach.errorText
    }
    else if (email === '') {
        warningText[1].innerText = ''
        warningText[2].innerText = authModel.email.validators.required.errorText
    } else if (email !== authModel.email.type) {
        warningText[2].innerText = authModel.email.validators.requiredEmailType.errorText
    }
    else if (country === '') {
        warningText[2].innerText = ''
        warningText[3].innerText = authModel.country.validators.required.errorText
    } else { alert('welcome to the NEW WORD') }




}

