import { render } from 'react-dom';
import PaginationFrame from '../../components/pagination/paginationFrame.jsx';
import LetterSearchFrame from '../../components/pagination/letterSearchFrame.jsx';
import TableListFrame from '../../components/table/table.jsx';
import TableWithCheckboxFrame from '../../components/table/tableWithCheckbox.jsx';
import TableBulk from '../../components/table/tableBulk.jsx';

import StringCell from '../../components/table/stringCell.jsx';
import ServiceItem from '../../components/table/serviceItem.jsx';
import LyncItem from '../../components/table/lyncHeadCell.jsx';
import DocumentItem from '../../components/table/documentItem.jsx';
import SiteItem from '../../components/table/siteItem.jsx';
import CheckboxCell from '../../components/table/checkboxCell.jsx';

import $ from 'jquery';

function serviceRequestTypeRender(config) {
    const serviceData=[
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData15'},{href:'',value:'itemData16'}]}
        ];

    let param = { };

    function renderUI(data) {
        let serviceType = data.map((item,index)=>{
            return <div className="acs-servicerequest-type" key={"servicetype"+index}>
                        <PaginationFrame hasTitle={true} hasSearch={false} config={{data:item.Items,pageSize:5,frameTitle:item.Title}} hasTurning={false}>
                            <TableBulk columnCount={2} listData={item.Items}>
                                <ServiceItem></ServiceItem>
                            </TableBulk>
                        </PaginationFrame>
                    </div>
        });

        if (document.getElementById(config.divId)) {
            render(
                <div>
                    {serviceType}
                </div>,
                document.getElementById(config.divId)
            );
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            cache:false,
            config: param,
            async: false,
            success: function (dataInput) {
                renderUI(dataInput);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    if (config && !config.debug) {
        loadData(param);
    }
    else {
        renderUI(serviceData);
    }
}
global.serviceRequestTypeRender = serviceRequestTypeRender;


function tableListRender(config){
    const tempConfig = {
        pageSize: 5,
        divId: 'tablelist',
        tableTitle:'',
        hasPagination: true,
        hasSearch: true,
        hasTitle: false,
        canChangeSize:true,
        hasCheckbox:true,
        data :{
                Header:[{Key:'RequestType',Value:"Request Type"},{Key:'RequestDate',Value:"Request Date"},{Key:'Status',Value:"Status"},
                {Key:'ProcessedBy',Value:"Processed By"},{Key:'ProcessedDate',Value:"Processed Date"}],
                Items:[
                { 'RequestType': '1', 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/10211' },
                { 'RequestType': '2', 'RequestDate': '9/3/1021', 'Status': 'Pending', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/1021' },
                { 'RequestType': '3', 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/10421' },
                { 'RequestType': '4', 'RequestDate': '9/3/1021', 'Status': 'Closed', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/1021' },
                { 'RequestType': '5', 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/5/1021' },
                { 'RequestType': '6', 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/1/1021' }]
            } 
    }

    let param = null;
    function renderUI(data) {
        let cellArrary =data.Header.map((item,index)=>{
            return <StringCell itemData={null} key={"head"+index}></StringCell>
        })
        let table1 = <TableListFrame hasOrder={config.hasOrder} titleData={data.Header}  listData={data.Items}>{cellArrary}</TableListFrame>;
        let table2 = <TableWithCheckboxFrame hasOrder={config.hasOrder} titleData={data.Header}  listData={data.Items}><CheckboxCell></CheckboxCell>{cellArrary}</TableWithCheckboxFrame>;
        let tempTable = config.hasCheckbox?table2:table1;

        if (document.getElementById(config.divId)) {
            render(
                <PaginationFrame canChangeSize={config.canChangeSize} hasTitle={false} hasSearch={config.hasSearch} 
                    config={{data:data.Items,pageSize:config.pageSize,frameTitle:config.tableTitle,dropList:config.dropList}} hasTurning={config.hasPagination}>
                   {tempTable}
                </PaginationFrame>,
                document.getElementById(config.divId)
            );
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            cache:false,
            config: param,
            async: false,
            success: function (dataInput) {
                renderUI(dataInput);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    if (config && !config.debug) {
        loadData(param);
    }
    else {
        renderUI(config.data);
    }
}
global.tableListRender = tableListRender;


function serviceLyncListRender(config) {
    const serviceData=[
        {Email:"test1",ItemId:1,Photo:'Ddd',Name:'Sdds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'ddds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'Fdd',Name:'Ddds',Department:'Acss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'ddds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'}];

    let param = { };

    function renderUI() {
        config.data.map((item,index)=>{
            item.ItemId = index;
        })
        if (document.getElementById(config.divId)) {
            render(
                <PaginationFrame hasLetterSearch={true} hasTitle={true} hasSearch={false} config={{data:config.data,pageSize:6,frameTitle:config.Title}} hasTurning={true}>
                    <TableBulk columnCount={2} listData={config.data}>
                        <LyncItem itemData={null}></LyncItem>
                    </TableBulk>   
                </PaginationFrame>,
                document.getElementById(config.divId)
            );
            setStatus();
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            config: param,
            cache:false,
            async: false,
            success: function (dataInput) {
                config.data = dataInput;
                renderUI();
            },
            error: function (data) {

            }
        });
    }

    if (config.loadData && !config.debug) {
        loadData(param);
    }
    else {
        renderUI();
    }
}
global.serviceLyncListRender = serviceLyncListRender;


function itemListRender(config) {
    const serviceData=[{Href:'http://www.baidu.com',Value:'itemData1'},{Href:'http://www.baidu.com',Value:'itemData1'},
    {Href:'http://www.baidu.com',Value:'itemData13'},{Href:'http://www.baidu.com',Value:'itemData14'},
    {Href:'http://www.baidu.com',Value:'itemData15'},{Href:'http://www.baidu.com',Value:'itemData16'}];

    let param = { };

    function renderUI() {
        let item = config.itemType === 'site'?<SiteItem></SiteItem>:<DocumentItem></DocumentItem>;
        if (document.getElementById(config.divId)) {
            render(
               <PaginationFrame searchInBack={config.searchInBack} hasTitle={true} hasSearch={false} 
                config={{data:config.data,pageSize:config.pageSize,frameTitle:config.Title,totalCount:config.totalCount}} hasTurning={true}>
                    <TableBulk columnCount={1} listData={config.data}>
                        {item}
                    </TableBulk>
                </PaginationFrame>,
                document.getElementById(config.divId)
            );
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            cache:false,
            config: param,
            async: false,
            success: function (dataInput) {
                config.data = dataInput;
                renderUI();
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    if (config.loadData && !config.debug) {
        loadData(param);
    }
    else {
        renderUI();
    }
}
global.itemListRender = itemListRender;

function setStatus(){
    let imgs = document.getElementsByClassName('ms-spimn-img');
    for(var i=imgs.length-1;i>-1;i--){
        imgs[i].setAttribute('sip',imgs[i].getAttribute('data-sip'));
    }
    ProcessImn();
}