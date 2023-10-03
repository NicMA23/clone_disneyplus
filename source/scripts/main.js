document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (btn) {
            const targetTab = btn.target.dataset.tabButton

            const tab = document.querySelector(`[data-tab-id=${targetTab}]`)
            hideTabs()
            tab.classList.add('shows__list--is-active')

            const border = document.querySelector(`[data-tab-button=${targetTab}]`)
            hideBorder()
            border.classList.add('shows__tabs__btn--is-active')
        })
    }
})

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function hideBorder() {
    const buttonsBorder = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttonsBorder.length; i++) {
        buttonsBorder[i].classList.remove('shows__tabs__btn--is-active')
    }
}