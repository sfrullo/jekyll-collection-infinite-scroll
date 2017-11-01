define( function () {

    return {

        __append : function (what, where, callback) {
            var element = document.getElementById(where);
            var __old_html = element.innerHTML;
            element.innerHTML = __old_html + what;
            if (callback!==undefined) {
                callback(element);
            }
        },

        __load : function(what, where, callback) {
            var xhr= new XMLHttpRequest();
            xhr.open('GET', what, true);
            xhr.onreadystatechange = function() {
                if (this.readyState!==4) return;
                if (this.status!==200) return; // or whatever error handling you want
                if (callback!==undefined) {
                    callback(this.responseText);
                }
            };
            xhr.send();
        }

    }
});