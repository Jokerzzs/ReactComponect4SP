export default class PaginationSearch extends React.Component {
    constructor(props){
        super(props);
        this.state={
            droplistOpen:false
        }
    }

    selectOption(value){
        this.refs.selectInput.value = value;
        this.setState({droplistOpen:false});
        this.props.searchFun(value,this.refs.searchInfo.value);
    }

    searchClick(){
        this.props.searchFun(this.refs.selectInput.value,this.refs.searchInfo.value);
    }

    clearSearchClick(){
        this.props.searchFun(this.refs.selectInput.value,'');
    }

    showList(){
        this.setState({droplistOpen:!this.state.droplistOpen});
    }

    createList(){
        var items = [{value:'Pending'},{value:'Approved'},{value:'Rejected'}]
        var reactThis = this;
        var dropList = items.map((item,index)=>{
            return <div key={"select"+index} onClick={this.selectOption.bind(reactThis,item.value)}>
                        {item.value}
                    </div>
        })
        return dropList;
    }
   
    enterSearch(e) {
        if (!e) {
            e = window.event;
        }
        if ((e.keyCode || e.which) == 13) {
            this.props.searchFun(this.refs.selectInput.value,this.refs.searchInfo.value);
        }
    }

    render(){
        let {dropdown,searchFun,hasDrop} = this.props;
        let searchDrop = hasDrop?<div className="acs-searchpanel-dropdown">
                                    <div className="acs-dropdown-selectedvalue"><input ref="selectInput"  placeholder="Status" disabled="disabled"/><span onClick={this.showList.bind(this)}>v</span></div>
                                    <div className="acs-dropdown-list" style={{height:this.state.droplistOpen?"auto":"0"}}>
                                        {listItems}
                                    </div>
                                </div>:null;
        let listItems = this.createList();
        
        return <div className="acs-searchpanel">
                    {searchDrop}
                    <div ref="searchInput" className={hasDrop?"acs-searchpanel-div":"acs-searchpanel-divsec"}>
                        <input type="text" ref="searchInfo" onKeyDown={this.enterSearch.bind(this,event)} placeholder="Search"/>
                        <span id="searchinput" className="acs-searchicon" onClick={this.searchClick.bind(this)}  ></span>
                        <span id="clearsearch" className="acs-clearsearchicon" onClick={this.clearSearchClick.bind(this)}>X</span>
                    </div>
                </div>
    }

}
