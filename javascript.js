document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var tabId = this.getAttribute('id').replace('tab', 'content');
            showTab(tabId);
        });
    });

    function showTab(tabId) {
        var tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(function (content) {
            content.classList.remove('show');
        });

        document.getElementById(tabId).classList.add('show');
    }
});