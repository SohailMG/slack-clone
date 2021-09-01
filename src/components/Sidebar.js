import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import styled from 'styled-components';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                {/* Left side of header */}
                <SidebarInfo>
                    <h2>My Slack App</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Sohail Gsais
                    </h3>

                </SidebarInfo>
                {/* Right side of header */}
                <CreateIcon/>

            </SidebarHeader>
            
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color:var(--slack-color);
    color: white;
    flex:0.3;
    border-top: 1px solid #49274b;
    max-width:260px;
    margin-top: 60px;

`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding:13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color:#49274b;
        font-size:18px;
        background-color: white;
        border-radius: 999px;
    }
`;
const SidebarInfo = styled.div`
    flex: 1;

    >h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom:5px;

    }
    > h3{
        display:flex;
        font-size:13px;
        align-items: center;
        font-weight:400;
    }
    >  h3 > .MuiSvgIcon-root{
        color:green;
        font-size:14px;
        margin-top:1px;
        margin-right:2px;
        
    }

    `