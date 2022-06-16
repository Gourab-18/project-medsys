import React from "react";
import SideBar from '../Sidebar/SideBar'
import Profile from "../../pages/Profile";
import CompletedWork from "../../pages/CompletedWork"
import PendingWork from "../../pages/PendingWork"
import DocumentCompany from "../../pages/DocumentsCompany"
import DocumentTrust from "../../pages/DocumentsTrust"
import Quotation from "../../pages/Quotation"

function Dashboard() {
    return (
        <div className="flex">
            <SideBar />
            <div className="w-5/6 mx-auto">
                <CompletedWork/>
            </div>
        </div>

    )
}

export default Dashboard