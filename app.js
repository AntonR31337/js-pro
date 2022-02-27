"use strict";

const listData = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    [
      'Item 5.1',
      'Item 5.2',
      'Item 5.3',
    ],
    'Item 6',
    'Item 7',
  ];
  const sectionElement = document.querySelector('section');
  const list1 = document.createElement('ul')
  const elList = document.createElement('li')

  sectionElement.append(list1)
  
  listData.forEach((el) => {
      // не смог сделать проверку элемента с вложенными объектами
        document.querySelector('ul').insertAdjacentHTML('beforeend', `<li>${el}</li>`)
  });

  const table = document.createElement('table')
  const tableData = [
    ['Item 1.1', 'Item 1.2', 'Item 1.3'],
    ['Item 2.1', 'Item 2.2', 'Item 2.3'],
    ['Item 3.1', 'Item 3.2', 'Item 3.3'],
    ['Item 4.1', 'Item 4.3'],
    ['Item 5.1', 'Item 5.2', 'Item 5.3'],
  ];
    sectionElement.appendChild(table)

    tableData.forEach((el) => {
    // я не понимаю как красиво отрендерить таблиуц, сделал как смог, надеюсь при проверке подскажите, что не так делаю
    document.querySelector('table').insertAdjacentHTML('afterbegin', `<td>${el}</td>`)
});

const formData = {
    name: 'myForm',
    fieldset: [{
      tagName: 'select',
      name: 'cars',
      id: 'cars',
      label: 'Choose a car:',
      options: ['Volvo', 'Saab', 'Honda', 'Toyota', 'Audi'],
    }, {
      tagName: 'input',
      type: 'text',
      label: 'First name',
      id: 'fname',
      name: 'fname',
    }, {
      tagName: 'input',
      type: 'radio',
      label: 'Male',
      id: 'male',
      name: 'gender',
      value: 'male',
    }, {
      tagName: 'input',
      type: 'radio',
      label: 'Female',
      id: 'female',
      name: 'gender',
      value: 'female',
    }, {
      tagName: 'button',
      type: 'submit',
    }],
    }
    
    const form = document.createElement('form')
    sectionElement.appendChild(form)

    formData.fieldset.forEach((el) => {
        if (el.label) {
            document.querySelector('form').insertAdjacentHTML('afterbegin',
            `
                <label for="${el.id}">${el.label}
                <${el.tagName} id=${el.id} name=${el.name}>
            `
        )
        } else {
            document.querySelector('form').insertAdjacentHTML('beforeend',
            `
                <${el.tagName} type=${el.type}>${el.type}
            `
        )
        }
    })

    formData.fieldset[0].options.forEach((el) => {
        document.querySelector('select').insertAdjacentHTML('afterbegin', `
            <option>${el}
        `)
    })