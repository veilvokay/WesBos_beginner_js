const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
    // hide all tab pannels
    tabPanels.forEach(function(panel) {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    })
    // mark the clicked tab as selected
    e.currentTarget.setAttribute('aria-selected', true);
    // find the associated tabPanel and show it!
    const { id } = e.currentTarget;

    // METHOD 1
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // tabPanel.hidden = false;

    // METHOD 2 - find in the array of tab pannels
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

