(function (a) {
    "use strict";

    function b(b, c) {
        this.$target = a(b);
        this.opts = a.extend({}, i, c);

        if (this.isOpen === void 0) {
            this._init();
        }
        return this;
    }

    var c, d, e, f, g, h,
        i = {
            loadingNotice: "Loading image",
            errorNotice: "The image could not be loaded",
            errorDuration: 2500,
            preventClicks: !0,
            onShow: void 0,
            onHide: void 0
        };

    b.prototype._init = function () {
        var b = this;
        this.$link = this.$target.find("a");
        this.$image = this.$target.find("img");
        this.$flyout = a('<div class="easyzoom-flyout" />');
        this.$notice = a('<div class="easyzoom-notice" />');

        this.$target
            .on("mouseenter.easyzoom touchstart.easyzoom", function (a) {
                b.isMouseOver = !0;
                if (a.originalEvent.touches && a.originalEvent.touches.length !== 1) return;
                a.preventDefault();
                b.show(a, !0);
            })
            .on("mousemove.easyzoom touchmove.easyzoom", function (a) {
                if (b.isOpen) {
                    a.preventDefault();
                    b._move(a);
                }
            })
            .on("mouseleave.easyzoom touchend.easyzoom", function () {
                b.isMouseOver = !1;
                if (b.isOpen) {
                    b.hide();
                }
            });

        if (this.opts.preventClicks) {
            this.$target.on("click.easyzoom", "a", function (a) {
                a.preventDefault();
            });
        }
    };

    b.prototype.show = function (a, b) {
        var g, h, i, j, k = this;

        if (this.isReady) {
            this.$target.append(this.$flyout);
            g = this.$target.width();
            h = this.$target.height();
            i = this.$flyout.width();
            j = this.$flyout.height();
            c = this.$zoom.width() - i;
            d = this.$zoom.height() - j;
            e = c / g;
            f = d / h;
            this.isOpen = !0;
            if (this.opts.onShow) this.opts.onShow.call(this);
            if (a) this._move(a);
        } else {
            this._load(this.$link.attr("href"), function () {
                if (k.isMouseOver || !b) k.show(a);
            });
        }
    };

    b.prototype._load = function (b, c) {
        var d = new Image;
        this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice));
        this.$zoom = a(d);

        d.onerror = a.proxy(function () {
            var a = this;
            this.$notice.text(this.opts.errorNotice);
            this.$target.removeClass("is-loading").addClass("is-error");
            this.detachNotice = setTimeout(function () {
                a.$notice.detach();
                a.detachNotice = null;
            }, this.opts.errorDuration);
        }, this);

        d.onload = a.proxy(function () {
            if (d.width) {
                this.isReady = !0;
                this.$notice.detach();
                this.$flyout.html(this.$zoom);
                this.$target.removeClass("is-loading").addClass("is-ready");
                c();
            }
        }, this);

        d.style.position = "absolute";
        d.src = b;
    };

    b.prototype._move = function (a) {
        if (a.type.indexOf("touch") === 0) {
            var b = a.touches || a.originalEvent.touches;
            g = b[0].pageX;
            h = b[0].pageY;
        } else {
            g = a.pageX || g;
            h = a.pageY || h;
        }

        var i = this.$target.offset(),
            j = h - i.top,
            k = g - i.left,
            l = Math.ceil(j * f),
            m = Math.ceil(k * e);

        if (m < 0 || l < 0 || m > c || l > d) {
            this.hide();
        } else {
            this.$zoom.css({
                top: "" + -1 * l + "px",
                left: "" + -1 * m + "px"
            });
        }
    };

    b.prototype.hide = function () {
        if (this.isOpen) {
            this.$flyout.detach();
            this.isOpen = !1;
            if (this.opts.onHide) this.opts.onHide.call(this);
        }
    };

    b.prototype.swap = function (b, c, d) {
        this.hide();
        this.isReady = !1;
        if (this.detachNotice) clearTimeout(this.detachNotice);
        if (this.$notice.parent().length) this.$notice.detach();
        if (a.isArray(d)) d = d.join();
        this.$target.removeClass("is-loading is-ready is-error");
        this.$image.attr({ src: b, srcset: d });
        this.$link.attr("href", c);
    };

    b.prototype.teardown = function () {
        this.hide();
        this.$target.removeClass("is-loading is-ready is-error").off(".easyzoom");
        if (this.detachNotice) clearTimeout(this.detachNotice);
        delete this.$link;
        delete this.$zoom;
        delete this.$image;
        delete this.$notice;
        delete this.$flyout;
        delete this.isOpen;
        delete this.isReady;
    };

    a.fn.easyZoom = function (c) {
        return this.each(function () {
            var d = a.data(this, "easyZoom");
            if (d) {
                if (d.isOpen === void 0) d._init();
            } else {
                a.data(this, "easyZoom", new b(this, c));
            }
        });
    };

    if (typeof define === "function" && define.amd) {
        define(function () { return b; });
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = b;
    }

}(jQuery));
