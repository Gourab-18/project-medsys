import React from "react";
import SideBar from '../Sidebar/SideBar'
import Profile from "../../pages/Profile";
import CompletedWork from "../../pages/CompletedWork"
import PendingWork from "../../pages/PendingWork"

function Dashboard() {
    return (
        <div className="flex">
            <SideBar />
            <div className="w-5/6 mx-auto">
                <Profile/>
            </div>
        </div>

    )
}

export default Dashboard