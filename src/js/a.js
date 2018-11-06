A = {
    fun1: function () {
        return 2;
    },
    fun2: function () {
        return 3;;
    },
    fun3: function () {
        return 4;
    },
    addClass: function (el, newClass) {
        if (el.className.indexOf(newClass) !== -1) {
            return;
        }

        if (el.className !== '') {
            //ensure class names are separated by a space
            newClass = ' ' + newClass;
        }

        el.className += newClass;
    }
}
