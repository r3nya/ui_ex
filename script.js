(function () {

    function toggle (el) {
        isHidden(el) ? show(el) : hide(el)
    }

    function isHidden (el) {
        var width = el.offsetWidth,
            height = el.offsetHeight;

        return width === 0 && height === 0;
    }

    function hide (el) {
        el.style.display = "none";
    }

    function show (el) {
        el.style.display = "";
    }

    window.onload = function () {

        var elems = document.querySelectorAll('.nav');

        for (var i = 0; i < elems.length; i++) {
            elems[i].onclick = function (e) {
                toggle(document.getElementById(e.path[0].classList[0]));
            }
        }

        var searchBtn = document.getElementById('searchSubmit');
        var searchInput = document.getElementById('searchInput');

        searchBtn.onclick = function () {
            if (searchInput.value.length === 0) {
                alert('Field should not be empty!');
            }
        }
    }

})();