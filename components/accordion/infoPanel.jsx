export default class DivisionDetail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        if(this.props.infoData === null){
            return null;
        }
        else{
            return(
                <div className="acs-infopanel" style={{display:!this.props.hasPanel?'none':'block'}}>
                    <div className="acs-infopanel-head">
                        <div className="acs-infohead-commontitle">{this.props.commonTitle}</div>
                        <div className="acs-infohead-titlecontent">
                           <div className="acs-infohead-title">{this.props.infoData.Title}</div>
                           <div className="acs-infohead-description">{this.props.infoData.Description}</div>  
                        </div>
                        
                    </div>
                   {this.props.children}
                    <div className="acs-jumplink"><div></div><a className="" href={this.props.infoData.Url}>{this.props.commonDes}</a></div>
                    
                </div>
            )
        }
    }
}