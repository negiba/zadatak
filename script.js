const hgwDataStatus1 = {
    name: 'chart-hgw-status-1',
    type: 'areaspline',
    yTitle: 'GB',
    categories: null,
    series: [
        {
            name: 'Data Transfered',
            type: 'areaspline',
            color: '#8bf6fa',
            data: [100, 50, 48, 137, 10, 94, 56, 49, 167, 38, 121, 54, 34, 57, 150, 139, 180, 125, 100]
        },
        {
            name: 'Total No. of Unifi clients',
            color: '#020249',
            type: 'spline',
            data: [111, 54, 43, 130, 11, 90, 62, 40, 173, 42, 129, 50, 34, 57, 150, 139, 180, 125, 120]
        }
    ],
    label: {
        formatter: function () {
            return this.value;
        }
    },
    option: null
};

const hgwDataStatus2 = {
    name: 'chart-hgw-status-2',
    type: 'areaspline',
    yTitle: 'GB',
    categories: null,
    series: [
        {
            name: 'Good',
            color: 'green',
            data: [502, 635, 809, 947, 1402, 3634, 5268],
        },
        {
            name: 'Medium',
            color: 'orange',
            data: [106, 107, 111, 133, 221, 767, 1766]
        },
        {
            name: 'Bad',
            color: 'red',
            data: [163, 203, 276, 408, 547, 729, 628]
        }
    ],
    label: {
        formatter: function () {
            return this.value;
        }
    },
    option: {
        area: { stacking: 'normal' }
    }
}

