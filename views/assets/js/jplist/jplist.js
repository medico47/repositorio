/*
 jPList - jQuery Data Grid Controls 5.1.32 - http://jplist.com 
 Copyright 2014 Miriam Zusin. All rights reserved.
 For non-commercial, personal, or open source projects and applications, you may use jPList for free under the terms of the GPL V3 License (https://gnu.org/licenses/gpl.html)
 If your project generates any type of income, e.g. sells products, ads, services or just represents a commercial company, you should get a commercial license at http://www.binpress.com
*/
(function() {
    var b = function(b, c) {
        var a = jQuery({});
        a.$root = c;
        a.events = { renderStatusesEvent: "1", setStatusesEvent: "2", forceRenderStatusesEvent: "3", restoreEvent: "4", statusEvent: "5", sortEvent: "6", filterEvent: "7", paginationEvent: "8", changeUrlDeepLinksEvent: "9", setDeepLinksEvent: "10", addItemEvent: "11", delItemEvent: "12", collectionReadyEvent: "13", animationStartEvent: "14", animationStepEvent: "15", animationCompleteEvent: "16", renderList: "17" };
        a = { controller: null, observer: a, events: null, panel: null, $root: c };
        a.options =
            jQuery.extend(!0, {
                debug: !1,
                itemsBox: ".list",
                itemPath: ".list-item",
                panelPath: ".panel",
                noResults: ".jplist-no-results",
                redrawCallback: "",
                iosBtnPath: ".jplist-ios-button",
                animateToTop: "html, body",
                animateToTopDuration: 0,
                effect: "",
                duration: 300,
                fps: 24,
                storage: "",
                storageName: "jplist",
                cookiesExpiration: -1,
                deepLinking: !1,
                delimiter0: ":",
                delimiter1: "|",
                delimiter2: "~",
                delimiter3: "!",
                historyLength: 10,
                dataSource: {
                    type: "html",
                    server: { ajax: { url: "server.php", dataType: "html", type: "POST" }, serverOkCallback: null, serverErrorCallback: null },
                    render: null
                },
                controlTypes: {
                    "default-sort": { className: "DefaultSort", options: {} },
                    "drop-down": { className: "Dropdown", options: {} },
                    "pagination-info": { className: "PaginationInfo", options: {} },
                    counter: { className: "Counter", options: { ignore: "[~!@#$%^&*()+=`'\"/\\_]+" } },
                    pagination: { className: "Pagination", options: { range: 7, jumpToStart: !1, prevArrow: "&lsaquo;", nextArrow: "&rsaquo;", firstArrow: "&laquo;", lastArrow: "&raquo;" } },
                    reset: { className: "Reset", options: {} },
                    select: { className: "Select", options: {} },
                    textbox: {
                        className: "Textbox",
                        options: { eventName: "keyup", ignore: "[~!@#$%^&*()+=`'\"/\\_]+" }
                    },
                    views: { className: "Views", options: {} },
                    "checkbox-group-filter": { className: "CheckboxGroupFilter", options: {} },
                    "checkbox-text-filter": { className: "CheckboxTextFilter", options: { ignore: "" } },
                    "button-filter": { className: "ButtonFilter", options: {} },
                    "button-filter-group": { className: "ButtonFilterGroup", options: {} },
                    "button-text-filter": { className: "ButtonTextFilter", options: { ignore: "[~!@#$%^&*()+=`'\"/\\_]+" } },
                    "button-text-filter-group": {
                        className: "ButtonTextFilterGroup",
                        options: { ignore: "[~!@#$%^&*()+=`'\"/\\_]+" }
                    },
                    "radio-buttons-filters": { className: "RadioButtonsFilter", options: {} },
                    "range-filter": { className: "RangeSliderToggleFilter", options: {} },
                    "back-button": { className: "BackButton", options: {} },
                    preloader: { className: "Preloader", options: {} }
                }
            }, b);
        a.history = new jQuery.fn.jplist.app.History(a.$root, a.options, a.observer);
        a.panel = new jQuery.fn.jplist.ui.panel.controllers.PanelController(c, a.options, a.history, a.observer);
        a.options.dataSource = a.options.dataSource || {};
        a.options.dataSource.type =
            a.options.dataSource.type || "html";
        jQuery.fn.jplist.info(a.options, "Data Source Type: ", a.options.dataSource.type);
        switch (a.options.dataSource.type) {
            case "html":
                new jQuery.fn.jplist.ui.list.controllers.DOMController(a.$root, a.options, a.observer, a.panel, a.history);
                break;
            case "server":
                jQuery.fn.jplist.info(a.options, "Data Source: ", a.options.dataSource), new jQuery.fn.jplist.ui.list.controllers.ServerController(a.$root, a.options, a.observer, a.panel, a.history)
        }
        var e = [],
            d = !1;
        a.options.deepLinking ? (jQuery.fn.jplist.info(a.options,
            "Deep linking enabled", ""), a.observer.trigger(a.observer.events.setDeepLinksEvent, [])) : (d = "cookies" === a.options.storage || "localstorage" === a.options.storage && jQuery.fn.jplist.dal.services.LocalStorageService.supported()) ? (jQuery.fn.jplist.info(a.options, "Storage enabled: ", a.options.storage), "cookies" === a.options.storage && (e = jQuery.fn.jplist.dal.services.CookiesService.restoreCookies(a.options.storageName)), "localstorage" === a.options.storage && jQuery.fn.jplist.dal.services.LocalStorageService.supported() &&
            (e = jQuery.fn.jplist.dal.services.LocalStorageService.restore(a.options.storageName)), 0 < e.length ? a.observer.trigger(a.observer.events.restoreEvent, [e]) : a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!0])) : a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!0]);
        return jQuery.extend(this, a)
    };
    jQuery.fn.jplist = function(f) {
        return this.each(function() {
            var c = new b(f, jQuery(this));
            jQuery(this).data("jplist", c)
        })
    };
    jQuery.fn.jplist.app = jQuery.fn.jplist.app || {};
    jQuery.fn.jplist.app.services =
        jQuery.fn.jplist.app.services || {};
    jQuery.fn.jplist.app.services.DTOMapperService = jQuery.fn.jplist.app.services.DTOMapperService || {};
    jQuery.fn.jplist.app.dto = jQuery.fn.jplist.app.dto || {};
    jQuery.fn.jplist.domain = jQuery.fn.jplist.domain || {};
    jQuery.fn.jplist.domain.dom = jQuery.fn.jplist.domain.dom || {};
    jQuery.fn.jplist.domain.dom.models = jQuery.fn.jplist.domain.dom.models || {};
    jQuery.fn.jplist.domain.dom.collections = jQuery.fn.jplist.domain.dom.collections || {};
    jQuery.fn.jplist.domain.dom.services = jQuery.fn.jplist.domain.dom.services || {};
    jQuery.fn.jplist.domain.dom.services.FiltersService = jQuery.fn.jplist.domain.dom.services.FiltersService || {};
    jQuery.fn.jplist.domain.dom.services.SortService = jQuery.fn.jplist.domain.dom.services.SortService || {};
    jQuery.fn.jplist.domain.dom.services.pagination = jQuery.fn.jplist.domain.dom.services.pagination || {};
    jQuery.fn.jplist.domain.server = jQuery.fn.jplist.domain.server || {};
    jQuery.fn.jplist.domain.server.models = jQuery.fn.jplist.domain.server.models || {};
    jQuery.fn.jplist.dal = jQuery.fn.jplist.dal || {};
    jQuery.fn.jplist.dal.services = jQuery.fn.jplist.dal.services || {};
    jQuery.fn.jplist.ui = jQuery.fn.jplist.ui || {};
    jQuery.fn.jplist.ui.list = jQuery.fn.jplist.ui.list || {};
    jQuery.fn.jplist.ui.list.models = jQuery.fn.jplist.ui.list.models || {};
    jQuery.fn.jplist.ui.list.controllers = jQuery.fn.jplist.ui.list.controllers || {};
    jQuery.fn.jplist.ui.list.views = jQuery.fn.jplist.ui.list.views || {};
    jQuery.fn.jplist.ui.controls = jQuery.fn.jplist.ui.controls || {};
    jQuery.fn.jplist.ui.statuses = jQuery.fn.jplist.ui.statuses || {};
    jQuery.fn.jplist.ui.panel = jQuery.fn.jplist.ui.panel || {};
    jQuery.fn.jplist.ui.panel.controllers = jQuery.fn.jplist.ui.panel.controllers || {};
    jQuery.fn.jplist.ui.panel.collections = jQuery.fn.jplist.ui.panel.collections || {}
})();
(function() {
    jQuery.fn.jplist.app.dto.StatusDTO = function(b, f, c, a, e, d, g, k) {
        this.action = f;
        this.name = b;
        this.type = c;
        this.data = a;
        this.inStorage = e;
        this.inAnimation = d;
        this.isAnimateToTop = g;
        this.inDeepLinking = k
    }
})();
(function() {
    var b = function(b, c, a) { return jQuery.extend(this, { options: c, observer: a, $root: b, statusesQueue: [], listStatusesQueue: [] }) };
    b.prototype.addStatus = function(b) {
        this.statusesQueue.push(b);
        this.statusesQueue.length > this.options.historyLength && this.statusesQueue.shift()
    };
    b.prototype.getLastStatus = function() {
        var b = null;
        0 < this.statusesQueue.length && (b = this.statusesQueue[this.statusesQueue.length - 1]);
        return b
    };
    b.prototype.popStatus = function() {
        var b = null;
        0 < this.statusesQueue.length && (b = this.statusesQueue.pop());
        return b
    };
    b.prototype.getLastList = function() {
        var b = null;
        0 < this.listStatusesQueue.length && (b = this.listStatusesQueue[this.listStatusesQueue.length - 1]);
        return b
    };
    b.prototype.addList = function(b) {
        this.listStatusesQueue.push(b);
        this.listStatusesQueue.length > this.options.historyLength && this.listStatusesQueue.shift()
    };
    b.prototype.popList = function() {
        var b = null;
        0 < this.listStatusesQueue.length && (b = this.listStatusesQueue.pop());
        return b
    };
    jQuery.fn.jplist.app.History = function(f, c, a) { return new b(f, c, a) }
})();
(function() {
    var b = function(b, c, a) { return jQuery.extend(this, { options: b, observer: c, statuses: a }) };
    b.prototype.findStatusByField = function(b, c) {
        for (var a = -1, e, d = 0; d < this.statuses.length; d++)
            if (e = this.statuses[d], e[c] === b[c]) { a = d; break }
        return a
    };
    b.prototype.getStatusesByAction = function(b) { for (var c = [], a, e = 0; e < this.statuses.length; e++) a = this.statuses[e], a.action === b && c.push(a); return c };
    jQuery.fn.jplist.app.dto.StatusesDTOCollection = function(f, c, a) { return new b(f, c, a) }
})();
(function() {
    jQuery.fn.jplist.app.services.DTOMapperService.filters = {};
    jQuery.fn.jplist.app.services.DTOMapperService.filters.TextFilter = function(b, f) { var c = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b.data.path, null); return jQuery.fn.jplist.domain.dom.services.FiltersService.textFilter(b.data.value, c, f, b.data.ignore) };
    jQuery.fn.jplist.app.services.DTOMapperService.filters.path = function(b, f) {
        var c = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b.data.path, null);
        return jQuery.fn.jplist.domain.dom.services.FiltersService.pathFilter(c, f)
    };
    jQuery.fn.jplist.app.services.DTOMapperService.filters.range = function(b, f) { var c = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b.data.path, null); return jQuery.fn.jplist.domain.dom.services.FiltersService.rangeFilter(c, f, b.data.min, b.data.max, b.data.prev, b.data.next) };
    jQuery.fn.jplist.app.services.DTOMapperService.filters.date = function(b, f) {
        var c = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b.data.path,
            null);
        return jQuery.fn.jplist.domain.dom.services.FiltersService.dateFilter(b.data.year, b.data.month, b.data.day, c, f, b.data.format)
    };
    jQuery.fn.jplist.app.services.DTOMapperService.filters.dateRange = function(b, f) { var c = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b.data.path, null); return jQuery.fn.jplist.domain.dom.services.FiltersService.dateRangeFilter(c, f, b.data.format, b.data.prev_year, b.data.prev_month, b.data.prev_day, b.data.next_year, b.data.next_month, b.data.next_day) };
    jQuery.fn.jplist.app.services.DTOMapperService.filters.pathGroup =
        function(b, f) { return jQuery.fn.jplist.domain.dom.services.FiltersService.pathGroupFilter(b.data.pathGroup, f) };
    jQuery.fn.jplist.app.services.DTOMapperService.filters.textGroup = function(b, f) { return jQuery.fn.jplist.domain.dom.services.FiltersService.textGroupFilter(b.data.textGroup, b.data.logic, b.data.path, b.data.ignoreRegex, f) };
    jQuery.fn.jplist.app.services.DTOMapperService.filters.textFilterPathGroup = function(b, f) {
        return jQuery.fn.jplist.domain.dom.services.FiltersService.textFilterPathGroup(b.data.textAndPathsGroup,
            b.data.ignoreRegex, f)
    };
    jQuery.fn.jplist.app.services.DTOMapperService.filters.autocomplete = function(b, f) { return jQuery.fn.jplist.domain.dom.services.FiltersService.autocompleteFilter(b.data.latitude, b.data.longitude, b.data.name, f, b.data.radius) };
    jQuery.fn.jplist.app.services.DTOMapperService.sort = {};
    jQuery.fn.jplist.app.services.DTOMapperService.sort.text = function(b, f, c) {
        var a = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b.data.path, b.data.type);
        return jQuery.fn.jplist.domain.dom.services.SortService.textHelper(f,
            c, b.data.order, a, b.data.ignore || "")
    };
    jQuery.fn.jplist.app.services.DTOMapperService.sort.number = function(b, f, c) { var a = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b.data.path, b.data.type); return jQuery.fn.jplist.domain.dom.services.SortService.numbersHelper(f, c, b.data.order, a) };
    jQuery.fn.jplist.app.services.DTOMapperService.sort.datetime = function(b, f, c) {
        var a = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b.data.path, b.data.type);
        return jQuery.fn.jplist.domain.dom.services.SortService.datetimeHelper(f,
            c, b.data.order, a, b.data.dateTimeFormat || "")
    }
})();
(function() {
    jQuery.fn.jplist.logEnabled = function(b) { return b.debug && window.console && jQuery.isFunction(window.console.log) };
    jQuery.fn.jplist.log = function(b, f, c) { jQuery.fn.jplist.logEnabled(b) && window.console.log(f, c) };
    jQuery.fn.jplist.info = function(b, f, c) { jQuery.fn.jplist.logEnabled(b) && window.console.info(f, c) };
    jQuery.fn.jplist.error = function(b, f, c) { jQuery.fn.jplist.logEnabled(b) && window.console.error(f, c) };
    jQuery.fn.jplist.warn = function(b, f, c) {
        jQuery.fn.jplist.logEnabled(b) && window.console.warn(f,
            c)
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel = function(b, f) {
        this.jqPath = b;
        this.dataType = f
    };
    jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel.prototype.isEqual = function(b, f) {
        var c = !1;
        f ? this.jqPath === b.jqPath && (c = !0) : this.jqPath === b.jqPath && this.dataType === b.dataType && (c = !0);
        return c
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.models.DataItemMemberModel = function(b, f) {
        this.$element = b;
        this.path = f;
        this.text = b.text();
        this.html = b.html()
    }
})();
(function() {
    var b = function(b, c, a) {
        a = { html: null, pathitems: [], $item: b, index: a };
        a.html = jQuery.fn.jplist.domain.dom.services.HelperService.getOuterHtml(b);
        var e, d;
        b = [];
        for (var g = 0; g < c.length; g++) e = c[g], d = a.$item.find(e.jqPath), 0 < d.length && (e = new jQuery.fn.jplist.domain.dom.models.DataItemMemberModel(d, e), b.push(e));
        a.pathitems = b;
        return jQuery.extend(this, a)
    };
    b.prototype.findPathitem = function(b) {
        for (var c = null, a, e = 0; e < this.pathitems.length; e++)
            if (a = this.pathitems[e], a.path.isEqual(b, !0)) { c = a; break }
        return c
    };
    jQuery.fn.jplist.domain.dom.models.DataItemModel = function(f, c, a) {
        f = new b(f, c, a);
        this.html = f.html;
        this.jqElement = f.$item;
        this.pathitems = f.pathitems;
        this.findPathitem = f.findPathitem
    }
})();
(function() {
    var b = function(a, e) {
            var d, g, b;
            d = (new jQuery.fn.jplist.app.dto.StatusesDTOCollection(a.options, a.observer, e)).getStatusesByAction("filter", e);
            if (0 < d.length) {
                for (var c = 0; c < d.length; c++)
                    if ((g = d[c]) && g.data && g.data.filterType) b = jQuery.fn.jplist.app.services.DTOMapperService.filters[g.data.filterType], jQuery.isFunction(b) && (a.dataview = b(g, a.dataview));
                a.observer.trigger(a.observer.events.filterEvent, [e, a])
            }
        },
        f = function(a, e) {
            var d, g = null,
                b;
            d = (new jQuery.fn.jplist.app.dto.StatusesDTOCollection(a.options,
                a.observer, e)).getStatusesByAction("paging", e);
            if (0 < d.length) {
                for (var c = 0; c < d.length; c++) g = d[c], b = g.data.currentPage || 0, g = new jQuery.fn.jplist.domain.dom.services.PaginationService(b, g.data.number, a.dataview.length), d[c].data.paging = g, a.dataview = jQuery.fn.jplist.domain.dom.services.FiltersService.pagerFilter(g, a.dataview);
                a.observer.trigger(a.observer.events.paginationEvent, [e, a])
            }
        },
        c = function(a, e) {
            var d;
            d = (new jQuery.fn.jplist.app.dto.StatusesDTOCollection(a.options, a.observer, e)).getStatusesByAction("sort",
                e);
            0 < d.length && (jQuery.fn.jplist.domain.dom.services.SortService.doubleSort(d, a.dataview), a.observer.trigger(a.observer.events.sortEvent, [e, a]))
        },
        a = function(a) { return jQuery(a.dataview).map(function(a, e) { return e.jqElement.get() }) },
        e = function(a) { return jQuery(a.dataitems).map(function(a, e) { return e.jqElement.get() }) },
        d = function(a) { a.dataview = jQuery.merge([], a.dataitems) },
        g = function(a, e) {
            for (var d, g = -1, b, c = 0; c < a.dataitems.length; c++)
                if (d = a.dataitems[c], d = jQuery.fn.jplist.domain.dom.services.HelperService.getOuterHtml(d.jqElement),
                    b = jQuery.fn.jplist.domain.dom.services.HelperService.getOuterHtml(e), d === b) { g = c; break }
            return g
        },
        k = function(a, e) {
            var d;
            d = g(a, e); - 1 !== d && (a.dataitems.splice(d, 1), a.observer.trigger(a.observer.events.delItemEvent, [e, a.dataitems]))
        },
        l = function(a, e) { e.each(function() { k(a, jQuery(this)) }) },
        h = function(a, e, d, g) {
            e = new jQuery.fn.jplist.domain.dom.models.DataItemModel(e, d, g);
            a.dataitems.push(e);
            a.observer.trigger(a.observer.events.addItemEvent, [e, a.dataitems])
        },
        m = function(a, e, d, g) {
            for (var b; d < e.length; d++) b =
                e.eq(d), h(a, b, g, d), d + 1 < e.length && 0 === d % 50 && window.setTimeout(function() { m(a, e, d, g) }, 0)
        },
        n = function(a, e, g, b) {
            a = { dataitems: [], dataview: [], options: a, observer: e };
            0 < g.length && (m(a, g, 0, b), d(a));
            a.observer.trigger(a.observer.events.collectionReadyEvent, [a]);
            return jQuery.extend(this, a)
        };
    n.prototype.applyStatuses = function(a) {
        d(this);
        c(this, a);
        b(this, a);
        f(this, a);
        this.observer.trigger(this.observer.events.renderList, [this, a])
    };
    n.prototype.filter = function(a) { b(this, a) };
    n.prototype.sort = function(a) { c(this, a) };
    n.prototype.pagination = function(a) { f(this, a) };
    n.prototype.dataviewToJqueryObject = function() { return a(this) };
    n.prototype.dataitemsToJqueryObject = function() { return e(this) };
    n.prototype.resetDataview = function() { d(this) };
    n.prototype.empty = function() {
        this.dataitems = [];
        this.dataview = []
    };
    n.prototype.addDataItem = function(a, e, d) { h(this, a, e, d) };
    n.prototype.addDataItems = function(a, e) {
        m(this, a, 0, e);
        d(this)
    };
    n.prototype.delDataitem = function(a) { k(this, a) };
    n.prototype.delDataitems = function(a) { l(this, a) };
    n.prototype.indexOf =
        function(a) { return g(this, a) };
    n.prototype.dataviewToString = function() {
        var a, e = "",
            d;
        for (d = 0; d < this.dataview.length; d++) a = this.dataview[d], e += a.content;
        return e
    };
    jQuery.fn.jplist.domain.dom.collections.DataItemsCollection = function(a, e, d, g) {
        d = new n(a, e, d, g);
        this.observer = e;
        this.options = a;
        this.dataitems = d.dataitems;
        this.dataview = d.dataview;
        this.sort = d.sort;
        this.filter = d.filter;
        this.pagination = d.pagination;
        this.applyStatuses = d.applyStatuses;
        this.addDataItem = d.addDataItem;
        this.addDataItems = d.addDataItems;
        this.resetDataview = d.resetDataview;
        this.indexOf = d.indexOf;
        this.delDataitem = d.delDataitem;
        this.delDataitems = d.delDataitems;
        this.empty = d.empty;
        this.dataviewToString = d.dataviewToString;
        this.dataviewToJqueryObject = d.dataviewToJqueryObject;
        this.dataitemsToJqueryObject = d.dataitemsToJqueryObject
    }
})();
(function() {
    var b = function(b, a) {
            for (var e, d = !1, g = 0; g < b.paths.length; g++)
                if (e = b.paths[g], e.isEqual(a, !0)) { d = !0; break }
            return d
        },
        f = function(b, a) { return jQuery.extend(this, { options: b, observer: a, paths: [] }) };
    f.prototype.add = function(c) { b(this, c) || this.paths.push(c) };
    f.prototype.addRange = function(c) {
        for (var a = 0; a < c.length; a++) {
            var e = c[a];
            b(this, e) || this.paths.push(e)
        }
    };
    f.prototype.isPathInList = function(c) { return b(this, c) };
    jQuery.fn.jplist.domain.dom.collections.DataItemMemberPathCollection = function(b, a) {
        return new f(b,
            a)
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.services.PaginationService = function(b, f, c) {
        c = Number(c);
        isNaN(c) && (c = 0);
        c = this.itemsNumber = c;
        null === f ? f = c : (f = Number(f), isNaN(f) && (f = c));
        this.itemsOnPage = f;
        f = (f = this.itemsOnPage) ? Math.ceil(this.itemsNumber / f) : 0;
        f = this.pagesNumber = f;
        b = Number(b);
        isNaN(b) && (b = 0);
        b > f - 1 && (b = 0);
        this.currentPage = b;
        this.start = this.currentPage * this.itemsOnPage;
        b = this.itemsNumber;
        f = this.start + this.itemsOnPage;
        f > b && (f = b);
        this.end = f;
        b = this.currentPage;
        this.prevPage = 0 >= b ? 0 : b - 1;
        b = this.currentPage;
        f = this.pagesNumber;
        this.nextPage = 0 === f ? 0 : b >= f - 1 ? f - 1 : b + 1
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.services.PaginationGoogleService = function(b, f, c) {
        c = Number(c);
        isNaN(c) && (c = 0);
        c = this.itemsNumber = c;
        null === f ? f = c : (f = Number(f), isNaN(f) && (f = c));
        this.itemsOnPage = f;
        f = (f = this.itemsOnPage) ? Math.ceil(this.itemsNumber / f) : 0;
        f = this.pagesNumber = f;
        b = Number(b);
        isNaN(b) && (b = 0);
        b > f - 1 && (b = 0);
        this.currentPage = b;
        this.start = this.currentPage * this.itemsOnPage;
        b = this.itemsNumber;
        f = this.start + this.itemsOnPage;
        f > b && (f = b);
        this.end = f;
        b = this.currentPage;
        this.prevPage = 0 >= b ? 0 : b - 1;
        b = this.currentPage;
        f = this.pagesNumber;
        this.nextPage = 0 === f ? 0 : b >= f - 1 ? f - 1 : b + 1
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.services.FiltersService.autocompleteFilter = function(b, f, c, a, e) {
        var d = [],
            g, k;
        if (jQuery.isNumeric(b) && jQuery.isNumeric(f) && google && jQuery.fn.jlocator && jQuery.fn.jlocator.store) { b = new google.maps.LatLng(b, f); for (var l = 0; l < a.length; l++) f = a[l], g = new jQuery.fn.jlocator.store(f.jqElement, {}), k = g.country ? jQuery.trim(g.country.toLowerCase()) == jQuery.trim(c.toLowerCase()) : !1, g = google.maps.geometry.spherical.computeDistanceBetween(b, g.latlng), (g <= e || k) && d.push(f); return d }
        return a
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.services.FiltersService.dateFilter = function(b, f, c, a, e, d) {
        for (var g, k, l = [], h = 0; h < e.length; h++)
            if (g = e[h], k = g.findPathitem(a)) !b || !f || !c ? l.push(g) : (k = jQuery.fn.jplist.domain.dom.services.SortService.jQuery.fn.jplist.domain.dom.services.HelperService.formatDateTime(k.text, d)) && "function" === typeof k.getFullYear && k.getFullYear() === b && (k.getMonth() - 1 === f && k.getDate() === c) && l.push(g);
        return l
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.services.FiltersService.dateRangeFilter = function(b, f, c, a, e, d, g, k, l) {
        for (var h = [], m, n, p, q, r = 0; r < f.length; r++)
            if (m = f[r], n = m.findPathitem(b))
                if (p = !jQuery.isNumeric(a) || !jQuery.isNumeric(e) || !jQuery.isNumeric(d), q = !jQuery.isNumeric(g) || !jQuery.isNumeric(k) || !jQuery.isNumeric(l), p || q) h.push(m);
                else if ((q = jQuery.fn.jplist.domain.dom.services.HelperService.formatDateTime(n.text, c)) && jQuery.isFunction(q.getFullYear)) n = new Date(a, e, d), p = new Date(g, k, l), q.setHours(0),
            q.setMinutes(0), q.setSeconds(0), q >= n && q <= p && h.push(m);
        return h
    }
})();
(function() { jQuery.fn.jplist.domain.dom.services.FiltersService.pagerFilter = function(b, f) { return f.slice(b.start, b.end) } })();
(function() { jQuery.fn.jplist.domain.dom.services.FiltersService.pathFilter = function(b, f) { for (var c, a, e = [], d = 0; d < f.length; d++) c = f[d], "default" === b.jqPath ? e.push(c) : (a = c.findPathitem(b)) && e.push(c); return e } })();
(function() {
    jQuery.fn.jplist.domain.dom.services.FiltersService.pathGroupFilter = function(b, f) {
        var c, a = [],
            e, d = [];
        if (0 >= b.length) return f;
        for (e = 0; e < b.length; e++) c = b[e], c = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(c, null), a.push(c);
        for (var g = 0; g < f.length; g++) {
            e = f[g];
            for (var k = 0; k < a.length; k++)
                if (c = a[k], "default" === c.jqPath) { d.push(e); break } else(c = e.findPathitem(c)) && d.push(e)
        }
        return d
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.services.FiltersService.rangeFilter = function(b, f, c, a, e, d) {
        c = [];
        for (var g, k = jQuery.isNumeric(e), l = jQuery.isNumeric(d), h = 0; h < f.length; h++)
            if (a = f[h], g = a.findPathitem(b)) g = Number(g.text.replace(/[^-0-9\.]+/g, "")), isNaN(g) || (k && l ? g >= e && g <= d && c.push(a) : k && !l ? g >= e && c.push(a) : !k && l && g <= d && c.push(a));
        return c
    }
})();
(function() { jQuery.fn.jplist.domain.dom.services.FiltersService.textFilter = function(b, f, c, a) { for (var e, d, g = [], k, l = 0; l < c.length; l++) e = c[l], d = e.findPathitem(f), "default" === f.jqPath ? g.push(e) : d && (d = jQuery.fn.jplist.domain.dom.services.HelperService.removeCharacters(d.text, a), k = jQuery.fn.jplist.domain.dom.services.HelperService.removeCharacters(b, a), -1 !== d.indexOf(k) && g.push(e)); return g } })();
(function() {
    jQuery.fn.jplist.domain.dom.services.FiltersService.textFilterPathGroup = function(b, f, c) {
        var a, e, d = [],
            g = [],
            k, l;
        for (l = 0; l < b.length; l++) k = b[l], k.selected && (a = k.path, e = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(a, null), k.pathObj = e, d.push(k));
        if (0 >= d.length) return c;
        for (a = 0; a < c.length; a++) {
            b = c[a];
            l = !1;
            for (var h = 0; h < d.length; h++)
                if (k = d[h], e = k.pathObj)
                    if ("default" === e.jqPath) { l = !0; break } else if (e = b.findPathitem(e)) e = jQuery.fn.jplist.domain.dom.services.HelperService.removeCharacters(e.text,
                f), k = jQuery.fn.jplist.domain.dom.services.HelperService.removeCharacters(k.text, f), -1 !== e.indexOf(k) && (l = !0);
            l && g.push(b)
        }
        return g
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.services.FiltersService.textGroupFilter = function(b, f, c, a, e) {
        var d, g, k, l = [],
            h, m;
        if (0 >= b.length) return e;
        k = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(c, null);
        for (var n = 0; n < e.length; n++)
            if (c = e[n], g = c.findPathitem(k), "default" === k.jqPath) l.push(c);
            else if (g)
            if (g = jQuery.fn.jplist.domain.dom.services.HelperService.removeCharacters(g.text, a), "or" === f)
                for (m = 0; m < b.length; m++) {
                    if (d = b[m], d = jQuery.fn.jplist.domain.dom.services.HelperService.removeCharacters(d,
                            a), -1 !== g.indexOf(d)) { l.push(c); break }
                } else {
                    h = [];
                    for (m = 0; m < b.length; m++) d = b[m], d = jQuery.fn.jplist.domain.dom.services.HelperService.removeCharacters(d, a), -1 !== g.indexOf(d) && h.push(d);
                    h.length === b.length && l.push(c)
                }
        return l
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.services.SortService.datetimeHelper = function(b, f, c, a, e) {
        b = b.findPathitem(a);
        f = f.findPathitem(a);
        return b && f ? (jQuery.trim(e) ? (a = jQuery.fn.jplist.domain.dom.services.HelperService.formatDateTime(b.text, e), e = jQuery.fn.jplist.domain.dom.services.HelperService.formatDateTime(f.text, e)) : (a = new Date(Date.parse(b.text)), e = new Date(Date.parse(f.text))), a == e ? 0 : "asc" == c ? a > e ? 1 : -1 : a < e ? 1 : -1) : 0
    };
    jQuery.fn.jplist.domain.dom.services.SortService.datetime = function(b, f, c, a) {
        c.sort(function(e,
            d) { return jQuery.fn.jplist.domain.dom.services.SortService.datetimeHelper(e, d, b, f, a) })
    }
})();
(function() {
    jQuery.fn.jplist.domain.dom.services.SortService.numbersHelper = function(b, f, c, a) {
        b = b.findPathitem(a);
        f = f.findPathitem(a);
        return b && f ? (a = parseFloat(b.text.replace(/[^-0-9\.]+/g, "")), f = parseFloat(f.text.replace(/[^-0-9\.]+/g, "")), c = a == f ? 0 : "asc" == c ? isNaN(a) ? 1 : isNaN(f) ? -1 : a - f : isNaN(a) ? 1 : isNaN(f) ? -1 : f - a) : 0
    };
    jQuery.fn.jplist.domain.dom.services.SortService.numbers = function(b, f, c) { c.sort(function(a, e) { return jQuery.fn.jplist.domain.dom.services.SortService.numbersHelper(a, e, b, f) }) }
})();
(function() {
    jQuery.fn.jplist.domain.dom.services.SortService.textHelper = function(b, f, c, a, e) {
        b = b.findPathitem(a);
        f = f.findPathitem(a);
        return b && f ? (e ? (a = RegExp(e, "ig"), e = b.text.toString().replace(a, "").toLowerCase(), b = f.text.toString().replace(a, "").toLowerCase()) : (e = b.text.toString().toLowerCase(), b = f.text.toString().toLowerCase()), e == b ? 0 : "asc" == c ? e > b ? 1 : -1 : e < b ? 1 : -1) : 0
    };
    jQuery.fn.jplist.domain.dom.services.SortService.text = function(b, f, c, a) {
        c.sort(function(e, d) {
            return jQuery.fn.jplist.domain.dom.services.SortService.textHelper(e,
                d, b, f, a)
        })
    }
})();
(function() {
    var b = function(f, c, a, e) {
        var d = 0,
            g, k;
        0 < a.length && (g = a[e], "default" != g.data.path ? (k = jQuery.fn.jplist.app.services.DTOMapperService.sort[g.data.type], jQuery.isFunction(k) && (d = k(g, f, c))) : (d = f.index, g = c.index, d = d === g ? 0 : isNaN(d) ? 1 : isNaN(g) ? -1 : d - g), 0 === d && e + 1 < a.length && (d = b(f, c, a, e + 1)));
        return d
    };
    jQuery.fn.jplist.domain.dom.services.SortService.doubleSort = function(f, c) {
        var a = !1;
        1 === f.length && (f[0] && f[0].data && "default" === f[0].data.path) && (a = !0);
        a || c.sort(function(a, d) { return b(a, d, f, 0) })
    }
})();
(function() {
    var b = function(b, a) {
            var e = null;
            if ("{month}" == b) {
                a = a.toLowerCase();
                if ("january" === a || "jan" === a || "jan." === a) e = 0;
                if ("february" === a || "feb" === a || "feb." === a) e = 1;
                if ("march" === a || "mar" === a || "mar." === a) e = 2;
                if ("april" == a || "apr" === a || "apr." === a) e = 3;
                "may" === a && (e = 4);
                if ("july" == a || "jun" === a || "jun." === a) e = 5;
                if ("april" === a || "jul" === a || "jul." === a) e = 6;
                if ("august" === a || "aug" === a || "aug." === a) e = 7;
                if ("september" === a || "sep" === a || "sep." === a) e = 8;
                if ("october" === a || "oct" === a || "oct." === a) e = 9;
                if ("november" === a ||
                    "nov" === a || "nov." === a) e = 10;
                if ("december" === a || "dec" === a || "dec." === a) e = 11;
                null === e && (e = parseInt(a, 10), isNaN(e) || e--)
            } else e = parseInt(a, 10);
            return e
        },
        f = function(b, a) {
            var e, d = null;
            e = b.replace(/{year}|{month}|{day}|{hour}|{min}|{sec}/g, ".*");
            (e = RegExp(e, "g").exec(a)) && 1 < e.length && (d = e[1]);
            return d
        };
    jQuery.fn.jplist.domain.dom.services.HelperService = {};
    jQuery.fn.jplist.domain.dom.services.HelperService.getOuterHtml = function(b) {
        var a = "",
            e = b[0].attributes,
            d = b.html();
        b = b[0].tagName.toString().toLowerCase();
        for (var a = a + ("<" + b), g = 0; g < e.length; g++) e[g].nodeValue && (a += " " + e[g].nodeName + "=", a += '"' + e[g].nodeValue + '"');
        a = a + ">" + d;
        return a += "</" + b + ">"
    };
    jQuery.fn.jplist.domain.dom.services.HelperService.removeCharacters = function(b, a) { return !b ? "" : b.replace(RegExp(a, "ig"), "").toLowerCase() };
    jQuery.fn.jplist.domain.dom.services.HelperService.formatDateTime = function(c, a) {
        var e, d, g, k, l, h;
        a = a.replace(/\./g, "\\.");
        a = a.replace(/\(/g, "\\(");
        a = a.replace(/\)/g, "\\)");
        a = a.replace(/\[/g, "\\[");
        a = a.replace(/\]/g, "\\]");
        e =
            a.replace("{year}", "(.*)");
        (d = f(e, c)) && (d = b("{year}", d));
        e = a.replace("{day}", "(.*)");
        (k = f(e, c)) && (k = b("{day}", k));
        e = a.replace("{month}", "(.*)");
        (g = f(e, c)) && (g = b("{month}", g));
        e = a.replace("{hour}", "(.*)");
        (l = f(e, c)) && (l = b("{hour}", l));
        e = a.replace("{min}", "(.*)");
        (h = f(e, c)) && (h = b("{min}", h));
        e = a.replace("{sec}", "(.*)");
        (e = f(e, c)) && (e = b("{sec}", e));
        if (!d || isNaN(d)) d = 1900;
        if (!g || isNaN(g)) g = 0;
        if (!k || isNaN(k)) k = 1;
        if (!l || isNaN(l)) l = 0;
        if (!h || isNaN(h)) h = 0;
        if (!e || isNaN(e)) e = 0;
        return new Date(d, g, k, l, h, e)
    }
})();
(function() {
    jQuery.fn.jplist.domain.server.models.DataItemModel = function(b, f, c) {
        this.content = "";
        this.dataType = f;
        this.count = 0;
        this.responseText = c;
        this.dataType || (this.dataType = "html");
        switch (this.dataType) {
            case "html":
                f = jQuery(b);
                0 < f.length && (this.content = f.html(), this.count = Number(f.attr("data-count")) || 0);
                break;
            case "json":
                this.content = b.data;
                this.count = b.count;
                break;
            case "xml":
                f = jQuery(b).find("root"), this.count = Number(f.attr("count")) || 0, this.content = 0 < this.count ? b : ""
        }
    }
})();
(function() {
    jQuery.fn.jplist.animation = {};
    jQuery.fn.jplist.animation.drawItems = function(b, f, c, a, e, d, g, k) {
        var l, h, m;
        if (e = jQuery.fn.jplist.animation[e]) {
            l = e.before;
            m = e.effect;
            h = e.after;
            jQuery.isFunction(l) && l(b, f, c, a);
            if (jQuery.isFunction(m)) k.on(k.events.animationStepEvent, function(e, d, g) { m(b, f, c, a, d) });
            k.on(k.events.animationCompleteEvent, function(e) {
                jQuery.isFunction(h) && h(b, f, c, a);
                k.off(k.events.animationStepEvent);
                k.off(k.events.animationCompleteEvent);
                jQuery.isFunction(g) && g()
            });
            d.play(b.duration)
        } else jQuery.isFunction(g) &&
            g()
    }
})();
(function() {
    var b = function(a) {
            a.handler && window.clearTimeout(a.handler);
            a.progress = 0;
            a.start = null;
            a.observer.trigger(a.observer.events.animationCompleteEvent, [])
        },
        f = function(a, e) {
            jQuery.isNumeric(e) && 0 < e ? a.handler = window.setTimeout(function() {
                var d;
                null === a.start && (a.observer.trigger(a.observer.events.animationStartEvent, []), a.start = (new Date).getTime());
                d = (new Date).getTime() - a.start;
                a.progress = d / e;
                1 <= a.progress && (a.progress = 1);
                a.observer.trigger(a.observer.events.animationStepEvent, [100 * a.progress,
                    a
                ]);
                1 > a.progress ? f(a, e) : b(a)
            }, a.delay) : b(a)
        },
        c = function(a, e, d) {
            a = { $scene: a, options: e, observer: d, start: null, progress: 0, delay: null, handler: null };
            a.delay = 1E3 / a.options.fps;
            return jQuery.extend(this, a)
        };
    c.prototype.play = function(a) { f(this, a) };
    c.prototype.stop = function() { b(this) };
    jQuery.fn.jplist.animation.Timeline = function(a, e, d) { return new c(a, e, d) }
})();
(function() {
    jQuery.fn.jplist.animation.fade = {};
    jQuery.fn.jplist.animation.fade.before = function(b, f, c, a) {};
    jQuery.fn.jplist.animation.fade.effect = function(b, f, c, a, e) { f.find(b.itemPath).css({ opacity: (100 - e) / 100 }) };
    jQuery.fn.jplist.animation.fade.after = function(b, f, c, a) {
        f.empty();
        a.css({ opacity: 1 });
        f.append(a)
    }
})();
(function() {
    var b = function(a, d, g, b) {
            a.observer.trigger(a.observer.events.setStatusesEvent, [g, d]);
            jQuery.isFunction(a.options.redrawCallback) && a.options.redrawCallback(d, b, g)
        },
        f = function(a, d, g) {
            var c = d.dataitemsToJqueryObject(),
                f = d.dataviewToJqueryObject(),
                h = !1,
                m, n = jQuery.extend(!0, {}, a.options, { duration: 0 });
            0 >= c.length || 0 >= f.length ? (a.$noResults.removeClass("jplist-hidden"), a.$itemsBox.addClass("jplist-hidden"), b(a, d, g, f)) : (a.$noResults.addClass("jplist-hidden"), a.$itemsBox.removeClass("jplist-hidden"),
                a.options.effect ? (a.history && (m = a.history.getLastStatus()) && !m.inAnimation && (h = !0), h = h ? n : a.options, jQuery.fn.jplist.animation.drawItems(h, a.$itemsBox, c, f, a.options.effect, a.timeline, function() { b(a, d, g, f) }, a.observer)) : (c.detach(), a.$itemsBox.append(f), b(a, d, g, f)))
        },
        c = function(a) { a.observer.on(a.observer.events.renderList, function(d, g, b) { f(a, g, b) }) },
        a = function(a, d, g, b) {
            a = { options: d, $root: a, observer: g, history: b, timeline: null, timelineZero: null, $itemsBox: a.find(d.itemsBox).eq(0), $noResults: a.find(d.noResults) };
            a.options.effect && (a.timeline = new jQuery.fn.jplist.animation.Timeline(a.$root, a.options, a.observer));
            c(a);
            return jQuery.extend(this, a)
        };
    jQuery.fn.jplist.ui.list.views.DOMView = function(e, d, g, b) { return new a(e, d, g, b) }
})();
(function() {
    var b = function(b) {
            b.observer.on(b.observer.events.renderStatusesEvent, function(a, e) {
                b.storage.save(e);
                b.collection && b.collection.applyStatuses(e);
                b.options.deepLinking && b.observer.trigger(b.observer.events.changeUrlDeepLinksEvent, [])
            })
        },
        f = function(c, a, e, d, g) {
            c = { options: a, observer: e, $root: c, history: g, storage: new jQuery.fn.jplist.dal.Storage(c, a, e), collection: null, listView: null };
            c.listView = new jQuery.fn.jplist.ui.list.views.DOMView(c.$root, c.options, c.observer, c.history);
            d = d.paths;
            a = c.$root.find(c.options.itemsBox).eq(0).find(c.options.itemPath);
            d = new jQuery.fn.jplist.domain.dom.collections.DataItemsCollection(c.options, c.observer, a, d);
            c.collection = d;
            b(c);
            return jQuery.extend(this, c)
        };
    jQuery.fn.jplist.ui.list.controllers.DOMController = function(b, a, e, d, g) { return new f(b, a, e, d, g) }
})();
(function() {
    var b = function(b) {
            b.observer.on(b.observer.events.renderList, function(a, e, d) {
                var g = "html";
                b.options.dataSource && (b.options.dataSource.server && b.options.dataSource.server.ajax) && ((g = b.options.dataSource.server.ajax.dataType) || (g = "html"));
                b.storage.save(d);
                jQuery.fn.jplist.dal.services.URIService.get(d, b.options, function(a, e, d, f) {
                    a = new jQuery.fn.jplist.domain.server.models.DataItemModel(a, g, f.responseText);
                    var n;
                    d = (new jQuery.fn.jplist.app.dto.StatusesDTOCollection(b.options, b.observer,
                        e)).getStatusesByAction("paging", e);
                    for (f = 0; f < d.length; f++) n = d[f], n.data.currentPage || (n.data.currentPage = 0), n = new jQuery.fn.jplist.domain.dom.services.PaginationService(n.data.currentPage, n.data.number, a.count), d[f].data.paging = n;
                    b.model.set(a, e)
                }, function(a) {}, function(a) {})
            })
        },
        f = function(c, a, e, d, g) {
            d = new jQuery.fn.jplist.dal.Storage(c, a, e);
            var k = jQuery({});
            k.$root = null;
            k.events = { modelChanged: "modelChanged" };
            g = { options: a, observer: e, history: g, storage: d, scopeObserver: k, $root: c, view: null, model: null };
            g.model = new jQuery.fn.jplist.ui.list.models.DataItemModel(null, null, g.scopeObserver);
            g.view = new jQuery.fn.jplist.ui.list.views.ServerView(c, a, e, g.scopeObserver, g.model, g.history);
            b(g);
            return jQuery.extend(this, g)
        };
    jQuery.fn.jplist.ui.list.controllers.ServerController = function(b, a, e, d, g) { return new f(b, a, e, d, g) }
})();
(function() {
    var b = function(a, d, g) {
            a.observer.trigger(a.observer.events.setStatusesEvent, [g, d]);
            a.options.deepLinking && a.observer.trigger(a.observer.events.changeUrlDeepLinksEvent, []);
            jQuery.isFunction(a.options.redrawCallback) && a.options.redrawCallback(d, g)
        },
        f = function(a, d, g) {
            var c = !1,
                f, h = jQuery.extend(!0, {}, a.options, { duration: 0 });
            !d.content || "" === jQuery.trim(d.content) ? (a.$noResults.removeClass("jplist-hidden"), a.$itemsBox.addClass("jplist-hidden")) : (a.$noResults.addClass("jplist-hidden"), a.$itemsBox.removeClass("jplist-hidden"));
            a.options.effect ? (a.history && (f = a.history.getLastStatus()) && !f.inAnimation && (c = !0), c = c ? h : a.options, jQuery.fn.jplist.animation.drawItems(c, a.$itemsBox, null, jQuery(d.content), a.options.effect, a.timeline, function() { b(a, d.content, g) }, a.observer)) : (a.options.dataSource && jQuery.isFunction(a.options.dataSource.render) ? a.options.dataSource.render(d, g) : a.$itemsBox.html(d.content), b(a, d.content, g))
        },
        c = function(a) {
            a.observer.on(a.observer.events.renderStatusesEvent, function(d, g) {
                a.$noResults.addClass("jplist-hidden");
                a.observer.trigger(a.observer.events.renderList, [a, g])
            });
            a.scopeObserver.on(a.scopeObserver.events.modelChanged, function(d, g, b) {
                a.$preloader && a.$preloader.addClass("jplist-hidden");
                a.$itemsBox.removeClass("jplist-hidden");
                f(a, g, b)
            })
        },
        a = function(a, d, g, b, f, h) {
            a = { options: d, $root: a, observer: g, scopeObserver: b, model: f, history: h, $itemsBox: a.find(d.itemsBox).eq(0), $noResults: a.find(d.noResults), $preloader: null, timeline: null };
            a.options.effect && (a.timeline = new jQuery.fn.jplist.animation.Timeline(a.$root, a.options,
                a.observer));
            c(a);
            return jQuery.extend(this, a)
        };
    jQuery.fn.jplist.ui.list.views.ServerView = function(e, d, g, b, c, f) { return new a(e, d, g, b, c, f) }
})();
(function() {
    jQuery.fn.jplist.ui.list.models.DataItemModel = function(b, f, c) {
        this.dataItem = b;
        this.statuses = f;
        this.scopeObserver = c
    };
    jQuery.fn.jplist.ui.list.models.DataItemModel.prototype.set = function(b, f) {
        this.dataItem = b;
        this.statuses = f;
        this.scopeObserver.trigger(this.scopeObserver.events.modelChanged, [b, f])
    }
})();
(function() {
    var b = function(a) {
            var e = jQuery(window).scrollTop(),
                b;
            b = Number(a.data("top"));
            isNaN(b) || (e > b ? a.addClass("jplist-sticky") : a.removeClass("jplist-sticky"))
        },
        f = function(a, e) {
            e.each(function() {
                var a = jQuery(this),
                    e = a.offset().top;
                a.data("top", e);
                b(a)
            });
            jQuery(window).scroll(function() { e.each(function() { b(jQuery(this)) }) })
        },
        c = function(a) {
            a.observer.on(a.observer.events.setStatusesEvent, function(e, b, c) {
                a.controls.setStatuses(b, !1);
                a.history.addList(b);
                jQuery.fn.jplist.info(a.options, "Set statuses event: ",
                    b)
            });
            a.observer.on(a.observer.events.forceRenderStatusesEvent, function(e, b) {
                var c;
                c = a.controls.getStatuses(b);
                jQuery.fn.jplist.info(a.options, "Force render statuses event: ", c);
                a.observer.trigger(a.observer.events.renderStatusesEvent, [c])
            });
            a.observer.on(a.observer.events.restoreEvent, function(e, b) {
                a.controls.setStatuses(b, !0);
                jQuery.fn.jplist.info(a.options, "Restore from storage event: ", b);
                a.observer.trigger(a.observer.events.renderStatusesEvent, [b])
            });
            a.observer.on(a.observer.events.statusEvent,
                function(e, b) {
                    var c;
                    b.isAnimateToTop && (c = jQuery(a.options.animateToTop).offset().top, jQuery("html, body").animate({ scrollTop: c }, a.options.animateToTopDuration));
                    c = a.controls.merge(!1, b);
                    jQuery.fn.jplist.info(a.options, "Status event: ", c);
                    a.observer.trigger(a.observer.events.renderStatusesEvent, [c])
                });
            a.observer.on(a.observer.events.changeUrlDeepLinksEvent, function(e) {
                e = "";
                if (a.options.deepLinking) {
                    e = a.controls.getDeepLinksUrl();
                    jQuery.fn.jplist.info(a.options, "Change url (deep links event): ", e);
                    e = jQuery.trim(e.replace("#", ""));
                    var b;
                    e = "" === e ? "#" : "#" + e;
                    window.location.hash !== e && (b = window.location.href.indexOf("#"), e = -1 == b ? window.location.href + e : window.location.href.substring(0, b) + e, "replaceState" in window.history ? window.history.replaceState("", "", e) : window.location.replace(e))
                }
            });
            a.observer.on(a.observer.events.setDeepLinksEvent, function(e) {
                var b = window.decodeURIComponent(jQuery.trim(window.location.hash.replace("#", ""))),
                    c = !1;
                e = [];
                var c = [],
                    f, m = [],
                    n;
                if (a.options.deepLinking && "" !== jQuery.trim(b)) {
                    c =
                        b.split(a.options.delimiter1);
                    for (b = 0; b < c.length; b++) f = c[b], n = f.split("="), 2 === n.length && (f = n[0], n = n[1], f = f.split(a.options.delimiter0), 2 === f.length && (f = { controlName: f[0], propName: f[1], propValue: n }, m.push(f)))
                }
                jQuery.fn.jplist.info(a.options, "Set deep link event: ", m);
                0 >= m.length ? (c = "cookies" === a.options.storage || "localstorage" === a.options.storage && jQuery.fn.jplist.dal.services.LocalStorageService.supported()) ? ("cookies" === a.options.storage && (e = jQuery.fn.jplist.dal.services.CookiesService.restoreCookies(a.options.storageName)),
                    "localstorage" === a.options.storage && jQuery.fn.jplist.dal.services.LocalStorageService.supported() && (e = jQuery.fn.jplist.dal.services.LocalStorageService.restore(a.options.storageName)), 0 < e.length ? a.observer.trigger(a.observer.events.restoreEvent, [e]) : a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])) : a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!0]) : a.controls.setDeepLinks(m)
            });
            a.$root.find(a.options.iosBtnPath).on("click", function() { jQuery(this).next(a.options.panelPath).toggleClass("jplist-ios-show") })
        },
        a = function(a) {
            var e;
            e = [];
            e = a.$root.find(a.options.panelPath).find("[data-control-type]");
            a.controls = new jQuery.fn.jplist.ui.panel.collections.ControlsCollection(a.options, a.observer, a.history, a.$root, e);
            a.paths = a.controls.getPaths();
            jQuery.fn.jplist.logEnabled(a.options) && (e = jQuery.map(a.paths, function(a, e) { return a && a.jqPath ? a.jqPath : "" }), jQuery.fn.jplist.info(a.options, "Panel paths: ", e.join(", ")))
        },
        e = function(e, g, b, l) {
            e = { options: g, $root: e, history: b, observer: l, $sticky: null, paths: null, controls: null };
            a(e);
            e.$sticky = e.$root.find('[data-sticky="true"]');
            0 < e.$sticky.length && f(e, e.$sticky);
            c(e);
            return jQuery.extend(this, e)
        };
    jQuery.fn.jplist.ui.panel.controllers.PanelController = function(a, g, b, c) {
        a = new e(a, g, b, c);
        this.paths = a.paths;
        this.history = a.history;
        this.controls = a.controls
    }
})();
(function() {
    var b = function(b, c, a, e) { return jQuery.extend(this, { options: b, observer: c, history: a, $root: e }) };
    b.prototype.create = function(b) {
        var c = null,
            a, e, d, g, k, l, h, m;
        a = b.attr("data-control-type");
        k = g = d = !0;
        l = !1;
        m = h = null;
        (e = b.attr("data-control-deep-link")) && "false" === e.toString() && (d = !1);
        (e = b.attr("data-control-storage")) && "false" === e.toString() && (g = !1);
        (e = b.attr("data-control-animation")) && "false" === e.toString() && (k = !1);
        (e = b.attr("data-control-animate-to-top")) && "true" === e.toString() && (l = !0);
        if (e = this.options.controlTypes[a]) e.className &&
            (h = jQuery.fn.jplist.ui.controls[e.className]), e.options && (m = e.options);
        a = { type: a, action: b.attr("data-control-action"), name: b.attr("data-control-name"), inDeepLinking: d, inStorage: g, inAnimation: k, isAnimateToTop: l, controlType: e, controlTypeClass: h, controlOptions: m, paths: [] };
        a = jQuery.extend(!0, a, { $control: b, history: this.history, observer: this.observer, options: this.options, $root: this.$root });
        a.controlTypeClass && jQuery.isFunction(a.controlTypeClass) && (c = new a.controlTypeClass(a));
        return c
    };
    jQuery.fn.jplist.ui.panel.ControlFactory =
        function(f, c, a, e) { return new b(f, c, a, e) }
})();
(function() {
    var b = jQuery.fn.jplist.domain,
        f = function(a, d) { for (var g, b = 0; b < a.length; b++) g = a[b], g.name === d.name && g.action === d.action && jQuery.extend(!0, g, d); return a },
        c = function(a, d) {
            for (var g = [], b, c, f, m = 0; m < a.controls.length; m++)
                if (b = a.controls[m], jQuery.isFunction(b.getStatus) && (b = b.getStatus(d))) {
                    c = -1;
                    f = void 0;
                    for (var n = 0; n < g.length; n++)
                        if (f = g[n], f.name === b.name) { c = n; break } - 1 != c ? (f = g[c], f.action == b.action && f.type !== b.type && jQuery.extend(!0, g[c], b)) : g.push(b)
                }
            return g
        },
        a = function(a, d, g, b, c) {
            c = {
                options: a,
                observer: d,
                history: g,
                $root: b,
                controlFactory: null,
                $controls: c,
                controls: []
            };
            c.controlFactory = new jQuery.fn.jplist.ui.panel.ControlFactory(a, d, g, b);
            for (a = 0; a < c.$controls.length; a++) g = c.$controls.eq(a), d = c, (g = d.controlFactory.create(g)) && d.controls.push(g);
            return jQuery.extend(this, c)
        };
    a.prototype.merge = function(a, d) {
        var g;
        g = c(this, a);
        return g = f(g, d)
    };
    a.prototype.setDeepLinks = function(a) {
        var d, g, b, l = [],
            h;
        for (h = 0; h < a.length; h++) {
            d = a[h];
            g = d.controlName;
            var m = [];
            b = void 0;
            for (var n = 0; n < this.controls.length; n++) b =
                this.controls[n], b.name === g && m.push(b);
            g = m;
            for (m = 0; m < g.length; m++) b = g[m], jQuery.isFunction(b.getStatusByDeepLink) && (b = b.getStatusByDeepLink(d.propName, d.propValue)) && l.push(b)
        }
        a = c(this, !1);
        for (h = 0; h < l.length; h++) f(a, l[h]);
        this.observer.trigger(this.observer.events.renderStatusesEvent, [a])
    };
    a.prototype.setStatuses = function(a, d) {
        for (var b, c, f = 0; f < a.length; f++) {
            b = a[f];
            c = b.name;
            for (var h = b.action, m = [], n = void 0, p = 0; p < this.controls.length; p++) n = this.controls[p], n.name === c && n.action === h && m.push(n);
            c = m;
            for (h =
                0; h < c.length; h++) jQuery.isFunction(c[h].setStatus) && c[h].setStatus(b, d)
        }
    };
    a.prototype.getDeepLinksUrl = function() {
        var a;
        a = "";
        for (var d = [], b = "", c = 0; c < this.controls.length; c++) a = this.controls[c], jQuery.isFunction(a.getDeepLink) && (b = jQuery.trim(a.getDeepLink())), "" !== b && -1 === jQuery.inArray(b, d) && d.push(b);
        return a = d.join(this.options.delimiter1)
    };
    a.prototype.getStatuses = function(a) { return c(this, a) };
    a.prototype.getPaths = function() {
        var a, d = [],
            g;
        g = new b.dom.collections.DataItemMemberPathCollection(this.options,
            this.observer);
        for (var c = 0; c < this.controls.length; c++) a = this.controls[c], jQuery.isFunction(a.getPaths) && (a.getPaths(d), g.addRange(d));
        return g.paths
    };
    a.prototype.add = function(a) {
        (a = this.controlFactory.create(a)) && this.controls.push(a)
    };
    jQuery.fn.jplist.ui.panel.collections.ControlsCollection = function(e, d, b, c, f) { return new a(e, d, b, c, f) }
})();
(function() {
    var b = function(b, c, a) {
        b = { options: c, observer: a, $root: b, isStorageEnabled: !1 };
        b.isStorageEnabled = "cookies" === b.options.storage || "localstorage" === b.options.storage && jQuery.fn.jplist.dal.services.LocalStorageService.supported();
        return jQuery.extend(this, b)
    };
    b.prototype.save = function(b) {
        this.isStorageEnabled && ("cookies" === this.options.storage && jQuery.fn.jplist.dal.services.CookiesService.saveCookies(b, this.options.storageName, this.options.cookiesExpiration), "localstorage" === this.options.storage &&
            jQuery.fn.jplist.dal.services.LocalStorageService.supported() && jQuery.fn.jplist.dal.services.LocalStorageService.save(b, this.options.storageName))
    };
    jQuery.fn.jplist.dal.Storage = function(f, c, a) { return new b(f, c, a) }
})();
(function() {
    jQuery.fn.jplist.dal.services.CookiesService = {};
    jQuery.fn.jplist.dal.services.CookiesService.setCookie = function(b, f, c) {
        f = escape(f);
        var a = new Date;
        c = Number(c); - 1 == c || isNaN(c) ? document.cookie = b + "=" + f + ";path=/;" : (a.setMinutes(a.getMinutes() + c), document.cookie = b + "=" + f + ";path=/; expires=" + a.toUTCString())
    };
    jQuery.fn.jplist.dal.services.CookiesService.getCookie = function(b) {
        var f, c, a, e = null;
        a = document.cookie.split(";");
        for (var d = 0; d < a.length; d++)
            if (f = a[d].substr(0, a[d].indexOf("=")), c = a[d].substr(a[d].indexOf("=") +
                    1), f = f.replace(/^\s+|\s+$/g, ""), f == b) { e = unescape(c); break }
        return e
    };
    jQuery.fn.jplist.dal.services.CookiesService.saveCookies = function(b, f, c) {
        b = JSON.stringify(b);
        jQuery.fn.jplist.dal.services.CookiesService.setCookie(f, b, c)
    };
    jQuery.fn.jplist.dal.services.CookiesService.restoreCookies = function(b) {
        var f = [];
        (b = jQuery.fn.jplist.dal.services.CookiesService.getCookie(b)) && (f = jQuery.parseJSON(b));
        f || (f = []);
        return f
    }
})();
(function() {
    jQuery.fn.jplist.dal.services.LocalStorageService = {};
    jQuery.fn.jplist.dal.services.LocalStorageService.supported = function() { try { return "localStorage" in window && null !== window.localStorage } catch (b) { return !1 } };
    jQuery.fn.jplist.dal.services.LocalStorageService.save = function(b, f) {
        var c;
        c = JSON.stringify(b);
        window.localStorage[f] = c
    };
    jQuery.fn.jplist.dal.services.LocalStorageService.restore = function(b) {
        var f = [];
        (b = window.localStorage[b]) && (f = jQuery.parseJSON(b));
        f || (f = []);
        return f
    }
})();
(function() {
    jQuery.fn.jplist.dal.services.URIService = {};
    jQuery.fn.jplist.dal.services.URIService.get = function(b, f, c, a, e) {
        var d = f.dataSource.server;
        d.ajax.data || (d.ajax.data = {});
        d.ajax.data.statuses = encodeURIComponent(JSON.stringify(b, function(a, e) { return e && e.nodeType ? null : e }));
        jQuery.ajax(d.ajax).done(function(a, e, f) {
            jQuery.isFunction(c) && c(a, b, e, f);
            jQuery.isFunction(d.serverOkCallback) && d.serverOkCallback(a, b, e, f)
        }).fail(function() {
            jQuery.isFunction(a) && a(b);
            jQuery.isFunction(d.serverErrorCallback) &&
                d.serverErrorCallback(b)
        }).always(function() { jQuery.isFunction(e) && e(b) })
    }
})();
(function() {
    var b = function(a, d) {
            var b = null,
                c, f;
            c = a.$control.data("storage-status");
            if (d && c) b = c;
            else switch (d ? (c = a.$control.find('li:has(span[data-default="true"])').eq(0), 0 >= c.length && (c = a.$control.find("li:eq(0)"))) : c = a.$control.find(".active"), c = c.find("span"), a.action) {
                case "paging":
                    b = new jQuery.fn.jplist.ui.controls.DropdownPaginationDTO(c.attr("data-number"));
                    b = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, b, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking);
                    break;
                case "sort":
                    (b =
                        a.$control.attr("data-datetime-format")) || (b = "");
                    (f = a.$control.attr("data-ignore")) || (f = "");
                    b = new jQuery.fn.jplist.ui.controls.DropdownSortDTO(c.attr("data-path"), c.attr("data-type"), c.attr("data-order"), b, f);
                    b = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, b, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking);
                    break;
                case "filter":
                    b = new jQuery.fn.jplist.ui.controls.DropdownFilterDTO(c.attr("data-path"), c.attr("data-type")), b = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action,
                        a.type, b, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking)
            }
            return b
        },
        f = function(a, d) {
            var b, c, f;
            a.$control.find("span").each(function() {
                b = jQuery(this).attr("data-path");
                c = jQuery(this).attr("data-type");
                b && "" !== jQuery.trim(b) && (f = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b, c), d.push(f))
            })
        },
        c = function(a) {
            var d = jQuery(document).find('[data-control-type="drop-down"]');
            jQuery(document).click(function() { d.find("ul").hide() });
            jQuery(document).off("jplist_dropdown_close").on("jplist_dropdown_close",
                function(a, e) { d.each(function() { jQuery(this).is(e) || jQuery(this).find("ul").hide() }) });
            a.$control.find(".jplist-dd-panel").off().click(function(a) {
                var e;
                a.stopPropagation();
                a = jQuery(this).parents("[data-control-type]");
                e = a.find("ul");
                jQuery(document).trigger("jplist_dropdown_close", [a]);
                e.is(":visible") ? e.hide() : e.show()
            });
            a.$control.find("li").off().click(function() {
                var d, c, f, h;
                d = b(a, !1);
                h = jQuery(this).find("span");
                c = h.attr("data-path");
                f = h.attr("data-number");
                c ? (d.data.path = c, d.data.type = h.attr("data-type"),
                    d.data.order = h.attr("data-order")) : f && (d.data.number = f);
                a.history.addStatus(d);
                a.observer.trigger(a.observer.events.statusEvent, [d])
            })
        },
        a = function(a) {
            var d;
            d = a.$control.find("li:eq(0)");
            d.addClass("active");
            d = d.find("span");
            0 >= a.$control.find(".jplist-dd-panel").length && a.$control.prepend('<div class="jplist-dd-panel">' + d.text() + "</div>");
            c(a);
            return jQuery.extend(this, a)
        };
    a.prototype.getStatus = function(a) { return b(this, a) };
    a.prototype.getDeepLink = function() {
        var a = "",
            d;
        if (this.inDeepLinking && (d = b(this, !1), d.data)) switch (this.action) {
            case "paging":
                if (jQuery.isNumeric(d.data.number) || "all" === d.data.number) a = this.name + this.options.delimiter0 + "number=" + d.data.number;
                break;
            case "sort":
                d.data.path && (d.data.type && d.data.order) && (a = this.name + this.options.delimiter0 + "path" + this.options.delimiter2 + "type" + this.options.delimiter2 + "order=" + d.data.path + this.options.delimiter2 + d.data.type + this.options.delimiter2 + d.data.order);
                break;
            case "filter":
                d.data.path && (a = this.name + this.options.delimiter0 + "path=" + d.data.path)
        }
        return a
    };
    a.prototype.getStatusByDeepLink = function(a, d) {
        var g;
        a: {
            g = null;
            var c;
            if (this.inDeepLinking) {
                if ("number" !== a && a !== "path" + this.options.delimiter2 + "type" + this.options.delimiter2 + "order" && "path" !== a) { g = null; break a }
                g = b(this, !0);
                if (g.data) switch (this.action) {
                    case "paging":
                        "number" === a && jQuery.isNumeric(g.data.number) && (g.data.number = d);
                        break;
                    case "sort":
                        a === "path" + this.options.delimiter2 + "type" + this.options.delimiter2 + "order" && (c = d.split(this.options.delimiter2), 3 === c.length && (g.data.path = c[0], g.data.type =
                            c[1], g.data.order = c[2]));
                        break;
                    case "filter":
                        "path" === a && g.data.path && (g.data.path = d)
                }
            }
        }
        return g
    };
    a.prototype.getPaths = function(a) { f(this, a) };
    a.prototype.setStatus = function(a, d) {
        var b;
        b = null;
        this.inStorage && d && this.$control.data("storage-status", a);
        !this.inStorage && d && (b = this.$control.find('li:has(span[data-default="true"])').eq(0), 0 >= b.length && (b = this.$control.find("li:eq(0)")), b = b.find("span"));
        switch (this.action) {
            case "filter":
                !this.inStorage && d && 0 < b.length ? (a.data.path = b.attr("data-path"), a.data.type =
                    b.attr("data-type"), this.history.addStatus(a), this.observer.trigger(this.observer.events.statusEvent, [a])) : (this.$control.find("li").removeClass("active"), b = this.$control.find('li:has([data-path="' + a.data.path + '"])'), b.addClass("active"), this.$control.find(".jplist-dd-panel").text(b.eq(0).text()));
                break;
            case "sort":
                !this.inStorage && d && 0 < b.length ? (a.data.path = b.attr("data-path"), a.data.type = b.attr("data-type"), a.data.order = b.attr("data-order"), this.history.addStatus(a), this.observer.trigger(this.observer.events.statusEvent, [a])) : (this.$control.find("li").removeClass("active"), b = "default" == a.data.path ? this.$control.find('li:has([data-path="default"])') : this.$control.find('li:has([data-path="' + a.data.path + '"][data-type="' + a.data.type + '"][data-order="' + a.data.order + '"])'), b.addClass("active"), this.$control.find(".jplist-dd-panel").text(b.eq(0).text()));
                break;
            case "paging":
                !this.inStorage && d && 0 < b.length ? (a.data.number = b.attr("data-number"), this.history.addStatus(a), this.observer.trigger(this.observer.events.statusEvent, [a])) : (this.$control.find("li").removeClass("active"), b = this.$control.find('li:has([data-number="' + a.data.number + '"])'), 0 === b.length && (b = this.$control.find('li:has([data-number="all"])')), b.addClass("active"), this.$control.find(".jplist-dd-panel").text(b.eq(0).text()))
        }
    };
    jQuery.fn.jplist.ui.controls.Dropdown = function(e) { return new a(e) }
})();
(function() {
    var b = function(a, d) {
            var b, c = null,
                f = "",
                h = "";
            b = a.$control.data("storage-status");
            if (d && b) c = b;
            else switch (d ? (b = a.$control.find('option[data-default="true"]').eq(0), 0 >= b.length && (b = a.$control.find("option").eq(0))) : b = a.$control.find("option:selected"), a.action) {
                case "paging":
                    c = new jQuery.fn.jplist.ui.controls.DropdownPaginationDTO(b.attr("data-number"));
                    c = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, c, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking);
                    break;
                case "sort":
                    f =
                        a.$control.attr("data-datetime-format") || "";
                    h = a.$control.attr("data-ignore") || "";
                    c = new jQuery.fn.jplist.ui.controls.DropdownSortDTO(b.attr("data-path"), b.attr("data-type"), b.attr("data-order"), f, h);
                    c = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, c, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking);
                    break;
                case "filter":
                    c = new jQuery.fn.jplist.ui.controls.DropdownFilterDTO(b.attr("data-path"), b.attr("data-type")), c = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type,
                        c, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking)
            }
            return c
        },
        f = function(a, b) {
            var g, c, f;
            a.$control.find("option").each(function() {
                g = jQuery(this).attr("data-path");
                c = jQuery(this).attr("data-type");
                g && (f = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(g, c), b.push(f))
            })
        },
        c = function(a) {
            a.$control.change(function() {
                var d, c, f;
                d = b(a, !1);
                c = jQuery(this).find("option:selected");
                f = c.attr("data-path");
                c = c.attr("data-number");
                f ? (d.data.path = f, d.data.type = jQuery(this).attr("data-type"),
                    d.data.order = jQuery(this).attr("data-order")) : c && (d.data.number = c);
                a.history.addStatus(d);
                a.observer.trigger(a.observer.events.statusEvent, [d])
            })
        },
        a = function(a) { c(a); return jQuery.extend(this, a) };
    a.prototype.getStatus = function(a) { return b(this, a) };
    a.prototype.getDeepLink = function() {
        var a = "",
            d;
        if (this.inDeepLinking && (d = b(this, !1), d.data)) switch (this.action) {
            case "paging":
                jQuery.isNumeric(d.data.number) && (a = this.name + this.options.delimiter0 + "number=" + d.data.number);
                break;
            case "sort":
                d.data.path && (d.data.type &&
                    d.data.order) && (a = this.name + this.options.delimiter0 + "path" + this.options.delimiter2 + "type" + this.options.delimiter2 + "order=" + d.data.path + this.options.delimiter2 + d.data.type + this.options.delimiter2 + d.data.order);
                break;
            case "filter":
                d.data.path && (a = this.name + this.options.delimiter0 + "path=" + d.data.path)
        }
        return a
    };
    a.prototype.getStatusByDeepLink = function(a, d) {
        var c = null,
            f;
        if (this.inDeepLinking && (c = b(this, !0), c.data)) switch (this.action) {
            case "paging":
                "number" === a && jQuery.isNumeric(c.data.number) && (c.data.number =
                    d);
                break;
            case "sort":
                a === "path" + this.options.delimiter2 + "type" + this.options.delimiter2 + "order" && (f = d.split(this.options.delimiter2), 3 === f.length && (c.data.path = f[0], c.data.type = f[1], c.data.order = f[2]));
                break;
            case "filter":
                "path" === a && c.data.path && (c.data.path = d)
        }
        return c
    };
    a.prototype.getPaths = function(a) { f(this, a) };
    a.prototype.setStatus = function(a, b) {
        var c;
        this.inStorage && b && this.$control.data("storage-status", a);
        switch (this.action) {
            case "filter":
                if (!this.inStorage && b) a.data.path = "default", this.history.addStatus(a),
                    this.observer.trigger(this.observer.events.statusEvent, [a]);
                else if ((c = this.$control.find('option[data-path="' + a.data.path + '"]')) && 0 < c.length) c.get(0).selected = !0;
                break;
            case "sort":
                !this.inStorage && b ? (a.data.path = "default", this.history.addStatus(a), this.observer.trigger(this.observer.events.statusEvent, [a])) : (c = "default" == a.data.path ? this.$control.find('option[data-path="' + a.data.path + '"]') : this.$control.find('option[data-path="' + a.data.path + '"][data-type="' + a.data.type + '"][data-order="' + a.data.order +
                    '"]'), 0 < c.length && (c.get(0).selected = !0));
                break;
            case "paging":
                c = this.$control.find('option[data-number="' + a.data.number + '"]'), 0 === c.length && (c = this.$control.find('option[data-number="all"]')), c.get(0).selected = !0
        }
    };
    jQuery.fn.jplist.ui.controls.Select = function(b) { return new a(b) }
})();
(function() { jQuery.fn.jplist.ui.controls.DropdownFilterDTO = function(b, f) { return { path: b, type: f, filterType: "path" } } })();
(function() { jQuery.fn.jplist.ui.controls.DropdownPaginationDTO = function(b) { return { number: b } } })();
(function() { jQuery.fn.jplist.ui.controls.DropdownSortDTO = function(b, f, c, a, e) { return { path: b, type: f, order: c, dateTimeFormat: a, ignore: e } } })();
(function() {
    var b = function(a, b) {
            var d;
            d = null;
            var c;
            c = !1;
            d = a.$control.data("storage-status");
            if (!b || !d) {
                d = a.$control.find("button[data-active]").eq(0);
                0 >= d.length && (d = a.$control.find("button").eq(0));
                d = b ? 0 : Number(d.attr("data-number")) || 0;
                if (c = "true" === a.$control.attr("data-jump-to-start") || a.controlOptions.jumpToStart)(c = a.history.getLastStatus()) && ("pagination" !== c.type && "views" !== c.type) && (d = 0);
                c = Number(a.$control.attr("data-items-per-page")) || 0;
                d = new jQuery.fn.jplist.ui.controls.PaginationDTO(d,
                    c);
                d = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, d, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking)
            }
            return d
        },
        f = function(a) {
            a.$control.on("click", "button", function() {
                var e, d = null;
                e = Number(jQuery(this).attr("data-number")) || 0;
                d = b(a, !1);
                d.data.currentPage = e;
                a.history.addStatus(d);
                a.observer.trigger(a.observer.events.statusEvent, [d])
            })
        },
        c = function(a) {
            a.params = { view: new jQuery.fn.jplist.ui.controls.PaginationView(a.$control, a.controlOptions) };
            f(a);
            return jQuery.extend(this,
                a)
        };
    c.prototype.getStatus = function(a) { return b(this, a) };
    c.prototype.getDeepLink = function() {
        var a = "",
            e;
        this.inDeepLinking && (e = b(this, !1), e.data && (jQuery.isNumeric(e.data.currentPage) && (a = this.name + this.options.delimiter0 + "currentPage=" + e.data.currentPage), jQuery.isNumeric(e.data.number) && (a = this.name + this.options.delimiter0 + "number=" + e.data.number)));
        return a
    };
    c.prototype.getStatusByDeepLink = function(a, e) {
        var d;
        a: if (d = null, this.inDeepLinking) {
                if ("currentPage" !== a) { d = null; break a }
                d = b(this, !0);
                d.data &&
                    "currentPage" === a && (d.data.currentPage = e)
            }
        return d
    };
    c.prototype.setStatus = function(a, b) { this.inStorage && b && this.$control.data("storage-status", a);!this.inStorage && b ? (a.data.currentPage = 0, this.history.addStatus(a), this.observer.trigger(this.observer.events.statusEvent, [a])) : a.data && a.data.paging && this.params.view.build(a.data.paging) };
    jQuery.fn.jplist.ui.controls.Pagination = function(a) { return new c(a) }
})();
(function() {
    var b = function(b, a, e) {
            var d;
            d = '<div class="jplist-pagesbox" data-type="pagesbox">';
            for (var g = b; g < a; g++) d += '<button type="button" data-type="page" ', g === e && (d += ' class="jplist-current" data-active="true" '), b = g + 1, d += ' data-number="' + g + '" ', d += ">" + b + "</button> ";
            return d + "</div>"
        },
        f = function(b, a) {
            var e = { $control: b, options: a, $pagingprev: null, $pagingmid: null, $pagingnext: null, $jplistFirst: null, $jplistPrev: null, $jplistNext: null, $jplistLast: null, mode: b.attr("data-mode") },
                d, g, f, l;
            d = e.$control.attr("data-prev") ||
                e.options.prevArrow;
            g = e.$control.attr("data-next") || e.options.nextArrow;
            f = e.$control.attr("data-first") || e.options.firstArrow;
            l = e.$control.attr("data-last") || e.options.lastArrow;
            e.$control.html('<div class="jplist-pagingprev" data-type="pagingprev"></div><div class="jplist-pagingmid" data-type="pagingmid"></div><div class="jplist-pagingnext" data-type="pagingnext"></div>');
            e.$pagingprev = e.$control.find('[data-type="pagingprev"]');
            e.$pagingmid = e.$control.find('[data-type="pagingmid"]');
            e.$pagingnext =
                e.$control.find('[data-type="pagingnext"]');
            e.$pagingprev.html('<button type="button" class="jplist-first" data-number="0" data-type="first">' + f + '</button><button type="button" class="jplist-prev" data-type="prev">' + d + "</button>");
            e.$pagingnext.html('<button type="button" class="jplist-next" data-type="next">' + g + '</button><button type="button" class="jplist-last" data-type="last">' + l + "</button>");
            e.$jplistFirst = e.$pagingprev.find('[data-type="first"]');
            e.$jplistPrev = e.$pagingprev.find('[data-type="prev"]');
            e.$jplistNext = e.$pagingnext.find('[data-type="next"]');
            e.$jplistLast = e.$pagingnext.find('[data-type="last"]');
            return jQuery.extend(this, e)
        };
    f.prototype.build = function(c) {
        if (0 <= c.currentPage && c.currentPage < c.pagesNumber) {
            this.$control.removeClass("jplist-hidden");
            switch (this.mode) {
                case "google-like":
                    var a = "",
                        e;
                    e = Number(this.$control.attr("data-range")) || this.options.range;
                    a = c.currentPage - Math.floor((e - 1) / 2);
                    0 > a && (a = 0);
                    e = a + e;
                    e > c.pagesNumber && (e = c.pagesNumber);
                    a = b(a, e, c.currentPage);
                    this.$pagingmid.html(a);
                    break;
                default:
                    var d;
                    d = Number(this.$control.attr("data-range")) || this.options.range;
                    e = Math.floor(c.currentPage / d);
                    a = d * (e + 1);
                    a > c.pagesNumber && (a = c.pagesNumber);
                    a = b(d * e, a, c.currentPage);
                    this.$pagingmid.html(a)
            }
            this.$jplistPrev.attr("data-number", c.prevPage).removeClass("jplist-current");
            this.$jplistNext.attr("data-number", c.nextPage).removeClass("jplist-current");
            this.$jplistLast.attr("data-number", c.pagesNumber - 1).removeClass("jplist-current");
            1 >= c.pagesNumber ? this.$control.addClass("jplist-one-page") :
                this.$control.removeClass("jplist-one-page")
        } else this.$control.addClass("jplist-hidden");
        0 === c.currentPage ? this.$pagingprev.addClass("jplist-hidden") : this.$pagingprev.removeClass("jplist-hidden");
        c.currentPage == c.pagesNumber - 1 ? this.$pagingnext.addClass("jplist-hidden") : this.$pagingnext.removeClass("jplist-hidden")
    };
    jQuery.fn.jplist.ui.controls.PaginationView = function(b, a) { return new f(b, a) }
})();
(function() {
    jQuery.fn.jplist.ui.controls.PaginationDTO = function(b, f) {
        var c = { currentPage: b, paging: null };
        f && (c.number = f);
        return c
    }
})();
(function() {
    var b = function(b) { return jQuery.extend(this, b) };
    b.prototype.setStatus = function(b, c) {
        var a, e;
        a = b.data.paging;
        !a || 0 >= a.pagesNumber ? (this.$control.html(""), this.$control.addClass("jplist-empty")) : (this.$control.removeClass("jplist-empty"), e = this.$control.attr("data-type"), e = e.replace("{current}", a.currentPage + 1), e = e.replace("{pages}", a.pagesNumber), e = e.replace("{start}", a.start + 1), e = e.replace("{end}", a.end), e = e.replace("{all}", a.itemsNumber), this.$control.html(e))
    };
    jQuery.fn.jplist.ui.controls.PaginationInfo =
        function(f) { return new b(f) }
})();
(function() {
    var b = function(b) { b.$control.on("click", function() { b.observer.trigger(b.observer.events.forceRenderStatusesEvent, [!0]) }) },
        f = function(c) { b(c); return jQuery.extend(this, c) };
    jQuery.fn.jplist.ui.controls.Reset = function(b) { return new f(b) }
})();
(function() {
    var b = function(a, b) {
            var d, c, f;
            d = "";
            c = a.$control.data("storage-status");
            b && c ? d = c : (c = a.$control.attr("data-path"), f = b ? "" : a.$control.val(), a.controlOptions && a.controlOptions.ignore && (d = a.controlOptions.ignore), d = new jQuery.fn.jplist.ui.controls.TextboxDTO(c, f, d), d = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, d, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking));
            return d
        },
        f = function(a) {
            var e = "keyup";
            if (a.params.$button && 0 < a.params.$button.length) a.params.$button.on("click",
                function(d) {
                    d.preventDefault();
                    a.history.addStatus(b(a, !1));
                    a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1]);
                    return !1
                });
            else a.controlOptions && a.controlOptions.eventName && (e = a.controlOptions.eventName), a.$control.on(e, function() {
                a.history.addStatus(b(a, !1));
                a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
            })
        },
        c = function(a) {
            a.params = { path: a.$control.attr("data-path"), dataButton: a.$control.attr("data-button"), $button: null };
            a.params.dataButton && (a.params.$button =
                jQuery(a.params.dataButton));
            f(a);
            return jQuery.extend(this, a)
        };
    c.prototype.getStatus = function(a) { return b(this, a) };
    c.prototype.getDeepLink = function() {
        var a = "",
            e;
        this.inDeepLinking && (e = b(this, !1), e.data && "" !== jQuery.trim(e.data.value) && (a = this.name + this.options.delimiter0 + "value=" + e.data.value));
        return a
    };
    c.prototype.getStatusByDeepLink = function(a, e) {
        var d = null;
        this.inDeepLinking && (d = b(this, !0), d.data && "value" === a && (d.data.value = e));
        return d
    };
    c.prototype.getPaths = function(a) {
        var b;
        b = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(this.params.path,
            null);
        a.push(b)
    };
    c.prototype.setStatus = function(a, b) { this.inStorage && b && this.$control.data("storage-status", a);!this.inStorage && b ? (a.data.value = "", this.observer.trigger(this.observer.events.statusEvent, [a])) : a.data && (a.data.value || (a.data.value = ""), this.$control.val(a.data.value)) };
    jQuery.fn.jplist.ui.controls.Textbox = function(a) { return new c(a) }
})();
(function() { jQuery.fn.jplist.ui.controls.TextboxDTO = function(b, f, c) { return { path: b, ignore: c, value: f, filterType: "TextFilter" } } })();
(function() {
    var b = function(a, b) {
            var d;
            d = null;
            d = a.params.defaultView;
            b && a.params.storageStatus ? d = a.params.storageStatus : (d = b ? a.params.defaultView : a.params.currentView, d = new jQuery.fn.jplist.ui.controls.ViewsDTO(d), d = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, d, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking));
            return d
        },
        f = function(a) {
            a.params.$buttons.on("click", function() {
                var e = jQuery(this).attr("data-type");
                a.$root.removeClass(a.params.types.join(" ")).addClass(e);
                a.params.currentView =
                    e;
                a.history.addStatus(b(a, !1));
                a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
            })
        },
        c = function(a) {
            a.params = { $buttons: a.$control.find("[data-type]"), storageStatus: null, defaultView: a.$control.attr("data-default") || "list-view", currentView: a.$control.attr("data-default") || "list-view", types: [] };
            0 < a.params.$buttons.length && (a.params.$buttons.each(function() {
                var b = jQuery(this).attr("data-type");
                b && a.params.types.push(b)
            }), f(a));
            return jQuery.extend(this, a)
        };
    c.prototype.getStatus = function(a) {
        return b(this,
            a)
    };
    c.prototype.getDeepLink = function() {
        var a = "",
            e;
        this.inDeepLinking && (e = b(this, !1), e.data && (a = this.name + this.options.delimiter0 + "view=" + e.data.view));
        return a
    };
    c.prototype.getStatusByDeepLink = function(a, e) {
        var d = null;
        this.inDeepLinking && (d = b(this, !0), d.data.view = e);
        return d
    };
    c.prototype.setStatus = function(a, b) {
        a.data && (this.inStorage && b && (this.params.storageStatus = a), this.$root.removeClass(this.params.types.join(" ")), !this.inStorage && b ? (this.$root.addClass(this.params.defaultView), a.data.view = this.params.defaultView,
            this.params.currentView = this.params.defaultView, this.observer.trigger(this.observer.events.statusEvent, [a])) : (this.$root.addClass(a.data.view), this.params.currentView = a.data.view))
    };
    jQuery.fn.jplist.ui.controls.Views = function(a) { return new c(a) }
})();
(function() { jQuery.fn.jplist.ui.controls.ViewsDTO = function(b) { this.view = b } })();
(function() {
    var b = function(b) { return jQuery.extend(this, b) };
    b.prototype.getStatus = function(b) { b = new jQuery.fn.jplist.ui.controls.DefaultSortDTO(this.$control.attr("data-path"), this.$control.attr("data-type"), this.$control.attr("data-order"), this.$control.attr("data-datetime-format"), this.$control.attr("data-ignore")); return new jQuery.fn.jplist.app.dto.StatusDTO(this.name, this.action, this.type, b, this.inStorage, this.inAnimation, this.isAnimateToTop, this.inDeepLinking) };
    b.prototype.getPaths = function(b) {
        var c,
            a;
        c = this.$control.attr("data-path");
        a = this.$control.attr("data-type");
        c && (c = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(c, a), b.push(c))
    };
    jQuery.fn.jplist.ui.controls.DefaultSort = function(f) { return new b(f) }
})();
(function() { jQuery.fn.jplist.ui.controls.DefaultSortDTO = function(b, f, c, a, e) { return { path: b, type: f, order: c, dateTimeFormat: a, ignore: e } } })();
(function() {
    var b = function(a, b) {
            var d, c, f, l, h = null,
                m = "";
            c = a.$control.data("path");
            l = a.$control.data("dataType");
            f = a.$control.data("dataText");
            d = a.$control.data("$countValue");
            switch (l) {
                case "path":
                    h = jQuery.fn.jplist.domain.dom.services.FiltersService.pathFilter(c, b);
                    break;
                case "text":
                    a.controlOptions && a.controlOptions.ignore && (m = a.controlOptions.ignore);
                    h = jQuery.fn.jplist.domain.dom.services.FiltersService.textFilter(f, c, b, m);
                    break;
                case "range":
                    h = jQuery.fn.jplist.domain.dom.services.FiltersService.rangeFilter(c,
                        b, 0, 0, Number(a.$control.data("dataMin")), Number(a.$control.data("dataMax")))
            }
            h && (d.html(h.length), 0 === h.length ? a.$control.addClass("count-0") : a.$control.removeClass("count-0"))
        },
        f = function(a) {
            switch (a.$control.data("dataMode")) {
                case "static":
                    a.observer.on(a.observer.events.collectionReadyEvent, function(e, d) { b(a, d.dataitems) });
                    break;
                case "filter":
                    a.observer.on(a.observer.events.filterEvent, function(e, d, c) { b(a, c.dataview) });
                    break;
                case "all":
                    a.observer.on(a.observer.events.setStatusesEvent, function(e,
                        d, c) { b(a, c.dataview) })
            }
        },
        c = function(a) {
            var b, d, c, k, l, h, m;
            b = a.$control.attr("data-format");
            k = a.$control.attr("data-mode") || "static";
            l = a.$control.attr("data-type") || "path";
            d = a.$control.attr("data-path");
            c = a.$control.attr("data-text");
            h = Number(a.$control.attr("data-min"));
            m = Number(a.$control.attr("data-max"));
            b && (b = b.replace("{count}", '<span data-type="count-value"></span>'), a.$control.html(b), b = a.$control.find('[data-type="count-value"]'), a.$control.data("$countValue", b));
            d && (b = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(d,
                null), a.$control.data("path", b));
            a.$control.data("dataMode", k);
            a.$control.data("dataType", l);
            a.$control.data("dataPath", d);
            a.$control.data("dataText", c);
            a.$control.data("dataMin", h);
            a.$control.data("dataMax", m);
            f(a);
            return jQuery.extend(this, a)
        };
    jQuery.fn.jplist.ui.controls.Counter = function(a) { return new c(a) }
})();
(function() {
    var b = function(a) {
            var b, d = {},
                c, k;
            b = a.controlOptions;
            c = a.$control.find('[data-type="prev"]');
            k = a.$control.find('[data-type="next"]');
            a.$control.data("jplist-datepicker-range-prev", c);
            a.$control.data("jplist-datepicker-range-next", k);
            c.off().change(function() { "" === jQuery.trim(jQuery(this).val()) && (a.history.addStatus(f(a, !1)), a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])) });
            k.off().change(function() {
                "" === jQuery.trim(jQuery(this).val()) && (a.history.addStatus(f(a, !1)),
                    a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1]))
            });
            d.onSelect = function(b, d) {
                a.history.addStatus(f(a, !1));
                a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
            };
            b && (b.datepicker(c, d), b.datepicker(k, d))
        },
        f = function(a, b) {
            var d = null,
                c = d = d = null,
                f, l, h, m;
            f = a.$control.data("storage-status");
            b && f ? d = f : (m = a.$control.attr("data-path").toString(), f = a.$control.attr("data-datetime-format").toString(), l = a.$control.data("jplist-datepicker-range-prev"), h = a.$control.data("jplist-datepicker-range-next"),
                b || (d = l.datepicker("getDate"), c = h.datepicker("getDate")), d = new jQuery.fn.jplist.ui.controls.DatePickerRangeFilterDTO(m, f, d, c), d = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, d, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking));
            return d
        },
        c = function(a) { b(a); return jQuery.extend(this, a) };
    c.prototype.getStatus = function(a) { return f(this, a) };
    c.prototype.getDeepLink = function() {
        var a = "",
            b;
        this.inDeepLinking && (b = f(this, !1), b.data && (jQuery.isNumeric(b.data.prev_year) && (jQuery.isNumeric(b.data.prev_month) &&
            jQuery.isNumeric(b.data.prev_day)) && (a += this.name + this.options.delimiter0 + "prev=" + b.data.prev_year + this.options.delimiter2 + b.data.prev_month + this.options.delimiter2 + b.data.prev_day), jQuery.isNumeric(b.data.next_year) && (jQuery.isNumeric(b.data.next_month) && jQuery.isNumeric(b.data.next_day)) && ("" !== a && (a += this.options.delimiter1), a += this.name + this.options.delimiter0 + "next=" + b.data.next_year + this.options.delimiter2 + b.data.next_month + this.options.delimiter2 + b.data.next_day)));
        return a
    };
    c.prototype.getStatusByDeepLink =
        function(a, b) {
            var d = null,
                c;
            if (this.inDeepLinking && (d = f(this, !0), d.data)) switch (a) {
                case "prev":
                    c = b.split(this.options.delimiter2);
                    3 === c.length && (d.data.prev_year = c[0], d.data.prev_month = c[1], d.data.prev_day = c[2]);
                    break;
                case "next":
                    c = b.split(this.options.delimiter2), 3 === c.length && (d.data.next_year = c[0], d.data.next_month = c[1], d.data.next_day = c[2])
            }
            return d
        };
    c.prototype.getPaths = function(a) {
        var b;
        if (b = this.$control.attr("data-path").toString()) b = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b,
            "datetime"), a.push(b)
    };
    c.prototype.setStatus = function(a, b) {
        var d, c, f;
        this.inStorage && b && this.$control.data("storage-status", a);
        c = this.$control.data("jplist-datepicker-range-prev");
        f = this.$control.data("jplist-datepicker-range-next");
        jQuery.isNumeric(a.data.prev_year) && jQuery.isNumeric(a.data.prev_month) && jQuery.isNumeric(a.data.prev_day) ? (d = new Date(a.data.prev_year, a.data.prev_month, a.data.prev_day), c.datepicker("setDate", d)) : c.val("");
        jQuery.isNumeric(a.data.next_year) && jQuery.isNumeric(a.data.next_month) &&
            jQuery.isNumeric(a.data.next_day) ? (d = new Date(a.data.next_year, a.data.next_month, a.data.next_day), f.datepicker("setDate", d)) : f.val("")
    };
    jQuery.fn.jplist.ui.controls.DatePickerRangeFilter = function(a) { return new c(a) }
})();
(function() {
    jQuery.fn.jplist.ui.controls.DatePickerRangeFilterDTO = function(b, f, c, a) {
        b = { path: b, format: f, filterType: "dateRange", prev_year: "", prev_month: "", prev_day: "", next_year: "", next_month: "", next_day: "" };
        c && (b.prev_year = c.getFullYear(), b.prev_month = c.getMonth(), b.prev_day = c.getDate());
        a && (b.next_year = a.getFullYear(), b.next_month = a.getMonth(), b.next_day = a.getDate());
        return b
    }
})();
(function() {
    var b = function(a, b) {
            var d = null,
                c, f, l, h;
            b && a.params.storageStatus ? d = a.params.storageStatus : (d = a.$control.attr("data-path").toString(), c = a.params.$uiSlider.slider("option", "min"), f = a.params.$uiSlider.slider("option", "max"), b ? (l = c, h = f) : (l = a.params.$uiSlider.slider("values", 0), h = a.params.$uiSlider.slider("values", 1)), d = new jQuery.fn.jplist.ui.controls.RangeSliderDTO(d, c, f, l, h), d = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, d, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking));
            return d
        },
        f = function(a) {
            a.params.$uiSlider.on("slidechange", function(e, d) {
                a.history.addStatus(b(a, !1));
                a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
            })
        },
        c = function(a) {
            a.params = { $uiSlider: a.$control.find('[data-type="ui-slider"]'), $prev: a.$control.find('[data-type="prev-value"]'), $next: a.$control.find('[data-type="next-value"]'), controlOptions: a.controlOptions, storageStatus: null };
            a.params.controlOptions && (a.params.controlOptions.ui_slider(a.params.$uiSlider, a.params.$prev, a.params.$next),
                a.params.controlOptions.set_values(a.params.$uiSlider, a.params.$prev, a.params.$next));
            f(a);
            return jQuery.extend(this, a)
        };
    c.prototype.getStatus = function(a) { return b(this, a) };
    c.prototype.getDeepLink = function() {
        var a = "",
            e;
        this.inDeepLinking && (e = b(this, !1), e.data && (jQuery.isNumeric(e.data.prev) && jQuery.isNumeric(e.data.next)) && (a = this.name + this.options.delimiter0 + "prev" + this.options.delimiter2 + "next=" + e.data.prev + this.options.delimiter2 + e.data.next));
        return a
    };
    c.prototype.getStatusByDeepLink = function(a,
        e) {
        var d = null,
            c;
        this.inDeepLinking && (d = b(this, !0), d.data && a === "prev" + this.options.delimiter2 + "next" && (c = e.split(this.options.delimiter2), 2 === c.length && (d.data.prev = c[0], d.data.next = c[1])));
        return d
    };
    c.prototype.getPaths = function(a) { var b; if (b = this.$control.attr("data-path").toString()) b = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b, "number"), a.push(b) };
    c.prototype.setStatus = function(a, b) {
        var d, c;
        this.inStorage && b && (this.params.storageStatus = a);
        jQuery.isNumeric(a.data.prev) && jQuery.isNumeric(a.data.next) &&
            (d = Number(a.data.prev), c = Number(a.data.next), !isNaN(d) && !isNaN(c) && (this.params.$uiSlider.slider("values", 0) != d && this.params.$uiSlider.slider("values", 0, d), this.params.$uiSlider.slider("values", 1) != c && this.params.$uiSlider.slider("values", 1, c)));
        this.params.controlOptions && this.params.controlOptions.set_values(this.params.$uiSlider, this.params.$prev, this.params.$next)
    };
    jQuery.fn.jplist.ui.controls.RangeSlider = function(a) { return new c(a) }
})();
(function() { jQuery.fn.jplist.ui.controls.RangeSliderDTO = function(b, f, c, a, e) { return { path: b, type: "number", filterType: "range", min: f, max: c, prev: a, next: e } } })();
(function() {
    var b = function(a, b) {
            var d, c;
            c = "";
            d = a.$control.data("storage-status");
            b && d ? c = d : ((d = b ? "true" === a.$control.attr("data-selected") : a.params.selected) && (c = "path"), c = { path: a.$control.attr("data-path"), filterType: c, selected: d }, c = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, c, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking));
            return c
        },
        f = function(a) {
            a.$control.on("click", function() {
                a.params.selected = !a.params.selected;
                a.history.addStatus(b(a, !1));
                a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
            })
        },
        c = function(a) {
            a.params = { selected: "true" === a.$control.attr("data-selected") };
            a.options.deepLinking && (a.params.selected = !1);
            f(a);
            return jQuery.extend(this, a)
        };
    c.prototype.getStatus = function(a) { return b(this, a) };
    c.prototype.getDeepLink = function() {
        var a = "",
            c = null;
        this.inDeepLinking && (c = b(this, !1), c.data && c.data.selected && (a = this.name + this.options.delimiter0 + "selected=true"));
        return a
    };
    c.prototype.getStatusByDeepLink = function(a, c) {
        var d = null,
            f;
        if (this.inDeepLinking && (d = b(this, !1), d.data && (f = "selected" ===
                a && "true" === c))) d.data.selected = f, d.data.filterType = "path";
        return d
    };
    c.prototype.getPaths = function(a) { var b; if (b = this.$control.attr("data-path")) b = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b, "text"), a.push(b) };
    c.prototype.setStatus = function(a, b) {
        this.inStorage && b && this.$control.data("storage-status", a);
        (this.params.selected = a.data.selected) ? this.$control.addClass("jplist-selected"): this.$control.removeClass("jplist-selected")
    };
    jQuery.fn.jplist.ui.controls.ButtonFilter = function(a) { return new c(a) }
})();
(function() {
    var b = function(a, b) {
            var d, c = [],
                e, f, p;
            d = a.$control.data("storage-status");
            b && d || a.params.$buttons.each(function(a, d) { e = jQuery(d); if (p = b ? "true" === e.attr("data-selected") : e.data("selected") || !1)(f = e.attr("data-path")) && c.push(f) });
            return d = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, { pathGroup: c, filterType: "pathGroup" }, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking)
        },
        f = function(a, b) {
            var d, c;
            a.params.$buttons.each(function(a, e) {
                if (d = jQuery(e).attr("data-path")) c =
                    new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(d, "text"), b.push(c)
            })
        },
        c = function(a, b, d) {
            var c;
            a.params.$buttons.each(function(a, b) {
                c = jQuery(b);
                c.removeClass("jplist-selected");
                c.data("selected", !1)
            });
            if (b.data && b.data.pathGroup && jQuery.isArray(b.data.pathGroup) && 0 < b.data.pathGroup.length)
                for (var e = 0; e < b.data.pathGroup.length; e++) d = b.data.pathGroup[e], c = a.params.$buttons.filter('[data-path="' + d + '"]'), 0 < c.length && (c.addClass("jplist-selected"), c.data("selected", !0))
        },
        a = function(a) {
            a.params.$buttons.on("click",
                function() {
                    var d, c;
                    d = jQuery(this);
                    "multiple" === a.params.mode ? (c = d.data("selected") || !1, d.data("selected", !c)) : (a.params.$buttons.data("selected", !1), d.data("selected", !0));
                    a.history.addStatus(b(a, !1));
                    a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
                })
        },
        e = function(a) {
            var b;
            "multiple" === a.params.mode ? a.params.$buttons.each(function() {
                var b = jQuery(this),
                    d;
                d = "true" === b.attr("data-selected");
                a.options.deepLinking && (d = !1);
                b.data("selected", d)
            }) : (a.params.$buttons.data("selected", !1),
                b = a.params.$buttons.filter('[data-selected="true"]'), b = 0 < b.length ? b.eq(0) : a.params.$buttons.eq(0), b.data("selected", !0), b.attr("data-selected", !0), b.trigger("click"))
        },
        d = function(b) {
            b.params = { $buttons: b.$control.find("[data-button]"), mode: b.$control.attr("data-mode") || "multiple" };
            a(b);
            e(b);
            return jQuery.extend(this, b)
        };
    d.prototype.getStatus = function(a) { return b(this, a) };
    d.prototype.getDeepLink = function() {
        var a = "",
            d = "",
            c;
        if (this.inDeepLinking && (c = b(this, !1), c.data && c.data.pathGroup && 0 < c.data.pathGroup.length)) {
            for (var e =
                    0; e < c.data.pathGroup.length; e++) a = c.data.pathGroup[e], 0 < e && (d += this.options.delimiter2), d += a;
            a = this.name + this.options.delimiter0 + "selected=" + d
        }
        return a
    };
    d.prototype.getStatusByDeepLink = function(a, d) {
        var c = null;
        this.inDeepLinking && (c = b(this, !1), c.data && "selected" === a && (c.data.pathGroup = d.split(this.options.delimiter2)));
        return c
    };
    d.prototype.getPaths = function(a) { f(this, a) };
    d.prototype.setStatus = function(a, b) { c(this, a, b) };
    jQuery.fn.jplist.ui.controls.ButtonFilterGroup = function(a) { return new d(a) }
})();
(function() {
    var b = function(a, b) {
            var d, c;
            c = null;
            var f = c = "";
            d = a.$control.data("storage-status");
            b && d ? c = d : (a.controlOptions && a.controlOptions.ignore && (c = a.controlOptions.ignore), f = (d = b ? "true" === a.$control.attr("data-selected") : a.params.selected) ? a.params.dataText : "", c = new jQuery.fn.jplist.ui.controls.ButtonTextFilterDTO(a.params.dataPath, f, c, d), c = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, c, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking));
            return c
        },
        f = function(a) {
            a.$control.on("click",
                function() {
                    a.params.selected = !a.params.selected;
                    a.history.addStatus(b(a, !1));
                    a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1]);
                    a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
                })
        },
        c = function(a) {
            a.params = { selected: "true" === a.$control.attr("data-selected"), dataPath: a.$control.attr("data-path"), dataText: a.$control.attr("data-text") };
            a.options.deepLinking && (a.params.selected = !1);
            f(a);
            return jQuery.extend(this, a)
        };
    c.prototype.getStatus = function(a) { return b(this, a) };
    c.prototype.getDeepLink = function() {
        var a = "",
            c;
        this.inDeepLinking && (c = b(this, !1), c.data && c.data.selected && (a = this.name + this.options.delimiter0 + "selected=true"));
        return a
    };
    c.prototype.getStatusByDeepLink = function(a, c) {
        var d = null,
            f;
        if (this.inDeepLinking && (d = b(this, !1), d.data && (f = "selected" === a && "true" === c))) d.data.selected = f, d.data.value = this.params.dataText;
        return d
    };
    c.prototype.getPaths = function(a) {
        var b;
        this.params.dataPath && (b = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(this.params.dataPath,
            "text"), a.push(b))
    };
    c.prototype.setStatus = function(a, b) {
        this.inStorage && b && this.$control.data("storage-status", a);
        (this.params.selected = a.data.selected) ? this.$control.addClass("jplist-selected"): this.$control.removeClass("jplist-selected")
    };
    jQuery.fn.jplist.ui.controls.ButtonTextFilter = function(a) { return new c(a) }
})();
(function() { jQuery.fn.jplist.ui.controls.ButtonTextFilterDTO = function(b, f, c, a) { return { path: b, ignore: c, value: f, selected: a, filterType: "TextFilter" } } })();
(function() {
    var b = function(a, b) {
            var c, e = [];
            c = null;
            c = "";
            var f;
            f = a.$control.data("storage-status");
            b && f ? c = f : (a.controlOptions && a.controlOptions.ignore && (c = a.controlOptions.ignore), a.params.$buttons.each(function(a, d) {
                var c = jQuery(d),
                    f;
                f = b ? "true" === c.attr("data-selected") : c.data("selected") || !1;
                e.push({ selected: f, text: c.data("dataText"), path: c.data("dataPath") })
            }), c = new jQuery.fn.jplist.ui.controls.ButtonTextFilterGroupDTO(e, c), c = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, c, a.inStorage,
                a.inAnimation, a.isAnimateToTop, a.inDeepLinking));
            return c
        },
        f = function(a, b) {
            var c, e, f;
            a.params.$buttons.each(function(a, d) { c = jQuery(this); if (e = c.attr("data-path")) f = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(e, "text"), b.push(f) })
        },
        c = function(a, b, c) {
            var e;
            a.params.$buttons.each(function(a, b) {
                e = jQuery(b);
                e.removeClass("jplist-selected");
                e.data("selected", !1)
            });
            if (b.data && b.data.textAndPathsGroup && jQuery.isArray(b.data.textAndPathsGroup) && 0 < b.data.textAndPathsGroup.length)
                for (var f =
                        0; f < b.data.textAndPathsGroup.length; f++) c = b.data.textAndPathsGroup[f], e = a.params.$buttons.filter('[data-path="' + c.path + '"][data-text="' + c.text + '"]'), 0 < e.length && c.selected && (e.addClass("jplist-selected"), e.data("selected", !0))
        },
        a = function(a) {
            var c;
            a.params.$buttons.on("click", function() {
                var e = jQuery(this);
                c = e.data("selected") || !1;
                e.data("selected", !c);
                a.history.addStatus(b(a, !1));
                a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
            })
        },
        e = function(b) {
            b.params = { $buttons: b.$control.find("[data-button]") };
            b.params.$buttons.each(function() {
                var a = jQuery(this),
                    c;
                c = "true" === a.attr("data-selected");
                b.options.deepLinking && (c = !1);
                a.data("selected", c);
                a.data("dataPath", a.attr("data-path"));
                a.data("dataText", a.attr("data-text"))
            });
            a(b);
            return jQuery.extend(this, b)
        };
    e.prototype.getStatus = function(a) { return b(this, a) };
    e.prototype.getDeepLink = function() {
        var a = "",
            c, e, f = [];
        if (this.inDeepLinking && (c = b(this, !1), c.data && c.data.textAndPathsGroup && 0 < c.data.textAndPathsGroup.length)) {
            for (var h = 0; h < c.data.textAndPathsGroup.length; h++) e =
                c.data.textAndPathsGroup[h], e.selected && f.push(e.text + this.options.delimiter3 + e.path);
            0 < f.length && (a = this.name + this.options.delimiter0 + "selected=" + f.join(this.options.delimiter2))
        }
        return a
    };
    e.prototype.getStatusByDeepLink = function(a, c) {
        var e = null,
            f, h;
        if (this.inDeepLinking && (e = b(this, !1), e.data && "selected" === a)) {
            e.data.textAndPathsGroup = [];
            f = c.split(this.options.delimiter2);
            for (var m = 0; m < f.length; m++) h = f[m].split(this.options.delimiter3), 2 === h.length && e.data.textAndPathsGroup.push({
                selected: !0,
                text: h[0],
                path: h[1]
            })
        }
        return e
    };
    e.prototype.getPaths = function(a) { f(this, a) };
    e.prototype.setStatus = function(a, b) { c(this, a, b) };
    jQuery.fn.jplist.ui.controls.ButtonTextFilterGroup = function(a) { return new e(a) }
})();
(function() { jQuery.fn.jplist.ui.controls.ButtonTextFilterGroupDTO = function(b, f) { return { textAndPathsGroup: b, ignore: f, filterType: "textFilterPathGroup" } } })();
(function() {
    var b = function(a, b) {
            var c, e = [];
            c = null;
            var f;
            c = a.$control.data("storage-status");
            if (!b || !c) a.params.$checkboxes.each(function(a, c) {
                var d = jQuery(c);
                f = b ? d.data("selected-on-start") || !1 : d.get(0).checked;
                d = d.attr("data-path");
                f && d && e.push(d)
            }), c = new jQuery.fn.jplist.ui.controls.CheckboxGroupFilterDTO(e), c = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, c, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking);
            return c
        },
        f = function(a, b) {
            a.params.$checkboxes.each(function(a,
                c) { var d; if (d = jQuery(this).attr("data-path")) d = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(d, "text"), b.push(d) })
        },
        c = function(a, b, c) {
            var e;
            a.params.$checkboxes.each(function(a, b) {
                e = jQuery(b);
                e.removeClass("jplist-selected");
                e.get(0).checked = !1
            });
            if (b.data && b.data.pathGroup && jQuery.isArray(b.data.pathGroup) && 0 < b.data.pathGroup.length)
                for (var f = 0; f < b.data.pathGroup.length; f++) c = b.data.pathGroup[f], e = a.params.$checkboxes.filter('[data-path="' + c + '"]'), 0 < e.length && (e.addClass("jplist-selected"),
                    e.get(0).checked = !0)
        },
        a = function(a) {
            a.params.$checkboxes.on("change", function() {
                a.history.addStatus(b(a, !1));
                a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
            })
        },
        e = function(b) {
            b.params = { $checkboxes: b.$control.find("[data-path]") };
            b.params.$checkboxes.each(function() {
                var a = jQuery(this),
                    c;
                c = a.get(0).checked;
                b.options.deepLinking && (c = !1);
                a.data("selected-on-start", c)
            });
            a(b);
            return jQuery.extend(this, b)
        };
    e.prototype.getStatus = function(a) { return b(this, a) };
    e.prototype.getDeepLink = function() {
        var a =
            "",
            c, e = "";
        if (this.inDeepLinking && (c = b(this, !1), c.data && jQuery.isArray(c.data.pathGroup) && 0 < c.data.pathGroup.length)) {
            for (a = 0; a < c.data.pathGroup.length; a++) "" !== e && (e += this.options.delimiter2), e += c.data.pathGroup[a];
            a = this.name + this.options.delimiter0 + "pathGroup=" + e
        }
        return a
    };
    e.prototype.getStatusByDeepLink = function(a, c) {
        var e = null,
            f;
        this.inDeepLinking && (e = b(this, !0), e.data && "pathGroup" === a && (f = c.split(this.options.delimiter2), 0 < f.length && (e.data.pathGroup = f)));
        return e
    };
    e.prototype.getPaths = function(a) {
        f(this,
            a)
    };
    e.prototype.setStatus = function(a, b) { c(this, a, b) };
    jQuery.fn.jplist.ui.controls.CheckboxGroupFilter = function(a) { return new e(a) }
})();
(function() { jQuery.fn.jplist.ui.controls.CheckboxGroupFilterDTO = function(b) { return { pathGroup: b, filterType: "pathGroup" } } })();
(function() {
    var b = function(a, b) {
            var c, f = [];
            c = null;
            var l;
            c = a.$control.data("storage-status");
            if (!b || !c) a.params.$checkboxes.each(function(a, c) {
                var e = jQuery(c);
                l = b ? e.data("selected-on-start") || !1 : e.get(0).checked;
                (e = e.val()) && l && f.push(e)
            }), c = new jQuery.fn.jplist.ui.controls.CheckboxTextFilterDTO(f, a.params.dataLogic, a.params.dataPath, a.params.ignore), c = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, c, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking);
            return c
        },
        f = function(a,
            b, c) {
            var f;
            a.params.$checkboxes.each(function(a, b) {
                f = jQuery(b);
                f.removeClass("jplist-selected");
                f.get(0).checked = !1
            });
            if (b.data && b.data.textGroup && jQuery.isArray(b.data.textGroup) && 0 < b.data.textGroup.length)
                for (var l = 0; l < b.data.textGroup.length; l++) c = b.data.textGroup[l], f = a.params.$checkboxes.filter('[value="' + c + '"]'), 0 < f.length && (f.addClass("jplist-selected"), f.get(0).checked = !0)
        },
        c = function(a) {
            a.params.$checkboxes.on("change", function() {
                a.history.addStatus(b(a, !1));
                a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
            })
        },
        a = function(a) {
            a.params = { $checkboxes: a.$control.find('input[type="checkbox"]'), dataPath: a.$control.attr("data-path"), dataLogic: a.$control.attr("data-logic") || "or", ignore: "" };
            a.controlOptions && a.controlOptions.ignore && (a.params.ignore = a.controlOptions.ignore);
            a.params.$checkboxes.each(function() {
                var b = jQuery(this),
                    c;
                c = b.get(0).checked;
                a.options.deepLinking && (c = !1);
                b.data("selected-on-start", c)
            });
            c(a);
            return jQuery.extend(this, a)
        };
    a.prototype.getStatus = function(a) { return b(this, a) };
    a.prototype.getDeepLink =
        function() {
            var a = "",
                c, f = "";
            if (this.inDeepLinking && (c = b(this, !1), c.data && jQuery.isArray(c.data.textGroup) && 0 < c.data.textGroup.length)) {
                for (a = 0; a < c.data.textGroup.length; a++) "" !== f && (f += this.options.delimiter2), f += c.data.textGroup[a];
                a = this.name + this.options.delimiter0 + "textGroup=" + f
            }
            return a
        };
    a.prototype.getStatusByDeepLink = function(a, c) {
        var f = null,
            k;
        this.inDeepLinking && (f = b(this, !0), f.data && "textGroup" === a && (k = c.split(this.options.delimiter2), 0 < k.length && (f.data.textGroup = k)));
        return f
    };
    a.prototype.getPaths =
        function(a) {
            var b;
            this.params.dataPath && (b = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(this.params.dataPath, "text"), a.push(b))
        };
    a.prototype.setStatus = function(a, b) { f(this, a, b) };
    jQuery.fn.jplist.ui.controls.CheckboxTextFilter = function(b) { return new a(b) }
})();
(function() { jQuery.fn.jplist.ui.controls.CheckboxTextFilterDTO = function(b, f, c, a) { return { textGroup: b, logic: f, path: c, ignoreRegex: a, filterType: "textGroup" } } })();
(function() {
    var b = function(a, b) {
            var c = null,
                f, c = a.$control.data("storage-status");
            if (!b || !c) f = b ? a.params.initialSelected || !1 : a.$control.get(0).checked, c = { path: a.$control.attr("data-path"), type: "TextFilter", filterType: "path", selected: f }, f || (c.filterType = ""), c = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, c, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking);
            return c
        },
        f = function(a) {
            a.$control.on("change", function() {
                a.history.addStatus(b(a, !1));
                a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
            })
        },
        c = function(a) {
            a.params = { initialSelected: a.$control.get(0).checked || !1 };
            f(a);
            return jQuery.extend(this, a)
        };
    c.prototype.getStatus = function(a) { return b(this, a) };
    c.prototype.getDeepLink = function() {
        var a = "",
            c;
        this.inDeepLinking && (c = b(this, !1), c.data && c.data.selected && (a = this.name + this.options.delimiter0 + "selected=true"));
        return a
    };
    c.prototype.getStatusByDeepLink = function(a, c) {
        var d = null;
        this.inDeepLinking && (d = b(this, !0), d.data && "selected" === a && (d.data.selected = !0));
        return d
    };
    c.prototype.getPaths =
        function(a) { var b; if (b = this.$control.attr("data-path")) b = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(b, "text"), a.push(b) };
    c.prototype.setStatus = function(a, b) {
        this.inStorage && b && this.$control.data("storage-status", a);
        this.$control.get(0).checked = a.data.selected || !1
    };
    jQuery.fn.jplist.ui.controls.RadioButtonsFilter = function(a) { return new c(a) }
})();
(function() {
    var b = function(a, b) {
            var c, f;
            f = null;
            c = a.$control.data("storage-status");
            b && c ? f = c : (c = b ? "true" === a.$control.attr("data-selected") : a.params.selected, a.params.path && (f = c ? { path: a.params.path, type: "number", filterType: "range", min: 0, max: 0, prev: a.params.prev, next: a.params.next, selected: c } : { path: a.params.path, filterType: "", selected: c }, f = new jQuery.fn.jplist.app.dto.StatusDTO(a.name, a.action, a.type, f, a.inStorage, a.inAnimation, a.isAnimateToTop, a.inDeepLinking)));
            return f
        },
        f = function(a) {
            a.$control.on("click",
                function() {
                    a.params.selected = !a.params.selected;
                    a.history.addStatus(b(a, !1));
                    a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!1])
                })
        },
        c = function(a) {
            a.params = { path: a.$control.attr("data-path"), prev: Number(a.$control.attr("data-min")), next: Number(a.$control.attr("data-max")), selected: "true" === a.$control.attr("data-selected") };
            f(a);
            return jQuery.extend(this, a)
        };
    c.prototype.getStatus = function(a) { return b(this, a) };
    c.prototype.getDeepLink = function() {
        var a = "",
            c;
        this.inDeepLinking && (c = b(this, !1), c.data && c.data.selected && (a = this.name + this.options.delimiter0 + "selected=true"));
        return a
    };
    c.prototype.getStatusByDeepLink = function(a, c) {
        var d = null;
        this.inDeepLinking && (d = b(this, !1), d.data && ("selected" === a && "true" === c) && (d.data = { path: this.params.path, type: "number", filterType: "range", min: 0, max: 0, prev: this.params.prev, next: this.params.next, selected: !0 }));
        return d
    };
    c.prototype.getPaths = function(a) {
        var b;
        this.params.path && (b = new jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel(this.params.path,
            "number"), a.push(b))
    };
    c.prototype.setStatus = function(a, b) {
        this.inStorage && b && this.$control.data("storage-status", a);
        (this.params.selected = a.data.selected) ? this.$control.addClass("jplist-selected"): this.$control.removeClass("jplist-selected")
    };
    jQuery.fn.jplist.ui.controls.RangeSliderToggleFilter = function(a) { return new c(a) }
})();
(function() {
    var b = function(a) {!a.history.statusesQueue || 0 >= a.history.statusesQueue.length ? a.$control.addClass("jplist-disabled") : a.$control.removeClass("jplist-disabled") },
        f = function(a) {
            a.observer.on(a.observer.events.setStatusesEvent, function(c, d, f) { b(a) });
            a.$control.on("click", function() {
                var c, d, f;
                a.history.popStatus();
                a.history.popList();
                c = a.history.getLastStatus();
                if ((f = a.history.getLastList() || []) && c) {
                    for (var k = 0; k < f.length; k++) d = f[k], d.name === c.name && d.action === c.action && jQuery.extend(!0, f[k],
                        c);
                    a.observer.trigger(a.observer.events.renderStatusesEvent, [f])
                } else a.observer.trigger(a.observer.events.forceRenderStatusesEvent, [!0]);
                b(a)
            })
        },
        c = function(a) {
            b(a);
            f(a);
            return jQuery.extend(this, a)
        };
    jQuery.fn.jplist.ui.controls.BackButton = function(a) { return new c(a) }
})();
(function() {
    var b = function(b) {
            b.observer.on(b.observer.events.renderStatusesEvent, function(a) { b.$control.removeClass("jplist-hide-preloader") });
            b.observer.on(b.observer.events.setStatusesEvent, function(a, e, d) { b.$control.addClass("jplist-hide-preloader") })
        },
        f = function(c) { b(c); return jQuery.extend(this, c) };
    jQuery.fn.jplist.ui.controls.Preloader = function(b) { return new f(b) }
})();