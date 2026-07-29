import Button from "../ui/Button";
import { Database, Download, FileArchive } from "lucide-react";

const BackupSettings = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-secondary">Database Backup</h3>

          <p className="text-gray500">Export all platform data.</p>
        </div>

        <Button variant="outline" className="gap-2">
          <Database size={18} />
          Export Database
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-secondary">Resources Backup</h3>

          <p className="text-gray500">Download uploaded resources metadata.</p>
        </div>

        <Button variant="outline" className="gap-2">
          <Download size={18} />
          Export Resources
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-secondary">System Logs</h3>

          <p className="text-gray500">Download server activity logs.</p>
        </div>

        <Button variant="outline" className="gap-2">
          <FileArchive size={18} />
          Download Logs
        </Button>
      </div>
    </div>
  );
};

export default BackupSettings;
