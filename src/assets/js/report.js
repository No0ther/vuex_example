Vue.component('paginate', VuejsPaginate);
var report = new Vue({
    el: '#report_cskh_vue',
    data: {
        listSourceReport: [],
        listGroupCustomerReport: [],
        filtersReport: {
            startDate: "",
            endDate: "",
        },
        filterCustomers: {
           name: '',
        },
        listReports : [],
        loading: false,
        errors: {},
        toggleSearch: false,
        listCustomerReport: [
            {
                name: 'Nguyen Van A',
                totalSchedule: 90,
                done: 45,
                pending: 36,
            },
        ],
        limitReport: 5,
        currentPageReport: 1,
        totalPageReport: 0,
        limitCustomerReport: 5,
        currentPageCustomerReport: 1,
        totalPageCustomerReport: 0,
        dateRange: "",
    },
    methods: {
        init: function() {
            this.dateRange = "Chọn thời gian";
            this.initDateRange();
            this.getListReport();
            // this.getCustomerReport();
            this.getListSourceRequestReport();
            this.getListGroupCustomerReport();
        },
        getListReport: function () {
            var me = this;
            // me.loading = true;
            $.ajax({
                url: '/module/ctvcskh/service/report/getReportList',
                method: 'GET',
                dataType: 'json',
                data: {
                    params: {
                        startDateTime: me.filtersReport.startDate,
                        endDateTime: me.filtersReport.endDate
                    }
                },
                success: function (res) {
                    me.loading = false;
                    if (res.message === "Success") {
                        me.listReports = res.data;
                        // me.totalPageReport = Math.ceil(res.totalItem / me.limitReport)
                    } else {
                        App.showMessageWarning(res.msg);
                    }
                }
            });
        },
        submitFilters: function () {

        },
        resetFilters: function () {
            this.filters = {
                name: ''
            };
        },
        getCustomerReport: function () {
            var me = this;
            // me.loading = true;
            $.ajax({
                url: '/module/ctvcskh/service/report/getCustomerReportList',
                method: 'GET',
                dataType: 'json',
                data: {
                    limit: me.limitCustomerReport,
                    page: me.currentPageCustomerReport,
                    filterCustomers: me.filterCustomers,
                },
                success: function (res) {
                    me.loading = false;
                    if (res.message === "Success") {
                        // me.listCustomerReport = res.data;
                        me.totalPageCustomerReport = Math.ceil(res.totalItem / me.limitCustomerReport);
                    } else {
                        App.showMessageWarning(res.msg);
                    }
                }
            });
        },
        getByPageCustomer: function (page) {
            this.currentPageCustomerReport = page;
            this.getCustomerReport();
        },
        getByPageReport(page) {
            this.currentPageReport = page;
            this.getListReport();
        },
        initDateRange: function () {
            var me = this;
            var initStart = moment().startOf('week').add(1, 'days');
            var initEnd = moment().endOf('week').add(1, 'days');

            me.dateRange = initStart.format('DD/MM/YYYY') + " - " + initEnd.format('DD/MM/YYYY');
            me.filtersReport.startDate = initStart.format('YYYY-MM-DD');
            me.filtersReport.endDate = initEnd.format('YYYY-MM-DD');

            $('#inputDateRange').daterangepicker({
                parentEl: '#daterange-container',
                opens: 'left',
                startDate: initStart.format('DD/MM/YYYY'),
                endDate: initEnd.format('DD/MM/YYYY'),
                ranges: {
                    '7 ngày gần đây': [moment().subtract(6, 'days'), moment()],
                    'Tuần này': [moment().startOf('week').add(1, 'days'), moment().endOf('week').add(1, 'days')],
                    'Tuần trước': [moment().subtract(1, 'week').startOf('week').add(1, 'days'), moment().subtract(1, 'week').endOf('week').add(1, 'days')],
                    '30 ngày gần đây': [moment().subtract(29, 'days'), moment()],
                    'Tháng này': [moment().startOf('month'), moment().endOf('month')],
                    'Tháng trước': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                "locale": {
                    "format": "DD/MM/YYYY",
                    "separator": " - ",
                    "applyLabel": "XÁC NHẬN",
                    "cancelLabel": "HỦY BỎ",
                    "fromLabel": "Từ",
                    "toLabel": "Đến",
                    "customRangeLabel": "Tùy chọn",
                    "daysOfWeek": [
                        "CN",
                        "T2",
                        "T3",
                        "T4",
                        "T5",
                        "T6",
                        "T7"
                    ],
                    "monthNames": [
                        "Tháng 1",
                        "Tháng 2",
                        "Tháng 3",
                        "Tháng 4",
                        "Tháng 5",
                        "Tháng 6",
                        "Tháng 7",
                        "Tháng 8",
                        "Tháng 9",
                        "Tháng 10",
                        "Tháng 11",
                        "Tháng 12"
                    ],
                    "firstDay": 1
                }
            }, function (start, end, label) {
                me.filtersReport.startDate = start.format('YYYY-MM-DD');
                me.filtersReport.endDate = end.format('YYYY-MM-DD');
                me.dateRange = start.format('DD/MM/YYYY') + " - " + end.format('DD/MM/YYYY');
                me.getListReport();
                me.getListSourceRequestReport();
                me.getListGroupCustomerReport();
            });
        },
        getListGroupCustomerReport: function () {
            var me = this;
            // me.loading = true;
            $.ajax({
                url: '/module/ctvcskh/service/report/getReportByGroupCustomer',
                method: 'GET',
                dataType: 'json',
                data: {
                    params: {
                        startDateTime: me.filtersReport.startDate,
                        endDateTime: me.filtersReport.endDate
                    }
                },
                success: function (res) {
                    me.loading = false;
                    if (res.message === "Success") {
                        me.listGroupCustomerReport = res.data;
                        // me.totalPageReport = Math.ceil(res.totalItem / me.limitReport)
                    } else {
                        App.showMessageWarning(res.msg);
                    }
                }
            });
        },
        getListSourceRequestReport: function () {
            var me = this;
            // me.loading = true;
            $.ajax({
                url: '/module/ctvcskh/service/report/getReportBySourceRequest',
                method: 'GET',
                dataType: 'json',
                data: {
                    params: {
                        startDateTime: me.filtersReport.startDate,
                        endDateTime: me.filtersReport.endDate
                    }
                },
                success: function (res) {
                    me.loading = false;
                    if (res.message === "Success") {
                        me.listSourceReport = res.data;
                        // me.totalPageReport = Math.ceil(res.totalItem / me.limitReport)
                    } else {
                        App.showMessageWarning(res.msg);
                    }
                }
            });
        },
    }
})
