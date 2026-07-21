import { useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout";
import ReportsToolbar from "../../components/admin/ReportsToolbar";
import ReportsTable from "../../components/admin/ReportsTable";
import ReportDetailsModal from "../../components/admin/ReportDetailsModal";
import ResolveReportModal from "../../components/admin/ResolveReportModal";
import DismissReportModal from "../../components/admin/DismissReportModal";
import { dummyReports } from "../../constants/admin";

const Reports = () => {

    const [reports] = useState(dummyReports);
    const [selectedReport, setSelectedReport] = useState(null);

    const [showDetails, setShowDetails] = useState(false);

    const [showResolve, setShowResolve] = useState(false);

    const [showDismiss, setShowDismiss] = useState(false);
    return (

        <AdminLayout>

            <div className="space-y-8">

                <div>

                    <h1
                        className="
                            text-4xl
                            font-heading
                            font-bold
                            text-secondary
                        "
                    >

                        Reports

                    </h1>

                    <p className="mt-2 text-gray600">

                        Review reports submitted by users.

                    </p>

                </div>

                <ReportsToolbar />

                <ReportsTable

                    reports={reports}

                    onView={(report)=>{

                        setSelectedReport(report);

                        setShowDetails(true);

                    }}

                    onResolve={(report)=>{

                        setSelectedReport(report);

                        setShowResolve(true);

                    }}

                    onDismiss={(report)=>{

                        setSelectedReport(report);

                        setShowDismiss(true);

                    }}

                />

                <ReportDetailsModal

                    open={showDetails}

                    report={selectedReport}

                    onClose={()=>setShowDetails(false)}

                    onResolve={() => {

                        setShowDetails(false);

                        setShowResolve(true);

                    }}

                    onDismiss={() => {

                        setShowDetails(false);

                        setShowDismiss(true);

                    }}

                />

                <ResolveReportModal

                    open={showResolve}

                    report={selectedReport}

                    onClose={()=>setShowResolve(false)}

                    onResolve={(notes)=>{

                        console.log(notes);

                        setShowResolve(false);

                    }}

                />

                <DismissReportModal

                    open={showDismiss}

                    report={selectedReport}

                    onClose={()=>setShowDismiss(false)}

                    onDismiss={(reason)=>{

                        console.log(reason);

                        setShowDismiss(false);

                    }}

                />

            </div>

        </AdminLayout>

    );

};

export default Reports;
