(function () {

    function toggle (el) {
        isHidden(el) ? show(el) : hide(el);
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

    function navEl (el) {
        this.child = el;
        this.onclick = function (e) {
            toggle(document.getElementById(e.srcElement.classList[0]));
        }
    }

    window.onload = function () {

        var elems = document.querySelectorAll('.nav');
        var elemsLength = elems.length;

        for (var i = 0; i < elemsLength; i++) {
            navEl(elems[i]);
        }

        var searchBtn = document.getElementById('searchSubmit');
        var searchInput = document.getElementById('searchInput');

        searchBtn.onclick = function () {
            if (searchInput.value.length === 0) {
                alert('Field should not be empty!');
            }
        };
    };

})();