const hgwDataInterterence = {
    name: 'chart-hgw-interterence',
    type: 'column',
    yTitle: 'No. of clients',
    categories: ['Channel 1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
    series: [
        {
            name: 'A',
            color: 'lightblue',
            data: [150, 150, 100, 120, 80, 93, 81, 192, 99, 120, 75, 83, 160]
        },
        {
            name: 'B',
            color: 'blue',
            data: [150, 143, 90, 140, 82, 93, 89, 159, 94, 120, 79, 81, 140]
        },
        {
            name: 'C',
            color: 'darkblue',
            data: [90, 123, 100, 110, 100, 73, 189, 190, 127, 100, 91, 181, 140]
        },
        {
            name: 'D',
            color: 'darkblue',
            data: [91, 111, 54, 168, 46, 123, 49, 120, 137, 190, 151, 111, 119]
        }
    ],
    label: {
        formatter: function () {
            return this.value;
        }
    },
    option: null,
}

const hgwDataTotalNoin = {
    name: 'chart-hgw-total-noin',
    type: 'column',
    yTitle: 'No. of clients',
    categories: ['Channel 1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
    series: [
        {
            name: 'A',
            color: 'lightblue',
            data: [150, 150, 100, 120, 80, 93, 81, 192, 99, 120, 75, 83, 160]
        },
        {
            name: 'B',
            color: 'blue',
            data: [150, 143, 90, 140, 82, 93, 89, 159, 94, 120, 79, 81, 140]
        },
        {
            name: 'C',
            color: 'darkblue',
            data: [90, 123, 100, 110, 100, 73, 189, 190, 127, 100, 91, 181, 140]
        },
        {
            name: 'D',
            color: 'darkblue',
            data: [91, 111, 54, 168, 46, 123, 49, 120, 137, 190, 151, 111, 119]
        }
    ],
    label: {
        formatter: function () {
            return this.value;
        }
    },
    option: null,
}

const hgwDataRss = {
    name: 'chart-hgw-rss',
    type: 'spline',
    yTitle: 'dBm',
    categories: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00'],
    series: [
        {
            name: 'Maximum',
            color: 'blue',
            data: [-52, -34, -63, -20, -33, -40, -66, -28, -53, -21, -31, -20],
        },
        {
            name: 'Average',
            color: 'orange',
            data: [-112, -54, -73, -40, -53, -70, -80, -48, -63, -81, -51, -50],
        },
        {
            name: 'Minimum',
            color: 'red',
            data: [-121, -193, -84, -66, -110, -84, -111, -52, -88, -191, -65, -74],
        }
    ],
    label: {
        formatter: function () {
            return this.value;
        }
    },
    reversed: true,
    option: {
        spline: {
            pointStart: 0
        }
    }
}


const hgwDataBitrate = {
    name: 'chart-hgw-bit-rate',
    type: 'spline',
    yTitle: 'Mbps',
    categories: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00'],
    series: [
        {
            name: 'Max',
            color: 'blue',
            data: [121, 193, 84, 66, 110, 84, 111, 52, 88, 191, 65, 74],
        },
        {
            name: 'Avg',
            color: 'orange',
            data: [112, 54, 73, 40, 53, 70, 80, 48, 63, 81, 51, 50],
        },
        {
            name: 'Min',
            color: 'red',
            data: [52, 34, 63, 20, 33, 40, 66, 28, 53, 21, 31, 20]
        }
    ],
    label: {
        formatter: function () {
            return this.value;
        }
    },
    option: null
}

const hgwDataRetransmission = {
    name: 'chart-hgw-nor',
    type: null,
    yTitle: null,
    categories: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00'],
    series: [
        {
            name: 'Bytes',
            color: 'blue',
            data: [0, 0, 70000, 0, 80000, 0, 0, 80000, 0, 70000, 0, 0],
        },
        {
            name: 'Retransmitted Bytes',
            color: 'lightgreen',
            data: [0, 0, 30000, 0, 30000, 0, 0, 40000, 0, 40000, 0, 0],
        }
    ],
    label: {
        formatter: function () {
            return this.value / 1000 + 'k';
        }
    },
    option: null
}

const hgwDataNumberOfClients = {
    name: 'chart-hgw-noc',
    type: 'areaspline',
    yTitle: null,
    categories: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00'],
    series: [
        {
            enabled: false,
            name: null,
            color: 'lightblue',
            data: [15, 5, 12, 4, 7, 6, 5, 4, 2, 10, 18, 6],
            showInLegend: false
        },
    ],
    label: {
        formatter: function () {
            return this.value;
        }
    },
    option: null
}

const charts = [
    hgwDataStatus1,
    hgwDataStatus2,
    hgwDataInterterence,
    hgwDataTotalNoin,
    hgwDataRss,
    hgwDataBitrate,
    hgwDataRetransmission,
    hgwDataNumberOfClients
];

const createChart = (data) => {
    return Highcharts.chart(data.name, {
        chart: {
            type: data.type
        },
        title: {
            text: null
        },
        xAxis: {
            categories: data.categories,
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        yAxis: {
            title: {
                text: data.yTitle
            },
            reversed: data.reversed,
            allowDecimals: false,
            labels: data.label
        },
        plotOption: data.option,
        series: data.series
    });
}

const wifiConnectedTime = {
    name: 'chart-pie-wct',
    series: [{
        name: null,
        data: [
            ['Percent of time with connected user(s)', 48],
            ['', 52],
        ],
        showInLegend: true
    }]
}

const wifiUsage = {
    name: 'chart-pie-wusage',
    series: [{
        name: null,
        data: [
            ['Low', 32],
            ['Medium', 42],
            ['High', 36],
        ],
        showInLegend: true
    }]
}

const hgwInterference = {
    name: 'chart-pie-interference',
    series: [{
        name: null,
        data: [
            ['Low', 32],
            ['Medium', 42],
            ['High', 36],
        ],
        showInLegend: true
    }]
}

const hgwInterferenceHome = {
    name: 'chart-pie-interference-home',
    series: [{
        name: null,
        data: [
            ['Low', 32],
            ['Medium', 42],
            ['High', 36],
        ],
        showInLegend: true
    }]
}

const hgwChannel = {
    name: 'chart-pie-channel',
    series: [{
        name: null,
        data: [
            ['Auto: Yes', 48],
            ['Auto: No', 52],
        ],
        showInLegend: true
    }]
}

const hgwSticky = {
    name: 'chart-pie-sticky',
    series: [{
        name: null,
        data: [
            ['Percent of time with sticky clients', 48],
            ['', 52],
        ],
        showInLegend: true
    }]
}

const hgwClientRss = {
    name: 'chart-pie-client-rss',
    series: [{
        name: null,
        data: [
            ['Good', 32],
            ['Medium', 42],
            ['Bad', 36],
        ],
        showInLegend: true
    }]
}

const hgwRss = {
    name: 'chart-pie-rss',
    series: [{
        name: null,
        data: [
            ['Good', 32],
            ['Medium', 42],
            ['Bad', 36],
        ],
        showInLegend: true
    }]
}

const chartPies = [
    wifiConnectedTime,
    wifiUsage,
    hgwInterference,
    hgwInterferenceHome,
    hgwChannel,
    hgwSticky,
    hgwClientRss,
    hgwRss
];

const createPieChart = (data) => {
    return Highcharts.chart(data.name, {
        chart: {
            type: 'pie'
        },
        title: {
            text: null
        },
        legend: {
            itemWidth: 100,
            align: 'left',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 0,
            y: 50
        },
        series: data.series,
        plotOptions: {
            pie: {
                size: '80rem',
                innerSize: '40%',
                center: [0, 50],
                dataLabels: {
                    enabled: false
                }
            }
        }

    });
}


let contracts = [
    {
        mac: '58-90-77-22-75-5C',
        id: '54867972',
        city: 'Budapest'
    },
    {
        mac: '5A-3D-30-13-8F-15',
        id: '31495080',
        city: 'Budapest'
    },
    {
        mac: 'A3-43-AE-41-2E-D7',
        id: '31452503',
        city: 'Budapest'
    },
    {
        mac: 'B6-06-F6-C7-D5-04',
        id: '79238775',
        city: 'Budapest'
    },
    {
        mac: '9D-01-4A-A4-CB-91',
        id: '39531833',
        city: 'Budapest'
    },
    {
        mac: 'D7-C4-71-4A-47-35',
        id: '33992438',
        city: 'Budapest'
    },
    {
        mac: '0D-D3-6B-05-86-59',
        id: '93603004',
        city: 'Budapest'
    },
];


let autocomplete = new autoComplete({
    selector: 'input[name="contract"]',
    minChars: 2,
    source: (term, suggest) => {
        term = term.toLowerCase();
        let choices = contracts;
        let matches = [];
        choices.forEach(element => {
            if (~element.id.toLowerCase().indexOf(term)) {
                matches.push(element.id);
            }
            suggest(matches);
        });
    },
    onSelect: (evt, term, item) => {
        contracts.forEach(element => {
            if (element.id === term) {
                document.getElementById('mac').value = element.mac;
                document.getElementById('mac').style.color = 'black';
            }
        });
    }
});

let tabs = document.getElementsByClassName('tab');

Array.from(tabs).forEach(element => {
    element.addEventListener('click', (event) => {
        Array.from(tabs).forEach(element => {
            element.classList.remove('tab-active');
        });
        event.target.classList.add('tab-active');
    });
});

let validate = () => {
    validateMacAddress(document.getElementById('mac'));
};

let validateMacAddress = (address) => {
    let regExp = '^((([a-fA-F0-9][a-fA-F0-9]+[-]){5}|([a-fA-F0-9][a-fA-F0-9]+[:]){5})([a-fA-F0-9][a-fA-F0-9])$)|(^([a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9]+[.]){2}([a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9]))$/g';
    if (!address.value.match(regExp)) {
        document.getElementById('mac').style.color = 'red';
        address.focus();
        return false;
    }

    if (contracts.find(element => element.mac === address.value)) {
        document.getElementById('mac').style.color = 'black';
        address.blur();
        showData();
        return true;
    }
}

document.getElementById('apply').addEventListener('click', validate);

const showExport = () => {
    console.log('clck');
}

const reloadData = (evt) => {
    console.log(document.getElementById(evt.target.id).classList.contains('two-side-pill-active'));
    if (evt.target.id === 'showDay') {
        document.getElementById('showDay').classList.add('two-side-pill-active');
        document.getElementById('showWeek').classList.remove('two-side-pill-active');
    }

    if (evt.target.id === 'showWeek') {
        document.getElementById('showWeek').classList.add('two-side-pill-active');
        document.getElementById('showDay').classList.remove('two-side-pill-active');
    }

    if (document.getElementById('tables').classList.contains('tab-active')) {
        document.getElementById('show-tables').style.display = 'none';
        setTimeout(() => showTables(), 200);
    }

    if (document.getElementById('graphs').classList.contains('tab-active')) {
        document.getElementById('show-graphs').style.display = 'none';
        setTimeout(() => showGraphs(), 100);
    }
}

let showData = () => {
    document.getElementById('apply').removeEventListener('click', validate);
    document.getElementById('showDay').addEventListener('click', reloadData);
    document.getElementById('showWeek').addEventListener('click', reloadData);

    document.getElementById('inputs').classList.add('invisible');
    document.getElementById('inputs').classList.add('inputs-invisible');
    document.getElementById('inputs').classList.remove('inputs');

    document.getElementById('current-data').classList.remove('current-data-invisible');
    document.getElementById('current-data').classList.remove('invisible');
    document.getElementById('current-data').classList.add('visible');

    document.getElementById('current-mac-address').innerText = document.getElementById('mac').value;

    if (document.getElementById('contractId').value === '') {
        const contract = contracts.find(element => element.mac === document.getElementById('mac').value);
        document.getElementById('current-contract-id').innerText = contract.id;
        document.getElementById('current-contract-city').innerText = getCityByContractId(contract.id);
    } else {
        document.getElementById('current-contract-city').innerText = getCityByContractId(document.getElementById('contractId').value);
        document.getElementById('current-contract-id').innerText = document.getElementById('contractId').value;
    }

    document.getElementById('tables').addEventListener('click', showTables);
    document.getElementById('graphs').addEventListener('click', showGraphs);
    document.getElementById('hgw-pill').addEventListener('click', showHgwInfoCard);

    showGraphs();
};


const getCityByContractId = (contractId) => {
    return contracts.find((element) => element.id === contractId).city;
};

let resetData = () => {
    document.getElementById('inputs').classList.remove('invisible');
    document.getElementById('inputs').classList.remove('inputs-invisible');
    document.getElementById('inputs').classList.add('visible');
    document.getElementById('inputs').classList.add('inputs');

    document.getElementById('current-data').classList.remove('visible');
    document.getElementById('current-data').classList.add('invisible');
    document.getElementById('current-data').classList.add('current-data-invisible');

    document.getElementById('mac').value = '';
    document.getElementById('contractId').value = '';

    document.getElementById('show-graphs').style.display = 'none';
    document.getElementById('show-tables').style.display = 'none';

    document.getElementById('apply').addEventListener('click', validate);
    document.getElementById('tables').removeEventListener('click', showTables);
    document.getElementById('graphs').removeEventListener('click', showGraphs);
    document.getElementById('hgw-pill').removeEventListener('click', showHgwInfoCard);
};

let reset = document.getElementById('reset-filters').addEventListener('click', resetData);

let showTables = () => {
    chartPies.forEach(element => createPieChart(element));
    document.getElementById('show-tables').style.display = 'block';
    document.getElementById('tables').classList.add('tab-active');
    document.getElementById('show-graphs').style.display = 'none';
    document.getElementById('graphs').classList.remove('tab-active');
}

const showGraphs = () => {
    charts.forEach(element => createChart(element));
    document.getElementById('show-graphs').style.display = 'block';
    document.getElementById('graphs').classList.add('tab-active');
    document.getElementById('show-tables').style.display = 'none';
    document.getElementById('tables').classList.remove('tab-active');
};

const showHgwInfoCard = () => {
    const infoCard = document.getElementById('hgw-info');
    const iconHolder = document.getElementById('hgw-info-icon');
    const icon = document.getElementById('hgw-icon');

    console.log(iconHolder.classList.contains('hgw-pill-active'));

    if (iconHolder.classList.contains('hgw-pill-active')) {
        icon.innerText = 'keyboard_arrow_down';
        iconHolder.classList.remove('hgw-pill-active');
        infoCard.style.visibility = 'hidden';
    } else {
        icon.innerText = 'keyboard_arrow_up';
        iconHolder.classList.add('hgw-pill-active');
        infoCard.style.visibility = 'visible';
    }
}

